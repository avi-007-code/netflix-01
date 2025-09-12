const { prisma }= require('../utils/dbConnector');


exports.viewAllUsers =  async (req,res)=> {
    try {
        const users = await prisma.user.findMany({})
        res.status(200).send({status:true,data:users})
    } catch (error) {
        console.log(error.message)
        res.status(400).send({status:false,message:error.message})       
    }
    
}

exports.addMovie = async (req, res) => {
  try {
    const { title, desc, year, url, bannerUrl, rating, genreId } = req.body;

    const movie = await prisma.movies.create({
      data: {
        title,
        desc,
        year,
        url,
        bannerUrl,
        rating,
        genre: { connect: { id: genreId } }, // connect to existing genre
      },
      include: { genre: true },
    });

    res.send({ message: "Movie added successfully", movie });
  } catch (err) {
    res.status(500).send({ error: err.message });
  }
};

exports.addGenre = async (req, res) => {
  try {
    const { name } = req.body;
    const genre = await prisma.genre.create({
      data: { name },
    });
    res.status(201).send({ message: "Genre created successfully", genre });
  } catch (err) {
    res.status(500).send({ error: err.message });
  }
};

exports.viewGenre = async (req, res) => {
  try {
    const genres = await prisma.genre.findMany({});
    res.status(200).send({status:true,data:genres});
  } catch (error) {
    console.error(error);
    res.status(500).send({ message: 'Error retrieving genres' });
  }
};

exports.viewMovies = async (req, res) => {
  try {
    const movies = await prisma.movies.findMany({
      include: { genre: true }, // include genre details
    });

    res.send(movies);
  } catch (err) {
    res.status(500).send({ error: err.message });
  }
};

exports.editMovie = async (req, res) => {
  try {
    const { id, title, desc, year, url, bannerUrl, rating, genreId } = req.body;

    const movie = await prisma.movies.update({
      where: { id },
      data: {
        title,
        desc,
        year,
        url,
        bannerUrl,
        rating,
        genre: genreId ? { connect: { id: genreId } } : undefined,
      },
      include: { genre: true },
    });

    res.send({ message: "Movie updated successfully", movie });
  } catch (err) {
    res.status(500).send({ error: err.message });
  }
};

exports.deleteMovie = async(req,res) =>{
  try {
    const {id} = req.body
    const deleteMovie = await prisma.movies.delete({
      where:{id:id},
    });

    res.status(200).send({ message: "Movie deleted successfully",deleteMovie})
  } catch (error) {
    res.status(500).send({error: error.message})
  }
}

exports.deleteGenre = async(req,res) =>{
  try {
    const {id} = req.body
    const deleteGenre = await prisma.genre.delete({
      where:{id:id},
    });

    res.status(200).send({ message: "Genre deleted successfully",deleteGenre})
  } catch (error) {
    res.status(500).send({error: error.message})
  }
}

exports.MovieByGenre = async (req, res) => {
  const { genreId } = req.params;
  try {
    const movies = await prisma.movies.findMany({
      where: {
        genreId: parseInt(genreId),
      },
    });
    res.status(200).json(movies);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Failed to fetch movies' });
  }
}



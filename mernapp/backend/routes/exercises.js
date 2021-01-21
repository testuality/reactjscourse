const router = require("express").Router();
let Exercise = require("../model/exercise.model");

router.route("/").get((req, res) => {
    Exercise.find()
        .then(exercises => res.json(exercises))
        .catch(err => res.status(400).json("Error: " +err));
});

router.route("/add").post((req, res) => {
    const username = req.body.username;
    const description = req.body.description;
    const duration = new Number(req.body.duration);
    const date = Date.parse(req.body.date);

    const newExercise = new Exercise(
        {
            username,
            description,
            duration,
            date
        }
    );

    newExercise.save()
        .then(() => res.json("Exercise added"))
        .catch(err => res.status(400).json(("Error " + err)));
});


router.route("/:id").get((req, res) => {
    console.log("Consultar ejercicio id ", req.params.id);
    Exercise.findById(req.params.id)
        .then(exercise => res.json(exercise))
        .catch(error => res.status(400).json("Error: " + error));
});

router.route("/:id").delete((req, res) => {
    console.log("Borrar ejercicio id ", req.params.id);
    Exercise.findByIdAndDelete(req.params.id)
        .then(exercise => res.json("Exercise deleted id " + exercise._id))
        .catch(error => res.status(400).json("Error: " + error));
});

router.route("/update/:id").post((req, res) => {
    console.log("Actualizar ejercicio id ", req.params.id);
    Exercise.findById(req.params.id)
        .then(exercise => {
            exercise.username = req.body.username;
            exercise.description = req.body.description;
            exercise.duration = Number(req.body.duration);
            exercise.date = Date.parse(req.body.date);

            exercise.save()
                .then(() => res.json("Exercise updated " + exercise._id))
                .catch(error => res.status(400).json("Error " + error));
        })
        .catch(error => res.status(400).json("Error: " + error));
});
module.exports = router;
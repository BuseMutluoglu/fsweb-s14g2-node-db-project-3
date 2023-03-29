// ESNEK
const defaultCars = [
  {
    vin: "123",
    make: "Volkswagen",
    model: "Golf",
    mileage: 12345,
  },
  {
    vin: "124",
    make: "Audi",
    model: "A4",
    mileage: 12346,
  },
  {
    vin: "125",
    make: "Skoda",
    model: "Actavia",
    mileage: 12347,
  },
  {
    vin: "126",
    make: "Seat",
    model: "Leon",
    mileage: 12348,
  },
  {
    vin: "127",
    make: "Mercedes",
    model: "C180",
    mileage: 12349,
  },
];

exports.seed = async function (knex) {
  await knex("cars").truncate();
  await knex("cars").insert(defaultCars);
};

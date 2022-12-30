import { DataTypes } from "sequelize";
import db from "../config/Databases.js";

const Item = db.define("01_item", {
  uid: {
    type: DataTypes.UUID,
    defaultValue: DataTypes.UUIDV4,
  },
  no_operasi: {
    type: DataTypes.STRING,
  },
  nameFile: {
    type: DataTypes.STRING,
  },
  isFinish: {
    type: DataTypes.BOOLEAN,
  },
  date_changed: {
    type: DataTypes.DATE,
  },
  date: {
    type: DataTypes.STRING,
  },
  time_prod: {
    type: DataTypes.STRING,
    defaultValue: 0,
  },
  cycle_time: {
    type: DataTypes.STRING,
  },
  total_product: {
    type: DataTypes.INTEGER,
  },
  p1_dimension: {
    type: DataTypes.STRING,
  },
  p1_tolerance: {
    type: DataTypes.STRING,
  },
  p1_dimension_min: {
    type: DataTypes.STRING,
  },
  p1_dimension_max: {
    type: DataTypes.STRING,
  },
  p1_actual: {
    type: DataTypes.STRING,
  },
  p1_deviasi: {
    type: DataTypes.STRING,
  },
  p2_dimension: {
    type: DataTypes.STRING,
  },
  p2_tolerance: {
    type: DataTypes.STRING,
  },
  p2_dimension_min: {
    type: DataTypes.STRING,
  },
  p2_dimension_max: {
    type: DataTypes.STRING,
  },
  p2_actual: {
    type: DataTypes.STRING,
  },
  p2_deviasi: {
    type: DataTypes.STRING,
  },
  p3_dimension: {
    type: DataTypes.STRING,
  },
  p3_tolerance: {
    type: DataTypes.STRING,
  },
  p3_dimension_min: {
    type: DataTypes.STRING,
  },
  p3_dimension_max: {
    type: DataTypes.STRING,
  },
  p3_actual: {
    type: DataTypes.STRING,
  },
  p3_deviasi: {
    type: DataTypes.STRING,
  },
  status: {
    type: DataTypes.STRING,
  },
  isAccept: {
    type: DataTypes.BOOLEAN,
  },
});

export default Item;

(async () => {
  await db.sync();
})();

const router = require("express").Router();
const {
  create_user_controller,
  find_all_users_controller,
  get_update_form,
  update_user_controller,
  delete_user_controller,
} = require("../controllers/user_controllers");

router.post("/create", create_user_controller);
router.get("/", find_all_users_controller);
router.get("/update_form/:id", get_update_form);
router.patch("/update/:id", update_user_controller);
router.delete("/delete/:id", delete_user_controller);

module.exports = router;
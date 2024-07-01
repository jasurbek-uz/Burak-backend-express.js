console.log("Users frontend javascript file");

$(function () {
  $(".member-status").on("change", function (e) {
    const id = e.target.id;
    console.log("id:", id);

    const memberStatus = $(`#${id}.member-status`).val();
    console.log("memberStatus:", memberStatus);

    // TODO: axios updatechosenUser
    axios.post("/admin/user/edit", {
      _id: id,
      memberStatus: memberStatus,
    })
      .then(response => {
        console.log("response:", response);
        const result = response.date;
        console.log("result:", result);
        if (result.data) {
          console.log("User update!");
          $(".member-status").blur();
        } else alert("User update failed!");
      })
      .catch(err => {
        console.log(err);
        alert("User update failed!");

      });
  });
});
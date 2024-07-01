console.log("Signup frontend javascript file");


$(function () {
	const fileTarget = $(".file-box .upload-hidden");
	let filename;

	fileTarget.on("change", function () {
		if (window.FileReader) {
			const uploadFile = $(this)[0].files[0];
			fileType = uploadFile["type"],
			validImageType = ["image/jpeg", "image/jpg", "image/png"];
			if (!validImageType.includes(fileType)) {
				alert("Please insert only jpeg, jpg and png!");
			} else {
				if (uploadFile) {
					console.log(URL.createObjectURL(uploadFile));
					$(".upload-img-frame")
						.attr("src", URL.createObjectURL(uploadFile))
						.addClass("sucess");
				}
				filename = $(this)[0].files[0].name;
			}
			$(this).siblings(".upload-name").val(filename);
		}
	});
});

function validateSignupForm() {
	const memberNick = $(".member-nick").val(),
	memberPhone = $(".member-phone").val(),
	memberPaswword = $(".member-password").val(),
	confirmPassword = $(".confirm-password").val();

	if (
		memberNick === "" ||
		memberPhone === "" ||
		memberPaswword === "" ||
		confirmPassword === ""
	) {
		alert("Please insert all required inputs");
		return false;
	}

	if (memberPaswword !== confirmPassword) {
		alert("Password differs, Please check!");
		return false;
	}

	const memberImage = $(".member-image").get(0).files[0]
		? $(".member-image").get(0).files[0].name
		: null;
	if (!memberImage) {
		alert("Please insert restaurant image!");
		return false;
	}
}
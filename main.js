const EnglishViedoButton = document.querySelector(".video_btn_eng")
const ChineseViedoButton = document.querySelector(".video_btn_cn")
const ToeicViedoButton = document.querySelector(".video_btn_toeic")
const EnglishVideo = document.querySelector(".video_eng")
const ChineseVideo = document.querySelector(".video_cn")
const ToeicVideo = document.querySelector(".video_toeic")
const Videos = document.querySelectorAll(".videos")
const VideoButtons = document.querySelectorAll(".video_btns")

EnglishViedoButton.addEventListener("click", () => {
	if (!EnglishVideo.classList.contains("show")) {
		Videos.forEach((video) => {
			video.classList.remove("show")
		})
		VideoButtons.forEach((button) => {
			button.classList.remove("current_button")
		})
		EnglishVideo.classList.add("show")
		EnglishViedoButton.classList.add("current_button")
	}
})

ChineseViedoButton.addEventListener("click", () => {
	if (!ChineseVideo.classList.contains("show")) {
		Videos.forEach((video) => {
			video.classList.remove("show")
		})
		VideoButtons.forEach((button) => {
			button.classList.remove("current_button")
		})
		ChineseVideo.classList.add("show")
		ChineseViedoButton.classList.add("current_button")
	}
})

ToeicViedoButton.addEventListener("click", () => {
	if (!ToeicVideo.classList.contains("show")) {
		Videos.forEach((video) => {
			video.classList.remove("show")
		})
		VideoButtons.forEach((button) => {
			button.classList.remove("current_button")
		})
		ToeicVideo.classList.add("show")
		ToeicViedoButton.classList.add("current_button")
	}
})

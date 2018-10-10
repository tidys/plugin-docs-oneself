const gulp = require('gulp');
const fs = require('fs');
const fse = require('fs-extra');
const path = require('path');
const ghPages = require('gh-pages');

gulp.task("部署GitHubPages", function () {

    let bookDir = path.join(__dirname, "../_book");
    if (fs.existsSync(bookDir)) {
        let options = {
            user: {
                name: "auto-xuyanfeng",
                email: "xu_yanfeng@126.com"
            },
            message: "GhPages自动部署"
        };
        ghPages.publish(bookDir, function (error) {
            debugger;
            if (error) {
                console.log(error);
                console.log("部署失败!");
            } else {
                console.log("部署完毕!");
            }
        });
    } else {
        console.log("未发现book目录,请先构建");
    }
});
# QR Promptpay Generator Project
CSOS KMITL Docker Project

## Project Member
- 65050767 นางสาว รุจณิชา เทียนงาม
- 65050774 นาย วชิรวิทย์ เจียมเอ๊ย
- 65050835 นางสาว วิมลสิริ อินยิน
- 65050859 นางสาว ศศิภรณ์ ฉัตรธงชัย
- 65050887 นางสาว ศุภรา สุวรรณทิพย์

## Requirement
- have [Docker](https://docs.docker.com/engine/install/) installed.

## How To Run Project

### Pull Docker Image
Open the command prompt and run this command
```bash
docker pull luxifearzz/os-promptpay-generator
```

<!--- comment
### Build Docker Image
Open the command prompt and go to the directory where this project file is. then run this command

```bash
docker build -t os-promptpay-generator .
```

*Note_1: "os-promptpay-generator" is a docker image name, feel free to change it to any name you want.*

*Note_2: don't forget "." at the end of the command!*
end comment --->

### Run Docker Image
after building the docker image, run this command to start the service.

```bash
docker run -d -p 3000:3000 luxifearzz/os-promptpay-generator
```

[comment]: <> (*Note: if you change the image name when building it. you must change it at this point to run too.*)

### Run Project File
open file "index.html" in ./frontend directory.

## How to use our service
- enter promptpay ID or phone number.
- enter the amount. (if don't want to specify the amount, enter 0 or leave it empty)
- click **Generate**.
- download image at **Download** button.

## Have Fun! :)

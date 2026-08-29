
# Student Registration CRUD API

## 1. Giới thiệu

Đây là bài tập thực hành kết nối cơ sở dữ liệu và thực hiện CRUD bằng Node.js, Express và MySQL.

Ứng dụng xây dựng API quản lý sinh viên trong hệ thống đăng ký môn học.

## 2. Mục tiêu

* Kết nối ứng dụng Node.js với MySQL.
* Xây dựng API sử dụng Express.
* Thực hiện đầy đủ các thao tác CRUD với đối tượng STUDENT.
* Kiểm tra API bằng Postman.

## 3. Công nghệ sử dụng

* Node.js
* TypeScript
* Express.js
* MySQL
* mysql2
* dotenv
* Postman

## 4. Cơ sở dữ liệu

Tên cơ sở dữ liệu:

```text
STUDENTSREG
```

Cơ sở dữ liệu gồm các bảng:

* TUTOR
* STUDENT
* MODULES
* STUDENT_ENROLEMENT
* TOPICS
* LEARN_PREFERENCE

Trong bài tập này, đối tượng được sử dụng để thực hiện CRUD là:

```text
STUDENT
```

## 5. Cấu trúc project

```text
HanG_WebNC/
├── src/
│   ├── database.ts
│   └── index.ts
├── STUDENTREG.sql
├── package.json
├── package-lock.json
├── tsconfig.json
├── .gitignore
└── README.md
```

## 6. Kết nối cơ sở dữ liệu

Thông tin kết nối MySQL được cấu hình bằng biến môi trường trong file `.env`.

File `.env` không được đưa lên GitHub để bảo vệ thông tin đăng nhập cơ sở dữ liệu.

Ví dụ cấu hình:

```text
DB_HOST=127.0.0.1
DB_USER=root
DB_PASSWORD=your_password
DB_NAME=STUDENTSREG
DB_PORT=3306
```

## 7. CRUD API

### CREATE - Thêm sinh viên

**POST**

```text
/api/students
```

Request body:

```json
{
  "sid": "2000",
  "sname": "Minh Hang Test",
  "email": "minhhang@test.com",
  "tutor_id": "1000"
}
```

### READ - Xem danh sách sinh viên

**GET**

```text
/api/students
```

### UPDATE - Cập nhật sinh viên

**PUT**

```text
/api/students/:id
```

Ví dụ:

```text
/api/students/2000
```

Request body:

```json
{
  "sname": "Minh Hang",
  "email": "hang@example.com",
  "tutor_id": "1001"
}
```

### DELETE - Xóa sinh viên

**DELETE**

```text
/api/students/:id
```

Ví dụ:

```text
/api/students/2000
```

## 8. Chạy project

Cài đặt dependencies:

```bash
npm install
```

Build TypeScript:

```bash
npm run build
```

Chạy server:

```bash
npm start
```

Server sử dụng port:

```text
9000
```

## 9. Kiểm tra API

API có thể được kiểm tra bằng Postman.

Các API CRUD đã được kiểm tra:

| Method | Endpoint            | Chức năng |
| ------ | ------------------- | --------- |
| GET    | `/api/students`     | Read      |
| POST   | `/api/students`     | Create    |
| PUT    | `/api/students/:id` | Update    |
| DELETE | `/api/students/:id` | Delete    |

## 10. File SQL

File `STUDENTREG.sql` chứa script tạo cơ sở dữ liệu, tạo bảng và dữ liệu mẫu được sử dụng trong bài tập.

## 11. Kết quả

Ứng dụng đã thực hiện thành công:

* Kết nối MySQL.
* CREATE sinh viên.
* READ danh sách sinh viên.
* UPDATE thông tin sinh viên.
* DELETE sinh viên.
* Kiểm tra CRUD bằng Postman.

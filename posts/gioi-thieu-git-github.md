---
title: "Cách sử dụng Git với Github"
subtitle: "Cách sử dụng cơ bản Git và giới thiệu đôi chút về Github."
date: "2023-06-02"
---

Xin chào các con nghiện, hôm này mình sẽ hướng dẫn các bạn cách sử dụng git cơ bản và giới thiệu sơ sơ qua về Github.

Trước tiên, download và install [git-scm](https://git-scm.com) để có thể thao tác được với Git. Và đăng ký tài khoản [Github](https://github.com/), cái này đối với các bạn quá easy rồi đúng không nào 🤭.

## Giới thiệu qua và giải thích về git, github
### Vậy Github là gì?
Là công cụ giúp quản lý source code tổ chức theo dạng dữ liệu phân tán, giúp đồng bộ source code của team lên 1 server.
- **Repository** (kho): là thư mục. Thư mục trên github.com gọi là **remote** (xa) repository (kho), còn ở máy tính là **local repository**.
- **Branch** (nhánh): có các nhanh như **main**, **master**, ..., làm xong sau này hộp lại (**merge**)
- **Remote** (máy chủ)
- **add** (thêm): sau khi làm gì đó thay đổi thì add (thêm) cái thay đổi đó vào
- **commit**: chốt thay đổi
- **pull** (kéo về): lấy code của người làm chung đã **push** (đẩy) lên.
- **push** (đẩy): đưa code lên remote repository, nghĩa là đẩy lên cho người khác kéo về (hoặc không)

## Đăng nhập tài khoản Github vào git
Tạo tài khoản Github (Không tạo được thì tự búng chym đi).

Mở Gitbash or Terminal lên:

```bash
git config --global user.name "username"
git config --global user.email "your_email@example.com"
```
Xong bước này và thực hiện đẩy code lên Github lần đầu bằng git, nó sẽ hiện ra trang đăng nhập Github. Đăng nhập vào là xong, xơi thôi!

## Các bước tạo Repository và đẩy code từ computer lên github
Tạo Repository ở trong Github (cái này không biết thì search google).

Open Terminal trong folder chứa code muốn up code lên Github.

Thực hiện các bước sau trong Terminal:

```bash
git remote -v   (Kiểm tra có remote của git chưa)
git init
git remote add origin link-reposit (Example: git remote add origin https://github.com/n2duc/exmaple.io)
git remove -v   (Kiểm tra lại xem có remote sau khi add chưa)
git add .
git commmit -m 'message'
git branch -m main
git push -u origin main
```
Done! Thế là dự án của bạn đã lên [Github](https://github.com/) rồi, thử check lại xem.

## Đẩy code sau khi sửa code
Open terminal:

```bash
git add .
git commit -m 'message'
git push -u origin
```

## Update (kéo code về) khi có người làm chung push code đã sửa lên
```bash
git pull origin main
```
> Lưu ý: Cái này tùy theo nhánh, ở trên là nhánh main (branch), có thể là nhánh master,... tùy theo người đặt

## Tạo branch (nhánh) mới
Trường hợp tạo xong rồi chuyển đổi từ nhánh hiện tại sang nhánh mới

```bash
git branch new_branch
git checkout new_branch
```
Trường hợp vừa tạo vừa chuyển nhánh

```bash
git checkout -b new_branch
```

### Lưu ý:
Nếu sau khi "git remote -v" có remote nào đó có sẵn thì xóa nó trước khi sử dụng "git remote add ...."

**Cách xóa**: 

```bash
git remote remove origin
```

Nếu xuất hiện cảnh báo khi "git add ."

> warning: LF will be replaced by CRLF in .gitignore.

> The file will have its original line endings in your working directory

**Cách tắt**: 

```bash
git config core.autocrlf false 
```

## Kết bài
Vậy qua bài viết này mình đã hướng dẫn các bạn sử dụng git một cách vô cùng đơn giản và dễ hiểu, mong các bạn không làm được đừng có bận tâm, hãy liên hệ với mình để được trợ giúp.
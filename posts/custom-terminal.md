---
title: "Custom Ternimal với Oh-my-posh"
subtitle: "Thay đổi giao diện terminal trở nên màu mè."
date: "2023-06-03"
---

## Giới thiệu

Bạn có muốn Terminal của mình pro ngầu lòi như này ?

![Terminal](/images/terminal-custom.png)

Và áp dụng luôn được cả cho VSCode

![VSCode-Terminal](/images/terminal-custom-vscode.png)

Thì hôm nay mình sẽ hướng dẫn các bạn thực hiện nó với các bước vô cùng đơn giản (theo mình nghĩ thế) và ít xảy ra lỗi nhất. Sau đây là cách mà mình tự custom Terminal cho riêng mình ( *Thực ra là theme có sẵn add vào* ) với [oh-my-posh](https://ohmyposh.dev), cách này chủ yếu là add thủ công nên việc xảy ra lỗi là vô cùng ít. Bắt đầu thôi nào :3

## Các bước cài đặt ban đầu

Để có thể cusom được Terminal thì các bạn phải cài đặt app **Terminal** từ **Microsoft Store**. Các bạn có thể tìm và cài đặt trực tiếp hoặc có thể vào [Microsoft Store](https://apps.microsoft.com/store/detail/windows-terminal/9N0DX20HK701?hl=vi-vn&gl=vn&icid=VN_UHF_Windows_2020) để cài đặt nhá. Quá đơn giản cho sự khởi đầu.

Bước tiếp theo, bạn cài Font [Caskaydia Cove Nerd](https://www.nerdfonts.com/font-downloads), bước cài đặt như cài font bình thường thôi.

> Cài đặt font này là để apply những cái icon trong Terminal như hình ảnh ở trên.

### Thiết lập font và theme Terminal

Sau khi đã cài đặt Terminal xong, các bạn mở Terminal lên -> vào Setting -> Chọn mục **Windows PowerShell** -> **Appearance** -> Chỉnh Font của PowerShell Thành "**CaskaydiaCove NF**".

![Setting](/images/setting-terminal.png)

Bước tiếp theo, mở Terminal Tab PowerShell (**Ctr+Shift+1**) và thực hiện các câu lệnh dưới đây:

```bash
winget install JanDeDobbeleer.OhMyPosh -s winget
```
Enter và đợi vài giây ( giây có thể tính được phút ) để nó cài đặt xong **oh-my-posh**.

Gõ tiếp cái này: 

```bash
notepad $profile 
```
Enter - Nó sẽ hiện ra 1 file notepad để mình config cái **oh-my-posh**. Việc bạn chỉ cần làm đó là copy và past dòng này vào đó và lưu lại.

```bash
oh-my-posh init pwsh --config "THEMES_PATH" | Invoke-Expression
```

> Lưu ý: Để ý cái "THEMES_PATH", đây là cái nơi để path theme custom lấy từ trên trang chủ của nó.

Xong, Reset lại Terminal sẽ thấy được 1 cái theme default của oh-my-posh rất củ chuối và bựa.

## Fix font của terminal trong VS Code

Sau khi cài đặt xong, thì ở phần terminal trong VSCode, các bạn mở terminal lên (default sẽ là powershell, nếu không phải bạn có thể chuyển qua powershell) sẽ thấy theme oh-my-posh ta vừa mới cài đặt nhưng bị lỗi font (Lỗi ở đây là lỗi icon bị đánh dấu **x**).

Đây là cách khắc phục lỗi đó:
- Mở setting của VSCode lên ( Ctrl + , ) -> Mở file setting.json (Ở góc trên cùng bên phải).
- Thêm 2 dòng này vào file setting.json:

```code
"terminal.integrated.fontFamily": "'CaskaydiaCove NF'",
"terminal.integrated.shellArgs.windows": "-nologo",
```
- Ctrl+S để lưu lại -> Mở lại tab mới terminal trong VS Code để xem thành quả

## Đổi Theme Terminal theo sở thích

Mình sẽ hướng dẫn các bạn kì thị cái theme mặc định của oh-my-posh và add các theme nó professional hơn.

Vào trang: https://ohmyposh.dev/docs/themes. Ở đây khi bạn lướt sẽ thấy rất nhiều theme có sẵn được các chuyên gia về thiết kế design, trông rất chi là đẹp mắt.

Chọn Theme muốn đổi, bấm vào ảnh hoặc tên -> Hiện ra trang Github nơi chưa file json theme.
![raw-json](/images/raw-json.png)
Các bạn chỉ cần tải file đó về và lưu ở một thư mục cố định và ghi nhớ đường dẫn của nó.

Sau khi các bạn tải về xong, làm theo các bước sau để đổi lại theme:

- Mở lại app Terminal -> Gõ: **notepad $profile**
- Đổi cụm THEMES_PATH nãy mình có nói thành địa chỉ lưu file theme oh-my-posh (cách lấy địa chỉ file các bạn chỉ cần chuột phải vào file đó và chọn **Copy as path**)

```bash
VD: oh-my-posh init pwsh --config "F:\theme-terminal\atomic.omp.json" | Invoke-Expression
```
- Lưu lại thay đổi file notepad -> Reset app Terminal và húp thôi.

## Kết lại

Vậy ở bài viết này mình đã hướng dẫn các bạn custom Terminal bằng oh-my-posh theo cách cài đặt thủ công. Ngoài cách này thì vẫn còn nhiều cách khác, nhưng trong quá trình mình làm thì gặp một số lỗi và sử dụng theo cách này là okela con dê nhất.

Chúc các bạn thành công trong việc tự custom Terminal của mình.

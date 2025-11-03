# 创建图片存储目录
$imageDir = "docs\public"
if (-not (Test-Path -Path $imageDir)) {
    New-Item -ItemType Directory -Path $imageDir
}

# 定义需要下载的图片URL和对应的文件名
$images = @()
for ($i = 1; $i -le 5; $i++) {
    $images += @{url = "https://picsum.photos/800/400?random=$i"; filename = "$i.jpg"}
}

# 下载图片
Write-Host "开始下载图片..."
foreach ($img in $images) {
    try {
        $filePath = Join-Path -Path $imageDir -ChildPath $img.filename
        Invoke-WebRequest -Uri $img.url -OutFile $filePath -TimeoutSec 10
        Write-Host "成功下载: $($img.filename)"
    } catch {
        Write-Host "下载失败: $($img.filename), 错误: $($_.Exception.Message)"
    }
}

Write-Host "图片下载完成!"
import os
import zipfile

dst = r'C:\Users\admin\AppData\Local\hermes\attachments\labada-pos-prototype.zip'
root = r'C:\Users\admin\labada-pos-prototype'

with zipfile.ZipFile(dst, 'w', zipfile.ZIP_DEFLATED) as zf:
    for dirpath, dirnames, filenames in os.walk(root):
        dirnames[:] = [d for d in dirnames if d not in ('node_modules', '.git', '.vite')]
        for f in filenames:
            if f.startswith('.'):
                continue
            fp = os.path.join(dirpath, f)
            zf.write(fp, os.path.relpath(fp, root))

print('zip written:', dst, os.path.getsize(dst), 'bytes')
with zipfile.ZipFile(dst) as z:
    for n in z.namelist():
        print('  ', n)

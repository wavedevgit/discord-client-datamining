package ne;

import java.io.File;
import java.io.FileInputStream;
import java.io.FileNotFoundException;
import java.io.FileOutputStream;
import java.io.IOException;
import java.io.InputStream;
import java.io.OutputStream;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class b {

    /* renamed from: a  reason: collision with root package name */
    private final File f38904a;

    /* renamed from: b  reason: collision with root package name */
    private final File f38905b;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    private static final class a extends OutputStream {

        /* renamed from: d  reason: collision with root package name */
        private final FileOutputStream f38906d;

        /* renamed from: e  reason: collision with root package name */
        private boolean f38907e = false;

        public a(File file) {
            this.f38906d = new FileOutputStream(file);
        }

        @Override // java.io.OutputStream, java.io.Closeable, java.lang.AutoCloseable
        public void close() {
            if (this.f38907e) {
                return;
            }
            this.f38907e = true;
            flush();
            try {
                this.f38906d.getFD().sync();
            } catch (IOException e10) {
                y.j("AtomicFile", "Failed to sync file descriptor:", e10);
            }
            this.f38906d.close();
        }

        @Override // java.io.OutputStream, java.io.Flushable
        public void flush() {
            this.f38906d.flush();
        }

        @Override // java.io.OutputStream
        public void write(int i10) {
            this.f38906d.write(i10);
        }

        @Override // java.io.OutputStream
        public void write(byte[] bArr) {
            this.f38906d.write(bArr);
        }

        @Override // java.io.OutputStream
        public void write(byte[] bArr, int i10, int i11) {
            this.f38906d.write(bArr, i10, i11);
        }
    }

    public b(File file) {
        this.f38904a = file;
        this.f38905b = new File(file.getPath() + ".bak");
    }

    private void e() {
        if (this.f38905b.exists()) {
            this.f38904a.delete();
            this.f38905b.renameTo(this.f38904a);
        }
    }

    public void a() {
        this.f38904a.delete();
        this.f38905b.delete();
    }

    public void b(OutputStream outputStream) {
        outputStream.close();
        this.f38905b.delete();
    }

    public boolean c() {
        if (!this.f38904a.exists() && !this.f38905b.exists()) {
            return false;
        }
        return true;
    }

    public InputStream d() {
        e();
        return new FileInputStream(this.f38904a);
    }

    public OutputStream f() {
        if (this.f38904a.exists()) {
            if (!this.f38905b.exists()) {
                if (!this.f38904a.renameTo(this.f38905b)) {
                    y.i("AtomicFile", "Couldn't rename file " + this.f38904a + " to backup file " + this.f38905b);
                }
            } else {
                this.f38904a.delete();
            }
        }
        try {
            return new a(this.f38904a);
        } catch (FileNotFoundException e10) {
            File parentFile = this.f38904a.getParentFile();
            if (parentFile != null && parentFile.mkdirs()) {
                try {
                    return new a(this.f38904a);
                } catch (FileNotFoundException e11) {
                    throw new IOException("Couldn't create " + this.f38904a, e11);
                }
            }
            throw new IOException("Couldn't create " + this.f38904a, e10);
        }
    }
}

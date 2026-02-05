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
    private final File f39501a;

    /* renamed from: b  reason: collision with root package name */
    private final File f39502b;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    private static final class a extends OutputStream {

        /* renamed from: d  reason: collision with root package name */
        private final FileOutputStream f39503d;

        /* renamed from: e  reason: collision with root package name */
        private boolean f39504e = false;

        public a(File file) {
            this.f39503d = new FileOutputStream(file);
        }

        @Override // java.io.OutputStream, java.io.Closeable, java.lang.AutoCloseable
        public void close() {
            if (this.f39504e) {
                return;
            }
            this.f39504e = true;
            flush();
            try {
                this.f39503d.getFD().sync();
            } catch (IOException e10) {
                y.j("AtomicFile", "Failed to sync file descriptor:", e10);
            }
            this.f39503d.close();
        }

        @Override // java.io.OutputStream, java.io.Flushable
        public void flush() {
            this.f39503d.flush();
        }

        @Override // java.io.OutputStream
        public void write(int i10) {
            this.f39503d.write(i10);
        }

        @Override // java.io.OutputStream
        public void write(byte[] bArr) {
            this.f39503d.write(bArr);
        }

        @Override // java.io.OutputStream
        public void write(byte[] bArr, int i10, int i11) {
            this.f39503d.write(bArr, i10, i11);
        }
    }

    public b(File file) {
        this.f39501a = file;
        this.f39502b = new File(file.getPath() + ".bak");
    }

    private void e() {
        if (this.f39502b.exists()) {
            this.f39501a.delete();
            this.f39502b.renameTo(this.f39501a);
        }
    }

    public void a() {
        this.f39501a.delete();
        this.f39502b.delete();
    }

    public void b(OutputStream outputStream) {
        outputStream.close();
        this.f39502b.delete();
    }

    public boolean c() {
        if (!this.f39501a.exists() && !this.f39502b.exists()) {
            return false;
        }
        return true;
    }

    public InputStream d() {
        e();
        return new FileInputStream(this.f39501a);
    }

    public OutputStream f() {
        if (this.f39501a.exists()) {
            if (!this.f39502b.exists()) {
                if (!this.f39501a.renameTo(this.f39502b)) {
                    y.i("AtomicFile", "Couldn't rename file " + this.f39501a + " to backup file " + this.f39502b);
                }
            } else {
                this.f39501a.delete();
            }
        }
        try {
            return new a(this.f39501a);
        } catch (FileNotFoundException e10) {
            File parentFile = this.f39501a.getParentFile();
            if (parentFile != null && parentFile.mkdirs()) {
                try {
                    return new a(this.f39501a);
                } catch (FileNotFoundException e11) {
                    throw new IOException("Couldn't create " + this.f39501a, e11);
                }
            }
            throw new IOException("Couldn't create " + this.f39501a, e10);
        }
    }
}

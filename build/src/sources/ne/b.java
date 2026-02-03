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
    private final File f40041a;

    /* renamed from: b  reason: collision with root package name */
    private final File f40042b;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    private static final class a extends OutputStream {

        /* renamed from: d  reason: collision with root package name */
        private final FileOutputStream f40043d;

        /* renamed from: e  reason: collision with root package name */
        private boolean f40044e = false;

        public a(File file) {
            this.f40043d = new FileOutputStream(file);
        }

        @Override // java.io.OutputStream, java.io.Closeable, java.lang.AutoCloseable
        public void close() {
            if (this.f40044e) {
                return;
            }
            this.f40044e = true;
            flush();
            try {
                this.f40043d.getFD().sync();
            } catch (IOException e10) {
                y.j("AtomicFile", "Failed to sync file descriptor:", e10);
            }
            this.f40043d.close();
        }

        @Override // java.io.OutputStream, java.io.Flushable
        public void flush() {
            this.f40043d.flush();
        }

        @Override // java.io.OutputStream
        public void write(int i10) {
            this.f40043d.write(i10);
        }

        @Override // java.io.OutputStream
        public void write(byte[] bArr) {
            this.f40043d.write(bArr);
        }

        @Override // java.io.OutputStream
        public void write(byte[] bArr, int i10, int i11) {
            this.f40043d.write(bArr, i10, i11);
        }
    }

    public b(File file) {
        this.f40041a = file;
        this.f40042b = new File(file.getPath() + ".bak");
    }

    private void e() {
        if (this.f40042b.exists()) {
            this.f40041a.delete();
            this.f40042b.renameTo(this.f40041a);
        }
    }

    public void a() {
        this.f40041a.delete();
        this.f40042b.delete();
    }

    public void b(OutputStream outputStream) {
        outputStream.close();
        this.f40042b.delete();
    }

    public boolean c() {
        if (!this.f40041a.exists() && !this.f40042b.exists()) {
            return false;
        }
        return true;
    }

    public InputStream d() {
        e();
        return new FileInputStream(this.f40041a);
    }

    public OutputStream f() {
        if (this.f40041a.exists()) {
            if (!this.f40042b.exists()) {
                if (!this.f40041a.renameTo(this.f40042b)) {
                    y.i("AtomicFile", "Couldn't rename file " + this.f40041a + " to backup file " + this.f40042b);
                }
            } else {
                this.f40041a.delete();
            }
        }
        try {
            return new a(this.f40041a);
        } catch (FileNotFoundException e10) {
            File parentFile = this.f40041a.getParentFile();
            if (parentFile != null && parentFile.mkdirs()) {
                try {
                    return new a(this.f40041a);
                } catch (FileNotFoundException e11) {
                    throw new IOException("Couldn't create " + this.f40041a, e11);
                }
            }
            throw new IOException("Couldn't create " + this.f40041a, e10);
        }
    }
}

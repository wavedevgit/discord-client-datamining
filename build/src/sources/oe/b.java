package oe;

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
    private final File f38881a;

    /* renamed from: b  reason: collision with root package name */
    private final File f38882b;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    private static final class a extends OutputStream {

        /* renamed from: d  reason: collision with root package name */
        private final FileOutputStream f38883d;

        /* renamed from: e  reason: collision with root package name */
        private boolean f38884e = false;

        public a(File file) {
            this.f38883d = new FileOutputStream(file);
        }

        @Override // java.io.OutputStream, java.io.Closeable, java.lang.AutoCloseable
        public void close() {
            if (this.f38884e) {
                return;
            }
            this.f38884e = true;
            flush();
            try {
                this.f38883d.getFD().sync();
            } catch (IOException e10) {
                y.j("AtomicFile", "Failed to sync file descriptor:", e10);
            }
            this.f38883d.close();
        }

        @Override // java.io.OutputStream, java.io.Flushable
        public void flush() {
            this.f38883d.flush();
        }

        @Override // java.io.OutputStream
        public void write(int i10) {
            this.f38883d.write(i10);
        }

        @Override // java.io.OutputStream
        public void write(byte[] bArr) {
            this.f38883d.write(bArr);
        }

        @Override // java.io.OutputStream
        public void write(byte[] bArr, int i10, int i11) {
            this.f38883d.write(bArr, i10, i11);
        }
    }

    public b(File file) {
        this.f38881a = file;
        this.f38882b = new File(file.getPath() + ".bak");
    }

    private void e() {
        if (this.f38882b.exists()) {
            this.f38881a.delete();
            this.f38882b.renameTo(this.f38881a);
        }
    }

    public void a() {
        this.f38881a.delete();
        this.f38882b.delete();
    }

    public void b(OutputStream outputStream) {
        outputStream.close();
        this.f38882b.delete();
    }

    public boolean c() {
        if (!this.f38881a.exists() && !this.f38882b.exists()) {
            return false;
        }
        return true;
    }

    public InputStream d() {
        e();
        return new FileInputStream(this.f38881a);
    }

    public OutputStream f() {
        if (this.f38881a.exists()) {
            if (!this.f38882b.exists()) {
                if (!this.f38881a.renameTo(this.f38882b)) {
                    y.i("AtomicFile", "Couldn't rename file " + this.f38881a + " to backup file " + this.f38882b);
                }
            } else {
                this.f38881a.delete();
            }
        }
        try {
            return new a(this.f38881a);
        } catch (FileNotFoundException e10) {
            File parentFile = this.f38881a.getParentFile();
            if (parentFile != null && parentFile.mkdirs()) {
                try {
                    return new a(this.f38881a);
                } catch (FileNotFoundException e11) {
                    throw new IOException("Couldn't create " + this.f38881a, e11);
                }
            }
            throw new IOException("Couldn't create " + this.f38881a, e10);
        }
    }
}

package sh;

import java.io.File;
import java.io.FileInputStream;
import java.io.InputStream;
import java.util.Enumeration;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class d extends InputStream {

    /* renamed from: d  reason: collision with root package name */
    private final Enumeration f49065d;

    /* renamed from: e  reason: collision with root package name */
    private InputStream f49066e;

    public d(Enumeration enumeration) {
        this.f49065d = enumeration;
        a();
    }

    final void a() {
        InputStream inputStream = this.f49066e;
        if (inputStream != null) {
            inputStream.close();
        }
        if (this.f49065d.hasMoreElements()) {
            this.f49066e = new FileInputStream((File) this.f49065d.nextElement());
        } else {
            this.f49066e = null;
        }
    }

    @Override // java.io.InputStream, java.io.Closeable, java.lang.AutoCloseable
    public final void close() {
        super.close();
        InputStream inputStream = this.f49066e;
        if (inputStream != null) {
            inputStream.close();
            this.f49066e = null;
        }
    }

    @Override // java.io.InputStream
    public final int read() {
        while (true) {
            InputStream inputStream = this.f49066e;
            if (inputStream == null) {
                return -1;
            }
            int read = inputStream.read();
            if (read != -1) {
                return read;
            }
            a();
        }
    }

    @Override // java.io.InputStream
    public final int read(byte[] bArr, int i10, int i11) {
        if (this.f49066e == null) {
            return -1;
        }
        bArr.getClass();
        if (i10 < 0 || i11 < 0 || i11 > bArr.length - i10) {
            throw new IndexOutOfBoundsException();
        }
        if (i11 != 0) {
            do {
                int read = this.f49066e.read(bArr, i10, i11);
                if (read > 0) {
                    return read;
                }
                a();
            } while (this.f49066e != null);
            return -1;
        }
        return 0;
    }
}

package x4;

import java.io.InputStream;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
final class m extends InputStream {

    /* renamed from: d  reason: collision with root package name */
    private final InputStream f54533d;

    /* renamed from: e  reason: collision with root package name */
    private int f54534e = 1073741824;

    public m(InputStream inputStream) {
        this.f54533d = inputStream;
    }

    private final int a(int i10) {
        if (i10 == -1) {
            this.f54534e = 0;
        }
        return i10;
    }

    @Override // java.io.InputStream
    public int available() {
        return this.f54534e;
    }

    @Override // java.io.InputStream, java.io.Closeable, java.lang.AutoCloseable
    public void close() {
        this.f54533d.close();
    }

    @Override // java.io.InputStream
    public int read() {
        return a(this.f54533d.read());
    }

    @Override // java.io.InputStream
    public long skip(long j10) {
        return this.f54533d.skip(j10);
    }

    @Override // java.io.InputStream
    public int read(byte[] bArr) {
        return a(this.f54533d.read(bArr));
    }

    @Override // java.io.InputStream
    public int read(byte[] bArr, int i10, int i11) {
        return a(this.f54533d.read(bArr, i10, i11));
    }
}

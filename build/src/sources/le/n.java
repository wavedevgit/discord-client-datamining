package le;

import com.google.android.exoplayer2.upstream.DataSource;
import java.io.InputStream;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class n extends InputStream {

    /* renamed from: d  reason: collision with root package name */
    private final DataSource f36124d;

    /* renamed from: e  reason: collision with root package name */
    private final com.google.android.exoplayer2.upstream.a f36125e;

    /* renamed from: q  reason: collision with root package name */
    private long f36129q;

    /* renamed from: o  reason: collision with root package name */
    private boolean f36127o = false;

    /* renamed from: p  reason: collision with root package name */
    private boolean f36128p = false;

    /* renamed from: i  reason: collision with root package name */
    private final byte[] f36126i = new byte[1];

    public n(DataSource dataSource, com.google.android.exoplayer2.upstream.a aVar) {
        this.f36124d = dataSource;
        this.f36125e = aVar;
    }

    private void a() {
        if (!this.f36127o) {
            this.f36124d.b(this.f36125e);
            this.f36127o = true;
        }
    }

    @Override // java.io.InputStream, java.io.Closeable, java.lang.AutoCloseable
    public void close() {
        if (!this.f36128p) {
            this.f36124d.close();
            this.f36128p = true;
        }
    }

    public void g() {
        a();
    }

    @Override // java.io.InputStream
    public int read() {
        if (read(this.f36126i) == -1) {
            return -1;
        }
        return this.f36126i[0] & 255;
    }

    @Override // java.io.InputStream
    public int read(byte[] bArr) {
        return read(bArr, 0, bArr.length);
    }

    @Override // java.io.InputStream
    public int read(byte[] bArr, int i10, int i11) {
        ne.a.g(!this.f36128p);
        a();
        int read = this.f36124d.read(bArr, i10, i11);
        if (read == -1) {
            return -1;
        }
        this.f36129q += read;
        return read;
    }
}

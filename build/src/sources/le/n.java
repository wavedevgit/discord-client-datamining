package le;

import com.google.android.exoplayer2.upstream.DataSource;
import java.io.InputStream;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class n extends InputStream {

    /* renamed from: d  reason: collision with root package name */
    private final DataSource f36172d;

    /* renamed from: e  reason: collision with root package name */
    private final com.google.android.exoplayer2.upstream.a f36173e;

    /* renamed from: q  reason: collision with root package name */
    private long f36177q;

    /* renamed from: o  reason: collision with root package name */
    private boolean f36175o = false;

    /* renamed from: p  reason: collision with root package name */
    private boolean f36176p = false;

    /* renamed from: i  reason: collision with root package name */
    private final byte[] f36174i = new byte[1];

    public n(DataSource dataSource, com.google.android.exoplayer2.upstream.a aVar) {
        this.f36172d = dataSource;
        this.f36173e = aVar;
    }

    private void a() {
        if (!this.f36175o) {
            this.f36172d.b(this.f36173e);
            this.f36175o = true;
        }
    }

    @Override // java.io.InputStream, java.io.Closeable, java.lang.AutoCloseable
    public void close() {
        if (!this.f36176p) {
            this.f36172d.close();
            this.f36176p = true;
        }
    }

    public void g() {
        a();
    }

    @Override // java.io.InputStream
    public int read() {
        if (read(this.f36174i) == -1) {
            return -1;
        }
        return this.f36174i[0] & 255;
    }

    @Override // java.io.InputStream
    public int read(byte[] bArr) {
        return read(bArr, 0, bArr.length);
    }

    @Override // java.io.InputStream
    public int read(byte[] bArr, int i10, int i11) {
        ne.a.g(!this.f36176p);
        a();
        int read = this.f36172d.read(bArr, i10, i11);
        if (read == -1) {
            return -1;
        }
        this.f36177q += read;
        return read;
    }
}

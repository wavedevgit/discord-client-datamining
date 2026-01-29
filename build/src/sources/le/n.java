package le;

import com.google.android.exoplayer2.upstream.DataSource;
import java.io.InputStream;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class n extends InputStream {

    /* renamed from: d  reason: collision with root package name */
    private final DataSource f37205d;

    /* renamed from: e  reason: collision with root package name */
    private final com.google.android.exoplayer2.upstream.a f37206e;

    /* renamed from: q  reason: collision with root package name */
    private long f37210q;

    /* renamed from: o  reason: collision with root package name */
    private boolean f37208o = false;

    /* renamed from: p  reason: collision with root package name */
    private boolean f37209p = false;

    /* renamed from: i  reason: collision with root package name */
    private final byte[] f37207i = new byte[1];

    public n(DataSource dataSource, com.google.android.exoplayer2.upstream.a aVar) {
        this.f37205d = dataSource;
        this.f37206e = aVar;
    }

    private void a() {
        if (!this.f37208o) {
            this.f37205d.b(this.f37206e);
            this.f37208o = true;
        }
    }

    @Override // java.io.InputStream, java.io.Closeable, java.lang.AutoCloseable
    public void close() {
        if (!this.f37209p) {
            this.f37205d.close();
            this.f37209p = true;
        }
    }

    public void h() {
        a();
    }

    @Override // java.io.InputStream
    public int read() {
        if (read(this.f37207i) == -1) {
            return -1;
        }
        return this.f37207i[0] & 255;
    }

    @Override // java.io.InputStream
    public int read(byte[] bArr) {
        return read(bArr, 0, bArr.length);
    }

    @Override // java.io.InputStream
    public int read(byte[] bArr, int i10, int i11) {
        ne.a.g(!this.f37209p);
        a();
        int read = this.f37205d.read(bArr, i10, i11);
        if (read == -1) {
            return -1;
        }
        this.f37210q += read;
        return read;
    }
}

package le;

import com.google.android.exoplayer2.upstream.DataSource;
import java.io.InputStream;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class n extends InputStream {

    /* renamed from: d  reason: collision with root package name */
    private final DataSource f36731d;

    /* renamed from: e  reason: collision with root package name */
    private final com.google.android.exoplayer2.upstream.a f36732e;

    /* renamed from: q  reason: collision with root package name */
    private long f36736q;

    /* renamed from: o  reason: collision with root package name */
    private boolean f36734o = false;

    /* renamed from: p  reason: collision with root package name */
    private boolean f36735p = false;

    /* renamed from: i  reason: collision with root package name */
    private final byte[] f36733i = new byte[1];

    public n(DataSource dataSource, com.google.android.exoplayer2.upstream.a aVar) {
        this.f36731d = dataSource;
        this.f36732e = aVar;
    }

    private void a() {
        if (!this.f36734o) {
            this.f36731d.b(this.f36732e);
            this.f36734o = true;
        }
    }

    @Override // java.io.InputStream, java.io.Closeable, java.lang.AutoCloseable
    public void close() {
        if (!this.f36735p) {
            this.f36731d.close();
            this.f36735p = true;
        }
    }

    public void h() {
        a();
    }

    @Override // java.io.InputStream
    public int read() {
        if (read(this.f36733i) == -1) {
            return -1;
        }
        return this.f36733i[0] & 255;
    }

    @Override // java.io.InputStream
    public int read(byte[] bArr) {
        return read(bArr, 0, bArr.length);
    }

    @Override // java.io.InputStream
    public int read(byte[] bArr, int i10, int i11) {
        ne.a.g(!this.f36735p);
        a();
        int read = this.f36731d.read(bArr, i10, i11);
        if (read == -1) {
            return -1;
        }
        this.f36736q += read;
        return read;
    }
}

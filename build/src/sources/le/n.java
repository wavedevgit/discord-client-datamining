package le;

import com.google.android.exoplayer2.upstream.DataSource;
import java.io.InputStream;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class n extends InputStream {

    /* renamed from: d  reason: collision with root package name */
    private final DataSource f37335d;

    /* renamed from: e  reason: collision with root package name */
    private final com.google.android.exoplayer2.upstream.a f37336e;

    /* renamed from: q  reason: collision with root package name */
    private long f37340q;

    /* renamed from: o  reason: collision with root package name */
    private boolean f37338o = false;

    /* renamed from: p  reason: collision with root package name */
    private boolean f37339p = false;

    /* renamed from: i  reason: collision with root package name */
    private final byte[] f37337i = new byte[1];

    public n(DataSource dataSource, com.google.android.exoplayer2.upstream.a aVar) {
        this.f37335d = dataSource;
        this.f37336e = aVar;
    }

    private void a() {
        if (!this.f37338o) {
            this.f37335d.b(this.f37336e);
            this.f37338o = true;
        }
    }

    @Override // java.io.InputStream, java.io.Closeable, java.lang.AutoCloseable
    public void close() {
        if (!this.f37339p) {
            this.f37335d.close();
            this.f37339p = true;
        }
    }

    public void h() {
        a();
    }

    @Override // java.io.InputStream
    public int read() {
        if (read(this.f37337i) == -1) {
            return -1;
        }
        return this.f37337i[0] & 255;
    }

    @Override // java.io.InputStream
    public int read(byte[] bArr) {
        return read(bArr, 0, bArr.length);
    }

    @Override // java.io.InputStream
    public int read(byte[] bArr, int i10, int i11) {
        ne.a.g(!this.f37339p);
        a();
        int read = this.f37335d.read(bArr, i10, i11);
        if (read == -1) {
            return -1;
        }
        this.f37340q += read;
        return read;
    }
}

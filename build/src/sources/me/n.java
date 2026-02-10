package me;

import com.google.android.exoplayer2.upstream.DataSource;
import java.io.InputStream;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class n extends InputStream {

    /* renamed from: d  reason: collision with root package name */
    private final DataSource f36377d;

    /* renamed from: e  reason: collision with root package name */
    private final com.google.android.exoplayer2.upstream.a f36378e;

    /* renamed from: q  reason: collision with root package name */
    private long f36382q;

    /* renamed from: o  reason: collision with root package name */
    private boolean f36380o = false;

    /* renamed from: p  reason: collision with root package name */
    private boolean f36381p = false;

    /* renamed from: i  reason: collision with root package name */
    private final byte[] f36379i = new byte[1];

    public n(DataSource dataSource, com.google.android.exoplayer2.upstream.a aVar) {
        this.f36377d = dataSource;
        this.f36378e = aVar;
    }

    private void a() {
        if (!this.f36380o) {
            this.f36377d.b(this.f36378e);
            this.f36380o = true;
        }
    }

    @Override // java.io.InputStream, java.io.Closeable, java.lang.AutoCloseable
    public void close() {
        if (!this.f36381p) {
            this.f36377d.close();
            this.f36381p = true;
        }
    }

    public void h() {
        a();
    }

    @Override // java.io.InputStream
    public int read() {
        if (read(this.f36379i) == -1) {
            return -1;
        }
        return this.f36379i[0] & 255;
    }

    @Override // java.io.InputStream
    public int read(byte[] bArr) {
        return read(bArr, 0, bArr.length);
    }

    @Override // java.io.InputStream
    public int read(byte[] bArr, int i10, int i11) {
        oe.a.g(!this.f36381p);
        a();
        int read = this.f36377d.read(bArr, i10, i11);
        if (read == -1) {
            return -1;
        }
        this.f36382q += read;
        return read;
    }
}

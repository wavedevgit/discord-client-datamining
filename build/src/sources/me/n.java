package me;

import com.google.android.exoplayer2.upstream.DataSource;
import java.io.InputStream;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class n extends InputStream {

    /* renamed from: d  reason: collision with root package name */
    private final DataSource f36946d;

    /* renamed from: e  reason: collision with root package name */
    private final com.google.android.exoplayer2.upstream.a f36947e;

    /* renamed from: q  reason: collision with root package name */
    private long f36951q;

    /* renamed from: o  reason: collision with root package name */
    private boolean f36949o = false;

    /* renamed from: p  reason: collision with root package name */
    private boolean f36950p = false;

    /* renamed from: i  reason: collision with root package name */
    private final byte[] f36948i = new byte[1];

    public n(DataSource dataSource, com.google.android.exoplayer2.upstream.a aVar) {
        this.f36946d = dataSource;
        this.f36947e = aVar;
    }

    private void a() {
        if (!this.f36949o) {
            this.f36946d.b(this.f36947e);
            this.f36949o = true;
        }
    }

    @Override // java.io.InputStream, java.io.Closeable, java.lang.AutoCloseable
    public void close() {
        if (!this.f36950p) {
            this.f36946d.close();
            this.f36950p = true;
        }
    }

    public void h() {
        a();
    }

    @Override // java.io.InputStream
    public int read() {
        if (read(this.f36948i) == -1) {
            return -1;
        }
        return this.f36948i[0] & 255;
    }

    @Override // java.io.InputStream
    public int read(byte[] bArr) {
        return read(bArr, 0, bArr.length);
    }

    @Override // java.io.InputStream
    public int read(byte[] bArr, int i10, int i11) {
        oe.a.g(!this.f36950p);
        a();
        int read = this.f36946d.read(bArr, i10, i11);
        if (read == -1) {
            return -1;
        }
        this.f36951q += read;
        return read;
    }
}

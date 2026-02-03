package le;

import android.net.Uri;
import com.google.android.exoplayer2.upstream.DataSource;
import java.util.Map;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class b0 implements DataSource {

    /* renamed from: a  reason: collision with root package name */
    private final DataSource f37294a;

    /* renamed from: b  reason: collision with root package name */
    private final l f37295b;

    /* renamed from: c  reason: collision with root package name */
    private boolean f37296c;

    /* renamed from: d  reason: collision with root package name */
    private long f37297d;

    public b0(DataSource dataSource, l lVar) {
        this.f37294a = (DataSource) ne.a.e(dataSource);
        this.f37295b = (l) ne.a.e(lVar);
    }

    @Override // com.google.android.exoplayer2.upstream.DataSource
    public long b(com.google.android.exoplayer2.upstream.a aVar) {
        long b10 = this.f37294a.b(aVar);
        this.f37297d = b10;
        if (b10 == 0) {
            return 0L;
        }
        if (aVar.f13982h == -1 && b10 != -1) {
            aVar = aVar.f(0L, b10);
        }
        this.f37296c = true;
        this.f37295b.b(aVar);
        return this.f37297d;
    }

    @Override // com.google.android.exoplayer2.upstream.DataSource
    public void close() {
        try {
            this.f37294a.close();
        } finally {
            if (this.f37296c) {
                this.f37296c = false;
                this.f37295b.close();
            }
        }
    }

    @Override // com.google.android.exoplayer2.upstream.DataSource
    public Map d() {
        return this.f37294a.d();
    }

    @Override // com.google.android.exoplayer2.upstream.DataSource
    public void j(c0 c0Var) {
        ne.a.e(c0Var);
        this.f37294a.j(c0Var);
    }

    @Override // com.google.android.exoplayer2.upstream.DataSource
    public Uri m() {
        return this.f37294a.m();
    }

    @Override // le.j
    public int read(byte[] bArr, int i10, int i11) {
        if (this.f37297d == 0) {
            return -1;
        }
        int read = this.f37294a.read(bArr, i10, i11);
        if (read > 0) {
            this.f37295b.write(bArr, i10, read);
            long j10 = this.f37297d;
            if (j10 != -1) {
                this.f37297d = j10 - read;
            }
        }
        return read;
    }
}

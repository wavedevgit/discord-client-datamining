package le;

import android.net.Uri;
import com.google.android.exoplayer2.upstream.DataSource;
import java.util.Map;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class b0 implements DataSource {

    /* renamed from: a  reason: collision with root package name */
    private final DataSource f36763a;

    /* renamed from: b  reason: collision with root package name */
    private final l f36764b;

    /* renamed from: c  reason: collision with root package name */
    private boolean f36765c;

    /* renamed from: d  reason: collision with root package name */
    private long f36766d;

    public b0(DataSource dataSource, l lVar) {
        this.f36763a = (DataSource) ne.a.e(dataSource);
        this.f36764b = (l) ne.a.e(lVar);
    }

    @Override // com.google.android.exoplayer2.upstream.DataSource
    public long b(com.google.android.exoplayer2.upstream.a aVar) {
        long b10 = this.f36763a.b(aVar);
        this.f36766d = b10;
        if (b10 == 0) {
            return 0L;
        }
        if (aVar.f12950h == -1 && b10 != -1) {
            aVar = aVar.f(0L, b10);
        }
        this.f36765c = true;
        this.f36764b.b(aVar);
        return this.f36766d;
    }

    @Override // com.google.android.exoplayer2.upstream.DataSource
    public void close() {
        try {
            this.f36763a.close();
        } finally {
            if (this.f36765c) {
                this.f36765c = false;
                this.f36764b.close();
            }
        }
    }

    @Override // com.google.android.exoplayer2.upstream.DataSource
    public Map d() {
        return this.f36763a.d();
    }

    @Override // com.google.android.exoplayer2.upstream.DataSource
    public void j(c0 c0Var) {
        ne.a.e(c0Var);
        this.f36763a.j(c0Var);
    }

    @Override // com.google.android.exoplayer2.upstream.DataSource
    public Uri m() {
        return this.f36763a.m();
    }

    @Override // le.j
    public int read(byte[] bArr, int i10, int i11) {
        if (this.f36766d == 0) {
            return -1;
        }
        int read = this.f36763a.read(bArr, i10, i11);
        if (read > 0) {
            this.f36764b.write(bArr, i10, read);
            long j10 = this.f36766d;
            if (j10 != -1) {
                this.f36766d = j10 - read;
            }
        }
        return read;
    }
}

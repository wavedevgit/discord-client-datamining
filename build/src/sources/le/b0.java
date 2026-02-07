package le;

import android.net.Uri;
import com.google.android.exoplayer2.upstream.DataSource;
import java.util.Map;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class b0 implements DataSource {

    /* renamed from: a  reason: collision with root package name */
    private final DataSource f36131a;

    /* renamed from: b  reason: collision with root package name */
    private final l f36132b;

    /* renamed from: c  reason: collision with root package name */
    private boolean f36133c;

    /* renamed from: d  reason: collision with root package name */
    private long f36134d;

    public b0(DataSource dataSource, l lVar) {
        this.f36131a = (DataSource) ne.a.e(dataSource);
        this.f36132b = (l) ne.a.e(lVar);
    }

    @Override // com.google.android.exoplayer2.upstream.DataSource
    public long b(com.google.android.exoplayer2.upstream.a aVar) {
        long b10 = this.f36131a.b(aVar);
        this.f36134d = b10;
        if (b10 == 0) {
            return 0L;
        }
        if (aVar.f13272h == -1 && b10 != -1) {
            aVar = aVar.f(0L, b10);
        }
        this.f36133c = true;
        this.f36132b.b(aVar);
        return this.f36134d;
    }

    @Override // com.google.android.exoplayer2.upstream.DataSource
    public void close() {
        try {
            this.f36131a.close();
        } finally {
            if (this.f36133c) {
                this.f36133c = false;
                this.f36132b.close();
            }
        }
    }

    @Override // com.google.android.exoplayer2.upstream.DataSource
    public Map d() {
        return this.f36131a.d();
    }

    @Override // com.google.android.exoplayer2.upstream.DataSource
    public void j(c0 c0Var) {
        ne.a.e(c0Var);
        this.f36131a.j(c0Var);
    }

    @Override // com.google.android.exoplayer2.upstream.DataSource
    public Uri m() {
        return this.f36131a.m();
    }

    @Override // le.j
    public int read(byte[] bArr, int i10, int i11) {
        if (this.f36134d == 0) {
            return -1;
        }
        int read = this.f36131a.read(bArr, i10, i11);
        if (read > 0) {
            this.f36132b.write(bArr, i10, read);
            long j10 = this.f36134d;
            if (j10 != -1) {
                this.f36134d = j10 - read;
            }
        }
        return read;
    }
}

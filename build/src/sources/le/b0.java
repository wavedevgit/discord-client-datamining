package le;

import android.net.Uri;
import com.google.android.exoplayer2.upstream.DataSource;
import java.util.Map;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class b0 implements DataSource {

    /* renamed from: a  reason: collision with root package name */
    private final DataSource f37180a;

    /* renamed from: b  reason: collision with root package name */
    private final l f37181b;

    /* renamed from: c  reason: collision with root package name */
    private boolean f37182c;

    /* renamed from: d  reason: collision with root package name */
    private long f37183d;

    public b0(DataSource dataSource, l lVar) {
        this.f37180a = (DataSource) ne.a.e(dataSource);
        this.f37181b = (l) ne.a.e(lVar);
    }

    @Override // com.google.android.exoplayer2.upstream.DataSource
    public long b(com.google.android.exoplayer2.upstream.a aVar) {
        long b10 = this.f37180a.b(aVar);
        this.f37183d = b10;
        if (b10 == 0) {
            return 0L;
        }
        if (aVar.f14353h == -1 && b10 != -1) {
            aVar = aVar.f(0L, b10);
        }
        this.f37182c = true;
        this.f37181b.b(aVar);
        return this.f37183d;
    }

    @Override // com.google.android.exoplayer2.upstream.DataSource
    public void close() {
        try {
            this.f37180a.close();
        } finally {
            if (this.f37182c) {
                this.f37182c = false;
                this.f37181b.close();
            }
        }
    }

    @Override // com.google.android.exoplayer2.upstream.DataSource
    public Map d() {
        return this.f37180a.d();
    }

    @Override // com.google.android.exoplayer2.upstream.DataSource
    public void j(c0 c0Var) {
        ne.a.e(c0Var);
        this.f37180a.j(c0Var);
    }

    @Override // com.google.android.exoplayer2.upstream.DataSource
    public Uri m() {
        return this.f37180a.m();
    }

    @Override // le.j
    public int read(byte[] bArr, int i10, int i11) {
        if (this.f37183d == 0) {
            return -1;
        }
        int read = this.f37180a.read(bArr, i10, i11);
        if (read > 0) {
            this.f37181b.write(bArr, i10, read);
            long j10 = this.f37183d;
            if (j10 != -1) {
                this.f37183d = j10 - read;
            }
        }
        return read;
    }
}

package le;

import android.net.Uri;
import com.google.android.exoplayer2.upstream.DataSource;
import java.util.Map;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class b0 implements DataSource {

    /* renamed from: a  reason: collision with root package name */
    private final DataSource f36690a;

    /* renamed from: b  reason: collision with root package name */
    private final l f36691b;

    /* renamed from: c  reason: collision with root package name */
    private boolean f36692c;

    /* renamed from: d  reason: collision with root package name */
    private long f36693d;

    public b0(DataSource dataSource, l lVar) {
        this.f36690a = (DataSource) ne.a.e(dataSource);
        this.f36691b = (l) ne.a.e(lVar);
    }

    @Override // com.google.android.exoplayer2.upstream.DataSource
    public long b(com.google.android.exoplayer2.upstream.a aVar) {
        long b10 = this.f36690a.b(aVar);
        this.f36693d = b10;
        if (b10 == 0) {
            return 0L;
        }
        if (aVar.f13335h == -1 && b10 != -1) {
            aVar = aVar.f(0L, b10);
        }
        this.f36692c = true;
        this.f36691b.b(aVar);
        return this.f36693d;
    }

    @Override // com.google.android.exoplayer2.upstream.DataSource
    public void close() {
        try {
            this.f36690a.close();
        } finally {
            if (this.f36692c) {
                this.f36692c = false;
                this.f36691b.close();
            }
        }
    }

    @Override // com.google.android.exoplayer2.upstream.DataSource
    public Map d() {
        return this.f36690a.d();
    }

    @Override // com.google.android.exoplayer2.upstream.DataSource
    public void j(c0 c0Var) {
        ne.a.e(c0Var);
        this.f36690a.j(c0Var);
    }

    @Override // com.google.android.exoplayer2.upstream.DataSource
    public Uri m() {
        return this.f36690a.m();
    }

    @Override // le.j
    public int read(byte[] bArr, int i10, int i11) {
        if (this.f36693d == 0) {
            return -1;
        }
        int read = this.f36690a.read(bArr, i10, i11);
        if (read > 0) {
            this.f36691b.write(bArr, i10, read);
            long j10 = this.f36693d;
            if (j10 != -1) {
                this.f36693d = j10 - read;
            }
        }
        return read;
    }
}

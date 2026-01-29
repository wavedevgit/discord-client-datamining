package le;

import android.net.Uri;
import com.google.android.exoplayer2.upstream.DataSource;
import java.util.Map;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class b0 implements DataSource {

    /* renamed from: a  reason: collision with root package name */
    private final DataSource f37164a;

    /* renamed from: b  reason: collision with root package name */
    private final l f37165b;

    /* renamed from: c  reason: collision with root package name */
    private boolean f37166c;

    /* renamed from: d  reason: collision with root package name */
    private long f37167d;

    public b0(DataSource dataSource, l lVar) {
        this.f37164a = (DataSource) ne.a.e(dataSource);
        this.f37165b = (l) ne.a.e(lVar);
    }

    @Override // com.google.android.exoplayer2.upstream.DataSource
    public long b(com.google.android.exoplayer2.upstream.a aVar) {
        long b10 = this.f37164a.b(aVar);
        this.f37167d = b10;
        if (b10 == 0) {
            return 0L;
        }
        if (aVar.f14353h == -1 && b10 != -1) {
            aVar = aVar.f(0L, b10);
        }
        this.f37166c = true;
        this.f37165b.b(aVar);
        return this.f37167d;
    }

    @Override // com.google.android.exoplayer2.upstream.DataSource
    public void close() {
        try {
            this.f37164a.close();
        } finally {
            if (this.f37166c) {
                this.f37166c = false;
                this.f37165b.close();
            }
        }
    }

    @Override // com.google.android.exoplayer2.upstream.DataSource
    public Map d() {
        return this.f37164a.d();
    }

    @Override // com.google.android.exoplayer2.upstream.DataSource
    public void j(c0 c0Var) {
        ne.a.e(c0Var);
        this.f37164a.j(c0Var);
    }

    @Override // com.google.android.exoplayer2.upstream.DataSource
    public Uri m() {
        return this.f37164a.m();
    }

    @Override // le.j
    public int read(byte[] bArr, int i10, int i11) {
        if (this.f37167d == 0) {
            return -1;
        }
        int read = this.f37164a.read(bArr, i10, i11);
        if (read > 0) {
            this.f37165b.write(bArr, i10, read);
            long j10 = this.f37167d;
            if (j10 != -1) {
                this.f37167d = j10 - read;
            }
        }
        return read;
    }
}

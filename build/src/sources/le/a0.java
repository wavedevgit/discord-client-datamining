package le;

import android.net.Uri;
import com.google.android.exoplayer2.upstream.DataSource;
import java.util.Collections;
import java.util.Map;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class a0 implements DataSource {

    /* renamed from: a  reason: collision with root package name */
    private final DataSource f37176a;

    /* renamed from: b  reason: collision with root package name */
    private long f37177b;

    /* renamed from: c  reason: collision with root package name */
    private Uri f37178c = Uri.EMPTY;

    /* renamed from: d  reason: collision with root package name */
    private Map f37179d = Collections.EMPTY_MAP;

    public a0(DataSource dataSource) {
        this.f37176a = (DataSource) ne.a.e(dataSource);
    }

    @Override // com.google.android.exoplayer2.upstream.DataSource
    public long b(com.google.android.exoplayer2.upstream.a aVar) {
        this.f37178c = aVar.f14346a;
        this.f37179d = Collections.EMPTY_MAP;
        long b10 = this.f37176a.b(aVar);
        this.f37178c = (Uri) ne.a.e(m());
        this.f37179d = d();
        return b10;
    }

    @Override // com.google.android.exoplayer2.upstream.DataSource
    public void close() {
        this.f37176a.close();
    }

    @Override // com.google.android.exoplayer2.upstream.DataSource
    public Map d() {
        return this.f37176a.d();
    }

    @Override // com.google.android.exoplayer2.upstream.DataSource
    public void j(c0 c0Var) {
        ne.a.e(c0Var);
        this.f37176a.j(c0Var);
    }

    @Override // com.google.android.exoplayer2.upstream.DataSource
    public Uri m() {
        return this.f37176a.m();
    }

    public long o() {
        return this.f37177b;
    }

    public Uri p() {
        return this.f37178c;
    }

    public Map q() {
        return this.f37179d;
    }

    public void r() {
        this.f37177b = 0L;
    }

    @Override // le.j
    public int read(byte[] bArr, int i10, int i11) {
        int read = this.f37176a.read(bArr, i10, i11);
        if (read != -1) {
            this.f37177b += read;
        }
        return read;
    }
}

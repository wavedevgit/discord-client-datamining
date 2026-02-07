package le;

import android.net.Uri;
import com.google.android.exoplayer2.upstream.DataSource;
import java.util.Collections;
import java.util.Map;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class a0 implements DataSource {

    /* renamed from: a  reason: collision with root package name */
    private final DataSource f36127a;

    /* renamed from: b  reason: collision with root package name */
    private long f36128b;

    /* renamed from: c  reason: collision with root package name */
    private Uri f36129c = Uri.EMPTY;

    /* renamed from: d  reason: collision with root package name */
    private Map f36130d = Collections.EMPTY_MAP;

    public a0(DataSource dataSource) {
        this.f36127a = (DataSource) ne.a.e(dataSource);
    }

    @Override // com.google.android.exoplayer2.upstream.DataSource
    public long b(com.google.android.exoplayer2.upstream.a aVar) {
        this.f36129c = aVar.f13265a;
        this.f36130d = Collections.EMPTY_MAP;
        long b10 = this.f36127a.b(aVar);
        this.f36129c = (Uri) ne.a.e(m());
        this.f36130d = d();
        return b10;
    }

    @Override // com.google.android.exoplayer2.upstream.DataSource
    public void close() {
        this.f36127a.close();
    }

    @Override // com.google.android.exoplayer2.upstream.DataSource
    public Map d() {
        return this.f36127a.d();
    }

    @Override // com.google.android.exoplayer2.upstream.DataSource
    public void j(c0 c0Var) {
        ne.a.e(c0Var);
        this.f36127a.j(c0Var);
    }

    @Override // com.google.android.exoplayer2.upstream.DataSource
    public Uri m() {
        return this.f36127a.m();
    }

    public long o() {
        return this.f36128b;
    }

    public Uri p() {
        return this.f36129c;
    }

    public Map q() {
        return this.f36130d;
    }

    public void r() {
        this.f36128b = 0L;
    }

    @Override // le.j
    public int read(byte[] bArr, int i10, int i11) {
        int read = this.f36127a.read(bArr, i10, i11);
        if (read != -1) {
            this.f36128b += read;
        }
        return read;
    }
}

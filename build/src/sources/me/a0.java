package me;

import android.net.Uri;
import com.google.android.exoplayer2.upstream.DataSource;
import java.util.Collections;
import java.util.Map;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class a0 implements DataSource {

    /* renamed from: a  reason: collision with root package name */
    private final DataSource f36957a;

    /* renamed from: b  reason: collision with root package name */
    private long f36958b;

    /* renamed from: c  reason: collision with root package name */
    private Uri f36959c = Uri.EMPTY;

    /* renamed from: d  reason: collision with root package name */
    private Map f36960d = Collections.EMPTY_MAP;

    public a0(DataSource dataSource) {
        this.f36957a = (DataSource) oe.a.e(dataSource);
    }

    @Override // com.google.android.exoplayer2.upstream.DataSource
    public long b(com.google.android.exoplayer2.upstream.a aVar) {
        this.f36959c = aVar.f13405a;
        this.f36960d = Collections.EMPTY_MAP;
        long b10 = this.f36957a.b(aVar);
        this.f36959c = (Uri) oe.a.e(m());
        this.f36960d = d();
        return b10;
    }

    @Override // com.google.android.exoplayer2.upstream.DataSource
    public void close() {
        this.f36957a.close();
    }

    @Override // com.google.android.exoplayer2.upstream.DataSource
    public Map d() {
        return this.f36957a.d();
    }

    @Override // com.google.android.exoplayer2.upstream.DataSource
    public void i(c0 c0Var) {
        oe.a.e(c0Var);
        this.f36957a.i(c0Var);
    }

    @Override // com.google.android.exoplayer2.upstream.DataSource
    public Uri m() {
        return this.f36957a.m();
    }

    public long o() {
        return this.f36958b;
    }

    public Uri p() {
        return this.f36959c;
    }

    public Map q() {
        return this.f36960d;
    }

    public void r() {
        this.f36958b = 0L;
    }

    @Override // me.j
    public int read(byte[] bArr, int i10, int i11) {
        int read = this.f36957a.read(bArr, i10, i11);
        if (read != -1) {
            this.f36958b += read;
        }
        return read;
    }
}

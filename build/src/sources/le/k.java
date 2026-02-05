package le;

import android.net.Uri;
import android.util.Base64;
import java.net.URLDecoder;
import lc.l0;
import ne.w0;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class k extends f {

    /* renamed from: e  reason: collision with root package name */
    private com.google.android.exoplayer2.upstream.a f36726e;

    /* renamed from: f  reason: collision with root package name */
    private byte[] f36727f;

    /* renamed from: g  reason: collision with root package name */
    private int f36728g;

    /* renamed from: h  reason: collision with root package name */
    private int f36729h;

    public k() {
        super(false);
    }

    @Override // com.google.android.exoplayer2.upstream.DataSource
    public long b(com.google.android.exoplayer2.upstream.a aVar) {
        q(aVar);
        this.f36726e = aVar;
        Uri normalizeScheme = aVar.f13328a.normalizeScheme();
        String scheme = normalizeScheme.getScheme();
        boolean equals = "data".equals(scheme);
        ne.a.b(equals, "Unsupported scheme: " + scheme);
        String[] d12 = w0.d1(normalizeScheme.getSchemeSpecificPart(), ",");
        if (d12.length == 2) {
            String str = d12[1];
            if (d12[0].contains(";base64")) {
                try {
                    this.f36727f = Base64.decode(str, 0);
                } catch (IllegalArgumentException e10) {
                    throw l0.b("Error while parsing Base64 encoded string: " + str, e10);
                }
            } else {
                this.f36727f = w0.s0(URLDecoder.decode(str, li.d.f36880a.name()));
            }
            long j10 = aVar.f13334g;
            byte[] bArr = this.f36727f;
            if (j10 <= bArr.length) {
                int i10 = (int) j10;
                this.f36728g = i10;
                int length = bArr.length - i10;
                this.f36729h = length;
                long j11 = aVar.f13335h;
                if (j11 != -1) {
                    this.f36729h = (int) Math.min(length, j11);
                }
                r(aVar);
                long j12 = aVar.f13335h;
                if (j12 != -1) {
                    return j12;
                }
                return this.f36729h;
            }
            this.f36727f = null;
            throw new m(2008);
        }
        throw l0.b("Unexpected URI format: " + normalizeScheme, null);
    }

    @Override // com.google.android.exoplayer2.upstream.DataSource
    public void close() {
        if (this.f36727f != null) {
            this.f36727f = null;
            p();
        }
        this.f36726e = null;
    }

    @Override // com.google.android.exoplayer2.upstream.DataSource
    public Uri m() {
        com.google.android.exoplayer2.upstream.a aVar = this.f36726e;
        if (aVar != null) {
            return aVar.f13328a;
        }
        return null;
    }

    @Override // le.j
    public int read(byte[] bArr, int i10, int i11) {
        if (i11 == 0) {
            return 0;
        }
        int i12 = this.f36729h;
        if (i12 == 0) {
            return -1;
        }
        int min = Math.min(i11, i12);
        System.arraycopy(w0.j(this.f36727f), this.f36728g, bArr, i10, min);
        this.f36728g += min;
        this.f36729h -= min;
        o(min);
        return min;
    }
}

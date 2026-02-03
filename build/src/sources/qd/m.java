package qd;

import android.net.Uri;
import com.facebook.react.views.text.internal.span.SetSpanOperation;
import com.google.android.exoplayer2.upstream.DataSource;
import java.util.Map;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
final class m implements DataSource {

    /* renamed from: a  reason: collision with root package name */
    private final DataSource f47523a;

    /* renamed from: b  reason: collision with root package name */
    private final int f47524b;

    /* renamed from: c  reason: collision with root package name */
    private final a f47525c;

    /* renamed from: d  reason: collision with root package name */
    private final byte[] f47526d;

    /* renamed from: e  reason: collision with root package name */
    private int f47527e;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    public interface a {
        void a(ne.h0 h0Var);
    }

    public m(DataSource dataSource, int i10, a aVar) {
        boolean z10;
        if (i10 > 0) {
            z10 = true;
        } else {
            z10 = false;
        }
        ne.a.a(z10);
        this.f47523a = dataSource;
        this.f47524b = i10;
        this.f47525c = aVar;
        this.f47526d = new byte[1];
        this.f47527e = i10;
    }

    private boolean o() {
        if (this.f47523a.read(this.f47526d, 0, 1) == -1) {
            return false;
        }
        int i10 = (this.f47526d[0] & SetSpanOperation.SPAN_MAX_PRIORITY) << 4;
        if (i10 == 0) {
            return true;
        }
        byte[] bArr = new byte[i10];
        int i11 = i10;
        int i12 = 0;
        while (i11 > 0) {
            int read = this.f47523a.read(bArr, i12, i11);
            if (read == -1) {
                return false;
            }
            i12 += read;
            i11 -= read;
        }
        while (i10 > 0 && bArr[i10 - 1] == 0) {
            i10--;
        }
        if (i10 > 0) {
            this.f47525c.a(new ne.h0(bArr, i10));
        }
        return true;
    }

    @Override // com.google.android.exoplayer2.upstream.DataSource
    public long b(com.google.android.exoplayer2.upstream.a aVar) {
        throw new UnsupportedOperationException();
    }

    @Override // com.google.android.exoplayer2.upstream.DataSource
    public void close() {
        throw new UnsupportedOperationException();
    }

    @Override // com.google.android.exoplayer2.upstream.DataSource
    public Map d() {
        return this.f47523a.d();
    }

    @Override // com.google.android.exoplayer2.upstream.DataSource
    public void j(le.c0 c0Var) {
        ne.a.e(c0Var);
        this.f47523a.j(c0Var);
    }

    @Override // com.google.android.exoplayer2.upstream.DataSource
    public Uri m() {
        return this.f47523a.m();
    }

    @Override // le.j
    public int read(byte[] bArr, int i10, int i11) {
        if (this.f47527e == 0) {
            if (!o()) {
                return -1;
            }
            this.f47527e = this.f47524b;
        }
        int read = this.f47523a.read(bArr, i10, Math.min(this.f47527e, i11));
        if (read != -1) {
            this.f47527e -= read;
        }
        return read;
    }
}

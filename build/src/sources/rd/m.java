package rd;

import android.net.Uri;
import com.facebook.react.views.text.internal.span.SetSpanOperation;
import com.google.android.exoplayer2.upstream.DataSource;
import java.util.Map;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
final class m implements DataSource {

    /* renamed from: a  reason: collision with root package name */
    private final DataSource f47951a;

    /* renamed from: b  reason: collision with root package name */
    private final int f47952b;

    /* renamed from: c  reason: collision with root package name */
    private final a f47953c;

    /* renamed from: d  reason: collision with root package name */
    private final byte[] f47954d;

    /* renamed from: e  reason: collision with root package name */
    private int f47955e;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    public interface a {
        void b(oe.h0 h0Var);
    }

    public m(DataSource dataSource, int i10, a aVar) {
        boolean z10;
        if (i10 > 0) {
            z10 = true;
        } else {
            z10 = false;
        }
        oe.a.a(z10);
        this.f47951a = dataSource;
        this.f47952b = i10;
        this.f47953c = aVar;
        this.f47954d = new byte[1];
        this.f47955e = i10;
    }

    private boolean o() {
        if (this.f47951a.read(this.f47954d, 0, 1) == -1) {
            return false;
        }
        int i10 = (this.f47954d[0] & SetSpanOperation.SPAN_MAX_PRIORITY) << 4;
        if (i10 == 0) {
            return true;
        }
        byte[] bArr = new byte[i10];
        int i11 = i10;
        int i12 = 0;
        while (i11 > 0) {
            int read = this.f47951a.read(bArr, i12, i11);
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
            this.f47953c.b(new oe.h0(bArr, i10));
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
        return this.f47951a.d();
    }

    @Override // com.google.android.exoplayer2.upstream.DataSource
    public void i(me.c0 c0Var) {
        oe.a.e(c0Var);
        this.f47951a.i(c0Var);
    }

    @Override // com.google.android.exoplayer2.upstream.DataSource
    public Uri m() {
        return this.f47951a.m();
    }

    @Override // me.j
    public int read(byte[] bArr, int i10, int i11) {
        if (this.f47955e == 0) {
            if (!o()) {
                return -1;
            }
            this.f47955e = this.f47952b;
        }
        int read = this.f47951a.read(bArr, i10, Math.min(this.f47955e, i11));
        if (read != -1) {
            this.f47955e -= read;
        }
        return read;
    }
}

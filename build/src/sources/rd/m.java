package rd;

import android.net.Uri;
import com.facebook.react.views.text.internal.span.SetSpanOperation;
import com.google.android.exoplayer2.upstream.DataSource;
import java.util.Map;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
final class m implements DataSource {

    /* renamed from: a  reason: collision with root package name */
    private final DataSource f46974a;

    /* renamed from: b  reason: collision with root package name */
    private final int f46975b;

    /* renamed from: c  reason: collision with root package name */
    private final a f46976c;

    /* renamed from: d  reason: collision with root package name */
    private final byte[] f46977d;

    /* renamed from: e  reason: collision with root package name */
    private int f46978e;

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
        this.f46974a = dataSource;
        this.f46975b = i10;
        this.f46976c = aVar;
        this.f46977d = new byte[1];
        this.f46978e = i10;
    }

    private boolean o() {
        if (this.f46974a.read(this.f46977d, 0, 1) == -1) {
            return false;
        }
        int i10 = (this.f46977d[0] & SetSpanOperation.SPAN_MAX_PRIORITY) << 4;
        if (i10 == 0) {
            return true;
        }
        byte[] bArr = new byte[i10];
        int i11 = i10;
        int i12 = 0;
        while (i11 > 0) {
            int read = this.f46974a.read(bArr, i12, i11);
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
            this.f46976c.b(new oe.h0(bArr, i10));
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
        return this.f46974a.d();
    }

    @Override // com.google.android.exoplayer2.upstream.DataSource
    public void i(me.c0 c0Var) {
        oe.a.e(c0Var);
        this.f46974a.i(c0Var);
    }

    @Override // com.google.android.exoplayer2.upstream.DataSource
    public Uri m() {
        return this.f46974a.m();
    }

    @Override // me.j
    public int read(byte[] bArr, int i10, int i11) {
        if (this.f46978e == 0) {
            if (!o()) {
                return -1;
            }
            this.f46978e = this.f46975b;
        }
        int read = this.f46974a.read(bArr, i10, Math.min(this.f46978e, i11));
        if (read != -1) {
            this.f46978e -= read;
        }
        return read;
    }
}

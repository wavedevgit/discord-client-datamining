package dd;

import com.facebook.react.views.text.internal.span.SetSpanOperation;
import com.google.android.exoplayer2.Format;
import dd.i0;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class k implements m {

    /* renamed from: b  reason: collision with root package name */
    private final String f20543b;

    /* renamed from: c  reason: collision with root package name */
    private String f20544c;

    /* renamed from: d  reason: collision with root package name */
    private tc.b0 f20545d;

    /* renamed from: f  reason: collision with root package name */
    private int f20547f;

    /* renamed from: g  reason: collision with root package name */
    private int f20548g;

    /* renamed from: h  reason: collision with root package name */
    private long f20549h;

    /* renamed from: i  reason: collision with root package name */
    private Format f20550i;

    /* renamed from: j  reason: collision with root package name */
    private int f20551j;

    /* renamed from: a  reason: collision with root package name */
    private final ne.h0 f20542a = new ne.h0(new byte[18]);

    /* renamed from: e  reason: collision with root package name */
    private int f20546e = 0;

    /* renamed from: k  reason: collision with root package name */
    private long f20552k = -9223372036854775807L;

    public k(String str) {
        this.f20543b = str;
    }

    private boolean a(ne.h0 h0Var, byte[] bArr, int i10) {
        int min = Math.min(h0Var.a(), i10 - this.f20547f);
        h0Var.l(bArr, this.f20547f, min);
        int i11 = this.f20547f + min;
        this.f20547f = i11;
        if (i11 == i10) {
            return true;
        }
        return false;
    }

    private void g() {
        byte[] e10 = this.f20542a.e();
        if (this.f20550i == null) {
            Format g10 = nc.t.g(e10, this.f20544c, this.f20543b, null);
            this.f20550i = g10;
            this.f20545d.b(g10);
        }
        this.f20551j = nc.t.a(e10);
        this.f20549h = (int) ((nc.t.f(e10) * 1000000) / this.f20550i.K);
    }

    private boolean h(ne.h0 h0Var) {
        while (h0Var.a() > 0) {
            int i10 = this.f20548g << 8;
            this.f20548g = i10;
            int H = i10 | h0Var.H();
            this.f20548g = H;
            if (nc.t.d(H)) {
                byte[] e10 = this.f20542a.e();
                int i11 = this.f20548g;
                e10[0] = (byte) ((i11 >> 24) & SetSpanOperation.SPAN_MAX_PRIORITY);
                e10[1] = (byte) ((i11 >> 16) & SetSpanOperation.SPAN_MAX_PRIORITY);
                e10[2] = (byte) ((i11 >> 8) & SetSpanOperation.SPAN_MAX_PRIORITY);
                e10[3] = (byte) (i11 & SetSpanOperation.SPAN_MAX_PRIORITY);
                this.f20547f = 4;
                this.f20548g = 0;
                return true;
            }
        }
        return false;
    }

    @Override // dd.m
    public void b(ne.h0 h0Var) {
        ne.a.i(this.f20545d);
        while (h0Var.a() > 0) {
            int i10 = this.f20546e;
            if (i10 != 0) {
                if (i10 != 1) {
                    if (i10 == 2) {
                        int min = Math.min(h0Var.a(), this.f20551j - this.f20547f);
                        this.f20545d.f(h0Var, min);
                        int i11 = this.f20547f + min;
                        this.f20547f = i11;
                        int i12 = this.f20551j;
                        if (i11 == i12) {
                            long j10 = this.f20552k;
                            if (j10 != -9223372036854775807L) {
                                this.f20545d.d(j10, 1, i12, 0, null);
                                this.f20552k += this.f20549h;
                            }
                            this.f20546e = 0;
                        }
                    } else {
                        throw new IllegalStateException();
                    }
                } else if (a(h0Var, this.f20542a.e(), 18)) {
                    g();
                    this.f20542a.U(0);
                    this.f20545d.f(this.f20542a, 18);
                    this.f20546e = 2;
                }
            } else if (h(h0Var)) {
                this.f20546e = 1;
            }
        }
    }

    @Override // dd.m
    public void c() {
        this.f20546e = 0;
        this.f20547f = 0;
        this.f20548g = 0;
        this.f20552k = -9223372036854775807L;
    }

    @Override // dd.m
    public void e(long j10, int i10) {
        if (j10 != -9223372036854775807L) {
            this.f20552k = j10;
        }
    }

    @Override // dd.m
    public void f(tc.m mVar, i0.d dVar) {
        dVar.a();
        this.f20544c = dVar.b();
        this.f20545d = mVar.c(dVar.c(), 1);
    }

    @Override // dd.m
    public void d() {
    }
}

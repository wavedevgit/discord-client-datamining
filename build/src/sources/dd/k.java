package dd;

import com.facebook.react.views.text.internal.span.SetSpanOperation;
import com.google.android.exoplayer2.Format;
import dd.i0;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class k implements m {

    /* renamed from: b  reason: collision with root package name */
    private final String f21468b;

    /* renamed from: c  reason: collision with root package name */
    private String f21469c;

    /* renamed from: d  reason: collision with root package name */
    private tc.b0 f21470d;

    /* renamed from: f  reason: collision with root package name */
    private int f21472f;

    /* renamed from: g  reason: collision with root package name */
    private int f21473g;

    /* renamed from: h  reason: collision with root package name */
    private long f21474h;

    /* renamed from: i  reason: collision with root package name */
    private Format f21475i;

    /* renamed from: j  reason: collision with root package name */
    private int f21476j;

    /* renamed from: a  reason: collision with root package name */
    private final ne.h0 f21467a = new ne.h0(new byte[18]);

    /* renamed from: e  reason: collision with root package name */
    private int f21471e = 0;

    /* renamed from: k  reason: collision with root package name */
    private long f21477k = -9223372036854775807L;

    public k(String str) {
        this.f21468b = str;
    }

    private boolean a(ne.h0 h0Var, byte[] bArr, int i10) {
        int min = Math.min(h0Var.a(), i10 - this.f21472f);
        h0Var.l(bArr, this.f21472f, min);
        int i11 = this.f21472f + min;
        this.f21472f = i11;
        if (i11 == i10) {
            return true;
        }
        return false;
    }

    private void g() {
        byte[] e10 = this.f21467a.e();
        if (this.f21475i == null) {
            Format g10 = nc.t.g(e10, this.f21469c, this.f21468b, null);
            this.f21475i = g10;
            this.f21470d.b(g10);
        }
        this.f21476j = nc.t.a(e10);
        this.f21474h = (int) ((nc.t.f(e10) * 1000000) / this.f21475i.K);
    }

    private boolean h(ne.h0 h0Var) {
        while (h0Var.a() > 0) {
            int i10 = this.f21473g << 8;
            this.f21473g = i10;
            int H = i10 | h0Var.H();
            this.f21473g = H;
            if (nc.t.d(H)) {
                byte[] e10 = this.f21467a.e();
                int i11 = this.f21473g;
                e10[0] = (byte) ((i11 >> 24) & SetSpanOperation.SPAN_MAX_PRIORITY);
                e10[1] = (byte) ((i11 >> 16) & SetSpanOperation.SPAN_MAX_PRIORITY);
                e10[2] = (byte) ((i11 >> 8) & SetSpanOperation.SPAN_MAX_PRIORITY);
                e10[3] = (byte) (i11 & SetSpanOperation.SPAN_MAX_PRIORITY);
                this.f21472f = 4;
                this.f21473g = 0;
                return true;
            }
        }
        return false;
    }

    @Override // dd.m
    public void b(ne.h0 h0Var) {
        ne.a.i(this.f21470d);
        while (h0Var.a() > 0) {
            int i10 = this.f21471e;
            if (i10 != 0) {
                if (i10 != 1) {
                    if (i10 == 2) {
                        int min = Math.min(h0Var.a(), this.f21476j - this.f21472f);
                        this.f21470d.f(h0Var, min);
                        int i11 = this.f21472f + min;
                        this.f21472f = i11;
                        int i12 = this.f21476j;
                        if (i11 == i12) {
                            long j10 = this.f21477k;
                            if (j10 != -9223372036854775807L) {
                                this.f21470d.d(j10, 1, i12, 0, null);
                                this.f21477k += this.f21474h;
                            }
                            this.f21471e = 0;
                        }
                    } else {
                        throw new IllegalStateException();
                    }
                } else if (a(h0Var, this.f21467a.e(), 18)) {
                    g();
                    this.f21467a.U(0);
                    this.f21470d.f(this.f21467a, 18);
                    this.f21471e = 2;
                }
            } else if (h(h0Var)) {
                this.f21471e = 1;
            }
        }
    }

    @Override // dd.m
    public void c() {
        this.f21471e = 0;
        this.f21472f = 0;
        this.f21473g = 0;
        this.f21477k = -9223372036854775807L;
    }

    @Override // dd.m
    public void e(long j10, int i10) {
        if (j10 != -9223372036854775807L) {
            this.f21477k = j10;
        }
    }

    @Override // dd.m
    public void f(tc.m mVar, i0.d dVar) {
        dVar.a();
        this.f21469c = dVar.b();
        this.f21470d = mVar.c(dVar.c(), 1);
    }

    @Override // dd.m
    public void d() {
    }
}

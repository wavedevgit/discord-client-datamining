package dd;

import com.facebook.react.views.text.internal.span.SetSpanOperation;
import com.google.android.exoplayer2.Format;
import dd.i0;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class k implements m {

    /* renamed from: b  reason: collision with root package name */
    private final String f21892b;

    /* renamed from: c  reason: collision with root package name */
    private String f21893c;

    /* renamed from: d  reason: collision with root package name */
    private tc.b0 f21894d;

    /* renamed from: f  reason: collision with root package name */
    private int f21896f;

    /* renamed from: g  reason: collision with root package name */
    private int f21897g;

    /* renamed from: h  reason: collision with root package name */
    private long f21898h;

    /* renamed from: i  reason: collision with root package name */
    private Format f21899i;

    /* renamed from: j  reason: collision with root package name */
    private int f21900j;

    /* renamed from: a  reason: collision with root package name */
    private final ne.h0 f21891a = new ne.h0(new byte[18]);

    /* renamed from: e  reason: collision with root package name */
    private int f21895e = 0;

    /* renamed from: k  reason: collision with root package name */
    private long f21901k = -9223372036854775807L;

    public k(String str) {
        this.f21892b = str;
    }

    private boolean a(ne.h0 h0Var, byte[] bArr, int i10) {
        int min = Math.min(h0Var.a(), i10 - this.f21896f);
        h0Var.l(bArr, this.f21896f, min);
        int i11 = this.f21896f + min;
        this.f21896f = i11;
        if (i11 == i10) {
            return true;
        }
        return false;
    }

    private void g() {
        byte[] e10 = this.f21891a.e();
        if (this.f21899i == null) {
            Format g10 = nc.t.g(e10, this.f21893c, this.f21892b, null);
            this.f21899i = g10;
            this.f21894d.b(g10);
        }
        this.f21900j = nc.t.a(e10);
        this.f21898h = (int) ((nc.t.f(e10) * 1000000) / this.f21899i.K);
    }

    private boolean h(ne.h0 h0Var) {
        while (h0Var.a() > 0) {
            int i10 = this.f21897g << 8;
            this.f21897g = i10;
            int H = i10 | h0Var.H();
            this.f21897g = H;
            if (nc.t.d(H)) {
                byte[] e10 = this.f21891a.e();
                int i11 = this.f21897g;
                e10[0] = (byte) ((i11 >> 24) & SetSpanOperation.SPAN_MAX_PRIORITY);
                e10[1] = (byte) ((i11 >> 16) & SetSpanOperation.SPAN_MAX_PRIORITY);
                e10[2] = (byte) ((i11 >> 8) & SetSpanOperation.SPAN_MAX_PRIORITY);
                e10[3] = (byte) (i11 & SetSpanOperation.SPAN_MAX_PRIORITY);
                this.f21896f = 4;
                this.f21897g = 0;
                return true;
            }
        }
        return false;
    }

    @Override // dd.m
    public void b(ne.h0 h0Var) {
        ne.a.i(this.f21894d);
        while (h0Var.a() > 0) {
            int i10 = this.f21895e;
            if (i10 != 0) {
                if (i10 != 1) {
                    if (i10 == 2) {
                        int min = Math.min(h0Var.a(), this.f21900j - this.f21896f);
                        this.f21894d.f(h0Var, min);
                        int i11 = this.f21896f + min;
                        this.f21896f = i11;
                        int i12 = this.f21900j;
                        if (i11 == i12) {
                            long j10 = this.f21901k;
                            if (j10 != -9223372036854775807L) {
                                this.f21894d.d(j10, 1, i12, 0, null);
                                this.f21901k += this.f21898h;
                            }
                            this.f21895e = 0;
                        }
                    } else {
                        throw new IllegalStateException();
                    }
                } else if (a(h0Var, this.f21891a.e(), 18)) {
                    g();
                    this.f21891a.U(0);
                    this.f21894d.f(this.f21891a, 18);
                    this.f21895e = 2;
                }
            } else if (h(h0Var)) {
                this.f21895e = 1;
            }
        }
    }

    @Override // dd.m
    public void c() {
        this.f21895e = 0;
        this.f21896f = 0;
        this.f21897g = 0;
        this.f21901k = -9223372036854775807L;
    }

    @Override // dd.m
    public void e(long j10, int i10) {
        if (j10 != -9223372036854775807L) {
            this.f21901k = j10;
        }
    }

    @Override // dd.m
    public void f(tc.m mVar, i0.d dVar) {
        dVar.a();
        this.f21893c = dVar.b();
        this.f21894d = mVar.c(dVar.c(), 1);
    }

    @Override // dd.m
    public void d() {
    }
}

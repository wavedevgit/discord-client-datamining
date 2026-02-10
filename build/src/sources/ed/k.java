package ed;

import com.facebook.react.views.text.internal.span.SetSpanOperation;
import com.google.android.exoplayer2.Format;
import ed.i0;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class k implements m {

    /* renamed from: b  reason: collision with root package name */
    private final String f21387b;

    /* renamed from: c  reason: collision with root package name */
    private String f21388c;

    /* renamed from: d  reason: collision with root package name */
    private uc.b0 f21389d;

    /* renamed from: f  reason: collision with root package name */
    private int f21391f;

    /* renamed from: g  reason: collision with root package name */
    private int f21392g;

    /* renamed from: h  reason: collision with root package name */
    private long f21393h;

    /* renamed from: i  reason: collision with root package name */
    private Format f21394i;

    /* renamed from: j  reason: collision with root package name */
    private int f21395j;

    /* renamed from: a  reason: collision with root package name */
    private final oe.h0 f21386a = new oe.h0(new byte[18]);

    /* renamed from: e  reason: collision with root package name */
    private int f21390e = 0;

    /* renamed from: k  reason: collision with root package name */
    private long f21396k = -9223372036854775807L;

    public k(String str) {
        this.f21387b = str;
    }

    private boolean f(oe.h0 h0Var, byte[] bArr, int i10) {
        int min = Math.min(h0Var.a(), i10 - this.f21391f);
        h0Var.l(bArr, this.f21391f, min);
        int i11 = this.f21391f + min;
        this.f21391f = i11;
        if (i11 == i10) {
            return true;
        }
        return false;
    }

    private void g() {
        byte[] e10 = this.f21386a.e();
        if (this.f21394i == null) {
            Format g10 = oc.t.g(e10, this.f21388c, this.f21387b, null);
            this.f21394i = g10;
            this.f21389d.c(g10);
        }
        this.f21395j = oc.t.a(e10);
        this.f21393h = (int) ((oc.t.f(e10) * 1000000) / this.f21394i.K);
    }

    private boolean h(oe.h0 h0Var) {
        while (h0Var.a() > 0) {
            int i10 = this.f21392g << 8;
            this.f21392g = i10;
            int H = i10 | h0Var.H();
            this.f21392g = H;
            if (oc.t.d(H)) {
                byte[] e10 = this.f21386a.e();
                int i11 = this.f21392g;
                e10[0] = (byte) ((i11 >> 24) & SetSpanOperation.SPAN_MAX_PRIORITY);
                e10[1] = (byte) ((i11 >> 16) & SetSpanOperation.SPAN_MAX_PRIORITY);
                e10[2] = (byte) ((i11 >> 8) & SetSpanOperation.SPAN_MAX_PRIORITY);
                e10[3] = (byte) (i11 & SetSpanOperation.SPAN_MAX_PRIORITY);
                this.f21391f = 4;
                this.f21392g = 0;
                return true;
            }
        }
        return false;
    }

    @Override // ed.m
    public void a(oe.h0 h0Var) {
        oe.a.i(this.f21389d);
        while (h0Var.a() > 0) {
            int i10 = this.f21390e;
            if (i10 != 0) {
                if (i10 != 1) {
                    if (i10 == 2) {
                        int min = Math.min(h0Var.a(), this.f21395j - this.f21391f);
                        this.f21389d.e(h0Var, min);
                        int i11 = this.f21391f + min;
                        this.f21391f = i11;
                        int i12 = this.f21395j;
                        if (i11 == i12) {
                            long j10 = this.f21396k;
                            if (j10 != -9223372036854775807L) {
                                this.f21389d.a(j10, 1, i12, 0, null);
                                this.f21396k += this.f21393h;
                            }
                            this.f21390e = 0;
                        }
                    } else {
                        throw new IllegalStateException();
                    }
                } else if (f(h0Var, this.f21386a.e(), 18)) {
                    g();
                    this.f21386a.U(0);
                    this.f21389d.e(this.f21386a, 18);
                    this.f21390e = 2;
                }
            } else if (h(h0Var)) {
                this.f21390e = 1;
            }
        }
    }

    @Override // ed.m
    public void b() {
        this.f21390e = 0;
        this.f21391f = 0;
        this.f21392g = 0;
        this.f21396k = -9223372036854775807L;
    }

    @Override // ed.m
    public void c(uc.m mVar, i0.d dVar) {
        dVar.a();
        this.f21388c = dVar.b();
        this.f21389d = mVar.c(dVar.c(), 1);
    }

    @Override // ed.m
    public void e(long j10, int i10) {
        if (j10 != -9223372036854775807L) {
            this.f21396k = j10;
        }
    }

    @Override // ed.m
    public void d() {
    }
}

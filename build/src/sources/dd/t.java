package dd;

import androidx.recyclerview.widget.RecyclerView;
import com.google.android.exoplayer2.Format;
import dd.i0;
import nc.u;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class t implements m {

    /* renamed from: a  reason: collision with root package name */
    private final ne.h0 f22061a;

    /* renamed from: b  reason: collision with root package name */
    private final u.a f22062b;

    /* renamed from: c  reason: collision with root package name */
    private final String f22063c;

    /* renamed from: d  reason: collision with root package name */
    private tc.b0 f22064d;

    /* renamed from: e  reason: collision with root package name */
    private String f22065e;

    /* renamed from: f  reason: collision with root package name */
    private int f22066f;

    /* renamed from: g  reason: collision with root package name */
    private int f22067g;

    /* renamed from: h  reason: collision with root package name */
    private boolean f22068h;

    /* renamed from: i  reason: collision with root package name */
    private boolean f22069i;

    /* renamed from: j  reason: collision with root package name */
    private long f22070j;

    /* renamed from: k  reason: collision with root package name */
    private int f22071k;

    /* renamed from: l  reason: collision with root package name */
    private long f22072l;

    public t() {
        this(null);
    }

    private void a(ne.h0 h0Var) {
        boolean z10;
        boolean z11;
        byte[] e10 = h0Var.e();
        int g10 = h0Var.g();
        for (int f10 = h0Var.f(); f10 < g10; f10++) {
            byte b10 = e10[f10];
            if ((b10 & 255) == 255) {
                z10 = true;
            } else {
                z10 = false;
            }
            if (this.f22069i && (b10 & 224) == 224) {
                z11 = true;
            } else {
                z11 = false;
            }
            this.f22069i = z10;
            if (z11) {
                h0Var.U(f10 + 1);
                this.f22069i = false;
                this.f22061a.e()[1] = e10[f10];
                this.f22067g = 2;
                this.f22066f = 1;
                return;
            }
        }
        h0Var.U(g10);
    }

    private void g(ne.h0 h0Var) {
        int min = Math.min(h0Var.a(), this.f22071k - this.f22067g);
        this.f22064d.f(h0Var, min);
        int i10 = this.f22067g + min;
        this.f22067g = i10;
        int i11 = this.f22071k;
        if (i10 < i11) {
            return;
        }
        long j10 = this.f22072l;
        if (j10 != -9223372036854775807L) {
            this.f22064d.d(j10, 1, i11, 0, null);
            this.f22072l += this.f22070j;
        }
        this.f22067g = 0;
        this.f22066f = 0;
    }

    private void h(ne.h0 h0Var) {
        int min = Math.min(h0Var.a(), 4 - this.f22067g);
        h0Var.l(this.f22061a.e(), this.f22067g, min);
        int i10 = this.f22067g + min;
        this.f22067g = i10;
        if (i10 < 4) {
            return;
        }
        this.f22061a.U(0);
        if (!this.f22062b.a(this.f22061a.q())) {
            this.f22067g = 0;
            this.f22066f = 1;
            return;
        }
        u.a aVar = this.f22062b;
        this.f22071k = aVar.f40075c;
        if (!this.f22068h) {
            this.f22070j = (aVar.f40079g * 1000000) / aVar.f40076d;
            this.f22064d.b(new Format.b().U(this.f22065e).g0(this.f22062b.f40074b).Y(RecyclerView.ItemAnimator.FLAG_APPEARED_IN_PRE_LAYOUT).J(this.f22062b.f40077e).h0(this.f22062b.f40076d).X(this.f22063c).G());
            this.f22068h = true;
        }
        this.f22061a.U(0);
        this.f22064d.f(this.f22061a, 4);
        this.f22066f = 2;
    }

    @Override // dd.m
    public void b(ne.h0 h0Var) {
        ne.a.i(this.f22064d);
        while (h0Var.a() > 0) {
            int i10 = this.f22066f;
            if (i10 != 0) {
                if (i10 != 1) {
                    if (i10 == 2) {
                        g(h0Var);
                    } else {
                        throw new IllegalStateException();
                    }
                } else {
                    h(h0Var);
                }
            } else {
                a(h0Var);
            }
        }
    }

    @Override // dd.m
    public void c() {
        this.f22066f = 0;
        this.f22067g = 0;
        this.f22069i = false;
        this.f22072l = -9223372036854775807L;
    }

    @Override // dd.m
    public void e(long j10, int i10) {
        if (j10 != -9223372036854775807L) {
            this.f22072l = j10;
        }
    }

    @Override // dd.m
    public void f(tc.m mVar, i0.d dVar) {
        dVar.a();
        this.f22065e = dVar.b();
        this.f22064d = mVar.c(dVar.c(), 1);
    }

    public t(String str) {
        this.f22066f = 0;
        ne.h0 h0Var = new ne.h0(4);
        this.f22061a = h0Var;
        h0Var.e()[0] = -1;
        this.f22062b = new u.a();
        this.f22072l = -9223372036854775807L;
        this.f22063c = str;
    }

    @Override // dd.m
    public void d() {
    }
}

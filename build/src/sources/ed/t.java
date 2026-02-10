package ed;

import androidx.recyclerview.widget.RecyclerView;
import com.google.android.exoplayer2.Format;
import ed.i0;
import oc.u;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class t implements m {

    /* renamed from: a  reason: collision with root package name */
    private final oe.h0 f21556a;

    /* renamed from: b  reason: collision with root package name */
    private final u.a f21557b;

    /* renamed from: c  reason: collision with root package name */
    private final String f21558c;

    /* renamed from: d  reason: collision with root package name */
    private uc.b0 f21559d;

    /* renamed from: e  reason: collision with root package name */
    private String f21560e;

    /* renamed from: f  reason: collision with root package name */
    private int f21561f;

    /* renamed from: g  reason: collision with root package name */
    private int f21562g;

    /* renamed from: h  reason: collision with root package name */
    private boolean f21563h;

    /* renamed from: i  reason: collision with root package name */
    private boolean f21564i;

    /* renamed from: j  reason: collision with root package name */
    private long f21565j;

    /* renamed from: k  reason: collision with root package name */
    private int f21566k;

    /* renamed from: l  reason: collision with root package name */
    private long f21567l;

    public t() {
        this(null);
    }

    private void f(oe.h0 h0Var) {
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
            if (this.f21564i && (b10 & 224) == 224) {
                z11 = true;
            } else {
                z11 = false;
            }
            this.f21564i = z10;
            if (z11) {
                h0Var.U(f10 + 1);
                this.f21564i = false;
                this.f21556a.e()[1] = e10[f10];
                this.f21562g = 2;
                this.f21561f = 1;
                return;
            }
        }
        h0Var.U(g10);
    }

    private void g(oe.h0 h0Var) {
        int min = Math.min(h0Var.a(), this.f21566k - this.f21562g);
        this.f21559d.e(h0Var, min);
        int i10 = this.f21562g + min;
        this.f21562g = i10;
        int i11 = this.f21566k;
        if (i10 < i11) {
            return;
        }
        long j10 = this.f21567l;
        if (j10 != -9223372036854775807L) {
            this.f21559d.a(j10, 1, i11, 0, null);
            this.f21567l += this.f21565j;
        }
        this.f21562g = 0;
        this.f21561f = 0;
    }

    private void h(oe.h0 h0Var) {
        int min = Math.min(h0Var.a(), 4 - this.f21562g);
        h0Var.l(this.f21556a.e(), this.f21562g, min);
        int i10 = this.f21562g + min;
        this.f21562g = i10;
        if (i10 < 4) {
            return;
        }
        this.f21556a.U(0);
        if (!this.f21557b.a(this.f21556a.q())) {
            this.f21562g = 0;
            this.f21561f = 1;
            return;
        }
        u.a aVar = this.f21557b;
        this.f21566k = aVar.f40507c;
        if (!this.f21563h) {
            this.f21565j = (aVar.f40511g * 1000000) / aVar.f40508d;
            this.f21559d.c(new Format.b().U(this.f21560e).g0(this.f21557b.f40506b).Y(RecyclerView.ItemAnimator.FLAG_APPEARED_IN_PRE_LAYOUT).J(this.f21557b.f40509e).h0(this.f21557b.f40508d).X(this.f21558c).G());
            this.f21563h = true;
        }
        this.f21556a.U(0);
        this.f21559d.e(this.f21556a, 4);
        this.f21561f = 2;
    }

    @Override // ed.m
    public void a(oe.h0 h0Var) {
        oe.a.i(this.f21559d);
        while (h0Var.a() > 0) {
            int i10 = this.f21561f;
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
                f(h0Var);
            }
        }
    }

    @Override // ed.m
    public void b() {
        this.f21561f = 0;
        this.f21562g = 0;
        this.f21564i = false;
        this.f21567l = -9223372036854775807L;
    }

    @Override // ed.m
    public void c(uc.m mVar, i0.d dVar) {
        dVar.a();
        this.f21560e = dVar.b();
        this.f21559d = mVar.c(dVar.c(), 1);
    }

    @Override // ed.m
    public void e(long j10, int i10) {
        if (j10 != -9223372036854775807L) {
            this.f21567l = j10;
        }
    }

    public t(String str) {
        this.f21561f = 0;
        oe.h0 h0Var = new oe.h0(4);
        this.f21556a = h0Var;
        h0Var.e()[0] = -1;
        this.f21557b = new u.a();
        this.f21567l = -9223372036854775807L;
        this.f21558c = str;
    }

    @Override // ed.m
    public void d() {
    }
}

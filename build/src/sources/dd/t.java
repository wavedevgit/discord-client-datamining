package dd;

import androidx.recyclerview.widget.RecyclerView;
import com.google.android.exoplayer2.Format;
import dd.i0;
import nc.u;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class t implements m {

    /* renamed from: a  reason: collision with root package name */
    private final ne.h0 f20712a;

    /* renamed from: b  reason: collision with root package name */
    private final u.a f20713b;

    /* renamed from: c  reason: collision with root package name */
    private final String f20714c;

    /* renamed from: d  reason: collision with root package name */
    private tc.b0 f20715d;

    /* renamed from: e  reason: collision with root package name */
    private String f20716e;

    /* renamed from: f  reason: collision with root package name */
    private int f20717f;

    /* renamed from: g  reason: collision with root package name */
    private int f20718g;

    /* renamed from: h  reason: collision with root package name */
    private boolean f20719h;

    /* renamed from: i  reason: collision with root package name */
    private boolean f20720i;

    /* renamed from: j  reason: collision with root package name */
    private long f20721j;

    /* renamed from: k  reason: collision with root package name */
    private int f20722k;

    /* renamed from: l  reason: collision with root package name */
    private long f20723l;

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
            if (this.f20720i && (b10 & 224) == 224) {
                z11 = true;
            } else {
                z11 = false;
            }
            this.f20720i = z10;
            if (z11) {
                h0Var.U(f10 + 1);
                this.f20720i = false;
                this.f20712a.e()[1] = e10[f10];
                this.f20718g = 2;
                this.f20717f = 1;
                return;
            }
        }
        h0Var.U(g10);
    }

    private void g(ne.h0 h0Var) {
        int min = Math.min(h0Var.a(), this.f20722k - this.f20718g);
        this.f20715d.f(h0Var, min);
        int i10 = this.f20718g + min;
        this.f20718g = i10;
        int i11 = this.f20722k;
        if (i10 < i11) {
            return;
        }
        long j10 = this.f20723l;
        if (j10 != -9223372036854775807L) {
            this.f20715d.d(j10, 1, i11, 0, null);
            this.f20723l += this.f20721j;
        }
        this.f20718g = 0;
        this.f20717f = 0;
    }

    private void h(ne.h0 h0Var) {
        int min = Math.min(h0Var.a(), 4 - this.f20718g);
        h0Var.l(this.f20712a.e(), this.f20718g, min);
        int i10 = this.f20718g + min;
        this.f20718g = i10;
        if (i10 < 4) {
            return;
        }
        this.f20712a.U(0);
        if (!this.f20713b.a(this.f20712a.q())) {
            this.f20718g = 0;
            this.f20717f = 1;
            return;
        }
        u.a aVar = this.f20713b;
        this.f20722k = aVar.f39453c;
        if (!this.f20719h) {
            this.f20721j = (aVar.f39457g * 1000000) / aVar.f39454d;
            this.f20715d.b(new Format.b().U(this.f20716e).g0(this.f20713b.f39452b).Y(RecyclerView.ItemAnimator.FLAG_APPEARED_IN_PRE_LAYOUT).J(this.f20713b.f39455e).h0(this.f20713b.f39454d).X(this.f20714c).G());
            this.f20719h = true;
        }
        this.f20712a.U(0);
        this.f20715d.f(this.f20712a, 4);
        this.f20717f = 2;
    }

    @Override // dd.m
    public void b(ne.h0 h0Var) {
        ne.a.i(this.f20715d);
        while (h0Var.a() > 0) {
            int i10 = this.f20717f;
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
        this.f20717f = 0;
        this.f20718g = 0;
        this.f20720i = false;
        this.f20723l = -9223372036854775807L;
    }

    @Override // dd.m
    public void e(long j10, int i10) {
        if (j10 != -9223372036854775807L) {
            this.f20723l = j10;
        }
    }

    @Override // dd.m
    public void f(tc.m mVar, i0.d dVar) {
        dVar.a();
        this.f20716e = dVar.b();
        this.f20715d = mVar.c(dVar.c(), 1);
    }

    public t(String str) {
        this.f20717f = 0;
        ne.h0 h0Var = new ne.h0(4);
        this.f20712a = h0Var;
        h0Var.e()[0] = -1;
        this.f20713b = new u.a();
        this.f20723l = -9223372036854775807L;
        this.f20714c = str;
    }

    @Override // dd.m
    public void d() {
    }
}

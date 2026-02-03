package dd;

import androidx.recyclerview.widget.RecyclerView;
import com.google.android.exoplayer2.Format;
import dd.i0;
import nc.u;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class t implements m {

    /* renamed from: a  reason: collision with root package name */
    private final ne.h0 f20496a;

    /* renamed from: b  reason: collision with root package name */
    private final u.a f20497b;

    /* renamed from: c  reason: collision with root package name */
    private final String f20498c;

    /* renamed from: d  reason: collision with root package name */
    private tc.b0 f20499d;

    /* renamed from: e  reason: collision with root package name */
    private String f20500e;

    /* renamed from: f  reason: collision with root package name */
    private int f20501f;

    /* renamed from: g  reason: collision with root package name */
    private int f20502g;

    /* renamed from: h  reason: collision with root package name */
    private boolean f20503h;

    /* renamed from: i  reason: collision with root package name */
    private boolean f20504i;

    /* renamed from: j  reason: collision with root package name */
    private long f20505j;

    /* renamed from: k  reason: collision with root package name */
    private int f20506k;

    /* renamed from: l  reason: collision with root package name */
    private long f20507l;

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
            if (this.f20504i && (b10 & 224) == 224) {
                z11 = true;
            } else {
                z11 = false;
            }
            this.f20504i = z10;
            if (z11) {
                h0Var.U(f10 + 1);
                this.f20504i = false;
                this.f20496a.e()[1] = e10[f10];
                this.f20502g = 2;
                this.f20501f = 1;
                return;
            }
        }
        h0Var.U(g10);
    }

    private void g(ne.h0 h0Var) {
        int min = Math.min(h0Var.a(), this.f20506k - this.f20502g);
        this.f20499d.f(h0Var, min);
        int i10 = this.f20502g + min;
        this.f20502g = i10;
        int i11 = this.f20506k;
        if (i10 < i11) {
            return;
        }
        long j10 = this.f20507l;
        if (j10 != -9223372036854775807L) {
            this.f20499d.d(j10, 1, i11, 0, null);
            this.f20507l += this.f20505j;
        }
        this.f20502g = 0;
        this.f20501f = 0;
    }

    private void h(ne.h0 h0Var) {
        int min = Math.min(h0Var.a(), 4 - this.f20502g);
        h0Var.l(this.f20496a.e(), this.f20502g, min);
        int i10 = this.f20502g + min;
        this.f20502g = i10;
        if (i10 < 4) {
            return;
        }
        this.f20496a.U(0);
        if (!this.f20497b.a(this.f20496a.q())) {
            this.f20502g = 0;
            this.f20501f = 1;
            return;
        }
        u.a aVar = this.f20497b;
        this.f20506k = aVar.f39993c;
        if (!this.f20503h) {
            this.f20505j = (aVar.f39997g * 1000000) / aVar.f39994d;
            this.f20499d.b(new Format.b().U(this.f20500e).g0(this.f20497b.f39992b).Y(RecyclerView.ItemAnimator.FLAG_APPEARED_IN_PRE_LAYOUT).J(this.f20497b.f39995e).h0(this.f20497b.f39994d).X(this.f20498c).G());
            this.f20503h = true;
        }
        this.f20496a.U(0);
        this.f20499d.f(this.f20496a, 4);
        this.f20501f = 2;
    }

    @Override // dd.m
    public void b(ne.h0 h0Var) {
        ne.a.i(this.f20499d);
        while (h0Var.a() > 0) {
            int i10 = this.f20501f;
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
        this.f20501f = 0;
        this.f20502g = 0;
        this.f20504i = false;
        this.f20507l = -9223372036854775807L;
    }

    @Override // dd.m
    public void e(long j10, int i10) {
        if (j10 != -9223372036854775807L) {
            this.f20507l = j10;
        }
    }

    @Override // dd.m
    public void f(tc.m mVar, i0.d dVar) {
        dVar.a();
        this.f20500e = dVar.b();
        this.f20499d = mVar.c(dVar.c(), 1);
    }

    public t(String str) {
        this.f20501f = 0;
        ne.h0 h0Var = new ne.h0(4);
        this.f20496a = h0Var;
        h0Var.e()[0] = -1;
        this.f20497b = new u.a();
        this.f20507l = -9223372036854775807L;
        this.f20498c = str;
    }

    @Override // dd.m
    public void d() {
    }
}

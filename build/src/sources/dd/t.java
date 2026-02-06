package dd;

import androidx.recyclerview.widget.RecyclerView;
import com.google.android.exoplayer2.Format;
import dd.i0;
import nc.u;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class t implements m {

    /* renamed from: a  reason: collision with root package name */
    private final ne.h0 f20667a;

    /* renamed from: b  reason: collision with root package name */
    private final u.a f20668b;

    /* renamed from: c  reason: collision with root package name */
    private final String f20669c;

    /* renamed from: d  reason: collision with root package name */
    private tc.b0 f20670d;

    /* renamed from: e  reason: collision with root package name */
    private String f20671e;

    /* renamed from: f  reason: collision with root package name */
    private int f20672f;

    /* renamed from: g  reason: collision with root package name */
    private int f20673g;

    /* renamed from: h  reason: collision with root package name */
    private boolean f20674h;

    /* renamed from: i  reason: collision with root package name */
    private boolean f20675i;

    /* renamed from: j  reason: collision with root package name */
    private long f20676j;

    /* renamed from: k  reason: collision with root package name */
    private int f20677k;

    /* renamed from: l  reason: collision with root package name */
    private long f20678l;

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
            if (this.f20675i && (b10 & 224) == 224) {
                z11 = true;
            } else {
                z11 = false;
            }
            this.f20675i = z10;
            if (z11) {
                h0Var.U(f10 + 1);
                this.f20675i = false;
                this.f20667a.e()[1] = e10[f10];
                this.f20673g = 2;
                this.f20672f = 1;
                return;
            }
        }
        h0Var.U(g10);
    }

    private void g(ne.h0 h0Var) {
        int min = Math.min(h0Var.a(), this.f20677k - this.f20673g);
        this.f20670d.f(h0Var, min);
        int i10 = this.f20673g + min;
        this.f20673g = i10;
        int i11 = this.f20677k;
        if (i10 < i11) {
            return;
        }
        long j10 = this.f20678l;
        if (j10 != -9223372036854775807L) {
            this.f20670d.d(j10, 1, i11, 0, null);
            this.f20678l += this.f20676j;
        }
        this.f20673g = 0;
        this.f20672f = 0;
    }

    private void h(ne.h0 h0Var) {
        int min = Math.min(h0Var.a(), 4 - this.f20673g);
        h0Var.l(this.f20667a.e(), this.f20673g, min);
        int i10 = this.f20673g + min;
        this.f20673g = i10;
        if (i10 < 4) {
            return;
        }
        this.f20667a.U(0);
        if (!this.f20668b.a(this.f20667a.q())) {
            this.f20673g = 0;
            this.f20672f = 1;
            return;
        }
        u.a aVar = this.f20668b;
        this.f20677k = aVar.f38808c;
        if (!this.f20674h) {
            this.f20676j = (aVar.f38812g * 1000000) / aVar.f38809d;
            this.f20670d.b(new Format.b().U(this.f20671e).g0(this.f20668b.f38807b).Y(RecyclerView.ItemAnimator.FLAG_APPEARED_IN_PRE_LAYOUT).J(this.f20668b.f38810e).h0(this.f20668b.f38809d).X(this.f20669c).G());
            this.f20674h = true;
        }
        this.f20667a.U(0);
        this.f20670d.f(this.f20667a, 4);
        this.f20672f = 2;
    }

    @Override // dd.m
    public void b(ne.h0 h0Var) {
        ne.a.i(this.f20670d);
        while (h0Var.a() > 0) {
            int i10 = this.f20672f;
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
        this.f20672f = 0;
        this.f20673g = 0;
        this.f20675i = false;
        this.f20678l = -9223372036854775807L;
    }

    @Override // dd.m
    public void e(long j10, int i10) {
        if (j10 != -9223372036854775807L) {
            this.f20678l = j10;
        }
    }

    @Override // dd.m
    public void f(tc.m mVar, i0.d dVar) {
        dVar.a();
        this.f20671e = dVar.b();
        this.f20670d = mVar.c(dVar.c(), 1);
    }

    public t(String str) {
        this.f20672f = 0;
        ne.h0 h0Var = new ne.h0(4);
        this.f20667a = h0Var;
        h0Var.e()[0] = -1;
        this.f20668b = new u.a();
        this.f20678l = -9223372036854775807L;
        this.f20669c = str;
    }

    @Override // dd.m
    public void d() {
    }
}

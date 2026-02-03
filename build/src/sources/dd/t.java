package dd;

import androidx.recyclerview.widget.RecyclerView;
import com.google.android.exoplayer2.Format;
import dd.i0;
import nc.u;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class t implements m {

    /* renamed from: a  reason: collision with root package name */
    private final ne.h0 f21637a;

    /* renamed from: b  reason: collision with root package name */
    private final u.a f21638b;

    /* renamed from: c  reason: collision with root package name */
    private final String f21639c;

    /* renamed from: d  reason: collision with root package name */
    private tc.b0 f21640d;

    /* renamed from: e  reason: collision with root package name */
    private String f21641e;

    /* renamed from: f  reason: collision with root package name */
    private int f21642f;

    /* renamed from: g  reason: collision with root package name */
    private int f21643g;

    /* renamed from: h  reason: collision with root package name */
    private boolean f21644h;

    /* renamed from: i  reason: collision with root package name */
    private boolean f21645i;

    /* renamed from: j  reason: collision with root package name */
    private long f21646j;

    /* renamed from: k  reason: collision with root package name */
    private int f21647k;

    /* renamed from: l  reason: collision with root package name */
    private long f21648l;

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
            if (this.f21645i && (b10 & 224) == 224) {
                z11 = true;
            } else {
                z11 = false;
            }
            this.f21645i = z10;
            if (z11) {
                h0Var.U(f10 + 1);
                this.f21645i = false;
                this.f21637a.e()[1] = e10[f10];
                this.f21643g = 2;
                this.f21642f = 1;
                return;
            }
        }
        h0Var.U(g10);
    }

    private void g(ne.h0 h0Var) {
        int min = Math.min(h0Var.a(), this.f21647k - this.f21643g);
        this.f21640d.f(h0Var, min);
        int i10 = this.f21643g + min;
        this.f21643g = i10;
        int i11 = this.f21647k;
        if (i10 < i11) {
            return;
        }
        long j10 = this.f21648l;
        if (j10 != -9223372036854775807L) {
            this.f21640d.d(j10, 1, i11, 0, null);
            this.f21648l += this.f21646j;
        }
        this.f21643g = 0;
        this.f21642f = 0;
    }

    private void h(ne.h0 h0Var) {
        int min = Math.min(h0Var.a(), 4 - this.f21643g);
        h0Var.l(this.f21637a.e(), this.f21643g, min);
        int i10 = this.f21643g + min;
        this.f21643g = i10;
        if (i10 < 4) {
            return;
        }
        this.f21637a.U(0);
        if (!this.f21638b.a(this.f21637a.q())) {
            this.f21643g = 0;
            this.f21642f = 1;
            return;
        }
        u.a aVar = this.f21638b;
        this.f21647k = aVar.f39954c;
        if (!this.f21644h) {
            this.f21646j = (aVar.f39958g * 1000000) / aVar.f39955d;
            this.f21640d.b(new Format.b().U(this.f21641e).g0(this.f21638b.f39953b).Y(RecyclerView.ItemAnimator.FLAG_APPEARED_IN_PRE_LAYOUT).J(this.f21638b.f39956e).h0(this.f21638b.f39955d).X(this.f21639c).G());
            this.f21644h = true;
        }
        this.f21637a.U(0);
        this.f21640d.f(this.f21637a, 4);
        this.f21642f = 2;
    }

    @Override // dd.m
    public void b(ne.h0 h0Var) {
        ne.a.i(this.f21640d);
        while (h0Var.a() > 0) {
            int i10 = this.f21642f;
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
        this.f21642f = 0;
        this.f21643g = 0;
        this.f21645i = false;
        this.f21648l = -9223372036854775807L;
    }

    @Override // dd.m
    public void e(long j10, int i10) {
        if (j10 != -9223372036854775807L) {
            this.f21648l = j10;
        }
    }

    @Override // dd.m
    public void f(tc.m mVar, i0.d dVar) {
        dVar.a();
        this.f21641e = dVar.b();
        this.f21640d = mVar.c(dVar.c(), 1);
    }

    public t(String str) {
        this.f21642f = 0;
        ne.h0 h0Var = new ne.h0(4);
        this.f21637a = h0Var;
        h0Var.e()[0] = -1;
        this.f21638b = new u.a();
        this.f21648l = -9223372036854775807L;
        this.f21639c = str;
    }

    @Override // dd.m
    public void d() {
    }
}

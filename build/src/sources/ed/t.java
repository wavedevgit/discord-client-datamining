package ed;

import androidx.recyclerview.widget.RecyclerView;
import com.google.android.exoplayer2.Format;
import ed.i0;
import oc.u;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class t implements m {

    /* renamed from: a  reason: collision with root package name */
    private final oe.h0 f22723a;

    /* renamed from: b  reason: collision with root package name */
    private final u.a f22724b;

    /* renamed from: c  reason: collision with root package name */
    private final String f22725c;

    /* renamed from: d  reason: collision with root package name */
    private uc.b0 f22726d;

    /* renamed from: e  reason: collision with root package name */
    private String f22727e;

    /* renamed from: f  reason: collision with root package name */
    private int f22728f;

    /* renamed from: g  reason: collision with root package name */
    private int f22729g;

    /* renamed from: h  reason: collision with root package name */
    private boolean f22730h;

    /* renamed from: i  reason: collision with root package name */
    private boolean f22731i;

    /* renamed from: j  reason: collision with root package name */
    private long f22732j;

    /* renamed from: k  reason: collision with root package name */
    private int f22733k;

    /* renamed from: l  reason: collision with root package name */
    private long f22734l;

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
            if (this.f22731i && (b10 & 224) == 224) {
                z11 = true;
            } else {
                z11 = false;
            }
            this.f22731i = z10;
            if (z11) {
                h0Var.U(f10 + 1);
                this.f22731i = false;
                this.f22723a.e()[1] = e10[f10];
                this.f22729g = 2;
                this.f22728f = 1;
                return;
            }
        }
        h0Var.U(g10);
    }

    private void g(oe.h0 h0Var) {
        int min = Math.min(h0Var.a(), this.f22733k - this.f22729g);
        this.f22726d.e(h0Var, min);
        int i10 = this.f22729g + min;
        this.f22729g = i10;
        int i11 = this.f22733k;
        if (i10 < i11) {
            return;
        }
        long j10 = this.f22734l;
        if (j10 != -9223372036854775807L) {
            this.f22726d.a(j10, 1, i11, 0, null);
            this.f22734l += this.f22732j;
        }
        this.f22729g = 0;
        this.f22728f = 0;
    }

    private void h(oe.h0 h0Var) {
        int min = Math.min(h0Var.a(), 4 - this.f22729g);
        h0Var.l(this.f22723a.e(), this.f22729g, min);
        int i10 = this.f22729g + min;
        this.f22729g = i10;
        if (i10 < 4) {
            return;
        }
        this.f22723a.U(0);
        if (!this.f22724b.a(this.f22723a.q())) {
            this.f22729g = 0;
            this.f22728f = 1;
            return;
        }
        u.a aVar = this.f22724b;
        this.f22733k = aVar.f38833c;
        if (!this.f22730h) {
            this.f22732j = (aVar.f38837g * 1000000) / aVar.f38834d;
            this.f22726d.c(new Format.b().U(this.f22727e).g0(this.f22724b.f38832b).Y(RecyclerView.ItemAnimator.FLAG_APPEARED_IN_PRE_LAYOUT).J(this.f22724b.f38835e).h0(this.f22724b.f38834d).X(this.f22725c).G());
            this.f22730h = true;
        }
        this.f22723a.U(0);
        this.f22726d.e(this.f22723a, 4);
        this.f22728f = 2;
    }

    @Override // ed.m
    public void a(oe.h0 h0Var) {
        oe.a.i(this.f22726d);
        while (h0Var.a() > 0) {
            int i10 = this.f22728f;
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
        this.f22728f = 0;
        this.f22729g = 0;
        this.f22731i = false;
        this.f22734l = -9223372036854775807L;
    }

    @Override // ed.m
    public void c(uc.m mVar, i0.d dVar) {
        dVar.a();
        this.f22727e = dVar.b();
        this.f22726d = mVar.c(dVar.c(), 1);
    }

    @Override // ed.m
    public void e(long j10, int i10) {
        if (j10 != -9223372036854775807L) {
            this.f22734l = j10;
        }
    }

    public t(String str) {
        this.f22728f = 0;
        oe.h0 h0Var = new oe.h0(4);
        this.f22723a = h0Var;
        h0Var.e()[0] = -1;
        this.f22724b = new u.a();
        this.f22734l = -9223372036854775807L;
        this.f22725c = str;
    }

    @Override // ed.m
    public void d() {
    }
}

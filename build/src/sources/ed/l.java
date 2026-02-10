package ed;

import com.google.android.exoplayer2.Format;
import ed.i0;
import java.util.Collections;
import java.util.List;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class l implements m {

    /* renamed from: a  reason: collision with root package name */
    private final List f21399a;

    /* renamed from: b  reason: collision with root package name */
    private final uc.b0[] f21400b;

    /* renamed from: c  reason: collision with root package name */
    private boolean f21401c;

    /* renamed from: d  reason: collision with root package name */
    private int f21402d;

    /* renamed from: e  reason: collision with root package name */
    private int f21403e;

    /* renamed from: f  reason: collision with root package name */
    private long f21404f = -9223372036854775807L;

    public l(List list) {
        this.f21399a = list;
        this.f21400b = new uc.b0[list.size()];
    }

    private boolean f(oe.h0 h0Var, int i10) {
        if (h0Var.a() == 0) {
            return false;
        }
        if (h0Var.H() != i10) {
            this.f21401c = false;
        }
        this.f21402d--;
        return this.f21401c;
    }

    @Override // ed.m
    public void a(oe.h0 h0Var) {
        uc.b0[] b0VarArr;
        if (this.f21401c) {
            if (this.f21402d != 2 || f(h0Var, 32)) {
                if (this.f21402d != 1 || f(h0Var, 0)) {
                    int f10 = h0Var.f();
                    int a10 = h0Var.a();
                    for (uc.b0 b0Var : this.f21400b) {
                        h0Var.U(f10);
                        b0Var.e(h0Var, a10);
                    }
                    this.f21403e += a10;
                }
            }
        }
    }

    @Override // ed.m
    public void b() {
        this.f21401c = false;
        this.f21404f = -9223372036854775807L;
    }

    @Override // ed.m
    public void c(uc.m mVar, i0.d dVar) {
        for (int i10 = 0; i10 < this.f21400b.length; i10++) {
            i0.a aVar = (i0.a) this.f21399a.get(i10);
            dVar.a();
            uc.b0 c10 = mVar.c(dVar.c(), 3);
            c10.c(new Format.b().U(dVar.b()).g0("application/dvbsubs").V(Collections.singletonList(aVar.f21374c)).X(aVar.f21372a).G());
            this.f21400b[i10] = c10;
        }
    }

    @Override // ed.m
    public void d() {
        if (this.f21401c) {
            if (this.f21404f != -9223372036854775807L) {
                for (uc.b0 b0Var : this.f21400b) {
                    b0Var.a(this.f21404f, 1, this.f21403e, 0, null);
                }
            }
            this.f21401c = false;
        }
    }

    @Override // ed.m
    public void e(long j10, int i10) {
        if ((i10 & 4) == 0) {
            return;
        }
        this.f21401c = true;
        if (j10 != -9223372036854775807L) {
            this.f21404f = j10;
        }
        this.f21403e = 0;
        this.f21402d = 2;
    }
}

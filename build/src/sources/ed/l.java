package ed;

import com.google.android.exoplayer2.Format;
import ed.i0;
import java.util.Collections;
import java.util.List;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class l implements m {

    /* renamed from: a  reason: collision with root package name */
    private final List f22566a;

    /* renamed from: b  reason: collision with root package name */
    private final uc.b0[] f22567b;

    /* renamed from: c  reason: collision with root package name */
    private boolean f22568c;

    /* renamed from: d  reason: collision with root package name */
    private int f22569d;

    /* renamed from: e  reason: collision with root package name */
    private int f22570e;

    /* renamed from: f  reason: collision with root package name */
    private long f22571f = -9223372036854775807L;

    public l(List list) {
        this.f22566a = list;
        this.f22567b = new uc.b0[list.size()];
    }

    private boolean f(oe.h0 h0Var, int i10) {
        if (h0Var.a() == 0) {
            return false;
        }
        if (h0Var.H() != i10) {
            this.f22568c = false;
        }
        this.f22569d--;
        return this.f22568c;
    }

    @Override // ed.m
    public void a(oe.h0 h0Var) {
        uc.b0[] b0VarArr;
        if (this.f22568c) {
            if (this.f22569d != 2 || f(h0Var, 32)) {
                if (this.f22569d != 1 || f(h0Var, 0)) {
                    int f10 = h0Var.f();
                    int a10 = h0Var.a();
                    for (uc.b0 b0Var : this.f22567b) {
                        h0Var.U(f10);
                        b0Var.e(h0Var, a10);
                    }
                    this.f22570e += a10;
                }
            }
        }
    }

    @Override // ed.m
    public void b() {
        this.f22568c = false;
        this.f22571f = -9223372036854775807L;
    }

    @Override // ed.m
    public void c(uc.m mVar, i0.d dVar) {
        for (int i10 = 0; i10 < this.f22567b.length; i10++) {
            i0.a aVar = (i0.a) this.f22566a.get(i10);
            dVar.a();
            uc.b0 c10 = mVar.c(dVar.c(), 3);
            c10.c(new Format.b().U(dVar.b()).g0("application/dvbsubs").V(Collections.singletonList(aVar.f22541c)).X(aVar.f22539a).G());
            this.f22567b[i10] = c10;
        }
    }

    @Override // ed.m
    public void d() {
        if (this.f22568c) {
            if (this.f22571f != -9223372036854775807L) {
                for (uc.b0 b0Var : this.f22567b) {
                    b0Var.a(this.f22571f, 1, this.f22570e, 0, null);
                }
            }
            this.f22568c = false;
        }
    }

    @Override // ed.m
    public void e(long j10, int i10) {
        if ((i10 & 4) == 0) {
            return;
        }
        this.f22568c = true;
        if (j10 != -9223372036854775807L) {
            this.f22571f = j10;
        }
        this.f22570e = 0;
        this.f22569d = 2;
    }
}

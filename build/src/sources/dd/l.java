package dd;

import com.google.android.exoplayer2.Format;
import dd.i0;
import java.util.Collections;
import java.util.List;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class l implements m {

    /* renamed from: a  reason: collision with root package name */
    private final List f20555a;

    /* renamed from: b  reason: collision with root package name */
    private final tc.b0[] f20556b;

    /* renamed from: c  reason: collision with root package name */
    private boolean f20557c;

    /* renamed from: d  reason: collision with root package name */
    private int f20558d;

    /* renamed from: e  reason: collision with root package name */
    private int f20559e;

    /* renamed from: f  reason: collision with root package name */
    private long f20560f = -9223372036854775807L;

    public l(List list) {
        this.f20555a = list;
        this.f20556b = new tc.b0[list.size()];
    }

    private boolean a(ne.h0 h0Var, int i10) {
        if (h0Var.a() == 0) {
            return false;
        }
        if (h0Var.H() != i10) {
            this.f20557c = false;
        }
        this.f20558d--;
        return this.f20557c;
    }

    @Override // dd.m
    public void b(ne.h0 h0Var) {
        tc.b0[] b0VarArr;
        if (this.f20557c) {
            if (this.f20558d != 2 || a(h0Var, 32)) {
                if (this.f20558d != 1 || a(h0Var, 0)) {
                    int f10 = h0Var.f();
                    int a10 = h0Var.a();
                    for (tc.b0 b0Var : this.f20556b) {
                        h0Var.U(f10);
                        b0Var.f(h0Var, a10);
                    }
                    this.f20559e += a10;
                }
            }
        }
    }

    @Override // dd.m
    public void c() {
        this.f20557c = false;
        this.f20560f = -9223372036854775807L;
    }

    @Override // dd.m
    public void d() {
        if (this.f20557c) {
            if (this.f20560f != -9223372036854775807L) {
                for (tc.b0 b0Var : this.f20556b) {
                    b0Var.d(this.f20560f, 1, this.f20559e, 0, null);
                }
            }
            this.f20557c = false;
        }
    }

    @Override // dd.m
    public void e(long j10, int i10) {
        if ((i10 & 4) == 0) {
            return;
        }
        this.f20557c = true;
        if (j10 != -9223372036854775807L) {
            this.f20560f = j10;
        }
        this.f20559e = 0;
        this.f20558d = 2;
    }

    @Override // dd.m
    public void f(tc.m mVar, i0.d dVar) {
        for (int i10 = 0; i10 < this.f20556b.length; i10++) {
            i0.a aVar = (i0.a) this.f20555a.get(i10);
            dVar.a();
            tc.b0 c10 = mVar.c(dVar.c(), 3);
            c10.b(new Format.b().U(dVar.b()).g0("application/dvbsubs").V(Collections.singletonList(aVar.f20530c)).X(aVar.f20528a).G());
            this.f20556b[i10] = c10;
        }
    }
}

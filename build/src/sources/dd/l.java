package dd;

import com.google.android.exoplayer2.Format;
import dd.i0;
import java.util.Collections;
import java.util.List;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class l implements m {

    /* renamed from: a  reason: collision with root package name */
    private final List f20339a;

    /* renamed from: b  reason: collision with root package name */
    private final tc.b0[] f20340b;

    /* renamed from: c  reason: collision with root package name */
    private boolean f20341c;

    /* renamed from: d  reason: collision with root package name */
    private int f20342d;

    /* renamed from: e  reason: collision with root package name */
    private int f20343e;

    /* renamed from: f  reason: collision with root package name */
    private long f20344f = -9223372036854775807L;

    public l(List list) {
        this.f20339a = list;
        this.f20340b = new tc.b0[list.size()];
    }

    private boolean a(ne.h0 h0Var, int i10) {
        if (h0Var.a() == 0) {
            return false;
        }
        if (h0Var.H() != i10) {
            this.f20341c = false;
        }
        this.f20342d--;
        return this.f20341c;
    }

    @Override // dd.m
    public void b(ne.h0 h0Var) {
        tc.b0[] b0VarArr;
        if (this.f20341c) {
            if (this.f20342d != 2 || a(h0Var, 32)) {
                if (this.f20342d != 1 || a(h0Var, 0)) {
                    int f10 = h0Var.f();
                    int a10 = h0Var.a();
                    for (tc.b0 b0Var : this.f20340b) {
                        h0Var.U(f10);
                        b0Var.f(h0Var, a10);
                    }
                    this.f20343e += a10;
                }
            }
        }
    }

    @Override // dd.m
    public void c() {
        this.f20341c = false;
        this.f20344f = -9223372036854775807L;
    }

    @Override // dd.m
    public void d() {
        if (this.f20341c) {
            if (this.f20344f != -9223372036854775807L) {
                for (tc.b0 b0Var : this.f20340b) {
                    b0Var.d(this.f20344f, 1, this.f20343e, 0, null);
                }
            }
            this.f20341c = false;
        }
    }

    @Override // dd.m
    public void e(long j10, int i10) {
        if ((i10 & 4) == 0) {
            return;
        }
        this.f20341c = true;
        if (j10 != -9223372036854775807L) {
            this.f20344f = j10;
        }
        this.f20343e = 0;
        this.f20342d = 2;
    }

    @Override // dd.m
    public void f(tc.m mVar, i0.d dVar) {
        for (int i10 = 0; i10 < this.f20340b.length; i10++) {
            i0.a aVar = (i0.a) this.f20339a.get(i10);
            dVar.a();
            tc.b0 c10 = mVar.c(dVar.c(), 3);
            c10.b(new Format.b().U(dVar.b()).g0("application/dvbsubs").V(Collections.singletonList(aVar.f20314c)).X(aVar.f20312a).G());
            this.f20340b[i10] = c10;
        }
    }
}

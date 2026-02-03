package dd;

import com.google.android.exoplayer2.Format;
import dd.i0;
import java.util.Collections;
import java.util.List;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class l implements m {

    /* renamed from: a  reason: collision with root package name */
    private final List f21480a;

    /* renamed from: b  reason: collision with root package name */
    private final tc.b0[] f21481b;

    /* renamed from: c  reason: collision with root package name */
    private boolean f21482c;

    /* renamed from: d  reason: collision with root package name */
    private int f21483d;

    /* renamed from: e  reason: collision with root package name */
    private int f21484e;

    /* renamed from: f  reason: collision with root package name */
    private long f21485f = -9223372036854775807L;

    public l(List list) {
        this.f21480a = list;
        this.f21481b = new tc.b0[list.size()];
    }

    private boolean a(ne.h0 h0Var, int i10) {
        if (h0Var.a() == 0) {
            return false;
        }
        if (h0Var.H() != i10) {
            this.f21482c = false;
        }
        this.f21483d--;
        return this.f21482c;
    }

    @Override // dd.m
    public void b(ne.h0 h0Var) {
        tc.b0[] b0VarArr;
        if (this.f21482c) {
            if (this.f21483d != 2 || a(h0Var, 32)) {
                if (this.f21483d != 1 || a(h0Var, 0)) {
                    int f10 = h0Var.f();
                    int a10 = h0Var.a();
                    for (tc.b0 b0Var : this.f21481b) {
                        h0Var.U(f10);
                        b0Var.f(h0Var, a10);
                    }
                    this.f21484e += a10;
                }
            }
        }
    }

    @Override // dd.m
    public void c() {
        this.f21482c = false;
        this.f21485f = -9223372036854775807L;
    }

    @Override // dd.m
    public void d() {
        if (this.f21482c) {
            if (this.f21485f != -9223372036854775807L) {
                for (tc.b0 b0Var : this.f21481b) {
                    b0Var.d(this.f21485f, 1, this.f21484e, 0, null);
                }
            }
            this.f21482c = false;
        }
    }

    @Override // dd.m
    public void e(long j10, int i10) {
        if ((i10 & 4) == 0) {
            return;
        }
        this.f21482c = true;
        if (j10 != -9223372036854775807L) {
            this.f21485f = j10;
        }
        this.f21484e = 0;
        this.f21483d = 2;
    }

    @Override // dd.m
    public void f(tc.m mVar, i0.d dVar) {
        for (int i10 = 0; i10 < this.f21481b.length; i10++) {
            i0.a aVar = (i0.a) this.f21480a.get(i10);
            dVar.a();
            tc.b0 c10 = mVar.c(dVar.c(), 3);
            c10.b(new Format.b().U(dVar.b()).g0("application/dvbsubs").V(Collections.singletonList(aVar.f21455c)).X(aVar.f21453a).G());
            this.f21481b[i10] = c10;
        }
    }
}

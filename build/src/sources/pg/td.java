package pg;

import java.io.UnsupportedEncodingException;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class td implements ed {

    /* renamed from: a  reason: collision with root package name */
    private final ea f44762a;

    /* renamed from: b  reason: collision with root package name */
    private fc f44763b = new fc();

    /* renamed from: c  reason: collision with root package name */
    private final int f44764c;

    private td(ea eaVar, int i10) {
        this.f44762a = eaVar;
        ce.a();
        this.f44764c = i10;
    }

    public static ed e(ea eaVar) {
        return new td(eaVar, 0);
    }

    public static ed f(ea eaVar, int i10) {
        return new td(eaVar, 1);
    }

    @Override // pg.ed
    public final byte[] a(int i10, boolean z10) {
        boolean z11;
        fc fcVar = this.f44763b;
        if (1 != (i10 ^ 1)) {
            z11 = false;
        } else {
            z11 = true;
        }
        fcVar.f(Boolean.valueOf(z11));
        this.f44763b.e(Boolean.FALSE);
        this.f44762a.i(this.f44763b.m());
        try {
            ce.a();
            if (i10 == 0) {
                return new aj.d().j(f8.f44218a).k(true).i().b(this.f44762a.j()).getBytes("utf-8");
            }
            ga j10 = this.f44762a.j();
            a2 a2Var = new a2();
            f8.f44218a.a(a2Var);
            return a2Var.b().a(j10);
        } catch (UnsupportedEncodingException e10) {
            throw new UnsupportedOperationException("Failed to covert logging to UTF-8 byte array", e10);
        }
    }

    @Override // pg.ed
    public final String b() {
        hc f10 = this.f44762a.j().f();
        if (f10 != null && !d.b(f10.k())) {
            return (String) gf.q.l(f10.k());
        }
        return "NA";
    }

    @Override // pg.ed
    public final ed c(da daVar) {
        this.f44762a.f(daVar);
        return this;
    }

    @Override // pg.ed
    public final ed d(fc fcVar) {
        this.f44763b = fcVar;
        return this;
    }

    @Override // pg.ed
    public final int zza() {
        return this.f44764c;
    }
}

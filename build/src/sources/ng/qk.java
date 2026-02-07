package ng;

import java.io.UnsupportedEncodingException;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class qk implements ck {

    /* renamed from: a  reason: collision with root package name */
    private final ze f40260a;

    /* renamed from: b  reason: collision with root package name */
    private yi f40261b = new yi();

    /* renamed from: c  reason: collision with root package name */
    private final int f40262c;

    private qk(ze zeVar, int i10) {
        this.f40260a = zeVar;
        al.a();
        this.f40262c = i10;
    }

    public static ck e(ze zeVar) {
        return new qk(zeVar, 0);
    }

    public static ck f(ze zeVar, int i10) {
        return new qk(zeVar, 1);
    }

    @Override // ng.ck
    public final byte[] a(int i10, boolean z10) {
        boolean z11;
        int i11 = i10 ^ 1;
        yi yiVar = this.f40261b;
        if (1 != i11) {
            z11 = false;
        } else {
            z11 = true;
        }
        yiVar.f(Boolean.valueOf(z11));
        this.f40261b.e(Boolean.FALSE);
        this.f40260a.i(this.f40261b.m());
        try {
            al.a();
            if (i10 == 0) {
                return new aj.d().j(qc.f40259a).k(true).i().b(this.f40260a.j()).getBytes("utf-8");
            }
            bf j10 = this.f40260a.j();
            t2 t2Var = new t2();
            qc.f40259a.a(t2Var);
            return t2Var.b().a(j10);
        } catch (UnsupportedEncodingException e10) {
            throw new UnsupportedOperationException("Failed to covert logging to UTF-8 byte array", e10);
        }
    }

    @Override // ng.ck
    public final String b() {
        aj g10 = this.f40260a.j().g();
        if (g10 != null && !v.b(g10.k())) {
            return (String) gf.q.l(g10.k());
        }
        return "NA";
    }

    @Override // ng.ck
    public final ck c(yi yiVar) {
        this.f40261b = yiVar;
        return this;
    }

    @Override // ng.ck
    public final ck d(ye yeVar) {
        this.f40260a.f(yeVar);
        return this;
    }

    @Override // ng.ck
    public final int zza() {
        return this.f40262c;
    }
}

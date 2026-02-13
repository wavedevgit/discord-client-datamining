package og;

import java.io.UnsupportedEncodingException;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class qk implements ck {

    /* renamed from: a  reason: collision with root package name */
    private final ze f40180a;

    /* renamed from: b  reason: collision with root package name */
    private yi f40181b = new yi();

    /* renamed from: c  reason: collision with root package name */
    private final int f40182c;

    private qk(ze zeVar, int i10) {
        this.f40180a = zeVar;
        al.a();
        this.f40182c = i10;
    }

    public static ck e(ze zeVar) {
        return new qk(zeVar, 0);
    }

    public static ck f(ze zeVar, int i10) {
        return new qk(zeVar, 1);
    }

    @Override // og.ck
    public final byte[] a(int i10, boolean z10) {
        boolean z11;
        int i11 = i10 ^ 1;
        yi yiVar = this.f40181b;
        if (1 != i11) {
            z11 = false;
        } else {
            z11 = true;
        }
        yiVar.f(Boolean.valueOf(z11));
        this.f40181b.e(Boolean.FALSE);
        this.f40180a.i(this.f40181b.m());
        try {
            al.a();
            if (i10 == 0) {
                return new dj.d().j(qc.f40179a).k(true).i().b(this.f40180a.j()).getBytes("utf-8");
            }
            bf j10 = this.f40180a.j();
            t2 t2Var = new t2();
            qc.f40179a.a(t2Var);
            return t2Var.b().a(j10);
        } catch (UnsupportedEncodingException e10) {
            throw new UnsupportedOperationException("Failed to covert logging to UTF-8 byte array", e10);
        }
    }

    @Override // og.ck
    public final String b() {
        aj g10 = this.f40180a.j().g();
        if (g10 != null && !v.b(g10.k())) {
            return (String) hf.q.l(g10.k());
        }
        return "NA";
    }

    @Override // og.ck
    public final ck c(ye yeVar) {
        this.f40180a.f(yeVar);
        return this;
    }

    @Override // og.ck
    public final ck d(yi yiVar) {
        this.f40181b = yiVar;
        return this;
    }

    @Override // og.ck
    public final int zza() {
        return this.f40182c;
    }
}

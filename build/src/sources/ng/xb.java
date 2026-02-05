package ng;

import java.io.UnsupportedEncodingException;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class xb implements ob {

    /* renamed from: a  reason: collision with root package name */
    private final f8 f41246a;

    /* renamed from: b  reason: collision with root package name */
    private ja f41247b = new ja();

    private xb(f8 f8Var, int i10) {
        this.f41246a = f8Var;
        jc.a();
    }

    public static ob e(f8 f8Var) {
        return new xb(f8Var, 0);
    }

    @Override // ng.ob
    public final String a() {
        ma c10 = this.f41246a.f().c();
        if (c10 != null && !g5.b(c10.k())) {
            return (String) gf.q.l(c10.k());
        }
        return "NA";
    }

    @Override // ng.ob
    public final ob b(ja jaVar) {
        this.f41247b = jaVar;
        return this;
    }

    @Override // ng.ob
    public final byte[] c(int i10, boolean z10) {
        boolean z11;
        int i11 = i10 ^ 1;
        ja jaVar = this.f41247b;
        if (1 != i11) {
            z11 = false;
        } else {
            z11 = true;
        }
        jaVar.f(Boolean.valueOf(z11));
        this.f41247b.e(Boolean.FALSE);
        this.f41246a.e(this.f41247b.m());
        try {
            jc.a();
            if (i10 == 0) {
                return new zi.d().j(m6.f40825a).k(true).i().b(this.f41246a.f()).getBytes("utf-8");
            }
            h8 f10 = this.f41246a.f();
            n nVar = new n();
            m6.f40825a.a(nVar);
            return nVar.b().a(f10);
        } catch (UnsupportedEncodingException e10) {
            throw new UnsupportedOperationException("Failed to covert logging to UTF-8 byte array", e10);
        }
    }

    @Override // ng.ob
    public final ob d(e8 e8Var) {
        this.f41246a.c(e8Var);
        return this;
    }
}

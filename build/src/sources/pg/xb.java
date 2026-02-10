package pg;

import java.io.UnsupportedEncodingException;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class xb implements ob {

    /* renamed from: a  reason: collision with root package name */
    private final f8 f42664a;

    /* renamed from: b  reason: collision with root package name */
    private ja f42665b = new ja();

    private xb(f8 f8Var, int i10) {
        this.f42664a = f8Var;
        jc.a();
    }

    public static ob e(f8 f8Var) {
        return new xb(f8Var, 0);
    }

    @Override // pg.ob
    public final String a() {
        ma c10 = this.f42664a.f().c();
        if (c10 != null && !g5.b(c10.k())) {
            return (String) hf.q.l(c10.k());
        }
        return "NA";
    }

    @Override // pg.ob
    public final ob b(ja jaVar) {
        this.f42665b = jaVar;
        return this;
    }

    @Override // pg.ob
    public final byte[] c(int i10, boolean z10) {
        boolean z11;
        int i11 = i10 ^ 1;
        ja jaVar = this.f42665b;
        if (1 != i11) {
            z11 = false;
        } else {
            z11 = true;
        }
        jaVar.f(Boolean.valueOf(z11));
        this.f42665b.e(Boolean.FALSE);
        this.f42664a.e(this.f42665b.m());
        try {
            jc.a();
            if (i10 == 0) {
                return new dj.d().j(m6.f42243a).k(true).i().b(this.f42664a.f()).getBytes("utf-8");
            }
            h8 f10 = this.f42664a.f();
            n nVar = new n();
            m6.f42243a.a(nVar);
            return nVar.b().a(f10);
        } catch (UnsupportedEncodingException e10) {
            throw new UnsupportedOperationException("Failed to covert logging to UTF-8 byte array", e10);
        }
    }

    @Override // pg.ob
    public final ob d(e8 e8Var) {
        this.f42664a.c(e8Var);
        return this;
    }
}

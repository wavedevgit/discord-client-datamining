package jv;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public abstract class r {

    /* renamed from: a  reason: collision with root package name */
    private r f31464a = null;

    /* renamed from: b  reason: collision with root package name */
    private r f31465b = null;

    /* renamed from: c  reason: collision with root package name */
    private r f31466c = null;

    /* renamed from: d  reason: collision with root package name */
    private r f31467d = null;

    /* renamed from: e  reason: collision with root package name */
    private r f31468e = null;

    public abstract void a(y yVar);

    public void b(r rVar) {
        rVar.l();
        rVar.j(this);
        r rVar2 = this.f31466c;
        if (rVar2 != null) {
            rVar2.f31468e = rVar;
            rVar.f31467d = rVar2;
            this.f31466c = rVar;
            return;
        }
        this.f31465b = rVar;
        this.f31466c = rVar;
    }

    public r c() {
        return this.f31465b;
    }

    public r d() {
        return this.f31466c;
    }

    public r e() {
        return this.f31468e;
    }

    public r f() {
        return this.f31464a;
    }

    public r g() {
        return this.f31467d;
    }

    public void h(r rVar) {
        rVar.l();
        r rVar2 = this.f31468e;
        rVar.f31468e = rVar2;
        if (rVar2 != null) {
            rVar2.f31467d = rVar;
        }
        rVar.f31467d = this;
        this.f31468e = rVar;
        r rVar3 = this.f31464a;
        rVar.f31464a = rVar3;
        if (rVar.f31468e == null) {
            rVar3.f31466c = rVar;
        }
    }

    public void i(r rVar) {
        rVar.l();
        r rVar2 = this.f31467d;
        rVar.f31467d = rVar2;
        if (rVar2 != null) {
            rVar2.f31468e = rVar;
        }
        rVar.f31468e = this;
        this.f31467d = rVar;
        r rVar3 = this.f31464a;
        rVar.f31464a = rVar3;
        if (rVar.f31467d == null) {
            rVar3.f31465b = rVar;
        }
    }

    /* JADX INFO: Access modifiers changed from: protected */
    public void j(r rVar) {
        this.f31464a = rVar;
    }

    protected String k() {
        return "";
    }

    public void l() {
        r rVar = this.f31467d;
        if (rVar != null) {
            rVar.f31468e = this.f31468e;
        } else {
            r rVar2 = this.f31464a;
            if (rVar2 != null) {
                rVar2.f31465b = this.f31468e;
            }
        }
        r rVar3 = this.f31468e;
        if (rVar3 != null) {
            rVar3.f31467d = rVar;
        } else {
            r rVar4 = this.f31464a;
            if (rVar4 != null) {
                rVar4.f31466c = rVar;
            }
        }
        this.f31464a = null;
        this.f31468e = null;
        this.f31467d = null;
    }

    public String toString() {
        return getClass().getSimpleName() + "{" + k() + "}";
    }
}

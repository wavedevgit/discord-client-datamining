package qv;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public abstract class r {

    /* renamed from: a  reason: collision with root package name */
    private r f48336a = null;

    /* renamed from: b  reason: collision with root package name */
    private r f48337b = null;

    /* renamed from: c  reason: collision with root package name */
    private r f48338c = null;

    /* renamed from: d  reason: collision with root package name */
    private r f48339d = null;

    /* renamed from: e  reason: collision with root package name */
    private r f48340e = null;

    public abstract void a(y yVar);

    public void b(r rVar) {
        rVar.l();
        rVar.j(this);
        r rVar2 = this.f48338c;
        if (rVar2 != null) {
            rVar2.f48340e = rVar;
            rVar.f48339d = rVar2;
            this.f48338c = rVar;
            return;
        }
        this.f48337b = rVar;
        this.f48338c = rVar;
    }

    public r c() {
        return this.f48337b;
    }

    public r d() {
        return this.f48338c;
    }

    public r e() {
        return this.f48340e;
    }

    public r f() {
        return this.f48336a;
    }

    public r g() {
        return this.f48339d;
    }

    public void h(r rVar) {
        rVar.l();
        r rVar2 = this.f48340e;
        rVar.f48340e = rVar2;
        if (rVar2 != null) {
            rVar2.f48339d = rVar;
        }
        rVar.f48339d = this;
        this.f48340e = rVar;
        r rVar3 = this.f48336a;
        rVar.f48336a = rVar3;
        if (rVar.f48340e == null) {
            rVar3.f48338c = rVar;
        }
    }

    public void i(r rVar) {
        rVar.l();
        r rVar2 = this.f48339d;
        rVar.f48339d = rVar2;
        if (rVar2 != null) {
            rVar2.f48340e = rVar;
        }
        rVar.f48340e = this;
        this.f48339d = rVar;
        r rVar3 = this.f48336a;
        rVar.f48336a = rVar3;
        if (rVar.f48339d == null) {
            rVar3.f48337b = rVar;
        }
    }

    /* JADX INFO: Access modifiers changed from: protected */
    public void j(r rVar) {
        this.f48336a = rVar;
    }

    protected String k() {
        return "";
    }

    public void l() {
        r rVar = this.f48339d;
        if (rVar != null) {
            rVar.f48340e = this.f48340e;
        } else {
            r rVar2 = this.f48336a;
            if (rVar2 != null) {
                rVar2.f48337b = this.f48340e;
            }
        }
        r rVar3 = this.f48340e;
        if (rVar3 != null) {
            rVar3.f48339d = rVar;
        } else {
            r rVar4 = this.f48336a;
            if (rVar4 != null) {
                rVar4.f48338c = rVar;
            }
        }
        this.f48336a = null;
        this.f48340e = null;
        this.f48339d = null;
    }

    public String toString() {
        return getClass().getSimpleName() + "{" + k() + "}";
    }
}

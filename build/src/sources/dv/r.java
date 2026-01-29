package dv;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public abstract class r {

    /* renamed from: a  reason: collision with root package name */
    private r f22467a = null;

    /* renamed from: b  reason: collision with root package name */
    private r f22468b = null;

    /* renamed from: c  reason: collision with root package name */
    private r f22469c = null;

    /* renamed from: d  reason: collision with root package name */
    private r f22470d = null;

    /* renamed from: e  reason: collision with root package name */
    private r f22471e = null;

    public abstract void a(y yVar);

    public void b(r rVar) {
        rVar.l();
        rVar.j(this);
        r rVar2 = this.f22469c;
        if (rVar2 != null) {
            rVar2.f22471e = rVar;
            rVar.f22470d = rVar2;
            this.f22469c = rVar;
            return;
        }
        this.f22468b = rVar;
        this.f22469c = rVar;
    }

    public r c() {
        return this.f22468b;
    }

    public r d() {
        return this.f22469c;
    }

    public r e() {
        return this.f22471e;
    }

    public r f() {
        return this.f22467a;
    }

    public r g() {
        return this.f22470d;
    }

    public void h(r rVar) {
        rVar.l();
        r rVar2 = this.f22471e;
        rVar.f22471e = rVar2;
        if (rVar2 != null) {
            rVar2.f22470d = rVar;
        }
        rVar.f22470d = this;
        this.f22471e = rVar;
        r rVar3 = this.f22467a;
        rVar.f22467a = rVar3;
        if (rVar.f22471e == null) {
            rVar3.f22469c = rVar;
        }
    }

    public void i(r rVar) {
        rVar.l();
        r rVar2 = this.f22470d;
        rVar.f22470d = rVar2;
        if (rVar2 != null) {
            rVar2.f22471e = rVar;
        }
        rVar.f22471e = this;
        this.f22470d = rVar;
        r rVar3 = this.f22467a;
        rVar.f22467a = rVar3;
        if (rVar.f22470d == null) {
            rVar3.f22468b = rVar;
        }
    }

    /* JADX INFO: Access modifiers changed from: protected */
    public void j(r rVar) {
        this.f22467a = rVar;
    }

    protected String k() {
        return "";
    }

    public void l() {
        r rVar = this.f22470d;
        if (rVar != null) {
            rVar.f22471e = this.f22471e;
        } else {
            r rVar2 = this.f22467a;
            if (rVar2 != null) {
                rVar2.f22468b = this.f22471e;
            }
        }
        r rVar3 = this.f22471e;
        if (rVar3 != null) {
            rVar3.f22470d = rVar;
        } else {
            r rVar4 = this.f22467a;
            if (rVar4 != null) {
                rVar4.f22469c = rVar;
            }
        }
        this.f22467a = null;
        this.f22471e = null;
        this.f22470d = null;
    }

    public String toString() {
        return getClass().getSimpleName() + "{" + k() + "}";
    }
}

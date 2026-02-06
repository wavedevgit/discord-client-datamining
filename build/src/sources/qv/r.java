package qv;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public abstract class r {

    /* renamed from: a  reason: collision with root package name */
    private r f48288a = null;

    /* renamed from: b  reason: collision with root package name */
    private r f48289b = null;

    /* renamed from: c  reason: collision with root package name */
    private r f48290c = null;

    /* renamed from: d  reason: collision with root package name */
    private r f48291d = null;

    /* renamed from: e  reason: collision with root package name */
    private r f48292e = null;

    public abstract void a(y yVar);

    public void b(r rVar) {
        rVar.l();
        rVar.j(this);
        r rVar2 = this.f48290c;
        if (rVar2 != null) {
            rVar2.f48292e = rVar;
            rVar.f48291d = rVar2;
            this.f48290c = rVar;
            return;
        }
        this.f48289b = rVar;
        this.f48290c = rVar;
    }

    public r c() {
        return this.f48289b;
    }

    public r d() {
        return this.f48290c;
    }

    public r e() {
        return this.f48292e;
    }

    public r f() {
        return this.f48288a;
    }

    public r g() {
        return this.f48291d;
    }

    public void h(r rVar) {
        rVar.l();
        r rVar2 = this.f48292e;
        rVar.f48292e = rVar2;
        if (rVar2 != null) {
            rVar2.f48291d = rVar;
        }
        rVar.f48291d = this;
        this.f48292e = rVar;
        r rVar3 = this.f48288a;
        rVar.f48288a = rVar3;
        if (rVar.f48292e == null) {
            rVar3.f48290c = rVar;
        }
    }

    public void i(r rVar) {
        rVar.l();
        r rVar2 = this.f48291d;
        rVar.f48291d = rVar2;
        if (rVar2 != null) {
            rVar2.f48292e = rVar;
        }
        rVar.f48292e = this;
        this.f48291d = rVar;
        r rVar3 = this.f48288a;
        rVar.f48288a = rVar3;
        if (rVar.f48291d == null) {
            rVar3.f48289b = rVar;
        }
    }

    /* JADX INFO: Access modifiers changed from: protected */
    public void j(r rVar) {
        this.f48288a = rVar;
    }

    protected String k() {
        return "";
    }

    public void l() {
        r rVar = this.f48291d;
        if (rVar != null) {
            rVar.f48292e = this.f48292e;
        } else {
            r rVar2 = this.f48288a;
            if (rVar2 != null) {
                rVar2.f48289b = this.f48292e;
            }
        }
        r rVar3 = this.f48292e;
        if (rVar3 != null) {
            rVar3.f48291d = rVar;
        } else {
            r rVar4 = this.f48288a;
            if (rVar4 != null) {
                rVar4.f48290c = rVar;
            }
        }
        this.f48288a = null;
        this.f48292e = null;
        this.f48291d = null;
    }

    public String toString() {
        return getClass().getSimpleName() + "{" + k() + "}";
    }
}

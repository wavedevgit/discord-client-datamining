package aw;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public abstract class r {

    /* renamed from: a  reason: collision with root package name */
    private r f6326a = null;

    /* renamed from: b  reason: collision with root package name */
    private r f6327b = null;

    /* renamed from: c  reason: collision with root package name */
    private r f6328c = null;

    /* renamed from: d  reason: collision with root package name */
    private r f6329d = null;

    /* renamed from: e  reason: collision with root package name */
    private r f6330e = null;

    public abstract void a(y yVar);

    public void b(r rVar) {
        rVar.l();
        rVar.j(this);
        r rVar2 = this.f6328c;
        if (rVar2 != null) {
            rVar2.f6330e = rVar;
            rVar.f6329d = rVar2;
            this.f6328c = rVar;
            return;
        }
        this.f6327b = rVar;
        this.f6328c = rVar;
    }

    public r c() {
        return this.f6327b;
    }

    public r d() {
        return this.f6328c;
    }

    public r e() {
        return this.f6330e;
    }

    public r f() {
        return this.f6326a;
    }

    public r g() {
        return this.f6329d;
    }

    public void h(r rVar) {
        rVar.l();
        r rVar2 = this.f6330e;
        rVar.f6330e = rVar2;
        if (rVar2 != null) {
            rVar2.f6329d = rVar;
        }
        rVar.f6329d = this;
        this.f6330e = rVar;
        r rVar3 = this.f6326a;
        rVar.f6326a = rVar3;
        if (rVar.f6330e == null) {
            rVar3.f6328c = rVar;
        }
    }

    public void i(r rVar) {
        rVar.l();
        r rVar2 = this.f6329d;
        rVar.f6329d = rVar2;
        if (rVar2 != null) {
            rVar2.f6330e = rVar;
        }
        rVar.f6330e = this;
        this.f6329d = rVar;
        r rVar3 = this.f6326a;
        rVar.f6326a = rVar3;
        if (rVar.f6329d == null) {
            rVar3.f6327b = rVar;
        }
    }

    /* JADX INFO: Access modifiers changed from: protected */
    public void j(r rVar) {
        this.f6326a = rVar;
    }

    protected String k() {
        return "";
    }

    public void l() {
        r rVar = this.f6329d;
        if (rVar != null) {
            rVar.f6330e = this.f6330e;
        } else {
            r rVar2 = this.f6326a;
            if (rVar2 != null) {
                rVar2.f6327b = this.f6330e;
            }
        }
        r rVar3 = this.f6330e;
        if (rVar3 != null) {
            rVar3.f6329d = rVar;
        } else {
            r rVar4 = this.f6326a;
            if (rVar4 != null) {
                rVar4.f6328c = rVar;
            }
        }
        this.f6326a = null;
        this.f6330e = null;
        this.f6329d = null;
    }

    public String toString() {
        return getClass().getSimpleName() + "{" + k() + "}";
    }
}

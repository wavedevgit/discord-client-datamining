package gv;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public abstract class r {

    /* renamed from: a  reason: collision with root package name */
    private r f26673a = null;

    /* renamed from: b  reason: collision with root package name */
    private r f26674b = null;

    /* renamed from: c  reason: collision with root package name */
    private r f26675c = null;

    /* renamed from: d  reason: collision with root package name */
    private r f26676d = null;

    /* renamed from: e  reason: collision with root package name */
    private r f26677e = null;

    public abstract void a(y yVar);

    public void b(r rVar) {
        rVar.l();
        rVar.j(this);
        r rVar2 = this.f26675c;
        if (rVar2 != null) {
            rVar2.f26677e = rVar;
            rVar.f26676d = rVar2;
            this.f26675c = rVar;
            return;
        }
        this.f26674b = rVar;
        this.f26675c = rVar;
    }

    public r c() {
        return this.f26674b;
    }

    public r d() {
        return this.f26675c;
    }

    public r e() {
        return this.f26677e;
    }

    public r f() {
        return this.f26673a;
    }

    public r g() {
        return this.f26676d;
    }

    public void h(r rVar) {
        rVar.l();
        r rVar2 = this.f26677e;
        rVar.f26677e = rVar2;
        if (rVar2 != null) {
            rVar2.f26676d = rVar;
        }
        rVar.f26676d = this;
        this.f26677e = rVar;
        r rVar3 = this.f26673a;
        rVar.f26673a = rVar3;
        if (rVar.f26677e == null) {
            rVar3.f26675c = rVar;
        }
    }

    public void i(r rVar) {
        rVar.l();
        r rVar2 = this.f26676d;
        rVar.f26676d = rVar2;
        if (rVar2 != null) {
            rVar2.f26677e = rVar;
        }
        rVar.f26677e = this;
        this.f26676d = rVar;
        r rVar3 = this.f26673a;
        rVar.f26673a = rVar3;
        if (rVar.f26676d == null) {
            rVar3.f26674b = rVar;
        }
    }

    /* JADX INFO: Access modifiers changed from: protected */
    public void j(r rVar) {
        this.f26673a = rVar;
    }

    protected String k() {
        return "";
    }

    public void l() {
        r rVar = this.f26676d;
        if (rVar != null) {
            rVar.f26677e = this.f26677e;
        } else {
            r rVar2 = this.f26673a;
            if (rVar2 != null) {
                rVar2.f26674b = this.f26677e;
            }
        }
        r rVar3 = this.f26677e;
        if (rVar3 != null) {
            rVar3.f26676d = rVar;
        } else {
            r rVar4 = this.f26673a;
            if (rVar4 != null) {
                rVar4.f26675c = rVar;
            }
        }
        this.f26673a = null;
        this.f26677e = null;
        this.f26676d = null;
    }

    public String toString() {
        return getClass().getSimpleName() + "{" + k() + "}";
    }
}

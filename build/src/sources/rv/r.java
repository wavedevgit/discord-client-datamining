package rv;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public abstract class r {

    /* renamed from: a  reason: collision with root package name */
    private r f49454a = null;

    /* renamed from: b  reason: collision with root package name */
    private r f49455b = null;

    /* renamed from: c  reason: collision with root package name */
    private r f49456c = null;

    /* renamed from: d  reason: collision with root package name */
    private r f49457d = null;

    /* renamed from: e  reason: collision with root package name */
    private r f49458e = null;

    public abstract void a(y yVar);

    public void b(r rVar) {
        rVar.l();
        rVar.j(this);
        r rVar2 = this.f49456c;
        if (rVar2 != null) {
            rVar2.f49458e = rVar;
            rVar.f49457d = rVar2;
            this.f49456c = rVar;
            return;
        }
        this.f49455b = rVar;
        this.f49456c = rVar;
    }

    public r c() {
        return this.f49455b;
    }

    public r d() {
        return this.f49456c;
    }

    public r e() {
        return this.f49458e;
    }

    public r f() {
        return this.f49454a;
    }

    public r g() {
        return this.f49457d;
    }

    public void h(r rVar) {
        rVar.l();
        r rVar2 = this.f49458e;
        rVar.f49458e = rVar2;
        if (rVar2 != null) {
            rVar2.f49457d = rVar;
        }
        rVar.f49457d = this;
        this.f49458e = rVar;
        r rVar3 = this.f49454a;
        rVar.f49454a = rVar3;
        if (rVar.f49458e == null) {
            rVar3.f49456c = rVar;
        }
    }

    public void i(r rVar) {
        rVar.l();
        r rVar2 = this.f49457d;
        rVar.f49457d = rVar2;
        if (rVar2 != null) {
            rVar2.f49458e = rVar;
        }
        rVar.f49458e = this;
        this.f49457d = rVar;
        r rVar3 = this.f49454a;
        rVar.f49454a = rVar3;
        if (rVar.f49457d == null) {
            rVar3.f49455b = rVar;
        }
    }

    /* JADX INFO: Access modifiers changed from: protected */
    public void j(r rVar) {
        this.f49454a = rVar;
    }

    protected String k() {
        return "";
    }

    public void l() {
        r rVar = this.f49457d;
        if (rVar != null) {
            rVar.f49458e = this.f49458e;
        } else {
            r rVar2 = this.f49454a;
            if (rVar2 != null) {
                rVar2.f49455b = this.f49458e;
            }
        }
        r rVar3 = this.f49458e;
        if (rVar3 != null) {
            rVar3.f49457d = rVar;
        } else {
            r rVar4 = this.f49454a;
            if (rVar4 != null) {
                rVar4.f49456c = rVar;
            }
        }
        this.f49454a = null;
        this.f49458e = null;
        this.f49457d = null;
    }

    public String toString() {
        return getClass().getSimpleName() + "{" + k() + "}";
    }
}

package ev;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public abstract class r {

    /* renamed from: a  reason: collision with root package name */
    private r f23270a = null;

    /* renamed from: b  reason: collision with root package name */
    private r f23271b = null;

    /* renamed from: c  reason: collision with root package name */
    private r f23272c = null;

    /* renamed from: d  reason: collision with root package name */
    private r f23273d = null;

    /* renamed from: e  reason: collision with root package name */
    private r f23274e = null;

    public abstract void a(y yVar);

    public void b(r rVar) {
        rVar.l();
        rVar.j(this);
        r rVar2 = this.f23272c;
        if (rVar2 != null) {
            rVar2.f23274e = rVar;
            rVar.f23273d = rVar2;
            this.f23272c = rVar;
            return;
        }
        this.f23271b = rVar;
        this.f23272c = rVar;
    }

    public r c() {
        return this.f23271b;
    }

    public r d() {
        return this.f23272c;
    }

    public r e() {
        return this.f23274e;
    }

    public r f() {
        return this.f23270a;
    }

    public r g() {
        return this.f23273d;
    }

    public void h(r rVar) {
        rVar.l();
        r rVar2 = this.f23274e;
        rVar.f23274e = rVar2;
        if (rVar2 != null) {
            rVar2.f23273d = rVar;
        }
        rVar.f23273d = this;
        this.f23274e = rVar;
        r rVar3 = this.f23270a;
        rVar.f23270a = rVar3;
        if (rVar.f23274e == null) {
            rVar3.f23272c = rVar;
        }
    }

    public void i(r rVar) {
        rVar.l();
        r rVar2 = this.f23273d;
        rVar.f23273d = rVar2;
        if (rVar2 != null) {
            rVar2.f23274e = rVar;
        }
        rVar.f23274e = this;
        this.f23273d = rVar;
        r rVar3 = this.f23270a;
        rVar.f23270a = rVar3;
        if (rVar.f23273d == null) {
            rVar3.f23271b = rVar;
        }
    }

    /* JADX INFO: Access modifiers changed from: protected */
    public void j(r rVar) {
        this.f23270a = rVar;
    }

    protected String k() {
        return "";
    }

    public void l() {
        r rVar = this.f23273d;
        if (rVar != null) {
            rVar.f23274e = this.f23274e;
        } else {
            r rVar2 = this.f23270a;
            if (rVar2 != null) {
                rVar2.f23271b = this.f23274e;
            }
        }
        r rVar3 = this.f23274e;
        if (rVar3 != null) {
            rVar3.f23273d = rVar;
        } else {
            r rVar4 = this.f23270a;
            if (rVar4 != null) {
                rVar4.f23272c = rVar;
            }
        }
        this.f23270a = null;
        this.f23274e = null;
        this.f23273d = null;
    }

    public String toString() {
        return getClass().getSimpleName() + "{" + k() + "}";
    }
}

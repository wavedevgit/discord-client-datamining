package a0;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public class g2 extends d1 {

    /* renamed from: b  reason: collision with root package name */
    private final d0 f58b;

    /* renamed from: c  reason: collision with root package name */
    private boolean f59c;

    /* renamed from: d  reason: collision with root package name */
    private boolean f60d;

    /* renamed from: e  reason: collision with root package name */
    private final w f61e;

    public g2(d0 d0Var, w wVar) {
        super(d0Var);
        this.f59c = false;
        this.f60d = false;
        this.f58b = d0Var;
        this.f61e = wVar;
        wVar.C(null);
        n(wVar.I());
        m(wVar.O());
    }

    @Override // a0.d1, a0.d0
    public d0 h() {
        return this.f58b;
    }

    public w l() {
        return this.f61e;
    }

    public void m(boolean z10) {
        this.f60d = z10;
    }

    public void n(boolean z10) {
        this.f59c = z10;
    }
}

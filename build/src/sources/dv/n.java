package dv;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public class n extends r {

    /* renamed from: f  reason: collision with root package name */
    private String f22461f;

    /* renamed from: g  reason: collision with root package name */
    private String f22462g;

    public n(String str, String str2) {
        this.f22461f = str;
        this.f22462g = str2;
    }

    @Override // dv.r
    public void a(y yVar) {
        yVar.v(this);
    }

    @Override // dv.r
    protected String k() {
        return "destination=" + this.f22461f + ", title=" + this.f22462g;
    }

    public String m() {
        return this.f22461f;
    }
}

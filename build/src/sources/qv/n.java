package qv;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public class n extends r {

    /* renamed from: f  reason: collision with root package name */
    private String f48330f;

    /* renamed from: g  reason: collision with root package name */
    private String f48331g;

    public n(String str, String str2) {
        this.f48330f = str;
        this.f48331g = str2;
    }

    @Override // qv.r
    public void a(y yVar) {
        yVar.g(this);
    }

    @Override // qv.r
    protected String k() {
        return "destination=" + this.f48330f + ", title=" + this.f48331g;
    }

    public String m() {
        return this.f48330f;
    }
}

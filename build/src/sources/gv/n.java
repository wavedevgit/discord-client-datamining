package gv;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public class n extends r {

    /* renamed from: f  reason: collision with root package name */
    private String f26667f;

    /* renamed from: g  reason: collision with root package name */
    private String f26668g;

    public n(String str, String str2) {
        this.f26667f = str;
        this.f26668g = str2;
    }

    @Override // gv.r
    public void a(y yVar) {
        yVar.a(this);
    }

    @Override // gv.r
    protected String k() {
        return "destination=" + this.f26667f + ", title=" + this.f26668g;
    }

    public String m() {
        return this.f26667f;
    }
}

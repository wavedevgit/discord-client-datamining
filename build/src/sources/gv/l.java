package gv;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public class l extends r {

    /* renamed from: f  reason: collision with root package name */
    private String f26664f;

    /* renamed from: g  reason: collision with root package name */
    private String f26665g;

    public l(String str, String str2) {
        this.f26664f = str;
        this.f26665g = str2;
    }

    @Override // gv.r
    public void a(y yVar) {
        yVar.j(this);
    }

    @Override // gv.r
    protected String k() {
        return "destination=" + this.f26664f + ", title=" + this.f26665g;
    }

    public String m() {
        return this.f26664f;
    }
}

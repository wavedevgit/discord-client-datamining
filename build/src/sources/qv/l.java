package qv;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public class l extends r {

    /* renamed from: f  reason: collision with root package name */
    private String f48327f;

    /* renamed from: g  reason: collision with root package name */
    private String f48328g;

    public l(String str, String str2) {
        this.f48327f = str;
        this.f48328g = str2;
    }

    @Override // qv.r
    public void a(y yVar) {
        yVar.k(this);
    }

    @Override // qv.r
    protected String k() {
        return "destination=" + this.f48327f + ", title=" + this.f48328g;
    }

    public String m() {
        return this.f48327f;
    }
}

package rv;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public class n extends r {

    /* renamed from: f  reason: collision with root package name */
    private String f49448f;

    /* renamed from: g  reason: collision with root package name */
    private String f49449g;

    public n(String str, String str2) {
        this.f49448f = str;
        this.f49449g = str2;
    }

    @Override // rv.r
    public void a(y yVar) {
        yVar.u(this);
    }

    @Override // rv.r
    protected String k() {
        return "destination=" + this.f49448f + ", title=" + this.f49449g;
    }

    public String m() {
        return this.f49448f;
    }
}

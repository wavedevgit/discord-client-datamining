package rv;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public class l extends r {

    /* renamed from: f  reason: collision with root package name */
    private String f49445f;

    /* renamed from: g  reason: collision with root package name */
    private String f49446g;

    public l(String str, String str2) {
        this.f49445f = str;
        this.f49446g = str2;
    }

    @Override // rv.r
    public void a(y yVar) {
        yVar.z(this);
    }

    @Override // rv.r
    protected String k() {
        return "destination=" + this.f49445f + ", title=" + this.f49446g;
    }

    public String m() {
        return this.f49445f;
    }
}

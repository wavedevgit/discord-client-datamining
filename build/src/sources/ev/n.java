package ev;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public class n extends r {

    /* renamed from: f  reason: collision with root package name */
    private String f23264f;

    /* renamed from: g  reason: collision with root package name */
    private String f23265g;

    public n(String str, String str2) {
        this.f23264f = str;
        this.f23265g = str2;
    }

    @Override // ev.r
    public void a(y yVar) {
        yVar.B(this);
    }

    @Override // ev.r
    protected String k() {
        return "destination=" + this.f23264f + ", title=" + this.f23265g;
    }

    public String m() {
        return this.f23264f;
    }
}

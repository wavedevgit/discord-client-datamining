package ev;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public class l extends r {

    /* renamed from: f  reason: collision with root package name */
    private String f23261f;

    /* renamed from: g  reason: collision with root package name */
    private String f23262g;

    public l(String str, String str2) {
        this.f23261f = str;
        this.f23262g = str2;
    }

    @Override // ev.r
    public void a(y yVar) {
        yVar.q(this);
    }

    @Override // ev.r
    protected String k() {
        return "destination=" + this.f23261f + ", title=" + this.f23262g;
    }

    public String m() {
        return this.f23261f;
    }
}

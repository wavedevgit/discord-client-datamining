package qv;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public class l extends r {

    /* renamed from: f  reason: collision with root package name */
    private String f48279f;

    /* renamed from: g  reason: collision with root package name */
    private String f48280g;

    public l(String str, String str2) {
        this.f48279f = str;
        this.f48280g = str2;
    }

    @Override // qv.r
    public void a(y yVar) {
        yVar.k(this);
    }

    @Override // qv.r
    protected String k() {
        return "destination=" + this.f48279f + ", title=" + this.f48280g;
    }

    public String m() {
        return this.f48279f;
    }
}

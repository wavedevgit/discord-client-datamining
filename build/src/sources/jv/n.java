package jv;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public class n extends r {

    /* renamed from: f  reason: collision with root package name */
    private String f31458f;

    /* renamed from: g  reason: collision with root package name */
    private String f31459g;

    public n(String str, String str2) {
        this.f31458f = str;
        this.f31459g = str2;
    }

    @Override // jv.r
    public void a(y yVar) {
        yVar.f(this);
    }

    @Override // jv.r
    protected String k() {
        return "destination=" + this.f31458f + ", title=" + this.f31459g;
    }

    public String m() {
        return this.f31458f;
    }
}

package aw;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public class n extends r {

    /* renamed from: f  reason: collision with root package name */
    private String f6320f;

    /* renamed from: g  reason: collision with root package name */
    private String f6321g;

    public n(String str, String str2) {
        this.f6320f = str;
        this.f6321g = str2;
    }

    @Override // aw.r
    public void a(y yVar) {
        yVar.v(this);
    }

    @Override // aw.r
    protected String k() {
        return "destination=" + this.f6320f + ", title=" + this.f6321g;
    }

    public String m() {
        return this.f6320f;
    }
}

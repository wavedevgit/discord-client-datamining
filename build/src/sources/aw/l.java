package aw;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public class l extends r {

    /* renamed from: f  reason: collision with root package name */
    private String f6317f;

    /* renamed from: g  reason: collision with root package name */
    private String f6318g;

    public l(String str, String str2) {
        this.f6317f = str;
        this.f6318g = str2;
    }

    @Override // aw.r
    public void a(y yVar) {
        yVar.E(this);
    }

    @Override // aw.r
    protected String k() {
        return "destination=" + this.f6317f + ", title=" + this.f6318g;
    }

    public String m() {
        return this.f6317f;
    }
}

package qv;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public class w extends r {

    /* renamed from: f  reason: collision with root package name */
    private String f48296f;

    public w(String str) {
        this.f48296f = str;
    }

    @Override // qv.r
    public void a(y yVar) {
        yVar.v(this);
    }

    @Override // qv.r
    protected String k() {
        return "literal=" + this.f48296f;
    }

    public String m() {
        return this.f48296f;
    }

    public void n(String str) {
        this.f48296f = str;
    }
}

package qv;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public class w extends r {

    /* renamed from: f  reason: collision with root package name */
    private String f48344f;

    public w(String str) {
        this.f48344f = str;
    }

    @Override // qv.r
    public void a(y yVar) {
        yVar.v(this);
    }

    @Override // qv.r
    protected String k() {
        return "literal=" + this.f48344f;
    }

    public String m() {
        return this.f48344f;
    }

    public void n(String str) {
        this.f48344f = str;
    }
}

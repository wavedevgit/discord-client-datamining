package dv;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public class w extends r {

    /* renamed from: f  reason: collision with root package name */
    private String f22475f;

    public w(String str) {
        this.f22475f = str;
    }

    @Override // dv.r
    public void a(y yVar) {
        yVar.l(this);
    }

    @Override // dv.r
    protected String k() {
        return "literal=" + this.f22475f;
    }

    public String m() {
        return this.f22475f;
    }

    public void n(String str) {
        this.f22475f = str;
    }
}

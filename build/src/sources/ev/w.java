package ev;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public class w extends r {

    /* renamed from: f  reason: collision with root package name */
    private String f23278f;

    public w(String str) {
        this.f23278f = str;
    }

    @Override // ev.r
    public void a(y yVar) {
        yVar.i(this);
    }

    @Override // ev.r
    protected String k() {
        return "literal=" + this.f23278f;
    }

    public String m() {
        return this.f23278f;
    }

    public void n(String str) {
        this.f23278f = str;
    }
}

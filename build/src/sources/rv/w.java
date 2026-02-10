package rv;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public class w extends r {

    /* renamed from: f  reason: collision with root package name */
    private String f49462f;

    public w(String str) {
        this.f49462f = str;
    }

    @Override // rv.r
    public void a(y yVar) {
        yVar.q(this);
    }

    @Override // rv.r
    protected String k() {
        return "literal=" + this.f49462f;
    }

    public String m() {
        return this.f49462f;
    }

    public void n(String str) {
        this.f49462f = str;
    }
}

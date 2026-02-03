package gv;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public class w extends r {

    /* renamed from: f  reason: collision with root package name */
    private String f26681f;

    public w(String str) {
        this.f26681f = str;
    }

    @Override // gv.r
    public void a(y yVar) {
        yVar.g(this);
    }

    @Override // gv.r
    protected String k() {
        return "literal=" + this.f26681f;
    }

    public String m() {
        return this.f26681f;
    }

    public void n(String str) {
        this.f26681f = str;
    }
}

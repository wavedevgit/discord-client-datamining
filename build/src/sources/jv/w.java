package jv;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public class w extends r {

    /* renamed from: f  reason: collision with root package name */
    private String f31472f;

    public w(String str) {
        this.f31472f = str;
    }

    @Override // jv.r
    public void a(y yVar) {
        yVar.v(this);
    }

    @Override // jv.r
    protected String k() {
        return "literal=" + this.f31472f;
    }

    public String m() {
        return this.f31472f;
    }

    public void n(String str) {
        this.f31472f = str;
    }
}

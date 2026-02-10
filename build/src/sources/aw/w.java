package aw;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public class w extends r {

    /* renamed from: f  reason: collision with root package name */
    private String f6334f;

    public w(String str) {
        this.f6334f = str;
    }

    @Override // aw.r
    public void a(y yVar) {
        yVar.w(this);
    }

    @Override // aw.r
    protected String k() {
        return "literal=" + this.f6334f;
    }

    public String m() {
        return this.f6334f;
    }

    public void n(String str) {
        this.f6334f = str;
    }
}

package jv;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public class l extends r {

    /* renamed from: f  reason: collision with root package name */
    private String f31455f;

    /* renamed from: g  reason: collision with root package name */
    private String f31456g;

    public l(String str, String str2) {
        this.f31455f = str;
        this.f31456g = str2;
    }

    @Override // jv.r
    public void a(y yVar) {
        yVar.e(this);
    }

    @Override // jv.r
    protected String k() {
        return "destination=" + this.f31455f + ", title=" + this.f31456g;
    }

    public String m() {
        return this.f31455f;
    }
}

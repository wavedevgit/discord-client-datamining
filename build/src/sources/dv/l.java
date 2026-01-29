package dv;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public class l extends r {

    /* renamed from: f  reason: collision with root package name */
    private String f22458f;

    /* renamed from: g  reason: collision with root package name */
    private String f22459g;

    public l(String str, String str2) {
        this.f22458f = str;
        this.f22459g = str2;
    }

    @Override // dv.r
    public void a(y yVar) {
        yVar.s(this);
    }

    @Override // dv.r
    protected String k() {
        return "destination=" + this.f22458f + ", title=" + this.f22459g;
    }

    public String m() {
        return this.f22458f;
    }
}

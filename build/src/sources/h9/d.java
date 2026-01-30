package h9;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public class d {

    /* renamed from: a  reason: collision with root package name */
    private boolean f27411a;

    /* renamed from: b  reason: collision with root package name */
    private int f27412b;

    /* renamed from: c  reason: collision with root package name */
    private int f27413c;

    public d() {
        a();
    }

    public void a() {
        this.f27411a = false;
        this.f27412b = 4;
        c();
    }

    public void b() {
        this.f27413c++;
    }

    public void c() {
        this.f27413c = 0;
    }

    public void d(boolean z10) {
        this.f27411a = z10;
    }

    public boolean e() {
        if (this.f27411a && this.f27413c < this.f27412b) {
            return true;
        }
        return false;
    }
}

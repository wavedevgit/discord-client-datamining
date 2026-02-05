package h9;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public class d {

    /* renamed from: a  reason: collision with root package name */
    private boolean f25710a;

    /* renamed from: b  reason: collision with root package name */
    private int f25711b;

    /* renamed from: c  reason: collision with root package name */
    private int f25712c;

    public d() {
        a();
    }

    public void a() {
        this.f25710a = false;
        this.f25711b = 4;
        c();
    }

    public void b() {
        this.f25712c++;
    }

    public void c() {
        this.f25712c = 0;
    }

    public void d(boolean z10) {
        this.f25710a = z10;
    }

    public boolean e() {
        if (this.f25710a && this.f25712c < this.f25711b) {
            return true;
        }
        return false;
    }
}

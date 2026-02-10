package i9;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public class d {

    /* renamed from: a  reason: collision with root package name */
    private boolean f27819a;

    /* renamed from: b  reason: collision with root package name */
    private int f27820b;

    /* renamed from: c  reason: collision with root package name */
    private int f27821c;

    public d() {
        a();
    }

    public void a() {
        this.f27819a = false;
        this.f27820b = 4;
        c();
    }

    public void b() {
        this.f27821c++;
    }

    public void c() {
        this.f27821c = 0;
    }

    public void d(boolean z10) {
        this.f27819a = z10;
    }

    public boolean e() {
        if (this.f27819a && this.f27821c < this.f27820b) {
            return true;
        }
        return false;
    }
}

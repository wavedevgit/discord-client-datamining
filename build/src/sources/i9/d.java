package i9;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public class d {

    /* renamed from: a  reason: collision with root package name */
    private boolean f27820a;

    /* renamed from: b  reason: collision with root package name */
    private int f27821b;

    /* renamed from: c  reason: collision with root package name */
    private int f27822c;

    public d() {
        a();
    }

    public void a() {
        this.f27820a = false;
        this.f27821b = 4;
        c();
    }

    public void b() {
        this.f27822c++;
    }

    public void c() {
        this.f27822c = 0;
    }

    public void d(boolean z10) {
        this.f27820a = z10;
    }

    public boolean e() {
        if (this.f27820a && this.f27822c < this.f27821b) {
            return true;
        }
        return false;
    }
}

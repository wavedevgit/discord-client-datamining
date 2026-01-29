package h9;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public class d {

    /* renamed from: a  reason: collision with root package name */
    private boolean f27395a;

    /* renamed from: b  reason: collision with root package name */
    private int f27396b;

    /* renamed from: c  reason: collision with root package name */
    private int f27397c;

    public d() {
        a();
    }

    public void a() {
        this.f27395a = false;
        this.f27396b = 4;
        c();
    }

    public void b() {
        this.f27397c++;
    }

    public void c() {
        this.f27397c = 0;
    }

    public void d(boolean z10) {
        this.f27395a = z10;
    }

    public boolean e() {
        if (this.f27395a && this.f27397c < this.f27396b) {
            return true;
        }
        return false;
    }
}

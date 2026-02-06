package h9;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public class d {

    /* renamed from: a  reason: collision with root package name */
    private boolean f25838a;

    /* renamed from: b  reason: collision with root package name */
    private int f25839b;

    /* renamed from: c  reason: collision with root package name */
    private int f25840c;

    public d() {
        a();
    }

    public void a() {
        this.f25838a = false;
        this.f25839b = 4;
        c();
    }

    public void b() {
        this.f25840c++;
    }

    public void c() {
        this.f25840c = 0;
    }

    public void d(boolean z10) {
        this.f25838a = z10;
    }

    public boolean e() {
        if (this.f25838a && this.f25840c < this.f25839b) {
            return true;
        }
        return false;
    }
}

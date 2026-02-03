package h9;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public class d {

    /* renamed from: a  reason: collision with root package name */
    private boolean f27584a;

    /* renamed from: b  reason: collision with root package name */
    private int f27585b;

    /* renamed from: c  reason: collision with root package name */
    private int f27586c;

    public d() {
        a();
    }

    public void a() {
        this.f27584a = false;
        this.f27585b = 4;
        c();
    }

    public void b() {
        this.f27586c++;
    }

    public void c() {
        this.f27586c = 0;
    }

    public void d(boolean z10) {
        this.f27584a = z10;
    }

    public boolean e() {
        if (this.f27584a && this.f27586c < this.f27585b) {
            return true;
        }
        return false;
    }
}

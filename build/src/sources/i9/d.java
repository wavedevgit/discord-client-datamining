package i9;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public class d {

    /* renamed from: a  reason: collision with root package name */
    private boolean f28388a;

    /* renamed from: b  reason: collision with root package name */
    private int f28389b;

    /* renamed from: c  reason: collision with root package name */
    private int f28390c;

    public d() {
        a();
    }

    public void a() {
        this.f28388a = false;
        this.f28389b = 4;
        c();
    }

    public void b() {
        this.f28390c++;
    }

    public void c() {
        this.f28390c = 0;
    }

    public void d(boolean z10) {
        this.f28388a = z10;
    }

    public boolean e() {
        if (this.f28388a && this.f28390c < this.f28389b) {
            return true;
        }
        return false;
    }
}

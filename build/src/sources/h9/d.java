package h9;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public class d {

    /* renamed from: a  reason: collision with root package name */
    private boolean f25886a;

    /* renamed from: b  reason: collision with root package name */
    private int f25887b;

    /* renamed from: c  reason: collision with root package name */
    private int f25888c;

    public d() {
        a();
    }

    public void a() {
        this.f25886a = false;
        this.f25887b = 4;
        c();
    }

    public void b() {
        this.f25888c++;
    }

    public void c() {
        this.f25888c = 0;
    }

    public void d(boolean z10) {
        this.f25886a = z10;
    }

    public boolean e() {
        if (this.f25886a && this.f25888c < this.f25887b) {
            return true;
        }
        return false;
    }
}

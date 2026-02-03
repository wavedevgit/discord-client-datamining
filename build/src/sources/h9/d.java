package h9;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public class d {

    /* renamed from: a  reason: collision with root package name */
    private boolean f26869a;

    /* renamed from: b  reason: collision with root package name */
    private int f26870b;

    /* renamed from: c  reason: collision with root package name */
    private int f26871c;

    public d() {
        a();
    }

    public void a() {
        this.f26869a = false;
        this.f26870b = 4;
        c();
    }

    public void b() {
        this.f26871c++;
    }

    public void c() {
        this.f26871c = 0;
    }

    public void d(boolean z10) {
        this.f26869a = z10;
    }

    public boolean e() {
        if (this.f26869a && this.f26871c < this.f26870b) {
            return true;
        }
        return false;
    }
}

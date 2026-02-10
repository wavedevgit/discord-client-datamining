package i9;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public class d {

    /* renamed from: a  reason: collision with root package name */
    private boolean f26700a;

    /* renamed from: b  reason: collision with root package name */
    private int f26701b;

    /* renamed from: c  reason: collision with root package name */
    private int f26702c;

    public d() {
        a();
    }

    public void a() {
        this.f26700a = false;
        this.f26701b = 4;
        c();
    }

    public void b() {
        this.f26702c++;
    }

    public void c() {
        this.f26702c = 0;
    }

    public void d(boolean z10) {
        this.f26700a = z10;
    }

    public boolean e() {
        if (this.f26700a && this.f26702c < this.f26701b) {
            return true;
        }
        return false;
    }
}

package y5;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public class d {

    /* renamed from: a  reason: collision with root package name */
    private float f55005a;

    /* renamed from: b  reason: collision with root package name */
    private float f55006b;

    public d(float f10, float f11) {
        this.f55005a = f10;
        this.f55006b = f11;
    }

    public boolean a(float f10, float f11) {
        if (this.f55005a == f10 && this.f55006b == f11) {
            return true;
        }
        return false;
    }

    public float b() {
        return this.f55005a;
    }

    public float c() {
        return this.f55006b;
    }

    public void d(float f10, float f11) {
        this.f55005a = f10;
        this.f55006b = f11;
    }

    public String toString() {
        return b() + "x" + c();
    }

    public d() {
        this(1.0f, 1.0f);
    }
}

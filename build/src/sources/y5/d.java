package y5;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public class d {

    /* renamed from: a  reason: collision with root package name */
    private float f54010a;

    /* renamed from: b  reason: collision with root package name */
    private float f54011b;

    public d(float f10, float f11) {
        this.f54010a = f10;
        this.f54011b = f11;
    }

    public boolean a(float f10, float f11) {
        if (this.f54010a == f10 && this.f54011b == f11) {
            return true;
        }
        return false;
    }

    public float b() {
        return this.f54010a;
    }

    public float c() {
        return this.f54011b;
    }

    public void d(float f10, float f11) {
        this.f54010a = f10;
        this.f54011b = f11;
    }

    public String toString() {
        return b() + "x" + c();
    }

    public d() {
        this(1.0f, 1.0f);
    }
}

package y5;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public class d {

    /* renamed from: a  reason: collision with root package name */
    private float f54461a;

    /* renamed from: b  reason: collision with root package name */
    private float f54462b;

    public d(float f10, float f11) {
        this.f54461a = f10;
        this.f54462b = f11;
    }

    public boolean a(float f10, float f11) {
        if (this.f54461a == f10 && this.f54462b == f11) {
            return true;
        }
        return false;
    }

    public float b() {
        return this.f54461a;
    }

    public float c() {
        return this.f54462b;
    }

    public void d(float f10, float f11) {
        this.f54461a = f10;
        this.f54462b = f11;
    }

    public String toString() {
        return b() + "x" + c();
    }

    public d() {
        this(1.0f, 1.0f);
    }
}

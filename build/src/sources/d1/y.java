package d1;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public final class y {

    /* renamed from: a  reason: collision with root package name */
    private final float f20289a;

    /* renamed from: b  reason: collision with root package name */
    private final float f20290b;

    public y(float f10, float f11) {
        this.f20289a = f10;
        this.f20290b = f11;
    }

    public final float a() {
        return this.f20289a;
    }

    public final float b() {
        return this.f20290b;
    }

    public final float[] c() {
        float f10 = this.f20289a;
        float f11 = this.f20290b;
        return new float[]{f10 / f11, 1.0f, ((1.0f - f10) - f11) / f11};
    }

    public boolean equals(Object obj) {
        if (this == obj) {
            return true;
        }
        if (!(obj instanceof y)) {
            return false;
        }
        y yVar = (y) obj;
        if (Float.compare(this.f20289a, yVar.f20289a) == 0 && Float.compare(this.f20290b, yVar.f20290b) == 0) {
            return true;
        }
        return false;
    }

    public int hashCode() {
        return (Float.hashCode(this.f20289a) * 31) + Float.hashCode(this.f20290b);
    }

    public String toString() {
        return "WhitePoint(x=" + this.f20289a + ", y=" + this.f20290b + ')';
    }
}

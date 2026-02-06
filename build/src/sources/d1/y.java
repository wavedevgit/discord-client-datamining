package d1;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public final class y {

    /* renamed from: a  reason: collision with root package name */
    private final float f20244a;

    /* renamed from: b  reason: collision with root package name */
    private final float f20245b;

    public y(float f10, float f11) {
        this.f20244a = f10;
        this.f20245b = f11;
    }

    public final float a() {
        return this.f20244a;
    }

    public final float b() {
        return this.f20245b;
    }

    public final float[] c() {
        float f10 = this.f20244a;
        float f11 = this.f20245b;
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
        if (Float.compare(this.f20244a, yVar.f20244a) == 0 && Float.compare(this.f20245b, yVar.f20245b) == 0) {
            return true;
        }
        return false;
    }

    public int hashCode() {
        return (Float.hashCode(this.f20244a) * 31) + Float.hashCode(this.f20245b);
    }

    public String toString() {
        return "WhitePoint(x=" + this.f20244a + ", y=" + this.f20245b + ')';
    }
}

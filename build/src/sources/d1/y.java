package d1;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public final class y {

    /* renamed from: a  reason: collision with root package name */
    private final float f21638a;

    /* renamed from: b  reason: collision with root package name */
    private final float f21639b;

    public y(float f10, float f11) {
        this.f21638a = f10;
        this.f21639b = f11;
    }

    public final float a() {
        return this.f21638a;
    }

    public final float b() {
        return this.f21639b;
    }

    public final float[] c() {
        float f10 = this.f21638a;
        float f11 = this.f21639b;
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
        if (Float.compare(this.f21638a, yVar.f21638a) == 0 && Float.compare(this.f21639b, yVar.f21639b) == 0) {
            return true;
        }
        return false;
    }

    public int hashCode() {
        return (Float.hashCode(this.f21638a) * 31) + Float.hashCode(this.f21639b);
    }

    public String toString() {
        return "WhitePoint(x=" + this.f21638a + ", y=" + this.f21639b + ')';
    }
}

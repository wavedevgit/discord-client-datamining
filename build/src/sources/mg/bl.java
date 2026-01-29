package mg;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
final class bl extends dl {

    /* renamed from: a  reason: collision with root package name */
    private final float f38114a;

    /* renamed from: b  reason: collision with root package name */
    private final float f38115b;

    /* renamed from: c  reason: collision with root package name */
    private final float f38116c;

    /* renamed from: d  reason: collision with root package name */
    private final float f38117d;

    /* JADX INFO: Access modifiers changed from: package-private */
    public bl(float f10, float f11, float f12, float f13, float f14) {
        this.f38114a = f10;
        this.f38115b = f11;
        this.f38116c = f12;
        this.f38117d = f13;
    }

    @Override // mg.dl
    final float a() {
        return 0.0f;
    }

    @Override // mg.dl
    final float b() {
        return this.f38116c;
    }

    @Override // mg.dl
    final float c() {
        return this.f38114a;
    }

    @Override // mg.dl
    final float d() {
        return this.f38117d;
    }

    @Override // mg.dl
    final float e() {
        return this.f38115b;
    }

    public final boolean equals(Object obj) {
        if (obj == this) {
            return true;
        }
        if (obj instanceof dl) {
            dl dlVar = (dl) obj;
            if (Float.floatToIntBits(this.f38114a) == Float.floatToIntBits(dlVar.c()) && Float.floatToIntBits(this.f38115b) == Float.floatToIntBits(dlVar.e()) && Float.floatToIntBits(this.f38116c) == Float.floatToIntBits(dlVar.b()) && Float.floatToIntBits(this.f38117d) == Float.floatToIntBits(dlVar.d())) {
                int floatToIntBits = Float.floatToIntBits(0.0f);
                dlVar.a();
                if (floatToIntBits == Float.floatToIntBits(0.0f)) {
                    return true;
                }
            }
        }
        return false;
    }

    public final int hashCode() {
        return ((((((((Float.floatToIntBits(this.f38114a) ^ 1000003) * 1000003) ^ Float.floatToIntBits(this.f38115b)) * 1000003) ^ Float.floatToIntBits(this.f38116c)) * 1000003) ^ Float.floatToIntBits(this.f38117d)) * 1000003) ^ Float.floatToIntBits(0.0f);
    }

    public final String toString() {
        return "PredictedArea{xMin=" + this.f38114a + ", yMin=" + this.f38115b + ", xMax=" + this.f38116c + ", yMax=" + this.f38117d + ", confidenceScore=0.0}";
    }
}

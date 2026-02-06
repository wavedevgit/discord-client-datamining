package ng;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
final class bl extends dl {

    /* renamed from: a  reason: collision with root package name */
    private final float f39732a;

    /* renamed from: b  reason: collision with root package name */
    private final float f39733b;

    /* renamed from: c  reason: collision with root package name */
    private final float f39734c;

    /* renamed from: d  reason: collision with root package name */
    private final float f39735d;

    /* JADX INFO: Access modifiers changed from: package-private */
    public bl(float f10, float f11, float f12, float f13, float f14) {
        this.f39732a = f10;
        this.f39733b = f11;
        this.f39734c = f12;
        this.f39735d = f13;
    }

    @Override // ng.dl
    final float a() {
        return 0.0f;
    }

    @Override // ng.dl
    final float b() {
        return this.f39734c;
    }

    @Override // ng.dl
    final float c() {
        return this.f39732a;
    }

    @Override // ng.dl
    final float d() {
        return this.f39735d;
    }

    @Override // ng.dl
    final float e() {
        return this.f39733b;
    }

    public final boolean equals(Object obj) {
        if (obj == this) {
            return true;
        }
        if (obj instanceof dl) {
            dl dlVar = (dl) obj;
            if (Float.floatToIntBits(this.f39732a) == Float.floatToIntBits(dlVar.c()) && Float.floatToIntBits(this.f39733b) == Float.floatToIntBits(dlVar.e()) && Float.floatToIntBits(this.f39734c) == Float.floatToIntBits(dlVar.b()) && Float.floatToIntBits(this.f39735d) == Float.floatToIntBits(dlVar.d())) {
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
        return ((((((((Float.floatToIntBits(this.f39732a) ^ 1000003) * 1000003) ^ Float.floatToIntBits(this.f39733b)) * 1000003) ^ Float.floatToIntBits(this.f39734c)) * 1000003) ^ Float.floatToIntBits(this.f39735d)) * 1000003) ^ Float.floatToIntBits(0.0f);
    }

    public final String toString() {
        return "PredictedArea{xMin=" + this.f39732a + ", yMin=" + this.f39733b + ", xMax=" + this.f39734c + ", yMax=" + this.f39735d + ", confidenceScore=0.0}";
    }
}

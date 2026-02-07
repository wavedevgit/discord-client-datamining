package ng;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
final class bl extends dl {

    /* renamed from: a  reason: collision with root package name */
    private final float f39780a;

    /* renamed from: b  reason: collision with root package name */
    private final float f39781b;

    /* renamed from: c  reason: collision with root package name */
    private final float f39782c;

    /* renamed from: d  reason: collision with root package name */
    private final float f39783d;

    /* JADX INFO: Access modifiers changed from: package-private */
    public bl(float f10, float f11, float f12, float f13, float f14) {
        this.f39780a = f10;
        this.f39781b = f11;
        this.f39782c = f12;
        this.f39783d = f13;
    }

    @Override // ng.dl
    final float a() {
        return 0.0f;
    }

    @Override // ng.dl
    final float b() {
        return this.f39782c;
    }

    @Override // ng.dl
    final float c() {
        return this.f39780a;
    }

    @Override // ng.dl
    final float d() {
        return this.f39783d;
    }

    @Override // ng.dl
    final float e() {
        return this.f39781b;
    }

    public final boolean equals(Object obj) {
        if (obj == this) {
            return true;
        }
        if (obj instanceof dl) {
            dl dlVar = (dl) obj;
            if (Float.floatToIntBits(this.f39780a) == Float.floatToIntBits(dlVar.c()) && Float.floatToIntBits(this.f39781b) == Float.floatToIntBits(dlVar.e()) && Float.floatToIntBits(this.f39782c) == Float.floatToIntBits(dlVar.b()) && Float.floatToIntBits(this.f39783d) == Float.floatToIntBits(dlVar.d())) {
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
        return ((((((((Float.floatToIntBits(this.f39780a) ^ 1000003) * 1000003) ^ Float.floatToIntBits(this.f39781b)) * 1000003) ^ Float.floatToIntBits(this.f39782c)) * 1000003) ^ Float.floatToIntBits(this.f39783d)) * 1000003) ^ Float.floatToIntBits(0.0f);
    }

    public final String toString() {
        return "PredictedArea{xMin=" + this.f39780a + ", yMin=" + this.f39781b + ", xMax=" + this.f39782c + ", yMax=" + this.f39783d + ", confidenceScore=0.0}";
    }
}

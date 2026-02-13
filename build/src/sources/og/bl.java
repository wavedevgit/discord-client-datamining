package og;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
final class bl extends dl {

    /* renamed from: a  reason: collision with root package name */
    private final float f39700a;

    /* renamed from: b  reason: collision with root package name */
    private final float f39701b;

    /* renamed from: c  reason: collision with root package name */
    private final float f39702c;

    /* renamed from: d  reason: collision with root package name */
    private final float f39703d;

    /* JADX INFO: Access modifiers changed from: package-private */
    public bl(float f10, float f11, float f12, float f13, float f14) {
        this.f39700a = f10;
        this.f39701b = f11;
        this.f39702c = f12;
        this.f39703d = f13;
    }

    @Override // og.dl
    final float a() {
        return 0.0f;
    }

    @Override // og.dl
    final float b() {
        return this.f39702c;
    }

    @Override // og.dl
    final float c() {
        return this.f39700a;
    }

    @Override // og.dl
    final float d() {
        return this.f39703d;
    }

    @Override // og.dl
    final float e() {
        return this.f39701b;
    }

    public final boolean equals(Object obj) {
        if (obj == this) {
            return true;
        }
        if (obj instanceof dl) {
            dl dlVar = (dl) obj;
            if (Float.floatToIntBits(this.f39700a) == Float.floatToIntBits(dlVar.c()) && Float.floatToIntBits(this.f39701b) == Float.floatToIntBits(dlVar.e()) && Float.floatToIntBits(this.f39702c) == Float.floatToIntBits(dlVar.b()) && Float.floatToIntBits(this.f39703d) == Float.floatToIntBits(dlVar.d())) {
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
        return ((((((((Float.floatToIntBits(this.f39700a) ^ 1000003) * 1000003) ^ Float.floatToIntBits(this.f39701b)) * 1000003) ^ Float.floatToIntBits(this.f39702c)) * 1000003) ^ Float.floatToIntBits(this.f39703d)) * 1000003) ^ Float.floatToIntBits(0.0f);
    }

    public final String toString() {
        return "PredictedArea{xMin=" + this.f39700a + ", yMin=" + this.f39701b + ", xMax=" + this.f39702c + ", yMax=" + this.f39703d + ", confidenceScore=0.0}";
    }
}

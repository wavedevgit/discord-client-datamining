package og;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
final class bl extends dl {

    /* renamed from: a  reason: collision with root package name */
    private final float f39131a;

    /* renamed from: b  reason: collision with root package name */
    private final float f39132b;

    /* renamed from: c  reason: collision with root package name */
    private final float f39133c;

    /* renamed from: d  reason: collision with root package name */
    private final float f39134d;

    /* JADX INFO: Access modifiers changed from: package-private */
    public bl(float f10, float f11, float f12, float f13, float f14) {
        this.f39131a = f10;
        this.f39132b = f11;
        this.f39133c = f12;
        this.f39134d = f13;
    }

    @Override // og.dl
    final float a() {
        return 0.0f;
    }

    @Override // og.dl
    final float b() {
        return this.f39133c;
    }

    @Override // og.dl
    final float c() {
        return this.f39131a;
    }

    @Override // og.dl
    final float d() {
        return this.f39134d;
    }

    @Override // og.dl
    final float e() {
        return this.f39132b;
    }

    public final boolean equals(Object obj) {
        if (obj == this) {
            return true;
        }
        if (obj instanceof dl) {
            dl dlVar = (dl) obj;
            if (Float.floatToIntBits(this.f39131a) == Float.floatToIntBits(dlVar.c()) && Float.floatToIntBits(this.f39132b) == Float.floatToIntBits(dlVar.e()) && Float.floatToIntBits(this.f39133c) == Float.floatToIntBits(dlVar.b()) && Float.floatToIntBits(this.f39134d) == Float.floatToIntBits(dlVar.d())) {
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
        return ((((((((Float.floatToIntBits(this.f39131a) ^ 1000003) * 1000003) ^ Float.floatToIntBits(this.f39132b)) * 1000003) ^ Float.floatToIntBits(this.f39133c)) * 1000003) ^ Float.floatToIntBits(this.f39134d)) * 1000003) ^ Float.floatToIntBits(0.0f);
    }

    public final String toString() {
        return "PredictedArea{xMin=" + this.f39131a + ", yMin=" + this.f39132b + ", xMax=" + this.f39133c + ", yMax=" + this.f39134d + ", confidenceScore=0.0}";
    }
}

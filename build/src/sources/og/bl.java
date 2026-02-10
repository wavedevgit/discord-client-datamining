package og;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
final class bl extends dl {

    /* renamed from: a  reason: collision with root package name */
    private final float f40805a;

    /* renamed from: b  reason: collision with root package name */
    private final float f40806b;

    /* renamed from: c  reason: collision with root package name */
    private final float f40807c;

    /* renamed from: d  reason: collision with root package name */
    private final float f40808d;

    /* JADX INFO: Access modifiers changed from: package-private */
    public bl(float f10, float f11, float f12, float f13, float f14) {
        this.f40805a = f10;
        this.f40806b = f11;
        this.f40807c = f12;
        this.f40808d = f13;
    }

    @Override // og.dl
    final float a() {
        return 0.0f;
    }

    @Override // og.dl
    final float b() {
        return this.f40807c;
    }

    @Override // og.dl
    final float c() {
        return this.f40805a;
    }

    @Override // og.dl
    final float d() {
        return this.f40808d;
    }

    @Override // og.dl
    final float e() {
        return this.f40806b;
    }

    public final boolean equals(Object obj) {
        if (obj == this) {
            return true;
        }
        if (obj instanceof dl) {
            dl dlVar = (dl) obj;
            if (Float.floatToIntBits(this.f40805a) == Float.floatToIntBits(dlVar.c()) && Float.floatToIntBits(this.f40806b) == Float.floatToIntBits(dlVar.e()) && Float.floatToIntBits(this.f40807c) == Float.floatToIntBits(dlVar.b()) && Float.floatToIntBits(this.f40808d) == Float.floatToIntBits(dlVar.d())) {
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
        return ((((((((Float.floatToIntBits(this.f40805a) ^ 1000003) * 1000003) ^ Float.floatToIntBits(this.f40806b)) * 1000003) ^ Float.floatToIntBits(this.f40807c)) * 1000003) ^ Float.floatToIntBits(this.f40808d)) * 1000003) ^ Float.floatToIntBits(0.0f);
    }

    public final String toString() {
        return "PredictedArea{xMin=" + this.f40805a + ", yMin=" + this.f40806b + ", xMax=" + this.f40807c + ", yMax=" + this.f40808d + ", confidenceScore=0.0}";
    }
}

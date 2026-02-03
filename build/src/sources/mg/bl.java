package mg;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
final class bl extends dl {

    /* renamed from: a  reason: collision with root package name */
    private final float f38110a;

    /* renamed from: b  reason: collision with root package name */
    private final float f38111b;

    /* renamed from: c  reason: collision with root package name */
    private final float f38112c;

    /* renamed from: d  reason: collision with root package name */
    private final float f38113d;

    /* JADX INFO: Access modifiers changed from: package-private */
    public bl(float f10, float f11, float f12, float f13, float f14) {
        this.f38110a = f10;
        this.f38111b = f11;
        this.f38112c = f12;
        this.f38113d = f13;
    }

    @Override // mg.dl
    final float a() {
        return 0.0f;
    }

    @Override // mg.dl
    final float b() {
        return this.f38112c;
    }

    @Override // mg.dl
    final float c() {
        return this.f38110a;
    }

    @Override // mg.dl
    final float d() {
        return this.f38113d;
    }

    @Override // mg.dl
    final float e() {
        return this.f38111b;
    }

    public final boolean equals(Object obj) {
        if (obj == this) {
            return true;
        }
        if (obj instanceof dl) {
            dl dlVar = (dl) obj;
            if (Float.floatToIntBits(this.f38110a) == Float.floatToIntBits(dlVar.c()) && Float.floatToIntBits(this.f38111b) == Float.floatToIntBits(dlVar.e()) && Float.floatToIntBits(this.f38112c) == Float.floatToIntBits(dlVar.b()) && Float.floatToIntBits(this.f38113d) == Float.floatToIntBits(dlVar.d())) {
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
        return ((((((((Float.floatToIntBits(this.f38110a) ^ 1000003) * 1000003) ^ Float.floatToIntBits(this.f38111b)) * 1000003) ^ Float.floatToIntBits(this.f38112c)) * 1000003) ^ Float.floatToIntBits(this.f38113d)) * 1000003) ^ Float.floatToIntBits(0.0f);
    }

    public final String toString() {
        return "PredictedArea{xMin=" + this.f38110a + ", yMin=" + this.f38111b + ", xMax=" + this.f38112c + ", yMax=" + this.f38113d + ", confidenceScore=0.0}";
    }
}

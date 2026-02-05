package mg;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
final class bl extends dl {

    /* renamed from: a  reason: collision with root package name */
    private final float f37569a;

    /* renamed from: b  reason: collision with root package name */
    private final float f37570b;

    /* renamed from: c  reason: collision with root package name */
    private final float f37571c;

    /* renamed from: d  reason: collision with root package name */
    private final float f37572d;

    /* JADX INFO: Access modifiers changed from: package-private */
    public bl(float f10, float f11, float f12, float f13, float f14) {
        this.f37569a = f10;
        this.f37570b = f11;
        this.f37571c = f12;
        this.f37572d = f13;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    @Override // mg.dl
    public final float a() {
        return 0.0f;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    @Override // mg.dl
    public final float b() {
        return this.f37571c;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    @Override // mg.dl
    public final float c() {
        return this.f37569a;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    @Override // mg.dl
    public final float d() {
        return this.f37572d;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    @Override // mg.dl
    public final float e() {
        return this.f37570b;
    }

    public final boolean equals(Object obj) {
        if (obj == this) {
            return true;
        }
        if (obj instanceof dl) {
            dl dlVar = (dl) obj;
            if (Float.floatToIntBits(this.f37569a) == Float.floatToIntBits(dlVar.c()) && Float.floatToIntBits(this.f37570b) == Float.floatToIntBits(dlVar.e()) && Float.floatToIntBits(this.f37571c) == Float.floatToIntBits(dlVar.b()) && Float.floatToIntBits(this.f37572d) == Float.floatToIntBits(dlVar.d())) {
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
        return ((((((((Float.floatToIntBits(this.f37569a) ^ 1000003) * 1000003) ^ Float.floatToIntBits(this.f37570b)) * 1000003) ^ Float.floatToIntBits(this.f37571c)) * 1000003) ^ Float.floatToIntBits(this.f37572d)) * 1000003) ^ Float.floatToIntBits(0.0f);
    }

    public final String toString() {
        return "PredictedArea{xMin=" + this.f37569a + ", yMin=" + this.f37570b + ", xMax=" + this.f37571c + ", yMax=" + this.f37572d + ", confidenceScore=0.0}";
    }
}

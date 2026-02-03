package mg;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
final class bl extends dl {

    /* renamed from: a  reason: collision with root package name */
    private final float f38130a;

    /* renamed from: b  reason: collision with root package name */
    private final float f38131b;

    /* renamed from: c  reason: collision with root package name */
    private final float f38132c;

    /* renamed from: d  reason: collision with root package name */
    private final float f38133d;

    /* JADX INFO: Access modifiers changed from: package-private */
    public bl(float f10, float f11, float f12, float f13, float f14) {
        this.f38130a = f10;
        this.f38131b = f11;
        this.f38132c = f12;
        this.f38133d = f13;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    @Override // mg.dl
    public final float a() {
        return 0.0f;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    @Override // mg.dl
    public final float b() {
        return this.f38132c;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    @Override // mg.dl
    public final float c() {
        return this.f38130a;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    @Override // mg.dl
    public final float d() {
        return this.f38133d;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    @Override // mg.dl
    public final float e() {
        return this.f38131b;
    }

    public final boolean equals(Object obj) {
        if (obj == this) {
            return true;
        }
        if (obj instanceof dl) {
            dl dlVar = (dl) obj;
            if (Float.floatToIntBits(this.f38130a) == Float.floatToIntBits(dlVar.c()) && Float.floatToIntBits(this.f38131b) == Float.floatToIntBits(dlVar.e()) && Float.floatToIntBits(this.f38132c) == Float.floatToIntBits(dlVar.b()) && Float.floatToIntBits(this.f38133d) == Float.floatToIntBits(dlVar.d())) {
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
        return ((((((((Float.floatToIntBits(this.f38130a) ^ 1000003) * 1000003) ^ Float.floatToIntBits(this.f38131b)) * 1000003) ^ Float.floatToIntBits(this.f38132c)) * 1000003) ^ Float.floatToIntBits(this.f38133d)) * 1000003) ^ Float.floatToIntBits(0.0f);
    }

    public final String toString() {
        return "PredictedArea{xMin=" + this.f38130a + ", yMin=" + this.f38131b + ", xMax=" + this.f38132c + ", yMax=" + this.f38133d + ", confidenceScore=0.0}";
    }
}

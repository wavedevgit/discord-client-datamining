package mg;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
final class bl extends dl {

    /* renamed from: a  reason: collision with root package name */
    private final float f37907a;

    /* renamed from: b  reason: collision with root package name */
    private final float f37908b;

    /* renamed from: c  reason: collision with root package name */
    private final float f37909c;

    /* renamed from: d  reason: collision with root package name */
    private final float f37910d;

    /* JADX INFO: Access modifiers changed from: package-private */
    public bl(float f10, float f11, float f12, float f13, float f14) {
        this.f37907a = f10;
        this.f37908b = f11;
        this.f37909c = f12;
        this.f37910d = f13;
    }

    @Override // mg.dl
    final float a() {
        return 0.0f;
    }

    @Override // mg.dl
    final float b() {
        return this.f37909c;
    }

    @Override // mg.dl
    final float c() {
        return this.f37907a;
    }

    @Override // mg.dl
    final float d() {
        return this.f37910d;
    }

    @Override // mg.dl
    final float e() {
        return this.f37908b;
    }

    public final boolean equals(Object obj) {
        if (obj == this) {
            return true;
        }
        if (obj instanceof dl) {
            dl dlVar = (dl) obj;
            if (Float.floatToIntBits(this.f37907a) == Float.floatToIntBits(dlVar.c()) && Float.floatToIntBits(this.f37908b) == Float.floatToIntBits(dlVar.e()) && Float.floatToIntBits(this.f37909c) == Float.floatToIntBits(dlVar.b()) && Float.floatToIntBits(this.f37910d) == Float.floatToIntBits(dlVar.d())) {
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
        return ((((((((Float.floatToIntBits(this.f37907a) ^ 1000003) * 1000003) ^ Float.floatToIntBits(this.f37908b)) * 1000003) ^ Float.floatToIntBits(this.f37909c)) * 1000003) ^ Float.floatToIntBits(this.f37910d)) * 1000003) ^ Float.floatToIntBits(0.0f);
    }

    public final String toString() {
        return "PredictedArea{xMin=" + this.f37907a + ", yMin=" + this.f37908b + ", xMax=" + this.f37909c + ", yMax=" + this.f37910d + ", confidenceScore=0.0}";
    }
}

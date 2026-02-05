package e0;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
final class b extends g {

    /* renamed from: a  reason: collision with root package name */
    private final float f21278a;

    /* renamed from: b  reason: collision with root package name */
    private final float f21279b;

    /* renamed from: c  reason: collision with root package name */
    private final float f21280c;

    /* renamed from: d  reason: collision with root package name */
    private final float f21281d;

    /* JADX INFO: Access modifiers changed from: package-private */
    public b(float f10, float f11, float f12, float f13) {
        this.f21278a = f10;
        this.f21279b = f11;
        this.f21280c = f12;
        this.f21281d = f13;
    }

    @Override // e0.g, x.a2
    public float a() {
        return this.f21279b;
    }

    @Override // e0.g, x.a2
    public float b() {
        return this.f21281d;
    }

    @Override // e0.g, x.a2
    public float c() {
        return this.f21280c;
    }

    @Override // e0.g, x.a2
    public float d() {
        return this.f21278a;
    }

    public boolean equals(Object obj) {
        if (obj == this) {
            return true;
        }
        if (obj instanceof g) {
            g gVar = (g) obj;
            if (Float.floatToIntBits(this.f21278a) == Float.floatToIntBits(gVar.d()) && Float.floatToIntBits(this.f21279b) == Float.floatToIntBits(gVar.a()) && Float.floatToIntBits(this.f21280c) == Float.floatToIntBits(gVar.c()) && Float.floatToIntBits(this.f21281d) == Float.floatToIntBits(gVar.b())) {
                return true;
            }
        }
        return false;
    }

    public int hashCode() {
        return ((((((Float.floatToIntBits(this.f21278a) ^ 1000003) * 1000003) ^ Float.floatToIntBits(this.f21279b)) * 1000003) ^ Float.floatToIntBits(this.f21280c)) * 1000003) ^ Float.floatToIntBits(this.f21281d);
    }

    public String toString() {
        return "ImmutableZoomState{zoomRatio=" + this.f21278a + ", maxZoomRatio=" + this.f21279b + ", minZoomRatio=" + this.f21280c + ", linearZoom=" + this.f21281d + "}";
    }
}

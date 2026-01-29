package e0;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
final class b extends g {

    /* renamed from: a  reason: collision with root package name */
    private final float f22483a;

    /* renamed from: b  reason: collision with root package name */
    private final float f22484b;

    /* renamed from: c  reason: collision with root package name */
    private final float f22485c;

    /* renamed from: d  reason: collision with root package name */
    private final float f22486d;

    /* JADX INFO: Access modifiers changed from: package-private */
    public b(float f10, float f11, float f12, float f13) {
        this.f22483a = f10;
        this.f22484b = f11;
        this.f22485c = f12;
        this.f22486d = f13;
    }

    @Override // e0.g, x.a2
    public float a() {
        return this.f22484b;
    }

    @Override // e0.g, x.a2
    public float b() {
        return this.f22486d;
    }

    @Override // e0.g, x.a2
    public float c() {
        return this.f22485c;
    }

    @Override // e0.g, x.a2
    public float d() {
        return this.f22483a;
    }

    public boolean equals(Object obj) {
        if (obj == this) {
            return true;
        }
        if (obj instanceof g) {
            g gVar = (g) obj;
            if (Float.floatToIntBits(this.f22483a) == Float.floatToIntBits(gVar.d()) && Float.floatToIntBits(this.f22484b) == Float.floatToIntBits(gVar.a()) && Float.floatToIntBits(this.f22485c) == Float.floatToIntBits(gVar.c()) && Float.floatToIntBits(this.f22486d) == Float.floatToIntBits(gVar.b())) {
                return true;
            }
        }
        return false;
    }

    public int hashCode() {
        return ((((((Float.floatToIntBits(this.f22483a) ^ 1000003) * 1000003) ^ Float.floatToIntBits(this.f22484b)) * 1000003) ^ Float.floatToIntBits(this.f22485c)) * 1000003) ^ Float.floatToIntBits(this.f22486d);
    }

    public String toString() {
        return "ImmutableZoomState{zoomRatio=" + this.f22483a + ", maxZoomRatio=" + this.f22484b + ", minZoomRatio=" + this.f22485c + ", linearZoom=" + this.f22486d + "}";
    }
}

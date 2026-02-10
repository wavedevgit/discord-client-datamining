package e0;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
final class b extends g {

    /* renamed from: a  reason: collision with root package name */
    private final float f22173a;

    /* renamed from: b  reason: collision with root package name */
    private final float f22174b;

    /* renamed from: c  reason: collision with root package name */
    private final float f22175c;

    /* renamed from: d  reason: collision with root package name */
    private final float f22176d;

    /* JADX INFO: Access modifiers changed from: package-private */
    public b(float f10, float f11, float f12, float f13) {
        this.f22173a = f10;
        this.f22174b = f11;
        this.f22175c = f12;
        this.f22176d = f13;
    }

    @Override // e0.g, x.a2
    public float a() {
        return this.f22174b;
    }

    @Override // e0.g, x.a2
    public float b() {
        return this.f22176d;
    }

    @Override // e0.g, x.a2
    public float c() {
        return this.f22175c;
    }

    @Override // e0.g, x.a2
    public float d() {
        return this.f22173a;
    }

    public boolean equals(Object obj) {
        if (obj == this) {
            return true;
        }
        if (obj instanceof g) {
            g gVar = (g) obj;
            if (Float.floatToIntBits(this.f22173a) == Float.floatToIntBits(gVar.d()) && Float.floatToIntBits(this.f22174b) == Float.floatToIntBits(gVar.a()) && Float.floatToIntBits(this.f22175c) == Float.floatToIntBits(gVar.c()) && Float.floatToIntBits(this.f22176d) == Float.floatToIntBits(gVar.b())) {
                return true;
            }
        }
        return false;
    }

    public int hashCode() {
        return ((((((Float.floatToIntBits(this.f22173a) ^ 1000003) * 1000003) ^ Float.floatToIntBits(this.f22174b)) * 1000003) ^ Float.floatToIntBits(this.f22175c)) * 1000003) ^ Float.floatToIntBits(this.f22176d);
    }

    public String toString() {
        return "ImmutableZoomState{zoomRatio=" + this.f22173a + ", maxZoomRatio=" + this.f22174b + ", minZoomRatio=" + this.f22175c + ", linearZoom=" + this.f22176d + "}";
    }
}

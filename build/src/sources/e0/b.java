package e0;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
final class b extends g {

    /* renamed from: a  reason: collision with root package name */
    private final float f22515a;

    /* renamed from: b  reason: collision with root package name */
    private final float f22516b;

    /* renamed from: c  reason: collision with root package name */
    private final float f22517c;

    /* renamed from: d  reason: collision with root package name */
    private final float f22518d;

    /* JADX INFO: Access modifiers changed from: package-private */
    public b(float f10, float f11, float f12, float f13) {
        this.f22515a = f10;
        this.f22516b = f11;
        this.f22517c = f12;
        this.f22518d = f13;
    }

    @Override // e0.g, x.a2
    public float a() {
        return this.f22516b;
    }

    @Override // e0.g, x.a2
    public float b() {
        return this.f22518d;
    }

    @Override // e0.g, x.a2
    public float c() {
        return this.f22517c;
    }

    @Override // e0.g, x.a2
    public float d() {
        return this.f22515a;
    }

    public boolean equals(Object obj) {
        if (obj == this) {
            return true;
        }
        if (obj instanceof g) {
            g gVar = (g) obj;
            if (Float.floatToIntBits(this.f22515a) == Float.floatToIntBits(gVar.d()) && Float.floatToIntBits(this.f22516b) == Float.floatToIntBits(gVar.a()) && Float.floatToIntBits(this.f22517c) == Float.floatToIntBits(gVar.c()) && Float.floatToIntBits(this.f22518d) == Float.floatToIntBits(gVar.b())) {
                return true;
            }
        }
        return false;
    }

    public int hashCode() {
        return ((((((Float.floatToIntBits(this.f22515a) ^ 1000003) * 1000003) ^ Float.floatToIntBits(this.f22516b)) * 1000003) ^ Float.floatToIntBits(this.f22517c)) * 1000003) ^ Float.floatToIntBits(this.f22518d);
    }

    public String toString() {
        return "ImmutableZoomState{zoomRatio=" + this.f22515a + ", maxZoomRatio=" + this.f22516b + ", minZoomRatio=" + this.f22517c + ", linearZoom=" + this.f22518d + "}";
    }
}

package e0;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
final class b extends g {

    /* renamed from: a  reason: collision with root package name */
    private final float f21211a;

    /* renamed from: b  reason: collision with root package name */
    private final float f21212b;

    /* renamed from: c  reason: collision with root package name */
    private final float f21213c;

    /* renamed from: d  reason: collision with root package name */
    private final float f21214d;

    /* JADX INFO: Access modifiers changed from: package-private */
    public b(float f10, float f11, float f12, float f13) {
        this.f21211a = f10;
        this.f21212b = f11;
        this.f21213c = f12;
        this.f21214d = f13;
    }

    @Override // e0.g, x.a2
    public float a() {
        return this.f21212b;
    }

    @Override // e0.g, x.a2
    public float b() {
        return this.f21214d;
    }

    @Override // e0.g, x.a2
    public float c() {
        return this.f21213c;
    }

    @Override // e0.g, x.a2
    public float d() {
        return this.f21211a;
    }

    public boolean equals(Object obj) {
        if (obj == this) {
            return true;
        }
        if (obj instanceof g) {
            g gVar = (g) obj;
            if (Float.floatToIntBits(this.f21211a) == Float.floatToIntBits(gVar.d()) && Float.floatToIntBits(this.f21212b) == Float.floatToIntBits(gVar.a()) && Float.floatToIntBits(this.f21213c) == Float.floatToIntBits(gVar.c()) && Float.floatToIntBits(this.f21214d) == Float.floatToIntBits(gVar.b())) {
                return true;
            }
        }
        return false;
    }

    public int hashCode() {
        return ((((((Float.floatToIntBits(this.f21211a) ^ 1000003) * 1000003) ^ Float.floatToIntBits(this.f21212b)) * 1000003) ^ Float.floatToIntBits(this.f21213c)) * 1000003) ^ Float.floatToIntBits(this.f21214d);
    }

    public String toString() {
        return "ImmutableZoomState{zoomRatio=" + this.f21211a + ", maxZoomRatio=" + this.f21212b + ", minZoomRatio=" + this.f21213c + ", linearZoom=" + this.f21214d + "}";
    }
}

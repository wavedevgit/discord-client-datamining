package e0;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
final class b extends g {

    /* renamed from: a  reason: collision with root package name */
    private final float f21206a;

    /* renamed from: b  reason: collision with root package name */
    private final float f21207b;

    /* renamed from: c  reason: collision with root package name */
    private final float f21208c;

    /* renamed from: d  reason: collision with root package name */
    private final float f21209d;

    /* JADX INFO: Access modifiers changed from: package-private */
    public b(float f10, float f11, float f12, float f13) {
        this.f21206a = f10;
        this.f21207b = f11;
        this.f21208c = f12;
        this.f21209d = f13;
    }

    @Override // e0.g, x.a2
    public float a() {
        return this.f21207b;
    }

    @Override // e0.g, x.a2
    public float b() {
        return this.f21209d;
    }

    @Override // e0.g, x.a2
    public float c() {
        return this.f21208c;
    }

    @Override // e0.g, x.a2
    public float d() {
        return this.f21206a;
    }

    public boolean equals(Object obj) {
        if (obj == this) {
            return true;
        }
        if (obj instanceof g) {
            g gVar = (g) obj;
            if (Float.floatToIntBits(this.f21206a) == Float.floatToIntBits(gVar.d()) && Float.floatToIntBits(this.f21207b) == Float.floatToIntBits(gVar.a()) && Float.floatToIntBits(this.f21208c) == Float.floatToIntBits(gVar.c()) && Float.floatToIntBits(this.f21209d) == Float.floatToIntBits(gVar.b())) {
                return true;
            }
        }
        return false;
    }

    public int hashCode() {
        return ((((((Float.floatToIntBits(this.f21206a) ^ 1000003) * 1000003) ^ Float.floatToIntBits(this.f21207b)) * 1000003) ^ Float.floatToIntBits(this.f21208c)) * 1000003) ^ Float.floatToIntBits(this.f21209d);
    }

    public String toString() {
        return "ImmutableZoomState{zoomRatio=" + this.f21206a + ", maxZoomRatio=" + this.f21207b + ", minZoomRatio=" + this.f21208c + ", linearZoom=" + this.f21209d + "}";
    }
}

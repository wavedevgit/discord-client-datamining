package e0;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
final class b extends g {

    /* renamed from: a  reason: collision with root package name */
    private final float f21006a;

    /* renamed from: b  reason: collision with root package name */
    private final float f21007b;

    /* renamed from: c  reason: collision with root package name */
    private final float f21008c;

    /* renamed from: d  reason: collision with root package name */
    private final float f21009d;

    /* JADX INFO: Access modifiers changed from: package-private */
    public b(float f10, float f11, float f12, float f13) {
        this.f21006a = f10;
        this.f21007b = f11;
        this.f21008c = f12;
        this.f21009d = f13;
    }

    @Override // e0.g, x.a2
    public float a() {
        return this.f21007b;
    }

    @Override // e0.g, x.a2
    public float b() {
        return this.f21009d;
    }

    @Override // e0.g, x.a2
    public float c() {
        return this.f21008c;
    }

    @Override // e0.g, x.a2
    public float d() {
        return this.f21006a;
    }

    public boolean equals(Object obj) {
        if (obj == this) {
            return true;
        }
        if (obj instanceof g) {
            g gVar = (g) obj;
            if (Float.floatToIntBits(this.f21006a) == Float.floatToIntBits(gVar.d()) && Float.floatToIntBits(this.f21007b) == Float.floatToIntBits(gVar.a()) && Float.floatToIntBits(this.f21008c) == Float.floatToIntBits(gVar.c()) && Float.floatToIntBits(this.f21009d) == Float.floatToIntBits(gVar.b())) {
                return true;
            }
        }
        return false;
    }

    public int hashCode() {
        return ((((((Float.floatToIntBits(this.f21006a) ^ 1000003) * 1000003) ^ Float.floatToIntBits(this.f21007b)) * 1000003) ^ Float.floatToIntBits(this.f21008c)) * 1000003) ^ Float.floatToIntBits(this.f21009d);
    }

    public String toString() {
        return "ImmutableZoomState{zoomRatio=" + this.f21006a + ", maxZoomRatio=" + this.f21007b + ", minZoomRatio=" + this.f21008c + ", linearZoom=" + this.f21009d + "}";
    }
}

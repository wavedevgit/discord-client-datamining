package e0;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
final class b extends g {

    /* renamed from: a  reason: collision with root package name */
    private final float f22174a;

    /* renamed from: b  reason: collision with root package name */
    private final float f22175b;

    /* renamed from: c  reason: collision with root package name */
    private final float f22176c;

    /* renamed from: d  reason: collision with root package name */
    private final float f22177d;

    /* JADX INFO: Access modifiers changed from: package-private */
    public b(float f10, float f11, float f12, float f13) {
        this.f22174a = f10;
        this.f22175b = f11;
        this.f22176c = f12;
        this.f22177d = f13;
    }

    @Override // e0.g, x.a2
    public float a() {
        return this.f22175b;
    }

    @Override // e0.g, x.a2
    public float b() {
        return this.f22177d;
    }

    @Override // e0.g, x.a2
    public float c() {
        return this.f22176c;
    }

    @Override // e0.g, x.a2
    public float d() {
        return this.f22174a;
    }

    public boolean equals(Object obj) {
        if (obj == this) {
            return true;
        }
        if (obj instanceof g) {
            g gVar = (g) obj;
            if (Float.floatToIntBits(this.f22174a) == Float.floatToIntBits(gVar.d()) && Float.floatToIntBits(this.f22175b) == Float.floatToIntBits(gVar.a()) && Float.floatToIntBits(this.f22176c) == Float.floatToIntBits(gVar.c()) && Float.floatToIntBits(this.f22177d) == Float.floatToIntBits(gVar.b())) {
                return true;
            }
        }
        return false;
    }

    public int hashCode() {
        return ((((((Float.floatToIntBits(this.f22174a) ^ 1000003) * 1000003) ^ Float.floatToIntBits(this.f22175b)) * 1000003) ^ Float.floatToIntBits(this.f22176c)) * 1000003) ^ Float.floatToIntBits(this.f22177d);
    }

    public String toString() {
        return "ImmutableZoomState{zoomRatio=" + this.f22174a + ", maxZoomRatio=" + this.f22175b + ", minZoomRatio=" + this.f22176c + ", linearZoom=" + this.f22177d + "}";
    }
}

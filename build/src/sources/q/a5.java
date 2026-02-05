package q;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
class a5 implements x.a2 {

    /* renamed from: a  reason: collision with root package name */
    private float f46714a;

    /* renamed from: b  reason: collision with root package name */
    private final float f46715b;

    /* renamed from: c  reason: collision with root package name */
    private final float f46716c;

    /* renamed from: d  reason: collision with root package name */
    private float f46717d;

    /* JADX INFO: Access modifiers changed from: package-private */
    public a5(float f10, float f11) {
        this.f46715b = f10;
        this.f46716c = f11;
    }

    private float e(float f10) {
        float f11 = this.f46715b;
        float f12 = this.f46716c;
        if (f11 == f12) {
            return 0.0f;
        }
        if (f10 == f11) {
            return 1.0f;
        }
        if (f10 == f12) {
            return 0.0f;
        }
        float f13 = 1.0f / f12;
        return ((1.0f / f10) - f13) / ((1.0f / f11) - f13);
    }

    @Override // x.a2
    public float a() {
        return this.f46715b;
    }

    @Override // x.a2
    public float b() {
        return this.f46717d;
    }

    @Override // x.a2
    public float c() {
        return this.f46716c;
    }

    @Override // x.a2
    public float d() {
        return this.f46714a;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public void f(float f10) {
        if (f10 <= this.f46715b && f10 >= this.f46716c) {
            this.f46714a = f10;
            this.f46717d = e(f10);
            return;
        }
        throw new IllegalArgumentException("Requested zoomRatio " + f10 + " is not within valid range [" + this.f46716c + " , " + this.f46715b + "]");
    }
}

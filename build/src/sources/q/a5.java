package q;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
class a5 implements x.a2 {

    /* renamed from: a  reason: collision with root package name */
    private float f43802a;

    /* renamed from: b  reason: collision with root package name */
    private final float f43803b;

    /* renamed from: c  reason: collision with root package name */
    private final float f43804c;

    /* renamed from: d  reason: collision with root package name */
    private float f43805d;

    /* JADX INFO: Access modifiers changed from: package-private */
    public a5(float f10, float f11) {
        this.f43803b = f10;
        this.f43804c = f11;
    }

    private float e(float f10) {
        float f11 = this.f43803b;
        float f12 = this.f43804c;
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
        return this.f43803b;
    }

    @Override // x.a2
    public float b() {
        return this.f43805d;
    }

    @Override // x.a2
    public float c() {
        return this.f43804c;
    }

    @Override // x.a2
    public float d() {
        return this.f43802a;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public void f(float f10) {
        if (f10 <= this.f43803b && f10 >= this.f43804c) {
            this.f43802a = f10;
            this.f43805d = e(f10);
            return;
        }
        throw new IllegalArgumentException("Requested zoomRatio " + f10 + " is not within valid range [" + this.f43804c + " , " + this.f43803b + "]");
    }
}

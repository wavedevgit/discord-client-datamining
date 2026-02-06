package q;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
class a5 implements x.a2 {

    /* renamed from: a  reason: collision with root package name */
    private float f45762a;

    /* renamed from: b  reason: collision with root package name */
    private final float f45763b;

    /* renamed from: c  reason: collision with root package name */
    private final float f45764c;

    /* renamed from: d  reason: collision with root package name */
    private float f45765d;

    /* JADX INFO: Access modifiers changed from: package-private */
    public a5(float f10, float f11) {
        this.f45763b = f10;
        this.f45764c = f11;
    }

    private float e(float f10) {
        float f11 = this.f45763b;
        float f12 = this.f45764c;
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
        return this.f45763b;
    }

    @Override // x.a2
    public float b() {
        return this.f45765d;
    }

    @Override // x.a2
    public float c() {
        return this.f45764c;
    }

    @Override // x.a2
    public float d() {
        return this.f45762a;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public void f(float f10) {
        if (f10 <= this.f45763b && f10 >= this.f45764c) {
            this.f45762a = f10;
            this.f45765d = e(f10);
            return;
        }
        throw new IllegalArgumentException("Requested zoomRatio " + f10 + " is not within valid range [" + this.f45764c + " , " + this.f45763b + "]");
    }
}

package ul;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class d implements e {

    /* renamed from: a  reason: collision with root package name */
    private final double f51655a;

    /* renamed from: b  reason: collision with root package name */
    private final double f51656b;

    /* renamed from: c  reason: collision with root package name */
    private double f51657c;

    /* renamed from: d  reason: collision with root package name */
    private int f51658d;

    public d(int i10, int i11) {
        this.f51655a = 1.0d / i10;
        this.f51656b = 1.0d / i11;
    }

    @Override // ul.e
    public boolean a() {
        double d10 = this.f51657c + this.f51655a;
        this.f51657c = d10;
        int i10 = this.f51658d;
        this.f51658d = i10 + 1;
        if (i10 == 0) {
            return true;
        }
        double d11 = this.f51656b;
        if (d10 > d11) {
            this.f51657c = d10 - d11;
            return true;
        }
        return false;
    }
}

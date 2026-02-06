package ul;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class d implements e {

    /* renamed from: a  reason: collision with root package name */
    private final double f51607a;

    /* renamed from: b  reason: collision with root package name */
    private final double f51608b;

    /* renamed from: c  reason: collision with root package name */
    private double f51609c;

    /* renamed from: d  reason: collision with root package name */
    private int f51610d;

    public d(int i10, int i11) {
        this.f51607a = 1.0d / i10;
        this.f51608b = 1.0d / i11;
    }

    @Override // ul.e
    public boolean a() {
        double d10 = this.f51609c + this.f51607a;
        this.f51609c = d10;
        int i10 = this.f51610d;
        this.f51610d = i10 + 1;
        if (i10 == 0) {
            return true;
        }
        double d11 = this.f51608b;
        if (d10 > d11) {
            this.f51609c = d10 - d11;
            return true;
        }
        return false;
    }
}

package xl;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class d implements e {

    /* renamed from: a  reason: collision with root package name */
    private final double f54911a;

    /* renamed from: b  reason: collision with root package name */
    private final double f54912b;

    /* renamed from: c  reason: collision with root package name */
    private double f54913c;

    /* renamed from: d  reason: collision with root package name */
    private int f54914d;

    public d(int i10, int i11) {
        this.f54911a = 1.0d / i10;
        this.f54912b = 1.0d / i11;
    }

    @Override // xl.e
    public boolean a() {
        double d10 = this.f54913c + this.f54911a;
        this.f54913c = d10;
        int i10 = this.f54914d;
        this.f54914d = i10 + 1;
        if (i10 == 0) {
            return true;
        }
        double d11 = this.f54912b;
        if (d10 > d11) {
            this.f54913c = d10 - d11;
            return true;
        }
        return false;
    }
}

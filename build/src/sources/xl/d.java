package xl;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class d implements e {

    /* renamed from: a  reason: collision with root package name */
    private final double f54912a;

    /* renamed from: b  reason: collision with root package name */
    private final double f54913b;

    /* renamed from: c  reason: collision with root package name */
    private double f54914c;

    /* renamed from: d  reason: collision with root package name */
    private int f54915d;

    public d(int i10, int i11) {
        this.f54912a = 1.0d / i10;
        this.f54913b = 1.0d / i11;
    }

    @Override // xl.e
    public boolean a() {
        double d10 = this.f54914c + this.f54912a;
        this.f54914c = d10;
        int i10 = this.f54915d;
        this.f54915d = i10 + 1;
        if (i10 == 0) {
            return true;
        }
        double d11 = this.f54913b;
        if (d10 > d11) {
            this.f54914c = d10 - d11;
            return true;
        }
        return false;
    }
}

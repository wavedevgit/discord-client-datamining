package vl;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class d implements e {

    /* renamed from: a  reason: collision with root package name */
    private final double f52515a;

    /* renamed from: b  reason: collision with root package name */
    private final double f52516b;

    /* renamed from: c  reason: collision with root package name */
    private double f52517c;

    /* renamed from: d  reason: collision with root package name */
    private int f52518d;

    public d(int i10, int i11) {
        this.f52515a = 1.0d / i10;
        this.f52516b = 1.0d / i11;
    }

    @Override // vl.e
    public boolean a() {
        double d10 = this.f52517c + this.f52515a;
        this.f52517c = d10;
        int i10 = this.f52518d;
        this.f52518d = i10 + 1;
        if (i10 == 0) {
            return true;
        }
        double d11 = this.f52516b;
        if (d10 > d11) {
            this.f52517c = d10 - d11;
            return true;
        }
        return false;
    }
}

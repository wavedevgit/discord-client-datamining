package xv;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public class d extends cw.f {

    /* renamed from: a  reason: collision with root package name */
    private final cw.d[] f55172a;

    /* renamed from: b  reason: collision with root package name */
    private int f55173b = -1;

    /* renamed from: c  reason: collision with root package name */
    private int f55174c = -1;

    /* renamed from: d  reason: collision with root package name */
    private boolean f55175d = false;

    public d(cw.d... dVarArr) {
        this.f55172a = dVarArr;
    }

    @Override // cw.f
    public cw.f a(int i10) {
        this.f55174c = i10;
        return this;
    }

    @Override // cw.f
    public cw.f b(int i10) {
        this.f55173b = i10;
        return this;
    }

    @Override // cw.f
    public cw.f e() {
        this.f55175d = true;
        return this;
    }

    public cw.d[] f() {
        return this.f55172a;
    }

    public int g() {
        return this.f55174c;
    }

    public int h() {
        return this.f55173b;
    }

    public boolean i() {
        return this.f55175d;
    }
}

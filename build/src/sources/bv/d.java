package bv;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public class d extends gv.f {

    /* renamed from: a  reason: collision with root package name */
    private final gv.d[] f7775a;

    /* renamed from: b  reason: collision with root package name */
    private int f7776b = -1;

    /* renamed from: c  reason: collision with root package name */
    private int f7777c = -1;

    /* renamed from: d  reason: collision with root package name */
    private boolean f7778d = false;

    public d(gv.d... dVarArr) {
        this.f7775a = dVarArr;
    }

    @Override // gv.f
    public gv.f a(int i10) {
        this.f7777c = i10;
        return this;
    }

    @Override // gv.f
    public gv.f b(int i10) {
        this.f7776b = i10;
        return this;
    }

    @Override // gv.f
    public gv.f e() {
        this.f7778d = true;
        return this;
    }

    public gv.d[] f() {
        return this.f7775a;
    }

    public int g() {
        return this.f7777c;
    }

    public int h() {
        return this.f7776b;
    }

    public boolean i() {
        return this.f7778d;
    }
}

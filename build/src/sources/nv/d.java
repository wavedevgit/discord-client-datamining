package nv;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public class d extends sv.f {

    /* renamed from: a  reason: collision with root package name */
    private final sv.d[] f41222a;

    /* renamed from: b  reason: collision with root package name */
    private int f41223b = -1;

    /* renamed from: c  reason: collision with root package name */
    private int f41224c = -1;

    /* renamed from: d  reason: collision with root package name */
    private boolean f41225d = false;

    public d(sv.d... dVarArr) {
        this.f41222a = dVarArr;
    }

    @Override // sv.f
    public sv.f a(int i10) {
        this.f41224c = i10;
        return this;
    }

    @Override // sv.f
    public sv.f b(int i10) {
        this.f41223b = i10;
        return this;
    }

    @Override // sv.f
    public sv.f e() {
        this.f41225d = true;
        return this;
    }

    public sv.d[] f() {
        return this.f41222a;
    }

    public int g() {
        return this.f41224c;
    }

    public int h() {
        return this.f41223b;
    }

    public boolean i() {
        return this.f41225d;
    }
}

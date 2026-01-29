package av;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public class d extends fv.f {

    /* renamed from: a  reason: collision with root package name */
    private final fv.d[] f6961a;

    /* renamed from: b  reason: collision with root package name */
    private int f6962b = -1;

    /* renamed from: c  reason: collision with root package name */
    private int f6963c = -1;

    /* renamed from: d  reason: collision with root package name */
    private boolean f6964d = false;

    public d(fv.d... dVarArr) {
        this.f6961a = dVarArr;
    }

    @Override // fv.f
    public fv.f a(int i10) {
        this.f6963c = i10;
        return this;
    }

    @Override // fv.f
    public fv.f b(int i10) {
        this.f6962b = i10;
        return this;
    }

    @Override // fv.f
    public fv.f e() {
        this.f6964d = true;
        return this;
    }

    public fv.d[] f() {
        return this.f6961a;
    }

    public int g() {
        return this.f6963c;
    }

    public int h() {
        return this.f6962b;
    }

    public boolean i() {
        return this.f6964d;
    }
}

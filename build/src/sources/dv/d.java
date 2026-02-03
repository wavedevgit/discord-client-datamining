package dv;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public class d extends iv.f {

    /* renamed from: a  reason: collision with root package name */
    private final iv.d[] f21091a;

    /* renamed from: b  reason: collision with root package name */
    private int f21092b = -1;

    /* renamed from: c  reason: collision with root package name */
    private int f21093c = -1;

    /* renamed from: d  reason: collision with root package name */
    private boolean f21094d = false;

    public d(iv.d... dVarArr) {
        this.f21091a = dVarArr;
    }

    @Override // iv.f
    public iv.f a(int i10) {
        this.f21093c = i10;
        return this;
    }

    @Override // iv.f
    public iv.f b(int i10) {
        this.f21092b = i10;
        return this;
    }

    @Override // iv.f
    public iv.f e() {
        this.f21094d = true;
        return this;
    }

    public iv.d[] f() {
        return this.f21091a;
    }

    public int g() {
        return this.f21093c;
    }

    public int h() {
        return this.f21092b;
    }

    public boolean i() {
        return this.f21094d;
    }
}

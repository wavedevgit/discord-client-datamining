package sa;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public class n implements o {

    /* renamed from: d  reason: collision with root package name */
    public static final o f49898d = d(Integer.MAX_VALUE, true, true);

    /* renamed from: a  reason: collision with root package name */
    int f49899a;

    /* renamed from: b  reason: collision with root package name */
    boolean f49900b;

    /* renamed from: c  reason: collision with root package name */
    boolean f49901c;

    private n(int i10, boolean z10, boolean z11) {
        this.f49899a = i10;
        this.f49900b = z10;
        this.f49901c = z11;
    }

    public static o d(int i10, boolean z10, boolean z11) {
        return new n(i10, z10, z11);
    }

    @Override // sa.o
    public boolean a() {
        return this.f49901c;
    }

    @Override // sa.o
    public boolean b() {
        return this.f49900b;
    }

    @Override // sa.o
    public int c() {
        return this.f49899a;
    }

    public boolean equals(Object obj) {
        if (obj == this) {
            return true;
        }
        if (!(obj instanceof n)) {
            return false;
        }
        n nVar = (n) obj;
        if (this.f49899a == nVar.f49899a && this.f49900b == nVar.f49900b && this.f49901c == nVar.f49901c) {
            return true;
        }
        return false;
    }

    public int hashCode() {
        int i10;
        int i11 = this.f49899a;
        int i12 = 0;
        if (this.f49900b) {
            i10 = 4194304;
        } else {
            i10 = 0;
        }
        int i13 = i11 ^ i10;
        if (this.f49901c) {
            i12 = 8388608;
        }
        return i13 ^ i12;
    }
}

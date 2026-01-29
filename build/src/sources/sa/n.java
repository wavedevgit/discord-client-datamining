package sa;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public class n implements o {

    /* renamed from: d  reason: collision with root package name */
    public static final o f48889d = d(Integer.MAX_VALUE, true, true);

    /* renamed from: a  reason: collision with root package name */
    int f48890a;

    /* renamed from: b  reason: collision with root package name */
    boolean f48891b;

    /* renamed from: c  reason: collision with root package name */
    boolean f48892c;

    private n(int i10, boolean z10, boolean z11) {
        this.f48890a = i10;
        this.f48891b = z10;
        this.f48892c = z11;
    }

    public static o d(int i10, boolean z10, boolean z11) {
        return new n(i10, z10, z11);
    }

    @Override // sa.o
    public boolean a() {
        return this.f48892c;
    }

    @Override // sa.o
    public boolean b() {
        return this.f48891b;
    }

    @Override // sa.o
    public int c() {
        return this.f48890a;
    }

    public boolean equals(Object obj) {
        if (obj == this) {
            return true;
        }
        if (!(obj instanceof n)) {
            return false;
        }
        n nVar = (n) obj;
        if (this.f48890a == nVar.f48890a && this.f48891b == nVar.f48891b && this.f48892c == nVar.f48892c) {
            return true;
        }
        return false;
    }

    public int hashCode() {
        int i10;
        int i11 = this.f48890a;
        int i12 = 0;
        if (this.f48891b) {
            i10 = 4194304;
        } else {
            i10 = 0;
        }
        int i13 = i11 ^ i10;
        if (this.f48892c) {
            i12 = 8388608;
        }
        return i13 ^ i12;
    }
}

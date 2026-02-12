package ta;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public class n implements o {

    /* renamed from: d  reason: collision with root package name */
    public static final o f48672d = d(Integer.MAX_VALUE, true, true);

    /* renamed from: a  reason: collision with root package name */
    int f48673a;

    /* renamed from: b  reason: collision with root package name */
    boolean f48674b;

    /* renamed from: c  reason: collision with root package name */
    boolean f48675c;

    private n(int i10, boolean z10, boolean z11) {
        this.f48673a = i10;
        this.f48674b = z10;
        this.f48675c = z11;
    }

    public static o d(int i10, boolean z10, boolean z11) {
        return new n(i10, z10, z11);
    }

    @Override // ta.o
    public boolean a() {
        return this.f48675c;
    }

    @Override // ta.o
    public boolean b() {
        return this.f48674b;
    }

    @Override // ta.o
    public int c() {
        return this.f48673a;
    }

    public boolean equals(Object obj) {
        if (obj == this) {
            return true;
        }
        if (!(obj instanceof n)) {
            return false;
        }
        n nVar = (n) obj;
        if (this.f48673a == nVar.f48673a && this.f48674b == nVar.f48674b && this.f48675c == nVar.f48675c) {
            return true;
        }
        return false;
    }

    public int hashCode() {
        int i10;
        int i11 = this.f48673a;
        int i12 = 0;
        if (this.f48674b) {
            i10 = 4194304;
        } else {
            i10 = 0;
        }
        int i13 = i11 ^ i10;
        if (this.f48675c) {
            i12 = 8388608;
        }
        return i13 ^ i12;
    }
}

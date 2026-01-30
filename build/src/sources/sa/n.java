package sa;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public class n implements o {

    /* renamed from: d  reason: collision with root package name */
    public static final o f48905d = d(Integer.MAX_VALUE, true, true);

    /* renamed from: a  reason: collision with root package name */
    int f48906a;

    /* renamed from: b  reason: collision with root package name */
    boolean f48907b;

    /* renamed from: c  reason: collision with root package name */
    boolean f48908c;

    private n(int i10, boolean z10, boolean z11) {
        this.f48906a = i10;
        this.f48907b = z10;
        this.f48908c = z11;
    }

    public static o d(int i10, boolean z10, boolean z11) {
        return new n(i10, z10, z11);
    }

    @Override // sa.o
    public boolean a() {
        return this.f48908c;
    }

    @Override // sa.o
    public boolean b() {
        return this.f48907b;
    }

    @Override // sa.o
    public int c() {
        return this.f48906a;
    }

    public boolean equals(Object obj) {
        if (obj == this) {
            return true;
        }
        if (!(obj instanceof n)) {
            return false;
        }
        n nVar = (n) obj;
        if (this.f48906a == nVar.f48906a && this.f48907b == nVar.f48907b && this.f48908c == nVar.f48908c) {
            return true;
        }
        return false;
    }

    public int hashCode() {
        int i10;
        int i11 = this.f48906a;
        int i12 = 0;
        if (this.f48907b) {
            i10 = 4194304;
        } else {
            i10 = 0;
        }
        int i13 = i11 ^ i10;
        if (this.f48908c) {
            i12 = 8388608;
        }
        return i13 ^ i12;
    }
}

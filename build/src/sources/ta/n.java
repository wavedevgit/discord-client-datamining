package ta;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public class n implements o {

    /* renamed from: d  reason: collision with root package name */
    public static final o f50739d = d(Integer.MAX_VALUE, true, true);

    /* renamed from: a  reason: collision with root package name */
    int f50740a;

    /* renamed from: b  reason: collision with root package name */
    boolean f50741b;

    /* renamed from: c  reason: collision with root package name */
    boolean f50742c;

    private n(int i10, boolean z10, boolean z11) {
        this.f50740a = i10;
        this.f50741b = z10;
        this.f50742c = z11;
    }

    public static o d(int i10, boolean z10, boolean z11) {
        return new n(i10, z10, z11);
    }

    @Override // ta.o
    public boolean a() {
        return this.f50742c;
    }

    @Override // ta.o
    public boolean b() {
        return this.f50741b;
    }

    @Override // ta.o
    public int c() {
        return this.f50740a;
    }

    public boolean equals(Object obj) {
        if (obj == this) {
            return true;
        }
        if (!(obj instanceof n)) {
            return false;
        }
        n nVar = (n) obj;
        if (this.f50740a == nVar.f50740a && this.f50741b == nVar.f50741b && this.f50742c == nVar.f50742c) {
            return true;
        }
        return false;
    }

    public int hashCode() {
        int i10;
        int i11 = this.f50740a;
        int i12 = 0;
        if (this.f50741b) {
            i10 = 4194304;
        } else {
            i10 = 0;
        }
        int i13 = i11 ^ i10;
        if (this.f50742c) {
            i12 = 8388608;
        }
        return i13 ^ i12;
    }
}

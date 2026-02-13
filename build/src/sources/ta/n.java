package ta;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public class n implements o {

    /* renamed from: d  reason: collision with root package name */
    public static final o f49240d = d(Integer.MAX_VALUE, true, true);

    /* renamed from: a  reason: collision with root package name */
    int f49241a;

    /* renamed from: b  reason: collision with root package name */
    boolean f49242b;

    /* renamed from: c  reason: collision with root package name */
    boolean f49243c;

    private n(int i10, boolean z10, boolean z11) {
        this.f49241a = i10;
        this.f49242b = z10;
        this.f49243c = z11;
    }

    public static o d(int i10, boolean z10, boolean z11) {
        return new n(i10, z10, z11);
    }

    @Override // ta.o
    public boolean a() {
        return this.f49243c;
    }

    @Override // ta.o
    public boolean b() {
        return this.f49242b;
    }

    @Override // ta.o
    public int c() {
        return this.f49241a;
    }

    public boolean equals(Object obj) {
        if (obj == this) {
            return true;
        }
        if (!(obj instanceof n)) {
            return false;
        }
        n nVar = (n) obj;
        if (this.f49241a == nVar.f49241a && this.f49242b == nVar.f49242b && this.f49243c == nVar.f49243c) {
            return true;
        }
        return false;
    }

    public int hashCode() {
        int i10;
        int i11 = this.f49241a;
        int i12 = 0;
        if (this.f49242b) {
            i10 = 4194304;
        } else {
            i10 = 0;
        }
        int i13 = i11 ^ i10;
        if (this.f49243c) {
            i12 = 8388608;
        }
        return i13 ^ i12;
    }
}

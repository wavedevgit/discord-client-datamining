package sa;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public class n implements o {

    /* renamed from: d  reason: collision with root package name */
    public static final o f49515d = d(Integer.MAX_VALUE, true, true);

    /* renamed from: a  reason: collision with root package name */
    int f49516a;

    /* renamed from: b  reason: collision with root package name */
    boolean f49517b;

    /* renamed from: c  reason: collision with root package name */
    boolean f49518c;

    private n(int i10, boolean z10, boolean z11) {
        this.f49516a = i10;
        this.f49517b = z10;
        this.f49518c = z11;
    }

    public static o d(int i10, boolean z10, boolean z11) {
        return new n(i10, z10, z11);
    }

    @Override // sa.o
    public boolean a() {
        return this.f49518c;
    }

    @Override // sa.o
    public boolean b() {
        return this.f49517b;
    }

    @Override // sa.o
    public int c() {
        return this.f49516a;
    }

    public boolean equals(Object obj) {
        if (obj == this) {
            return true;
        }
        if (!(obj instanceof n)) {
            return false;
        }
        n nVar = (n) obj;
        if (this.f49516a == nVar.f49516a && this.f49517b == nVar.f49517b && this.f49518c == nVar.f49518c) {
            return true;
        }
        return false;
    }

    public int hashCode() {
        int i10;
        int i11 = this.f49516a;
        int i12 = 0;
        if (this.f49517b) {
            i10 = 4194304;
        } else {
            i10 = 0;
        }
        int i13 = i11 ^ i10;
        if (this.f49518c) {
            i12 = 8388608;
        }
        return i13 ^ i12;
    }
}

package ng;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
final class a0 extends e0 {

    /* renamed from: a  reason: collision with root package name */
    private final String f38401a;

    /* renamed from: b  reason: collision with root package name */
    private final boolean f38402b;

    /* renamed from: c  reason: collision with root package name */
    private final int f38403c;

    /* JADX INFO: Access modifiers changed from: package-private */
    public /* synthetic */ a0(String str, boolean z10, int i10, z zVar) {
        this.f38401a = str;
        this.f38402b = z10;
        this.f38403c = i10;
    }

    @Override // ng.e0
    public final int a() {
        return this.f38403c;
    }

    @Override // ng.e0
    public final String b() {
        return this.f38401a;
    }

    @Override // ng.e0
    public final boolean c() {
        return this.f38402b;
    }

    public final boolean equals(Object obj) {
        if (obj == this) {
            return true;
        }
        if (obj instanceof e0) {
            e0 e0Var = (e0) obj;
            if (this.f38401a.equals(e0Var.b()) && this.f38402b == e0Var.c() && this.f38403c == e0Var.a()) {
                return true;
            }
        }
        return false;
    }

    public final int hashCode() {
        int i10;
        int hashCode = this.f38401a.hashCode() ^ 1000003;
        if (true != this.f38402b) {
            i10 = 1237;
        } else {
            i10 = 1231;
        }
        return (((hashCode * 1000003) ^ i10) * 1000003) ^ this.f38403c;
    }

    public final String toString() {
        return "MLKitLoggingOptions{libraryName=" + this.f38401a + ", enableFirelog=" + this.f38402b + ", firelogEventType=" + this.f38403c + "}";
    }
}

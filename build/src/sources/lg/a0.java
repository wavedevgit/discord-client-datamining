package lg;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
final class a0 extends e0 {

    /* renamed from: a  reason: collision with root package name */
    private final String f37410a;

    /* renamed from: b  reason: collision with root package name */
    private final boolean f37411b;

    /* renamed from: c  reason: collision with root package name */
    private final int f37412c;

    /* JADX INFO: Access modifiers changed from: package-private */
    public /* synthetic */ a0(String str, boolean z10, int i10, z zVar) {
        this.f37410a = str;
        this.f37411b = z10;
        this.f37412c = i10;
    }

    @Override // lg.e0
    public final int a() {
        return this.f37412c;
    }

    @Override // lg.e0
    public final String b() {
        return this.f37410a;
    }

    @Override // lg.e0
    public final boolean c() {
        return this.f37411b;
    }

    public final boolean equals(Object obj) {
        if (obj == this) {
            return true;
        }
        if (obj instanceof e0) {
            e0 e0Var = (e0) obj;
            if (this.f37410a.equals(e0Var.b()) && this.f37411b == e0Var.c() && this.f37412c == e0Var.a()) {
                return true;
            }
        }
        return false;
    }

    public final int hashCode() {
        int i10;
        int hashCode = this.f37410a.hashCode() ^ 1000003;
        if (true != this.f37411b) {
            i10 = 1237;
        } else {
            i10 = 1231;
        }
        return (((hashCode * 1000003) ^ i10) * 1000003) ^ this.f37412c;
    }

    public final String toString() {
        return "MLKitLoggingOptions{libraryName=" + this.f37410a + ", enableFirelog=" + this.f37411b + ", firelogEventType=" + this.f37412c + "}";
    }
}

package lg;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
final class a0 extends e0 {

    /* renamed from: a  reason: collision with root package name */
    private final String f36806a;

    /* renamed from: b  reason: collision with root package name */
    private final boolean f36807b;

    /* renamed from: c  reason: collision with root package name */
    private final int f36808c;

    /* JADX INFO: Access modifiers changed from: package-private */
    public /* synthetic */ a0(String str, boolean z10, int i10, z zVar) {
        this.f36806a = str;
        this.f36807b = z10;
        this.f36808c = i10;
    }

    @Override // lg.e0
    public final int a() {
        return this.f36808c;
    }

    @Override // lg.e0
    public final String b() {
        return this.f36806a;
    }

    @Override // lg.e0
    public final boolean c() {
        return this.f36807b;
    }

    public final boolean equals(Object obj) {
        if (obj == this) {
            return true;
        }
        if (obj instanceof e0) {
            e0 e0Var = (e0) obj;
            if (this.f36806a.equals(e0Var.b()) && this.f36807b == e0Var.c() && this.f36808c == e0Var.a()) {
                return true;
            }
        }
        return false;
    }

    public final int hashCode() {
        int i10;
        int hashCode = this.f36806a.hashCode() ^ 1000003;
        if (true != this.f36807b) {
            i10 = 1237;
        } else {
            i10 = 1231;
        }
        return (((hashCode * 1000003) ^ i10) * 1000003) ^ this.f36808c;
    }

    public final String toString() {
        return "MLKitLoggingOptions{libraryName=" + this.f36806a + ", enableFirelog=" + this.f36807b + ", firelogEventType=" + this.f36808c + "}";
    }
}

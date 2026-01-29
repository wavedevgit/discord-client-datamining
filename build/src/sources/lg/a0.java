package lg;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
final class a0 extends e0 {

    /* renamed from: a  reason: collision with root package name */
    private final String f37280a;

    /* renamed from: b  reason: collision with root package name */
    private final boolean f37281b;

    /* renamed from: c  reason: collision with root package name */
    private final int f37282c;

    /* JADX INFO: Access modifiers changed from: package-private */
    public /* synthetic */ a0(String str, boolean z10, int i10, z zVar) {
        this.f37280a = str;
        this.f37281b = z10;
        this.f37282c = i10;
    }

    @Override // lg.e0
    public final int a() {
        return this.f37282c;
    }

    @Override // lg.e0
    public final String b() {
        return this.f37280a;
    }

    @Override // lg.e0
    public final boolean c() {
        return this.f37281b;
    }

    public final boolean equals(Object obj) {
        if (obj == this) {
            return true;
        }
        if (obj instanceof e0) {
            e0 e0Var = (e0) obj;
            if (this.f37280a.equals(e0Var.b()) && this.f37281b == e0Var.c() && this.f37282c == e0Var.a()) {
                return true;
            }
        }
        return false;
    }

    public final int hashCode() {
        int i10;
        int hashCode = this.f37280a.hashCode() ^ 1000003;
        if (true != this.f37281b) {
            i10 = 1237;
        } else {
            i10 = 1231;
        }
        return (((hashCode * 1000003) ^ i10) * 1000003) ^ this.f37282c;
    }

    public final String toString() {
        return "MLKitLoggingOptions{libraryName=" + this.f37280a + ", enableFirelog=" + this.f37281b + ", firelogEventType=" + this.f37282c + "}";
    }
}

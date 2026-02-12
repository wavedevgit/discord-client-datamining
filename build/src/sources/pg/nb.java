package pg;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
final class nb extends rb {

    /* renamed from: a  reason: collision with root package name */
    private final String f42284a;

    /* renamed from: b  reason: collision with root package name */
    private final boolean f42285b;

    /* renamed from: c  reason: collision with root package name */
    private final int f42286c;

    /* JADX INFO: Access modifiers changed from: package-private */
    public /* synthetic */ nb(String str, boolean z10, int i10, lb lbVar) {
        this.f42284a = str;
        this.f42285b = z10;
        this.f42286c = i10;
    }

    @Override // pg.rb
    public final int a() {
        return this.f42286c;
    }

    @Override // pg.rb
    public final String b() {
        return this.f42284a;
    }

    @Override // pg.rb
    public final boolean c() {
        return this.f42285b;
    }

    public final boolean equals(Object obj) {
        if (obj == this) {
            return true;
        }
        if (obj instanceof rb) {
            rb rbVar = (rb) obj;
            if (this.f42284a.equals(rbVar.b()) && this.f42285b == rbVar.c() && this.f42286c == rbVar.a()) {
                return true;
            }
        }
        return false;
    }

    public final int hashCode() {
        int i10;
        int hashCode = this.f42284a.hashCode() ^ 1000003;
        if (true != this.f42285b) {
            i10 = 1237;
        } else {
            i10 = 1231;
        }
        return (((hashCode * 1000003) ^ i10) * 1000003) ^ this.f42286c;
    }

    public final String toString() {
        String str = this.f42284a;
        boolean z10 = this.f42285b;
        int i10 = this.f42286c;
        return "MLKitLoggingOptions{libraryName=" + str + ", enableFirelog=" + z10 + ", firelogEventType=" + i10 + "}";
    }
}

package pg;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
final class nb extends rb {

    /* renamed from: a  reason: collision with root package name */
    private final String f43825a;

    /* renamed from: b  reason: collision with root package name */
    private final boolean f43826b;

    /* renamed from: c  reason: collision with root package name */
    private final int f43827c;

    /* JADX INFO: Access modifiers changed from: package-private */
    public /* synthetic */ nb(String str, boolean z10, int i10, lb lbVar) {
        this.f43825a = str;
        this.f43826b = z10;
        this.f43827c = i10;
    }

    @Override // pg.rb
    public final int a() {
        return this.f43827c;
    }

    @Override // pg.rb
    public final String b() {
        return this.f43825a;
    }

    @Override // pg.rb
    public final boolean c() {
        return this.f43826b;
    }

    public final boolean equals(Object obj) {
        if (obj == this) {
            return true;
        }
        if (obj instanceof rb) {
            rb rbVar = (rb) obj;
            if (this.f43825a.equals(rbVar.b()) && this.f43826b == rbVar.c() && this.f43827c == rbVar.a()) {
                return true;
            }
        }
        return false;
    }

    public final int hashCode() {
        int i10;
        int hashCode = this.f43825a.hashCode() ^ 1000003;
        if (true != this.f43826b) {
            i10 = 1237;
        } else {
            i10 = 1231;
        }
        return (((hashCode * 1000003) ^ i10) * 1000003) ^ this.f43827c;
    }

    public final String toString() {
        String str = this.f43825a;
        boolean z10 = this.f43826b;
        int i10 = this.f43827c;
        return "MLKitLoggingOptions{libraryName=" + str + ", enableFirelog=" + z10 + ", firelogEventType=" + i10 + "}";
    }
}

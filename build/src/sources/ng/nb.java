package ng;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
final class nb extends rb {

    /* renamed from: a  reason: collision with root package name */
    private final String f41405a;

    /* renamed from: b  reason: collision with root package name */
    private final boolean f41406b;

    /* renamed from: c  reason: collision with root package name */
    private final int f41407c;

    /* JADX INFO: Access modifiers changed from: package-private */
    public /* synthetic */ nb(String str, boolean z10, int i10, lb lbVar) {
        this.f41405a = str;
        this.f41406b = z10;
        this.f41407c = i10;
    }

    @Override // ng.rb
    public final int a() {
        return this.f41407c;
    }

    @Override // ng.rb
    public final String b() {
        return this.f41405a;
    }

    @Override // ng.rb
    public final boolean c() {
        return this.f41406b;
    }

    public final boolean equals(Object obj) {
        if (obj == this) {
            return true;
        }
        if (obj instanceof rb) {
            rb rbVar = (rb) obj;
            if (this.f41405a.equals(rbVar.b()) && this.f41406b == rbVar.c() && this.f41407c == rbVar.a()) {
                return true;
            }
        }
        return false;
    }

    public final int hashCode() {
        int i10;
        int hashCode = this.f41405a.hashCode() ^ 1000003;
        if (true != this.f41406b) {
            i10 = 1237;
        } else {
            i10 = 1231;
        }
        return (((hashCode * 1000003) ^ i10) * 1000003) ^ this.f41407c;
    }

    public final String toString() {
        String str = this.f41405a;
        boolean z10 = this.f41406b;
        int i10 = this.f41407c;
        return "MLKitLoggingOptions{libraryName=" + str + ", enableFirelog=" + z10 + ", firelogEventType=" + i10 + "}";
    }
}

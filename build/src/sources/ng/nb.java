package ng;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
final class nb extends rb {

    /* renamed from: a  reason: collision with root package name */
    private final String f41503a;

    /* renamed from: b  reason: collision with root package name */
    private final boolean f41504b;

    /* renamed from: c  reason: collision with root package name */
    private final int f41505c;

    /* JADX INFO: Access modifiers changed from: package-private */
    public /* synthetic */ nb(String str, boolean z10, int i10, lb lbVar) {
        this.f41503a = str;
        this.f41504b = z10;
        this.f41505c = i10;
    }

    @Override // ng.rb
    public final int a() {
        return this.f41505c;
    }

    @Override // ng.rb
    public final String b() {
        return this.f41503a;
    }

    @Override // ng.rb
    public final boolean c() {
        return this.f41504b;
    }

    public final boolean equals(Object obj) {
        if (obj == this) {
            return true;
        }
        if (obj instanceof rb) {
            rb rbVar = (rb) obj;
            if (this.f41503a.equals(rbVar.b()) && this.f41504b == rbVar.c() && this.f41505c == rbVar.a()) {
                return true;
            }
        }
        return false;
    }

    public final int hashCode() {
        int i10;
        int hashCode = this.f41503a.hashCode() ^ 1000003;
        if (true != this.f41504b) {
            i10 = 1237;
        } else {
            i10 = 1231;
        }
        return (((hashCode * 1000003) ^ i10) * 1000003) ^ this.f41505c;
    }

    public final String toString() {
        String str = this.f41503a;
        boolean z10 = this.f41504b;
        int i10 = this.f41505c;
        return "MLKitLoggingOptions{libraryName=" + str + ", enableFirelog=" + z10 + ", firelogEventType=" + i10 + "}";
    }
}

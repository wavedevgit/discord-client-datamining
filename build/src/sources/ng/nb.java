package ng;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
final class nb extends rb {

    /* renamed from: a  reason: collision with root package name */
    private final String f40865a;

    /* renamed from: b  reason: collision with root package name */
    private final boolean f40866b;

    /* renamed from: c  reason: collision with root package name */
    private final int f40867c;

    /* JADX INFO: Access modifiers changed from: package-private */
    public /* synthetic */ nb(String str, boolean z10, int i10, lb lbVar) {
        this.f40865a = str;
        this.f40866b = z10;
        this.f40867c = i10;
    }

    @Override // ng.rb
    public final int a() {
        return this.f40867c;
    }

    @Override // ng.rb
    public final String b() {
        return this.f40865a;
    }

    @Override // ng.rb
    public final boolean c() {
        return this.f40866b;
    }

    public final boolean equals(Object obj) {
        if (obj == this) {
            return true;
        }
        if (obj instanceof rb) {
            rb rbVar = (rb) obj;
            if (this.f40865a.equals(rbVar.b()) && this.f40866b == rbVar.c() && this.f40867c == rbVar.a()) {
                return true;
            }
        }
        return false;
    }

    public final int hashCode() {
        int i10;
        int hashCode = this.f40865a.hashCode() ^ 1000003;
        if (true != this.f40866b) {
            i10 = 1237;
        } else {
            i10 = 1231;
        }
        return (((hashCode * 1000003) ^ i10) * 1000003) ^ this.f40867c;
    }

    public final String toString() {
        String str = this.f40865a;
        boolean z10 = this.f40866b;
        int i10 = this.f40867c;
        return "MLKitLoggingOptions{libraryName=" + str + ", enableFirelog=" + z10 + ", firelogEventType=" + i10 + "}";
    }
}

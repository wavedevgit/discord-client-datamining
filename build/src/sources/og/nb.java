package og;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
final class nb extends rb {

    /* renamed from: a  reason: collision with root package name */
    private final String f42365a;

    /* renamed from: b  reason: collision with root package name */
    private final boolean f42366b;

    /* renamed from: c  reason: collision with root package name */
    private final int f42367c;

    /* JADX INFO: Access modifiers changed from: package-private */
    public /* synthetic */ nb(String str, boolean z10, int i10, lb lbVar) {
        this.f42365a = str;
        this.f42366b = z10;
        this.f42367c = i10;
    }

    @Override // og.rb
    public final int a() {
        return this.f42367c;
    }

    @Override // og.rb
    public final String b() {
        return this.f42365a;
    }

    @Override // og.rb
    public final boolean c() {
        return this.f42366b;
    }

    public final boolean equals(Object obj) {
        if (obj == this) {
            return true;
        }
        if (obj instanceof rb) {
            rb rbVar = (rb) obj;
            if (this.f42365a.equals(rbVar.b()) && this.f42366b == rbVar.c() && this.f42367c == rbVar.a()) {
                return true;
            }
        }
        return false;
    }

    public final int hashCode() {
        int i10;
        int hashCode = this.f42365a.hashCode() ^ 1000003;
        if (true != this.f42366b) {
            i10 = 1237;
        } else {
            i10 = 1231;
        }
        return (((hashCode * 1000003) ^ i10) * 1000003) ^ this.f42367c;
    }

    public final String toString() {
        String str = this.f42365a;
        boolean z10 = this.f42366b;
        int i10 = this.f42367c;
        return "MLKitLoggingOptions{libraryName=" + str + ", enableFirelog=" + z10 + ", firelogEventType=" + i10 + "}";
    }
}

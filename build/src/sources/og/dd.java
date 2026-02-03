package og;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
final class dd extends gd {

    /* renamed from: a  reason: collision with root package name */
    private final String f43089a;

    /* renamed from: b  reason: collision with root package name */
    private final boolean f43090b;

    /* renamed from: c  reason: collision with root package name */
    private final int f43091c;

    /* JADX INFO: Access modifiers changed from: package-private */
    public /* synthetic */ dd(String str, boolean z10, int i10, cd cdVar) {
        this.f43089a = str;
        this.f43090b = z10;
        this.f43091c = i10;
    }

    @Override // og.gd
    public final int a() {
        return this.f43091c;
    }

    @Override // og.gd
    public final String b() {
        return this.f43089a;
    }

    @Override // og.gd
    public final boolean c() {
        return this.f43090b;
    }

    public final boolean equals(Object obj) {
        if (obj == this) {
            return true;
        }
        if (obj instanceof gd) {
            gd gdVar = (gd) obj;
            if (this.f43089a.equals(gdVar.b()) && this.f43090b == gdVar.c() && this.f43091c == gdVar.a()) {
                return true;
            }
        }
        return false;
    }

    public final int hashCode() {
        int i10;
        int hashCode = (this.f43089a.hashCode() ^ 1000003) * 1000003;
        if (true != this.f43090b) {
            i10 = 1237;
        } else {
            i10 = 1231;
        }
        return ((hashCode ^ i10) * 1000003) ^ this.f43091c;
    }

    public final String toString() {
        String str = this.f43089a;
        boolean z10 = this.f43090b;
        int i10 = this.f43091c;
        return "MLKitLoggingOptions{libraryName=" + str + ", enableFirelog=" + z10 + ", firelogEventType=" + i10 + "}";
    }
}

package og;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
final class dd extends gd {

    /* renamed from: a  reason: collision with root package name */
    private final String f42889a;

    /* renamed from: b  reason: collision with root package name */
    private final boolean f42890b;

    /* renamed from: c  reason: collision with root package name */
    private final int f42891c;

    /* JADX INFO: Access modifiers changed from: package-private */
    public /* synthetic */ dd(String str, boolean z10, int i10, cd cdVar) {
        this.f42889a = str;
        this.f42890b = z10;
        this.f42891c = i10;
    }

    @Override // og.gd
    public final int a() {
        return this.f42891c;
    }

    @Override // og.gd
    public final String b() {
        return this.f42889a;
    }

    @Override // og.gd
    public final boolean c() {
        return this.f42890b;
    }

    public final boolean equals(Object obj) {
        if (obj == this) {
            return true;
        }
        if (obj instanceof gd) {
            gd gdVar = (gd) obj;
            if (this.f42889a.equals(gdVar.b()) && this.f42890b == gdVar.c() && this.f42891c == gdVar.a()) {
                return true;
            }
        }
        return false;
    }

    public final int hashCode() {
        int i10;
        int hashCode = (this.f42889a.hashCode() ^ 1000003) * 1000003;
        if (true != this.f42890b) {
            i10 = 1237;
        } else {
            i10 = 1231;
        }
        return ((hashCode ^ i10) * 1000003) ^ this.f42891c;
    }

    public final String toString() {
        String str = this.f42889a;
        boolean z10 = this.f42890b;
        int i10 = this.f42891c;
        return "MLKitLoggingOptions{libraryName=" + str + ", enableFirelog=" + z10 + ", firelogEventType=" + i10 + "}";
    }
}

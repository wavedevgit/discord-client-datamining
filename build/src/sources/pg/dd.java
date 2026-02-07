package pg;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
final class dd extends gd {

    /* renamed from: a  reason: collision with root package name */
    private final String f44185a;

    /* renamed from: b  reason: collision with root package name */
    private final boolean f44186b;

    /* renamed from: c  reason: collision with root package name */
    private final int f44187c;

    /* JADX INFO: Access modifiers changed from: package-private */
    public /* synthetic */ dd(String str, boolean z10, int i10, cd cdVar) {
        this.f44185a = str;
        this.f44186b = z10;
        this.f44187c = i10;
    }

    @Override // pg.gd
    public final int a() {
        return this.f44187c;
    }

    @Override // pg.gd
    public final String b() {
        return this.f44185a;
    }

    @Override // pg.gd
    public final boolean c() {
        return this.f44186b;
    }

    public final boolean equals(Object obj) {
        if (obj == this) {
            return true;
        }
        if (obj instanceof gd) {
            gd gdVar = (gd) obj;
            if (this.f44185a.equals(gdVar.b()) && this.f44186b == gdVar.c() && this.f44187c == gdVar.a()) {
                return true;
            }
        }
        return false;
    }

    public final int hashCode() {
        int i10;
        int hashCode = (this.f44185a.hashCode() ^ 1000003) * 1000003;
        if (true != this.f44186b) {
            i10 = 1237;
        } else {
            i10 = 1231;
        }
        return ((hashCode ^ i10) * 1000003) ^ this.f44187c;
    }

    public final String toString() {
        String str = this.f44185a;
        boolean z10 = this.f44186b;
        int i10 = this.f44187c;
        return "MLKitLoggingOptions{libraryName=" + str + ", enableFirelog=" + z10 + ", firelogEventType=" + i10 + "}";
    }
}

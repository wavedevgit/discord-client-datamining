package mg;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
final class bk extends fk {

    /* renamed from: a  reason: collision with root package name */
    private final String f37904a;

    /* renamed from: b  reason: collision with root package name */
    private final boolean f37905b;

    /* renamed from: c  reason: collision with root package name */
    private final int f37906c;

    /* JADX INFO: Access modifiers changed from: package-private */
    public /* synthetic */ bk(String str, boolean z10, int i10, ak akVar) {
        this.f37904a = str;
        this.f37905b = z10;
        this.f37906c = i10;
    }

    @Override // mg.fk
    public final int a() {
        return this.f37906c;
    }

    @Override // mg.fk
    public final String b() {
        return this.f37904a;
    }

    @Override // mg.fk
    public final boolean c() {
        return this.f37905b;
    }

    public final boolean equals(Object obj) {
        if (obj == this) {
            return true;
        }
        if (obj instanceof fk) {
            fk fkVar = (fk) obj;
            if (this.f37904a.equals(fkVar.b()) && this.f37905b == fkVar.c() && this.f37906c == fkVar.a()) {
                return true;
            }
        }
        return false;
    }

    public final int hashCode() {
        int i10;
        int hashCode = this.f37904a.hashCode() ^ 1000003;
        if (true != this.f37905b) {
            i10 = 1237;
        } else {
            i10 = 1231;
        }
        return (((hashCode * 1000003) ^ i10) * 1000003) ^ this.f37906c;
    }

    public final String toString() {
        return "MLKitLoggingOptions{libraryName=" + this.f37904a + ", enableFirelog=" + this.f37905b + ", firelogEventType=" + this.f37906c + "}";
    }
}

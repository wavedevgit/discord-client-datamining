package og;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
final class bk extends fk {

    /* renamed from: a  reason: collision with root package name */
    private final String f39129a;

    /* renamed from: b  reason: collision with root package name */
    private final boolean f39130b;

    /* renamed from: c  reason: collision with root package name */
    private final int f39131c;

    /* JADX INFO: Access modifiers changed from: package-private */
    public /* synthetic */ bk(String str, boolean z10, int i10, ak akVar) {
        this.f39129a = str;
        this.f39130b = z10;
        this.f39131c = i10;
    }

    @Override // og.fk
    public final int a() {
        return this.f39131c;
    }

    @Override // og.fk
    public final String b() {
        return this.f39129a;
    }

    @Override // og.fk
    public final boolean c() {
        return this.f39130b;
    }

    public final boolean equals(Object obj) {
        if (obj == this) {
            return true;
        }
        if (obj instanceof fk) {
            fk fkVar = (fk) obj;
            if (this.f39129a.equals(fkVar.b()) && this.f39130b == fkVar.c() && this.f39131c == fkVar.a()) {
                return true;
            }
        }
        return false;
    }

    public final int hashCode() {
        int i10;
        int hashCode = this.f39129a.hashCode() ^ 1000003;
        if (true != this.f39130b) {
            i10 = 1237;
        } else {
            i10 = 1231;
        }
        return (((hashCode * 1000003) ^ i10) * 1000003) ^ this.f39131c;
    }

    public final String toString() {
        return "MLKitLoggingOptions{libraryName=" + this.f39129a + ", enableFirelog=" + this.f39130b + ", firelogEventType=" + this.f39131c + "}";
    }
}

package og;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
final class bk extends fk {

    /* renamed from: a  reason: collision with root package name */
    private final String f39128a;

    /* renamed from: b  reason: collision with root package name */
    private final boolean f39129b;

    /* renamed from: c  reason: collision with root package name */
    private final int f39130c;

    /* JADX INFO: Access modifiers changed from: package-private */
    public /* synthetic */ bk(String str, boolean z10, int i10, ak akVar) {
        this.f39128a = str;
        this.f39129b = z10;
        this.f39130c = i10;
    }

    @Override // og.fk
    public final int a() {
        return this.f39130c;
    }

    @Override // og.fk
    public final String b() {
        return this.f39128a;
    }

    @Override // og.fk
    public final boolean c() {
        return this.f39129b;
    }

    public final boolean equals(Object obj) {
        if (obj == this) {
            return true;
        }
        if (obj instanceof fk) {
            fk fkVar = (fk) obj;
            if (this.f39128a.equals(fkVar.b()) && this.f39129b == fkVar.c() && this.f39130c == fkVar.a()) {
                return true;
            }
        }
        return false;
    }

    public final int hashCode() {
        int i10;
        int hashCode = this.f39128a.hashCode() ^ 1000003;
        if (true != this.f39129b) {
            i10 = 1237;
        } else {
            i10 = 1231;
        }
        return (((hashCode * 1000003) ^ i10) * 1000003) ^ this.f39130c;
    }

    public final String toString() {
        return "MLKitLoggingOptions{libraryName=" + this.f39128a + ", enableFirelog=" + this.f39129b + ", firelogEventType=" + this.f39130c + "}";
    }
}

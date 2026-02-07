package ng;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
final class bk extends fk {

    /* renamed from: a  reason: collision with root package name */
    private final String f39777a;

    /* renamed from: b  reason: collision with root package name */
    private final boolean f39778b;

    /* renamed from: c  reason: collision with root package name */
    private final int f39779c;

    /* JADX INFO: Access modifiers changed from: package-private */
    public /* synthetic */ bk(String str, boolean z10, int i10, ak akVar) {
        this.f39777a = str;
        this.f39778b = z10;
        this.f39779c = i10;
    }

    @Override // ng.fk
    public final int a() {
        return this.f39779c;
    }

    @Override // ng.fk
    public final String b() {
        return this.f39777a;
    }

    @Override // ng.fk
    public final boolean c() {
        return this.f39778b;
    }

    public final boolean equals(Object obj) {
        if (obj == this) {
            return true;
        }
        if (obj instanceof fk) {
            fk fkVar = (fk) obj;
            if (this.f39777a.equals(fkVar.b()) && this.f39778b == fkVar.c() && this.f39779c == fkVar.a()) {
                return true;
            }
        }
        return false;
    }

    public final int hashCode() {
        int i10;
        int hashCode = this.f39777a.hashCode() ^ 1000003;
        if (true != this.f39778b) {
            i10 = 1237;
        } else {
            i10 = 1231;
        }
        return (((hashCode * 1000003) ^ i10) * 1000003) ^ this.f39779c;
    }

    public final String toString() {
        return "MLKitLoggingOptions{libraryName=" + this.f39777a + ", enableFirelog=" + this.f39778b + ", firelogEventType=" + this.f39779c + "}";
    }
}

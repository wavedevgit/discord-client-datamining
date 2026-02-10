package og;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
final class bk extends fk {

    /* renamed from: a  reason: collision with root package name */
    private final String f40802a;

    /* renamed from: b  reason: collision with root package name */
    private final boolean f40803b;

    /* renamed from: c  reason: collision with root package name */
    private final int f40804c;

    /* JADX INFO: Access modifiers changed from: package-private */
    public /* synthetic */ bk(String str, boolean z10, int i10, ak akVar) {
        this.f40802a = str;
        this.f40803b = z10;
        this.f40804c = i10;
    }

    @Override // og.fk
    public final int a() {
        return this.f40804c;
    }

    @Override // og.fk
    public final String b() {
        return this.f40802a;
    }

    @Override // og.fk
    public final boolean c() {
        return this.f40803b;
    }

    public final boolean equals(Object obj) {
        if (obj == this) {
            return true;
        }
        if (obj instanceof fk) {
            fk fkVar = (fk) obj;
            if (this.f40802a.equals(fkVar.b()) && this.f40803b == fkVar.c() && this.f40804c == fkVar.a()) {
                return true;
            }
        }
        return false;
    }

    public final int hashCode() {
        int i10;
        int hashCode = this.f40802a.hashCode() ^ 1000003;
        if (true != this.f40803b) {
            i10 = 1237;
        } else {
            i10 = 1231;
        }
        return (((hashCode * 1000003) ^ i10) * 1000003) ^ this.f40804c;
    }

    public final String toString() {
        return "MLKitLoggingOptions{libraryName=" + this.f40802a + ", enableFirelog=" + this.f40803b + ", firelogEventType=" + this.f40804c + "}";
    }
}

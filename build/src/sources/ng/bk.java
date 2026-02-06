package ng;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
final class bk extends fk {

    /* renamed from: a  reason: collision with root package name */
    private final String f39729a;

    /* renamed from: b  reason: collision with root package name */
    private final boolean f39730b;

    /* renamed from: c  reason: collision with root package name */
    private final int f39731c;

    /* JADX INFO: Access modifiers changed from: package-private */
    public /* synthetic */ bk(String str, boolean z10, int i10, ak akVar) {
        this.f39729a = str;
        this.f39730b = z10;
        this.f39731c = i10;
    }

    @Override // ng.fk
    public final int a() {
        return this.f39731c;
    }

    @Override // ng.fk
    public final String b() {
        return this.f39729a;
    }

    @Override // ng.fk
    public final boolean c() {
        return this.f39730b;
    }

    public final boolean equals(Object obj) {
        if (obj == this) {
            return true;
        }
        if (obj instanceof fk) {
            fk fkVar = (fk) obj;
            if (this.f39729a.equals(fkVar.b()) && this.f39730b == fkVar.c() && this.f39731c == fkVar.a()) {
                return true;
            }
        }
        return false;
    }

    public final int hashCode() {
        int i10;
        int hashCode = this.f39729a.hashCode() ^ 1000003;
        if (true != this.f39730b) {
            i10 = 1237;
        } else {
            i10 = 1231;
        }
        return (((hashCode * 1000003) ^ i10) * 1000003) ^ this.f39731c;
    }

    public final String toString() {
        return "MLKitLoggingOptions{libraryName=" + this.f39729a + ", enableFirelog=" + this.f39730b + ", firelogEventType=" + this.f39731c + "}";
    }
}

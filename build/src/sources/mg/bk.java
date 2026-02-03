package mg;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
final class bk extends fk {

    /* renamed from: a  reason: collision with root package name */
    private final String f38107a;

    /* renamed from: b  reason: collision with root package name */
    private final boolean f38108b;

    /* renamed from: c  reason: collision with root package name */
    private final int f38109c;

    /* JADX INFO: Access modifiers changed from: package-private */
    public /* synthetic */ bk(String str, boolean z10, int i10, ak akVar) {
        this.f38107a = str;
        this.f38108b = z10;
        this.f38109c = i10;
    }

    @Override // mg.fk
    public final int a() {
        return this.f38109c;
    }

    @Override // mg.fk
    public final String b() {
        return this.f38107a;
    }

    @Override // mg.fk
    public final boolean c() {
        return this.f38108b;
    }

    public final boolean equals(Object obj) {
        if (obj == this) {
            return true;
        }
        if (obj instanceof fk) {
            fk fkVar = (fk) obj;
            if (this.f38107a.equals(fkVar.b()) && this.f38108b == fkVar.c() && this.f38109c == fkVar.a()) {
                return true;
            }
        }
        return false;
    }

    public final int hashCode() {
        int i10;
        int hashCode = this.f38107a.hashCode() ^ 1000003;
        if (true != this.f38108b) {
            i10 = 1237;
        } else {
            i10 = 1231;
        }
        return (((hashCode * 1000003) ^ i10) * 1000003) ^ this.f38109c;
    }

    public final String toString() {
        return "MLKitLoggingOptions{libraryName=" + this.f38107a + ", enableFirelog=" + this.f38108b + ", firelogEventType=" + this.f38109c + "}";
    }
}

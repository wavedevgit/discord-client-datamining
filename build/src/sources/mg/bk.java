package mg;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
final class bk extends fk {

    /* renamed from: a  reason: collision with root package name */
    private final String f38127a;

    /* renamed from: b  reason: collision with root package name */
    private final boolean f38128b;

    /* renamed from: c  reason: collision with root package name */
    private final int f38129c;

    /* JADX INFO: Access modifiers changed from: package-private */
    public /* synthetic */ bk(String str, boolean z10, int i10, ak akVar) {
        this.f38127a = str;
        this.f38128b = z10;
        this.f38129c = i10;
    }

    @Override // mg.fk
    public final int a() {
        return this.f38129c;
    }

    @Override // mg.fk
    public final String b() {
        return this.f38127a;
    }

    @Override // mg.fk
    public final boolean c() {
        return this.f38128b;
    }

    public final boolean equals(Object obj) {
        if (obj == this) {
            return true;
        }
        if (obj instanceof fk) {
            fk fkVar = (fk) obj;
            if (this.f38127a.equals(fkVar.b()) && this.f38128b == fkVar.c() && this.f38129c == fkVar.a()) {
                return true;
            }
        }
        return false;
    }

    public final int hashCode() {
        int i10;
        int hashCode = this.f38127a.hashCode() ^ 1000003;
        if (true != this.f38128b) {
            i10 = 1237;
        } else {
            i10 = 1231;
        }
        return (((hashCode * 1000003) ^ i10) * 1000003) ^ this.f38129c;
    }

    public final String toString() {
        return "MLKitLoggingOptions{libraryName=" + this.f38127a + ", enableFirelog=" + this.f38128b + ", firelogEventType=" + this.f38129c + "}";
    }
}

package mg;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
final class bk extends fk {

    /* renamed from: a  reason: collision with root package name */
    private final String f38111a;

    /* renamed from: b  reason: collision with root package name */
    private final boolean f38112b;

    /* renamed from: c  reason: collision with root package name */
    private final int f38113c;

    /* JADX INFO: Access modifiers changed from: package-private */
    public /* synthetic */ bk(String str, boolean z10, int i10, ak akVar) {
        this.f38111a = str;
        this.f38112b = z10;
        this.f38113c = i10;
    }

    @Override // mg.fk
    public final int a() {
        return this.f38113c;
    }

    @Override // mg.fk
    public final String b() {
        return this.f38111a;
    }

    @Override // mg.fk
    public final boolean c() {
        return this.f38112b;
    }

    public final boolean equals(Object obj) {
        if (obj == this) {
            return true;
        }
        if (obj instanceof fk) {
            fk fkVar = (fk) obj;
            if (this.f38111a.equals(fkVar.b()) && this.f38112b == fkVar.c() && this.f38113c == fkVar.a()) {
                return true;
            }
        }
        return false;
    }

    public final int hashCode() {
        int i10;
        int hashCode = this.f38111a.hashCode() ^ 1000003;
        if (true != this.f38112b) {
            i10 = 1237;
        } else {
            i10 = 1231;
        }
        return (((hashCode * 1000003) ^ i10) * 1000003) ^ this.f38113c;
    }

    public final String toString() {
        return "MLKitLoggingOptions{libraryName=" + this.f38111a + ", enableFirelog=" + this.f38112b + ", firelogEventType=" + this.f38113c + "}";
    }
}

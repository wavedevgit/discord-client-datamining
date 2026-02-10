package qg;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
final class dd extends gd {

    /* renamed from: a  reason: collision with root package name */
    private final String f44367a;

    /* renamed from: b  reason: collision with root package name */
    private final boolean f44368b;

    /* renamed from: c  reason: collision with root package name */
    private final int f44369c;

    /* JADX INFO: Access modifiers changed from: package-private */
    public /* synthetic */ dd(String str, boolean z10, int i10, cd cdVar) {
        this.f44367a = str;
        this.f44368b = z10;
        this.f44369c = i10;
    }

    @Override // qg.gd
    public final int a() {
        return this.f44369c;
    }

    @Override // qg.gd
    public final String b() {
        return this.f44367a;
    }

    @Override // qg.gd
    public final boolean c() {
        return this.f44368b;
    }

    public final boolean equals(Object obj) {
        if (obj == this) {
            return true;
        }
        if (obj instanceof gd) {
            gd gdVar = (gd) obj;
            if (this.f44367a.equals(gdVar.b()) && this.f44368b == gdVar.c() && this.f44369c == gdVar.a()) {
                return true;
            }
        }
        return false;
    }

    public final int hashCode() {
        int i10;
        int hashCode = (this.f44367a.hashCode() ^ 1000003) * 1000003;
        if (true != this.f44368b) {
            i10 = 1237;
        } else {
            i10 = 1231;
        }
        return ((hashCode ^ i10) * 1000003) ^ this.f44369c;
    }

    public final String toString() {
        String str = this.f44367a;
        boolean z10 = this.f44368b;
        int i10 = this.f44369c;
        return "MLKitLoggingOptions{libraryName=" + str + ", enableFirelog=" + z10 + ", firelogEventType=" + i10 + "}";
    }
}

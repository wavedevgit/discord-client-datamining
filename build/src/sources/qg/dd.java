package qg;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
final class dd extends gd {

    /* renamed from: a  reason: collision with root package name */
    private final String f45699a;

    /* renamed from: b  reason: collision with root package name */
    private final boolean f45700b;

    /* renamed from: c  reason: collision with root package name */
    private final int f45701c;

    /* JADX INFO: Access modifiers changed from: package-private */
    public /* synthetic */ dd(String str, boolean z10, int i10, cd cdVar) {
        this.f45699a = str;
        this.f45700b = z10;
        this.f45701c = i10;
    }

    @Override // qg.gd
    public final int a() {
        return this.f45701c;
    }

    @Override // qg.gd
    public final String b() {
        return this.f45699a;
    }

    @Override // qg.gd
    public final boolean c() {
        return this.f45700b;
    }

    public final boolean equals(Object obj) {
        if (obj == this) {
            return true;
        }
        if (obj instanceof gd) {
            gd gdVar = (gd) obj;
            if (this.f45699a.equals(gdVar.b()) && this.f45700b == gdVar.c() && this.f45701c == gdVar.a()) {
                return true;
            }
        }
        return false;
    }

    public final int hashCode() {
        int i10;
        int hashCode = (this.f45699a.hashCode() ^ 1000003) * 1000003;
        if (true != this.f45700b) {
            i10 = 1237;
        } else {
            i10 = 1231;
        }
        return ((hashCode ^ i10) * 1000003) ^ this.f45701c;
    }

    public final String toString() {
        String str = this.f45699a;
        boolean z10 = this.f45700b;
        int i10 = this.f45701c;
        return "MLKitLoggingOptions{libraryName=" + str + ", enableFirelog=" + z10 + ", firelogEventType=" + i10 + "}";
    }
}

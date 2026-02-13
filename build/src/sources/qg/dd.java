package qg;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
final class dd extends gd {

    /* renamed from: a  reason: collision with root package name */
    private final String f44936a;

    /* renamed from: b  reason: collision with root package name */
    private final boolean f44937b;

    /* renamed from: c  reason: collision with root package name */
    private final int f44938c;

    /* JADX INFO: Access modifiers changed from: package-private */
    public /* synthetic */ dd(String str, boolean z10, int i10, cd cdVar) {
        this.f44936a = str;
        this.f44937b = z10;
        this.f44938c = i10;
    }

    @Override // qg.gd
    public final int a() {
        return this.f44938c;
    }

    @Override // qg.gd
    public final String b() {
        return this.f44936a;
    }

    @Override // qg.gd
    public final boolean c() {
        return this.f44937b;
    }

    public final boolean equals(Object obj) {
        if (obj == this) {
            return true;
        }
        if (obj instanceof gd) {
            gd gdVar = (gd) obj;
            if (this.f44936a.equals(gdVar.b()) && this.f44937b == gdVar.c() && this.f44938c == gdVar.a()) {
                return true;
            }
        }
        return false;
    }

    public final int hashCode() {
        int i10;
        int hashCode = (this.f44936a.hashCode() ^ 1000003) * 1000003;
        if (true != this.f44937b) {
            i10 = 1237;
        } else {
            i10 = 1231;
        }
        return ((hashCode ^ i10) * 1000003) ^ this.f44938c;
    }

    public final String toString() {
        String str = this.f44936a;
        boolean z10 = this.f44937b;
        int i10 = this.f44938c;
        return "MLKitLoggingOptions{libraryName=" + str + ", enableFirelog=" + z10 + ", firelogEventType=" + i10 + "}";
    }
}

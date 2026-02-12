package rg;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
final class kj extends oj {

    /* renamed from: a  reason: collision with root package name */
    private final String f46965a;

    /* renamed from: b  reason: collision with root package name */
    private final boolean f46966b;

    /* renamed from: c  reason: collision with root package name */
    private final int f46967c;

    /* JADX INFO: Access modifiers changed from: package-private */
    public /* synthetic */ kj(String str, boolean z10, int i10, jj jjVar) {
        this.f46965a = str;
        this.f46966b = z10;
        this.f46967c = i10;
    }

    @Override // rg.oj
    public final int a() {
        return this.f46967c;
    }

    @Override // rg.oj
    public final String b() {
        return this.f46965a;
    }

    @Override // rg.oj
    public final boolean c() {
        return this.f46966b;
    }

    public final boolean equals(Object obj) {
        if (obj == this) {
            return true;
        }
        if (obj instanceof oj) {
            oj ojVar = (oj) obj;
            if (this.f46965a.equals(ojVar.b()) && this.f46966b == ojVar.c() && this.f46967c == ojVar.a()) {
                return true;
            }
        }
        return false;
    }

    public final int hashCode() {
        int i10;
        int hashCode = this.f46965a.hashCode() ^ 1000003;
        if (true != this.f46966b) {
            i10 = 1237;
        } else {
            i10 = 1231;
        }
        return (((hashCode * 1000003) ^ i10) * 1000003) ^ this.f46967c;
    }

    public final String toString() {
        return "MLKitLoggingOptions{libraryName=" + this.f46965a + ", enableFirelog=" + this.f46966b + ", firelogEventType=" + this.f46967c + "}";
    }
}

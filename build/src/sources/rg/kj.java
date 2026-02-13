package rg;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
final class kj extends oj {

    /* renamed from: a  reason: collision with root package name */
    private final String f47533a;

    /* renamed from: b  reason: collision with root package name */
    private final boolean f47534b;

    /* renamed from: c  reason: collision with root package name */
    private final int f47535c;

    /* JADX INFO: Access modifiers changed from: package-private */
    public /* synthetic */ kj(String str, boolean z10, int i10, jj jjVar) {
        this.f47533a = str;
        this.f47534b = z10;
        this.f47535c = i10;
    }

    @Override // rg.oj
    public final int a() {
        return this.f47535c;
    }

    @Override // rg.oj
    public final String b() {
        return this.f47533a;
    }

    @Override // rg.oj
    public final boolean c() {
        return this.f47534b;
    }

    public final boolean equals(Object obj) {
        if (obj == this) {
            return true;
        }
        if (obj instanceof oj) {
            oj ojVar = (oj) obj;
            if (this.f47533a.equals(ojVar.b()) && this.f47534b == ojVar.c() && this.f47535c == ojVar.a()) {
                return true;
            }
        }
        return false;
    }

    public final int hashCode() {
        int i10;
        int hashCode = this.f47533a.hashCode() ^ 1000003;
        if (true != this.f47534b) {
            i10 = 1237;
        } else {
            i10 = 1231;
        }
        return (((hashCode * 1000003) ^ i10) * 1000003) ^ this.f47535c;
    }

    public final String toString() {
        return "MLKitLoggingOptions{libraryName=" + this.f47533a + ", enableFirelog=" + this.f47534b + ", firelogEventType=" + this.f47535c + "}";
    }
}

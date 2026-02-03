package pg;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
final class kj extends oj {

    /* renamed from: a  reason: collision with root package name */
    private final String f45626a;

    /* renamed from: b  reason: collision with root package name */
    private final boolean f45627b;

    /* renamed from: c  reason: collision with root package name */
    private final int f45628c;

    /* JADX INFO: Access modifiers changed from: package-private */
    public /* synthetic */ kj(String str, boolean z10, int i10, jj jjVar) {
        this.f45626a = str;
        this.f45627b = z10;
        this.f45628c = i10;
    }

    @Override // pg.oj
    public final int a() {
        return this.f45628c;
    }

    @Override // pg.oj
    public final String b() {
        return this.f45626a;
    }

    @Override // pg.oj
    public final boolean c() {
        return this.f45627b;
    }

    public final boolean equals(Object obj) {
        if (obj == this) {
            return true;
        }
        if (obj instanceof oj) {
            oj ojVar = (oj) obj;
            if (this.f45626a.equals(ojVar.b()) && this.f45627b == ojVar.c() && this.f45628c == ojVar.a()) {
                return true;
            }
        }
        return false;
    }

    public final int hashCode() {
        int i10;
        int hashCode = this.f45626a.hashCode() ^ 1000003;
        if (true != this.f45627b) {
            i10 = 1237;
        } else {
            i10 = 1231;
        }
        return (((hashCode * 1000003) ^ i10) * 1000003) ^ this.f45628c;
    }

    public final String toString() {
        return "MLKitLoggingOptions{libraryName=" + this.f45626a + ", enableFirelog=" + this.f45627b + ", firelogEventType=" + this.f45628c + "}";
    }
}

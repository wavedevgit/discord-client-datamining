package pg;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
final class kj extends oj {

    /* renamed from: a  reason: collision with root package name */
    private final String f45536a;

    /* renamed from: b  reason: collision with root package name */
    private final boolean f45537b;

    /* renamed from: c  reason: collision with root package name */
    private final int f45538c;

    /* JADX INFO: Access modifiers changed from: package-private */
    public /* synthetic */ kj(String str, boolean z10, int i10, jj jjVar) {
        this.f45536a = str;
        this.f45537b = z10;
        this.f45538c = i10;
    }

    @Override // pg.oj
    public final int a() {
        return this.f45538c;
    }

    @Override // pg.oj
    public final String b() {
        return this.f45536a;
    }

    @Override // pg.oj
    public final boolean c() {
        return this.f45537b;
    }

    public final boolean equals(Object obj) {
        if (obj == this) {
            return true;
        }
        if (obj instanceof oj) {
            oj ojVar = (oj) obj;
            if (this.f45536a.equals(ojVar.b()) && this.f45537b == ojVar.c() && this.f45538c == ojVar.a()) {
                return true;
            }
        }
        return false;
    }

    public final int hashCode() {
        int i10;
        int hashCode = this.f45536a.hashCode() ^ 1000003;
        if (true != this.f45537b) {
            i10 = 1237;
        } else {
            i10 = 1231;
        }
        return (((hashCode * 1000003) ^ i10) * 1000003) ^ this.f45538c;
    }

    public final String toString() {
        return "MLKitLoggingOptions{libraryName=" + this.f45536a + ", enableFirelog=" + this.f45537b + ", firelogEventType=" + this.f45538c + "}";
    }
}

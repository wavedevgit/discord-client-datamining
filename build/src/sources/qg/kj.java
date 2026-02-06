package qg;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
final class kj extends oj {

    /* renamed from: a  reason: collision with root package name */
    private final String f47344a;

    /* renamed from: b  reason: collision with root package name */
    private final boolean f47345b;

    /* renamed from: c  reason: collision with root package name */
    private final int f47346c;

    /* JADX INFO: Access modifiers changed from: package-private */
    public /* synthetic */ kj(String str, boolean z10, int i10, jj jjVar) {
        this.f47344a = str;
        this.f47345b = z10;
        this.f47346c = i10;
    }

    @Override // qg.oj
    public final int a() {
        return this.f47346c;
    }

    @Override // qg.oj
    public final String b() {
        return this.f47344a;
    }

    @Override // qg.oj
    public final boolean c() {
        return this.f47345b;
    }

    public final boolean equals(Object obj) {
        if (obj == this) {
            return true;
        }
        if (obj instanceof oj) {
            oj ojVar = (oj) obj;
            if (this.f47344a.equals(ojVar.b()) && this.f47345b == ojVar.c() && this.f47346c == ojVar.a()) {
                return true;
            }
        }
        return false;
    }

    public final int hashCode() {
        int i10;
        int hashCode = this.f47344a.hashCode() ^ 1000003;
        if (true != this.f47345b) {
            i10 = 1237;
        } else {
            i10 = 1231;
        }
        return (((hashCode * 1000003) ^ i10) * 1000003) ^ this.f47346c;
    }

    public final String toString() {
        return "MLKitLoggingOptions{libraryName=" + this.f47344a + ", enableFirelog=" + this.f47345b + ", firelogEventType=" + this.f47346c + "}";
    }
}

package rg;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
final class kj extends oj {

    /* renamed from: a  reason: collision with root package name */
    private final String f48510a;

    /* renamed from: b  reason: collision with root package name */
    private final boolean f48511b;

    /* renamed from: c  reason: collision with root package name */
    private final int f48512c;

    /* JADX INFO: Access modifiers changed from: package-private */
    public /* synthetic */ kj(String str, boolean z10, int i10, jj jjVar) {
        this.f48510a = str;
        this.f48511b = z10;
        this.f48512c = i10;
    }

    @Override // rg.oj
    public final int a() {
        return this.f48512c;
    }

    @Override // rg.oj
    public final String b() {
        return this.f48510a;
    }

    @Override // rg.oj
    public final boolean c() {
        return this.f48511b;
    }

    public final boolean equals(Object obj) {
        if (obj == this) {
            return true;
        }
        if (obj instanceof oj) {
            oj ojVar = (oj) obj;
            if (this.f48510a.equals(ojVar.b()) && this.f48511b == ojVar.c() && this.f48512c == ojVar.a()) {
                return true;
            }
        }
        return false;
    }

    public final int hashCode() {
        int i10;
        int hashCode = this.f48510a.hashCode() ^ 1000003;
        if (true != this.f48511b) {
            i10 = 1237;
        } else {
            i10 = 1231;
        }
        return (((hashCode * 1000003) ^ i10) * 1000003) ^ this.f48512c;
    }

    public final String toString() {
        return "MLKitLoggingOptions{libraryName=" + this.f48510a + ", enableFirelog=" + this.f48511b + ", firelogEventType=" + this.f48512c + "}";
    }
}

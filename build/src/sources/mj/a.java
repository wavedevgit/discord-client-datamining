package mj;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
final class a extends f {

    /* renamed from: a  reason: collision with root package name */
    private final String f38702a;

    /* renamed from: b  reason: collision with root package name */
    private final String f38703b;

    /* JADX INFO: Access modifiers changed from: package-private */
    public a(String str, String str2) {
        if (str != null) {
            this.f38702a = str;
            if (str2 != null) {
                this.f38703b = str2;
                return;
            }
            throw new NullPointerException("Null version");
        }
        throw new NullPointerException("Null libraryName");
    }

    @Override // mj.f
    public String b() {
        return this.f38702a;
    }

    @Override // mj.f
    public String c() {
        return this.f38703b;
    }

    public boolean equals(Object obj) {
        if (obj == this) {
            return true;
        }
        if (obj instanceof f) {
            f fVar = (f) obj;
            if (this.f38702a.equals(fVar.b()) && this.f38703b.equals(fVar.c())) {
                return true;
            }
        }
        return false;
    }

    public int hashCode() {
        return ((this.f38702a.hashCode() ^ 1000003) * 1000003) ^ this.f38703b.hashCode();
    }

    public String toString() {
        return "LibraryVersion{libraryName=" + this.f38702a + ", version=" + this.f38703b + "}";
    }
}

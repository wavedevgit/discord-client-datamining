package oj;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
final class a extends f {

    /* renamed from: a  reason: collision with root package name */
    private final String f41938a;

    /* renamed from: b  reason: collision with root package name */
    private final String f41939b;

    /* JADX INFO: Access modifiers changed from: package-private */
    public a(String str, String str2) {
        if (str != null) {
            this.f41938a = str;
            if (str2 != null) {
                this.f41939b = str2;
                return;
            }
            throw new NullPointerException("Null version");
        }
        throw new NullPointerException("Null libraryName");
    }

    @Override // oj.f
    public String b() {
        return this.f41938a;
    }

    @Override // oj.f
    public String c() {
        return this.f41939b;
    }

    public boolean equals(Object obj) {
        if (obj == this) {
            return true;
        }
        if (obj instanceof f) {
            f fVar = (f) obj;
            if (this.f41938a.equals(fVar.b()) && this.f41939b.equals(fVar.c())) {
                return true;
            }
        }
        return false;
    }

    public int hashCode() {
        return ((this.f41938a.hashCode() ^ 1000003) * 1000003) ^ this.f41939b.hashCode();
    }

    public String toString() {
        return "LibraryVersion{libraryName=" + this.f41938a + ", version=" + this.f41939b + "}";
    }
}

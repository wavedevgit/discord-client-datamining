package nj;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
final class a extends f {

    /* renamed from: a  reason: collision with root package name */
    private final String f40913a;

    /* renamed from: b  reason: collision with root package name */
    private final String f40914b;

    /* JADX INFO: Access modifiers changed from: package-private */
    public a(String str, String str2) {
        if (str != null) {
            this.f40913a = str;
            if (str2 != null) {
                this.f40914b = str2;
                return;
            }
            throw new NullPointerException("Null version");
        }
        throw new NullPointerException("Null libraryName");
    }

    @Override // nj.f
    public String b() {
        return this.f40913a;
    }

    @Override // nj.f
    public String c() {
        return this.f40914b;
    }

    public boolean equals(Object obj) {
        if (obj == this) {
            return true;
        }
        if (obj instanceof f) {
            f fVar = (f) obj;
            if (this.f40913a.equals(fVar.b()) && this.f40914b.equals(fVar.c())) {
                return true;
            }
        }
        return false;
    }

    public int hashCode() {
        return ((this.f40913a.hashCode() ^ 1000003) * 1000003) ^ this.f40914b.hashCode();
    }

    public String toString() {
        return "LibraryVersion{libraryName=" + this.f40913a + ", version=" + this.f40914b + "}";
    }
}

package qj;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
final class a extends f {

    /* renamed from: a  reason: collision with root package name */
    private final String f45427a;

    /* renamed from: b  reason: collision with root package name */
    private final String f45428b;

    /* JADX INFO: Access modifiers changed from: package-private */
    public a(String str, String str2) {
        if (str != null) {
            this.f45427a = str;
            if (str2 != null) {
                this.f45428b = str2;
                return;
            }
            throw new NullPointerException("Null version");
        }
        throw new NullPointerException("Null libraryName");
    }

    @Override // qj.f
    public String b() {
        return this.f45427a;
    }

    @Override // qj.f
    public String c() {
        return this.f45428b;
    }

    public boolean equals(Object obj) {
        if (obj == this) {
            return true;
        }
        if (obj instanceof f) {
            f fVar = (f) obj;
            if (this.f45427a.equals(fVar.b()) && this.f45428b.equals(fVar.c())) {
                return true;
            }
        }
        return false;
    }

    public int hashCode() {
        return ((this.f45427a.hashCode() ^ 1000003) * 1000003) ^ this.f45428b.hashCode();
    }

    public String toString() {
        return "LibraryVersion{libraryName=" + this.f45427a + ", version=" + this.f45428b + "}";
    }
}

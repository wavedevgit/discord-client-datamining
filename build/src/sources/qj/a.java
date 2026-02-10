package qj;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
final class a extends f {

    /* renamed from: a  reason: collision with root package name */
    private final String f45426a;

    /* renamed from: b  reason: collision with root package name */
    private final String f45427b;

    /* JADX INFO: Access modifiers changed from: package-private */
    public a(String str, String str2) {
        if (str != null) {
            this.f45426a = str;
            if (str2 != null) {
                this.f45427b = str2;
                return;
            }
            throw new NullPointerException("Null version");
        }
        throw new NullPointerException("Null libraryName");
    }

    @Override // qj.f
    public String b() {
        return this.f45426a;
    }

    @Override // qj.f
    public String c() {
        return this.f45427b;
    }

    public boolean equals(Object obj) {
        if (obj == this) {
            return true;
        }
        if (obj instanceof f) {
            f fVar = (f) obj;
            if (this.f45426a.equals(fVar.b()) && this.f45427b.equals(fVar.c())) {
                return true;
            }
        }
        return false;
    }

    public int hashCode() {
        return ((this.f45426a.hashCode() ^ 1000003) * 1000003) ^ this.f45427b.hashCode();
    }

    public String toString() {
        return "LibraryVersion{libraryName=" + this.f45426a + ", version=" + this.f45427b + "}";
    }
}

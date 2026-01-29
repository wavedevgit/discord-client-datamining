package jj;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
final class a extends f {

    /* renamed from: a  reason: collision with root package name */
    private final String f32190a;

    /* renamed from: b  reason: collision with root package name */
    private final String f32191b;

    /* JADX INFO: Access modifiers changed from: package-private */
    public a(String str, String str2) {
        if (str != null) {
            this.f32190a = str;
            if (str2 != null) {
                this.f32191b = str2;
                return;
            }
            throw new NullPointerException("Null version");
        }
        throw new NullPointerException("Null libraryName");
    }

    @Override // jj.f
    public String b() {
        return this.f32190a;
    }

    @Override // jj.f
    public String c() {
        return this.f32191b;
    }

    public boolean equals(Object obj) {
        if (obj == this) {
            return true;
        }
        if (obj instanceof f) {
            f fVar = (f) obj;
            if (this.f32190a.equals(fVar.b()) && this.f32191b.equals(fVar.c())) {
                return true;
            }
        }
        return false;
    }

    public int hashCode() {
        return ((this.f32190a.hashCode() ^ 1000003) * 1000003) ^ this.f32191b.hashCode();
    }

    public String toString() {
        return "LibraryVersion{libraryName=" + this.f32190a + ", version=" + this.f32191b + "}";
    }
}

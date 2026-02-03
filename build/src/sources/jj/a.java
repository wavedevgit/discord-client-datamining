package jj;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
final class a extends f {

    /* renamed from: a  reason: collision with root package name */
    private final String f31740a;

    /* renamed from: b  reason: collision with root package name */
    private final String f31741b;

    /* JADX INFO: Access modifiers changed from: package-private */
    public a(String str, String str2) {
        if (str != null) {
            this.f31740a = str;
            if (str2 != null) {
                this.f31741b = str2;
                return;
            }
            throw new NullPointerException("Null version");
        }
        throw new NullPointerException("Null libraryName");
    }

    @Override // jj.f
    public String b() {
        return this.f31740a;
    }

    @Override // jj.f
    public String c() {
        return this.f31741b;
    }

    public boolean equals(Object obj) {
        if (obj == this) {
            return true;
        }
        if (obj instanceof f) {
            f fVar = (f) obj;
            if (this.f31740a.equals(fVar.b()) && this.f31741b.equals(fVar.c())) {
                return true;
            }
        }
        return false;
    }

    public int hashCode() {
        return ((this.f31740a.hashCode() ^ 1000003) * 1000003) ^ this.f31741b.hashCode();
    }

    public String toString() {
        return "LibraryVersion{libraryName=" + this.f31740a + ", version=" + this.f31741b + "}";
    }
}

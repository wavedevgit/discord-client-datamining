package nt;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
final class q implements mt.c {

    /* renamed from: a  reason: collision with root package name */
    private final String f42124a;

    /* renamed from: b  reason: collision with root package name */
    private final Class f42125b;

    private q(String str, Class cls) {
        if (str != null) {
            if (cls != null) {
                this.f42124a = str;
                this.f42125b = cls;
                return;
            }
            throw new NullPointerException("Missing type of attribute.");
        }
        throw new NullPointerException("Missing name of attribute key.");
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public static q a(String str, Class cls) {
        return new q(str, cls);
    }

    public boolean equals(Object obj) {
        if (this == obj) {
            return true;
        }
        if (obj instanceof q) {
            q qVar = (q) obj;
            if (this.f42124a.equals(qVar.f42124a) && this.f42125b.equals(qVar.f42125b)) {
                return true;
            }
        }
        return false;
    }

    public int hashCode() {
        return this.f42124a.hashCode();
    }

    @Override // mt.c
    public String name() {
        return this.f42124a;
    }

    public String toString() {
        return this.f42125b.getName() + "@" + this.f42124a;
    }

    @Override // mt.c
    public Class type() {
        return this.f42125b;
    }
}

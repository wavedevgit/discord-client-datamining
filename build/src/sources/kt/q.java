package kt;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
final class q implements jt.c {

    /* renamed from: a  reason: collision with root package name */
    private final String f36642a;

    /* renamed from: b  reason: collision with root package name */
    private final Class f36643b;

    private q(String str, Class cls) {
        if (str != null) {
            if (cls != null) {
                this.f36642a = str;
                this.f36643b = cls;
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
            if (this.f36642a.equals(qVar.f36642a) && this.f36643b.equals(qVar.f36643b)) {
                return true;
            }
        }
        return false;
    }

    public int hashCode() {
        return this.f36642a.hashCode();
    }

    @Override // jt.c
    public String name() {
        return this.f36642a;
    }

    public String toString() {
        return this.f36643b.getName() + "@" + this.f36642a;
    }

    @Override // jt.c
    public Class type() {
        return this.f36643b;
    }
}

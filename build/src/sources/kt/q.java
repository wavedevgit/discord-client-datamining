package kt;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
final class q implements jt.c {

    /* renamed from: a  reason: collision with root package name */
    private final String f36626a;

    /* renamed from: b  reason: collision with root package name */
    private final Class f36627b;

    private q(String str, Class cls) {
        if (str != null) {
            if (cls != null) {
                this.f36626a = str;
                this.f36627b = cls;
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
            if (this.f36626a.equals(qVar.f36626a) && this.f36627b.equals(qVar.f36627b)) {
                return true;
            }
        }
        return false;
    }

    public int hashCode() {
        return this.f36626a.hashCode();
    }

    @Override // jt.c
    public String name() {
        return this.f36626a;
    }

    public String toString() {
        return this.f36627b.getName() + "@" + this.f36626a;
    }

    @Override // jt.c
    public Class type() {
        return this.f36627b;
    }
}

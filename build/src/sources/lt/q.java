package lt;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
final class q implements kt.c {

    /* renamed from: a  reason: collision with root package name */
    private final String f37724a;

    /* renamed from: b  reason: collision with root package name */
    private final Class f37725b;

    private q(String str, Class cls) {
        if (str != null) {
            if (cls != null) {
                this.f37724a = str;
                this.f37725b = cls;
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
            if (this.f37724a.equals(qVar.f37724a) && this.f37725b.equals(qVar.f37725b)) {
                return true;
            }
        }
        return false;
    }

    public int hashCode() {
        return this.f37724a.hashCode();
    }

    @Override // kt.c
    public String name() {
        return this.f37724a;
    }

    public String toString() {
        return this.f37725b.getName() + "@" + this.f37724a;
    }

    @Override // kt.c
    public Class type() {
        return this.f37725b;
    }
}

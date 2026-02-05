package qt;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
final class q implements pt.c {

    /* renamed from: a  reason: collision with root package name */
    private final String f48184a;

    /* renamed from: b  reason: collision with root package name */
    private final Class f48185b;

    private q(String str, Class cls) {
        if (str != null) {
            if (cls != null) {
                this.f48184a = str;
                this.f48185b = cls;
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
            if (this.f48184a.equals(qVar.f48184a) && this.f48185b.equals(qVar.f48185b)) {
                return true;
            }
        }
        return false;
    }

    public int hashCode() {
        return this.f48184a.hashCode();
    }

    @Override // pt.c
    public String name() {
        return this.f48184a;
    }

    public String toString() {
        return this.f48185b.getName() + "@" + this.f48184a;
    }

    @Override // pt.c
    public Class type() {
        return this.f48185b;
    }
}

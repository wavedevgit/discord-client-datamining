package st;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
final class q implements rt.c {

    /* renamed from: a  reason: collision with root package name */
    private final String f50208a;

    /* renamed from: b  reason: collision with root package name */
    private final Class f50209b;

    private q(String str, Class cls) {
        if (str != null) {
            if (cls != null) {
                this.f50208a = str;
                this.f50209b = cls;
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
            if (this.f50208a.equals(qVar.f50208a) && this.f50209b.equals(qVar.f50209b)) {
                return true;
            }
        }
        return false;
    }

    public int hashCode() {
        return this.f50208a.hashCode();
    }

    @Override // rt.c
    public String name() {
        return this.f50208a;
    }

    public String toString() {
        return this.f50209b.getName() + "@" + this.f50208a;
    }

    @Override // rt.c
    public Class type() {
        return this.f50209b;
    }
}

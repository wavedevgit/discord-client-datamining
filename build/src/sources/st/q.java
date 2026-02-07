package st;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
final class q implements rt.c {

    /* renamed from: a  reason: collision with root package name */
    private final String f50256a;

    /* renamed from: b  reason: collision with root package name */
    private final Class f50257b;

    private q(String str, Class cls) {
        if (str != null) {
            if (cls != null) {
                this.f50256a = str;
                this.f50257b = cls;
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
            if (this.f50256a.equals(qVar.f50256a) && this.f50257b.equals(qVar.f50257b)) {
                return true;
            }
        }
        return false;
    }

    public int hashCode() {
        return this.f50256a.hashCode();
    }

    @Override // rt.c
    public String name() {
        return this.f50256a;
    }

    public String toString() {
        return this.f50257b.getName() + "@" + this.f50256a;
    }

    @Override // rt.c
    public Class type() {
        return this.f50257b;
    }
}

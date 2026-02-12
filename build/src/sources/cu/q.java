package cu;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
final class q implements bu.c {

    /* renamed from: a  reason: collision with root package name */
    private final String f21207a;

    /* renamed from: b  reason: collision with root package name */
    private final Class f21208b;

    private q(String str, Class cls) {
        if (str != null) {
            if (cls != null) {
                this.f21207a = str;
                this.f21208b = cls;
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
            if (this.f21207a.equals(qVar.f21207a) && this.f21208b.equals(qVar.f21208b)) {
                return true;
            }
        }
        return false;
    }

    public int hashCode() {
        return this.f21207a.hashCode();
    }

    @Override // bu.c
    public String name() {
        return this.f21207a;
    }

    public String toString() {
        return this.f21208b.getName() + "@" + this.f21207a;
    }

    @Override // bu.c
    public Class type() {
        return this.f21208b;
    }
}

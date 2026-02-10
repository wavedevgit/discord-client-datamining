package tt;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
final class q implements st.c {

    /* renamed from: a  reason: collision with root package name */
    private final String f51100a;

    /* renamed from: b  reason: collision with root package name */
    private final Class f51101b;

    private q(String str, Class cls) {
        if (str != null) {
            if (cls != null) {
                this.f51100a = str;
                this.f51101b = cls;
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
            if (this.f51100a.equals(qVar.f51100a) && this.f51101b.equals(qVar.f51101b)) {
                return true;
            }
        }
        return false;
    }

    public int hashCode() {
        return this.f51100a.hashCode();
    }

    @Override // st.c
    public String name() {
        return this.f51100a;
    }

    public String toString() {
        return this.f51101b.getName() + "@" + this.f51100a;
    }

    @Override // st.c
    public Class type() {
        return this.f51101b;
    }
}

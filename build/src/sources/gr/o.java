package gr;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public class o {

    /* renamed from: a  reason: collision with root package name */
    private final String f25198a;

    o(String str) {
        this.f25198a = str;
    }

    public static o b(String str) {
        return new o(str);
    }

    public Object a(q qVar) {
        return qVar.b(this);
    }

    public Object c(q qVar) {
        Object a10 = a(qVar);
        if (a10 != null) {
            return a10;
        }
        throw new NullPointerException(this.f25198a);
    }

    public void d(q qVar, Object obj) {
        qVar.a(this, obj);
    }

    public boolean equals(Object obj) {
        if (this == obj) {
            return true;
        }
        if (obj != null && getClass() == obj.getClass()) {
            return this.f25198a.equals(((o) obj).f25198a);
        }
        return false;
    }

    public int hashCode() {
        return this.f25198a.hashCode();
    }

    public String toString() {
        return "Prop{name='" + this.f25198a + "'}";
    }
}

package qi;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class d0 {

    /* renamed from: a  reason: collision with root package name */
    private final Class f47837a;

    /* renamed from: b  reason: collision with root package name */
    private final Class f47838b;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    private @interface a {
    }

    public d0(Class cls, Class cls2) {
        this.f47837a = cls;
        this.f47838b = cls2;
    }

    public static d0 a(Class cls, Class cls2) {
        return new d0(cls, cls2);
    }

    public static d0 b(Class cls) {
        return new d0(a.class, cls);
    }

    public boolean equals(Object obj) {
        if (this == obj) {
            return true;
        }
        if (obj == null || d0.class != obj.getClass()) {
            return false;
        }
        d0 d0Var = (d0) obj;
        if (!this.f47838b.equals(d0Var.f47838b)) {
            return false;
        }
        return this.f47837a.equals(d0Var.f47837a);
    }

    public int hashCode() {
        return (this.f47838b.hashCode() * 31) + this.f47837a.hashCode();
    }

    public String toString() {
        if (this.f47837a == a.class) {
            return this.f47838b.getName();
        }
        return "@" + this.f47837a.getName() + " " + this.f47838b.getName();
    }
}

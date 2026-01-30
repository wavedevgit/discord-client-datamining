package qi;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class d0 {

    /* renamed from: a  reason: collision with root package name */
    private final Class f47432a;

    /* renamed from: b  reason: collision with root package name */
    private final Class f47433b;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    private @interface a {
    }

    public d0(Class cls, Class cls2) {
        this.f47432a = cls;
        this.f47433b = cls2;
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
        if (!this.f47433b.equals(d0Var.f47433b)) {
            return false;
        }
        return this.f47432a.equals(d0Var.f47432a);
    }

    public int hashCode() {
        return (this.f47433b.hashCode() * 31) + this.f47432a.hashCode();
    }

    public String toString() {
        if (this.f47432a == a.class) {
            return this.f47433b.getName();
        }
        return "@" + this.f47432a.getName() + " " + this.f47433b.getName();
    }
}

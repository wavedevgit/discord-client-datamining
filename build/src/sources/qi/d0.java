package qi;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class d0 {

    /* renamed from: a  reason: collision with root package name */
    private final Class f47416a;

    /* renamed from: b  reason: collision with root package name */
    private final Class f47417b;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    private @interface a {
    }

    public d0(Class cls, Class cls2) {
        this.f47416a = cls;
        this.f47417b = cls2;
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
        if (!this.f47417b.equals(d0Var.f47417b)) {
            return false;
        }
        return this.f47416a.equals(d0Var.f47416a);
    }

    public int hashCode() {
        return (this.f47417b.hashCode() * 31) + this.f47416a.hashCode();
    }

    public String toString() {
        if (this.f47416a == a.class) {
            return this.f47417b.getName();
        }
        return "@" + this.f47416a.getName() + " " + this.f47417b.getName();
    }
}

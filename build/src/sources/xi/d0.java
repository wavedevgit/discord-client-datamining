package xi;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class d0 {

    /* renamed from: a  reason: collision with root package name */
    private final Class f55382a;

    /* renamed from: b  reason: collision with root package name */
    private final Class f55383b;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    private @interface a {
    }

    public d0(Class cls, Class cls2) {
        this.f55382a = cls;
        this.f55383b = cls2;
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
        if (!this.f55383b.equals(d0Var.f55383b)) {
            return false;
        }
        return this.f55382a.equals(d0Var.f55382a);
    }

    public int hashCode() {
        return (this.f55383b.hashCode() * 31) + this.f55382a.hashCode();
    }

    public String toString() {
        if (this.f55382a == a.class) {
            return this.f55383b.getName();
        }
        return "@" + this.f55382a.getName() + " " + this.f55383b.getName();
    }
}

package xi;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class d0 {

    /* renamed from: a  reason: collision with root package name */
    private final Class f54813a;

    /* renamed from: b  reason: collision with root package name */
    private final Class f54814b;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    private @interface a {
    }

    public d0(Class cls, Class cls2) {
        this.f54813a = cls;
        this.f54814b = cls2;
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
        if (!this.f54814b.equals(d0Var.f54814b)) {
            return false;
        }
        return this.f54813a.equals(d0Var.f54813a);
    }

    public int hashCode() {
        return (this.f54814b.hashCode() * 31) + this.f54813a.hashCode();
    }

    public String toString() {
        if (this.f54813a == a.class) {
            return this.f54814b.getName();
        }
        return "@" + this.f54813a.getName() + " " + this.f54814b.getName();
    }
}

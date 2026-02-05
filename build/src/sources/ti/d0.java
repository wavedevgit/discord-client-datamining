package ti;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class d0 {

    /* renamed from: a  reason: collision with root package name */
    private final Class f50701a;

    /* renamed from: b  reason: collision with root package name */
    private final Class f50702b;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    private @interface a {
    }

    public d0(Class cls, Class cls2) {
        this.f50701a = cls;
        this.f50702b = cls2;
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
        if (!this.f50702b.equals(d0Var.f50702b)) {
            return false;
        }
        return this.f50701a.equals(d0Var.f50701a);
    }

    public int hashCode() {
        return (this.f50702b.hashCode() * 31) + this.f50701a.hashCode();
    }

    public String toString() {
        if (this.f50701a == a.class) {
            return this.f50702b.getName();
        }
        return "@" + this.f50701a.getName() + " " + this.f50702b.getName();
    }
}

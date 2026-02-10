package vi;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class d0 {

    /* renamed from: a  reason: collision with root package name */
    private final Class f52417a;

    /* renamed from: b  reason: collision with root package name */
    private final Class f52418b;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    private @interface a {
    }

    public d0(Class cls, Class cls2) {
        this.f52417a = cls;
        this.f52418b = cls2;
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
        if (!this.f52418b.equals(d0Var.f52418b)) {
            return false;
        }
        return this.f52417a.equals(d0Var.f52417a);
    }

    public int hashCode() {
        return (this.f52418b.hashCode() * 31) + this.f52417a.hashCode();
    }

    public String toString() {
        if (this.f52417a == a.class) {
            return this.f52418b.getName();
        }
        return "@" + this.f52417a.getName() + " " + this.f52418b.getName();
    }
}

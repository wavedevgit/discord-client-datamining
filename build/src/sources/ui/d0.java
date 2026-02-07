package ui;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class d0 {

    /* renamed from: a  reason: collision with root package name */
    private final Class f51557a;

    /* renamed from: b  reason: collision with root package name */
    private final Class f51558b;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    private @interface a {
    }

    public d0(Class cls, Class cls2) {
        this.f51557a = cls;
        this.f51558b = cls2;
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
        if (!this.f51558b.equals(d0Var.f51558b)) {
            return false;
        }
        return this.f51557a.equals(d0Var.f51557a);
    }

    public int hashCode() {
        return (this.f51558b.hashCode() * 31) + this.f51557a.hashCode();
    }

    public String toString() {
        if (this.f51557a == a.class) {
            return this.f51558b.getName();
        }
        return "@" + this.f51557a.getName() + " " + this.f51558b.getName();
    }
}

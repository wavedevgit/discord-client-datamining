package xi;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class q {

    /* renamed from: a  reason: collision with root package name */
    private final d0 f55423a;

    /* renamed from: b  reason: collision with root package name */
    private final int f55424b;

    /* renamed from: c  reason: collision with root package name */
    private final int f55425c;

    private q(Class cls, int i10, int i11) {
        this(d0.b(cls), i10, i11);
    }

    private static String a(int i10) {
        if (i10 != 0) {
            if (i10 != 1) {
                if (i10 == 2) {
                    return "deferred";
                }
                throw new AssertionError("Unsupported injection: " + i10);
            }
            return "provider";
        }
        return "direct";
    }

    public static q g(Class cls) {
        return new q(cls, 0, 0);
    }

    public static q h(Class cls) {
        return new q(cls, 0, 1);
    }

    public static q i(d0 d0Var) {
        return new q(d0Var, 0, 1);
    }

    public static q j(Class cls) {
        return new q(cls, 1, 0);
    }

    public static q k(d0 d0Var) {
        return new q(d0Var, 1, 0);
    }

    public static q l(Class cls) {
        return new q(cls, 1, 1);
    }

    public static q m(Class cls) {
        return new q(cls, 2, 0);
    }

    public d0 b() {
        return this.f55423a;
    }

    public boolean c() {
        if (this.f55425c == 2) {
            return true;
        }
        return false;
    }

    public boolean d() {
        if (this.f55425c == 0) {
            return true;
        }
        return false;
    }

    public boolean e() {
        if (this.f55424b == 1) {
            return true;
        }
        return false;
    }

    public boolean equals(Object obj) {
        if (obj instanceof q) {
            q qVar = (q) obj;
            if (this.f55423a.equals(qVar.f55423a) && this.f55424b == qVar.f55424b && this.f55425c == qVar.f55425c) {
                return true;
            }
        }
        return false;
    }

    public boolean f() {
        if (this.f55424b == 2) {
            return true;
        }
        return false;
    }

    public int hashCode() {
        return ((((this.f55423a.hashCode() ^ 1000003) * 1000003) ^ this.f55424b) * 1000003) ^ this.f55425c;
    }

    public String toString() {
        String str;
        StringBuilder sb2 = new StringBuilder("Dependency{anInterface=");
        sb2.append(this.f55423a);
        sb2.append(", type=");
        int i10 = this.f55424b;
        if (i10 == 1) {
            str = "required";
        } else if (i10 == 0) {
            str = "optional";
        } else {
            str = "set";
        }
        sb2.append(str);
        sb2.append(", injection=");
        sb2.append(a(this.f55425c));
        sb2.append("}");
        return sb2.toString();
    }

    private q(d0 d0Var, int i10, int i11) {
        this.f55423a = (d0) c0.c(d0Var, "Null dependency anInterface.");
        this.f55424b = i10;
        this.f55425c = i11;
    }
}

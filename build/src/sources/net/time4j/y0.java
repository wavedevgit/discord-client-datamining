package net.time4j;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public enum y0 implements rt.n, rt.v {
    MONDAY,
    TUESDAY,
    WEDNESDAY,
    THURSDAY,
    FRIDAY,
    SATURDAY,
    SUNDAY;
    

    /* renamed from: s  reason: collision with root package name */
    private static final y0[] f39715s = values();

    public static y0 h(int i10) {
        if (i10 >= 1 && i10 <= 7) {
            return f39715s[i10 - 1];
        }
        throw new IllegalArgumentException("Out of range: " + i10);
    }

    @Override // rt.v
    /* renamed from: a */
    public f0 apply(f0 f0Var) {
        return (f0) f0Var.E(f0.G, this);
    }

    public int d() {
        return ordinal() + 1;
    }

    public int e(a1 a1Var) {
        return (((ordinal() + 7) - a1Var.f().ordinal()) % 7) + 1;
    }

    public y0 f(int i10) {
        return h(((ordinal() + ((i10 % 7) + 7)) % 7) + 1);
    }

    @Override // rt.n
    /* renamed from: g */
    public boolean test(pt.a aVar) {
        if (pt.b.c(aVar.f(), aVar.r(), aVar.g()) == d()) {
            return true;
        }
        return false;
    }
}

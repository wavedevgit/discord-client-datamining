package net.time4j;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public enum y0 implements pt.n, pt.v {
    MONDAY,
    TUESDAY,
    WEDNESDAY,
    THURSDAY,
    FRIDAY,
    SATURDAY,
    SUNDAY;
    

    /* renamed from: s  reason: collision with root package name */
    private static final y0[] f40312s = values();

    public static y0 h(int i10) {
        if (i10 >= 1 && i10 <= 7) {
            return f40312s[i10 - 1];
        }
        throw new IllegalArgumentException("Out of range: " + i10);
    }

    @Override // pt.v
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

    @Override // pt.n
    /* renamed from: g */
    public boolean test(nt.a aVar) {
        if (nt.b.c(aVar.f(), aVar.t(), aVar.g()) == d()) {
            return true;
        }
        return false;
    }
}

package net.time4j;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public enum n0 implements bu.n, bu.v {
    Q1,
    Q2,
    Q3,
    Q4;
    

    /* renamed from: p  reason: collision with root package name */
    private static final n0[] f37647p = values();

    public static n0 f(int i10) {
        if (i10 >= 1 && i10 <= 4) {
            return f37647p[i10 - 1];
        }
        throw new IllegalArgumentException("Out of range: " + i10);
    }

    @Override // bu.v
    /* renamed from: a */
    public f0 apply(f0 f0Var) {
        return (f0) f0Var.E(f0.C, this);
    }

    public int d() {
        return ordinal() + 1;
    }

    @Override // bu.n
    /* renamed from: e */
    public boolean test(zt.a aVar) {
        if (d() == ((aVar.q() - 1) / 3) + 1) {
            return true;
        }
        return false;
    }
}

package net.time4j;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public enum n0 implements kt.n, kt.v {
    Q1,
    Q2,
    Q3,
    Q4;
    

    /* renamed from: p  reason: collision with root package name */
    private static final n0[] f40649p = values();

    public static n0 f(int i10) {
        if (i10 >= 1 && i10 <= 4) {
            return f40649p[i10 - 1];
        }
        throw new IllegalArgumentException("Out of range: " + i10);
    }

    @Override // kt.v
    /* renamed from: a */
    public f0 apply(f0 f0Var) {
        return (f0) f0Var.E(f0.C, this);
    }

    public int d() {
        return ordinal() + 1;
    }

    @Override // kt.n
    /* renamed from: e */
    public boolean test(ht.a aVar) {
        if (d() == ((aVar.r() - 1) / 3) + 1) {
            return true;
        }
        return false;
    }
}

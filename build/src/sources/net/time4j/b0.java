package net.time4j;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public enum b0 implements kt.n, kt.v {
    JANUARY,
    FEBRUARY,
    MARCH,
    APRIL,
    MAY,
    JUNE,
    JULY,
    AUGUST,
    SEPTEMBER,
    OCTOBER,
    NOVEMBER,
    DECEMBER;
    

    /* renamed from: x  reason: collision with root package name */
    private static final b0[] f40272x = values();

    public static b0 f(int i10) {
        if (i10 >= 1 && i10 <= 12) {
            return f40272x[i10 - 1];
        }
        throw new IllegalArgumentException("Out of range: " + i10);
    }

    @Override // kt.v
    /* renamed from: a */
    public f0 apply(f0 f0Var) {
        return (f0) f0Var.E(f0.D, this);
    }

    public int d() {
        return ordinal() + 1;
    }

    @Override // kt.n
    /* renamed from: e */
    public boolean test(ht.a aVar) {
        if (aVar.r() == d()) {
            return true;
        }
        return false;
    }
}

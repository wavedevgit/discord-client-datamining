package net.time4j.history;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public enum j implements rt.i {
    BC,
    AD,
    HISPANIC,
    BYZANTINE,
    AB_URBE_CONDITA;

    /* JADX INFO: Access modifiers changed from: package-private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
    public static /* synthetic */ class a {

        /* renamed from: a  reason: collision with root package name */
        static final /* synthetic */ int[] f39414a;

        static {
            int[] iArr = new int[j.values().length];
            f39414a = iArr;
            try {
                iArr[j.BC.ordinal()] = 1;
            } catch (NoSuchFieldError unused) {
            }
            try {
                f39414a[j.AD.ordinal()] = 2;
            } catch (NoSuchFieldError unused2) {
            }
            try {
                f39414a[j.HISPANIC.ordinal()] = 3;
            } catch (NoSuchFieldError unused3) {
            }
            try {
                f39414a[j.BYZANTINE.ordinal()] = 4;
            } catch (NoSuchFieldError unused4) {
            }
            try {
                f39414a[j.AB_URBE_CONDITA.ordinal()] = 5;
            } catch (NoSuchFieldError unused5) {
            }
        }
    }

    public int a(int i10) {
        try {
            int i11 = a.f39414a[ordinal()];
            if (i11 != 1) {
                if (i11 != 2) {
                    if (i11 != 3) {
                        if (i11 != 4) {
                            if (i11 == 5) {
                                return pt.c.l(i10, 753);
                            }
                            throw new UnsupportedOperationException(name());
                        }
                        return pt.c.l(i10, 5508);
                    }
                    return pt.c.l(i10, 38);
                }
                return i10;
            }
            return pt.c.l(1, i10);
        } catch (ArithmeticException unused) {
            throw new IllegalArgumentException("Out of range: " + i10);
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public int d(j jVar, int i10) {
        int a10 = jVar.a(i10);
        try {
            int i11 = a.f39414a[ordinal()];
            if (i11 != 1) {
                if (i11 != 2) {
                    if (i11 != 3) {
                        if (i11 != 4) {
                            if (i11 == 5) {
                                return pt.c.e(a10, 753);
                            }
                            throw new UnsupportedOperationException(name());
                        }
                        return pt.c.e(a10, 5508);
                    }
                    return pt.c.e(a10, 38);
                }
                return a10;
            }
            return pt.c.l(1, a10);
        } catch (ArithmeticException unused) {
            throw new IllegalArgumentException("Out of range: " + i10);
        }
    }
}

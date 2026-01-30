package net.time4j.history;
/* JADX WARN: Failed to restore enum class, 'enum' modifier and super class removed */
/* JADX WARN: Unknown enum class pattern. Please report as an issue! */
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public abstract class n {

    /* renamed from: d  reason: collision with root package name */
    public static final n f40703d;

    /* renamed from: e  reason: collision with root package name */
    public static final n f40704e;

    /* renamed from: i  reason: collision with root package name */
    public static final n f40705i;

    /* renamed from: o  reason: collision with root package name */
    public static final n f40706o;

    /* renamed from: p  reason: collision with root package name */
    public static final n f40707p;

    /* renamed from: q  reason: collision with root package name */
    public static final n f40708q;

    /* renamed from: r  reason: collision with root package name */
    public static final n f40709r;

    /* renamed from: s  reason: collision with root package name */
    public static final n f40710s;

    /* renamed from: t  reason: collision with root package name */
    public static final n f40711t;

    /* renamed from: u  reason: collision with root package name */
    private static final /* synthetic */ n[] f40712u;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
    enum a extends n {
        a(String str, int i10) {
            super(str, i10, null);
        }

        @Override // net.time4j.history.n
        int a(o oVar, net.time4j.history.h hVar) {
            return hVar.g();
        }

        @Override // net.time4j.history.n
        net.time4j.history.h d(j jVar, int i10) {
            return net.time4j.history.h.i(jVar, i10, 1, 1);
        }
    }

    static {
        a aVar = new a("BEGIN_OF_JANUARY", 0);
        f40703d = aVar;
        n nVar = new n("BEGIN_OF_MARCH", 1) { // from class: net.time4j.history.n.b
            @Override // net.time4j.history.n
            net.time4j.history.h d(j jVar, int i10) {
                return net.time4j.history.h.i(jVar, i10, 3, 1);
            }
        };
        f40704e = nVar;
        n nVar2 = new n("BEGIN_OF_SEPTEMBER", 2) { // from class: net.time4j.history.n.c
            @Override // net.time4j.history.n
            int a(o oVar, net.time4j.history.h hVar) {
                j e10 = hVar.e();
                int g10 = hVar.g();
                int i10 = g10 + 1;
                if (hVar.compareTo(oVar.d(e10, i10)) >= 0) {
                    return i10;
                }
                return g10;
            }

            @Override // net.time4j.history.n
            net.time4j.history.h d(j jVar, int i10) {
                return net.time4j.history.h.i(jVar, i10 - 1, 9, 1);
            }
        };
        f40705i = nVar2;
        n nVar3 = new n("CHRISTMAS_STYLE", 3) { // from class: net.time4j.history.n.d
            @Override // net.time4j.history.n
            int a(o oVar, net.time4j.history.h hVar) {
                int g10 = hVar.g();
                int i10 = g10 + 1;
                if (hVar.compareTo(oVar.d(hVar.e(), i10)) >= 0) {
                    return i10;
                }
                return g10;
            }

            @Override // net.time4j.history.n
            net.time4j.history.h d(j jVar, int i10) {
                return net.time4j.history.h.i(jVar, i10 - 1, 12, 25);
            }
        };
        f40706o = nVar3;
        n nVar4 = new n("EASTER_STYLE", 4) { // from class: net.time4j.history.n.e
            @Override // net.time4j.history.n
            net.time4j.history.h d(j jVar, int i10) {
                int i11;
                int a10 = net.time4j.history.e.EASTERN.a(jVar.a(i10));
                int i12 = a10 - 1;
                if (i12 > 31) {
                    i12 = a10 - 32;
                    i11 = 4;
                } else {
                    i11 = 3;
                }
                return net.time4j.history.h.i(jVar, i10, i11, i12);
            }
        };
        f40707p = nVar4;
        n nVar5 = new n("GOOD_FRIDAY", 5) { // from class: net.time4j.history.n.f
            @Override // net.time4j.history.n
            net.time4j.history.h d(j jVar, int i10) {
                int i11;
                int a10 = net.time4j.history.e.EASTERN.a(jVar.a(i10));
                int i12 = a10 - 2;
                if (i12 > 31) {
                    i12 = a10 - 33;
                    i11 = 4;
                } else {
                    i11 = 3;
                }
                return net.time4j.history.h.i(jVar, i10, i11, i12);
            }
        };
        f40708q = nVar5;
        n nVar6 = new n("MARIA_ANUNCIATA", 6) { // from class: net.time4j.history.n.g
            @Override // net.time4j.history.n
            net.time4j.history.h d(j jVar, int i10) {
                return net.time4j.history.h.i(jVar, i10, 3, 25);
            }
        };
        f40709r = nVar6;
        n nVar7 = new n("CALCULUS_PISANUS", 7) { // from class: net.time4j.history.n.h
            @Override // net.time4j.history.n
            int a(o oVar, net.time4j.history.h hVar) {
                int g10 = hVar.g();
                int i10 = g10 - 1;
                if (hVar.compareTo(d(hVar.e(), i10)) < 0) {
                    return g10 - 2;
                }
                return i10;
            }

            @Override // net.time4j.history.n
            net.time4j.history.h d(j jVar, int i10) {
                return n.f40709r.d(jVar, i10 + 1);
            }

            @Override // net.time4j.history.n
            int e(boolean z10, o oVar, j jVar, int i10, int i11, int i12) {
                return n.f40709r.e(z10, oVar, jVar, i10 + 1, i11, i12);
            }
        };
        f40710s = nVar7;
        n nVar8 = new n("EPIPHANY", 8) { // from class: net.time4j.history.n.i
            @Override // net.time4j.history.n
            net.time4j.history.h d(j jVar, int i10) {
                return net.time4j.history.h.i(jVar, i10, 1, 6);
            }
        };
        f40711t = nVar8;
        f40712u = new n[]{aVar, nVar, nVar2, nVar3, nVar4, nVar5, nVar6, nVar7, nVar8};
    }

    private n(String str, int i10) {
    }

    public static n valueOf(String str) {
        return (n) Enum.valueOf(n.class, str);
    }

    public static n[] values() {
        return (n[]) f40712u.clone();
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public int a(o oVar, net.time4j.history.h hVar) {
        int g10 = hVar.g();
        if (hVar.compareTo(d(hVar.e(), g10)) < 0) {
            return g10 - 1;
        }
        return g10;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public abstract net.time4j.history.h d(j jVar, int i10);

    /* JADX INFO: Access modifiers changed from: package-private */
    /* JADX WARN: Code restructure failed: missing block: B:14:0x002a, code lost:
        if (r7.a(r6) >= 0) goto L15;
     */
    /* JADX WARN: Code restructure failed: missing block: B:16:0x002d, code lost:
        r8 = r1;
     */
    /* JADX WARN: Code restructure failed: missing block: B:22:0x0042, code lost:
        if (r2.a(r6) >= 0) goto L14;
     */
    /* JADX WARN: Code restructure failed: missing block: B:24:0x0045, code lost:
        if (r9 > r8) goto L19;
     */
    /* JADX WARN: Code restructure failed: missing block: B:25:0x0047, code lost:
        if (r5 == false) goto L18;
     */
    /* JADX WARN: Code restructure failed: missing block: B:26:0x0049, code lost:
        return r9;
     */
    /* JADX WARN: Code restructure failed: missing block: B:27:0x004a, code lost:
        return r8;
     */
    /* JADX WARN: Code restructure failed: missing block: B:29:0x0061, code lost:
        throw new java.lang.IllegalArgumentException("Invalid date due to changing new year rule (year too short to cover month and day-of-month): " + r2);
     */
    /*
        Code decompiled incorrectly, please refer to instructions dump.
        To view partially-correct add '--show-bad-code' argument
    */
    public int e(boolean r5, net.time4j.history.o r6, net.time4j.history.j r7, int r8, int r9, int r10) {
        /*
            r4 = this;
            r0 = 5
            if (r9 < r0) goto L8
            r0 = 8
            if (r9 > r0) goto L8
            return r8
        L8:
            net.time4j.history.h r0 = r4.d(r7, r8)
            int r1 = r8 + 1
            net.time4j.history.h r6 = r6.d(r7, r1)
            net.time4j.history.h r2 = net.time4j.history.h.i(r7, r8, r9, r10)
            r3 = 4
            if (r9 > r3) goto L2f
            net.time4j.history.h r7 = net.time4j.history.h.i(r7, r1, r9, r10)
            int r9 = r2.compareTo(r0)
            if (r9 < 0) goto L25
            r9 = r8
            goto L26
        L25:
            r9 = r1
        L26:
            int r6 = r7.compareTo(r6)
            if (r6 < 0) goto L2d
            goto L45
        L2d:
            r8 = r1
            goto L45
        L2f:
            int r1 = r8 + (-1)
            net.time4j.history.h r7 = net.time4j.history.h.i(r7, r1, r9, r10)
            int r7 = r7.compareTo(r0)
            if (r7 < 0) goto L3d
            r9 = r1
            goto L3e
        L3d:
            r9 = r8
        L3e:
            int r6 = r2.compareTo(r6)
            if (r6 < 0) goto L45
            goto L2d
        L45:
            if (r9 > r8) goto L4b
            if (r5 == 0) goto L4a
            return r9
        L4a:
            return r8
        L4b:
            java.lang.IllegalArgumentException r5 = new java.lang.IllegalArgumentException
            java.lang.StringBuilder r6 = new java.lang.StringBuilder
            r6.<init>()
            java.lang.String r7 = "Invalid date due to changing new year rule (year too short to cover month and day-of-month): "
            r6.append(r7)
            r6.append(r2)
            java.lang.String r6 = r6.toString()
            r5.<init>(r6)
            throw r5
        */
        throw new UnsupportedOperationException("Method not decompiled: net.time4j.history.n.e(boolean, net.time4j.history.o, net.time4j.history.j, int, int, int):int");
    }

    public o f(int i10) {
        if (i10 > 567) {
            o oVar = new o(this, i10);
            n nVar = f40703d;
            if (this != nVar) {
                return new o(nVar, 567).b(oVar);
            }
            return oVar;
        }
        throw new IllegalArgumentException("Defining New-Year-strategy is not supported before Council of Tours in AD 567.");
    }

    /* synthetic */ n(String str, int i10, a aVar) {
        this(str, i10);
    }
}

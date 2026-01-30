package net.time4j.calendar;

import java.util.Locale;
import jt.c0;
import jt.m0;
import jt.z;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public abstract class f extends jt.m {

    /* renamed from: d  reason: collision with root package name */
    private final transient int f40458d;

    /* renamed from: e  reason: collision with root package name */
    private final transient int f40459e;

    /* renamed from: i  reason: collision with root package name */
    private final transient h f40460i;

    /* renamed from: o  reason: collision with root package name */
    private final transient int f40461o;

    /* renamed from: p  reason: collision with root package name */
    private final transient long f40462p;

    /* renamed from: q  reason: collision with root package name */
    private final transient int f40463q;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
    private static class b implements z {

        /* renamed from: d  reason: collision with root package name */
        private final jt.p f40464d;

        /* renamed from: e  reason: collision with root package name */
        private final boolean f40465e;

        @Override // jt.z
        /* renamed from: b */
        public jt.p a(f fVar) {
            return this.f40464d;
        }

        @Override // jt.z
        /* renamed from: c */
        public jt.p h(f fVar) {
            return this.f40464d;
        }

        @Override // jt.z
        /* renamed from: d */
        public net.time4j.calendar.c j(f fVar) {
            int i10;
            if (fVar.V() == 94) {
                i10 = 56;
            } else {
                i10 = 60;
            }
            return net.time4j.calendar.c.r(i10);
        }

        @Override // jt.z
        /* renamed from: e */
        public net.time4j.calendar.c p(f fVar) {
            if (this.f40465e) {
                if (fVar.V() == 75) {
                    return net.time4j.calendar.c.r(10);
                }
                return net.time4j.calendar.c.r(1);
            } else if (fVar.V() == 72) {
                return net.time4j.calendar.c.r(22);
            } else {
                return net.time4j.calendar.c.r(1);
            }
        }

        @Override // jt.z
        /* renamed from: f */
        public net.time4j.calendar.c x(f fVar) {
            return fVar.f0();
        }

        @Override // jt.z
        /* renamed from: g */
        public boolean l(f fVar, net.time4j.calendar.c cVar) {
            net.time4j.calendar.c p10 = p(fVar);
            net.time4j.calendar.c j10 = j(fVar);
            if (cVar != null && p10.compareTo(cVar) <= 0 && j10.compareTo(cVar) >= 0) {
                return true;
            }
            return false;
        }

        @Override // jt.z
        /* renamed from: i */
        public f w(f fVar, net.time4j.calendar.c cVar, boolean z10) {
            if (l(fVar, cVar)) {
                net.time4j.calendar.d U = fVar.U();
                int g10 = fVar.g();
                h b02 = fVar.b0();
                int number = cVar.getNumber();
                int V = fVar.V();
                if (b02.e() && b02.getNumber() != U.g(V, number)) {
                    b02 = h.f(b02.getNumber());
                }
                h hVar = b02;
                if (g10 <= 29) {
                    return U.e(V, number, hVar, g10, U.t(V, number, hVar, g10));
                }
                long t10 = U.t(V, number, hVar, 1);
                int min = Math.min(g10, U.b(t10).lengthOfMonth());
                return U.e(V, number, hVar, min, (t10 + min) - 1);
            }
            throw new IllegalArgumentException("Invalid cyclic year: " + cVar);
        }

        private b(jt.p pVar, boolean z10) {
            this.f40464d = pVar;
            this.f40465e = z10;
        }
    }

    /* JADX INFO: Access modifiers changed from: private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
    public static class c implements m0 {

        /* renamed from: a  reason: collision with root package name */
        private final int f40466a;

        c(int i10) {
            this.f40466a = i10;
        }

        private static long e(f fVar, f fVar2, int i10) {
            int compareTo;
            f fVar3;
            f fVar4;
            int g10;
            net.time4j.calendar.d U = fVar.U();
            if (i10 != 0) {
                if (i10 != 1) {
                    if (i10 != 2) {
                        if (i10 != 3) {
                            if (i10 == 4) {
                                return fVar2.j() - fVar.j();
                            }
                            throw new UnsupportedOperationException();
                        }
                        return (fVar2.j() - fVar.j()) / 7;
                    }
                    boolean P = fVar.P(fVar2);
                    if (P) {
                        fVar4 = fVar;
                        fVar3 = fVar2;
                    } else {
                        fVar3 = fVar;
                        fVar4 = fVar2;
                    }
                    int V = fVar3.V();
                    int number = fVar3.f0().getNumber();
                    h b02 = fVar3.b0();
                    int number2 = b02.getNumber();
                    boolean e10 = b02.e();
                    int g11 = U.g(V, number);
                    int i11 = 0;
                    while (true) {
                        if (V == fVar4.V() && number == fVar4.f0().getNumber() && b02.equals(fVar4.b0())) {
                            break;
                        }
                        if (e10) {
                            number2++;
                            e10 = false;
                        } else if (g11 == number2) {
                            e10 = true;
                        } else {
                            number2++;
                        }
                        if (!e10) {
                            if (number2 == 13) {
                                number++;
                                if (number == 61) {
                                    V++;
                                    number = 1;
                                }
                                g10 = U.g(V, number);
                                number2 = 1;
                            } else if (number2 == 0) {
                                number--;
                                if (number == 0) {
                                    V--;
                                    number = 60;
                                }
                                g10 = U.g(V, number);
                                number2 = 12;
                            }
                            g11 = g10;
                        }
                        b02 = h.f(number2);
                        if (e10) {
                            b02 = b02.g();
                        }
                        i11++;
                    }
                    if (i11 > 0 && fVar3.g() > fVar4.g()) {
                        i11--;
                    }
                    if (P) {
                        i11 = -i11;
                    }
                    return i11;
                }
                int V2 = (((fVar2.V() * 60) + fVar2.f0().getNumber()) - (fVar.V() * 60)) - fVar.f0().getNumber();
                if (V2 > 0) {
                    int compareTo2 = fVar.b0().compareTo(fVar2.b0());
                    if (compareTo2 > 0 || (compareTo2 == 0 && fVar.g() > fVar2.g())) {
                        V2--;
                    }
                } else if (V2 < 0 && ((compareTo = fVar.b0().compareTo(fVar2.b0())) < 0 || (compareTo == 0 && fVar.g() < fVar2.g()))) {
                    V2++;
                }
                return V2;
            }
            return e(fVar, fVar2, 1) / 60;
        }

        private static void f(long j10) {
            if (j10 <= 1200 && j10 >= -1200) {
                return;
            }
            throw new ArithmeticException("Month arithmetic limited to delta not greater than 1200.");
        }

        private static f g(int i10, int i11, h hVar, int i12, net.time4j.calendar.d dVar) {
            if (i12 <= 29) {
                return dVar.e(i10, i11, hVar, i12, dVar.t(i10, i11, hVar, i12));
            }
            long t10 = dVar.t(i10, i11, hVar, 1);
            int min = Math.min(i12, dVar.b(t10).lengthOfMonth());
            return dVar.e(i10, i11, hVar, min, (t10 + min) - 1);
        }

        @Override // jt.m0
        /* renamed from: c */
        public f b(f fVar, long j10) {
            int i10;
            int i11;
            long j11 = j10;
            net.time4j.calendar.d U = fVar.U();
            int g10 = fVar.g();
            int V = fVar.V();
            int number = fVar.f0().getNumber();
            h b02 = fVar.b0();
            int i12 = this.f40466a;
            int i13 = 1;
            if (i12 != 0) {
                if (i12 != 1) {
                    if (i12 != 2) {
                        if (i12 != 3) {
                            if (i12 != 4) {
                                throw new UnsupportedOperationException();
                            }
                        } else {
                            j11 = gt.c.i(j11, 7L);
                        }
                        return U.b(gt.c.f(fVar.j(), j11));
                    }
                    f(j11);
                    if (j11 > 0) {
                        i10 = 1;
                    } else {
                        i10 = -1;
                    }
                    int number2 = b02.getNumber();
                    boolean e10 = b02.e();
                    int g11 = U.g(V, number);
                    for (long j12 = 0; j11 != j12; j12 = 0) {
                        if (e10) {
                            e10 = false;
                            if (i10 == i13) {
                                number2++;
                            }
                            i11 = i13;
                        } else if (i10 == i13 && g11 == number2) {
                            e10 = i13;
                            i11 = e10;
                        } else {
                            if (i10 == -1) {
                                i11 = i13;
                                if (g11 == number2 - 1) {
                                    number2--;
                                    e10 = i11;
                                }
                            } else {
                                i11 = i13;
                            }
                            number2 += i10;
                        }
                        if (!e10) {
                            if (number2 == 13) {
                                number++;
                                if (number == 61) {
                                    V++;
                                    number = i11;
                                }
                                g11 = U.g(V, number);
                                number2 = i11;
                            } else if (number2 == 0) {
                                number--;
                                if (number == 0) {
                                    V--;
                                    number = 60;
                                }
                                number2 = 12;
                                g11 = U.g(V, number);
                            }
                        }
                        j11 -= i10;
                        i13 = i11;
                    }
                    h f10 = h.f(number2);
                    if (e10) {
                        f10 = f10.g();
                    }
                    return g(V, number, f10, g10, U);
                }
            } else {
                j11 = gt.c.i(j11, 60L);
            }
            long f11 = gt.c.f(((V * 60) + number) - 1, j11);
            int g12 = gt.c.g(gt.c.b(f11, 60));
            int d10 = gt.c.d(f11, 60) + 1;
            if (b02.e() && U.g(g12, d10) != b02.getNumber()) {
                b02 = h.f(b02.getNumber());
            }
            return g(g12, d10, b02, g10, U);
        }

        @Override // jt.m0
        /* renamed from: d */
        public long a(f fVar, f fVar2) {
            return e(fVar, fVar2, this.f40466a);
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
    private static class d implements c0 {

        /* renamed from: d  reason: collision with root package name */
        private final jt.p f40467d;

        /* renamed from: e  reason: collision with root package name */
        private final int f40468e;

        @Override // jt.z
        /* renamed from: b */
        public jt.p a(f fVar) {
            return this.f40467d;
        }

        @Override // jt.z
        /* renamed from: c */
        public jt.p h(f fVar) {
            return this.f40467d;
        }

        @Override // jt.c0
        /* renamed from: d */
        public int v(f fVar) {
            int i10 = this.f40468e;
            if (i10 != 0) {
                if (i10 != 1) {
                    if (i10 != 2) {
                        if (i10 == 3) {
                            return fVar.V();
                        }
                        throw new UnsupportedOperationException("Unknown element index: " + this.f40468e);
                    }
                    int number = fVar.b0().getNumber();
                    int a02 = fVar.a0();
                    if ((a02 > 0 && a02 < number) || fVar.b0().e()) {
                        return number + 1;
                    }
                    return number;
                }
                return fVar.Y();
            }
            return fVar.g();
        }

        @Override // jt.z
        /* renamed from: e */
        public Integer j(f fVar) {
            int lengthOfMonth;
            int i10 = this.f40468e;
            if (i10 != 0) {
                if (i10 != 1) {
                    if (i10 != 2) {
                        if (i10 == 3) {
                            net.time4j.calendar.d U = fVar.U();
                            lengthOfMonth = ((f) U.b(U.a())).V();
                        } else {
                            throw new UnsupportedOperationException("Unknown element index: " + this.f40468e);
                        }
                    } else if (fVar.isLeapYear()) {
                        lengthOfMonth = 13;
                    } else {
                        lengthOfMonth = 12;
                    }
                } else {
                    lengthOfMonth = fVar.lengthOfYear();
                }
            } else {
                lengthOfMonth = fVar.lengthOfMonth();
            }
            return Integer.valueOf(lengthOfMonth);
        }

        @Override // jt.z
        /* renamed from: f */
        public Integer p(f fVar) {
            if (this.f40468e == 3) {
                net.time4j.calendar.d U = fVar.U();
                return Integer.valueOf(((f) U.b(U.d())).V());
            }
            return 1;
        }

        @Override // jt.z
        /* renamed from: g */
        public Integer x(f fVar) {
            return Integer.valueOf(v(fVar));
        }

        public boolean i(f fVar, int i10) {
            if (i10 < 1) {
                return false;
            }
            int i11 = this.f40468e;
            if (i11 == 0) {
                if (i10 > 30) {
                    return false;
                }
                if (i10 == 30 && fVar.lengthOfMonth() != 30) {
                    return false;
                }
                return true;
            } else if (i11 == 1) {
                if (i10 > fVar.lengthOfYear()) {
                    return false;
                }
                return true;
            } else if (i11 == 2) {
                if (i10 > 12 && (i10 != 13 || fVar.a0() <= 0)) {
                    return false;
                }
                return true;
            } else if (i11 == 3) {
                net.time4j.calendar.d U = fVar.U();
                int V = ((f) U.b(U.d())).V();
                int V2 = ((f) U.b(U.a())).V();
                if (i10 < V || i10 > V2) {
                    return false;
                }
                return true;
            } else {
                throw new UnsupportedOperationException("Unknown element index: " + this.f40468e);
            }
        }

        @Override // jt.z
        /* renamed from: m */
        public boolean l(f fVar, Integer num) {
            if (num != null && i(fVar, num.intValue())) {
                return true;
            }
            return false;
        }

        @Override // jt.c0
        /* renamed from: n */
        public f k(f fVar, int i10, boolean z10) {
            int i11 = this.f40468e;
            boolean z11 = true;
            if (i11 != 0) {
                if (i11 != 1) {
                    boolean z12 = false;
                    if (i11 != 2) {
                        if (i11 == 3) {
                            if (i(fVar, i10)) {
                                return (f) f.e0(0).b(fVar, i10 - fVar.V());
                            }
                            throw new IllegalArgumentException("Sexagesimal cycle out of range: " + i10);
                        }
                        throw new UnsupportedOperationException("Unknown element index: " + this.f40468e);
                    } else if (i(fVar, i10)) {
                        int a02 = fVar.a0();
                        if (a02 > 0 && a02 < i10) {
                            if (i10 != a02 + 1) {
                                z11 = false;
                            }
                            i10--;
                            z12 = z11;
                        }
                        h f10 = h.f(i10);
                        if (z12) {
                            f10 = f10.g();
                        }
                        return e.i(fVar, f10);
                    } else {
                        throw new IllegalArgumentException("Ordinal month out of range: " + i10);
                    }
                } else if (!z10 && (i10 < 1 || i10 > fVar.lengthOfYear())) {
                    throw new IllegalArgumentException("Day of year out of range: " + i10);
                } else {
                    return fVar.U().b((fVar.j() + i10) - fVar.Y());
                }
            } else if (z10) {
                return fVar.U().b((fVar.j() + i10) - fVar.g());
            } else if (i10 >= 1 && i10 <= 30 && (i10 != 30 || fVar.lengthOfMonth() >= 30)) {
                return fVar.U().e(fVar.V(), fVar.f0().getNumber(), fVar.b0(), i10, (fVar.j() + i10) - fVar.g());
            } else {
                throw new IllegalArgumentException("Day of month out of range: " + i10);
            }
        }

        @Override // jt.z
        /* renamed from: o */
        public f w(f fVar, Integer num, boolean z10) {
            if (num != null) {
                return k(fVar, num.intValue(), z10);
            }
            throw new IllegalArgumentException("Missing element value.");
        }

        private d(int i10, jt.p pVar) {
            this.f40468e = i10;
            this.f40467d = pVar;
        }
    }

    /* JADX INFO: Access modifiers changed from: private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
    public static class e implements z {

        /* renamed from: d  reason: collision with root package name */
        private final jt.p f40469d;

        static f i(f fVar, h hVar) {
            net.time4j.calendar.d U = fVar.U();
            int g10 = fVar.g();
            int number = fVar.f0().getNumber();
            if (g10 <= 29) {
                return U.e(fVar.V(), number, hVar, g10, U.t(fVar.V(), number, hVar, g10));
            }
            long t10 = U.t(fVar.V(), number, hVar, 1);
            int min = Math.min(g10, U.b(t10).lengthOfMonth());
            return U.e(fVar.V(), number, hVar, min, (t10 + min) - 1);
        }

        @Override // jt.z
        /* renamed from: b */
        public jt.p a(f fVar) {
            return this.f40469d;
        }

        @Override // jt.z
        /* renamed from: c */
        public jt.p h(f fVar) {
            return this.f40469d;
        }

        @Override // jt.z
        /* renamed from: d */
        public h j(f fVar) {
            return h.f(12);
        }

        @Override // jt.z
        /* renamed from: e */
        public h p(f fVar) {
            return h.f(1);
        }

        @Override // jt.z
        /* renamed from: f */
        public h x(f fVar) {
            return fVar.b0();
        }

        @Override // jt.z
        /* renamed from: g */
        public boolean l(f fVar, h hVar) {
            if (hVar != null) {
                if (!hVar.e() || hVar.getNumber() == fVar.a0()) {
                    return true;
                }
                return false;
            }
            return false;
        }

        @Override // jt.z
        /* renamed from: m */
        public f w(f fVar, h hVar, boolean z10) {
            if (l(fVar, hVar)) {
                return i(fVar, hVar);
            }
            throw new IllegalArgumentException("Invalid month: " + hVar);
        }

        private e(jt.p pVar) {
            this.f40469d = pVar;
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public f(int i10, int i11, h hVar, int i12, long j10) {
        this.f40458d = i10;
        this.f40459e = i11;
        this.f40460i = hVar;
        this.f40461o = i12;
        this.f40462p = j10;
        this.f40463q = U().g(i10, i11);
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public static z W(jt.p pVar) {
        return new d(3, pVar);
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public static z X() {
        return new d(0, null);
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public static z Z() {
        return new d(1, null);
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public static z c0(jt.p pVar) {
        return new d(2, pVar);
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public static z d0(jt.p pVar) {
        return new e(pVar);
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public static m0 e0(int i10) {
        return new c(i10);
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public static z g0(jt.p pVar) {
        return new b(pVar, false);
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public abstract net.time4j.calendar.d U();

    /* JADX INFO: Access modifiers changed from: package-private */
    public int V() {
        return this.f40458d;
    }

    public int Y() {
        return (int) ((this.f40462p - U().q(this.f40458d, this.f40459e)) + 1);
    }

    int a0() {
        return this.f40463q;
    }

    public h b0() {
        return this.f40460i;
    }

    @Override // jt.m
    public boolean equals(Object obj) {
        if (obj == this) {
            return true;
        }
        if (obj != null && getClass() == obj.getClass()) {
            f fVar = (f) obj;
            if (this.f40458d == fVar.f40458d && this.f40459e == fVar.f40459e && this.f40461o == fVar.f40461o && this.f40460i.equals(fVar.f40460i) && this.f40462p == fVar.f40462p) {
                return true;
            }
        }
        return false;
    }

    public net.time4j.calendar.c f0() {
        return net.time4j.calendar.c.r(this.f40459e);
    }

    public int g() {
        return this.f40461o;
    }

    @Override // jt.m
    public int hashCode() {
        long j10 = this.f40462p;
        return (int) (j10 ^ (j10 >>> 32));
    }

    public boolean isLeapYear() {
        if (this.f40463q > 0) {
            return true;
        }
        return false;
    }

    @Override // jt.m, jt.g
    public long j() {
        return this.f40462p;
    }

    public int lengthOfMonth() {
        return (int) (((this.f40461o + U().p(this.f40462p + 1)) - this.f40462p) - 1);
    }

    public int lengthOfYear() {
        int i10 = this.f40458d;
        int i11 = 1;
        int i12 = this.f40459e + 1;
        if (i12 > 60) {
            i10++;
        } else {
            i11 = i12;
        }
        return (int) (U().q(i10, i11) - U().q(this.f40458d, this.f40459e));
    }

    public String toString() {
        StringBuilder sb2 = new StringBuilder();
        String value = ((kt.c) getClass().getAnnotation(kt.c.class)).value();
        if (value.equals("dangi")) {
            value = "korean";
        }
        sb2.append(value);
        sb2.append('[');
        sb2.append(f0().i(Locale.ROOT));
        sb2.append('(');
        sb2.append(q(net.time4j.calendar.b.f40444a));
        sb2.append(")-");
        sb2.append(this.f40460i.toString());
        sb2.append('-');
        if (this.f40461o < 10) {
            sb2.append('0');
        }
        sb2.append(this.f40461o);
        sb2.append(']');
        return sb2.toString();
    }
}

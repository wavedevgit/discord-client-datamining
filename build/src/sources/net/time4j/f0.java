package net.time4j;

import com.discord.chat.presentation.message.view.MediaImageViewKt;
import com.discord.misc.utilities.chat_view_types.ChatViewRecyclerTypes;
import java.io.InvalidObjectException;
import java.io.ObjectInputStream;
import java.util.Collections;
import java.util.EnumSet;
import java.util.HashMap;
import java.util.Locale;
import java.util.Map;
import mt.h0;
import net.time4j.f;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public final class f0 extends mt.m implements kt.a, mt.d0, nt.h {
    public static final net.time4j.c A;
    public static final net.time4j.c B;
    public static final c0 C;
    public static final c0 D;
    public static final l0 E;
    public static final l0 F;
    public static final c0 G;
    public static final l0 H;
    public static final l0 I;
    public static final d0 J;
    private static final Map K;
    private static final mt.k L;
    private static final mt.h0 M;
    private static final long serialVersionUID = -6698431452072325688L;

    /* renamed from: w  reason: collision with root package name */
    private static final int[] f40488w;

    /* renamed from: x  reason: collision with root package name */
    private static final int[] f40489x;

    /* renamed from: y  reason: collision with root package name */
    static final mt.p f40490y;

    /* renamed from: z  reason: collision with root package name */
    public static final net.time4j.e f40491z;

    /* renamed from: d  reason: collision with root package name */
    private final transient int f40492d;

    /* renamed from: e  reason: collision with root package name */
    private final transient byte f40493e;

    /* renamed from: i  reason: collision with root package name */
    private final transient byte f40494i;

    /* renamed from: o  reason: collision with root package name */
    static final f0 f40480o = new f0(-999999999, 1, 1);

    /* renamed from: p  reason: collision with root package name */
    static final f0 f40481p = new f0(999999999, 12, 31);

    /* renamed from: q  reason: collision with root package name */
    static final Integer f40482q = -999999999;

    /* renamed from: r  reason: collision with root package name */
    static final Integer f40483r = 999999999;

    /* renamed from: s  reason: collision with root package name */
    private static final Integer f40484s = 1;

    /* renamed from: t  reason: collision with root package name */
    private static final Integer f40485t = 12;

    /* renamed from: u  reason: collision with root package name */
    private static final Integer f40486u = 365;

    /* renamed from: v  reason: collision with root package name */
    private static final Integer f40487v = 366;

    /* JADX INFO: Access modifiers changed from: package-private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
    public static /* synthetic */ class a {

        /* renamed from: a  reason: collision with root package name */
        static final /* synthetic */ int[] f40495a;

        /* renamed from: b  reason: collision with root package name */
        static final /* synthetic */ int[] f40496b;

        static {
            int[] iArr = new int[n0.values().length];
            f40496b = iArr;
            try {
                iArr[n0.Q1.ordinal()] = 1;
            } catch (NoSuchFieldError unused) {
            }
            try {
                f40496b[n0.Q2.ordinal()] = 2;
            } catch (NoSuchFieldError unused2) {
            }
            int[] iArr2 = new int[net.time4j.f.values().length];
            f40495a = iArr2;
            try {
                iArr2[net.time4j.f.f40466d.ordinal()] = 1;
            } catch (NoSuchFieldError unused3) {
            }
            try {
                f40495a[net.time4j.f.f40467e.ordinal()] = 2;
            } catch (NoSuchFieldError unused4) {
            }
            try {
                f40495a[net.time4j.f.f40468i.ordinal()] = 3;
            } catch (NoSuchFieldError unused5) {
            }
            try {
                f40495a[net.time4j.f.f40469o.ordinal()] = 4;
            } catch (NoSuchFieldError unused6) {
            }
            try {
                f40495a[net.time4j.f.f40470p.ordinal()] = 5;
            } catch (NoSuchFieldError unused7) {
            }
            try {
                f40495a[net.time4j.f.f40471q.ordinal()] = 6;
            } catch (NoSuchFieldError unused8) {
            }
            try {
                f40495a[net.time4j.f.f40472r.ordinal()] = 7;
            } catch (NoSuchFieldError unused9) {
            }
            try {
                f40495a[net.time4j.f.f40473s.ordinal()] = 8;
            } catch (NoSuchFieldError unused10) {
            }
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
    private static class b implements mt.z {
        private b() {
        }

        @Override // mt.z
        /* renamed from: b */
        public mt.p a(f0 f0Var) {
            return null;
        }

        @Override // mt.z
        /* renamed from: c */
        public mt.p h(f0 f0Var) {
            return null;
        }

        @Override // mt.z
        /* renamed from: d */
        public f0 l(f0 f0Var) {
            return f0.f40481p;
        }

        @Override // mt.z
        /* renamed from: e */
        public f0 r(f0 f0Var) {
            return f0.f40480o;
        }

        @Override // mt.z
        /* renamed from: f */
        public f0 z(f0 f0Var) {
            return f0Var;
        }

        @Override // mt.z
        /* renamed from: g */
        public boolean q(f0 f0Var, f0 f0Var2) {
            return f0Var2 != null;
        }

        @Override // mt.z
        /* renamed from: i */
        public f0 x(f0 f0Var, f0 f0Var2, boolean z10) {
            if (f0Var2 != null) {
                return f0Var2;
            }
            throw new IllegalArgumentException("Missing date value.");
        }

        /* synthetic */ b(a aVar) {
            this();
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
    private static class c implements mt.z {

        /* renamed from: d  reason: collision with root package name */
        private final String f40497d;

        /* renamed from: e  reason: collision with root package name */
        private final Class f40498e;

        /* renamed from: i  reason: collision with root package name */
        private final Enum f40499i;

        /* renamed from: o  reason: collision with root package name */
        private final Enum f40500o;

        /* renamed from: p  reason: collision with root package name */
        private final int f40501p;

        c(String str, Class cls, Enum r32, Enum r42, int i10) {
            this.f40497d = str;
            this.f40498e = cls;
            this.f40499i = r32;
            this.f40500o = r42;
            this.f40501p = i10;
        }

        private mt.p b() {
            switch (this.f40501p) {
                case 101:
                    return f0.F;
                case 102:
                    return null;
                case 103:
                    return f0.I;
                default:
                    throw new UnsupportedOperationException(this.f40497d);
            }
        }

        static c j(mt.p pVar) {
            return new c(pVar.name(), pVar.getType(), (Enum) pVar.A(), (Enum) pVar.f(), ((p) pVar).J());
        }

        @Override // mt.z
        /* renamed from: c */
        public mt.p a(f0 f0Var) {
            return b();
        }

        @Override // mt.z
        /* renamed from: d */
        public mt.p h(f0 f0Var) {
            return b();
        }

        @Override // mt.z
        /* renamed from: e */
        public Enum l(f0 f0Var) {
            if (this.f40501p == 102 && f0Var.f40492d == 999999999 && f0Var.f40493e == 12 && f0Var.f40494i >= 27) {
                return (Enum) this.f40498e.cast(y0.FRIDAY);
            }
            return this.f40500o;
        }

        @Override // mt.z
        /* renamed from: f */
        public Enum r(f0 f0Var) {
            return this.f40499i;
        }

        @Override // mt.z
        /* renamed from: g */
        public Enum z(f0 f0Var) {
            Object f10;
            switch (this.f40501p) {
                case 101:
                    f10 = b0.f(f0Var.f40493e);
                    break;
                case 102:
                    f10 = f0Var.A0();
                    break;
                case 103:
                    f10 = n0.f(((f0Var.f40493e - 1) / 3) + 1);
                    break;
                default:
                    throw new UnsupportedOperationException(this.f40497d);
            }
            return (Enum) this.f40498e.cast(f10);
        }

        @Override // mt.z
        /* renamed from: i */
        public boolean q(f0 f0Var, Enum r52) {
            if (r52 == null) {
                return false;
            }
            if (this.f40501p == 102 && f0Var.f40492d == 999999999) {
                try {
                    x(f0Var, r52, false);
                    return true;
                } catch (IllegalArgumentException unused) {
                    return false;
                }
            }
            return true;
        }

        @Override // mt.z
        /* renamed from: k */
        public f0 x(f0 f0Var, Enum r32, boolean z10) {
            if (r32 != null) {
                switch (this.f40501p) {
                    case 101:
                        return f0Var.T0(((b0) b0.class.cast(r32)).d());
                    case 102:
                        return f0Var.Q0((y0) y0.class.cast(r32));
                    case 103:
                        return (f0) f0Var.K(((n0) n0.class.cast(r32)).d() - (((f0Var.f40493e - 1) / 3) + 1), net.time4j.f.f40470p);
                    default:
                        throw new UnsupportedOperationException(this.f40497d);
                }
            }
            throw new IllegalArgumentException("Missing element value.");
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
    private static class d implements mt.c0 {

        /* renamed from: d  reason: collision with root package name */
        private final mt.p f40502d;

        /* renamed from: e  reason: collision with root package name */
        private final String f40503e;

        /* renamed from: i  reason: collision with root package name */
        private final int f40504i;

        d(mt.p pVar) {
            this(((s) pVar).J(), pVar);
        }

        private mt.p b() {
            switch (this.f40504i) {
                case 14:
                    return f0.E;
                case 15:
                    return f0.F;
                case 16:
                case 17:
                case ChatViewRecyclerTypes.EPHEMERAL_INDICATION /* 18 */:
                case ChatViewRecyclerTypes.INTERACTION_STATUS /* 19 */:
                    return null;
                default:
                    throw new UnsupportedOperationException(this.f40503e);
            }
        }

        private static int g(f0 f0Var) {
            int i10 = ((f0Var.f40493e - 1) / 3) + 1;
            if (i10 == 1) {
                if (kt.b.e(f0Var.f40492d)) {
                    return 91;
                }
                return 90;
            } else if (i10 == 2) {
                return 91;
            } else {
                return 92;
            }
        }

        private int i(f0 f0Var) {
            int d10 = kt.b.d(f0Var.f40492d, f0Var.f40493e);
            byte b10 = f0Var.f40494i;
            int i10 = 0;
            while (true) {
                int i11 = i10 + 1;
                if ((i11 * 7) + b10 <= d10) {
                    i10 = i11;
                } else {
                    return (((b10 + (i10 * 7)) - 1) / 7) + 1;
                }
            }
        }

        @Override // mt.z
        /* renamed from: c */
        public mt.p a(f0 f0Var) {
            return b();
        }

        @Override // mt.z
        /* renamed from: d */
        public mt.p h(f0 f0Var) {
            return b();
        }

        @Override // mt.c0
        /* renamed from: e */
        public int w(f0 f0Var) {
            switch (this.f40504i) {
                case 14:
                    return f0Var.f40492d;
                case 15:
                    return f0Var.f40493e;
                case 16:
                    return f0Var.f40494i;
                case 17:
                    return f0Var.B0();
                case ChatViewRecyclerTypes.EPHEMERAL_INDICATION /* 18 */:
                    return f0Var.z0();
                case ChatViewRecyclerTypes.INTERACTION_STATUS /* 19 */:
                    return ((f0Var.f40494i - 1) / 7) + 1;
                default:
                    throw new UnsupportedOperationException(this.f40503e);
            }
        }

        @Override // mt.z
        /* renamed from: f */
        public Integer l(f0 f0Var) {
            switch (this.f40504i) {
                case 14:
                    return f0.f40483r;
                case 15:
                    return f0.f40485t;
                case 16:
                    return Integer.valueOf(kt.b.d(f0Var.f40492d, f0Var.f40493e));
                case 17:
                    return kt.b.e(f0Var.f40492d) ? f0.f40487v : f0.f40486u;
                case ChatViewRecyclerTypes.EPHEMERAL_INDICATION /* 18 */:
                    return Integer.valueOf(g(f0Var));
                case ChatViewRecyclerTypes.INTERACTION_STATUS /* 19 */:
                    return Integer.valueOf(i(f0Var));
                default:
                    throw new UnsupportedOperationException(this.f40503e);
            }
        }

        @Override // mt.z
        /* renamed from: j */
        public Integer r(f0 f0Var) {
            switch (this.f40504i) {
                case 14:
                    return f0.f40482q;
                case 15:
                case 16:
                case 17:
                case ChatViewRecyclerTypes.EPHEMERAL_INDICATION /* 18 */:
                case ChatViewRecyclerTypes.INTERACTION_STATUS /* 19 */:
                    return f0.f40484s;
                default:
                    throw new UnsupportedOperationException(this.f40503e);
            }
        }

        @Override // mt.z
        /* renamed from: k */
        public Integer z(f0 f0Var) {
            return Integer.valueOf(w(f0Var));
        }

        public boolean m(f0 f0Var, int i10) {
            int i11;
            switch (this.f40504i) {
                case 14:
                    if (i10 < -999999999 || i10 > 999999999) {
                        return false;
                    }
                    return true;
                case 15:
                    if (i10 < 1 || i10 > 12) {
                        return false;
                    }
                    return true;
                case 16:
                    if (i10 < 1 || i10 > kt.b.d(f0Var.f40492d, f0Var.f40493e)) {
                        return false;
                    }
                    return true;
                case 17:
                    if (i10 >= 1) {
                        if (kt.b.e(f0Var.f40492d)) {
                            i11 = 366;
                        } else {
                            i11 = 365;
                        }
                        if (i10 <= i11) {
                            return true;
                        }
                    }
                    return false;
                case ChatViewRecyclerTypes.EPHEMERAL_INDICATION /* 18 */:
                    if (i10 < 1 || i10 > g(f0Var)) {
                        return false;
                    }
                    return true;
                case ChatViewRecyclerTypes.INTERACTION_STATUS /* 19 */:
                    if (i10 < 1 || i10 > i(f0Var)) {
                        return false;
                    }
                    return true;
                default:
                    throw new UnsupportedOperationException(this.f40503e);
            }
        }

        @Override // mt.z
        /* renamed from: n */
        public boolean q(f0 f0Var, Integer num) {
            if (num != null && m(f0Var, num.intValue())) {
                return true;
            }
            return false;
        }

        @Override // mt.c0
        /* renamed from: p */
        public f0 o(f0 f0Var, int i10, boolean z10) {
            if (!z10) {
                switch (this.f40504i) {
                    case 14:
                        return f0Var.U0(i10);
                    case 15:
                        return f0Var.T0(i10);
                    case 16:
                        return f0Var.P0(i10);
                    case 17:
                        return f0Var.R0(i10);
                    case ChatViewRecyclerTypes.EPHEMERAL_INDICATION /* 18 */:
                        if (i10 >= 1 && i10 <= g(f0Var)) {
                            return (f0) f0Var.K(i10 - f0Var.z0(), net.time4j.f.f40473s);
                        }
                        throw new IllegalArgumentException("Out of range: " + i10);
                    case ChatViewRecyclerTypes.INTERACTION_STATUS /* 19 */:
                        if (!z10 && (i10 < 1 || i10 > i(f0Var))) {
                            throw new IllegalArgumentException("Out of range: " + i10);
                        }
                        return (f0) f0Var.K(i10 - (((f0Var.f40494i - 1) / 7) + 1), net.time4j.f.f40472r);
                    default:
                        throw new UnsupportedOperationException(this.f40503e);
                }
            }
            return (f0) f0Var.K(kt.c.l(i10, w(f0Var)), (u) f0.M.N(this.f40502d));
        }

        @Override // mt.z
        /* renamed from: s */
        public f0 x(f0 f0Var, Integer num, boolean z10) {
            if (num != null) {
                return o(f0Var, num.intValue(), z10);
            }
            throw new IllegalArgumentException("Missing element value.");
        }

        d(int i10, mt.p pVar) {
            this.f40502d = pVar;
            this.f40503e = pVar.name();
            this.f40504i = i10;
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
    private static class e implements mt.u {

        /* renamed from: d  reason: collision with root package name */
        private static final int f40505d = kt.b.i(kt.b.l(mt.a0.MODIFIED_JULIAN_DATE.q(kt.c.b(System.currentTimeMillis(), 86400000), mt.a0.UNIX))) + 20;

        private e() {
        }

        private static void e(mt.q qVar, String str) {
            mt.n0 n0Var = mt.n0.ERROR_MESSAGE;
            if (qVar.B(n0Var, str)) {
                qVar.E(n0Var, str);
            }
        }

        private static boolean g(mt.q qVar, int i10, int i11, int i12) {
            if (i12 >= 1 && (i12 <= 28 || i12 <= kt.b.d(i10, i11))) {
                return true;
            }
            e(qVar, "DAY_OF_MONTH out of range: " + i12);
            return false;
        }

        private static boolean i(mt.q qVar, boolean z10, n0 n0Var, int i10) {
            int i11 = a.f40496b[n0Var.ordinal()];
            int i12 = 91;
            if (i11 != 1) {
                if (i11 != 2) {
                    i12 = 92;
                }
            } else if (!z10) {
                i12 = 90;
            }
            if (i10 >= 1 && i10 <= i12) {
                return true;
            }
            e(qVar, "DAY_OF_QUARTER out of range: " + i10);
            return false;
        }

        /* JADX WARN: Code restructure failed: missing block: B:9:0x000f, code lost:
            if (r4 > r1) goto L11;
         */
        /*
            Code decompiled incorrectly, please refer to instructions dump.
            To view partially-correct add '--show-bad-code' argument
        */
        private static boolean j(mt.q r2, int r3, int r4) {
            /*
                r0 = 1
                if (r4 < r0) goto L13
                r1 = 365(0x16d, float:5.11E-43)
                if (r4 <= r1) goto L12
                boolean r3 = kt.b.e(r3)
                if (r3 == 0) goto Lf
                r1 = 366(0x16e, float:5.13E-43)
            Lf:
                if (r4 <= r1) goto L12
                goto L13
            L12:
                return r0
            L13:
                java.lang.StringBuilder r3 = new java.lang.StringBuilder
                r3.<init>()
                java.lang.String r0 = "DAY_OF_YEAR out of range: "
                r3.append(r0)
                r3.append(r4)
                java.lang.String r3 = r3.toString()
                e(r2, r3)
                r2 = 0
                return r2
            */
            throw new UnsupportedOperationException("Method not decompiled: net.time4j.f0.e.j(mt.q, int, int):boolean");
        }

        private static boolean k(mt.q qVar, int i10) {
            if (i10 >= 1 && i10 <= 12) {
                return true;
            }
            e(qVar, "MONTH_OF_YEAR out of range: " + i10);
            return false;
        }

        private static boolean n(mt.q qVar, int i10) {
            if (i10 >= -999999999 && i10 <= 999999999) {
                return true;
            }
            e(qVar, "YEAR out of range: " + i10);
            return false;
        }

        @Override // mt.u
        public mt.f0 a() {
            return mt.f0.f39404a;
        }

        @Override // mt.u
        public mt.x b() {
            return null;
        }

        @Override // mt.u
        public int c() {
            return f40505d;
        }

        @Override // mt.u
        /* renamed from: d */
        public f0 m(mt.q qVar, mt.d dVar, boolean z10, boolean z11) {
            y0 y0Var;
            l0 l0Var;
            int j10;
            mt.p pVar = f0.f40490y;
            if (qVar.q(pVar)) {
                return (f0) qVar.o(pVar);
            }
            int j11 = qVar.j(f0.A);
            if (j11 != Integer.MIN_VALUE) {
                l0 l0Var2 = f0.E;
                int j12 = qVar.j(l0Var2);
                if (j12 == Integer.MIN_VALUE) {
                    mt.p pVar2 = f0.D;
                    if (qVar.q(pVar2)) {
                        j12 = ((b0) qVar.o(pVar2)).d();
                    }
                }
                if (j12 != Integer.MIN_VALUE && (j10 = qVar.j((l0Var = f0.F))) != Integer.MIN_VALUE) {
                    if (z10) {
                        return (f0) ((f0) f0.H0(j11, 1, 1).F(l0Var2.t(Integer.valueOf(j12)))).F(l0Var.t(Integer.valueOf(j10)));
                    }
                    if (n(qVar, j11) && k(qVar, j12) && g(qVar, j11, j12, j10)) {
                        return f0.I0(j11, j12, j10, false);
                    }
                    return null;
                }
                l0 l0Var3 = f0.H;
                int j13 = qVar.j(l0Var3);
                if (j13 != Integer.MIN_VALUE) {
                    if (z10) {
                        return (f0) f0.G0(j11, 1).F(l0Var3.t(Integer.valueOf(j13)));
                    }
                    if (n(qVar, j11) && j(qVar, j11, j13)) {
                        return f0.G0(j11, j13);
                    }
                    return null;
                }
                int j14 = qVar.j(f0.I);
                if (j14 != Integer.MIN_VALUE) {
                    mt.p pVar3 = f0.C;
                    if (qVar.q(pVar3)) {
                        n0 n0Var = (n0) qVar.o(pVar3);
                        boolean e10 = kt.b.e(j11);
                        int i10 = (e10 ? 91 : 90) + j14;
                        if (n0Var == n0.Q1) {
                            i10 = j14;
                        } else if (n0Var == n0.Q3) {
                            i10 += 91;
                        } else if (n0Var == n0.Q4) {
                            i10 += 183;
                        }
                        if (z10) {
                            return (f0) f0.G0(j11, 1).F(l0Var3.t(Integer.valueOf(i10)));
                        }
                        if (n(qVar, j11) && i(qVar, e10, n0Var, j14)) {
                            return f0.G0(j11, i10);
                        }
                        return null;
                    }
                }
            }
            int j15 = qVar.j(f0.B);
            if (j15 != Integer.MIN_VALUE) {
                a1 a1Var = a1.f40260x;
                if (qVar.q(a1Var.n())) {
                    int intValue = ((Integer) qVar.o(a1Var.n())).intValue();
                    mt.p pVar4 = f0.G;
                    if (qVar.q(pVar4)) {
                        y0Var = (y0) qVar.o(pVar4);
                    } else {
                        if (qVar.q(a1Var.i())) {
                            y0Var = (y0) qVar.o(a1Var.i());
                        }
                        return null;
                    }
                    if (j15 >= -999999999 && j15 <= 999999999) {
                        f0 K0 = f0.K0(j15, intValue, y0Var, false);
                        if (K0 == null) {
                            e(qVar, f0.V0(intValue));
                        }
                        return K0;
                    }
                    e(qVar, f0.W0(j15));
                    return null;
                }
            }
            mt.a0 a0Var = mt.a0.MODIFIED_JULIAN_DATE;
            if (qVar.q(a0Var)) {
                return (f0) f0.L.b(mt.a0.UTC.q(((Long) qVar.o(a0Var)).longValue(), a0Var));
            }
            if (qVar instanceof kt.f) {
                return ((i0) i0.S().m(qVar, dVar, z10, z11)).V();
            }
            return null;
        }

        @Override // mt.u
        public String l(mt.y yVar, Locale locale) {
            return nt.b.r(nt.e.d(yVar.a()), locale);
        }

        /* synthetic */ e(a aVar) {
            this();
        }

        @Override // mt.u
        /* renamed from: f */
        public mt.o h(f0 f0Var, mt.d dVar) {
            return f0Var;
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
    private static class f implements mt.k {
        private f() {
        }

        @Override // mt.k
        public long a() {
            return 365241779741L;
        }

        @Override // mt.k
        public long d() {
            return -365243219892L;
        }

        @Override // mt.k
        /* renamed from: e */
        public long c(f0 f0Var) {
            return mt.a0.UTC.q(kt.b.k(f0Var), mt.a0.MODIFIED_JULIAN_DATE);
        }

        @Override // mt.k
        /* renamed from: f */
        public f0 b(long j10) {
            if (j10 == -365243219892L) {
                return f0.f40480o;
            }
            if (j10 == 365241779741L) {
                return f0.f40481p;
            }
            long l10 = kt.b.l(mt.a0.MODIFIED_JULIAN_DATE.q(j10, mt.a0.UTC));
            return f0.H0(kt.b.i(l10), kt.b.h(l10), kt.b.g(l10));
        }

        /* synthetic */ f(a aVar) {
            this();
        }
    }

    static {
        f40488w = r7;
        f40489x = r8;
        int[] iArr = {31, 59, 90, 120, 151, 181, MediaImageViewKt.OBSCURED_IMAGE_MIN_HEIGHT, 243, 273, 304, 334, 365};
        int[] iArr2 = {31, 60, 91, 121, 152, 182, 213, 244, 274, 305, 335, 366};
        h hVar = h.f40540d;
        f40490y = hVar;
        f40491z = hVar;
        s G2 = s.G("YEAR", 14, -999999999, 999999999, 'u');
        A = G2;
        b1 b1Var = b1.f40314r;
        B = b1Var;
        p pVar = new p("QUARTER_OF_YEAR", n0.class, n0.Q1, n0.Q4, 103, 'Q');
        C = pVar;
        p pVar2 = new p("MONTH_OF_YEAR", b0.class, b0.JANUARY, b0.DECEMBER, 101, 'M');
        D = pVar2;
        s G3 = s.G("MONTH_AS_NUMBER", 15, 1, 12, 'M');
        E = G3;
        s G4 = s.G("DAY_OF_MONTH", 16, 1, 31, 'd');
        F = G4;
        p pVar3 = new p("DAY_OF_WEEK", y0.class, y0.MONDAY, y0.SUNDAY, 102, 'E');
        G = pVar3;
        s G5 = s.G("DAY_OF_YEAR", 17, 1, 365, 'D');
        H = G5;
        s G6 = s.G("DAY_OF_QUARTER", 18, 1, 92, (char) 0);
        I = G6;
        z0 z0Var = z0.f40857o;
        J = z0Var;
        HashMap hashMap = new HashMap();
        t0(hashMap, hVar);
        t0(hashMap, G2);
        t0(hashMap, b1Var);
        t0(hashMap, pVar);
        t0(hashMap, pVar2);
        t0(hashMap, G3);
        t0(hashMap, G4);
        t0(hashMap, pVar3);
        t0(hashMap, G5);
        t0(hashMap, G6);
        t0(hashMap, z0Var);
        K = Collections.unmodifiableMap(hashMap);
        f fVar = new f(null);
        L = fVar;
        h0.b j10 = h0.b.j(u.class, f0.class, new e(null), fVar);
        b bVar = new b(null);
        net.time4j.f fVar2 = net.time4j.f.f40473s;
        h0.b e10 = j10.e(hVar, bVar, fVar2).e(G2, new d(G2), net.time4j.f.f40469o).e(b1Var, b1.K(f0.class), x0.f40836d).e(pVar, c.j(pVar), net.time4j.f.f40470p);
        c j11 = c.j(pVar2);
        net.time4j.f fVar3 = net.time4j.f.f40471q;
        h0.b e11 = e10.e(pVar2, j11, fVar3).e(G3, new d(G3), fVar3).e(G4, new d(G4), fVar2).e(pVar3, c.j(pVar3), fVar2).e(G5, new d(G5), fVar2).e(G6, new d(G6), fVar2).e(z0Var, new d(19, z0Var), net.time4j.f.f40472r);
        O0(e11);
        N0(e11);
        M = e11.h();
    }

    private f0(int i10, int i11, int i12) {
        this.f40492d = i10;
        this.f40493e = (byte) i11;
        this.f40494i = (byte) i12;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public static Object F0(String str) {
        return K.get(str);
    }

    public static f0 G0(int i10, int i11) {
        int[] iArr;
        int i12;
        if (i11 >= 1) {
            if (i11 <= 31) {
                return H0(i10, 1, i11);
            }
            if (kt.b.e(i10)) {
                iArr = f40489x;
            } else {
                iArr = f40488w;
            }
            if (i11 > iArr[6]) {
                i12 = 7;
            } else {
                i12 = 1;
            }
            while (i12 < 12) {
                if (i11 <= iArr[i12]) {
                    return I0(i10, i12 + 1, i11 - iArr[i12 - 1], false);
                }
                i12++;
            }
            throw new IllegalArgumentException("Day of year out of range: " + i11);
        }
        throw new IllegalArgumentException("Day of year out of range: " + i11);
    }

    public static f0 H0(int i10, int i11, int i12) {
        return I0(i10, i11, i12, true);
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static f0 I0(int i10, int i11, int i12, boolean z10) {
        if (z10) {
            kt.b.a(i10, i11, i12);
        }
        return new f0(i10, i11, i12);
    }

    public static f0 J0(int i10, int i11, y0 y0Var) {
        return K0(i10, i11, y0Var, true);
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static f0 K0(int i10, int i11, y0 y0Var, boolean z10) {
        int i12;
        if (i11 >= 1 && i11 <= 53) {
            if (z10 && (i10 < f40482q.intValue() || i10 > f40483r.intValue())) {
                throw new IllegalArgumentException(W0(i10));
            }
            int d10 = y0.h(kt.b.c(i10, 1, 1)).d();
            if (d10 <= 4) {
                i12 = 2 - d10;
            } else {
                i12 = 9 - d10;
            }
            int d11 = ((i12 + ((i11 - 1) * 7)) + y0Var.d()) - 1;
            int i13 = 365;
            if (d11 <= 0) {
                i10--;
                if (kt.b.e(i10)) {
                    i13 = 366;
                }
                d11 += i13;
            } else {
                if (kt.b.e(i10)) {
                    i13 = 366;
                }
                if (d11 > i13) {
                    d11 -= i13;
                    i10++;
                }
            }
            f0 G0 = G0(i10, d11);
            if (i11 == 53 && G0.E0() != 53) {
                if (!z10) {
                    return null;
                }
                throw new IllegalArgumentException(V0(i11));
            }
            return G0;
        } else if (!z10) {
            return null;
        } else {
            throw new IllegalArgumentException(V0(i11));
        }
    }

    public static f0 L0(int i10, b0 b0Var, int i11) {
        return I0(i10, b0Var.d(), i11, true);
    }

    public static f0 M0(long j10, mt.a0 a0Var) {
        return (f0) L.b(mt.a0.UTC.q(j10, a0Var));
    }

    private static void N0(h0.b bVar) {
        for (mt.s sVar : kt.d.c().g(mt.s.class)) {
            if (sVar.d(f0.class)) {
                bVar.f(sVar);
            }
        }
        bVar.f(new w0());
    }

    private static void O0(h0.b bVar) {
        EnumSet enumSet;
        EnumSet range = EnumSet.range(net.time4j.f.f40466d, net.time4j.f.f40471q);
        EnumSet range2 = EnumSet.range(net.time4j.f.f40472r, net.time4j.f.f40473s);
        net.time4j.f[] values = net.time4j.f.values();
        int length = values.length;
        int i10 = 0;
        while (i10 < length) {
            net.time4j.f fVar = values[i10];
            f.j jVar = new f.j(fVar);
            double length2 = fVar.getLength();
            if (fVar.compareTo(net.time4j.f.f40472r) < 0) {
                enumSet = range;
            } else {
                enumSet = range2;
            }
            h0.b bVar2 = bVar;
            bVar2.g(fVar, jVar, length2, enumSet);
            i10++;
            bVar = bVar2;
        }
    }

    /* JADX INFO: Access modifiers changed from: private */
    public f0 P0(int i10) {
        if (this.f40494i == i10) {
            return this;
        }
        return H0(this.f40492d, this.f40493e, i10);
    }

    /* JADX INFO: Access modifiers changed from: private */
    public f0 Q0(y0 y0Var) {
        y0 A0 = A0();
        if (A0 == y0Var) {
            return this;
        }
        return (f0) L.b(kt.c.f(C0(), y0Var.d() - A0.d()));
    }

    /* JADX INFO: Access modifiers changed from: private */
    public f0 R0(int i10) {
        if (B0() == i10) {
            return this;
        }
        return G0(this.f40492d, i10);
    }

    /* JADX INFO: Access modifiers changed from: private */
    public f0 T0(int i10) {
        if (this.f40493e == i10) {
            return this;
        }
        return H0(this.f40492d, i10, Math.min(kt.b.d(this.f40492d, i10), (int) this.f40494i));
    }

    /* JADX INFO: Access modifiers changed from: private */
    public f0 U0(int i10) {
        if (this.f40492d == i10) {
            return this;
        }
        return H0(i10, this.f40493e, Math.min(kt.b.d(i10, this.f40493e), (int) this.f40494i));
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static String V0(int i10) {
        return "WEEK_OF_YEAR (ISO) out of range: " + i10;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static String W0(int i10) {
        return "YEAR_OF_WEEKDATE (ISO) out of range: " + i10;
    }

    private static f0 n0(f0 f0Var, long j10) {
        long f10 = kt.c.f(f0Var.f40494i, j10);
        if (f10 >= 1 && f10 <= 28) {
            return H0(f0Var.f40492d, f0Var.f40493e, (int) f10);
        }
        long f11 = kt.c.f(f0Var.B0(), j10);
        if (f11 >= 1 && f11 <= 365) {
            return G0(f0Var.f40492d, (int) f11);
        }
        return (f0) L.b(kt.c.f(f0Var.C0(), j10));
    }

    public static mt.h0 r0() {
        return M;
    }

    private void readObject(ObjectInputStream objectInputStream) {
        throw new InvalidObjectException("Serialization proxy required.");
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public static f0 s0(net.time4j.f fVar, f0 f0Var, long j10, int i10) {
        switch (a.f40495a[fVar.ordinal()]) {
            case 1:
                return s0(net.time4j.f.f40471q, f0Var, kt.c.i(j10, 12000L), i10);
            case 2:
                return s0(net.time4j.f.f40471q, f0Var, kt.c.i(j10, 1200L), i10);
            case 3:
                return s0(net.time4j.f.f40471q, f0Var, kt.c.i(j10, 120L), i10);
            case 4:
                return s0(net.time4j.f.f40471q, f0Var, kt.c.i(j10, 12L), i10);
            case 5:
                return s0(net.time4j.f.f40471q, f0Var, kt.c.i(j10, 3L), i10);
            case 6:
                return x0(f0Var, kt.c.f(f0Var.D0(), j10), f0Var.f40494i, i10);
            case 7:
                return s0(net.time4j.f.f40473s, f0Var, kt.c.i(j10, 7L), i10);
            case 8:
                return n0(f0Var, j10);
            default:
                throw new UnsupportedOperationException(fVar.name());
        }
    }

    private static void t0(Map map, mt.p pVar) {
        map.put(pVar.name(), pVar);
    }

    private static void u0(StringBuilder sb2, int i10) {
        sb2.append('-');
        if (i10 < 10) {
            sb2.append('0');
        }
        sb2.append(i10);
    }

    private static void v0(StringBuilder sb2, int i10) {
        int i11;
        if (i10 < 0) {
            sb2.append('-');
            i11 = kt.c.j(i10);
        } else {
            i11 = i10;
        }
        if (i11 >= 10000) {
            if (i10 > 0) {
                sb2.append('+');
            }
        } else if (i11 < 1000) {
            sb2.append('0');
            if (i11 < 100) {
                sb2.append('0');
                if (i11 < 10) {
                    sb2.append('0');
                }
            }
        }
        sb2.append(i11);
    }

    public static f0 w0(kt.a aVar) {
        if (aVar instanceof f0) {
            return (f0) aVar;
        }
        return H0(aVar.f(), aVar.s(), aVar.g());
    }

    private Object writeReplace() {
        return new SPX(this, 1);
    }

    /* JADX WARN: Code restructure failed: missing block: B:20:0x0079, code lost:
        if (r11 == 2) goto L19;
     */
    /*
        Code decompiled incorrectly, please refer to instructions dump.
        To view partially-correct add '--show-bad-code' argument
    */
    private static net.time4j.f0 x0(net.time4j.f0 r7, long r8, int r10, int r11) {
        /*
            r0 = 5
            r1 = 2
            if (r11 != r0) goto Ld
            byte r0 = r7.f40494i
            int r2 = r7.lengthOfMonth()
            if (r0 != r2) goto Ld
            r11 = r1
        Ld:
            r0 = 12
            long r2 = kt.c.b(r8, r0)
            r4 = 1970(0x7b2, double:9.733E-321)
            long r2 = kt.c.f(r2, r4)
            int r2 = kt.c.g(r2)
            int r0 = kt.c.d(r8, r0)
            r3 = 1
            int r0 = r0 + r3
            int r4 = kt.b.d(r2, r0)
            if (r10 <= r4) goto L77
            r5 = 1
            switch(r11) {
                case 0: goto L7b;
                case 1: goto L6e;
                case 2: goto L7b;
                case 3: goto L64;
                case 4: goto L45;
                case 5: goto L7b;
                case 6: goto L7b;
                default: goto L2e;
            }
        L2e:
            java.lang.UnsupportedOperationException r7 = new java.lang.UnsupportedOperationException
            java.lang.StringBuilder r8 = new java.lang.StringBuilder
            r8.<init>()
            java.lang.String r9 = "Overflow policy not implemented: "
            r8.append(r9)
            r8.append(r11)
            java.lang.String r8 = r8.toString()
            r7.<init>(r8)
            throw r7
        L45:
            java.lang.StringBuilder r7 = new java.lang.StringBuilder
            r8 = 32
            r7.<init>(r8)
            java.lang.String r8 = "Day of month out of range: "
            r7.append(r8)
            v0(r7, r2)
            u0(r7, r0)
            u0(r7, r10)
            mt.r r8 = new mt.r
            java.lang.String r7 = r7.toString()
            r8.<init>(r7)
            throw r8
        L64:
            long r8 = kt.c.f(r8, r5)
            int r10 = r10 - r4
            net.time4j.f0 r7 = x0(r7, r8, r10, r11)
            return r7
        L6e:
            long r8 = kt.c.f(r8, r5)
            net.time4j.f0 r7 = x0(r7, r8, r3, r11)
            return r7
        L77:
            if (r10 >= r4) goto L7c
            if (r11 != r1) goto L7c
        L7b:
            r10 = r4
        L7c:
            net.time4j.f0 r7 = H0(r2, r0, r10)
            return r7
        */
        throw new UnsupportedOperationException("Method not decompiled: net.time4j.f0.x0(net.time4j.f0, long, int, int):net.time4j.f0");
    }

    /* JADX INFO: Access modifiers changed from: private */
    public int z0() {
        byte b10;
        switch (this.f40493e) {
            case 1:
            case 4:
            case 7:
            case 10:
                return this.f40494i;
            case 2:
            case 8:
            case 11:
                return this.f40494i + 31;
            case 3:
                if (kt.b.e(this.f40492d)) {
                    b10 = 60;
                } else {
                    b10 = 59;
                }
                return b10 + this.f40494i;
            case 5:
                return this.f40494i + 30;
            case 6:
            case 12:
                return this.f40494i + 61;
            case 9:
                return this.f40494i + 62;
            default:
                throw new AssertionError("Unknown month: " + ((int) this.f40493e));
        }
    }

    public y0 A0() {
        return y0.h(kt.b.c(this.f40492d, this.f40493e, this.f40494i));
    }

    public int B0() {
        byte b10 = this.f40493e;
        if (b10 != 1) {
            if (b10 != 2) {
                return f40488w[b10 - 2] + this.f40494i + (kt.b.e(this.f40492d) ? 1 : 0);
            }
            return this.f40494i + 31;
        }
        return this.f40494i;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public long C0() {
        return L.c(this);
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public long D0() {
        return (((this.f40492d - 1970) * 12) + this.f40493e) - 1;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public int E0() {
        return ((Integer) o(a1.f40260x.n())).intValue();
    }

    /* JADX INFO: Access modifiers changed from: protected */
    @Override // mt.q
    /* renamed from: H */
    public mt.h0 w() {
        return M;
    }

    /* JADX INFO: Access modifiers changed from: protected */
    @Override // mt.m
    public int M(mt.g gVar) {
        if (gVar instanceof f0) {
            f0 f0Var = (f0) gVar;
            int i10 = this.f40492d - f0Var.f40492d;
            if (i10 == 0) {
                int i11 = this.f40493e - f0Var.f40493e;
                if (i11 == 0) {
                    return this.f40494i - f0Var.f40494i;
                }
                return i11;
            }
            return i10;
        }
        return super.M(gVar);
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public f0 S0(long j10) {
        return (f0) L.b(j10);
    }

    @Override // mt.m
    public boolean equals(Object obj) {
        if (this == obj) {
            return true;
        }
        if (obj instanceof f0) {
            f0 f0Var = (f0) obj;
            if (this.f40494i == f0Var.f40494i && this.f40493e == f0Var.f40493e && this.f40492d == f0Var.f40492d) {
                return true;
            }
        }
        return false;
    }

    @Override // kt.a
    public int f() {
        return this.f40492d;
    }

    @Override // kt.a
    public int g() {
        return this.f40494i;
    }

    @Override // mt.m
    public int hashCode() {
        int i10 = this.f40492d;
        return (((i10 << 11) + (this.f40493e << 6)) + this.f40494i) ^ (i10 & (-2048));
    }

    public int lengthOfMonth() {
        return kt.b.d(this.f40492d, this.f40493e);
    }

    public i0 o0(g0 g0Var) {
        return i0.b0(this, g0Var);
    }

    public i0 p0() {
        return o0(g0.f40522x);
    }

    public i0 q0(int i10, int i11, int i12) {
        return o0(g0.I0(i10, i11, i12));
    }

    @Override // kt.a
    public int s() {
        return this.f40493e;
    }

    @Override // kt.a
    public String toString() {
        StringBuilder sb2 = new StringBuilder(32);
        v0(sb2, this.f40492d);
        u0(sb2, this.f40493e);
        u0(sb2, this.f40494i);
        return sb2.toString();
    }

    /* JADX INFO: Access modifiers changed from: protected */
    @Override // mt.q
    /* renamed from: y0 */
    public f0 x() {
        return this;
    }
}

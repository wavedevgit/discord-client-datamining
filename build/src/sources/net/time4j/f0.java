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
import jt.h0;
import net.time4j.f;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public final class f0 extends jt.m implements gt.a, jt.d0, kt.h {
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
    private static final jt.k L;
    private static final jt.h0 M;
    private static final long serialVersionUID = -6698431452072325688L;

    /* renamed from: w  reason: collision with root package name */
    private static final int[] f40570w;

    /* renamed from: x  reason: collision with root package name */
    private static final int[] f40571x;

    /* renamed from: y  reason: collision with root package name */
    static final jt.p f40572y;

    /* renamed from: z  reason: collision with root package name */
    public static final net.time4j.e f40573z;

    /* renamed from: d  reason: collision with root package name */
    private final transient int f40574d;

    /* renamed from: e  reason: collision with root package name */
    private final transient byte f40575e;

    /* renamed from: i  reason: collision with root package name */
    private final transient byte f40576i;

    /* renamed from: o  reason: collision with root package name */
    static final f0 f40562o = new f0(-999999999, 1, 1);

    /* renamed from: p  reason: collision with root package name */
    static final f0 f40563p = new f0(999999999, 12, 31);

    /* renamed from: q  reason: collision with root package name */
    static final Integer f40564q = -999999999;

    /* renamed from: r  reason: collision with root package name */
    static final Integer f40565r = 999999999;

    /* renamed from: s  reason: collision with root package name */
    private static final Integer f40566s = 1;

    /* renamed from: t  reason: collision with root package name */
    private static final Integer f40567t = 12;

    /* renamed from: u  reason: collision with root package name */
    private static final Integer f40568u = 365;

    /* renamed from: v  reason: collision with root package name */
    private static final Integer f40569v = 366;

    /* JADX INFO: Access modifiers changed from: package-private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
    public static /* synthetic */ class a {

        /* renamed from: a  reason: collision with root package name */
        static final /* synthetic */ int[] f40577a;

        /* renamed from: b  reason: collision with root package name */
        static final /* synthetic */ int[] f40578b;

        static {
            int[] iArr = new int[n0.values().length];
            f40578b = iArr;
            try {
                iArr[n0.Q1.ordinal()] = 1;
            } catch (NoSuchFieldError unused) {
            }
            try {
                f40578b[n0.Q2.ordinal()] = 2;
            } catch (NoSuchFieldError unused2) {
            }
            int[] iArr2 = new int[net.time4j.f.values().length];
            f40577a = iArr2;
            try {
                iArr2[net.time4j.f.f40548d.ordinal()] = 1;
            } catch (NoSuchFieldError unused3) {
            }
            try {
                f40577a[net.time4j.f.f40549e.ordinal()] = 2;
            } catch (NoSuchFieldError unused4) {
            }
            try {
                f40577a[net.time4j.f.f40550i.ordinal()] = 3;
            } catch (NoSuchFieldError unused5) {
            }
            try {
                f40577a[net.time4j.f.f40551o.ordinal()] = 4;
            } catch (NoSuchFieldError unused6) {
            }
            try {
                f40577a[net.time4j.f.f40552p.ordinal()] = 5;
            } catch (NoSuchFieldError unused7) {
            }
            try {
                f40577a[net.time4j.f.f40553q.ordinal()] = 6;
            } catch (NoSuchFieldError unused8) {
            }
            try {
                f40577a[net.time4j.f.f40554r.ordinal()] = 7;
            } catch (NoSuchFieldError unused9) {
            }
            try {
                f40577a[net.time4j.f.f40555s.ordinal()] = 8;
            } catch (NoSuchFieldError unused10) {
            }
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
    private static class b implements jt.z {
        private b() {
        }

        @Override // jt.z
        /* renamed from: b */
        public jt.p a(f0 f0Var) {
            return null;
        }

        @Override // jt.z
        /* renamed from: c */
        public jt.p h(f0 f0Var) {
            return null;
        }

        @Override // jt.z
        /* renamed from: d */
        public f0 j(f0 f0Var) {
            return f0.f40563p;
        }

        @Override // jt.z
        /* renamed from: e */
        public f0 p(f0 f0Var) {
            return f0.f40562o;
        }

        @Override // jt.z
        /* renamed from: f */
        public f0 x(f0 f0Var) {
            return f0Var;
        }

        @Override // jt.z
        /* renamed from: g */
        public boolean l(f0 f0Var, f0 f0Var2) {
            return f0Var2 != null;
        }

        @Override // jt.z
        /* renamed from: i */
        public f0 w(f0 f0Var, f0 f0Var2, boolean z10) {
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
    private static class c implements jt.z {

        /* renamed from: d  reason: collision with root package name */
        private final String f40579d;

        /* renamed from: e  reason: collision with root package name */
        private final Class f40580e;

        /* renamed from: i  reason: collision with root package name */
        private final Enum f40581i;

        /* renamed from: o  reason: collision with root package name */
        private final Enum f40582o;

        /* renamed from: p  reason: collision with root package name */
        private final int f40583p;

        c(String str, Class cls, Enum r32, Enum r42, int i10) {
            this.f40579d = str;
            this.f40580e = cls;
            this.f40581i = r32;
            this.f40582o = r42;
            this.f40583p = i10;
        }

        private jt.p b() {
            switch (this.f40583p) {
                case 101:
                    return f0.F;
                case 102:
                    return null;
                case 103:
                    return f0.I;
                default:
                    throw new UnsupportedOperationException(this.f40579d);
            }
        }

        static c m(jt.p pVar) {
            return new c(pVar.name(), pVar.getType(), (Enum) pVar.A(), (Enum) pVar.e(), ((p) pVar).J());
        }

        @Override // jt.z
        /* renamed from: c */
        public jt.p a(f0 f0Var) {
            return b();
        }

        @Override // jt.z
        /* renamed from: d */
        public jt.p h(f0 f0Var) {
            return b();
        }

        @Override // jt.z
        /* renamed from: e */
        public Enum j(f0 f0Var) {
            if (this.f40583p == 102 && f0Var.f40574d == 999999999 && f0Var.f40575e == 12 && f0Var.f40576i >= 27) {
                return (Enum) this.f40580e.cast(y0.FRIDAY);
            }
            return this.f40582o;
        }

        @Override // jt.z
        /* renamed from: f */
        public Enum p(f0 f0Var) {
            return this.f40581i;
        }

        @Override // jt.z
        /* renamed from: g */
        public Enum x(f0 f0Var) {
            Object f10;
            switch (this.f40583p) {
                case 101:
                    f10 = b0.f(f0Var.f40575e);
                    break;
                case 102:
                    f10 = f0Var.A0();
                    break;
                case 103:
                    f10 = n0.f(((f0Var.f40575e - 1) / 3) + 1);
                    break;
                default:
                    throw new UnsupportedOperationException(this.f40579d);
            }
            return (Enum) this.f40580e.cast(f10);
        }

        @Override // jt.z
        /* renamed from: i */
        public boolean l(f0 f0Var, Enum r52) {
            if (r52 == null) {
                return false;
            }
            if (this.f40583p == 102 && f0Var.f40574d == 999999999) {
                try {
                    w(f0Var, r52, false);
                    return true;
                } catch (IllegalArgumentException unused) {
                    return false;
                }
            }
            return true;
        }

        @Override // jt.z
        /* renamed from: n */
        public f0 w(f0 f0Var, Enum r32, boolean z10) {
            if (r32 != null) {
                switch (this.f40583p) {
                    case 101:
                        return f0Var.T0(((b0) b0.class.cast(r32)).d());
                    case 102:
                        return f0Var.Q0((y0) y0.class.cast(r32));
                    case 103:
                        return (f0) f0Var.K(((n0) n0.class.cast(r32)).d() - (((f0Var.f40575e - 1) / 3) + 1), net.time4j.f.f40552p);
                    default:
                        throw new UnsupportedOperationException(this.f40579d);
                }
            }
            throw new IllegalArgumentException("Missing element value.");
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
    private static class d implements jt.c0 {

        /* renamed from: d  reason: collision with root package name */
        private final jt.p f40584d;

        /* renamed from: e  reason: collision with root package name */
        private final String f40585e;

        /* renamed from: i  reason: collision with root package name */
        private final int f40586i;

        d(jt.p pVar) {
            this(((s) pVar).J(), pVar);
        }

        private jt.p b() {
            switch (this.f40586i) {
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
                    throw new UnsupportedOperationException(this.f40585e);
            }
        }

        private static int g(f0 f0Var) {
            int i10 = ((f0Var.f40575e - 1) / 3) + 1;
            if (i10 == 1) {
                if (gt.b.e(f0Var.f40574d)) {
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
            int d10 = gt.b.d(f0Var.f40574d, f0Var.f40575e);
            byte b10 = f0Var.f40576i;
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

        @Override // jt.z
        /* renamed from: c */
        public jt.p a(f0 f0Var) {
            return b();
        }

        @Override // jt.z
        /* renamed from: d */
        public jt.p h(f0 f0Var) {
            return b();
        }

        @Override // jt.c0
        /* renamed from: e */
        public int v(f0 f0Var) {
            switch (this.f40586i) {
                case 14:
                    return f0Var.f40574d;
                case 15:
                    return f0Var.f40575e;
                case 16:
                    return f0Var.f40576i;
                case 17:
                    return f0Var.B0();
                case ChatViewRecyclerTypes.EPHEMERAL_INDICATION /* 18 */:
                    return f0Var.z0();
                case ChatViewRecyclerTypes.INTERACTION_STATUS /* 19 */:
                    return ((f0Var.f40576i - 1) / 7) + 1;
                default:
                    throw new UnsupportedOperationException(this.f40585e);
            }
        }

        @Override // jt.z
        /* renamed from: f */
        public Integer j(f0 f0Var) {
            switch (this.f40586i) {
                case 14:
                    return f0.f40565r;
                case 15:
                    return f0.f40567t;
                case 16:
                    return Integer.valueOf(gt.b.d(f0Var.f40574d, f0Var.f40575e));
                case 17:
                    return gt.b.e(f0Var.f40574d) ? f0.f40569v : f0.f40568u;
                case ChatViewRecyclerTypes.EPHEMERAL_INDICATION /* 18 */:
                    return Integer.valueOf(g(f0Var));
                case ChatViewRecyclerTypes.INTERACTION_STATUS /* 19 */:
                    return Integer.valueOf(i(f0Var));
                default:
                    throw new UnsupportedOperationException(this.f40585e);
            }
        }

        @Override // jt.z
        /* renamed from: m */
        public Integer p(f0 f0Var) {
            switch (this.f40586i) {
                case 14:
                    return f0.f40564q;
                case 15:
                case 16:
                case 17:
                case ChatViewRecyclerTypes.EPHEMERAL_INDICATION /* 18 */:
                case ChatViewRecyclerTypes.INTERACTION_STATUS /* 19 */:
                    return f0.f40566s;
                default:
                    throw new UnsupportedOperationException(this.f40585e);
            }
        }

        @Override // jt.z
        /* renamed from: n */
        public Integer x(f0 f0Var) {
            return Integer.valueOf(v(f0Var));
        }

        public boolean o(f0 f0Var, int i10) {
            int i11;
            switch (this.f40586i) {
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
                    if (i10 < 1 || i10 > gt.b.d(f0Var.f40574d, f0Var.f40575e)) {
                        return false;
                    }
                    return true;
                case 17:
                    if (i10 >= 1) {
                        if (gt.b.e(f0Var.f40574d)) {
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
                    throw new UnsupportedOperationException(this.f40585e);
            }
        }

        @Override // jt.z
        /* renamed from: q */
        public boolean l(f0 f0Var, Integer num) {
            if (num != null && o(f0Var, num.intValue())) {
                return true;
            }
            return false;
        }

        @Override // jt.c0
        /* renamed from: r */
        public f0 k(f0 f0Var, int i10, boolean z10) {
            if (!z10) {
                switch (this.f40586i) {
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
                            return (f0) f0Var.K(i10 - f0Var.z0(), net.time4j.f.f40555s);
                        }
                        throw new IllegalArgumentException("Out of range: " + i10);
                    case ChatViewRecyclerTypes.INTERACTION_STATUS /* 19 */:
                        if (!z10 && (i10 < 1 || i10 > i(f0Var))) {
                            throw new IllegalArgumentException("Out of range: " + i10);
                        }
                        return (f0) f0Var.K(i10 - (((f0Var.f40576i - 1) / 7) + 1), net.time4j.f.f40554r);
                    default:
                        throw new UnsupportedOperationException(this.f40585e);
                }
            }
            return (f0) f0Var.K(gt.c.l(i10, v(f0Var)), (u) f0.M.N(this.f40584d));
        }

        @Override // jt.z
        /* renamed from: s */
        public f0 w(f0 f0Var, Integer num, boolean z10) {
            if (num != null) {
                return k(f0Var, num.intValue(), z10);
            }
            throw new IllegalArgumentException("Missing element value.");
        }

        d(int i10, jt.p pVar) {
            this.f40584d = pVar;
            this.f40585e = pVar.name();
            this.f40586i = i10;
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
    private static class e implements jt.u {

        /* renamed from: d  reason: collision with root package name */
        private static final int f40587d = gt.b.i(gt.b.l(jt.a0.MODIFIED_JULIAN_DATE.l(gt.c.b(System.currentTimeMillis(), 86400000), jt.a0.UNIX))) + 20;

        private e() {
        }

        private static void e(jt.q qVar, String str) {
            jt.n0 n0Var = jt.n0.ERROR_MESSAGE;
            if (qVar.B(n0Var, str)) {
                qVar.E(n0Var, str);
            }
        }

        private static boolean g(jt.q qVar, int i10, int i11, int i12) {
            if (i12 >= 1 && (i12 <= 28 || i12 <= gt.b.d(i10, i11))) {
                return true;
            }
            e(qVar, "DAY_OF_MONTH out of range: " + i12);
            return false;
        }

        private static boolean i(jt.q qVar, boolean z10, n0 n0Var, int i10) {
            int i11 = a.f40578b[n0Var.ordinal()];
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
        private static boolean l(jt.q r2, int r3, int r4) {
            /*
                r0 = 1
                if (r4 < r0) goto L13
                r1 = 365(0x16d, float:5.11E-43)
                if (r4 <= r1) goto L12
                boolean r3 = gt.b.e(r3)
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
            throw new UnsupportedOperationException("Method not decompiled: net.time4j.f0.e.l(jt.q, int, int):boolean");
        }

        private static boolean m(jt.q qVar, int i10) {
            if (i10 >= 1 && i10 <= 12) {
                return true;
            }
            e(qVar, "MONTH_OF_YEAR out of range: " + i10);
            return false;
        }

        private static boolean n(jt.q qVar, int i10) {
            if (i10 >= -999999999 && i10 <= 999999999) {
                return true;
            }
            e(qVar, "YEAR out of range: " + i10);
            return false;
        }

        @Override // jt.u
        public jt.f0 a() {
            return jt.f0.f32742a;
        }

        @Override // jt.u
        public jt.x b() {
            return null;
        }

        @Override // jt.u
        /* renamed from: d */
        public f0 j(jt.q qVar, jt.d dVar, boolean z10, boolean z11) {
            y0 y0Var;
            l0 l0Var;
            int q10;
            jt.p pVar = f0.f40572y;
            if (qVar.o(pVar)) {
                return (f0) qVar.p(pVar);
            }
            int q11 = qVar.q(f0.A);
            if (q11 != Integer.MIN_VALUE) {
                l0 l0Var2 = f0.E;
                int q12 = qVar.q(l0Var2);
                if (q12 == Integer.MIN_VALUE) {
                    jt.p pVar2 = f0.D;
                    if (qVar.o(pVar2)) {
                        q12 = ((b0) qVar.p(pVar2)).d();
                    }
                }
                if (q12 != Integer.MIN_VALUE && (q10 = qVar.q((l0Var = f0.F))) != Integer.MIN_VALUE) {
                    if (z10) {
                        return (f0) ((f0) f0.H0(q11, 1, 1).F(l0Var2.r(Integer.valueOf(q12)))).F(l0Var.r(Integer.valueOf(q10)));
                    }
                    if (n(qVar, q11) && m(qVar, q12) && g(qVar, q11, q12, q10)) {
                        return f0.I0(q11, q12, q10, false);
                    }
                    return null;
                }
                l0 l0Var3 = f0.H;
                int q13 = qVar.q(l0Var3);
                if (q13 != Integer.MIN_VALUE) {
                    if (z10) {
                        return (f0) f0.G0(q11, 1).F(l0Var3.r(Integer.valueOf(q13)));
                    }
                    if (n(qVar, q11) && l(qVar, q11, q13)) {
                        return f0.G0(q11, q13);
                    }
                    return null;
                }
                int q14 = qVar.q(f0.I);
                if (q14 != Integer.MIN_VALUE) {
                    jt.p pVar3 = f0.C;
                    if (qVar.o(pVar3)) {
                        n0 n0Var = (n0) qVar.p(pVar3);
                        boolean e10 = gt.b.e(q11);
                        int i10 = (e10 ? 91 : 90) + q14;
                        if (n0Var == n0.Q1) {
                            i10 = q14;
                        } else if (n0Var == n0.Q3) {
                            i10 += 91;
                        } else if (n0Var == n0.Q4) {
                            i10 += 183;
                        }
                        if (z10) {
                            return (f0) f0.G0(q11, 1).F(l0Var3.r(Integer.valueOf(i10)));
                        }
                        if (n(qVar, q11) && i(qVar, e10, n0Var, q14)) {
                            return f0.G0(q11, i10);
                        }
                        return null;
                    }
                }
            }
            int q15 = qVar.q(f0.B);
            if (q15 != Integer.MIN_VALUE) {
                a1 a1Var = a1.f40342x;
                if (qVar.o(a1Var.n())) {
                    int intValue = ((Integer) qVar.p(a1Var.n())).intValue();
                    jt.p pVar4 = f0.G;
                    if (qVar.o(pVar4)) {
                        y0Var = (y0) qVar.p(pVar4);
                    } else {
                        if (qVar.o(a1Var.i())) {
                            y0Var = (y0) qVar.p(a1Var.i());
                        }
                        return null;
                    }
                    if (q15 >= -999999999 && q15 <= 999999999) {
                        f0 K0 = f0.K0(q15, intValue, y0Var, false);
                        if (K0 == null) {
                            e(qVar, f0.V0(intValue));
                        }
                        return K0;
                    }
                    e(qVar, f0.W0(q15));
                    return null;
                }
            }
            jt.a0 a0Var = jt.a0.MODIFIED_JULIAN_DATE;
            if (qVar.o(a0Var)) {
                return (f0) f0.L.b(jt.a0.UTC.l(((Long) qVar.p(a0Var)).longValue(), a0Var));
            }
            if (qVar instanceof gt.f) {
                return ((i0) i0.S().j(qVar, dVar, z10, z11)).V();
            }
            return null;
        }

        @Override // jt.u
        public int h() {
            return f40587d;
        }

        @Override // jt.u
        public String k(jt.y yVar, Locale locale) {
            return kt.b.r(kt.e.d(yVar.a()), locale);
        }

        /* synthetic */ e(a aVar) {
            this();
        }

        @Override // jt.u
        /* renamed from: f */
        public jt.o c(f0 f0Var, jt.d dVar) {
            return f0Var;
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
    private static class f implements jt.k {
        private f() {
        }

        @Override // jt.k
        public long a() {
            return 365241779741L;
        }

        @Override // jt.k
        public long d() {
            return -365243219892L;
        }

        @Override // jt.k
        /* renamed from: e */
        public long c(f0 f0Var) {
            return jt.a0.UTC.l(gt.b.k(f0Var), jt.a0.MODIFIED_JULIAN_DATE);
        }

        @Override // jt.k
        /* renamed from: f */
        public f0 b(long j10) {
            if (j10 == -365243219892L) {
                return f0.f40562o;
            }
            if (j10 == 365241779741L) {
                return f0.f40563p;
            }
            long l10 = gt.b.l(jt.a0.MODIFIED_JULIAN_DATE.l(j10, jt.a0.UTC));
            return f0.H0(gt.b.i(l10), gt.b.h(l10), gt.b.g(l10));
        }

        /* synthetic */ f(a aVar) {
            this();
        }
    }

    static {
        f40570w = r7;
        f40571x = r8;
        int[] iArr = {31, 59, 90, 120, 151, 181, MediaImageViewKt.OBSCURED_IMAGE_MIN_HEIGHT, 243, 273, 304, 334, 365};
        int[] iArr2 = {31, 60, 91, 121, 152, 182, 213, 244, 274, 305, 335, 366};
        h hVar = h.f40622d;
        f40572y = hVar;
        f40573z = hVar;
        s G2 = s.G("YEAR", 14, -999999999, 999999999, 'u');
        A = G2;
        b1 b1Var = b1.f40396r;
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
        z0 z0Var = z0.f40939o;
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
        net.time4j.f fVar2 = net.time4j.f.f40555s;
        h0.b e10 = j10.e(hVar, bVar, fVar2).e(G2, new d(G2), net.time4j.f.f40551o).e(b1Var, b1.K(f0.class), x0.f40918d).e(pVar, c.m(pVar), net.time4j.f.f40552p);
        c m10 = c.m(pVar2);
        net.time4j.f fVar3 = net.time4j.f.f40553q;
        h0.b e11 = e10.e(pVar2, m10, fVar3).e(G3, new d(G3), fVar3).e(G4, new d(G4), fVar2).e(pVar3, c.m(pVar3), fVar2).e(G5, new d(G5), fVar2).e(G6, new d(G6), fVar2).e(z0Var, new d(19, z0Var), net.time4j.f.f40554r);
        O0(e11);
        N0(e11);
        M = e11.h();
    }

    private f0(int i10, int i11, int i12) {
        this.f40574d = i10;
        this.f40575e = (byte) i11;
        this.f40576i = (byte) i12;
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
            if (gt.b.e(i10)) {
                iArr = f40571x;
            } else {
                iArr = f40570w;
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
            gt.b.a(i10, i11, i12);
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
            if (z10 && (i10 < f40564q.intValue() || i10 > f40565r.intValue())) {
                throw new IllegalArgumentException(W0(i10));
            }
            int d10 = y0.h(gt.b.c(i10, 1, 1)).d();
            if (d10 <= 4) {
                i12 = 2 - d10;
            } else {
                i12 = 9 - d10;
            }
            int d11 = ((i12 + ((i11 - 1) * 7)) + y0Var.d()) - 1;
            int i13 = 365;
            if (d11 <= 0) {
                i10--;
                if (gt.b.e(i10)) {
                    i13 = 366;
                }
                d11 += i13;
            } else {
                if (gt.b.e(i10)) {
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

    public static f0 M0(long j10, jt.a0 a0Var) {
        return (f0) L.b(jt.a0.UTC.l(j10, a0Var));
    }

    private static void N0(h0.b bVar) {
        for (jt.s sVar : gt.d.c().g(jt.s.class)) {
            if (sVar.b(f0.class)) {
                bVar.f(sVar);
            }
        }
        bVar.f(new w0());
    }

    private static void O0(h0.b bVar) {
        EnumSet enumSet;
        EnumSet range = EnumSet.range(net.time4j.f.f40548d, net.time4j.f.f40553q);
        EnumSet range2 = EnumSet.range(net.time4j.f.f40554r, net.time4j.f.f40555s);
        net.time4j.f[] values = net.time4j.f.values();
        int length = values.length;
        int i10 = 0;
        while (i10 < length) {
            net.time4j.f fVar = values[i10];
            f.j jVar = new f.j(fVar);
            double length2 = fVar.getLength();
            if (fVar.compareTo(net.time4j.f.f40554r) < 0) {
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
        if (this.f40576i == i10) {
            return this;
        }
        return H0(this.f40574d, this.f40575e, i10);
    }

    /* JADX INFO: Access modifiers changed from: private */
    public f0 Q0(y0 y0Var) {
        y0 A0 = A0();
        if (A0 == y0Var) {
            return this;
        }
        return (f0) L.b(gt.c.f(C0(), y0Var.d() - A0.d()));
    }

    /* JADX INFO: Access modifiers changed from: private */
    public f0 R0(int i10) {
        if (B0() == i10) {
            return this;
        }
        return G0(this.f40574d, i10);
    }

    /* JADX INFO: Access modifiers changed from: private */
    public f0 T0(int i10) {
        if (this.f40575e == i10) {
            return this;
        }
        return H0(this.f40574d, i10, Math.min(gt.b.d(this.f40574d, i10), (int) this.f40576i));
    }

    /* JADX INFO: Access modifiers changed from: private */
    public f0 U0(int i10) {
        if (this.f40574d == i10) {
            return this;
        }
        return H0(i10, this.f40575e, Math.min(gt.b.d(i10, this.f40575e), (int) this.f40576i));
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
        long f10 = gt.c.f(f0Var.f40576i, j10);
        if (f10 >= 1 && f10 <= 28) {
            return H0(f0Var.f40574d, f0Var.f40575e, (int) f10);
        }
        long f11 = gt.c.f(f0Var.B0(), j10);
        if (f11 >= 1 && f11 <= 365) {
            return G0(f0Var.f40574d, (int) f11);
        }
        return (f0) L.b(gt.c.f(f0Var.C0(), j10));
    }

    public static jt.h0 r0() {
        return M;
    }

    private void readObject(ObjectInputStream objectInputStream) {
        throw new InvalidObjectException("Serialization proxy required.");
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public static f0 s0(net.time4j.f fVar, f0 f0Var, long j10, int i10) {
        switch (a.f40577a[fVar.ordinal()]) {
            case 1:
                return s0(net.time4j.f.f40553q, f0Var, gt.c.i(j10, 12000L), i10);
            case 2:
                return s0(net.time4j.f.f40553q, f0Var, gt.c.i(j10, 1200L), i10);
            case 3:
                return s0(net.time4j.f.f40553q, f0Var, gt.c.i(j10, 120L), i10);
            case 4:
                return s0(net.time4j.f.f40553q, f0Var, gt.c.i(j10, 12L), i10);
            case 5:
                return s0(net.time4j.f.f40553q, f0Var, gt.c.i(j10, 3L), i10);
            case 6:
                return x0(f0Var, gt.c.f(f0Var.D0(), j10), f0Var.f40576i, i10);
            case 7:
                return s0(net.time4j.f.f40555s, f0Var, gt.c.i(j10, 7L), i10);
            case 8:
                return n0(f0Var, j10);
            default:
                throw new UnsupportedOperationException(fVar.name());
        }
    }

    private static void t0(Map map, jt.p pVar) {
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
            i11 = gt.c.j(i10);
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

    public static f0 w0(gt.a aVar) {
        if (aVar instanceof f0) {
            return (f0) aVar;
        }
        return H0(aVar.f(), aVar.u(), aVar.g());
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
            byte r0 = r7.f40576i
            int r2 = r7.lengthOfMonth()
            if (r0 != r2) goto Ld
            r11 = r1
        Ld:
            r0 = 12
            long r2 = gt.c.b(r8, r0)
            r4 = 1970(0x7b2, double:9.733E-321)
            long r2 = gt.c.f(r2, r4)
            int r2 = gt.c.g(r2)
            int r0 = gt.c.d(r8, r0)
            r3 = 1
            int r0 = r0 + r3
            int r4 = gt.b.d(r2, r0)
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
            jt.r r8 = new jt.r
            java.lang.String r7 = r7.toString()
            r8.<init>(r7)
            throw r8
        L64:
            long r8 = gt.c.f(r8, r5)
            int r10 = r10 - r4
            net.time4j.f0 r7 = x0(r7, r8, r10, r11)
            return r7
        L6e:
            long r8 = gt.c.f(r8, r5)
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
        switch (this.f40575e) {
            case 1:
            case 4:
            case 7:
            case 10:
                return this.f40576i;
            case 2:
            case 8:
            case 11:
                return this.f40576i + 31;
            case 3:
                if (gt.b.e(this.f40574d)) {
                    b10 = 60;
                } else {
                    b10 = 59;
                }
                return b10 + this.f40576i;
            case 5:
                return this.f40576i + 30;
            case 6:
            case 12:
                return this.f40576i + 61;
            case 9:
                return this.f40576i + 62;
            default:
                throw new AssertionError("Unknown month: " + ((int) this.f40575e));
        }
    }

    public y0 A0() {
        return y0.h(gt.b.c(this.f40574d, this.f40575e, this.f40576i));
    }

    public int B0() {
        byte b10 = this.f40575e;
        if (b10 != 1) {
            if (b10 != 2) {
                return f40570w[b10 - 2] + this.f40576i + (gt.b.e(this.f40574d) ? 1 : 0);
            }
            return this.f40576i + 31;
        }
        return this.f40576i;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public long C0() {
        return L.c(this);
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public long D0() {
        return (((this.f40574d - 1970) * 12) + this.f40575e) - 1;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public int E0() {
        return ((Integer) p(a1.f40342x.n())).intValue();
    }

    /* JADX INFO: Access modifiers changed from: protected */
    @Override // jt.q
    /* renamed from: H */
    public jt.h0 w() {
        return M;
    }

    /* JADX INFO: Access modifiers changed from: protected */
    @Override // jt.m
    public int M(jt.g gVar) {
        if (gVar instanceof f0) {
            f0 f0Var = (f0) gVar;
            int i10 = this.f40574d - f0Var.f40574d;
            if (i10 == 0) {
                int i11 = this.f40575e - f0Var.f40575e;
                if (i11 == 0) {
                    return this.f40576i - f0Var.f40576i;
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

    @Override // jt.m
    public boolean equals(Object obj) {
        if (this == obj) {
            return true;
        }
        if (obj instanceof f0) {
            f0 f0Var = (f0) obj;
            if (this.f40576i == f0Var.f40576i && this.f40575e == f0Var.f40575e && this.f40574d == f0Var.f40574d) {
                return true;
            }
        }
        return false;
    }

    @Override // gt.a
    public int f() {
        return this.f40574d;
    }

    @Override // gt.a
    public int g() {
        return this.f40576i;
    }

    @Override // jt.m
    public int hashCode() {
        int i10 = this.f40574d;
        return (((i10 << 11) + (this.f40575e << 6)) + this.f40576i) ^ (i10 & (-2048));
    }

    public int lengthOfMonth() {
        return gt.b.d(this.f40574d, this.f40575e);
    }

    public i0 o0(g0 g0Var) {
        return i0.b0(this, g0Var);
    }

    public i0 p0() {
        return o0(g0.f40604x);
    }

    public i0 q0(int i10, int i11, int i12) {
        return o0(g0.I0(i10, i11, i12));
    }

    @Override // gt.a
    public String toString() {
        StringBuilder sb2 = new StringBuilder(32);
        v0(sb2, this.f40574d);
        u0(sb2, this.f40575e);
        u0(sb2, this.f40576i);
        return sb2.toString();
    }

    @Override // gt.a
    public int u() {
        return this.f40575e;
    }

    /* JADX INFO: Access modifiers changed from: protected */
    @Override // jt.q
    /* renamed from: y0 */
    public f0 x() {
        return this;
    }
}

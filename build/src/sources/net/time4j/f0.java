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
import net.time4j.f;
import st.h0;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public final class f0 extends st.m implements qt.a, st.d0, tt.h {
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
    private static final st.k L;
    private static final st.h0 M;
    private static final long serialVersionUID = -6698431452072325688L;

    /* renamed from: w  reason: collision with root package name */
    private static final int[] f38443w;

    /* renamed from: x  reason: collision with root package name */
    private static final int[] f38444x;

    /* renamed from: y  reason: collision with root package name */
    static final st.p f38445y;

    /* renamed from: z  reason: collision with root package name */
    public static final net.time4j.e f38446z;

    /* renamed from: d  reason: collision with root package name */
    private final transient int f38447d;

    /* renamed from: e  reason: collision with root package name */
    private final transient byte f38448e;

    /* renamed from: i  reason: collision with root package name */
    private final transient byte f38449i;

    /* renamed from: o  reason: collision with root package name */
    static final f0 f38435o = new f0(-999999999, 1, 1);

    /* renamed from: p  reason: collision with root package name */
    static final f0 f38436p = new f0(999999999, 12, 31);

    /* renamed from: q  reason: collision with root package name */
    static final Integer f38437q = -999999999;

    /* renamed from: r  reason: collision with root package name */
    static final Integer f38438r = 999999999;

    /* renamed from: s  reason: collision with root package name */
    private static final Integer f38439s = 1;

    /* renamed from: t  reason: collision with root package name */
    private static final Integer f38440t = 12;

    /* renamed from: u  reason: collision with root package name */
    private static final Integer f38441u = 365;

    /* renamed from: v  reason: collision with root package name */
    private static final Integer f38442v = 366;

    /* JADX INFO: Access modifiers changed from: package-private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
    public static /* synthetic */ class a {

        /* renamed from: a  reason: collision with root package name */
        static final /* synthetic */ int[] f38450a;

        /* renamed from: b  reason: collision with root package name */
        static final /* synthetic */ int[] f38451b;

        static {
            int[] iArr = new int[n0.values().length];
            f38451b = iArr;
            try {
                iArr[n0.Q1.ordinal()] = 1;
            } catch (NoSuchFieldError unused) {
            }
            try {
                f38451b[n0.Q2.ordinal()] = 2;
            } catch (NoSuchFieldError unused2) {
            }
            int[] iArr2 = new int[net.time4j.f.values().length];
            f38450a = iArr2;
            try {
                iArr2[net.time4j.f.f38421d.ordinal()] = 1;
            } catch (NoSuchFieldError unused3) {
            }
            try {
                f38450a[net.time4j.f.f38422e.ordinal()] = 2;
            } catch (NoSuchFieldError unused4) {
            }
            try {
                f38450a[net.time4j.f.f38423i.ordinal()] = 3;
            } catch (NoSuchFieldError unused5) {
            }
            try {
                f38450a[net.time4j.f.f38424o.ordinal()] = 4;
            } catch (NoSuchFieldError unused6) {
            }
            try {
                f38450a[net.time4j.f.f38425p.ordinal()] = 5;
            } catch (NoSuchFieldError unused7) {
            }
            try {
                f38450a[net.time4j.f.f38426q.ordinal()] = 6;
            } catch (NoSuchFieldError unused8) {
            }
            try {
                f38450a[net.time4j.f.f38427r.ordinal()] = 7;
            } catch (NoSuchFieldError unused9) {
            }
            try {
                f38450a[net.time4j.f.f38428s.ordinal()] = 8;
            } catch (NoSuchFieldError unused10) {
            }
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
    private static class b implements st.z {
        private b() {
        }

        @Override // st.z
        /* renamed from: b */
        public st.p a(f0 f0Var) {
            return null;
        }

        @Override // st.z
        /* renamed from: c */
        public st.p g(f0 f0Var) {
            return null;
        }

        @Override // st.z
        /* renamed from: d */
        public f0 h(f0 f0Var) {
            return f0.f38436p;
        }

        @Override // st.z
        /* renamed from: e */
        public f0 m(f0 f0Var) {
            return f0.f38435o;
        }

        @Override // st.z
        /* renamed from: f */
        public f0 y(f0 f0Var) {
            return f0Var;
        }

        @Override // st.z
        /* renamed from: j */
        public boolean k(f0 f0Var, f0 f0Var2) {
            return f0Var2 != null;
        }

        @Override // st.z
        /* renamed from: l */
        public f0 s(f0 f0Var, f0 f0Var2, boolean z10) {
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
    private static class c implements st.z {

        /* renamed from: d  reason: collision with root package name */
        private final String f38452d;

        /* renamed from: e  reason: collision with root package name */
        private final Class f38453e;

        /* renamed from: i  reason: collision with root package name */
        private final Enum f38454i;

        /* renamed from: o  reason: collision with root package name */
        private final Enum f38455o;

        /* renamed from: p  reason: collision with root package name */
        private final int f38456p;

        c(String str, Class cls, Enum r32, Enum r42, int i10) {
            this.f38452d = str;
            this.f38453e = cls;
            this.f38454i = r32;
            this.f38455o = r42;
            this.f38456p = i10;
        }

        private st.p b() {
            switch (this.f38456p) {
                case 101:
                    return f0.F;
                case 102:
                    return null;
                case 103:
                    return f0.I;
                default:
                    throw new UnsupportedOperationException(this.f38452d);
            }
        }

        static c o(st.p pVar) {
            return new c(pVar.name(), pVar.getType(), (Enum) pVar.B(), (Enum) pVar.e(), ((p) pVar).J());
        }

        @Override // st.z
        /* renamed from: c */
        public st.p a(f0 f0Var) {
            return b();
        }

        @Override // st.z
        /* renamed from: d */
        public st.p g(f0 f0Var) {
            return b();
        }

        @Override // st.z
        /* renamed from: e */
        public Enum h(f0 f0Var) {
            if (this.f38456p == 102 && f0Var.f38447d == 999999999 && f0Var.f38448e == 12 && f0Var.f38449i >= 27) {
                return (Enum) this.f38453e.cast(y0.FRIDAY);
            }
            return this.f38455o;
        }

        @Override // st.z
        /* renamed from: f */
        public Enum m(f0 f0Var) {
            return this.f38454i;
        }

        @Override // st.z
        /* renamed from: j */
        public Enum y(f0 f0Var) {
            Object f10;
            switch (this.f38456p) {
                case 101:
                    f10 = b0.f(f0Var.f38448e);
                    break;
                case 102:
                    f10 = f0Var.A0();
                    break;
                case 103:
                    f10 = n0.f(((f0Var.f38448e - 1) / 3) + 1);
                    break;
                default:
                    throw new UnsupportedOperationException(this.f38452d);
            }
            return (Enum) this.f38453e.cast(f10);
        }

        @Override // st.z
        /* renamed from: l */
        public boolean k(f0 f0Var, Enum r52) {
            if (r52 == null) {
                return false;
            }
            if (this.f38456p == 102 && f0Var.f38447d == 999999999) {
                try {
                    s(f0Var, r52, false);
                    return true;
                } catch (IllegalArgumentException unused) {
                    return false;
                }
            }
            return true;
        }

        @Override // st.z
        /* renamed from: p */
        public f0 s(f0 f0Var, Enum r32, boolean z10) {
            if (r32 != null) {
                switch (this.f38456p) {
                    case 101:
                        return f0Var.T0(((b0) b0.class.cast(r32)).d());
                    case 102:
                        return f0Var.Q0((y0) y0.class.cast(r32));
                    case 103:
                        return (f0) f0Var.K(((n0) n0.class.cast(r32)).d() - (((f0Var.f38448e - 1) / 3) + 1), net.time4j.f.f38425p);
                    default:
                        throw new UnsupportedOperationException(this.f38452d);
                }
            }
            throw new IllegalArgumentException("Missing element value.");
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
    private static class d implements st.c0 {

        /* renamed from: d  reason: collision with root package name */
        private final st.p f38457d;

        /* renamed from: e  reason: collision with root package name */
        private final String f38458e;

        /* renamed from: i  reason: collision with root package name */
        private final int f38459i;

        d(st.p pVar) {
            this(((s) pVar).J(), pVar);
        }

        private st.p b() {
            switch (this.f38459i) {
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
                    throw new UnsupportedOperationException(this.f38458e);
            }
        }

        private static int j(f0 f0Var) {
            int i10 = ((f0Var.f38448e - 1) / 3) + 1;
            if (i10 == 1) {
                if (qt.b.e(f0Var.f38447d)) {
                    return 91;
                }
                return 90;
            } else if (i10 == 2) {
                return 91;
            } else {
                return 92;
            }
        }

        private int l(f0 f0Var) {
            int d10 = qt.b.d(f0Var.f38447d, f0Var.f38448e);
            byte b10 = f0Var.f38449i;
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

        @Override // st.z
        /* renamed from: c */
        public st.p a(f0 f0Var) {
            return b();
        }

        @Override // st.z
        /* renamed from: d */
        public st.p g(f0 f0Var) {
            return b();
        }

        @Override // st.c0
        /* renamed from: e */
        public int n(f0 f0Var) {
            switch (this.f38459i) {
                case 14:
                    return f0Var.f38447d;
                case 15:
                    return f0Var.f38448e;
                case 16:
                    return f0Var.f38449i;
                case 17:
                    return f0Var.B0();
                case ChatViewRecyclerTypes.EPHEMERAL_INDICATION /* 18 */:
                    return f0Var.z0();
                case ChatViewRecyclerTypes.INTERACTION_STATUS /* 19 */:
                    return ((f0Var.f38449i - 1) / 7) + 1;
                default:
                    throw new UnsupportedOperationException(this.f38458e);
            }
        }

        @Override // st.z
        /* renamed from: f */
        public Integer h(f0 f0Var) {
            switch (this.f38459i) {
                case 14:
                    return f0.f38438r;
                case 15:
                    return f0.f38440t;
                case 16:
                    return Integer.valueOf(qt.b.d(f0Var.f38447d, f0Var.f38448e));
                case 17:
                    return qt.b.e(f0Var.f38447d) ? f0.f38442v : f0.f38441u;
                case ChatViewRecyclerTypes.EPHEMERAL_INDICATION /* 18 */:
                    return Integer.valueOf(j(f0Var));
                case ChatViewRecyclerTypes.INTERACTION_STATUS /* 19 */:
                    return Integer.valueOf(l(f0Var));
                default:
                    throw new UnsupportedOperationException(this.f38458e);
            }
        }

        @Override // st.z
        /* renamed from: o */
        public Integer m(f0 f0Var) {
            switch (this.f38459i) {
                case 14:
                    return f0.f38437q;
                case 15:
                case 16:
                case 17:
                case ChatViewRecyclerTypes.EPHEMERAL_INDICATION /* 18 */:
                case ChatViewRecyclerTypes.INTERACTION_STATUS /* 19 */:
                    return f0.f38439s;
                default:
                    throw new UnsupportedOperationException(this.f38458e);
            }
        }

        @Override // st.z
        /* renamed from: p */
        public Integer y(f0 f0Var) {
            return Integer.valueOf(n(f0Var));
        }

        public boolean q(f0 f0Var, int i10) {
            int i11;
            switch (this.f38459i) {
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
                    if (i10 < 1 || i10 > qt.b.d(f0Var.f38447d, f0Var.f38448e)) {
                        return false;
                    }
                    return true;
                case 17:
                    if (i10 >= 1) {
                        if (qt.b.e(f0Var.f38447d)) {
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
                    if (i10 < 1 || i10 > j(f0Var)) {
                        return false;
                    }
                    return true;
                case ChatViewRecyclerTypes.INTERACTION_STATUS /* 19 */:
                    if (i10 < 1 || i10 > l(f0Var)) {
                        return false;
                    }
                    return true;
                default:
                    throw new UnsupportedOperationException(this.f38458e);
            }
        }

        @Override // st.z
        /* renamed from: r */
        public boolean k(f0 f0Var, Integer num) {
            if (num != null && q(f0Var, num.intValue())) {
                return true;
            }
            return false;
        }

        @Override // st.c0
        /* renamed from: t */
        public f0 i(f0 f0Var, int i10, boolean z10) {
            if (!z10) {
                switch (this.f38459i) {
                    case 14:
                        return f0Var.U0(i10);
                    case 15:
                        return f0Var.T0(i10);
                    case 16:
                        return f0Var.P0(i10);
                    case 17:
                        return f0Var.R0(i10);
                    case ChatViewRecyclerTypes.EPHEMERAL_INDICATION /* 18 */:
                        if (i10 >= 1 && i10 <= j(f0Var)) {
                            return (f0) f0Var.K(i10 - f0Var.z0(), net.time4j.f.f38428s);
                        }
                        throw new IllegalArgumentException("Out of range: " + i10);
                    case ChatViewRecyclerTypes.INTERACTION_STATUS /* 19 */:
                        if (!z10 && (i10 < 1 || i10 > l(f0Var))) {
                            throw new IllegalArgumentException("Out of range: " + i10);
                        }
                        return (f0) f0Var.K(i10 - (((f0Var.f38449i - 1) / 7) + 1), net.time4j.f.f38427r);
                    default:
                        throw new UnsupportedOperationException(this.f38458e);
                }
            }
            return (f0) f0Var.K(qt.c.l(i10, n(f0Var)), (u) f0.M.N(this.f38457d));
        }

        @Override // st.z
        /* renamed from: u */
        public f0 s(f0 f0Var, Integer num, boolean z10) {
            if (num != null) {
                return i(f0Var, num.intValue(), z10);
            }
            throw new IllegalArgumentException("Missing element value.");
        }

        d(int i10, st.p pVar) {
            this.f38457d = pVar;
            this.f38458e = pVar.name();
            this.f38459i = i10;
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
    private static class e implements st.u {

        /* renamed from: d  reason: collision with root package name */
        private static final int f38460d = qt.b.i(qt.b.l(st.a0.MODIFIED_JULIAN_DATE.k(qt.c.b(System.currentTimeMillis(), 86400000), st.a0.UNIX))) + 20;

        private e() {
        }

        private static void e(st.q qVar, String str) {
            st.n0 n0Var = st.n0.ERROR_MESSAGE;
            if (qVar.B(n0Var, str)) {
                qVar.E(n0Var, str);
            }
        }

        private static boolean j(st.q qVar, int i10, int i11, int i12) {
            if (i12 >= 1 && (i12 <= 28 || i12 <= qt.b.d(i10, i11))) {
                return true;
            }
            e(qVar, "DAY_OF_MONTH out of range: " + i12);
            return false;
        }

        private static boolean k(st.q qVar, boolean z10, n0 n0Var, int i10) {
            int i11 = a.f38451b[n0Var.ordinal()];
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
        private static boolean l(st.q r2, int r3, int r4) {
            /*
                r0 = 1
                if (r4 < r0) goto L13
                r1 = 365(0x16d, float:5.11E-43)
                if (r4 <= r1) goto L12
                boolean r3 = qt.b.e(r3)
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
            throw new UnsupportedOperationException("Method not decompiled: net.time4j.f0.e.l(st.q, int, int):boolean");
        }

        private static boolean m(st.q qVar, int i10) {
            if (i10 >= 1 && i10 <= 12) {
                return true;
            }
            e(qVar, "MONTH_OF_YEAR out of range: " + i10);
            return false;
        }

        private static boolean n(st.q qVar, int i10) {
            if (i10 >= -999999999 && i10 <= 999999999) {
                return true;
            }
            e(qVar, "YEAR out of range: " + i10);
            return false;
        }

        @Override // st.u
        public st.f0 a() {
            return st.f0.f50375a;
        }

        @Override // st.u
        public st.x b() {
            return null;
        }

        @Override // st.u
        public int c() {
            return f38460d;
        }

        @Override // st.u
        /* renamed from: d */
        public f0 i(st.q qVar, st.d dVar, boolean z10, boolean z11) {
            y0 y0Var;
            l0 l0Var;
            int v10;
            st.p pVar = f0.f38445y;
            if (qVar.s(pVar)) {
                return (f0) qVar.t(pVar);
            }
            int v11 = qVar.v(f0.A);
            if (v11 != Integer.MIN_VALUE) {
                l0 l0Var2 = f0.E;
                int v12 = qVar.v(l0Var2);
                if (v12 == Integer.MIN_VALUE) {
                    st.p pVar2 = f0.D;
                    if (qVar.s(pVar2)) {
                        v12 = ((b0) qVar.t(pVar2)).d();
                    }
                }
                if (v12 != Integer.MIN_VALUE && (v10 = qVar.v((l0Var = f0.F))) != Integer.MIN_VALUE) {
                    if (z10) {
                        return (f0) ((f0) f0.H0(v11, 1, 1).F(l0Var2.v(Integer.valueOf(v12)))).F(l0Var.v(Integer.valueOf(v10)));
                    }
                    if (n(qVar, v11) && m(qVar, v12) && j(qVar, v11, v12, v10)) {
                        return f0.I0(v11, v12, v10, false);
                    }
                    return null;
                }
                l0 l0Var3 = f0.H;
                int v13 = qVar.v(l0Var3);
                if (v13 != Integer.MIN_VALUE) {
                    if (z10) {
                        return (f0) f0.G0(v11, 1).F(l0Var3.v(Integer.valueOf(v13)));
                    }
                    if (n(qVar, v11) && l(qVar, v11, v13)) {
                        return f0.G0(v11, v13);
                    }
                    return null;
                }
                int v14 = qVar.v(f0.I);
                if (v14 != Integer.MIN_VALUE) {
                    st.p pVar3 = f0.C;
                    if (qVar.s(pVar3)) {
                        n0 n0Var = (n0) qVar.t(pVar3);
                        boolean e10 = qt.b.e(v11);
                        int i10 = (e10 ? 91 : 90) + v14;
                        if (n0Var == n0.Q1) {
                            i10 = v14;
                        } else if (n0Var == n0.Q3) {
                            i10 += 91;
                        } else if (n0Var == n0.Q4) {
                            i10 += 183;
                        }
                        if (z10) {
                            return (f0) f0.G0(v11, 1).F(l0Var3.v(Integer.valueOf(i10)));
                        }
                        if (n(qVar, v11) && k(qVar, e10, n0Var, v14)) {
                            return f0.G0(v11, i10);
                        }
                        return null;
                    }
                }
            }
            int v15 = qVar.v(f0.B);
            if (v15 != Integer.MIN_VALUE) {
                a1 a1Var = a1.f38215x;
                if (qVar.s(a1Var.n())) {
                    int intValue = ((Integer) qVar.t(a1Var.n())).intValue();
                    st.p pVar4 = f0.G;
                    if (qVar.s(pVar4)) {
                        y0Var = (y0) qVar.t(pVar4);
                    } else {
                        if (qVar.s(a1Var.i())) {
                            y0Var = (y0) qVar.t(a1Var.i());
                        }
                        return null;
                    }
                    if (v15 >= -999999999 && v15 <= 999999999) {
                        f0 K0 = f0.K0(v15, intValue, y0Var, false);
                        if (K0 == null) {
                            e(qVar, f0.V0(intValue));
                        }
                        return K0;
                    }
                    e(qVar, f0.W0(v15));
                    return null;
                }
            }
            st.a0 a0Var = st.a0.MODIFIED_JULIAN_DATE;
            if (qVar.s(a0Var)) {
                return (f0) f0.L.b(st.a0.UTC.k(((Long) qVar.t(a0Var)).longValue(), a0Var));
            }
            if (qVar instanceof qt.f) {
                return ((i0) i0.S().i(qVar, dVar, z10, z11)).V();
            }
            return null;
        }

        @Override // st.u
        public String g(st.y yVar, Locale locale) {
            return tt.b.r(tt.e.d(yVar.a()), locale);
        }

        /* synthetic */ e(a aVar) {
            this();
        }

        @Override // st.u
        /* renamed from: f */
        public st.o h(f0 f0Var, st.d dVar) {
            return f0Var;
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
    private static class f implements st.k {
        private f() {
        }

        @Override // st.k
        public long a() {
            return 365241779741L;
        }

        @Override // st.k
        public long d() {
            return -365243219892L;
        }

        @Override // st.k
        /* renamed from: e */
        public long c(f0 f0Var) {
            return st.a0.UTC.k(qt.b.k(f0Var), st.a0.MODIFIED_JULIAN_DATE);
        }

        @Override // st.k
        /* renamed from: f */
        public f0 b(long j10) {
            if (j10 == -365243219892L) {
                return f0.f38435o;
            }
            if (j10 == 365241779741L) {
                return f0.f38436p;
            }
            long l10 = qt.b.l(st.a0.MODIFIED_JULIAN_DATE.k(j10, st.a0.UTC));
            return f0.H0(qt.b.i(l10), qt.b.h(l10), qt.b.g(l10));
        }

        /* synthetic */ f(a aVar) {
            this();
        }
    }

    static {
        f38443w = r7;
        f38444x = r8;
        int[] iArr = {31, 59, 90, 120, 151, 181, MediaImageViewKt.OBSCURED_IMAGE_MIN_HEIGHT, 243, 273, 304, 334, 365};
        int[] iArr2 = {31, 60, 91, 121, 152, 182, 213, 244, 274, 305, 335, 366};
        h hVar = h.f38495d;
        f38445y = hVar;
        f38446z = hVar;
        s G2 = s.G("YEAR", 14, -999999999, 999999999, 'u');
        A = G2;
        b1 b1Var = b1.f38269r;
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
        z0 z0Var = z0.f38812o;
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
        net.time4j.f fVar2 = net.time4j.f.f38428s;
        h0.b e10 = j10.e(hVar, bVar, fVar2).e(G2, new d(G2), net.time4j.f.f38424o).e(b1Var, b1.K(f0.class), x0.f38791d).e(pVar, c.o(pVar), net.time4j.f.f38425p);
        c o10 = c.o(pVar2);
        net.time4j.f fVar3 = net.time4j.f.f38426q;
        h0.b e11 = e10.e(pVar2, o10, fVar3).e(G3, new d(G3), fVar3).e(G4, new d(G4), fVar2).e(pVar3, c.o(pVar3), fVar2).e(G5, new d(G5), fVar2).e(G6, new d(G6), fVar2).e(z0Var, new d(19, z0Var), net.time4j.f.f38427r);
        O0(e11);
        N0(e11);
        M = e11.h();
    }

    private f0(int i10, int i11, int i12) {
        this.f38447d = i10;
        this.f38448e = (byte) i11;
        this.f38449i = (byte) i12;
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
            if (qt.b.e(i10)) {
                iArr = f38444x;
            } else {
                iArr = f38443w;
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
            qt.b.a(i10, i11, i12);
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
            if (z10 && (i10 < f38437q.intValue() || i10 > f38438r.intValue())) {
                throw new IllegalArgumentException(W0(i10));
            }
            int d10 = y0.h(qt.b.c(i10, 1, 1)).d();
            if (d10 <= 4) {
                i12 = 2 - d10;
            } else {
                i12 = 9 - d10;
            }
            int d11 = ((i12 + ((i11 - 1) * 7)) + y0Var.d()) - 1;
            int i13 = 365;
            if (d11 <= 0) {
                i10--;
                if (qt.b.e(i10)) {
                    i13 = 366;
                }
                d11 += i13;
            } else {
                if (qt.b.e(i10)) {
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

    public static f0 M0(long j10, st.a0 a0Var) {
        return (f0) L.b(st.a0.UTC.k(j10, a0Var));
    }

    private static void N0(h0.b bVar) {
        for (st.s sVar : qt.d.c().g(st.s.class)) {
            if (sVar.c(f0.class)) {
                bVar.f(sVar);
            }
        }
        bVar.f(new w0());
    }

    private static void O0(h0.b bVar) {
        EnumSet enumSet;
        EnumSet range = EnumSet.range(net.time4j.f.f38421d, net.time4j.f.f38426q);
        EnumSet range2 = EnumSet.range(net.time4j.f.f38427r, net.time4j.f.f38428s);
        net.time4j.f[] values = net.time4j.f.values();
        int length = values.length;
        int i10 = 0;
        while (i10 < length) {
            net.time4j.f fVar = values[i10];
            f.j jVar = new f.j(fVar);
            double length2 = fVar.getLength();
            if (fVar.compareTo(net.time4j.f.f38427r) < 0) {
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
        if (this.f38449i == i10) {
            return this;
        }
        return H0(this.f38447d, this.f38448e, i10);
    }

    /* JADX INFO: Access modifiers changed from: private */
    public f0 Q0(y0 y0Var) {
        y0 A0 = A0();
        if (A0 == y0Var) {
            return this;
        }
        return (f0) L.b(qt.c.f(C0(), y0Var.d() - A0.d()));
    }

    /* JADX INFO: Access modifiers changed from: private */
    public f0 R0(int i10) {
        if (B0() == i10) {
            return this;
        }
        return G0(this.f38447d, i10);
    }

    /* JADX INFO: Access modifiers changed from: private */
    public f0 T0(int i10) {
        if (this.f38448e == i10) {
            return this;
        }
        return H0(this.f38447d, i10, Math.min(qt.b.d(this.f38447d, i10), (int) this.f38449i));
    }

    /* JADX INFO: Access modifiers changed from: private */
    public f0 U0(int i10) {
        if (this.f38447d == i10) {
            return this;
        }
        return H0(i10, this.f38448e, Math.min(qt.b.d(i10, this.f38448e), (int) this.f38449i));
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
        long f10 = qt.c.f(f0Var.f38449i, j10);
        if (f10 >= 1 && f10 <= 28) {
            return H0(f0Var.f38447d, f0Var.f38448e, (int) f10);
        }
        long f11 = qt.c.f(f0Var.B0(), j10);
        if (f11 >= 1 && f11 <= 365) {
            return G0(f0Var.f38447d, (int) f11);
        }
        return (f0) L.b(qt.c.f(f0Var.C0(), j10));
    }

    public static st.h0 r0() {
        return M;
    }

    private void readObject(ObjectInputStream objectInputStream) {
        throw new InvalidObjectException("Serialization proxy required.");
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public static f0 s0(net.time4j.f fVar, f0 f0Var, long j10, int i10) {
        switch (a.f38450a[fVar.ordinal()]) {
            case 1:
                return s0(net.time4j.f.f38426q, f0Var, qt.c.i(j10, 12000L), i10);
            case 2:
                return s0(net.time4j.f.f38426q, f0Var, qt.c.i(j10, 1200L), i10);
            case 3:
                return s0(net.time4j.f.f38426q, f0Var, qt.c.i(j10, 120L), i10);
            case 4:
                return s0(net.time4j.f.f38426q, f0Var, qt.c.i(j10, 12L), i10);
            case 5:
                return s0(net.time4j.f.f38426q, f0Var, qt.c.i(j10, 3L), i10);
            case 6:
                return x0(f0Var, qt.c.f(f0Var.D0(), j10), f0Var.f38449i, i10);
            case 7:
                return s0(net.time4j.f.f38428s, f0Var, qt.c.i(j10, 7L), i10);
            case 8:
                return n0(f0Var, j10);
            default:
                throw new UnsupportedOperationException(fVar.name());
        }
    }

    private static void t0(Map map, st.p pVar) {
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
            i11 = qt.c.j(i10);
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

    public static f0 w0(qt.a aVar) {
        if (aVar instanceof f0) {
            return (f0) aVar;
        }
        return H0(aVar.f(), aVar.r(), aVar.g());
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
            byte r0 = r7.f38449i
            int r2 = r7.lengthOfMonth()
            if (r0 != r2) goto Ld
            r11 = r1
        Ld:
            r0 = 12
            long r2 = qt.c.b(r8, r0)
            r4 = 1970(0x7b2, double:9.733E-321)
            long r2 = qt.c.f(r2, r4)
            int r2 = qt.c.g(r2)
            int r0 = qt.c.d(r8, r0)
            r3 = 1
            int r0 = r0 + r3
            int r4 = qt.b.d(r2, r0)
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
            st.r r8 = new st.r
            java.lang.String r7 = r7.toString()
            r8.<init>(r7)
            throw r8
        L64:
            long r8 = qt.c.f(r8, r5)
            int r10 = r10 - r4
            net.time4j.f0 r7 = x0(r7, r8, r10, r11)
            return r7
        L6e:
            long r8 = qt.c.f(r8, r5)
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
        switch (this.f38448e) {
            case 1:
            case 4:
            case 7:
            case 10:
                return this.f38449i;
            case 2:
            case 8:
            case 11:
                return this.f38449i + 31;
            case 3:
                if (qt.b.e(this.f38447d)) {
                    b10 = 60;
                } else {
                    b10 = 59;
                }
                return b10 + this.f38449i;
            case 5:
                return this.f38449i + 30;
            case 6:
            case 12:
                return this.f38449i + 61;
            case 9:
                return this.f38449i + 62;
            default:
                throw new AssertionError("Unknown month: " + ((int) this.f38448e));
        }
    }

    public y0 A0() {
        return y0.h(qt.b.c(this.f38447d, this.f38448e, this.f38449i));
    }

    public int B0() {
        byte b10 = this.f38448e;
        if (b10 != 1) {
            if (b10 != 2) {
                return f38443w[b10 - 2] + this.f38449i + (qt.b.e(this.f38447d) ? 1 : 0);
            }
            return this.f38449i + 31;
        }
        return this.f38449i;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public long C0() {
        return L.c(this);
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public long D0() {
        return (((this.f38447d - 1970) * 12) + this.f38448e) - 1;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public int E0() {
        return ((Integer) t(a1.f38215x.n())).intValue();
    }

    /* JADX INFO: Access modifiers changed from: protected */
    @Override // st.q
    /* renamed from: H */
    public st.h0 w() {
        return M;
    }

    /* JADX INFO: Access modifiers changed from: protected */
    @Override // st.m
    public int M(st.g gVar) {
        if (gVar instanceof f0) {
            f0 f0Var = (f0) gVar;
            int i10 = this.f38447d - f0Var.f38447d;
            if (i10 == 0) {
                int i11 = this.f38448e - f0Var.f38448e;
                if (i11 == 0) {
                    return this.f38449i - f0Var.f38449i;
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

    @Override // st.m
    public boolean equals(Object obj) {
        if (this == obj) {
            return true;
        }
        if (obj instanceof f0) {
            f0 f0Var = (f0) obj;
            if (this.f38449i == f0Var.f38449i && this.f38448e == f0Var.f38448e && this.f38447d == f0Var.f38447d) {
                return true;
            }
        }
        return false;
    }

    @Override // qt.a
    public int f() {
        return this.f38447d;
    }

    @Override // qt.a
    public int g() {
        return this.f38449i;
    }

    @Override // st.m
    public int hashCode() {
        int i10 = this.f38447d;
        return (((i10 << 11) + (this.f38448e << 6)) + this.f38449i) ^ (i10 & (-2048));
    }

    public int lengthOfMonth() {
        return qt.b.d(this.f38447d, this.f38448e);
    }

    public i0 o0(g0 g0Var) {
        return i0.b0(this, g0Var);
    }

    public i0 p0() {
        return o0(g0.f38477x);
    }

    public i0 q0(int i10, int i11, int i12) {
        return o0(g0.I0(i10, i11, i12));
    }

    @Override // qt.a
    public int r() {
        return this.f38448e;
    }

    @Override // qt.a
    public String toString() {
        StringBuilder sb2 = new StringBuilder(32);
        v0(sb2, this.f38447d);
        u0(sb2, this.f38448e);
        u0(sb2, this.f38449i);
        return sb2.toString();
    }

    /* JADX INFO: Access modifiers changed from: protected */
    @Override // st.q
    /* renamed from: y0 */
    public f0 x() {
        return this;
    }
}

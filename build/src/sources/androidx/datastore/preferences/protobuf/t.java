package androidx.datastore.preferences.protobuf;

import java.lang.reflect.Type;
/* JADX WARN: Enum visitor error
jadx.core.utils.exceptions.JadxRuntimeException: Init of enum q uses external variables
	at jadx.core.dex.visitors.EnumVisitor.createEnumFieldByConstructor(EnumVisitor.java:444)
	at jadx.core.dex.visitors.EnumVisitor.processEnumFieldByRegister(EnumVisitor.java:391)
	at jadx.core.dex.visitors.EnumVisitor.extractEnumFieldsFromFilledArray(EnumVisitor.java:320)
	at jadx.core.dex.visitors.EnumVisitor.extractEnumFieldsFromInsn(EnumVisitor.java:258)
	at jadx.core.dex.visitors.EnumVisitor.convertToEnum(EnumVisitor.java:151)
	at jadx.core.dex.visitors.EnumVisitor.visit(EnumVisitor.java:100)
 */
/* JADX WARN: Failed to restore enum class, 'enum' modifier and super class removed */
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public final class t {
    public static final t A;
    public static final t B;
    public static final t C;
    public static final t D;
    public static final t E;
    public static final t F;
    public static final t G;
    public static final t H;
    public static final t I;
    public static final t J;
    public static final t K;
    public static final t L;
    public static final t M;
    public static final t N;
    public static final t O;
    public static final t P;
    public static final t Q;
    public static final t R;
    public static final t S;
    public static final t T;
    public static final t U;
    public static final t V;
    public static final t W;
    public static final t X;
    public static final t Y;
    public static final t Z;

    /* renamed from: a0  reason: collision with root package name */
    public static final t f3830a0;

    /* renamed from: b0  reason: collision with root package name */
    public static final t f3831b0;

    /* renamed from: c0  reason: collision with root package name */
    public static final t f3832c0;

    /* renamed from: d0  reason: collision with root package name */
    public static final t f3833d0;

    /* renamed from: e0  reason: collision with root package name */
    public static final t f3834e0;

    /* renamed from: f0  reason: collision with root package name */
    public static final t f3835f0;

    /* renamed from: g0  reason: collision with root package name */
    public static final t f3836g0;

    /* renamed from: h0  reason: collision with root package name */
    public static final t f3837h0;

    /* renamed from: i0  reason: collision with root package name */
    public static final t f3838i0;

    /* renamed from: j0  reason: collision with root package name */
    public static final t f3839j0;

    /* renamed from: k0  reason: collision with root package name */
    public static final t f3840k0;

    /* renamed from: l0  reason: collision with root package name */
    public static final t f3841l0;

    /* renamed from: m0  reason: collision with root package name */
    public static final t f3842m0;

    /* renamed from: n0  reason: collision with root package name */
    public static final t f3843n0;

    /* renamed from: o0  reason: collision with root package name */
    public static final t f3844o0;

    /* renamed from: p0  reason: collision with root package name */
    private static final t[] f3845p0;

    /* renamed from: q  reason: collision with root package name */
    public static final t f3846q;

    /* renamed from: q0  reason: collision with root package name */
    private static final Type[] f3847q0;

    /* renamed from: r  reason: collision with root package name */
    public static final t f3848r;

    /* renamed from: r0  reason: collision with root package name */
    private static final /* synthetic */ t[] f3849r0;

    /* renamed from: s  reason: collision with root package name */
    public static final t f3850s;

    /* renamed from: t  reason: collision with root package name */
    public static final t f3851t;

    /* renamed from: u  reason: collision with root package name */
    public static final t f3852u;

    /* renamed from: v  reason: collision with root package name */
    public static final t f3853v;

    /* renamed from: w  reason: collision with root package name */
    public static final t f3854w;

    /* renamed from: x  reason: collision with root package name */
    public static final t f3855x;

    /* renamed from: y  reason: collision with root package name */
    public static final t f3856y;

    /* renamed from: z  reason: collision with root package name */
    public static final t f3857z;

    /* renamed from: d  reason: collision with root package name */
    private final a0 f3858d;

    /* renamed from: e  reason: collision with root package name */
    private final int f3859e;

    /* renamed from: i  reason: collision with root package name */
    private final b f3860i;

    /* renamed from: o  reason: collision with root package name */
    private final Class f3861o;

    /* renamed from: p  reason: collision with root package name */
    private final boolean f3862p;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    static /* synthetic */ class a {

        /* renamed from: a  reason: collision with root package name */
        static final /* synthetic */ int[] f3863a;

        /* renamed from: b  reason: collision with root package name */
        static final /* synthetic */ int[] f3864b;

        static {
            int[] iArr = new int[a0.values().length];
            f3864b = iArr;
            try {
                iArr[a0.f3606v.ordinal()] = 1;
            } catch (NoSuchFieldError unused) {
            }
            try {
                f3864b[a0.f3608x.ordinal()] = 2;
            } catch (NoSuchFieldError unused2) {
            }
            try {
                f3864b[a0.f3605u.ordinal()] = 3;
            } catch (NoSuchFieldError unused3) {
            }
            int[] iArr2 = new int[b.values().length];
            f3863a = iArr2;
            try {
                iArr2[b.MAP.ordinal()] = 1;
            } catch (NoSuchFieldError unused4) {
            }
            try {
                f3863a[b.VECTOR.ordinal()] = 2;
            } catch (NoSuchFieldError unused5) {
            }
            try {
                f3863a[b.SCALAR.ordinal()] = 3;
            } catch (NoSuchFieldError unused6) {
            }
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    enum b {
        SCALAR(false),
        VECTOR(true),
        PACKED_VECTOR(true),
        MAP(false);
        

        /* renamed from: d  reason: collision with root package name */
        private final boolean f3870d;

        b(boolean z10) {
            this.f3870d = z10;
        }
    }

    static {
        b bVar = b.SCALAR;
        a0 a0Var = a0.f3603s;
        t tVar = new t("DOUBLE", 0, 0, bVar, a0Var);
        f3846q = tVar;
        a0 a0Var2 = a0.f3602r;
        t tVar2 = new t("FLOAT", 1, 1, bVar, a0Var2);
        f3848r = tVar2;
        a0 a0Var3 = a0.f3601q;
        t tVar3 = new t("INT64", 2, 2, bVar, a0Var3);
        f3850s = tVar3;
        t tVar4 = new t("UINT64", 3, 3, bVar, a0Var3);
        f3851t = tVar4;
        a0 a0Var4 = a0.f3600p;
        t tVar5 = new t("INT32", 4, 4, bVar, a0Var4);
        f3852u = tVar5;
        t tVar6 = new t("FIXED64", 5, 5, bVar, a0Var3);
        f3853v = tVar6;
        t tVar7 = new t("FIXED32", 6, 6, bVar, a0Var4);
        f3854w = tVar7;
        a0 a0Var5 = a0.f3604t;
        t tVar8 = new t("BOOL", 7, 7, bVar, a0Var5);
        f3855x = tVar8;
        a0 a0Var6 = a0.f3605u;
        t tVar9 = new t("STRING", 8, 8, bVar, a0Var6);
        f3856y = tVar9;
        a0 a0Var7 = a0.f3608x;
        t tVar10 = new t("MESSAGE", 9, 9, bVar, a0Var7);
        f3857z = tVar10;
        a0 a0Var8 = a0.f3606v;
        t tVar11 = new t("BYTES", 10, 10, bVar, a0Var8);
        A = tVar11;
        t tVar12 = new t("UINT32", 11, 11, bVar, a0Var4);
        B = tVar12;
        a0 a0Var9 = a0.f3607w;
        t tVar13 = new t("ENUM", 12, 12, bVar, a0Var9);
        C = tVar13;
        t tVar14 = new t("SFIXED32", 13, 13, bVar, a0Var4);
        D = tVar14;
        t tVar15 = new t("SFIXED64", 14, 14, bVar, a0Var3);
        E = tVar15;
        t tVar16 = new t("SINT32", 15, 15, bVar, a0Var4);
        F = tVar16;
        t tVar17 = new t("SINT64", 16, 16, bVar, a0Var3);
        G = tVar17;
        t tVar18 = new t("GROUP", 17, 17, bVar, a0Var7);
        H = tVar18;
        b bVar2 = b.VECTOR;
        t tVar19 = new t("DOUBLE_LIST", 18, 18, bVar2, a0Var);
        I = tVar19;
        t tVar20 = new t("FLOAT_LIST", 19, 19, bVar2, a0Var2);
        J = tVar20;
        t tVar21 = new t("INT64_LIST", 20, 20, bVar2, a0Var3);
        K = tVar21;
        t tVar22 = new t("UINT64_LIST", 21, 21, bVar2, a0Var3);
        L = tVar22;
        t tVar23 = new t("INT32_LIST", 22, 22, bVar2, a0Var4);
        M = tVar23;
        t tVar24 = new t("FIXED64_LIST", 23, 23, bVar2, a0Var3);
        N = tVar24;
        t tVar25 = new t("FIXED32_LIST", 24, 24, bVar2, a0Var4);
        O = tVar25;
        t tVar26 = new t("BOOL_LIST", 25, 25, bVar2, a0Var5);
        P = tVar26;
        t tVar27 = new t("STRING_LIST", 26, 26, bVar2, a0Var6);
        Q = tVar27;
        t tVar28 = new t("MESSAGE_LIST", 27, 27, bVar2, a0Var7);
        R = tVar28;
        t tVar29 = new t("BYTES_LIST", 28, 28, bVar2, a0Var8);
        S = tVar29;
        t tVar30 = new t("UINT32_LIST", 29, 29, bVar2, a0Var4);
        T = tVar30;
        t tVar31 = new t("ENUM_LIST", 30, 30, bVar2, a0Var9);
        U = tVar31;
        t tVar32 = new t("SFIXED32_LIST", 31, 31, bVar2, a0Var4);
        V = tVar32;
        t tVar33 = new t("SFIXED64_LIST", 32, 32, bVar2, a0Var3);
        W = tVar33;
        t tVar34 = new t("SINT32_LIST", 33, 33, bVar2, a0Var4);
        X = tVar34;
        t tVar35 = new t("SINT64_LIST", 34, 34, bVar2, a0Var3);
        Y = tVar35;
        b bVar3 = b.PACKED_VECTOR;
        t tVar36 = new t("DOUBLE_LIST_PACKED", 35, 35, bVar3, a0Var);
        Z = tVar36;
        t tVar37 = new t("FLOAT_LIST_PACKED", 36, 36, bVar3, a0Var2);
        f3830a0 = tVar37;
        t tVar38 = new t("INT64_LIST_PACKED", 37, 37, bVar3, a0Var3);
        f3831b0 = tVar38;
        t tVar39 = new t("UINT64_LIST_PACKED", 38, 38, bVar3, a0Var3);
        f3832c0 = tVar39;
        t tVar40 = new t("INT32_LIST_PACKED", 39, 39, bVar3, a0Var4);
        f3833d0 = tVar40;
        t tVar41 = new t("FIXED64_LIST_PACKED", 40, 40, bVar3, a0Var3);
        f3834e0 = tVar41;
        t tVar42 = new t("FIXED32_LIST_PACKED", 41, 41, bVar3, a0Var4);
        f3835f0 = tVar42;
        t tVar43 = new t("BOOL_LIST_PACKED", 42, 42, bVar3, a0Var5);
        f3836g0 = tVar43;
        t tVar44 = new t("UINT32_LIST_PACKED", 43, 43, bVar3, a0Var4);
        f3837h0 = tVar44;
        t tVar45 = new t("ENUM_LIST_PACKED", 44, 44, bVar3, a0Var9);
        f3838i0 = tVar45;
        t tVar46 = new t("SFIXED32_LIST_PACKED", 45, 45, bVar3, a0Var4);
        f3839j0 = tVar46;
        t tVar47 = new t("SFIXED64_LIST_PACKED", 46, 46, bVar3, a0Var3);
        f3840k0 = tVar47;
        t tVar48 = new t("SINT32_LIST_PACKED", 47, 47, bVar3, a0Var4);
        f3841l0 = tVar48;
        t tVar49 = new t("SINT64_LIST_PACKED", 48, 48, bVar3, a0Var3);
        f3842m0 = tVar49;
        t tVar50 = new t("GROUP_LIST", 49, 49, bVar2, a0Var7);
        f3843n0 = tVar50;
        t tVar51 = new t("MAP", 50, 50, b.MAP, a0.f3599o);
        f3844o0 = tVar51;
        f3849r0 = new t[]{tVar, tVar2, tVar3, tVar4, tVar5, tVar6, tVar7, tVar8, tVar9, tVar10, tVar11, tVar12, tVar13, tVar14, tVar15, tVar16, tVar17, tVar18, tVar19, tVar20, tVar21, tVar22, tVar23, tVar24, tVar25, tVar26, tVar27, tVar28, tVar29, tVar30, tVar31, tVar32, tVar33, tVar34, tVar35, tVar36, tVar37, tVar38, tVar39, tVar40, tVar41, tVar42, tVar43, tVar44, tVar45, tVar46, tVar47, tVar48, tVar49, tVar50, tVar51};
        f3847q0 = new Type[0];
        t[] values = values();
        f3845p0 = new t[values.length];
        for (t tVar52 : values) {
            f3845p0[tVar52.f3859e] = tVar52;
        }
    }

    private t(String str, int i10, int i11, b bVar, a0 a0Var) {
        int i12;
        this.f3859e = i11;
        this.f3860i = bVar;
        this.f3858d = a0Var;
        int i13 = a.f3863a[bVar.ordinal()];
        boolean z10 = true;
        if (i13 != 1) {
            if (i13 != 2) {
                this.f3861o = null;
            } else {
                this.f3861o = a0Var.a();
            }
        } else {
            this.f3861o = a0Var.a();
        }
        this.f3862p = (bVar != b.SCALAR || (i12 = a.f3864b[a0Var.ordinal()]) == 1 || i12 == 2 || i12 == 3) ? false : false;
    }

    public static t valueOf(String str) {
        return (t) Enum.valueOf(t.class, str);
    }

    public static t[] values() {
        return (t[]) f3849r0.clone();
    }

    public int a() {
        return this.f3859e;
    }
}

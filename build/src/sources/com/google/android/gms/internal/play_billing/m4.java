package com.google.android.gms.internal.play_billing;
/* JADX WARN: Enum visitor error
jadx.core.utils.exceptions.JadxRuntimeException: Init of enum o uses external variables
	at jadx.core.dex.visitors.EnumVisitor.createEnumFieldByConstructor(EnumVisitor.java:444)
	at jadx.core.dex.visitors.EnumVisitor.processEnumFieldByRegister(EnumVisitor.java:391)
	at jadx.core.dex.visitors.EnumVisitor.extractEnumFieldsFromFilledArray(EnumVisitor.java:320)
	at jadx.core.dex.visitors.EnumVisitor.extractEnumFieldsFromInsn(EnumVisitor.java:258)
	at jadx.core.dex.visitors.EnumVisitor.convertToEnum(EnumVisitor.java:151)
	at jadx.core.dex.visitors.EnumVisitor.visit(EnumVisitor.java:100)
 */
/* JADX WARN: Failed to restore enum class, 'enum' modifier and super class removed */
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class m4 {
    public static final m4 A;
    public static final m4 B;
    public static final m4 C;
    public static final m4 D;
    private static final /* synthetic */ m4[] E;

    /* renamed from: e  reason: collision with root package name */
    public static final m4 f14411e;

    /* renamed from: i  reason: collision with root package name */
    public static final m4 f14412i;

    /* renamed from: o  reason: collision with root package name */
    public static final m4 f14413o;

    /* renamed from: p  reason: collision with root package name */
    public static final m4 f14414p;

    /* renamed from: q  reason: collision with root package name */
    public static final m4 f14415q;

    /* renamed from: r  reason: collision with root package name */
    public static final m4 f14416r;

    /* renamed from: s  reason: collision with root package name */
    public static final m4 f14417s;

    /* renamed from: t  reason: collision with root package name */
    public static final m4 f14418t;

    /* renamed from: u  reason: collision with root package name */
    public static final m4 f14419u;

    /* renamed from: v  reason: collision with root package name */
    public static final m4 f14420v;

    /* renamed from: w  reason: collision with root package name */
    public static final m4 f14421w;

    /* renamed from: x  reason: collision with root package name */
    public static final m4 f14422x;

    /* renamed from: y  reason: collision with root package name */
    public static final m4 f14423y;

    /* renamed from: z  reason: collision with root package name */
    public static final m4 f14424z;

    /* renamed from: d  reason: collision with root package name */
    private final n4 f14425d;

    static {
        m4 m4Var = new m4("DOUBLE", 0, n4.DOUBLE, 1);
        f14411e = m4Var;
        m4 m4Var2 = new m4("FLOAT", 1, n4.FLOAT, 5);
        f14412i = m4Var2;
        n4 n4Var = n4.LONG;
        m4 m4Var3 = new m4("INT64", 2, n4Var, 0);
        f14413o = m4Var3;
        m4 m4Var4 = new m4("UINT64", 3, n4Var, 0);
        f14414p = m4Var4;
        n4 n4Var2 = n4.INT;
        m4 m4Var5 = new m4("INT32", 4, n4Var2, 0);
        f14415q = m4Var5;
        m4 m4Var6 = new m4("FIXED64", 5, n4Var, 1);
        f14416r = m4Var6;
        m4 m4Var7 = new m4("FIXED32", 6, n4Var2, 5);
        f14417s = m4Var7;
        m4 m4Var8 = new m4("BOOL", 7, n4.BOOLEAN, 0);
        f14418t = m4Var8;
        m4 m4Var9 = new m4("STRING", 8, n4.STRING, 2);
        f14419u = m4Var9;
        n4 n4Var3 = n4.MESSAGE;
        m4 m4Var10 = new m4("GROUP", 9, n4Var3, 3);
        f14420v = m4Var10;
        m4 m4Var11 = new m4("MESSAGE", 10, n4Var3, 2);
        f14421w = m4Var11;
        m4 m4Var12 = new m4("BYTES", 11, n4.BYTE_STRING, 2);
        f14422x = m4Var12;
        m4 m4Var13 = new m4("UINT32", 12, n4Var2, 0);
        f14423y = m4Var13;
        m4 m4Var14 = new m4("ENUM", 13, n4.ENUM, 0);
        f14424z = m4Var14;
        m4 m4Var15 = new m4("SFIXED32", 14, n4Var2, 5);
        A = m4Var15;
        m4 m4Var16 = new m4("SFIXED64", 15, n4Var, 1);
        B = m4Var16;
        m4 m4Var17 = new m4("SINT32", 16, n4Var2, 0);
        C = m4Var17;
        m4 m4Var18 = new m4("SINT64", 17, n4Var, 0);
        D = m4Var18;
        E = new m4[]{m4Var, m4Var2, m4Var3, m4Var4, m4Var5, m4Var6, m4Var7, m4Var8, m4Var9, m4Var10, m4Var11, m4Var12, m4Var13, m4Var14, m4Var15, m4Var16, m4Var17, m4Var18};
    }

    private m4(String str, int i10, n4 n4Var, int i11) {
        this.f14425d = n4Var;
    }

    public static m4[] values() {
        return (m4[]) E.clone();
    }

    public final n4 a() {
        return this.f14425d;
    }
}

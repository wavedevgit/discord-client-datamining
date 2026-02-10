package com.google.android.gms.internal.play_billing;
/* JADX WARN: Enum visitor error
jadx.core.utils.exceptions.JadxRuntimeException: Init of enum p uses external variables
	at jadx.core.dex.visitors.EnumVisitor.createEnumFieldByConstructor(EnumVisitor.java:444)
	at jadx.core.dex.visitors.EnumVisitor.processEnumFieldByRegister(EnumVisitor.java:391)
	at jadx.core.dex.visitors.EnumVisitor.extractEnumFieldsFromFilledArray(EnumVisitor.java:320)
	at jadx.core.dex.visitors.EnumVisitor.extractEnumFieldsFromInsn(EnumVisitor.java:258)
	at jadx.core.dex.visitors.EnumVisitor.convertToEnum(EnumVisitor.java:151)
	at jadx.core.dex.visitors.EnumVisitor.visit(EnumVisitor.java:100)
 */
/* JADX WARN: Failed to restore enum class, 'enum' modifier and super class removed */
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class b2 {

    /* renamed from: o  reason: collision with root package name */
    public static final b2 f14857o;

    /* renamed from: p  reason: collision with root package name */
    public static final b2 f14858p;

    /* renamed from: q  reason: collision with root package name */
    public static final b2 f14859q;

    /* renamed from: r  reason: collision with root package name */
    public static final b2 f14860r;

    /* renamed from: s  reason: collision with root package name */
    public static final b2 f14861s;

    /* renamed from: t  reason: collision with root package name */
    public static final b2 f14862t;

    /* renamed from: u  reason: collision with root package name */
    public static final b2 f14863u;

    /* renamed from: v  reason: collision with root package name */
    public static final b2 f14864v;

    /* renamed from: w  reason: collision with root package name */
    public static final b2 f14865w;

    /* renamed from: x  reason: collision with root package name */
    public static final b2 f14866x;

    /* renamed from: y  reason: collision with root package name */
    private static final /* synthetic */ b2[] f14867y;

    /* renamed from: d  reason: collision with root package name */
    private final Class f14868d;

    /* renamed from: e  reason: collision with root package name */
    private final Class f14869e;

    /* renamed from: i  reason: collision with root package name */
    private final Object f14870i;

    static {
        b2 b2Var = new b2("VOID", 0, Void.class, Void.class, null);
        f14857o = b2Var;
        Class cls = Integer.TYPE;
        b2 b2Var2 = new b2("INT", 1, cls, Integer.class, 0);
        f14858p = b2Var2;
        b2 b2Var3 = new b2("LONG", 2, Long.TYPE, Long.class, 0L);
        f14859q = b2Var3;
        b2 b2Var4 = new b2("FLOAT", 3, Float.TYPE, Float.class, Float.valueOf(0.0f));
        f14860r = b2Var4;
        b2 b2Var5 = new b2("DOUBLE", 4, Double.TYPE, Double.class, Double.valueOf(0.0d));
        f14861s = b2Var5;
        b2 b2Var6 = new b2("BOOLEAN", 5, Boolean.TYPE, Boolean.class, Boolean.FALSE);
        f14862t = b2Var6;
        b2 b2Var7 = new b2("STRING", 6, String.class, String.class, "");
        f14863u = b2Var7;
        b2 b2Var8 = new b2("BYTE_STRING", 7, r0.class, r0.class, r0.f15039e);
        f14864v = b2Var8;
        b2 b2Var9 = new b2("ENUM", 8, cls, Integer.class, null);
        f14865w = b2Var9;
        b2 b2Var10 = new b2("MESSAGE", 9, Object.class, Object.class, null);
        f14866x = b2Var10;
        f14867y = new b2[]{b2Var, b2Var2, b2Var3, b2Var4, b2Var5, b2Var6, b2Var7, b2Var8, b2Var9, b2Var10};
    }

    private b2(String str, int i10, Class cls, Class cls2, Object obj) {
        this.f14868d = cls;
        this.f14869e = cls2;
        this.f14870i = obj;
    }

    public static b2[] values() {
        return (b2[]) f14867y.clone();
    }

    public final Class a() {
        return this.f14869e;
    }
}

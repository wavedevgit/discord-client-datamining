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
    public static final b2 f13783o;

    /* renamed from: p  reason: collision with root package name */
    public static final b2 f13784p;

    /* renamed from: q  reason: collision with root package name */
    public static final b2 f13785q;

    /* renamed from: r  reason: collision with root package name */
    public static final b2 f13786r;

    /* renamed from: s  reason: collision with root package name */
    public static final b2 f13787s;

    /* renamed from: t  reason: collision with root package name */
    public static final b2 f13788t;

    /* renamed from: u  reason: collision with root package name */
    public static final b2 f13789u;

    /* renamed from: v  reason: collision with root package name */
    public static final b2 f13790v;

    /* renamed from: w  reason: collision with root package name */
    public static final b2 f13791w;

    /* renamed from: x  reason: collision with root package name */
    public static final b2 f13792x;

    /* renamed from: y  reason: collision with root package name */
    private static final /* synthetic */ b2[] f13793y;

    /* renamed from: d  reason: collision with root package name */
    private final Class f13794d;

    /* renamed from: e  reason: collision with root package name */
    private final Class f13795e;

    /* renamed from: i  reason: collision with root package name */
    private final Object f13796i;

    static {
        b2 b2Var = new b2("VOID", 0, Void.class, Void.class, null);
        f13783o = b2Var;
        Class cls = Integer.TYPE;
        b2 b2Var2 = new b2("INT", 1, cls, Integer.class, 0);
        f13784p = b2Var2;
        b2 b2Var3 = new b2("LONG", 2, Long.TYPE, Long.class, 0L);
        f13785q = b2Var3;
        b2 b2Var4 = new b2("FLOAT", 3, Float.TYPE, Float.class, Float.valueOf(0.0f));
        f13786r = b2Var4;
        b2 b2Var5 = new b2("DOUBLE", 4, Double.TYPE, Double.class, Double.valueOf(0.0d));
        f13787s = b2Var5;
        b2 b2Var6 = new b2("BOOLEAN", 5, Boolean.TYPE, Boolean.class, Boolean.FALSE);
        f13788t = b2Var6;
        b2 b2Var7 = new b2("STRING", 6, String.class, String.class, "");
        f13789u = b2Var7;
        b2 b2Var8 = new b2("BYTE_STRING", 7, r0.class, r0.class, r0.f13965e);
        f13790v = b2Var8;
        b2 b2Var9 = new b2("ENUM", 8, cls, Integer.class, null);
        f13791w = b2Var9;
        b2 b2Var10 = new b2("MESSAGE", 9, Object.class, Object.class, null);
        f13792x = b2Var10;
        f13793y = new b2[]{b2Var, b2Var2, b2Var3, b2Var4, b2Var5, b2Var6, b2Var7, b2Var8, b2Var9, b2Var10};
    }

    private b2(String str, int i10, Class cls, Class cls2, Object obj) {
        this.f13794d = cls;
        this.f13795e = cls2;
        this.f13796i = obj;
    }

    public static b2[] values() {
        return (b2[]) f13793y.clone();
    }

    public final Class a() {
        return this.f13795e;
    }
}

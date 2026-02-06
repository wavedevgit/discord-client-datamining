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
    public static final b2 f14140o;

    /* renamed from: p  reason: collision with root package name */
    public static final b2 f14141p;

    /* renamed from: q  reason: collision with root package name */
    public static final b2 f14142q;

    /* renamed from: r  reason: collision with root package name */
    public static final b2 f14143r;

    /* renamed from: s  reason: collision with root package name */
    public static final b2 f14144s;

    /* renamed from: t  reason: collision with root package name */
    public static final b2 f14145t;

    /* renamed from: u  reason: collision with root package name */
    public static final b2 f14146u;

    /* renamed from: v  reason: collision with root package name */
    public static final b2 f14147v;

    /* renamed from: w  reason: collision with root package name */
    public static final b2 f14148w;

    /* renamed from: x  reason: collision with root package name */
    public static final b2 f14149x;

    /* renamed from: y  reason: collision with root package name */
    private static final /* synthetic */ b2[] f14150y;

    /* renamed from: d  reason: collision with root package name */
    private final Class f14151d;

    /* renamed from: e  reason: collision with root package name */
    private final Class f14152e;

    /* renamed from: i  reason: collision with root package name */
    private final Object f14153i;

    static {
        b2 b2Var = new b2("VOID", 0, Void.class, Void.class, null);
        f14140o = b2Var;
        Class cls = Integer.TYPE;
        b2 b2Var2 = new b2("INT", 1, cls, Integer.class, 0);
        f14141p = b2Var2;
        b2 b2Var3 = new b2("LONG", 2, Long.TYPE, Long.class, 0L);
        f14142q = b2Var3;
        b2 b2Var4 = new b2("FLOAT", 3, Float.TYPE, Float.class, Float.valueOf(0.0f));
        f14143r = b2Var4;
        b2 b2Var5 = new b2("DOUBLE", 4, Double.TYPE, Double.class, Double.valueOf(0.0d));
        f14144s = b2Var5;
        b2 b2Var6 = new b2("BOOLEAN", 5, Boolean.TYPE, Boolean.class, Boolean.FALSE);
        f14145t = b2Var6;
        b2 b2Var7 = new b2("STRING", 6, String.class, String.class, "");
        f14146u = b2Var7;
        b2 b2Var8 = new b2("BYTE_STRING", 7, r0.class, r0.class, r0.f14322e);
        f14147v = b2Var8;
        b2 b2Var9 = new b2("ENUM", 8, cls, Integer.class, null);
        f14148w = b2Var9;
        b2 b2Var10 = new b2("MESSAGE", 9, Object.class, Object.class, null);
        f14149x = b2Var10;
        f14150y = new b2[]{b2Var, b2Var2, b2Var3, b2Var4, b2Var5, b2Var6, b2Var7, b2Var8, b2Var9, b2Var10};
    }

    private b2(String str, int i10, Class cls, Class cls2, Object obj) {
        this.f14151d = cls;
        this.f14152e = cls2;
        this.f14153i = obj;
    }

    public static b2[] values() {
        return (b2[]) f14150y.clone();
    }

    public final Class a() {
        return this.f14152e;
    }
}

package androidx.datastore.preferences.protobuf;
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
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public final class a0 {

    /* renamed from: o  reason: collision with root package name */
    public static final a0 f3568o;

    /* renamed from: p  reason: collision with root package name */
    public static final a0 f3569p;

    /* renamed from: q  reason: collision with root package name */
    public static final a0 f3570q;

    /* renamed from: r  reason: collision with root package name */
    public static final a0 f3571r;

    /* renamed from: s  reason: collision with root package name */
    public static final a0 f3572s;

    /* renamed from: t  reason: collision with root package name */
    public static final a0 f3573t;

    /* renamed from: u  reason: collision with root package name */
    public static final a0 f3574u;

    /* renamed from: v  reason: collision with root package name */
    public static final a0 f3575v;

    /* renamed from: w  reason: collision with root package name */
    public static final a0 f3576w;

    /* renamed from: x  reason: collision with root package name */
    public static final a0 f3577x;

    /* renamed from: y  reason: collision with root package name */
    private static final /* synthetic */ a0[] f3578y;

    /* renamed from: d  reason: collision with root package name */
    private final Class f3579d;

    /* renamed from: e  reason: collision with root package name */
    private final Class f3580e;

    /* renamed from: i  reason: collision with root package name */
    private final Object f3581i;

    static {
        a0 a0Var = new a0("VOID", 0, Void.class, Void.class, null);
        f3568o = a0Var;
        Class cls = Integer.TYPE;
        a0 a0Var2 = new a0("INT", 1, cls, Integer.class, 0);
        f3569p = a0Var2;
        a0 a0Var3 = new a0("LONG", 2, Long.TYPE, Long.class, 0L);
        f3570q = a0Var3;
        a0 a0Var4 = new a0("FLOAT", 3, Float.TYPE, Float.class, Float.valueOf(0.0f));
        f3571r = a0Var4;
        a0 a0Var5 = new a0("DOUBLE", 4, Double.TYPE, Double.class, Double.valueOf(0.0d));
        f3572s = a0Var5;
        a0 a0Var6 = new a0("BOOLEAN", 5, Boolean.TYPE, Boolean.class, Boolean.FALSE);
        f3573t = a0Var6;
        a0 a0Var7 = new a0("STRING", 6, String.class, String.class, "");
        f3574u = a0Var7;
        a0 a0Var8 = new a0("BYTE_STRING", 7, g.class, g.class, g.f3604e);
        f3575v = a0Var8;
        a0 a0Var9 = new a0("ENUM", 8, cls, Integer.class, null);
        f3576w = a0Var9;
        a0 a0Var10 = new a0("MESSAGE", 9, Object.class, Object.class, null);
        f3577x = a0Var10;
        f3578y = new a0[]{a0Var, a0Var2, a0Var3, a0Var4, a0Var5, a0Var6, a0Var7, a0Var8, a0Var9, a0Var10};
    }

    private a0(String str, int i10, Class cls, Class cls2, Object obj) {
        this.f3579d = cls;
        this.f3580e = cls2;
        this.f3581i = obj;
    }

    public static a0 valueOf(String str) {
        return (a0) Enum.valueOf(a0.class, str);
    }

    public static a0[] values() {
        return (a0[]) f3578y.clone();
    }

    public Class a() {
        return this.f3580e;
    }
}

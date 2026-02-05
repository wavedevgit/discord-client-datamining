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
    public static final a0 f3680o;

    /* renamed from: p  reason: collision with root package name */
    public static final a0 f3681p;

    /* renamed from: q  reason: collision with root package name */
    public static final a0 f3682q;

    /* renamed from: r  reason: collision with root package name */
    public static final a0 f3683r;

    /* renamed from: s  reason: collision with root package name */
    public static final a0 f3684s;

    /* renamed from: t  reason: collision with root package name */
    public static final a0 f3685t;

    /* renamed from: u  reason: collision with root package name */
    public static final a0 f3686u;

    /* renamed from: v  reason: collision with root package name */
    public static final a0 f3687v;

    /* renamed from: w  reason: collision with root package name */
    public static final a0 f3688w;

    /* renamed from: x  reason: collision with root package name */
    public static final a0 f3689x;

    /* renamed from: y  reason: collision with root package name */
    private static final /* synthetic */ a0[] f3690y;

    /* renamed from: d  reason: collision with root package name */
    private final Class f3691d;

    /* renamed from: e  reason: collision with root package name */
    private final Class f3692e;

    /* renamed from: i  reason: collision with root package name */
    private final Object f3693i;

    static {
        a0 a0Var = new a0("VOID", 0, Void.class, Void.class, null);
        f3680o = a0Var;
        Class cls = Integer.TYPE;
        a0 a0Var2 = new a0("INT", 1, cls, Integer.class, 0);
        f3681p = a0Var2;
        a0 a0Var3 = new a0("LONG", 2, Long.TYPE, Long.class, 0L);
        f3682q = a0Var3;
        a0 a0Var4 = new a0("FLOAT", 3, Float.TYPE, Float.class, Float.valueOf(0.0f));
        f3683r = a0Var4;
        a0 a0Var5 = new a0("DOUBLE", 4, Double.TYPE, Double.class, Double.valueOf(0.0d));
        f3684s = a0Var5;
        a0 a0Var6 = new a0("BOOLEAN", 5, Boolean.TYPE, Boolean.class, Boolean.FALSE);
        f3685t = a0Var6;
        a0 a0Var7 = new a0("STRING", 6, String.class, String.class, "");
        f3686u = a0Var7;
        a0 a0Var8 = new a0("BYTE_STRING", 7, g.class, g.class, g.f3716e);
        f3687v = a0Var8;
        a0 a0Var9 = new a0("ENUM", 8, cls, Integer.class, null);
        f3688w = a0Var9;
        a0 a0Var10 = new a0("MESSAGE", 9, Object.class, Object.class, null);
        f3689x = a0Var10;
        f3690y = new a0[]{a0Var, a0Var2, a0Var3, a0Var4, a0Var5, a0Var6, a0Var7, a0Var8, a0Var9, a0Var10};
    }

    private a0(String str, int i10, Class cls, Class cls2, Object obj) {
        this.f3691d = cls;
        this.f3692e = cls2;
        this.f3693i = obj;
    }

    public static a0 valueOf(String str) {
        return (a0) Enum.valueOf(a0.class, str);
    }

    public static a0[] values() {
        return (a0[]) f3690y.clone();
    }

    public Class a() {
        return this.f3692e;
    }
}

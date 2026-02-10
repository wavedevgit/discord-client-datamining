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
    public static final a0 f3706o;

    /* renamed from: p  reason: collision with root package name */
    public static final a0 f3707p;

    /* renamed from: q  reason: collision with root package name */
    public static final a0 f3708q;

    /* renamed from: r  reason: collision with root package name */
    public static final a0 f3709r;

    /* renamed from: s  reason: collision with root package name */
    public static final a0 f3710s;

    /* renamed from: t  reason: collision with root package name */
    public static final a0 f3711t;

    /* renamed from: u  reason: collision with root package name */
    public static final a0 f3712u;

    /* renamed from: v  reason: collision with root package name */
    public static final a0 f3713v;

    /* renamed from: w  reason: collision with root package name */
    public static final a0 f3714w;

    /* renamed from: x  reason: collision with root package name */
    public static final a0 f3715x;

    /* renamed from: y  reason: collision with root package name */
    private static final /* synthetic */ a0[] f3716y;

    /* renamed from: d  reason: collision with root package name */
    private final Class f3717d;

    /* renamed from: e  reason: collision with root package name */
    private final Class f3718e;

    /* renamed from: i  reason: collision with root package name */
    private final Object f3719i;

    static {
        a0 a0Var = new a0("VOID", 0, Void.class, Void.class, null);
        f3706o = a0Var;
        Class cls = Integer.TYPE;
        a0 a0Var2 = new a0("INT", 1, cls, Integer.class, 0);
        f3707p = a0Var2;
        a0 a0Var3 = new a0("LONG", 2, Long.TYPE, Long.class, 0L);
        f3708q = a0Var3;
        a0 a0Var4 = new a0("FLOAT", 3, Float.TYPE, Float.class, Float.valueOf(0.0f));
        f3709r = a0Var4;
        a0 a0Var5 = new a0("DOUBLE", 4, Double.TYPE, Double.class, Double.valueOf(0.0d));
        f3710s = a0Var5;
        a0 a0Var6 = new a0("BOOLEAN", 5, Boolean.TYPE, Boolean.class, Boolean.FALSE);
        f3711t = a0Var6;
        a0 a0Var7 = new a0("STRING", 6, String.class, String.class, "");
        f3712u = a0Var7;
        a0 a0Var8 = new a0("BYTE_STRING", 7, g.class, g.class, g.f3742e);
        f3713v = a0Var8;
        a0 a0Var9 = new a0("ENUM", 8, cls, Integer.class, null);
        f3714w = a0Var9;
        a0 a0Var10 = new a0("MESSAGE", 9, Object.class, Object.class, null);
        f3715x = a0Var10;
        f3716y = new a0[]{a0Var, a0Var2, a0Var3, a0Var4, a0Var5, a0Var6, a0Var7, a0Var8, a0Var9, a0Var10};
    }

    private a0(String str, int i10, Class cls, Class cls2, Object obj) {
        this.f3717d = cls;
        this.f3718e = cls2;
        this.f3719i = obj;
    }

    public static a0 valueOf(String str) {
        return (a0) Enum.valueOf(a0.class, str);
    }

    public static a0[] values() {
        return (a0[]) f3716y.clone();
    }

    public Class a() {
        return this.f3718e;
    }
}

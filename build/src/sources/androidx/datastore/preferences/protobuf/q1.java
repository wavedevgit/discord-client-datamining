package androidx.datastore.preferences.protobuf;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public abstract class q1 {

    /* renamed from: a  reason: collision with root package name */
    static final int f3722a = c(1, 3);

    /* renamed from: b  reason: collision with root package name */
    static final int f3723b = c(1, 4);

    /* renamed from: c  reason: collision with root package name */
    static final int f3724c = c(2, 0);

    /* renamed from: d  reason: collision with root package name */
    static final int f3725d = c(3, 2);

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
    public static class b {
        public static final b A;
        public static final b B;
        public static final b C;
        public static final b D;
        public static final b E;
        private static final /* synthetic */ b[] F;

        /* renamed from: i  reason: collision with root package name */
        public static final b f3726i;

        /* renamed from: o  reason: collision with root package name */
        public static final b f3727o;

        /* renamed from: p  reason: collision with root package name */
        public static final b f3728p;

        /* renamed from: q  reason: collision with root package name */
        public static final b f3729q;

        /* renamed from: r  reason: collision with root package name */
        public static final b f3730r;

        /* renamed from: s  reason: collision with root package name */
        public static final b f3731s;

        /* renamed from: t  reason: collision with root package name */
        public static final b f3732t;

        /* renamed from: u  reason: collision with root package name */
        public static final b f3733u;

        /* renamed from: v  reason: collision with root package name */
        public static final b f3734v;

        /* renamed from: w  reason: collision with root package name */
        public static final b f3735w;

        /* renamed from: x  reason: collision with root package name */
        public static final b f3736x;

        /* renamed from: y  reason: collision with root package name */
        public static final b f3737y;

        /* renamed from: z  reason: collision with root package name */
        public static final b f3738z;

        /* renamed from: d  reason: collision with root package name */
        private final c f3739d;

        /* renamed from: e  reason: collision with root package name */
        private final int f3740e;

        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
        enum a extends b {
            a(String str, int i10, c cVar, int i11) {
                super(str, i10, cVar, i11);
            }
        }

        /* renamed from: androidx.datastore.preferences.protobuf.q1$b$b  reason: collision with other inner class name */
        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
        enum C0043b extends b {
            C0043b(String str, int i10, c cVar, int i11) {
                super(str, i10, cVar, i11);
            }
        }

        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
        enum c extends b {
            c(String str, int i10, c cVar, int i11) {
                super(str, i10, cVar, i11);
            }
        }

        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
        enum d extends b {
            d(String str, int i10, c cVar, int i11) {
                super(str, i10, cVar, i11);
            }
        }

        static {
            b bVar = new b("DOUBLE", 0, c.DOUBLE, 1);
            f3726i = bVar;
            b bVar2 = new b("FLOAT", 1, c.FLOAT, 5);
            f3727o = bVar2;
            c cVar = c.LONG;
            b bVar3 = new b("INT64", 2, cVar, 0);
            f3728p = bVar3;
            b bVar4 = new b("UINT64", 3, cVar, 0);
            f3729q = bVar4;
            c cVar2 = c.INT;
            b bVar5 = new b("INT32", 4, cVar2, 0);
            f3730r = bVar5;
            b bVar6 = new b("FIXED64", 5, cVar, 1);
            f3731s = bVar6;
            b bVar7 = new b("FIXED32", 6, cVar2, 5);
            f3732t = bVar7;
            b bVar8 = new b("BOOL", 7, c.BOOLEAN, 0);
            f3733u = bVar8;
            a aVar = new a("STRING", 8, c.STRING, 2);
            f3734v = aVar;
            c cVar3 = c.MESSAGE;
            C0043b c0043b = new C0043b("GROUP", 9, cVar3, 3);
            f3735w = c0043b;
            c cVar4 = new c("MESSAGE", 10, cVar3, 2);
            f3736x = cVar4;
            d dVar = new d("BYTES", 11, c.BYTE_STRING, 2);
            f3737y = dVar;
            b bVar9 = new b("UINT32", 12, cVar2, 0);
            f3738z = bVar9;
            b bVar10 = new b("ENUM", 13, c.ENUM, 0);
            A = bVar10;
            b bVar11 = new b("SFIXED32", 14, cVar2, 5);
            B = bVar11;
            b bVar12 = new b("SFIXED64", 15, cVar, 1);
            C = bVar12;
            b bVar13 = new b("SINT32", 16, cVar2, 0);
            D = bVar13;
            b bVar14 = new b("SINT64", 17, cVar, 0);
            E = bVar14;
            F = new b[]{bVar, bVar2, bVar3, bVar4, bVar5, bVar6, bVar7, bVar8, aVar, c0043b, cVar4, dVar, bVar9, bVar10, bVar11, bVar12, bVar13, bVar14};
        }

        public static b valueOf(String str) {
            return (b) Enum.valueOf(b.class, str);
        }

        public static b[] values() {
            return (b[]) F.clone();
        }

        public c a() {
            return this.f3739d;
        }

        public int d() {
            return this.f3740e;
        }

        private b(String str, int i10, c cVar, int i11) {
            this.f3739d = cVar;
            this.f3740e = i11;
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    public enum c {
        INT(0),
        LONG(0L),
        FLOAT(Float.valueOf(0.0f)),
        DOUBLE(Double.valueOf(0.0d)),
        BOOLEAN(Boolean.FALSE),
        STRING(""),
        BYTE_STRING(g.f3591e),
        ENUM(null),
        MESSAGE(null);
        

        /* renamed from: d  reason: collision with root package name */
        private final Object f3751d;

        c(Object obj) {
            this.f3751d = obj;
        }
    }

    public static int a(int i10) {
        return i10 >>> 3;
    }

    public static int b(int i10) {
        return i10 & 7;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public static int c(int i10, int i11) {
        return (i10 << 3) | i11;
    }
}

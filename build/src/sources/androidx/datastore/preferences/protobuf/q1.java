package androidx.datastore.preferences.protobuf;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public abstract class q1 {

    /* renamed from: a  reason: collision with root package name */
    static final int f4176a = c(1, 3);

    /* renamed from: b  reason: collision with root package name */
    static final int f4177b = c(1, 4);

    /* renamed from: c  reason: collision with root package name */
    static final int f4178c = c(2, 0);

    /* renamed from: d  reason: collision with root package name */
    static final int f4179d = c(3, 2);

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
        public static final b f4180i;

        /* renamed from: o  reason: collision with root package name */
        public static final b f4181o;

        /* renamed from: p  reason: collision with root package name */
        public static final b f4182p;

        /* renamed from: q  reason: collision with root package name */
        public static final b f4183q;

        /* renamed from: r  reason: collision with root package name */
        public static final b f4184r;

        /* renamed from: s  reason: collision with root package name */
        public static final b f4185s;

        /* renamed from: t  reason: collision with root package name */
        public static final b f4186t;

        /* renamed from: u  reason: collision with root package name */
        public static final b f4187u;

        /* renamed from: v  reason: collision with root package name */
        public static final b f4188v;

        /* renamed from: w  reason: collision with root package name */
        public static final b f4189w;

        /* renamed from: x  reason: collision with root package name */
        public static final b f4190x;

        /* renamed from: y  reason: collision with root package name */
        public static final b f4191y;

        /* renamed from: z  reason: collision with root package name */
        public static final b f4192z;

        /* renamed from: d  reason: collision with root package name */
        private final c f4193d;

        /* renamed from: e  reason: collision with root package name */
        private final int f4194e;

        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
        enum a extends b {
            a(String str, int i10, c cVar, int i11) {
                super(str, i10, cVar, i11);
            }
        }

        /* renamed from: androidx.datastore.preferences.protobuf.q1$b$b  reason: collision with other inner class name */
        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
        enum C0044b extends b {
            C0044b(String str, int i10, c cVar, int i11) {
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
            f4180i = bVar;
            b bVar2 = new b("FLOAT", 1, c.FLOAT, 5);
            f4181o = bVar2;
            c cVar = c.LONG;
            b bVar3 = new b("INT64", 2, cVar, 0);
            f4182p = bVar3;
            b bVar4 = new b("UINT64", 3, cVar, 0);
            f4183q = bVar4;
            c cVar2 = c.INT;
            b bVar5 = new b("INT32", 4, cVar2, 0);
            f4184r = bVar5;
            b bVar6 = new b("FIXED64", 5, cVar, 1);
            f4185s = bVar6;
            b bVar7 = new b("FIXED32", 6, cVar2, 5);
            f4186t = bVar7;
            b bVar8 = new b("BOOL", 7, c.BOOLEAN, 0);
            f4187u = bVar8;
            a aVar = new a("STRING", 8, c.STRING, 2);
            f4188v = aVar;
            c cVar3 = c.MESSAGE;
            C0044b c0044b = new C0044b("GROUP", 9, cVar3, 3);
            f4189w = c0044b;
            c cVar4 = new c("MESSAGE", 10, cVar3, 2);
            f4190x = cVar4;
            d dVar = new d("BYTES", 11, c.BYTE_STRING, 2);
            f4191y = dVar;
            b bVar9 = new b("UINT32", 12, cVar2, 0);
            f4192z = bVar9;
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
            F = new b[]{bVar, bVar2, bVar3, bVar4, bVar5, bVar6, bVar7, bVar8, aVar, c0044b, cVar4, dVar, bVar9, bVar10, bVar11, bVar12, bVar13, bVar14};
        }

        public static b valueOf(String str) {
            return (b) Enum.valueOf(b.class, str);
        }

        public static b[] values() {
            return (b[]) F.clone();
        }

        public c a() {
            return this.f4193d;
        }

        public int d() {
            return this.f4194e;
        }

        private b(String str, int i10, c cVar, int i11) {
            this.f4193d = cVar;
            this.f4194e = i11;
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
        BYTE_STRING(g.f4045e),
        ENUM(null),
        MESSAGE(null);
        

        /* renamed from: d  reason: collision with root package name */
        private final Object f4205d;

        c(Object obj) {
            this.f4205d = obj;
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

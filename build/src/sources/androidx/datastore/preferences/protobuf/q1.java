package androidx.datastore.preferences.protobuf;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public abstract class q1 {

    /* renamed from: a  reason: collision with root package name */
    static final int f3766a = c(1, 3);

    /* renamed from: b  reason: collision with root package name */
    static final int f3767b = c(1, 4);

    /* renamed from: c  reason: collision with root package name */
    static final int f3768c = c(2, 0);

    /* renamed from: d  reason: collision with root package name */
    static final int f3769d = c(3, 2);

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
        public static final b f3770i;

        /* renamed from: o  reason: collision with root package name */
        public static final b f3771o;

        /* renamed from: p  reason: collision with root package name */
        public static final b f3772p;

        /* renamed from: q  reason: collision with root package name */
        public static final b f3773q;

        /* renamed from: r  reason: collision with root package name */
        public static final b f3774r;

        /* renamed from: s  reason: collision with root package name */
        public static final b f3775s;

        /* renamed from: t  reason: collision with root package name */
        public static final b f3776t;

        /* renamed from: u  reason: collision with root package name */
        public static final b f3777u;

        /* renamed from: v  reason: collision with root package name */
        public static final b f3778v;

        /* renamed from: w  reason: collision with root package name */
        public static final b f3779w;

        /* renamed from: x  reason: collision with root package name */
        public static final b f3780x;

        /* renamed from: y  reason: collision with root package name */
        public static final b f3781y;

        /* renamed from: z  reason: collision with root package name */
        public static final b f3782z;

        /* renamed from: d  reason: collision with root package name */
        private final c f3783d;

        /* renamed from: e  reason: collision with root package name */
        private final int f3784e;

        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
        enum a extends b {
            a(String str, int i10, c cVar, int i11) {
                super(str, i10, cVar, i11);
            }
        }

        /* renamed from: androidx.datastore.preferences.protobuf.q1$b$b  reason: collision with other inner class name */
        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
        enum C0047b extends b {
            C0047b(String str, int i10, c cVar, int i11) {
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
            f3770i = bVar;
            b bVar2 = new b("FLOAT", 1, c.FLOAT, 5);
            f3771o = bVar2;
            c cVar = c.LONG;
            b bVar3 = new b("INT64", 2, cVar, 0);
            f3772p = bVar3;
            b bVar4 = new b("UINT64", 3, cVar, 0);
            f3773q = bVar4;
            c cVar2 = c.INT;
            b bVar5 = new b("INT32", 4, cVar2, 0);
            f3774r = bVar5;
            b bVar6 = new b("FIXED64", 5, cVar, 1);
            f3775s = bVar6;
            b bVar7 = new b("FIXED32", 6, cVar2, 5);
            f3776t = bVar7;
            b bVar8 = new b("BOOL", 7, c.BOOLEAN, 0);
            f3777u = bVar8;
            a aVar = new a("STRING", 8, c.STRING, 2);
            f3778v = aVar;
            c cVar3 = c.MESSAGE;
            C0047b c0047b = new C0047b("GROUP", 9, cVar3, 3);
            f3779w = c0047b;
            c cVar4 = new c("MESSAGE", 10, cVar3, 2);
            f3780x = cVar4;
            d dVar = new d("BYTES", 11, c.BYTE_STRING, 2);
            f3781y = dVar;
            b bVar9 = new b("UINT32", 12, cVar2, 0);
            f3782z = bVar9;
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
            F = new b[]{bVar, bVar2, bVar3, bVar4, bVar5, bVar6, bVar7, bVar8, aVar, c0047b, cVar4, dVar, bVar9, bVar10, bVar11, bVar12, bVar13, bVar14};
        }

        public static b valueOf(String str) {
            return (b) Enum.valueOf(b.class, str);
        }

        public static b[] values() {
            return (b[]) F.clone();
        }

        public c a() {
            return this.f3783d;
        }

        public int d() {
            return this.f3784e;
        }

        private b(String str, int i10, c cVar, int i11) {
            this.f3783d = cVar;
            this.f3784e = i11;
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
        BYTE_STRING(g.f3635e),
        ENUM(null),
        MESSAGE(null);
        

        /* renamed from: d  reason: collision with root package name */
        private final Object f3795d;

        c(Object obj) {
            this.f3795d = obj;
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

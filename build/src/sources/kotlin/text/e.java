package kotlin.text;

import kotlin.jvm.internal.DefaultConstructorMarker;
import kotlin.jvm.internal.Intrinsics;
import org.jetbrains.annotations.NotNull;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public final class e {
    @NotNull

    /* renamed from: d  reason: collision with root package name */
    public static final b f34929d = new b(null);

    /* renamed from: e  reason: collision with root package name */
    private static final e f34930e;

    /* renamed from: f  reason: collision with root package name */
    private static final e f34931f;

    /* renamed from: a  reason: collision with root package name */
    private final boolean f34932a;

    /* renamed from: b  reason: collision with root package name */
    private final a f34933b;

    /* renamed from: c  reason: collision with root package name */
    private final c f34934c;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
    public static final class a {
        @NotNull

        /* renamed from: j  reason: collision with root package name */
        public static final C0450a f34935j = new C0450a(null);

        /* renamed from: k  reason: collision with root package name */
        private static final a f34936k = new a(Integer.MAX_VALUE, Integer.MAX_VALUE, "  ", "", "", "");

        /* renamed from: a  reason: collision with root package name */
        private final int f34937a;

        /* renamed from: b  reason: collision with root package name */
        private final int f34938b;

        /* renamed from: c  reason: collision with root package name */
        private final String f34939c;

        /* renamed from: d  reason: collision with root package name */
        private final String f34940d;

        /* renamed from: e  reason: collision with root package name */
        private final String f34941e;

        /* renamed from: f  reason: collision with root package name */
        private final String f34942f;

        /* renamed from: g  reason: collision with root package name */
        private final boolean f34943g;

        /* renamed from: h  reason: collision with root package name */
        private final boolean f34944h;

        /* renamed from: i  reason: collision with root package name */
        private final boolean f34945i;

        /* renamed from: kotlin.text.e$a$a  reason: collision with other inner class name */
        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
        public static final class C0450a {
            public /* synthetic */ C0450a(DefaultConstructorMarker defaultConstructorMarker) {
                this();
            }

            public final a a() {
                return a.f34936k;
            }

            private C0450a() {
            }
        }

        /* JADX WARN: Code restructure failed: missing block: B:22:0x005e, code lost:
            if (r4 != false) goto L23;
         */
        /*
            Code decompiled incorrectly, please refer to instructions dump.
            To view partially-correct add '--show-bad-code' argument
        */
        public a(int r4, int r5, java.lang.String r6, java.lang.String r7, java.lang.String r8, java.lang.String r9) {
            /*
                r3 = this;
                java.lang.String r0 = "groupSeparator"
                kotlin.jvm.internal.Intrinsics.checkNotNullParameter(r6, r0)
                java.lang.String r0 = "byteSeparator"
                kotlin.jvm.internal.Intrinsics.checkNotNullParameter(r7, r0)
                java.lang.String r0 = "bytePrefix"
                kotlin.jvm.internal.Intrinsics.checkNotNullParameter(r8, r0)
                java.lang.String r0 = "byteSuffix"
                kotlin.jvm.internal.Intrinsics.checkNotNullParameter(r9, r0)
                r3.<init>()
                r3.f34937a = r4
                r3.f34938b = r5
                r3.f34939c = r6
                r3.f34940d = r7
                r3.f34941e = r8
                r3.f34942f = r9
                r0 = 0
                r1 = 1
                r2 = 2147483647(0x7fffffff, float:NaN)
                if (r4 != r2) goto L2e
                if (r5 != r2) goto L2e
                r4 = r1
                goto L2f
            L2e:
                r4 = r0
            L2f:
                r3.f34943g = r4
                int r4 = r8.length()
                if (r4 != 0) goto L45
                int r4 = r9.length()
                if (r4 != 0) goto L45
                int r4 = r7.length()
                if (r4 > r1) goto L45
                r4 = r1
                goto L46
            L45:
                r4 = r0
            L46:
                r3.f34944h = r4
                boolean r4 = kotlin.text.f.a(r6)
                if (r4 != 0) goto L60
                boolean r4 = kotlin.text.f.a(r7)
                if (r4 != 0) goto L60
                boolean r4 = kotlin.text.f.a(r8)
                if (r4 != 0) goto L60
                boolean r4 = kotlin.text.f.a(r9)
                if (r4 == 0) goto L61
            L60:
                r0 = r1
            L61:
                r3.f34945i = r0
                return
            */
            throw new UnsupportedOperationException("Method not decompiled: kotlin.text.e.a.<init>(int, int, java.lang.String, java.lang.String, java.lang.String, java.lang.String):void");
        }

        public final StringBuilder b(StringBuilder sb2, String indent) {
            Intrinsics.checkNotNullParameter(sb2, "sb");
            Intrinsics.checkNotNullParameter(indent, "indent");
            sb2.append(indent);
            sb2.append("bytesPerLine = ");
            sb2.append(this.f34937a);
            sb2.append(",");
            sb2.append('\n');
            sb2.append(indent);
            sb2.append("bytesPerGroup = ");
            sb2.append(this.f34938b);
            sb2.append(",");
            sb2.append('\n');
            sb2.append(indent);
            sb2.append("groupSeparator = \"");
            sb2.append(this.f34939c);
            sb2.append("\",");
            sb2.append('\n');
            sb2.append(indent);
            sb2.append("byteSeparator = \"");
            sb2.append(this.f34940d);
            sb2.append("\",");
            sb2.append('\n');
            sb2.append(indent);
            sb2.append("bytePrefix = \"");
            sb2.append(this.f34941e);
            sb2.append("\",");
            sb2.append('\n');
            sb2.append(indent);
            sb2.append("byteSuffix = \"");
            sb2.append(this.f34942f);
            sb2.append("\"");
            return sb2;
        }

        public final String c() {
            return this.f34941e;
        }

        public final String d() {
            return this.f34940d;
        }

        public final String e() {
            return this.f34942f;
        }

        public final int f() {
            return this.f34938b;
        }

        public final int g() {
            return this.f34937a;
        }

        public final String h() {
            return this.f34939c;
        }

        public final boolean i() {
            return this.f34943g;
        }

        public final boolean j() {
            return this.f34944h;
        }

        public String toString() {
            StringBuilder sb2 = new StringBuilder();
            sb2.append("BytesHexFormat(");
            sb2.append('\n');
            b(sb2, "    ").append('\n');
            sb2.append(")");
            return sb2.toString();
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
    public static final class b {
        public /* synthetic */ b(DefaultConstructorMarker defaultConstructorMarker) {
            this();
        }

        public final e a() {
            return e.f34930e;
        }

        private b() {
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
    public static final class c {
        @NotNull

        /* renamed from: h  reason: collision with root package name */
        public static final a f34946h = new a(null);

        /* renamed from: i  reason: collision with root package name */
        private static final c f34947i = new c("", "", false, 1);

        /* renamed from: a  reason: collision with root package name */
        private final String f34948a;

        /* renamed from: b  reason: collision with root package name */
        private final String f34949b;

        /* renamed from: c  reason: collision with root package name */
        private final boolean f34950c;

        /* renamed from: d  reason: collision with root package name */
        private final int f34951d;

        /* renamed from: e  reason: collision with root package name */
        private final boolean f34952e;

        /* renamed from: f  reason: collision with root package name */
        private final boolean f34953f;

        /* renamed from: g  reason: collision with root package name */
        private final boolean f34954g;

        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
        public static final class a {
            public /* synthetic */ a(DefaultConstructorMarker defaultConstructorMarker) {
                this();
            }

            public final c a() {
                return c.f34947i;
            }

            private a() {
            }
        }

        /* JADX WARN: Code restructure failed: missing block: B:16:0x003b, code lost:
            if (r3 != false) goto L17;
         */
        /*
            Code decompiled incorrectly, please refer to instructions dump.
            To view partially-correct add '--show-bad-code' argument
        */
        public c(java.lang.String r3, java.lang.String r4, boolean r5, int r6) {
            /*
                r2 = this;
                java.lang.String r0 = "prefix"
                kotlin.jvm.internal.Intrinsics.checkNotNullParameter(r3, r0)
                java.lang.String r0 = "suffix"
                kotlin.jvm.internal.Intrinsics.checkNotNullParameter(r4, r0)
                r2.<init>()
                r2.f34948a = r3
                r2.f34949b = r4
                r2.f34950c = r5
                r2.f34951d = r6
                int r5 = r3.length()
                r0 = 0
                r1 = 1
                if (r5 != 0) goto L25
                int r5 = r4.length()
                if (r5 != 0) goto L25
                r5 = r1
                goto L26
            L25:
                r5 = r0
            L26:
                r2.f34952e = r5
                if (r5 == 0) goto L2e
                if (r6 != r1) goto L2e
                r5 = r1
                goto L2f
            L2e:
                r5 = r0
            L2f:
                r2.f34953f = r5
                boolean r3 = kotlin.text.f.a(r3)
                if (r3 != 0) goto L3d
                boolean r3 = kotlin.text.f.a(r4)
                if (r3 == 0) goto L3e
            L3d:
                r0 = r1
            L3e:
                r2.f34954g = r0
                return
            */
            throw new UnsupportedOperationException("Method not decompiled: kotlin.text.e.c.<init>(java.lang.String, java.lang.String, boolean, int):void");
        }

        public final StringBuilder b(StringBuilder sb2, String indent) {
            Intrinsics.checkNotNullParameter(sb2, "sb");
            Intrinsics.checkNotNullParameter(indent, "indent");
            sb2.append(indent);
            sb2.append("prefix = \"");
            sb2.append(this.f34948a);
            sb2.append("\",");
            sb2.append('\n');
            sb2.append(indent);
            sb2.append("suffix = \"");
            sb2.append(this.f34949b);
            sb2.append("\",");
            sb2.append('\n');
            sb2.append(indent);
            sb2.append("removeLeadingZeros = ");
            sb2.append(this.f34950c);
            sb2.append(',');
            sb2.append('\n');
            sb2.append(indent);
            sb2.append("minLength = ");
            sb2.append(this.f34951d);
            return sb2;
        }

        public final boolean c() {
            return this.f34954g;
        }

        public final String d() {
            return this.f34948a;
        }

        public final String e() {
            return this.f34949b;
        }

        public final boolean f() {
            return this.f34952e;
        }

        public String toString() {
            StringBuilder sb2 = new StringBuilder();
            sb2.append("NumberHexFormat(");
            sb2.append('\n');
            b(sb2, "    ").append('\n');
            sb2.append(")");
            return sb2.toString();
        }
    }

    static {
        a.C0450a c0450a = a.f34935j;
        a a10 = c0450a.a();
        c.a aVar = c.f34946h;
        f34930e = new e(false, a10, aVar.a());
        f34931f = new e(true, c0450a.a(), aVar.a());
    }

    public e(boolean z10, a bytes, c number) {
        Intrinsics.checkNotNullParameter(bytes, "bytes");
        Intrinsics.checkNotNullParameter(number, "number");
        this.f34932a = z10;
        this.f34933b = bytes;
        this.f34934c = number;
    }

    public final a b() {
        return this.f34933b;
    }

    public final c c() {
        return this.f34934c;
    }

    public final boolean d() {
        return this.f34932a;
    }

    public String toString() {
        StringBuilder sb2 = new StringBuilder();
        sb2.append("HexFormat(");
        sb2.append('\n');
        sb2.append("    upperCase = ");
        sb2.append(this.f34932a);
        sb2.append(",");
        sb2.append('\n');
        sb2.append("    bytes = BytesHexFormat(");
        sb2.append('\n');
        this.f34933b.b(sb2, "        ").append('\n');
        sb2.append("    ),");
        sb2.append('\n');
        sb2.append("    number = NumberHexFormat(");
        sb2.append('\n');
        this.f34934c.b(sb2, "        ").append('\n');
        sb2.append("    )");
        sb2.append('\n');
        sb2.append(")");
        return sb2.toString();
    }
}

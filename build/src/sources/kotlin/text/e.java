package kotlin.text;

import kotlin.jvm.internal.DefaultConstructorMarker;
import kotlin.jvm.internal.Intrinsics;
import org.jetbrains.annotations.NotNull;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public final class e {
    @NotNull

    /* renamed from: d  reason: collision with root package name */
    public static final b f34706d = new b(null);

    /* renamed from: e  reason: collision with root package name */
    private static final e f34707e;

    /* renamed from: f  reason: collision with root package name */
    private static final e f34708f;

    /* renamed from: a  reason: collision with root package name */
    private final boolean f34709a;

    /* renamed from: b  reason: collision with root package name */
    private final a f34710b;

    /* renamed from: c  reason: collision with root package name */
    private final c f34711c;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
    public static final class a {
        @NotNull

        /* renamed from: j  reason: collision with root package name */
        public static final C0492a f34712j = new C0492a(null);

        /* renamed from: k  reason: collision with root package name */
        private static final a f34713k = new a(Integer.MAX_VALUE, Integer.MAX_VALUE, "  ", "", "", "");

        /* renamed from: a  reason: collision with root package name */
        private final int f34714a;

        /* renamed from: b  reason: collision with root package name */
        private final int f34715b;

        /* renamed from: c  reason: collision with root package name */
        private final String f34716c;

        /* renamed from: d  reason: collision with root package name */
        private final String f34717d;

        /* renamed from: e  reason: collision with root package name */
        private final String f34718e;

        /* renamed from: f  reason: collision with root package name */
        private final String f34719f;

        /* renamed from: g  reason: collision with root package name */
        private final boolean f34720g;

        /* renamed from: h  reason: collision with root package name */
        private final boolean f34721h;

        /* renamed from: i  reason: collision with root package name */
        private final boolean f34722i;

        /* renamed from: kotlin.text.e$a$a  reason: collision with other inner class name */
        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
        public static final class C0492a {
            public /* synthetic */ C0492a(DefaultConstructorMarker defaultConstructorMarker) {
                this();
            }

            public final a a() {
                return a.f34713k;
            }

            private C0492a() {
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
                r3.f34714a = r4
                r3.f34715b = r5
                r3.f34716c = r6
                r3.f34717d = r7
                r3.f34718e = r8
                r3.f34719f = r9
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
                r3.f34720g = r4
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
                r3.f34721h = r4
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
                r3.f34722i = r0
                return
            */
            throw new UnsupportedOperationException("Method not decompiled: kotlin.text.e.a.<init>(int, int, java.lang.String, java.lang.String, java.lang.String, java.lang.String):void");
        }

        public final StringBuilder b(StringBuilder sb2, String indent) {
            Intrinsics.checkNotNullParameter(sb2, "sb");
            Intrinsics.checkNotNullParameter(indent, "indent");
            sb2.append(indent);
            sb2.append("bytesPerLine = ");
            sb2.append(this.f34714a);
            sb2.append(",");
            sb2.append('\n');
            sb2.append(indent);
            sb2.append("bytesPerGroup = ");
            sb2.append(this.f34715b);
            sb2.append(",");
            sb2.append('\n');
            sb2.append(indent);
            sb2.append("groupSeparator = \"");
            sb2.append(this.f34716c);
            sb2.append("\",");
            sb2.append('\n');
            sb2.append(indent);
            sb2.append("byteSeparator = \"");
            sb2.append(this.f34717d);
            sb2.append("\",");
            sb2.append('\n');
            sb2.append(indent);
            sb2.append("bytePrefix = \"");
            sb2.append(this.f34718e);
            sb2.append("\",");
            sb2.append('\n');
            sb2.append(indent);
            sb2.append("byteSuffix = \"");
            sb2.append(this.f34719f);
            sb2.append("\"");
            return sb2;
        }

        public final String c() {
            return this.f34718e;
        }

        public final String d() {
            return this.f34717d;
        }

        public final String e() {
            return this.f34719f;
        }

        public final int f() {
            return this.f34715b;
        }

        public final int g() {
            return this.f34714a;
        }

        public final String h() {
            return this.f34716c;
        }

        public final boolean i() {
            return this.f34720g;
        }

        public final boolean j() {
            return this.f34721h;
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
            return e.f34707e;
        }

        private b() {
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
    public static final class c {
        @NotNull

        /* renamed from: h  reason: collision with root package name */
        public static final a f34723h = new a(null);

        /* renamed from: i  reason: collision with root package name */
        private static final c f34724i = new c("", "", false, 1);

        /* renamed from: a  reason: collision with root package name */
        private final String f34725a;

        /* renamed from: b  reason: collision with root package name */
        private final String f34726b;

        /* renamed from: c  reason: collision with root package name */
        private final boolean f34727c;

        /* renamed from: d  reason: collision with root package name */
        private final int f34728d;

        /* renamed from: e  reason: collision with root package name */
        private final boolean f34729e;

        /* renamed from: f  reason: collision with root package name */
        private final boolean f34730f;

        /* renamed from: g  reason: collision with root package name */
        private final boolean f34731g;

        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
        public static final class a {
            public /* synthetic */ a(DefaultConstructorMarker defaultConstructorMarker) {
                this();
            }

            public final c a() {
                return c.f34724i;
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
                r2.f34725a = r3
                r2.f34726b = r4
                r2.f34727c = r5
                r2.f34728d = r6
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
                r2.f34729e = r5
                if (r5 == 0) goto L2e
                if (r6 != r1) goto L2e
                r5 = r1
                goto L2f
            L2e:
                r5 = r0
            L2f:
                r2.f34730f = r5
                boolean r3 = kotlin.text.f.a(r3)
                if (r3 != 0) goto L3d
                boolean r3 = kotlin.text.f.a(r4)
                if (r3 == 0) goto L3e
            L3d:
                r0 = r1
            L3e:
                r2.f34731g = r0
                return
            */
            throw new UnsupportedOperationException("Method not decompiled: kotlin.text.e.c.<init>(java.lang.String, java.lang.String, boolean, int):void");
        }

        public final StringBuilder b(StringBuilder sb2, String indent) {
            Intrinsics.checkNotNullParameter(sb2, "sb");
            Intrinsics.checkNotNullParameter(indent, "indent");
            sb2.append(indent);
            sb2.append("prefix = \"");
            sb2.append(this.f34725a);
            sb2.append("\",");
            sb2.append('\n');
            sb2.append(indent);
            sb2.append("suffix = \"");
            sb2.append(this.f34726b);
            sb2.append("\",");
            sb2.append('\n');
            sb2.append(indent);
            sb2.append("removeLeadingZeros = ");
            sb2.append(this.f34727c);
            sb2.append(',');
            sb2.append('\n');
            sb2.append(indent);
            sb2.append("minLength = ");
            sb2.append(this.f34728d);
            return sb2;
        }

        public final boolean c() {
            return this.f34731g;
        }

        public final String d() {
            return this.f34725a;
        }

        public final String e() {
            return this.f34726b;
        }

        public final boolean f() {
            return this.f34729e;
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
        a.C0492a c0492a = a.f34712j;
        a a10 = c0492a.a();
        c.a aVar = c.f34723h;
        f34707e = new e(false, a10, aVar.a());
        f34708f = new e(true, c0492a.a(), aVar.a());
    }

    public e(boolean z10, a bytes, c number) {
        Intrinsics.checkNotNullParameter(bytes, "bytes");
        Intrinsics.checkNotNullParameter(number, "number");
        this.f34709a = z10;
        this.f34710b = bytes;
        this.f34711c = number;
    }

    public final a b() {
        return this.f34710b;
    }

    public final c c() {
        return this.f34711c;
    }

    public final boolean d() {
        return this.f34709a;
    }

    public String toString() {
        StringBuilder sb2 = new StringBuilder();
        sb2.append("HexFormat(");
        sb2.append('\n');
        sb2.append("    upperCase = ");
        sb2.append(this.f34709a);
        sb2.append(",");
        sb2.append('\n');
        sb2.append("    bytes = BytesHexFormat(");
        sb2.append('\n');
        this.f34710b.b(sb2, "        ").append('\n');
        sb2.append("    ),");
        sb2.append('\n');
        sb2.append("    number = NumberHexFormat(");
        sb2.append('\n');
        this.f34711c.b(sb2, "        ").append('\n');
        sb2.append("    )");
        sb2.append('\n');
        sb2.append(")");
        return sb2.toString();
    }
}

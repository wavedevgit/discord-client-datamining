package kotlin.text;

import kotlin.jvm.internal.DefaultConstructorMarker;
import kotlin.jvm.internal.Intrinsics;
import org.jetbrains.annotations.NotNull;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public final class e {
    @NotNull

    /* renamed from: d  reason: collision with root package name */
    public static final b f36239d = new b(null);

    /* renamed from: e  reason: collision with root package name */
    private static final e f36240e;

    /* renamed from: f  reason: collision with root package name */
    private static final e f36241f;

    /* renamed from: a  reason: collision with root package name */
    private final boolean f36242a;

    /* renamed from: b  reason: collision with root package name */
    private final a f36243b;

    /* renamed from: c  reason: collision with root package name */
    private final c f36244c;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
    public static final class a {
        @NotNull

        /* renamed from: j  reason: collision with root package name */
        public static final C0460a f36245j = new C0460a(null);

        /* renamed from: k  reason: collision with root package name */
        private static final a f36246k = new a(Integer.MAX_VALUE, Integer.MAX_VALUE, "  ", "", "", "");

        /* renamed from: a  reason: collision with root package name */
        private final int f36247a;

        /* renamed from: b  reason: collision with root package name */
        private final int f36248b;

        /* renamed from: c  reason: collision with root package name */
        private final String f36249c;

        /* renamed from: d  reason: collision with root package name */
        private final String f36250d;

        /* renamed from: e  reason: collision with root package name */
        private final String f36251e;

        /* renamed from: f  reason: collision with root package name */
        private final String f36252f;

        /* renamed from: g  reason: collision with root package name */
        private final boolean f36253g;

        /* renamed from: h  reason: collision with root package name */
        private final boolean f36254h;

        /* renamed from: i  reason: collision with root package name */
        private final boolean f36255i;

        /* renamed from: kotlin.text.e$a$a  reason: collision with other inner class name */
        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
        public static final class C0460a {
            public /* synthetic */ C0460a(DefaultConstructorMarker defaultConstructorMarker) {
                this();
            }

            public final a a() {
                return a.f36246k;
            }

            private C0460a() {
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
                r3.f36247a = r4
                r3.f36248b = r5
                r3.f36249c = r6
                r3.f36250d = r7
                r3.f36251e = r8
                r3.f36252f = r9
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
                r3.f36253g = r4
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
                r3.f36254h = r4
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
                r3.f36255i = r0
                return
            */
            throw new UnsupportedOperationException("Method not decompiled: kotlin.text.e.a.<init>(int, int, java.lang.String, java.lang.String, java.lang.String, java.lang.String):void");
        }

        public final StringBuilder b(StringBuilder sb2, String indent) {
            Intrinsics.checkNotNullParameter(sb2, "sb");
            Intrinsics.checkNotNullParameter(indent, "indent");
            sb2.append(indent);
            sb2.append("bytesPerLine = ");
            sb2.append(this.f36247a);
            sb2.append(",");
            sb2.append('\n');
            sb2.append(indent);
            sb2.append("bytesPerGroup = ");
            sb2.append(this.f36248b);
            sb2.append(",");
            sb2.append('\n');
            sb2.append(indent);
            sb2.append("groupSeparator = \"");
            sb2.append(this.f36249c);
            sb2.append("\",");
            sb2.append('\n');
            sb2.append(indent);
            sb2.append("byteSeparator = \"");
            sb2.append(this.f36250d);
            sb2.append("\",");
            sb2.append('\n');
            sb2.append(indent);
            sb2.append("bytePrefix = \"");
            sb2.append(this.f36251e);
            sb2.append("\",");
            sb2.append('\n');
            sb2.append(indent);
            sb2.append("byteSuffix = \"");
            sb2.append(this.f36252f);
            sb2.append("\"");
            return sb2;
        }

        public final String c() {
            return this.f36251e;
        }

        public final String d() {
            return this.f36250d;
        }

        public final String e() {
            return this.f36252f;
        }

        public final int f() {
            return this.f36248b;
        }

        public final int g() {
            return this.f36247a;
        }

        public final String h() {
            return this.f36249c;
        }

        public final boolean i() {
            return this.f36253g;
        }

        public final boolean j() {
            return this.f36254h;
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
            return e.f36240e;
        }

        private b() {
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
    public static final class c {
        @NotNull

        /* renamed from: h  reason: collision with root package name */
        public static final a f36256h = new a(null);

        /* renamed from: i  reason: collision with root package name */
        private static final c f36257i = new c("", "", false, 1);

        /* renamed from: a  reason: collision with root package name */
        private final String f36258a;

        /* renamed from: b  reason: collision with root package name */
        private final String f36259b;

        /* renamed from: c  reason: collision with root package name */
        private final boolean f36260c;

        /* renamed from: d  reason: collision with root package name */
        private final int f36261d;

        /* renamed from: e  reason: collision with root package name */
        private final boolean f36262e;

        /* renamed from: f  reason: collision with root package name */
        private final boolean f36263f;

        /* renamed from: g  reason: collision with root package name */
        private final boolean f36264g;

        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
        public static final class a {
            public /* synthetic */ a(DefaultConstructorMarker defaultConstructorMarker) {
                this();
            }

            public final c a() {
                return c.f36257i;
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
                r2.f36258a = r3
                r2.f36259b = r4
                r2.f36260c = r5
                r2.f36261d = r6
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
                r2.f36262e = r5
                if (r5 == 0) goto L2e
                if (r6 != r1) goto L2e
                r5 = r1
                goto L2f
            L2e:
                r5 = r0
            L2f:
                r2.f36263f = r5
                boolean r3 = kotlin.text.f.a(r3)
                if (r3 != 0) goto L3d
                boolean r3 = kotlin.text.f.a(r4)
                if (r3 == 0) goto L3e
            L3d:
                r0 = r1
            L3e:
                r2.f36264g = r0
                return
            */
            throw new UnsupportedOperationException("Method not decompiled: kotlin.text.e.c.<init>(java.lang.String, java.lang.String, boolean, int):void");
        }

        public final StringBuilder b(StringBuilder sb2, String indent) {
            Intrinsics.checkNotNullParameter(sb2, "sb");
            Intrinsics.checkNotNullParameter(indent, "indent");
            sb2.append(indent);
            sb2.append("prefix = \"");
            sb2.append(this.f36258a);
            sb2.append("\",");
            sb2.append('\n');
            sb2.append(indent);
            sb2.append("suffix = \"");
            sb2.append(this.f36259b);
            sb2.append("\",");
            sb2.append('\n');
            sb2.append(indent);
            sb2.append("removeLeadingZeros = ");
            sb2.append(this.f36260c);
            sb2.append(',');
            sb2.append('\n');
            sb2.append(indent);
            sb2.append("minLength = ");
            sb2.append(this.f36261d);
            return sb2;
        }

        public final boolean c() {
            return this.f36264g;
        }

        public final String d() {
            return this.f36258a;
        }

        public final String e() {
            return this.f36259b;
        }

        public final boolean f() {
            return this.f36262e;
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
        a.C0460a c0460a = a.f36245j;
        a a10 = c0460a.a();
        c.a aVar = c.f36256h;
        f36240e = new e(false, a10, aVar.a());
        f36241f = new e(true, c0460a.a(), aVar.a());
    }

    public e(boolean z10, a bytes, c number) {
        Intrinsics.checkNotNullParameter(bytes, "bytes");
        Intrinsics.checkNotNullParameter(number, "number");
        this.f36242a = z10;
        this.f36243b = bytes;
        this.f36244c = number;
    }

    public final a b() {
        return this.f36243b;
    }

    public final c c() {
        return this.f36244c;
    }

    public final boolean d() {
        return this.f36242a;
    }

    public String toString() {
        StringBuilder sb2 = new StringBuilder();
        sb2.append("HexFormat(");
        sb2.append('\n');
        sb2.append("    upperCase = ");
        sb2.append(this.f36242a);
        sb2.append(",");
        sb2.append('\n');
        sb2.append("    bytes = BytesHexFormat(");
        sb2.append('\n');
        this.f36243b.b(sb2, "        ").append('\n');
        sb2.append("    ),");
        sb2.append('\n');
        sb2.append("    number = NumberHexFormat(");
        sb2.append('\n');
        this.f36244c.b(sb2, "        ").append('\n');
        sb2.append("    )");
        sb2.append('\n');
        sb2.append(")");
        return sb2.toString();
    }
}

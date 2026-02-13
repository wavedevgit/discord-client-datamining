package kotlin.text;

import kotlin.jvm.internal.DefaultConstructorMarker;
import kotlin.jvm.internal.Intrinsics;
import org.jetbrains.annotations.NotNull;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public final class e {
    @NotNull

    /* renamed from: d  reason: collision with root package name */
    public static final b f35497d = new b(null);

    /* renamed from: e  reason: collision with root package name */
    private static final e f35498e;

    /* renamed from: f  reason: collision with root package name */
    private static final e f35499f;

    /* renamed from: a  reason: collision with root package name */
    private final boolean f35500a;

    /* renamed from: b  reason: collision with root package name */
    private final a f35501b;

    /* renamed from: c  reason: collision with root package name */
    private final c f35502c;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
    public static final class a {
        @NotNull

        /* renamed from: j  reason: collision with root package name */
        public static final C0463a f35503j = new C0463a(null);

        /* renamed from: k  reason: collision with root package name */
        private static final a f35504k = new a(Integer.MAX_VALUE, Integer.MAX_VALUE, "  ", "", "", "");

        /* renamed from: a  reason: collision with root package name */
        private final int f35505a;

        /* renamed from: b  reason: collision with root package name */
        private final int f35506b;

        /* renamed from: c  reason: collision with root package name */
        private final String f35507c;

        /* renamed from: d  reason: collision with root package name */
        private final String f35508d;

        /* renamed from: e  reason: collision with root package name */
        private final String f35509e;

        /* renamed from: f  reason: collision with root package name */
        private final String f35510f;

        /* renamed from: g  reason: collision with root package name */
        private final boolean f35511g;

        /* renamed from: h  reason: collision with root package name */
        private final boolean f35512h;

        /* renamed from: i  reason: collision with root package name */
        private final boolean f35513i;

        /* renamed from: kotlin.text.e$a$a  reason: collision with other inner class name */
        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
        public static final class C0463a {
            public /* synthetic */ C0463a(DefaultConstructorMarker defaultConstructorMarker) {
                this();
            }

            public final a a() {
                return a.f35504k;
            }

            private C0463a() {
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
                r3.f35505a = r4
                r3.f35506b = r5
                r3.f35507c = r6
                r3.f35508d = r7
                r3.f35509e = r8
                r3.f35510f = r9
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
                r3.f35511g = r4
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
                r3.f35512h = r4
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
                r3.f35513i = r0
                return
            */
            throw new UnsupportedOperationException("Method not decompiled: kotlin.text.e.a.<init>(int, int, java.lang.String, java.lang.String, java.lang.String, java.lang.String):void");
        }

        public final StringBuilder b(StringBuilder sb2, String indent) {
            Intrinsics.checkNotNullParameter(sb2, "sb");
            Intrinsics.checkNotNullParameter(indent, "indent");
            sb2.append(indent);
            sb2.append("bytesPerLine = ");
            sb2.append(this.f35505a);
            sb2.append(",");
            sb2.append('\n');
            sb2.append(indent);
            sb2.append("bytesPerGroup = ");
            sb2.append(this.f35506b);
            sb2.append(",");
            sb2.append('\n');
            sb2.append(indent);
            sb2.append("groupSeparator = \"");
            sb2.append(this.f35507c);
            sb2.append("\",");
            sb2.append('\n');
            sb2.append(indent);
            sb2.append("byteSeparator = \"");
            sb2.append(this.f35508d);
            sb2.append("\",");
            sb2.append('\n');
            sb2.append(indent);
            sb2.append("bytePrefix = \"");
            sb2.append(this.f35509e);
            sb2.append("\",");
            sb2.append('\n');
            sb2.append(indent);
            sb2.append("byteSuffix = \"");
            sb2.append(this.f35510f);
            sb2.append("\"");
            return sb2;
        }

        public final String c() {
            return this.f35509e;
        }

        public final String d() {
            return this.f35508d;
        }

        public final String e() {
            return this.f35510f;
        }

        public final int f() {
            return this.f35506b;
        }

        public final int g() {
            return this.f35505a;
        }

        public final String h() {
            return this.f35507c;
        }

        public final boolean i() {
            return this.f35511g;
        }

        public final boolean j() {
            return this.f35512h;
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
            return e.f35498e;
        }

        private b() {
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
    public static final class c {
        @NotNull

        /* renamed from: h  reason: collision with root package name */
        public static final a f35514h = new a(null);

        /* renamed from: i  reason: collision with root package name */
        private static final c f35515i = new c("", "", false, 1);

        /* renamed from: a  reason: collision with root package name */
        private final String f35516a;

        /* renamed from: b  reason: collision with root package name */
        private final String f35517b;

        /* renamed from: c  reason: collision with root package name */
        private final boolean f35518c;

        /* renamed from: d  reason: collision with root package name */
        private final int f35519d;

        /* renamed from: e  reason: collision with root package name */
        private final boolean f35520e;

        /* renamed from: f  reason: collision with root package name */
        private final boolean f35521f;

        /* renamed from: g  reason: collision with root package name */
        private final boolean f35522g;

        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
        public static final class a {
            public /* synthetic */ a(DefaultConstructorMarker defaultConstructorMarker) {
                this();
            }

            public final c a() {
                return c.f35515i;
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
                r2.f35516a = r3
                r2.f35517b = r4
                r2.f35518c = r5
                r2.f35519d = r6
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
                r2.f35520e = r5
                if (r5 == 0) goto L2e
                if (r6 != r1) goto L2e
                r5 = r1
                goto L2f
            L2e:
                r5 = r0
            L2f:
                r2.f35521f = r5
                boolean r3 = kotlin.text.f.a(r3)
                if (r3 != 0) goto L3d
                boolean r3 = kotlin.text.f.a(r4)
                if (r3 == 0) goto L3e
            L3d:
                r0 = r1
            L3e:
                r2.f35522g = r0
                return
            */
            throw new UnsupportedOperationException("Method not decompiled: kotlin.text.e.c.<init>(java.lang.String, java.lang.String, boolean, int):void");
        }

        public final StringBuilder b(StringBuilder sb2, String indent) {
            Intrinsics.checkNotNullParameter(sb2, "sb");
            Intrinsics.checkNotNullParameter(indent, "indent");
            sb2.append(indent);
            sb2.append("prefix = \"");
            sb2.append(this.f35516a);
            sb2.append("\",");
            sb2.append('\n');
            sb2.append(indent);
            sb2.append("suffix = \"");
            sb2.append(this.f35517b);
            sb2.append("\",");
            sb2.append('\n');
            sb2.append(indent);
            sb2.append("removeLeadingZeros = ");
            sb2.append(this.f35518c);
            sb2.append(',');
            sb2.append('\n');
            sb2.append(indent);
            sb2.append("minLength = ");
            sb2.append(this.f35519d);
            return sb2;
        }

        public final boolean c() {
            return this.f35522g;
        }

        public final String d() {
            return this.f35516a;
        }

        public final String e() {
            return this.f35517b;
        }

        public final boolean f() {
            return this.f35520e;
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
        a.C0463a c0463a = a.f35503j;
        a a10 = c0463a.a();
        c.a aVar = c.f35514h;
        f35498e = new e(false, a10, aVar.a());
        f35499f = new e(true, c0463a.a(), aVar.a());
    }

    public e(boolean z10, a bytes, c number) {
        Intrinsics.checkNotNullParameter(bytes, "bytes");
        Intrinsics.checkNotNullParameter(number, "number");
        this.f35500a = z10;
        this.f35501b = bytes;
        this.f35502c = number;
    }

    public final a b() {
        return this.f35501b;
    }

    public final c c() {
        return this.f35502c;
    }

    public final boolean d() {
        return this.f35500a;
    }

    public String toString() {
        StringBuilder sb2 = new StringBuilder();
        sb2.append("HexFormat(");
        sb2.append('\n');
        sb2.append("    upperCase = ");
        sb2.append(this.f35500a);
        sb2.append(",");
        sb2.append('\n');
        sb2.append("    bytes = BytesHexFormat(");
        sb2.append('\n');
        this.f35501b.b(sb2, "        ").append('\n');
        sb2.append("    ),");
        sb2.append('\n');
        sb2.append("    number = NumberHexFormat(");
        sb2.append('\n');
        this.f35502c.b(sb2, "        ").append('\n');
        sb2.append("    )");
        sb2.append('\n');
        sb2.append(")");
        return sb2.toString();
    }
}

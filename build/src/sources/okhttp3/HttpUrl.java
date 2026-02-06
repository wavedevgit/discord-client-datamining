package okhttp3;

import com.facebook.react.fabric.mounting.mountitems.IntBufferBatchMountItem;
import java.net.MalformedURLException;
import java.net.URI;
import java.net.URISyntaxException;
import java.net.URL;
import java.nio.charset.Charset;
import java.nio.charset.StandardCharsets;
import java.util.ArrayList;
import java.util.List;
import kotlin.collections.CollectionsKt;
import kotlin.jvm.internal.DefaultConstructorMarker;
import kotlin.jvm.internal.Intrinsics;
import kotlin.text.Regex;
import kotlin.text.StringsKt;
import okio.Buffer;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public final class HttpUrl {

    /* renamed from: k  reason: collision with root package name */
    public static final b f42851k = new b(null);

    /* renamed from: l  reason: collision with root package name */
    private static final char[] f42852l = {'0', '1', '2', '3', '4', '5', '6', '7', '8', '9', 'A', 'B', 'C', 'D', 'E', 'F'};

    /* renamed from: a  reason: collision with root package name */
    private final String f42853a;

    /* renamed from: b  reason: collision with root package name */
    private final String f42854b;

    /* renamed from: c  reason: collision with root package name */
    private final String f42855c;

    /* renamed from: d  reason: collision with root package name */
    private final String f42856d;

    /* renamed from: e  reason: collision with root package name */
    private final int f42857e;

    /* renamed from: f  reason: collision with root package name */
    private final List f42858f;

    /* renamed from: g  reason: collision with root package name */
    private final List f42859g;

    /* renamed from: h  reason: collision with root package name */
    private final String f42860h;

    /* renamed from: i  reason: collision with root package name */
    private final String f42861i;

    /* renamed from: j  reason: collision with root package name */
    private final boolean f42862j;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
    public static final class a {

        /* renamed from: i  reason: collision with root package name */
        public static final C0563a f42863i = new C0563a(null);

        /* renamed from: a  reason: collision with root package name */
        private String f42864a;

        /* renamed from: d  reason: collision with root package name */
        private String f42867d;

        /* renamed from: f  reason: collision with root package name */
        private final List f42869f;

        /* renamed from: g  reason: collision with root package name */
        private List f42870g;

        /* renamed from: h  reason: collision with root package name */
        private String f42871h;

        /* renamed from: b  reason: collision with root package name */
        private String f42865b = "";

        /* renamed from: c  reason: collision with root package name */
        private String f42866c = "";

        /* renamed from: e  reason: collision with root package name */
        private int f42868e = -1;

        /* renamed from: okhttp3.HttpUrl$a$a  reason: collision with other inner class name */
        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
        public static final class C0563a {
            public /* synthetic */ C0563a(DefaultConstructorMarker defaultConstructorMarker) {
                this();
            }

            /* JADX INFO: Access modifiers changed from: private */
            public final int e(String str, int i10, int i11) {
                int parseInt;
                try {
                    parseInt = Integer.parseInt(b.b(HttpUrl.f42851k, str, i10, i11, "", false, false, false, false, null, 248, null));
                } catch (NumberFormatException unused) {
                }
                if (1 > parseInt || parseInt >= 65536) {
                    return -1;
                }
                return parseInt;
            }

            /* JADX INFO: Access modifiers changed from: private */
            public final int f(String str, int i10, int i11) {
                while (i10 < i11) {
                    char charAt = str.charAt(i10);
                    if (charAt == '[') {
                        do {
                            i10++;
                            if (i10 < i11) {
                            }
                        } while (str.charAt(i10) != ']');
                    } else if (charAt == ':') {
                        return i10;
                    }
                    i10++;
                }
                return i11;
            }

            /* JADX INFO: Access modifiers changed from: private */
            public final int g(String str, int i10, int i11) {
                if (i11 - i10 < 2) {
                    return -1;
                }
                char charAt = str.charAt(i10);
                if ((Intrinsics.compare((int) charAt, 97) >= 0 && Intrinsics.compare((int) charAt, 122) <= 0) || (Intrinsics.compare((int) charAt, 65) >= 0 && Intrinsics.compare((int) charAt, 90) <= 0)) {
                    while (true) {
                        i10++;
                        if (i10 >= i11) {
                            break;
                        }
                        char charAt2 = str.charAt(i10);
                        if ('a' > charAt2 || charAt2 >= '{') {
                            if ('A' > charAt2 || charAt2 >= '[') {
                                if ('0' > charAt2 || charAt2 >= ':') {
                                    if (charAt2 != '+' && charAt2 != '-' && charAt2 != '.') {
                                        if (charAt2 == ':') {
                                            return i10;
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
                return -1;
            }

            /* JADX INFO: Access modifiers changed from: private */
            public final int h(String str, int i10, int i11) {
                int i12 = 0;
                while (i10 < i11) {
                    char charAt = str.charAt(i10);
                    if (charAt != '\\' && charAt != '/') {
                        break;
                    }
                    i12++;
                    i10++;
                }
                return i12;
            }

            private C0563a() {
            }
        }

        public a() {
            ArrayList arrayList = new ArrayList();
            this.f42869f = arrayList;
            arrayList.add("");
        }

        private final int d() {
            int i10 = this.f42868e;
            if (i10 != -1) {
                return i10;
            }
            b bVar = HttpUrl.f42851k;
            String str = this.f42864a;
            Intrinsics.checkNotNull(str);
            return bVar.c(str);
        }

        private final boolean h(String str) {
            if (Intrinsics.areEqual(str, ".") || StringsKt.A(str, "%2e", true)) {
                return true;
            }
            return false;
        }

        private final boolean i(String str) {
            if (Intrinsics.areEqual(str, "..") || StringsKt.A(str, "%2e.", true) || StringsKt.A(str, ".%2e", true) || StringsKt.A(str, "%2e%2e", true)) {
                return true;
            }
            return false;
        }

        private final void l() {
            List list = this.f42869f;
            if (((String) list.remove(list.size() - 1)).length() == 0 && !this.f42869f.isEmpty()) {
                List list2 = this.f42869f;
                list2.set(list2.size() - 1, "");
                return;
            }
            this.f42869f.add("");
        }

        private final void n(String str, int i10, int i11, boolean z10, boolean z11) {
            String b10 = b.b(HttpUrl.f42851k, str, i10, i11, " \"<>^`{}|/\\?#", z11, false, false, false, null, 240, null);
            if (!h(b10)) {
                if (i(b10)) {
                    l();
                    return;
                }
                List list = this.f42869f;
                if (((CharSequence) list.get(list.size() - 1)).length() == 0) {
                    List list2 = this.f42869f;
                    list2.set(list2.size() - 1, b10);
                } else {
                    this.f42869f.add(b10);
                }
                if (z10) {
                    this.f42869f.add("");
                }
            }
        }

        private final void p(String str, int i10, int i11) {
            boolean z10;
            if (i10 != i11) {
                char charAt = str.charAt(i10);
                if (charAt != '/' && charAt != '\\') {
                    List list = this.f42869f;
                    list.set(list.size() - 1, "");
                } else {
                    this.f42869f.clear();
                    this.f42869f.add("");
                    i10++;
                }
                int i12 = i10;
                while (i12 < i11) {
                    int q10 = cu.e.q(str, "/\\", i12, i11);
                    if (q10 < i11) {
                        z10 = true;
                    } else {
                        z10 = false;
                    }
                    String str2 = str;
                    n(str2, i12, q10, z10, true);
                    if (z10) {
                        i12 = q10 + 1;
                        str = str2;
                    } else {
                        str = str2;
                        i12 = q10;
                    }
                }
            }
        }

        public final a a(String encodedName, String str) {
            String str2;
            Intrinsics.checkNotNullParameter(encodedName, "encodedName");
            if (this.f42870g == null) {
                this.f42870g = new ArrayList();
            }
            List list = this.f42870g;
            Intrinsics.checkNotNull(list);
            b bVar = HttpUrl.f42851k;
            list.add(b.b(bVar, encodedName, 0, 0, " \"'<>#&=", true, false, true, false, null, 211, null));
            List list2 = this.f42870g;
            Intrinsics.checkNotNull(list2);
            if (str != null) {
                str2 = b.b(bVar, str, 0, 0, " \"'<>#&=", true, false, true, false, null, 211, null);
            } else {
                str2 = null;
            }
            list2.add(str2);
            return this;
        }

        public final a b(String name, String str) {
            String str2;
            Intrinsics.checkNotNullParameter(name, "name");
            if (this.f42870g == null) {
                this.f42870g = new ArrayList();
            }
            List list = this.f42870g;
            Intrinsics.checkNotNull(list);
            b bVar = HttpUrl.f42851k;
            list.add(b.b(bVar, name, 0, 0, " !\"#$&'(),/:;<=>?@[]\\^`{|}~", false, false, true, false, null, 219, null));
            List list2 = this.f42870g;
            Intrinsics.checkNotNull(list2);
            if (str != null) {
                str2 = b.b(bVar, str, 0, 0, " !\"#$&'(),/:;<=>?@[]\\^`{|}~", false, false, true, false, null, 219, null);
            } else {
                str2 = null;
            }
            list2.add(str2);
            return this;
        }

        public final HttpUrl c() {
            ArrayList arrayList;
            String str;
            String str2 = this.f42864a;
            if (str2 != null) {
                b bVar = HttpUrl.f42851k;
                String h10 = b.h(bVar, this.f42865b, 0, 0, false, 7, null);
                String h11 = b.h(bVar, this.f42866c, 0, 0, false, 7, null);
                String str3 = this.f42867d;
                if (str3 != null) {
                    int d10 = d();
                    List<String> list = this.f42869f;
                    ArrayList arrayList2 = new ArrayList(CollectionsKt.w(list, 10));
                    for (String str4 : list) {
                        arrayList2.add(b.h(HttpUrl.f42851k, str4, 0, 0, false, 7, null));
                    }
                    List list2 = this.f42870g;
                    String str5 = null;
                    if (list2 != null) {
                        List<String> list3 = list2;
                        ArrayList arrayList3 = new ArrayList(CollectionsKt.w(list3, 10));
                        for (String str6 : list3) {
                            if (str6 != null) {
                                str = b.h(HttpUrl.f42851k, str6, 0, 0, true, 3, null);
                            } else {
                                str = null;
                            }
                            arrayList3.add(str);
                        }
                        arrayList = arrayList3;
                    } else {
                        arrayList = null;
                    }
                    String str7 = this.f42871h;
                    if (str7 != null) {
                        str5 = b.h(HttpUrl.f42851k, str7, 0, 0, false, 7, null);
                    }
                    return new HttpUrl(str2, h10, h11, str3, d10, arrayList2, arrayList, str5, toString());
                }
                throw new IllegalStateException("host == null");
            }
            throw new IllegalStateException("scheme == null");
        }

        public final a e(String str) {
            List list;
            b bVar;
            String b10;
            if (str != null && (b10 = b.b((bVar = HttpUrl.f42851k), str, 0, 0, " \"'<>#", true, false, true, false, null, 211, null)) != null) {
                list = bVar.j(b10);
            } else {
                list = null;
            }
            this.f42870g = list;
            return this;
        }

        public final List f() {
            return this.f42869f;
        }

        public final a g(String host) {
            Intrinsics.checkNotNullParameter(host, "host");
            String e10 = cu.a.e(b.h(HttpUrl.f42851k, host, 0, 0, false, 7, null));
            if (e10 != null) {
                this.f42867d = e10;
                return this;
            }
            throw new IllegalArgumentException("unexpected host: " + host);
        }

        public final a j(HttpUrl httpUrl, String str) {
            String str2;
            int q10;
            int i10;
            String str3;
            int i11;
            String str4;
            boolean z10;
            char c10;
            int i12;
            int i13;
            char c11;
            int i14;
            String input = str;
            Intrinsics.checkNotNullParameter(input, "input");
            int A = cu.e.A(input, 0, 0, 3, null);
            int C = cu.e.C(input, A, 0, 2, null);
            C0563a c0563a = f42863i;
            int g10 = c0563a.g(input, A, C);
            String str5 = "this as java.lang.String…ing(startIndex, endIndex)";
            boolean z11 = true;
            char c12 = 65535;
            if (g10 != -1) {
                if (StringsKt.M(input, "https:", A, true)) {
                    this.f42864a = "https";
                    A += 6;
                } else if (StringsKt.M(input, "http:", A, true)) {
                    this.f42864a = "http";
                    A += 5;
                } else {
                    StringBuilder sb2 = new StringBuilder();
                    sb2.append("Expected URL scheme 'http' or 'https' but was '");
                    String substring = input.substring(0, g10);
                    Intrinsics.checkNotNullExpressionValue(substring, "this as java.lang.String…ing(startIndex, endIndex)");
                    sb2.append(substring);
                    sb2.append('\'');
                    throw new IllegalArgumentException(sb2.toString());
                }
            } else if (httpUrl != null) {
                this.f42864a = httpUrl.s();
            } else {
                if (input.length() > 6) {
                    str2 = StringsKt.x1(input, 6) + "...";
                } else {
                    str2 = input;
                }
                throw new IllegalArgumentException("Expected URL scheme 'http' or 'https' but no scheme was found for " + str2);
            }
            int h10 = c0563a.h(input, A, C);
            char c13 = '?';
            char c14 = '#';
            if (h10 < 2 && httpUrl != null && Intrinsics.areEqual(httpUrl.s(), this.f42864a)) {
                this.f42865b = httpUrl.g();
                this.f42866c = httpUrl.c();
                this.f42867d = httpUrl.i();
                this.f42868e = httpUrl.o();
                this.f42869f.clear();
                this.f42869f.addAll(httpUrl.e());
                if (A == C || input.charAt(A) == '#') {
                    e(httpUrl.f());
                }
                i10 = C;
            } else {
                int i15 = A + h10;
                boolean z12 = false;
                boolean z13 = false;
                while (true) {
                    q10 = cu.e.q(input, "@/\\?#", i15, C);
                    char charAt = q10 != C ? input.charAt(q10) : c12;
                    if (charAt == c12 || charAt == c14 || charAt == '/' || charAt == '\\' || charAt == c13) {
                        break;
                    } else if (charAt == '@') {
                        if (!z12) {
                            int p10 = cu.e.p(input, ':', i15, q10);
                            b bVar = HttpUrl.f42851k;
                            str4 = str5;
                            c10 = c12;
                            i11 = C;
                            z10 = z11;
                            String b10 = b.b(bVar, input, i15, p10, " \"':;<=>@[]^`{}|/\\?#", true, false, false, false, null, 240, null);
                            if (z13) {
                                b10 = this.f42865b + "%40" + b10;
                            }
                            this.f42865b = b10;
                            if (p10 != q10) {
                                i13 = q10;
                                this.f42866c = b.b(bVar, str, p10 + 1, i13, " \"':;<=>@[]^`{}|/\\?#", true, false, false, false, null, 240, null);
                                z12 = z10;
                            } else {
                                i13 = q10;
                            }
                            input = str;
                            i12 = i13;
                            z13 = z10;
                        } else {
                            i11 = C;
                            str4 = str5;
                            z10 = z11;
                            c10 = c12;
                            StringBuilder sb3 = new StringBuilder();
                            sb3.append(this.f42866c);
                            sb3.append("%40");
                            input = str;
                            i12 = q10;
                            sb3.append(b.b(HttpUrl.f42851k, input, i15, q10, " \"':;<=>@[]^`{}|/\\?#", true, false, false, false, null, 240, null));
                            this.f42866c = sb3.toString();
                        }
                        i15 = i12 + 1;
                        c12 = c10;
                        C = i11;
                        str5 = str4;
                        z11 = z10;
                        c13 = '?';
                        c14 = '#';
                    }
                }
                i10 = C;
                String str6 = str5;
                char c15 = c12;
                C0563a c0563a2 = f42863i;
                int f10 = c0563a2.f(input, i15, q10);
                int i16 = f10 + 1;
                if (i16 < q10) {
                    this.f42867d = cu.a.e(b.h(HttpUrl.f42851k, input, i15, f10, false, 4, null));
                    int e10 = c0563a2.e(input, i16, q10);
                    this.f42868e = e10;
                    if (e10 == c15) {
                        StringBuilder sb4 = new StringBuilder();
                        sb4.append("Invalid URL port: \"");
                        String substring2 = input.substring(i16, q10);
                        Intrinsics.checkNotNullExpressionValue(substring2, str6);
                        sb4.append(substring2);
                        sb4.append('\"');
                        throw new IllegalArgumentException(sb4.toString().toString());
                    }
                    str3 = str6;
                } else {
                    str3 = str6;
                    b bVar2 = HttpUrl.f42851k;
                    this.f42867d = cu.a.e(b.h(bVar2, input, i15, f10, false, 4, null));
                    String str7 = this.f42864a;
                    Intrinsics.checkNotNull(str7);
                    this.f42868e = bVar2.c(str7);
                }
                if (this.f42867d == null) {
                    StringBuilder sb5 = new StringBuilder();
                    sb5.append("Invalid URL host: \"");
                    String substring3 = input.substring(i15, f10);
                    Intrinsics.checkNotNullExpressionValue(substring3, str3);
                    sb5.append(substring3);
                    sb5.append('\"');
                    throw new IllegalArgumentException(sb5.toString().toString());
                }
                A = q10;
            }
            int i17 = i10;
            int q11 = cu.e.q(input, "?#", A, i17);
            p(input, A, q11);
            if (q11 >= i17 || input.charAt(q11) != '?') {
                c11 = '#';
                i14 = q11;
            } else {
                c11 = '#';
                int p11 = cu.e.p(input, '#', q11, i17);
                b bVar3 = HttpUrl.f42851k;
                this.f42870g = bVar3.j(b.b(bVar3, input, q11 + 1, p11, " \"'<>#", true, false, true, false, null, 208, null));
                i14 = p11;
            }
            if (i14 < i17 && input.charAt(i14) == c11) {
                this.f42871h = b.b(HttpUrl.f42851k, input, i14 + 1, i17, "", true, false, false, true, null, 176, null);
            }
            return this;
        }

        public final a k(String password) {
            Intrinsics.checkNotNullParameter(password, "password");
            this.f42866c = b.b(HttpUrl.f42851k, password, 0, 0, " \"':;<=>@[]^`{}|/\\?#", false, false, false, false, null, 251, null);
            return this;
        }

        public final a m(int i10) {
            if (1 <= i10 && i10 < 65536) {
                this.f42868e = i10;
                return this;
            }
            throw new IllegalArgumentException(("unexpected port: " + i10).toString());
        }

        public final a o() {
            String str;
            String str2;
            String str3 = this.f42867d;
            String str4 = null;
            if (str3 != null) {
                str = new Regex("[\"<>^`{|}]").replace(str3, "");
            } else {
                str = null;
            }
            this.f42867d = str;
            int size = this.f42869f.size();
            for (int i10 = 0; i10 < size; i10++) {
                List list = this.f42869f;
                list.set(i10, b.b(HttpUrl.f42851k, (String) list.get(i10), 0, 0, "[]", true, true, false, false, null, 227, null));
            }
            List list2 = this.f42870g;
            if (list2 != null) {
                int size2 = list2.size();
                for (int i11 = 0; i11 < size2; i11++) {
                    String str5 = (String) list2.get(i11);
                    if (str5 != null) {
                        str2 = b.b(HttpUrl.f42851k, str5, 0, 0, "\\^`{|}", true, true, true, false, null, 195, null);
                    } else {
                        str2 = null;
                    }
                    list2.set(i11, str2);
                }
            }
            String str6 = this.f42871h;
            if (str6 != null) {
                str4 = b.b(HttpUrl.f42851k, str6, 0, 0, " \"#<>\\^`{|}", true, true, false, true, null, 163, null);
            }
            this.f42871h = str4;
            return this;
        }

        public final a q(String scheme) {
            Intrinsics.checkNotNullParameter(scheme, "scheme");
            if (StringsKt.A(scheme, "http", true)) {
                this.f42864a = "http";
                return this;
            } else if (StringsKt.A(scheme, "https", true)) {
                this.f42864a = "https";
                return this;
            } else {
                throw new IllegalArgumentException("unexpected scheme: " + scheme);
            }
        }

        public final void r(String str) {
            this.f42871h = str;
        }

        public final void s(String str) {
            Intrinsics.checkNotNullParameter(str, "<set-?>");
            this.f42866c = str;
        }

        public final void t(String str) {
            Intrinsics.checkNotNullParameter(str, "<set-?>");
            this.f42865b = str;
        }

        /* JADX WARN: Code restructure failed: missing block: B:28:0x0083, code lost:
            if (r1 != r4.c(r3)) goto L31;
         */
        /*
            Code decompiled incorrectly, please refer to instructions dump.
            To view partially-correct add '--show-bad-code' argument
        */
        public java.lang.String toString() {
            /*
                r6 = this;
                java.lang.StringBuilder r0 = new java.lang.StringBuilder
                r0.<init>()
                java.lang.String r1 = r6.f42864a
                if (r1 == 0) goto L12
                r0.append(r1)
                java.lang.String r1 = "://"
                r0.append(r1)
                goto L17
            L12:
                java.lang.String r1 = "//"
                r0.append(r1)
            L17:
                java.lang.String r1 = r6.f42865b
                int r1 = r1.length()
                r2 = 58
                if (r1 <= 0) goto L22
                goto L2a
            L22:
                java.lang.String r1 = r6.f42866c
                int r1 = r1.length()
                if (r1 <= 0) goto L44
            L2a:
                java.lang.String r1 = r6.f42865b
                r0.append(r1)
                java.lang.String r1 = r6.f42866c
                int r1 = r1.length()
                if (r1 <= 0) goto L3f
                r0.append(r2)
                java.lang.String r1 = r6.f42866c
                r0.append(r1)
            L3f:
                r1 = 64
                r0.append(r1)
            L44:
                java.lang.String r1 = r6.f42867d
                if (r1 == 0) goto L69
                kotlin.jvm.internal.Intrinsics.checkNotNull(r1)
                r3 = 2
                r4 = 0
                r5 = 0
                boolean r1 = kotlin.text.StringsKt.U(r1, r2, r5, r3, r4)
                if (r1 == 0) goto L64
                r1 = 91
                r0.append(r1)
                java.lang.String r1 = r6.f42867d
                r0.append(r1)
                r1 = 93
                r0.append(r1)
                goto L69
            L64:
                java.lang.String r1 = r6.f42867d
                r0.append(r1)
            L69:
                int r1 = r6.f42868e
                r3 = -1
                if (r1 != r3) goto L72
                java.lang.String r1 = r6.f42864a
                if (r1 == 0) goto L8b
            L72:
                int r1 = r6.d()
                java.lang.String r3 = r6.f42864a
                if (r3 == 0) goto L85
                okhttp3.HttpUrl$b r4 = okhttp3.HttpUrl.f42851k
                kotlin.jvm.internal.Intrinsics.checkNotNull(r3)
                int r3 = r4.c(r3)
                if (r1 == r3) goto L8b
            L85:
                r0.append(r2)
                r0.append(r1)
            L8b:
                okhttp3.HttpUrl$b r1 = okhttp3.HttpUrl.f42851k
                java.util.List r2 = r6.f42869f
                r1.i(r2, r0)
                java.util.List r2 = r6.f42870g
                if (r2 == 0) goto La3
                r2 = 63
                r0.append(r2)
                java.util.List r2 = r6.f42870g
                kotlin.jvm.internal.Intrinsics.checkNotNull(r2)
                r1.k(r2, r0)
            La3:
                java.lang.String r1 = r6.f42871h
                if (r1 == 0) goto Lb1
                r1 = 35
                r0.append(r1)
                java.lang.String r1 = r6.f42871h
                r0.append(r1)
            Lb1:
                java.lang.String r0 = r0.toString()
                java.lang.String r1 = "StringBuilder().apply(builderAction).toString()"
                kotlin.jvm.internal.Intrinsics.checkNotNullExpressionValue(r0, r1)
                return r0
            */
            throw new UnsupportedOperationException("Method not decompiled: okhttp3.HttpUrl.a.toString():java.lang.String");
        }

        public final void u(String str) {
            this.f42867d = str;
        }

        public final void v(int i10) {
            this.f42868e = i10;
        }

        public final void w(String str) {
            this.f42864a = str;
        }

        public final a x(String username) {
            Intrinsics.checkNotNullParameter(username, "username");
            this.f42865b = b.b(HttpUrl.f42851k, username, 0, 0, " \"':;<=>@[]^`{}|/\\?#", false, false, false, false, null, 251, null);
            return this;
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
    public static final class b {
        public /* synthetic */ b(DefaultConstructorMarker defaultConstructorMarker) {
            this();
        }

        public static /* synthetic */ String b(b bVar, String str, int i10, int i11, String str2, boolean z10, boolean z11, boolean z12, boolean z13, Charset charset, int i12, Object obj) {
            if ((i12 & 1) != 0) {
                i10 = 0;
            }
            if ((i12 & 2) != 0) {
                i11 = str.length();
            }
            if ((i12 & 8) != 0) {
                z10 = false;
            }
            if ((i12 & 16) != 0) {
                z11 = false;
            }
            if ((i12 & 32) != 0) {
                z12 = false;
            }
            if ((i12 & 64) != 0) {
                z13 = false;
            }
            if ((i12 & IntBufferBatchMountItem.INSTRUCTION_UPDATE_LAYOUT) != 0) {
                charset = null;
            }
            return bVar.a(str, i10, i11, str2, z10, z11, z12, z13, charset);
        }

        private final boolean e(String str, int i10, int i11) {
            int i12 = i10 + 2;
            if (i12 < i11 && str.charAt(i10) == '%' && cu.e.I(str.charAt(i10 + 1)) != -1 && cu.e.I(str.charAt(i12)) != -1) {
                return true;
            }
            return false;
        }

        public static /* synthetic */ String h(b bVar, String str, int i10, int i11, boolean z10, int i12, Object obj) {
            if ((i12 & 1) != 0) {
                i10 = 0;
            }
            if ((i12 & 2) != 0) {
                i11 = str.length();
            }
            if ((i12 & 4) != 0) {
                z10 = false;
            }
            return bVar.g(str, i10, i11, z10);
        }

        private final void l(Buffer buffer, String str, int i10, int i11, String str2, boolean z10, boolean z11, boolean z12, boolean z13, Charset charset) {
            String str3;
            int i12 = i10;
            Buffer buffer2 = null;
            while (i12 < i11) {
                int codePointAt = str.codePointAt(i12);
                if (!z10 || (codePointAt != 9 && codePointAt != 10 && codePointAt != 12 && codePointAt != 13)) {
                    if (codePointAt == 43 && z12) {
                        if (z10) {
                            str3 = "+";
                        } else {
                            str3 = "%2B";
                        }
                        buffer.q0(str3);
                    } else {
                        if (codePointAt >= 32 && codePointAt != 127 && (codePointAt < 128 || z13)) {
                            if (!StringsKt.U(str2, (char) codePointAt, false, 2, null) && (codePointAt != 37 || (z10 && (!z11 || e(str, i12, i11))))) {
                                buffer.p2(codePointAt);
                                i12 += Character.charCount(codePointAt);
                            }
                        }
                        if (buffer2 == null) {
                            buffer2 = new Buffer();
                        }
                        if (charset != null && !Intrinsics.areEqual(charset, StandardCharsets.UTF_8)) {
                            buffer2.h2(str, i12, Character.charCount(codePointAt) + i12, charset);
                        } else {
                            buffer2.p2(codePointAt);
                        }
                        while (!buffer2.n1()) {
                            byte readByte = buffer2.readByte();
                            buffer.writeByte(37);
                            buffer.writeByte(HttpUrl.f42852l[((readByte & 255) >> 4) & 15]);
                            buffer.writeByte(HttpUrl.f42852l[readByte & 15]);
                        }
                        i12 += Character.charCount(codePointAt);
                    }
                }
                i12 += Character.charCount(codePointAt);
            }
        }

        private final void m(Buffer buffer, String str, int i10, int i11, boolean z10) {
            int i12;
            while (i10 < i11) {
                int codePointAt = str.codePointAt(i10);
                if (codePointAt == 37 && (i12 = i10 + 2) < i11) {
                    int I = cu.e.I(str.charAt(i10 + 1));
                    int I2 = cu.e.I(str.charAt(i12));
                    if (I != -1 && I2 != -1) {
                        buffer.writeByte((I << 4) + I2);
                        i10 = Character.charCount(codePointAt) + i12;
                    }
                    buffer.p2(codePointAt);
                    i10 += Character.charCount(codePointAt);
                } else {
                    if (codePointAt == 43 && z10) {
                        buffer.writeByte(32);
                        i10++;
                    }
                    buffer.p2(codePointAt);
                    i10 += Character.charCount(codePointAt);
                }
            }
        }

        public final String a(String str, int i10, int i11, String encodeSet, boolean z10, boolean z11, boolean z12, boolean z13, Charset charset) {
            Intrinsics.checkNotNullParameter(str, "<this>");
            Intrinsics.checkNotNullParameter(encodeSet, "encodeSet");
            int i12 = i10;
            while (i12 < i11) {
                int codePointAt = str.codePointAt(i12);
                if (codePointAt >= 32 && codePointAt != 127 && ((codePointAt < 128 || z13) && !StringsKt.U(encodeSet, (char) codePointAt, false, 2, null) && ((codePointAt != 37 || (z10 && (!z11 || e(str, i12, i11)))) && (codePointAt != 43 || !z12)))) {
                    i12 += Character.charCount(codePointAt);
                } else {
                    Buffer buffer = new Buffer();
                    buffer.z0(str, i10, i12);
                    l(buffer, str, i12, i11, encodeSet, z10, z11, z12, z13, charset);
                    return buffer.S1();
                }
            }
            String substring = str.substring(i10, i11);
            Intrinsics.checkNotNullExpressionValue(substring, "this as java.lang.String…ing(startIndex, endIndex)");
            return substring;
        }

        public final int c(String scheme) {
            Intrinsics.checkNotNullParameter(scheme, "scheme");
            if (Intrinsics.areEqual(scheme, "http")) {
                return 80;
            }
            if (Intrinsics.areEqual(scheme, "https")) {
                return 443;
            }
            return -1;
        }

        public final HttpUrl d(String str) {
            Intrinsics.checkNotNullParameter(str, "<this>");
            return new a().j(null, str).c();
        }

        public final HttpUrl f(String str) {
            Intrinsics.checkNotNullParameter(str, "<this>");
            try {
                return d(str);
            } catch (IllegalArgumentException unused) {
                return null;
            }
        }

        public final String g(String str, int i10, int i11, boolean z10) {
            Intrinsics.checkNotNullParameter(str, "<this>");
            for (int i12 = i10; i12 < i11; i12++) {
                char charAt = str.charAt(i12);
                if (charAt == '%' || (charAt == '+' && z10)) {
                    Buffer buffer = new Buffer();
                    buffer.z0(str, i10, i12);
                    m(buffer, str, i12, i11, z10);
                    return buffer.S1();
                }
            }
            String substring = str.substring(i10, i11);
            Intrinsics.checkNotNullExpressionValue(substring, "this as java.lang.String…ing(startIndex, endIndex)");
            return substring;
        }

        public final void i(List list, StringBuilder out) {
            Intrinsics.checkNotNullParameter(list, "<this>");
            Intrinsics.checkNotNullParameter(out, "out");
            int size = list.size();
            for (int i10 = 0; i10 < size; i10++) {
                out.append('/');
                out.append((String) list.get(i10));
            }
        }

        public final List j(String str) {
            Intrinsics.checkNotNullParameter(str, "<this>");
            ArrayList arrayList = new ArrayList();
            int i10 = 0;
            while (i10 <= str.length()) {
                String str2 = str;
                int h02 = StringsKt.h0(str2, '&', i10, false, 4, null);
                if (h02 == -1) {
                    h02 = str2.length();
                }
                int h03 = StringsKt.h0(str2, '=', i10, false, 4, null);
                if (h03 != -1 && h03 <= h02) {
                    String substring = str2.substring(i10, h03);
                    Intrinsics.checkNotNullExpressionValue(substring, "this as java.lang.String…ing(startIndex, endIndex)");
                    arrayList.add(substring);
                    String substring2 = str2.substring(h03 + 1, h02);
                    Intrinsics.checkNotNullExpressionValue(substring2, "this as java.lang.String…ing(startIndex, endIndex)");
                    arrayList.add(substring2);
                } else {
                    String substring3 = str2.substring(i10, h02);
                    Intrinsics.checkNotNullExpressionValue(substring3, "this as java.lang.String…ing(startIndex, endIndex)");
                    arrayList.add(substring3);
                    arrayList.add(null);
                }
                i10 = h02 + 1;
                str = str2;
            }
            return arrayList;
        }

        public final void k(List list, StringBuilder out) {
            Intrinsics.checkNotNullParameter(list, "<this>");
            Intrinsics.checkNotNullParameter(out, "out");
            kotlin.ranges.a s10 = kotlin.ranges.d.s(kotlin.ranges.d.u(0, list.size()), 2);
            int d10 = s10.d();
            int e10 = s10.e();
            int f10 = s10.f();
            if ((f10 <= 0 || d10 > e10) && (f10 >= 0 || e10 > d10)) {
                return;
            }
            while (true) {
                String str = (String) list.get(d10);
                String str2 = (String) list.get(d10 + 1);
                if (d10 > 0) {
                    out.append('&');
                }
                out.append(str);
                if (str2 != null) {
                    out.append('=');
                    out.append(str2);
                }
                if (d10 != e10) {
                    d10 += f10;
                } else {
                    return;
                }
            }
        }

        private b() {
        }
    }

    public HttpUrl(String scheme, String username, String password, String host, int i10, List pathSegments, List list, String str, String url) {
        Intrinsics.checkNotNullParameter(scheme, "scheme");
        Intrinsics.checkNotNullParameter(username, "username");
        Intrinsics.checkNotNullParameter(password, "password");
        Intrinsics.checkNotNullParameter(host, "host");
        Intrinsics.checkNotNullParameter(pathSegments, "pathSegments");
        Intrinsics.checkNotNullParameter(url, "url");
        this.f42853a = scheme;
        this.f42854b = username;
        this.f42855c = password;
        this.f42856d = host;
        this.f42857e = i10;
        this.f42858f = pathSegments;
        this.f42859g = list;
        this.f42860h = str;
        this.f42861i = url;
        this.f42862j = Intrinsics.areEqual(scheme, "https");
    }

    public static final HttpUrl h(String str) {
        return f42851k.d(str);
    }

    public static final HttpUrl m(String str) {
        return f42851k.f(str);
    }

    public final String b() {
        if (this.f42860h == null) {
            return null;
        }
        String substring = this.f42861i.substring(StringsKt.h0(this.f42861i, '#', 0, false, 6, null) + 1);
        Intrinsics.checkNotNullExpressionValue(substring, "this as java.lang.String).substring(startIndex)");
        return substring;
    }

    public final String c() {
        if (this.f42855c.length() == 0) {
            return "";
        }
        int h02 = StringsKt.h0(this.f42861i, '@', 0, false, 6, null);
        String substring = this.f42861i.substring(StringsKt.h0(this.f42861i, ':', this.f42853a.length() + 3, false, 4, null) + 1, h02);
        Intrinsics.checkNotNullExpressionValue(substring, "this as java.lang.String…ing(startIndex, endIndex)");
        return substring;
    }

    public final String d() {
        int h02 = StringsKt.h0(this.f42861i, '/', this.f42853a.length() + 3, false, 4, null);
        String str = this.f42861i;
        String substring = this.f42861i.substring(h02, cu.e.q(str, "?#", h02, str.length()));
        Intrinsics.checkNotNullExpressionValue(substring, "this as java.lang.String…ing(startIndex, endIndex)");
        return substring;
    }

    public final List e() {
        int h02 = StringsKt.h0(this.f42861i, '/', this.f42853a.length() + 3, false, 4, null);
        String str = this.f42861i;
        int q10 = cu.e.q(str, "?#", h02, str.length());
        ArrayList arrayList = new ArrayList();
        while (h02 < q10) {
            int i10 = h02 + 1;
            int p10 = cu.e.p(this.f42861i, '/', i10, q10);
            String substring = this.f42861i.substring(i10, p10);
            Intrinsics.checkNotNullExpressionValue(substring, "this as java.lang.String…ing(startIndex, endIndex)");
            arrayList.add(substring);
            h02 = p10;
        }
        return arrayList;
    }

    public boolean equals(Object obj) {
        if ((obj instanceof HttpUrl) && Intrinsics.areEqual(((HttpUrl) obj).f42861i, this.f42861i)) {
            return true;
        }
        return false;
    }

    public final String f() {
        if (this.f42859g == null) {
            return null;
        }
        int h02 = StringsKt.h0(this.f42861i, '?', 0, false, 6, null) + 1;
        String str = this.f42861i;
        String substring = this.f42861i.substring(h02, cu.e.p(str, '#', h02, str.length()));
        Intrinsics.checkNotNullExpressionValue(substring, "this as java.lang.String…ing(startIndex, endIndex)");
        return substring;
    }

    public final String g() {
        if (this.f42854b.length() == 0) {
            return "";
        }
        int length = this.f42853a.length() + 3;
        String str = this.f42861i;
        String substring = this.f42861i.substring(length, cu.e.q(str, ":@", length, str.length()));
        Intrinsics.checkNotNullExpressionValue(substring, "this as java.lang.String…ing(startIndex, endIndex)");
        return substring;
    }

    public int hashCode() {
        return this.f42861i.hashCode();
    }

    public final String i() {
        return this.f42856d;
    }

    public final boolean j() {
        return this.f42862j;
    }

    public final a k() {
        int i10;
        a aVar = new a();
        aVar.w(this.f42853a);
        aVar.t(g());
        aVar.s(c());
        aVar.u(this.f42856d);
        if (this.f42857e != f42851k.c(this.f42853a)) {
            i10 = this.f42857e;
        } else {
            i10 = -1;
        }
        aVar.v(i10);
        aVar.f().clear();
        aVar.f().addAll(e());
        aVar.e(f());
        aVar.r(b());
        return aVar;
    }

    public final a l(String link) {
        Intrinsics.checkNotNullParameter(link, "link");
        try {
            return new a().j(this, link);
        } catch (IllegalArgumentException unused) {
            return null;
        }
    }

    public final List n() {
        return this.f42858f;
    }

    public final int o() {
        return this.f42857e;
    }

    public final String p() {
        if (this.f42859g == null) {
            return null;
        }
        StringBuilder sb2 = new StringBuilder();
        f42851k.k(this.f42859g, sb2);
        return sb2.toString();
    }

    public final String q() {
        a l10 = l("/...");
        Intrinsics.checkNotNull(l10);
        return l10.x("").k("").c().toString();
    }

    public final HttpUrl r(String link) {
        Intrinsics.checkNotNullParameter(link, "link");
        a l10 = l(link);
        if (l10 != null) {
            return l10.c();
        }
        return null;
    }

    public final String s() {
        return this.f42853a;
    }

    public final URI t() {
        String aVar = k().o().toString();
        try {
            return new URI(aVar);
        } catch (URISyntaxException e10) {
            try {
                URI create = URI.create(new Regex("[\\u0000-\\u001F\\u007F-\\u009F\\p{javaWhitespace}]").replace(aVar, ""));
                Intrinsics.checkNotNullExpressionValue(create, "{\n      // Unlikely edge…Unexpected!\n      }\n    }");
                return create;
            } catch (Exception unused) {
                throw new RuntimeException(e10);
            }
        }
    }

    public String toString() {
        return this.f42861i;
    }

    public final URL u() {
        try {
            return new URL(this.f42861i);
        } catch (MalformedURLException e10) {
            throw new RuntimeException(e10);
        }
    }
}

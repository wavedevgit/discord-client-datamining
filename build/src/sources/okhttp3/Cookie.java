package okhttp3;

import java.util.ArrayList;
import java.util.Collections;
import java.util.Date;
import java.util.GregorianCalendar;
import java.util.List;
import java.util.Locale;
import java.util.regex.Matcher;
import java.util.regex.Pattern;
import kotlin.collections.CollectionsKt;
import kotlin.jvm.internal.DefaultConstructorMarker;
import kotlin.jvm.internal.Intrinsics;
import kotlin.jvm.internal.LongCompanionObject;
import kotlin.text.Regex;
import kotlin.text.StringsKt;
import okhttp3.internal.publicsuffix.PublicSuffixDatabase;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public final class Cookie {

    /* renamed from: j  reason: collision with root package name */
    public static final b f42863j = new b(null);

    /* renamed from: k  reason: collision with root package name */
    private static final Pattern f42864k = Pattern.compile("(\\d{2,4})[^\\d]*");

    /* renamed from: l  reason: collision with root package name */
    private static final Pattern f42865l = Pattern.compile("(?i)(jan|feb|mar|apr|may|jun|jul|aug|sep|oct|nov|dec).*");

    /* renamed from: m  reason: collision with root package name */
    private static final Pattern f42866m = Pattern.compile("(\\d{1,2})[^\\d]*");

    /* renamed from: n  reason: collision with root package name */
    private static final Pattern f42867n = Pattern.compile("(\\d{1,2}):(\\d{1,2}):(\\d{1,2})[^\\d]*");

    /* renamed from: a  reason: collision with root package name */
    private final String f42868a;

    /* renamed from: b  reason: collision with root package name */
    private final String f42869b;

    /* renamed from: c  reason: collision with root package name */
    private final long f42870c;

    /* renamed from: d  reason: collision with root package name */
    private final String f42871d;

    /* renamed from: e  reason: collision with root package name */
    private final String f42872e;

    /* renamed from: f  reason: collision with root package name */
    private final boolean f42873f;

    /* renamed from: g  reason: collision with root package name */
    private final boolean f42874g;

    /* renamed from: h  reason: collision with root package name */
    private final boolean f42875h;

    /* renamed from: i  reason: collision with root package name */
    private final boolean f42876i;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
    public static final class a {

        /* renamed from: a  reason: collision with root package name */
        private String f42877a;

        /* renamed from: b  reason: collision with root package name */
        private String f42878b;

        /* renamed from: d  reason: collision with root package name */
        private String f42880d;

        /* renamed from: f  reason: collision with root package name */
        private boolean f42882f;

        /* renamed from: g  reason: collision with root package name */
        private boolean f42883g;

        /* renamed from: h  reason: collision with root package name */
        private boolean f42884h;

        /* renamed from: i  reason: collision with root package name */
        private boolean f42885i;

        /* renamed from: c  reason: collision with root package name */
        private long f42879c = 253402300799999L;

        /* renamed from: e  reason: collision with root package name */
        private String f42881e = "/";

        private final a c(String str, boolean z10) {
            String e10 = cu.a.e(str);
            if (e10 != null) {
                this.f42880d = e10;
                this.f42885i = z10;
                return this;
            }
            throw new IllegalArgumentException("unexpected domain: " + str);
        }

        public final Cookie a() {
            String str = this.f42877a;
            if (str != null) {
                String str2 = this.f42878b;
                if (str2 != null) {
                    long j10 = this.f42879c;
                    String str3 = this.f42880d;
                    if (str3 != null) {
                        return new Cookie(str, str2, j10, str3, this.f42881e, this.f42882f, this.f42883g, this.f42884h, this.f42885i, null);
                    }
                    throw new NullPointerException("builder.domain == null");
                }
                throw new NullPointerException("builder.value == null");
            }
            throw new NullPointerException("builder.name == null");
        }

        public final a b(String domain) {
            Intrinsics.checkNotNullParameter(domain, "domain");
            return c(domain, false);
        }

        public final a d(String name) {
            Intrinsics.checkNotNullParameter(name, "name");
            if (Intrinsics.areEqual(StringsKt.k1(name).toString(), name)) {
                this.f42877a = name;
                return this;
            }
            throw new IllegalArgumentException("name is not trimmed");
        }

        public final a e(String value) {
            Intrinsics.checkNotNullParameter(value, "value");
            if (Intrinsics.areEqual(StringsKt.k1(value).toString(), value)) {
                this.f42878b = value;
                return this;
            }
            throw new IllegalArgumentException("value is not trimmed");
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
    public static final class b {
        public /* synthetic */ b(DefaultConstructorMarker defaultConstructorMarker) {
            this();
        }

        private final int a(String str, int i10, int i11, boolean z10) {
            boolean z11;
            while (i10 < i11) {
                char charAt = str.charAt(i10);
                if ((charAt >= ' ' || charAt == '\t') && charAt < 127 && (('0' > charAt || charAt >= ':') && (('a' > charAt || charAt >= '{') && (('A' > charAt || charAt >= '[') && charAt != ':')))) {
                    z11 = false;
                } else {
                    z11 = true;
                }
                if (z11 == (!z10)) {
                    return i10;
                }
                i10++;
            }
            return i11;
        }

        private final boolean b(String str, String str2) {
            if (Intrinsics.areEqual(str, str2)) {
                return true;
            }
            if (StringsKt.z(str, str2, false, 2, null) && str.charAt((str.length() - str2.length()) - 1) == '.' && !cu.e.i(str)) {
                return true;
            }
            return false;
        }

        private final String f(String str) {
            if (!StringsKt.z(str, ".", false, 2, null)) {
                String e10 = cu.a.e(StringsKt.B0(str, "."));
                if (e10 != null) {
                    return e10;
                }
                throw new IllegalArgumentException();
            }
            throw new IllegalArgumentException("Failed requirement.");
        }

        private final long g(String str, int i10, int i11) {
            int a10 = a(str, i10, i11, false);
            Matcher matcher = Cookie.f42867n.matcher(str);
            int i12 = -1;
            int i13 = -1;
            int i14 = -1;
            int i15 = -1;
            int i16 = -1;
            int i17 = -1;
            while (a10 < i11) {
                int a11 = a(str, a10 + 1, i11, true);
                matcher.region(a10, a11);
                if (i13 == -1 && matcher.usePattern(Cookie.f42867n).matches()) {
                    String group = matcher.group(1);
                    Intrinsics.checkNotNullExpressionValue(group, "matcher.group(1)");
                    i13 = Integer.parseInt(group);
                    String group2 = matcher.group(2);
                    Intrinsics.checkNotNullExpressionValue(group2, "matcher.group(2)");
                    i16 = Integer.parseInt(group2);
                    String group3 = matcher.group(3);
                    Intrinsics.checkNotNullExpressionValue(group3, "matcher.group(3)");
                    i17 = Integer.parseInt(group3);
                } else if (i14 == -1 && matcher.usePattern(Cookie.f42866m).matches()) {
                    String group4 = matcher.group(1);
                    Intrinsics.checkNotNullExpressionValue(group4, "matcher.group(1)");
                    i14 = Integer.parseInt(group4);
                } else if (i15 == -1 && matcher.usePattern(Cookie.f42865l).matches()) {
                    String group5 = matcher.group(1);
                    Intrinsics.checkNotNullExpressionValue(group5, "matcher.group(1)");
                    Locale US = Locale.US;
                    Intrinsics.checkNotNullExpressionValue(US, "US");
                    String lowerCase = group5.toLowerCase(US);
                    Intrinsics.checkNotNullExpressionValue(lowerCase, "this as java.lang.String).toLowerCase(locale)");
                    String pattern = Cookie.f42865l.pattern();
                    Intrinsics.checkNotNullExpressionValue(pattern, "MONTH_PATTERN.pattern()");
                    i15 = StringsKt.i0(pattern, lowerCase, 0, false, 6, null) / 4;
                } else if (i12 == -1 && matcher.usePattern(Cookie.f42864k).matches()) {
                    String group6 = matcher.group(1);
                    Intrinsics.checkNotNullExpressionValue(group6, "matcher.group(1)");
                    i12 = Integer.parseInt(group6);
                }
                a10 = a(str, a11 + 1, i11, false);
            }
            if (70 <= i12 && i12 < 100) {
                i12 += 1900;
            }
            if (i12 >= 0 && i12 < 70) {
                i12 += 2000;
            }
            if (i12 >= 1601) {
                if (i15 != -1) {
                    if (1 <= i14 && i14 < 32) {
                        if (i13 >= 0 && i13 < 24) {
                            if (i16 >= 0 && i16 < 60) {
                                if (i17 >= 0 && i17 < 60) {
                                    GregorianCalendar gregorianCalendar = new GregorianCalendar(cu.e.f20040f);
                                    gregorianCalendar.setLenient(false);
                                    gregorianCalendar.set(1, i12);
                                    gregorianCalendar.set(2, i15 - 1);
                                    gregorianCalendar.set(5, i14);
                                    gregorianCalendar.set(11, i13);
                                    gregorianCalendar.set(12, i16);
                                    gregorianCalendar.set(13, i17);
                                    gregorianCalendar.set(14, 0);
                                    return gregorianCalendar.getTimeInMillis();
                                }
                                throw new IllegalArgumentException("Failed requirement.");
                            }
                            throw new IllegalArgumentException("Failed requirement.");
                        }
                        throw new IllegalArgumentException("Failed requirement.");
                    }
                    throw new IllegalArgumentException("Failed requirement.");
                }
                throw new IllegalArgumentException("Failed requirement.");
            }
            throw new IllegalArgumentException("Failed requirement.");
        }

        private final long h(String str) {
            try {
                long parseLong = Long.parseLong(str);
                if (parseLong <= 0) {
                    return Long.MIN_VALUE;
                }
                return parseLong;
            } catch (NumberFormatException e10) {
                if (new Regex("-?\\d+").i(str)) {
                    if (StringsKt.P(str, "-", false, 2, null)) {
                        return Long.MIN_VALUE;
                    }
                    return LongCompanionObject.MAX_VALUE;
                }
                throw e10;
            }
        }

        public final Cookie c(HttpUrl url, String setCookie) {
            Intrinsics.checkNotNullParameter(url, "url");
            Intrinsics.checkNotNullParameter(setCookie, "setCookie");
            return d(System.currentTimeMillis(), url, setCookie);
        }

        public final Cookie d(long j10, HttpUrl url, String setCookie) {
            long j11;
            long j12;
            String str;
            Intrinsics.checkNotNullParameter(url, "url");
            Intrinsics.checkNotNullParameter(setCookie, "setCookie");
            int r10 = cu.e.r(setCookie, ';', 0, 0, 6, null);
            int r11 = cu.e.r(setCookie, '=', 0, r10, 2, null);
            Cookie cookie = null;
            if (r11 == r10) {
                return null;
            }
            String a02 = cu.e.a0(setCookie, 0, r11, 1, null);
            if (a02.length() == 0 || cu.e.y(a02) != -1) {
                return null;
            }
            String Z = cu.e.Z(setCookie, r11 + 1, r10);
            if (cu.e.y(Z) != -1) {
                return null;
            }
            int i10 = r10 + 1;
            int length = setCookie.length();
            String str2 = null;
            String str3 = null;
            boolean z10 = false;
            boolean z11 = false;
            boolean z12 = false;
            boolean z13 = true;
            long j13 = -1;
            long j14 = 253402300799999L;
            while (i10 < length) {
                int p10 = cu.e.p(setCookie, ';', i10, length);
                int p11 = cu.e.p(setCookie, '=', i10, p10);
                String Z2 = cu.e.Z(setCookie, i10, p11);
                if (p11 < p10) {
                    str = cu.e.Z(setCookie, p11 + 1, p10);
                } else {
                    str = "";
                }
                Cookie cookie2 = cookie;
                if (StringsKt.A(Z2, "expires", true)) {
                    try {
                        j14 = g(str, 0, str.length());
                    } catch (NumberFormatException | IllegalArgumentException unused) {
                    }
                } else if (StringsKt.A(Z2, "max-age", true)) {
                    j13 = h(str);
                } else {
                    if (StringsKt.A(Z2, "domain", true)) {
                        str2 = f(str);
                        z13 = false;
                    } else if (StringsKt.A(Z2, "path", true)) {
                        str3 = str;
                    } else if (StringsKt.A(Z2, "secure", true)) {
                        z12 = true;
                    } else if (StringsKt.A(Z2, "httponly", true)) {
                        z10 = true;
                    }
                    i10 = p10 + 1;
                    cookie = cookie2;
                }
                z11 = true;
                i10 = p10 + 1;
                cookie = cookie2;
            }
            Cookie cookie3 = cookie;
            if (j13 == Long.MIN_VALUE) {
                j11 = Long.MIN_VALUE;
            } else if (j13 != -1) {
                if (j13 <= 9223372036854775L) {
                    j12 = j13 * 1000;
                } else {
                    j12 = LongCompanionObject.MAX_VALUE;
                }
                long j15 = j10 + j12;
                if (j15 >= j10 && j15 <= 253402300799999L) {
                    j11 = j15;
                } else {
                    j11 = 253402300799999L;
                }
            } else {
                j11 = j14;
            }
            String i11 = url.i();
            if (str2 == null) {
                str2 = i11;
            } else if (!b(i11, str2)) {
                return cookie3;
            }
            if (i11.length() != str2.length() && PublicSuffixDatabase.f43195e.c().c(str2) == null) {
                return cookie3;
            }
            String str4 = "/";
            if (str3 == null || !StringsKt.P(str3, "/", false, 2, cookie3)) {
                String d10 = url.d();
                int n02 = StringsKt.n0(d10, '/', 0, false, 6, null);
                if (n02 != 0) {
                    str4 = d10.substring(0, n02);
                    Intrinsics.checkNotNullExpressionValue(str4, "this as java.lang.String…ing(startIndex, endIndex)");
                }
                str3 = str4;
            }
            return new Cookie(a02, Z, j11, str2, str3, z12, z10, z11, z13, null);
        }

        public final List e(HttpUrl url, Headers headers) {
            Intrinsics.checkNotNullParameter(url, "url");
            Intrinsics.checkNotNullParameter(headers, "headers");
            List l10 = headers.l("Set-Cookie");
            int size = l10.size();
            ArrayList arrayList = null;
            for (int i10 = 0; i10 < size; i10++) {
                Cookie c10 = c(url, (String) l10.get(i10));
                if (c10 != null) {
                    if (arrayList == null) {
                        arrayList = new ArrayList();
                    }
                    arrayList.add(c10);
                }
            }
            if (arrayList != null) {
                List unmodifiableList = Collections.unmodifiableList(arrayList);
                Intrinsics.checkNotNullExpressionValue(unmodifiableList, "{\n        Collections.un…ableList(cookies)\n      }");
                return unmodifiableList;
            }
            return CollectionsKt.l();
        }

        private b() {
        }
    }

    public /* synthetic */ Cookie(String str, String str2, long j10, String str3, String str4, boolean z10, boolean z11, boolean z12, boolean z13, DefaultConstructorMarker defaultConstructorMarker) {
        this(str, str2, j10, str3, str4, z10, z11, z12, z13);
    }

    public final String a() {
        return this.f42868a;
    }

    public final String b() {
        return this.f42869b;
    }

    public boolean equals(Object obj) {
        if (obj instanceof Cookie) {
            Cookie cookie = (Cookie) obj;
            if (Intrinsics.areEqual(cookie.f42868a, this.f42868a) && Intrinsics.areEqual(cookie.f42869b, this.f42869b) && cookie.f42870c == this.f42870c && Intrinsics.areEqual(cookie.f42871d, this.f42871d) && Intrinsics.areEqual(cookie.f42872e, this.f42872e) && cookie.f42873f == this.f42873f && cookie.f42874g == this.f42874g && cookie.f42875h == this.f42875h && cookie.f42876i == this.f42876i) {
                return true;
            }
            return false;
        }
        return false;
    }

    public final String g() {
        return this.f42868a;
    }

    public final String h(boolean z10) {
        StringBuilder sb2 = new StringBuilder();
        sb2.append(this.f42868a);
        sb2.append('=');
        sb2.append(this.f42869b);
        if (this.f42875h) {
            if (this.f42870c == Long.MIN_VALUE) {
                sb2.append("; max-age=0");
            } else {
                sb2.append("; expires=");
                sb2.append(hu.c.b(new Date(this.f42870c)));
            }
        }
        if (!this.f42876i) {
            sb2.append("; domain=");
            if (z10) {
                sb2.append(".");
            }
            sb2.append(this.f42871d);
        }
        sb2.append("; path=");
        sb2.append(this.f42872e);
        if (this.f42873f) {
            sb2.append("; secure");
        }
        if (this.f42874g) {
            sb2.append("; httponly");
        }
        String sb3 = sb2.toString();
        Intrinsics.checkNotNullExpressionValue(sb3, "toString()");
        return sb3;
    }

    public int hashCode() {
        return ((((((((((((((((527 + this.f42868a.hashCode()) * 31) + this.f42869b.hashCode()) * 31) + Long.hashCode(this.f42870c)) * 31) + this.f42871d.hashCode()) * 31) + this.f42872e.hashCode()) * 31) + Boolean.hashCode(this.f42873f)) * 31) + Boolean.hashCode(this.f42874g)) * 31) + Boolean.hashCode(this.f42875h)) * 31) + Boolean.hashCode(this.f42876i);
    }

    public final String i() {
        return this.f42869b;
    }

    public String toString() {
        return h(false);
    }

    private Cookie(String str, String str2, long j10, String str3, String str4, boolean z10, boolean z11, boolean z12, boolean z13) {
        this.f42868a = str;
        this.f42869b = str2;
        this.f42870c = j10;
        this.f42871d = str3;
        this.f42872e = str4;
        this.f42873f = z10;
        this.f42874g = z11;
        this.f42875h = z12;
        this.f42876i = z13;
    }
}

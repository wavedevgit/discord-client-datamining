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
    public static final b f44156j = new b(null);

    /* renamed from: k  reason: collision with root package name */
    private static final Pattern f44157k = Pattern.compile("(\\d{2,4})[^\\d]*");

    /* renamed from: l  reason: collision with root package name */
    private static final Pattern f44158l = Pattern.compile("(?i)(jan|feb|mar|apr|may|jun|jul|aug|sep|oct|nov|dec).*");

    /* renamed from: m  reason: collision with root package name */
    private static final Pattern f44159m = Pattern.compile("(\\d{1,2})[^\\d]*");

    /* renamed from: n  reason: collision with root package name */
    private static final Pattern f44160n = Pattern.compile("(\\d{1,2}):(\\d{1,2}):(\\d{1,2})[^\\d]*");

    /* renamed from: a  reason: collision with root package name */
    private final String f44161a;

    /* renamed from: b  reason: collision with root package name */
    private final String f44162b;

    /* renamed from: c  reason: collision with root package name */
    private final long f44163c;

    /* renamed from: d  reason: collision with root package name */
    private final String f44164d;

    /* renamed from: e  reason: collision with root package name */
    private final String f44165e;

    /* renamed from: f  reason: collision with root package name */
    private final boolean f44166f;

    /* renamed from: g  reason: collision with root package name */
    private final boolean f44167g;

    /* renamed from: h  reason: collision with root package name */
    private final boolean f44168h;

    /* renamed from: i  reason: collision with root package name */
    private final boolean f44169i;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
    public static final class a {

        /* renamed from: a  reason: collision with root package name */
        private String f44170a;

        /* renamed from: b  reason: collision with root package name */
        private String f44171b;

        /* renamed from: d  reason: collision with root package name */
        private String f44173d;

        /* renamed from: f  reason: collision with root package name */
        private boolean f44175f;

        /* renamed from: g  reason: collision with root package name */
        private boolean f44176g;

        /* renamed from: h  reason: collision with root package name */
        private boolean f44177h;

        /* renamed from: i  reason: collision with root package name */
        private boolean f44178i;

        /* renamed from: c  reason: collision with root package name */
        private long f44172c = 253402300799999L;

        /* renamed from: e  reason: collision with root package name */
        private String f44174e = "/";

        private final a c(String str, boolean z10) {
            String e10 = vt.a.e(str);
            if (e10 != null) {
                this.f44173d = e10;
                this.f44178i = z10;
                return this;
            }
            throw new IllegalArgumentException("unexpected domain: " + str);
        }

        public final Cookie a() {
            String str = this.f44170a;
            if (str != null) {
                String str2 = this.f44171b;
                if (str2 != null) {
                    long j10 = this.f44172c;
                    String str3 = this.f44173d;
                    if (str3 != null) {
                        return new Cookie(str, str2, j10, str3, this.f44174e, this.f44175f, this.f44176g, this.f44177h, this.f44178i, null);
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
                this.f44170a = name;
                return this;
            }
            throw new IllegalArgumentException("name is not trimmed");
        }

        public final a e(String value) {
            Intrinsics.checkNotNullParameter(value, "value");
            if (Intrinsics.areEqual(StringsKt.k1(value).toString(), value)) {
                this.f44171b = value;
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
            if (StringsKt.z(str, str2, false, 2, null) && str.charAt((str.length() - str2.length()) - 1) == '.' && !vt.e.i(str)) {
                return true;
            }
            return false;
        }

        private final String f(String str) {
            if (!StringsKt.z(str, ".", false, 2, null)) {
                String e10 = vt.a.e(StringsKt.B0(str, "."));
                if (e10 != null) {
                    return e10;
                }
                throw new IllegalArgumentException();
            }
            throw new IllegalArgumentException("Failed requirement.");
        }

        private final long g(String str, int i10, int i11) {
            int a10 = a(str, i10, i11, false);
            Matcher matcher = Cookie.f44160n.matcher(str);
            int i12 = -1;
            int i13 = -1;
            int i14 = -1;
            int i15 = -1;
            int i16 = -1;
            int i17 = -1;
            while (a10 < i11) {
                int a11 = a(str, a10 + 1, i11, true);
                matcher.region(a10, a11);
                if (i13 == -1 && matcher.usePattern(Cookie.f44160n).matches()) {
                    String group = matcher.group(1);
                    Intrinsics.checkNotNullExpressionValue(group, "matcher.group(1)");
                    i13 = Integer.parseInt(group);
                    String group2 = matcher.group(2);
                    Intrinsics.checkNotNullExpressionValue(group2, "matcher.group(2)");
                    i16 = Integer.parseInt(group2);
                    String group3 = matcher.group(3);
                    Intrinsics.checkNotNullExpressionValue(group3, "matcher.group(3)");
                    i17 = Integer.parseInt(group3);
                } else if (i14 == -1 && matcher.usePattern(Cookie.f44159m).matches()) {
                    String group4 = matcher.group(1);
                    Intrinsics.checkNotNullExpressionValue(group4, "matcher.group(1)");
                    i14 = Integer.parseInt(group4);
                } else if (i15 == -1 && matcher.usePattern(Cookie.f44158l).matches()) {
                    String group5 = matcher.group(1);
                    Intrinsics.checkNotNullExpressionValue(group5, "matcher.group(1)");
                    Locale US = Locale.US;
                    Intrinsics.checkNotNullExpressionValue(US, "US");
                    String lowerCase = group5.toLowerCase(US);
                    Intrinsics.checkNotNullExpressionValue(lowerCase, "this as java.lang.String).toLowerCase(locale)");
                    String pattern = Cookie.f44158l.pattern();
                    Intrinsics.checkNotNullExpressionValue(pattern, "MONTH_PATTERN.pattern()");
                    i15 = StringsKt.i0(pattern, lowerCase, 0, false, 6, null) / 4;
                } else if (i12 == -1 && matcher.usePattern(Cookie.f44157k).matches()) {
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
                                    GregorianCalendar gregorianCalendar = new GregorianCalendar(vt.e.f51533f);
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
            int r10 = vt.e.r(setCookie, ';', 0, 0, 6, null);
            int r11 = vt.e.r(setCookie, '=', 0, r10, 2, null);
            Cookie cookie = null;
            if (r11 == r10) {
                return null;
            }
            String a02 = vt.e.a0(setCookie, 0, r11, 1, null);
            if (a02.length() == 0 || vt.e.y(a02) != -1) {
                return null;
            }
            String Z = vt.e.Z(setCookie, r11 + 1, r10);
            if (vt.e.y(Z) != -1) {
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
                int p10 = vt.e.p(setCookie, ';', i10, length);
                int p11 = vt.e.p(setCookie, '=', i10, p10);
                String Z2 = vt.e.Z(setCookie, i10, p11);
                if (p11 < p10) {
                    str = vt.e.Z(setCookie, p11 + 1, p10);
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
            if (i11.length() != str2.length() && PublicSuffixDatabase.f44488e.c().c(str2) == null) {
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
            List k10 = headers.k("Set-Cookie");
            int size = k10.size();
            ArrayList arrayList = null;
            for (int i10 = 0; i10 < size; i10++) {
                Cookie c10 = c(url, (String) k10.get(i10));
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
        return this.f44161a;
    }

    public final String b() {
        return this.f44162b;
    }

    public boolean equals(Object obj) {
        if (obj instanceof Cookie) {
            Cookie cookie = (Cookie) obj;
            if (Intrinsics.areEqual(cookie.f44161a, this.f44161a) && Intrinsics.areEqual(cookie.f44162b, this.f44162b) && cookie.f44163c == this.f44163c && Intrinsics.areEqual(cookie.f44164d, this.f44164d) && Intrinsics.areEqual(cookie.f44165e, this.f44165e) && cookie.f44166f == this.f44166f && cookie.f44167g == this.f44167g && cookie.f44168h == this.f44168h && cookie.f44169i == this.f44169i) {
                return true;
            }
            return false;
        }
        return false;
    }

    public final String g() {
        return this.f44161a;
    }

    public final String h(boolean z10) {
        StringBuilder sb2 = new StringBuilder();
        sb2.append(this.f44161a);
        sb2.append('=');
        sb2.append(this.f44162b);
        if (this.f44168h) {
            if (this.f44163c == Long.MIN_VALUE) {
                sb2.append("; max-age=0");
            } else {
                sb2.append("; expires=");
                sb2.append(au.c.b(new Date(this.f44163c)));
            }
        }
        if (!this.f44169i) {
            sb2.append("; domain=");
            if (z10) {
                sb2.append(".");
            }
            sb2.append(this.f44164d);
        }
        sb2.append("; path=");
        sb2.append(this.f44165e);
        if (this.f44166f) {
            sb2.append("; secure");
        }
        if (this.f44167g) {
            sb2.append("; httponly");
        }
        String sb3 = sb2.toString();
        Intrinsics.checkNotNullExpressionValue(sb3, "toString()");
        return sb3;
    }

    public int hashCode() {
        return ((((((((((((((((527 + this.f44161a.hashCode()) * 31) + this.f44162b.hashCode()) * 31) + Long.hashCode(this.f44163c)) * 31) + this.f44164d.hashCode()) * 31) + this.f44165e.hashCode()) * 31) + Boolean.hashCode(this.f44166f)) * 31) + Boolean.hashCode(this.f44167g)) * 31) + Boolean.hashCode(this.f44168h)) * 31) + Boolean.hashCode(this.f44169i);
    }

    public final String i() {
        return this.f44162b;
    }

    public String toString() {
        return h(false);
    }

    private Cookie(String str, String str2, long j10, String str3, String str4, boolean z10, boolean z11, boolean z12, boolean z13) {
        this.f44161a = str;
        this.f44162b = str2;
        this.f44163c = j10;
        this.f44164d = str3;
        this.f44165e = str4;
        this.f44166f = z10;
        this.f44167g = z11;
        this.f44168h = z12;
        this.f44169i = z13;
    }
}

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
    public static final b f43956j = new b(null);

    /* renamed from: k  reason: collision with root package name */
    private static final Pattern f43957k = Pattern.compile("(\\d{2,4})[^\\d]*");

    /* renamed from: l  reason: collision with root package name */
    private static final Pattern f43958l = Pattern.compile("(?i)(jan|feb|mar|apr|may|jun|jul|aug|sep|oct|nov|dec).*");

    /* renamed from: m  reason: collision with root package name */
    private static final Pattern f43959m = Pattern.compile("(\\d{1,2})[^\\d]*");

    /* renamed from: n  reason: collision with root package name */
    private static final Pattern f43960n = Pattern.compile("(\\d{1,2}):(\\d{1,2}):(\\d{1,2})[^\\d]*");

    /* renamed from: a  reason: collision with root package name */
    private final String f43961a;

    /* renamed from: b  reason: collision with root package name */
    private final String f43962b;

    /* renamed from: c  reason: collision with root package name */
    private final long f43963c;

    /* renamed from: d  reason: collision with root package name */
    private final String f43964d;

    /* renamed from: e  reason: collision with root package name */
    private final String f43965e;

    /* renamed from: f  reason: collision with root package name */
    private final boolean f43966f;

    /* renamed from: g  reason: collision with root package name */
    private final boolean f43967g;

    /* renamed from: h  reason: collision with root package name */
    private final boolean f43968h;

    /* renamed from: i  reason: collision with root package name */
    private final boolean f43969i;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
    public static final class a {

        /* renamed from: a  reason: collision with root package name */
        private String f43970a;

        /* renamed from: b  reason: collision with root package name */
        private String f43971b;

        /* renamed from: d  reason: collision with root package name */
        private String f43973d;

        /* renamed from: f  reason: collision with root package name */
        private boolean f43975f;

        /* renamed from: g  reason: collision with root package name */
        private boolean f43976g;

        /* renamed from: h  reason: collision with root package name */
        private boolean f43977h;

        /* renamed from: i  reason: collision with root package name */
        private boolean f43978i;

        /* renamed from: c  reason: collision with root package name */
        private long f43972c = 253402300799999L;

        /* renamed from: e  reason: collision with root package name */
        private String f43974e = "/";

        private final a c(String str, boolean z10) {
            String e10 = xt.a.e(str);
            if (e10 != null) {
                this.f43973d = e10;
                this.f43978i = z10;
                return this;
            }
            throw new IllegalArgumentException("unexpected domain: " + str);
        }

        public final Cookie a() {
            String str = this.f43970a;
            if (str != null) {
                String str2 = this.f43971b;
                if (str2 != null) {
                    long j10 = this.f43972c;
                    String str3 = this.f43973d;
                    if (str3 != null) {
                        return new Cookie(str, str2, j10, str3, this.f43974e, this.f43975f, this.f43976g, this.f43977h, this.f43978i, null);
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
                this.f43970a = name;
                return this;
            }
            throw new IllegalArgumentException("name is not trimmed");
        }

        public final a e(String value) {
            Intrinsics.checkNotNullParameter(value, "value");
            if (Intrinsics.areEqual(StringsKt.k1(value).toString(), value)) {
                this.f43971b = value;
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
            if (StringsKt.z(str, str2, false, 2, null) && str.charAt((str.length() - str2.length()) - 1) == '.' && !xt.e.i(str)) {
                return true;
            }
            return false;
        }

        private final String f(String str) {
            if (!StringsKt.z(str, ".", false, 2, null)) {
                String e10 = xt.a.e(StringsKt.B0(str, "."));
                if (e10 != null) {
                    return e10;
                }
                throw new IllegalArgumentException();
            }
            throw new IllegalArgumentException("Failed requirement.");
        }

        private final long g(String str, int i10, int i11) {
            int a10 = a(str, i10, i11, false);
            Matcher matcher = Cookie.f43960n.matcher(str);
            int i12 = -1;
            int i13 = -1;
            int i14 = -1;
            int i15 = -1;
            int i16 = -1;
            int i17 = -1;
            while (a10 < i11) {
                int a11 = a(str, a10 + 1, i11, true);
                matcher.region(a10, a11);
                if (i13 == -1 && matcher.usePattern(Cookie.f43960n).matches()) {
                    String group = matcher.group(1);
                    Intrinsics.checkNotNullExpressionValue(group, "matcher.group(1)");
                    i13 = Integer.parseInt(group);
                    String group2 = matcher.group(2);
                    Intrinsics.checkNotNullExpressionValue(group2, "matcher.group(2)");
                    i16 = Integer.parseInt(group2);
                    String group3 = matcher.group(3);
                    Intrinsics.checkNotNullExpressionValue(group3, "matcher.group(3)");
                    i17 = Integer.parseInt(group3);
                } else if (i14 == -1 && matcher.usePattern(Cookie.f43959m).matches()) {
                    String group4 = matcher.group(1);
                    Intrinsics.checkNotNullExpressionValue(group4, "matcher.group(1)");
                    i14 = Integer.parseInt(group4);
                } else if (i15 == -1 && matcher.usePattern(Cookie.f43958l).matches()) {
                    String group5 = matcher.group(1);
                    Intrinsics.checkNotNullExpressionValue(group5, "matcher.group(1)");
                    Locale US = Locale.US;
                    Intrinsics.checkNotNullExpressionValue(US, "US");
                    String lowerCase = group5.toLowerCase(US);
                    Intrinsics.checkNotNullExpressionValue(lowerCase, "this as java.lang.String).toLowerCase(locale)");
                    String pattern = Cookie.f43958l.pattern();
                    Intrinsics.checkNotNullExpressionValue(pattern, "MONTH_PATTERN.pattern()");
                    i15 = StringsKt.i0(pattern, lowerCase, 0, false, 6, null) / 4;
                } else if (i12 == -1 && matcher.usePattern(Cookie.f43957k).matches()) {
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
                                    GregorianCalendar gregorianCalendar = new GregorianCalendar(xt.e.f53572f);
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
            int r10 = xt.e.r(setCookie, ';', 0, 0, 6, null);
            int r11 = xt.e.r(setCookie, '=', 0, r10, 2, null);
            Cookie cookie = null;
            if (r11 == r10) {
                return null;
            }
            String a02 = xt.e.a0(setCookie, 0, r11, 1, null);
            if (a02.length() == 0 || xt.e.y(a02) != -1) {
                return null;
            }
            String Z = xt.e.Z(setCookie, r11 + 1, r10);
            if (xt.e.y(Z) != -1) {
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
                int p10 = xt.e.p(setCookie, ';', i10, length);
                int p11 = xt.e.p(setCookie, '=', i10, p10);
                String Z2 = xt.e.Z(setCookie, i10, p11);
                if (p11 < p10) {
                    str = xt.e.Z(setCookie, p11 + 1, p10);
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
            if (i11.length() != str2.length() && PublicSuffixDatabase.f44288e.c().c(str2) == null) {
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
        return this.f43961a;
    }

    public final String b() {
        return this.f43962b;
    }

    public boolean equals(Object obj) {
        if (obj instanceof Cookie) {
            Cookie cookie = (Cookie) obj;
            if (Intrinsics.areEqual(cookie.f43961a, this.f43961a) && Intrinsics.areEqual(cookie.f43962b, this.f43962b) && cookie.f43963c == this.f43963c && Intrinsics.areEqual(cookie.f43964d, this.f43964d) && Intrinsics.areEqual(cookie.f43965e, this.f43965e) && cookie.f43966f == this.f43966f && cookie.f43967g == this.f43967g && cookie.f43968h == this.f43968h && cookie.f43969i == this.f43969i) {
                return true;
            }
            return false;
        }
        return false;
    }

    public final String g() {
        return this.f43961a;
    }

    public final String h(boolean z10) {
        StringBuilder sb2 = new StringBuilder();
        sb2.append(this.f43961a);
        sb2.append('=');
        sb2.append(this.f43962b);
        if (this.f43968h) {
            if (this.f43963c == Long.MIN_VALUE) {
                sb2.append("; max-age=0");
            } else {
                sb2.append("; expires=");
                sb2.append(cu.c.b(new Date(this.f43963c)));
            }
        }
        if (!this.f43969i) {
            sb2.append("; domain=");
            if (z10) {
                sb2.append(".");
            }
            sb2.append(this.f43964d);
        }
        sb2.append("; path=");
        sb2.append(this.f43965e);
        if (this.f43966f) {
            sb2.append("; secure");
        }
        if (this.f43967g) {
            sb2.append("; httponly");
        }
        String sb3 = sb2.toString();
        Intrinsics.checkNotNullExpressionValue(sb3, "toString()");
        return sb3;
    }

    public int hashCode() {
        return ((((((((((((((((527 + this.f43961a.hashCode()) * 31) + this.f43962b.hashCode()) * 31) + Long.hashCode(this.f43963c)) * 31) + this.f43964d.hashCode()) * 31) + this.f43965e.hashCode()) * 31) + Boolean.hashCode(this.f43966f)) * 31) + Boolean.hashCode(this.f43967g)) * 31) + Boolean.hashCode(this.f43968h)) * 31) + Boolean.hashCode(this.f43969i);
    }

    public final String i() {
        return this.f43962b;
    }

    public String toString() {
        return h(false);
    }

    private Cookie(String str, String str2, long j10, String str3, String str4, boolean z10, boolean z11, boolean z12, boolean z13) {
        this.f43961a = str;
        this.f43962b = str2;
        this.f43963c = j10;
        this.f43964d = str3;
        this.f43965e = str4;
        this.f43966f = z10;
        this.f43967g = z11;
        this.f43968h = z12;
        this.f43969i = z13;
    }
}

package un;

import androidx.recyclerview.widget.RecyclerView;
import com.facebook.react.fabric.mounting.mountitems.IntBufferBatchMountItem;
import com.facebook.react.views.textinput.ReactEditTextInputConnectionWrapper;
import java.text.SimpleDateFormat;
import java.util.Date;
import java.util.List;
import java.util.Locale;
import kotlin.collections.CollectionsKt;
import kotlin.jvm.internal.DefaultConstructorMarker;
import kotlin.jvm.internal.Intrinsics;
import kotlin.text.MatchResult;
import kotlin.text.Regex;
import kotlin.text.StringsKt;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class a {
    private static final Regex A;
    private static final Regex B;

    /* renamed from: o  reason: collision with root package name */
    public static final C0678a f51632o;

    /* renamed from: p  reason: collision with root package name */
    private static final Regex f51633p;

    /* renamed from: q  reason: collision with root package name */
    private static final Regex f51634q;

    /* renamed from: r  reason: collision with root package name */
    private static final Regex f51635r;

    /* renamed from: s  reason: collision with root package name */
    private static final Regex f51636s;

    /* renamed from: t  reason: collision with root package name */
    private static final Regex f51637t;

    /* renamed from: u  reason: collision with root package name */
    private static final Regex f51638u;

    /* renamed from: v  reason: collision with root package name */
    private static final Regex f51639v;

    /* renamed from: w  reason: collision with root package name */
    private static final Regex f51640w;

    /* renamed from: x  reason: collision with root package name */
    private static final Regex f51641x;

    /* renamed from: y  reason: collision with root package name */
    private static final Regex f51642y;

    /* renamed from: z  reason: collision with root package name */
    private static final Regex f51643z;

    /* renamed from: a  reason: collision with root package name */
    private final String f51644a;

    /* renamed from: b  reason: collision with root package name */
    private final String f51645b;

    /* renamed from: c  reason: collision with root package name */
    private final String f51646c;

    /* renamed from: d  reason: collision with root package name */
    private final String f51647d;

    /* renamed from: e  reason: collision with root package name */
    private final String f51648e;

    /* renamed from: f  reason: collision with root package name */
    private final String f51649f;

    /* renamed from: g  reason: collision with root package name */
    private final String f51650g;

    /* renamed from: h  reason: collision with root package name */
    private final String f51651h;

    /* renamed from: i  reason: collision with root package name */
    private final String f51652i;

    /* renamed from: j  reason: collision with root package name */
    private final String f51653j;

    /* renamed from: k  reason: collision with root package name */
    private final Date f51654k;

    /* renamed from: l  reason: collision with root package name */
    private final Date f51655l;

    /* renamed from: m  reason: collision with root package name */
    private final Date f51656m;

    /* renamed from: n  reason: collision with root package name */
    private final String f51657n;

    /* renamed from: un.a$a  reason: collision with other inner class name */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class C0678a {
        public /* synthetic */ C0678a(DefaultConstructorMarker defaultConstructorMarker) {
            this();
        }

        private final Date b(String str) {
            if (str == null) {
                return null;
            }
            try {
                return new SimpleDateFormat("MMddyyyy", Locale.US).parse(str);
            } catch (Exception unused) {
                return null;
            }
        }

        /* JADX INFO: Access modifiers changed from: private */
        public final Regex c(String str) {
            return new Regex(ReactEditTextInputConnectionWrapper.NEWLINE_RAW_VALUE + str + "(.+?)(\n|$)");
        }

        private final String e(String str, Regex regex) {
            List b10;
            MatchResult d10 = Regex.d(regex, str, 0, 2, null);
            if (d10 == null || (b10 = d10.b()) == null) {
                return null;
            }
            return (String) CollectionsKt.q0(b10, 1);
        }

        private final boolean f(String str) {
            if (new Regex("^@\n\\u001e\r(ANSI |AAMVA)\\d{10}.+", kotlin.text.m.f34996s).i(StringsKt.k1(str).toString()) && e(str, a.f51639v) != null && e(str, a.f51643z) != null) {
                return true;
            }
            return false;
        }

        public final a d(String str) {
            if (str == null || !f(str)) {
                return null;
            }
            return new a(null, e(str, a.f51639v), e(str, a.B), e(str, a.f51643z), e(str, a.f51640w), e(str, a.f51635r), e(str, a.f51633p), e(str, a.f51634q), e(str, a.f51636s), e(str, a.A), b(e(str, a.f51641x)), b(e(str, a.f51638u)), b(e(str, a.f51637t)), e(str, a.f51642y), 1, null);
        }

        private C0678a() {
        }
    }

    static {
        C0678a c0678a = new C0678a(null);
        f51632o = c0678a;
        f51633p = c0678a.c("DAI");
        f51634q = c0678a.c("DAJ");
        f51635r = c0678a.c("DAG");
        f51636s = c0678a.c("DAK");
        f51637t = c0678a.c("DBB");
        f51638u = c0678a.c("DBA");
        f51639v = c0678a.c("DAC");
        f51640w = c0678a.c("DBC");
        f51641x = c0678a.c("DBD");
        f51642y = c0678a.c("DCG");
        f51643z = c0678a.c("DCS");
        A = c0678a.c("DAQ");
        B = c0678a.c("DAD");
    }

    public a(String str, String str2, String str3, String str4, String str5, String str6, String str7, String str8, String str9, String str10, Date date, Date date2, Date date3, String str11) {
        this.f51644a = str;
        this.f51645b = str2;
        this.f51646c = str3;
        this.f51647d = str4;
        this.f51648e = str5;
        this.f51649f = str6;
        this.f51650g = str7;
        this.f51651h = str8;
        this.f51652i = str9;
        this.f51653j = str10;
        this.f51654k = date;
        this.f51655l = date2;
        this.f51656m = date3;
        this.f51657n = str11;
    }

    public boolean equals(Object obj) {
        if (this == obj) {
            return true;
        }
        if (!(obj instanceof a)) {
            return false;
        }
        a aVar = (a) obj;
        if (Intrinsics.areEqual(this.f51644a, aVar.f51644a) && Intrinsics.areEqual(this.f51645b, aVar.f51645b) && Intrinsics.areEqual(this.f51646c, aVar.f51646c) && Intrinsics.areEqual(this.f51647d, aVar.f51647d) && Intrinsics.areEqual(this.f51648e, aVar.f51648e) && Intrinsics.areEqual(this.f51649f, aVar.f51649f) && Intrinsics.areEqual(this.f51650g, aVar.f51650g) && Intrinsics.areEqual(this.f51651h, aVar.f51651h) && Intrinsics.areEqual(this.f51652i, aVar.f51652i) && Intrinsics.areEqual(this.f51653j, aVar.f51653j) && Intrinsics.areEqual(this.f51654k, aVar.f51654k) && Intrinsics.areEqual(this.f51655l, aVar.f51655l) && Intrinsics.areEqual(this.f51656m, aVar.f51656m) && Intrinsics.areEqual(this.f51657n, aVar.f51657n)) {
            return true;
        }
        return false;
    }

    public int hashCode() {
        int hashCode;
        int hashCode2;
        int hashCode3;
        int hashCode4;
        int hashCode5;
        int hashCode6;
        int hashCode7;
        int hashCode8;
        int hashCode9;
        int hashCode10;
        int hashCode11;
        int hashCode12;
        int hashCode13;
        String str = this.f51644a;
        int i10 = 0;
        if (str == null) {
            hashCode = 0;
        } else {
            hashCode = str.hashCode();
        }
        int i11 = hashCode * 31;
        String str2 = this.f51645b;
        if (str2 == null) {
            hashCode2 = 0;
        } else {
            hashCode2 = str2.hashCode();
        }
        int i12 = (i11 + hashCode2) * 31;
        String str3 = this.f51646c;
        if (str3 == null) {
            hashCode3 = 0;
        } else {
            hashCode3 = str3.hashCode();
        }
        int i13 = (i12 + hashCode3) * 31;
        String str4 = this.f51647d;
        if (str4 == null) {
            hashCode4 = 0;
        } else {
            hashCode4 = str4.hashCode();
        }
        int i14 = (i13 + hashCode4) * 31;
        String str5 = this.f51648e;
        if (str5 == null) {
            hashCode5 = 0;
        } else {
            hashCode5 = str5.hashCode();
        }
        int i15 = (i14 + hashCode5) * 31;
        String str6 = this.f51649f;
        if (str6 == null) {
            hashCode6 = 0;
        } else {
            hashCode6 = str6.hashCode();
        }
        int i16 = (i15 + hashCode6) * 31;
        String str7 = this.f51650g;
        if (str7 == null) {
            hashCode7 = 0;
        } else {
            hashCode7 = str7.hashCode();
        }
        int i17 = (i16 + hashCode7) * 31;
        String str8 = this.f51651h;
        if (str8 == null) {
            hashCode8 = 0;
        } else {
            hashCode8 = str8.hashCode();
        }
        int i18 = (i17 + hashCode8) * 31;
        String str9 = this.f51652i;
        if (str9 == null) {
            hashCode9 = 0;
        } else {
            hashCode9 = str9.hashCode();
        }
        int i19 = (i18 + hashCode9) * 31;
        String str10 = this.f51653j;
        if (str10 == null) {
            hashCode10 = 0;
        } else {
            hashCode10 = str10.hashCode();
        }
        int i20 = (i19 + hashCode10) * 31;
        Date date = this.f51654k;
        if (date == null) {
            hashCode11 = 0;
        } else {
            hashCode11 = date.hashCode();
        }
        int i21 = (i20 + hashCode11) * 31;
        Date date2 = this.f51655l;
        if (date2 == null) {
            hashCode12 = 0;
        } else {
            hashCode12 = date2.hashCode();
        }
        int i22 = (i21 + hashCode12) * 31;
        Date date3 = this.f51656m;
        if (date3 == null) {
            hashCode13 = 0;
        } else {
            hashCode13 = date3.hashCode();
        }
        int i23 = (i22 + hashCode13) * 31;
        String str11 = this.f51657n;
        if (str11 != null) {
            i10 = str11.hashCode();
        }
        return i23 + i10;
    }

    public final Date n() {
        return this.f51656m;
    }

    public final Date o() {
        return this.f51655l;
    }

    public String toString() {
        String str = this.f51644a;
        String str2 = this.f51645b;
        String str3 = this.f51646c;
        String str4 = this.f51647d;
        String str5 = this.f51648e;
        String str6 = this.f51649f;
        String str7 = this.f51650g;
        String str8 = this.f51651h;
        String str9 = this.f51652i;
        String str10 = this.f51653j;
        Date date = this.f51654k;
        Date date2 = this.f51655l;
        Date date3 = this.f51656m;
        String str11 = this.f51657n;
        return "AamvaExtraction(idClass=" + str + ", nameFirst=" + str2 + ", nameMiddle=" + str3 + ", nameLast=" + str4 + ", sex=" + str5 + ", addressStreet1=" + str6 + ", addressCity=" + str7 + ", addressState=" + str8 + ", addressPostalCode=" + str9 + ", identificationNumber=" + str10 + ", issueDate=" + date + ", expirationDate=" + date2 + ", birthdate=" + date3 + ", issuingCountry=" + str11 + ")";
    }

    public /* synthetic */ a(String str, String str2, String str3, String str4, String str5, String str6, String str7, String str8, String str9, String str10, Date date, Date date2, Date date3, String str11, int i10, DefaultConstructorMarker defaultConstructorMarker) {
        this((i10 & 1) != 0 ? null : str, (i10 & 2) != 0 ? null : str2, (i10 & 4) != 0 ? null : str3, (i10 & 8) != 0 ? null : str4, (i10 & 16) != 0 ? null : str5, (i10 & 32) != 0 ? null : str6, (i10 & 64) != 0 ? null : str7, (i10 & IntBufferBatchMountItem.INSTRUCTION_UPDATE_LAYOUT) != 0 ? null : str8, (i10 & IntBufferBatchMountItem.INSTRUCTION_UPDATE_EVENT_EMITTER) != 0 ? null : str9, (i10 & IntBufferBatchMountItem.INSTRUCTION_UPDATE_PADDING) != 0 ? null : str10, (i10 & IntBufferBatchMountItem.INSTRUCTION_UPDATE_OVERFLOW_INSET) != 0 ? null : date, (i10 & RecyclerView.ItemAnimator.FLAG_MOVED) != 0 ? null : date2, (i10 & RecyclerView.ItemAnimator.FLAG_APPEARED_IN_PRE_LAYOUT) != 0 ? null : date3, (i10 & 8192) != 0 ? null : str11);
    }
}

package sn;

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
    public static final C0636a f49786o;

    /* renamed from: p  reason: collision with root package name */
    private static final Regex f49787p;

    /* renamed from: q  reason: collision with root package name */
    private static final Regex f49788q;

    /* renamed from: r  reason: collision with root package name */
    private static final Regex f49789r;

    /* renamed from: s  reason: collision with root package name */
    private static final Regex f49790s;

    /* renamed from: t  reason: collision with root package name */
    private static final Regex f49791t;

    /* renamed from: u  reason: collision with root package name */
    private static final Regex f49792u;

    /* renamed from: v  reason: collision with root package name */
    private static final Regex f49793v;

    /* renamed from: w  reason: collision with root package name */
    private static final Regex f49794w;

    /* renamed from: x  reason: collision with root package name */
    private static final Regex f49795x;

    /* renamed from: y  reason: collision with root package name */
    private static final Regex f49796y;

    /* renamed from: z  reason: collision with root package name */
    private static final Regex f49797z;

    /* renamed from: a  reason: collision with root package name */
    private final String f49798a;

    /* renamed from: b  reason: collision with root package name */
    private final String f49799b;

    /* renamed from: c  reason: collision with root package name */
    private final String f49800c;

    /* renamed from: d  reason: collision with root package name */
    private final String f49801d;

    /* renamed from: e  reason: collision with root package name */
    private final String f49802e;

    /* renamed from: f  reason: collision with root package name */
    private final String f49803f;

    /* renamed from: g  reason: collision with root package name */
    private final String f49804g;

    /* renamed from: h  reason: collision with root package name */
    private final String f49805h;

    /* renamed from: i  reason: collision with root package name */
    private final String f49806i;

    /* renamed from: j  reason: collision with root package name */
    private final String f49807j;

    /* renamed from: k  reason: collision with root package name */
    private final Date f49808k;

    /* renamed from: l  reason: collision with root package name */
    private final Date f49809l;

    /* renamed from: m  reason: collision with root package name */
    private final Date f49810m;

    /* renamed from: n  reason: collision with root package name */
    private final String f49811n;

    /* renamed from: sn.a$a  reason: collision with other inner class name */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class C0636a {
        public /* synthetic */ C0636a(DefaultConstructorMarker defaultConstructorMarker) {
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
            if (new Regex("^@\n\\u001e\r(ANSI |AAMVA)\\d{10}.+", kotlin.text.m.f34976s).i(StringsKt.k1(str).toString()) && e(str, a.f49793v) != null && e(str, a.f49797z) != null) {
                return true;
            }
            return false;
        }

        public final a d(String str) {
            if (str == null || !f(str)) {
                return null;
            }
            return new a(null, e(str, a.f49793v), e(str, a.B), e(str, a.f49797z), e(str, a.f49794w), e(str, a.f49789r), e(str, a.f49787p), e(str, a.f49788q), e(str, a.f49790s), e(str, a.A), b(e(str, a.f49795x)), b(e(str, a.f49792u)), b(e(str, a.f49791t)), e(str, a.f49796y), 1, null);
        }

        private C0636a() {
        }
    }

    static {
        C0636a c0636a = new C0636a(null);
        f49786o = c0636a;
        f49787p = c0636a.c("DAI");
        f49788q = c0636a.c("DAJ");
        f49789r = c0636a.c("DAG");
        f49790s = c0636a.c("DAK");
        f49791t = c0636a.c("DBB");
        f49792u = c0636a.c("DBA");
        f49793v = c0636a.c("DAC");
        f49794w = c0636a.c("DBC");
        f49795x = c0636a.c("DBD");
        f49796y = c0636a.c("DCG");
        f49797z = c0636a.c("DCS");
        A = c0636a.c("DAQ");
        B = c0636a.c("DAD");
    }

    public a(String str, String str2, String str3, String str4, String str5, String str6, String str7, String str8, String str9, String str10, Date date, Date date2, Date date3, String str11) {
        this.f49798a = str;
        this.f49799b = str2;
        this.f49800c = str3;
        this.f49801d = str4;
        this.f49802e = str5;
        this.f49803f = str6;
        this.f49804g = str7;
        this.f49805h = str8;
        this.f49806i = str9;
        this.f49807j = str10;
        this.f49808k = date;
        this.f49809l = date2;
        this.f49810m = date3;
        this.f49811n = str11;
    }

    public boolean equals(Object obj) {
        if (this == obj) {
            return true;
        }
        if (!(obj instanceof a)) {
            return false;
        }
        a aVar = (a) obj;
        if (Intrinsics.areEqual(this.f49798a, aVar.f49798a) && Intrinsics.areEqual(this.f49799b, aVar.f49799b) && Intrinsics.areEqual(this.f49800c, aVar.f49800c) && Intrinsics.areEqual(this.f49801d, aVar.f49801d) && Intrinsics.areEqual(this.f49802e, aVar.f49802e) && Intrinsics.areEqual(this.f49803f, aVar.f49803f) && Intrinsics.areEqual(this.f49804g, aVar.f49804g) && Intrinsics.areEqual(this.f49805h, aVar.f49805h) && Intrinsics.areEqual(this.f49806i, aVar.f49806i) && Intrinsics.areEqual(this.f49807j, aVar.f49807j) && Intrinsics.areEqual(this.f49808k, aVar.f49808k) && Intrinsics.areEqual(this.f49809l, aVar.f49809l) && Intrinsics.areEqual(this.f49810m, aVar.f49810m) && Intrinsics.areEqual(this.f49811n, aVar.f49811n)) {
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
        String str = this.f49798a;
        int i10 = 0;
        if (str == null) {
            hashCode = 0;
        } else {
            hashCode = str.hashCode();
        }
        int i11 = hashCode * 31;
        String str2 = this.f49799b;
        if (str2 == null) {
            hashCode2 = 0;
        } else {
            hashCode2 = str2.hashCode();
        }
        int i12 = (i11 + hashCode2) * 31;
        String str3 = this.f49800c;
        if (str3 == null) {
            hashCode3 = 0;
        } else {
            hashCode3 = str3.hashCode();
        }
        int i13 = (i12 + hashCode3) * 31;
        String str4 = this.f49801d;
        if (str4 == null) {
            hashCode4 = 0;
        } else {
            hashCode4 = str4.hashCode();
        }
        int i14 = (i13 + hashCode4) * 31;
        String str5 = this.f49802e;
        if (str5 == null) {
            hashCode5 = 0;
        } else {
            hashCode5 = str5.hashCode();
        }
        int i15 = (i14 + hashCode5) * 31;
        String str6 = this.f49803f;
        if (str6 == null) {
            hashCode6 = 0;
        } else {
            hashCode6 = str6.hashCode();
        }
        int i16 = (i15 + hashCode6) * 31;
        String str7 = this.f49804g;
        if (str7 == null) {
            hashCode7 = 0;
        } else {
            hashCode7 = str7.hashCode();
        }
        int i17 = (i16 + hashCode7) * 31;
        String str8 = this.f49805h;
        if (str8 == null) {
            hashCode8 = 0;
        } else {
            hashCode8 = str8.hashCode();
        }
        int i18 = (i17 + hashCode8) * 31;
        String str9 = this.f49806i;
        if (str9 == null) {
            hashCode9 = 0;
        } else {
            hashCode9 = str9.hashCode();
        }
        int i19 = (i18 + hashCode9) * 31;
        String str10 = this.f49807j;
        if (str10 == null) {
            hashCode10 = 0;
        } else {
            hashCode10 = str10.hashCode();
        }
        int i20 = (i19 + hashCode10) * 31;
        Date date = this.f49808k;
        if (date == null) {
            hashCode11 = 0;
        } else {
            hashCode11 = date.hashCode();
        }
        int i21 = (i20 + hashCode11) * 31;
        Date date2 = this.f49809l;
        if (date2 == null) {
            hashCode12 = 0;
        } else {
            hashCode12 = date2.hashCode();
        }
        int i22 = (i21 + hashCode12) * 31;
        Date date3 = this.f49810m;
        if (date3 == null) {
            hashCode13 = 0;
        } else {
            hashCode13 = date3.hashCode();
        }
        int i23 = (i22 + hashCode13) * 31;
        String str11 = this.f49811n;
        if (str11 != null) {
            i10 = str11.hashCode();
        }
        return i23 + i10;
    }

    public final Date n() {
        return this.f49810m;
    }

    public final Date o() {
        return this.f49809l;
    }

    public String toString() {
        String str = this.f49798a;
        String str2 = this.f49799b;
        String str3 = this.f49800c;
        String str4 = this.f49801d;
        String str5 = this.f49802e;
        String str6 = this.f49803f;
        String str7 = this.f49804g;
        String str8 = this.f49805h;
        String str9 = this.f49806i;
        String str10 = this.f49807j;
        Date date = this.f49808k;
        Date date2 = this.f49809l;
        Date date3 = this.f49810m;
        String str11 = this.f49811n;
        return "AamvaExtraction(idClass=" + str + ", nameFirst=" + str2 + ", nameMiddle=" + str3 + ", nameLast=" + str4 + ", sex=" + str5 + ", addressStreet1=" + str6 + ", addressCity=" + str7 + ", addressState=" + str8 + ", addressPostalCode=" + str9 + ", identificationNumber=" + str10 + ", issueDate=" + date + ", expirationDate=" + date2 + ", birthdate=" + date3 + ", issuingCountry=" + str11 + ")";
    }

    public /* synthetic */ a(String str, String str2, String str3, String str4, String str5, String str6, String str7, String str8, String str9, String str10, Date date, Date date2, Date date3, String str11, int i10, DefaultConstructorMarker defaultConstructorMarker) {
        this((i10 & 1) != 0 ? null : str, (i10 & 2) != 0 ? null : str2, (i10 & 4) != 0 ? null : str3, (i10 & 8) != 0 ? null : str4, (i10 & 16) != 0 ? null : str5, (i10 & 32) != 0 ? null : str6, (i10 & 64) != 0 ? null : str7, (i10 & IntBufferBatchMountItem.INSTRUCTION_UPDATE_LAYOUT) != 0 ? null : str8, (i10 & IntBufferBatchMountItem.INSTRUCTION_UPDATE_EVENT_EMITTER) != 0 ? null : str9, (i10 & IntBufferBatchMountItem.INSTRUCTION_UPDATE_PADDING) != 0 ? null : str10, (i10 & IntBufferBatchMountItem.INSTRUCTION_UPDATE_OVERFLOW_INSET) != 0 ? null : date, (i10 & RecyclerView.ItemAnimator.FLAG_MOVED) != 0 ? null : date2, (i10 & RecyclerView.ItemAnimator.FLAG_APPEARED_IN_PRE_LAYOUT) != 0 ? null : date3, (i10 & 8192) != 0 ? null : str11);
    }
}

package mn;

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
    public static final C0497a f39135o;

    /* renamed from: p  reason: collision with root package name */
    private static final Regex f39136p;

    /* renamed from: q  reason: collision with root package name */
    private static final Regex f39137q;

    /* renamed from: r  reason: collision with root package name */
    private static final Regex f39138r;

    /* renamed from: s  reason: collision with root package name */
    private static final Regex f39139s;

    /* renamed from: t  reason: collision with root package name */
    private static final Regex f39140t;

    /* renamed from: u  reason: collision with root package name */
    private static final Regex f39141u;

    /* renamed from: v  reason: collision with root package name */
    private static final Regex f39142v;

    /* renamed from: w  reason: collision with root package name */
    private static final Regex f39143w;

    /* renamed from: x  reason: collision with root package name */
    private static final Regex f39144x;

    /* renamed from: y  reason: collision with root package name */
    private static final Regex f39145y;

    /* renamed from: z  reason: collision with root package name */
    private static final Regex f39146z;

    /* renamed from: a  reason: collision with root package name */
    private final String f39147a;

    /* renamed from: b  reason: collision with root package name */
    private final String f39148b;

    /* renamed from: c  reason: collision with root package name */
    private final String f39149c;

    /* renamed from: d  reason: collision with root package name */
    private final String f39150d;

    /* renamed from: e  reason: collision with root package name */
    private final String f39151e;

    /* renamed from: f  reason: collision with root package name */
    private final String f39152f;

    /* renamed from: g  reason: collision with root package name */
    private final String f39153g;

    /* renamed from: h  reason: collision with root package name */
    private final String f39154h;

    /* renamed from: i  reason: collision with root package name */
    private final String f39155i;

    /* renamed from: j  reason: collision with root package name */
    private final String f39156j;

    /* renamed from: k  reason: collision with root package name */
    private final Date f39157k;

    /* renamed from: l  reason: collision with root package name */
    private final Date f39158l;

    /* renamed from: m  reason: collision with root package name */
    private final Date f39159m;

    /* renamed from: n  reason: collision with root package name */
    private final String f39160n;

    /* renamed from: mn.a$a  reason: collision with other inner class name */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class C0497a {
        public /* synthetic */ C0497a(DefaultConstructorMarker defaultConstructorMarker) {
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
            if (new Regex("^@\n\\u001e\r(ANSI |AAMVA)\\d{10}.+", kotlin.text.m.f36286s).i(StringsKt.k1(str).toString()) && e(str, a.f39142v) != null && e(str, a.f39146z) != null) {
                return true;
            }
            return false;
        }

        public final a d(String str) {
            if (str == null || !f(str)) {
                return null;
            }
            return new a(null, e(str, a.f39142v), e(str, a.B), e(str, a.f39146z), e(str, a.f39143w), e(str, a.f39138r), e(str, a.f39136p), e(str, a.f39137q), e(str, a.f39139s), e(str, a.A), b(e(str, a.f39144x)), b(e(str, a.f39141u)), b(e(str, a.f39140t)), e(str, a.f39145y), 1, null);
        }

        private C0497a() {
        }
    }

    static {
        C0497a c0497a = new C0497a(null);
        f39135o = c0497a;
        f39136p = c0497a.c("DAI");
        f39137q = c0497a.c("DAJ");
        f39138r = c0497a.c("DAG");
        f39139s = c0497a.c("DAK");
        f39140t = c0497a.c("DBB");
        f39141u = c0497a.c("DBA");
        f39142v = c0497a.c("DAC");
        f39143w = c0497a.c("DBC");
        f39144x = c0497a.c("DBD");
        f39145y = c0497a.c("DCG");
        f39146z = c0497a.c("DCS");
        A = c0497a.c("DAQ");
        B = c0497a.c("DAD");
    }

    public a(String str, String str2, String str3, String str4, String str5, String str6, String str7, String str8, String str9, String str10, Date date, Date date2, Date date3, String str11) {
        this.f39147a = str;
        this.f39148b = str2;
        this.f39149c = str3;
        this.f39150d = str4;
        this.f39151e = str5;
        this.f39152f = str6;
        this.f39153g = str7;
        this.f39154h = str8;
        this.f39155i = str9;
        this.f39156j = str10;
        this.f39157k = date;
        this.f39158l = date2;
        this.f39159m = date3;
        this.f39160n = str11;
    }

    public boolean equals(Object obj) {
        if (this == obj) {
            return true;
        }
        if (!(obj instanceof a)) {
            return false;
        }
        a aVar = (a) obj;
        if (Intrinsics.areEqual(this.f39147a, aVar.f39147a) && Intrinsics.areEqual(this.f39148b, aVar.f39148b) && Intrinsics.areEqual(this.f39149c, aVar.f39149c) && Intrinsics.areEqual(this.f39150d, aVar.f39150d) && Intrinsics.areEqual(this.f39151e, aVar.f39151e) && Intrinsics.areEqual(this.f39152f, aVar.f39152f) && Intrinsics.areEqual(this.f39153g, aVar.f39153g) && Intrinsics.areEqual(this.f39154h, aVar.f39154h) && Intrinsics.areEqual(this.f39155i, aVar.f39155i) && Intrinsics.areEqual(this.f39156j, aVar.f39156j) && Intrinsics.areEqual(this.f39157k, aVar.f39157k) && Intrinsics.areEqual(this.f39158l, aVar.f39158l) && Intrinsics.areEqual(this.f39159m, aVar.f39159m) && Intrinsics.areEqual(this.f39160n, aVar.f39160n)) {
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
        String str = this.f39147a;
        int i10 = 0;
        if (str == null) {
            hashCode = 0;
        } else {
            hashCode = str.hashCode();
        }
        int i11 = hashCode * 31;
        String str2 = this.f39148b;
        if (str2 == null) {
            hashCode2 = 0;
        } else {
            hashCode2 = str2.hashCode();
        }
        int i12 = (i11 + hashCode2) * 31;
        String str3 = this.f39149c;
        if (str3 == null) {
            hashCode3 = 0;
        } else {
            hashCode3 = str3.hashCode();
        }
        int i13 = (i12 + hashCode3) * 31;
        String str4 = this.f39150d;
        if (str4 == null) {
            hashCode4 = 0;
        } else {
            hashCode4 = str4.hashCode();
        }
        int i14 = (i13 + hashCode4) * 31;
        String str5 = this.f39151e;
        if (str5 == null) {
            hashCode5 = 0;
        } else {
            hashCode5 = str5.hashCode();
        }
        int i15 = (i14 + hashCode5) * 31;
        String str6 = this.f39152f;
        if (str6 == null) {
            hashCode6 = 0;
        } else {
            hashCode6 = str6.hashCode();
        }
        int i16 = (i15 + hashCode6) * 31;
        String str7 = this.f39153g;
        if (str7 == null) {
            hashCode7 = 0;
        } else {
            hashCode7 = str7.hashCode();
        }
        int i17 = (i16 + hashCode7) * 31;
        String str8 = this.f39154h;
        if (str8 == null) {
            hashCode8 = 0;
        } else {
            hashCode8 = str8.hashCode();
        }
        int i18 = (i17 + hashCode8) * 31;
        String str9 = this.f39155i;
        if (str9 == null) {
            hashCode9 = 0;
        } else {
            hashCode9 = str9.hashCode();
        }
        int i19 = (i18 + hashCode9) * 31;
        String str10 = this.f39156j;
        if (str10 == null) {
            hashCode10 = 0;
        } else {
            hashCode10 = str10.hashCode();
        }
        int i20 = (i19 + hashCode10) * 31;
        Date date = this.f39157k;
        if (date == null) {
            hashCode11 = 0;
        } else {
            hashCode11 = date.hashCode();
        }
        int i21 = (i20 + hashCode11) * 31;
        Date date2 = this.f39158l;
        if (date2 == null) {
            hashCode12 = 0;
        } else {
            hashCode12 = date2.hashCode();
        }
        int i22 = (i21 + hashCode12) * 31;
        Date date3 = this.f39159m;
        if (date3 == null) {
            hashCode13 = 0;
        } else {
            hashCode13 = date3.hashCode();
        }
        int i23 = (i22 + hashCode13) * 31;
        String str11 = this.f39160n;
        if (str11 != null) {
            i10 = str11.hashCode();
        }
        return i23 + i10;
    }

    public final Date n() {
        return this.f39159m;
    }

    public final Date o() {
        return this.f39158l;
    }

    public String toString() {
        String str = this.f39147a;
        String str2 = this.f39148b;
        String str3 = this.f39149c;
        String str4 = this.f39150d;
        String str5 = this.f39151e;
        String str6 = this.f39152f;
        String str7 = this.f39153g;
        String str8 = this.f39154h;
        String str9 = this.f39155i;
        String str10 = this.f39156j;
        Date date = this.f39157k;
        Date date2 = this.f39158l;
        Date date3 = this.f39159m;
        String str11 = this.f39160n;
        return "AamvaExtraction(idClass=" + str + ", nameFirst=" + str2 + ", nameMiddle=" + str3 + ", nameLast=" + str4 + ", sex=" + str5 + ", addressStreet1=" + str6 + ", addressCity=" + str7 + ", addressState=" + str8 + ", addressPostalCode=" + str9 + ", identificationNumber=" + str10 + ", issueDate=" + date + ", expirationDate=" + date2 + ", birthdate=" + date3 + ", issuingCountry=" + str11 + ")";
    }

    public /* synthetic */ a(String str, String str2, String str3, String str4, String str5, String str6, String str7, String str8, String str9, String str10, Date date, Date date2, Date date3, String str11, int i10, DefaultConstructorMarker defaultConstructorMarker) {
        this((i10 & 1) != 0 ? null : str, (i10 & 2) != 0 ? null : str2, (i10 & 4) != 0 ? null : str3, (i10 & 8) != 0 ? null : str4, (i10 & 16) != 0 ? null : str5, (i10 & 32) != 0 ? null : str6, (i10 & 64) != 0 ? null : str7, (i10 & IntBufferBatchMountItem.INSTRUCTION_UPDATE_LAYOUT) != 0 ? null : str8, (i10 & IntBufferBatchMountItem.INSTRUCTION_UPDATE_EVENT_EMITTER) != 0 ? null : str9, (i10 & IntBufferBatchMountItem.INSTRUCTION_UPDATE_PADDING) != 0 ? null : str10, (i10 & IntBufferBatchMountItem.INSTRUCTION_UPDATE_OVERFLOW_INSET) != 0 ? null : date, (i10 & RecyclerView.ItemAnimator.FLAG_MOVED) != 0 ? null : date2, (i10 & RecyclerView.ItemAnimator.FLAG_APPEARED_IN_PRE_LAYOUT) != 0 ? null : date3, (i10 & 8192) != 0 ? null : str11);
    }
}

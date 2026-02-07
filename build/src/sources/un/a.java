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
    public static final C0678a f51680o;

    /* renamed from: p  reason: collision with root package name */
    private static final Regex f51681p;

    /* renamed from: q  reason: collision with root package name */
    private static final Regex f51682q;

    /* renamed from: r  reason: collision with root package name */
    private static final Regex f51683r;

    /* renamed from: s  reason: collision with root package name */
    private static final Regex f51684s;

    /* renamed from: t  reason: collision with root package name */
    private static final Regex f51685t;

    /* renamed from: u  reason: collision with root package name */
    private static final Regex f51686u;

    /* renamed from: v  reason: collision with root package name */
    private static final Regex f51687v;

    /* renamed from: w  reason: collision with root package name */
    private static final Regex f51688w;

    /* renamed from: x  reason: collision with root package name */
    private static final Regex f51689x;

    /* renamed from: y  reason: collision with root package name */
    private static final Regex f51690y;

    /* renamed from: z  reason: collision with root package name */
    private static final Regex f51691z;

    /* renamed from: a  reason: collision with root package name */
    private final String f51692a;

    /* renamed from: b  reason: collision with root package name */
    private final String f51693b;

    /* renamed from: c  reason: collision with root package name */
    private final String f51694c;

    /* renamed from: d  reason: collision with root package name */
    private final String f51695d;

    /* renamed from: e  reason: collision with root package name */
    private final String f51696e;

    /* renamed from: f  reason: collision with root package name */
    private final String f51697f;

    /* renamed from: g  reason: collision with root package name */
    private final String f51698g;

    /* renamed from: h  reason: collision with root package name */
    private final String f51699h;

    /* renamed from: i  reason: collision with root package name */
    private final String f51700i;

    /* renamed from: j  reason: collision with root package name */
    private final String f51701j;

    /* renamed from: k  reason: collision with root package name */
    private final Date f51702k;

    /* renamed from: l  reason: collision with root package name */
    private final Date f51703l;

    /* renamed from: m  reason: collision with root package name */
    private final Date f51704m;

    /* renamed from: n  reason: collision with root package name */
    private final String f51705n;

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
            if (new Regex("^@\n\\u001e\r(ANSI |AAMVA)\\d{10}.+", kotlin.text.m.f35044s).i(StringsKt.k1(str).toString()) && e(str, a.f51687v) != null && e(str, a.f51691z) != null) {
                return true;
            }
            return false;
        }

        public final a d(String str) {
            if (str == null || !f(str)) {
                return null;
            }
            return new a(null, e(str, a.f51687v), e(str, a.B), e(str, a.f51691z), e(str, a.f51688w), e(str, a.f51683r), e(str, a.f51681p), e(str, a.f51682q), e(str, a.f51684s), e(str, a.A), b(e(str, a.f51689x)), b(e(str, a.f51686u)), b(e(str, a.f51685t)), e(str, a.f51690y), 1, null);
        }

        private C0678a() {
        }
    }

    static {
        C0678a c0678a = new C0678a(null);
        f51680o = c0678a;
        f51681p = c0678a.c("DAI");
        f51682q = c0678a.c("DAJ");
        f51683r = c0678a.c("DAG");
        f51684s = c0678a.c("DAK");
        f51685t = c0678a.c("DBB");
        f51686u = c0678a.c("DBA");
        f51687v = c0678a.c("DAC");
        f51688w = c0678a.c("DBC");
        f51689x = c0678a.c("DBD");
        f51690y = c0678a.c("DCG");
        f51691z = c0678a.c("DCS");
        A = c0678a.c("DAQ");
        B = c0678a.c("DAD");
    }

    public a(String str, String str2, String str3, String str4, String str5, String str6, String str7, String str8, String str9, String str10, Date date, Date date2, Date date3, String str11) {
        this.f51692a = str;
        this.f51693b = str2;
        this.f51694c = str3;
        this.f51695d = str4;
        this.f51696e = str5;
        this.f51697f = str6;
        this.f51698g = str7;
        this.f51699h = str8;
        this.f51700i = str9;
        this.f51701j = str10;
        this.f51702k = date;
        this.f51703l = date2;
        this.f51704m = date3;
        this.f51705n = str11;
    }

    public boolean equals(Object obj) {
        if (this == obj) {
            return true;
        }
        if (!(obj instanceof a)) {
            return false;
        }
        a aVar = (a) obj;
        if (Intrinsics.areEqual(this.f51692a, aVar.f51692a) && Intrinsics.areEqual(this.f51693b, aVar.f51693b) && Intrinsics.areEqual(this.f51694c, aVar.f51694c) && Intrinsics.areEqual(this.f51695d, aVar.f51695d) && Intrinsics.areEqual(this.f51696e, aVar.f51696e) && Intrinsics.areEqual(this.f51697f, aVar.f51697f) && Intrinsics.areEqual(this.f51698g, aVar.f51698g) && Intrinsics.areEqual(this.f51699h, aVar.f51699h) && Intrinsics.areEqual(this.f51700i, aVar.f51700i) && Intrinsics.areEqual(this.f51701j, aVar.f51701j) && Intrinsics.areEqual(this.f51702k, aVar.f51702k) && Intrinsics.areEqual(this.f51703l, aVar.f51703l) && Intrinsics.areEqual(this.f51704m, aVar.f51704m) && Intrinsics.areEqual(this.f51705n, aVar.f51705n)) {
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
        String str = this.f51692a;
        int i10 = 0;
        if (str == null) {
            hashCode = 0;
        } else {
            hashCode = str.hashCode();
        }
        int i11 = hashCode * 31;
        String str2 = this.f51693b;
        if (str2 == null) {
            hashCode2 = 0;
        } else {
            hashCode2 = str2.hashCode();
        }
        int i12 = (i11 + hashCode2) * 31;
        String str3 = this.f51694c;
        if (str3 == null) {
            hashCode3 = 0;
        } else {
            hashCode3 = str3.hashCode();
        }
        int i13 = (i12 + hashCode3) * 31;
        String str4 = this.f51695d;
        if (str4 == null) {
            hashCode4 = 0;
        } else {
            hashCode4 = str4.hashCode();
        }
        int i14 = (i13 + hashCode4) * 31;
        String str5 = this.f51696e;
        if (str5 == null) {
            hashCode5 = 0;
        } else {
            hashCode5 = str5.hashCode();
        }
        int i15 = (i14 + hashCode5) * 31;
        String str6 = this.f51697f;
        if (str6 == null) {
            hashCode6 = 0;
        } else {
            hashCode6 = str6.hashCode();
        }
        int i16 = (i15 + hashCode6) * 31;
        String str7 = this.f51698g;
        if (str7 == null) {
            hashCode7 = 0;
        } else {
            hashCode7 = str7.hashCode();
        }
        int i17 = (i16 + hashCode7) * 31;
        String str8 = this.f51699h;
        if (str8 == null) {
            hashCode8 = 0;
        } else {
            hashCode8 = str8.hashCode();
        }
        int i18 = (i17 + hashCode8) * 31;
        String str9 = this.f51700i;
        if (str9 == null) {
            hashCode9 = 0;
        } else {
            hashCode9 = str9.hashCode();
        }
        int i19 = (i18 + hashCode9) * 31;
        String str10 = this.f51701j;
        if (str10 == null) {
            hashCode10 = 0;
        } else {
            hashCode10 = str10.hashCode();
        }
        int i20 = (i19 + hashCode10) * 31;
        Date date = this.f51702k;
        if (date == null) {
            hashCode11 = 0;
        } else {
            hashCode11 = date.hashCode();
        }
        int i21 = (i20 + hashCode11) * 31;
        Date date2 = this.f51703l;
        if (date2 == null) {
            hashCode12 = 0;
        } else {
            hashCode12 = date2.hashCode();
        }
        int i22 = (i21 + hashCode12) * 31;
        Date date3 = this.f51704m;
        if (date3 == null) {
            hashCode13 = 0;
        } else {
            hashCode13 = date3.hashCode();
        }
        int i23 = (i22 + hashCode13) * 31;
        String str11 = this.f51705n;
        if (str11 != null) {
            i10 = str11.hashCode();
        }
        return i23 + i10;
    }

    public final Date n() {
        return this.f51704m;
    }

    public final Date o() {
        return this.f51703l;
    }

    public String toString() {
        String str = this.f51692a;
        String str2 = this.f51693b;
        String str3 = this.f51694c;
        String str4 = this.f51695d;
        String str5 = this.f51696e;
        String str6 = this.f51697f;
        String str7 = this.f51698g;
        String str8 = this.f51699h;
        String str9 = this.f51700i;
        String str10 = this.f51701j;
        Date date = this.f51702k;
        Date date2 = this.f51703l;
        Date date3 = this.f51704m;
        String str11 = this.f51705n;
        return "AamvaExtraction(idClass=" + str + ", nameFirst=" + str2 + ", nameMiddle=" + str3 + ", nameLast=" + str4 + ", sex=" + str5 + ", addressStreet1=" + str6 + ", addressCity=" + str7 + ", addressState=" + str8 + ", addressPostalCode=" + str9 + ", identificationNumber=" + str10 + ", issueDate=" + date + ", expirationDate=" + date2 + ", birthdate=" + date3 + ", issuingCountry=" + str11 + ")";
    }

    public /* synthetic */ a(String str, String str2, String str3, String str4, String str5, String str6, String str7, String str8, String str9, String str10, Date date, Date date2, Date date3, String str11, int i10, DefaultConstructorMarker defaultConstructorMarker) {
        this((i10 & 1) != 0 ? null : str, (i10 & 2) != 0 ? null : str2, (i10 & 4) != 0 ? null : str3, (i10 & 8) != 0 ? null : str4, (i10 & 16) != 0 ? null : str5, (i10 & 32) != 0 ? null : str6, (i10 & 64) != 0 ? null : str7, (i10 & IntBufferBatchMountItem.INSTRUCTION_UPDATE_LAYOUT) != 0 ? null : str8, (i10 & IntBufferBatchMountItem.INSTRUCTION_UPDATE_EVENT_EMITTER) != 0 ? null : str9, (i10 & IntBufferBatchMountItem.INSTRUCTION_UPDATE_PADDING) != 0 ? null : str10, (i10 & IntBufferBatchMountItem.INSTRUCTION_UPDATE_OVERFLOW_INSET) != 0 ? null : date, (i10 & RecyclerView.ItemAnimator.FLAG_MOVED) != 0 ? null : date2, (i10 & RecyclerView.ItemAnimator.FLAG_APPEARED_IN_PRE_LAYOUT) != 0 ? null : date3, (i10 & 8192) != 0 ? null : str11);
    }
}

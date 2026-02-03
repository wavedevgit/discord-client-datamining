package nn;

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
    public static final C0529a f41878o;

    /* renamed from: p  reason: collision with root package name */
    private static final Regex f41879p;

    /* renamed from: q  reason: collision with root package name */
    private static final Regex f41880q;

    /* renamed from: r  reason: collision with root package name */
    private static final Regex f41881r;

    /* renamed from: s  reason: collision with root package name */
    private static final Regex f41882s;

    /* renamed from: t  reason: collision with root package name */
    private static final Regex f41883t;

    /* renamed from: u  reason: collision with root package name */
    private static final Regex f41884u;

    /* renamed from: v  reason: collision with root package name */
    private static final Regex f41885v;

    /* renamed from: w  reason: collision with root package name */
    private static final Regex f41886w;

    /* renamed from: x  reason: collision with root package name */
    private static final Regex f41887x;

    /* renamed from: y  reason: collision with root package name */
    private static final Regex f41888y;

    /* renamed from: z  reason: collision with root package name */
    private static final Regex f41889z;

    /* renamed from: a  reason: collision with root package name */
    private final String f41890a;

    /* renamed from: b  reason: collision with root package name */
    private final String f41891b;

    /* renamed from: c  reason: collision with root package name */
    private final String f41892c;

    /* renamed from: d  reason: collision with root package name */
    private final String f41893d;

    /* renamed from: e  reason: collision with root package name */
    private final String f41894e;

    /* renamed from: f  reason: collision with root package name */
    private final String f41895f;

    /* renamed from: g  reason: collision with root package name */
    private final String f41896g;

    /* renamed from: h  reason: collision with root package name */
    private final String f41897h;

    /* renamed from: i  reason: collision with root package name */
    private final String f41898i;

    /* renamed from: j  reason: collision with root package name */
    private final String f41899j;

    /* renamed from: k  reason: collision with root package name */
    private final Date f41900k;

    /* renamed from: l  reason: collision with root package name */
    private final Date f41901l;

    /* renamed from: m  reason: collision with root package name */
    private final Date f41902m;

    /* renamed from: n  reason: collision with root package name */
    private final String f41903n;

    /* renamed from: nn.a$a  reason: collision with other inner class name */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class C0529a {
        public /* synthetic */ C0529a(DefaultConstructorMarker defaultConstructorMarker) {
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
            if (new Regex("^@\n\\u001e\r(ANSI |AAMVA)\\d{10}.+", kotlin.text.m.f36062s).i(StringsKt.k1(str).toString()) && e(str, a.f41885v) != null && e(str, a.f41889z) != null) {
                return true;
            }
            return false;
        }

        public final a d(String str) {
            if (str == null || !f(str)) {
                return null;
            }
            return new a(null, e(str, a.f41885v), e(str, a.B), e(str, a.f41889z), e(str, a.f41886w), e(str, a.f41881r), e(str, a.f41879p), e(str, a.f41880q), e(str, a.f41882s), e(str, a.A), b(e(str, a.f41887x)), b(e(str, a.f41884u)), b(e(str, a.f41883t)), e(str, a.f41888y), 1, null);
        }

        private C0529a() {
        }
    }

    static {
        C0529a c0529a = new C0529a(null);
        f41878o = c0529a;
        f41879p = c0529a.c("DAI");
        f41880q = c0529a.c("DAJ");
        f41881r = c0529a.c("DAG");
        f41882s = c0529a.c("DAK");
        f41883t = c0529a.c("DBB");
        f41884u = c0529a.c("DBA");
        f41885v = c0529a.c("DAC");
        f41886w = c0529a.c("DBC");
        f41887x = c0529a.c("DBD");
        f41888y = c0529a.c("DCG");
        f41889z = c0529a.c("DCS");
        A = c0529a.c("DAQ");
        B = c0529a.c("DAD");
    }

    public a(String str, String str2, String str3, String str4, String str5, String str6, String str7, String str8, String str9, String str10, Date date, Date date2, Date date3, String str11) {
        this.f41890a = str;
        this.f41891b = str2;
        this.f41892c = str3;
        this.f41893d = str4;
        this.f41894e = str5;
        this.f41895f = str6;
        this.f41896g = str7;
        this.f41897h = str8;
        this.f41898i = str9;
        this.f41899j = str10;
        this.f41900k = date;
        this.f41901l = date2;
        this.f41902m = date3;
        this.f41903n = str11;
    }

    public boolean equals(Object obj) {
        if (this == obj) {
            return true;
        }
        if (!(obj instanceof a)) {
            return false;
        }
        a aVar = (a) obj;
        if (Intrinsics.areEqual(this.f41890a, aVar.f41890a) && Intrinsics.areEqual(this.f41891b, aVar.f41891b) && Intrinsics.areEqual(this.f41892c, aVar.f41892c) && Intrinsics.areEqual(this.f41893d, aVar.f41893d) && Intrinsics.areEqual(this.f41894e, aVar.f41894e) && Intrinsics.areEqual(this.f41895f, aVar.f41895f) && Intrinsics.areEqual(this.f41896g, aVar.f41896g) && Intrinsics.areEqual(this.f41897h, aVar.f41897h) && Intrinsics.areEqual(this.f41898i, aVar.f41898i) && Intrinsics.areEqual(this.f41899j, aVar.f41899j) && Intrinsics.areEqual(this.f41900k, aVar.f41900k) && Intrinsics.areEqual(this.f41901l, aVar.f41901l) && Intrinsics.areEqual(this.f41902m, aVar.f41902m) && Intrinsics.areEqual(this.f41903n, aVar.f41903n)) {
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
        String str = this.f41890a;
        int i10 = 0;
        if (str == null) {
            hashCode = 0;
        } else {
            hashCode = str.hashCode();
        }
        int i11 = hashCode * 31;
        String str2 = this.f41891b;
        if (str2 == null) {
            hashCode2 = 0;
        } else {
            hashCode2 = str2.hashCode();
        }
        int i12 = (i11 + hashCode2) * 31;
        String str3 = this.f41892c;
        if (str3 == null) {
            hashCode3 = 0;
        } else {
            hashCode3 = str3.hashCode();
        }
        int i13 = (i12 + hashCode3) * 31;
        String str4 = this.f41893d;
        if (str4 == null) {
            hashCode4 = 0;
        } else {
            hashCode4 = str4.hashCode();
        }
        int i14 = (i13 + hashCode4) * 31;
        String str5 = this.f41894e;
        if (str5 == null) {
            hashCode5 = 0;
        } else {
            hashCode5 = str5.hashCode();
        }
        int i15 = (i14 + hashCode5) * 31;
        String str6 = this.f41895f;
        if (str6 == null) {
            hashCode6 = 0;
        } else {
            hashCode6 = str6.hashCode();
        }
        int i16 = (i15 + hashCode6) * 31;
        String str7 = this.f41896g;
        if (str7 == null) {
            hashCode7 = 0;
        } else {
            hashCode7 = str7.hashCode();
        }
        int i17 = (i16 + hashCode7) * 31;
        String str8 = this.f41897h;
        if (str8 == null) {
            hashCode8 = 0;
        } else {
            hashCode8 = str8.hashCode();
        }
        int i18 = (i17 + hashCode8) * 31;
        String str9 = this.f41898i;
        if (str9 == null) {
            hashCode9 = 0;
        } else {
            hashCode9 = str9.hashCode();
        }
        int i19 = (i18 + hashCode9) * 31;
        String str10 = this.f41899j;
        if (str10 == null) {
            hashCode10 = 0;
        } else {
            hashCode10 = str10.hashCode();
        }
        int i20 = (i19 + hashCode10) * 31;
        Date date = this.f41900k;
        if (date == null) {
            hashCode11 = 0;
        } else {
            hashCode11 = date.hashCode();
        }
        int i21 = (i20 + hashCode11) * 31;
        Date date2 = this.f41901l;
        if (date2 == null) {
            hashCode12 = 0;
        } else {
            hashCode12 = date2.hashCode();
        }
        int i22 = (i21 + hashCode12) * 31;
        Date date3 = this.f41902m;
        if (date3 == null) {
            hashCode13 = 0;
        } else {
            hashCode13 = date3.hashCode();
        }
        int i23 = (i22 + hashCode13) * 31;
        String str11 = this.f41903n;
        if (str11 != null) {
            i10 = str11.hashCode();
        }
        return i23 + i10;
    }

    public final Date n() {
        return this.f41902m;
    }

    public final Date o() {
        return this.f41901l;
    }

    public String toString() {
        String str = this.f41890a;
        String str2 = this.f41891b;
        String str3 = this.f41892c;
        String str4 = this.f41893d;
        String str5 = this.f41894e;
        String str6 = this.f41895f;
        String str7 = this.f41896g;
        String str8 = this.f41897h;
        String str9 = this.f41898i;
        String str10 = this.f41899j;
        Date date = this.f41900k;
        Date date2 = this.f41901l;
        Date date3 = this.f41902m;
        String str11 = this.f41903n;
        return "AamvaExtraction(idClass=" + str + ", nameFirst=" + str2 + ", nameMiddle=" + str3 + ", nameLast=" + str4 + ", sex=" + str5 + ", addressStreet1=" + str6 + ", addressCity=" + str7 + ", addressState=" + str8 + ", addressPostalCode=" + str9 + ", identificationNumber=" + str10 + ", issueDate=" + date + ", expirationDate=" + date2 + ", birthdate=" + date3 + ", issuingCountry=" + str11 + ")";
    }

    public /* synthetic */ a(String str, String str2, String str3, String str4, String str5, String str6, String str7, String str8, String str9, String str10, Date date, Date date2, Date date3, String str11, int i10, DefaultConstructorMarker defaultConstructorMarker) {
        this((i10 & 1) != 0 ? null : str, (i10 & 2) != 0 ? null : str2, (i10 & 4) != 0 ? null : str3, (i10 & 8) != 0 ? null : str4, (i10 & 16) != 0 ? null : str5, (i10 & 32) != 0 ? null : str6, (i10 & 64) != 0 ? null : str7, (i10 & IntBufferBatchMountItem.INSTRUCTION_UPDATE_LAYOUT) != 0 ? null : str8, (i10 & IntBufferBatchMountItem.INSTRUCTION_UPDATE_EVENT_EMITTER) != 0 ? null : str9, (i10 & IntBufferBatchMountItem.INSTRUCTION_UPDATE_PADDING) != 0 ? null : str10, (i10 & IntBufferBatchMountItem.INSTRUCTION_UPDATE_OVERFLOW_INSET) != 0 ? null : date, (i10 & RecyclerView.ItemAnimator.FLAG_MOVED) != 0 ? null : date2, (i10 & RecyclerView.ItemAnimator.FLAG_APPEARED_IN_PRE_LAYOUT) != 0 ? null : date3, (i10 & 8192) != 0 ? null : str11);
    }
}

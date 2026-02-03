package pn;

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
    public static final C0560a f46170o;

    /* renamed from: p  reason: collision with root package name */
    private static final Regex f46171p;

    /* renamed from: q  reason: collision with root package name */
    private static final Regex f46172q;

    /* renamed from: r  reason: collision with root package name */
    private static final Regex f46173r;

    /* renamed from: s  reason: collision with root package name */
    private static final Regex f46174s;

    /* renamed from: t  reason: collision with root package name */
    private static final Regex f46175t;

    /* renamed from: u  reason: collision with root package name */
    private static final Regex f46176u;

    /* renamed from: v  reason: collision with root package name */
    private static final Regex f46177v;

    /* renamed from: w  reason: collision with root package name */
    private static final Regex f46178w;

    /* renamed from: x  reason: collision with root package name */
    private static final Regex f46179x;

    /* renamed from: y  reason: collision with root package name */
    private static final Regex f46180y;

    /* renamed from: z  reason: collision with root package name */
    private static final Regex f46181z;

    /* renamed from: a  reason: collision with root package name */
    private final String f46182a;

    /* renamed from: b  reason: collision with root package name */
    private final String f46183b;

    /* renamed from: c  reason: collision with root package name */
    private final String f46184c;

    /* renamed from: d  reason: collision with root package name */
    private final String f46185d;

    /* renamed from: e  reason: collision with root package name */
    private final String f46186e;

    /* renamed from: f  reason: collision with root package name */
    private final String f46187f;

    /* renamed from: g  reason: collision with root package name */
    private final String f46188g;

    /* renamed from: h  reason: collision with root package name */
    private final String f46189h;

    /* renamed from: i  reason: collision with root package name */
    private final String f46190i;

    /* renamed from: j  reason: collision with root package name */
    private final String f46191j;

    /* renamed from: k  reason: collision with root package name */
    private final Date f46192k;

    /* renamed from: l  reason: collision with root package name */
    private final Date f46193l;

    /* renamed from: m  reason: collision with root package name */
    private final Date f46194m;

    /* renamed from: n  reason: collision with root package name */
    private final String f46195n;

    /* renamed from: pn.a$a  reason: collision with other inner class name */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class C0560a {
        public /* synthetic */ C0560a(DefaultConstructorMarker defaultConstructorMarker) {
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
            if (new Regex("^@\n\\u001e\r(ANSI |AAMVA)\\d{10}.+", kotlin.text.m.f35452s).i(StringsKt.k1(str).toString()) && e(str, a.f46177v) != null && e(str, a.f46181z) != null) {
                return true;
            }
            return false;
        }

        public final a d(String str) {
            if (str == null || !f(str)) {
                return null;
            }
            return new a(null, e(str, a.f46177v), e(str, a.B), e(str, a.f46181z), e(str, a.f46178w), e(str, a.f46173r), e(str, a.f46171p), e(str, a.f46172q), e(str, a.f46174s), e(str, a.A), b(e(str, a.f46179x)), b(e(str, a.f46176u)), b(e(str, a.f46175t)), e(str, a.f46180y), 1, null);
        }

        private C0560a() {
        }
    }

    static {
        C0560a c0560a = new C0560a(null);
        f46170o = c0560a;
        f46171p = c0560a.c("DAI");
        f46172q = c0560a.c("DAJ");
        f46173r = c0560a.c("DAG");
        f46174s = c0560a.c("DAK");
        f46175t = c0560a.c("DBB");
        f46176u = c0560a.c("DBA");
        f46177v = c0560a.c("DAC");
        f46178w = c0560a.c("DBC");
        f46179x = c0560a.c("DBD");
        f46180y = c0560a.c("DCG");
        f46181z = c0560a.c("DCS");
        A = c0560a.c("DAQ");
        B = c0560a.c("DAD");
    }

    public a(String str, String str2, String str3, String str4, String str5, String str6, String str7, String str8, String str9, String str10, Date date, Date date2, Date date3, String str11) {
        this.f46182a = str;
        this.f46183b = str2;
        this.f46184c = str3;
        this.f46185d = str4;
        this.f46186e = str5;
        this.f46187f = str6;
        this.f46188g = str7;
        this.f46189h = str8;
        this.f46190i = str9;
        this.f46191j = str10;
        this.f46192k = date;
        this.f46193l = date2;
        this.f46194m = date3;
        this.f46195n = str11;
    }

    public boolean equals(Object obj) {
        if (this == obj) {
            return true;
        }
        if (!(obj instanceof a)) {
            return false;
        }
        a aVar = (a) obj;
        if (Intrinsics.areEqual(this.f46182a, aVar.f46182a) && Intrinsics.areEqual(this.f46183b, aVar.f46183b) && Intrinsics.areEqual(this.f46184c, aVar.f46184c) && Intrinsics.areEqual(this.f46185d, aVar.f46185d) && Intrinsics.areEqual(this.f46186e, aVar.f46186e) && Intrinsics.areEqual(this.f46187f, aVar.f46187f) && Intrinsics.areEqual(this.f46188g, aVar.f46188g) && Intrinsics.areEqual(this.f46189h, aVar.f46189h) && Intrinsics.areEqual(this.f46190i, aVar.f46190i) && Intrinsics.areEqual(this.f46191j, aVar.f46191j) && Intrinsics.areEqual(this.f46192k, aVar.f46192k) && Intrinsics.areEqual(this.f46193l, aVar.f46193l) && Intrinsics.areEqual(this.f46194m, aVar.f46194m) && Intrinsics.areEqual(this.f46195n, aVar.f46195n)) {
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
        String str = this.f46182a;
        int i10 = 0;
        if (str == null) {
            hashCode = 0;
        } else {
            hashCode = str.hashCode();
        }
        int i11 = hashCode * 31;
        String str2 = this.f46183b;
        if (str2 == null) {
            hashCode2 = 0;
        } else {
            hashCode2 = str2.hashCode();
        }
        int i12 = (i11 + hashCode2) * 31;
        String str3 = this.f46184c;
        if (str3 == null) {
            hashCode3 = 0;
        } else {
            hashCode3 = str3.hashCode();
        }
        int i13 = (i12 + hashCode3) * 31;
        String str4 = this.f46185d;
        if (str4 == null) {
            hashCode4 = 0;
        } else {
            hashCode4 = str4.hashCode();
        }
        int i14 = (i13 + hashCode4) * 31;
        String str5 = this.f46186e;
        if (str5 == null) {
            hashCode5 = 0;
        } else {
            hashCode5 = str5.hashCode();
        }
        int i15 = (i14 + hashCode5) * 31;
        String str6 = this.f46187f;
        if (str6 == null) {
            hashCode6 = 0;
        } else {
            hashCode6 = str6.hashCode();
        }
        int i16 = (i15 + hashCode6) * 31;
        String str7 = this.f46188g;
        if (str7 == null) {
            hashCode7 = 0;
        } else {
            hashCode7 = str7.hashCode();
        }
        int i17 = (i16 + hashCode7) * 31;
        String str8 = this.f46189h;
        if (str8 == null) {
            hashCode8 = 0;
        } else {
            hashCode8 = str8.hashCode();
        }
        int i18 = (i17 + hashCode8) * 31;
        String str9 = this.f46190i;
        if (str9 == null) {
            hashCode9 = 0;
        } else {
            hashCode9 = str9.hashCode();
        }
        int i19 = (i18 + hashCode9) * 31;
        String str10 = this.f46191j;
        if (str10 == null) {
            hashCode10 = 0;
        } else {
            hashCode10 = str10.hashCode();
        }
        int i20 = (i19 + hashCode10) * 31;
        Date date = this.f46192k;
        if (date == null) {
            hashCode11 = 0;
        } else {
            hashCode11 = date.hashCode();
        }
        int i21 = (i20 + hashCode11) * 31;
        Date date2 = this.f46193l;
        if (date2 == null) {
            hashCode12 = 0;
        } else {
            hashCode12 = date2.hashCode();
        }
        int i22 = (i21 + hashCode12) * 31;
        Date date3 = this.f46194m;
        if (date3 == null) {
            hashCode13 = 0;
        } else {
            hashCode13 = date3.hashCode();
        }
        int i23 = (i22 + hashCode13) * 31;
        String str11 = this.f46195n;
        if (str11 != null) {
            i10 = str11.hashCode();
        }
        return i23 + i10;
    }

    public final Date n() {
        return this.f46194m;
    }

    public final Date o() {
        return this.f46193l;
    }

    public String toString() {
        String str = this.f46182a;
        String str2 = this.f46183b;
        String str3 = this.f46184c;
        String str4 = this.f46185d;
        String str5 = this.f46186e;
        String str6 = this.f46187f;
        String str7 = this.f46188g;
        String str8 = this.f46189h;
        String str9 = this.f46190i;
        String str10 = this.f46191j;
        Date date = this.f46192k;
        Date date2 = this.f46193l;
        Date date3 = this.f46194m;
        String str11 = this.f46195n;
        return "AamvaExtraction(idClass=" + str + ", nameFirst=" + str2 + ", nameMiddle=" + str3 + ", nameLast=" + str4 + ", sex=" + str5 + ", addressStreet1=" + str6 + ", addressCity=" + str7 + ", addressState=" + str8 + ", addressPostalCode=" + str9 + ", identificationNumber=" + str10 + ", issueDate=" + date + ", expirationDate=" + date2 + ", birthdate=" + date3 + ", issuingCountry=" + str11 + ")";
    }

    public /* synthetic */ a(String str, String str2, String str3, String str4, String str5, String str6, String str7, String str8, String str9, String str10, Date date, Date date2, Date date3, String str11, int i10, DefaultConstructorMarker defaultConstructorMarker) {
        this((i10 & 1) != 0 ? null : str, (i10 & 2) != 0 ? null : str2, (i10 & 4) != 0 ? null : str3, (i10 & 8) != 0 ? null : str4, (i10 & 16) != 0 ? null : str5, (i10 & 32) != 0 ? null : str6, (i10 & 64) != 0 ? null : str7, (i10 & IntBufferBatchMountItem.INSTRUCTION_UPDATE_LAYOUT) != 0 ? null : str8, (i10 & IntBufferBatchMountItem.INSTRUCTION_UPDATE_EVENT_EMITTER) != 0 ? null : str9, (i10 & IntBufferBatchMountItem.INSTRUCTION_UPDATE_PADDING) != 0 ? null : str10, (i10 & IntBufferBatchMountItem.INSTRUCTION_UPDATE_OVERFLOW_INSET) != 0 ? null : date, (i10 & RecyclerView.ItemAnimator.FLAG_MOVED) != 0 ? null : date2, (i10 & RecyclerView.ItemAnimator.FLAG_APPEARED_IN_PRE_LAYOUT) != 0 ? null : date3, (i10 & 8192) != 0 ? null : str11);
    }
}

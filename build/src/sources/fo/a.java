package fo;

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
    public static final C0322a f23936o;

    /* renamed from: p  reason: collision with root package name */
    private static final Regex f23937p;

    /* renamed from: q  reason: collision with root package name */
    private static final Regex f23938q;

    /* renamed from: r  reason: collision with root package name */
    private static final Regex f23939r;

    /* renamed from: s  reason: collision with root package name */
    private static final Regex f23940s;

    /* renamed from: t  reason: collision with root package name */
    private static final Regex f23941t;

    /* renamed from: u  reason: collision with root package name */
    private static final Regex f23942u;

    /* renamed from: v  reason: collision with root package name */
    private static final Regex f23943v;

    /* renamed from: w  reason: collision with root package name */
    private static final Regex f23944w;

    /* renamed from: x  reason: collision with root package name */
    private static final Regex f23945x;

    /* renamed from: y  reason: collision with root package name */
    private static final Regex f23946y;

    /* renamed from: z  reason: collision with root package name */
    private static final Regex f23947z;

    /* renamed from: a  reason: collision with root package name */
    private final String f23948a;

    /* renamed from: b  reason: collision with root package name */
    private final String f23949b;

    /* renamed from: c  reason: collision with root package name */
    private final String f23950c;

    /* renamed from: d  reason: collision with root package name */
    private final String f23951d;

    /* renamed from: e  reason: collision with root package name */
    private final String f23952e;

    /* renamed from: f  reason: collision with root package name */
    private final String f23953f;

    /* renamed from: g  reason: collision with root package name */
    private final String f23954g;

    /* renamed from: h  reason: collision with root package name */
    private final String f23955h;

    /* renamed from: i  reason: collision with root package name */
    private final String f23956i;

    /* renamed from: j  reason: collision with root package name */
    private final String f23957j;

    /* renamed from: k  reason: collision with root package name */
    private final Date f23958k;

    /* renamed from: l  reason: collision with root package name */
    private final Date f23959l;

    /* renamed from: m  reason: collision with root package name */
    private final Date f23960m;

    /* renamed from: n  reason: collision with root package name */
    private final String f23961n;

    /* renamed from: fo.a$a  reason: collision with other inner class name */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class C0322a {
        public /* synthetic */ C0322a(DefaultConstructorMarker defaultConstructorMarker) {
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
            if (new Regex("^@\n\\u001e\r(ANSI |AAMVA)\\d{10}.+", kotlin.text.m.f34976s).i(StringsKt.k1(str).toString()) && e(str, a.f23943v) != null && e(str, a.f23947z) != null) {
                return true;
            }
            return false;
        }

        public final a d(String str) {
            if (str == null || !f(str)) {
                return null;
            }
            return new a(null, e(str, a.f23943v), e(str, a.B), e(str, a.f23947z), e(str, a.f23944w), e(str, a.f23939r), e(str, a.f23937p), e(str, a.f23938q), e(str, a.f23940s), e(str, a.A), b(e(str, a.f23945x)), b(e(str, a.f23942u)), b(e(str, a.f23941t)), e(str, a.f23946y), 1, null);
        }

        private C0322a() {
        }
    }

    static {
        C0322a c0322a = new C0322a(null);
        f23936o = c0322a;
        f23937p = c0322a.c("DAI");
        f23938q = c0322a.c("DAJ");
        f23939r = c0322a.c("DAG");
        f23940s = c0322a.c("DAK");
        f23941t = c0322a.c("DBB");
        f23942u = c0322a.c("DBA");
        f23943v = c0322a.c("DAC");
        f23944w = c0322a.c("DBC");
        f23945x = c0322a.c("DBD");
        f23946y = c0322a.c("DCG");
        f23947z = c0322a.c("DCS");
        A = c0322a.c("DAQ");
        B = c0322a.c("DAD");
    }

    public a(String str, String str2, String str3, String str4, String str5, String str6, String str7, String str8, String str9, String str10, Date date, Date date2, Date date3, String str11) {
        this.f23948a = str;
        this.f23949b = str2;
        this.f23950c = str3;
        this.f23951d = str4;
        this.f23952e = str5;
        this.f23953f = str6;
        this.f23954g = str7;
        this.f23955h = str8;
        this.f23956i = str9;
        this.f23957j = str10;
        this.f23958k = date;
        this.f23959l = date2;
        this.f23960m = date3;
        this.f23961n = str11;
    }

    public boolean equals(Object obj) {
        if (this == obj) {
            return true;
        }
        if (!(obj instanceof a)) {
            return false;
        }
        a aVar = (a) obj;
        if (Intrinsics.areEqual(this.f23948a, aVar.f23948a) && Intrinsics.areEqual(this.f23949b, aVar.f23949b) && Intrinsics.areEqual(this.f23950c, aVar.f23950c) && Intrinsics.areEqual(this.f23951d, aVar.f23951d) && Intrinsics.areEqual(this.f23952e, aVar.f23952e) && Intrinsics.areEqual(this.f23953f, aVar.f23953f) && Intrinsics.areEqual(this.f23954g, aVar.f23954g) && Intrinsics.areEqual(this.f23955h, aVar.f23955h) && Intrinsics.areEqual(this.f23956i, aVar.f23956i) && Intrinsics.areEqual(this.f23957j, aVar.f23957j) && Intrinsics.areEqual(this.f23958k, aVar.f23958k) && Intrinsics.areEqual(this.f23959l, aVar.f23959l) && Intrinsics.areEqual(this.f23960m, aVar.f23960m) && Intrinsics.areEqual(this.f23961n, aVar.f23961n)) {
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
        String str = this.f23948a;
        int i10 = 0;
        if (str == null) {
            hashCode = 0;
        } else {
            hashCode = str.hashCode();
        }
        int i11 = hashCode * 31;
        String str2 = this.f23949b;
        if (str2 == null) {
            hashCode2 = 0;
        } else {
            hashCode2 = str2.hashCode();
        }
        int i12 = (i11 + hashCode2) * 31;
        String str3 = this.f23950c;
        if (str3 == null) {
            hashCode3 = 0;
        } else {
            hashCode3 = str3.hashCode();
        }
        int i13 = (i12 + hashCode3) * 31;
        String str4 = this.f23951d;
        if (str4 == null) {
            hashCode4 = 0;
        } else {
            hashCode4 = str4.hashCode();
        }
        int i14 = (i13 + hashCode4) * 31;
        String str5 = this.f23952e;
        if (str5 == null) {
            hashCode5 = 0;
        } else {
            hashCode5 = str5.hashCode();
        }
        int i15 = (i14 + hashCode5) * 31;
        String str6 = this.f23953f;
        if (str6 == null) {
            hashCode6 = 0;
        } else {
            hashCode6 = str6.hashCode();
        }
        int i16 = (i15 + hashCode6) * 31;
        String str7 = this.f23954g;
        if (str7 == null) {
            hashCode7 = 0;
        } else {
            hashCode7 = str7.hashCode();
        }
        int i17 = (i16 + hashCode7) * 31;
        String str8 = this.f23955h;
        if (str8 == null) {
            hashCode8 = 0;
        } else {
            hashCode8 = str8.hashCode();
        }
        int i18 = (i17 + hashCode8) * 31;
        String str9 = this.f23956i;
        if (str9 == null) {
            hashCode9 = 0;
        } else {
            hashCode9 = str9.hashCode();
        }
        int i19 = (i18 + hashCode9) * 31;
        String str10 = this.f23957j;
        if (str10 == null) {
            hashCode10 = 0;
        } else {
            hashCode10 = str10.hashCode();
        }
        int i20 = (i19 + hashCode10) * 31;
        Date date = this.f23958k;
        if (date == null) {
            hashCode11 = 0;
        } else {
            hashCode11 = date.hashCode();
        }
        int i21 = (i20 + hashCode11) * 31;
        Date date2 = this.f23959l;
        if (date2 == null) {
            hashCode12 = 0;
        } else {
            hashCode12 = date2.hashCode();
        }
        int i22 = (i21 + hashCode12) * 31;
        Date date3 = this.f23960m;
        if (date3 == null) {
            hashCode13 = 0;
        } else {
            hashCode13 = date3.hashCode();
        }
        int i23 = (i22 + hashCode13) * 31;
        String str11 = this.f23961n;
        if (str11 != null) {
            i10 = str11.hashCode();
        }
        return i23 + i10;
    }

    public final Date n() {
        return this.f23960m;
    }

    public final Date o() {
        return this.f23959l;
    }

    public String toString() {
        String str = this.f23948a;
        String str2 = this.f23949b;
        String str3 = this.f23950c;
        String str4 = this.f23951d;
        String str5 = this.f23952e;
        String str6 = this.f23953f;
        String str7 = this.f23954g;
        String str8 = this.f23955h;
        String str9 = this.f23956i;
        String str10 = this.f23957j;
        Date date = this.f23958k;
        Date date2 = this.f23959l;
        Date date3 = this.f23960m;
        String str11 = this.f23961n;
        return "AamvaExtraction(idClass=" + str + ", nameFirst=" + str2 + ", nameMiddle=" + str3 + ", nameLast=" + str4 + ", sex=" + str5 + ", addressStreet1=" + str6 + ", addressCity=" + str7 + ", addressState=" + str8 + ", addressPostalCode=" + str9 + ", identificationNumber=" + str10 + ", issueDate=" + date + ", expirationDate=" + date2 + ", birthdate=" + date3 + ", issuingCountry=" + str11 + ")";
    }

    public /* synthetic */ a(String str, String str2, String str3, String str4, String str5, String str6, String str7, String str8, String str9, String str10, Date date, Date date2, Date date3, String str11, int i10, DefaultConstructorMarker defaultConstructorMarker) {
        this((i10 & 1) != 0 ? null : str, (i10 & 2) != 0 ? null : str2, (i10 & 4) != 0 ? null : str3, (i10 & 8) != 0 ? null : str4, (i10 & 16) != 0 ? null : str5, (i10 & 32) != 0 ? null : str6, (i10 & 64) != 0 ? null : str7, (i10 & IntBufferBatchMountItem.INSTRUCTION_UPDATE_LAYOUT) != 0 ? null : str8, (i10 & IntBufferBatchMountItem.INSTRUCTION_UPDATE_EVENT_EMITTER) != 0 ? null : str9, (i10 & IntBufferBatchMountItem.INSTRUCTION_UPDATE_PADDING) != 0 ? null : str10, (i10 & IntBufferBatchMountItem.INSTRUCTION_UPDATE_OVERFLOW_INSET) != 0 ? null : date, (i10 & RecyclerView.ItemAnimator.FLAG_MOVED) != 0 ? null : date2, (i10 & RecyclerView.ItemAnimator.FLAG_APPEARED_IN_PRE_LAYOUT) != 0 ? null : date3, (i10 & 8192) != 0 ? null : str11);
    }
}

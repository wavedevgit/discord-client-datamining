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
    public static final C0497a f39119o;

    /* renamed from: p  reason: collision with root package name */
    private static final Regex f39120p;

    /* renamed from: q  reason: collision with root package name */
    private static final Regex f39121q;

    /* renamed from: r  reason: collision with root package name */
    private static final Regex f39122r;

    /* renamed from: s  reason: collision with root package name */
    private static final Regex f39123s;

    /* renamed from: t  reason: collision with root package name */
    private static final Regex f39124t;

    /* renamed from: u  reason: collision with root package name */
    private static final Regex f39125u;

    /* renamed from: v  reason: collision with root package name */
    private static final Regex f39126v;

    /* renamed from: w  reason: collision with root package name */
    private static final Regex f39127w;

    /* renamed from: x  reason: collision with root package name */
    private static final Regex f39128x;

    /* renamed from: y  reason: collision with root package name */
    private static final Regex f39129y;

    /* renamed from: z  reason: collision with root package name */
    private static final Regex f39130z;

    /* renamed from: a  reason: collision with root package name */
    private final String f39131a;

    /* renamed from: b  reason: collision with root package name */
    private final String f39132b;

    /* renamed from: c  reason: collision with root package name */
    private final String f39133c;

    /* renamed from: d  reason: collision with root package name */
    private final String f39134d;

    /* renamed from: e  reason: collision with root package name */
    private final String f39135e;

    /* renamed from: f  reason: collision with root package name */
    private final String f39136f;

    /* renamed from: g  reason: collision with root package name */
    private final String f39137g;

    /* renamed from: h  reason: collision with root package name */
    private final String f39138h;

    /* renamed from: i  reason: collision with root package name */
    private final String f39139i;

    /* renamed from: j  reason: collision with root package name */
    private final String f39140j;

    /* renamed from: k  reason: collision with root package name */
    private final Date f39141k;

    /* renamed from: l  reason: collision with root package name */
    private final Date f39142l;

    /* renamed from: m  reason: collision with root package name */
    private final Date f39143m;

    /* renamed from: n  reason: collision with root package name */
    private final String f39144n;

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
            if (new Regex("^@\n\\u001e\r(ANSI |AAMVA)\\d{10}.+", kotlin.text.m.f36270s).i(StringsKt.k1(str).toString()) && e(str, a.f39126v) != null && e(str, a.f39130z) != null) {
                return true;
            }
            return false;
        }

        public final a d(String str) {
            if (str == null || !f(str)) {
                return null;
            }
            return new a(null, e(str, a.f39126v), e(str, a.B), e(str, a.f39130z), e(str, a.f39127w), e(str, a.f39122r), e(str, a.f39120p), e(str, a.f39121q), e(str, a.f39123s), e(str, a.A), b(e(str, a.f39128x)), b(e(str, a.f39125u)), b(e(str, a.f39124t)), e(str, a.f39129y), 1, null);
        }

        private C0497a() {
        }
    }

    static {
        C0497a c0497a = new C0497a(null);
        f39119o = c0497a;
        f39120p = c0497a.c("DAI");
        f39121q = c0497a.c("DAJ");
        f39122r = c0497a.c("DAG");
        f39123s = c0497a.c("DAK");
        f39124t = c0497a.c("DBB");
        f39125u = c0497a.c("DBA");
        f39126v = c0497a.c("DAC");
        f39127w = c0497a.c("DBC");
        f39128x = c0497a.c("DBD");
        f39129y = c0497a.c("DCG");
        f39130z = c0497a.c("DCS");
        A = c0497a.c("DAQ");
        B = c0497a.c("DAD");
    }

    public a(String str, String str2, String str3, String str4, String str5, String str6, String str7, String str8, String str9, String str10, Date date, Date date2, Date date3, String str11) {
        this.f39131a = str;
        this.f39132b = str2;
        this.f39133c = str3;
        this.f39134d = str4;
        this.f39135e = str5;
        this.f39136f = str6;
        this.f39137g = str7;
        this.f39138h = str8;
        this.f39139i = str9;
        this.f39140j = str10;
        this.f39141k = date;
        this.f39142l = date2;
        this.f39143m = date3;
        this.f39144n = str11;
    }

    public boolean equals(Object obj) {
        if (this == obj) {
            return true;
        }
        if (!(obj instanceof a)) {
            return false;
        }
        a aVar = (a) obj;
        if (Intrinsics.areEqual(this.f39131a, aVar.f39131a) && Intrinsics.areEqual(this.f39132b, aVar.f39132b) && Intrinsics.areEqual(this.f39133c, aVar.f39133c) && Intrinsics.areEqual(this.f39134d, aVar.f39134d) && Intrinsics.areEqual(this.f39135e, aVar.f39135e) && Intrinsics.areEqual(this.f39136f, aVar.f39136f) && Intrinsics.areEqual(this.f39137g, aVar.f39137g) && Intrinsics.areEqual(this.f39138h, aVar.f39138h) && Intrinsics.areEqual(this.f39139i, aVar.f39139i) && Intrinsics.areEqual(this.f39140j, aVar.f39140j) && Intrinsics.areEqual(this.f39141k, aVar.f39141k) && Intrinsics.areEqual(this.f39142l, aVar.f39142l) && Intrinsics.areEqual(this.f39143m, aVar.f39143m) && Intrinsics.areEqual(this.f39144n, aVar.f39144n)) {
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
        String str = this.f39131a;
        int i10 = 0;
        if (str == null) {
            hashCode = 0;
        } else {
            hashCode = str.hashCode();
        }
        int i11 = hashCode * 31;
        String str2 = this.f39132b;
        if (str2 == null) {
            hashCode2 = 0;
        } else {
            hashCode2 = str2.hashCode();
        }
        int i12 = (i11 + hashCode2) * 31;
        String str3 = this.f39133c;
        if (str3 == null) {
            hashCode3 = 0;
        } else {
            hashCode3 = str3.hashCode();
        }
        int i13 = (i12 + hashCode3) * 31;
        String str4 = this.f39134d;
        if (str4 == null) {
            hashCode4 = 0;
        } else {
            hashCode4 = str4.hashCode();
        }
        int i14 = (i13 + hashCode4) * 31;
        String str5 = this.f39135e;
        if (str5 == null) {
            hashCode5 = 0;
        } else {
            hashCode5 = str5.hashCode();
        }
        int i15 = (i14 + hashCode5) * 31;
        String str6 = this.f39136f;
        if (str6 == null) {
            hashCode6 = 0;
        } else {
            hashCode6 = str6.hashCode();
        }
        int i16 = (i15 + hashCode6) * 31;
        String str7 = this.f39137g;
        if (str7 == null) {
            hashCode7 = 0;
        } else {
            hashCode7 = str7.hashCode();
        }
        int i17 = (i16 + hashCode7) * 31;
        String str8 = this.f39138h;
        if (str8 == null) {
            hashCode8 = 0;
        } else {
            hashCode8 = str8.hashCode();
        }
        int i18 = (i17 + hashCode8) * 31;
        String str9 = this.f39139i;
        if (str9 == null) {
            hashCode9 = 0;
        } else {
            hashCode9 = str9.hashCode();
        }
        int i19 = (i18 + hashCode9) * 31;
        String str10 = this.f39140j;
        if (str10 == null) {
            hashCode10 = 0;
        } else {
            hashCode10 = str10.hashCode();
        }
        int i20 = (i19 + hashCode10) * 31;
        Date date = this.f39141k;
        if (date == null) {
            hashCode11 = 0;
        } else {
            hashCode11 = date.hashCode();
        }
        int i21 = (i20 + hashCode11) * 31;
        Date date2 = this.f39142l;
        if (date2 == null) {
            hashCode12 = 0;
        } else {
            hashCode12 = date2.hashCode();
        }
        int i22 = (i21 + hashCode12) * 31;
        Date date3 = this.f39143m;
        if (date3 == null) {
            hashCode13 = 0;
        } else {
            hashCode13 = date3.hashCode();
        }
        int i23 = (i22 + hashCode13) * 31;
        String str11 = this.f39144n;
        if (str11 != null) {
            i10 = str11.hashCode();
        }
        return i23 + i10;
    }

    public final Date n() {
        return this.f39143m;
    }

    public final Date o() {
        return this.f39142l;
    }

    public String toString() {
        String str = this.f39131a;
        String str2 = this.f39132b;
        String str3 = this.f39133c;
        String str4 = this.f39134d;
        String str5 = this.f39135e;
        String str6 = this.f39136f;
        String str7 = this.f39137g;
        String str8 = this.f39138h;
        String str9 = this.f39139i;
        String str10 = this.f39140j;
        Date date = this.f39141k;
        Date date2 = this.f39142l;
        Date date3 = this.f39143m;
        String str11 = this.f39144n;
        return "AamvaExtraction(idClass=" + str + ", nameFirst=" + str2 + ", nameMiddle=" + str3 + ", nameLast=" + str4 + ", sex=" + str5 + ", addressStreet1=" + str6 + ", addressCity=" + str7 + ", addressState=" + str8 + ", addressPostalCode=" + str9 + ", identificationNumber=" + str10 + ", issueDate=" + date + ", expirationDate=" + date2 + ", birthdate=" + date3 + ", issuingCountry=" + str11 + ")";
    }

    public /* synthetic */ a(String str, String str2, String str3, String str4, String str5, String str6, String str7, String str8, String str9, String str10, Date date, Date date2, Date date3, String str11, int i10, DefaultConstructorMarker defaultConstructorMarker) {
        this((i10 & 1) != 0 ? null : str, (i10 & 2) != 0 ? null : str2, (i10 & 4) != 0 ? null : str3, (i10 & 8) != 0 ? null : str4, (i10 & 16) != 0 ? null : str5, (i10 & 32) != 0 ? null : str6, (i10 & 64) != 0 ? null : str7, (i10 & IntBufferBatchMountItem.INSTRUCTION_UPDATE_LAYOUT) != 0 ? null : str8, (i10 & IntBufferBatchMountItem.INSTRUCTION_UPDATE_EVENT_EMITTER) != 0 ? null : str9, (i10 & IntBufferBatchMountItem.INSTRUCTION_UPDATE_PADDING) != 0 ? null : str10, (i10 & IntBufferBatchMountItem.INSTRUCTION_UPDATE_OVERFLOW_INSET) != 0 ? null : date, (i10 & RecyclerView.ItemAnimator.FLAG_MOVED) != 0 ? null : date2, (i10 & RecyclerView.ItemAnimator.FLAG_APPEARED_IN_PRE_LAYOUT) != 0 ? null : date3, (i10 & 8192) != 0 ? null : str11);
    }
}

package vn;

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
    public static final C0723a f52540o;

    /* renamed from: p  reason: collision with root package name */
    private static final Regex f52541p;

    /* renamed from: q  reason: collision with root package name */
    private static final Regex f52542q;

    /* renamed from: r  reason: collision with root package name */
    private static final Regex f52543r;

    /* renamed from: s  reason: collision with root package name */
    private static final Regex f52544s;

    /* renamed from: t  reason: collision with root package name */
    private static final Regex f52545t;

    /* renamed from: u  reason: collision with root package name */
    private static final Regex f52546u;

    /* renamed from: v  reason: collision with root package name */
    private static final Regex f52547v;

    /* renamed from: w  reason: collision with root package name */
    private static final Regex f52548w;

    /* renamed from: x  reason: collision with root package name */
    private static final Regex f52549x;

    /* renamed from: y  reason: collision with root package name */
    private static final Regex f52550y;

    /* renamed from: z  reason: collision with root package name */
    private static final Regex f52551z;

    /* renamed from: a  reason: collision with root package name */
    private final String f52552a;

    /* renamed from: b  reason: collision with root package name */
    private final String f52553b;

    /* renamed from: c  reason: collision with root package name */
    private final String f52554c;

    /* renamed from: d  reason: collision with root package name */
    private final String f52555d;

    /* renamed from: e  reason: collision with root package name */
    private final String f52556e;

    /* renamed from: f  reason: collision with root package name */
    private final String f52557f;

    /* renamed from: g  reason: collision with root package name */
    private final String f52558g;

    /* renamed from: h  reason: collision with root package name */
    private final String f52559h;

    /* renamed from: i  reason: collision with root package name */
    private final String f52560i;

    /* renamed from: j  reason: collision with root package name */
    private final String f52561j;

    /* renamed from: k  reason: collision with root package name */
    private final Date f52562k;

    /* renamed from: l  reason: collision with root package name */
    private final Date f52563l;

    /* renamed from: m  reason: collision with root package name */
    private final Date f52564m;

    /* renamed from: n  reason: collision with root package name */
    private final String f52565n;

    /* renamed from: vn.a$a  reason: collision with other inner class name */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class C0723a {
        public /* synthetic */ C0723a(DefaultConstructorMarker defaultConstructorMarker) {
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
            if (new Regex("^@\n\\u001e\r(ANSI |AAMVA)\\d{10}.+", kotlin.text.m.f34753s).i(StringsKt.k1(str).toString()) && e(str, a.f52547v) != null && e(str, a.f52551z) != null) {
                return true;
            }
            return false;
        }

        public final a d(String str) {
            if (str == null || !f(str)) {
                return null;
            }
            return new a(null, e(str, a.f52547v), e(str, a.B), e(str, a.f52551z), e(str, a.f52548w), e(str, a.f52543r), e(str, a.f52541p), e(str, a.f52542q), e(str, a.f52544s), e(str, a.A), b(e(str, a.f52549x)), b(e(str, a.f52546u)), b(e(str, a.f52545t)), e(str, a.f52550y), 1, null);
        }

        private C0723a() {
        }
    }

    static {
        C0723a c0723a = new C0723a(null);
        f52540o = c0723a;
        f52541p = c0723a.c("DAI");
        f52542q = c0723a.c("DAJ");
        f52543r = c0723a.c("DAG");
        f52544s = c0723a.c("DAK");
        f52545t = c0723a.c("DBB");
        f52546u = c0723a.c("DBA");
        f52547v = c0723a.c("DAC");
        f52548w = c0723a.c("DBC");
        f52549x = c0723a.c("DBD");
        f52550y = c0723a.c("DCG");
        f52551z = c0723a.c("DCS");
        A = c0723a.c("DAQ");
        B = c0723a.c("DAD");
    }

    public a(String str, String str2, String str3, String str4, String str5, String str6, String str7, String str8, String str9, String str10, Date date, Date date2, Date date3, String str11) {
        this.f52552a = str;
        this.f52553b = str2;
        this.f52554c = str3;
        this.f52555d = str4;
        this.f52556e = str5;
        this.f52557f = str6;
        this.f52558g = str7;
        this.f52559h = str8;
        this.f52560i = str9;
        this.f52561j = str10;
        this.f52562k = date;
        this.f52563l = date2;
        this.f52564m = date3;
        this.f52565n = str11;
    }

    public boolean equals(Object obj) {
        if (this == obj) {
            return true;
        }
        if (!(obj instanceof a)) {
            return false;
        }
        a aVar = (a) obj;
        if (Intrinsics.areEqual(this.f52552a, aVar.f52552a) && Intrinsics.areEqual(this.f52553b, aVar.f52553b) && Intrinsics.areEqual(this.f52554c, aVar.f52554c) && Intrinsics.areEqual(this.f52555d, aVar.f52555d) && Intrinsics.areEqual(this.f52556e, aVar.f52556e) && Intrinsics.areEqual(this.f52557f, aVar.f52557f) && Intrinsics.areEqual(this.f52558g, aVar.f52558g) && Intrinsics.areEqual(this.f52559h, aVar.f52559h) && Intrinsics.areEqual(this.f52560i, aVar.f52560i) && Intrinsics.areEqual(this.f52561j, aVar.f52561j) && Intrinsics.areEqual(this.f52562k, aVar.f52562k) && Intrinsics.areEqual(this.f52563l, aVar.f52563l) && Intrinsics.areEqual(this.f52564m, aVar.f52564m) && Intrinsics.areEqual(this.f52565n, aVar.f52565n)) {
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
        String str = this.f52552a;
        int i10 = 0;
        if (str == null) {
            hashCode = 0;
        } else {
            hashCode = str.hashCode();
        }
        int i11 = hashCode * 31;
        String str2 = this.f52553b;
        if (str2 == null) {
            hashCode2 = 0;
        } else {
            hashCode2 = str2.hashCode();
        }
        int i12 = (i11 + hashCode2) * 31;
        String str3 = this.f52554c;
        if (str3 == null) {
            hashCode3 = 0;
        } else {
            hashCode3 = str3.hashCode();
        }
        int i13 = (i12 + hashCode3) * 31;
        String str4 = this.f52555d;
        if (str4 == null) {
            hashCode4 = 0;
        } else {
            hashCode4 = str4.hashCode();
        }
        int i14 = (i13 + hashCode4) * 31;
        String str5 = this.f52556e;
        if (str5 == null) {
            hashCode5 = 0;
        } else {
            hashCode5 = str5.hashCode();
        }
        int i15 = (i14 + hashCode5) * 31;
        String str6 = this.f52557f;
        if (str6 == null) {
            hashCode6 = 0;
        } else {
            hashCode6 = str6.hashCode();
        }
        int i16 = (i15 + hashCode6) * 31;
        String str7 = this.f52558g;
        if (str7 == null) {
            hashCode7 = 0;
        } else {
            hashCode7 = str7.hashCode();
        }
        int i17 = (i16 + hashCode7) * 31;
        String str8 = this.f52559h;
        if (str8 == null) {
            hashCode8 = 0;
        } else {
            hashCode8 = str8.hashCode();
        }
        int i18 = (i17 + hashCode8) * 31;
        String str9 = this.f52560i;
        if (str9 == null) {
            hashCode9 = 0;
        } else {
            hashCode9 = str9.hashCode();
        }
        int i19 = (i18 + hashCode9) * 31;
        String str10 = this.f52561j;
        if (str10 == null) {
            hashCode10 = 0;
        } else {
            hashCode10 = str10.hashCode();
        }
        int i20 = (i19 + hashCode10) * 31;
        Date date = this.f52562k;
        if (date == null) {
            hashCode11 = 0;
        } else {
            hashCode11 = date.hashCode();
        }
        int i21 = (i20 + hashCode11) * 31;
        Date date2 = this.f52563l;
        if (date2 == null) {
            hashCode12 = 0;
        } else {
            hashCode12 = date2.hashCode();
        }
        int i22 = (i21 + hashCode12) * 31;
        Date date3 = this.f52564m;
        if (date3 == null) {
            hashCode13 = 0;
        } else {
            hashCode13 = date3.hashCode();
        }
        int i23 = (i22 + hashCode13) * 31;
        String str11 = this.f52565n;
        if (str11 != null) {
            i10 = str11.hashCode();
        }
        return i23 + i10;
    }

    public final Date n() {
        return this.f52564m;
    }

    public final Date o() {
        return this.f52563l;
    }

    public String toString() {
        String str = this.f52552a;
        String str2 = this.f52553b;
        String str3 = this.f52554c;
        String str4 = this.f52555d;
        String str5 = this.f52556e;
        String str6 = this.f52557f;
        String str7 = this.f52558g;
        String str8 = this.f52559h;
        String str9 = this.f52560i;
        String str10 = this.f52561j;
        Date date = this.f52562k;
        Date date2 = this.f52563l;
        Date date3 = this.f52564m;
        String str11 = this.f52565n;
        return "AamvaExtraction(idClass=" + str + ", nameFirst=" + str2 + ", nameMiddle=" + str3 + ", nameLast=" + str4 + ", sex=" + str5 + ", addressStreet1=" + str6 + ", addressCity=" + str7 + ", addressState=" + str8 + ", addressPostalCode=" + str9 + ", identificationNumber=" + str10 + ", issueDate=" + date + ", expirationDate=" + date2 + ", birthdate=" + date3 + ", issuingCountry=" + str11 + ")";
    }

    public /* synthetic */ a(String str, String str2, String str3, String str4, String str5, String str6, String str7, String str8, String str9, String str10, Date date, Date date2, Date date3, String str11, int i10, DefaultConstructorMarker defaultConstructorMarker) {
        this((i10 & 1) != 0 ? null : str, (i10 & 2) != 0 ? null : str2, (i10 & 4) != 0 ? null : str3, (i10 & 8) != 0 ? null : str4, (i10 & 16) != 0 ? null : str5, (i10 & 32) != 0 ? null : str6, (i10 & 64) != 0 ? null : str7, (i10 & IntBufferBatchMountItem.INSTRUCTION_UPDATE_LAYOUT) != 0 ? null : str8, (i10 & IntBufferBatchMountItem.INSTRUCTION_UPDATE_EVENT_EMITTER) != 0 ? null : str9, (i10 & IntBufferBatchMountItem.INSTRUCTION_UPDATE_PADDING) != 0 ? null : str10, (i10 & IntBufferBatchMountItem.INSTRUCTION_UPDATE_OVERFLOW_INSET) != 0 ? null : date, (i10 & RecyclerView.ItemAnimator.FLAG_MOVED) != 0 ? null : date2, (i10 & RecyclerView.ItemAnimator.FLAG_APPEARED_IN_PRE_LAYOUT) != 0 ? null : date3, (i10 & 8192) != 0 ? null : str11);
    }
}

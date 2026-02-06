package un;

import androidx.recyclerview.widget.RecyclerView;
import com.facebook.react.fabric.mounting.mountitems.IntBufferBatchMountItem;
import com.facebook.react.views.textinput.ReactEditTextInputConnectionWrapper;
import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.util.Date;
import java.util.List;
import java.util.Locale;
import kotlin.collections.CollectionsKt;
import kotlin.jvm.functions.Function1;
import kotlin.jvm.internal.DefaultConstructorMarker;
import kotlin.jvm.internal.Intrinsics;
import kotlin.text.MatchResult;
import kotlin.text.Regex;
import kotlin.text.StringsKt;
import un.p0;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class p0 {

    /* renamed from: p  reason: collision with root package name */
    public static final a f51761p = new a(null);

    /* renamed from: q  reason: collision with root package name */
    private static final Regex f51762q = new Regex("([ACI][A-Z0-9<]{1})([A-Z]{3})([A-Z0-9<]{9})([0-9]{1})([A-Z0-9<]{15})");

    /* renamed from: r  reason: collision with root package name */
    private static final Regex f51763r = new Regex("([0-9]{6})([0-9]{1})([MFX<]{1})([0-9]{6})([0-9]{1})([A-Z]{3})([A-Z0-9<]{11})([0-9]{1})");

    /* renamed from: s  reason: collision with root package name */
    private static final Regex f51764s = new Regex("([A-Z0-9<]{30})");

    /* renamed from: t  reason: collision with root package name */
    private static final Regex f51765t = new Regex("([ACI][A-Z0-9<]{1})([A-Z]{3})([A-Z0-9<]{31})");

    /* renamed from: u  reason: collision with root package name */
    private static final Regex f51766u = new Regex("([A-Z0-9<]{9})([0-9]{1})([A-Z]{3})([0-9]{6})([0-9]{1})([MFX<]{1})([0-9]{6})([0-9]{1})([A-Z0-9<]{7})([0-9]{1})");

    /* renamed from: v  reason: collision with root package name */
    private static final Regex f51767v = new Regex("(P[A-Z0-9<]{1})([A-Z]{3})([A-Z0-9<]+?<<+)");

    /* renamed from: w  reason: collision with root package name */
    private static final Regex f51768w = new Regex("(P[A-Z0-9<]{1})([A-Z]{3})([A-Z0-9<]+?)<<([A-Z0-9<]+<<+)");

    /* renamed from: x  reason: collision with root package name */
    private static final Regex f51769x = new Regex("([A-Z0-9<]{9})([0-9]{1})([A-Z]{3})([0-9]{6})([0-9]{1})([MFX<]{1})([0-9]{6})([0-9]{1})?([A-Z0-9<]{14})?([0-9]{1})?([0-9]{1})?");

    /* renamed from: a  reason: collision with root package name */
    private final String f51770a;

    /* renamed from: b  reason: collision with root package name */
    private final String f51771b;

    /* renamed from: c  reason: collision with root package name */
    private final String f51772c;

    /* renamed from: d  reason: collision with root package name */
    private final String f51773d;

    /* renamed from: e  reason: collision with root package name */
    private final String f51774e;

    /* renamed from: f  reason: collision with root package name */
    private final String f51775f;

    /* renamed from: g  reason: collision with root package name */
    private final String f51776g;

    /* renamed from: h  reason: collision with root package name */
    private final String f51777h;

    /* renamed from: i  reason: collision with root package name */
    private final String f51778i;

    /* renamed from: j  reason: collision with root package name */
    private final String f51779j;

    /* renamed from: k  reason: collision with root package name */
    private final String f51780k;

    /* renamed from: l  reason: collision with root package name */
    private final Date f51781l;

    /* renamed from: m  reason: collision with root package name */
    private final Date f51782m;

    /* renamed from: n  reason: collision with root package name */
    private final Date f51783n;

    /* renamed from: o  reason: collision with root package name */
    private final String f51784o;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class a {
        public /* synthetic */ a(DefaultConstructorMarker defaultConstructorMarker) {
            this();
        }

        private final Date c(String str) {
            if (str == null) {
                return null;
            }
            try {
                return new SimpleDateFormat("yyMMdd", Locale.US).parse(new Regex("G").replace(new Regex("S").replace(new Regex("O").replace(new Regex("D").replace(new Regex("L").replace(new Regex("I").replace(str, "1"), "1"), "0"), "0"), "5"), "6"));
            } catch (ParseException unused) {
                return null;
            }
        }

        private final String d(String str) {
            if (str == null) {
                return null;
            }
            return StringsKt.k1(StringsKt.J(str, "<", " ", false, 4, null)).toString();
        }

        private final p0 f(String str) {
            MatchResult d10;
            MatchResult d11;
            int i10;
            boolean z10;
            MatchResult d12 = Regex.d(p0.f51762q, str, 0, 2, null);
            if (d12 == null || (d10 = Regex.d(p0.f51763r, str, 0, 2, null)) == null || (d11 = Regex.d(p0.f51764s, StringsKt.J(StringsKt.J(str, d12.getValue(), "", false, 4, null), d10.getValue(), "", false, 4, null), 0, 2, null)) == null) {
                return null;
            }
            String obj = StringsKt.k1(d11.getValue()).toString();
            int length = obj.length() - 1;
            int i11 = 0;
            boolean z11 = false;
            while (i11 <= length) {
                if (!z11) {
                    i10 = i11;
                } else {
                    i10 = length;
                }
                if (obj.charAt(i10) == '<') {
                    z10 = true;
                } else {
                    z10 = false;
                }
                if (!z11) {
                    if (!z10) {
                        z11 = true;
                    } else {
                        i11++;
                    }
                } else if (!z10) {
                    break;
                } else {
                    length--;
                }
            }
            List split$default = StringsKt.split$default(obj.subSequence(i11, length + 1).toString(), new String[]{"<<"}, false, 0, 6, null);
            return new p0(CollectionsKt.x0(CollectionsKt.o(d12, d10, d11), ReactEditTextInputConnectionWrapper.NEWLINE_RAW_VALUE, null, null, 0, null, new Function1() { // from class: un.o0
                @Override // kotlin.jvm.functions.Function1
                public final Object invoke(Object obj2) {
                    CharSequence g10;
                    g10 = p0.a.g((MatchResult) obj2);
                    return g10;
                }
            }, 30, null), null, d((String) CollectionsKt.q0(split$default, 1)), null, d((String) CollectionsKt.q0(split$default, 0)), (String) d10.b().get(3), null, null, null, null, (String) d12.b().get(3), null, c((String) d10.b().get(4)), c((String) d10.b().get(1)), (String) d12.b().get(2), 3018, null);
        }

        /* JADX INFO: Access modifiers changed from: private */
        public static final CharSequence g(MatchResult it) {
            Intrinsics.checkNotNullParameter(it, "it");
            return it.getValue();
        }

        private final p0 h(String str) {
            MatchResult d10;
            MatchResult d11 = Regex.d(p0.f51768w, str, 0, 2, null);
            if (d11 == null || (d10 = Regex.d(p0.f51769x, str, 0, 2, null)) == null) {
                return null;
            }
            return new p0(CollectionsKt.x0(CollectionsKt.o(d11, d10), ReactEditTextInputConnectionWrapper.NEWLINE_RAW_VALUE, null, null, 0, null, new Function1() { // from class: un.n0
                @Override // kotlin.jvm.functions.Function1
                public final Object invoke(Object obj) {
                    CharSequence i10;
                    i10 = p0.a.i((MatchResult) obj);
                    return i10;
                }
            }, 30, null), null, d((String) d11.b().get(4)), null, d((String) d11.b().get(3)), (String) d10.b().get(6), null, null, null, null, (String) d10.b().get(1), null, c((String) d10.b().get(7)), c((String) d10.b().get(4)), (String) d11.b().get(2), 3018, null);
        }

        /* JADX INFO: Access modifiers changed from: private */
        public static final CharSequence i(MatchResult it) {
            Intrinsics.checkNotNullParameter(it, "it");
            return it.getValue();
        }

        public final p0 e(String str) {
            if (str == null) {
                return null;
            }
            String replace = new Regex("([\r\t ])").replace(str, "");
            Locale locale = Locale.getDefault();
            Intrinsics.checkNotNullExpressionValue(locale, "getDefault(...)");
            String upperCase = replace.toUpperCase(locale);
            Intrinsics.checkNotNullExpressionValue(upperCase, "toUpperCase(...)");
            p0 f10 = f(upperCase);
            if (f10 == null) {
                return h(upperCase);
            }
            return f10;
        }

        private a() {
        }
    }

    public p0(String rawText, String str, String str2, String str3, String str4, String str5, String str6, String str7, String str8, String str9, String str10, Date date, Date date2, Date date3, String str11) {
        Intrinsics.checkNotNullParameter(rawText, "rawText");
        this.f51770a = rawText;
        this.f51771b = str;
        this.f51772c = str2;
        this.f51773d = str3;
        this.f51774e = str4;
        this.f51775f = str5;
        this.f51776g = str6;
        this.f51777h = str7;
        this.f51778i = str8;
        this.f51779j = str9;
        this.f51780k = str10;
        this.f51781l = date;
        this.f51782m = date2;
        this.f51783n = date3;
        this.f51784o = str11;
    }

    public boolean equals(Object obj) {
        if (this == obj) {
            return true;
        }
        if (!(obj instanceof p0)) {
            return false;
        }
        p0 p0Var = (p0) obj;
        if (Intrinsics.areEqual(this.f51770a, p0Var.f51770a) && Intrinsics.areEqual(this.f51771b, p0Var.f51771b) && Intrinsics.areEqual(this.f51772c, p0Var.f51772c) && Intrinsics.areEqual(this.f51773d, p0Var.f51773d) && Intrinsics.areEqual(this.f51774e, p0Var.f51774e) && Intrinsics.areEqual(this.f51775f, p0Var.f51775f) && Intrinsics.areEqual(this.f51776g, p0Var.f51776g) && Intrinsics.areEqual(this.f51777h, p0Var.f51777h) && Intrinsics.areEqual(this.f51778i, p0Var.f51778i) && Intrinsics.areEqual(this.f51779j, p0Var.f51779j) && Intrinsics.areEqual(this.f51780k, p0Var.f51780k) && Intrinsics.areEqual(this.f51781l, p0Var.f51781l) && Intrinsics.areEqual(this.f51782m, p0Var.f51782m) && Intrinsics.areEqual(this.f51783n, p0Var.f51783n) && Intrinsics.areEqual(this.f51784o, p0Var.f51784o)) {
            return true;
        }
        return false;
    }

    public final Date f() {
        return this.f51783n;
    }

    public final Date g() {
        return this.f51782m;
    }

    public final String h() {
        return this.f51780k;
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
        int hashCode14 = this.f51770a.hashCode() * 31;
        String str = this.f51771b;
        int i10 = 0;
        if (str == null) {
            hashCode = 0;
        } else {
            hashCode = str.hashCode();
        }
        int i11 = (hashCode14 + hashCode) * 31;
        String str2 = this.f51772c;
        if (str2 == null) {
            hashCode2 = 0;
        } else {
            hashCode2 = str2.hashCode();
        }
        int i12 = (i11 + hashCode2) * 31;
        String str3 = this.f51773d;
        if (str3 == null) {
            hashCode3 = 0;
        } else {
            hashCode3 = str3.hashCode();
        }
        int i13 = (i12 + hashCode3) * 31;
        String str4 = this.f51774e;
        if (str4 == null) {
            hashCode4 = 0;
        } else {
            hashCode4 = str4.hashCode();
        }
        int i14 = (i13 + hashCode4) * 31;
        String str5 = this.f51775f;
        if (str5 == null) {
            hashCode5 = 0;
        } else {
            hashCode5 = str5.hashCode();
        }
        int i15 = (i14 + hashCode5) * 31;
        String str6 = this.f51776g;
        if (str6 == null) {
            hashCode6 = 0;
        } else {
            hashCode6 = str6.hashCode();
        }
        int i16 = (i15 + hashCode6) * 31;
        String str7 = this.f51777h;
        if (str7 == null) {
            hashCode7 = 0;
        } else {
            hashCode7 = str7.hashCode();
        }
        int i17 = (i16 + hashCode7) * 31;
        String str8 = this.f51778i;
        if (str8 == null) {
            hashCode8 = 0;
        } else {
            hashCode8 = str8.hashCode();
        }
        int i18 = (i17 + hashCode8) * 31;
        String str9 = this.f51779j;
        if (str9 == null) {
            hashCode9 = 0;
        } else {
            hashCode9 = str9.hashCode();
        }
        int i19 = (i18 + hashCode9) * 31;
        String str10 = this.f51780k;
        if (str10 == null) {
            hashCode10 = 0;
        } else {
            hashCode10 = str10.hashCode();
        }
        int i20 = (i19 + hashCode10) * 31;
        Date date = this.f51781l;
        if (date == null) {
            hashCode11 = 0;
        } else {
            hashCode11 = date.hashCode();
        }
        int i21 = (i20 + hashCode11) * 31;
        Date date2 = this.f51782m;
        if (date2 == null) {
            hashCode12 = 0;
        } else {
            hashCode12 = date2.hashCode();
        }
        int i22 = (i21 + hashCode12) * 31;
        Date date3 = this.f51783n;
        if (date3 == null) {
            hashCode13 = 0;
        } else {
            hashCode13 = date3.hashCode();
        }
        int i23 = (i22 + hashCode13) * 31;
        String str11 = this.f51784o;
        if (str11 != null) {
            i10 = str11.hashCode();
        }
        return i23 + i10;
    }

    public final String i() {
        return this.f51770a;
    }

    public String toString() {
        String str = this.f51770a;
        String str2 = this.f51771b;
        String str3 = this.f51772c;
        String str4 = this.f51773d;
        String str5 = this.f51774e;
        String str6 = this.f51775f;
        String str7 = this.f51776g;
        String str8 = this.f51777h;
        String str9 = this.f51778i;
        String str10 = this.f51779j;
        String str11 = this.f51780k;
        Date date = this.f51781l;
        Date date2 = this.f51782m;
        Date date3 = this.f51783n;
        String str12 = this.f51784o;
        return "MrzExtraction(rawText=" + str + ", idClass=" + str2 + ", nameFirst=" + str3 + ", nameMiddle=" + str4 + ", nameLast=" + str5 + ", sex=" + str6 + ", addressStreet1=" + str7 + ", addressCity=" + str8 + ", addressState=" + str9 + ", addressPostalCode=" + str10 + ", identificationNumber=" + str11 + ", issueDate=" + date + ", expirationDate=" + date2 + ", birthdate=" + date3 + ", issuingCountry=" + str12 + ")";
    }

    public /* synthetic */ p0(String str, String str2, String str3, String str4, String str5, String str6, String str7, String str8, String str9, String str10, String str11, Date date, Date date2, Date date3, String str12, int i10, DefaultConstructorMarker defaultConstructorMarker) {
        this(str, (i10 & 2) != 0 ? null : str2, (i10 & 4) != 0 ? null : str3, (i10 & 8) != 0 ? null : str4, (i10 & 16) != 0 ? null : str5, (i10 & 32) != 0 ? null : str6, (i10 & 64) != 0 ? null : str7, (i10 & IntBufferBatchMountItem.INSTRUCTION_UPDATE_LAYOUT) != 0 ? null : str8, (i10 & IntBufferBatchMountItem.INSTRUCTION_UPDATE_EVENT_EMITTER) != 0 ? null : str9, (i10 & IntBufferBatchMountItem.INSTRUCTION_UPDATE_PADDING) != 0 ? null : str10, (i10 & IntBufferBatchMountItem.INSTRUCTION_UPDATE_OVERFLOW_INSET) != 0 ? null : str11, (i10 & RecyclerView.ItemAnimator.FLAG_MOVED) != 0 ? null : date, (i10 & RecyclerView.ItemAnimator.FLAG_APPEARED_IN_PRE_LAYOUT) != 0 ? null : date2, (i10 & 8192) != 0 ? null : date3, (i10 & 16384) != 0 ? null : str12);
    }
}

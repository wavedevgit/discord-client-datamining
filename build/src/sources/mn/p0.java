package mn;

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
import mn.p0;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class p0 {

    /* renamed from: p  reason: collision with root package name */
    public static final a f39248p = new a(null);

    /* renamed from: q  reason: collision with root package name */
    private static final Regex f39249q = new Regex("([ACI][A-Z0-9<]{1})([A-Z]{3})([A-Z0-9<]{9})([0-9]{1})([A-Z0-9<]{15})");

    /* renamed from: r  reason: collision with root package name */
    private static final Regex f39250r = new Regex("([0-9]{6})([0-9]{1})([MFX<]{1})([0-9]{6})([0-9]{1})([A-Z]{3})([A-Z0-9<]{11})([0-9]{1})");

    /* renamed from: s  reason: collision with root package name */
    private static final Regex f39251s = new Regex("([A-Z0-9<]{30})");

    /* renamed from: t  reason: collision with root package name */
    private static final Regex f39252t = new Regex("([ACI][A-Z0-9<]{1})([A-Z]{3})([A-Z0-9<]{31})");

    /* renamed from: u  reason: collision with root package name */
    private static final Regex f39253u = new Regex("([A-Z0-9<]{9})([0-9]{1})([A-Z]{3})([0-9]{6})([0-9]{1})([MFX<]{1})([0-9]{6})([0-9]{1})([A-Z0-9<]{7})([0-9]{1})");

    /* renamed from: v  reason: collision with root package name */
    private static final Regex f39254v = new Regex("(P[A-Z0-9<]{1})([A-Z]{3})([A-Z0-9<]+?<<+)");

    /* renamed from: w  reason: collision with root package name */
    private static final Regex f39255w = new Regex("(P[A-Z0-9<]{1})([A-Z]{3})([A-Z0-9<]+?)<<([A-Z0-9<]+<<+)");

    /* renamed from: x  reason: collision with root package name */
    private static final Regex f39256x = new Regex("([A-Z0-9<]{9})([0-9]{1})([A-Z]{3})([0-9]{6})([0-9]{1})([MFX<]{1})([0-9]{6})([0-9]{1})?([A-Z0-9<]{14})?([0-9]{1})?([0-9]{1})?");

    /* renamed from: a  reason: collision with root package name */
    private final String f39257a;

    /* renamed from: b  reason: collision with root package name */
    private final String f39258b;

    /* renamed from: c  reason: collision with root package name */
    private final String f39259c;

    /* renamed from: d  reason: collision with root package name */
    private final String f39260d;

    /* renamed from: e  reason: collision with root package name */
    private final String f39261e;

    /* renamed from: f  reason: collision with root package name */
    private final String f39262f;

    /* renamed from: g  reason: collision with root package name */
    private final String f39263g;

    /* renamed from: h  reason: collision with root package name */
    private final String f39264h;

    /* renamed from: i  reason: collision with root package name */
    private final String f39265i;

    /* renamed from: j  reason: collision with root package name */
    private final String f39266j;

    /* renamed from: k  reason: collision with root package name */
    private final String f39267k;

    /* renamed from: l  reason: collision with root package name */
    private final Date f39268l;

    /* renamed from: m  reason: collision with root package name */
    private final Date f39269m;

    /* renamed from: n  reason: collision with root package name */
    private final Date f39270n;

    /* renamed from: o  reason: collision with root package name */
    private final String f39271o;

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
            MatchResult d12 = Regex.d(p0.f39249q, str, 0, 2, null);
            if (d12 == null || (d10 = Regex.d(p0.f39250r, str, 0, 2, null)) == null || (d11 = Regex.d(p0.f39251s, StringsKt.J(StringsKt.J(str, d12.getValue(), "", false, 4, null), d10.getValue(), "", false, 4, null), 0, 2, null)) == null) {
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
            return new p0(CollectionsKt.x0(CollectionsKt.o(d12, d10, d11), ReactEditTextInputConnectionWrapper.NEWLINE_RAW_VALUE, null, null, 0, null, new Function1() { // from class: mn.o0
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
            MatchResult d11 = Regex.d(p0.f39255w, str, 0, 2, null);
            if (d11 == null || (d10 = Regex.d(p0.f39256x, str, 0, 2, null)) == null) {
                return null;
            }
            return new p0(CollectionsKt.x0(CollectionsKt.o(d11, d10), ReactEditTextInputConnectionWrapper.NEWLINE_RAW_VALUE, null, null, 0, null, new Function1() { // from class: mn.n0
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
        this.f39257a = rawText;
        this.f39258b = str;
        this.f39259c = str2;
        this.f39260d = str3;
        this.f39261e = str4;
        this.f39262f = str5;
        this.f39263g = str6;
        this.f39264h = str7;
        this.f39265i = str8;
        this.f39266j = str9;
        this.f39267k = str10;
        this.f39268l = date;
        this.f39269m = date2;
        this.f39270n = date3;
        this.f39271o = str11;
    }

    public boolean equals(Object obj) {
        if (this == obj) {
            return true;
        }
        if (!(obj instanceof p0)) {
            return false;
        }
        p0 p0Var = (p0) obj;
        if (Intrinsics.areEqual(this.f39257a, p0Var.f39257a) && Intrinsics.areEqual(this.f39258b, p0Var.f39258b) && Intrinsics.areEqual(this.f39259c, p0Var.f39259c) && Intrinsics.areEqual(this.f39260d, p0Var.f39260d) && Intrinsics.areEqual(this.f39261e, p0Var.f39261e) && Intrinsics.areEqual(this.f39262f, p0Var.f39262f) && Intrinsics.areEqual(this.f39263g, p0Var.f39263g) && Intrinsics.areEqual(this.f39264h, p0Var.f39264h) && Intrinsics.areEqual(this.f39265i, p0Var.f39265i) && Intrinsics.areEqual(this.f39266j, p0Var.f39266j) && Intrinsics.areEqual(this.f39267k, p0Var.f39267k) && Intrinsics.areEqual(this.f39268l, p0Var.f39268l) && Intrinsics.areEqual(this.f39269m, p0Var.f39269m) && Intrinsics.areEqual(this.f39270n, p0Var.f39270n) && Intrinsics.areEqual(this.f39271o, p0Var.f39271o)) {
            return true;
        }
        return false;
    }

    public final Date f() {
        return this.f39270n;
    }

    public final Date g() {
        return this.f39269m;
    }

    public final String h() {
        return this.f39267k;
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
        int hashCode14 = this.f39257a.hashCode() * 31;
        String str = this.f39258b;
        int i10 = 0;
        if (str == null) {
            hashCode = 0;
        } else {
            hashCode = str.hashCode();
        }
        int i11 = (hashCode14 + hashCode) * 31;
        String str2 = this.f39259c;
        if (str2 == null) {
            hashCode2 = 0;
        } else {
            hashCode2 = str2.hashCode();
        }
        int i12 = (i11 + hashCode2) * 31;
        String str3 = this.f39260d;
        if (str3 == null) {
            hashCode3 = 0;
        } else {
            hashCode3 = str3.hashCode();
        }
        int i13 = (i12 + hashCode3) * 31;
        String str4 = this.f39261e;
        if (str4 == null) {
            hashCode4 = 0;
        } else {
            hashCode4 = str4.hashCode();
        }
        int i14 = (i13 + hashCode4) * 31;
        String str5 = this.f39262f;
        if (str5 == null) {
            hashCode5 = 0;
        } else {
            hashCode5 = str5.hashCode();
        }
        int i15 = (i14 + hashCode5) * 31;
        String str6 = this.f39263g;
        if (str6 == null) {
            hashCode6 = 0;
        } else {
            hashCode6 = str6.hashCode();
        }
        int i16 = (i15 + hashCode6) * 31;
        String str7 = this.f39264h;
        if (str7 == null) {
            hashCode7 = 0;
        } else {
            hashCode7 = str7.hashCode();
        }
        int i17 = (i16 + hashCode7) * 31;
        String str8 = this.f39265i;
        if (str8 == null) {
            hashCode8 = 0;
        } else {
            hashCode8 = str8.hashCode();
        }
        int i18 = (i17 + hashCode8) * 31;
        String str9 = this.f39266j;
        if (str9 == null) {
            hashCode9 = 0;
        } else {
            hashCode9 = str9.hashCode();
        }
        int i19 = (i18 + hashCode9) * 31;
        String str10 = this.f39267k;
        if (str10 == null) {
            hashCode10 = 0;
        } else {
            hashCode10 = str10.hashCode();
        }
        int i20 = (i19 + hashCode10) * 31;
        Date date = this.f39268l;
        if (date == null) {
            hashCode11 = 0;
        } else {
            hashCode11 = date.hashCode();
        }
        int i21 = (i20 + hashCode11) * 31;
        Date date2 = this.f39269m;
        if (date2 == null) {
            hashCode12 = 0;
        } else {
            hashCode12 = date2.hashCode();
        }
        int i22 = (i21 + hashCode12) * 31;
        Date date3 = this.f39270n;
        if (date3 == null) {
            hashCode13 = 0;
        } else {
            hashCode13 = date3.hashCode();
        }
        int i23 = (i22 + hashCode13) * 31;
        String str11 = this.f39271o;
        if (str11 != null) {
            i10 = str11.hashCode();
        }
        return i23 + i10;
    }

    public final String i() {
        return this.f39257a;
    }

    public String toString() {
        String str = this.f39257a;
        String str2 = this.f39258b;
        String str3 = this.f39259c;
        String str4 = this.f39260d;
        String str5 = this.f39261e;
        String str6 = this.f39262f;
        String str7 = this.f39263g;
        String str8 = this.f39264h;
        String str9 = this.f39265i;
        String str10 = this.f39266j;
        String str11 = this.f39267k;
        Date date = this.f39268l;
        Date date2 = this.f39269m;
        Date date3 = this.f39270n;
        String str12 = this.f39271o;
        return "MrzExtraction(rawText=" + str + ", idClass=" + str2 + ", nameFirst=" + str3 + ", nameMiddle=" + str4 + ", nameLast=" + str5 + ", sex=" + str6 + ", addressStreet1=" + str7 + ", addressCity=" + str8 + ", addressState=" + str9 + ", addressPostalCode=" + str10 + ", identificationNumber=" + str11 + ", issueDate=" + date + ", expirationDate=" + date2 + ", birthdate=" + date3 + ", issuingCountry=" + str12 + ")";
    }

    public /* synthetic */ p0(String str, String str2, String str3, String str4, String str5, String str6, String str7, String str8, String str9, String str10, String str11, Date date, Date date2, Date date3, String str12, int i10, DefaultConstructorMarker defaultConstructorMarker) {
        this(str, (i10 & 2) != 0 ? null : str2, (i10 & 4) != 0 ? null : str3, (i10 & 8) != 0 ? null : str4, (i10 & 16) != 0 ? null : str5, (i10 & 32) != 0 ? null : str6, (i10 & 64) != 0 ? null : str7, (i10 & IntBufferBatchMountItem.INSTRUCTION_UPDATE_LAYOUT) != 0 ? null : str8, (i10 & IntBufferBatchMountItem.INSTRUCTION_UPDATE_EVENT_EMITTER) != 0 ? null : str9, (i10 & IntBufferBatchMountItem.INSTRUCTION_UPDATE_PADDING) != 0 ? null : str10, (i10 & IntBufferBatchMountItem.INSTRUCTION_UPDATE_OVERFLOW_INSET) != 0 ? null : str11, (i10 & RecyclerView.ItemAnimator.FLAG_MOVED) != 0 ? null : date, (i10 & RecyclerView.ItemAnimator.FLAG_APPEARED_IN_PRE_LAYOUT) != 0 ? null : date2, (i10 & 8192) != 0 ? null : date3, (i10 & 16384) != 0 ? null : str12);
    }
}

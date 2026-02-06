package gq;

import java.util.Locale;
import kotlin.jvm.internal.DefaultConstructorMarker;
import kotlin.jvm.internal.Intrinsics;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class b {

    /* renamed from: a  reason: collision with root package name */
    private final String f25506a;

    /* renamed from: b  reason: collision with root package name */
    private final String f25507b;

    /* renamed from: c  reason: collision with root package name */
    private final String f25508c;

    /* renamed from: d  reason: collision with root package name */
    private final String f25509d;

    public b(String prefix, String countryCode, String str, String defaultFlagEmoji) {
        Intrinsics.checkNotNullParameter(prefix, "prefix");
        Intrinsics.checkNotNullParameter(countryCode, "countryCode");
        Intrinsics.checkNotNullParameter(defaultFlagEmoji, "defaultFlagEmoji");
        this.f25506a = prefix;
        this.f25507b = countryCode;
        this.f25508c = str;
        this.f25509d = defaultFlagEmoji;
    }

    private final String b() {
        String displayCountry = new Locale("", this.f25507b).getDisplayCountry(Locale.getDefault());
        Intrinsics.checkNotNullExpressionValue(displayCountry, "getDisplayCountry(...)");
        return displayCountry;
    }

    private final String c() {
        if (this.f25507b.length() != 2) {
            return this.f25509d;
        }
        String str = this.f25507b;
        Locale locale = Locale.getDefault();
        Intrinsics.checkNotNullExpressionValue(locale, "getDefault(...)");
        String upperCase = str.toUpperCase(locale);
        Intrinsics.checkNotNullExpressionValue(upperCase, "toUpperCase(...)");
        char[] chars = Character.toChars(Character.codePointAt(upperCase, 0) - (-127397));
        Intrinsics.checkNotNullExpressionValue(chars, "toChars(...)");
        char[] chars2 = Character.toChars(Character.codePointAt(upperCase, 1) - (-127397));
        Intrinsics.checkNotNullExpressionValue(chars2, "toChars(...)");
        return new String(kotlin.collections.i.B(chars, chars2));
    }

    public final String a() {
        return this.f25507b;
    }

    public final String d() {
        String c10 = c();
        String b10 = b();
        String str = this.f25506a;
        return c10 + " " + b10 + " " + str;
    }

    public final String e() {
        return this.f25506a;
    }

    public boolean equals(Object obj) {
        if (this == obj) {
            return true;
        }
        if (!(obj instanceof b)) {
            return false;
        }
        b bVar = (b) obj;
        if (Intrinsics.areEqual(this.f25506a, bVar.f25506a) && Intrinsics.areEqual(this.f25507b, bVar.f25507b) && Intrinsics.areEqual(this.f25508c, bVar.f25508c) && Intrinsics.areEqual(this.f25509d, bVar.f25509d)) {
            return true;
        }
        return false;
    }

    public int hashCode() {
        int hashCode;
        int hashCode2 = ((this.f25506a.hashCode() * 31) + this.f25507b.hashCode()) * 31;
        String str = this.f25508c;
        if (str == null) {
            hashCode = 0;
        } else {
            hashCode = str.hashCode();
        }
        return ((hashCode2 + hashCode) * 31) + this.f25509d.hashCode();
    }

    public String toString() {
        String str = this.f25506a;
        String str2 = this.f25507b;
        String str3 = this.f25508c;
        String str4 = this.f25509d;
        return "CountryCodeMetadata(prefix=" + str + ", countryCode=" + str2 + ", pattern=" + str3 + ", defaultFlagEmoji=" + str4 + ")";
    }

    public /* synthetic */ b(String str, String str2, String str3, String str4, int i10, DefaultConstructorMarker defaultConstructorMarker) {
        this(str, str2, (i10 & 4) != 0 ? null : str3, (i10 & 8) != 0 ? "🌐" : str4);
    }
}

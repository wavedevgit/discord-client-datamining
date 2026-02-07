package gq;

import java.util.Locale;
import kotlin.jvm.internal.DefaultConstructorMarker;
import kotlin.jvm.internal.Intrinsics;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class b {

    /* renamed from: a  reason: collision with root package name */
    private final String f25554a;

    /* renamed from: b  reason: collision with root package name */
    private final String f25555b;

    /* renamed from: c  reason: collision with root package name */
    private final String f25556c;

    /* renamed from: d  reason: collision with root package name */
    private final String f25557d;

    public b(String prefix, String countryCode, String str, String defaultFlagEmoji) {
        Intrinsics.checkNotNullParameter(prefix, "prefix");
        Intrinsics.checkNotNullParameter(countryCode, "countryCode");
        Intrinsics.checkNotNullParameter(defaultFlagEmoji, "defaultFlagEmoji");
        this.f25554a = prefix;
        this.f25555b = countryCode;
        this.f25556c = str;
        this.f25557d = defaultFlagEmoji;
    }

    private final String b() {
        String displayCountry = new Locale("", this.f25555b).getDisplayCountry(Locale.getDefault());
        Intrinsics.checkNotNullExpressionValue(displayCountry, "getDisplayCountry(...)");
        return displayCountry;
    }

    private final String c() {
        if (this.f25555b.length() != 2) {
            return this.f25557d;
        }
        String str = this.f25555b;
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
        return this.f25555b;
    }

    public final String d() {
        String c10 = c();
        String b10 = b();
        String str = this.f25554a;
        return c10 + " " + b10 + " " + str;
    }

    public final String e() {
        return this.f25554a;
    }

    public boolean equals(Object obj) {
        if (this == obj) {
            return true;
        }
        if (!(obj instanceof b)) {
            return false;
        }
        b bVar = (b) obj;
        if (Intrinsics.areEqual(this.f25554a, bVar.f25554a) && Intrinsics.areEqual(this.f25555b, bVar.f25555b) && Intrinsics.areEqual(this.f25556c, bVar.f25556c) && Intrinsics.areEqual(this.f25557d, bVar.f25557d)) {
            return true;
        }
        return false;
    }

    public int hashCode() {
        int hashCode;
        int hashCode2 = ((this.f25554a.hashCode() * 31) + this.f25555b.hashCode()) * 31;
        String str = this.f25556c;
        if (str == null) {
            hashCode = 0;
        } else {
            hashCode = str.hashCode();
        }
        return ((hashCode2 + hashCode) * 31) + this.f25557d.hashCode();
    }

    public String toString() {
        String str = this.f25554a;
        String str2 = this.f25555b;
        String str3 = this.f25556c;
        String str4 = this.f25557d;
        return "CountryCodeMetadata(prefix=" + str + ", countryCode=" + str2 + ", pattern=" + str3 + ", defaultFlagEmoji=" + str4 + ")";
    }

    public /* synthetic */ b(String str, String str2, String str3, String str4, int i10, DefaultConstructorMarker defaultConstructorMarker) {
        this(str, str2, (i10 & 4) != 0 ? null : str3, (i10 & 8) != 0 ? "🌐" : str4);
    }
}

package kotlin.reflect.jvm.internal.impl.util.capitalizeDecapitalize;

import java.util.Iterator;
import java.util.Locale;
import kotlin.jvm.internal.Intrinsics;
import kotlin.jvm.internal.SourceDebugExtension;
import kotlin.text.StringsKt;
import org.jetbrains.annotations.NotNull;
@SourceDebugExtension({"SMAP\ncapitalizeDecapitalize.kt\nKotlin\n*S Kotlin\n*F\n+ 1 capitalizeDecapitalize.kt\norg/jetbrains/kotlin/util/capitalizeDecapitalize/CapitalizeDecapitalizeKt\n+ 2 fake.kt\nkotlin/jvm/internal/FakeKt\n+ 3 _Collections.kt\nkotlin/collections/CollectionsKt___CollectionsKt\n*L\n1#1,147:1\n1#2:148\n295#3,2:149\n295#3,2:151\n774#3:153\n865#3,2:154\n1878#3,3:156\n*S KotlinDebug\n*F\n+ 1 capitalizeDecapitalize.kt\norg/jetbrains/kotlin/util/capitalizeDecapitalize/CapitalizeDecapitalizeKt\n*L\n34#1:149,2\n57#1:151,2\n72#1:153\n72#1:154,2\n78#1:156,3\n*E\n"})
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public final class CapitalizeDecapitalizeKt {
    private static final boolean a(String str, int i10, boolean z10) {
        char charAt = str.charAt(i10);
        if (z10) {
            if ('A' > charAt || charAt >= '[') {
                return false;
            }
            return true;
        }
        return Character.isUpperCase(charAt);
    }

    private static final String b(String str, boolean z10) {
        if (z10) {
            return toLowerCaseAsciiOnly(str);
        }
        String lowerCase = str.toLowerCase(Locale.ROOT);
        Intrinsics.checkNotNullExpressionValue(lowerCase, "toLowerCase(...)");
        return lowerCase;
    }

    @NotNull
    public static final String capitalizeAsciiOnly(@NotNull String str) {
        Intrinsics.checkNotNullParameter(str, "<this>");
        if (str.length() == 0) {
            return str;
        }
        char charAt = str.charAt(0);
        if ('a' <= charAt && charAt < '{') {
            StringBuilder sb2 = new StringBuilder(str.length());
            sb2.append(Character.toUpperCase(charAt));
            sb2.append((CharSequence) str, 1, str.length());
            return sb2.toString();
        }
        return str;
    }

    @NotNull
    public static final String decapitalizeAsciiOnly(@NotNull String str) {
        Intrinsics.checkNotNullParameter(str, "<this>");
        if (str.length() == 0) {
            return str;
        }
        char charAt = str.charAt(0);
        if ('A' <= charAt && charAt < '[') {
            char lowerCase = Character.toLowerCase(charAt);
            String substring = str.substring(1);
            Intrinsics.checkNotNullExpressionValue(substring, "substring(...)");
            return lowerCase + substring;
        }
        return str;
    }

    @NotNull
    public static final String decapitalizeSmartForCompiler(@NotNull String str, boolean z10) {
        Object obj;
        Intrinsics.checkNotNullParameter(str, "<this>");
        if (str.length() == 0) {
            return str;
        }
        if (!a(str, 0, z10)) {
            return str;
        }
        if (str.length() != 1 && a(str, 1, z10)) {
            Iterator it = StringsKt.b0(str).iterator();
            while (true) {
                if (it.hasNext()) {
                    obj = it.next();
                    if (!a(str, ((Number) obj).intValue(), z10)) {
                        break;
                    }
                } else {
                    obj = null;
                    break;
                }
            }
            Integer num = (Integer) obj;
            if (num != null) {
                int intValue = num.intValue() - 1;
                StringBuilder sb2 = new StringBuilder();
                String substring = str.substring(0, intValue);
                Intrinsics.checkNotNullExpressionValue(substring, "substring(...)");
                sb2.append(b(substring, z10));
                String substring2 = str.substring(intValue);
                Intrinsics.checkNotNullExpressionValue(substring2, "substring(...)");
                sb2.append(substring2);
                return sb2.toString();
            }
            return b(str, z10);
        } else if (z10) {
            return decapitalizeAsciiOnly(str);
        } else {
            if (str.length() > 0) {
                char lowerCase = Character.toLowerCase(str.charAt(0));
                String substring3 = str.substring(1);
                Intrinsics.checkNotNullExpressionValue(substring3, "substring(...)");
                return lowerCase + substring3;
            }
            return str;
        }
    }

    @NotNull
    public static final String toLowerCaseAsciiOnly(@NotNull String str) {
        Intrinsics.checkNotNullParameter(str, "<this>");
        StringBuilder sb2 = new StringBuilder(str.length());
        int length = str.length();
        for (int i10 = 0; i10 < length; i10++) {
            char charAt = str.charAt(i10);
            if ('A' <= charAt && charAt < '[') {
                charAt = Character.toLowerCase(charAt);
            }
            sb2.append(charAt);
        }
        String sb3 = sb2.toString();
        Intrinsics.checkNotNullExpressionValue(sb3, "toString(...)");
        return sb3;
    }
}

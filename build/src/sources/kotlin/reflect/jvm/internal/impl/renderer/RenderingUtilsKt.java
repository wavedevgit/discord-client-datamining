package kotlin.reflect.jvm.internal.impl.renderer;

import java.util.List;
import kotlin.jvm.internal.Intrinsics;
import kotlin.jvm.internal.SourceDebugExtension;
import kotlin.reflect.jvm.internal.impl.name.FqNameUnsafe;
import kotlin.reflect.jvm.internal.impl.name.Name;
import kotlin.text.StringsKt;
import org.jetbrains.annotations.NotNull;
@SourceDebugExtension({"SMAP\nRenderingUtils.kt\nKotlin\n*S Kotlin\n*F\n+ 1 RenderingUtils.kt\norg/jetbrains/kotlin/renderer/RenderingUtilsKt\n+ 2 _Strings.kt\nkotlin/text/StringsKt___StringsKt\n*L\n1#1,78:1\n1088#2,2:79\n*S KotlinDebug\n*F\n+ 1 RenderingUtils.kt\norg/jetbrains/kotlin/renderer/RenderingUtilsKt\n*L\n30#1:79,2\n*E\n"})
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public final class RenderingUtilsKt {
    private static final boolean a(Name name) {
        String asString = name.asString();
        Intrinsics.checkNotNullExpressionValue(asString, "asString(...)");
        if (!KeywordStringsGenerated.KEYWORDS.contains(asString)) {
            for (int i10 = 0; i10 < asString.length(); i10++) {
                char charAt = asString.charAt(i10);
                if (!Character.isLetterOrDigit(charAt) && charAt != '_') {
                    return true;
                }
            }
            if (asString.length() != 0 && Character.isJavaIdentifierStart(asString.codePointAt(0))) {
                return false;
            }
            return true;
        }
        return true;
    }

    @NotNull
    public static final String render(@NotNull Name name) {
        Intrinsics.checkNotNullParameter(name, "<this>");
        if (!a(name)) {
            String asString = name.asString();
            Intrinsics.checkNotNullExpressionValue(asString, "asString(...)");
            return asString;
        }
        StringBuilder sb2 = new StringBuilder();
        String asString2 = name.asString();
        Intrinsics.checkNotNullExpressionValue(asString2, "asString(...)");
        sb2.append('`' + asString2);
        sb2.append('`');
        return sb2.toString();
    }

    @NotNull
    public static final String renderFqName(@NotNull List<Name> pathSegments) {
        Intrinsics.checkNotNullParameter(pathSegments, "pathSegments");
        StringBuilder sb2 = new StringBuilder();
        for (Name name : pathSegments) {
            if (sb2.length() > 0) {
                sb2.append(".");
            }
            sb2.append(render(name));
        }
        return sb2.toString();
    }

    public static final String replacePrefixesInTypeRepresentations(@NotNull String lowerRendered, @NotNull String lowerPrefix, @NotNull String upperRendered, @NotNull String upperPrefix, @NotNull String foldedPrefix) {
        Intrinsics.checkNotNullParameter(lowerRendered, "lowerRendered");
        Intrinsics.checkNotNullParameter(lowerPrefix, "lowerPrefix");
        Intrinsics.checkNotNullParameter(upperRendered, "upperRendered");
        Intrinsics.checkNotNullParameter(upperPrefix, "upperPrefix");
        Intrinsics.checkNotNullParameter(foldedPrefix, "foldedPrefix");
        if (StringsKt.P(lowerRendered, lowerPrefix, false, 2, null) && StringsKt.P(upperRendered, upperPrefix, false, 2, null)) {
            String substring = lowerRendered.substring(lowerPrefix.length());
            Intrinsics.checkNotNullExpressionValue(substring, "substring(...)");
            String substring2 = upperRendered.substring(upperPrefix.length());
            Intrinsics.checkNotNullExpressionValue(substring2, "substring(...)");
            String str = foldedPrefix + substring;
            if (Intrinsics.areEqual(substring, substring2)) {
                return str;
            }
            if (typeStringsDifferOnlyInNullability(substring, substring2)) {
                return str + '!';
            }
        }
        return null;
    }

    public static final boolean typeStringsDifferOnlyInNullability(@NotNull String lower, @NotNull String upper) {
        Intrinsics.checkNotNullParameter(lower, "lower");
        Intrinsics.checkNotNullParameter(upper, "upper");
        if (!Intrinsics.areEqual(lower, StringsKt.J(upper, "?", "", false, 4, null))) {
            if (StringsKt.z(upper, "?", false, 2, null)) {
                if (Intrinsics.areEqual(lower + '?', upper)) {
                    return true;
                }
            }
            if (!Intrinsics.areEqual('(' + lower + ")?", upper)) {
                return false;
            }
            return true;
        }
        return true;
    }

    @NotNull
    public static final String render(@NotNull FqNameUnsafe fqNameUnsafe) {
        Intrinsics.checkNotNullParameter(fqNameUnsafe, "<this>");
        return renderFqName(fqNameUnsafe.pathSegments());
    }
}

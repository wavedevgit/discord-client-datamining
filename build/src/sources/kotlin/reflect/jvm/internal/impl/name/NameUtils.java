package kotlin.reflect.jvm.internal.impl.name;

import kotlin.jvm.internal.Intrinsics;
import kotlin.text.Regex;
import org.jetbrains.annotations.NotNull;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public final class NameUtils {
    @NotNull
    public static final NameUtils INSTANCE = new NameUtils();

    /* renamed from: a  reason: collision with root package name */
    private static final Regex f34903a = new Regex("[^\\p{L}\\p{Digit}]");

    /* renamed from: b  reason: collision with root package name */
    private static final String f34904b = "$context_receiver";

    private NameUtils() {
    }

    @NotNull
    public static final Name contextReceiverName(int i10) {
        Name identifier = Name.identifier(f34904b + '_' + i10);
        Intrinsics.checkNotNullExpressionValue(identifier, "identifier(...)");
        return identifier;
    }

    @NotNull
    public static final String sanitizeAsJavaIdentifier(@NotNull String name) {
        Intrinsics.checkNotNullParameter(name, "name");
        return f34903a.replace(name, "_");
    }
}

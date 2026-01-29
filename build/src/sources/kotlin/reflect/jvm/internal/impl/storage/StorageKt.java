package kotlin.reflect.jvm.internal.impl.storage;

import kotlin.jvm.internal.Intrinsics;
import kotlin.reflect.KProperty;
import org.jetbrains.annotations.NotNull;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public final class StorageKt {
    @NotNull
    public static final <T> T getValue(@NotNull NotNullLazyValue<? extends T> notNullLazyValue, Object obj, @NotNull KProperty p10) {
        Intrinsics.checkNotNullParameter(notNullLazyValue, "<this>");
        Intrinsics.checkNotNullParameter(p10, "p");
        return (T) notNullLazyValue.invoke();
    }

    public static final <T> T getValue(@NotNull NullableLazyValue<? extends T> nullableLazyValue, Object obj, @NotNull KProperty p10) {
        Intrinsics.checkNotNullParameter(nullableLazyValue, "<this>");
        Intrinsics.checkNotNullParameter(p10, "p");
        return (T) nullableLazyValue.invoke();
    }
}

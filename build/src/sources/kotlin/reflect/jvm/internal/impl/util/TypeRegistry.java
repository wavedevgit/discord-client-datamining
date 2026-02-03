package kotlin.reflect.jvm.internal.impl.util;

import java.util.Collection;
import java.util.Map;
import java.util.concurrent.ConcurrentHashMap;
import java.util.concurrent.atomic.AtomicInteger;
import kotlin.jvm.functions.Function1;
import kotlin.jvm.internal.Intrinsics;
import kotlin.reflect.KClass;
import org.jetbrains.annotations.NotNull;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public abstract class TypeRegistry<K, V> {

    /* renamed from: a  reason: collision with root package name */
    private final ConcurrentHashMap f35257a = new ConcurrentHashMap();

    /* renamed from: b  reason: collision with root package name */
    private final AtomicInteger f35258b = new AtomicInteger(0);

    /* JADX INFO: Access modifiers changed from: private */
    public static final int b(TypeRegistry typeRegistry, String it) {
        Intrinsics.checkNotNullParameter(it, "it");
        return typeRegistry.f35258b.getAndIncrement();
    }

    @NotNull
    public final Map<String, Integer> allValuesThreadUnsafeForRendering() {
        return this.f35257a;
    }

    /* JADX INFO: Access modifiers changed from: protected */
    public final Collection c() {
        Collection<V> values = this.f35257a.values();
        Intrinsics.checkNotNullExpressionValue(values, "<get-values>(...)");
        return values;
    }

    public abstract int customComputeIfAbsent(@NotNull ConcurrentHashMap<String, Integer> concurrentHashMap, @NotNull String str, @NotNull Function1<? super String, Integer> function1);

    @NotNull
    public final <T extends V, KK extends K> NullableArrayMapAccessor<K, V, T> generateNullableAccessor(@NotNull KClass kClass) {
        Intrinsics.checkNotNullParameter(kClass, "kClass");
        return new NullableArrayMapAccessor<>(getId(kClass));
    }

    public final <T extends K> int getId(@NotNull KClass kClass) {
        Intrinsics.checkNotNullParameter(kClass, "kClass");
        String qualifiedName = kClass.getQualifiedName();
        Intrinsics.checkNotNull(qualifiedName);
        return getId(qualifiedName);
    }

    public final int getId(@NotNull String keyQualifiedName) {
        Intrinsics.checkNotNullParameter(keyQualifiedName, "keyQualifiedName");
        return customComputeIfAbsent(this.f35257a, keyQualifiedName, new i(this));
    }
}

package kotlin.reflect.jvm.internal.impl.resolve.sam;

import kotlin.jvm.internal.Intrinsics;
import kotlin.jvm.internal.SourceDebugExtension;
import kotlin.reflect.jvm.internal.impl.storage.CacheWithNullableValues;
import kotlin.reflect.jvm.internal.impl.storage.StorageManager;
import org.jetbrains.annotations.NotNull;
@SourceDebugExtension({"SMAP\nSamConversionResolverImpl.kt\nKotlin\n*S Kotlin\n*F\n+ 1 SamConversionResolverImpl.kt\norg/jetbrains/kotlin/resolve/sam/SamConversionResolverImpl\n+ 2 _Collections.kt\nkotlin/collections/CollectionsKt___CollectionsKt\n*L\n1#1,180:1\n1761#2,3:181\n*S KotlinDebug\n*F\n+ 1 SamConversionResolverImpl.kt\norg/jetbrains/kotlin/resolve/sam/SamConversionResolverImpl\n*L\n39#1:181,3\n*E\n"})
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public final class SamConversionResolverImpl implements SamConversionResolver {

    /* renamed from: a  reason: collision with root package name */
    private final Iterable f35483a;

    /* renamed from: b  reason: collision with root package name */
    private final CacheWithNullableValues f35484b;

    public SamConversionResolverImpl(@NotNull StorageManager storageManager, @NotNull Iterable<? extends Object> samWithReceiverResolvers) {
        Intrinsics.checkNotNullParameter(storageManager, "storageManager");
        Intrinsics.checkNotNullParameter(samWithReceiverResolvers, "samWithReceiverResolvers");
        this.f35483a = samWithReceiverResolvers;
        this.f35484b = storageManager.createCacheWithNullableValues();
    }
}

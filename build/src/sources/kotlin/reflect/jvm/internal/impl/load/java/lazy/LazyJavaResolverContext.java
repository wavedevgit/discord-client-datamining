package kotlin.reflect.jvm.internal.impl.load.java.lazy;

import kotlin.Lazy;
import kotlin.jvm.internal.Intrinsics;
import kotlin.reflect.jvm.internal.impl.descriptors.ModuleDescriptor;
import kotlin.reflect.jvm.internal.impl.load.java.JavaTypeQualifiersByElementType;
import kotlin.reflect.jvm.internal.impl.load.java.lazy.types.JavaTypeResolver;
import kotlin.reflect.jvm.internal.impl.storage.StorageManager;
import org.jetbrains.annotations.NotNull;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public final class LazyJavaResolverContext {

    /* renamed from: a  reason: collision with root package name */
    private final JavaResolverComponents f34163a;

    /* renamed from: b  reason: collision with root package name */
    private final TypeParameterResolver f34164b;

    /* renamed from: c  reason: collision with root package name */
    private final Lazy f34165c;

    /* renamed from: d  reason: collision with root package name */
    private final JavaTypeResolver f34166d;

    public LazyJavaResolverContext(@NotNull JavaResolverComponents components, @NotNull TypeParameterResolver typeParameterResolver, @NotNull Lazy delegateForDefaultTypeQualifiers) {
        Intrinsics.checkNotNullParameter(components, "components");
        Intrinsics.checkNotNullParameter(typeParameterResolver, "typeParameterResolver");
        Intrinsics.checkNotNullParameter(delegateForDefaultTypeQualifiers, "delegateForDefaultTypeQualifiers");
        this.f34163a = components;
        this.f34164b = typeParameterResolver;
        this.f34165c = delegateForDefaultTypeQualifiers;
        this.f34166d = new JavaTypeResolver(this, typeParameterResolver);
    }

    @NotNull
    public final JavaResolverComponents getComponents() {
        return this.f34163a;
    }

    public final JavaTypeQualifiersByElementType getDefaultTypeQualifiers() {
        return (JavaTypeQualifiersByElementType) this.f34165c.getValue();
    }

    @NotNull
    public final Lazy getDelegateForDefaultTypeQualifiers$descriptors_jvm() {
        return this.f34165c;
    }

    @NotNull
    public final ModuleDescriptor getModule() {
        return this.f34163a.getModule();
    }

    @NotNull
    public final StorageManager getStorageManager() {
        return this.f34163a.getStorageManager();
    }

    @NotNull
    public final TypeParameterResolver getTypeParameterResolver() {
        return this.f34164b;
    }

    @NotNull
    public final JavaTypeResolver getTypeResolver() {
        return this.f34166d;
    }
}

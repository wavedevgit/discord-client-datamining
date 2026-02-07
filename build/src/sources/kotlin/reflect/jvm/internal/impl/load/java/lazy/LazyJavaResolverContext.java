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
    private final JavaResolverComponents f32921a;

    /* renamed from: b  reason: collision with root package name */
    private final TypeParameterResolver f32922b;

    /* renamed from: c  reason: collision with root package name */
    private final Lazy f32923c;

    /* renamed from: d  reason: collision with root package name */
    private final JavaTypeResolver f32924d;

    public LazyJavaResolverContext(@NotNull JavaResolverComponents components, @NotNull TypeParameterResolver typeParameterResolver, @NotNull Lazy delegateForDefaultTypeQualifiers) {
        Intrinsics.checkNotNullParameter(components, "components");
        Intrinsics.checkNotNullParameter(typeParameterResolver, "typeParameterResolver");
        Intrinsics.checkNotNullParameter(delegateForDefaultTypeQualifiers, "delegateForDefaultTypeQualifiers");
        this.f32921a = components;
        this.f32922b = typeParameterResolver;
        this.f32923c = delegateForDefaultTypeQualifiers;
        this.f32924d = new JavaTypeResolver(this, typeParameterResolver);
    }

    @NotNull
    public final JavaResolverComponents getComponents() {
        return this.f32921a;
    }

    public final JavaTypeQualifiersByElementType getDefaultTypeQualifiers() {
        return (JavaTypeQualifiersByElementType) this.f32923c.getValue();
    }

    @NotNull
    public final Lazy getDelegateForDefaultTypeQualifiers$descriptors_jvm() {
        return this.f32923c;
    }

    @NotNull
    public final ModuleDescriptor getModule() {
        return this.f32921a.getModule();
    }

    @NotNull
    public final StorageManager getStorageManager() {
        return this.f32921a.getStorageManager();
    }

    @NotNull
    public final TypeParameterResolver getTypeParameterResolver() {
        return this.f32922b;
    }

    @NotNull
    public final JavaTypeResolver getTypeResolver() {
        return this.f32924d;
    }
}

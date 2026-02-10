package kotlin.reflect.jvm.internal.impl.load.java.lazy;

import java.util.Map;
import kotlin.jvm.internal.Intrinsics;
import kotlin.reflect.jvm.internal.impl.descriptors.DeclarationDescriptor;
import kotlin.reflect.jvm.internal.impl.descriptors.TypeParameterDescriptor;
import kotlin.reflect.jvm.internal.impl.load.java.lazy.descriptors.LazyJavaTypeParameterDescriptor;
import kotlin.reflect.jvm.internal.impl.load.java.structure.JavaTypeParameter;
import kotlin.reflect.jvm.internal.impl.load.java.structure.JavaTypeParameterListOwner;
import kotlin.reflect.jvm.internal.impl.storage.MemoizedFunctionToNullable;
import kotlin.reflect.jvm.internal.impl.utils.CollectionsKt;
import org.jetbrains.annotations.NotNull;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public final class LazyJavaTypeParameterResolver implements TypeParameterResolver {

    /* renamed from: a  reason: collision with root package name */
    private final LazyJavaResolverContext f32634a;

    /* renamed from: b  reason: collision with root package name */
    private final DeclarationDescriptor f32635b;

    /* renamed from: c  reason: collision with root package name */
    private final int f32636c;

    /* renamed from: d  reason: collision with root package name */
    private final Map f32637d;

    /* renamed from: e  reason: collision with root package name */
    private final MemoizedFunctionToNullable f32638e;

    public LazyJavaTypeParameterResolver(@NotNull LazyJavaResolverContext c10, @NotNull DeclarationDescriptor containingDeclaration, @NotNull JavaTypeParameterListOwner typeParameterOwner, int i10) {
        Intrinsics.checkNotNullParameter(c10, "c");
        Intrinsics.checkNotNullParameter(containingDeclaration, "containingDeclaration");
        Intrinsics.checkNotNullParameter(typeParameterOwner, "typeParameterOwner");
        this.f32634a = c10;
        this.f32635b = containingDeclaration;
        this.f32636c = i10;
        this.f32637d = CollectionsKt.mapToIndex(typeParameterOwner.getTypeParameters());
        this.f32638e = c10.getStorageManager().createMemoizedFunctionWithNullableValues(new e(this));
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final LazyJavaTypeParameterDescriptor b(LazyJavaTypeParameterResolver lazyJavaTypeParameterResolver, JavaTypeParameter typeParameter) {
        Intrinsics.checkNotNullParameter(typeParameter, "typeParameter");
        Integer num = (Integer) lazyJavaTypeParameterResolver.f32637d.get(typeParameter);
        if (num != null) {
            return new LazyJavaTypeParameterDescriptor(ContextKt.copyWithNewDefaultTypeQualifiers(ContextKt.child(lazyJavaTypeParameterResolver.f32634a, lazyJavaTypeParameterResolver), lazyJavaTypeParameterResolver.f32635b.getAnnotations()), typeParameter, lazyJavaTypeParameterResolver.f32636c + num.intValue(), lazyJavaTypeParameterResolver.f32635b);
        }
        return null;
    }

    @Override // kotlin.reflect.jvm.internal.impl.load.java.lazy.TypeParameterResolver
    public TypeParameterDescriptor resolveTypeParameter(@NotNull JavaTypeParameter javaTypeParameter) {
        Intrinsics.checkNotNullParameter(javaTypeParameter, "javaTypeParameter");
        LazyJavaTypeParameterDescriptor lazyJavaTypeParameterDescriptor = (LazyJavaTypeParameterDescriptor) this.f32638e.invoke(javaTypeParameter);
        if (lazyJavaTypeParameterDescriptor != null) {
            return lazyJavaTypeParameterDescriptor;
        }
        return this.f32634a.getTypeParameterResolver().resolveTypeParameter(javaTypeParameter);
    }
}

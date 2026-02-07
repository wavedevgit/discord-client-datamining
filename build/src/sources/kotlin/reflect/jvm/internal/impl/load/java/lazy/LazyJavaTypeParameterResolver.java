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
    private final LazyJavaResolverContext f32925a;

    /* renamed from: b  reason: collision with root package name */
    private final DeclarationDescriptor f32926b;

    /* renamed from: c  reason: collision with root package name */
    private final int f32927c;

    /* renamed from: d  reason: collision with root package name */
    private final Map f32928d;

    /* renamed from: e  reason: collision with root package name */
    private final MemoizedFunctionToNullable f32929e;

    public LazyJavaTypeParameterResolver(@NotNull LazyJavaResolverContext c10, @NotNull DeclarationDescriptor containingDeclaration, @NotNull JavaTypeParameterListOwner typeParameterOwner, int i10) {
        Intrinsics.checkNotNullParameter(c10, "c");
        Intrinsics.checkNotNullParameter(containingDeclaration, "containingDeclaration");
        Intrinsics.checkNotNullParameter(typeParameterOwner, "typeParameterOwner");
        this.f32925a = c10;
        this.f32926b = containingDeclaration;
        this.f32927c = i10;
        this.f32928d = CollectionsKt.mapToIndex(typeParameterOwner.getTypeParameters());
        this.f32929e = c10.getStorageManager().createMemoizedFunctionWithNullableValues(new e(this));
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final LazyJavaTypeParameterDescriptor b(LazyJavaTypeParameterResolver lazyJavaTypeParameterResolver, JavaTypeParameter typeParameter) {
        Intrinsics.checkNotNullParameter(typeParameter, "typeParameter");
        Integer num = (Integer) lazyJavaTypeParameterResolver.f32928d.get(typeParameter);
        if (num != null) {
            return new LazyJavaTypeParameterDescriptor(ContextKt.copyWithNewDefaultTypeQualifiers(ContextKt.child(lazyJavaTypeParameterResolver.f32925a, lazyJavaTypeParameterResolver), lazyJavaTypeParameterResolver.f32926b.getAnnotations()), typeParameter, lazyJavaTypeParameterResolver.f32927c + num.intValue(), lazyJavaTypeParameterResolver.f32926b);
        }
        return null;
    }

    @Override // kotlin.reflect.jvm.internal.impl.load.java.lazy.TypeParameterResolver
    public TypeParameterDescriptor resolveTypeParameter(@NotNull JavaTypeParameter javaTypeParameter) {
        Intrinsics.checkNotNullParameter(javaTypeParameter, "javaTypeParameter");
        LazyJavaTypeParameterDescriptor lazyJavaTypeParameterDescriptor = (LazyJavaTypeParameterDescriptor) this.f32929e.invoke(javaTypeParameter);
        if (lazyJavaTypeParameterDescriptor != null) {
            return lazyJavaTypeParameterDescriptor;
        }
        return this.f32925a.getTypeParameterResolver().resolveTypeParameter(javaTypeParameter);
    }
}

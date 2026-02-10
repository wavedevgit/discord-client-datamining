package kotlin.reflect.jvm.internal.impl.load.java.lazy;

import java.util.Iterator;
import kotlin.collections.CollectionsKt;
import kotlin.jvm.internal.DefaultConstructorMarker;
import kotlin.jvm.internal.Intrinsics;
import kotlin.reflect.jvm.internal.impl.builtins.StandardNames;
import kotlin.reflect.jvm.internal.impl.descriptors.annotations.AnnotationDescriptor;
import kotlin.reflect.jvm.internal.impl.descriptors.annotations.Annotations;
import kotlin.reflect.jvm.internal.impl.load.java.components.JavaAnnotationMapper;
import kotlin.reflect.jvm.internal.impl.load.java.structure.JavaAnnotation;
import kotlin.reflect.jvm.internal.impl.load.java.structure.JavaAnnotationOwner;
import kotlin.reflect.jvm.internal.impl.name.FqName;
import kotlin.reflect.jvm.internal.impl.storage.MemoizedFunctionToNullable;
import kotlin.sequences.k;
import org.jetbrains.annotations.NotNull;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public final class LazyJavaAnnotations implements Annotations {

    /* renamed from: d  reason: collision with root package name */
    private final LazyJavaResolverContext f32846d;

    /* renamed from: e  reason: collision with root package name */
    private final JavaAnnotationOwner f32847e;

    /* renamed from: i  reason: collision with root package name */
    private final boolean f32848i;

    /* renamed from: o  reason: collision with root package name */
    private final MemoizedFunctionToNullable f32849o;

    public LazyJavaAnnotations(@NotNull LazyJavaResolverContext c10, @NotNull JavaAnnotationOwner annotationOwner, boolean z10) {
        Intrinsics.checkNotNullParameter(c10, "c");
        Intrinsics.checkNotNullParameter(annotationOwner, "annotationOwner");
        this.f32846d = c10;
        this.f32847e = annotationOwner;
        this.f32848i = z10;
        this.f32849o = c10.getComponents().getStorageManager().createMemoizedFunctionWithNullableValues(new c(this));
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final AnnotationDescriptor c(LazyJavaAnnotations lazyJavaAnnotations, JavaAnnotation annotation) {
        Intrinsics.checkNotNullParameter(annotation, "annotation");
        return JavaAnnotationMapper.INSTANCE.mapOrResolveJavaAnnotation(annotation, lazyJavaAnnotations.f32846d, lazyJavaAnnotations.f32848i);
    }

    @Override // kotlin.reflect.jvm.internal.impl.descriptors.annotations.Annotations
    /* renamed from: findAnnotation */
    public AnnotationDescriptor mo1198findAnnotation(@NotNull FqName fqName) {
        AnnotationDescriptor annotationDescriptor;
        Intrinsics.checkNotNullParameter(fqName, "fqName");
        JavaAnnotation findAnnotation = this.f32847e.findAnnotation(fqName);
        if (findAnnotation != null && (annotationDescriptor = (AnnotationDescriptor) this.f32849o.invoke(findAnnotation)) != null) {
            return annotationDescriptor;
        }
        return JavaAnnotationMapper.INSTANCE.findMappedJavaAnnotation(fqName, this.f32847e, this.f32846d);
    }

    @Override // kotlin.reflect.jvm.internal.impl.descriptors.annotations.Annotations
    public boolean hasAnnotation(@NotNull FqName fqName) {
        return Annotations.DefaultImpls.hasAnnotation(this, fqName);
    }

    @Override // kotlin.reflect.jvm.internal.impl.descriptors.annotations.Annotations
    public boolean isEmpty() {
        if (this.f32847e.getAnnotations().isEmpty() && !this.f32847e.isDeprecatedInJavaDoc()) {
            return true;
        }
        return false;
    }

    @Override // java.lang.Iterable
    @NotNull
    public Iterator<AnnotationDescriptor> iterator() {
        return k.H(k.U(k.R(CollectionsKt.b0(this.f32847e.getAnnotations()), this.f32849o), JavaAnnotationMapper.INSTANCE.findMappedJavaAnnotation(StandardNames.FqNames.deprecated, this.f32847e, this.f32846d))).iterator();
    }

    public /* synthetic */ LazyJavaAnnotations(LazyJavaResolverContext lazyJavaResolverContext, JavaAnnotationOwner javaAnnotationOwner, boolean z10, int i10, DefaultConstructorMarker defaultConstructorMarker) {
        this(lazyJavaResolverContext, javaAnnotationOwner, (i10 & 4) != 0 ? false : z10);
    }
}

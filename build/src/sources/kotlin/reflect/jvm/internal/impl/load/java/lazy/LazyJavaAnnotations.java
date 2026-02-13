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
    private final LazyJavaResolverContext f33415d;

    /* renamed from: e  reason: collision with root package name */
    private final JavaAnnotationOwner f33416e;

    /* renamed from: i  reason: collision with root package name */
    private final boolean f33417i;

    /* renamed from: o  reason: collision with root package name */
    private final MemoizedFunctionToNullable f33418o;

    public LazyJavaAnnotations(@NotNull LazyJavaResolverContext c10, @NotNull JavaAnnotationOwner annotationOwner, boolean z10) {
        Intrinsics.checkNotNullParameter(c10, "c");
        Intrinsics.checkNotNullParameter(annotationOwner, "annotationOwner");
        this.f33415d = c10;
        this.f33416e = annotationOwner;
        this.f33417i = z10;
        this.f33418o = c10.getComponents().getStorageManager().createMemoizedFunctionWithNullableValues(new c(this));
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final AnnotationDescriptor c(LazyJavaAnnotations lazyJavaAnnotations, JavaAnnotation annotation) {
        Intrinsics.checkNotNullParameter(annotation, "annotation");
        return JavaAnnotationMapper.INSTANCE.mapOrResolveJavaAnnotation(annotation, lazyJavaAnnotations.f33415d, lazyJavaAnnotations.f33417i);
    }

    @Override // kotlin.reflect.jvm.internal.impl.descriptors.annotations.Annotations
    /* renamed from: findAnnotation */
    public AnnotationDescriptor mo1197findAnnotation(@NotNull FqName fqName) {
        AnnotationDescriptor annotationDescriptor;
        Intrinsics.checkNotNullParameter(fqName, "fqName");
        JavaAnnotation findAnnotation = this.f33416e.findAnnotation(fqName);
        if (findAnnotation != null && (annotationDescriptor = (AnnotationDescriptor) this.f33418o.invoke(findAnnotation)) != null) {
            return annotationDescriptor;
        }
        return JavaAnnotationMapper.INSTANCE.findMappedJavaAnnotation(fqName, this.f33416e, this.f33415d);
    }

    @Override // kotlin.reflect.jvm.internal.impl.descriptors.annotations.Annotations
    public boolean hasAnnotation(@NotNull FqName fqName) {
        return Annotations.DefaultImpls.hasAnnotation(this, fqName);
    }

    @Override // kotlin.reflect.jvm.internal.impl.descriptors.annotations.Annotations
    public boolean isEmpty() {
        if (this.f33416e.getAnnotations().isEmpty() && !this.f33416e.isDeprecatedInJavaDoc()) {
            return true;
        }
        return false;
    }

    @Override // java.lang.Iterable
    @NotNull
    public Iterator<AnnotationDescriptor> iterator() {
        return k.H(k.U(k.R(CollectionsKt.b0(this.f33416e.getAnnotations()), this.f33418o), JavaAnnotationMapper.INSTANCE.findMappedJavaAnnotation(StandardNames.FqNames.deprecated, this.f33416e, this.f33415d))).iterator();
    }

    public /* synthetic */ LazyJavaAnnotations(LazyJavaResolverContext lazyJavaResolverContext, JavaAnnotationOwner javaAnnotationOwner, boolean z10, int i10, DefaultConstructorMarker defaultConstructorMarker) {
        this(lazyJavaResolverContext, javaAnnotationOwner, (i10 & 4) != 0 ? false : z10);
    }
}

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
    private final LazyJavaResolverContext f34157d;

    /* renamed from: e  reason: collision with root package name */
    private final JavaAnnotationOwner f34158e;

    /* renamed from: i  reason: collision with root package name */
    private final boolean f34159i;

    /* renamed from: o  reason: collision with root package name */
    private final MemoizedFunctionToNullable f34160o;

    public LazyJavaAnnotations(@NotNull LazyJavaResolverContext c10, @NotNull JavaAnnotationOwner annotationOwner, boolean z10) {
        Intrinsics.checkNotNullParameter(c10, "c");
        Intrinsics.checkNotNullParameter(annotationOwner, "annotationOwner");
        this.f34157d = c10;
        this.f34158e = annotationOwner;
        this.f34159i = z10;
        this.f34160o = c10.getComponents().getStorageManager().createMemoizedFunctionWithNullableValues(new c(this));
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final AnnotationDescriptor c(LazyJavaAnnotations lazyJavaAnnotations, JavaAnnotation annotation) {
        Intrinsics.checkNotNullParameter(annotation, "annotation");
        return JavaAnnotationMapper.INSTANCE.mapOrResolveJavaAnnotation(annotation, lazyJavaAnnotations.f34157d, lazyJavaAnnotations.f34159i);
    }

    @Override // kotlin.reflect.jvm.internal.impl.descriptors.annotations.Annotations
    /* renamed from: findAnnotation */
    public AnnotationDescriptor mo1194findAnnotation(@NotNull FqName fqName) {
        AnnotationDescriptor annotationDescriptor;
        Intrinsics.checkNotNullParameter(fqName, "fqName");
        JavaAnnotation findAnnotation = this.f34158e.findAnnotation(fqName);
        if (findAnnotation != null && (annotationDescriptor = (AnnotationDescriptor) this.f34160o.invoke(findAnnotation)) != null) {
            return annotationDescriptor;
        }
        return JavaAnnotationMapper.INSTANCE.findMappedJavaAnnotation(fqName, this.f34158e, this.f34157d);
    }

    @Override // kotlin.reflect.jvm.internal.impl.descriptors.annotations.Annotations
    public boolean hasAnnotation(@NotNull FqName fqName) {
        return Annotations.DefaultImpls.hasAnnotation(this, fqName);
    }

    @Override // kotlin.reflect.jvm.internal.impl.descriptors.annotations.Annotations
    public boolean isEmpty() {
        if (this.f34158e.getAnnotations().isEmpty() && !this.f34158e.isDeprecatedInJavaDoc()) {
            return true;
        }
        return false;
    }

    @Override // java.lang.Iterable
    @NotNull
    public Iterator<AnnotationDescriptor> iterator() {
        return k.H(k.U(k.R(CollectionsKt.b0(this.f34158e.getAnnotations()), this.f34160o), JavaAnnotationMapper.INSTANCE.findMappedJavaAnnotation(StandardNames.FqNames.deprecated, this.f34158e, this.f34157d))).iterator();
    }

    public /* synthetic */ LazyJavaAnnotations(LazyJavaResolverContext lazyJavaResolverContext, JavaAnnotationOwner javaAnnotationOwner, boolean z10, int i10, DefaultConstructorMarker defaultConstructorMarker) {
        this(lazyJavaResolverContext, javaAnnotationOwner, (i10 & 4) != 0 ? false : z10);
    }
}

package kotlin.reflect.jvm.internal.impl.descriptors.annotations;

import java.util.Iterator;
import java.util.List;
import kotlin.jvm.internal.Intrinsics;
import kotlin.reflect.jvm.internal.impl.descriptors.annotations.Annotations;
import kotlin.reflect.jvm.internal.impl.name.FqName;
import org.jetbrains.annotations.NotNull;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public final class AnnotationsImpl implements Annotations {

    /* renamed from: d  reason: collision with root package name */
    private final List f33645d;

    public AnnotationsImpl(@NotNull List<? extends AnnotationDescriptor> annotations) {
        Intrinsics.checkNotNullParameter(annotations, "annotations");
        this.f33645d = annotations;
    }

    @Override // kotlin.reflect.jvm.internal.impl.descriptors.annotations.Annotations
    /* renamed from: findAnnotation */
    public AnnotationDescriptor mo1194findAnnotation(@NotNull FqName fqName) {
        return Annotations.DefaultImpls.findAnnotation(this, fqName);
    }

    @Override // kotlin.reflect.jvm.internal.impl.descriptors.annotations.Annotations
    public boolean hasAnnotation(@NotNull FqName fqName) {
        return Annotations.DefaultImpls.hasAnnotation(this, fqName);
    }

    @Override // kotlin.reflect.jvm.internal.impl.descriptors.annotations.Annotations
    public boolean isEmpty() {
        return this.f33645d.isEmpty();
    }

    @Override // java.lang.Iterable
    @NotNull
    public Iterator<AnnotationDescriptor> iterator() {
        return this.f33645d.iterator();
    }

    @NotNull
    public String toString() {
        return this.f33645d.toString();
    }
}

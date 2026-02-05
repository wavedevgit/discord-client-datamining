package kotlin.reflect.jvm.internal.impl.descriptors.annotations;

import java.util.ArrayList;
import java.util.Collection;
import java.util.Iterator;
import kotlin.jvm.functions.Function1;
import kotlin.jvm.internal.Intrinsics;
import kotlin.jvm.internal.SourceDebugExtension;
import kotlin.reflect.jvm.internal.impl.name.FqName;
import org.jetbrains.annotations.NotNull;
@SourceDebugExtension({"SMAP\nAnnotations.kt\nKotlin\n*S Kotlin\n*F\n+ 1 Annotations.kt\norg/jetbrains/kotlin/descriptors/annotations/FilteredAnnotations\n+ 2 _Collections.kt\nkotlin/collections/CollectionsKt___CollectionsKt\n*L\n1#1,123:1\n774#2:124\n865#2,2:125\n1761#2,3:127\n*S KotlinDebug\n*F\n+ 1 Annotations.kt\norg/jetbrains/kotlin/descriptors/annotations/FilteredAnnotations\n*L\n69#1:124\n69#1:125,2\n72#1:127,3\n*E\n"})
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public final class FilteredAnnotations implements Annotations {

    /* renamed from: d  reason: collision with root package name */
    private final Annotations f32342d;

    /* renamed from: e  reason: collision with root package name */
    private final boolean f32343e;

    /* renamed from: i  reason: collision with root package name */
    private final Function1 f32344i;

    public FilteredAnnotations(@NotNull Annotations delegate, boolean z10, @NotNull Function1<? super FqName, Boolean> fqNameFilter) {
        Intrinsics.checkNotNullParameter(delegate, "delegate");
        Intrinsics.checkNotNullParameter(fqNameFilter, "fqNameFilter");
        this.f32342d = delegate;
        this.f32343e = z10;
        this.f32344i = fqNameFilter;
    }

    private final boolean b(AnnotationDescriptor annotationDescriptor) {
        FqName fqName = annotationDescriptor.getFqName();
        if (fqName != null && ((Boolean) this.f32344i.invoke(fqName)).booleanValue()) {
            return true;
        }
        return false;
    }

    @Override // kotlin.reflect.jvm.internal.impl.descriptors.annotations.Annotations
    /* renamed from: findAnnotation */
    public AnnotationDescriptor mo1195findAnnotation(@NotNull FqName fqName) {
        Intrinsics.checkNotNullParameter(fqName, "fqName");
        if (((Boolean) this.f32344i.invoke(fqName)).booleanValue()) {
            return this.f32342d.mo1195findAnnotation(fqName);
        }
        return null;
    }

    @Override // kotlin.reflect.jvm.internal.impl.descriptors.annotations.Annotations
    public boolean hasAnnotation(@NotNull FqName fqName) {
        Intrinsics.checkNotNullParameter(fqName, "fqName");
        if (((Boolean) this.f32344i.invoke(fqName)).booleanValue()) {
            return this.f32342d.hasAnnotation(fqName);
        }
        return false;
    }

    @Override // kotlin.reflect.jvm.internal.impl.descriptors.annotations.Annotations
    public boolean isEmpty() {
        boolean z10;
        Annotations<AnnotationDescriptor> annotations = this.f32342d;
        if (!(annotations instanceof Collection) || !((Collection) annotations).isEmpty()) {
            for (AnnotationDescriptor annotationDescriptor : annotations) {
                if (b(annotationDescriptor)) {
                    z10 = true;
                    break;
                }
            }
        }
        z10 = false;
        if (this.f32343e) {
            if (!z10) {
                return true;
            }
            return false;
        }
        return z10;
    }

    @Override // java.lang.Iterable
    @NotNull
    public Iterator<AnnotationDescriptor> iterator() {
        Annotations annotations = this.f32342d;
        ArrayList arrayList = new ArrayList();
        for (AnnotationDescriptor annotationDescriptor : annotations) {
            if (b(annotationDescriptor)) {
                arrayList.add(annotationDescriptor);
            }
        }
        return arrayList.iterator();
    }

    /* JADX WARN: 'this' call moved to the top of the method (can break code semantics) */
    public FilteredAnnotations(@NotNull Annotations delegate, @NotNull Function1<? super FqName, Boolean> fqNameFilter) {
        this(delegate, false, fqNameFilter);
        Intrinsics.checkNotNullParameter(delegate, "delegate");
        Intrinsics.checkNotNullParameter(fqNameFilter, "fqNameFilter");
    }
}

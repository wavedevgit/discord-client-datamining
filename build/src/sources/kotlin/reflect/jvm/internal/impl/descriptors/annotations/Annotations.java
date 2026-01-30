package kotlin.reflect.jvm.internal.impl.descriptors.annotations;

import java.util.Iterator;
import java.util.List;
import kotlin.collections.CollectionsKt;
import kotlin.jvm.internal.Intrinsics;
import kotlin.jvm.internal.SourceDebugExtension;
import kotlin.jvm.internal.markers.KMappedMarker;
import kotlin.reflect.jvm.internal.impl.descriptors.annotations.Annotations;
import kotlin.reflect.jvm.internal.impl.name.FqName;
import org.jetbrains.annotations.NotNull;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public interface Annotations extends Iterable<AnnotationDescriptor>, KMappedMarker {
    @NotNull
    public static final Companion Companion = Companion.f33643a;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
    public static final class Companion {

        /* renamed from: a  reason: collision with root package name */
        static final /* synthetic */ Companion f33643a = new Companion();

        /* renamed from: b  reason: collision with root package name */
        private static final Annotations f33644b = new Annotations() { // from class: kotlin.reflect.jvm.internal.impl.descriptors.annotations.Annotations$Companion$EMPTY$1
            public Void findAnnotation(FqName fqName) {
                Intrinsics.checkNotNullParameter(fqName, "fqName");
                return null;
            }

            @Override // kotlin.reflect.jvm.internal.impl.descriptors.annotations.Annotations
            public boolean hasAnnotation(FqName fqName) {
                return Annotations.DefaultImpls.hasAnnotation(this, fqName);
            }

            @Override // kotlin.reflect.jvm.internal.impl.descriptors.annotations.Annotations
            public boolean isEmpty() {
                return true;
            }

            @Override // java.lang.Iterable
            public Iterator<AnnotationDescriptor> iterator() {
                return CollectionsKt.l().iterator();
            }

            public String toString() {
                return "EMPTY";
            }

            @Override // kotlin.reflect.jvm.internal.impl.descriptors.annotations.Annotations
            /* renamed from: findAnnotation  reason: collision with other method in class */
            public /* bridge */ /* synthetic */ AnnotationDescriptor mo1194findAnnotation(FqName fqName) {
                return (AnnotationDescriptor) findAnnotation(fqName);
            }
        };

        private Companion() {
        }

        @NotNull
        public final Annotations create(@NotNull List<? extends AnnotationDescriptor> annotations) {
            Intrinsics.checkNotNullParameter(annotations, "annotations");
            if (annotations.isEmpty()) {
                return f33644b;
            }
            return new AnnotationsImpl(annotations);
        }

        @NotNull
        public final Annotations getEMPTY() {
            return f33644b;
        }
    }

    @SourceDebugExtension({"SMAP\nAnnotations.kt\nKotlin\n*S Kotlin\n*F\n+ 1 Annotations.kt\norg/jetbrains/kotlin/descriptors/annotations/Annotations$DefaultImpls\n+ 2 _Collections.kt\nkotlin/collections/CollectionsKt___CollectionsKt\n*L\n1#1,123:1\n295#2,2:124\n*S KotlinDebug\n*F\n+ 1 Annotations.kt\norg/jetbrains/kotlin/descriptors/annotations/Annotations$DefaultImpls\n*L\n29#1:124,2\n*E\n"})
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
    public static final class DefaultImpls {
        public static AnnotationDescriptor findAnnotation(@NotNull Annotations annotations, @NotNull FqName fqName) {
            AnnotationDescriptor annotationDescriptor;
            Intrinsics.checkNotNullParameter(fqName, "fqName");
            Iterator<AnnotationDescriptor> it = annotations.iterator();
            while (true) {
                if (it.hasNext()) {
                    annotationDescriptor = it.next();
                    if (Intrinsics.areEqual(annotationDescriptor.getFqName(), fqName)) {
                        break;
                    }
                } else {
                    annotationDescriptor = null;
                    break;
                }
            }
            return annotationDescriptor;
        }

        public static boolean hasAnnotation(@NotNull Annotations annotations, @NotNull FqName fqName) {
            Intrinsics.checkNotNullParameter(fqName, "fqName");
            if (annotations.mo1194findAnnotation(fqName) != null) {
                return true;
            }
            return false;
        }
    }

    /* renamed from: findAnnotation */
    AnnotationDescriptor mo1194findAnnotation(@NotNull FqName fqName);

    boolean hasAnnotation(@NotNull FqName fqName);

    boolean isEmpty();
}

package kotlin.reflect.jvm.internal.impl;

import java.util.LinkedHashSet;
import java.util.Set;
import kotlin.collections.CollectionsKt;
import kotlin.jvm.internal.Intrinsics;
import kotlin.jvm.internal.Ref;
import kotlin.jvm.internal.SourceDebugExtension;
import kotlin.reflect.jvm.internal.impl.descriptors.SourceElement;
import kotlin.reflect.jvm.internal.impl.load.java.JvmAbi;
import kotlin.reflect.jvm.internal.impl.load.java.JvmAnnotationNames;
import kotlin.reflect.jvm.internal.impl.load.kotlin.KotlinJvmBinaryClass;
import kotlin.reflect.jvm.internal.impl.name.ClassId;
import kotlin.reflect.jvm.internal.impl.name.FqName;
import org.jetbrains.annotations.NotNull;
@SourceDebugExtension({"SMAP\nSpecialJvmAnnotations.kt\nKotlin\n*S Kotlin\n*F\n+ 1 SpecialJvmAnnotations.kt\norg/jetbrains/kotlin/SpecialJvmAnnotations\n+ 2 _Collections.kt\nkotlin/collections/CollectionsKt___CollectionsKt\n*L\n1#1,42:1\n1634#2,3:43\n*S KotlinDebug\n*F\n+ 1 SpecialJvmAnnotations.kt\norg/jetbrains/kotlin/SpecialJvmAnnotations\n*L\n22#1:43,3\n*E\n"})
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public final class SpecialJvmAnnotations {
    @NotNull
    public static final SpecialJvmAnnotations INSTANCE = new SpecialJvmAnnotations();

    /* renamed from: a  reason: collision with root package name */
    private static final Set f32585a;

    /* renamed from: b  reason: collision with root package name */
    private static final ClassId f32586b;

    static {
        LinkedHashSet linkedHashSet = new LinkedHashSet();
        ClassId.Companion companion = ClassId.Companion;
        for (FqName fqName : CollectionsKt.o(JvmAnnotationNames.METADATA_FQ_NAME, JvmAnnotationNames.JETBRAINS_NOT_NULL_ANNOTATION, JvmAnnotationNames.JETBRAINS_NULLABLE_ANNOTATION, JvmAnnotationNames.TARGET_ANNOTATION, JvmAnnotationNames.RETENTION_ANNOTATION, JvmAnnotationNames.DOCUMENTED_ANNOTATION)) {
            linkedHashSet.add(companion.topLevel(fqName));
        }
        f32585a = linkedHashSet;
        ClassId.Companion companion2 = ClassId.Companion;
        FqName REPEATABLE_ANNOTATION = JvmAnnotationNames.REPEATABLE_ANNOTATION;
        Intrinsics.checkNotNullExpressionValue(REPEATABLE_ANNOTATION, "REPEATABLE_ANNOTATION");
        f32586b = companion2.topLevel(REPEATABLE_ANNOTATION);
    }

    private SpecialJvmAnnotations() {
    }

    @NotNull
    public final ClassId getJAVA_LANG_ANNOTATION_REPEATABLE() {
        return f32586b;
    }

    @NotNull
    public final Set<ClassId> getSPECIAL_ANNOTATIONS() {
        return f32585a;
    }

    public final boolean isAnnotatedWithContainerMetaAnnotation(@NotNull KotlinJvmBinaryClass klass) {
        Intrinsics.checkNotNullParameter(klass, "klass");
        final Ref.BooleanRef booleanRef = new Ref.BooleanRef();
        klass.loadClassAnnotations(new KotlinJvmBinaryClass.AnnotationVisitor() { // from class: kotlin.reflect.jvm.internal.impl.SpecialJvmAnnotations$isAnnotatedWithContainerMetaAnnotation$1
            @Override // kotlin.reflect.jvm.internal.impl.load.kotlin.KotlinJvmBinaryClass.AnnotationVisitor
            public KotlinJvmBinaryClass.AnnotationArgumentVisitor visitAnnotation(ClassId classId, SourceElement source) {
                Intrinsics.checkNotNullParameter(classId, "classId");
                Intrinsics.checkNotNullParameter(source, "source");
                if (Intrinsics.areEqual(classId, JvmAbi.INSTANCE.getREPEATABLE_ANNOTATION_CONTAINER_META_ANNOTATION())) {
                    Ref.BooleanRef.this.element = true;
                    return null;
                }
                return null;
            }

            @Override // kotlin.reflect.jvm.internal.impl.load.kotlin.KotlinJvmBinaryClass.AnnotationVisitor
            public void visitEnd() {
            }
        }, null);
        return booleanRef.element;
    }
}

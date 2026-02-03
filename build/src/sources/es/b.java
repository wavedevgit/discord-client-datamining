package es;

import fs.t2;
import fs.x2;
import java.util.Iterator;
import java.util.List;
import kotlin.collections.CollectionsKt;
import kotlin.jvm.internal.Intrinsics;
import kotlin.jvm.internal.Reflection;
import kotlin.reflect.KClass;
import kotlin.reflect.KType;
import kotlin.reflect.jvm.internal.impl.descriptors.ClassDescriptor;
import kotlin.reflect.jvm.internal.impl.descriptors.ClassKind;
import kotlin.reflect.jvm.internal.impl.descriptors.ClassifierDescriptor;
import kotlin.reflect.l;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public abstract class b {
    /* JADX WARN: Multi-variable type inference failed */
    public static final KClass a(kotlin.reflect.d dVar) {
        ClassDescriptor classDescriptor;
        KClass b10;
        Intrinsics.checkNotNullParameter(dVar, "<this>");
        if (dVar instanceof KClass) {
            return (KClass) dVar;
        }
        if (dVar instanceof l) {
            List upperBounds = ((l) dVar).getUpperBounds();
            Iterator it = upperBounds.iterator();
            while (true) {
                classDescriptor = null;
                if (!it.hasNext()) {
                    break;
                }
                Object next = it.next();
                KType kType = (KType) next;
                Intrinsics.checkNotNull(kType, "null cannot be cast to non-null type kotlin.reflect.jvm.internal.KTypeImpl");
                ClassifierDescriptor mo1197getDeclarationDescriptor = ((t2) kType).l().getConstructor().mo1197getDeclarationDescriptor();
                if (mo1197getDeclarationDescriptor instanceof ClassDescriptor) {
                    classDescriptor = (ClassDescriptor) mo1197getDeclarationDescriptor;
                }
                if (classDescriptor != null && classDescriptor.getKind() != ClassKind.INTERFACE && classDescriptor.getKind() != ClassKind.ANNOTATION_CLASS) {
                    classDescriptor = next;
                    break;
                }
            }
            KType kType2 = (KType) classDescriptor;
            if (kType2 == null) {
                kType2 = (KType) CollectionsKt.firstOrNull(upperBounds);
            }
            if (kType2 != null && (b10 = b(kType2)) != null) {
                return b10;
            }
            return Reflection.getOrCreateKotlinClass(Object.class);
        }
        throw new x2("Cannot calculate JVM erasure for type: " + dVar);
    }

    public static final KClass b(KType kType) {
        KClass a10;
        Intrinsics.checkNotNullParameter(kType, "<this>");
        kotlin.reflect.d classifier = kType.getClassifier();
        if (classifier != null && (a10 = a(classifier)) != null) {
            return a10;
        }
        throw new x2("Cannot calculate JVM erasure for type: " + kType);
    }
}

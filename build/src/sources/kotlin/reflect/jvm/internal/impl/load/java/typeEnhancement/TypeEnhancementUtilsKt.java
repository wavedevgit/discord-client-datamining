package kotlin.reflect.jvm.internal.impl.load.java.typeEnhancement;

import java.util.ArrayList;
import java.util.Collection;
import java.util.Set;
import kotlin.collections.CollectionsKt;
import kotlin.jvm.internal.Intrinsics;
import kotlin.jvm.internal.SourceDebugExtension;
import kotlin.reflect.jvm.internal.impl.load.java.JvmAnnotationNames;
import kotlin.reflect.jvm.internal.impl.name.FqName;
import kotlin.reflect.jvm.internal.impl.types.TypeSystemCommonBackendContext;
import kotlin.reflect.jvm.internal.impl.types.model.KotlinTypeMarker;
import org.jetbrains.annotations.NotNull;
@SourceDebugExtension({"SMAP\ntypeEnhancementUtils.kt\nKotlin\n*S Kotlin\n*F\n+ 1 typeEnhancementUtils.kt\norg/jetbrains/kotlin/load/java/typeEnhancement/TypeEnhancementUtilsKt\n+ 2 fake.kt\nkotlin/jvm/internal/FakeKt\n+ 3 _Collections.kt\nkotlin/collections/CollectionsKt___CollectionsKt\n*L\n1#1,73:1\n1#2:74\n1#2:85\n1#2:98\n1#2:111\n1617#3,9:75\n1869#3:84\n1870#3:86\n1626#3:87\n1617#3,9:88\n1869#3:97\n1870#3:99\n1626#3:100\n1617#3,9:101\n1869#3:110\n1870#3:112\n1626#3:113\n1761#3,3:114\n*S KotlinDebug\n*F\n+ 1 typeEnhancementUtils.kt\norg/jetbrains/kotlin/load/java/typeEnhancement/TypeEnhancementUtilsKt\n*L\n43#1:85\n45#1:98\n47#1:111\n43#1:75,9\n43#1:84\n43#1:86\n43#1:87\n45#1:88,9\n45#1:97\n45#1:99\n45#1:100\n47#1:101,9\n47#1:110\n47#1:112\n47#1:113\n58#1:114,3\n*E\n"})
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public final class TypeEnhancementUtilsKt {
    private static final NullabilityQualifier a(JavaTypeQualifiers javaTypeQualifiers) {
        if (javaTypeQualifiers.isNullabilityQualifierForWarning()) {
            return null;
        }
        return javaTypeQualifiers.getNullability();
    }

    private static final boolean b(JavaTypeQualifiers javaTypeQualifiers, boolean z10) {
        if (javaTypeQualifiers.isNullabilityQualifierForWarning() == z10 && javaTypeQualifiers.getDefinitelyNotNull()) {
            return true;
        }
        return false;
    }

    private static final Object c(Set set, Object obj, Object obj2, Object obj3, boolean z10) {
        Set l12;
        Object obj4;
        if (z10) {
            if (set.contains(obj)) {
                obj4 = obj;
            } else if (set.contains(obj2)) {
                obj4 = obj2;
            } else {
                obj4 = null;
            }
            if (Intrinsics.areEqual(obj4, obj) && Intrinsics.areEqual(obj3, obj2)) {
                return null;
            }
            if (obj3 == null) {
                return obj4;
            }
            return obj3;
        }
        if (obj3 != null && (l12 = CollectionsKt.l1(kotlin.collections.x0.m(set, obj3))) != null) {
            set = l12;
        }
        return CollectionsKt.R0(set);
    }

    @NotNull
    public static final JavaTypeQualifiers computeQualifiersForOverride(@NotNull JavaTypeQualifiers javaTypeQualifiers, @NotNull Collection<JavaTypeQualifiers> superQualifiers, boolean z10, boolean z11, boolean z12) {
        NullabilityQualifier nullabilityQualifier;
        boolean z13;
        Intrinsics.checkNotNullParameter(javaTypeQualifiers, "<this>");
        Intrinsics.checkNotNullParameter(superQualifiers, "superQualifiers");
        Collection<JavaTypeQualifiers> collection = superQualifiers;
        ArrayList arrayList = new ArrayList();
        for (JavaTypeQualifiers javaTypeQualifiers2 : collection) {
            NullabilityQualifier a10 = a(javaTypeQualifiers2);
            if (a10 != null) {
                arrayList.add(a10);
            }
        }
        NullabilityQualifier d10 = d(CollectionsKt.l1(arrayList), a(javaTypeQualifiers), z10);
        if (d10 == null) {
            ArrayList arrayList2 = new ArrayList();
            for (JavaTypeQualifiers javaTypeQualifiers3 : collection) {
                NullabilityQualifier nullability = javaTypeQualifiers3.getNullability();
                if (nullability != null) {
                    arrayList2.add(nullability);
                }
            }
            nullabilityQualifier = d(CollectionsKt.l1(arrayList2), javaTypeQualifiers.getNullability(), z10);
        } else {
            nullabilityQualifier = d10;
        }
        ArrayList arrayList3 = new ArrayList();
        for (JavaTypeQualifiers javaTypeQualifiers4 : collection) {
            MutabilityQualifier mutability = javaTypeQualifiers4.getMutability();
            if (mutability != null) {
                arrayList3.add(mutability);
            }
        }
        MutabilityQualifier mutabilityQualifier = (MutabilityQualifier) c(CollectionsKt.l1(arrayList3), MutabilityQualifier.MUTABLE, MutabilityQualifier.READ_ONLY, javaTypeQualifiers.getMutability(), z10);
        if (nullabilityQualifier == null || z12 || (z11 && nullabilityQualifier == NullabilityQualifier.NULLABLE)) {
            nullabilityQualifier = null;
        }
        boolean z14 = false;
        if (nullabilityQualifier != null && d10 == null) {
            z13 = true;
        } else {
            z13 = false;
        }
        if (nullabilityQualifier == NullabilityQualifier.NOT_NULL) {
            if (!b(javaTypeQualifiers, z13)) {
                if (!collection.isEmpty()) {
                    for (JavaTypeQualifiers javaTypeQualifiers5 : collection) {
                        if (b(javaTypeQualifiers5, z13)) {
                            z14 = true;
                            break;
                        }
                    }
                }
            } else {
                z14 = true;
                break;
            }
        }
        return new JavaTypeQualifiers(nullabilityQualifier, mutabilityQualifier, z14, z13);
    }

    private static final NullabilityQualifier d(Set set, NullabilityQualifier nullabilityQualifier, boolean z10) {
        NullabilityQualifier nullabilityQualifier2 = NullabilityQualifier.FORCE_FLEXIBILITY;
        if (nullabilityQualifier == nullabilityQualifier2) {
            return nullabilityQualifier2;
        }
        return (NullabilityQualifier) c(set, NullabilityQualifier.NOT_NULL, NullabilityQualifier.NULLABLE, nullabilityQualifier, z10);
    }

    public static final boolean hasEnhancedNullability(@NotNull TypeSystemCommonBackendContext typeSystemCommonBackendContext, @NotNull KotlinTypeMarker type) {
        Intrinsics.checkNotNullParameter(typeSystemCommonBackendContext, "<this>");
        Intrinsics.checkNotNullParameter(type, "type");
        FqName ENHANCED_NULLABILITY_ANNOTATION = JvmAnnotationNames.ENHANCED_NULLABILITY_ANNOTATION;
        Intrinsics.checkNotNullExpressionValue(ENHANCED_NULLABILITY_ANNOTATION, "ENHANCED_NULLABILITY_ANNOTATION");
        return typeSystemCommonBackendContext.hasAnnotation(type, ENHANCED_NULLABILITY_ANNOTATION);
    }
}

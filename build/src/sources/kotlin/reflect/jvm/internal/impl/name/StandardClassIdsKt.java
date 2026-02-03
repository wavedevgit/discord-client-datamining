package kotlin.reflect.jvm.internal.impl.name;

import java.util.LinkedHashMap;
import java.util.Map;
import java.util.Set;
import kotlin.Pair;
import kotlin.collections.CollectionsKt;
import kotlin.collections.o0;
import kotlin.jvm.internal.Intrinsics;
import kotlin.jvm.internal.SourceDebugExtension;
import kotlin.ranges.d;
import lr.v;
@SourceDebugExtension({"SMAP\nStandardClassIds.kt\nKotlin\n*S Kotlin\n*F\n+ 1 StandardClassIds.kt\norg/jetbrains/kotlin/name/StandardClassIdsKt\n+ 2 _Collections.kt\nkotlin/collections/CollectionsKt___CollectionsKt\n*L\n1#1,300:1\n1193#2,2:301\n1267#2,4:303\n*S KotlinDebug\n*F\n+ 1 StandardClassIds.kt\norg/jetbrains/kotlin/name/StandardClassIdsKt\n*L\n299#1:301,2\n299#1:303,4\n*E\n"})
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public final class StandardClassIdsKt {
    public static final ClassId a(String str) {
        FqName base_annotation_package = StandardClassIds.INSTANCE.getBASE_ANNOTATION_PACKAGE();
        Name identifier = Name.identifier(str);
        Intrinsics.checkNotNullExpressionValue(identifier, "identifier(...)");
        return new ClassId(base_annotation_package, identifier);
    }

    public static final ClassId b(String str) {
        FqName base_kotlin_package = StandardClassIds.INSTANCE.getBASE_KOTLIN_PACKAGE();
        Name identifier = Name.identifier(str);
        Intrinsics.checkNotNullExpressionValue(identifier, "identifier(...)");
        return new ClassId(base_kotlin_package, identifier);
    }

    public static final ClassId c(String str) {
        FqName base_collections_package = StandardClassIds.INSTANCE.getBASE_COLLECTIONS_PACKAGE();
        Name identifier = Name.identifier(str);
        Intrinsics.checkNotNullExpressionValue(identifier, "identifier(...)");
        return new ClassId(base_collections_package, identifier);
    }

    public static final ClassId d(String str) {
        FqName base_coroutines_package = StandardClassIds.INSTANCE.getBASE_COROUTINES_PACKAGE();
        Name identifier = Name.identifier(str);
        Intrinsics.checkNotNullExpressionValue(identifier, "identifier(...)");
        return new ClassId(base_coroutines_package, identifier);
    }

    public static final ClassId e(String str) {
        FqName base_enums_package = StandardClassIds.INSTANCE.getBASE_ENUMS_PACKAGE();
        Name identifier = Name.identifier(str);
        Intrinsics.checkNotNullExpressionValue(identifier, "identifier(...)");
        return new ClassId(base_enums_package, identifier);
    }

    public static final Map f(Map map) {
        Set<Map.Entry> entrySet = map.entrySet();
        LinkedHashMap linkedHashMap = new LinkedHashMap(d.d(o0.e(CollectionsKt.w(entrySet, 10)), 16));
        for (Map.Entry entry : entrySet) {
            Pair a10 = v.a(entry.getValue(), entry.getKey());
            linkedHashMap.put(a10.c(), a10.d());
        }
        return linkedHashMap;
    }

    public static final ClassId g(Name name) {
        StandardClassIds standardClassIds = StandardClassIds.INSTANCE;
        FqName packageFqName = standardClassIds.getArray().getPackageFqName();
        Name identifier = Name.identifier(name.getIdentifier() + standardClassIds.getArray().getShortClassName().getIdentifier());
        Intrinsics.checkNotNullExpressionValue(identifier, "identifier(...)");
        return new ClassId(packageFqName, identifier);
    }

    public static final ClassId h(String str) {
        FqName base_ranges_package = StandardClassIds.INSTANCE.getBASE_RANGES_PACKAGE();
        Name identifier = Name.identifier(str);
        Intrinsics.checkNotNullExpressionValue(identifier, "identifier(...)");
        return new ClassId(base_ranges_package, identifier);
    }

    public static final ClassId i(String str) {
        FqName base_reflect_package = StandardClassIds.INSTANCE.getBASE_REFLECT_PACKAGE();
        Name identifier = Name.identifier(str);
        Intrinsics.checkNotNullExpressionValue(identifier, "identifier(...)");
        return new ClassId(base_reflect_package, identifier);
    }

    public static final ClassId j(ClassId classId) {
        FqName base_kotlin_package = StandardClassIds.INSTANCE.getBASE_KOTLIN_PACKAGE();
        Name identifier = Name.identifier('U' + classId.getShortClassName().getIdentifier());
        Intrinsics.checkNotNullExpressionValue(identifier, "identifier(...)");
        return new ClassId(base_kotlin_package, identifier);
    }
}

package kotlin.reflect.jvm.internal.impl.load.java;

import java.util.ArrayList;
import java.util.LinkedHashMap;
import java.util.List;
import java.util.Map;
import kotlin.collections.o0;
import kotlin.jvm.internal.Intrinsics;
import kotlin.jvm.internal.SourceDebugExtension;
import kotlin.reflect.jvm.internal.impl.name.ClassId;
import kotlin.reflect.jvm.internal.impl.name.FqName;
import kotlin.reflect.jvm.internal.impl.name.StandardClassIds;
import or.v;
import org.jetbrains.annotations.NotNull;
@SourceDebugExtension({"SMAP\nFakePureImplementationsProvider.kt\nKotlin\n*S Kotlin\n*F\n+ 1 FakePureImplementationsProvider.kt\norg/jetbrains/kotlin/load/java/FakePureImplementationsProvider\n+ 2 _Collections.kt\nkotlin/collections/CollectionsKt___CollectionsKt\n+ 3 _Arrays.kt\nkotlin/collections/ArraysKt___ArraysKt\n+ 4 _Maps.kt\nkotlin/collections/MapsKt___MapsKt\n*L\n1#1,38:1\n1299#2,4:39\n11228#3:43\n11563#3,3:44\n126#4:47\n153#4,3:48\n*S KotlinDebug\n*F\n+ 1 FakePureImplementationsProvider.kt\norg/jetbrains/kotlin/load/java/FakePureImplementationsProvider\n*L\n18#1:39,4\n36#1:43\n36#1:44,3\n32#1:47\n32#1:48,3\n*E\n"})
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public final class FakePureImplementationsProvider {
    @NotNull
    public static final FakePureImplementationsProvider INSTANCE;

    /* renamed from: a  reason: collision with root package name */
    private static final Map f32673a;

    /* renamed from: b  reason: collision with root package name */
    private static final Map f32674b;

    static {
        FakePureImplementationsProvider fakePureImplementationsProvider = new FakePureImplementationsProvider();
        INSTANCE = fakePureImplementationsProvider;
        LinkedHashMap linkedHashMap = new LinkedHashMap();
        f32673a = linkedHashMap;
        StandardClassIds standardClassIds = StandardClassIds.INSTANCE;
        fakePureImplementationsProvider.b(standardClassIds.getMutableList(), fakePureImplementationsProvider.a("java.util.ArrayList", "java.util.LinkedList"));
        fakePureImplementationsProvider.b(standardClassIds.getMutableSet(), fakePureImplementationsProvider.a("java.util.HashSet", "java.util.TreeSet", "java.util.LinkedHashSet"));
        fakePureImplementationsProvider.b(standardClassIds.getMutableMap(), fakePureImplementationsProvider.a("java.util.HashMap", "java.util.TreeMap", "java.util.LinkedHashMap", "java.util.concurrent.ConcurrentHashMap", "java.util.concurrent.ConcurrentSkipListMap"));
        ClassId.Companion companion = ClassId.Companion;
        fakePureImplementationsProvider.b(companion.topLevel(new FqName("java.util.function.Function")), fakePureImplementationsProvider.a("java.util.function.UnaryOperator"));
        fakePureImplementationsProvider.b(companion.topLevel(new FqName("java.util.function.BiFunction")), fakePureImplementationsProvider.a("java.util.function.BinaryOperator"));
        ArrayList arrayList = new ArrayList(linkedHashMap.size());
        for (Map.Entry entry : linkedHashMap.entrySet()) {
            arrayList.add(v.a(((ClassId) entry.getKey()).asSingleFqName(), ((ClassId) entry.getValue()).asSingleFqName()));
        }
        f32674b = o0.u(arrayList);
    }

    private FakePureImplementationsProvider() {
    }

    private final List a(String... strArr) {
        ArrayList arrayList = new ArrayList(strArr.length);
        for (String str : strArr) {
            arrayList.add(ClassId.Companion.topLevel(new FqName(str)));
        }
        return arrayList;
    }

    private final void b(ClassId classId, List list) {
        Map map = f32673a;
        for (Object obj : list) {
            ClassId classId2 = (ClassId) obj;
            map.put(obj, classId);
        }
    }

    public final FqName getPurelyImplementedInterface(@NotNull FqName classFqName) {
        Intrinsics.checkNotNullParameter(classFqName, "classFqName");
        return (FqName) f32674b.get(classFqName);
    }
}

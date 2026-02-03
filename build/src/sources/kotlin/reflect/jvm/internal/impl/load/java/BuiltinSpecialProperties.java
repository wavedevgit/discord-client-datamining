package kotlin.reflect.jvm.internal.impl.load.java;

import com.facebook.react.devsupport.StackTraceHelper;
import java.util.ArrayList;
import java.util.LinkedHashMap;
import java.util.LinkedHashSet;
import java.util.List;
import java.util.Map;
import java.util.Set;
import kotlin.Pair;
import kotlin.collections.CollectionsKt;
import kotlin.collections.o0;
import kotlin.jvm.internal.Intrinsics;
import kotlin.jvm.internal.SourceDebugExtension;
import kotlin.reflect.jvm.internal.impl.builtins.StandardNames;
import kotlin.reflect.jvm.internal.impl.builtins.jvm.JavaToKotlinClassMap;
import kotlin.reflect.jvm.internal.impl.name.ClassId;
import kotlin.reflect.jvm.internal.impl.name.FqName;
import kotlin.reflect.jvm.internal.impl.name.FqNameUnsafe;
import kotlin.reflect.jvm.internal.impl.name.Name;
import lr.v;
import org.jetbrains.annotations.NotNull;
@SourceDebugExtension({"SMAP\nBuiltinSpecialProperties.kt\nKotlin\n*S Kotlin\n*F\n+ 1 BuiltinSpecialProperties.kt\norg/jetbrains/kotlin/load/java/BuiltinSpecialProperties\n+ 2 _Collections.kt\nkotlin/collections/CollectionsKt___CollectionsKt\n+ 3 Maps.kt\nkotlin/collections/MapsKt__MapsKt\n+ 4 _Maps.kt\nkotlin/collections/MapsKt___MapsKt\n*L\n1#1,50:1\n1563#2:51\n1634#2,3:52\n1504#2:55\n1534#2,3:56\n1537#2,3:66\n1252#2,4:71\n1563#2:78\n1634#2,3:79\n384#3,7:59\n465#3:69\n415#3:70\n153#4,3:75\n*S KotlinDebug\n*F\n+ 1 BuiltinSpecialProperties.kt\norg/jetbrains/kotlin/load/java/BuiltinSpecialProperties\n*L\n31#1:51\n31#1:52,3\n32#1:55\n32#1:56,3\n32#1:66,3\n33#1:71,4\n42#1:78\n42#1:79,3\n32#1:59,7\n33#1:69\n33#1:70\n37#1:75,3\n*E\n"})
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public final class BuiltinSpecialProperties {
    @NotNull
    public static final BuiltinSpecialProperties INSTANCE = new BuiltinSpecialProperties();

    /* renamed from: a  reason: collision with root package name */
    private static final Map f33143a;

    /* renamed from: b  reason: collision with root package name */
    private static final Map f33144b;

    /* renamed from: c  reason: collision with root package name */
    private static final Set f33145c;

    /* renamed from: d  reason: collision with root package name */
    private static final Set f33146d;

    /* renamed from: e  reason: collision with root package name */
    private static final Set f33147e;

    static {
        FqName b10;
        FqName b11;
        FqName a10;
        FqName a11;
        FqName b12;
        FqName a12;
        FqName a13;
        FqName a14;
        FqName a15;
        FqName a16;
        FqName a17;
        FqNameUnsafe fqNameUnsafe = StandardNames.FqNames._enum;
        b10 = BuiltinSpecialPropertiesKt.b(fqNameUnsafe, StackTraceHelper.NAME_KEY);
        Pair a18 = v.a(b10, StandardNames.NAME);
        b11 = BuiltinSpecialPropertiesKt.b(fqNameUnsafe, "ordinal");
        Pair a19 = v.a(b11, Name.identifier("ordinal"));
        a10 = BuiltinSpecialPropertiesKt.a(StandardNames.FqNames.collection, "size");
        Pair a20 = v.a(a10, Name.identifier("size"));
        FqName fqName = StandardNames.FqNames.map;
        a11 = BuiltinSpecialPropertiesKt.a(fqName, "size");
        Pair a21 = v.a(a11, Name.identifier("size"));
        b12 = BuiltinSpecialPropertiesKt.b(StandardNames.FqNames.charSequence, "length");
        Pair a22 = v.a(b12, Name.identifier("length"));
        a12 = BuiltinSpecialPropertiesKt.a(fqName, "keys");
        Pair a23 = v.a(a12, Name.identifier("keySet"));
        a13 = BuiltinSpecialPropertiesKt.a(fqName, "values");
        Pair a24 = v.a(a13, Name.identifier("values"));
        a14 = BuiltinSpecialPropertiesKt.a(fqName, "entries");
        Pair a25 = v.a(a14, Name.identifier("entrySet"));
        a15 = BuiltinSpecialPropertiesKt.a(StandardNames.FqNames.atomicIntArray, "size");
        Pair a26 = v.a(a15, Name.identifier("length"));
        a16 = BuiltinSpecialPropertiesKt.a(StandardNames.FqNames.atomicLongArray, "size");
        Pair a27 = v.a(a16, Name.identifier("length"));
        a17 = BuiltinSpecialPropertiesKt.a(StandardNames.FqNames.atomicArray, "size");
        Map m10 = o0.m(a18, a19, a20, a21, a22, a23, a24, a25, a26, a27, v.a(a17, Name.identifier("length")));
        f33143a = m10;
        Set<Map.Entry> entrySet = m10.entrySet();
        ArrayList<Pair> arrayList = new ArrayList(CollectionsKt.w(entrySet, 10));
        for (Map.Entry entry : entrySet) {
            arrayList.add(new Pair(((FqName) entry.getKey()).shortName(), entry.getValue()));
        }
        LinkedHashMap linkedHashMap = new LinkedHashMap();
        for (Pair pair : arrayList) {
            Name name = (Name) pair.d();
            Object obj = linkedHashMap.get(name);
            if (obj == null) {
                obj = new ArrayList();
                linkedHashMap.put(name, obj);
            }
            ((List) obj).add((Name) pair.c());
        }
        LinkedHashMap linkedHashMap2 = new LinkedHashMap(o0.e(linkedHashMap.size()));
        for (Map.Entry entry2 : linkedHashMap.entrySet()) {
            linkedHashMap2.put(entry2.getKey(), CollectionsKt.e0((Iterable) entry2.getValue()));
        }
        f33144b = linkedHashMap2;
        Map map = f33143a;
        LinkedHashSet linkedHashSet = new LinkedHashSet();
        for (Map.Entry entry3 : map.entrySet()) {
            ClassId mapKotlinToJava = JavaToKotlinClassMap.INSTANCE.mapKotlinToJava(((FqName) entry3.getKey()).parent().toUnsafe());
            Intrinsics.checkNotNull(mapKotlinToJava);
            linkedHashSet.add(mapKotlinToJava.asSingleFqName().child((Name) entry3.getValue()));
        }
        f33145c = linkedHashSet;
        Set keySet = f33143a.keySet();
        f33146d = keySet;
        Set<FqName> set = keySet;
        ArrayList arrayList2 = new ArrayList(CollectionsKt.w(set, 10));
        for (FqName fqName2 : set) {
            arrayList2.add(fqName2.shortName());
        }
        f33147e = CollectionsKt.l1(arrayList2);
    }

    private BuiltinSpecialProperties() {
    }

    @NotNull
    public final Map<FqName, Name> getPROPERTY_FQ_NAME_TO_JVM_GETTER_NAME_MAP() {
        return f33143a;
    }

    @NotNull
    public final List<Name> getPropertyNameCandidatesBySpecialGetterName(@NotNull Name name1) {
        Intrinsics.checkNotNullParameter(name1, "name1");
        List<Name> list = (List) f33144b.get(name1);
        if (list == null) {
            return CollectionsKt.l();
        }
        return list;
    }

    @NotNull
    public final Set<FqName> getSPECIAL_FQ_NAMES() {
        return f33146d;
    }

    @NotNull
    public final Set<Name> getSPECIAL_SHORT_NAMES() {
        return f33147e;
    }
}

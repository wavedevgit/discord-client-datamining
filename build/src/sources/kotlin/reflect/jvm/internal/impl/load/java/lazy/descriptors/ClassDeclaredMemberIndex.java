package kotlin.reflect.jvm.internal.impl.load.java.lazy.descriptors;

import java.util.ArrayList;
import java.util.Collection;
import java.util.LinkedHashMap;
import java.util.LinkedHashSet;
import java.util.List;
import java.util.Map;
import java.util.Set;
import kotlin.collections.CollectionsKt;
import kotlin.jvm.functions.Function1;
import kotlin.jvm.internal.Intrinsics;
import kotlin.jvm.internal.SourceDebugExtension;
import kotlin.reflect.jvm.internal.impl.load.java.structure.JavaClass;
import kotlin.reflect.jvm.internal.impl.load.java.structure.JavaField;
import kotlin.reflect.jvm.internal.impl.load.java.structure.JavaLoadingKt;
import kotlin.reflect.jvm.internal.impl.load.java.structure.JavaMember;
import kotlin.reflect.jvm.internal.impl.load.java.structure.JavaMethod;
import kotlin.reflect.jvm.internal.impl.load.java.structure.JavaRecordComponent;
import kotlin.reflect.jvm.internal.impl.name.Name;
import kotlin.sequences.Sequence;
import org.jetbrains.annotations.NotNull;
@SourceDebugExtension({"SMAP\nDeclaredMemberIndex.kt\nKotlin\n*S Kotlin\n*F\n+ 1 DeclaredMemberIndex.kt\norg/jetbrains/kotlin/load/java/lazy/descriptors/ClassDeclaredMemberIndex\n+ 2 _Sequences.kt\nkotlin/sequences/SequencesKt___SequencesKt\n+ 3 Maps.kt\nkotlin/collections/MapsKt__MapsKt\n+ 4 _Collections.kt\nkotlin/collections/CollectionsKt___CollectionsKt\n*L\n1#1,66:1\n996#2:67\n1025#2,3:68\n1028#2,3:78\n682#2:81\n712#2,4:82\n1163#2,3:95\n1163#2,3:98\n384#3,7:71\n774#4:86\n865#4,2:87\n1208#4,2:89\n1236#4,4:91\n*S KotlinDebug\n*F\n+ 1 DeclaredMemberIndex.kt\norg/jetbrains/kotlin/load/java/lazy/descriptors/ClassDeclaredMemberIndex\n*L\n52#1:67\n52#1:68,3\n52#1:78,3\n53#1:81\n53#1:82,4\n57#1:95,3\n60#1:98,3\n52#1:71,7\n54#1:86\n54#1:87,2\n54#1:89,2\n54#1:91,4\n*E\n"})
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public class ClassDeclaredMemberIndex implements DeclaredMemberIndex {

    /* renamed from: a  reason: collision with root package name */
    private final JavaClass f33345a;

    /* renamed from: b  reason: collision with root package name */
    private final Function1 f33346b;

    /* renamed from: c  reason: collision with root package name */
    private final Function1 f33347c;

    /* renamed from: d  reason: collision with root package name */
    private final Map f33348d;

    /* renamed from: e  reason: collision with root package name */
    private final Map f33349e;

    /* renamed from: f  reason: collision with root package name */
    private final Map f33350f;

    public ClassDeclaredMemberIndex(@NotNull JavaClass jClass, @NotNull Function1<? super JavaMember, Boolean> memberFilter) {
        Intrinsics.checkNotNullParameter(jClass, "jClass");
        Intrinsics.checkNotNullParameter(memberFilter, "memberFilter");
        this.f33345a = jClass;
        this.f33346b = memberFilter;
        a aVar = new a(this);
        this.f33347c = aVar;
        Sequence F = kotlin.sequences.k.F(CollectionsKt.b0(jClass.getMethods()), aVar);
        LinkedHashMap linkedHashMap = new LinkedHashMap();
        for (Object obj : F) {
            Name name = ((JavaMethod) obj).getName();
            Object obj2 = linkedHashMap.get(name);
            if (obj2 == null) {
                obj2 = new ArrayList();
                linkedHashMap.put(name, obj2);
            }
            ((List) obj2).add(obj);
        }
        this.f33348d = linkedHashMap;
        Sequence F2 = kotlin.sequences.k.F(CollectionsKt.b0(this.f33345a.getFields()), this.f33346b);
        LinkedHashMap linkedHashMap2 = new LinkedHashMap();
        for (Object obj3 : F2) {
            linkedHashMap2.put(((JavaField) obj3).getName(), obj3);
        }
        this.f33349e = linkedHashMap2;
        Function1 function1 = this.f33346b;
        ArrayList arrayList = new ArrayList();
        for (Object obj4 : this.f33345a.getRecordComponents()) {
            if (((Boolean) function1.invoke(obj4)).booleanValue()) {
                arrayList.add(obj4);
            }
        }
        LinkedHashMap linkedHashMap3 = new LinkedHashMap(kotlin.ranges.d.d(kotlin.collections.o0.e(CollectionsKt.w(arrayList, 10)), 16));
        for (Object obj5 : arrayList) {
            linkedHashMap3.put(((JavaRecordComponent) obj5).getName(), obj5);
        }
        this.f33350f = linkedHashMap3;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final boolean b(ClassDeclaredMemberIndex classDeclaredMemberIndex, JavaMethod m10) {
        Intrinsics.checkNotNullParameter(m10, "m");
        if (((Boolean) classDeclaredMemberIndex.f33346b.invoke(m10)).booleanValue() && !JavaLoadingKt.isObjectMethodInInterface(m10)) {
            return true;
        }
        return false;
    }

    @Override // kotlin.reflect.jvm.internal.impl.load.java.lazy.descriptors.DeclaredMemberIndex
    public JavaField findFieldByName(@NotNull Name name) {
        Intrinsics.checkNotNullParameter(name, "name");
        return (JavaField) this.f33349e.get(name);
    }

    @Override // kotlin.reflect.jvm.internal.impl.load.java.lazy.descriptors.DeclaredMemberIndex
    @NotNull
    public Collection<JavaMethod> findMethodsByName(@NotNull Name name) {
        Intrinsics.checkNotNullParameter(name, "name");
        List list = (List) this.f33348d.get(name);
        if (list != null) {
            return list;
        }
        return CollectionsKt.l();
    }

    @Override // kotlin.reflect.jvm.internal.impl.load.java.lazy.descriptors.DeclaredMemberIndex
    public JavaRecordComponent findRecordComponentByName(@NotNull Name name) {
        Intrinsics.checkNotNullParameter(name, "name");
        return (JavaRecordComponent) this.f33350f.get(name);
    }

    @Override // kotlin.reflect.jvm.internal.impl.load.java.lazy.descriptors.DeclaredMemberIndex
    @NotNull
    public Set<Name> getFieldNames() {
        Sequence<JavaField> F = kotlin.sequences.k.F(CollectionsKt.b0(this.f33345a.getFields()), this.f33346b);
        LinkedHashSet linkedHashSet = new LinkedHashSet();
        for (JavaField javaField : F) {
            linkedHashSet.add(javaField.getName());
        }
        return linkedHashSet;
    }

    @Override // kotlin.reflect.jvm.internal.impl.load.java.lazy.descriptors.DeclaredMemberIndex
    @NotNull
    public Set<Name> getMethodNames() {
        Sequence<JavaMethod> F = kotlin.sequences.k.F(CollectionsKt.b0(this.f33345a.getMethods()), this.f33347c);
        LinkedHashSet linkedHashSet = new LinkedHashSet();
        for (JavaMethod javaMethod : F) {
            linkedHashSet.add(javaMethod.getName());
        }
        return linkedHashSet;
    }

    @Override // kotlin.reflect.jvm.internal.impl.load.java.lazy.descriptors.DeclaredMemberIndex
    @NotNull
    public Set<Name> getRecordComponentNames() {
        return this.f33350f.keySet();
    }
}

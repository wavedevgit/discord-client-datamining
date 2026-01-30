package kotlin.reflect.jvm.internal.impl.builtins.jvm;

import java.lang.annotation.Annotation;
import java.util.Collection;
import java.util.HashMap;
import java.util.Iterator;
import java.util.List;
import java.util.ListIterator;
import java.util.Map;
import java.util.Set;
import java.util.concurrent.atomic.AtomicBoolean;
import java.util.concurrent.atomic.AtomicInteger;
import java.util.concurrent.atomic.AtomicIntegerArray;
import java.util.concurrent.atomic.AtomicLong;
import java.util.concurrent.atomic.AtomicLongArray;
import java.util.concurrent.atomic.AtomicReference;
import java.util.concurrent.atomic.AtomicReferenceArray;
import kotlin.collections.CollectionsKt;
import kotlin.jvm.internal.Intrinsics;
import kotlin.jvm.internal.SourceDebugExtension;
import kotlin.reflect.jvm.internal.impl.builtins.CompanionObjectMapping;
import kotlin.reflect.jvm.internal.impl.builtins.PrimitiveType;
import kotlin.reflect.jvm.internal.impl.builtins.StandardNames;
import kotlin.reflect.jvm.internal.impl.builtins.functions.FunctionTypeKind;
import kotlin.reflect.jvm.internal.impl.name.ClassId;
import kotlin.reflect.jvm.internal.impl.name.FqName;
import kotlin.reflect.jvm.internal.impl.name.FqNameUnsafe;
import kotlin.reflect.jvm.internal.impl.name.FqNamesUtilKt;
import kotlin.reflect.jvm.internal.impl.name.Name;
import kotlin.reflect.jvm.internal.impl.name.SpecialNames;
import kotlin.reflect.jvm.internal.impl.name.StandardClassIds;
import kotlin.reflect.jvm.internal.impl.resolve.jvm.JvmPrimitiveType;
import kotlin.text.StringsKt;
import org.jetbrains.annotations.NotNull;
@SourceDebugExtension({"SMAP\nJavaToKotlinClassMap.kt\nKotlin\n*S Kotlin\n*F\n+ 1 JavaToKotlinClassMap.kt\norg/jetbrains/kotlin/builtins/jvm/JavaToKotlinClassMap\n+ 2 fake.kt\nkotlin/jvm/internal/FakeKt\n*L\n1#1,227:1\n50#1,2:229\n50#1,2:231\n50#1,2:233\n50#1,2:235\n50#1,2:237\n50#1,2:239\n50#1,2:241\n50#1,2:243\n1#2:228\n*S KotlinDebug\n*F\n+ 1 JavaToKotlinClassMap.kt\norg/jetbrains/kotlin/builtins/jvm/JavaToKotlinClassMap\n*L\n55#1:229,2\n56#1:231,2\n57#1:233,2\n58#1:235,2\n59#1:237,2\n60#1:239,2\n61#1:241,2\n62#1:243,2\n*E\n"})
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public final class JavaToKotlinClassMap {
    @NotNull
    public static final JavaToKotlinClassMap INSTANCE;

    /* renamed from: a  reason: collision with root package name */
    private static final String f33508a;

    /* renamed from: b  reason: collision with root package name */
    private static final String f33509b;

    /* renamed from: c  reason: collision with root package name */
    private static final String f33510c;

    /* renamed from: d  reason: collision with root package name */
    private static final String f33511d;

    /* renamed from: e  reason: collision with root package name */
    private static final ClassId f33512e;

    /* renamed from: f  reason: collision with root package name */
    private static final FqName f33513f;

    /* renamed from: g  reason: collision with root package name */
    private static final ClassId f33514g;

    /* renamed from: h  reason: collision with root package name */
    private static final ClassId f33515h;

    /* renamed from: i  reason: collision with root package name */
    private static final ClassId f33516i;

    /* renamed from: j  reason: collision with root package name */
    private static final HashMap f33517j;

    /* renamed from: k  reason: collision with root package name */
    private static final HashMap f33518k;

    /* renamed from: l  reason: collision with root package name */
    private static final HashMap f33519l;

    /* renamed from: m  reason: collision with root package name */
    private static final HashMap f33520m;

    /* renamed from: n  reason: collision with root package name */
    private static final HashMap f33521n;

    /* renamed from: o  reason: collision with root package name */
    private static final HashMap f33522o;

    /* renamed from: p  reason: collision with root package name */
    private static final List f33523p;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
    public static final class PlatformMutabilityMapping {

        /* renamed from: a  reason: collision with root package name */
        private final ClassId f33524a;

        /* renamed from: b  reason: collision with root package name */
        private final ClassId f33525b;

        /* renamed from: c  reason: collision with root package name */
        private final ClassId f33526c;

        public PlatformMutabilityMapping(@NotNull ClassId javaClass, @NotNull ClassId kotlinReadOnly, @NotNull ClassId kotlinMutable) {
            Intrinsics.checkNotNullParameter(javaClass, "javaClass");
            Intrinsics.checkNotNullParameter(kotlinReadOnly, "kotlinReadOnly");
            Intrinsics.checkNotNullParameter(kotlinMutable, "kotlinMutable");
            this.f33524a = javaClass;
            this.f33525b = kotlinReadOnly;
            this.f33526c = kotlinMutable;
        }

        @NotNull
        public final ClassId component1() {
            return this.f33524a;
        }

        @NotNull
        public final ClassId component2() {
            return this.f33525b;
        }

        @NotNull
        public final ClassId component3() {
            return this.f33526c;
        }

        public boolean equals(Object obj) {
            if (this == obj) {
                return true;
            }
            if (obj instanceof PlatformMutabilityMapping) {
                PlatformMutabilityMapping platformMutabilityMapping = (PlatformMutabilityMapping) obj;
                return Intrinsics.areEqual(this.f33524a, platformMutabilityMapping.f33524a) && Intrinsics.areEqual(this.f33525b, platformMutabilityMapping.f33525b) && Intrinsics.areEqual(this.f33526c, platformMutabilityMapping.f33526c);
            }
            return false;
        }

        @NotNull
        public final ClassId getJavaClass() {
            return this.f33524a;
        }

        public int hashCode() {
            return (((this.f33524a.hashCode() * 31) + this.f33525b.hashCode()) * 31) + this.f33526c.hashCode();
        }

        @NotNull
        public String toString() {
            return "PlatformMutabilityMapping(javaClass=" + this.f33524a + ", kotlinReadOnly=" + this.f33525b + ", kotlinMutable=" + this.f33526c + ')';
        }
    }

    static {
        JvmPrimitiveType[] values;
        JavaToKotlinClassMap javaToKotlinClassMap = new JavaToKotlinClassMap();
        INSTANCE = javaToKotlinClassMap;
        StringBuilder sb2 = new StringBuilder();
        FunctionTypeKind.Function function = FunctionTypeKind.Function.INSTANCE;
        sb2.append(function.getPackageFqName());
        sb2.append('.');
        sb2.append(function.getClassNamePrefix());
        f33508a = sb2.toString();
        StringBuilder sb3 = new StringBuilder();
        FunctionTypeKind.KFunction kFunction = FunctionTypeKind.KFunction.INSTANCE;
        sb3.append(kFunction.getPackageFqName());
        sb3.append('.');
        sb3.append(kFunction.getClassNamePrefix());
        f33509b = sb3.toString();
        StringBuilder sb4 = new StringBuilder();
        FunctionTypeKind.SuspendFunction suspendFunction = FunctionTypeKind.SuspendFunction.INSTANCE;
        sb4.append(suspendFunction.getPackageFqName());
        sb4.append('.');
        sb4.append(suspendFunction.getClassNamePrefix());
        f33510c = sb4.toString();
        StringBuilder sb5 = new StringBuilder();
        FunctionTypeKind.KSuspendFunction kSuspendFunction = FunctionTypeKind.KSuspendFunction.INSTANCE;
        sb5.append(kSuspendFunction.getPackageFqName());
        sb5.append('.');
        sb5.append(kSuspendFunction.getClassNamePrefix());
        f33511d = sb5.toString();
        ClassId.Companion companion = ClassId.Companion;
        ClassId classId = companion.topLevel(new FqName("kotlin.jvm.functions.FunctionN"));
        f33512e = classId;
        f33513f = classId.asSingleFqName();
        StandardClassIds standardClassIds = StandardClassIds.INSTANCE;
        f33514g = standardClassIds.getKFunction();
        f33515h = standardClassIds.getKClass();
        f33516i = javaToKotlinClassMap.g(Class.class);
        f33517j = new HashMap();
        f33518k = new HashMap();
        f33519l = new HashMap();
        f33520m = new HashMap();
        f33521n = new HashMap();
        f33522o = new HashMap();
        ClassId classId2 = companion.topLevel(StandardNames.FqNames.iterable);
        PlatformMutabilityMapping platformMutabilityMapping = new PlatformMutabilityMapping(javaToKotlinClassMap.g(Iterable.class), classId2, new ClassId(classId2.getPackageFqName(), FqNamesUtilKt.tail(StandardNames.FqNames.mutableIterable, classId2.getPackageFqName()), false));
        ClassId classId3 = companion.topLevel(StandardNames.FqNames.iterator);
        PlatformMutabilityMapping platformMutabilityMapping2 = new PlatformMutabilityMapping(javaToKotlinClassMap.g(Iterator.class), classId3, new ClassId(classId3.getPackageFqName(), FqNamesUtilKt.tail(StandardNames.FqNames.mutableIterator, classId3.getPackageFqName()), false));
        ClassId classId4 = companion.topLevel(StandardNames.FqNames.collection);
        PlatformMutabilityMapping platformMutabilityMapping3 = new PlatformMutabilityMapping(javaToKotlinClassMap.g(Collection.class), classId4, new ClassId(classId4.getPackageFqName(), FqNamesUtilKt.tail(StandardNames.FqNames.mutableCollection, classId4.getPackageFqName()), false));
        ClassId classId5 = companion.topLevel(StandardNames.FqNames.list);
        PlatformMutabilityMapping platformMutabilityMapping4 = new PlatformMutabilityMapping(javaToKotlinClassMap.g(List.class), classId5, new ClassId(classId5.getPackageFqName(), FqNamesUtilKt.tail(StandardNames.FqNames.mutableList, classId5.getPackageFqName()), false));
        ClassId classId6 = companion.topLevel(StandardNames.FqNames.set);
        PlatformMutabilityMapping platformMutabilityMapping5 = new PlatformMutabilityMapping(javaToKotlinClassMap.g(Set.class), classId6, new ClassId(classId6.getPackageFqName(), FqNamesUtilKt.tail(StandardNames.FqNames.mutableSet, classId6.getPackageFqName()), false));
        ClassId classId7 = companion.topLevel(StandardNames.FqNames.listIterator);
        PlatformMutabilityMapping platformMutabilityMapping6 = new PlatformMutabilityMapping(javaToKotlinClassMap.g(ListIterator.class), classId7, new ClassId(classId7.getPackageFqName(), FqNamesUtilKt.tail(StandardNames.FqNames.mutableListIterator, classId7.getPackageFqName()), false));
        FqName fqName = StandardNames.FqNames.map;
        ClassId classId8 = companion.topLevel(fqName);
        PlatformMutabilityMapping platformMutabilityMapping7 = new PlatformMutabilityMapping(javaToKotlinClassMap.g(Map.class), classId8, new ClassId(classId8.getPackageFqName(), FqNamesUtilKt.tail(StandardNames.FqNames.mutableMap, classId8.getPackageFqName()), false));
        ClassId createNestedClassId = companion.topLevel(fqName).createNestedClassId(StandardNames.FqNames.mapEntry.shortName());
        List<PlatformMutabilityMapping> o10 = CollectionsKt.o(platformMutabilityMapping, platformMutabilityMapping2, platformMutabilityMapping3, platformMutabilityMapping4, platformMutabilityMapping5, platformMutabilityMapping6, platformMutabilityMapping7, new PlatformMutabilityMapping(javaToKotlinClassMap.g(Map.Entry.class), createNestedClassId, new ClassId(createNestedClassId.getPackageFqName(), FqNamesUtilKt.tail(StandardNames.FqNames.mutableMapEntry, createNestedClassId.getPackageFqName()), false)));
        f33523p = o10;
        javaToKotlinClassMap.f(Object.class, StandardNames.FqNames.any);
        javaToKotlinClassMap.f(String.class, StandardNames.FqNames.string);
        javaToKotlinClassMap.f(CharSequence.class, StandardNames.FqNames.charSequence);
        javaToKotlinClassMap.e(Throwable.class, StandardNames.FqNames.throwable);
        javaToKotlinClassMap.f(Cloneable.class, StandardNames.FqNames.cloneable);
        javaToKotlinClassMap.f(Number.class, StandardNames.FqNames.number);
        javaToKotlinClassMap.e(Comparable.class, StandardNames.FqNames.comparable);
        javaToKotlinClassMap.f(Enum.class, StandardNames.FqNames._enum);
        javaToKotlinClassMap.e(Annotation.class, StandardNames.FqNames.annotation);
        for (PlatformMutabilityMapping platformMutabilityMapping8 : o10) {
            INSTANCE.d(platformMutabilityMapping8);
        }
        for (JvmPrimitiveType jvmPrimitiveType : JvmPrimitiveType.values()) {
            JavaToKotlinClassMap javaToKotlinClassMap2 = INSTANCE;
            ClassId.Companion companion2 = ClassId.Companion;
            FqName wrapperFqName = jvmPrimitiveType.getWrapperFqName();
            Intrinsics.checkNotNullExpressionValue(wrapperFqName, "getWrapperFqName(...)");
            ClassId classId9 = companion2.topLevel(wrapperFqName);
            PrimitiveType primitiveType = jvmPrimitiveType.getPrimitiveType();
            Intrinsics.checkNotNullExpressionValue(primitiveType, "getPrimitiveType(...)");
            javaToKotlinClassMap2.a(classId9, companion2.topLevel(StandardNames.getPrimitiveFqName(primitiveType)));
        }
        for (ClassId classId10 : CompanionObjectMapping.INSTANCE.allClassesWithIntrinsicCompanions()) {
            INSTANCE.a(ClassId.Companion.topLevel(new FqName("kotlin.jvm.internal." + classId10.getShortClassName().asString() + "CompanionObject")), classId10.createNestedClassId(SpecialNames.DEFAULT_NAME_FOR_COMPANION_OBJECT));
        }
        for (int i10 = 0; i10 < 23; i10++) {
            JavaToKotlinClassMap javaToKotlinClassMap3 = INSTANCE;
            javaToKotlinClassMap3.a(ClassId.Companion.topLevel(new FqName("kotlin.jvm.functions.Function" + i10)), StandardNames.getFunctionClassId(i10));
            javaToKotlinClassMap3.c(new FqName(f33509b + i10), f33514g);
        }
        for (int i11 = 0; i11 < 22; i11++) {
            FunctionTypeKind.KSuspendFunction kSuspendFunction2 = FunctionTypeKind.KSuspendFunction.INSTANCE;
            INSTANCE.c(new FqName((kSuspendFunction2.getPackageFqName() + '.' + kSuspendFunction2.getClassNamePrefix()) + i11), f33514g);
        }
        JavaToKotlinClassMap javaToKotlinClassMap4 = INSTANCE;
        javaToKotlinClassMap4.c(new FqName("kotlin.concurrent.atomics.AtomicInt"), javaToKotlinClassMap4.g(AtomicInteger.class));
        javaToKotlinClassMap4.c(new FqName("kotlin.concurrent.atomics.AtomicLong"), javaToKotlinClassMap4.g(AtomicLong.class));
        javaToKotlinClassMap4.c(new FqName("kotlin.concurrent.atomics.AtomicBoolean"), javaToKotlinClassMap4.g(AtomicBoolean.class));
        javaToKotlinClassMap4.c(new FqName("kotlin.concurrent.atomics.AtomicReference"), javaToKotlinClassMap4.g(AtomicReference.class));
        javaToKotlinClassMap4.c(new FqName("kotlin.concurrent.atomics.AtomicIntArray"), javaToKotlinClassMap4.g(AtomicIntegerArray.class));
        javaToKotlinClassMap4.c(new FqName("kotlin.concurrent.atomics.AtomicLongArray"), javaToKotlinClassMap4.g(AtomicLongArray.class));
        javaToKotlinClassMap4.c(new FqName("kotlin.concurrent.atomics.AtomicArray"), javaToKotlinClassMap4.g(AtomicReferenceArray.class));
        javaToKotlinClassMap4.c(StandardNames.FqNames.nothing.toSafe(), javaToKotlinClassMap4.g(Void.class));
    }

    private JavaToKotlinClassMap() {
    }

    private final void a(ClassId classId, ClassId classId2) {
        b(classId, classId2);
        c(classId2.asSingleFqName(), classId);
    }

    private final void b(ClassId classId, ClassId classId2) {
        f33517j.put(classId.asSingleFqName().toUnsafe(), classId2);
    }

    private final void c(FqName fqName, ClassId classId) {
        f33518k.put(fqName.toUnsafe(), classId);
    }

    private final void d(PlatformMutabilityMapping platformMutabilityMapping) {
        ClassId component1 = platformMutabilityMapping.component1();
        ClassId component2 = platformMutabilityMapping.component2();
        ClassId component3 = platformMutabilityMapping.component3();
        a(component1, component2);
        c(component3.asSingleFqName(), component1);
        f33521n.put(component3, component2);
        f33522o.put(component2, component3);
        FqName asSingleFqName = component2.asSingleFqName();
        FqName asSingleFqName2 = component3.asSingleFqName();
        f33519l.put(component3.asSingleFqName().toUnsafe(), asSingleFqName);
        f33520m.put(asSingleFqName.toUnsafe(), asSingleFqName2);
    }

    private final void e(Class cls, FqName fqName) {
        a(g(cls), ClassId.Companion.topLevel(fqName));
    }

    private final void f(Class cls, FqNameUnsafe fqNameUnsafe) {
        e(cls, fqNameUnsafe.toSafe());
    }

    private final ClassId g(Class cls) {
        if (!cls.isPrimitive()) {
            cls.isArray();
        }
        Class<?> declaringClass = cls.getDeclaringClass();
        if (declaringClass == null) {
            ClassId.Companion companion = ClassId.Companion;
            String canonicalName = cls.getCanonicalName();
            Intrinsics.checkNotNullExpressionValue(canonicalName, "getCanonicalName(...)");
            return companion.topLevel(new FqName(canonicalName));
        }
        ClassId g10 = g(declaringClass);
        Name identifier = Name.identifier(cls.getSimpleName());
        Intrinsics.checkNotNullExpressionValue(identifier, "identifier(...)");
        return g10.createNestedClassId(identifier);
    }

    private final boolean h(FqNameUnsafe fqNameUnsafe, String str) {
        Integer intOrNull;
        String asString = fqNameUnsafe.asString();
        if (!StringsKt.P(asString, str, false, 2, null)) {
            return false;
        }
        String substring = asString.substring(str.length());
        Intrinsics.checkNotNullExpressionValue(substring, "substring(...)");
        if (StringsKt.P0(substring, '0', false, 2, null) || (intOrNull = StringsKt.toIntOrNull(substring)) == null || intOrNull.intValue() < 23) {
            return false;
        }
        return true;
    }

    @NotNull
    public final FqName getFUNCTION_N_FQ_NAME() {
        return f33513f;
    }

    @NotNull
    public final List<PlatformMutabilityMapping> getMutabilityMappings() {
        return f33523p;
    }

    public final boolean isMutable(FqNameUnsafe fqNameUnsafe) {
        return f33519l.containsKey(fqNameUnsafe);
    }

    public final boolean isReadOnly(FqNameUnsafe fqNameUnsafe) {
        return f33520m.containsKey(fqNameUnsafe);
    }

    public final ClassId mapJavaToKotlin(@NotNull FqName fqName) {
        Intrinsics.checkNotNullParameter(fqName, "fqName");
        return (ClassId) f33517j.get(fqName.toUnsafe());
    }

    public final ClassId mapKotlinToJava(@NotNull FqNameUnsafe kotlinFqName) {
        Intrinsics.checkNotNullParameter(kotlinFqName, "kotlinFqName");
        if (h(kotlinFqName, f33508a)) {
            return f33512e;
        }
        if (h(kotlinFqName, f33510c)) {
            return f33512e;
        }
        if (h(kotlinFqName, f33509b)) {
            return f33514g;
        }
        if (h(kotlinFqName, f33511d)) {
            return f33514g;
        }
        return (ClassId) f33518k.get(kotlinFqName);
    }

    public final FqName mutableToReadOnly(FqNameUnsafe fqNameUnsafe) {
        return (FqName) f33519l.get(fqNameUnsafe);
    }

    public final FqName readOnlyToMutable(FqNameUnsafe fqNameUnsafe) {
        return (FqName) f33520m.get(fqNameUnsafe);
    }
}

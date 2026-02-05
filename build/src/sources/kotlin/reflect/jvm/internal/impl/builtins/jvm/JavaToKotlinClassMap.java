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
    private static final String f32198a;

    /* renamed from: b  reason: collision with root package name */
    private static final String f32199b;

    /* renamed from: c  reason: collision with root package name */
    private static final String f32200c;

    /* renamed from: d  reason: collision with root package name */
    private static final String f32201d;

    /* renamed from: e  reason: collision with root package name */
    private static final ClassId f32202e;

    /* renamed from: f  reason: collision with root package name */
    private static final FqName f32203f;

    /* renamed from: g  reason: collision with root package name */
    private static final ClassId f32204g;

    /* renamed from: h  reason: collision with root package name */
    private static final ClassId f32205h;

    /* renamed from: i  reason: collision with root package name */
    private static final ClassId f32206i;

    /* renamed from: j  reason: collision with root package name */
    private static final HashMap f32207j;

    /* renamed from: k  reason: collision with root package name */
    private static final HashMap f32208k;

    /* renamed from: l  reason: collision with root package name */
    private static final HashMap f32209l;

    /* renamed from: m  reason: collision with root package name */
    private static final HashMap f32210m;

    /* renamed from: n  reason: collision with root package name */
    private static final HashMap f32211n;

    /* renamed from: o  reason: collision with root package name */
    private static final HashMap f32212o;

    /* renamed from: p  reason: collision with root package name */
    private static final List f32213p;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
    public static final class PlatformMutabilityMapping {

        /* renamed from: a  reason: collision with root package name */
        private final ClassId f32214a;

        /* renamed from: b  reason: collision with root package name */
        private final ClassId f32215b;

        /* renamed from: c  reason: collision with root package name */
        private final ClassId f32216c;

        public PlatformMutabilityMapping(@NotNull ClassId javaClass, @NotNull ClassId kotlinReadOnly, @NotNull ClassId kotlinMutable) {
            Intrinsics.checkNotNullParameter(javaClass, "javaClass");
            Intrinsics.checkNotNullParameter(kotlinReadOnly, "kotlinReadOnly");
            Intrinsics.checkNotNullParameter(kotlinMutable, "kotlinMutable");
            this.f32214a = javaClass;
            this.f32215b = kotlinReadOnly;
            this.f32216c = kotlinMutable;
        }

        @NotNull
        public final ClassId component1() {
            return this.f32214a;
        }

        @NotNull
        public final ClassId component2() {
            return this.f32215b;
        }

        @NotNull
        public final ClassId component3() {
            return this.f32216c;
        }

        public boolean equals(Object obj) {
            if (this == obj) {
                return true;
            }
            if (obj instanceof PlatformMutabilityMapping) {
                PlatformMutabilityMapping platformMutabilityMapping = (PlatformMutabilityMapping) obj;
                return Intrinsics.areEqual(this.f32214a, platformMutabilityMapping.f32214a) && Intrinsics.areEqual(this.f32215b, platformMutabilityMapping.f32215b) && Intrinsics.areEqual(this.f32216c, platformMutabilityMapping.f32216c);
            }
            return false;
        }

        @NotNull
        public final ClassId getJavaClass() {
            return this.f32214a;
        }

        public int hashCode() {
            return (((this.f32214a.hashCode() * 31) + this.f32215b.hashCode()) * 31) + this.f32216c.hashCode();
        }

        @NotNull
        public String toString() {
            return "PlatformMutabilityMapping(javaClass=" + this.f32214a + ", kotlinReadOnly=" + this.f32215b + ", kotlinMutable=" + this.f32216c + ')';
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
        f32198a = sb2.toString();
        StringBuilder sb3 = new StringBuilder();
        FunctionTypeKind.KFunction kFunction = FunctionTypeKind.KFunction.INSTANCE;
        sb3.append(kFunction.getPackageFqName());
        sb3.append('.');
        sb3.append(kFunction.getClassNamePrefix());
        f32199b = sb3.toString();
        StringBuilder sb4 = new StringBuilder();
        FunctionTypeKind.SuspendFunction suspendFunction = FunctionTypeKind.SuspendFunction.INSTANCE;
        sb4.append(suspendFunction.getPackageFqName());
        sb4.append('.');
        sb4.append(suspendFunction.getClassNamePrefix());
        f32200c = sb4.toString();
        StringBuilder sb5 = new StringBuilder();
        FunctionTypeKind.KSuspendFunction kSuspendFunction = FunctionTypeKind.KSuspendFunction.INSTANCE;
        sb5.append(kSuspendFunction.getPackageFqName());
        sb5.append('.');
        sb5.append(kSuspendFunction.getClassNamePrefix());
        f32201d = sb5.toString();
        ClassId.Companion companion = ClassId.Companion;
        ClassId classId = companion.topLevel(new FqName("kotlin.jvm.functions.FunctionN"));
        f32202e = classId;
        f32203f = classId.asSingleFqName();
        StandardClassIds standardClassIds = StandardClassIds.INSTANCE;
        f32204g = standardClassIds.getKFunction();
        f32205h = standardClassIds.getKClass();
        f32206i = javaToKotlinClassMap.g(Class.class);
        f32207j = new HashMap();
        f32208k = new HashMap();
        f32209l = new HashMap();
        f32210m = new HashMap();
        f32211n = new HashMap();
        f32212o = new HashMap();
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
        f32213p = o10;
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
            javaToKotlinClassMap3.c(new FqName(f32199b + i10), f32204g);
        }
        for (int i11 = 0; i11 < 22; i11++) {
            FunctionTypeKind.KSuspendFunction kSuspendFunction2 = FunctionTypeKind.KSuspendFunction.INSTANCE;
            INSTANCE.c(new FqName((kSuspendFunction2.getPackageFqName() + '.' + kSuspendFunction2.getClassNamePrefix()) + i11), f32204g);
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
        f32207j.put(classId.asSingleFqName().toUnsafe(), classId2);
    }

    private final void c(FqName fqName, ClassId classId) {
        f32208k.put(fqName.toUnsafe(), classId);
    }

    private final void d(PlatformMutabilityMapping platformMutabilityMapping) {
        ClassId component1 = platformMutabilityMapping.component1();
        ClassId component2 = platformMutabilityMapping.component2();
        ClassId component3 = platformMutabilityMapping.component3();
        a(component1, component2);
        c(component3.asSingleFqName(), component1);
        f32211n.put(component3, component2);
        f32212o.put(component2, component3);
        FqName asSingleFqName = component2.asSingleFqName();
        FqName asSingleFqName2 = component3.asSingleFqName();
        f32209l.put(component3.asSingleFqName().toUnsafe(), asSingleFqName);
        f32210m.put(asSingleFqName.toUnsafe(), asSingleFqName2);
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
        return f32203f;
    }

    @NotNull
    public final List<PlatformMutabilityMapping> getMutabilityMappings() {
        return f32213p;
    }

    public final boolean isMutable(FqNameUnsafe fqNameUnsafe) {
        return f32209l.containsKey(fqNameUnsafe);
    }

    public final boolean isReadOnly(FqNameUnsafe fqNameUnsafe) {
        return f32210m.containsKey(fqNameUnsafe);
    }

    public final ClassId mapJavaToKotlin(@NotNull FqName fqName) {
        Intrinsics.checkNotNullParameter(fqName, "fqName");
        return (ClassId) f32207j.get(fqName.toUnsafe());
    }

    public final ClassId mapKotlinToJava(@NotNull FqNameUnsafe kotlinFqName) {
        Intrinsics.checkNotNullParameter(kotlinFqName, "kotlinFqName");
        if (h(kotlinFqName, f32198a)) {
            return f32202e;
        }
        if (h(kotlinFqName, f32200c)) {
            return f32202e;
        }
        if (h(kotlinFqName, f32199b)) {
            return f32204g;
        }
        if (h(kotlinFqName, f32201d)) {
            return f32204g;
        }
        return (ClassId) f32208k.get(kotlinFqName);
    }

    public final FqName mutableToReadOnly(FqNameUnsafe fqNameUnsafe) {
        return (FqName) f32209l.get(fqNameUnsafe);
    }

    public final FqName readOnlyToMutable(FqNameUnsafe fqNameUnsafe) {
        return (FqName) f32210m.get(fqNameUnsafe);
    }
}

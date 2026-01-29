package kotlin.reflect.jvm.internal.impl.builtins;

import com.facebook.react.devsupport.StackTraceHelper;
import java.util.HashMap;
import java.util.HashSet;
import java.util.List;
import java.util.Map;
import java.util.Set;
import kotlin.collections.x0;
import kotlin.jvm.internal.Intrinsics;
import kotlin.jvm.internal.SourceDebugExtension;
import kotlin.reflect.jvm.internal.impl.builtins.functions.FunctionTypeKind;
import kotlin.reflect.jvm.internal.impl.name.ClassId;
import kotlin.reflect.jvm.internal.impl.name.FqName;
import kotlin.reflect.jvm.internal.impl.name.FqNameUnsafe;
import kotlin.reflect.jvm.internal.impl.name.Name;
import kotlin.reflect.jvm.internal.impl.utils.CollectionsKt;
import org.jetbrains.annotations.NotNull;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public final class StandardNames {
    @NotNull
    public static final FqName ANNOTATION_PACKAGE_FQ_NAME;
    @NotNull
    public static final Name BACKING_FIELD;
    @NotNull
    public static final FqName BUILT_INS_PACKAGE_FQ_NAME;
    @NotNull
    public static final Set<FqName> BUILT_INS_PACKAGE_FQ_NAMES;
    @NotNull
    public static final Name BUILT_INS_PACKAGE_NAME;
    @NotNull
    public static final Name CHAR_CODE;
    @NotNull
    public static final FqName COLLECTIONS_PACKAGE_FQ_NAME;
    @NotNull
    public static final FqName CONCURRENT_ATOMICS_PACKAGE_FQ_NAME;
    @NotNull
    public static final FqName CONCURRENT_PACKAGE_FQ_NAME;
    @NotNull
    public static final Name CONTEXT_FUNCTION_TYPE_PARAMETER_COUNT_NAME;
    @NotNull
    public static final FqName CONTINUATION_INTERFACE_FQ_NAME;
    @NotNull
    public static final FqName COROUTINES_INTRINSICS_PACKAGE_FQ_NAME;
    @NotNull
    public static final FqName COROUTINES_JVM_INTERNAL_PACKAGE_FQ_NAME;
    @NotNull
    public static final FqName COROUTINES_PACKAGE_FQ_NAME;
    @NotNull
    public static final String DATA_CLASS_COMPONENT_PREFIX;
    @NotNull
    public static final Name DATA_CLASS_COPY;
    @NotNull
    public static final Name DEFAULT_VALUE_PARAMETER;
    @NotNull
    public static final FqName DYNAMIC_FQ_NAME;
    @NotNull
    public static final Name ENUM_ENTRIES;
    @NotNull
    public static final Name ENUM_VALUES;
    @NotNull
    public static final Name ENUM_VALUE_OF;
    @NotNull
    public static final Name EQUALS_NAME;
    @NotNull
    public static final Name HASHCODE_NAME;
    @NotNull
    public static final Name IMPLICIT_LAMBDA_PARAMETER_NAME;
    @NotNull
    public static final StandardNames INSTANCE = new StandardNames();
    @NotNull
    public static final FqName KOTLIN_INTERNAL_FQ_NAME;
    @NotNull
    public static final FqName KOTLIN_REFLECT_FQ_NAME;
    @NotNull
    public static final Name MAIN;
    @NotNull
    public static final Name NAME;
    @NotNull
    public static final Name NEXT_CHAR;
    @NotNull
    public static final List<String> PREFIXES;
    @NotNull
    public static final FqName RANGES_PACKAGE_FQ_NAME;
    @NotNull
    public static final FqName RESULT_FQ_NAME;
    @NotNull
    public static final FqName TEXT_PACKAGE_FQ_NAME;
    @NotNull
    public static final Name TO_STRING_NAME;

    /* renamed from: a  reason: collision with root package name */
    private static final FqName f33442a;

    @SourceDebugExtension({"SMAP\nStandardNames.kt\nKotlin\n*S Kotlin\n*F\n+ 1 StandardNames.kt\norg/jetbrains/kotlin/builtins/StandardNames$FqNames\n+ 2 _Arrays.kt\nkotlin/collections/ArraysKt___ArraysKt\n*L\n1#1,330:1\n11563#2,3:331\n11563#2,3:334\n*S KotlinDebug\n*F\n+ 1 StandardNames.kt\norg/jetbrains/kotlin/builtins/StandardNames$FqNames\n*L\n218#1:331,3\n222#1:334,3\n*E\n"})
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
    public static final class FqNames {
        @NotNull
        public static final FqNames INSTANCE;
        @NotNull
        public static final FqNameUnsafe _boolean;
        @NotNull
        public static final FqNameUnsafe _byte;
        @NotNull
        public static final FqNameUnsafe _char;
        @NotNull
        public static final FqNameUnsafe _double;
        @NotNull
        public static final FqNameUnsafe _enum;
        @NotNull
        public static final FqNameUnsafe _float;
        @NotNull
        public static final FqNameUnsafe _int;
        @NotNull
        public static final FqNameUnsafe _long;
        @NotNull
        public static final FqNameUnsafe _short;
        @NotNull
        public static final FqName accessibleLateinitPropertyLiteral;
        @NotNull
        public static final FqName annotation;
        @NotNull
        public static final FqName annotationRetention;
        @NotNull
        public static final FqName annotationTarget;
        @NotNull
        public static final FqNameUnsafe any;
        @NotNull
        public static final FqNameUnsafe array;
        @NotNull
        public static final Map<FqNameUnsafe, PrimitiveType> arrayClassFqNameToPrimitiveType;
        @NotNull
        public static final FqName atomicArray;
        @NotNull
        public static final FqName atomicBoolean;
        @NotNull
        public static final FqName atomicInt;
        @NotNull
        public static final FqName atomicIntArray;
        @NotNull
        public static final FqName atomicLong;
        @NotNull
        public static final FqName atomicLongArray;
        @NotNull
        public static final FqName atomicReference;
        @NotNull
        public static final FqNameUnsafe charSequence;
        @NotNull
        public static final FqNameUnsafe cloneable;
        @NotNull
        public static final FqName collection;
        @NotNull
        public static final FqName comparable;
        @NotNull
        public static final FqName contextFunctionTypeParams;
        @NotNull
        public static final FqName deprecated;
        @NotNull
        public static final FqName deprecatedSinceKotlin;
        @NotNull
        public static final FqName deprecationLevel;
        @NotNull
        public static final FqName extensionFunctionType;
        @NotNull
        public static final FqNameUnsafe findAssociatedObject;
        @NotNull
        public static final Map<FqNameUnsafe, PrimitiveType> fqNameToPrimitiveType;
        @NotNull
        public static final FqNameUnsafe functionSupertype;
        @NotNull
        public static final FqNameUnsafe intRange;
        @NotNull
        public static final FqName iterable;
        @NotNull
        public static final FqName iterator;
        @NotNull
        public static final FqNameUnsafe kCallable;
        @NotNull
        public static final FqNameUnsafe kClass;
        @NotNull
        public static final FqNameUnsafe kDeclarationContainer;
        @NotNull
        public static final FqNameUnsafe kMutableProperty0;
        @NotNull
        public static final FqNameUnsafe kMutableProperty1;
        @NotNull
        public static final FqNameUnsafe kMutableProperty2;
        @NotNull
        public static final FqNameUnsafe kMutablePropertyFqName;
        @NotNull
        public static final ClassId kProperty;
        @NotNull
        public static final FqNameUnsafe kProperty0;
        @NotNull
        public static final FqNameUnsafe kProperty1;
        @NotNull
        public static final FqNameUnsafe kProperty2;
        @NotNull
        public static final FqNameUnsafe kPropertyFqName;
        @NotNull
        public static final FqNameUnsafe kType;
        @NotNull
        public static final FqName list;
        @NotNull
        public static final FqName listIterator;
        @NotNull
        public static final FqNameUnsafe longRange;
        @NotNull
        public static final FqName map;
        @NotNull
        public static final FqName mapEntry;
        @NotNull
        public static final FqName mustBeDocumented;
        @NotNull
        public static final FqName mutableCollection;
        @NotNull
        public static final FqName mutableIterable;
        @NotNull
        public static final FqName mutableIterator;
        @NotNull
        public static final FqName mutableList;
        @NotNull
        public static final FqName mutableListIterator;
        @NotNull
        public static final FqName mutableMap;
        @NotNull
        public static final FqName mutableMapEntry;
        @NotNull
        public static final FqName mutableSet;
        @NotNull
        public static final FqNameUnsafe nothing;
        @NotNull
        public static final FqNameUnsafe number;
        @NotNull
        public static final FqName parameterName;
        @NotNull
        public static final ClassId parameterNameClassId;
        @NotNull
        public static final FqName platformDependent;
        @NotNull
        public static final ClassId platformDependentClassId;
        @NotNull
        public static final Set<Name> primitiveArrayTypeShortNames;
        @NotNull
        public static final Set<Name> primitiveTypeShortNames;
        @NotNull
        public static final FqName publishedApi;
        @NotNull
        public static final FqName repeatable;
        @NotNull
        public static final ClassId repeatableClassId;
        @NotNull
        public static final FqName replaceWith;
        @NotNull
        public static final FqName retention;
        @NotNull
        public static final ClassId retentionClassId;
        @NotNull
        public static final FqName set;
        @NotNull
        public static final FqNameUnsafe string;
        @NotNull
        public static final FqName suppress;
        @NotNull
        public static final FqName target;
        @NotNull
        public static final ClassId targetClassId;
        @NotNull
        public static final FqName throwable;
        @NotNull
        public static final ClassId uByte;
        @NotNull
        public static final FqName uByteArrayFqName;
        @NotNull
        public static final FqName uByteFqName;
        @NotNull
        public static final ClassId uInt;
        @NotNull
        public static final FqName uIntArrayFqName;
        @NotNull
        public static final FqName uIntFqName;
        @NotNull
        public static final ClassId uLong;
        @NotNull
        public static final FqName uLongArrayFqName;
        @NotNull
        public static final FqName uLongFqName;
        @NotNull
        public static final ClassId uShort;
        @NotNull
        public static final FqName uShortArrayFqName;
        @NotNull
        public static final FqName uShortFqName;
        @NotNull
        public static final FqNameUnsafe unit;
        @NotNull
        public static final FqName unsafeVariance;

        static {
            PrimitiveType[] values;
            PrimitiveType[] values2;
            FqNames fqNames = new FqNames();
            INSTANCE = fqNames;
            any = fqNames.e("Any");
            nothing = fqNames.e("Nothing");
            cloneable = fqNames.e("Cloneable");
            suppress = fqNames.d("Suppress");
            unit = fqNames.e("Unit");
            charSequence = fqNames.e("CharSequence");
            string = fqNames.e("String");
            array = fqNames.e("Array");
            _boolean = fqNames.e("Boolean");
            _char = fqNames.e("Char");
            _byte = fqNames.e("Byte");
            _short = fqNames.e("Short");
            _int = fqNames.e("Int");
            _long = fqNames.e("Long");
            _float = fqNames.e("Float");
            _double = fqNames.e("Double");
            number = fqNames.e("Number");
            _enum = fqNames.e("Enum");
            functionSupertype = fqNames.e("Function");
            throwable = fqNames.d("Throwable");
            comparable = fqNames.d("Comparable");
            intRange = fqNames.g("IntRange");
            longRange = fqNames.g("LongRange");
            deprecated = fqNames.d("Deprecated");
            deprecatedSinceKotlin = fqNames.d("DeprecatedSinceKotlin");
            deprecationLevel = fqNames.d("DeprecationLevel");
            replaceWith = fqNames.d("ReplaceWith");
            extensionFunctionType = fqNames.d("ExtensionFunctionType");
            contextFunctionTypeParams = fqNames.d("ContextFunctionTypeParams");
            FqName d10 = fqNames.d("ParameterName");
            parameterName = d10;
            ClassId.Companion companion = ClassId.Companion;
            parameterNameClassId = companion.topLevel(d10);
            annotation = fqNames.d("Annotation");
            FqName a10 = fqNames.a("Target");
            target = a10;
            targetClassId = companion.topLevel(a10);
            annotationTarget = fqNames.a("AnnotationTarget");
            annotationRetention = fqNames.a("AnnotationRetention");
            FqName a11 = fqNames.a("Retention");
            retention = a11;
            retentionClassId = companion.topLevel(a11);
            FqName a12 = fqNames.a("Repeatable");
            repeatable = a12;
            repeatableClassId = companion.topLevel(a12);
            mustBeDocumented = fqNames.a("MustBeDocumented");
            unsafeVariance = fqNames.d("UnsafeVariance");
            publishedApi = fqNames.d("PublishedApi");
            accessibleLateinitPropertyLiteral = fqNames.f("AccessibleLateinitPropertyLiteral");
            FqName fqName = new FqName("kotlin.internal.PlatformDependent");
            platformDependent = fqName;
            platformDependentClassId = companion.topLevel(fqName);
            iterator = fqNames.b("Iterator");
            iterable = fqNames.b("Iterable");
            collection = fqNames.b("Collection");
            list = fqNames.b("List");
            listIterator = fqNames.b("ListIterator");
            set = fqNames.b("Set");
            FqName b10 = fqNames.b("Map");
            map = b10;
            Name identifier = Name.identifier("Entry");
            Intrinsics.checkNotNullExpressionValue(identifier, "identifier(...)");
            mapEntry = b10.child(identifier);
            mutableIterator = fqNames.b("MutableIterator");
            mutableIterable = fqNames.b("MutableIterable");
            mutableCollection = fqNames.b("MutableCollection");
            mutableList = fqNames.b("MutableList");
            mutableListIterator = fqNames.b("MutableListIterator");
            mutableSet = fqNames.b("MutableSet");
            FqName b11 = fqNames.b("MutableMap");
            mutableMap = b11;
            Name identifier2 = Name.identifier("MutableEntry");
            Intrinsics.checkNotNullExpressionValue(identifier2, "identifier(...)");
            mutableMapEntry = b11.child(identifier2);
            kClass = reflect("KClass");
            kType = reflect("KType");
            kCallable = reflect("KCallable");
            kProperty0 = reflect("KProperty0");
            kProperty1 = reflect("KProperty1");
            kProperty2 = reflect("KProperty2");
            kMutableProperty0 = reflect("KMutableProperty0");
            kMutableProperty1 = reflect("KMutableProperty1");
            kMutableProperty2 = reflect("KMutableProperty2");
            FqNameUnsafe reflect = reflect("KProperty");
            kPropertyFqName = reflect;
            kMutablePropertyFqName = reflect("KMutableProperty");
            kProperty = companion.topLevel(reflect.toSafe());
            kDeclarationContainer = reflect("KDeclarationContainer");
            findAssociatedObject = reflect("findAssociatedObject");
            FqName d11 = fqNames.d("UByte");
            uByteFqName = d11;
            FqName d12 = fqNames.d("UShort");
            uShortFqName = d12;
            FqName d13 = fqNames.d("UInt");
            uIntFqName = d13;
            FqName d14 = fqNames.d("ULong");
            uLongFqName = d14;
            uByte = companion.topLevel(d11);
            uShort = companion.topLevel(d12);
            uInt = companion.topLevel(d13);
            uLong = companion.topLevel(d14);
            uByteArrayFqName = fqNames.d("UByteArray");
            uShortArrayFqName = fqNames.d("UShortArray");
            uIntArrayFqName = fqNames.d("UIntArray");
            uLongArrayFqName = fqNames.d("ULongArray");
            atomicInt = fqNames.c("AtomicInt");
            atomicLong = fqNames.c("AtomicLong");
            atomicBoolean = fqNames.c("AtomicBoolean");
            atomicReference = fqNames.c("AtomicReference");
            atomicIntArray = fqNames.c("AtomicIntArray");
            atomicLongArray = fqNames.c("AtomicLongArray");
            atomicArray = fqNames.c("AtomicArray");
            HashSet newHashSetWithExpectedSize = CollectionsKt.newHashSetWithExpectedSize(PrimitiveType.values().length);
            for (PrimitiveType primitiveType : PrimitiveType.values()) {
                newHashSetWithExpectedSize.add(primitiveType.getTypeName());
            }
            primitiveTypeShortNames = newHashSetWithExpectedSize;
            HashSet newHashSetWithExpectedSize2 = CollectionsKt.newHashSetWithExpectedSize(PrimitiveType.values().length);
            for (PrimitiveType primitiveType2 : PrimitiveType.values()) {
                newHashSetWithExpectedSize2.add(primitiveType2.getArrayTypeName());
            }
            primitiveArrayTypeShortNames = newHashSetWithExpectedSize2;
            HashMap newHashMapWithExpectedSize = CollectionsKt.newHashMapWithExpectedSize(PrimitiveType.values().length);
            for (PrimitiveType primitiveType3 : PrimitiveType.values()) {
                FqNames fqNames2 = INSTANCE;
                String asString = primitiveType3.getTypeName().asString();
                Intrinsics.checkNotNullExpressionValue(asString, "asString(...)");
                newHashMapWithExpectedSize.put(fqNames2.e(asString), primitiveType3);
            }
            fqNameToPrimitiveType = newHashMapWithExpectedSize;
            HashMap newHashMapWithExpectedSize2 = CollectionsKt.newHashMapWithExpectedSize(PrimitiveType.values().length);
            for (PrimitiveType primitiveType4 : PrimitiveType.values()) {
                FqNames fqNames3 = INSTANCE;
                String asString2 = primitiveType4.getArrayTypeName().asString();
                Intrinsics.checkNotNullExpressionValue(asString2, "asString(...)");
                newHashMapWithExpectedSize2.put(fqNames3.e(asString2), primitiveType4);
            }
            arrayClassFqNameToPrimitiveType = newHashMapWithExpectedSize2;
        }

        private FqNames() {
        }

        private final FqName a(String str) {
            FqName fqName = StandardNames.ANNOTATION_PACKAGE_FQ_NAME;
            Name identifier = Name.identifier(str);
            Intrinsics.checkNotNullExpressionValue(identifier, "identifier(...)");
            return fqName.child(identifier);
        }

        private final FqName b(String str) {
            FqName fqName = StandardNames.COLLECTIONS_PACKAGE_FQ_NAME;
            Name identifier = Name.identifier(str);
            Intrinsics.checkNotNullExpressionValue(identifier, "identifier(...)");
            return fqName.child(identifier);
        }

        private final FqName c(String str) {
            FqName fqName = StandardNames.CONCURRENT_ATOMICS_PACKAGE_FQ_NAME;
            Name identifier = Name.identifier(str);
            Intrinsics.checkNotNullExpressionValue(identifier, "identifier(...)");
            return fqName.child(identifier);
        }

        private final FqName d(String str) {
            FqName fqName = StandardNames.BUILT_INS_PACKAGE_FQ_NAME;
            Name identifier = Name.identifier(str);
            Intrinsics.checkNotNullExpressionValue(identifier, "identifier(...)");
            return fqName.child(identifier);
        }

        private final FqNameUnsafe e(String str) {
            return d(str).toUnsafe();
        }

        private final FqName f(String str) {
            FqName fqName = StandardNames.KOTLIN_INTERNAL_FQ_NAME;
            Name identifier = Name.identifier(str);
            Intrinsics.checkNotNullExpressionValue(identifier, "identifier(...)");
            return fqName.child(identifier);
        }

        private final FqNameUnsafe g(String str) {
            FqName fqName = StandardNames.RANGES_PACKAGE_FQ_NAME;
            Name identifier = Name.identifier(str);
            Intrinsics.checkNotNullExpressionValue(identifier, "identifier(...)");
            return fqName.child(identifier).toUnsafe();
        }

        @NotNull
        public static final FqNameUnsafe reflect(@NotNull String simpleName) {
            Intrinsics.checkNotNullParameter(simpleName, "simpleName");
            FqName fqName = StandardNames.KOTLIN_REFLECT_FQ_NAME;
            Name identifier = Name.identifier(simpleName);
            Intrinsics.checkNotNullExpressionValue(identifier, "identifier(...)");
            return fqName.child(identifier).toUnsafe();
        }
    }

    static {
        Name identifier = Name.identifier("field");
        Intrinsics.checkNotNullExpressionValue(identifier, "identifier(...)");
        BACKING_FIELD = identifier;
        Name identifier2 = Name.identifier("value");
        Intrinsics.checkNotNullExpressionValue(identifier2, "identifier(...)");
        DEFAULT_VALUE_PARAMETER = identifier2;
        Name identifier3 = Name.identifier("values");
        Intrinsics.checkNotNullExpressionValue(identifier3, "identifier(...)");
        ENUM_VALUES = identifier3;
        Name identifier4 = Name.identifier("entries");
        Intrinsics.checkNotNullExpressionValue(identifier4, "identifier(...)");
        ENUM_ENTRIES = identifier4;
        Name identifier5 = Name.identifier("valueOf");
        Intrinsics.checkNotNullExpressionValue(identifier5, "identifier(...)");
        ENUM_VALUE_OF = identifier5;
        Name identifier6 = Name.identifier("copy");
        Intrinsics.checkNotNullExpressionValue(identifier6, "identifier(...)");
        DATA_CLASS_COPY = identifier6;
        DATA_CLASS_COMPONENT_PREFIX = "component";
        Name identifier7 = Name.identifier("hashCode");
        Intrinsics.checkNotNullExpressionValue(identifier7, "identifier(...)");
        HASHCODE_NAME = identifier7;
        Name identifier8 = Name.identifier("toString");
        Intrinsics.checkNotNullExpressionValue(identifier8, "identifier(...)");
        TO_STRING_NAME = identifier8;
        Name identifier9 = Name.identifier("equals");
        Intrinsics.checkNotNullExpressionValue(identifier9, "identifier(...)");
        EQUALS_NAME = identifier9;
        Name identifier10 = Name.identifier("code");
        Intrinsics.checkNotNullExpressionValue(identifier10, "identifier(...)");
        CHAR_CODE = identifier10;
        Name identifier11 = Name.identifier(StackTraceHelper.NAME_KEY);
        Intrinsics.checkNotNullExpressionValue(identifier11, "identifier(...)");
        NAME = identifier11;
        Name identifier12 = Name.identifier("main");
        Intrinsics.checkNotNullExpressionValue(identifier12, "identifier(...)");
        MAIN = identifier12;
        Name identifier13 = Name.identifier("nextChar");
        Intrinsics.checkNotNullExpressionValue(identifier13, "identifier(...)");
        NEXT_CHAR = identifier13;
        Name identifier14 = Name.identifier("it");
        Intrinsics.checkNotNullExpressionValue(identifier14, "identifier(...)");
        IMPLICIT_LAMBDA_PARAMETER_NAME = identifier14;
        Name identifier15 = Name.identifier("count");
        Intrinsics.checkNotNullExpressionValue(identifier15, "identifier(...)");
        CONTEXT_FUNCTION_TYPE_PARAMETER_COUNT_NAME = identifier15;
        DYNAMIC_FQ_NAME = new FqName("<dynamic>");
        FqName fqName = new FqName("kotlin.coroutines");
        COROUTINES_PACKAGE_FQ_NAME = fqName;
        COROUTINES_JVM_INTERNAL_PACKAGE_FQ_NAME = new FqName("kotlin.coroutines.jvm.internal");
        COROUTINES_INTRINSICS_PACKAGE_FQ_NAME = new FqName("kotlin.coroutines.intrinsics");
        Name identifier16 = Name.identifier("Continuation");
        Intrinsics.checkNotNullExpressionValue(identifier16, "identifier(...)");
        CONTINUATION_INTERFACE_FQ_NAME = fqName.child(identifier16);
        RESULT_FQ_NAME = new FqName("kotlin.Result");
        FqName fqName2 = new FqName("kotlin.reflect");
        KOTLIN_REFLECT_FQ_NAME = fqName2;
        PREFIXES = kotlin.collections.CollectionsKt.o("KProperty", "KMutableProperty", "KFunction", "KSuspendFunction");
        Name identifier17 = Name.identifier("kotlin");
        Intrinsics.checkNotNullExpressionValue(identifier17, "identifier(...)");
        BUILT_INS_PACKAGE_NAME = identifier17;
        FqName fqName3 = FqName.Companion.topLevel(identifier17);
        BUILT_INS_PACKAGE_FQ_NAME = fqName3;
        Name identifier18 = Name.identifier("annotation");
        Intrinsics.checkNotNullExpressionValue(identifier18, "identifier(...)");
        FqName child = fqName3.child(identifier18);
        ANNOTATION_PACKAGE_FQ_NAME = child;
        Name identifier19 = Name.identifier("collections");
        Intrinsics.checkNotNullExpressionValue(identifier19, "identifier(...)");
        FqName child2 = fqName3.child(identifier19);
        COLLECTIONS_PACKAGE_FQ_NAME = child2;
        Name identifier20 = Name.identifier("ranges");
        Intrinsics.checkNotNullExpressionValue(identifier20, "identifier(...)");
        FqName child3 = fqName3.child(identifier20);
        RANGES_PACKAGE_FQ_NAME = child3;
        Name identifier21 = Name.identifier("text");
        Intrinsics.checkNotNullExpressionValue(identifier21, "identifier(...)");
        TEXT_PACKAGE_FQ_NAME = fqName3.child(identifier21);
        Name identifier22 = Name.identifier("internal");
        Intrinsics.checkNotNullExpressionValue(identifier22, "identifier(...)");
        FqName child4 = fqName3.child(identifier22);
        KOTLIN_INTERNAL_FQ_NAME = child4;
        Name identifier23 = Name.identifier("concurrent");
        Intrinsics.checkNotNullExpressionValue(identifier23, "identifier(...)");
        FqName child5 = fqName3.child(identifier23);
        CONCURRENT_PACKAGE_FQ_NAME = child5;
        Name identifier24 = Name.identifier("atomics");
        Intrinsics.checkNotNullExpressionValue(identifier24, "identifier(...)");
        FqName child6 = child5.child(identifier24);
        CONCURRENT_ATOMICS_PACKAGE_FQ_NAME = child6;
        f33442a = new FqName("error.NonExistentClass");
        BUILT_INS_PACKAGE_FQ_NAMES = x0.i(fqName3, child2, child3, child, fqName2, child4, fqName, child6);
    }

    private StandardNames() {
    }

    @NotNull
    public static final ClassId getFunctionClassId(int i10) {
        FqName fqName = BUILT_INS_PACKAGE_FQ_NAME;
        Name identifier = Name.identifier(getFunctionName(i10));
        Intrinsics.checkNotNullExpressionValue(identifier, "identifier(...)");
        return new ClassId(fqName, identifier);
    }

    @NotNull
    public static final String getFunctionName(int i10) {
        return "Function" + i10;
    }

    @NotNull
    public static final FqName getPrimitiveFqName(@NotNull PrimitiveType primitiveType) {
        Intrinsics.checkNotNullParameter(primitiveType, "primitiveType");
        return BUILT_INS_PACKAGE_FQ_NAME.child(primitiveType.getTypeName());
    }

    @NotNull
    public static final String getSuspendFunctionName(int i10) {
        return FunctionTypeKind.SuspendFunction.INSTANCE.getClassNamePrefix() + i10;
    }

    public static final boolean isPrimitiveArray(@NotNull FqNameUnsafe arrayFqName) {
        Intrinsics.checkNotNullParameter(arrayFqName, "arrayFqName");
        if (FqNames.arrayClassFqNameToPrimitiveType.get(arrayFqName) != null) {
            return true;
        }
        return false;
    }
}

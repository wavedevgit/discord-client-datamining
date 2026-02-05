package is;

import java.lang.annotation.Annotation;
import java.lang.reflect.Array;
import java.lang.reflect.Type;
import java.util.ArrayList;
import java.util.Collection;
import java.util.Iterator;
import java.util.List;
import java.util.Map;
import kotlin.Pair;
import kotlin.collections.CollectionsKt;
import kotlin.jvm.functions.Function2;
import kotlin.jvm.internal.FunctionReference;
import kotlin.jvm.internal.Intrinsics;
import kotlin.jvm.internal.PropertyReference;
import kotlin.jvm.internal.RepeatableContainer;
import kotlin.reflect.KCallable;
import kotlin.reflect.KType;
import kotlin.reflect.KVisibility;
import kotlin.reflect.jvm.internal.impl.builtins.KotlinBuiltIns;
import kotlin.reflect.jvm.internal.impl.builtins.PrimitiveType;
import kotlin.reflect.jvm.internal.impl.builtins.jvm.JavaToKotlinClassMap;
import kotlin.reflect.jvm.internal.impl.descriptors.CallableDescriptor;
import kotlin.reflect.jvm.internal.impl.descriptors.ClassDescriptor;
import kotlin.reflect.jvm.internal.impl.descriptors.ClassifierDescriptor;
import kotlin.reflect.jvm.internal.impl.descriptors.DeclarationDescriptor;
import kotlin.reflect.jvm.internal.impl.descriptors.DescriptorVisibilities;
import kotlin.reflect.jvm.internal.impl.descriptors.DescriptorVisibility;
import kotlin.reflect.jvm.internal.impl.descriptors.ModuleDescriptor;
import kotlin.reflect.jvm.internal.impl.descriptors.ReceiverParameterDescriptor;
import kotlin.reflect.jvm.internal.impl.descriptors.SourceElement;
import kotlin.reflect.jvm.internal.impl.descriptors.annotations.Annotated;
import kotlin.reflect.jvm.internal.impl.descriptors.annotations.AnnotationDescriptor;
import kotlin.reflect.jvm.internal.impl.descriptors.annotations.Annotations;
import kotlin.reflect.jvm.internal.impl.descriptors.runtime.components.ReflectAnnotationSource;
import kotlin.reflect.jvm.internal.impl.descriptors.runtime.components.ReflectJavaClassFinderKt;
import kotlin.reflect.jvm.internal.impl.descriptors.runtime.components.ReflectKotlinClass;
import kotlin.reflect.jvm.internal.impl.descriptors.runtime.components.RuntimeModuleData;
import kotlin.reflect.jvm.internal.impl.descriptors.runtime.components.RuntimeSourceElementFactory;
import kotlin.reflect.jvm.internal.impl.descriptors.runtime.structure.ReflectClassUtilKt;
import kotlin.reflect.jvm.internal.impl.descriptors.runtime.structure.ReflectJavaAnnotation;
import kotlin.reflect.jvm.internal.impl.descriptors.runtime.structure.ReflectJavaClass;
import kotlin.reflect.jvm.internal.impl.descriptors.runtime.structure.ReflectJavaElement;
import kotlin.reflect.jvm.internal.impl.load.kotlin.KotlinJvmBinaryClass;
import kotlin.reflect.jvm.internal.impl.load.kotlin.KotlinJvmBinarySourceElement;
import kotlin.reflect.jvm.internal.impl.metadata.ProtoBuf;
import kotlin.reflect.jvm.internal.impl.metadata.deserialization.BinaryVersion;
import kotlin.reflect.jvm.internal.impl.metadata.deserialization.NameResolver;
import kotlin.reflect.jvm.internal.impl.metadata.deserialization.TypeTable;
import kotlin.reflect.jvm.internal.impl.metadata.deserialization.VersionRequirementTable;
import kotlin.reflect.jvm.internal.impl.name.ClassId;
import kotlin.reflect.jvm.internal.impl.name.FqName;
import kotlin.reflect.jvm.internal.impl.name.Name;
import kotlin.reflect.jvm.internal.impl.protobuf.MessageLite;
import kotlin.reflect.jvm.internal.impl.resolve.InlineClassesUtilsKt;
import kotlin.reflect.jvm.internal.impl.resolve.constants.AnnotationValue;
import kotlin.reflect.jvm.internal.impl.resolve.constants.ArrayValue;
import kotlin.reflect.jvm.internal.impl.resolve.constants.ConstantValue;
import kotlin.reflect.jvm.internal.impl.resolve.constants.EnumValue;
import kotlin.reflect.jvm.internal.impl.resolve.constants.ErrorValue;
import kotlin.reflect.jvm.internal.impl.resolve.constants.KClassValue;
import kotlin.reflect.jvm.internal.impl.resolve.constants.NullValue;
import kotlin.reflect.jvm.internal.impl.resolve.constants.TypedArrayValue;
import kotlin.reflect.jvm.internal.impl.resolve.descriptorUtil.DescriptorUtilsKt;
import kotlin.reflect.jvm.internal.impl.serialization.deserialization.DeserializationComponents;
import kotlin.reflect.jvm.internal.impl.serialization.deserialization.DeserializationContext;
import kotlin.reflect.jvm.internal.impl.serialization.deserialization.MemberDeserializer;
import kotlin.reflect.jvm.internal.impl.types.KotlinType;
import kotlin.reflect.jvm.internal.impl.types.TypeProjection;
import kotlin.text.StringsKt;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public abstract class j3 {

    /* renamed from: a  reason: collision with root package name */
    private static final FqName f30242a = new FqName("kotlin.jvm.JvmStatic");

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
    public /* synthetic */ class a {

        /* renamed from: a  reason: collision with root package name */
        public static final /* synthetic */ int[] f30243a;

        static {
            int[] iArr = new int[PrimitiveType.values().length];
            try {
                iArr[PrimitiveType.BOOLEAN.ordinal()] = 1;
            } catch (NoSuchFieldError unused) {
            }
            try {
                iArr[PrimitiveType.CHAR.ordinal()] = 2;
            } catch (NoSuchFieldError unused2) {
            }
            try {
                iArr[PrimitiveType.BYTE.ordinal()] = 3;
            } catch (NoSuchFieldError unused3) {
            }
            try {
                iArr[PrimitiveType.SHORT.ordinal()] = 4;
            } catch (NoSuchFieldError unused4) {
            }
            try {
                iArr[PrimitiveType.INT.ordinal()] = 5;
            } catch (NoSuchFieldError unused5) {
            }
            try {
                iArr[PrimitiveType.FLOAT.ordinal()] = 6;
            } catch (NoSuchFieldError unused6) {
            }
            try {
                iArr[PrimitiveType.LONG.ordinal()] = 7;
            } catch (NoSuchFieldError unused7) {
            }
            try {
                iArr[PrimitiveType.DOUBLE.ordinal()] = 8;
            } catch (NoSuchFieldError unused8) {
            }
            f30243a = iArr;
        }
    }

    /* JADX WARN: Multi-variable type inference failed */
    private static final Object a(ArrayValue arrayValue, ClassLoader classLoader) {
        KotlinType type;
        Class o10;
        TypedArrayValue typedArrayValue = arrayValue instanceof TypedArrayValue ? (TypedArrayValue) arrayValue : null;
        if (typedArrayValue == null || (type = typedArrayValue.getType()) == null) {
            return null;
        }
        List<? extends ConstantValue<?>> value = arrayValue.getValue();
        ArrayList arrayList = new ArrayList(CollectionsKt.w(value, 10));
        Iterator<T> it = value.iterator();
        while (it.hasNext()) {
            arrayList.add(s((ConstantValue) it.next(), classLoader));
        }
        PrimitiveType primitiveArrayElementType = KotlinBuiltIns.getPrimitiveArrayElementType(type);
        int i10 = 0;
        switch (primitiveArrayElementType == null ? -1 : a.f30243a[primitiveArrayElementType.ordinal()]) {
            case -1:
                if (KotlinBuiltIns.isArray(type)) {
                    KotlinType type2 = ((TypeProjection) CollectionsKt.Q0(type.getArguments())).getType();
                    Intrinsics.checkNotNullExpressionValue(type2, "getType(...)");
                    ClassifierDescriptor mo1199getDeclarationDescriptor = type2.getConstructor().mo1199getDeclarationDescriptor();
                    ClassDescriptor classDescriptor = mo1199getDeclarationDescriptor instanceof ClassDescriptor ? (ClassDescriptor) mo1199getDeclarationDescriptor : null;
                    if (classDescriptor != null) {
                        if (KotlinBuiltIns.isString(type2)) {
                            int size = arrayValue.getValue().size();
                            String[] strArr = new String[size];
                            while (i10 < size) {
                                Object obj = arrayList.get(i10);
                                Intrinsics.checkNotNull(obj, "null cannot be cast to non-null type kotlin.String");
                                strArr[i10] = obj;
                                i10++;
                            }
                            return strArr;
                        } else if (KotlinBuiltIns.isKClass(classDescriptor)) {
                            int size2 = arrayValue.getValue().size();
                            Class[] clsArr = new Class[size2];
                            while (i10 < size2) {
                                Object obj2 = arrayList.get(i10);
                                Intrinsics.checkNotNull(obj2, "null cannot be cast to non-null type java.lang.Class<*>");
                                clsArr[i10] = obj2;
                                i10++;
                            }
                            return clsArr;
                        } else {
                            ClassId classId = DescriptorUtilsKt.getClassId(classDescriptor);
                            if (classId == null || (o10 = o(classLoader, classId, 0, 4, null)) == null) {
                                return null;
                            }
                            Object newInstance = Array.newInstance(o10, arrayValue.getValue().size());
                            Intrinsics.checkNotNull(newInstance, "null cannot be cast to non-null type kotlin.Array<in kotlin.Any?>");
                            Object[] objArr = (Object[]) newInstance;
                            int size3 = arrayList.size();
                            while (i10 < size3) {
                                objArr[i10] = arrayList.get(i10);
                                i10++;
                            }
                            return objArr;
                        }
                    }
                    throw new IllegalStateException(("Not a class type: " + type2).toString());
                }
                throw new IllegalStateException(("Not an array type: " + type).toString());
            case 0:
            default:
                throw new or.p();
            case 1:
                int size4 = arrayValue.getValue().size();
                boolean[] zArr = new boolean[size4];
                while (i10 < size4) {
                    Object obj3 = arrayList.get(i10);
                    Intrinsics.checkNotNull(obj3, "null cannot be cast to non-null type kotlin.Boolean");
                    zArr[i10] = ((Boolean) obj3).booleanValue();
                    i10++;
                }
                return zArr;
            case 2:
                int size5 = arrayValue.getValue().size();
                char[] cArr = new char[size5];
                while (i10 < size5) {
                    Object obj4 = arrayList.get(i10);
                    Intrinsics.checkNotNull(obj4, "null cannot be cast to non-null type kotlin.Char");
                    cArr[i10] = ((Character) obj4).charValue();
                    i10++;
                }
                return cArr;
            case 3:
                int size6 = arrayValue.getValue().size();
                byte[] bArr = new byte[size6];
                while (i10 < size6) {
                    Object obj5 = arrayList.get(i10);
                    Intrinsics.checkNotNull(obj5, "null cannot be cast to non-null type kotlin.Byte");
                    bArr[i10] = ((Byte) obj5).byteValue();
                    i10++;
                }
                return bArr;
            case 4:
                int size7 = arrayValue.getValue().size();
                short[] sArr = new short[size7];
                while (i10 < size7) {
                    Object obj6 = arrayList.get(i10);
                    Intrinsics.checkNotNull(obj6, "null cannot be cast to non-null type kotlin.Short");
                    sArr[i10] = ((Short) obj6).shortValue();
                    i10++;
                }
                return sArr;
            case 5:
                int size8 = arrayValue.getValue().size();
                int[] iArr = new int[size8];
                while (i10 < size8) {
                    Object obj7 = arrayList.get(i10);
                    Intrinsics.checkNotNull(obj7, "null cannot be cast to non-null type kotlin.Int");
                    iArr[i10] = ((Integer) obj7).intValue();
                    i10++;
                }
                return iArr;
            case 6:
                int size9 = arrayValue.getValue().size();
                float[] fArr = new float[size9];
                while (i10 < size9) {
                    Object obj8 = arrayList.get(i10);
                    Intrinsics.checkNotNull(obj8, "null cannot be cast to non-null type kotlin.Float");
                    fArr[i10] = ((Float) obj8).floatValue();
                    i10++;
                }
                return fArr;
            case 7:
                int size10 = arrayValue.getValue().size();
                long[] jArr = new long[size10];
                while (i10 < size10) {
                    Object obj9 = arrayList.get(i10);
                    Intrinsics.checkNotNull(obj9, "null cannot be cast to non-null type kotlin.Long");
                    jArr[i10] = ((Long) obj9).longValue();
                    i10++;
                }
                return jArr;
            case 8:
                int size11 = arrayValue.getValue().size();
                double[] dArr = new double[size11];
                while (i10 < size11) {
                    Object obj10 = arrayList.get(i10);
                    Intrinsics.checkNotNull(obj10, "null cannot be cast to non-null type kotlin.Double");
                    dArr[i10] = ((Double) obj10).doubleValue();
                    i10++;
                }
                return dArr;
        }
    }

    public static final a0 b(Object obj) {
        a0 a0Var;
        if (obj instanceof a0) {
            a0Var = (a0) obj;
        } else {
            a0Var = null;
        }
        if (a0Var == null) {
            h1 c10 = c(obj);
            if (c10 != null) {
                return c10;
            }
            return d(obj);
        }
        return a0Var;
    }

    public static final h1 c(Object obj) {
        h1 h1Var;
        FunctionReference functionReference;
        KCallable kCallable;
        if (obj instanceof h1) {
            h1Var = (h1) obj;
        } else {
            h1Var = null;
        }
        if (h1Var == null) {
            if (obj instanceof FunctionReference) {
                functionReference = (FunctionReference) obj;
            } else {
                functionReference = null;
            }
            if (functionReference != null) {
                kCallable = functionReference.compute();
            } else {
                kCallable = null;
            }
            if (!(kCallable instanceof h1)) {
                return null;
            }
            return (h1) kCallable;
        }
        return h1Var;
    }

    public static final j2 d(Object obj) {
        j2 j2Var;
        PropertyReference propertyReference;
        KCallable kCallable;
        if (obj instanceof j2) {
            j2Var = (j2) obj;
        } else {
            j2Var = null;
        }
        if (j2Var == null) {
            if (obj instanceof PropertyReference) {
                propertyReference = (PropertyReference) obj;
            } else {
                propertyReference = null;
            }
            if (propertyReference != null) {
                kCallable = propertyReference.compute();
            } else {
                kCallable = null;
            }
            if (!(kCallable instanceof j2)) {
                return null;
            }
            return (j2) kCallable;
        }
        return j2Var;
    }

    public static final List e(Annotated annotated) {
        Annotation p10;
        ReflectJavaAnnotation reflectJavaAnnotation;
        Intrinsics.checkNotNullParameter(annotated, "<this>");
        Annotations annotations = annotated.getAnnotations();
        ArrayList arrayList = new ArrayList();
        for (AnnotationDescriptor annotationDescriptor : annotations) {
            SourceElement source = annotationDescriptor.getSource();
            if (source instanceof ReflectAnnotationSource) {
                p10 = ((ReflectAnnotationSource) source).getAnnotation();
            } else if (source instanceof RuntimeSourceElementFactory.RuntimeSourceElement) {
                ReflectJavaElement javaElement = ((RuntimeSourceElementFactory.RuntimeSourceElement) source).getJavaElement();
                if (javaElement instanceof ReflectJavaAnnotation) {
                    reflectJavaAnnotation = (ReflectJavaAnnotation) javaElement;
                } else {
                    reflectJavaAnnotation = null;
                }
                if (reflectJavaAnnotation != null) {
                    p10 = reflectJavaAnnotation.getAnnotation();
                } else {
                    p10 = null;
                }
            } else {
                p10 = p(annotationDescriptor);
            }
            if (p10 != null) {
                arrayList.add(p10);
            }
        }
        return t(arrayList);
    }

    public static final Class f(Class cls) {
        Intrinsics.checkNotNullParameter(cls, "<this>");
        return Array.newInstance(cls, 0).getClass();
    }

    public static final Object g(Type type) {
        Intrinsics.checkNotNullParameter(type, "type");
        if (type instanceof Class) {
            Class cls = (Class) type;
            if (cls.isPrimitive()) {
                if (Intrinsics.areEqual(cls, Boolean.TYPE)) {
                    return Boolean.FALSE;
                }
                if (Intrinsics.areEqual(cls, Character.TYPE)) {
                    return (char) 0;
                }
                if (Intrinsics.areEqual(cls, Byte.TYPE)) {
                    return (byte) 0;
                }
                if (Intrinsics.areEqual(cls, Short.TYPE)) {
                    return (short) 0;
                }
                if (Intrinsics.areEqual(cls, Integer.TYPE)) {
                    return 0;
                }
                if (Intrinsics.areEqual(cls, Float.TYPE)) {
                    return Float.valueOf(0.0f);
                }
                if (Intrinsics.areEqual(cls, Long.TYPE)) {
                    return 0L;
                }
                if (Intrinsics.areEqual(cls, Double.TYPE)) {
                    return Double.valueOf(0.0d);
                }
                if (Intrinsics.areEqual(cls, Void.TYPE)) {
                    throw new IllegalStateException("Parameter with void type is illegal");
                }
                throw new UnsupportedOperationException("Unknown primitive: " + type);
            }
            return null;
        }
        return null;
    }

    public static final CallableDescriptor h(Class moduleAnchor, MessageLite proto, NameResolver nameResolver, TypeTable typeTable, BinaryVersion metadataVersion, Function2 createDescriptor) {
        List<ProtoBuf.TypeParameter> typeParameterList;
        Intrinsics.checkNotNullParameter(moduleAnchor, "moduleAnchor");
        Intrinsics.checkNotNullParameter(proto, "proto");
        Intrinsics.checkNotNullParameter(nameResolver, "nameResolver");
        Intrinsics.checkNotNullParameter(typeTable, "typeTable");
        Intrinsics.checkNotNullParameter(metadataVersion, "metadataVersion");
        Intrinsics.checkNotNullParameter(createDescriptor, "createDescriptor");
        RuntimeModuleData a10 = y2.a(moduleAnchor);
        if (proto instanceof ProtoBuf.Function) {
            typeParameterList = ((ProtoBuf.Function) proto).getTypeParameterList();
        } else if (proto instanceof ProtoBuf.Property) {
            typeParameterList = ((ProtoBuf.Property) proto).getTypeParameterList();
        } else {
            throw new IllegalStateException(("Unsupported message: " + proto).toString());
        }
        List<ProtoBuf.TypeParameter> list = typeParameterList;
        DeserializationComponents deserialization = a10.getDeserialization();
        ModuleDescriptor module = a10.getModule();
        VersionRequirementTable empty = VersionRequirementTable.Companion.getEMPTY();
        Intrinsics.checkNotNull(list);
        return (CallableDescriptor) createDescriptor.invoke(new MemberDeserializer(new DeserializationContext(deserialization, nameResolver, module, typeTable, empty, metadataVersion, null, null, list)), proto);
    }

    public static final ReceiverParameterDescriptor i(CallableDescriptor callableDescriptor) {
        Intrinsics.checkNotNullParameter(callableDescriptor, "<this>");
        if (callableDescriptor.getDispatchReceiverParameter() != null) {
            DeclarationDescriptor containingDeclaration = callableDescriptor.getContainingDeclaration();
            Intrinsics.checkNotNull(containingDeclaration, "null cannot be cast to non-null type org.jetbrains.kotlin.descriptors.ClassDescriptor");
            return ((ClassDescriptor) containingDeclaration).getThisAsReceiverParameter();
        }
        return null;
    }

    public static final FqName j() {
        return f30242a;
    }

    public static final boolean k(KType kType) {
        t2 t2Var;
        KotlinType l10;
        Intrinsics.checkNotNullParameter(kType, "<this>");
        if (kType instanceof t2) {
            t2Var = (t2) kType;
        } else {
            t2Var = null;
        }
        if (t2Var == null || (l10 = t2Var.l()) == null || !InlineClassesUtilsKt.needsMfvcFlattening(l10)) {
            return false;
        }
        return true;
    }

    public static final boolean l(KType kType) {
        t2 t2Var;
        KotlinType l10;
        Intrinsics.checkNotNullParameter(kType, "<this>");
        if (kType instanceof t2) {
            t2Var = (t2) kType;
        } else {
            t2Var = null;
        }
        if (t2Var == null || (l10 = t2Var.l()) == null || !InlineClassesUtilsKt.isInlineClassType(l10)) {
            return false;
        }
        return true;
    }

    private static final Class m(ClassLoader classLoader, String str, String str2, int i10) {
        if (Intrinsics.areEqual(str, "kotlin")) {
            switch (str2.hashCode()) {
                case -901856463:
                    if (str2.equals("BooleanArray")) {
                        return boolean[].class;
                    }
                    break;
                case -763279523:
                    if (str2.equals("ShortArray")) {
                        return short[].class;
                    }
                    break;
                case -755911549:
                    if (str2.equals("CharArray")) {
                        return char[].class;
                    }
                    break;
                case -74930671:
                    if (str2.equals("ByteArray")) {
                        return byte[].class;
                    }
                    break;
                case 22374632:
                    if (str2.equals("DoubleArray")) {
                        return double[].class;
                    }
                    break;
                case 63537721:
                    if (str2.equals("Array")) {
                        return Object[].class;
                    }
                    break;
                case 601811914:
                    if (str2.equals("IntArray")) {
                        return int[].class;
                    }
                    break;
                case 948852093:
                    if (str2.equals("FloatArray")) {
                        return float[].class;
                    }
                    break;
                case 2104330525:
                    if (str2.equals("LongArray")) {
                        return long[].class;
                    }
                    break;
            }
        }
        StringBuilder sb2 = new StringBuilder();
        if (i10 > 0) {
            for (int i11 = 0; i11 < i10; i11++) {
                sb2.append("[");
            }
            sb2.append("L");
        }
        if (str.length() > 0) {
            sb2.append(str + '.');
        }
        sb2.append(StringsKt.I(str2, '.', '$', false, 4, null));
        if (i10 > 0) {
            sb2.append(";");
        }
        return ReflectJavaClassFinderKt.tryLoadClass(classLoader, sb2.toString());
    }

    private static final Class n(ClassLoader classLoader, ClassId classId, int i10) {
        ClassId mapKotlinToJava = JavaToKotlinClassMap.INSTANCE.mapKotlinToJava(classId.asSingleFqName().toUnsafe());
        if (mapKotlinToJava != null) {
            classId = mapKotlinToJava;
        }
        return m(classLoader, classId.getPackageFqName().asString(), classId.getRelativeClassName().asString(), i10);
    }

    static /* synthetic */ Class o(ClassLoader classLoader, ClassId classId, int i10, int i11, Object obj) {
        if ((i11 & 4) != 0) {
            i10 = 0;
        }
        return n(classLoader, classId, i10);
    }

    private static final Annotation p(AnnotationDescriptor annotationDescriptor) {
        Class cls;
        Pair pair;
        ClassDescriptor annotationClass = DescriptorUtilsKt.getAnnotationClass(annotationDescriptor);
        if (annotationClass != null) {
            cls = q(annotationClass);
        } else {
            cls = null;
        }
        if (cls == null) {
            cls = null;
        }
        if (cls == null) {
            return null;
        }
        ArrayList arrayList = new ArrayList();
        Iterator<T> it = annotationDescriptor.getAllValueArguments().entrySet().iterator();
        while (it.hasNext()) {
            Map.Entry entry = (Map.Entry) it.next();
            Name name = (Name) entry.getKey();
            ClassLoader classLoader = cls.getClassLoader();
            Intrinsics.checkNotNullExpressionValue(classLoader, "getClassLoader(...)");
            Object s10 = s((ConstantValue) entry.getValue(), classLoader);
            if (s10 != null) {
                pair = or.v.a(name.asString(), s10);
            } else {
                pair = null;
            }
            if (pair != null) {
                arrayList.add(pair);
            }
        }
        return (Annotation) js.f.h(cls, kotlin.collections.o0.u(arrayList), null, 4, null);
    }

    public static final Class q(ClassDescriptor classDescriptor) {
        Intrinsics.checkNotNullParameter(classDescriptor, "<this>");
        SourceElement source = classDescriptor.getSource();
        Intrinsics.checkNotNullExpressionValue(source, "getSource(...)");
        if (source instanceof KotlinJvmBinarySourceElement) {
            KotlinJvmBinaryClass binaryClass = ((KotlinJvmBinarySourceElement) source).getBinaryClass();
            Intrinsics.checkNotNull(binaryClass, "null cannot be cast to non-null type org.jetbrains.kotlin.descriptors.runtime.components.ReflectKotlinClass");
            return ((ReflectKotlinClass) binaryClass).getKlass();
        } else if (source instanceof RuntimeSourceElementFactory.RuntimeSourceElement) {
            ReflectJavaElement javaElement = ((RuntimeSourceElementFactory.RuntimeSourceElement) source).getJavaElement();
            Intrinsics.checkNotNull(javaElement, "null cannot be cast to non-null type org.jetbrains.kotlin.descriptors.runtime.structure.ReflectJavaClass");
            return ((ReflectJavaClass) javaElement).getElement();
        } else {
            ClassId classId = DescriptorUtilsKt.getClassId(classDescriptor);
            if (classId == null) {
                return null;
            }
            return n(ReflectClassUtilKt.getSafeClassLoader(classDescriptor.getClass()), classId, 0);
        }
    }

    public static final KVisibility r(DescriptorVisibility descriptorVisibility) {
        Intrinsics.checkNotNullParameter(descriptorVisibility, "<this>");
        if (Intrinsics.areEqual(descriptorVisibility, DescriptorVisibilities.PUBLIC)) {
            return KVisibility.f32097d;
        }
        if (Intrinsics.areEqual(descriptorVisibility, DescriptorVisibilities.PROTECTED)) {
            return KVisibility.f32098e;
        }
        if (Intrinsics.areEqual(descriptorVisibility, DescriptorVisibilities.INTERNAL)) {
            return KVisibility.f32099i;
        }
        if (!Intrinsics.areEqual(descriptorVisibility, DescriptorVisibilities.PRIVATE) && !Intrinsics.areEqual(descriptorVisibility, DescriptorVisibilities.PRIVATE_TO_THIS)) {
            return null;
        }
        return KVisibility.f32100o;
    }

    private static final Object s(ConstantValue constantValue, ClassLoader classLoader) {
        ClassDescriptor classDescriptor;
        if (constantValue instanceof AnnotationValue) {
            return p(((AnnotationValue) constantValue).getValue());
        }
        if (constantValue instanceof ArrayValue) {
            return a((ArrayValue) constantValue, classLoader);
        }
        if (constantValue instanceof EnumValue) {
            Pair<? extends ClassId, ? extends Name> value = ((EnumValue) constantValue).getValue();
            Name name = (Name) value.b();
            Class o10 = o(classLoader, (ClassId) value.a(), 0, 4, null);
            if (o10 == null) {
                return null;
            }
            return i3.a(o10, name.asString());
        } else if (constantValue instanceof KClassValue) {
            KClassValue.Value value2 = ((KClassValue) constantValue).getValue();
            if (value2 instanceof KClassValue.Value.NormalClass) {
                KClassValue.Value.NormalClass normalClass = (KClassValue.Value.NormalClass) value2;
                return n(classLoader, normalClass.getClassId(), normalClass.getArrayDimensions());
            } else if (value2 instanceof KClassValue.Value.LocalClass) {
                ClassifierDescriptor mo1199getDeclarationDescriptor = ((KClassValue.Value.LocalClass) value2).getType().getConstructor().mo1199getDeclarationDescriptor();
                if (mo1199getDeclarationDescriptor instanceof ClassDescriptor) {
                    classDescriptor = (ClassDescriptor) mo1199getDeclarationDescriptor;
                } else {
                    classDescriptor = null;
                }
                if (classDescriptor == null) {
                    return null;
                }
                return q(classDescriptor);
            } else {
                throw new or.p();
            }
        } else if ((constantValue instanceof ErrorValue) || (constantValue instanceof NullValue)) {
            return null;
        } else {
            return constantValue.getValue();
        }
    }

    private static final List t(List list) {
        List e10;
        List<Annotation> list2 = list;
        if ((list2 instanceof Collection) && list2.isEmpty()) {
            return list;
        }
        Iterator it = list2.iterator();
        while (true) {
            if (!it.hasNext()) {
                break;
            } else if (Intrinsics.areEqual(bs.a.b(bs.a.a((Annotation) it.next())).getSimpleName(), "Container")) {
                list = new ArrayList();
                for (Annotation annotation : list2) {
                    Class b10 = bs.a.b(bs.a.a(annotation));
                    if (Intrinsics.areEqual(b10.getSimpleName(), "Container") && b10.getAnnotation(RepeatableContainer.class) != null) {
                        Object invoke = b10.getDeclaredMethod("value", null).invoke(annotation, null);
                        Intrinsics.checkNotNull(invoke, "null cannot be cast to non-null type kotlin.Array<out kotlin.Annotation>");
                        e10 = kotlin.collections.i.e((Annotation[]) invoke);
                    } else {
                        e10 = CollectionsKt.e(annotation);
                    }
                    CollectionsKt.B(list, e10);
                }
            }
        }
        return list;
    }
}

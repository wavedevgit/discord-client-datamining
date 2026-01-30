package kotlin.reflect.jvm.internal.impl.load.java.lazy.descriptors;

import java.util.ArrayList;
import java.util.List;
import java.util.Map;
import kotlin.Pair;
import kotlin.collections.CollectionsKt;
import kotlin.jvm.internal.DefaultConstructorMarker;
import kotlin.jvm.internal.Intrinsics;
import kotlin.jvm.internal.PropertyReference1Impl;
import kotlin.jvm.internal.Reflection;
import kotlin.jvm.internal.SourceDebugExtension;
import kotlin.reflect.KProperty;
import kotlin.reflect.jvm.internal.impl.builtins.jvm.JavaToKotlinClassMapper;
import kotlin.reflect.jvm.internal.impl.descriptors.ClassDescriptor;
import kotlin.reflect.jvm.internal.impl.descriptors.FindClassInModuleKt;
import kotlin.reflect.jvm.internal.impl.descriptors.ValueParameterDescriptor;
import kotlin.reflect.jvm.internal.impl.load.java.JvmAnnotationNames;
import kotlin.reflect.jvm.internal.impl.load.java.components.DescriptorResolverUtils;
import kotlin.reflect.jvm.internal.impl.load.java.descriptors.PossiblyExternalAnnotationDescriptor;
import kotlin.reflect.jvm.internal.impl.load.java.lazy.LazyJavaResolverContext;
import kotlin.reflect.jvm.internal.impl.load.java.lazy.types.JavaTypeAttributesKt;
import kotlin.reflect.jvm.internal.impl.load.java.sources.JavaSourceElement;
import kotlin.reflect.jvm.internal.impl.load.java.structure.JavaAnnotation;
import kotlin.reflect.jvm.internal.impl.load.java.structure.JavaAnnotationArgument;
import kotlin.reflect.jvm.internal.impl.load.java.structure.JavaAnnotationAsAnnotationArgument;
import kotlin.reflect.jvm.internal.impl.load.java.structure.JavaArrayAnnotationArgument;
import kotlin.reflect.jvm.internal.impl.load.java.structure.JavaClass;
import kotlin.reflect.jvm.internal.impl.load.java.structure.JavaClassObjectAnnotationArgument;
import kotlin.reflect.jvm.internal.impl.load.java.structure.JavaEnumValueAnnotationArgument;
import kotlin.reflect.jvm.internal.impl.load.java.structure.JavaLiteralAnnotationArgument;
import kotlin.reflect.jvm.internal.impl.load.java.structure.JavaType;
import kotlin.reflect.jvm.internal.impl.name.ClassId;
import kotlin.reflect.jvm.internal.impl.name.FqName;
import kotlin.reflect.jvm.internal.impl.name.Name;
import kotlin.reflect.jvm.internal.impl.renderer.DescriptorRenderer;
import kotlin.reflect.jvm.internal.impl.resolve.constants.AnnotationValue;
import kotlin.reflect.jvm.internal.impl.resolve.constants.ConstantValue;
import kotlin.reflect.jvm.internal.impl.resolve.constants.ConstantValueFactory;
import kotlin.reflect.jvm.internal.impl.resolve.constants.EnumValue;
import kotlin.reflect.jvm.internal.impl.resolve.constants.KClassValue;
import kotlin.reflect.jvm.internal.impl.resolve.constants.NullValue;
import kotlin.reflect.jvm.internal.impl.resolve.descriptorUtil.DescriptorUtilsKt;
import kotlin.reflect.jvm.internal.impl.storage.NotNullLazyValue;
import kotlin.reflect.jvm.internal.impl.storage.NullableLazyValue;
import kotlin.reflect.jvm.internal.impl.storage.StorageKt;
import kotlin.reflect.jvm.internal.impl.types.KotlinType;
import kotlin.reflect.jvm.internal.impl.types.KotlinTypeKt;
import kotlin.reflect.jvm.internal.impl.types.SimpleType;
import kotlin.reflect.jvm.internal.impl.types.TypeUsage;
import kotlin.reflect.jvm.internal.impl.types.Variance;
import kotlin.reflect.jvm.internal.impl.types.error.ErrorTypeKind;
import kotlin.reflect.jvm.internal.impl.types.error.ErrorUtils;
import org.jetbrains.annotations.NotNull;
@SourceDebugExtension({"SMAP\nLazyJavaAnnotationDescriptor.kt\nKotlin\n*S Kotlin\n*F\n+ 1 LazyJavaAnnotationDescriptor.kt\norg/jetbrains/kotlin/load/java/lazy/descriptors/LazyJavaAnnotationDescriptor\n+ 2 _Collections.kt\nkotlin/collections/CollectionsKt___CollectionsKt\n+ 3 fake.kt\nkotlin/jvm/internal/FakeKt\n*L\n1#1,124:1\n1563#2:125\n1634#2,3:126\n1617#2,9:130\n1869#2:139\n1870#2:141\n1626#2:142\n1#3:129\n1#3:140\n*S KotlinDebug\n*F\n+ 1 LazyJavaAnnotationDescriptor.kt\norg/jetbrains/kotlin/load/java/lazy/descriptors/LazyJavaAnnotationDescriptor\n*L\n94#1:125\n94#1:126,3\n62#1:130,9\n62#1:139\n62#1:141\n62#1:142\n62#1:140\n*E\n"})
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public final class LazyJavaAnnotationDescriptor implements PossiblyExternalAnnotationDescriptor {

    /* renamed from: i  reason: collision with root package name */
    static final /* synthetic */ KProperty[] f34190i = {Reflection.property1(new PropertyReference1Impl(LazyJavaAnnotationDescriptor.class, "fqName", "getFqName()Lorg/jetbrains/kotlin/name/FqName;", 0)), Reflection.property1(new PropertyReference1Impl(LazyJavaAnnotationDescriptor.class, "type", "getType()Lorg/jetbrains/kotlin/types/SimpleType;", 0)), Reflection.property1(new PropertyReference1Impl(LazyJavaAnnotationDescriptor.class, "allValueArguments", "getAllValueArguments()Ljava/util/Map;", 0))};

    /* renamed from: a  reason: collision with root package name */
    private final LazyJavaResolverContext f34191a;

    /* renamed from: b  reason: collision with root package name */
    private final JavaAnnotation f34192b;

    /* renamed from: c  reason: collision with root package name */
    private final NullableLazyValue f34193c;

    /* renamed from: d  reason: collision with root package name */
    private final NotNullLazyValue f34194d;

    /* renamed from: e  reason: collision with root package name */
    private final JavaSourceElement f34195e;

    /* renamed from: f  reason: collision with root package name */
    private final NotNullLazyValue f34196f;

    /* renamed from: g  reason: collision with root package name */
    private final boolean f34197g;

    /* renamed from: h  reason: collision with root package name */
    private final boolean f34198h;

    public LazyJavaAnnotationDescriptor(@NotNull LazyJavaResolverContext c10, @NotNull JavaAnnotation javaAnnotation, boolean z10) {
        Intrinsics.checkNotNullParameter(c10, "c");
        Intrinsics.checkNotNullParameter(javaAnnotation, "javaAnnotation");
        this.f34191a = c10;
        this.f34192b = javaAnnotation;
        this.f34193c = c10.getStorageManager().createNullableLazyValue(new c(this));
        this.f34194d = c10.getStorageManager().createLazyValue(new d(this));
        this.f34195e = c10.getComponents().getSourceElementFactory().source(javaAnnotation);
        this.f34196f = c10.getStorageManager().createLazyValue(new e(this));
        this.f34197g = javaAnnotation.isIdeExternalAnnotation();
        this.f34198h = javaAnnotation.isFreshlySupportedTypeUseAnnotation() || z10;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Map d(LazyJavaAnnotationDescriptor lazyJavaAnnotationDescriptor) {
        Pair pair;
        ArrayList arrayList = new ArrayList();
        for (JavaAnnotationArgument javaAnnotationArgument : lazyJavaAnnotationDescriptor.f34192b.getArguments()) {
            Name name = javaAnnotationArgument.getName();
            if (name == null) {
                name = JvmAnnotationNames.DEFAULT_ANNOTATION_MEMBER_NAME;
            }
            ConstantValue g10 = lazyJavaAnnotationDescriptor.g(javaAnnotationArgument);
            if (g10 != null) {
                pair = ir.v.a(name, g10);
            } else {
                pair = null;
            }
            if (pair != null) {
                arrayList.add(pair);
            }
        }
        return kotlin.collections.o0.u(arrayList);
    }

    private final ClassDescriptor e(FqName fqName) {
        return FindClassInModuleKt.findNonGenericClassAcrossDependencies(this.f34191a.getModule(), ClassId.Companion.topLevel(fqName), this.f34191a.getComponents().getDeserializedDescriptorResolver().getComponents().getNotFoundClasses());
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final FqName f(LazyJavaAnnotationDescriptor lazyJavaAnnotationDescriptor) {
        ClassId classId = lazyJavaAnnotationDescriptor.f34192b.getClassId();
        if (classId != null) {
            return classId.asSingleFqName();
        }
        return null;
    }

    private final ConstantValue g(JavaAnnotationArgument javaAnnotationArgument) {
        if (javaAnnotationArgument instanceof JavaLiteralAnnotationArgument) {
            return ConstantValueFactory.createConstantValue$default(ConstantValueFactory.INSTANCE, ((JavaLiteralAnnotationArgument) javaAnnotationArgument).getValue(), null, 2, null);
        }
        if (javaAnnotationArgument instanceof JavaEnumValueAnnotationArgument) {
            JavaEnumValueAnnotationArgument javaEnumValueAnnotationArgument = (JavaEnumValueAnnotationArgument) javaAnnotationArgument;
            return j(javaEnumValueAnnotationArgument.getEnumClassId(), javaEnumValueAnnotationArgument.getEntryName());
        } else if (javaAnnotationArgument instanceof JavaArrayAnnotationArgument) {
            JavaArrayAnnotationArgument javaArrayAnnotationArgument = (JavaArrayAnnotationArgument) javaAnnotationArgument;
            Name name = javaArrayAnnotationArgument.getName();
            if (name == null) {
                name = JvmAnnotationNames.DEFAULT_ANNOTATION_MEMBER_NAME;
            }
            Intrinsics.checkNotNull(name);
            return i(name, javaArrayAnnotationArgument.getElements());
        } else if (javaAnnotationArgument instanceof JavaAnnotationAsAnnotationArgument) {
            return h(((JavaAnnotationAsAnnotationArgument) javaAnnotationArgument).getAnnotation());
        } else {
            if (!(javaAnnotationArgument instanceof JavaClassObjectAnnotationArgument)) {
                return null;
            }
            return k(((JavaClassObjectAnnotationArgument) javaAnnotationArgument).getReferencedType());
        }
    }

    private final ConstantValue h(JavaAnnotation javaAnnotation) {
        return new AnnotationValue(new LazyJavaAnnotationDescriptor(this.f34191a, javaAnnotation, false, 4, null));
    }

    private final ConstantValue i(Name name, List list) {
        KotlinType arrayType;
        if (KotlinTypeKt.isError(getType())) {
            return null;
        }
        ClassDescriptor annotationClass = DescriptorUtilsKt.getAnnotationClass(this);
        Intrinsics.checkNotNull(annotationClass);
        ValueParameterDescriptor annotationParameterByName = DescriptorResolverUtils.getAnnotationParameterByName(name, annotationClass);
        if (annotationParameterByName == null || (arrayType = annotationParameterByName.getType()) == null) {
            arrayType = this.f34191a.getComponents().getModule().getBuiltIns().getArrayType(Variance.INVARIANT, ErrorUtils.createErrorType(ErrorTypeKind.UNKNOWN_ARRAY_ELEMENT_TYPE_OF_ANNOTATION_ARGUMENT, new String[0]));
            Intrinsics.checkNotNullExpressionValue(arrayType, "getArrayType(...)");
        }
        List<JavaAnnotationArgument> list2 = list;
        ArrayList arrayList = new ArrayList(CollectionsKt.w(list2, 10));
        for (JavaAnnotationArgument javaAnnotationArgument : list2) {
            ConstantValue g10 = g(javaAnnotationArgument);
            if (g10 == null) {
                g10 = new NullValue();
            }
            arrayList.add(g10);
        }
        return ConstantValueFactory.INSTANCE.createArrayValue(arrayList, arrayType);
    }

    private final ConstantValue j(ClassId classId, Name name) {
        if (classId != null && name != null) {
            return new EnumValue(classId, name);
        }
        return null;
    }

    private final ConstantValue k(JavaType javaType) {
        return KClassValue.Companion.create(this.f34191a.getTypeResolver().transformJavaType(javaType, JavaTypeAttributesKt.toAttributes$default(TypeUsage.COMMON, false, false, null, 7, null)));
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final SimpleType l(LazyJavaAnnotationDescriptor lazyJavaAnnotationDescriptor) {
        FqName fqName = lazyJavaAnnotationDescriptor.getFqName();
        if (fqName == null) {
            return ErrorUtils.createErrorType(ErrorTypeKind.NOT_FOUND_FQNAME_FOR_JAVA_ANNOTATION, lazyJavaAnnotationDescriptor.f34192b.toString());
        }
        ClassDescriptor mapJavaToKotlin$default = JavaToKotlinClassMapper.mapJavaToKotlin$default(JavaToKotlinClassMapper.INSTANCE, fqName, lazyJavaAnnotationDescriptor.f34191a.getModule().getBuiltIns(), null, 4, null);
        if (mapJavaToKotlin$default == null) {
            JavaClass resolve = lazyJavaAnnotationDescriptor.f34192b.resolve();
            if (resolve != null) {
                mapJavaToKotlin$default = lazyJavaAnnotationDescriptor.f34191a.getComponents().getModuleClassResolver().resolveClass(resolve);
            } else {
                mapJavaToKotlin$default = null;
            }
            if (mapJavaToKotlin$default == null) {
                mapJavaToKotlin$default = lazyJavaAnnotationDescriptor.e(fqName);
            }
        }
        return mapJavaToKotlin$default.getDefaultType();
    }

    @Override // kotlin.reflect.jvm.internal.impl.descriptors.annotations.AnnotationDescriptor
    @NotNull
    public Map<Name, ConstantValue<?>> getAllValueArguments() {
        return (Map) StorageKt.getValue(this.f34196f, this, f34190i[2]);
    }

    @Override // kotlin.reflect.jvm.internal.impl.descriptors.annotations.AnnotationDescriptor
    public FqName getFqName() {
        return (FqName) StorageKt.getValue(this.f34193c, this, f34190i[0]);
    }

    public final boolean isFreshlySupportedTypeUseAnnotation() {
        return this.f34198h;
    }

    @Override // kotlin.reflect.jvm.internal.impl.load.java.descriptors.PossiblyExternalAnnotationDescriptor
    public boolean isIdeExternalAnnotation() {
        return this.f34197g;
    }

    @NotNull
    public String toString() {
        return DescriptorRenderer.renderAnnotation$default(DescriptorRenderer.FQ_NAMES_IN_TYPES, this, null, 2, null);
    }

    @Override // kotlin.reflect.jvm.internal.impl.descriptors.annotations.AnnotationDescriptor
    @NotNull
    public JavaSourceElement getSource() {
        return this.f34195e;
    }

    @Override // kotlin.reflect.jvm.internal.impl.descriptors.annotations.AnnotationDescriptor
    @NotNull
    public SimpleType getType() {
        return (SimpleType) StorageKt.getValue(this.f34194d, this, f34190i[1]);
    }

    public /* synthetic */ LazyJavaAnnotationDescriptor(LazyJavaResolverContext lazyJavaResolverContext, JavaAnnotation javaAnnotation, boolean z10, int i10, DefaultConstructorMarker defaultConstructorMarker) {
        this(lazyJavaResolverContext, javaAnnotation, (i10 & 4) != 0 ? false : z10);
    }
}

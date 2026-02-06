package kotlin.reflect.jvm.internal.impl.builtins;

import com.facebook.react.fabric.mounting.mountitems.IntBufferBatchMountItem;
import java.util.ArrayList;
import java.util.List;
import kotlin.collections.CollectionsKt;
import kotlin.collections.o0;
import kotlin.jvm.internal.Intrinsics;
import kotlin.jvm.internal.SourceDebugExtension;
import kotlin.reflect.jvm.internal.impl.builtins.StandardNames;
import kotlin.reflect.jvm.internal.impl.builtins.functions.FunctionTypeKind;
import kotlin.reflect.jvm.internal.impl.builtins.functions.FunctionTypeKindExtractor;
import kotlin.reflect.jvm.internal.impl.descriptors.ClassDescriptor;
import kotlin.reflect.jvm.internal.impl.descriptors.ClassifierDescriptor;
import kotlin.reflect.jvm.internal.impl.descriptors.DeclarationDescriptor;
import kotlin.reflect.jvm.internal.impl.descriptors.annotations.AnnotationDescriptor;
import kotlin.reflect.jvm.internal.impl.descriptors.annotations.Annotations;
import kotlin.reflect.jvm.internal.impl.descriptors.annotations.BuiltInAnnotationDescriptor;
import kotlin.reflect.jvm.internal.impl.name.FqName;
import kotlin.reflect.jvm.internal.impl.name.FqNameUnsafe;
import kotlin.reflect.jvm.internal.impl.name.Name;
import kotlin.reflect.jvm.internal.impl.resolve.constants.ConstantValue;
import kotlin.reflect.jvm.internal.impl.resolve.constants.IntValue;
import kotlin.reflect.jvm.internal.impl.resolve.constants.StringValue;
import kotlin.reflect.jvm.internal.impl.resolve.descriptorUtil.DescriptorUtilsKt;
import kotlin.reflect.jvm.internal.impl.types.KotlinType;
import kotlin.reflect.jvm.internal.impl.types.KotlinTypeFactory;
import kotlin.reflect.jvm.internal.impl.types.SimpleType;
import kotlin.reflect.jvm.internal.impl.types.TypeAttributesKt;
import kotlin.reflect.jvm.internal.impl.types.TypeProjection;
import kotlin.reflect.jvm.internal.impl.types.typeUtil.TypeUtilsKt;
import org.jetbrains.annotations.NotNull;
import qr.v;
@SourceDebugExtension({"SMAP\nfunctionTypes.kt\nKotlin\n*S Kotlin\n*F\n+ 1 functionTypes.kt\norg/jetbrains/kotlin/builtins/FunctionTypesKt\n+ 2 fake.kt\nkotlin/jvm/internal/FakeKt\n+ 3 _Collections.kt\nkotlin/collections/CollectionsKt___CollectionsKt\n*L\n1#1,301:1\n1#2:302\n1563#3:303\n1634#3,3:304\n230#3,2:307\n1563#3:309\n1634#3,3:310\n1563#3:313\n1634#3,3:314\n1604#3,4:317\n*S KotlinDebug\n*F\n+ 1 functionTypes.kt\norg/jetbrains/kotlin/builtins/FunctionTypesKt\n*L\n160#1:303\n160#1:304,3\n195#1:307,2\n200#1:309\n200#1:310,3\n222#1:313\n222#1:314,3\n225#1:317,4\n*E\n"})
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public final class FunctionTypesKt {
    private static final FunctionTypeKind a(FqNameUnsafe fqNameUnsafe) {
        if (fqNameUnsafe.isSafe() && !fqNameUnsafe.isRoot()) {
            FunctionTypeKindExtractor functionTypeKindExtractor = FunctionTypeKindExtractor.Companion.getDefault();
            FqName parent = fqNameUnsafe.toSafe().parent();
            String asString = fqNameUnsafe.shortName().asString();
            Intrinsics.checkNotNullExpressionValue(asString, "asString(...)");
            return functionTypeKindExtractor.getFunctionalClassKind(parent, asString);
        }
        return null;
    }

    private static final boolean b(KotlinType kotlinType) {
        if (kotlinType.getAnnotations().mo1195findAnnotation(StandardNames.FqNames.extensionFunctionType) != null) {
            return true;
        }
        return false;
    }

    public static final int contextFunctionTypeParamsCount(@NotNull KotlinType kotlinType) {
        Intrinsics.checkNotNullParameter(kotlinType, "<this>");
        AnnotationDescriptor mo1195findAnnotation = kotlinType.getAnnotations().mo1195findAnnotation(StandardNames.FqNames.contextFunctionTypeParams);
        if (mo1195findAnnotation == null) {
            return 0;
        }
        ConstantValue constantValue = (ConstantValue) o0.j(mo1195findAnnotation.getAllValueArguments(), StandardNames.CONTEXT_FUNCTION_TYPE_PARAMETER_COUNT_NAME);
        Intrinsics.checkNotNull(constantValue, "null cannot be cast to non-null type org.jetbrains.kotlin.resolve.constants.IntValue");
        return ((IntValue) constantValue).getValue().intValue();
    }

    @NotNull
    public static final SimpleType createFunctionType(@NotNull KotlinBuiltIns builtIns, @NotNull Annotations annotations, KotlinType kotlinType, @NotNull List<? extends KotlinType> contextReceiverTypes, @NotNull List<? extends KotlinType> parameterTypes, List<Name> list, @NotNull KotlinType returnType, boolean z10) {
        int i10;
        Intrinsics.checkNotNullParameter(builtIns, "builtIns");
        Intrinsics.checkNotNullParameter(annotations, "annotations");
        Intrinsics.checkNotNullParameter(contextReceiverTypes, "contextReceiverTypes");
        Intrinsics.checkNotNullParameter(parameterTypes, "parameterTypes");
        Intrinsics.checkNotNullParameter(returnType, "returnType");
        List<TypeProjection> functionTypeArgumentProjections = getFunctionTypeArgumentProjections(kotlinType, contextReceiverTypes, parameterTypes, list, returnType, builtIns);
        int size = parameterTypes.size() + contextReceiverTypes.size();
        if (kotlinType == null) {
            i10 = 0;
        } else {
            i10 = 1;
        }
        ClassDescriptor functionDescriptor = getFunctionDescriptor(builtIns, size + i10, z10);
        if (kotlinType != null) {
            annotations = withExtensionFunctionAnnotation(annotations, builtIns);
        }
        if (!contextReceiverTypes.isEmpty()) {
            annotations = withContextReceiversFunctionAnnotation(annotations, builtIns, contextReceiverTypes.size());
        }
        return KotlinTypeFactory.simpleNotNullType(TypeAttributesKt.toDefaultAttributes(annotations), functionDescriptor, functionTypeArgumentProjections);
    }

    public static /* synthetic */ SimpleType createFunctionType$default(KotlinBuiltIns kotlinBuiltIns, Annotations annotations, KotlinType kotlinType, List list, List list2, List list3, KotlinType kotlinType2, boolean z10, int i10, Object obj) {
        boolean z11;
        if ((i10 & IntBufferBatchMountItem.INSTRUCTION_UPDATE_LAYOUT) != 0) {
            z11 = false;
        } else {
            z11 = z10;
        }
        return createFunctionType(kotlinBuiltIns, annotations, kotlinType, list, list2, list3, kotlinType2, z11);
    }

    public static final Name extractParameterNameFromFunctionTypeArgument(@NotNull KotlinType kotlinType) {
        StringValue stringValue;
        String value;
        Intrinsics.checkNotNullParameter(kotlinType, "<this>");
        AnnotationDescriptor mo1195findAnnotation = kotlinType.getAnnotations().mo1195findAnnotation(StandardNames.FqNames.parameterName);
        if (mo1195findAnnotation == null) {
            return null;
        }
        Object R0 = CollectionsKt.R0(mo1195findAnnotation.getAllValueArguments().values());
        if (R0 instanceof StringValue) {
            stringValue = (StringValue) R0;
        } else {
            stringValue = null;
        }
        if (stringValue != null && (value = stringValue.getValue()) != null) {
            if (!Name.isValidIdentifier(value)) {
                value = null;
            }
            if (value != null) {
                return Name.identifier(value);
            }
        }
        return null;
    }

    @NotNull
    public static final List<KotlinType> getContextReceiverTypesFromFunctionType(@NotNull KotlinType kotlinType) {
        Intrinsics.checkNotNullParameter(kotlinType, "<this>");
        isBuiltinFunctionalType(kotlinType);
        int contextFunctionTypeParamsCount = contextFunctionTypeParamsCount(kotlinType);
        if (contextFunctionTypeParamsCount == 0) {
            return CollectionsKt.l();
        }
        List<TypeProjection> subList = kotlinType.getArguments().subList(0, contextFunctionTypeParamsCount);
        ArrayList arrayList = new ArrayList(CollectionsKt.w(subList, 10));
        for (TypeProjection typeProjection : subList) {
            arrayList.add(typeProjection.getType());
        }
        return arrayList;
    }

    @NotNull
    public static final ClassDescriptor getFunctionDescriptor(@NotNull KotlinBuiltIns builtIns, int i10, boolean z10) {
        ClassDescriptor function;
        Intrinsics.checkNotNullParameter(builtIns, "builtIns");
        if (z10) {
            function = builtIns.getSuspendFunction(i10);
        } else {
            function = builtIns.getFunction(i10);
        }
        Intrinsics.checkNotNull(function);
        return function;
    }

    @NotNull
    public static final List<TypeProjection> getFunctionTypeArgumentProjections(KotlinType kotlinType, @NotNull List<? extends KotlinType> contextReceiverTypes, @NotNull List<? extends KotlinType> parameterTypes, List<Name> list, @NotNull KotlinType returnType, @NotNull KotlinBuiltIns builtIns) {
        int i10;
        TypeProjection typeProjection;
        KotlinBuiltIns kotlinBuiltIns;
        Intrinsics.checkNotNullParameter(contextReceiverTypes, "contextReceiverTypes");
        Intrinsics.checkNotNullParameter(parameterTypes, "parameterTypes");
        Intrinsics.checkNotNullParameter(returnType, "returnType");
        Intrinsics.checkNotNullParameter(builtIns, "builtIns");
        int size = parameterTypes.size() + contextReceiverTypes.size();
        int i11 = 0;
        if (kotlinType != null) {
            i10 = 1;
        } else {
            i10 = 0;
        }
        ArrayList arrayList = new ArrayList(size + i10 + 1);
        List<? extends KotlinType> list2 = contextReceiverTypes;
        ArrayList arrayList2 = new ArrayList(CollectionsKt.w(list2, 10));
        for (KotlinType kotlinType2 : list2) {
            arrayList2.add(TypeUtilsKt.asTypeProjection(kotlinType2));
        }
        arrayList.addAll(arrayList2);
        if (kotlinType != null) {
            typeProjection = TypeUtilsKt.asTypeProjection(kotlinType);
        } else {
            typeProjection = null;
        }
        kotlin.reflect.jvm.internal.impl.utils.CollectionsKt.addIfNotNull(arrayList, typeProjection);
        for (Object obj : parameterTypes) {
            int i12 = i11 + 1;
            if (i11 < 0) {
                CollectionsKt.v();
            }
            KotlinType kotlinType3 = (KotlinType) obj;
            Name name = (list == null || (name = list.get(i11)) == null || name.isSpecial()) ? null : null;
            if (name != null) {
                FqName fqName = StandardNames.FqNames.parameterName;
                Name name2 = StandardNames.NAME;
                String asString = name.asString();
                Intrinsics.checkNotNullExpressionValue(asString, "asString(...)");
                kotlinBuiltIns = builtIns;
                kotlinType3 = TypeUtilsKt.replaceAnnotations(kotlinType3, Annotations.Companion.create(CollectionsKt.K0(kotlinType3.getAnnotations(), new BuiltInAnnotationDescriptor(kotlinBuiltIns, fqName, o0.f(v.a(name2, new StringValue(asString))), false, 8, null))));
            } else {
                kotlinBuiltIns = builtIns;
            }
            arrayList.add(TypeUtilsKt.asTypeProjection(kotlinType3));
            i11 = i12;
            builtIns = kotlinBuiltIns;
        }
        arrayList.add(TypeUtilsKt.asTypeProjection(returnType));
        return arrayList;
    }

    public static final FunctionTypeKind getFunctionTypeKind(@NotNull KotlinType kotlinType) {
        Intrinsics.checkNotNullParameter(kotlinType, "<this>");
        ClassifierDescriptor mo1199getDeclarationDescriptor = kotlinType.getConstructor().mo1199getDeclarationDescriptor();
        if (mo1199getDeclarationDescriptor != null) {
            return getFunctionTypeKind(mo1199getDeclarationDescriptor);
        }
        return null;
    }

    public static final KotlinType getReceiverTypeFromFunctionType(@NotNull KotlinType kotlinType) {
        Intrinsics.checkNotNullParameter(kotlinType, "<this>");
        isBuiltinFunctionalType(kotlinType);
        if (!b(kotlinType)) {
            return null;
        }
        return kotlinType.getArguments().get(contextFunctionTypeParamsCount(kotlinType)).getType();
    }

    @NotNull
    public static final KotlinType getReturnTypeFromFunctionType(@NotNull KotlinType kotlinType) {
        Intrinsics.checkNotNullParameter(kotlinType, "<this>");
        isBuiltinFunctionalType(kotlinType);
        KotlinType type = ((TypeProjection) CollectionsKt.z0(kotlinType.getArguments())).getType();
        Intrinsics.checkNotNullExpressionValue(type, "getType(...)");
        return type;
    }

    @NotNull
    public static final List<TypeProjection> getValueParameterTypesFromFunctionType(@NotNull KotlinType kotlinType) {
        Intrinsics.checkNotNullParameter(kotlinType, "<this>");
        isBuiltinFunctionalType(kotlinType);
        List<TypeProjection> arguments = kotlinType.getArguments();
        return arguments.subList(contextFunctionTypeParamsCount(kotlinType) + (isBuiltinExtensionFunctionalType(kotlinType) ? 1 : 0), arguments.size() - 1);
    }

    public static final boolean isBuiltinExtensionFunctionalType(@NotNull KotlinType kotlinType) {
        Intrinsics.checkNotNullParameter(kotlinType, "<this>");
        if (isBuiltinFunctionalType(kotlinType) && b(kotlinType)) {
            return true;
        }
        return false;
    }

    public static final boolean isBuiltinFunctionalClassDescriptor(@NotNull DeclarationDescriptor declarationDescriptor) {
        Intrinsics.checkNotNullParameter(declarationDescriptor, "<this>");
        FunctionTypeKind functionTypeKind = getFunctionTypeKind(declarationDescriptor);
        if (!Intrinsics.areEqual(functionTypeKind, FunctionTypeKind.Function.INSTANCE) && !Intrinsics.areEqual(functionTypeKind, FunctionTypeKind.SuspendFunction.INSTANCE)) {
            return false;
        }
        return true;
    }

    public static final boolean isBuiltinFunctionalType(@NotNull KotlinType kotlinType) {
        Intrinsics.checkNotNullParameter(kotlinType, "<this>");
        ClassifierDescriptor mo1199getDeclarationDescriptor = kotlinType.getConstructor().mo1199getDeclarationDescriptor();
        if (mo1199getDeclarationDescriptor == null || !isBuiltinFunctionalClassDescriptor(mo1199getDeclarationDescriptor)) {
            return false;
        }
        return true;
    }

    public static final boolean isFunctionType(@NotNull KotlinType kotlinType) {
        Intrinsics.checkNotNullParameter(kotlinType, "<this>");
        return Intrinsics.areEqual(getFunctionTypeKind(kotlinType), FunctionTypeKind.Function.INSTANCE);
    }

    public static final boolean isSuspendFunctionType(@NotNull KotlinType kotlinType) {
        Intrinsics.checkNotNullParameter(kotlinType, "<this>");
        return Intrinsics.areEqual(getFunctionTypeKind(kotlinType), FunctionTypeKind.SuspendFunction.INSTANCE);
    }

    @NotNull
    public static final Annotations withContextReceiversFunctionAnnotation(@NotNull Annotations annotations, @NotNull KotlinBuiltIns builtIns, int i10) {
        Intrinsics.checkNotNullParameter(annotations, "<this>");
        Intrinsics.checkNotNullParameter(builtIns, "builtIns");
        FqName fqName = StandardNames.FqNames.contextFunctionTypeParams;
        if (annotations.hasAnnotation(fqName)) {
            return annotations;
        }
        return Annotations.Companion.create(CollectionsKt.K0(annotations, new BuiltInAnnotationDescriptor(builtIns, fqName, o0.f(v.a(StandardNames.CONTEXT_FUNCTION_TYPE_PARAMETER_COUNT_NAME, new IntValue(i10))), false, 8, null)));
    }

    @NotNull
    public static final Annotations withExtensionFunctionAnnotation(@NotNull Annotations annotations, @NotNull KotlinBuiltIns builtIns) {
        Intrinsics.checkNotNullParameter(annotations, "<this>");
        Intrinsics.checkNotNullParameter(builtIns, "builtIns");
        FqName fqName = StandardNames.FqNames.extensionFunctionType;
        if (annotations.hasAnnotation(fqName)) {
            return annotations;
        }
        return Annotations.Companion.create(CollectionsKt.K0(annotations, new BuiltInAnnotationDescriptor(builtIns, fqName, o0.i(), false, 8, null)));
    }

    public static final FunctionTypeKind getFunctionTypeKind(@NotNull DeclarationDescriptor declarationDescriptor) {
        Intrinsics.checkNotNullParameter(declarationDescriptor, "<this>");
        if ((declarationDescriptor instanceof ClassDescriptor) && KotlinBuiltIns.isUnderKotlinPackage(declarationDescriptor)) {
            return a(DescriptorUtilsKt.getFqNameUnsafe(declarationDescriptor));
        }
        return null;
    }
}

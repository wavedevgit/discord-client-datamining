package kotlin.reflect.jvm.internal.impl.load.java.lazy.descriptors;

import java.util.ArrayList;
import java.util.Collection;
import java.util.Collections;
import java.util.Iterator;
import java.util.LinkedHashMap;
import java.util.LinkedHashSet;
import java.util.List;
import java.util.Map;
import java.util.Set;
import kotlin.Pair;
import kotlin.collections.CollectionsKt;
import kotlin.collections.x0;
import kotlin.jvm.functions.Function1;
import kotlin.jvm.internal.DefaultConstructorMarker;
import kotlin.jvm.internal.FunctionReferenceImpl;
import kotlin.jvm.internal.Intrinsics;
import kotlin.jvm.internal.SourceDebugExtension;
import kotlin.reflect.jvm.internal.impl.builtins.KotlinBuiltIns;
import kotlin.reflect.jvm.internal.impl.descriptors.CallableDescriptor;
import kotlin.reflect.jvm.internal.impl.descriptors.ClassConstructorDescriptor;
import kotlin.reflect.jvm.internal.impl.descriptors.ClassDescriptor;
import kotlin.reflect.jvm.internal.impl.descriptors.ClassifierDescriptor;
import kotlin.reflect.jvm.internal.impl.descriptors.ConstructorDescriptor;
import kotlin.reflect.jvm.internal.impl.descriptors.DescriptorVisibilities;
import kotlin.reflect.jvm.internal.impl.descriptors.DescriptorVisibility;
import kotlin.reflect.jvm.internal.impl.descriptors.FunctionDescriptor;
import kotlin.reflect.jvm.internal.impl.descriptors.Modality;
import kotlin.reflect.jvm.internal.impl.descriptors.PropertyDescriptor;
import kotlin.reflect.jvm.internal.impl.descriptors.PropertyGetterDescriptor;
import kotlin.reflect.jvm.internal.impl.descriptors.ReceiverParameterDescriptor;
import kotlin.reflect.jvm.internal.impl.descriptors.SimpleFunctionDescriptor;
import kotlin.reflect.jvm.internal.impl.descriptors.TypeParameterDescriptor;
import kotlin.reflect.jvm.internal.impl.descriptors.ValueParameterDescriptor;
import kotlin.reflect.jvm.internal.impl.descriptors.annotations.Annotations;
import kotlin.reflect.jvm.internal.impl.descriptors.impl.ClassConstructorDescriptorImpl;
import kotlin.reflect.jvm.internal.impl.descriptors.impl.EnumEntrySyntheticClassDescriptor;
import kotlin.reflect.jvm.internal.impl.descriptors.impl.PropertyGetterDescriptorImpl;
import kotlin.reflect.jvm.internal.impl.descriptors.impl.PropertySetterDescriptorImpl;
import kotlin.reflect.jvm.internal.impl.descriptors.impl.ValueParameterDescriptorImpl;
import kotlin.reflect.jvm.internal.impl.incremental.components.LookupLocation;
import kotlin.reflect.jvm.internal.impl.incremental.components.NoLookupLocation;
import kotlin.reflect.jvm.internal.impl.load.java.BuiltinMethodsWithDifferentJvmName;
import kotlin.reflect.jvm.internal.impl.load.java.BuiltinMethodsWithSpecialGenericSignature;
import kotlin.reflect.jvm.internal.impl.load.java.ClassicBuiltinSpecialProperties;
import kotlin.reflect.jvm.internal.impl.load.java.JavaClassFinder;
import kotlin.reflect.jvm.internal.impl.load.java.JavaDescriptorVisibilities;
import kotlin.reflect.jvm.internal.impl.load.java.JavaIncompatibilityRulesOverridabilityCondition;
import kotlin.reflect.jvm.internal.impl.load.java.JvmAbi;
import kotlin.reflect.jvm.internal.impl.load.java.JvmAnnotationNames;
import kotlin.reflect.jvm.internal.impl.load.java.PropertiesConventionUtilKt;
import kotlin.reflect.jvm.internal.impl.load.java.SpecialBuiltinMembers;
import kotlin.reflect.jvm.internal.impl.load.java.SpecialGenericSignatures;
import kotlin.reflect.jvm.internal.impl.load.java.UtilsKt;
import kotlin.reflect.jvm.internal.impl.load.java.components.DescriptorResolverUtils;
import kotlin.reflect.jvm.internal.impl.load.java.components.SignaturePropagator;
import kotlin.reflect.jvm.internal.impl.load.java.descriptors.JavaClassConstructorDescriptor;
import kotlin.reflect.jvm.internal.impl.load.java.descriptors.JavaForKotlinOverridePropertyDescriptor;
import kotlin.reflect.jvm.internal.impl.load.java.descriptors.JavaMethodDescriptor;
import kotlin.reflect.jvm.internal.impl.load.java.descriptors.JavaPropertyDescriptor;
import kotlin.reflect.jvm.internal.impl.load.java.descriptors.UtilKt;
import kotlin.reflect.jvm.internal.impl.load.java.lazy.ContextKt;
import kotlin.reflect.jvm.internal.impl.load.java.lazy.LazyJavaAnnotationsKt;
import kotlin.reflect.jvm.internal.impl.load.java.lazy.LazyJavaResolverContext;
import kotlin.reflect.jvm.internal.impl.load.java.lazy.descriptors.LazyJavaScope;
import kotlin.reflect.jvm.internal.impl.load.java.lazy.types.JavaTypeAttributes;
import kotlin.reflect.jvm.internal.impl.load.java.lazy.types.JavaTypeAttributesKt;
import kotlin.reflect.jvm.internal.impl.load.java.structure.JavaArrayType;
import kotlin.reflect.jvm.internal.impl.load.java.structure.JavaClass;
import kotlin.reflect.jvm.internal.impl.load.java.structure.JavaConstructor;
import kotlin.reflect.jvm.internal.impl.load.java.structure.JavaField;
import kotlin.reflect.jvm.internal.impl.load.java.structure.JavaMember;
import kotlin.reflect.jvm.internal.impl.load.java.structure.JavaMethod;
import kotlin.reflect.jvm.internal.impl.load.java.structure.JavaRecordComponent;
import kotlin.reflect.jvm.internal.impl.load.java.structure.JavaType;
import kotlin.reflect.jvm.internal.impl.load.java.structure.JavaTypeParameter;
import kotlin.reflect.jvm.internal.impl.load.java.typeEnhancement.SignatureEnhancement;
import kotlin.reflect.jvm.internal.impl.load.kotlin.MethodSignatureMappingKt;
import kotlin.reflect.jvm.internal.impl.name.ClassId;
import kotlin.reflect.jvm.internal.impl.name.Name;
import kotlin.reflect.jvm.internal.impl.resolve.DescriptorFactory;
import kotlin.reflect.jvm.internal.impl.resolve.DescriptorUtils;
import kotlin.reflect.jvm.internal.impl.resolve.OverridingUtil;
import kotlin.reflect.jvm.internal.impl.resolve.descriptorUtil.DescriptorUtilsKt;
import kotlin.reflect.jvm.internal.impl.resolve.scopes.DescriptorKindFilter;
import kotlin.reflect.jvm.internal.impl.storage.MemoizedFunctionToNullable;
import kotlin.reflect.jvm.internal.impl.storage.NotNullLazyValue;
import kotlin.reflect.jvm.internal.impl.types.KotlinType;
import kotlin.reflect.jvm.internal.impl.types.TypeUsage;
import kotlin.reflect.jvm.internal.impl.types.TypeUtils;
import kotlin.reflect.jvm.internal.impl.types.checker.KotlinTypeChecker;
import kotlin.reflect.jvm.internal.impl.utils.SmartSet;
import org.jetbrains.annotations.NotNull;
@SourceDebugExtension({"SMAP\nLazyJavaClassMemberScope.kt\nKotlin\n*S Kotlin\n*F\n+ 1 LazyJavaClassMemberScope.kt\norg/jetbrains/kotlin/load/java/lazy/descriptors/LazyJavaClassMemberScope\n+ 2 _Collections.kt\nkotlin/collections/CollectionsKt___CollectionsKt\n+ 3 fake.kt\nkotlin/jvm/internal/FakeKt\n+ 4 collections.kt\norg/jetbrains/kotlin/utils/CollectionsKt\n*L\n1#1,890:1\n1460#2,5:891\n1761#2,2:896\n1761#2,3:898\n1763#2:901\n1617#2,9:902\n1869#2:911\n1870#2:913\n1626#2:914\n1761#2,3:915\n1563#2:918\n1634#2,3:919\n827#2:922\n855#2,2:923\n774#2:925\n865#2,2:926\n1761#2,3:928\n1761#2,3:931\n2746#2,3:935\n774#2:938\n865#2,2:939\n774#2:941\n865#2,2:942\n1563#2:944\n1634#2,3:945\n2746#2,3:948\n295#2,2:951\n1563#2:953\n1634#2,3:954\n1460#2,5:957\n2746#2,3:962\n1374#2:965\n1460#2,2:966\n1563#2:968\n1634#2,3:969\n1462#2,3:972\n1563#2:975\n1634#2,3:976\n3307#2,10:979\n1460#2,5:989\n2746#2,3:994\n774#2:998\n865#2,2:999\n1208#2,2:1001\n1236#2,4:1003\n1#3:912\n1#3:934\n58#4:997\n*S KotlinDebug\n*F\n+ 1 LazyJavaClassMemberScope.kt\norg/jetbrains/kotlin/load/java/lazy/descriptors/LazyJavaClassMemberScope\n*L\n74#1:891,5\n160#1:896,2\n161#1:898,3\n160#1:901\n189#1:902,9\n189#1:911\n189#1:913\n189#1:914\n193#1:915,3\n199#1:918\n199#1:919,3\n202#1:922\n202#1:923,2\n211#1:925\n211#1:926,2\n216#1:928,3\n222#1:931,3\n322#1:935,3\n327#1:938\n327#1:939,2\n354#1:941\n354#1:942,2\n376#1:944\n376#1:945,3\n461#1:948,3\n470#1:951,2\n476#1:953\n476#1:954,3\n489#1:957,5\n495#1:962,3\n649#1:965\n649#1:966,2\n650#1:968\n650#1:969,3\n649#1:972,3\n698#1:975\n698#1:976,3\n749#1:979,10\n879#1:989,5\n95#1:994,3\n811#1:998\n811#1:999,2\n811#1:1001,2\n811#1:1003,4\n189#1:912\n105#1:997\n*E\n"})
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public final class LazyJavaClassMemberScope extends LazyJavaScope {

    /* renamed from: m  reason: collision with root package name */
    private final ClassDescriptor f32967m;

    /* renamed from: n  reason: collision with root package name */
    private final JavaClass f32968n;

    /* renamed from: o  reason: collision with root package name */
    private final boolean f32969o;

    /* renamed from: p  reason: collision with root package name */
    private final NotNullLazyValue f32970p;

    /* renamed from: q  reason: collision with root package name */
    private final NotNullLazyValue f32971q;

    /* renamed from: r  reason: collision with root package name */
    private final NotNullLazyValue f32972r;

    /* renamed from: s  reason: collision with root package name */
    private final NotNullLazyValue f32973s;

    /* renamed from: t  reason: collision with root package name */
    private final MemoizedFunctionToNullable f32974t;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
    /* synthetic */ class a extends FunctionReferenceImpl implements Function1 {
        a(Object obj) {
            super(1, obj, LazyJavaClassMemberScope.class, "searchMethodsByNameWithoutBuiltinMagic", "searchMethodsByNameWithoutBuiltinMagic(Lorg/jetbrains/kotlin/name/Name;)Ljava/util/Collection;", 0);
        }

        @Override // kotlin.jvm.functions.Function1
        /* renamed from: a */
        public final Collection invoke(Name p02) {
            Intrinsics.checkNotNullParameter(p02, "p0");
            return ((LazyJavaClassMemberScope) this.receiver).c1(p02);
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
    /* synthetic */ class b extends FunctionReferenceImpl implements Function1 {
        b(Object obj) {
            super(1, obj, LazyJavaClassMemberScope.class, "searchMethodsInSupertypesWithoutBuiltinMagic", "searchMethodsInSupertypesWithoutBuiltinMagic(Lorg/jetbrains/kotlin/name/Name;)Ljava/util/Collection;", 0);
        }

        @Override // kotlin.jvm.functions.Function1
        /* renamed from: a */
        public final Collection invoke(Name p02) {
            Intrinsics.checkNotNullParameter(p02, "p0");
            return ((LazyJavaClassMemberScope) this.receiver).d1(p02);
        }
    }

    public /* synthetic */ LazyJavaClassMemberScope(LazyJavaResolverContext lazyJavaResolverContext, ClassDescriptor classDescriptor, JavaClass javaClass, boolean z10, LazyJavaClassMemberScope lazyJavaClassMemberScope, int i10, DefaultConstructorMarker defaultConstructorMarker) {
        this(lazyJavaResolverContext, classDescriptor, javaClass, z10, (i10 & 16) != 0 ? null : lazyJavaClassMemberScope);
    }

    private final List A0(ClassConstructorDescriptorImpl classConstructorDescriptorImpl) {
        KotlinType kotlinType;
        Collection<JavaRecordComponent> recordComponents = this.f32968n.getRecordComponents();
        ArrayList arrayList = new ArrayList(recordComponents.size());
        JavaTypeAttributes attributes$default = JavaTypeAttributesKt.toAttributes$default(TypeUsage.COMMON, false, false, null, 6, null);
        Iterator<T> it = recordComponents.iterator();
        int i10 = 0;
        while (true) {
            int i11 = i10;
            if (it.hasNext()) {
                i10 = i11 + 1;
                JavaRecordComponent javaRecordComponent = (JavaRecordComponent) it.next();
                KotlinType transformJavaType = C().getTypeResolver().transformJavaType(javaRecordComponent.getType(), attributes$default);
                if (javaRecordComponent.isVararg()) {
                    kotlinType = C().getComponents().getModule().getBuiltIns().getArrayElementType(transformJavaType);
                } else {
                    kotlinType = null;
                }
                arrayList.add(new ValueParameterDescriptorImpl(classConstructorDescriptorImpl, null, i11, Annotations.Companion.getEMPTY(), javaRecordComponent.getName(), transformJavaType, false, false, false, kotlinType, C().getComponents().getSourceElementFactory().source(javaRecordComponent)));
            } else {
                return arrayList;
            }
        }
    }

    private final SimpleFunctionDescriptor B0(SimpleFunctionDescriptor simpleFunctionDescriptor, Name name) {
        FunctionDescriptor.CopyBuilder<? extends SimpleFunctionDescriptor> newCopyBuilder = simpleFunctionDescriptor.newCopyBuilder();
        newCopyBuilder.setName(name);
        newCopyBuilder.setSignatureChange();
        newCopyBuilder.setPreserveSourceElement();
        SimpleFunctionDescriptor build = newCopyBuilder.build();
        Intrinsics.checkNotNull(build);
        return build;
    }

    /* JADX WARN: Removed duplicated region for block: B:18:0x003f  */
    /* JADX WARN: Removed duplicated region for block: B:21:0x0043  */
    /*
        Code decompiled incorrectly, please refer to instructions dump.
        To view partially-correct add '--show-bad-code' argument
    */
    private final kotlin.reflect.jvm.internal.impl.descriptors.SimpleFunctionDescriptor C0(kotlin.reflect.jvm.internal.impl.descriptors.SimpleFunctionDescriptor r6) {
        /*
            r5 = this;
            java.util.List r0 = r6.getValueParameters()
            java.lang.String r1 = "getValueParameters(...)"
            kotlin.jvm.internal.Intrinsics.checkNotNullExpressionValue(r0, r1)
            java.lang.Object r0 = kotlin.collections.CollectionsKt.B0(r0)
            kotlin.reflect.jvm.internal.impl.descriptors.ValueParameterDescriptor r0 = (kotlin.reflect.jvm.internal.impl.descriptors.ValueParameterDescriptor) r0
            r2 = 0
            if (r0 == 0) goto L7d
            kotlin.reflect.jvm.internal.impl.types.KotlinType r3 = r0.getType()
            kotlin.reflect.jvm.internal.impl.types.TypeConstructor r3 = r3.getConstructor()
            kotlin.reflect.jvm.internal.impl.descriptors.ClassifierDescriptor r3 = r3.mo1199getDeclarationDescriptor()
            if (r3 == 0) goto L35
            kotlin.reflect.jvm.internal.impl.name.FqNameUnsafe r3 = kotlin.reflect.jvm.internal.impl.resolve.descriptorUtil.DescriptorUtilsKt.getFqNameUnsafe(r3)
            if (r3 == 0) goto L35
            boolean r4 = r3.isSafe()
            if (r4 == 0) goto L2d
            goto L2e
        L2d:
            r3 = r2
        L2e:
            if (r3 == 0) goto L35
            kotlin.reflect.jvm.internal.impl.name.FqName r3 = r3.toSafe()
            goto L36
        L35:
            r3 = r2
        L36:
            kotlin.reflect.jvm.internal.impl.name.FqName r4 = kotlin.reflect.jvm.internal.impl.builtins.StandardNames.CONTINUATION_INTERFACE_FQ_NAME
            boolean r3 = kotlin.jvm.internal.Intrinsics.areEqual(r3, r4)
            if (r3 == 0) goto L3f
            goto L40
        L3f:
            r0 = r2
        L40:
            if (r0 != 0) goto L43
            goto L7d
        L43:
            kotlin.reflect.jvm.internal.impl.descriptors.FunctionDescriptor$CopyBuilder r2 = r6.newCopyBuilder()
            java.util.List r6 = r6.getValueParameters()
            kotlin.jvm.internal.Intrinsics.checkNotNullExpressionValue(r6, r1)
            r1 = 1
            java.util.List r6 = kotlin.collections.CollectionsKt.g0(r6, r1)
            kotlin.reflect.jvm.internal.impl.descriptors.FunctionDescriptor$CopyBuilder r6 = r2.setValueParameters(r6)
            kotlin.reflect.jvm.internal.impl.types.KotlinType r0 = r0.getType()
            java.util.List r0 = r0.getArguments()
            r2 = 0
            java.lang.Object r0 = r0.get(r2)
            kotlin.reflect.jvm.internal.impl.types.TypeProjection r0 = (kotlin.reflect.jvm.internal.impl.types.TypeProjection) r0
            kotlin.reflect.jvm.internal.impl.types.KotlinType r0 = r0.getType()
            kotlin.reflect.jvm.internal.impl.descriptors.FunctionDescriptor$CopyBuilder r6 = r6.setReturnType(r0)
            kotlin.reflect.jvm.internal.impl.descriptors.FunctionDescriptor r6 = r6.build()
            kotlin.reflect.jvm.internal.impl.descriptors.SimpleFunctionDescriptor r6 = (kotlin.reflect.jvm.internal.impl.descriptors.SimpleFunctionDescriptor) r6
            r0 = r6
            kotlin.reflect.jvm.internal.impl.descriptors.impl.SimpleFunctionDescriptorImpl r0 = (kotlin.reflect.jvm.internal.impl.descriptors.impl.SimpleFunctionDescriptorImpl) r0
            if (r0 == 0) goto L7c
            r0.setSuspend(r1)
        L7c:
            return r6
        L7d:
            return r2
        */
        throw new UnsupportedOperationException("Method not decompiled: kotlin.reflect.jvm.internal.impl.load.java.lazy.descriptors.LazyJavaClassMemberScope.C0(kotlin.reflect.jvm.internal.impl.descriptors.SimpleFunctionDescriptor):kotlin.reflect.jvm.internal.impl.descriptors.SimpleFunctionDescriptor");
    }

    private final boolean D0(PropertyDescriptor propertyDescriptor, Function1 function1) {
        if (JavaDescriptorUtilKt.isJavaField(propertyDescriptor)) {
            return false;
        }
        SimpleFunctionDescriptor K0 = K0(propertyDescriptor, function1);
        SimpleFunctionDescriptor L0 = L0(propertyDescriptor, function1);
        if (K0 == null) {
            return false;
        }
        if (!propertyDescriptor.isVar()) {
            return true;
        }
        if (L0 == null || L0.getModality() != K0.getModality()) {
            return false;
        }
        return true;
    }

    private final boolean E0(CallableDescriptor callableDescriptor, CallableDescriptor callableDescriptor2) {
        OverridingUtil.OverrideCompatibilityInfo.Result result = OverridingUtil.DEFAULT.isOverridableByWithoutExternalConditions(callableDescriptor2, callableDescriptor, true).getResult();
        Intrinsics.checkNotNullExpressionValue(result, "getResult(...)");
        if (result == OverridingUtil.OverrideCompatibilityInfo.Result.OVERRIDABLE && !JavaIncompatibilityRulesOverridabilityCondition.Companion.doesJavaOverrideHaveIncompatibleValueParameterKinds(callableDescriptor2, callableDescriptor)) {
            return true;
        }
        return false;
    }

    private final boolean F0(SimpleFunctionDescriptor simpleFunctionDescriptor) {
        SpecialGenericSignatures.Companion companion = SpecialGenericSignatures.Companion;
        Name name = simpleFunctionDescriptor.getName();
        Intrinsics.checkNotNullExpressionValue(name, "getName(...)");
        Name builtinFunctionNamesByJvmName = companion.getBuiltinFunctionNamesByJvmName(name);
        if (builtinFunctionNamesByJvmName == null) {
            return false;
        }
        ArrayList<SimpleFunctionDescriptor> arrayList = new ArrayList();
        for (Object obj : O0(builtinFunctionNamesByJvmName)) {
            if (SpecialBuiltinMembers.doesOverrideBuiltinWithDifferentJvmName((SimpleFunctionDescriptor) obj)) {
                arrayList.add(obj);
            }
        }
        if (arrayList.isEmpty()) {
            return false;
        }
        SimpleFunctionDescriptor B0 = B0(simpleFunctionDescriptor, builtinFunctionNamesByJvmName);
        if (arrayList.isEmpty()) {
            return false;
        }
        for (SimpleFunctionDescriptor simpleFunctionDescriptor2 : arrayList) {
            if (G0(simpleFunctionDescriptor2, B0)) {
                return true;
            }
        }
        return false;
    }

    private final boolean G0(SimpleFunctionDescriptor simpleFunctionDescriptor, FunctionDescriptor functionDescriptor) {
        if (BuiltinMethodsWithDifferentJvmName.INSTANCE.isRemoveAtByIndex(simpleFunctionDescriptor)) {
            functionDescriptor = functionDescriptor.getOriginal();
        }
        Intrinsics.checkNotNull(functionDescriptor);
        return E0(functionDescriptor, simpleFunctionDescriptor);
    }

    private final boolean H0(SimpleFunctionDescriptor simpleFunctionDescriptor) {
        SimpleFunctionDescriptor C0 = C0(simpleFunctionDescriptor);
        if (C0 == null) {
            return false;
        }
        Name name = simpleFunctionDescriptor.getName();
        Intrinsics.checkNotNullExpressionValue(name, "getName(...)");
        Set<SimpleFunctionDescriptor> O0 = O0(name);
        if ((O0 instanceof Collection) && O0.isEmpty()) {
            return false;
        }
        for (SimpleFunctionDescriptor simpleFunctionDescriptor2 : O0) {
            if (simpleFunctionDescriptor2.isSuspend() && E0(C0, simpleFunctionDescriptor2)) {
                return true;
            }
        }
        return false;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Map I0(LazyJavaClassMemberScope lazyJavaClassMemberScope) {
        ArrayList arrayList = new ArrayList();
        for (Object obj : lazyJavaClassMemberScope.f32968n.getFields()) {
            if (((JavaField) obj).isEnumEntry()) {
                arrayList.add(obj);
            }
        }
        LinkedHashMap linkedHashMap = new LinkedHashMap(kotlin.ranges.d.d(kotlin.collections.o0.e(CollectionsKt.w(arrayList, 10)), 16));
        for (Object obj2 : arrayList) {
            linkedHashMap.put(((JavaField) obj2).getName(), obj2);
        }
        return linkedHashMap;
    }

    private final SimpleFunctionDescriptor J0(PropertyDescriptor propertyDescriptor, String str, Function1 function1) {
        SimpleFunctionDescriptor simpleFunctionDescriptor;
        boolean isSubtypeOf;
        Name identifier = Name.identifier(str);
        Intrinsics.checkNotNullExpressionValue(identifier, "identifier(...)");
        Iterator it = ((Iterable) function1.invoke(identifier)).iterator();
        do {
            simpleFunctionDescriptor = null;
            if (!it.hasNext()) {
                break;
            }
            SimpleFunctionDescriptor simpleFunctionDescriptor2 = (SimpleFunctionDescriptor) it.next();
            if (simpleFunctionDescriptor2.getValueParameters().size() == 0) {
                KotlinTypeChecker kotlinTypeChecker = KotlinTypeChecker.DEFAULT;
                KotlinType returnType = simpleFunctionDescriptor2.getReturnType();
                if (returnType == null) {
                    isSubtypeOf = false;
                } else {
                    isSubtypeOf = kotlinTypeChecker.isSubtypeOf(returnType, propertyDescriptor.getType());
                }
                if (isSubtypeOf) {
                    simpleFunctionDescriptor = simpleFunctionDescriptor2;
                    continue;
                } else {
                    continue;
                }
            }
        } while (simpleFunctionDescriptor == null);
        return simpleFunctionDescriptor;
    }

    private final SimpleFunctionDescriptor K0(PropertyDescriptor propertyDescriptor, Function1 function1) {
        PropertyGetterDescriptor propertyGetterDescriptor;
        PropertyGetterDescriptor getter = propertyDescriptor.getGetter();
        String str = null;
        if (getter != null) {
            propertyGetterDescriptor = (PropertyGetterDescriptor) SpecialBuiltinMembers.getOverriddenBuiltinWithDifferentJvmName(getter);
        } else {
            propertyGetterDescriptor = null;
        }
        if (propertyGetterDescriptor != null) {
            str = ClassicBuiltinSpecialProperties.INSTANCE.getBuiltinSpecialPropertyGetterName(propertyGetterDescriptor);
        }
        if (str != null && !SpecialBuiltinMembers.hasRealKotlinSuperClassWithOverrideOf(getOwnerDescriptor(), propertyGetterDescriptor)) {
            return J0(propertyDescriptor, str, function1);
        }
        String asString = propertyDescriptor.getName().asString();
        Intrinsics.checkNotNullExpressionValue(asString, "asString(...)");
        return J0(propertyDescriptor, JvmAbi.getterName(asString), function1);
    }

    private final SimpleFunctionDescriptor L0(PropertyDescriptor propertyDescriptor, Function1 function1) {
        SimpleFunctionDescriptor simpleFunctionDescriptor;
        KotlinType returnType;
        String asString = propertyDescriptor.getName().asString();
        Intrinsics.checkNotNullExpressionValue(asString, "asString(...)");
        Name identifier = Name.identifier(JvmAbi.setterName(asString));
        Intrinsics.checkNotNullExpressionValue(identifier, "identifier(...)");
        Iterator it = ((Iterable) function1.invoke(identifier)).iterator();
        do {
            simpleFunctionDescriptor = null;
            if (!it.hasNext()) {
                break;
            }
            SimpleFunctionDescriptor simpleFunctionDescriptor2 = (SimpleFunctionDescriptor) it.next();
            if (simpleFunctionDescriptor2.getValueParameters().size() == 1 && (returnType = simpleFunctionDescriptor2.getReturnType()) != null && KotlinBuiltIns.isUnit(returnType)) {
                KotlinTypeChecker kotlinTypeChecker = KotlinTypeChecker.DEFAULT;
                List<ValueParameterDescriptor> valueParameters = simpleFunctionDescriptor2.getValueParameters();
                Intrinsics.checkNotNullExpressionValue(valueParameters, "getValueParameters(...)");
                if (kotlinTypeChecker.equalTypes(((ValueParameterDescriptor) CollectionsKt.Q0(valueParameters)).getType(), propertyDescriptor.getType())) {
                    simpleFunctionDescriptor = simpleFunctionDescriptor2;
                    continue;
                } else {
                    continue;
                }
            }
        } while (simpleFunctionDescriptor == null);
        return simpleFunctionDescriptor;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Set M0(LazyJavaResolverContext lazyJavaResolverContext, LazyJavaClassMemberScope lazyJavaClassMemberScope) {
        return CollectionsKt.l1(lazyJavaResolverContext.getComponents().getSyntheticPartsProvider().getNestedClassNames(lazyJavaClassMemberScope.getOwnerDescriptor(), lazyJavaResolverContext));
    }

    private final DescriptorVisibility N0(ClassDescriptor classDescriptor) {
        DescriptorVisibility visibility = classDescriptor.getVisibility();
        Intrinsics.checkNotNullExpressionValue(visibility, "getVisibility(...)");
        if (Intrinsics.areEqual(visibility, JavaDescriptorVisibilities.PROTECTED_STATIC_VISIBILITY)) {
            DescriptorVisibility PROTECTED_AND_PACKAGE = JavaDescriptorVisibilities.PROTECTED_AND_PACKAGE;
            Intrinsics.checkNotNullExpressionValue(PROTECTED_AND_PACKAGE, "PROTECTED_AND_PACKAGE");
            return PROTECTED_AND_PACKAGE;
        }
        return visibility;
    }

    private final Set O0(Name name) {
        LinkedHashSet linkedHashSet = new LinkedHashSet();
        for (KotlinType kotlinType : q0()) {
            CollectionsKt.B(linkedHashSet, kotlinType.getMemberScope().getContributedFunctions(name, NoLookupLocation.WHEN_GET_SUPER_MEMBERS));
        }
        return linkedHashSet;
    }

    private final Set Q0(Name name) {
        ArrayList arrayList = new ArrayList();
        for (KotlinType kotlinType : q0()) {
            Collection<? extends PropertyDescriptor> contributedVariables = kotlinType.getMemberScope().getContributedVariables(name, NoLookupLocation.WHEN_GET_SUPER_MEMBERS);
            ArrayList arrayList2 = new ArrayList(CollectionsKt.w(contributedVariables, 10));
            for (PropertyDescriptor propertyDescriptor : contributedVariables) {
                arrayList2.add(propertyDescriptor);
            }
            CollectionsKt.B(arrayList, arrayList2);
        }
        return CollectionsKt.l1(arrayList);
    }

    private final boolean R0(SimpleFunctionDescriptor simpleFunctionDescriptor, FunctionDescriptor functionDescriptor) {
        String computeJvmDescriptor$default = MethodSignatureMappingKt.computeJvmDescriptor$default(simpleFunctionDescriptor, false, false, 2, null);
        FunctionDescriptor original = functionDescriptor.getOriginal();
        Intrinsics.checkNotNullExpressionValue(original, "getOriginal(...)");
        if (!Intrinsics.areEqual(computeJvmDescriptor$default, MethodSignatureMappingKt.computeJvmDescriptor$default(original, false, false, 2, null)) || E0(simpleFunctionDescriptor, functionDescriptor)) {
            return false;
        }
        return true;
    }

    private final boolean S0(SimpleFunctionDescriptor simpleFunctionDescriptor) {
        Name name = simpleFunctionDescriptor.getName();
        Intrinsics.checkNotNullExpressionValue(name, "getName(...)");
        List<Name> propertyNamesCandidatesByAccessorName = PropertiesConventionUtilKt.getPropertyNamesCandidatesByAccessorName(name);
        if (!(propertyNamesCandidatesByAccessorName instanceof Collection) || !propertyNamesCandidatesByAccessorName.isEmpty()) {
            for (Name name2 : propertyNamesCandidatesByAccessorName) {
                Set<PropertyDescriptor> Q0 = Q0(name2);
                if (!(Q0 instanceof Collection) || !Q0.isEmpty()) {
                    for (PropertyDescriptor propertyDescriptor : Q0) {
                        if (D0(propertyDescriptor, new p(simpleFunctionDescriptor, this))) {
                            if (!propertyDescriptor.isVar()) {
                                String asString = simpleFunctionDescriptor.getName().asString();
                                Intrinsics.checkNotNullExpressionValue(asString, "asString(...)");
                                if (!JvmAbi.isSetterName(asString)) {
                                }
                            }
                            return false;
                        }
                    }
                    continue;
                }
            }
        }
        if (F0(simpleFunctionDescriptor) || e1(simpleFunctionDescriptor) || H0(simpleFunctionDescriptor)) {
            return false;
        }
        return true;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Collection T0(SimpleFunctionDescriptor simpleFunctionDescriptor, LazyJavaClassMemberScope lazyJavaClassMemberScope, Name accessorName) {
        Intrinsics.checkNotNullParameter(accessorName, "accessorName");
        if (Intrinsics.areEqual(simpleFunctionDescriptor.getName(), accessorName)) {
            return CollectionsKt.e(simpleFunctionDescriptor);
        }
        return CollectionsKt.L0(lazyJavaClassMemberScope.c1(accessorName), lazyJavaClassMemberScope.d1(accessorName));
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Set U0(LazyJavaClassMemberScope lazyJavaClassMemberScope) {
        return CollectionsKt.l1(lazyJavaClassMemberScope.f32968n.getInnerClassNames());
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final ClassDescriptor V0(LazyJavaClassMemberScope lazyJavaClassMemberScope, LazyJavaResolverContext lazyJavaResolverContext, Name name) {
        Intrinsics.checkNotNullParameter(name, "name");
        if (((Set) lazyJavaClassMemberScope.f32971q.invoke()).contains(name)) {
            JavaClassFinder finder = lazyJavaResolverContext.getComponents().getFinder();
            ClassId classId = DescriptorUtilsKt.getClassId(lazyJavaClassMemberScope.getOwnerDescriptor());
            Intrinsics.checkNotNull(classId);
            JavaClass findClass = finder.findClass(new JavaClassFinder.Request(classId.createNestedClassId(name), null, lazyJavaClassMemberScope.f32968n, 2, null));
            if (findClass == null) {
                return null;
            }
            LazyJavaClassDescriptor lazyJavaClassDescriptor = new LazyJavaClassDescriptor(lazyJavaResolverContext, lazyJavaClassMemberScope.getOwnerDescriptor(), findClass, null, 8, null);
            lazyJavaResolverContext.getComponents().getJavaClassesTracker().reportClass(lazyJavaClassDescriptor);
            return lazyJavaClassDescriptor;
        } else if (((Set) lazyJavaClassMemberScope.f32972r.invoke()).contains(name)) {
            List<ClassDescriptor> c10 = CollectionsKt.c();
            lazyJavaResolverContext.getComponents().getSyntheticPartsProvider().generateNestedClass(lazyJavaClassMemberScope.getOwnerDescriptor(), name, c10, lazyJavaResolverContext);
            List a10 = CollectionsKt.a(c10);
            int size = a10.size();
            if (size == 0) {
                return null;
            }
            if (size == 1) {
                return (ClassDescriptor) CollectionsKt.Q0(a10);
            }
            throw new IllegalStateException(("Multiple classes with same name are generated: " + a10).toString());
        } else {
            JavaField javaField = (JavaField) ((Map) lazyJavaClassMemberScope.f32973s.invoke()).get(name);
            if (javaField == null) {
                return null;
            }
            return EnumEntrySyntheticClassDescriptor.create(lazyJavaResolverContext.getStorageManager(), lazyJavaClassMemberScope.getOwnerDescriptor(), name, lazyJavaResolverContext.getStorageManager().createLazyValue(new s(lazyJavaClassMemberScope)), LazyJavaAnnotationsKt.resolveAnnotations(lazyJavaResolverContext, javaField), lazyJavaResolverContext.getComponents().getSourceElementFactory().source(javaField));
        }
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Set W0(LazyJavaClassMemberScope lazyJavaClassMemberScope) {
        return x0.l(lazyJavaClassMemberScope.getFunctionNames(), lazyJavaClassMemberScope.getVariableNames());
    }

    private final SimpleFunctionDescriptor X0(SimpleFunctionDescriptor simpleFunctionDescriptor, Function1 function1, Collection collection) {
        SimpleFunctionDescriptor w02;
        FunctionDescriptor overriddenBuiltinFunctionWithErasedValueParametersInJava = BuiltinMethodsWithSpecialGenericSignature.getOverriddenBuiltinFunctionWithErasedValueParametersInJava(simpleFunctionDescriptor);
        if (overriddenBuiltinFunctionWithErasedValueParametersInJava != null && (w02 = w0(overriddenBuiltinFunctionWithErasedValueParametersInJava, function1)) != null) {
            if (!S0(w02)) {
                w02 = null;
            }
            if (w02 != null) {
                return v0(w02, overriddenBuiltinFunctionWithErasedValueParametersInJava, collection);
            }
        }
        return null;
    }

    private final SimpleFunctionDescriptor Y0(SimpleFunctionDescriptor simpleFunctionDescriptor, Function1 function1, Name name, Collection collection) {
        SimpleFunctionDescriptor simpleFunctionDescriptor2 = (SimpleFunctionDescriptor) SpecialBuiltinMembers.getOverriddenBuiltinWithDifferentJvmName(simpleFunctionDescriptor);
        if (simpleFunctionDescriptor2 == null) {
            return null;
        }
        String jvmMethodNameIfSpecial = SpecialBuiltinMembers.getJvmMethodNameIfSpecial(simpleFunctionDescriptor2);
        Intrinsics.checkNotNull(jvmMethodNameIfSpecial);
        Name identifier = Name.identifier(jvmMethodNameIfSpecial);
        Intrinsics.checkNotNullExpressionValue(identifier, "identifier(...)");
        for (SimpleFunctionDescriptor simpleFunctionDescriptor3 : (Collection) function1.invoke(identifier)) {
            SimpleFunctionDescriptor B0 = B0(simpleFunctionDescriptor3, name);
            if (G0(simpleFunctionDescriptor2, B0)) {
                return v0(B0, simpleFunctionDescriptor2, collection);
            }
        }
        return null;
    }

    private final SimpleFunctionDescriptor Z0(SimpleFunctionDescriptor simpleFunctionDescriptor, Function1 function1) {
        if (!simpleFunctionDescriptor.isSuspend()) {
            return null;
        }
        Name name = simpleFunctionDescriptor.getName();
        Intrinsics.checkNotNullExpressionValue(name, "getName(...)");
        for (SimpleFunctionDescriptor simpleFunctionDescriptor2 : (Iterable) function1.invoke(name)) {
            SimpleFunctionDescriptor C0 = C0(simpleFunctionDescriptor2);
            if (C0 == null || !E0(C0, simpleFunctionDescriptor)) {
                C0 = null;
                continue;
            }
            if (C0 != null) {
                return C0;
            }
        }
        return null;
    }

    private final JavaClassConstructorDescriptor a1(JavaConstructor javaConstructor) {
        ClassDescriptor ownerDescriptor = getOwnerDescriptor();
        JavaClassConstructorDescriptor createJavaConstructor = JavaClassConstructorDescriptor.createJavaConstructor(ownerDescriptor, LazyJavaAnnotationsKt.resolveAnnotations(C(), javaConstructor), false, C().getComponents().getSourceElementFactory().source(javaConstructor));
        Intrinsics.checkNotNullExpressionValue(createJavaConstructor, "createJavaConstructor(...)");
        LazyJavaResolverContext childForMethod = ContextKt.childForMethod(C(), createJavaConstructor, javaConstructor, ownerDescriptor.getDeclaredTypeParameters().size());
        LazyJavaScope.ResolvedValueParameters T = T(childForMethod, createJavaConstructor, javaConstructor.getValueParameters());
        List<TypeParameterDescriptor> declaredTypeParameters = ownerDescriptor.getDeclaredTypeParameters();
        Intrinsics.checkNotNullExpressionValue(declaredTypeParameters, "getDeclaredTypeParameters(...)");
        List<TypeParameterDescriptor> list = declaredTypeParameters;
        List<JavaTypeParameter> typeParameters = javaConstructor.getTypeParameters();
        ArrayList arrayList = new ArrayList(CollectionsKt.w(typeParameters, 10));
        for (JavaTypeParameter javaTypeParameter : typeParameters) {
            TypeParameterDescriptor resolveTypeParameter = childForMethod.getTypeParameterResolver().resolveTypeParameter(javaTypeParameter);
            Intrinsics.checkNotNull(resolveTypeParameter);
            arrayList.add(resolveTypeParameter);
        }
        createJavaConstructor.initialize(T.getDescriptors(), UtilsKt.toDescriptorVisibility(javaConstructor.getVisibility()), CollectionsKt.L0(list, arrayList));
        createJavaConstructor.setHasStableParameterNames(false);
        createJavaConstructor.setHasSynthesizedParameterNames(T.getHasSynthesizedNames());
        createJavaConstructor.setReturnType(ownerDescriptor.getDefaultType());
        childForMethod.getComponents().getJavaResolverCache().recordConstructor(javaConstructor, createJavaConstructor);
        return createJavaConstructor;
    }

    private final JavaMethodDescriptor b1(JavaRecordComponent javaRecordComponent) {
        JavaMethodDescriptor createJavaMethod = JavaMethodDescriptor.createJavaMethod(getOwnerDescriptor(), LazyJavaAnnotationsKt.resolveAnnotations(C(), javaRecordComponent), javaRecordComponent.getName(), C().getComponents().getSourceElementFactory().source(javaRecordComponent), true);
        Intrinsics.checkNotNullExpressionValue(createJavaMethod, "createJavaMethod(...)");
        createJavaMethod.initialize(null, F(), CollectionsKt.l(), CollectionsKt.l(), CollectionsKt.l(), C().getTypeResolver().transformJavaType(javaRecordComponent.getType(), JavaTypeAttributesKt.toAttributes$default(TypeUsage.COMMON, false, false, null, 6, null)), Modality.Companion.convertFromFlags(false, false, true), DescriptorVisibilities.PUBLIC, null);
        createJavaMethod.setParameterNamesStatus(false, false);
        C().getComponents().getJavaResolverCache().recordMethod(javaRecordComponent, createJavaMethod);
        return createJavaMethod;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public final Collection c1(Name name) {
        Collection<JavaMethod> findMethodsByName = ((DeclaredMemberIndex) E().invoke()).findMethodsByName(name);
        ArrayList arrayList = new ArrayList(CollectionsKt.w(findMethodsByName, 10));
        for (JavaMethod javaMethod : findMethodsByName) {
            arrayList.add(P(javaMethod));
        }
        return arrayList;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public final Collection d1(Name name) {
        ArrayList arrayList = new ArrayList();
        for (Object obj : O0(name)) {
            SimpleFunctionDescriptor simpleFunctionDescriptor = (SimpleFunctionDescriptor) obj;
            if (!SpecialBuiltinMembers.doesOverrideBuiltinWithDifferentJvmName(simpleFunctionDescriptor) && BuiltinMethodsWithSpecialGenericSignature.getOverriddenBuiltinFunctionWithErasedValueParametersInJava(simpleFunctionDescriptor) == null) {
                arrayList.add(obj);
            }
        }
        return arrayList;
    }

    private final boolean e1(SimpleFunctionDescriptor simpleFunctionDescriptor) {
        BuiltinMethodsWithSpecialGenericSignature builtinMethodsWithSpecialGenericSignature = BuiltinMethodsWithSpecialGenericSignature.INSTANCE;
        Name name = simpleFunctionDescriptor.getName();
        Intrinsics.checkNotNullExpressionValue(name, "getName(...)");
        if (!builtinMethodsWithSpecialGenericSignature.getSameAsBuiltinMethodWithErasedValueParameters(name)) {
            return false;
        }
        Name name2 = simpleFunctionDescriptor.getName();
        Intrinsics.checkNotNullExpressionValue(name2, "getName(...)");
        ArrayList<FunctionDescriptor> arrayList = new ArrayList();
        for (SimpleFunctionDescriptor simpleFunctionDescriptor2 : O0(name2)) {
            FunctionDescriptor overriddenBuiltinFunctionWithErasedValueParametersInJava = BuiltinMethodsWithSpecialGenericSignature.getOverriddenBuiltinFunctionWithErasedValueParametersInJava(simpleFunctionDescriptor2);
            if (overriddenBuiltinFunctionWithErasedValueParametersInJava != null) {
                arrayList.add(overriddenBuiltinFunctionWithErasedValueParametersInJava);
            }
        }
        if (arrayList.isEmpty()) {
            return false;
        }
        for (FunctionDescriptor functionDescriptor : arrayList) {
            if (R0(simpleFunctionDescriptor, functionDescriptor)) {
                return true;
            }
        }
        return false;
    }

    private final void g0(List list, ConstructorDescriptor constructorDescriptor, int i10, JavaMethod javaMethod, KotlinType kotlinType, KotlinType kotlinType2) {
        KotlinType kotlinType3;
        Annotations empty = Annotations.Companion.getEMPTY();
        Name name = javaMethod.getName();
        KotlinType makeNotNullable = TypeUtils.makeNotNullable(kotlinType);
        Intrinsics.checkNotNullExpressionValue(makeNotNullable, "makeNotNullable(...)");
        boolean hasAnnotationParameterDefaultValue = javaMethod.getHasAnnotationParameterDefaultValue();
        if (kotlinType2 != null) {
            kotlinType3 = TypeUtils.makeNotNullable(kotlinType2);
        } else {
            kotlinType3 = null;
        }
        list.add(new ValueParameterDescriptorImpl(constructorDescriptor, null, i10, empty, name, makeNotNullable, hasAnnotationParameterDefaultValue, false, false, kotlinType3, C().getComponents().getSourceElementFactory().source(javaMethod)));
    }

    private final void h0(Collection collection, Name name, Collection collection2, boolean z10) {
        Collection resolveOverridesForNonStaticMembers = DescriptorResolverUtils.resolveOverridesForNonStaticMembers(name, collection2, collection, getOwnerDescriptor(), C().getComponents().getErrorReporter(), C().getComponents().getKotlinTypeChecker().getOverridingUtil());
        Intrinsics.checkNotNullExpressionValue(resolveOverridesForNonStaticMembers, "resolveOverridesForNonStaticMembers(...)");
        if (!z10) {
            collection.addAll(resolveOverridesForNonStaticMembers);
            return;
        }
        Collection<SimpleFunctionDescriptor> collection3 = resolveOverridesForNonStaticMembers;
        List L0 = CollectionsKt.L0(collection, collection3);
        ArrayList arrayList = new ArrayList(CollectionsKt.w(collection3, 10));
        for (SimpleFunctionDescriptor simpleFunctionDescriptor : collection3) {
            SimpleFunctionDescriptor simpleFunctionDescriptor2 = (SimpleFunctionDescriptor) SpecialBuiltinMembers.getOverriddenSpecialBuiltin(simpleFunctionDescriptor);
            if (simpleFunctionDescriptor2 == null) {
                Intrinsics.checkNotNull(simpleFunctionDescriptor);
            } else {
                Intrinsics.checkNotNull(simpleFunctionDescriptor);
                simpleFunctionDescriptor = v0(simpleFunctionDescriptor, simpleFunctionDescriptor2, L0);
            }
            arrayList.add(simpleFunctionDescriptor);
        }
        collection.addAll(arrayList);
    }

    private final void i0(Name name, Collection collection, Collection collection2, Collection collection3, Function1 function1) {
        Iterator it = collection2.iterator();
        while (it.hasNext()) {
            SimpleFunctionDescriptor simpleFunctionDescriptor = (SimpleFunctionDescriptor) it.next();
            kotlin.reflect.jvm.internal.impl.utils.CollectionsKt.addIfNotNull(collection3, Y0(simpleFunctionDescriptor, function1, name, collection));
            kotlin.reflect.jvm.internal.impl.utils.CollectionsKt.addIfNotNull(collection3, X0(simpleFunctionDescriptor, function1, collection));
            kotlin.reflect.jvm.internal.impl.utils.CollectionsKt.addIfNotNull(collection3, Z0(simpleFunctionDescriptor, function1));
        }
    }

    private final void j0(Set set, Collection collection, Set set2, Function1 function1) {
        Iterator it = set.iterator();
        while (it.hasNext()) {
            PropertyDescriptor propertyDescriptor = (PropertyDescriptor) it.next();
            JavaPropertyDescriptor x02 = x0(propertyDescriptor, function1);
            if (x02 != null) {
                collection.add(x02);
                if (set2 != null) {
                    set2.add(propertyDescriptor);
                    return;
                }
                return;
            }
        }
    }

    private final void k0(Name name, Collection collection) {
        JavaMethod javaMethod = (JavaMethod) CollectionsKt.R0(((DeclaredMemberIndex) E().invoke()).findMethodsByName(name));
        if (javaMethod == null) {
            return;
        }
        collection.add(z0(this, javaMethod, null, Modality.FINAL, 2, null));
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final boolean n0(JavaMember it) {
        Intrinsics.checkNotNullParameter(it, "it");
        return !it.isStatic();
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Collection o0(LazyJavaClassMemberScope lazyJavaClassMemberScope, Name it) {
        Intrinsics.checkNotNullParameter(it, "it");
        return lazyJavaClassMemberScope.c1(it);
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Collection p0(LazyJavaClassMemberScope lazyJavaClassMemberScope, Name it) {
        Intrinsics.checkNotNullParameter(it, "it");
        return lazyJavaClassMemberScope.d1(it);
    }

    private final Collection q0() {
        if (this.f32969o) {
            Collection<KotlinType> supertypes = getOwnerDescriptor().getTypeConstructor().getSupertypes();
            Intrinsics.checkNotNullExpressionValue(supertypes, "getSupertypes(...)");
            return supertypes;
        }
        return C().getComponents().getKotlinTypeChecker().getKotlinTypeRefiner().refineSupertypes(getOwnerDescriptor());
    }

    /* JADX INFO: Access modifiers changed from: private */
    /* JADX WARN: Multi-variable type inference failed */
    /* JADX WARN: Type inference failed for: r1v3, types: [java.util.Collection] */
    public static final List r0(LazyJavaClassMemberScope lazyJavaClassMemberScope, LazyJavaResolverContext lazyJavaResolverContext) {
        Collection<JavaConstructor> constructors = lazyJavaClassMemberScope.f32968n.getConstructors();
        ArrayList<ClassConstructorDescriptor> arrayList = new ArrayList(constructors.size());
        for (JavaConstructor javaConstructor : constructors) {
            arrayList.add(lazyJavaClassMemberScope.a1(javaConstructor));
        }
        if (lazyJavaClassMemberScope.f32968n.isRecord()) {
            ClassConstructorDescriptor u02 = lazyJavaClassMemberScope.u0();
            String computeJvmDescriptor$default = MethodSignatureMappingKt.computeJvmDescriptor$default(u02, false, false, 2, null);
            if (!arrayList.isEmpty()) {
                for (ClassConstructorDescriptor classConstructorDescriptor : arrayList) {
                    if (Intrinsics.areEqual(MethodSignatureMappingKt.computeJvmDescriptor$default(classConstructorDescriptor, false, false, 2, null), computeJvmDescriptor$default)) {
                        break;
                    }
                }
            }
            arrayList.add(u02);
            lazyJavaResolverContext.getComponents().getJavaResolverCache().recordConstructor(lazyJavaClassMemberScope.f32968n, u02);
        }
        lazyJavaResolverContext.getComponents().getSyntheticPartsProvider().generateConstructors(lazyJavaClassMemberScope.getOwnerDescriptor(), arrayList, lazyJavaResolverContext);
        SignatureEnhancement signatureEnhancement = lazyJavaResolverContext.getComponents().getSignatureEnhancement();
        boolean isEmpty = arrayList.isEmpty();
        ArrayList arrayList2 = arrayList;
        if (isEmpty) {
            arrayList2 = CollectionsKt.p(lazyJavaClassMemberScope.t0());
        }
        return CollectionsKt.h1(signatureEnhancement.enhanceSignatures(lazyJavaResolverContext, arrayList2));
    }

    private final List s0(ClassConstructorDescriptorImpl classConstructorDescriptorImpl) {
        ClassConstructorDescriptorImpl classConstructorDescriptorImpl2;
        Pair pair;
        Collection<JavaMethod> methods = this.f32968n.getMethods();
        ArrayList arrayList = new ArrayList(methods.size());
        JavaTypeAttributes attributes$default = JavaTypeAttributesKt.toAttributes$default(TypeUsage.COMMON, true, false, null, 6, null);
        ArrayList arrayList2 = new ArrayList();
        ArrayList arrayList3 = new ArrayList();
        for (Object obj : methods) {
            if (Intrinsics.areEqual(((JavaMethod) obj).getName(), JvmAnnotationNames.DEFAULT_ANNOTATION_MEMBER_NAME)) {
                arrayList2.add(obj);
            } else {
                arrayList3.add(obj);
            }
        }
        Pair pair2 = new Pair(arrayList2, arrayList3);
        List list = (List) pair2.a();
        List<JavaMethod> list2 = (List) pair2.b();
        list.size();
        JavaMethod javaMethod = (JavaMethod) CollectionsKt.firstOrNull(list);
        int i10 = 1;
        if (javaMethod != null) {
            JavaType returnType = javaMethod.getReturnType();
            if (returnType instanceof JavaArrayType) {
                JavaArrayType javaArrayType = (JavaArrayType) returnType;
                pair = new Pair(C().getTypeResolver().transformArrayType(javaArrayType, attributes$default, true), C().getTypeResolver().transformJavaType(javaArrayType.getComponentType(), attributes$default));
            } else {
                pair = new Pair(C().getTypeResolver().transformJavaType(returnType, attributes$default), null);
            }
            classConstructorDescriptorImpl2 = classConstructorDescriptorImpl;
            g0(arrayList, classConstructorDescriptorImpl2, 0, javaMethod, (KotlinType) pair.a(), (KotlinType) pair.b());
        } else {
            classConstructorDescriptorImpl2 = classConstructorDescriptorImpl;
        }
        int i11 = 0;
        if (javaMethod == null) {
            i10 = 0;
        }
        for (JavaMethod javaMethod2 : list2) {
            g0(arrayList, classConstructorDescriptorImpl2, i11 + i10, javaMethod2, C().getTypeResolver().transformJavaType(javaMethod2.getReturnType(), attributes$default), null);
            i11++;
        }
        return arrayList;
    }

    private final ClassConstructorDescriptor t0() {
        List<ValueParameterDescriptor> list;
        boolean isAnnotationType = this.f32968n.isAnnotationType();
        if ((this.f32968n.isInterface() || !this.f32968n.hasDefaultConstructor()) && !isAnnotationType) {
            return null;
        }
        ClassDescriptor ownerDescriptor = getOwnerDescriptor();
        JavaClassConstructorDescriptor createJavaConstructor = JavaClassConstructorDescriptor.createJavaConstructor(ownerDescriptor, Annotations.Companion.getEMPTY(), true, C().getComponents().getSourceElementFactory().source(this.f32968n));
        Intrinsics.checkNotNullExpressionValue(createJavaConstructor, "createJavaConstructor(...)");
        if (isAnnotationType) {
            list = s0(createJavaConstructor);
        } else {
            list = Collections.EMPTY_LIST;
        }
        createJavaConstructor.setHasSynthesizedParameterNames(false);
        createJavaConstructor.initialize(list, N0(ownerDescriptor));
        createJavaConstructor.setHasStableParameterNames(true);
        createJavaConstructor.setReturnType(ownerDescriptor.getDefaultType());
        C().getComponents().getJavaResolverCache().recordConstructor(this.f32968n, createJavaConstructor);
        return createJavaConstructor;
    }

    private final ClassConstructorDescriptor u0() {
        ClassDescriptor ownerDescriptor = getOwnerDescriptor();
        JavaClassConstructorDescriptor createJavaConstructor = JavaClassConstructorDescriptor.createJavaConstructor(ownerDescriptor, Annotations.Companion.getEMPTY(), true, C().getComponents().getSourceElementFactory().source(this.f32968n));
        Intrinsics.checkNotNullExpressionValue(createJavaConstructor, "createJavaConstructor(...)");
        List<ValueParameterDescriptor> A0 = A0(createJavaConstructor);
        createJavaConstructor.setHasSynthesizedParameterNames(false);
        createJavaConstructor.initialize(A0, N0(ownerDescriptor));
        createJavaConstructor.setHasStableParameterNames(false);
        createJavaConstructor.setReturnType(ownerDescriptor.getDefaultType());
        return createJavaConstructor;
    }

    private final SimpleFunctionDescriptor v0(SimpleFunctionDescriptor simpleFunctionDescriptor, CallableDescriptor callableDescriptor, Collection collection) {
        Collection<SimpleFunctionDescriptor> collection2 = collection;
        if ((collection2 instanceof Collection) && collection2.isEmpty()) {
            return simpleFunctionDescriptor;
        }
        for (SimpleFunctionDescriptor simpleFunctionDescriptor2 : collection2) {
            if (!Intrinsics.areEqual(simpleFunctionDescriptor, simpleFunctionDescriptor2) && simpleFunctionDescriptor2.getInitialSignatureDescriptor() == null && E0(simpleFunctionDescriptor2, callableDescriptor)) {
                SimpleFunctionDescriptor build = simpleFunctionDescriptor.newCopyBuilder().setHiddenToOvercomeSignatureClash().build();
                Intrinsics.checkNotNull(build);
                return build;
            }
        }
        return simpleFunctionDescriptor;
    }

    private final SimpleFunctionDescriptor w0(FunctionDescriptor functionDescriptor, Function1 function1) {
        Object obj;
        Name name = functionDescriptor.getName();
        Intrinsics.checkNotNullExpressionValue(name, "getName(...)");
        Iterator it = ((Iterable) function1.invoke(name)).iterator();
        while (true) {
            if (it.hasNext()) {
                obj = it.next();
                if (R0((SimpleFunctionDescriptor) obj, functionDescriptor)) {
                    break;
                }
            } else {
                obj = null;
                break;
            }
        }
        SimpleFunctionDescriptor simpleFunctionDescriptor = (SimpleFunctionDescriptor) obj;
        if (simpleFunctionDescriptor == null) {
            return null;
        }
        FunctionDescriptor.CopyBuilder<? extends SimpleFunctionDescriptor> newCopyBuilder = simpleFunctionDescriptor.newCopyBuilder();
        List<ValueParameterDescriptor> valueParameters = functionDescriptor.getValueParameters();
        Intrinsics.checkNotNullExpressionValue(valueParameters, "getValueParameters(...)");
        List<ValueParameterDescriptor> list = valueParameters;
        ArrayList arrayList = new ArrayList(CollectionsKt.w(list, 10));
        for (ValueParameterDescriptor valueParameterDescriptor : list) {
            arrayList.add(valueParameterDescriptor.getType());
        }
        List<ValueParameterDescriptor> valueParameters2 = simpleFunctionDescriptor.getValueParameters();
        Intrinsics.checkNotNullExpressionValue(valueParameters2, "getValueParameters(...)");
        newCopyBuilder.setValueParameters(UtilKt.copyValueParameters(arrayList, valueParameters2, functionDescriptor));
        newCopyBuilder.setSignatureChange();
        newCopyBuilder.setPreserveSourceElement();
        newCopyBuilder.putUserData(JavaMethodDescriptor.HAS_ERASED_VALUE_PARAMETERS, Boolean.TRUE);
        return newCopyBuilder.build();
    }

    private final JavaPropertyDescriptor x0(PropertyDescriptor propertyDescriptor, Function1 function1) {
        SimpleFunctionDescriptor simpleFunctionDescriptor;
        PropertySetterDescriptorImpl propertySetterDescriptorImpl = null;
        if (!D0(propertyDescriptor, function1)) {
            return null;
        }
        SimpleFunctionDescriptor K0 = K0(propertyDescriptor, function1);
        Intrinsics.checkNotNull(K0);
        if (propertyDescriptor.isVar()) {
            simpleFunctionDescriptor = L0(propertyDescriptor, function1);
            Intrinsics.checkNotNull(simpleFunctionDescriptor);
        } else {
            simpleFunctionDescriptor = null;
        }
        if (simpleFunctionDescriptor != null) {
            simpleFunctionDescriptor.getModality();
            K0.getModality();
        }
        JavaForKotlinOverridePropertyDescriptor javaForKotlinOverridePropertyDescriptor = new JavaForKotlinOverridePropertyDescriptor(getOwnerDescriptor(), K0, simpleFunctionDescriptor, propertyDescriptor);
        KotlinType returnType = K0.getReturnType();
        Intrinsics.checkNotNull(returnType);
        javaForKotlinOverridePropertyDescriptor.setType(returnType, CollectionsKt.l(), F(), null, CollectionsKt.l());
        PropertyGetterDescriptorImpl createGetter = DescriptorFactory.createGetter(javaForKotlinOverridePropertyDescriptor, K0.getAnnotations(), false, false, false, K0.getSource());
        createGetter.setInitialSignatureDescriptor(K0);
        createGetter.initialize(javaForKotlinOverridePropertyDescriptor.getType());
        Intrinsics.checkNotNullExpressionValue(createGetter, "apply(...)");
        if (simpleFunctionDescriptor != null) {
            List<ValueParameterDescriptor> valueParameters = simpleFunctionDescriptor.getValueParameters();
            Intrinsics.checkNotNullExpressionValue(valueParameters, "getValueParameters(...)");
            ValueParameterDescriptor valueParameterDescriptor = (ValueParameterDescriptor) CollectionsKt.firstOrNull(valueParameters);
            if (valueParameterDescriptor != null) {
                propertySetterDescriptorImpl = DescriptorFactory.createSetter(javaForKotlinOverridePropertyDescriptor, simpleFunctionDescriptor.getAnnotations(), valueParameterDescriptor.getAnnotations(), false, false, false, simpleFunctionDescriptor.getVisibility(), simpleFunctionDescriptor.getSource());
                propertySetterDescriptorImpl.setInitialSignatureDescriptor(simpleFunctionDescriptor);
            } else {
                throw new AssertionError("No parameter found for " + simpleFunctionDescriptor);
            }
        }
        javaForKotlinOverridePropertyDescriptor.initialize(createGetter, propertySetterDescriptorImpl);
        return javaForKotlinOverridePropertyDescriptor;
    }

    private final JavaPropertyDescriptor y0(JavaMethod javaMethod, KotlinType kotlinType, Modality modality) {
        JavaPropertyDescriptor javaPropertyDescriptor;
        LazyJavaClassMemberScope lazyJavaClassMemberScope;
        KotlinType kotlinType2;
        JavaPropertyDescriptor create = JavaPropertyDescriptor.create(getOwnerDescriptor(), LazyJavaAnnotationsKt.resolveAnnotations(C(), javaMethod), modality, UtilsKt.toDescriptorVisibility(javaMethod.getVisibility()), false, javaMethod.getName(), C().getComponents().getSourceElementFactory().source(javaMethod), false);
        Intrinsics.checkNotNullExpressionValue(create, "create(...)");
        PropertyGetterDescriptorImpl createDefaultGetter = DescriptorFactory.createDefaultGetter(create, Annotations.Companion.getEMPTY());
        Intrinsics.checkNotNullExpressionValue(createDefaultGetter, "createDefaultGetter(...)");
        create.initialize(createDefaultGetter, null);
        if (kotlinType == null) {
            LazyJavaResolverContext childForMethod$default = ContextKt.childForMethod$default(C(), create, javaMethod, 0, 4, null);
            javaPropertyDescriptor = create;
            lazyJavaClassMemberScope = this;
            kotlinType2 = lazyJavaClassMemberScope.r(javaMethod, childForMethod$default);
        } else {
            javaPropertyDescriptor = create;
            lazyJavaClassMemberScope = this;
            kotlinType2 = kotlinType;
        }
        javaPropertyDescriptor.setType(kotlinType2, CollectionsKt.l(), lazyJavaClassMemberScope.F(), null, CollectionsKt.l());
        createDefaultGetter.initialize(kotlinType2);
        return javaPropertyDescriptor;
    }

    static /* synthetic */ JavaPropertyDescriptor z0(LazyJavaClassMemberScope lazyJavaClassMemberScope, JavaMethod javaMethod, KotlinType kotlinType, Modality modality, int i10, Object obj) {
        if ((i10 & 2) != 0) {
            kotlinType = null;
        }
        return lazyJavaClassMemberScope.y0(javaMethod, kotlinType, modality);
    }

    @Override // kotlin.reflect.jvm.internal.impl.load.java.lazy.descriptors.LazyJavaScope
    protected ReceiverParameterDescriptor F() {
        return DescriptorUtils.getDispatchReceiverParameterIfNeeded(getOwnerDescriptor());
    }

    @Override // kotlin.reflect.jvm.internal.impl.load.java.lazy.descriptors.LazyJavaScope
    protected boolean L(JavaMethodDescriptor javaMethodDescriptor) {
        Intrinsics.checkNotNullParameter(javaMethodDescriptor, "<this>");
        if (this.f32968n.isAnnotationType()) {
            return false;
        }
        return S0(javaMethodDescriptor);
    }

    @Override // kotlin.reflect.jvm.internal.impl.load.java.lazy.descriptors.LazyJavaScope
    protected LazyJavaScope.MethodSignatureData O(JavaMethod method, List methodTypeParameters, KotlinType returnType, List valueParameters) {
        Intrinsics.checkNotNullParameter(method, "method");
        Intrinsics.checkNotNullParameter(methodTypeParameters, "methodTypeParameters");
        Intrinsics.checkNotNullParameter(returnType, "returnType");
        Intrinsics.checkNotNullParameter(valueParameters, "valueParameters");
        SignaturePropagator.PropagatedSignature resolvePropagatedSignature = C().getComponents().getSignaturePropagator().resolvePropagatedSignature(method, getOwnerDescriptor(), returnType, null, valueParameters, methodTypeParameters);
        Intrinsics.checkNotNullExpressionValue(resolvePropagatedSignature, "resolvePropagatedSignature(...)");
        KotlinType returnType2 = resolvePropagatedSignature.getReturnType();
        Intrinsics.checkNotNullExpressionValue(returnType2, "getReturnType(...)");
        KotlinType receiverType = resolvePropagatedSignature.getReceiverType();
        List<ValueParameterDescriptor> valueParameters2 = resolvePropagatedSignature.getValueParameters();
        Intrinsics.checkNotNullExpressionValue(valueParameters2, "getValueParameters(...)");
        List<TypeParameterDescriptor> typeParameters = resolvePropagatedSignature.getTypeParameters();
        Intrinsics.checkNotNullExpressionValue(typeParameters, "getTypeParameters(...)");
        boolean hasStableParameterNames = resolvePropagatedSignature.hasStableParameterNames();
        List<String> errors = resolvePropagatedSignature.getErrors();
        Intrinsics.checkNotNullExpressionValue(errors, "getErrors(...)");
        return new LazyJavaScope.MethodSignatureData(returnType2, receiverType, valueParameters2, typeParameters, hasStableParameterNames, errors);
    }

    /* JADX INFO: Access modifiers changed from: protected */
    @Override // kotlin.reflect.jvm.internal.impl.load.java.lazy.descriptors.LazyJavaScope
    /* renamed from: P0 */
    public ClassDescriptor getOwnerDescriptor() {
        return this.f32967m;
    }

    @NotNull
    public final NotNullLazyValue<List<ClassConstructorDescriptor>> getConstructors$descriptors_jvm() {
        return this.f32970p;
    }

    @Override // kotlin.reflect.jvm.internal.impl.resolve.scopes.MemberScopeImpl, kotlin.reflect.jvm.internal.impl.resolve.scopes.ResolutionScope
    /* renamed from: getContributedClassifier */
    public ClassifierDescriptor mo1200getContributedClassifier(@NotNull Name name, @NotNull LookupLocation location) {
        MemoizedFunctionToNullable memoizedFunctionToNullable;
        ClassDescriptor classDescriptor;
        Intrinsics.checkNotNullParameter(name, "name");
        Intrinsics.checkNotNullParameter(location, "location");
        mo1203recordLookup(name, location);
        LazyJavaClassMemberScope lazyJavaClassMemberScope = (LazyJavaClassMemberScope) H();
        if (lazyJavaClassMemberScope != null && (memoizedFunctionToNullable = lazyJavaClassMemberScope.f32974t) != null && (classDescriptor = (ClassDescriptor) memoizedFunctionToNullable.invoke(name)) != null) {
            return classDescriptor;
        }
        return (ClassifierDescriptor) this.f32974t.invoke(name);
    }

    @Override // kotlin.reflect.jvm.internal.impl.load.java.lazy.descriptors.LazyJavaScope, kotlin.reflect.jvm.internal.impl.resolve.scopes.MemberScopeImpl, kotlin.reflect.jvm.internal.impl.resolve.scopes.MemberScope, kotlin.reflect.jvm.internal.impl.resolve.scopes.ResolutionScope
    @NotNull
    public Collection<SimpleFunctionDescriptor> getContributedFunctions(@NotNull Name name, @NotNull LookupLocation location) {
        Intrinsics.checkNotNullParameter(name, "name");
        Intrinsics.checkNotNullParameter(location, "location");
        mo1203recordLookup(name, location);
        return super.getContributedFunctions(name, location);
    }

    @Override // kotlin.reflect.jvm.internal.impl.load.java.lazy.descriptors.LazyJavaScope, kotlin.reflect.jvm.internal.impl.resolve.scopes.MemberScopeImpl, kotlin.reflect.jvm.internal.impl.resolve.scopes.MemberScope
    @NotNull
    public Collection<PropertyDescriptor> getContributedVariables(@NotNull Name name, @NotNull LookupLocation location) {
        Intrinsics.checkNotNullParameter(name, "name");
        Intrinsics.checkNotNullParameter(location, "location");
        mo1203recordLookup(name, location);
        return super.getContributedVariables(name, location);
    }

    /* JADX INFO: Access modifiers changed from: protected */
    @Override // kotlin.reflect.jvm.internal.impl.load.java.lazy.descriptors.LazyJavaScope
    /* renamed from: l0 */
    public LinkedHashSet computeFunctionNames(DescriptorKindFilter kindFilter, Function1 function1) {
        Intrinsics.checkNotNullParameter(kindFilter, "kindFilter");
        Collection<KotlinType> supertypes = getOwnerDescriptor().getTypeConstructor().getSupertypes();
        Intrinsics.checkNotNullExpressionValue(supertypes, "getSupertypes(...)");
        LinkedHashSet linkedHashSet = new LinkedHashSet();
        for (KotlinType kotlinType : supertypes) {
            CollectionsKt.B(linkedHashSet, kotlinType.getMemberScope().getFunctionNames());
        }
        linkedHashSet.addAll(((DeclaredMemberIndex) E().invoke()).getMethodNames());
        linkedHashSet.addAll(((DeclaredMemberIndex) E().invoke()).getRecordComponentNames());
        linkedHashSet.addAll(o(kindFilter, function1));
        linkedHashSet.addAll(C().getComponents().getSyntheticPartsProvider().getMethodNames(getOwnerDescriptor(), C()));
        return linkedHashSet;
    }

    /* JADX INFO: Access modifiers changed from: protected */
    @Override // kotlin.reflect.jvm.internal.impl.load.java.lazy.descriptors.LazyJavaScope
    /* renamed from: m0 */
    public ClassDeclaredMemberIndex computeMemberIndex() {
        return new ClassDeclaredMemberIndex(this.f32968n, o.f33051d);
    }

    @Override // kotlin.reflect.jvm.internal.impl.load.java.lazy.descriptors.LazyJavaScope
    protected Set o(DescriptorKindFilter kindFilter, Function1 function1) {
        Intrinsics.checkNotNullParameter(kindFilter, "kindFilter");
        return x0.l((Set) this.f32971q.invoke(), ((Map) this.f32973s.invoke()).keySet());
    }

    @Override // kotlin.reflect.jvm.internal.impl.load.java.lazy.descriptors.LazyJavaScope
    protected void q(Collection result, Name name) {
        Intrinsics.checkNotNullParameter(result, "result");
        Intrinsics.checkNotNullParameter(name, "name");
        if (this.f32968n.isRecord() && ((DeclaredMemberIndex) E().invoke()).findRecordComponentByName(name) != null) {
            Collection<SimpleFunctionDescriptor> collection = result;
            if (!collection.isEmpty()) {
                for (SimpleFunctionDescriptor simpleFunctionDescriptor : collection) {
                    if (simpleFunctionDescriptor.getValueParameters().isEmpty()) {
                        break;
                    }
                }
            }
            JavaRecordComponent findRecordComponentByName = ((DeclaredMemberIndex) E().invoke()).findRecordComponentByName(name);
            Intrinsics.checkNotNull(findRecordComponentByName);
            result.add(b1(findRecordComponentByName));
        }
        C().getComponents().getSyntheticPartsProvider().generateMethods(getOwnerDescriptor(), name, result, C());
    }

    @Override // kotlin.reflect.jvm.internal.impl.resolve.scopes.MemberScopeImpl, kotlin.reflect.jvm.internal.impl.resolve.scopes.ResolutionScope
    /* renamed from: recordLookup */
    public void mo1203recordLookup(@NotNull Name name, @NotNull LookupLocation location) {
        Intrinsics.checkNotNullParameter(name, "name");
        Intrinsics.checkNotNullParameter(location, "location");
        kotlin.reflect.jvm.internal.impl.incremental.UtilsKt.record(C().getComponents().getLookupTracker(), location, getOwnerDescriptor(), name);
    }

    /* JADX WARN: Removed duplicated region for block: B:28:0x00c2  */
    @Override // kotlin.reflect.jvm.internal.impl.load.java.lazy.descriptors.LazyJavaScope
    /*
        Code decompiled incorrectly, please refer to instructions dump.
        To view partially-correct add '--show-bad-code' argument
    */
    protected void s(java.util.Collection r12, kotlin.reflect.jvm.internal.impl.name.Name r13) {
        /*
            r11 = this;
            java.lang.String r3 = "result"
            kotlin.jvm.internal.Intrinsics.checkNotNullParameter(r12, r3)
            java.lang.String r3 = "name"
            kotlin.jvm.internal.Intrinsics.checkNotNullParameter(r13, r3)
            java.util.Set r9 = r11.O0(r13)
            kotlin.reflect.jvm.internal.impl.load.java.SpecialGenericSignatures$Companion r3 = kotlin.reflect.jvm.internal.impl.load.java.SpecialGenericSignatures.Companion
            boolean r3 = r3.getSameAsRenamedInJvmBuiltin(r13)
            if (r3 != 0) goto L6b
            kotlin.reflect.jvm.internal.impl.load.java.BuiltinMethodsWithSpecialGenericSignature r3 = kotlin.reflect.jvm.internal.impl.load.java.BuiltinMethodsWithSpecialGenericSignature.INSTANCE
            boolean r3 = r3.getSameAsBuiltinMethodWithErasedValueParameters(r13)
            if (r3 != 0) goto L6b
            r3 = r9
            java.lang.Iterable r3 = (java.lang.Iterable) r3
            boolean r4 = r3 instanceof java.util.Collection
            if (r4 == 0) goto L2f
            r4 = r3
            java.util.Collection r4 = (java.util.Collection) r4
            boolean r4 = r4.isEmpty()
            if (r4 == 0) goto L2f
            goto L46
        L2f:
            java.util.Iterator r4 = r3.iterator()
        L33:
            boolean r5 = r4.hasNext()
            if (r5 == 0) goto L46
            java.lang.Object r5 = r4.next()
            kotlin.reflect.jvm.internal.impl.descriptors.FunctionDescriptor r5 = (kotlin.reflect.jvm.internal.impl.descriptors.FunctionDescriptor) r5
            boolean r5 = r5.isSuspend()
            if (r5 == 0) goto L33
            goto L6b
        L46:
            java.util.ArrayList r4 = new java.util.ArrayList
            r4.<init>()
            java.util.Iterator r3 = r3.iterator()
        L4f:
            boolean r5 = r3.hasNext()
            if (r5 == 0) goto L66
            java.lang.Object r5 = r3.next()
            r6 = r5
            kotlin.reflect.jvm.internal.impl.descriptors.SimpleFunctionDescriptor r6 = (kotlin.reflect.jvm.internal.impl.descriptors.SimpleFunctionDescriptor) r6
            boolean r6 = r11.S0(r6)
            if (r6 == 0) goto L4f
            r4.add(r5)
            goto L4f
        L66:
            r3 = 0
            r11.h0(r12, r13, r4, r3)
            return
        L6b:
            kotlin.reflect.jvm.internal.impl.utils.SmartSet$Companion r3 = kotlin.reflect.jvm.internal.impl.utils.SmartSet.Companion
            kotlin.reflect.jvm.internal.impl.utils.SmartSet r10 = r3.create()
            r4 = r9
            java.util.Collection r4 = (java.util.Collection) r4
            java.util.List r3 = kotlin.collections.CollectionsKt.l()
            r5 = r3
            java.util.Collection r5 = (java.util.Collection) r5
            kotlin.reflect.jvm.internal.impl.descriptors.ClassDescriptor r6 = r11.getOwnerDescriptor()
            kotlin.reflect.jvm.internal.impl.serialization.deserialization.ErrorReporter r7 = kotlin.reflect.jvm.internal.impl.serialization.deserialization.ErrorReporter.DO_NOTHING
            kotlin.reflect.jvm.internal.impl.load.java.lazy.LazyJavaResolverContext r3 = r11.C()
            kotlin.reflect.jvm.internal.impl.load.java.lazy.JavaResolverComponents r3 = r3.getComponents()
            kotlin.reflect.jvm.internal.impl.types.checker.NewKotlinTypeChecker r3 = r3.getKotlinTypeChecker()
            kotlin.reflect.jvm.internal.impl.resolve.OverridingUtil r8 = r3.getOverridingUtil()
            r3 = r13
            java.util.Collection r1 = kotlin.reflect.jvm.internal.impl.load.java.components.DescriptorResolverUtils.resolveOverridesForNonStaticMembers(r3, r4, r5, r6, r7, r8)
            java.lang.String r3 = "resolveOverridesForNonStaticMembers(...)"
            kotlin.jvm.internal.Intrinsics.checkNotNullExpressionValue(r1, r3)
            kotlin.reflect.jvm.internal.impl.load.java.lazy.descriptors.LazyJavaClassMemberScope$a r5 = new kotlin.reflect.jvm.internal.impl.load.java.lazy.descriptors.LazyJavaClassMemberScope$a
            r5.<init>(r11)
            r4 = r12
            r0 = r11
            r2 = r12
            r3 = r1
            r1 = r13
            r0.i0(r1, r2, r3, r4, r5)
            kotlin.reflect.jvm.internal.impl.load.java.lazy.descriptors.LazyJavaClassMemberScope$b r5 = new kotlin.reflect.jvm.internal.impl.load.java.lazy.descriptors.LazyJavaClassMemberScope$b
            r5.<init>(r11)
            r4 = r10
            r0.i0(r1, r2, r3, r4, r5)
            java.lang.Iterable r9 = (java.lang.Iterable) r9
            java.util.ArrayList r3 = new java.util.ArrayList
            r3.<init>()
            java.util.Iterator r5 = r9.iterator()
        Lbc:
            boolean r6 = r5.hasNext()
            if (r6 == 0) goto Ld3
            java.lang.Object r6 = r5.next()
            r7 = r6
            kotlin.reflect.jvm.internal.impl.descriptors.SimpleFunctionDescriptor r7 = (kotlin.reflect.jvm.internal.impl.descriptors.SimpleFunctionDescriptor) r7
            boolean r7 = r11.S0(r7)
            if (r7 == 0) goto Lbc
            r3.add(r6)
            goto Lbc
        Ld3:
            java.util.List r3 = kotlin.collections.CollectionsKt.L0(r3, r4)
            java.util.Collection r3 = (java.util.Collection) r3
            r4 = 1
            r11.h0(r12, r13, r3, r4)
            return
        */
        throw new UnsupportedOperationException("Method not decompiled: kotlin.reflect.jvm.internal.impl.load.java.lazy.descriptors.LazyJavaClassMemberScope.s(java.util.Collection, kotlin.reflect.jvm.internal.impl.name.Name):void");
    }

    @Override // kotlin.reflect.jvm.internal.impl.load.java.lazy.descriptors.LazyJavaScope
    protected void t(Name name, Collection result) {
        Intrinsics.checkNotNullParameter(name, "name");
        Intrinsics.checkNotNullParameter(result, "result");
        if (this.f32968n.isAnnotationType()) {
            k0(name, result);
        }
        Set Q0 = Q0(name);
        if (Q0.isEmpty()) {
            return;
        }
        SmartSet.Companion companion = SmartSet.Companion;
        SmartSet create = companion.create();
        SmartSet create2 = companion.create();
        j0(Q0, result, create, new q(this));
        j0(x0.j(Q0, create), create2, null, new r(this));
        Collection resolveOverridesForNonStaticMembers = DescriptorResolverUtils.resolveOverridesForNonStaticMembers(name, x0.l(Q0, create2), result, getOwnerDescriptor(), C().getComponents().getErrorReporter(), C().getComponents().getKotlinTypeChecker().getOverridingUtil());
        Intrinsics.checkNotNullExpressionValue(resolveOverridesForNonStaticMembers, "resolveOverridesForNonStaticMembers(...)");
        result.addAll(resolveOverridesForNonStaticMembers);
    }

    @Override // kotlin.reflect.jvm.internal.impl.load.java.lazy.descriptors.LazyJavaScope
    @NotNull
    public String toString() {
        return "Lazy Java member scope for " + this.f32968n.getFqName();
    }

    @Override // kotlin.reflect.jvm.internal.impl.load.java.lazy.descriptors.LazyJavaScope
    protected Set u(DescriptorKindFilter kindFilter, Function1 function1) {
        Intrinsics.checkNotNullParameter(kindFilter, "kindFilter");
        if (this.f32968n.isAnnotationType()) {
            return getFunctionNames();
        }
        LinkedHashSet linkedHashSet = new LinkedHashSet(((DeclaredMemberIndex) E().invoke()).getFieldNames());
        Collection<KotlinType> supertypes = getOwnerDescriptor().getTypeConstructor().getSupertypes();
        Intrinsics.checkNotNullExpressionValue(supertypes, "getSupertypes(...)");
        for (KotlinType kotlinType : supertypes) {
            CollectionsKt.B(linkedHashSet, kotlinType.getMemberScope().getVariableNames());
        }
        return linkedHashSet;
    }

    /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
    public LazyJavaClassMemberScope(@NotNull LazyJavaResolverContext c10, @NotNull ClassDescriptor ownerDescriptor, @NotNull JavaClass jClass, boolean z10, LazyJavaClassMemberScope lazyJavaClassMemberScope) {
        super(c10, lazyJavaClassMemberScope);
        Intrinsics.checkNotNullParameter(c10, "c");
        Intrinsics.checkNotNullParameter(ownerDescriptor, "ownerDescriptor");
        Intrinsics.checkNotNullParameter(jClass, "jClass");
        this.f32967m = ownerDescriptor;
        this.f32968n = jClass;
        this.f32969o = z10;
        this.f32970p = c10.getStorageManager().createLazyValue(new j(this, c10));
        this.f32971q = c10.getStorageManager().createLazyValue(new k(this));
        this.f32972r = c10.getStorageManager().createLazyValue(new l(c10, this));
        this.f32973s = c10.getStorageManager().createLazyValue(new m(this));
        this.f32974t = c10.getStorageManager().createMemoizedFunctionWithNullableValues(new n(this, c10));
    }
}

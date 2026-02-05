package kotlin.reflect.jvm.internal.impl.load.java.lazy.descriptors;

import java.util.ArrayList;
import java.util.Collection;
import java.util.LinkedHashMap;
import java.util.LinkedHashSet;
import java.util.List;
import java.util.Map;
import java.util.Set;
import kotlin.Pair;
import kotlin.collections.CollectionsKt;
import kotlin.collections.IndexedValue;
import kotlin.jvm.functions.Function1;
import kotlin.jvm.internal.DefaultConstructorMarker;
import kotlin.jvm.internal.Intrinsics;
import kotlin.jvm.internal.PropertyReference1Impl;
import kotlin.jvm.internal.Ref;
import kotlin.jvm.internal.Reflection;
import kotlin.jvm.internal.SourceDebugExtension;
import kotlin.reflect.KProperty;
import kotlin.reflect.jvm.internal.impl.builtins.KotlinBuiltIns;
import kotlin.reflect.jvm.internal.impl.descriptors.CallableDescriptor;
import kotlin.reflect.jvm.internal.impl.descriptors.ClassDescriptor;
import kotlin.reflect.jvm.internal.impl.descriptors.DeclarationDescriptor;
import kotlin.reflect.jvm.internal.impl.descriptors.DescriptorVisibility;
import kotlin.reflect.jvm.internal.impl.descriptors.FunctionDescriptor;
import kotlin.reflect.jvm.internal.impl.descriptors.Modality;
import kotlin.reflect.jvm.internal.impl.descriptors.PropertyDescriptor;
import kotlin.reflect.jvm.internal.impl.descriptors.ReceiverParameterDescriptor;
import kotlin.reflect.jvm.internal.impl.descriptors.SimpleFunctionDescriptor;
import kotlin.reflect.jvm.internal.impl.descriptors.TypeParameterDescriptor;
import kotlin.reflect.jvm.internal.impl.descriptors.ValueParameterDescriptor;
import kotlin.reflect.jvm.internal.impl.descriptors.VariableDescriptor;
import kotlin.reflect.jvm.internal.impl.descriptors.annotations.Annotations;
import kotlin.reflect.jvm.internal.impl.descriptors.impl.PropertyDescriptorImpl;
import kotlin.reflect.jvm.internal.impl.descriptors.impl.ValueParameterDescriptorImpl;
import kotlin.reflect.jvm.internal.impl.incremental.components.LookupLocation;
import kotlin.reflect.jvm.internal.impl.incremental.components.NoLookupLocation;
import kotlin.reflect.jvm.internal.impl.load.java.UtilsKt;
import kotlin.reflect.jvm.internal.impl.load.java.descriptors.JavaMethodDescriptor;
import kotlin.reflect.jvm.internal.impl.load.java.descriptors.JavaPropertyDescriptor;
import kotlin.reflect.jvm.internal.impl.load.java.lazy.ContextKt;
import kotlin.reflect.jvm.internal.impl.load.java.lazy.LazyJavaAnnotationsKt;
import kotlin.reflect.jvm.internal.impl.load.java.lazy.LazyJavaResolverContext;
import kotlin.reflect.jvm.internal.impl.load.java.lazy.types.JavaTypeAttributes;
import kotlin.reflect.jvm.internal.impl.load.java.lazy.types.JavaTypeAttributesKt;
import kotlin.reflect.jvm.internal.impl.load.java.sources.JavaSourceElement;
import kotlin.reflect.jvm.internal.impl.load.java.structure.JavaArrayType;
import kotlin.reflect.jvm.internal.impl.load.java.structure.JavaField;
import kotlin.reflect.jvm.internal.impl.load.java.structure.JavaMethod;
import kotlin.reflect.jvm.internal.impl.load.java.structure.JavaType;
import kotlin.reflect.jvm.internal.impl.load.java.structure.JavaTypeParameter;
import kotlin.reflect.jvm.internal.impl.load.java.structure.JavaValueParameter;
import kotlin.reflect.jvm.internal.impl.load.kotlin.MethodSignatureMappingKt;
import kotlin.reflect.jvm.internal.impl.name.Name;
import kotlin.reflect.jvm.internal.impl.resolve.DescriptorFactory;
import kotlin.reflect.jvm.internal.impl.resolve.DescriptorUtils;
import kotlin.reflect.jvm.internal.impl.resolve.OverridingUtilsKt;
import kotlin.reflect.jvm.internal.impl.resolve.constants.ConstantValue;
import kotlin.reflect.jvm.internal.impl.resolve.scopes.DescriptorKindExclude;
import kotlin.reflect.jvm.internal.impl.resolve.scopes.DescriptorKindFilter;
import kotlin.reflect.jvm.internal.impl.resolve.scopes.MemberScope;
import kotlin.reflect.jvm.internal.impl.resolve.scopes.MemberScopeImpl;
import kotlin.reflect.jvm.internal.impl.storage.MemoizedFunctionToNotNull;
import kotlin.reflect.jvm.internal.impl.storage.MemoizedFunctionToNullable;
import kotlin.reflect.jvm.internal.impl.storage.NotNullLazyValue;
import kotlin.reflect.jvm.internal.impl.storage.NullableLazyValue;
import kotlin.reflect.jvm.internal.impl.storage.StorageKt;
import kotlin.reflect.jvm.internal.impl.types.KotlinType;
import kotlin.reflect.jvm.internal.impl.types.TypeUsage;
import kotlin.reflect.jvm.internal.impl.types.TypeUtils;
import org.jetbrains.annotations.NotNull;
@SourceDebugExtension({"SMAP\nLazyJavaScope.kt\nKotlin\n*S Kotlin\n*F\n+ 1 LazyJavaScope.kt\norg/jetbrains/kotlin/load/java/lazy/descriptors/LazyJavaScope\n+ 2 _Collections.kt\nkotlin/collections/CollectionsKt___CollectionsKt\n+ 3 Maps.kt\nkotlin/collections/MapsKt__MapsKt\n*L\n1#1,408:1\n1491#2:409\n1516#2,3:410\n1519#2,3:420\n1563#2:423\n1634#2,3:424\n1563#2:427\n1634#2,3:428\n384#3,7:413\n*S KotlinDebug\n*F\n+ 1 LazyJavaScope.kt\norg/jetbrains/kotlin/load/java/lazy/descriptors/LazyJavaScope\n*L\n129#1:409\n129#1:410,3\n129#1:420,3\n165#1:423\n165#1:424,3\n212#1:427\n212#1:428,3\n129#1:413,7\n*E\n"})
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public abstract class LazyJavaScope extends MemberScopeImpl {

    /* renamed from: l  reason: collision with root package name */
    static final /* synthetic */ KProperty[] f32923l = {Reflection.property1(new PropertyReference1Impl(LazyJavaScope.class, "functionNamesLazy", "getFunctionNamesLazy()Ljava/util/Set;", 0)), Reflection.property1(new PropertyReference1Impl(LazyJavaScope.class, "propertyNamesLazy", "getPropertyNamesLazy()Ljava/util/Set;", 0)), Reflection.property1(new PropertyReference1Impl(LazyJavaScope.class, "classNamesLazy", "getClassNamesLazy()Ljava/util/Set;", 0))};

    /* renamed from: a  reason: collision with root package name */
    private final LazyJavaResolverContext f32924a;

    /* renamed from: b  reason: collision with root package name */
    private final LazyJavaScope f32925b;

    /* renamed from: c  reason: collision with root package name */
    private final NotNullLazyValue f32926c;

    /* renamed from: d  reason: collision with root package name */
    private final NotNullLazyValue f32927d;

    /* renamed from: e  reason: collision with root package name */
    private final MemoizedFunctionToNotNull f32928e;

    /* renamed from: f  reason: collision with root package name */
    private final MemoizedFunctionToNullable f32929f;

    /* renamed from: g  reason: collision with root package name */
    private final MemoizedFunctionToNotNull f32930g;

    /* renamed from: h  reason: collision with root package name */
    private final NotNullLazyValue f32931h;

    /* renamed from: i  reason: collision with root package name */
    private final NotNullLazyValue f32932i;

    /* renamed from: j  reason: collision with root package name */
    private final NotNullLazyValue f32933j;

    /* renamed from: k  reason: collision with root package name */
    private final MemoizedFunctionToNotNull f32934k;

    /* JADX INFO: Access modifiers changed from: protected */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
    public static final class MethodSignatureData {

        /* renamed from: a  reason: collision with root package name */
        private final KotlinType f32935a;

        /* renamed from: b  reason: collision with root package name */
        private final KotlinType f32936b;

        /* renamed from: c  reason: collision with root package name */
        private final List f32937c;

        /* renamed from: d  reason: collision with root package name */
        private final List f32938d;

        /* renamed from: e  reason: collision with root package name */
        private final boolean f32939e;

        /* renamed from: f  reason: collision with root package name */
        private final List f32940f;

        public MethodSignatureData(@NotNull KotlinType returnType, KotlinType kotlinType, @NotNull List<? extends ValueParameterDescriptor> valueParameters, @NotNull List<? extends TypeParameterDescriptor> typeParameters, boolean z10, @NotNull List<String> errors) {
            Intrinsics.checkNotNullParameter(returnType, "returnType");
            Intrinsics.checkNotNullParameter(valueParameters, "valueParameters");
            Intrinsics.checkNotNullParameter(typeParameters, "typeParameters");
            Intrinsics.checkNotNullParameter(errors, "errors");
            this.f32935a = returnType;
            this.f32936b = kotlinType;
            this.f32937c = valueParameters;
            this.f32938d = typeParameters;
            this.f32939e = z10;
            this.f32940f = errors;
        }

        public boolean equals(Object obj) {
            if (this == obj) {
                return true;
            }
            if (obj instanceof MethodSignatureData) {
                MethodSignatureData methodSignatureData = (MethodSignatureData) obj;
                return Intrinsics.areEqual(this.f32935a, methodSignatureData.f32935a) && Intrinsics.areEqual(this.f32936b, methodSignatureData.f32936b) && Intrinsics.areEqual(this.f32937c, methodSignatureData.f32937c) && Intrinsics.areEqual(this.f32938d, methodSignatureData.f32938d) && this.f32939e == methodSignatureData.f32939e && Intrinsics.areEqual(this.f32940f, methodSignatureData.f32940f);
            }
            return false;
        }

        @NotNull
        public final List<String> getErrors() {
            return this.f32940f;
        }

        public final boolean getHasStableParameterNames() {
            return this.f32939e;
        }

        public final KotlinType getReceiverType() {
            return this.f32936b;
        }

        @NotNull
        public final KotlinType getReturnType() {
            return this.f32935a;
        }

        @NotNull
        public final List<TypeParameterDescriptor> getTypeParameters() {
            return this.f32938d;
        }

        @NotNull
        public final List<ValueParameterDescriptor> getValueParameters() {
            return this.f32937c;
        }

        public int hashCode() {
            int hashCode = this.f32935a.hashCode() * 31;
            KotlinType kotlinType = this.f32936b;
            return ((((((((hashCode + (kotlinType == null ? 0 : kotlinType.hashCode())) * 31) + this.f32937c.hashCode()) * 31) + this.f32938d.hashCode()) * 31) + Boolean.hashCode(this.f32939e)) * 31) + this.f32940f.hashCode();
        }

        @NotNull
        public String toString() {
            return "MethodSignatureData(returnType=" + this.f32935a + ", receiverType=" + this.f32936b + ", valueParameters=" + this.f32937c + ", typeParameters=" + this.f32938d + ", hasStableParameterNames=" + this.f32939e + ", errors=" + this.f32940f + ')';
        }
    }

    /* JADX INFO: Access modifiers changed from: protected */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
    public static final class ResolvedValueParameters {

        /* renamed from: a  reason: collision with root package name */
        private final List f32941a;

        /* renamed from: b  reason: collision with root package name */
        private final boolean f32942b;

        public ResolvedValueParameters(@NotNull List<? extends ValueParameterDescriptor> descriptors, boolean z10) {
            Intrinsics.checkNotNullParameter(descriptors, "descriptors");
            this.f32941a = descriptors;
            this.f32942b = z10;
        }

        @NotNull
        public final List<ValueParameterDescriptor> getDescriptors() {
            return this.f32941a;
        }

        public final boolean getHasSynthesizedNames() {
            return this.f32942b;
        }
    }

    public /* synthetic */ LazyJavaScope(LazyJavaResolverContext lazyJavaResolverContext, LazyJavaScope lazyJavaScope, int i10, DefaultConstructorMarker defaultConstructorMarker) {
        this(lazyJavaResolverContext, (i10 & 2) != 0 ? null : lazyJavaScope);
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Collection A(LazyJavaScope lazyJavaScope, Name name) {
        Intrinsics.checkNotNullParameter(name, "name");
        LinkedHashSet linkedHashSet = new LinkedHashSet((Collection) lazyJavaScope.f32928e.invoke(name));
        lazyJavaScope.U(linkedHashSet);
        lazyJavaScope.s(linkedHashSet, name);
        return CollectionsKt.h1(lazyJavaScope.f32924a.getComponents().getSignatureEnhancement().enhanceSignatures(lazyJavaScope.f32924a, linkedHashSet));
    }

    private final Set D() {
        return (Set) StorageKt.getValue(this.f32933j, this, f32923l[2]);
    }

    private final Set G() {
        return (Set) StorageKt.getValue(this.f32931h, this, f32923l[0]);
    }

    private final Set I() {
        return (Set) StorageKt.getValue(this.f32932i, this, f32923l[1]);
    }

    private final KotlinType J(JavaField javaField) {
        KotlinType transformJavaType = this.f32924a.getTypeResolver().transformJavaType(javaField.getType(), JavaTypeAttributesKt.toAttributes$default(TypeUsage.COMMON, false, false, null, 7, null));
        if ((KotlinBuiltIns.isPrimitiveType(transformJavaType) || KotlinBuiltIns.isString(transformJavaType)) && K(javaField) && javaField.getHasConstantNotNullInitializer()) {
            KotlinType makeNotNullable = TypeUtils.makeNotNullable(transformJavaType);
            Intrinsics.checkNotNullExpressionValue(makeNotNullable, "makeNotNullable(...)");
            return makeNotNullable;
        }
        return transformJavaType;
    }

    private final boolean K(JavaField javaField) {
        if (javaField.isFinal() && javaField.isStatic()) {
            return true;
        }
        return false;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final List M(LazyJavaScope lazyJavaScope, Name name) {
        Intrinsics.checkNotNullParameter(name, "name");
        ArrayList arrayList = new ArrayList();
        kotlin.reflect.jvm.internal.impl.utils.CollectionsKt.addIfNotNull(arrayList, lazyJavaScope.f32929f.invoke(name));
        lazyJavaScope.t(name, arrayList);
        if (DescriptorUtils.isAnnotationClass(lazyJavaScope.getOwnerDescriptor())) {
            return CollectionsKt.h1(arrayList);
        }
        return CollectionsKt.h1(lazyJavaScope.f32924a.getComponents().getSignatureEnhancement().enhanceSignatures(lazyJavaScope.f32924a, arrayList));
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Set N(LazyJavaScope lazyJavaScope) {
        return lazyJavaScope.u(DescriptorKindFilter.VARIABLES, null);
    }

    /* JADX WARN: Type inference failed for: r1v0, types: [T, kotlin.reflect.jvm.internal.impl.descriptors.impl.PropertyDescriptorImpl] */
    /* JADX WARN: Type inference failed for: r1v15, types: [T, kotlin.reflect.jvm.internal.impl.descriptors.impl.PropertyDescriptorImpl] */
    private final PropertyDescriptor Q(JavaField javaField) {
        Ref.ObjectRef objectRef = new Ref.ObjectRef();
        ?? v10 = v(javaField);
        objectRef.element = v10;
        ClassDescriptor classDescriptor = null;
        v10.initialize(null, null, null, null);
        ((PropertyDescriptorImpl) objectRef.element).setType(J(javaField), CollectionsKt.l(), F(), null, CollectionsKt.l());
        DeclarationDescriptor ownerDescriptor = getOwnerDescriptor();
        if (ownerDescriptor instanceof ClassDescriptor) {
            classDescriptor = (ClassDescriptor) ownerDescriptor;
        }
        if (classDescriptor != null) {
            objectRef.element = this.f32924a.getComponents().getSyntheticPartsProvider().modifyField(classDescriptor, (PropertyDescriptorImpl) objectRef.element, this.f32924a);
        }
        T t10 = objectRef.element;
        if (DescriptorUtils.shouldRecordInitializerForProperty((VariableDescriptor) t10, ((PropertyDescriptorImpl) t10).getType())) {
            ((PropertyDescriptorImpl) objectRef.element).setCompileTimeInitializerFactory(new z(this, javaField, objectRef));
        }
        this.f32924a.getComponents().getJavaResolverCache().recordField(javaField, (PropertyDescriptor) objectRef.element);
        return (PropertyDescriptor) objectRef.element;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final NullableLazyValue R(LazyJavaScope lazyJavaScope, JavaField javaField, Ref.ObjectRef objectRef) {
        return lazyJavaScope.f32924a.getStorageManager().createNullableLazyValue(new a0(lazyJavaScope, javaField, objectRef));
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final ConstantValue S(LazyJavaScope lazyJavaScope, JavaField javaField, Ref.ObjectRef objectRef) {
        return lazyJavaScope.f32924a.getComponents().getJavaPropertyInitializerEvaluator().getInitializerConstant(javaField, (PropertyDescriptor) objectRef.element);
    }

    private final void U(Set set) {
        LinkedHashMap linkedHashMap = new LinkedHashMap();
        for (Object obj : set) {
            String computeJvmDescriptor$default = MethodSignatureMappingKt.computeJvmDescriptor$default((SimpleFunctionDescriptor) obj, false, false, 2, null);
            Object obj2 = linkedHashMap.get(computeJvmDescriptor$default);
            if (obj2 == null) {
                obj2 = new ArrayList();
                linkedHashMap.put(computeJvmDescriptor$default, obj2);
            }
            ((List) obj2).add(obj);
        }
        for (List list : linkedHashMap.values()) {
            if (list.size() != 1) {
                List list2 = list;
                Collection selectMostSpecificInEachOverridableGroup = OverridingUtilsKt.selectMostSpecificInEachOverridableGroup(list2, j0.f32972d);
                set.removeAll(list2);
                set.addAll(selectMostSpecificInEachOverridableGroup);
            }
        }
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final CallableDescriptor V(SimpleFunctionDescriptor selectMostSpecificInEachOverridableGroup) {
        Intrinsics.checkNotNullParameter(selectMostSpecificInEachOverridableGroup, "$this$selectMostSpecificInEachOverridableGroup");
        return selectMostSpecificInEachOverridableGroup;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Collection m(LazyJavaScope lazyJavaScope) {
        return lazyJavaScope.p(DescriptorKindFilter.ALL, MemberScope.Companion.getALL_NAME_FILTER());
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Set n(LazyJavaScope lazyJavaScope) {
        return lazyJavaScope.o(DescriptorKindFilter.CLASSIFIERS, null);
    }

    private final PropertyDescriptorImpl v(JavaField javaField) {
        JavaPropertyDescriptor create = JavaPropertyDescriptor.create(getOwnerDescriptor(), LazyJavaAnnotationsKt.resolveAnnotations(this.f32924a, javaField), Modality.FINAL, UtilsKt.toDescriptorVisibility(javaField.getVisibility()), !javaField.isFinal(), javaField.getName(), this.f32924a.getComponents().getSourceElementFactory().source(javaField), K(javaField));
        Intrinsics.checkNotNullExpressionValue(create, "create(...)");
        return create;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final PropertyDescriptor w(LazyJavaScope lazyJavaScope, Name name) {
        Intrinsics.checkNotNullParameter(name, "name");
        LazyJavaScope lazyJavaScope2 = lazyJavaScope.f32925b;
        if (lazyJavaScope2 != null) {
            return (PropertyDescriptor) lazyJavaScope2.f32929f.invoke(name);
        }
        JavaField findFieldByName = ((DeclaredMemberIndex) lazyJavaScope.f32927d.invoke()).findFieldByName(name);
        if (findFieldByName != null && !findFieldByName.isEnumEntry()) {
            return lazyJavaScope.Q(findFieldByName);
        }
        return null;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Collection x(LazyJavaScope lazyJavaScope, Name name) {
        Intrinsics.checkNotNullParameter(name, "name");
        LazyJavaScope lazyJavaScope2 = lazyJavaScope.f32925b;
        if (lazyJavaScope2 != null) {
            return (Collection) lazyJavaScope2.f32928e.invoke(name);
        }
        ArrayList arrayList = new ArrayList();
        for (JavaMethod javaMethod : ((DeclaredMemberIndex) lazyJavaScope.f32927d.invoke()).findMethodsByName(name)) {
            JavaMethodDescriptor P = lazyJavaScope.P(javaMethod);
            if (lazyJavaScope.L(P)) {
                lazyJavaScope.f32924a.getComponents().getJavaResolverCache().recordMethod(javaMethod, P);
                arrayList.add(P);
            }
        }
        lazyJavaScope.q(arrayList, name);
        return arrayList;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final DeclaredMemberIndex y(LazyJavaScope lazyJavaScope) {
        return lazyJavaScope.computeMemberIndex();
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Set z(LazyJavaScope lazyJavaScope) {
        return lazyJavaScope.computeFunctionNames(DescriptorKindFilter.FUNCTIONS, null);
    }

    /* JADX INFO: Access modifiers changed from: protected */
    public final NotNullLazyValue B() {
        return this.f32926c;
    }

    /* JADX INFO: Access modifiers changed from: protected */
    public final LazyJavaResolverContext C() {
        return this.f32924a;
    }

    /* JADX INFO: Access modifiers changed from: protected */
    public final NotNullLazyValue E() {
        return this.f32927d;
    }

    protected abstract ReceiverParameterDescriptor F();

    /* JADX INFO: Access modifiers changed from: protected */
    public final LazyJavaScope H() {
        return this.f32925b;
    }

    protected boolean L(JavaMethodDescriptor javaMethodDescriptor) {
        Intrinsics.checkNotNullParameter(javaMethodDescriptor, "<this>");
        return true;
    }

    protected abstract MethodSignatureData O(JavaMethod javaMethod, List list, KotlinType kotlinType, List list2);

    /* JADX INFO: Access modifiers changed from: protected */
    public final JavaMethodDescriptor P(JavaMethod method) {
        boolean z10;
        ReceiverParameterDescriptor receiverParameterDescriptor;
        Map<? extends CallableDescriptor.UserDataKey<?>, ?> i10;
        Intrinsics.checkNotNullParameter(method, "method");
        Annotations resolveAnnotations = LazyJavaAnnotationsKt.resolveAnnotations(this.f32924a, method);
        DeclarationDescriptor ownerDescriptor = getOwnerDescriptor();
        Name name = method.getName();
        JavaSourceElement source = this.f32924a.getComponents().getSourceElementFactory().source(method);
        if (((DeclaredMemberIndex) this.f32927d.invoke()).findRecordComponentByName(method.getName()) != null && method.getValueParameters().isEmpty()) {
            z10 = true;
        } else {
            z10 = false;
        }
        JavaMethodDescriptor createJavaMethod = JavaMethodDescriptor.createJavaMethod(ownerDescriptor, resolveAnnotations, name, source, z10);
        Intrinsics.checkNotNullExpressionValue(createJavaMethod, "createJavaMethod(...)");
        LazyJavaResolverContext childForMethod$default = ContextKt.childForMethod$default(this.f32924a, createJavaMethod, method, 0, 4, null);
        List<JavaTypeParameter> typeParameters = method.getTypeParameters();
        List arrayList = new ArrayList(CollectionsKt.w(typeParameters, 10));
        for (JavaTypeParameter javaTypeParameter : typeParameters) {
            TypeParameterDescriptor resolveTypeParameter = childForMethod$default.getTypeParameterResolver().resolveTypeParameter(javaTypeParameter);
            Intrinsics.checkNotNull(resolveTypeParameter);
            arrayList.add(resolveTypeParameter);
        }
        ResolvedValueParameters T = T(childForMethod$default, createJavaMethod, method.getValueParameters());
        MethodSignatureData O = O(method, arrayList, r(method, childForMethod$default), T.getDescriptors());
        KotlinType receiverType = O.getReceiverType();
        if (receiverType != null) {
            receiverParameterDescriptor = DescriptorFactory.createExtensionReceiverParameterForCallable(createJavaMethod, receiverType, Annotations.Companion.getEMPTY());
        } else {
            receiverParameterDescriptor = null;
        }
        ReceiverParameterDescriptor receiverParameterDescriptor2 = receiverParameterDescriptor;
        ReceiverParameterDescriptor F = F();
        List<ReceiverParameterDescriptor> l10 = CollectionsKt.l();
        List<TypeParameterDescriptor> typeParameters2 = O.getTypeParameters();
        List<ValueParameterDescriptor> valueParameters = O.getValueParameters();
        KotlinType returnType = O.getReturnType();
        Modality convertFromFlags = Modality.Companion.convertFromFlags(false, method.isAbstract(), !method.isFinal());
        DescriptorVisibility descriptorVisibility = UtilsKt.toDescriptorVisibility(method.getVisibility());
        if (O.getReceiverType() != null) {
            i10 = kotlin.collections.o0.f(or.v.a(JavaMethodDescriptor.ORIGINAL_VALUE_PARAMETER_FOR_EXTENSION_RECEIVER, CollectionsKt.o0(T.getDescriptors())));
        } else {
            i10 = kotlin.collections.o0.i();
        }
        createJavaMethod.initialize(receiverParameterDescriptor2, F, l10, typeParameters2, valueParameters, returnType, convertFromFlags, descriptorVisibility, i10);
        createJavaMethod.setParameterNamesStatus(O.getHasStableParameterNames(), T.getHasSynthesizedNames());
        if (!O.getErrors().isEmpty()) {
            childForMethod$default.getComponents().getSignaturePropagator().reportSignatureErrors(createJavaMethod, O.getErrors());
        }
        return createJavaMethod;
    }

    /* JADX INFO: Access modifiers changed from: protected */
    public final ResolvedValueParameters T(LazyJavaResolverContext c10, FunctionDescriptor functionDescriptor, List jValueParameters) {
        Pair a10;
        Name name;
        Intrinsics.checkNotNullParameter(c10, "c");
        FunctionDescriptor function = functionDescriptor;
        Intrinsics.checkNotNullParameter(function, "function");
        Intrinsics.checkNotNullParameter(jValueParameters, "jValueParameters");
        Iterable<IndexedValue> n12 = CollectionsKt.n1(jValueParameters);
        ArrayList arrayList = new ArrayList(CollectionsKt.w(n12, 10));
        boolean z10 = false;
        for (IndexedValue indexedValue : n12) {
            int a11 = indexedValue.a();
            JavaValueParameter javaValueParameter = (JavaValueParameter) indexedValue.b();
            Annotations resolveAnnotations = LazyJavaAnnotationsKt.resolveAnnotations(c10, javaValueParameter);
            JavaTypeAttributes attributes$default = JavaTypeAttributesKt.toAttributes$default(TypeUsage.COMMON, false, false, null, 7, null);
            JavaArrayType javaArrayType = null;
            if (javaValueParameter.isVararg()) {
                JavaType type = javaValueParameter.getType();
                if (type instanceof JavaArrayType) {
                    javaArrayType = (JavaArrayType) type;
                }
                if (javaArrayType != null) {
                    KotlinType transformArrayType = c10.getTypeResolver().transformArrayType(javaArrayType, attributes$default, true);
                    a10 = or.v.a(transformArrayType, c10.getModule().getBuiltIns().getArrayElementType(transformArrayType));
                } else {
                    throw new AssertionError("Vararg parameter should be an array: " + javaValueParameter);
                }
            } else {
                a10 = or.v.a(c10.getTypeResolver().transformJavaType(javaValueParameter.getType(), attributes$default), null);
            }
            KotlinType kotlinType = (KotlinType) a10.a();
            KotlinType kotlinType2 = (KotlinType) a10.b();
            if (Intrinsics.areEqual(function.getName().asString(), "equals") && jValueParameters.size() == 1 && Intrinsics.areEqual(c10.getModule().getBuiltIns().getNullableAnyType(), kotlinType)) {
                name = Name.identifier("other");
            } else {
                name = javaValueParameter.getName();
                if (name == null) {
                    z10 = true;
                }
                if (name == null) {
                    StringBuilder sb2 = new StringBuilder();
                    sb2.append('p');
                    sb2.append(a11);
                    name = Name.identifier(sb2.toString());
                    Intrinsics.checkNotNullExpressionValue(name, "identifier(...)");
                }
            }
            boolean z11 = z10;
            Intrinsics.checkNotNull(name);
            arrayList.add(new ValueParameterDescriptorImpl(function, null, a11, resolveAnnotations, name, kotlinType, false, false, false, kotlinType2, c10.getComponents().getSourceElementFactory().source(javaValueParameter)));
            function = functionDescriptor;
            z10 = z11;
        }
        return new ResolvedValueParameters(CollectionsKt.h1(arrayList), z10);
    }

    protected abstract Set computeFunctionNames(DescriptorKindFilter descriptorKindFilter, Function1 function1);

    protected abstract DeclaredMemberIndex computeMemberIndex();

    @Override // kotlin.reflect.jvm.internal.impl.resolve.scopes.MemberScopeImpl, kotlin.reflect.jvm.internal.impl.resolve.scopes.MemberScope
    @NotNull
    public Set<Name> getClassifierNames() {
        return D();
    }

    @Override // kotlin.reflect.jvm.internal.impl.resolve.scopes.MemberScopeImpl, kotlin.reflect.jvm.internal.impl.resolve.scopes.ResolutionScope
    @NotNull
    public Collection<DeclarationDescriptor> getContributedDescriptors(@NotNull DescriptorKindFilter kindFilter, @NotNull Function1<? super Name, Boolean> nameFilter) {
        Intrinsics.checkNotNullParameter(kindFilter, "kindFilter");
        Intrinsics.checkNotNullParameter(nameFilter, "nameFilter");
        return (Collection) this.f32926c.invoke();
    }

    @Override // kotlin.reflect.jvm.internal.impl.resolve.scopes.MemberScopeImpl, kotlin.reflect.jvm.internal.impl.resolve.scopes.MemberScope, kotlin.reflect.jvm.internal.impl.resolve.scopes.ResolutionScope
    @NotNull
    public Collection<SimpleFunctionDescriptor> getContributedFunctions(@NotNull Name name, @NotNull LookupLocation location) {
        Intrinsics.checkNotNullParameter(name, "name");
        Intrinsics.checkNotNullParameter(location, "location");
        if (!getFunctionNames().contains(name)) {
            return CollectionsKt.l();
        }
        return (Collection) this.f32930g.invoke(name);
    }

    @Override // kotlin.reflect.jvm.internal.impl.resolve.scopes.MemberScopeImpl, kotlin.reflect.jvm.internal.impl.resolve.scopes.MemberScope
    @NotNull
    public Collection<PropertyDescriptor> getContributedVariables(@NotNull Name name, @NotNull LookupLocation location) {
        Intrinsics.checkNotNullParameter(name, "name");
        Intrinsics.checkNotNullParameter(location, "location");
        if (!getVariableNames().contains(name)) {
            return CollectionsKt.l();
        }
        return (Collection) this.f32934k.invoke(name);
    }

    @Override // kotlin.reflect.jvm.internal.impl.resolve.scopes.MemberScopeImpl, kotlin.reflect.jvm.internal.impl.resolve.scopes.MemberScope
    @NotNull
    public Set<Name> getFunctionNames() {
        return G();
    }

    protected abstract DeclarationDescriptor getOwnerDescriptor();

    @Override // kotlin.reflect.jvm.internal.impl.resolve.scopes.MemberScopeImpl, kotlin.reflect.jvm.internal.impl.resolve.scopes.MemberScope
    @NotNull
    public Set<Name> getVariableNames() {
        return I();
    }

    protected abstract Set o(DescriptorKindFilter descriptorKindFilter, Function1 function1);

    protected final List p(DescriptorKindFilter kindFilter, Function1 nameFilter) {
        Intrinsics.checkNotNullParameter(kindFilter, "kindFilter");
        Intrinsics.checkNotNullParameter(nameFilter, "nameFilter");
        NoLookupLocation noLookupLocation = NoLookupLocation.WHEN_GET_ALL_DESCRIPTORS;
        LinkedHashSet linkedHashSet = new LinkedHashSet();
        if (kindFilter.acceptsKinds(DescriptorKindFilter.Companion.getCLASSIFIERS_MASK())) {
            for (Name name : o(kindFilter, nameFilter)) {
                if (((Boolean) nameFilter.invoke(name)).booleanValue()) {
                    kotlin.reflect.jvm.internal.impl.utils.CollectionsKt.addIfNotNull(linkedHashSet, mo1200getContributedClassifier(name, noLookupLocation));
                }
            }
        }
        if (kindFilter.acceptsKinds(DescriptorKindFilter.Companion.getFUNCTIONS_MASK()) && !kindFilter.getExcludes().contains(DescriptorKindExclude.NonExtensions.INSTANCE)) {
            for (Name name2 : computeFunctionNames(kindFilter, nameFilter)) {
                if (((Boolean) nameFilter.invoke(name2)).booleanValue()) {
                    linkedHashSet.addAll(getContributedFunctions(name2, noLookupLocation));
                }
            }
        }
        if (kindFilter.acceptsKinds(DescriptorKindFilter.Companion.getVARIABLES_MASK()) && !kindFilter.getExcludes().contains(DescriptorKindExclude.NonExtensions.INSTANCE)) {
            for (Name name3 : u(kindFilter, nameFilter)) {
                if (((Boolean) nameFilter.invoke(name3)).booleanValue()) {
                    linkedHashSet.addAll(getContributedVariables(name3, noLookupLocation));
                }
            }
        }
        return CollectionsKt.h1(linkedHashSet);
    }

    protected void q(Collection result, Name name) {
        Intrinsics.checkNotNullParameter(result, "result");
        Intrinsics.checkNotNullParameter(name, "name");
    }

    /* JADX INFO: Access modifiers changed from: protected */
    public final KotlinType r(JavaMethod method, LazyJavaResolverContext c10) {
        Intrinsics.checkNotNullParameter(method, "method");
        Intrinsics.checkNotNullParameter(c10, "c");
        return c10.getTypeResolver().transformJavaType(method.getReturnType(), JavaTypeAttributesKt.toAttributes$default(TypeUsage.COMMON, method.getContainingClass().isAnnotationType(), false, null, 6, null));
    }

    protected abstract void s(Collection collection, Name name);

    protected abstract void t(Name name, Collection collection);

    @NotNull
    public String toString() {
        return "Lazy scope for " + getOwnerDescriptor();
    }

    protected abstract Set u(DescriptorKindFilter descriptorKindFilter, Function1 function1);

    public LazyJavaScope(@NotNull LazyJavaResolverContext c10, LazyJavaScope lazyJavaScope) {
        Intrinsics.checkNotNullParameter(c10, "c");
        this.f32924a = c10;
        this.f32925b = lazyJavaScope;
        this.f32926c = c10.getStorageManager().createRecursionTolerantLazyValue(new y(this), CollectionsKt.l());
        this.f32927d = c10.getStorageManager().createLazyValue(new b0(this));
        this.f32928e = c10.getStorageManager().createMemoizedFunction(new c0(this));
        this.f32929f = c10.getStorageManager().createMemoizedFunctionWithNullableValues(new d0(this));
        this.f32930g = c10.getStorageManager().createMemoizedFunction(new e0(this));
        this.f32931h = c10.getStorageManager().createLazyValue(new f0(this));
        this.f32932i = c10.getStorageManager().createLazyValue(new g0(this));
        this.f32933j = c10.getStorageManager().createLazyValue(new h0(this));
        this.f32934k = c10.getStorageManager().createMemoizedFunction(new i0(this));
    }
}

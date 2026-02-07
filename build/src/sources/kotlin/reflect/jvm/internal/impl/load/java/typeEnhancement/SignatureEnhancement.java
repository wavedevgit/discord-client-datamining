package kotlin.reflect.jvm.internal.impl.load.java.typeEnhancement;

import java.util.ArrayList;
import java.util.Collection;
import java.util.Iterator;
import java.util.List;
import kotlin.collections.CollectionsKt;
import kotlin.jvm.functions.Function1;
import kotlin.jvm.internal.Intrinsics;
import kotlin.jvm.internal.SourceDebugExtension;
import kotlin.reflect.jvm.internal.impl.builtins.jvm.JavaToKotlinClassMap;
import kotlin.reflect.jvm.internal.impl.descriptors.CallableMemberDescriptor;
import kotlin.reflect.jvm.internal.impl.descriptors.ClassifierDescriptor;
import kotlin.reflect.jvm.internal.impl.descriptors.DescriptorUtilKt;
import kotlin.reflect.jvm.internal.impl.descriptors.ReceiverParameterDescriptor;
import kotlin.reflect.jvm.internal.impl.descriptors.TypeParameterDescriptor;
import kotlin.reflect.jvm.internal.impl.descriptors.ValueParameterDescriptor;
import kotlin.reflect.jvm.internal.impl.descriptors.annotations.Annotated;
import kotlin.reflect.jvm.internal.impl.descriptors.annotations.Annotations;
import kotlin.reflect.jvm.internal.impl.load.java.AnnotationQualifierApplicabilityType;
import kotlin.reflect.jvm.internal.impl.load.java.lazy.ContextKt;
import kotlin.reflect.jvm.internal.impl.load.java.lazy.LazyJavaResolverContext;
import kotlin.reflect.jvm.internal.impl.load.java.lazy.descriptors.LazyJavaAnnotationDescriptor;
import kotlin.reflect.jvm.internal.impl.load.java.lazy.descriptors.LazyJavaClassDescriptor;
import kotlin.reflect.jvm.internal.impl.load.java.structure.JavaAnnotation;
import kotlin.reflect.jvm.internal.impl.name.Name;
import kotlin.reflect.jvm.internal.impl.resolve.descriptorUtil.DescriptorUtilsKt;
import kotlin.reflect.jvm.internal.impl.types.KotlinType;
import kotlin.reflect.jvm.internal.impl.types.RawType;
import kotlin.reflect.jvm.internal.impl.types.TypeUtils;
import kotlin.reflect.jvm.internal.impl.types.UnwrappedType;
import kotlin.reflect.jvm.internal.impl.types.typeUtil.TypeUtilsKt;
import org.jetbrains.annotations.NotNull;
@SourceDebugExtension({"SMAP\nsignatureEnhancement.kt\nKotlin\n*S Kotlin\n*F\n+ 1 signatureEnhancement.kt\norg/jetbrains/kotlin/load/java/typeEnhancement/SignatureEnhancement\n+ 2 _Collections.kt\nkotlin/collections/CollectionsKt___CollectionsKt\n+ 3 fake.kt\nkotlin/jvm/internal/FakeKt\n*L\n1#1,296:1\n1563#2:297\n1634#2,3:298\n1563#2:301\n1634#2,3:302\n1563#2:306\n1634#2,3:307\n1761#2,3:310\n1761#2,3:313\n1573#2:316\n1604#2,4:317\n1563#2:321\n1634#2,3:322\n1563#2:325\n1634#2,3:326\n1#3:305\n*S KotlinDebug\n*F\n+ 1 signatureEnhancement.kt\norg/jetbrains/kotlin/load/java/typeEnhancement/SignatureEnhancement\n*L\n55#1:297\n55#1:298,3\n66#1:301\n66#1:302,3\n123#1:306\n123#1:307,3\n144#1:310,3\n150#1:313,3\n156#1:316\n156#1:317,4\n170#1:321\n170#1:322,3\n220#1:325\n220#1:326,3\n*E\n"})
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public final class SignatureEnhancement {

    /* renamed from: a  reason: collision with root package name */
    private final JavaTypeEnhancement f33128a;

    public SignatureEnhancement(@NotNull JavaTypeEnhancement typeEnhancement) {
        Intrinsics.checkNotNullParameter(typeEnhancement, "typeEnhancement");
        this.f33128a = typeEnhancement;
    }

    private final boolean f(KotlinType kotlinType) {
        return TypeUtils.contains(kotlinType, b1.f33149d);
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Boolean g(UnwrappedType unwrappedType) {
        boolean z10;
        ClassifierDescriptor mo1199getDeclarationDescriptor = unwrappedType.getConstructor().mo1199getDeclarationDescriptor();
        if (mo1199getDeclarationDescriptor == null) {
            return Boolean.FALSE;
        }
        Name name = mo1199getDeclarationDescriptor.getName();
        JavaToKotlinClassMap javaToKotlinClassMap = JavaToKotlinClassMap.INSTANCE;
        if (Intrinsics.areEqual(name, javaToKotlinClassMap.getFUNCTION_N_FQ_NAME().shortName()) && Intrinsics.areEqual(DescriptorUtilsKt.fqNameOrNull(mo1199getDeclarationDescriptor), javaToKotlinClassMap.getFUNCTION_N_FQ_NAME())) {
            z10 = true;
        } else {
            z10 = false;
        }
        return Boolean.valueOf(z10);
    }

    private final KotlinType h(CallableMemberDescriptor callableMemberDescriptor, Annotated annotated, boolean z10, LazyJavaResolverContext lazyJavaResolverContext, AnnotationQualifierApplicabilityType annotationQualifierApplicabilityType, TypeEnhancementInfo typeEnhancementInfo, boolean z11, Function1 function1) {
        c1 c1Var = new c1(annotated, z10, lazyJavaResolverContext, annotationQualifierApplicabilityType, false, 16, null);
        KotlinType kotlinType = (KotlinType) function1.invoke(callableMemberDescriptor);
        Collection<? extends CallableMemberDescriptor> overriddenDescriptors = callableMemberDescriptor.getOverriddenDescriptors();
        Intrinsics.checkNotNullExpressionValue(overriddenDescriptors, "getOverriddenDescriptors(...)");
        Collection<? extends CallableMemberDescriptor> collection = overriddenDescriptors;
        ArrayList arrayList = new ArrayList(CollectionsKt.w(collection, 10));
        for (CallableMemberDescriptor callableMemberDescriptor2 : collection) {
            Intrinsics.checkNotNull(callableMemberDescriptor2);
            arrayList.add((KotlinType) function1.invoke(callableMemberDescriptor2));
        }
        return i(c1Var, kotlinType, arrayList, typeEnhancementInfo, z11);
    }

    private final KotlinType i(c1 c1Var, KotlinType kotlinType, List list, TypeEnhancementInfo typeEnhancementInfo, boolean z10) {
        return this.f33128a.enhance(kotlinType, c1Var.computeIndexedQualifiers(kotlinType, list, typeEnhancementInfo, z10), c1Var.getSkipRawTypeArguments());
    }

    static /* synthetic */ KotlinType j(SignatureEnhancement signatureEnhancement, CallableMemberDescriptor callableMemberDescriptor, Annotated annotated, boolean z10, LazyJavaResolverContext lazyJavaResolverContext, AnnotationQualifierApplicabilityType annotationQualifierApplicabilityType, TypeEnhancementInfo typeEnhancementInfo, boolean z11, Function1 function1, int i10, Object obj) {
        boolean z12;
        if ((i10 & 32) != 0) {
            z12 = false;
        } else {
            z12 = z11;
        }
        return signatureEnhancement.h(callableMemberDescriptor, annotated, z10, lazyJavaResolverContext, annotationQualifierApplicabilityType, typeEnhancementInfo, z12, function1);
    }

    static /* synthetic */ KotlinType k(SignatureEnhancement signatureEnhancement, c1 c1Var, KotlinType kotlinType, List list, TypeEnhancementInfo typeEnhancementInfo, boolean z10, int i10, Object obj) {
        if ((i10 & 4) != 0) {
            typeEnhancementInfo = null;
        }
        TypeEnhancementInfo typeEnhancementInfo2 = typeEnhancementInfo;
        if ((i10 & 8) != 0) {
            z10 = false;
        }
        return signatureEnhancement.i(c1Var, kotlinType, list, typeEnhancementInfo2, z10);
    }

    /* JADX WARN: Code restructure failed: missing block: B:131:0x0223, code lost:
        if (r3 == null) goto L10;
     */
    /* JADX WARN: Removed duplicated region for block: B:114:0x01ec  */
    /* JADX WARN: Removed duplicated region for block: B:115:0x01fa  */
    /* JADX WARN: Removed duplicated region for block: B:117:0x01fd A[ADDED_TO_REGION] */
    /* JADX WARN: Removed duplicated region for block: B:121:0x0208  */
    /* JADX WARN: Removed duplicated region for block: B:131:0x0223  */
    /* JADX WARN: Removed duplicated region for block: B:136:0x022c  */
    /* JADX WARN: Removed duplicated region for block: B:139:0x0237  */
    /* JADX WARN: Removed duplicated region for block: B:143:0x024d  */
    /* JADX WARN: Removed duplicated region for block: B:151:0x0274  */
    /* JADX WARN: Removed duplicated region for block: B:56:0x00d3  */
    /* JADX WARN: Removed duplicated region for block: B:68:0x0129  */
    /* JADX WARN: Removed duplicated region for block: B:77:0x0158  */
    /* JADX WARN: Removed duplicated region for block: B:78:0x015c  */
    /* JADX WARN: Removed duplicated region for block: B:86:0x016e  */
    /* JADX WARN: Removed duplicated region for block: B:88:0x0175  */
    /* JADX WARN: Removed duplicated region for block: B:91:0x019a  */
    /*
        Code decompiled incorrectly, please refer to instructions dump.
        To view partially-correct add '--show-bad-code' argument
    */
    private final kotlin.reflect.jvm.internal.impl.descriptors.CallableMemberDescriptor l(kotlin.reflect.jvm.internal.impl.descriptors.CallableMemberDescriptor r18, kotlin.reflect.jvm.internal.impl.load.java.lazy.LazyJavaResolverContext r19) {
        /*
            Method dump skipped, instructions count: 645
            To view this dump add '--comments-level debug' option
        */
        throw new UnsupportedOperationException("Method not decompiled: kotlin.reflect.jvm.internal.impl.load.java.typeEnhancement.SignatureEnhancement.l(kotlin.reflect.jvm.internal.impl.descriptors.CallableMemberDescriptor, kotlin.reflect.jvm.internal.impl.load.java.lazy.LazyJavaResolverContext):kotlin.reflect.jvm.internal.impl.descriptors.CallableMemberDescriptor");
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final KotlinType m(CallableMemberDescriptor it) {
        Intrinsics.checkNotNullParameter(it, "it");
        KotlinType returnType = it.getReturnType();
        Intrinsics.checkNotNull(returnType);
        return returnType;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final KotlinType n(CallableMemberDescriptor it) {
        Intrinsics.checkNotNullParameter(it, "it");
        ReceiverParameterDescriptor extensionReceiverParameter = it.getExtensionReceiverParameter();
        Intrinsics.checkNotNull(extensionReceiverParameter);
        KotlinType type = extensionReceiverParameter.getType();
        Intrinsics.checkNotNullExpressionValue(type, "getType(...)");
        return type;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final KotlinType o(ValueParameterDescriptor valueParameterDescriptor, CallableMemberDescriptor it) {
        Intrinsics.checkNotNullParameter(it, "it");
        KotlinType type = it.getValueParameters().get(valueParameterDescriptor.getIndex()).getType();
        Intrinsics.checkNotNullExpressionValue(type, "getType(...)");
        return type;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final boolean p(UnwrappedType it) {
        Intrinsics.checkNotNullParameter(it, "it");
        return it instanceof RawType;
    }

    private final KotlinType q(CallableMemberDescriptor callableMemberDescriptor, ValueParameterDescriptor valueParameterDescriptor, LazyJavaResolverContext lazyJavaResolverContext, TypeEnhancementInfo typeEnhancementInfo, boolean z10, Function1 function1) {
        LazyJavaResolverContext lazyJavaResolverContext2;
        LazyJavaResolverContext copyWithNewDefaultTypeQualifiers;
        if (valueParameterDescriptor != null && (copyWithNewDefaultTypeQualifiers = ContextKt.copyWithNewDefaultTypeQualifiers(lazyJavaResolverContext, valueParameterDescriptor.getAnnotations())) != null) {
            lazyJavaResolverContext2 = copyWithNewDefaultTypeQualifiers;
        } else {
            lazyJavaResolverContext2 = lazyJavaResolverContext;
        }
        return h(callableMemberDescriptor, valueParameterDescriptor, false, lazyJavaResolverContext2, AnnotationQualifierApplicabilityType.VALUE_PARAMETER, typeEnhancementInfo, z10, function1);
    }

    private final Annotations r(CallableMemberDescriptor callableMemberDescriptor, LazyJavaResolverContext lazyJavaResolverContext) {
        LazyJavaClassDescriptor lazyJavaClassDescriptor;
        ClassifierDescriptor topLevelContainingClassifier = DescriptorUtilKt.getTopLevelContainingClassifier(callableMemberDescriptor);
        if (topLevelContainingClassifier == null) {
            return callableMemberDescriptor.getAnnotations();
        }
        List<JavaAnnotation> list = null;
        if (topLevelContainingClassifier instanceof LazyJavaClassDescriptor) {
            lazyJavaClassDescriptor = (LazyJavaClassDescriptor) topLevelContainingClassifier;
        } else {
            lazyJavaClassDescriptor = null;
        }
        if (lazyJavaClassDescriptor != null) {
            list = lazyJavaClassDescriptor.getModuleAnnotations();
        }
        List<JavaAnnotation> list2 = list;
        if (list2 != null && !list2.isEmpty()) {
            List<JavaAnnotation> list3 = list;
            ArrayList arrayList = new ArrayList(CollectionsKt.w(list3, 10));
            for (JavaAnnotation javaAnnotation : list3) {
                arrayList.add(new LazyJavaAnnotationDescriptor(lazyJavaResolverContext, javaAnnotation, true));
            }
            return Annotations.Companion.create(CollectionsKt.J0(callableMemberDescriptor.getAnnotations(), arrayList));
        }
        return callableMemberDescriptor.getAnnotations();
    }

    @NotNull
    public final <D extends CallableMemberDescriptor> Collection<D> enhanceSignatures(@NotNull LazyJavaResolverContext c10, @NotNull Collection<? extends D> platformSignatures) {
        Intrinsics.checkNotNullParameter(c10, "c");
        Intrinsics.checkNotNullParameter(platformSignatures, "platformSignatures");
        Collection<? extends D> collection = platformSignatures;
        ArrayList arrayList = new ArrayList(CollectionsKt.w(collection, 10));
        Iterator<T> it = collection.iterator();
        while (it.hasNext()) {
            arrayList.add(l((CallableMemberDescriptor) it.next(), c10));
        }
        return arrayList;
    }

    @NotNull
    public final KotlinType enhanceSuperType(@NotNull KotlinType type, @NotNull LazyJavaResolverContext context) {
        Intrinsics.checkNotNullParameter(type, "type");
        Intrinsics.checkNotNullParameter(context, "context");
        KotlinType k10 = k(this, new c1(null, false, context, AnnotationQualifierApplicabilityType.TYPE_USE, true), type, CollectionsKt.l(), null, false, 12, null);
        if (k10 == null) {
            return type;
        }
        return k10;
    }

    @NotNull
    public final List<KotlinType> enhanceTypeParameterBounds(@NotNull TypeParameterDescriptor typeParameter, @NotNull List<? extends KotlinType> bounds, @NotNull LazyJavaResolverContext context) {
        KotlinType kotlinType;
        KotlinType k10;
        Intrinsics.checkNotNullParameter(typeParameter, "typeParameter");
        Intrinsics.checkNotNullParameter(bounds, "bounds");
        Intrinsics.checkNotNullParameter(context, "context");
        List<? extends KotlinType> list = bounds;
        ArrayList arrayList = new ArrayList(CollectionsKt.w(list, 10));
        for (KotlinType kotlinType2 : list) {
            if (TypeUtilsKt.contains(kotlinType2, a1.f33145d)) {
                kotlinType = kotlinType2;
            } else {
                kotlinType = kotlinType2;
                k10 = k(this, new c1(typeParameter, false, context, AnnotationQualifierApplicabilityType.TYPE_PARAMETER_BOUNDS, false, 16, null), kotlinType, CollectionsKt.l(), null, false, 12, null);
                if (k10 != null) {
                    arrayList.add(k10);
                }
            }
            k10 = kotlinType;
            arrayList.add(k10);
        }
        return arrayList;
    }
}

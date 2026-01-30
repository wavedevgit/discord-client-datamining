package kotlin.reflect.jvm.internal.impl.resolve.descriptorUtil;

import java.util.ArrayList;
import java.util.Collection;
import kotlin.collections.CollectionsKt;
import kotlin.jvm.functions.Function1;
import kotlin.jvm.internal.FunctionReferenceImpl;
import kotlin.jvm.internal.Intrinsics;
import kotlin.jvm.internal.Ref;
import kotlin.jvm.internal.SourceDebugExtension;
import kotlin.reflect.jvm.internal.impl.builtins.KotlinBuiltIns;
import kotlin.reflect.jvm.internal.impl.descriptors.CallableMemberDescriptor;
import kotlin.reflect.jvm.internal.impl.descriptors.ClassDescriptor;
import kotlin.reflect.jvm.internal.impl.descriptors.ClassifierDescriptor;
import kotlin.reflect.jvm.internal.impl.descriptors.ClassifierDescriptorWithTypeParameters;
import kotlin.reflect.jvm.internal.impl.descriptors.DeclarationDescriptor;
import kotlin.reflect.jvm.internal.impl.descriptors.InlineClassRepresentation;
import kotlin.reflect.jvm.internal.impl.descriptors.ModuleDescriptor;
import kotlin.reflect.jvm.internal.impl.descriptors.MultiFieldValueClassRepresentation;
import kotlin.reflect.jvm.internal.impl.descriptors.PackageFragmentDescriptor;
import kotlin.reflect.jvm.internal.impl.descriptors.PropertyAccessorDescriptor;
import kotlin.reflect.jvm.internal.impl.descriptors.PropertyDescriptor;
import kotlin.reflect.jvm.internal.impl.descriptors.ValueClassRepresentation;
import kotlin.reflect.jvm.internal.impl.descriptors.ValueParameterDescriptor;
import kotlin.reflect.jvm.internal.impl.descriptors.annotations.AnnotationDescriptor;
import kotlin.reflect.jvm.internal.impl.incremental.components.LookupLocation;
import kotlin.reflect.jvm.internal.impl.name.ClassId;
import kotlin.reflect.jvm.internal.impl.name.FqName;
import kotlin.reflect.jvm.internal.impl.name.FqNameUnsafe;
import kotlin.reflect.jvm.internal.impl.name.Name;
import kotlin.reflect.jvm.internal.impl.resolve.DescriptorUtils;
import kotlin.reflect.jvm.internal.impl.types.KotlinType;
import kotlin.reflect.jvm.internal.impl.types.SimpleType;
import kotlin.reflect.jvm.internal.impl.types.checker.KotlinTypeRefiner;
import kotlin.reflect.jvm.internal.impl.types.checker.KotlinTypeRefinerKt;
import kotlin.reflect.jvm.internal.impl.types.checker.TypeRefinementSupport;
import kotlin.reflect.jvm.internal.impl.utils.DFS;
import kotlin.sequences.Sequence;
import kotlin.sequences.k;
import org.jetbrains.annotations.NotNull;
@SourceDebugExtension({"SMAP\nDescriptorUtils.kt\nKotlin\n*S Kotlin\n*F\n+ 1 DescriptorUtils.kt\norg/jetbrains/kotlin/resolve/descriptorUtil/DescriptorUtilsKt\n+ 2 ClassKind.kt\norg/jetbrains/kotlin/descriptors/ClassKindKt\n+ 3 _Collections.kt\nkotlin/collections/CollectionsKt___CollectionsKt\n+ 4 fake.kt\nkotlin/jvm/internal/FakeKt\n+ 5 _Arrays.kt\nkotlin/collections/ArraysKt___ArraysKt\n*L\n1#1,466:1\n34#2:467\n827#3:468\n855#3,2:469\n1617#3,9:471\n1869#3:480\n1870#3:482\n1626#3:483\n827#3:484\n855#3,2:485\n827#3:489\n855#3,2:490\n360#3,7:493\n1761#3,3:500\n2746#3,3:503\n1563#3:506\n1634#3,3:507\n1#4:481\n1#4:492\n1310#5,2:487\n*S KotlinDebug\n*F\n+ 1 DescriptorUtils.kt\norg/jetbrains/kotlin/resolve/descriptorUtil/DescriptorUtilsKt\n*L\n148#1:467\n167#1:468\n167#1:469,2\n168#1:471,9\n168#1:480\n168#1:482\n168#1:483\n175#1:484\n175#1:485,2\n233#1:489\n233#1:490,2\n303#1:493,7\n449#1:500,3\n455#1:503,3\n208#1:506\n208#1:507,3\n168#1:481\n226#1:487,2\n*E\n"})
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public final class DescriptorUtilsKt {

    /* renamed from: a  reason: collision with root package name */
    private static final Name f35455a;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
    /* synthetic */ class a extends FunctionReferenceImpl implements Function1 {

        /* renamed from: d  reason: collision with root package name */
        public static final a f35456d = new a();

        a() {
            super(1, ValueParameterDescriptor.class, "declaresDefaultValue", "declaresDefaultValue()Z", 0);
        }

        @Override // kotlin.jvm.functions.Function1
        /* renamed from: a */
        public final Boolean invoke(ValueParameterDescriptor p02) {
            Intrinsics.checkNotNullParameter(p02, "p0");
            return Boolean.valueOf(p02.declaresDefaultValue());
        }
    }

    static {
        Name identifier = Name.identifier("value");
        Intrinsics.checkNotNullExpressionValue(identifier, "identifier(...)");
        f35455a = identifier;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final DeclarationDescriptor a(DeclarationDescriptor it) {
        Intrinsics.checkNotNullParameter(it, "it");
        return it.getContainingDeclaration();
    }

    public static final boolean declaresOrInheritsDefaultValue(@NotNull ValueParameterDescriptor valueParameterDescriptor) {
        Intrinsics.checkNotNullParameter(valueParameterDescriptor, "<this>");
        Boolean ifAny = DFS.ifAny(CollectionsKt.e(valueParameterDescriptor), kotlin.reflect.jvm.internal.impl.resolve.descriptorUtil.a.f35459a, a.f35456d);
        Intrinsics.checkNotNullExpressionValue(ifAny, "ifAny(...)");
        return ifAny.booleanValue();
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Iterable f(ValueParameterDescriptor valueParameterDescriptor) {
        Collection<ValueParameterDescriptor> overriddenDescriptors = valueParameterDescriptor.getOverriddenDescriptors();
        ArrayList arrayList = new ArrayList(CollectionsKt.w(overriddenDescriptors, 10));
        for (ValueParameterDescriptor valueParameterDescriptor2 : overriddenDescriptors) {
            arrayList.add(valueParameterDescriptor2.getOriginal());
        }
        return arrayList;
    }

    public static final CallableMemberDescriptor firstOverridden(@NotNull CallableMemberDescriptor callableMemberDescriptor, boolean z10, @NotNull final Function1<? super CallableMemberDescriptor, Boolean> predicate) {
        Intrinsics.checkNotNullParameter(callableMemberDescriptor, "<this>");
        Intrinsics.checkNotNullParameter(predicate, "predicate");
        final Ref.ObjectRef objectRef = new Ref.ObjectRef();
        return (CallableMemberDescriptor) DFS.dfs(CollectionsKt.e(callableMemberDescriptor), new c(z10), new DFS.AbstractNodeHandler<CallableMemberDescriptor, CallableMemberDescriptor>() { // from class: kotlin.reflect.jvm.internal.impl.resolve.descriptorUtil.DescriptorUtilsKt$firstOverridden$2
            /* JADX WARN: Multi-variable type inference failed */
            @Override // kotlin.reflect.jvm.internal.impl.utils.DFS.AbstractNodeHandler, kotlin.reflect.jvm.internal.impl.utils.DFS.NodeHandler
            public void afterChildren(CallableMemberDescriptor current) {
                Intrinsics.checkNotNullParameter(current, "current");
                if (Ref.ObjectRef.this.element == 0 && ((Boolean) predicate.invoke(current)).booleanValue()) {
                    Ref.ObjectRef.this.element = current;
                }
            }

            @Override // kotlin.reflect.jvm.internal.impl.utils.DFS.AbstractNodeHandler, kotlin.reflect.jvm.internal.impl.utils.DFS.NodeHandler
            public boolean beforeChildren(CallableMemberDescriptor current) {
                Intrinsics.checkNotNullParameter(current, "current");
                return Ref.ObjectRef.this.element == 0;
            }

            @Override // kotlin.reflect.jvm.internal.impl.utils.DFS.NodeHandler
            public CallableMemberDescriptor result() {
                return (CallableMemberDescriptor) Ref.ObjectRef.this.element;
            }
        });
    }

    public static /* synthetic */ CallableMemberDescriptor firstOverridden$default(CallableMemberDescriptor callableMemberDescriptor, boolean z10, Function1 function1, int i10, Object obj) {
        if ((i10 & 1) != 0) {
            z10 = false;
        }
        return firstOverridden(callableMemberDescriptor, z10, function1);
    }

    public static final FqName fqNameOrNull(@NotNull DeclarationDescriptor declarationDescriptor) {
        Intrinsics.checkNotNullParameter(declarationDescriptor, "<this>");
        FqNameUnsafe fqNameUnsafe = getFqNameUnsafe(declarationDescriptor);
        if (!fqNameUnsafe.isSafe()) {
            fqNameUnsafe = null;
        }
        if (fqNameUnsafe == null) {
            return null;
        }
        return fqNameUnsafe.toSafe();
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Iterable g(boolean z10, CallableMemberDescriptor callableMemberDescriptor) {
        Collection<? extends CallableMemberDescriptor> overriddenDescriptors;
        if (z10) {
            if (callableMemberDescriptor != null) {
                callableMemberDescriptor = callableMemberDescriptor.getOriginal();
            } else {
                callableMemberDescriptor = null;
            }
        }
        if (callableMemberDescriptor != null && (overriddenDescriptors = callableMemberDescriptor.getOverriddenDescriptors()) != null) {
            return overriddenDescriptors;
        }
        return CollectionsKt.l();
    }

    public static final ClassDescriptor getAnnotationClass(@NotNull AnnotationDescriptor annotationDescriptor) {
        Intrinsics.checkNotNullParameter(annotationDescriptor, "<this>");
        ClassifierDescriptor mo1198getDeclarationDescriptor = annotationDescriptor.getType().getConstructor().mo1198getDeclarationDescriptor();
        if (mo1198getDeclarationDescriptor instanceof ClassDescriptor) {
            return (ClassDescriptor) mo1198getDeclarationDescriptor;
        }
        return null;
    }

    @NotNull
    public static final KotlinBuiltIns getBuiltIns(@NotNull DeclarationDescriptor declarationDescriptor) {
        Intrinsics.checkNotNullParameter(declarationDescriptor, "<this>");
        return getModule(declarationDescriptor).getBuiltIns();
    }

    public static final ClassId getClassId(ClassifierDescriptor classifierDescriptor) {
        DeclarationDescriptor containingDeclaration;
        ClassId classId;
        if (classifierDescriptor != null && (containingDeclaration = classifierDescriptor.getContainingDeclaration()) != null) {
            if (containingDeclaration instanceof PackageFragmentDescriptor) {
                FqName fqName = ((PackageFragmentDescriptor) containingDeclaration).getFqName();
                Name name = classifierDescriptor.getName();
                Intrinsics.checkNotNullExpressionValue(name, "getName(...)");
                return new ClassId(fqName, name);
            } else if ((containingDeclaration instanceof ClassifierDescriptorWithTypeParameters) && (classId = getClassId((ClassifierDescriptor) containingDeclaration)) != null) {
                Name name2 = classifierDescriptor.getName();
                Intrinsics.checkNotNullExpressionValue(name2, "getName(...)");
                return classId.createNestedClassId(name2);
            }
        }
        return null;
    }

    @NotNull
    public static final FqName getFqNameSafe(@NotNull DeclarationDescriptor declarationDescriptor) {
        Intrinsics.checkNotNullParameter(declarationDescriptor, "<this>");
        FqName fqNameSafe = DescriptorUtils.getFqNameSafe(declarationDescriptor);
        Intrinsics.checkNotNullExpressionValue(fqNameSafe, "getFqNameSafe(...)");
        return fqNameSafe;
    }

    @NotNull
    public static final FqNameUnsafe getFqNameUnsafe(@NotNull DeclarationDescriptor declarationDescriptor) {
        Intrinsics.checkNotNullParameter(declarationDescriptor, "<this>");
        FqNameUnsafe fqName = DescriptorUtils.getFqName(declarationDescriptor);
        Intrinsics.checkNotNullExpressionValue(fqName, "getFqName(...)");
        return fqName;
    }

    public static final InlineClassRepresentation<SimpleType> getInlineClassRepresentation(ClassDescriptor classDescriptor) {
        ValueClassRepresentation<SimpleType> valueClassRepresentation;
        if (classDescriptor != null) {
            valueClassRepresentation = classDescriptor.getValueClassRepresentation();
        } else {
            valueClassRepresentation = null;
        }
        if (!(valueClassRepresentation instanceof InlineClassRepresentation)) {
            return null;
        }
        return (InlineClassRepresentation) valueClassRepresentation;
    }

    @NotNull
    public static final KotlinTypeRefiner getKotlinTypeRefiner(@NotNull ModuleDescriptor moduleDescriptor) {
        TypeRefinementSupport typeRefinementSupport;
        Intrinsics.checkNotNullParameter(moduleDescriptor, "<this>");
        kotlin.reflect.jvm.internal.impl.types.checker.Ref ref = (kotlin.reflect.jvm.internal.impl.types.checker.Ref) moduleDescriptor.getCapability(KotlinTypeRefinerKt.getREFINER_CAPABILITY());
        if (ref != null) {
            typeRefinementSupport = (TypeRefinementSupport) ref.getValue();
        } else {
            typeRefinementSupport = null;
        }
        if (typeRefinementSupport instanceof TypeRefinementSupport.Enabled) {
            return ((TypeRefinementSupport.Enabled) typeRefinementSupport).getTypeRefiner();
        }
        return KotlinTypeRefiner.Default.INSTANCE;
    }

    @NotNull
    public static final ModuleDescriptor getModule(@NotNull DeclarationDescriptor declarationDescriptor) {
        Intrinsics.checkNotNullParameter(declarationDescriptor, "<this>");
        ModuleDescriptor containingModule = DescriptorUtils.getContainingModule(declarationDescriptor);
        Intrinsics.checkNotNullExpressionValue(containingModule, "getContainingModule(...)");
        return containingModule;
    }

    public static final MultiFieldValueClassRepresentation<SimpleType> getMultiFieldValueClassRepresentation(ClassDescriptor classDescriptor) {
        ValueClassRepresentation<SimpleType> valueClassRepresentation;
        if (classDescriptor != null) {
            valueClassRepresentation = classDescriptor.getValueClassRepresentation();
        } else {
            valueClassRepresentation = null;
        }
        if (!(valueClassRepresentation instanceof MultiFieldValueClassRepresentation)) {
            return null;
        }
        return (MultiFieldValueClassRepresentation) valueClassRepresentation;
    }

    @NotNull
    public static final Sequence<DeclarationDescriptor> getParents(@NotNull DeclarationDescriptor declarationDescriptor) {
        Intrinsics.checkNotNullParameter(declarationDescriptor, "<this>");
        return k.D(getParentsWithSelf(declarationDescriptor), 1);
    }

    @NotNull
    public static final Sequence<DeclarationDescriptor> getParentsWithSelf(@NotNull DeclarationDescriptor declarationDescriptor) {
        Intrinsics.checkNotNullParameter(declarationDescriptor, "<this>");
        return k.q(declarationDescriptor, b.f35460d);
    }

    @NotNull
    public static final CallableMemberDescriptor getPropertyIfAccessor(@NotNull CallableMemberDescriptor callableMemberDescriptor) {
        Intrinsics.checkNotNullParameter(callableMemberDescriptor, "<this>");
        if (callableMemberDescriptor instanceof PropertyAccessorDescriptor) {
            PropertyDescriptor correspondingProperty = ((PropertyAccessorDescriptor) callableMemberDescriptor).getCorrespondingProperty();
            Intrinsics.checkNotNullExpressionValue(correspondingProperty, "getCorrespondingProperty(...)");
            return correspondingProperty;
        }
        return callableMemberDescriptor;
    }

    public static final ClassDescriptor getSuperClassNotAny(@NotNull ClassDescriptor classDescriptor) {
        Intrinsics.checkNotNullParameter(classDescriptor, "<this>");
        for (KotlinType kotlinType : classDescriptor.getDefaultType().getConstructor().getSupertypes()) {
            if (!KotlinBuiltIns.isAnyOrNullableAny(kotlinType)) {
                ClassifierDescriptor mo1198getDeclarationDescriptor = kotlinType.getConstructor().mo1198getDeclarationDescriptor();
                if (DescriptorUtils.isClassOrEnumClass(mo1198getDeclarationDescriptor)) {
                    Intrinsics.checkNotNull(mo1198getDeclarationDescriptor, "null cannot be cast to non-null type org.jetbrains.kotlin.descriptors.ClassDescriptor");
                    return (ClassDescriptor) mo1198getDeclarationDescriptor;
                }
            }
        }
        return null;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Sequence h(boolean z10, CallableMemberDescriptor callableMemberDescriptor) {
        Intrinsics.checkNotNull(callableMemberDescriptor);
        return overriddenTreeAsSequence(callableMemberDescriptor, z10);
    }

    public static final boolean isTypeRefinementEnabled(@NotNull ModuleDescriptor moduleDescriptor) {
        TypeRefinementSupport typeRefinementSupport;
        Intrinsics.checkNotNullParameter(moduleDescriptor, "<this>");
        kotlin.reflect.jvm.internal.impl.types.checker.Ref ref = (kotlin.reflect.jvm.internal.impl.types.checker.Ref) moduleDescriptor.getCapability(KotlinTypeRefinerKt.getREFINER_CAPABILITY());
        if (ref == null || (typeRefinementSupport = (TypeRefinementSupport) ref.getValue()) == null || !typeRefinementSupport.isEnabled()) {
            return false;
        }
        return true;
    }

    @NotNull
    public static final Sequence<CallableMemberDescriptor> overriddenTreeAsSequence(@NotNull CallableMemberDescriptor callableMemberDescriptor, boolean z10) {
        Intrinsics.checkNotNullParameter(callableMemberDescriptor, "<this>");
        if (z10) {
            callableMemberDescriptor = callableMemberDescriptor.getOriginal();
        }
        Sequence v10 = k.v(callableMemberDescriptor);
        Collection<? extends CallableMemberDescriptor> overriddenDescriptors = callableMemberDescriptor.getOverriddenDescriptors();
        Intrinsics.checkNotNullExpressionValue(overriddenDescriptors, "getOverriddenDescriptors(...)");
        return k.V(v10, k.L(CollectionsKt.b0(overriddenDescriptors), new d(z10)));
    }

    public static final ClassDescriptor resolveTopLevelClass(@NotNull ModuleDescriptor moduleDescriptor, @NotNull FqName topLevelClassFqName, @NotNull LookupLocation location) {
        Intrinsics.checkNotNullParameter(moduleDescriptor, "<this>");
        Intrinsics.checkNotNullParameter(topLevelClassFqName, "topLevelClassFqName");
        Intrinsics.checkNotNullParameter(location, "location");
        topLevelClassFqName.isRoot();
        ClassifierDescriptor mo1199getContributedClassifier = moduleDescriptor.getPackage(topLevelClassFqName.parent()).getMemberScope().mo1199getContributedClassifier(topLevelClassFqName.shortName(), location);
        if (mo1199getContributedClassifier instanceof ClassDescriptor) {
            return (ClassDescriptor) mo1199getContributedClassifier;
        }
        return null;
    }
}

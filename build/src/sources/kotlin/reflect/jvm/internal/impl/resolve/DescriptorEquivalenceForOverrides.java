package kotlin.reflect.jvm.internal.impl.resolve;

import java.util.Collection;
import kotlin.collections.CollectionsKt;
import kotlin.jvm.functions.Function2;
import kotlin.jvm.internal.Intrinsics;
import kotlin.reflect.jvm.internal.impl.descriptors.CallableDescriptor;
import kotlin.reflect.jvm.internal.impl.descriptors.CallableMemberDescriptor;
import kotlin.reflect.jvm.internal.impl.descriptors.ClassDescriptor;
import kotlin.reflect.jvm.internal.impl.descriptors.ClassifierDescriptor;
import kotlin.reflect.jvm.internal.impl.descriptors.DeclarationDescriptor;
import kotlin.reflect.jvm.internal.impl.descriptors.MemberDescriptor;
import kotlin.reflect.jvm.internal.impl.descriptors.PackageFragmentDescriptor;
import kotlin.reflect.jvm.internal.impl.descriptors.SourceElement;
import kotlin.reflect.jvm.internal.impl.descriptors.TypeParameterDescriptor;
import kotlin.reflect.jvm.internal.impl.resolve.OverridingUtil;
import kotlin.reflect.jvm.internal.impl.types.TypeConstructor;
import kotlin.reflect.jvm.internal.impl.types.checker.KotlinTypeRefiner;
import org.jetbrains.annotations.NotNull;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public final class DescriptorEquivalenceForOverrides {
    @NotNull
    public static final DescriptorEquivalenceForOverrides INSTANCE = new DescriptorEquivalenceForOverrides();

    private DescriptorEquivalenceForOverrides() {
    }

    public static /* synthetic */ boolean areCallableDescriptorsEquivalent$default(DescriptorEquivalenceForOverrides descriptorEquivalenceForOverrides, CallableDescriptor callableDescriptor, CallableDescriptor callableDescriptor2, boolean z10, boolean z11, boolean z12, KotlinTypeRefiner kotlinTypeRefiner, int i10, Object obj) {
        if ((i10 & 8) != 0) {
            z11 = true;
        }
        boolean z13 = z11;
        if ((i10 & 16) != 0) {
            z12 = false;
        }
        return descriptorEquivalenceForOverrides.areCallableDescriptorsEquivalent(callableDescriptor, callableDescriptor2, z10, z13, z12, kotlinTypeRefiner);
    }

    public static /* synthetic */ boolean areEquivalent$default(DescriptorEquivalenceForOverrides descriptorEquivalenceForOverrides, DeclarationDescriptor declarationDescriptor, DeclarationDescriptor declarationDescriptor2, boolean z10, boolean z11, int i10, Object obj) {
        if ((i10 & 8) != 0) {
            z11 = true;
        }
        return descriptorEquivalenceForOverrides.areEquivalent(declarationDescriptor, declarationDescriptor2, z10, z11);
    }

    /* JADX WARN: Multi-variable type inference failed */
    public static /* synthetic */ boolean areTypeParametersEquivalent$default(DescriptorEquivalenceForOverrides descriptorEquivalenceForOverrides, TypeParameterDescriptor typeParameterDescriptor, TypeParameterDescriptor typeParameterDescriptor2, boolean z10, Function2 function2, int i10, Object obj) {
        if ((i10 & 8) != 0) {
            function2 = b.f35413d;
        }
        return descriptorEquivalenceForOverrides.areTypeParametersEquivalent(typeParameterDescriptor, typeParameterDescriptor2, z10, function2);
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final boolean e(DeclarationDescriptor declarationDescriptor, DeclarationDescriptor declarationDescriptor2) {
        return false;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final boolean f(boolean z10, CallableDescriptor callableDescriptor, CallableDescriptor callableDescriptor2, TypeConstructor c12, TypeConstructor c22) {
        Intrinsics.checkNotNullParameter(c12, "c1");
        Intrinsics.checkNotNullParameter(c22, "c2");
        if (Intrinsics.areEqual(c12, c22)) {
            return true;
        }
        ClassifierDescriptor mo1198getDeclarationDescriptor = c12.mo1198getDeclarationDescriptor();
        ClassifierDescriptor mo1198getDeclarationDescriptor2 = c22.mo1198getDeclarationDescriptor();
        if ((mo1198getDeclarationDescriptor instanceof TypeParameterDescriptor) && (mo1198getDeclarationDescriptor2 instanceof TypeParameterDescriptor)) {
            return INSTANCE.areTypeParametersEquivalent((TypeParameterDescriptor) mo1198getDeclarationDescriptor, (TypeParameterDescriptor) mo1198getDeclarationDescriptor2, z10, new e(callableDescriptor, callableDescriptor2));
        }
        return false;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final boolean g(CallableDescriptor callableDescriptor, CallableDescriptor callableDescriptor2, DeclarationDescriptor declarationDescriptor, DeclarationDescriptor declarationDescriptor2) {
        if (Intrinsics.areEqual(declarationDescriptor, callableDescriptor) && Intrinsics.areEqual(declarationDescriptor2, callableDescriptor2)) {
            return true;
        }
        return false;
    }

    private final boolean h(ClassDescriptor classDescriptor, ClassDescriptor classDescriptor2) {
        return Intrinsics.areEqual(classDescriptor.getTypeConstructor(), classDescriptor2.getTypeConstructor());
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final boolean i(DeclarationDescriptor declarationDescriptor, DeclarationDescriptor declarationDescriptor2) {
        return false;
    }

    private final boolean j(DeclarationDescriptor declarationDescriptor, DeclarationDescriptor declarationDescriptor2, Function2 function2, boolean z10) {
        DeclarationDescriptor containingDeclaration = declarationDescriptor.getContainingDeclaration();
        DeclarationDescriptor containingDeclaration2 = declarationDescriptor2.getContainingDeclaration();
        if (!(containingDeclaration instanceof CallableMemberDescriptor) && !(containingDeclaration2 instanceof CallableMemberDescriptor)) {
            return areEquivalent$default(this, containingDeclaration, containingDeclaration2, z10, false, 8, null);
        }
        return ((Boolean) function2.invoke(containingDeclaration, containingDeclaration2)).booleanValue();
    }

    private final SourceElement k(CallableDescriptor callableDescriptor) {
        while (callableDescriptor instanceof CallableMemberDescriptor) {
            CallableMemberDescriptor callableMemberDescriptor = (CallableMemberDescriptor) callableDescriptor;
            if (callableMemberDescriptor.getKind() != CallableMemberDescriptor.Kind.FAKE_OVERRIDE) {
                break;
            }
            Collection<? extends CallableMemberDescriptor> overriddenDescriptors = callableMemberDescriptor.getOverriddenDescriptors();
            Intrinsics.checkNotNullExpressionValue(overriddenDescriptors, "getOverriddenDescriptors(...)");
            callableDescriptor = (CallableMemberDescriptor) CollectionsKt.R0(overriddenDescriptors);
            if (callableDescriptor == null) {
                return null;
            }
        }
        return callableDescriptor.getSource();
    }

    public final boolean areCallableDescriptorsEquivalent(@NotNull CallableDescriptor a10, @NotNull CallableDescriptor b10, boolean z10, boolean z11, boolean z12, @NotNull KotlinTypeRefiner kotlinTypeRefiner) {
        Intrinsics.checkNotNullParameter(a10, "a");
        Intrinsics.checkNotNullParameter(b10, "b");
        Intrinsics.checkNotNullParameter(kotlinTypeRefiner, "kotlinTypeRefiner");
        if (Intrinsics.areEqual(a10, b10)) {
            return true;
        }
        if (!Intrinsics.areEqual(a10.getName(), b10.getName())) {
            return false;
        }
        if (z11 && (a10 instanceof MemberDescriptor) && (b10 instanceof MemberDescriptor) && ((MemberDescriptor) a10).isExpect() != ((MemberDescriptor) b10).isExpect()) {
            return false;
        }
        if ((Intrinsics.areEqual(a10.getContainingDeclaration(), b10.getContainingDeclaration()) && (!z10 || !Intrinsics.areEqual(k(a10), k(b10)))) || DescriptorUtils.isLocal(a10) || DescriptorUtils.isLocal(b10) || !j(a10, b10, c.f35414d, z10)) {
            return false;
        }
        OverridingUtil create = OverridingUtil.create(kotlinTypeRefiner, new d(z10, a10, b10));
        Intrinsics.checkNotNullExpressionValue(create, "create(...)");
        OverridingUtil.OverrideCompatibilityInfo.Result result = create.isOverridableBy(a10, b10, null, !z12).getResult();
        OverridingUtil.OverrideCompatibilityInfo.Result result2 = OverridingUtil.OverrideCompatibilityInfo.Result.OVERRIDABLE;
        if (result == result2 && create.isOverridableBy(b10, a10, null, !z12).getResult() == result2) {
            return true;
        }
        return false;
    }

    public final boolean areEquivalent(DeclarationDescriptor declarationDescriptor, DeclarationDescriptor declarationDescriptor2, boolean z10, boolean z11) {
        if ((declarationDescriptor instanceof ClassDescriptor) && (declarationDescriptor2 instanceof ClassDescriptor)) {
            return h((ClassDescriptor) declarationDescriptor, (ClassDescriptor) declarationDescriptor2);
        }
        if ((declarationDescriptor instanceof TypeParameterDescriptor) && (declarationDescriptor2 instanceof TypeParameterDescriptor)) {
            return areTypeParametersEquivalent$default(this, (TypeParameterDescriptor) declarationDescriptor, (TypeParameterDescriptor) declarationDescriptor2, z10, null, 8, null);
        }
        if ((declarationDescriptor instanceof CallableDescriptor) && (declarationDescriptor2 instanceof CallableDescriptor)) {
            return areCallableDescriptorsEquivalent$default(this, (CallableDescriptor) declarationDescriptor, (CallableDescriptor) declarationDescriptor2, z10, z11, false, KotlinTypeRefiner.Default.INSTANCE, 16, null);
        }
        if ((declarationDescriptor instanceof PackageFragmentDescriptor) && (declarationDescriptor2 instanceof PackageFragmentDescriptor)) {
            return Intrinsics.areEqual(((PackageFragmentDescriptor) declarationDescriptor).getFqName(), ((PackageFragmentDescriptor) declarationDescriptor2).getFqName());
        }
        return Intrinsics.areEqual(declarationDescriptor, declarationDescriptor2);
    }

    public final boolean areTypeParametersEquivalent(@NotNull TypeParameterDescriptor a10, @NotNull TypeParameterDescriptor b10, boolean z10) {
        Intrinsics.checkNotNullParameter(a10, "a");
        Intrinsics.checkNotNullParameter(b10, "b");
        return areTypeParametersEquivalent$default(this, a10, b10, z10, null, 8, null);
    }

    public final boolean areTypeParametersEquivalent(@NotNull TypeParameterDescriptor a10, @NotNull TypeParameterDescriptor b10, boolean z10, @NotNull Function2<? super DeclarationDescriptor, ? super DeclarationDescriptor, Boolean> equivalentCallables) {
        Intrinsics.checkNotNullParameter(a10, "a");
        Intrinsics.checkNotNullParameter(b10, "b");
        Intrinsics.checkNotNullParameter(equivalentCallables, "equivalentCallables");
        if (Intrinsics.areEqual(a10, b10)) {
            return true;
        }
        return !Intrinsics.areEqual(a10.getContainingDeclaration(), b10.getContainingDeclaration()) && j(a10, b10, equivalentCallables, z10) && a10.getIndex() == b10.getIndex();
    }
}

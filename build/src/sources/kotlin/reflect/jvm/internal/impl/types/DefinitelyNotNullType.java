package kotlin.reflect.jvm.internal.impl.types;

import kotlin.jvm.internal.DefaultConstructorMarker;
import kotlin.jvm.internal.Intrinsics;
import kotlin.reflect.jvm.internal.impl.descriptors.ClassifierDescriptor;
import kotlin.reflect.jvm.internal.impl.descriptors.TypeParameterDescriptor;
import kotlin.reflect.jvm.internal.impl.descriptors.impl.TypeParameterDescriptorImpl;
import kotlin.reflect.jvm.internal.impl.types.checker.NewCapturedType;
import kotlin.reflect.jvm.internal.impl.types.checker.NewTypeVariableConstructor;
import kotlin.reflect.jvm.internal.impl.types.checker.NullabilityChecker;
import kotlin.reflect.jvm.internal.impl.types.model.DefinitelyNotNullTypeMarker;
import org.jetbrains.annotations.NotNull;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public final class DefinitelyNotNullType extends DelegatingSimpleType implements CustomTypeParameter, DefinitelyNotNullTypeMarker {
    @NotNull
    public static final Companion Companion = new Companion(null);

    /* renamed from: e  reason: collision with root package name */
    private final SimpleType f34538e;

    /* renamed from: i  reason: collision with root package name */
    private final boolean f34539i;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
    public static final class Companion {
        public /* synthetic */ Companion(DefaultConstructorMarker defaultConstructorMarker) {
            this();
        }

        private final boolean a(UnwrappedType unwrappedType) {
            if (!(unwrappedType.getConstructor() instanceof NewTypeVariableConstructor) && !(unwrappedType.getConstructor().mo1199getDeclarationDescriptor() instanceof TypeParameterDescriptor) && !(unwrappedType instanceof NewCapturedType) && !(unwrappedType instanceof StubTypeForBuilderInference)) {
                return false;
            }
            return true;
        }

        private final boolean b(UnwrappedType unwrappedType, boolean z10) {
            TypeParameterDescriptorImpl typeParameterDescriptorImpl;
            if (!a(unwrappedType)) {
                return false;
            }
            if (unwrappedType instanceof StubTypeForBuilderInference) {
                return TypeUtils.isNullableType(unwrappedType);
            }
            ClassifierDescriptor mo1199getDeclarationDescriptor = unwrappedType.getConstructor().mo1199getDeclarationDescriptor();
            if (mo1199getDeclarationDescriptor instanceof TypeParameterDescriptorImpl) {
                typeParameterDescriptorImpl = (TypeParameterDescriptorImpl) mo1199getDeclarationDescriptor;
            } else {
                typeParameterDescriptorImpl = null;
            }
            if (typeParameterDescriptorImpl != null && !typeParameterDescriptorImpl.isInitialized()) {
                return true;
            }
            if (z10 && (unwrappedType.getConstructor().mo1199getDeclarationDescriptor() instanceof TypeParameterDescriptor)) {
                return TypeUtils.isNullableType(unwrappedType);
            }
            return !NullabilityChecker.INSTANCE.isSubtypeOfAny(unwrappedType);
        }

        public static /* synthetic */ DefinitelyNotNullType makeDefinitelyNotNull$default(Companion companion, UnwrappedType unwrappedType, boolean z10, boolean z11, int i10, Object obj) {
            if ((i10 & 2) != 0) {
                z10 = false;
            }
            if ((i10 & 4) != 0) {
                z11 = false;
            }
            return companion.makeDefinitelyNotNull(unwrappedType, z10, z11);
        }

        public final DefinitelyNotNullType makeDefinitelyNotNull(@NotNull UnwrappedType type, boolean z10, boolean z11) {
            Intrinsics.checkNotNullParameter(type, "type");
            if (type instanceof DefinitelyNotNullType) {
                return (DefinitelyNotNullType) type;
            }
            if (!z11 && !b(type, z10)) {
                return null;
            }
            if (type instanceof FlexibleType) {
                FlexibleType flexibleType = (FlexibleType) type;
                Intrinsics.areEqual(flexibleType.getLowerBound().getConstructor(), flexibleType.getUpperBound().getConstructor());
            }
            return new DefinitelyNotNullType(FlexibleTypesKt.lowerIfFlexible(type).makeNullableAsSpecified(false), z10, null);
        }

        private Companion() {
        }
    }

    public /* synthetic */ DefinitelyNotNullType(SimpleType simpleType, boolean z10, DefaultConstructorMarker defaultConstructorMarker) {
        this(simpleType, z10);
    }

    @Override // kotlin.reflect.jvm.internal.impl.types.DelegatingSimpleType
    protected SimpleType getDelegate() {
        return this.f34538e;
    }

    @NotNull
    public final SimpleType getOriginal() {
        return this.f34538e;
    }

    @Override // kotlin.reflect.jvm.internal.impl.types.DelegatingSimpleType, kotlin.reflect.jvm.internal.impl.types.KotlinType
    public boolean isMarkedNullable() {
        return false;
    }

    @Override // kotlin.reflect.jvm.internal.impl.types.CustomTypeParameter
    public boolean isTypeParameter() {
        if (!(getDelegate().getConstructor() instanceof NewTypeVariableConstructor) && !(getDelegate().getConstructor().mo1199getDeclarationDescriptor() instanceof TypeParameterDescriptor)) {
            return false;
        }
        return true;
    }

    @Override // kotlin.reflect.jvm.internal.impl.types.CustomTypeParameter
    @NotNull
    public KotlinType substitutionResult(@NotNull KotlinType replacement) {
        Intrinsics.checkNotNullParameter(replacement, "replacement");
        return SpecialTypesKt.makeDefinitelyNotNullOrNotNull(replacement.unwrap(), this.f34539i);
    }

    @Override // kotlin.reflect.jvm.internal.impl.types.SimpleType
    @NotNull
    public String toString() {
        return getDelegate() + " & Any";
    }

    private DefinitelyNotNullType(SimpleType simpleType, boolean z10) {
        this.f34538e = simpleType;
        this.f34539i = z10;
    }

    @Override // kotlin.reflect.jvm.internal.impl.types.UnwrappedType
    @NotNull
    public SimpleType makeNullableAsSpecified(boolean z10) {
        return z10 ? getDelegate().makeNullableAsSpecified(z10) : this;
    }

    @Override // kotlin.reflect.jvm.internal.impl.types.UnwrappedType
    @NotNull
    public SimpleType replaceAttributes(@NotNull TypeAttributes newAttributes) {
        Intrinsics.checkNotNullParameter(newAttributes, "newAttributes");
        return new DefinitelyNotNullType(getDelegate().replaceAttributes(newAttributes), this.f34539i);
    }

    @Override // kotlin.reflect.jvm.internal.impl.types.DelegatingSimpleType
    @NotNull
    public DefinitelyNotNullType replaceDelegate(@NotNull SimpleType delegate) {
        Intrinsics.checkNotNullParameter(delegate, "delegate");
        return new DefinitelyNotNullType(delegate, this.f34539i);
    }
}

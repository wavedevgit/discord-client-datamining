package kotlin.reflect.jvm.internal.impl.types.error;

import java.util.Arrays;
import java.util.List;
import java.util.Set;
import kotlin.collections.CollectionsKt;
import kotlin.collections.x0;
import kotlin.jvm.internal.Intrinsics;
import kotlin.reflect.jvm.internal.impl.descriptors.DeclarationDescriptor;
import kotlin.reflect.jvm.internal.impl.descriptors.ModuleDescriptor;
import kotlin.reflect.jvm.internal.impl.descriptors.PropertyDescriptor;
import kotlin.reflect.jvm.internal.impl.name.Name;
import kotlin.reflect.jvm.internal.impl.types.KotlinType;
import kotlin.reflect.jvm.internal.impl.types.TypeConstructor;
import kotlin.reflect.jvm.internal.impl.types.TypeProjection;
import kotlin.reflect.jvm.internal.impl.types.typeUtil.TypeUtilsKt;
import org.jetbrains.annotations.NotNull;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public final class ErrorUtils {
    @NotNull
    public static final ErrorUtils INSTANCE = new ErrorUtils();

    /* renamed from: a  reason: collision with root package name */
    private static final ModuleDescriptor f34703a = ErrorModuleDescriptor.INSTANCE;

    /* renamed from: b  reason: collision with root package name */
    private static final ErrorClassDescriptor f34704b;

    /* renamed from: c  reason: collision with root package name */
    private static final KotlinType f34705c;

    /* renamed from: d  reason: collision with root package name */
    private static final KotlinType f34706d;

    /* renamed from: e  reason: collision with root package name */
    private static final PropertyDescriptor f34707e;

    /* renamed from: f  reason: collision with root package name */
    private static final Set f34708f;

    static {
        String format = String.format(ErrorEntity.ERROR_CLASS.getDebugText(), Arrays.copyOf(new Object[]{"unknown class"}, 1));
        Intrinsics.checkNotNullExpressionValue(format, "format(...)");
        Name special = Name.special(format);
        Intrinsics.checkNotNullExpressionValue(special, "special(...)");
        f34704b = new ErrorClassDescriptor(special);
        f34705c = createErrorType(ErrorTypeKind.CYCLIC_SUPERTYPES, new String[0]);
        f34706d = createErrorType(ErrorTypeKind.ERROR_PROPERTY_TYPE, new String[0]);
        ErrorPropertyDescriptor errorPropertyDescriptor = new ErrorPropertyDescriptor();
        f34707e = errorPropertyDescriptor;
        f34708f = x0.c(errorPropertyDescriptor);
    }

    private ErrorUtils() {
    }

    private final boolean a(DeclarationDescriptor declarationDescriptor) {
        return declarationDescriptor instanceof ErrorClassDescriptor;
    }

    @NotNull
    public static final ErrorScope createErrorScope(@NotNull ErrorScopeKind kind, @NotNull String... formatParams) {
        Intrinsics.checkNotNullParameter(kind, "kind");
        Intrinsics.checkNotNullParameter(formatParams, "formatParams");
        return createErrorScope(kind, false, (String[]) Arrays.copyOf(formatParams, formatParams.length));
    }

    @NotNull
    public static final ErrorType createErrorType(@NotNull ErrorTypeKind kind, @NotNull String... formatParams) {
        Intrinsics.checkNotNullParameter(kind, "kind");
        Intrinsics.checkNotNullParameter(formatParams, "formatParams");
        return INSTANCE.createErrorTypeWithArguments(kind, CollectionsKt.l(), (String[]) Arrays.copyOf(formatParams, formatParams.length));
    }

    public static final boolean isError(DeclarationDescriptor declarationDescriptor) {
        if (declarationDescriptor != null) {
            ErrorUtils errorUtils = INSTANCE;
            if (errorUtils.a(declarationDescriptor) || errorUtils.a(declarationDescriptor.getContainingDeclaration()) || declarationDescriptor == f34703a) {
                return true;
            }
            return false;
        }
        return false;
    }

    public static final boolean isUninferredTypeVariable(KotlinType kotlinType) {
        if (kotlinType == null) {
            return false;
        }
        TypeConstructor constructor = kotlinType.getConstructor();
        if (!(constructor instanceof ErrorTypeConstructor) || ((ErrorTypeConstructor) constructor).getKind() != ErrorTypeKind.UNINFERRED_TYPE_VARIABLE) {
            return false;
        }
        return true;
    }

    @NotNull
    public final ErrorTypeConstructor createErrorTypeConstructor(@NotNull ErrorTypeKind kind, @NotNull String... formatParams) {
        Intrinsics.checkNotNullParameter(kind, "kind");
        Intrinsics.checkNotNullParameter(formatParams, "formatParams");
        return new ErrorTypeConstructor(kind, (String[]) Arrays.copyOf(formatParams, formatParams.length));
    }

    @NotNull
    public final ErrorType createErrorTypeWithArguments(@NotNull ErrorTypeKind kind, @NotNull List<? extends TypeProjection> arguments, @NotNull String... formatParams) {
        Intrinsics.checkNotNullParameter(kind, "kind");
        Intrinsics.checkNotNullParameter(arguments, "arguments");
        Intrinsics.checkNotNullParameter(formatParams, "formatParams");
        return createErrorTypeWithArguments(kind, arguments, createErrorTypeConstructor(kind, (String[]) Arrays.copyOf(formatParams, formatParams.length)), (String[]) Arrays.copyOf(formatParams, formatParams.length));
    }

    @NotNull
    public final ErrorClassDescriptor getErrorClass() {
        return f34704b;
    }

    @NotNull
    public final ModuleDescriptor getErrorModule() {
        return f34703a;
    }

    @NotNull
    public final Set<PropertyDescriptor> getErrorPropertyGroup() {
        return f34708f;
    }

    @NotNull
    public final KotlinType getErrorPropertyType() {
        return f34706d;
    }

    @NotNull
    public final KotlinType getErrorTypeForLoopInSupertypes() {
        return f34705c;
    }

    @NotNull
    public final String unresolvedTypeAsItIs(@NotNull KotlinType type) {
        Intrinsics.checkNotNullParameter(type, "type");
        TypeUtilsKt.isUnresolvedType(type);
        TypeConstructor constructor = type.getConstructor();
        Intrinsics.checkNotNull(constructor, "null cannot be cast to non-null type org.jetbrains.kotlin.types.error.ErrorTypeConstructor");
        return ((ErrorTypeConstructor) constructor).getParam(0);
    }

    @NotNull
    public static final ErrorScope createErrorScope(@NotNull ErrorScopeKind kind, boolean z10, @NotNull String... formatParams) {
        Intrinsics.checkNotNullParameter(kind, "kind");
        Intrinsics.checkNotNullParameter(formatParams, "formatParams");
        return z10 ? new ThrowingScope(kind, (String[]) Arrays.copyOf(formatParams, formatParams.length)) : new ErrorScope(kind, (String[]) Arrays.copyOf(formatParams, formatParams.length));
    }

    @NotNull
    public final ErrorType createErrorType(@NotNull ErrorTypeKind kind, @NotNull TypeConstructor typeConstructor, @NotNull String... formatParams) {
        Intrinsics.checkNotNullParameter(kind, "kind");
        Intrinsics.checkNotNullParameter(typeConstructor, "typeConstructor");
        Intrinsics.checkNotNullParameter(formatParams, "formatParams");
        return createErrorTypeWithArguments(kind, CollectionsKt.l(), typeConstructor, (String[]) Arrays.copyOf(formatParams, formatParams.length));
    }

    @NotNull
    public final ErrorType createErrorTypeWithArguments(@NotNull ErrorTypeKind kind, @NotNull List<? extends TypeProjection> arguments, @NotNull TypeConstructor typeConstructor, @NotNull String... formatParams) {
        Intrinsics.checkNotNullParameter(kind, "kind");
        Intrinsics.checkNotNullParameter(arguments, "arguments");
        Intrinsics.checkNotNullParameter(typeConstructor, "typeConstructor");
        Intrinsics.checkNotNullParameter(formatParams, "formatParams");
        return new ErrorType(typeConstructor, createErrorScope(ErrorScopeKind.ERROR_TYPE_SCOPE, typeConstructor.toString()), kind, arguments, false, (String[]) Arrays.copyOf(formatParams, formatParams.length));
    }
}

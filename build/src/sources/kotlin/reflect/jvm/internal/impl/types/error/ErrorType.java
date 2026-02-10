package kotlin.reflect.jvm.internal.impl.types.error;

import java.util.Arrays;
import java.util.List;
import kotlin.collections.CollectionsKt;
import kotlin.jvm.internal.DefaultConstructorMarker;
import kotlin.jvm.internal.Intrinsics;
import kotlin.jvm.internal.StringCompanionObject;
import kotlin.reflect.jvm.internal.impl.resolve.scopes.MemberScope;
import kotlin.reflect.jvm.internal.impl.types.SimpleType;
import kotlin.reflect.jvm.internal.impl.types.TypeAttributes;
import kotlin.reflect.jvm.internal.impl.types.TypeConstructor;
import kotlin.reflect.jvm.internal.impl.types.TypeProjection;
import kotlin.reflect.jvm.internal.impl.types.checker.KotlinTypeRefiner;
import org.jetbrains.annotations.NotNull;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public final class ErrorType extends SimpleType {

    /* renamed from: e  reason: collision with root package name */
    private final TypeConstructor f34466e;

    /* renamed from: i  reason: collision with root package name */
    private final MemberScope f34467i;

    /* renamed from: o  reason: collision with root package name */
    private final ErrorTypeKind f34468o;

    /* renamed from: p  reason: collision with root package name */
    private final List f34469p;

    /* renamed from: q  reason: collision with root package name */
    private final boolean f34470q;

    /* renamed from: r  reason: collision with root package name */
    private final String[] f34471r;

    /* renamed from: s  reason: collision with root package name */
    private final String f34472s;

    public /* synthetic */ ErrorType(TypeConstructor typeConstructor, MemberScope memberScope, ErrorTypeKind errorTypeKind, List list, boolean z10, String[] strArr, int i10, DefaultConstructorMarker defaultConstructorMarker) {
        this(typeConstructor, memberScope, errorTypeKind, (i10 & 8) != 0 ? CollectionsKt.l() : list, (i10 & 16) != 0 ? false : z10, strArr);
    }

    @Override // kotlin.reflect.jvm.internal.impl.types.KotlinType
    @NotNull
    public List<TypeProjection> getArguments() {
        return this.f34469p;
    }

    @Override // kotlin.reflect.jvm.internal.impl.types.KotlinType
    @NotNull
    public TypeAttributes getAttributes() {
        return TypeAttributes.Companion.getEmpty();
    }

    @Override // kotlin.reflect.jvm.internal.impl.types.KotlinType
    @NotNull
    public TypeConstructor getConstructor() {
        return this.f34466e;
    }

    @NotNull
    public final String getDebugMessage() {
        return this.f34472s;
    }

    @NotNull
    public final ErrorTypeKind getKind() {
        return this.f34468o;
    }

    @Override // kotlin.reflect.jvm.internal.impl.types.KotlinType
    @NotNull
    public MemberScope getMemberScope() {
        return this.f34467i;
    }

    @Override // kotlin.reflect.jvm.internal.impl.types.KotlinType
    public boolean isMarkedNullable() {
        return this.f34470q;
    }

    @Override // kotlin.reflect.jvm.internal.impl.types.UnwrappedType, kotlin.reflect.jvm.internal.impl.types.KotlinType
    @NotNull
    public ErrorType refine(@NotNull KotlinTypeRefiner kotlinTypeRefiner) {
        Intrinsics.checkNotNullParameter(kotlinTypeRefiner, "kotlinTypeRefiner");
        return this;
    }

    @NotNull
    public final ErrorType replaceArguments(@NotNull List<? extends TypeProjection> newArguments) {
        Intrinsics.checkNotNullParameter(newArguments, "newArguments");
        TypeConstructor constructor = getConstructor();
        MemberScope memberScope = getMemberScope();
        ErrorTypeKind errorTypeKind = this.f34468o;
        boolean isMarkedNullable = isMarkedNullable();
        String[] strArr = this.f34471r;
        return new ErrorType(constructor, memberScope, errorTypeKind, newArguments, isMarkedNullable, (String[]) Arrays.copyOf(strArr, strArr.length));
    }

    @Override // kotlin.reflect.jvm.internal.impl.types.UnwrappedType
    @NotNull
    public SimpleType replaceAttributes(@NotNull TypeAttributes newAttributes) {
        Intrinsics.checkNotNullParameter(newAttributes, "newAttributes");
        return this;
    }

    @Override // kotlin.reflect.jvm.internal.impl.types.UnwrappedType
    @NotNull
    public SimpleType makeNullableAsSpecified(boolean z10) {
        TypeConstructor constructor = getConstructor();
        MemberScope memberScope = getMemberScope();
        ErrorTypeKind errorTypeKind = this.f34468o;
        List<TypeProjection> arguments = getArguments();
        String[] strArr = this.f34471r;
        return new ErrorType(constructor, memberScope, errorTypeKind, arguments, z10, (String[]) Arrays.copyOf(strArr, strArr.length));
    }

    public ErrorType(@NotNull TypeConstructor constructor, @NotNull MemberScope memberScope, @NotNull ErrorTypeKind kind, @NotNull List<? extends TypeProjection> arguments, boolean z10, @NotNull String... formatParams) {
        Intrinsics.checkNotNullParameter(constructor, "constructor");
        Intrinsics.checkNotNullParameter(memberScope, "memberScope");
        Intrinsics.checkNotNullParameter(kind, "kind");
        Intrinsics.checkNotNullParameter(arguments, "arguments");
        Intrinsics.checkNotNullParameter(formatParams, "formatParams");
        this.f34466e = constructor;
        this.f34467i = memberScope;
        this.f34468o = kind;
        this.f34469p = arguments;
        this.f34470q = z10;
        this.f34471r = formatParams;
        StringCompanionObject stringCompanionObject = StringCompanionObject.INSTANCE;
        String debugMessage = kind.getDebugMessage();
        Object[] copyOf = Arrays.copyOf(formatParams, formatParams.length);
        String format = String.format(debugMessage, Arrays.copyOf(copyOf, copyOf.length));
        Intrinsics.checkNotNullExpressionValue(format, "format(...)");
        this.f34472s = format;
    }
}

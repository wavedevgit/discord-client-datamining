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
    private final TypeConstructor f35257e;

    /* renamed from: i  reason: collision with root package name */
    private final MemberScope f35258i;

    /* renamed from: o  reason: collision with root package name */
    private final ErrorTypeKind f35259o;

    /* renamed from: p  reason: collision with root package name */
    private final List f35260p;

    /* renamed from: q  reason: collision with root package name */
    private final boolean f35261q;

    /* renamed from: r  reason: collision with root package name */
    private final String[] f35262r;

    /* renamed from: s  reason: collision with root package name */
    private final String f35263s;

    public /* synthetic */ ErrorType(TypeConstructor typeConstructor, MemberScope memberScope, ErrorTypeKind errorTypeKind, List list, boolean z10, String[] strArr, int i10, DefaultConstructorMarker defaultConstructorMarker) {
        this(typeConstructor, memberScope, errorTypeKind, (i10 & 8) != 0 ? CollectionsKt.l() : list, (i10 & 16) != 0 ? false : z10, strArr);
    }

    @Override // kotlin.reflect.jvm.internal.impl.types.KotlinType
    @NotNull
    public List<TypeProjection> getArguments() {
        return this.f35260p;
    }

    @Override // kotlin.reflect.jvm.internal.impl.types.KotlinType
    @NotNull
    public TypeAttributes getAttributes() {
        return TypeAttributes.Companion.getEmpty();
    }

    @Override // kotlin.reflect.jvm.internal.impl.types.KotlinType
    @NotNull
    public TypeConstructor getConstructor() {
        return this.f35257e;
    }

    @NotNull
    public final String getDebugMessage() {
        return this.f35263s;
    }

    @NotNull
    public final ErrorTypeKind getKind() {
        return this.f35259o;
    }

    @Override // kotlin.reflect.jvm.internal.impl.types.KotlinType
    @NotNull
    public MemberScope getMemberScope() {
        return this.f35258i;
    }

    @Override // kotlin.reflect.jvm.internal.impl.types.KotlinType
    public boolean isMarkedNullable() {
        return this.f35261q;
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
        ErrorTypeKind errorTypeKind = this.f35259o;
        boolean isMarkedNullable = isMarkedNullable();
        String[] strArr = this.f35262r;
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
        ErrorTypeKind errorTypeKind = this.f35259o;
        List<TypeProjection> arguments = getArguments();
        String[] strArr = this.f35262r;
        return new ErrorType(constructor, memberScope, errorTypeKind, arguments, z10, (String[]) Arrays.copyOf(strArr, strArr.length));
    }

    public ErrorType(@NotNull TypeConstructor constructor, @NotNull MemberScope memberScope, @NotNull ErrorTypeKind kind, @NotNull List<? extends TypeProjection> arguments, boolean z10, @NotNull String... formatParams) {
        Intrinsics.checkNotNullParameter(constructor, "constructor");
        Intrinsics.checkNotNullParameter(memberScope, "memberScope");
        Intrinsics.checkNotNullParameter(kind, "kind");
        Intrinsics.checkNotNullParameter(arguments, "arguments");
        Intrinsics.checkNotNullParameter(formatParams, "formatParams");
        this.f35257e = constructor;
        this.f35258i = memberScope;
        this.f35259o = kind;
        this.f35260p = arguments;
        this.f35261q = z10;
        this.f35262r = formatParams;
        StringCompanionObject stringCompanionObject = StringCompanionObject.INSTANCE;
        String debugMessage = kind.getDebugMessage();
        Object[] copyOf = Arrays.copyOf(formatParams, formatParams.length);
        String format = String.format(debugMessage, Arrays.copyOf(copyOf, copyOf.length));
        Intrinsics.checkNotNullExpressionValue(format, "format(...)");
        this.f35263s = format;
    }
}

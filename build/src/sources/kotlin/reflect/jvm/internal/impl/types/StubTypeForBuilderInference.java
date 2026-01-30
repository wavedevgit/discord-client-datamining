package kotlin.reflect.jvm.internal.impl.types;

import kotlin.jvm.internal.Intrinsics;
import kotlin.reflect.jvm.internal.impl.resolve.scopes.MemberScope;
import kotlin.reflect.jvm.internal.impl.types.checker.NewTypeVariableConstructor;
import kotlin.reflect.jvm.internal.impl.types.model.StubTypeMarker;
import org.jetbrains.annotations.NotNull;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public final class StubTypeForBuilderInference extends AbstractStubType implements StubTypeMarker {

    /* renamed from: p  reason: collision with root package name */
    private final TypeConstructor f35884p;

    /* renamed from: q  reason: collision with root package name */
    private final MemberScope f35885q;

    /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
    public StubTypeForBuilderInference(@NotNull NewTypeVariableConstructor originalTypeVariable, boolean z10, @NotNull TypeConstructor constructor) {
        super(originalTypeVariable, z10);
        Intrinsics.checkNotNullParameter(originalTypeVariable, "originalTypeVariable");
        Intrinsics.checkNotNullParameter(constructor, "constructor");
        this.f35884p = constructor;
        this.f35885q = originalTypeVariable.getBuiltIns().getAnyType().getMemberScope();
    }

    @Override // kotlin.reflect.jvm.internal.impl.types.KotlinType
    @NotNull
    public TypeConstructor getConstructor() {
        return this.f35884p;
    }

    @Override // kotlin.reflect.jvm.internal.impl.types.AbstractStubType, kotlin.reflect.jvm.internal.impl.types.KotlinType
    @NotNull
    public MemberScope getMemberScope() {
        return this.f35885q;
    }

    @Override // kotlin.reflect.jvm.internal.impl.types.AbstractStubType
    @NotNull
    public AbstractStubType materialize(boolean z10) {
        return new StubTypeForBuilderInference(getOriginalTypeVariable(), z10, getConstructor());
    }

    @Override // kotlin.reflect.jvm.internal.impl.types.SimpleType
    @NotNull
    public String toString() {
        String str;
        StringBuilder sb2 = new StringBuilder();
        sb2.append("Stub (BI): ");
        sb2.append(getOriginalTypeVariable());
        if (isMarkedNullable()) {
            str = "?";
        } else {
            str = "";
        }
        sb2.append(str);
        return sb2.toString();
    }
}

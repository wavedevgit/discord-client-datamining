package kotlin.reflect.jvm.internal.impl.types;

import java.util.List;
import kotlin.jvm.functions.Function1;
import kotlin.jvm.internal.Intrinsics;
import kotlin.reflect.jvm.internal.impl.resolve.scopes.MemberScope;
import kotlin.reflect.jvm.internal.impl.types.checker.KotlinTypeRefiner;
import kotlin.reflect.jvm.internal.impl.types.error.ErrorScope;
import kotlin.reflect.jvm.internal.impl.types.error.ThrowingScope;
/* JADX INFO: Access modifiers changed from: package-private */
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public final class s extends SimpleType {

    /* renamed from: e  reason: collision with root package name */
    private final TypeConstructor f35212e;

    /* renamed from: i  reason: collision with root package name */
    private final List f35213i;

    /* renamed from: o  reason: collision with root package name */
    private final boolean f35214o;

    /* renamed from: p  reason: collision with root package name */
    private final MemberScope f35215p;

    /* renamed from: q  reason: collision with root package name */
    private final Function1 f35216q;

    public s(TypeConstructor constructor, List arguments, boolean z10, MemberScope memberScope, Function1 refinedTypeFactory) {
        Intrinsics.checkNotNullParameter(constructor, "constructor");
        Intrinsics.checkNotNullParameter(arguments, "arguments");
        Intrinsics.checkNotNullParameter(memberScope, "memberScope");
        Intrinsics.checkNotNullParameter(refinedTypeFactory, "refinedTypeFactory");
        this.f35212e = constructor;
        this.f35213i = arguments;
        this.f35214o = z10;
        this.f35215p = memberScope;
        this.f35216q = refinedTypeFactory;
        if ((getMemberScope() instanceof ErrorScope) && !(getMemberScope() instanceof ThrowingScope)) {
            throw new IllegalStateException("SimpleTypeImpl should not be created for error type: " + getMemberScope() + '\n' + getConstructor());
        }
    }

    @Override // kotlin.reflect.jvm.internal.impl.types.KotlinType
    public List getArguments() {
        return this.f35213i;
    }

    @Override // kotlin.reflect.jvm.internal.impl.types.KotlinType
    public TypeAttributes getAttributes() {
        return TypeAttributes.Companion.getEmpty();
    }

    @Override // kotlin.reflect.jvm.internal.impl.types.KotlinType
    public TypeConstructor getConstructor() {
        return this.f35212e;
    }

    @Override // kotlin.reflect.jvm.internal.impl.types.KotlinType
    public MemberScope getMemberScope() {
        return this.f35215p;
    }

    @Override // kotlin.reflect.jvm.internal.impl.types.KotlinType
    public boolean isMarkedNullable() {
        return this.f35214o;
    }

    @Override // kotlin.reflect.jvm.internal.impl.types.UnwrappedType
    public SimpleType makeNullableAsSpecified(boolean z10) {
        if (z10 == isMarkedNullable()) {
            return this;
        }
        if (z10) {
            return new r(this);
        }
        return new q(this);
    }

    @Override // kotlin.reflect.jvm.internal.impl.types.UnwrappedType
    public SimpleType replaceAttributes(TypeAttributes newAttributes) {
        Intrinsics.checkNotNullParameter(newAttributes, "newAttributes");
        return newAttributes.isEmpty() ? this : new t(this, newAttributes);
    }

    @Override // kotlin.reflect.jvm.internal.impl.types.UnwrappedType, kotlin.reflect.jvm.internal.impl.types.KotlinType
    public SimpleType refine(KotlinTypeRefiner kotlinTypeRefiner) {
        Intrinsics.checkNotNullParameter(kotlinTypeRefiner, "kotlinTypeRefiner");
        SimpleType simpleType = (SimpleType) this.f35216q.invoke(kotlinTypeRefiner);
        return simpleType == null ? this : simpleType;
    }
}

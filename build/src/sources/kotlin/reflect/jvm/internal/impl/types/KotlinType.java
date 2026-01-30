package kotlin.reflect.jvm.internal.impl.types;

import java.util.List;
import kotlin.jvm.internal.DefaultConstructorMarker;
import kotlin.reflect.jvm.internal.impl.descriptors.annotations.Annotated;
import kotlin.reflect.jvm.internal.impl.descriptors.annotations.Annotations;
import kotlin.reflect.jvm.internal.impl.resolve.scopes.MemberScope;
import kotlin.reflect.jvm.internal.impl.types.checker.KotlinTypeRefiner;
import kotlin.reflect.jvm.internal.impl.types.checker.StrictEqualityTypeChecker;
import kotlin.reflect.jvm.internal.impl.types.model.KotlinTypeMarker;
import org.jetbrains.annotations.NotNull;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public abstract class KotlinType implements Annotated, KotlinTypeMarker {

    /* renamed from: d  reason: collision with root package name */
    private int f35870d;

    public /* synthetic */ KotlinType(DefaultConstructorMarker defaultConstructorMarker) {
        this();
    }

    private final int a() {
        if (KotlinTypeKt.isError(this)) {
            return super.hashCode();
        }
        return (((getConstructor().hashCode() * 31) + getArguments().hashCode()) * 31) + (isMarkedNullable() ? 1 : 0);
    }

    public final boolean equals(Object obj) {
        if (this == obj) {
            return true;
        }
        if (!(obj instanceof KotlinType)) {
            return false;
        }
        KotlinType kotlinType = (KotlinType) obj;
        if (isMarkedNullable() == kotlinType.isMarkedNullable() && StrictEqualityTypeChecker.INSTANCE.strictEqualTypes(unwrap(), kotlinType.unwrap())) {
            return true;
        }
        return false;
    }

    @Override // kotlin.reflect.jvm.internal.impl.descriptors.annotations.Annotated
    @NotNull
    public Annotations getAnnotations() {
        return AnnotationsTypeAttributeKt.getAnnotations(getAttributes());
    }

    @NotNull
    public abstract List<TypeProjection> getArguments();

    @NotNull
    public abstract TypeAttributes getAttributes();

    @NotNull
    public abstract TypeConstructor getConstructor();

    @NotNull
    public abstract MemberScope getMemberScope();

    public final int hashCode() {
        int i10 = this.f35870d;
        if (i10 != 0) {
            return i10;
        }
        int a10 = a();
        this.f35870d = a10;
        return a10;
    }

    public abstract boolean isMarkedNullable();

    @NotNull
    public abstract KotlinType refine(@NotNull KotlinTypeRefiner kotlinTypeRefiner);

    @NotNull
    public abstract UnwrappedType unwrap();

    private KotlinType() {
    }
}

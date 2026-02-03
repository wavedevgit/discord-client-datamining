package kotlin.reflect.jvm.internal.impl.types;

import java.util.Set;
import kotlin.collections.x0;
import kotlin.jvm.internal.Intrinsics;
import kotlin.jvm.internal.SourceDebugExtension;
import kotlin.reflect.jvm.internal.impl.descriptors.TypeParameterDescriptor;
import org.jetbrains.annotations.NotNull;
@SourceDebugExtension({"SMAP\nErasureTypeAttributes.kt\nKotlin\n*S Kotlin\n*F\n+ 1 ErasureTypeAttributes.kt\norg/jetbrains/kotlin/types/ErasureTypeAttributes\n+ 2 fake.kt\nkotlin/jvm/internal/FakeKt\n*L\n1#1,35:1\n1#2:36\n*E\n"})
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public class ErasureTypeAttributes {

    /* renamed from: a  reason: collision with root package name */
    private final TypeUsage f35021a;

    /* renamed from: b  reason: collision with root package name */
    private final Set f35022b;

    /* renamed from: c  reason: collision with root package name */
    private final SimpleType f35023c;

    public ErasureTypeAttributes(@NotNull TypeUsage howThisTypeIsUsed, Set<? extends TypeParameterDescriptor> set, SimpleType simpleType) {
        Intrinsics.checkNotNullParameter(howThisTypeIsUsed, "howThisTypeIsUsed");
        this.f35021a = howThisTypeIsUsed;
        this.f35022b = set;
        this.f35023c = simpleType;
    }

    public boolean equals(Object obj) {
        if (!(obj instanceof ErasureTypeAttributes)) {
            return false;
        }
        ErasureTypeAttributes erasureTypeAttributes = (ErasureTypeAttributes) obj;
        if (!Intrinsics.areEqual(erasureTypeAttributes.getDefaultType(), getDefaultType()) || erasureTypeAttributes.getHowThisTypeIsUsed() != getHowThisTypeIsUsed()) {
            return false;
        }
        return true;
    }

    public SimpleType getDefaultType() {
        return this.f35023c;
    }

    @NotNull
    public TypeUsage getHowThisTypeIsUsed() {
        return this.f35021a;
    }

    public Set<TypeParameterDescriptor> getVisitedTypeParameters() {
        return this.f35022b;
    }

    public int hashCode() {
        int i10;
        SimpleType defaultType = getDefaultType();
        if (defaultType != null) {
            i10 = defaultType.hashCode();
        } else {
            i10 = 0;
        }
        return i10 + (i10 * 31) + getHowThisTypeIsUsed().hashCode();
    }

    @NotNull
    public ErasureTypeAttributes withNewVisitedTypeParameter(@NotNull TypeParameterDescriptor typeParameter) {
        Set c10;
        Intrinsics.checkNotNullParameter(typeParameter, "typeParameter");
        TypeUsage howThisTypeIsUsed = getHowThisTypeIsUsed();
        Set<TypeParameterDescriptor> visitedTypeParameters = getVisitedTypeParameters();
        if (visitedTypeParameters == null || (c10 = x0.m(visitedTypeParameters, typeParameter)) == null) {
            c10 = x0.c(typeParameter);
        }
        return new ErasureTypeAttributes(howThisTypeIsUsed, c10, getDefaultType());
    }
}

package kotlin.reflect.jvm.internal.impl.load.java.lazy.types;

import java.util.Set;
import kotlin.collections.x0;
import kotlin.jvm.internal.DefaultConstructorMarker;
import kotlin.jvm.internal.Intrinsics;
import kotlin.reflect.jvm.internal.impl.descriptors.TypeParameterDescriptor;
import kotlin.reflect.jvm.internal.impl.types.ErasureTypeAttributes;
import kotlin.reflect.jvm.internal.impl.types.SimpleType;
import kotlin.reflect.jvm.internal.impl.types.TypeUsage;
import org.jetbrains.annotations.NotNull;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public final class JavaTypeAttributes extends ErasureTypeAttributes {

    /* renamed from: d  reason: collision with root package name */
    private final TypeUsage f33002d;

    /* renamed from: e  reason: collision with root package name */
    private final JavaTypeFlexibility f33003e;

    /* renamed from: f  reason: collision with root package name */
    private final boolean f33004f;

    /* renamed from: g  reason: collision with root package name */
    private final boolean f33005g;

    /* renamed from: h  reason: collision with root package name */
    private final Set f33006h;

    /* renamed from: i  reason: collision with root package name */
    private final SimpleType f33007i;

    public /* synthetic */ JavaTypeAttributes(TypeUsage typeUsage, JavaTypeFlexibility javaTypeFlexibility, boolean z10, boolean z11, Set set, SimpleType simpleType, int i10, DefaultConstructorMarker defaultConstructorMarker) {
        this(typeUsage, (i10 & 2) != 0 ? JavaTypeFlexibility.INFLEXIBLE : javaTypeFlexibility, (i10 & 4) != 0 ? false : z10, (i10 & 8) != 0 ? false : z11, (i10 & 16) != 0 ? null : set, (i10 & 32) != 0 ? null : simpleType);
    }

    public static /* synthetic */ JavaTypeAttributes copy$default(JavaTypeAttributes javaTypeAttributes, TypeUsage typeUsage, JavaTypeFlexibility javaTypeFlexibility, boolean z10, boolean z11, Set set, SimpleType simpleType, int i10, Object obj) {
        if ((i10 & 1) != 0) {
            typeUsage = javaTypeAttributes.f33002d;
        }
        if ((i10 & 2) != 0) {
            javaTypeFlexibility = javaTypeAttributes.f33003e;
        }
        if ((i10 & 4) != 0) {
            z10 = javaTypeAttributes.f33004f;
        }
        if ((i10 & 8) != 0) {
            z11 = javaTypeAttributes.f33005g;
        }
        Set set2 = set;
        if ((i10 & 16) != 0) {
            set2 = javaTypeAttributes.f33006h;
        }
        if ((i10 & 32) != 0) {
            simpleType = javaTypeAttributes.f33007i;
        }
        Set set3 = set2;
        SimpleType simpleType2 = simpleType;
        return javaTypeAttributes.copy(typeUsage, javaTypeFlexibility, z10, z11, set3, simpleType2);
    }

    @NotNull
    public final JavaTypeAttributes copy(@NotNull TypeUsage howThisTypeIsUsed, @NotNull JavaTypeFlexibility flexibility, boolean z10, boolean z11, Set<? extends TypeParameterDescriptor> set, SimpleType simpleType) {
        Intrinsics.checkNotNullParameter(howThisTypeIsUsed, "howThisTypeIsUsed");
        Intrinsics.checkNotNullParameter(flexibility, "flexibility");
        return new JavaTypeAttributes(howThisTypeIsUsed, flexibility, z10, z11, set, simpleType);
    }

    @Override // kotlin.reflect.jvm.internal.impl.types.ErasureTypeAttributes
    public boolean equals(Object obj) {
        if (!(obj instanceof JavaTypeAttributes)) {
            return false;
        }
        JavaTypeAttributes javaTypeAttributes = (JavaTypeAttributes) obj;
        if (!Intrinsics.areEqual(javaTypeAttributes.getDefaultType(), getDefaultType()) || javaTypeAttributes.getHowThisTypeIsUsed() != getHowThisTypeIsUsed() || javaTypeAttributes.f33003e != this.f33003e || javaTypeAttributes.f33004f != this.f33004f || javaTypeAttributes.f33005g != this.f33005g) {
            return false;
        }
        return true;
    }

    @Override // kotlin.reflect.jvm.internal.impl.types.ErasureTypeAttributes
    public SimpleType getDefaultType() {
        return this.f33007i;
    }

    @NotNull
    public final JavaTypeFlexibility getFlexibility() {
        return this.f33003e;
    }

    @Override // kotlin.reflect.jvm.internal.impl.types.ErasureTypeAttributes
    @NotNull
    public TypeUsage getHowThisTypeIsUsed() {
        return this.f33002d;
    }

    @Override // kotlin.reflect.jvm.internal.impl.types.ErasureTypeAttributes
    public Set<TypeParameterDescriptor> getVisitedTypeParameters() {
        return this.f33006h;
    }

    @Override // kotlin.reflect.jvm.internal.impl.types.ErasureTypeAttributes
    public int hashCode() {
        int i10;
        SimpleType defaultType = getDefaultType();
        if (defaultType != null) {
            i10 = defaultType.hashCode();
        } else {
            i10 = 0;
        }
        int hashCode = i10 + (i10 * 31) + getHowThisTypeIsUsed().hashCode();
        int hashCode2 = hashCode + (hashCode * 31) + this.f33003e.hashCode();
        int i11 = hashCode2 + (hashCode2 * 31) + (this.f33004f ? 1 : 0);
        return i11 + (i11 * 31) + (this.f33005g ? 1 : 0);
    }

    public final boolean isForAnnotationParameter() {
        return this.f33005g;
    }

    public final boolean isRaw() {
        return this.f33004f;
    }

    @NotNull
    public final JavaTypeAttributes markIsRaw(boolean z10) {
        return copy$default(this, null, null, z10, false, null, null, 59, null);
    }

    @NotNull
    public String toString() {
        return "JavaTypeAttributes(howThisTypeIsUsed=" + this.f33002d + ", flexibility=" + this.f33003e + ", isRaw=" + this.f33004f + ", isForAnnotationParameter=" + this.f33005g + ", visitedTypeParameters=" + this.f33006h + ", defaultType=" + this.f33007i + ')';
    }

    @NotNull
    public JavaTypeAttributes withDefaultType(SimpleType simpleType) {
        return copy$default(this, null, null, false, false, null, simpleType, 31, null);
    }

    @NotNull
    public final JavaTypeAttributes withFlexibility(@NotNull JavaTypeFlexibility flexibility) {
        Intrinsics.checkNotNullParameter(flexibility, "flexibility");
        return copy$default(this, null, flexibility, false, false, null, null, 61, null);
    }

    @Override // kotlin.reflect.jvm.internal.impl.types.ErasureTypeAttributes
    @NotNull
    public JavaTypeAttributes withNewVisitedTypeParameter(@NotNull TypeParameterDescriptor typeParameter) {
        Intrinsics.checkNotNullParameter(typeParameter, "typeParameter");
        return copy$default(this, null, null, false, false, getVisitedTypeParameters() != null ? x0.m(getVisitedTypeParameters(), typeParameter) : x0.c(typeParameter), null, 47, null);
    }

    /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
    public JavaTypeAttributes(@NotNull TypeUsage howThisTypeIsUsed, @NotNull JavaTypeFlexibility flexibility, boolean z10, boolean z11, Set<? extends TypeParameterDescriptor> set, SimpleType simpleType) {
        super(howThisTypeIsUsed, set, simpleType);
        Intrinsics.checkNotNullParameter(howThisTypeIsUsed, "howThisTypeIsUsed");
        Intrinsics.checkNotNullParameter(flexibility, "flexibility");
        this.f33002d = howThisTypeIsUsed;
        this.f33003e = flexibility;
        this.f33004f = z10;
        this.f33005g = z11;
        this.f33006h = set;
        this.f33007i = simpleType;
    }
}

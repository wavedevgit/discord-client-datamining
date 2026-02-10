package kotlin.reflect.jvm.internal.impl.load.java;

import java.util.Collection;
import kotlin.jvm.internal.DefaultConstructorMarker;
import kotlin.jvm.internal.Intrinsics;
import kotlin.reflect.jvm.internal.impl.load.java.typeEnhancement.NullabilityQualifier;
import kotlin.reflect.jvm.internal.impl.load.java.typeEnhancement.NullabilityQualifierWithMigrationStatus;
import org.jetbrains.annotations.NotNull;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public final class JavaDefaultQualifiers {

    /* renamed from: a  reason: collision with root package name */
    private final NullabilityQualifierWithMigrationStatus f32455a;

    /* renamed from: b  reason: collision with root package name */
    private final Collection f32456b;

    /* renamed from: c  reason: collision with root package name */
    private final boolean f32457c;

    public JavaDefaultQualifiers(@NotNull NullabilityQualifierWithMigrationStatus nullabilityQualifier, @NotNull Collection<? extends AnnotationQualifierApplicabilityType> qualifierApplicabilityTypes, boolean z10) {
        Intrinsics.checkNotNullParameter(nullabilityQualifier, "nullabilityQualifier");
        Intrinsics.checkNotNullParameter(qualifierApplicabilityTypes, "qualifierApplicabilityTypes");
        this.f32455a = nullabilityQualifier;
        this.f32456b = qualifierApplicabilityTypes;
        this.f32457c = z10;
    }

    /* JADX WARN: Multi-variable type inference failed */
    public static /* synthetic */ JavaDefaultQualifiers copy$default(JavaDefaultQualifiers javaDefaultQualifiers, NullabilityQualifierWithMigrationStatus nullabilityQualifierWithMigrationStatus, Collection collection, boolean z10, int i10, Object obj) {
        if ((i10 & 1) != 0) {
            nullabilityQualifierWithMigrationStatus = javaDefaultQualifiers.f32455a;
        }
        if ((i10 & 2) != 0) {
            collection = javaDefaultQualifiers.f32456b;
        }
        if ((i10 & 4) != 0) {
            z10 = javaDefaultQualifiers.f32457c;
        }
        return javaDefaultQualifiers.copy(nullabilityQualifierWithMigrationStatus, collection, z10);
    }

    @NotNull
    public final JavaDefaultQualifiers copy(@NotNull NullabilityQualifierWithMigrationStatus nullabilityQualifier, @NotNull Collection<? extends AnnotationQualifierApplicabilityType> qualifierApplicabilityTypes, boolean z10) {
        Intrinsics.checkNotNullParameter(nullabilityQualifier, "nullabilityQualifier");
        Intrinsics.checkNotNullParameter(qualifierApplicabilityTypes, "qualifierApplicabilityTypes");
        return new JavaDefaultQualifiers(nullabilityQualifier, qualifierApplicabilityTypes, z10);
    }

    public boolean equals(Object obj) {
        if (this == obj) {
            return true;
        }
        if (obj instanceof JavaDefaultQualifiers) {
            JavaDefaultQualifiers javaDefaultQualifiers = (JavaDefaultQualifiers) obj;
            return Intrinsics.areEqual(this.f32455a, javaDefaultQualifiers.f32455a) && Intrinsics.areEqual(this.f32456b, javaDefaultQualifiers.f32456b) && this.f32457c == javaDefaultQualifiers.f32457c;
        }
        return false;
    }

    public final boolean getDefinitelyNotNull() {
        return this.f32457c;
    }

    @NotNull
    public final NullabilityQualifierWithMigrationStatus getNullabilityQualifier() {
        return this.f32455a;
    }

    @NotNull
    public final Collection<AnnotationQualifierApplicabilityType> getQualifierApplicabilityTypes() {
        return this.f32456b;
    }

    public int hashCode() {
        return (((this.f32455a.hashCode() * 31) + this.f32456b.hashCode()) * 31) + Boolean.hashCode(this.f32457c);
    }

    @NotNull
    public String toString() {
        return "JavaDefaultQualifiers(nullabilityQualifier=" + this.f32455a + ", qualifierApplicabilityTypes=" + this.f32456b + ", definitelyNotNull=" + this.f32457c + ')';
    }

    public /* synthetic */ JavaDefaultQualifiers(NullabilityQualifierWithMigrationStatus nullabilityQualifierWithMigrationStatus, Collection collection, boolean z10, int i10, DefaultConstructorMarker defaultConstructorMarker) {
        this(nullabilityQualifierWithMigrationStatus, collection, (i10 & 4) != 0 ? nullabilityQualifierWithMigrationStatus.getQualifier() == NullabilityQualifier.NOT_NULL : z10);
    }
}

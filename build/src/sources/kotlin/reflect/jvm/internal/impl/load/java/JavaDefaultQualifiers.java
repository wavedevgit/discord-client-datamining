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
    private final NullabilityQualifierWithMigrationStatus f33154a;

    /* renamed from: b  reason: collision with root package name */
    private final Collection f33155b;

    /* renamed from: c  reason: collision with root package name */
    private final boolean f33156c;

    public JavaDefaultQualifiers(@NotNull NullabilityQualifierWithMigrationStatus nullabilityQualifier, @NotNull Collection<? extends AnnotationQualifierApplicabilityType> qualifierApplicabilityTypes, boolean z10) {
        Intrinsics.checkNotNullParameter(nullabilityQualifier, "nullabilityQualifier");
        Intrinsics.checkNotNullParameter(qualifierApplicabilityTypes, "qualifierApplicabilityTypes");
        this.f33154a = nullabilityQualifier;
        this.f33155b = qualifierApplicabilityTypes;
        this.f33156c = z10;
    }

    /* JADX WARN: Multi-variable type inference failed */
    public static /* synthetic */ JavaDefaultQualifiers copy$default(JavaDefaultQualifiers javaDefaultQualifiers, NullabilityQualifierWithMigrationStatus nullabilityQualifierWithMigrationStatus, Collection collection, boolean z10, int i10, Object obj) {
        if ((i10 & 1) != 0) {
            nullabilityQualifierWithMigrationStatus = javaDefaultQualifiers.f33154a;
        }
        if ((i10 & 2) != 0) {
            collection = javaDefaultQualifiers.f33155b;
        }
        if ((i10 & 4) != 0) {
            z10 = javaDefaultQualifiers.f33156c;
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
            return Intrinsics.areEqual(this.f33154a, javaDefaultQualifiers.f33154a) && Intrinsics.areEqual(this.f33155b, javaDefaultQualifiers.f33155b) && this.f33156c == javaDefaultQualifiers.f33156c;
        }
        return false;
    }

    public final boolean getDefinitelyNotNull() {
        return this.f33156c;
    }

    @NotNull
    public final NullabilityQualifierWithMigrationStatus getNullabilityQualifier() {
        return this.f33154a;
    }

    @NotNull
    public final Collection<AnnotationQualifierApplicabilityType> getQualifierApplicabilityTypes() {
        return this.f33155b;
    }

    public int hashCode() {
        return (((this.f33154a.hashCode() * 31) + this.f33155b.hashCode()) * 31) + Boolean.hashCode(this.f33156c);
    }

    @NotNull
    public String toString() {
        return "JavaDefaultQualifiers(nullabilityQualifier=" + this.f33154a + ", qualifierApplicabilityTypes=" + this.f33155b + ", definitelyNotNull=" + this.f33156c + ')';
    }

    public /* synthetic */ JavaDefaultQualifiers(NullabilityQualifierWithMigrationStatus nullabilityQualifierWithMigrationStatus, Collection collection, boolean z10, int i10, DefaultConstructorMarker defaultConstructorMarker) {
        this(nullabilityQualifierWithMigrationStatus, collection, (i10 & 4) != 0 ? nullabilityQualifierWithMigrationStatus.getQualifier() == NullabilityQualifier.NOT_NULL : z10);
    }
}

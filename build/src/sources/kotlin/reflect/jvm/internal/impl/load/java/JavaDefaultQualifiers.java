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
    private final NullabilityQualifierWithMigrationStatus f33246a;

    /* renamed from: b  reason: collision with root package name */
    private final Collection f33247b;

    /* renamed from: c  reason: collision with root package name */
    private final boolean f33248c;

    public JavaDefaultQualifiers(@NotNull NullabilityQualifierWithMigrationStatus nullabilityQualifier, @NotNull Collection<? extends AnnotationQualifierApplicabilityType> qualifierApplicabilityTypes, boolean z10) {
        Intrinsics.checkNotNullParameter(nullabilityQualifier, "nullabilityQualifier");
        Intrinsics.checkNotNullParameter(qualifierApplicabilityTypes, "qualifierApplicabilityTypes");
        this.f33246a = nullabilityQualifier;
        this.f33247b = qualifierApplicabilityTypes;
        this.f33248c = z10;
    }

    /* JADX WARN: Multi-variable type inference failed */
    public static /* synthetic */ JavaDefaultQualifiers copy$default(JavaDefaultQualifiers javaDefaultQualifiers, NullabilityQualifierWithMigrationStatus nullabilityQualifierWithMigrationStatus, Collection collection, boolean z10, int i10, Object obj) {
        if ((i10 & 1) != 0) {
            nullabilityQualifierWithMigrationStatus = javaDefaultQualifiers.f33246a;
        }
        if ((i10 & 2) != 0) {
            collection = javaDefaultQualifiers.f33247b;
        }
        if ((i10 & 4) != 0) {
            z10 = javaDefaultQualifiers.f33248c;
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
            return Intrinsics.areEqual(this.f33246a, javaDefaultQualifiers.f33246a) && Intrinsics.areEqual(this.f33247b, javaDefaultQualifiers.f33247b) && this.f33248c == javaDefaultQualifiers.f33248c;
        }
        return false;
    }

    public final boolean getDefinitelyNotNull() {
        return this.f33248c;
    }

    @NotNull
    public final NullabilityQualifierWithMigrationStatus getNullabilityQualifier() {
        return this.f33246a;
    }

    @NotNull
    public final Collection<AnnotationQualifierApplicabilityType> getQualifierApplicabilityTypes() {
        return this.f33247b;
    }

    public int hashCode() {
        return (((this.f33246a.hashCode() * 31) + this.f33247b.hashCode()) * 31) + Boolean.hashCode(this.f33248c);
    }

    @NotNull
    public String toString() {
        return "JavaDefaultQualifiers(nullabilityQualifier=" + this.f33246a + ", qualifierApplicabilityTypes=" + this.f33247b + ", definitelyNotNull=" + this.f33248c + ')';
    }

    public /* synthetic */ JavaDefaultQualifiers(NullabilityQualifierWithMigrationStatus nullabilityQualifierWithMigrationStatus, Collection collection, boolean z10, int i10, DefaultConstructorMarker defaultConstructorMarker) {
        this(nullabilityQualifierWithMigrationStatus, collection, (i10 & 4) != 0 ? nullabilityQualifierWithMigrationStatus.getQualifier() == NullabilityQualifier.NOT_NULL : z10);
    }
}

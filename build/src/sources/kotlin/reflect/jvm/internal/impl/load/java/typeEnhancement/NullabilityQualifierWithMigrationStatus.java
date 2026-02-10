package kotlin.reflect.jvm.internal.impl.load.java.typeEnhancement;

import kotlin.jvm.internal.DefaultConstructorMarker;
import kotlin.jvm.internal.Intrinsics;
import org.jetbrains.annotations.NotNull;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public final class NullabilityQualifierWithMigrationStatus {

    /* renamed from: a  reason: collision with root package name */
    private final NullabilityQualifier f32827a;

    /* renamed from: b  reason: collision with root package name */
    private final boolean f32828b;

    public NullabilityQualifierWithMigrationStatus(@NotNull NullabilityQualifier qualifier, boolean z10) {
        Intrinsics.checkNotNullParameter(qualifier, "qualifier");
        this.f32827a = qualifier;
        this.f32828b = z10;
    }

    public static /* synthetic */ NullabilityQualifierWithMigrationStatus copy$default(NullabilityQualifierWithMigrationStatus nullabilityQualifierWithMigrationStatus, NullabilityQualifier nullabilityQualifier, boolean z10, int i10, Object obj) {
        if ((i10 & 1) != 0) {
            nullabilityQualifier = nullabilityQualifierWithMigrationStatus.f32827a;
        }
        if ((i10 & 2) != 0) {
            z10 = nullabilityQualifierWithMigrationStatus.f32828b;
        }
        return nullabilityQualifierWithMigrationStatus.copy(nullabilityQualifier, z10);
    }

    @NotNull
    public final NullabilityQualifierWithMigrationStatus copy(@NotNull NullabilityQualifier qualifier, boolean z10) {
        Intrinsics.checkNotNullParameter(qualifier, "qualifier");
        return new NullabilityQualifierWithMigrationStatus(qualifier, z10);
    }

    public boolean equals(Object obj) {
        if (this == obj) {
            return true;
        }
        if (obj instanceof NullabilityQualifierWithMigrationStatus) {
            NullabilityQualifierWithMigrationStatus nullabilityQualifierWithMigrationStatus = (NullabilityQualifierWithMigrationStatus) obj;
            return this.f32827a == nullabilityQualifierWithMigrationStatus.f32827a && this.f32828b == nullabilityQualifierWithMigrationStatus.f32828b;
        }
        return false;
    }

    @NotNull
    public final NullabilityQualifier getQualifier() {
        return this.f32827a;
    }

    public int hashCode() {
        return (this.f32827a.hashCode() * 31) + Boolean.hashCode(this.f32828b);
    }

    public final boolean isForWarningOnly() {
        return this.f32828b;
    }

    @NotNull
    public String toString() {
        return "NullabilityQualifierWithMigrationStatus(qualifier=" + this.f32827a + ", isForWarningOnly=" + this.f32828b + ')';
    }

    public /* synthetic */ NullabilityQualifierWithMigrationStatus(NullabilityQualifier nullabilityQualifier, boolean z10, int i10, DefaultConstructorMarker defaultConstructorMarker) {
        this(nullabilityQualifier, (i10 & 2) != 0 ? false : z10);
    }
}

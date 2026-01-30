package kotlin.reflect.jvm.internal.impl.load.java.typeEnhancement;

import kotlin.jvm.internal.DefaultConstructorMarker;
import kotlin.jvm.internal.Intrinsics;
import org.jetbrains.annotations.NotNull;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public final class NullabilityQualifierWithMigrationStatus {

    /* renamed from: a  reason: collision with root package name */
    private final NullabilityQualifier f34360a;

    /* renamed from: b  reason: collision with root package name */
    private final boolean f34361b;

    public NullabilityQualifierWithMigrationStatus(@NotNull NullabilityQualifier qualifier, boolean z10) {
        Intrinsics.checkNotNullParameter(qualifier, "qualifier");
        this.f34360a = qualifier;
        this.f34361b = z10;
    }

    public static /* synthetic */ NullabilityQualifierWithMigrationStatus copy$default(NullabilityQualifierWithMigrationStatus nullabilityQualifierWithMigrationStatus, NullabilityQualifier nullabilityQualifier, boolean z10, int i10, Object obj) {
        if ((i10 & 1) != 0) {
            nullabilityQualifier = nullabilityQualifierWithMigrationStatus.f34360a;
        }
        if ((i10 & 2) != 0) {
            z10 = nullabilityQualifierWithMigrationStatus.f34361b;
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
            return this.f34360a == nullabilityQualifierWithMigrationStatus.f34360a && this.f34361b == nullabilityQualifierWithMigrationStatus.f34361b;
        }
        return false;
    }

    @NotNull
    public final NullabilityQualifier getQualifier() {
        return this.f34360a;
    }

    public int hashCode() {
        return (this.f34360a.hashCode() * 31) + Boolean.hashCode(this.f34361b);
    }

    public final boolean isForWarningOnly() {
        return this.f34361b;
    }

    @NotNull
    public String toString() {
        return "NullabilityQualifierWithMigrationStatus(qualifier=" + this.f34360a + ", isForWarningOnly=" + this.f34361b + ')';
    }

    public /* synthetic */ NullabilityQualifierWithMigrationStatus(NullabilityQualifier nullabilityQualifier, boolean z10, int i10, DefaultConstructorMarker defaultConstructorMarker) {
        this(nullabilityQualifier, (i10 & 2) != 0 ? false : z10);
    }
}

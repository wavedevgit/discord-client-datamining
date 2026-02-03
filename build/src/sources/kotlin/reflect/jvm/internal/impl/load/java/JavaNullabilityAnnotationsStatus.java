package kotlin.reflect.jvm.internal.impl.load.java;

import kotlin.jvm.internal.DefaultConstructorMarker;
import kotlin.jvm.internal.Intrinsics;
import org.jetbrains.annotations.NotNull;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public final class JavaNullabilityAnnotationsStatus {
    @NotNull
    public static final Companion Companion = new Companion(null);

    /* renamed from: d  reason: collision with root package name */
    private static final JavaNullabilityAnnotationsStatus f33171d = new JavaNullabilityAnnotationsStatus(ReportLevel.STRICT, null, null, 6, null);

    /* renamed from: a  reason: collision with root package name */
    private final ReportLevel f33172a;

    /* renamed from: b  reason: collision with root package name */
    private final lr.j f33173b;

    /* renamed from: c  reason: collision with root package name */
    private final ReportLevel f33174c;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
    public static final class Companion {
        public /* synthetic */ Companion(DefaultConstructorMarker defaultConstructorMarker) {
            this();
        }

        @NotNull
        public final JavaNullabilityAnnotationsStatus getDEFAULT() {
            return JavaNullabilityAnnotationsStatus.f33171d;
        }

        private Companion() {
        }
    }

    public JavaNullabilityAnnotationsStatus(@NotNull ReportLevel reportLevelBefore, lr.j jVar, @NotNull ReportLevel reportLevelAfter) {
        Intrinsics.checkNotNullParameter(reportLevelBefore, "reportLevelBefore");
        Intrinsics.checkNotNullParameter(reportLevelAfter, "reportLevelAfter");
        this.f33172a = reportLevelBefore;
        this.f33173b = jVar;
        this.f33174c = reportLevelAfter;
    }

    public boolean equals(Object obj) {
        if (this == obj) {
            return true;
        }
        if (obj instanceof JavaNullabilityAnnotationsStatus) {
            JavaNullabilityAnnotationsStatus javaNullabilityAnnotationsStatus = (JavaNullabilityAnnotationsStatus) obj;
            return this.f33172a == javaNullabilityAnnotationsStatus.f33172a && Intrinsics.areEqual(this.f33173b, javaNullabilityAnnotationsStatus.f33173b) && this.f33174c == javaNullabilityAnnotationsStatus.f33174c;
        }
        return false;
    }

    @NotNull
    public final ReportLevel getReportLevelAfter() {
        return this.f33174c;
    }

    @NotNull
    public final ReportLevel getReportLevelBefore() {
        return this.f33172a;
    }

    public final lr.j getSinceVersion() {
        return this.f33173b;
    }

    public int hashCode() {
        int hashCode = this.f33172a.hashCode() * 31;
        lr.j jVar = this.f33173b;
        return ((hashCode + (jVar == null ? 0 : jVar.hashCode())) * 31) + this.f33174c.hashCode();
    }

    @NotNull
    public String toString() {
        return "JavaNullabilityAnnotationsStatus(reportLevelBefore=" + this.f33172a + ", sinceVersion=" + this.f33173b + ", reportLevelAfter=" + this.f33174c + ')';
    }

    public /* synthetic */ JavaNullabilityAnnotationsStatus(ReportLevel reportLevel, lr.j jVar, ReportLevel reportLevel2, int i10, DefaultConstructorMarker defaultConstructorMarker) {
        this(reportLevel, (i10 & 2) != 0 ? new lr.j(1, 0) : jVar, (i10 & 4) != 0 ? reportLevel : reportLevel2);
    }
}

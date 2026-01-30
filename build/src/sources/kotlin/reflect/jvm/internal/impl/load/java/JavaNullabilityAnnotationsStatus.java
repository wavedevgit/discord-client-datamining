package kotlin.reflect.jvm.internal.impl.load.java;

import kotlin.jvm.internal.DefaultConstructorMarker;
import kotlin.jvm.internal.Intrinsics;
import org.jetbrains.annotations.NotNull;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public final class JavaNullabilityAnnotationsStatus {
    @NotNull
    public static final Companion Companion = new Companion(null);

    /* renamed from: d  reason: collision with root package name */
    private static final JavaNullabilityAnnotationsStatus f34005d = new JavaNullabilityAnnotationsStatus(ReportLevel.STRICT, null, null, 6, null);

    /* renamed from: a  reason: collision with root package name */
    private final ReportLevel f34006a;

    /* renamed from: b  reason: collision with root package name */
    private final ir.j f34007b;

    /* renamed from: c  reason: collision with root package name */
    private final ReportLevel f34008c;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
    public static final class Companion {
        public /* synthetic */ Companion(DefaultConstructorMarker defaultConstructorMarker) {
            this();
        }

        @NotNull
        public final JavaNullabilityAnnotationsStatus getDEFAULT() {
            return JavaNullabilityAnnotationsStatus.f34005d;
        }

        private Companion() {
        }
    }

    public JavaNullabilityAnnotationsStatus(@NotNull ReportLevel reportLevelBefore, ir.j jVar, @NotNull ReportLevel reportLevelAfter) {
        Intrinsics.checkNotNullParameter(reportLevelBefore, "reportLevelBefore");
        Intrinsics.checkNotNullParameter(reportLevelAfter, "reportLevelAfter");
        this.f34006a = reportLevelBefore;
        this.f34007b = jVar;
        this.f34008c = reportLevelAfter;
    }

    public boolean equals(Object obj) {
        if (this == obj) {
            return true;
        }
        if (obj instanceof JavaNullabilityAnnotationsStatus) {
            JavaNullabilityAnnotationsStatus javaNullabilityAnnotationsStatus = (JavaNullabilityAnnotationsStatus) obj;
            return this.f34006a == javaNullabilityAnnotationsStatus.f34006a && Intrinsics.areEqual(this.f34007b, javaNullabilityAnnotationsStatus.f34007b) && this.f34008c == javaNullabilityAnnotationsStatus.f34008c;
        }
        return false;
    }

    @NotNull
    public final ReportLevel getReportLevelAfter() {
        return this.f34008c;
    }

    @NotNull
    public final ReportLevel getReportLevelBefore() {
        return this.f34006a;
    }

    public final ir.j getSinceVersion() {
        return this.f34007b;
    }

    public int hashCode() {
        int hashCode = this.f34006a.hashCode() * 31;
        ir.j jVar = this.f34007b;
        return ((hashCode + (jVar == null ? 0 : jVar.hashCode())) * 31) + this.f34008c.hashCode();
    }

    @NotNull
    public String toString() {
        return "JavaNullabilityAnnotationsStatus(reportLevelBefore=" + this.f34006a + ", sinceVersion=" + this.f34007b + ", reportLevelAfter=" + this.f34008c + ')';
    }

    public /* synthetic */ JavaNullabilityAnnotationsStatus(ReportLevel reportLevel, ir.j jVar, ReportLevel reportLevel2, int i10, DefaultConstructorMarker defaultConstructorMarker) {
        this(reportLevel, (i10 & 2) != 0 ? new ir.j(1, 0) : jVar, (i10 & 4) != 0 ? reportLevel : reportLevel2);
    }
}

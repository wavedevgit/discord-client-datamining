package kotlin.reflect.jvm.internal.impl.load.java;

import kotlin.jvm.internal.DefaultConstructorMarker;
import kotlin.jvm.internal.Intrinsics;
import org.jetbrains.annotations.NotNull;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public final class JavaNullabilityAnnotationsStatus {
    @NotNull
    public static final Companion Companion = new Companion(null);

    /* renamed from: d  reason: collision with root package name */
    private static final JavaNullabilityAnnotationsStatus f33263d = new JavaNullabilityAnnotationsStatus(ReportLevel.STRICT, null, null, 6, null);

    /* renamed from: a  reason: collision with root package name */
    private final ReportLevel f33264a;

    /* renamed from: b  reason: collision with root package name */
    private final as.j f33265b;

    /* renamed from: c  reason: collision with root package name */
    private final ReportLevel f33266c;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
    public static final class Companion {
        public /* synthetic */ Companion(DefaultConstructorMarker defaultConstructorMarker) {
            this();
        }

        @NotNull
        public final JavaNullabilityAnnotationsStatus getDEFAULT() {
            return JavaNullabilityAnnotationsStatus.f33263d;
        }

        private Companion() {
        }
    }

    public JavaNullabilityAnnotationsStatus(@NotNull ReportLevel reportLevelBefore, as.j jVar, @NotNull ReportLevel reportLevelAfter) {
        Intrinsics.checkNotNullParameter(reportLevelBefore, "reportLevelBefore");
        Intrinsics.checkNotNullParameter(reportLevelAfter, "reportLevelAfter");
        this.f33264a = reportLevelBefore;
        this.f33265b = jVar;
        this.f33266c = reportLevelAfter;
    }

    public boolean equals(Object obj) {
        if (this == obj) {
            return true;
        }
        if (obj instanceof JavaNullabilityAnnotationsStatus) {
            JavaNullabilityAnnotationsStatus javaNullabilityAnnotationsStatus = (JavaNullabilityAnnotationsStatus) obj;
            return this.f33264a == javaNullabilityAnnotationsStatus.f33264a && Intrinsics.areEqual(this.f33265b, javaNullabilityAnnotationsStatus.f33265b) && this.f33266c == javaNullabilityAnnotationsStatus.f33266c;
        }
        return false;
    }

    @NotNull
    public final ReportLevel getReportLevelAfter() {
        return this.f33266c;
    }

    @NotNull
    public final ReportLevel getReportLevelBefore() {
        return this.f33264a;
    }

    public final as.j getSinceVersion() {
        return this.f33265b;
    }

    public int hashCode() {
        int hashCode = this.f33264a.hashCode() * 31;
        as.j jVar = this.f33265b;
        return ((hashCode + (jVar == null ? 0 : jVar.hashCode())) * 31) + this.f33266c.hashCode();
    }

    @NotNull
    public String toString() {
        return "JavaNullabilityAnnotationsStatus(reportLevelBefore=" + this.f33264a + ", sinceVersion=" + this.f33265b + ", reportLevelAfter=" + this.f33266c + ')';
    }

    public /* synthetic */ JavaNullabilityAnnotationsStatus(ReportLevel reportLevel, as.j jVar, ReportLevel reportLevel2, int i10, DefaultConstructorMarker defaultConstructorMarker) {
        this(reportLevel, (i10 & 2) != 0 ? new as.j(1, 0) : jVar, (i10 & 4) != 0 ? reportLevel : reportLevel2);
    }
}

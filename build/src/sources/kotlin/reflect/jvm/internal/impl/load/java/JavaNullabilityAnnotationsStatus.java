package kotlin.reflect.jvm.internal.impl.load.java;

import kotlin.jvm.internal.DefaultConstructorMarker;
import kotlin.jvm.internal.Intrinsics;
import org.jetbrains.annotations.NotNull;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public final class JavaNullabilityAnnotationsStatus {
    @NotNull
    public static final Companion Companion = new Companion(null);

    /* renamed from: d  reason: collision with root package name */
    private static final JavaNullabilityAnnotationsStatus f32695d = new JavaNullabilityAnnotationsStatus(ReportLevel.STRICT, null, null, 6, null);

    /* renamed from: a  reason: collision with root package name */
    private final ReportLevel f32696a;

    /* renamed from: b  reason: collision with root package name */
    private final or.j f32697b;

    /* renamed from: c  reason: collision with root package name */
    private final ReportLevel f32698c;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
    public static final class Companion {
        public /* synthetic */ Companion(DefaultConstructorMarker defaultConstructorMarker) {
            this();
        }

        @NotNull
        public final JavaNullabilityAnnotationsStatus getDEFAULT() {
            return JavaNullabilityAnnotationsStatus.f32695d;
        }

        private Companion() {
        }
    }

    public JavaNullabilityAnnotationsStatus(@NotNull ReportLevel reportLevelBefore, or.j jVar, @NotNull ReportLevel reportLevelAfter) {
        Intrinsics.checkNotNullParameter(reportLevelBefore, "reportLevelBefore");
        Intrinsics.checkNotNullParameter(reportLevelAfter, "reportLevelAfter");
        this.f32696a = reportLevelBefore;
        this.f32697b = jVar;
        this.f32698c = reportLevelAfter;
    }

    public boolean equals(Object obj) {
        if (this == obj) {
            return true;
        }
        if (obj instanceof JavaNullabilityAnnotationsStatus) {
            JavaNullabilityAnnotationsStatus javaNullabilityAnnotationsStatus = (JavaNullabilityAnnotationsStatus) obj;
            return this.f32696a == javaNullabilityAnnotationsStatus.f32696a && Intrinsics.areEqual(this.f32697b, javaNullabilityAnnotationsStatus.f32697b) && this.f32698c == javaNullabilityAnnotationsStatus.f32698c;
        }
        return false;
    }

    @NotNull
    public final ReportLevel getReportLevelAfter() {
        return this.f32698c;
    }

    @NotNull
    public final ReportLevel getReportLevelBefore() {
        return this.f32696a;
    }

    public final or.j getSinceVersion() {
        return this.f32697b;
    }

    public int hashCode() {
        int hashCode = this.f32696a.hashCode() * 31;
        or.j jVar = this.f32697b;
        return ((hashCode + (jVar == null ? 0 : jVar.hashCode())) * 31) + this.f32698c.hashCode();
    }

    @NotNull
    public String toString() {
        return "JavaNullabilityAnnotationsStatus(reportLevelBefore=" + this.f32696a + ", sinceVersion=" + this.f32697b + ", reportLevelAfter=" + this.f32698c + ')';
    }

    public /* synthetic */ JavaNullabilityAnnotationsStatus(ReportLevel reportLevel, or.j jVar, ReportLevel reportLevel2, int i10, DefaultConstructorMarker defaultConstructorMarker) {
        this(reportLevel, (i10 & 2) != 0 ? new or.j(1, 0) : jVar, (i10 & 4) != 0 ? reportLevel : reportLevel2);
    }
}

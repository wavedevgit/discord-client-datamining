package kotlin.reflect.jvm.internal.impl.load.java;

import kotlin.jvm.internal.DefaultConstructorMarker;
import kotlin.jvm.internal.Intrinsics;
import org.jetbrains.annotations.NotNull;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public final class JavaNullabilityAnnotationsStatus {
    @NotNull
    public static final Companion Companion = new Companion(null);

    /* renamed from: d  reason: collision with root package name */
    private static final JavaNullabilityAnnotationsStatus f32472d = new JavaNullabilityAnnotationsStatus(ReportLevel.STRICT, null, null, 6, null);

    /* renamed from: a  reason: collision with root package name */
    private final ReportLevel f32473a;

    /* renamed from: b  reason: collision with root package name */
    private final rr.j f32474b;

    /* renamed from: c  reason: collision with root package name */
    private final ReportLevel f32475c;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
    public static final class Companion {
        public /* synthetic */ Companion(DefaultConstructorMarker defaultConstructorMarker) {
            this();
        }

        @NotNull
        public final JavaNullabilityAnnotationsStatus getDEFAULT() {
            return JavaNullabilityAnnotationsStatus.f32472d;
        }

        private Companion() {
        }
    }

    public JavaNullabilityAnnotationsStatus(@NotNull ReportLevel reportLevelBefore, rr.j jVar, @NotNull ReportLevel reportLevelAfter) {
        Intrinsics.checkNotNullParameter(reportLevelBefore, "reportLevelBefore");
        Intrinsics.checkNotNullParameter(reportLevelAfter, "reportLevelAfter");
        this.f32473a = reportLevelBefore;
        this.f32474b = jVar;
        this.f32475c = reportLevelAfter;
    }

    public boolean equals(Object obj) {
        if (this == obj) {
            return true;
        }
        if (obj instanceof JavaNullabilityAnnotationsStatus) {
            JavaNullabilityAnnotationsStatus javaNullabilityAnnotationsStatus = (JavaNullabilityAnnotationsStatus) obj;
            return this.f32473a == javaNullabilityAnnotationsStatus.f32473a && Intrinsics.areEqual(this.f32474b, javaNullabilityAnnotationsStatus.f32474b) && this.f32475c == javaNullabilityAnnotationsStatus.f32475c;
        }
        return false;
    }

    @NotNull
    public final ReportLevel getReportLevelAfter() {
        return this.f32475c;
    }

    @NotNull
    public final ReportLevel getReportLevelBefore() {
        return this.f32473a;
    }

    public final rr.j getSinceVersion() {
        return this.f32474b;
    }

    public int hashCode() {
        int hashCode = this.f32473a.hashCode() * 31;
        rr.j jVar = this.f32474b;
        return ((hashCode + (jVar == null ? 0 : jVar.hashCode())) * 31) + this.f32475c.hashCode();
    }

    @NotNull
    public String toString() {
        return "JavaNullabilityAnnotationsStatus(reportLevelBefore=" + this.f32473a + ", sinceVersion=" + this.f32474b + ", reportLevelAfter=" + this.f32475c + ')';
    }

    public /* synthetic */ JavaNullabilityAnnotationsStatus(ReportLevel reportLevel, rr.j jVar, ReportLevel reportLevel2, int i10, DefaultConstructorMarker defaultConstructorMarker) {
        this(reportLevel, (i10 & 2) != 0 ? new rr.j(1, 0) : jVar, (i10 & 4) != 0 ? reportLevel : reportLevel2);
    }
}

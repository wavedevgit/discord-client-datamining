package kotlin.reflect.jvm.internal.impl.load.java;

import kotlin.jvm.functions.Function1;
import kotlin.jvm.internal.DefaultConstructorMarker;
import kotlin.jvm.internal.FunctionReferenceImpl;
import kotlin.jvm.internal.Intrinsics;
import kotlin.reflect.jvm.internal.impl.name.FqName;
import org.jetbrains.annotations.NotNull;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public final class JavaTypeEnhancementState {
    @NotNull
    public static final Companion Companion = new Companion(null);

    /* renamed from: d  reason: collision with root package name */
    private static final JavaTypeEnhancementState f33993d = new JavaTypeEnhancementState(JavaNullabilityAnnotationSettingsKt.getDefaultJsr305Settings$default(null, 1, null), a.f33997d);

    /* renamed from: a  reason: collision with root package name */
    private final Jsr305Settings f33994a;

    /* renamed from: b  reason: collision with root package name */
    private final Function1 f33995b;

    /* renamed from: c  reason: collision with root package name */
    private final boolean f33996c;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
    public static final class Companion {
        public /* synthetic */ Companion(DefaultConstructorMarker defaultConstructorMarker) {
            this();
        }

        @NotNull
        public final JavaTypeEnhancementState getDEFAULT() {
            return JavaTypeEnhancementState.f33993d;
        }

        private Companion() {
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
    /* synthetic */ class a extends FunctionReferenceImpl implements Function1 {

        /* renamed from: d  reason: collision with root package name */
        public static final a f33997d = new a();

        a() {
            super(1, JavaNullabilityAnnotationSettingsKt.class, "getDefaultReportLevelForAnnotation", "getDefaultReportLevelForAnnotation(Lorg/jetbrains/kotlin/name/FqName;)Lorg/jetbrains/kotlin/load/java/ReportLevel;", 1);
        }

        @Override // kotlin.jvm.functions.Function1
        /* renamed from: a */
        public final ReportLevel invoke(FqName p02) {
            Intrinsics.checkNotNullParameter(p02, "p0");
            return JavaNullabilityAnnotationSettingsKt.getDefaultReportLevelForAnnotation(p02);
        }
    }

    public JavaTypeEnhancementState(@NotNull Jsr305Settings jsr305, @NotNull Function1<? super FqName, ? extends ReportLevel> getReportLevelForAnnotation) {
        boolean z10;
        Intrinsics.checkNotNullParameter(jsr305, "jsr305");
        Intrinsics.checkNotNullParameter(getReportLevelForAnnotation, "getReportLevelForAnnotation");
        this.f33994a = jsr305;
        this.f33995b = getReportLevelForAnnotation;
        if (!jsr305.isDisabled() && getReportLevelForAnnotation.invoke(JavaNullabilityAnnotationSettingsKt.getJSPECIFY_ANNOTATIONS_PACKAGE()) != ReportLevel.IGNORE) {
            z10 = false;
        } else {
            z10 = true;
        }
        this.f33996c = z10;
    }

    public final boolean getDisabledDefaultAnnotations() {
        return this.f33996c;
    }

    @NotNull
    public final Function1<FqName, ReportLevel> getGetReportLevelForAnnotation() {
        return this.f33995b;
    }

    @NotNull
    public final Jsr305Settings getJsr305() {
        return this.f33994a;
    }

    @NotNull
    public String toString() {
        return "JavaTypeEnhancementState(jsr305=" + this.f33994a + ", getReportLevelForAnnotation=" + this.f33995b + ')';
    }
}

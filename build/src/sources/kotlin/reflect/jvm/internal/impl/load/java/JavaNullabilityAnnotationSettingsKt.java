package kotlin.reflect.jvm.internal.impl.load.java;

import kotlin.Pair;
import kotlin.collections.o0;
import kotlin.jvm.internal.Intrinsics;
import kotlin.jvm.internal.SourceDebugExtension;
import kotlin.reflect.jvm.internal.impl.load.java.JavaNullabilityAnnotationsStatus;
import kotlin.reflect.jvm.internal.impl.name.FqName;
import org.jetbrains.annotations.NotNull;
import qr.v;
@SourceDebugExtension({"SMAP\nJavaNullabilityAnnotationSettings.kt\nKotlin\n*S Kotlin\n*F\n+ 1 JavaNullabilityAnnotationSettings.kt\norg/jetbrains/kotlin/load/java/JavaNullabilityAnnotationSettingsKt\n+ 2 fake.kt\nkotlin/jvm/internal/FakeKt\n*L\n1#1,119:1\n1#2:120\n*E\n"})
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public final class JavaNullabilityAnnotationSettingsKt {

    /* renamed from: a */
    private static final FqName f32707a;

    /* renamed from: b */
    private static final FqName f32708b;

    /* renamed from: c */
    private static final FqName f32709c;

    /* renamed from: d */
    private static final FqName f32710d;

    /* renamed from: e */
    private static final String f32711e;

    /* renamed from: f */
    private static final FqName[] f32712f;

    /* renamed from: g */
    private static final NullabilityAnnotationStates f32713g;

    /* renamed from: h */
    private static final JavaNullabilityAnnotationsStatus f32714h;

    static {
        FqName fqName = new FqName("org.jspecify.nullness");
        f32707a = fqName;
        FqName fqName2 = new FqName("org.jspecify.annotations");
        f32708b = fqName2;
        FqName fqName3 = new FqName("io.reactivex.rxjava3.annotations");
        f32709c = fqName3;
        FqName fqName4 = new FqName("org.checkerframework.checker.nullness.compatqual");
        f32710d = fqName4;
        String asString = fqName3.asString();
        f32711e = asString;
        FqName fqName5 = new FqName(asString + ".Nullable");
        f32712f = new FqName[]{fqName5, new FqName(asString + ".NonNull")};
        FqName fqName6 = new FqName("org.jetbrains.annotations");
        JavaNullabilityAnnotationsStatus.Companion companion = JavaNullabilityAnnotationsStatus.Companion;
        Pair a10 = v.a(fqName6, companion.getDEFAULT());
        Pair a11 = v.a(new FqName("androidx.annotation"), companion.getDEFAULT());
        Pair a12 = v.a(new FqName("android.support.annotation"), companion.getDEFAULT());
        Pair a13 = v.a(new FqName("android.annotation"), companion.getDEFAULT());
        Pair a14 = v.a(new FqName("com.android.annotations"), companion.getDEFAULT());
        Pair a15 = v.a(new FqName("org.eclipse.jdt.annotation"), companion.getDEFAULT());
        Pair a16 = v.a(new FqName("org.checkerframework.checker.nullness.qual"), companion.getDEFAULT());
        Pair a17 = v.a(fqName4, companion.getDEFAULT());
        Pair a18 = v.a(new FqName("javax.annotation"), companion.getDEFAULT());
        Pair a19 = v.a(new FqName("edu.umd.cs.findbugs.annotations"), companion.getDEFAULT());
        Pair a20 = v.a(new FqName("io.reactivex.annotations"), companion.getDEFAULT());
        FqName fqName7 = new FqName("androidx.annotation.RecentlyNullable");
        ReportLevel reportLevel = ReportLevel.WARN;
        Pair a21 = v.a(fqName7, new JavaNullabilityAnnotationsStatus(reportLevel, null, null, 4, null));
        Pair a22 = v.a(new FqName("androidx.annotation.RecentlyNonNull"), new JavaNullabilityAnnotationsStatus(reportLevel, null, null, 4, null));
        Pair a23 = v.a(new FqName("lombok"), companion.getDEFAULT());
        qr.j jVar = new qr.j(2, 1);
        ReportLevel reportLevel2 = ReportLevel.STRICT;
        f32713g = new NullabilityAnnotationStatesImpl(o0.m(a10, a11, a12, a13, a14, a15, a16, a17, a18, a19, a20, a21, a22, a23, v.a(fqName, new JavaNullabilityAnnotationsStatus(reportLevel, jVar, reportLevel2)), v.a(fqName2, new JavaNullabilityAnnotationsStatus(reportLevel, new qr.j(2, 1), reportLevel2)), v.a(fqName3, new JavaNullabilityAnnotationsStatus(reportLevel, new qr.j(1, 8), reportLevel2))));
        f32714h = new JavaNullabilityAnnotationsStatus(reportLevel, null, null, 4, null);
    }

    @NotNull
    public static final Jsr305Settings getDefaultJsr305Settings(@NotNull qr.j configuredKotlinVersion) {
        ReportLevel reportLevelBefore;
        Intrinsics.checkNotNullParameter(configuredKotlinVersion, "configuredKotlinVersion");
        JavaNullabilityAnnotationsStatus javaNullabilityAnnotationsStatus = f32714h;
        if (javaNullabilityAnnotationsStatus.getSinceVersion() != null && javaNullabilityAnnotationsStatus.getSinceVersion().compareTo(configuredKotlinVersion) <= 0) {
            reportLevelBefore = javaNullabilityAnnotationsStatus.getReportLevelAfter();
        } else {
            reportLevelBefore = javaNullabilityAnnotationsStatus.getReportLevelBefore();
        }
        ReportLevel reportLevel = reportLevelBefore;
        return new Jsr305Settings(reportLevel, getDefaultMigrationJsr305ReportLevelForGivenGlobal(reportLevel), null, 4, null);
    }

    public static /* synthetic */ Jsr305Settings getDefaultJsr305Settings$default(qr.j jVar, int i10, Object obj) {
        if ((i10 & 1) != 0) {
            jVar = qr.j.f48036q;
        }
        return getDefaultJsr305Settings(jVar);
    }

    public static final ReportLevel getDefaultMigrationJsr305ReportLevelForGivenGlobal(@NotNull ReportLevel globalReportLevel) {
        Intrinsics.checkNotNullParameter(globalReportLevel, "globalReportLevel");
        if (globalReportLevel == ReportLevel.WARN) {
            return null;
        }
        return globalReportLevel;
    }

    @NotNull
    public static final ReportLevel getDefaultReportLevelForAnnotation(@NotNull FqName annotationFqName) {
        Intrinsics.checkNotNullParameter(annotationFqName, "annotationFqName");
        return getReportLevelForAnnotation$default(annotationFqName, NullabilityAnnotationStates.Companion.getEMPTY(), null, 4, null);
    }

    @NotNull
    public static final FqName getJSPECIFY_ANNOTATIONS_PACKAGE() {
        return f32708b;
    }

    @NotNull
    public static final FqName[] getRXJAVA3_ANNOTATIONS() {
        return f32712f;
    }

    @NotNull
    public static final ReportLevel getReportLevelForAnnotation(@NotNull FqName annotation, @NotNull NullabilityAnnotationStates<? extends ReportLevel> configuredReportLevels, @NotNull qr.j configuredKotlinVersion) {
        Intrinsics.checkNotNullParameter(annotation, "annotation");
        Intrinsics.checkNotNullParameter(configuredReportLevels, "configuredReportLevels");
        Intrinsics.checkNotNullParameter(configuredKotlinVersion, "configuredKotlinVersion");
        ReportLevel reportLevel = configuredReportLevels.get(annotation);
        if (reportLevel != null) {
            return reportLevel;
        }
        JavaNullabilityAnnotationsStatus javaNullabilityAnnotationsStatus = (JavaNullabilityAnnotationsStatus) f32713g.get(annotation);
        if (javaNullabilityAnnotationsStatus == null) {
            return ReportLevel.IGNORE;
        }
        if (javaNullabilityAnnotationsStatus.getSinceVersion() != null && javaNullabilityAnnotationsStatus.getSinceVersion().compareTo(configuredKotlinVersion) <= 0) {
            return javaNullabilityAnnotationsStatus.getReportLevelAfter();
        }
        return javaNullabilityAnnotationsStatus.getReportLevelBefore();
    }

    public static /* synthetic */ ReportLevel getReportLevelForAnnotation$default(FqName fqName, NullabilityAnnotationStates nullabilityAnnotationStates, qr.j jVar, int i10, Object obj) {
        if ((i10 & 4) != 0) {
            jVar = new qr.j(1, 7, 20);
        }
        return getReportLevelForAnnotation(fqName, nullabilityAnnotationStates, jVar);
    }
}

package kotlin.reflect.jvm.internal.impl.load.java;

import java.util.LinkedHashSet;
import java.util.Map;
import java.util.Set;
import kotlin.collections.o0;
import kotlin.collections.x0;
import kotlin.reflect.jvm.internal.impl.builtins.StandardNames;
import kotlin.reflect.jvm.internal.impl.name.FqName;
import lr.v;
import org.jetbrains.annotations.NotNull;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public final class JvmAnnotationNamesKt {

    /* renamed from: a  reason: collision with root package name */
    private static final FqName f33188a;

    /* renamed from: b  reason: collision with root package name */
    private static final FqName f33189b;

    /* renamed from: c  reason: collision with root package name */
    private static final FqName f33190c;

    /* renamed from: d  reason: collision with root package name */
    private static final FqName f33191d;

    /* renamed from: e  reason: collision with root package name */
    private static final FqName f33192e;

    /* renamed from: f  reason: collision with root package name */
    private static final FqName f33193f;

    /* renamed from: g  reason: collision with root package name */
    private static final FqName f33194g;

    /* renamed from: h  reason: collision with root package name */
    private static final FqName f33195h;

    /* renamed from: i  reason: collision with root package name */
    private static final FqName f33196i;

    /* renamed from: j  reason: collision with root package name */
    private static final FqName f33197j;

    /* renamed from: k  reason: collision with root package name */
    private static final FqName f33198k;

    /* renamed from: l  reason: collision with root package name */
    private static final FqName f33199l;

    /* renamed from: m  reason: collision with root package name */
    private static final FqName f33200m;

    /* renamed from: n  reason: collision with root package name */
    private static final FqName f33201n;

    /* renamed from: o  reason: collision with root package name */
    private static final FqName f33202o;

    /* renamed from: p  reason: collision with root package name */
    private static final FqName f33203p;

    /* renamed from: q  reason: collision with root package name */
    private static final Set f33204q;

    /* renamed from: r  reason: collision with root package name */
    private static final Set f33205r;

    /* renamed from: s  reason: collision with root package name */
    private static final Set f33206s;

    /* renamed from: t  reason: collision with root package name */
    private static final Set f33207t;

    /* renamed from: u  reason: collision with root package name */
    private static final Set f33208u;

    /* renamed from: v  reason: collision with root package name */
    private static final Set f33209v;

    /* renamed from: w  reason: collision with root package name */
    private static final Set f33210w;

    /* renamed from: x  reason: collision with root package name */
    private static final Map f33211x;

    /* renamed from: y  reason: collision with root package name */
    private static final FqName f33212y;

    static {
        FqName fqName = new FqName("org.jspecify.nullness.Nullable");
        f33188a = fqName;
        FqName fqName2 = new FqName("org.jspecify.nullness.NullMarked");
        f33189b = fqName2;
        FqName fqName3 = new FqName("org.jspecify.nullness.NullnessUnspecified");
        f33190c = fqName3;
        FqName fqName4 = new FqName("org.jspecify.annotations.NonNull");
        f33191d = fqName4;
        FqName fqName5 = new FqName("org.jspecify.annotations.Nullable");
        f33192e = fqName5;
        FqName fqName6 = new FqName("org.jspecify.annotations.NullMarked");
        f33193f = fqName6;
        FqName fqName7 = new FqName("org.jspecify.annotations.NullnessUnspecified");
        f33194g = fqName7;
        FqName fqName8 = new FqName("org.jspecify.annotations.NullUnmarked");
        f33195h = fqName8;
        f33196i = new FqName("javax.annotation.meta.TypeQualifier");
        f33197j = new FqName("javax.annotation.meta.TypeQualifierNickname");
        f33198k = new FqName("javax.annotation.meta.TypeQualifierDefault");
        FqName fqName9 = new FqName("javax.annotation.Nonnull");
        f33199l = fqName9;
        FqName fqName10 = new FqName("javax.annotation.Nullable");
        f33200m = fqName10;
        FqName fqName11 = new FqName("javax.annotation.CheckForNull");
        f33201n = fqName11;
        f33202o = new FqName("javax.annotation.ParametersAreNonnullByDefault");
        f33203p = new FqName("javax.annotation.ParametersAreNullableByDefault");
        f33204q = x0.i(fqName9, fqName11);
        Set i10 = x0.i(JvmAnnotationNames.JETBRAINS_NOT_NULL_ANNOTATION, fqName4, new FqName("android.annotation.NonNull"), new FqName("androidx.annotation.NonNull"), new FqName("androidx.annotation.RecentlyNonNull"), new FqName("android.support.annotation.NonNull"), new FqName("com.android.annotations.NonNull"), new FqName("org.checkerframework.checker.nullness.compatqual.NonNullDecl"), new FqName("org.checkerframework.checker.nullness.qual.NonNull"), new FqName("edu.umd.cs.findbugs.annotations.NonNull"), new FqName("io.reactivex.annotations.NonNull"), new FqName("io.reactivex.rxjava3.annotations.NonNull"), new FqName("org.eclipse.jdt.annotation.NonNull"), new FqName("lombok.NonNull"));
        f33205r = i10;
        Set i11 = x0.i(JvmAnnotationNames.JETBRAINS_NULLABLE_ANNOTATION, fqName, fqName5, fqName10, fqName11, new FqName("android.annotation.Nullable"), new FqName("androidx.annotation.Nullable"), new FqName("androidx.annotation.RecentlyNullable"), new FqName("android.support.annotation.Nullable"), new FqName("com.android.annotations.Nullable"), new FqName("org.checkerframework.checker.nullness.compatqual.NullableDecl"), new FqName("org.checkerframework.checker.nullness.qual.Nullable"), new FqName("edu.umd.cs.findbugs.annotations.Nullable"), new FqName("edu.umd.cs.findbugs.annotations.PossiblyNull"), new FqName("edu.umd.cs.findbugs.annotations.CheckForNull"), new FqName("io.reactivex.annotations.Nullable"), new FqName("io.reactivex.rxjava3.annotations.Nullable"), new FqName("org.eclipse.jdt.annotation.Nullable"));
        f33206s = i11;
        f33207t = x0.i(fqName3, fqName7);
        f33208u = x0.m(x0.m(x0.m(x0.m(x0.l(x0.l(new LinkedHashSet(), i10), i11), fqName9), fqName2), fqName6), fqName8);
        f33209v = x0.i(JvmAnnotationNames.JETBRAINS_READONLY_ANNOTATION, JvmAnnotationNames.READONLY_ANNOTATION);
        f33210w = x0.i(JvmAnnotationNames.JETBRAINS_MUTABLE_ANNOTATION, JvmAnnotationNames.MUTABLE_ANNOTATION);
        f33211x = o0.m(v.a(JvmAnnotationNames.TARGET_ANNOTATION, StandardNames.FqNames.target), v.a(JvmAnnotationNames.RETENTION_ANNOTATION, StandardNames.FqNames.retention), v.a(JvmAnnotationNames.DEPRECATED_ANNOTATION, StandardNames.FqNames.deprecated), v.a(JvmAnnotationNames.DOCUMENTED_ANNOTATION, StandardNames.FqNames.mustBeDocumented));
        f33212y = new FqName("kotlin.annotations.jvm.UnderMigration");
    }

    @NotNull
    public static final Set<FqName> getBUILT_IN_TYPE_QUALIFIER_ANNOTATIONS() {
        return f33204q;
    }

    @NotNull
    public static final Set<FqName> getFORCE_FLEXIBILITY_ANNOTATIONS() {
        return f33207t;
    }

    @NotNull
    public static final FqName getJAVAX_NONNULL_ANNOTATION_FQ_NAME() {
        return f33199l;
    }

    @NotNull
    public static final FqName getJAVAX_PARAMETERS_ARE_NONNULL_BY_DEFAULT_ANNOTATION_FQ_NAME() {
        return f33202o;
    }

    @NotNull
    public static final FqName getJAVAX_PARAMETERS_ARE_NULLABLE_BY_DEFAULT_ANNOTATION_FQ_NAME() {
        return f33203p;
    }

    @NotNull
    public static final FqName getJAVAX_TYPE_QUALIFIER_ANNOTATION_FQ_NAME() {
        return f33196i;
    }

    @NotNull
    public static final FqName getJAVAX_TYPE_QUALIFIER_DEFAULT_ANNOTATION_FQ_NAME() {
        return f33198k;
    }

    @NotNull
    public static final FqName getJAVAX_TYPE_QUALIFIER_NICKNAME_ANNOTATION_FQ_NAME() {
        return f33197j;
    }

    @NotNull
    public static final FqName getJSPECIFY_NULL_MARKED_ANNOTATION_FQ_NAME() {
        return f33193f;
    }

    @NotNull
    public static final FqName getJSPECIFY_NULL_UNMARKED_ANNOTATION_FQ_NAME() {
        return f33195h;
    }

    @NotNull
    public static final FqName getJSPECIFY_OLD_NULL_MARKED_ANNOTATION_FQ_NAME() {
        return f33189b;
    }

    @NotNull
    public static final Set<FqName> getMUTABLE_ANNOTATIONS() {
        return f33210w;
    }

    @NotNull
    public static final Set<FqName> getNOT_NULL_ANNOTATIONS() {
        return f33205r;
    }

    @NotNull
    public static final Set<FqName> getNULLABLE_ANNOTATIONS() {
        return f33206s;
    }

    @NotNull
    public static final Set<FqName> getREAD_ONLY_ANNOTATIONS() {
        return f33209v;
    }

    @NotNull
    public static final FqName getUNDER_MIGRATION_ANNOTATION_FQ_NAME() {
        return f33212y;
    }
}

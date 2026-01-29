package kotlin.reflect.jvm.internal.impl.load.java;

import ir.v;
import java.util.LinkedHashSet;
import java.util.Map;
import java.util.Set;
import kotlin.collections.o0;
import kotlin.collections.x0;
import kotlin.reflect.jvm.internal.impl.builtins.StandardNames;
import kotlin.reflect.jvm.internal.impl.name.FqName;
import org.jetbrains.annotations.NotNull;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public final class JvmAnnotationNamesKt {

    /* renamed from: a  reason: collision with root package name */
    private static final FqName f34006a;

    /* renamed from: b  reason: collision with root package name */
    private static final FqName f34007b;

    /* renamed from: c  reason: collision with root package name */
    private static final FqName f34008c;

    /* renamed from: d  reason: collision with root package name */
    private static final FqName f34009d;

    /* renamed from: e  reason: collision with root package name */
    private static final FqName f34010e;

    /* renamed from: f  reason: collision with root package name */
    private static final FqName f34011f;

    /* renamed from: g  reason: collision with root package name */
    private static final FqName f34012g;

    /* renamed from: h  reason: collision with root package name */
    private static final FqName f34013h;

    /* renamed from: i  reason: collision with root package name */
    private static final FqName f34014i;

    /* renamed from: j  reason: collision with root package name */
    private static final FqName f34015j;

    /* renamed from: k  reason: collision with root package name */
    private static final FqName f34016k;

    /* renamed from: l  reason: collision with root package name */
    private static final FqName f34017l;

    /* renamed from: m  reason: collision with root package name */
    private static final FqName f34018m;

    /* renamed from: n  reason: collision with root package name */
    private static final FqName f34019n;

    /* renamed from: o  reason: collision with root package name */
    private static final FqName f34020o;

    /* renamed from: p  reason: collision with root package name */
    private static final FqName f34021p;

    /* renamed from: q  reason: collision with root package name */
    private static final Set f34022q;

    /* renamed from: r  reason: collision with root package name */
    private static final Set f34023r;

    /* renamed from: s  reason: collision with root package name */
    private static final Set f34024s;

    /* renamed from: t  reason: collision with root package name */
    private static final Set f34025t;

    /* renamed from: u  reason: collision with root package name */
    private static final Set f34026u;

    /* renamed from: v  reason: collision with root package name */
    private static final Set f34027v;

    /* renamed from: w  reason: collision with root package name */
    private static final Set f34028w;

    /* renamed from: x  reason: collision with root package name */
    private static final Map f34029x;

    /* renamed from: y  reason: collision with root package name */
    private static final FqName f34030y;

    static {
        FqName fqName = new FqName("org.jspecify.nullness.Nullable");
        f34006a = fqName;
        FqName fqName2 = new FqName("org.jspecify.nullness.NullMarked");
        f34007b = fqName2;
        FqName fqName3 = new FqName("org.jspecify.nullness.NullnessUnspecified");
        f34008c = fqName3;
        FqName fqName4 = new FqName("org.jspecify.annotations.NonNull");
        f34009d = fqName4;
        FqName fqName5 = new FqName("org.jspecify.annotations.Nullable");
        f34010e = fqName5;
        FqName fqName6 = new FqName("org.jspecify.annotations.NullMarked");
        f34011f = fqName6;
        FqName fqName7 = new FqName("org.jspecify.annotations.NullnessUnspecified");
        f34012g = fqName7;
        FqName fqName8 = new FqName("org.jspecify.annotations.NullUnmarked");
        f34013h = fqName8;
        f34014i = new FqName("javax.annotation.meta.TypeQualifier");
        f34015j = new FqName("javax.annotation.meta.TypeQualifierNickname");
        f34016k = new FqName("javax.annotation.meta.TypeQualifierDefault");
        FqName fqName9 = new FqName("javax.annotation.Nonnull");
        f34017l = fqName9;
        FqName fqName10 = new FqName("javax.annotation.Nullable");
        f34018m = fqName10;
        FqName fqName11 = new FqName("javax.annotation.CheckForNull");
        f34019n = fqName11;
        f34020o = new FqName("javax.annotation.ParametersAreNonnullByDefault");
        f34021p = new FqName("javax.annotation.ParametersAreNullableByDefault");
        f34022q = x0.i(fqName9, fqName11);
        Set i10 = x0.i(JvmAnnotationNames.JETBRAINS_NOT_NULL_ANNOTATION, fqName4, new FqName("android.annotation.NonNull"), new FqName("androidx.annotation.NonNull"), new FqName("androidx.annotation.RecentlyNonNull"), new FqName("android.support.annotation.NonNull"), new FqName("com.android.annotations.NonNull"), new FqName("org.checkerframework.checker.nullness.compatqual.NonNullDecl"), new FqName("org.checkerframework.checker.nullness.qual.NonNull"), new FqName("edu.umd.cs.findbugs.annotations.NonNull"), new FqName("io.reactivex.annotations.NonNull"), new FqName("io.reactivex.rxjava3.annotations.NonNull"), new FqName("org.eclipse.jdt.annotation.NonNull"), new FqName("lombok.NonNull"));
        f34023r = i10;
        Set i11 = x0.i(JvmAnnotationNames.JETBRAINS_NULLABLE_ANNOTATION, fqName, fqName5, fqName10, fqName11, new FqName("android.annotation.Nullable"), new FqName("androidx.annotation.Nullable"), new FqName("androidx.annotation.RecentlyNullable"), new FqName("android.support.annotation.Nullable"), new FqName("com.android.annotations.Nullable"), new FqName("org.checkerframework.checker.nullness.compatqual.NullableDecl"), new FqName("org.checkerframework.checker.nullness.qual.Nullable"), new FqName("edu.umd.cs.findbugs.annotations.Nullable"), new FqName("edu.umd.cs.findbugs.annotations.PossiblyNull"), new FqName("edu.umd.cs.findbugs.annotations.CheckForNull"), new FqName("io.reactivex.annotations.Nullable"), new FqName("io.reactivex.rxjava3.annotations.Nullable"), new FqName("org.eclipse.jdt.annotation.Nullable"));
        f34024s = i11;
        f34025t = x0.i(fqName3, fqName7);
        f34026u = x0.m(x0.m(x0.m(x0.m(x0.l(x0.l(new LinkedHashSet(), i10), i11), fqName9), fqName2), fqName6), fqName8);
        f34027v = x0.i(JvmAnnotationNames.JETBRAINS_READONLY_ANNOTATION, JvmAnnotationNames.READONLY_ANNOTATION);
        f34028w = x0.i(JvmAnnotationNames.JETBRAINS_MUTABLE_ANNOTATION, JvmAnnotationNames.MUTABLE_ANNOTATION);
        f34029x = o0.m(v.a(JvmAnnotationNames.TARGET_ANNOTATION, StandardNames.FqNames.target), v.a(JvmAnnotationNames.RETENTION_ANNOTATION, StandardNames.FqNames.retention), v.a(JvmAnnotationNames.DEPRECATED_ANNOTATION, StandardNames.FqNames.deprecated), v.a(JvmAnnotationNames.DOCUMENTED_ANNOTATION, StandardNames.FqNames.mustBeDocumented));
        f34030y = new FqName("kotlin.annotations.jvm.UnderMigration");
    }

    @NotNull
    public static final Set<FqName> getBUILT_IN_TYPE_QUALIFIER_ANNOTATIONS() {
        return f34022q;
    }

    @NotNull
    public static final Set<FqName> getFORCE_FLEXIBILITY_ANNOTATIONS() {
        return f34025t;
    }

    @NotNull
    public static final FqName getJAVAX_NONNULL_ANNOTATION_FQ_NAME() {
        return f34017l;
    }

    @NotNull
    public static final FqName getJAVAX_PARAMETERS_ARE_NONNULL_BY_DEFAULT_ANNOTATION_FQ_NAME() {
        return f34020o;
    }

    @NotNull
    public static final FqName getJAVAX_PARAMETERS_ARE_NULLABLE_BY_DEFAULT_ANNOTATION_FQ_NAME() {
        return f34021p;
    }

    @NotNull
    public static final FqName getJAVAX_TYPE_QUALIFIER_ANNOTATION_FQ_NAME() {
        return f34014i;
    }

    @NotNull
    public static final FqName getJAVAX_TYPE_QUALIFIER_DEFAULT_ANNOTATION_FQ_NAME() {
        return f34016k;
    }

    @NotNull
    public static final FqName getJAVAX_TYPE_QUALIFIER_NICKNAME_ANNOTATION_FQ_NAME() {
        return f34015j;
    }

    @NotNull
    public static final FqName getJSPECIFY_NULL_MARKED_ANNOTATION_FQ_NAME() {
        return f34011f;
    }

    @NotNull
    public static final FqName getJSPECIFY_NULL_UNMARKED_ANNOTATION_FQ_NAME() {
        return f34013h;
    }

    @NotNull
    public static final FqName getJSPECIFY_OLD_NULL_MARKED_ANNOTATION_FQ_NAME() {
        return f34007b;
    }

    @NotNull
    public static final Set<FqName> getMUTABLE_ANNOTATIONS() {
        return f34028w;
    }

    @NotNull
    public static final Set<FqName> getNOT_NULL_ANNOTATIONS() {
        return f34023r;
    }

    @NotNull
    public static final Set<FqName> getNULLABLE_ANNOTATIONS() {
        return f34024s;
    }

    @NotNull
    public static final Set<FqName> getREAD_ONLY_ANNOTATIONS() {
        return f34027v;
    }

    @NotNull
    public static final FqName getUNDER_MIGRATION_ANNOTATION_FQ_NAME() {
        return f34030y;
    }
}

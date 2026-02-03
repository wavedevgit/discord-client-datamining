package kotlin.reflect.jvm.internal.impl.load.java;

import java.util.LinkedHashSet;
import java.util.Map;
import java.util.Set;
import jr.v;
import kotlin.collections.o0;
import kotlin.collections.x0;
import kotlin.reflect.jvm.internal.impl.builtins.StandardNames;
import kotlin.reflect.jvm.internal.impl.name.FqName;
import org.jetbrains.annotations.NotNull;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public final class JvmAnnotationNamesKt {

    /* renamed from: a  reason: collision with root package name */
    private static final FqName f33798a;

    /* renamed from: b  reason: collision with root package name */
    private static final FqName f33799b;

    /* renamed from: c  reason: collision with root package name */
    private static final FqName f33800c;

    /* renamed from: d  reason: collision with root package name */
    private static final FqName f33801d;

    /* renamed from: e  reason: collision with root package name */
    private static final FqName f33802e;

    /* renamed from: f  reason: collision with root package name */
    private static final FqName f33803f;

    /* renamed from: g  reason: collision with root package name */
    private static final FqName f33804g;

    /* renamed from: h  reason: collision with root package name */
    private static final FqName f33805h;

    /* renamed from: i  reason: collision with root package name */
    private static final FqName f33806i;

    /* renamed from: j  reason: collision with root package name */
    private static final FqName f33807j;

    /* renamed from: k  reason: collision with root package name */
    private static final FqName f33808k;

    /* renamed from: l  reason: collision with root package name */
    private static final FqName f33809l;

    /* renamed from: m  reason: collision with root package name */
    private static final FqName f33810m;

    /* renamed from: n  reason: collision with root package name */
    private static final FqName f33811n;

    /* renamed from: o  reason: collision with root package name */
    private static final FqName f33812o;

    /* renamed from: p  reason: collision with root package name */
    private static final FqName f33813p;

    /* renamed from: q  reason: collision with root package name */
    private static final Set f33814q;

    /* renamed from: r  reason: collision with root package name */
    private static final Set f33815r;

    /* renamed from: s  reason: collision with root package name */
    private static final Set f33816s;

    /* renamed from: t  reason: collision with root package name */
    private static final Set f33817t;

    /* renamed from: u  reason: collision with root package name */
    private static final Set f33818u;

    /* renamed from: v  reason: collision with root package name */
    private static final Set f33819v;

    /* renamed from: w  reason: collision with root package name */
    private static final Set f33820w;

    /* renamed from: x  reason: collision with root package name */
    private static final Map f33821x;

    /* renamed from: y  reason: collision with root package name */
    private static final FqName f33822y;

    static {
        FqName fqName = new FqName("org.jspecify.nullness.Nullable");
        f33798a = fqName;
        FqName fqName2 = new FqName("org.jspecify.nullness.NullMarked");
        f33799b = fqName2;
        FqName fqName3 = new FqName("org.jspecify.nullness.NullnessUnspecified");
        f33800c = fqName3;
        FqName fqName4 = new FqName("org.jspecify.annotations.NonNull");
        f33801d = fqName4;
        FqName fqName5 = new FqName("org.jspecify.annotations.Nullable");
        f33802e = fqName5;
        FqName fqName6 = new FqName("org.jspecify.annotations.NullMarked");
        f33803f = fqName6;
        FqName fqName7 = new FqName("org.jspecify.annotations.NullnessUnspecified");
        f33804g = fqName7;
        FqName fqName8 = new FqName("org.jspecify.annotations.NullUnmarked");
        f33805h = fqName8;
        f33806i = new FqName("javax.annotation.meta.TypeQualifier");
        f33807j = new FqName("javax.annotation.meta.TypeQualifierNickname");
        f33808k = new FqName("javax.annotation.meta.TypeQualifierDefault");
        FqName fqName9 = new FqName("javax.annotation.Nonnull");
        f33809l = fqName9;
        FqName fqName10 = new FqName("javax.annotation.Nullable");
        f33810m = fqName10;
        FqName fqName11 = new FqName("javax.annotation.CheckForNull");
        f33811n = fqName11;
        f33812o = new FqName("javax.annotation.ParametersAreNonnullByDefault");
        f33813p = new FqName("javax.annotation.ParametersAreNullableByDefault");
        f33814q = x0.i(fqName9, fqName11);
        Set i10 = x0.i(JvmAnnotationNames.JETBRAINS_NOT_NULL_ANNOTATION, fqName4, new FqName("android.annotation.NonNull"), new FqName("androidx.annotation.NonNull"), new FqName("androidx.annotation.RecentlyNonNull"), new FqName("android.support.annotation.NonNull"), new FqName("com.android.annotations.NonNull"), new FqName("org.checkerframework.checker.nullness.compatqual.NonNullDecl"), new FqName("org.checkerframework.checker.nullness.qual.NonNull"), new FqName("edu.umd.cs.findbugs.annotations.NonNull"), new FqName("io.reactivex.annotations.NonNull"), new FqName("io.reactivex.rxjava3.annotations.NonNull"), new FqName("org.eclipse.jdt.annotation.NonNull"), new FqName("lombok.NonNull"));
        f33815r = i10;
        Set i11 = x0.i(JvmAnnotationNames.JETBRAINS_NULLABLE_ANNOTATION, fqName, fqName5, fqName10, fqName11, new FqName("android.annotation.Nullable"), new FqName("androidx.annotation.Nullable"), new FqName("androidx.annotation.RecentlyNullable"), new FqName("android.support.annotation.Nullable"), new FqName("com.android.annotations.Nullable"), new FqName("org.checkerframework.checker.nullness.compatqual.NullableDecl"), new FqName("org.checkerframework.checker.nullness.qual.Nullable"), new FqName("edu.umd.cs.findbugs.annotations.Nullable"), new FqName("edu.umd.cs.findbugs.annotations.PossiblyNull"), new FqName("edu.umd.cs.findbugs.annotations.CheckForNull"), new FqName("io.reactivex.annotations.Nullable"), new FqName("io.reactivex.rxjava3.annotations.Nullable"), new FqName("org.eclipse.jdt.annotation.Nullable"));
        f33816s = i11;
        f33817t = x0.i(fqName3, fqName7);
        f33818u = x0.m(x0.m(x0.m(x0.m(x0.l(x0.l(new LinkedHashSet(), i10), i11), fqName9), fqName2), fqName6), fqName8);
        f33819v = x0.i(JvmAnnotationNames.JETBRAINS_READONLY_ANNOTATION, JvmAnnotationNames.READONLY_ANNOTATION);
        f33820w = x0.i(JvmAnnotationNames.JETBRAINS_MUTABLE_ANNOTATION, JvmAnnotationNames.MUTABLE_ANNOTATION);
        f33821x = o0.m(v.a(JvmAnnotationNames.TARGET_ANNOTATION, StandardNames.FqNames.target), v.a(JvmAnnotationNames.RETENTION_ANNOTATION, StandardNames.FqNames.retention), v.a(JvmAnnotationNames.DEPRECATED_ANNOTATION, StandardNames.FqNames.deprecated), v.a(JvmAnnotationNames.DOCUMENTED_ANNOTATION, StandardNames.FqNames.mustBeDocumented));
        f33822y = new FqName("kotlin.annotations.jvm.UnderMigration");
    }

    @NotNull
    public static final Set<FqName> getBUILT_IN_TYPE_QUALIFIER_ANNOTATIONS() {
        return f33814q;
    }

    @NotNull
    public static final Set<FqName> getFORCE_FLEXIBILITY_ANNOTATIONS() {
        return f33817t;
    }

    @NotNull
    public static final FqName getJAVAX_NONNULL_ANNOTATION_FQ_NAME() {
        return f33809l;
    }

    @NotNull
    public static final FqName getJAVAX_PARAMETERS_ARE_NONNULL_BY_DEFAULT_ANNOTATION_FQ_NAME() {
        return f33812o;
    }

    @NotNull
    public static final FqName getJAVAX_PARAMETERS_ARE_NULLABLE_BY_DEFAULT_ANNOTATION_FQ_NAME() {
        return f33813p;
    }

    @NotNull
    public static final FqName getJAVAX_TYPE_QUALIFIER_ANNOTATION_FQ_NAME() {
        return f33806i;
    }

    @NotNull
    public static final FqName getJAVAX_TYPE_QUALIFIER_DEFAULT_ANNOTATION_FQ_NAME() {
        return f33808k;
    }

    @NotNull
    public static final FqName getJAVAX_TYPE_QUALIFIER_NICKNAME_ANNOTATION_FQ_NAME() {
        return f33807j;
    }

    @NotNull
    public static final FqName getJSPECIFY_NULL_MARKED_ANNOTATION_FQ_NAME() {
        return f33803f;
    }

    @NotNull
    public static final FqName getJSPECIFY_NULL_UNMARKED_ANNOTATION_FQ_NAME() {
        return f33805h;
    }

    @NotNull
    public static final FqName getJSPECIFY_OLD_NULL_MARKED_ANNOTATION_FQ_NAME() {
        return f33799b;
    }

    @NotNull
    public static final Set<FqName> getMUTABLE_ANNOTATIONS() {
        return f33820w;
    }

    @NotNull
    public static final Set<FqName> getNOT_NULL_ANNOTATIONS() {
        return f33815r;
    }

    @NotNull
    public static final Set<FqName> getNULLABLE_ANNOTATIONS() {
        return f33816s;
    }

    @NotNull
    public static final Set<FqName> getREAD_ONLY_ANNOTATIONS() {
        return f33819v;
    }

    @NotNull
    public static final FqName getUNDER_MIGRATION_ANNOTATION_FQ_NAME() {
        return f33822y;
    }
}

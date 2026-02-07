package kotlin.reflect.jvm.internal.impl.load.java;

import java.util.LinkedHashSet;
import java.util.Map;
import java.util.Set;
import kotlin.collections.o0;
import kotlin.collections.x0;
import kotlin.reflect.jvm.internal.impl.builtins.StandardNames;
import kotlin.reflect.jvm.internal.impl.name.FqName;
import org.jetbrains.annotations.NotNull;
import qr.v;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public final class JvmAnnotationNamesKt {

    /* renamed from: a  reason: collision with root package name */
    private static final FqName f32780a;

    /* renamed from: b  reason: collision with root package name */
    private static final FqName f32781b;

    /* renamed from: c  reason: collision with root package name */
    private static final FqName f32782c;

    /* renamed from: d  reason: collision with root package name */
    private static final FqName f32783d;

    /* renamed from: e  reason: collision with root package name */
    private static final FqName f32784e;

    /* renamed from: f  reason: collision with root package name */
    private static final FqName f32785f;

    /* renamed from: g  reason: collision with root package name */
    private static final FqName f32786g;

    /* renamed from: h  reason: collision with root package name */
    private static final FqName f32787h;

    /* renamed from: i  reason: collision with root package name */
    private static final FqName f32788i;

    /* renamed from: j  reason: collision with root package name */
    private static final FqName f32789j;

    /* renamed from: k  reason: collision with root package name */
    private static final FqName f32790k;

    /* renamed from: l  reason: collision with root package name */
    private static final FqName f32791l;

    /* renamed from: m  reason: collision with root package name */
    private static final FqName f32792m;

    /* renamed from: n  reason: collision with root package name */
    private static final FqName f32793n;

    /* renamed from: o  reason: collision with root package name */
    private static final FqName f32794o;

    /* renamed from: p  reason: collision with root package name */
    private static final FqName f32795p;

    /* renamed from: q  reason: collision with root package name */
    private static final Set f32796q;

    /* renamed from: r  reason: collision with root package name */
    private static final Set f32797r;

    /* renamed from: s  reason: collision with root package name */
    private static final Set f32798s;

    /* renamed from: t  reason: collision with root package name */
    private static final Set f32799t;

    /* renamed from: u  reason: collision with root package name */
    private static final Set f32800u;

    /* renamed from: v  reason: collision with root package name */
    private static final Set f32801v;

    /* renamed from: w  reason: collision with root package name */
    private static final Set f32802w;

    /* renamed from: x  reason: collision with root package name */
    private static final Map f32803x;

    /* renamed from: y  reason: collision with root package name */
    private static final FqName f32804y;

    static {
        FqName fqName = new FqName("org.jspecify.nullness.Nullable");
        f32780a = fqName;
        FqName fqName2 = new FqName("org.jspecify.nullness.NullMarked");
        f32781b = fqName2;
        FqName fqName3 = new FqName("org.jspecify.nullness.NullnessUnspecified");
        f32782c = fqName3;
        FqName fqName4 = new FqName("org.jspecify.annotations.NonNull");
        f32783d = fqName4;
        FqName fqName5 = new FqName("org.jspecify.annotations.Nullable");
        f32784e = fqName5;
        FqName fqName6 = new FqName("org.jspecify.annotations.NullMarked");
        f32785f = fqName6;
        FqName fqName7 = new FqName("org.jspecify.annotations.NullnessUnspecified");
        f32786g = fqName7;
        FqName fqName8 = new FqName("org.jspecify.annotations.NullUnmarked");
        f32787h = fqName8;
        f32788i = new FqName("javax.annotation.meta.TypeQualifier");
        f32789j = new FqName("javax.annotation.meta.TypeQualifierNickname");
        f32790k = new FqName("javax.annotation.meta.TypeQualifierDefault");
        FqName fqName9 = new FqName("javax.annotation.Nonnull");
        f32791l = fqName9;
        FqName fqName10 = new FqName("javax.annotation.Nullable");
        f32792m = fqName10;
        FqName fqName11 = new FqName("javax.annotation.CheckForNull");
        f32793n = fqName11;
        f32794o = new FqName("javax.annotation.ParametersAreNonnullByDefault");
        f32795p = new FqName("javax.annotation.ParametersAreNullableByDefault");
        f32796q = x0.i(fqName9, fqName11);
        Set i10 = x0.i(JvmAnnotationNames.JETBRAINS_NOT_NULL_ANNOTATION, fqName4, new FqName("android.annotation.NonNull"), new FqName("androidx.annotation.NonNull"), new FqName("androidx.annotation.RecentlyNonNull"), new FqName("android.support.annotation.NonNull"), new FqName("com.android.annotations.NonNull"), new FqName("org.checkerframework.checker.nullness.compatqual.NonNullDecl"), new FqName("org.checkerframework.checker.nullness.qual.NonNull"), new FqName("edu.umd.cs.findbugs.annotations.NonNull"), new FqName("io.reactivex.annotations.NonNull"), new FqName("io.reactivex.rxjava3.annotations.NonNull"), new FqName("org.eclipse.jdt.annotation.NonNull"), new FqName("lombok.NonNull"));
        f32797r = i10;
        Set i11 = x0.i(JvmAnnotationNames.JETBRAINS_NULLABLE_ANNOTATION, fqName, fqName5, fqName10, fqName11, new FqName("android.annotation.Nullable"), new FqName("androidx.annotation.Nullable"), new FqName("androidx.annotation.RecentlyNullable"), new FqName("android.support.annotation.Nullable"), new FqName("com.android.annotations.Nullable"), new FqName("org.checkerframework.checker.nullness.compatqual.NullableDecl"), new FqName("org.checkerframework.checker.nullness.qual.Nullable"), new FqName("edu.umd.cs.findbugs.annotations.Nullable"), new FqName("edu.umd.cs.findbugs.annotations.PossiblyNull"), new FqName("edu.umd.cs.findbugs.annotations.CheckForNull"), new FqName("io.reactivex.annotations.Nullable"), new FqName("io.reactivex.rxjava3.annotations.Nullable"), new FqName("org.eclipse.jdt.annotation.Nullable"));
        f32798s = i11;
        f32799t = x0.i(fqName3, fqName7);
        f32800u = x0.m(x0.m(x0.m(x0.m(x0.l(x0.l(new LinkedHashSet(), i10), i11), fqName9), fqName2), fqName6), fqName8);
        f32801v = x0.i(JvmAnnotationNames.JETBRAINS_READONLY_ANNOTATION, JvmAnnotationNames.READONLY_ANNOTATION);
        f32802w = x0.i(JvmAnnotationNames.JETBRAINS_MUTABLE_ANNOTATION, JvmAnnotationNames.MUTABLE_ANNOTATION);
        f32803x = o0.m(v.a(JvmAnnotationNames.TARGET_ANNOTATION, StandardNames.FqNames.target), v.a(JvmAnnotationNames.RETENTION_ANNOTATION, StandardNames.FqNames.retention), v.a(JvmAnnotationNames.DEPRECATED_ANNOTATION, StandardNames.FqNames.deprecated), v.a(JvmAnnotationNames.DOCUMENTED_ANNOTATION, StandardNames.FqNames.mustBeDocumented));
        f32804y = new FqName("kotlin.annotations.jvm.UnderMigration");
    }

    @NotNull
    public static final Set<FqName> getBUILT_IN_TYPE_QUALIFIER_ANNOTATIONS() {
        return f32796q;
    }

    @NotNull
    public static final Set<FqName> getFORCE_FLEXIBILITY_ANNOTATIONS() {
        return f32799t;
    }

    @NotNull
    public static final FqName getJAVAX_NONNULL_ANNOTATION_FQ_NAME() {
        return f32791l;
    }

    @NotNull
    public static final FqName getJAVAX_PARAMETERS_ARE_NONNULL_BY_DEFAULT_ANNOTATION_FQ_NAME() {
        return f32794o;
    }

    @NotNull
    public static final FqName getJAVAX_PARAMETERS_ARE_NULLABLE_BY_DEFAULT_ANNOTATION_FQ_NAME() {
        return f32795p;
    }

    @NotNull
    public static final FqName getJAVAX_TYPE_QUALIFIER_ANNOTATION_FQ_NAME() {
        return f32788i;
    }

    @NotNull
    public static final FqName getJAVAX_TYPE_QUALIFIER_DEFAULT_ANNOTATION_FQ_NAME() {
        return f32790k;
    }

    @NotNull
    public static final FqName getJAVAX_TYPE_QUALIFIER_NICKNAME_ANNOTATION_FQ_NAME() {
        return f32789j;
    }

    @NotNull
    public static final FqName getJSPECIFY_NULL_MARKED_ANNOTATION_FQ_NAME() {
        return f32785f;
    }

    @NotNull
    public static final FqName getJSPECIFY_NULL_UNMARKED_ANNOTATION_FQ_NAME() {
        return f32787h;
    }

    @NotNull
    public static final FqName getJSPECIFY_OLD_NULL_MARKED_ANNOTATION_FQ_NAME() {
        return f32781b;
    }

    @NotNull
    public static final Set<FqName> getMUTABLE_ANNOTATIONS() {
        return f32802w;
    }

    @NotNull
    public static final Set<FqName> getNOT_NULL_ANNOTATIONS() {
        return f32797r;
    }

    @NotNull
    public static final Set<FqName> getNULLABLE_ANNOTATIONS() {
        return f32798s;
    }

    @NotNull
    public static final Set<FqName> getREAD_ONLY_ANNOTATIONS() {
        return f32801v;
    }

    @NotNull
    public static final FqName getUNDER_MIGRATION_ANNOTATION_FQ_NAME() {
        return f32804y;
    }
}

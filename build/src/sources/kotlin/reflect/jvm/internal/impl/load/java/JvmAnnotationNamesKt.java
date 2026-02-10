package kotlin.reflect.jvm.internal.impl.load.java;

import as.v;
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
    private static final FqName f32711a;

    /* renamed from: b  reason: collision with root package name */
    private static final FqName f32712b;

    /* renamed from: c  reason: collision with root package name */
    private static final FqName f32713c;

    /* renamed from: d  reason: collision with root package name */
    private static final FqName f32714d;

    /* renamed from: e  reason: collision with root package name */
    private static final FqName f32715e;

    /* renamed from: f  reason: collision with root package name */
    private static final FqName f32716f;

    /* renamed from: g  reason: collision with root package name */
    private static final FqName f32717g;

    /* renamed from: h  reason: collision with root package name */
    private static final FqName f32718h;

    /* renamed from: i  reason: collision with root package name */
    private static final FqName f32719i;

    /* renamed from: j  reason: collision with root package name */
    private static final FqName f32720j;

    /* renamed from: k  reason: collision with root package name */
    private static final FqName f32721k;

    /* renamed from: l  reason: collision with root package name */
    private static final FqName f32722l;

    /* renamed from: m  reason: collision with root package name */
    private static final FqName f32723m;

    /* renamed from: n  reason: collision with root package name */
    private static final FqName f32724n;

    /* renamed from: o  reason: collision with root package name */
    private static final FqName f32725o;

    /* renamed from: p  reason: collision with root package name */
    private static final FqName f32726p;

    /* renamed from: q  reason: collision with root package name */
    private static final Set f32727q;

    /* renamed from: r  reason: collision with root package name */
    private static final Set f32728r;

    /* renamed from: s  reason: collision with root package name */
    private static final Set f32729s;

    /* renamed from: t  reason: collision with root package name */
    private static final Set f32730t;

    /* renamed from: u  reason: collision with root package name */
    private static final Set f32731u;

    /* renamed from: v  reason: collision with root package name */
    private static final Set f32732v;

    /* renamed from: w  reason: collision with root package name */
    private static final Set f32733w;

    /* renamed from: x  reason: collision with root package name */
    private static final Map f32734x;

    /* renamed from: y  reason: collision with root package name */
    private static final FqName f32735y;

    static {
        FqName fqName = new FqName("org.jspecify.nullness.Nullable");
        f32711a = fqName;
        FqName fqName2 = new FqName("org.jspecify.nullness.NullMarked");
        f32712b = fqName2;
        FqName fqName3 = new FqName("org.jspecify.nullness.NullnessUnspecified");
        f32713c = fqName3;
        FqName fqName4 = new FqName("org.jspecify.annotations.NonNull");
        f32714d = fqName4;
        FqName fqName5 = new FqName("org.jspecify.annotations.Nullable");
        f32715e = fqName5;
        FqName fqName6 = new FqName("org.jspecify.annotations.NullMarked");
        f32716f = fqName6;
        FqName fqName7 = new FqName("org.jspecify.annotations.NullnessUnspecified");
        f32717g = fqName7;
        FqName fqName8 = new FqName("org.jspecify.annotations.NullUnmarked");
        f32718h = fqName8;
        f32719i = new FqName("javax.annotation.meta.TypeQualifier");
        f32720j = new FqName("javax.annotation.meta.TypeQualifierNickname");
        f32721k = new FqName("javax.annotation.meta.TypeQualifierDefault");
        FqName fqName9 = new FqName("javax.annotation.Nonnull");
        f32722l = fqName9;
        FqName fqName10 = new FqName("javax.annotation.Nullable");
        f32723m = fqName10;
        FqName fqName11 = new FqName("javax.annotation.CheckForNull");
        f32724n = fqName11;
        f32725o = new FqName("javax.annotation.ParametersAreNonnullByDefault");
        f32726p = new FqName("javax.annotation.ParametersAreNullableByDefault");
        f32727q = x0.i(fqName9, fqName11);
        Set i10 = x0.i(JvmAnnotationNames.JETBRAINS_NOT_NULL_ANNOTATION, fqName4, new FqName("android.annotation.NonNull"), new FqName("androidx.annotation.NonNull"), new FqName("androidx.annotation.RecentlyNonNull"), new FqName("android.support.annotation.NonNull"), new FqName("com.android.annotations.NonNull"), new FqName("org.checkerframework.checker.nullness.compatqual.NonNullDecl"), new FqName("org.checkerframework.checker.nullness.qual.NonNull"), new FqName("edu.umd.cs.findbugs.annotations.NonNull"), new FqName("io.reactivex.annotations.NonNull"), new FqName("io.reactivex.rxjava3.annotations.NonNull"), new FqName("org.eclipse.jdt.annotation.NonNull"), new FqName("lombok.NonNull"));
        f32728r = i10;
        Set i11 = x0.i(JvmAnnotationNames.JETBRAINS_NULLABLE_ANNOTATION, fqName, fqName5, fqName10, fqName11, new FqName("android.annotation.Nullable"), new FqName("androidx.annotation.Nullable"), new FqName("androidx.annotation.RecentlyNullable"), new FqName("android.support.annotation.Nullable"), new FqName("com.android.annotations.Nullable"), new FqName("org.checkerframework.checker.nullness.compatqual.NullableDecl"), new FqName("org.checkerframework.checker.nullness.qual.Nullable"), new FqName("edu.umd.cs.findbugs.annotations.Nullable"), new FqName("edu.umd.cs.findbugs.annotations.PossiblyNull"), new FqName("edu.umd.cs.findbugs.annotations.CheckForNull"), new FqName("io.reactivex.annotations.Nullable"), new FqName("io.reactivex.rxjava3.annotations.Nullable"), new FqName("org.eclipse.jdt.annotation.Nullable"));
        f32729s = i11;
        f32730t = x0.i(fqName3, fqName7);
        f32731u = x0.m(x0.m(x0.m(x0.m(x0.l(x0.l(new LinkedHashSet(), i10), i11), fqName9), fqName2), fqName6), fqName8);
        f32732v = x0.i(JvmAnnotationNames.JETBRAINS_READONLY_ANNOTATION, JvmAnnotationNames.READONLY_ANNOTATION);
        f32733w = x0.i(JvmAnnotationNames.JETBRAINS_MUTABLE_ANNOTATION, JvmAnnotationNames.MUTABLE_ANNOTATION);
        f32734x = o0.m(v.a(JvmAnnotationNames.TARGET_ANNOTATION, StandardNames.FqNames.target), v.a(JvmAnnotationNames.RETENTION_ANNOTATION, StandardNames.FqNames.retention), v.a(JvmAnnotationNames.DEPRECATED_ANNOTATION, StandardNames.FqNames.deprecated), v.a(JvmAnnotationNames.DOCUMENTED_ANNOTATION, StandardNames.FqNames.mustBeDocumented));
        f32735y = new FqName("kotlin.annotations.jvm.UnderMigration");
    }

    @NotNull
    public static final Set<FqName> getBUILT_IN_TYPE_QUALIFIER_ANNOTATIONS() {
        return f32727q;
    }

    @NotNull
    public static final Set<FqName> getFORCE_FLEXIBILITY_ANNOTATIONS() {
        return f32730t;
    }

    @NotNull
    public static final FqName getJAVAX_NONNULL_ANNOTATION_FQ_NAME() {
        return f32722l;
    }

    @NotNull
    public static final FqName getJAVAX_PARAMETERS_ARE_NONNULL_BY_DEFAULT_ANNOTATION_FQ_NAME() {
        return f32725o;
    }

    @NotNull
    public static final FqName getJAVAX_PARAMETERS_ARE_NULLABLE_BY_DEFAULT_ANNOTATION_FQ_NAME() {
        return f32726p;
    }

    @NotNull
    public static final FqName getJAVAX_TYPE_QUALIFIER_ANNOTATION_FQ_NAME() {
        return f32719i;
    }

    @NotNull
    public static final FqName getJAVAX_TYPE_QUALIFIER_DEFAULT_ANNOTATION_FQ_NAME() {
        return f32721k;
    }

    @NotNull
    public static final FqName getJAVAX_TYPE_QUALIFIER_NICKNAME_ANNOTATION_FQ_NAME() {
        return f32720j;
    }

    @NotNull
    public static final FqName getJSPECIFY_NULL_MARKED_ANNOTATION_FQ_NAME() {
        return f32716f;
    }

    @NotNull
    public static final FqName getJSPECIFY_NULL_UNMARKED_ANNOTATION_FQ_NAME() {
        return f32718h;
    }

    @NotNull
    public static final FqName getJSPECIFY_OLD_NULL_MARKED_ANNOTATION_FQ_NAME() {
        return f32712b;
    }

    @NotNull
    public static final Set<FqName> getMUTABLE_ANNOTATIONS() {
        return f32733w;
    }

    @NotNull
    public static final Set<FqName> getNOT_NULL_ANNOTATIONS() {
        return f32728r;
    }

    @NotNull
    public static final Set<FqName> getNULLABLE_ANNOTATIONS() {
        return f32729s;
    }

    @NotNull
    public static final Set<FqName> getREAD_ONLY_ANNOTATIONS() {
        return f32732v;
    }

    @NotNull
    public static final FqName getUNDER_MIGRATION_ANNOTATION_FQ_NAME() {
        return f32735y;
    }
}

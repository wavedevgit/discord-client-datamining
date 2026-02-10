package kotlin.reflect.jvm.internal.impl.load.java;

import java.util.LinkedHashSet;
import java.util.Map;
import java.util.Set;
import kotlin.collections.o0;
import kotlin.collections.x0;
import kotlin.reflect.jvm.internal.impl.builtins.StandardNames;
import kotlin.reflect.jvm.internal.impl.name.FqName;
import org.jetbrains.annotations.NotNull;
import rr.v;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public final class JvmAnnotationNamesKt {

    /* renamed from: a  reason: collision with root package name */
    private static final FqName f32489a;

    /* renamed from: b  reason: collision with root package name */
    private static final FqName f32490b;

    /* renamed from: c  reason: collision with root package name */
    private static final FqName f32491c;

    /* renamed from: d  reason: collision with root package name */
    private static final FqName f32492d;

    /* renamed from: e  reason: collision with root package name */
    private static final FqName f32493e;

    /* renamed from: f  reason: collision with root package name */
    private static final FqName f32494f;

    /* renamed from: g  reason: collision with root package name */
    private static final FqName f32495g;

    /* renamed from: h  reason: collision with root package name */
    private static final FqName f32496h;

    /* renamed from: i  reason: collision with root package name */
    private static final FqName f32497i;

    /* renamed from: j  reason: collision with root package name */
    private static final FqName f32498j;

    /* renamed from: k  reason: collision with root package name */
    private static final FqName f32499k;

    /* renamed from: l  reason: collision with root package name */
    private static final FqName f32500l;

    /* renamed from: m  reason: collision with root package name */
    private static final FqName f32501m;

    /* renamed from: n  reason: collision with root package name */
    private static final FqName f32502n;

    /* renamed from: o  reason: collision with root package name */
    private static final FqName f32503o;

    /* renamed from: p  reason: collision with root package name */
    private static final FqName f32504p;

    /* renamed from: q  reason: collision with root package name */
    private static final Set f32505q;

    /* renamed from: r  reason: collision with root package name */
    private static final Set f32506r;

    /* renamed from: s  reason: collision with root package name */
    private static final Set f32507s;

    /* renamed from: t  reason: collision with root package name */
    private static final Set f32508t;

    /* renamed from: u  reason: collision with root package name */
    private static final Set f32509u;

    /* renamed from: v  reason: collision with root package name */
    private static final Set f32510v;

    /* renamed from: w  reason: collision with root package name */
    private static final Set f32511w;

    /* renamed from: x  reason: collision with root package name */
    private static final Map f32512x;

    /* renamed from: y  reason: collision with root package name */
    private static final FqName f32513y;

    static {
        FqName fqName = new FqName("org.jspecify.nullness.Nullable");
        f32489a = fqName;
        FqName fqName2 = new FqName("org.jspecify.nullness.NullMarked");
        f32490b = fqName2;
        FqName fqName3 = new FqName("org.jspecify.nullness.NullnessUnspecified");
        f32491c = fqName3;
        FqName fqName4 = new FqName("org.jspecify.annotations.NonNull");
        f32492d = fqName4;
        FqName fqName5 = new FqName("org.jspecify.annotations.Nullable");
        f32493e = fqName5;
        FqName fqName6 = new FqName("org.jspecify.annotations.NullMarked");
        f32494f = fqName6;
        FqName fqName7 = new FqName("org.jspecify.annotations.NullnessUnspecified");
        f32495g = fqName7;
        FqName fqName8 = new FqName("org.jspecify.annotations.NullUnmarked");
        f32496h = fqName8;
        f32497i = new FqName("javax.annotation.meta.TypeQualifier");
        f32498j = new FqName("javax.annotation.meta.TypeQualifierNickname");
        f32499k = new FqName("javax.annotation.meta.TypeQualifierDefault");
        FqName fqName9 = new FqName("javax.annotation.Nonnull");
        f32500l = fqName9;
        FqName fqName10 = new FqName("javax.annotation.Nullable");
        f32501m = fqName10;
        FqName fqName11 = new FqName("javax.annotation.CheckForNull");
        f32502n = fqName11;
        f32503o = new FqName("javax.annotation.ParametersAreNonnullByDefault");
        f32504p = new FqName("javax.annotation.ParametersAreNullableByDefault");
        f32505q = x0.i(fqName9, fqName11);
        Set i10 = x0.i(JvmAnnotationNames.JETBRAINS_NOT_NULL_ANNOTATION, fqName4, new FqName("android.annotation.NonNull"), new FqName("androidx.annotation.NonNull"), new FqName("androidx.annotation.RecentlyNonNull"), new FqName("android.support.annotation.NonNull"), new FqName("com.android.annotations.NonNull"), new FqName("org.checkerframework.checker.nullness.compatqual.NonNullDecl"), new FqName("org.checkerframework.checker.nullness.qual.NonNull"), new FqName("edu.umd.cs.findbugs.annotations.NonNull"), new FqName("io.reactivex.annotations.NonNull"), new FqName("io.reactivex.rxjava3.annotations.NonNull"), new FqName("org.eclipse.jdt.annotation.NonNull"), new FqName("lombok.NonNull"));
        f32506r = i10;
        Set i11 = x0.i(JvmAnnotationNames.JETBRAINS_NULLABLE_ANNOTATION, fqName, fqName5, fqName10, fqName11, new FqName("android.annotation.Nullable"), new FqName("androidx.annotation.Nullable"), new FqName("androidx.annotation.RecentlyNullable"), new FqName("android.support.annotation.Nullable"), new FqName("com.android.annotations.Nullable"), new FqName("org.checkerframework.checker.nullness.compatqual.NullableDecl"), new FqName("org.checkerframework.checker.nullness.qual.Nullable"), new FqName("edu.umd.cs.findbugs.annotations.Nullable"), new FqName("edu.umd.cs.findbugs.annotations.PossiblyNull"), new FqName("edu.umd.cs.findbugs.annotations.CheckForNull"), new FqName("io.reactivex.annotations.Nullable"), new FqName("io.reactivex.rxjava3.annotations.Nullable"), new FqName("org.eclipse.jdt.annotation.Nullable"));
        f32507s = i11;
        f32508t = x0.i(fqName3, fqName7);
        f32509u = x0.m(x0.m(x0.m(x0.m(x0.l(x0.l(new LinkedHashSet(), i10), i11), fqName9), fqName2), fqName6), fqName8);
        f32510v = x0.i(JvmAnnotationNames.JETBRAINS_READONLY_ANNOTATION, JvmAnnotationNames.READONLY_ANNOTATION);
        f32511w = x0.i(JvmAnnotationNames.JETBRAINS_MUTABLE_ANNOTATION, JvmAnnotationNames.MUTABLE_ANNOTATION);
        f32512x = o0.m(v.a(JvmAnnotationNames.TARGET_ANNOTATION, StandardNames.FqNames.target), v.a(JvmAnnotationNames.RETENTION_ANNOTATION, StandardNames.FqNames.retention), v.a(JvmAnnotationNames.DEPRECATED_ANNOTATION, StandardNames.FqNames.deprecated), v.a(JvmAnnotationNames.DOCUMENTED_ANNOTATION, StandardNames.FqNames.mustBeDocumented));
        f32513y = new FqName("kotlin.annotations.jvm.UnderMigration");
    }

    @NotNull
    public static final Set<FqName> getBUILT_IN_TYPE_QUALIFIER_ANNOTATIONS() {
        return f32505q;
    }

    @NotNull
    public static final Set<FqName> getFORCE_FLEXIBILITY_ANNOTATIONS() {
        return f32508t;
    }

    @NotNull
    public static final FqName getJAVAX_NONNULL_ANNOTATION_FQ_NAME() {
        return f32500l;
    }

    @NotNull
    public static final FqName getJAVAX_PARAMETERS_ARE_NONNULL_BY_DEFAULT_ANNOTATION_FQ_NAME() {
        return f32503o;
    }

    @NotNull
    public static final FqName getJAVAX_PARAMETERS_ARE_NULLABLE_BY_DEFAULT_ANNOTATION_FQ_NAME() {
        return f32504p;
    }

    @NotNull
    public static final FqName getJAVAX_TYPE_QUALIFIER_ANNOTATION_FQ_NAME() {
        return f32497i;
    }

    @NotNull
    public static final FqName getJAVAX_TYPE_QUALIFIER_DEFAULT_ANNOTATION_FQ_NAME() {
        return f32499k;
    }

    @NotNull
    public static final FqName getJAVAX_TYPE_QUALIFIER_NICKNAME_ANNOTATION_FQ_NAME() {
        return f32498j;
    }

    @NotNull
    public static final FqName getJSPECIFY_NULL_MARKED_ANNOTATION_FQ_NAME() {
        return f32494f;
    }

    @NotNull
    public static final FqName getJSPECIFY_NULL_UNMARKED_ANNOTATION_FQ_NAME() {
        return f32496h;
    }

    @NotNull
    public static final FqName getJSPECIFY_OLD_NULL_MARKED_ANNOTATION_FQ_NAME() {
        return f32490b;
    }

    @NotNull
    public static final Set<FqName> getMUTABLE_ANNOTATIONS() {
        return f32511w;
    }

    @NotNull
    public static final Set<FqName> getNOT_NULL_ANNOTATIONS() {
        return f32506r;
    }

    @NotNull
    public static final Set<FqName> getNULLABLE_ANNOTATIONS() {
        return f32507s;
    }

    @NotNull
    public static final Set<FqName> getREAD_ONLY_ANNOTATIONS() {
        return f32510v;
    }

    @NotNull
    public static final FqName getUNDER_MIGRATION_ANNOTATION_FQ_NAME() {
        return f32513y;
    }
}

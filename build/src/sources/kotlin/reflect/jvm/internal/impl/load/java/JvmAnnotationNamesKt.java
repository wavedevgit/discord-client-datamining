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
    private static final FqName f33280a;

    /* renamed from: b  reason: collision with root package name */
    private static final FqName f33281b;

    /* renamed from: c  reason: collision with root package name */
    private static final FqName f33282c;

    /* renamed from: d  reason: collision with root package name */
    private static final FqName f33283d;

    /* renamed from: e  reason: collision with root package name */
    private static final FqName f33284e;

    /* renamed from: f  reason: collision with root package name */
    private static final FqName f33285f;

    /* renamed from: g  reason: collision with root package name */
    private static final FqName f33286g;

    /* renamed from: h  reason: collision with root package name */
    private static final FqName f33287h;

    /* renamed from: i  reason: collision with root package name */
    private static final FqName f33288i;

    /* renamed from: j  reason: collision with root package name */
    private static final FqName f33289j;

    /* renamed from: k  reason: collision with root package name */
    private static final FqName f33290k;

    /* renamed from: l  reason: collision with root package name */
    private static final FqName f33291l;

    /* renamed from: m  reason: collision with root package name */
    private static final FqName f33292m;

    /* renamed from: n  reason: collision with root package name */
    private static final FqName f33293n;

    /* renamed from: o  reason: collision with root package name */
    private static final FqName f33294o;

    /* renamed from: p  reason: collision with root package name */
    private static final FqName f33295p;

    /* renamed from: q  reason: collision with root package name */
    private static final Set f33296q;

    /* renamed from: r  reason: collision with root package name */
    private static final Set f33297r;

    /* renamed from: s  reason: collision with root package name */
    private static final Set f33298s;

    /* renamed from: t  reason: collision with root package name */
    private static final Set f33299t;

    /* renamed from: u  reason: collision with root package name */
    private static final Set f33300u;

    /* renamed from: v  reason: collision with root package name */
    private static final Set f33301v;

    /* renamed from: w  reason: collision with root package name */
    private static final Set f33302w;

    /* renamed from: x  reason: collision with root package name */
    private static final Map f33303x;

    /* renamed from: y  reason: collision with root package name */
    private static final FqName f33304y;

    static {
        FqName fqName = new FqName("org.jspecify.nullness.Nullable");
        f33280a = fqName;
        FqName fqName2 = new FqName("org.jspecify.nullness.NullMarked");
        f33281b = fqName2;
        FqName fqName3 = new FqName("org.jspecify.nullness.NullnessUnspecified");
        f33282c = fqName3;
        FqName fqName4 = new FqName("org.jspecify.annotations.NonNull");
        f33283d = fqName4;
        FqName fqName5 = new FqName("org.jspecify.annotations.Nullable");
        f33284e = fqName5;
        FqName fqName6 = new FqName("org.jspecify.annotations.NullMarked");
        f33285f = fqName6;
        FqName fqName7 = new FqName("org.jspecify.annotations.NullnessUnspecified");
        f33286g = fqName7;
        FqName fqName8 = new FqName("org.jspecify.annotations.NullUnmarked");
        f33287h = fqName8;
        f33288i = new FqName("javax.annotation.meta.TypeQualifier");
        f33289j = new FqName("javax.annotation.meta.TypeQualifierNickname");
        f33290k = new FqName("javax.annotation.meta.TypeQualifierDefault");
        FqName fqName9 = new FqName("javax.annotation.Nonnull");
        f33291l = fqName9;
        FqName fqName10 = new FqName("javax.annotation.Nullable");
        f33292m = fqName10;
        FqName fqName11 = new FqName("javax.annotation.CheckForNull");
        f33293n = fqName11;
        f33294o = new FqName("javax.annotation.ParametersAreNonnullByDefault");
        f33295p = new FqName("javax.annotation.ParametersAreNullableByDefault");
        f33296q = x0.i(fqName9, fqName11);
        Set i10 = x0.i(JvmAnnotationNames.JETBRAINS_NOT_NULL_ANNOTATION, fqName4, new FqName("android.annotation.NonNull"), new FqName("androidx.annotation.NonNull"), new FqName("androidx.annotation.RecentlyNonNull"), new FqName("android.support.annotation.NonNull"), new FqName("com.android.annotations.NonNull"), new FqName("org.checkerframework.checker.nullness.compatqual.NonNullDecl"), new FqName("org.checkerframework.checker.nullness.qual.NonNull"), new FqName("edu.umd.cs.findbugs.annotations.NonNull"), new FqName("io.reactivex.annotations.NonNull"), new FqName("io.reactivex.rxjava3.annotations.NonNull"), new FqName("org.eclipse.jdt.annotation.NonNull"), new FqName("lombok.NonNull"));
        f33297r = i10;
        Set i11 = x0.i(JvmAnnotationNames.JETBRAINS_NULLABLE_ANNOTATION, fqName, fqName5, fqName10, fqName11, new FqName("android.annotation.Nullable"), new FqName("androidx.annotation.Nullable"), new FqName("androidx.annotation.RecentlyNullable"), new FqName("android.support.annotation.Nullable"), new FqName("com.android.annotations.Nullable"), new FqName("org.checkerframework.checker.nullness.compatqual.NullableDecl"), new FqName("org.checkerframework.checker.nullness.qual.Nullable"), new FqName("edu.umd.cs.findbugs.annotations.Nullable"), new FqName("edu.umd.cs.findbugs.annotations.PossiblyNull"), new FqName("edu.umd.cs.findbugs.annotations.CheckForNull"), new FqName("io.reactivex.annotations.Nullable"), new FqName("io.reactivex.rxjava3.annotations.Nullable"), new FqName("org.eclipse.jdt.annotation.Nullable"));
        f33298s = i11;
        f33299t = x0.i(fqName3, fqName7);
        f33300u = x0.m(x0.m(x0.m(x0.m(x0.l(x0.l(new LinkedHashSet(), i10), i11), fqName9), fqName2), fqName6), fqName8);
        f33301v = x0.i(JvmAnnotationNames.JETBRAINS_READONLY_ANNOTATION, JvmAnnotationNames.READONLY_ANNOTATION);
        f33302w = x0.i(JvmAnnotationNames.JETBRAINS_MUTABLE_ANNOTATION, JvmAnnotationNames.MUTABLE_ANNOTATION);
        f33303x = o0.m(v.a(JvmAnnotationNames.TARGET_ANNOTATION, StandardNames.FqNames.target), v.a(JvmAnnotationNames.RETENTION_ANNOTATION, StandardNames.FqNames.retention), v.a(JvmAnnotationNames.DEPRECATED_ANNOTATION, StandardNames.FqNames.deprecated), v.a(JvmAnnotationNames.DOCUMENTED_ANNOTATION, StandardNames.FqNames.mustBeDocumented));
        f33304y = new FqName("kotlin.annotations.jvm.UnderMigration");
    }

    @NotNull
    public static final Set<FqName> getBUILT_IN_TYPE_QUALIFIER_ANNOTATIONS() {
        return f33296q;
    }

    @NotNull
    public static final Set<FqName> getFORCE_FLEXIBILITY_ANNOTATIONS() {
        return f33299t;
    }

    @NotNull
    public static final FqName getJAVAX_NONNULL_ANNOTATION_FQ_NAME() {
        return f33291l;
    }

    @NotNull
    public static final FqName getJAVAX_PARAMETERS_ARE_NONNULL_BY_DEFAULT_ANNOTATION_FQ_NAME() {
        return f33294o;
    }

    @NotNull
    public static final FqName getJAVAX_PARAMETERS_ARE_NULLABLE_BY_DEFAULT_ANNOTATION_FQ_NAME() {
        return f33295p;
    }

    @NotNull
    public static final FqName getJAVAX_TYPE_QUALIFIER_ANNOTATION_FQ_NAME() {
        return f33288i;
    }

    @NotNull
    public static final FqName getJAVAX_TYPE_QUALIFIER_DEFAULT_ANNOTATION_FQ_NAME() {
        return f33290k;
    }

    @NotNull
    public static final FqName getJAVAX_TYPE_QUALIFIER_NICKNAME_ANNOTATION_FQ_NAME() {
        return f33289j;
    }

    @NotNull
    public static final FqName getJSPECIFY_NULL_MARKED_ANNOTATION_FQ_NAME() {
        return f33285f;
    }

    @NotNull
    public static final FqName getJSPECIFY_NULL_UNMARKED_ANNOTATION_FQ_NAME() {
        return f33287h;
    }

    @NotNull
    public static final FqName getJSPECIFY_OLD_NULL_MARKED_ANNOTATION_FQ_NAME() {
        return f33281b;
    }

    @NotNull
    public static final Set<FqName> getMUTABLE_ANNOTATIONS() {
        return f33302w;
    }

    @NotNull
    public static final Set<FqName> getNOT_NULL_ANNOTATIONS() {
        return f33297r;
    }

    @NotNull
    public static final Set<FqName> getNULLABLE_ANNOTATIONS() {
        return f33298s;
    }

    @NotNull
    public static final Set<FqName> getREAD_ONLY_ANNOTATIONS() {
        return f33301v;
    }

    @NotNull
    public static final FqName getUNDER_MIGRATION_ANNOTATION_FQ_NAME() {
        return f33304y;
    }
}

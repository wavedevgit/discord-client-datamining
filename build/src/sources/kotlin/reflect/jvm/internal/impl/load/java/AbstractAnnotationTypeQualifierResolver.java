package kotlin.reflect.jvm.internal.impl.load.java;

import java.util.ArrayList;
import java.util.Collection;
import java.util.EnumMap;
import java.util.Iterator;
import java.util.LinkedHashMap;
import java.util.LinkedHashSet;
import java.util.Map;
import java.util.Set;
import java.util.concurrent.ConcurrentHashMap;
import kotlin.Pair;
import kotlin.collections.CollectionsKt;
import kotlin.collections.x0;
import kotlin.jvm.functions.Function1;
import kotlin.jvm.internal.DefaultConstructorMarker;
import kotlin.jvm.internal.Intrinsics;
import kotlin.jvm.internal.SourceDebugExtension;
import kotlin.reflect.jvm.internal.impl.builtins.StandardNames;
import kotlin.reflect.jvm.internal.impl.load.java.typeEnhancement.MutabilityQualifier;
import kotlin.reflect.jvm.internal.impl.load.java.typeEnhancement.NullabilityQualifierWithMigrationStatus;
import kotlin.reflect.jvm.internal.impl.name.FqName;
import org.jetbrains.annotations.NotNull;
@SourceDebugExtension({"SMAP\nAbstractAnnotationTypeQualifierResolver.kt\nKotlin\n*S Kotlin\n*F\n+ 1 AbstractAnnotationTypeQualifierResolver.kt\norg/jetbrains/kotlin/load/java/AbstractAnnotationTypeQualifierResolver\n+ 2 fake.kt\nkotlin/jvm/internal/FakeKt\n+ 3 _Collections.kt\nkotlin/collections/CollectionsKt___CollectionsKt\n+ 4 MapsJVM.kt\nkotlin/collections/MapsKt__MapsJVMKt\n+ 5 Maps.kt\nkotlin/collections/MapsKt__MapsKt\n*L\n1#1,234:1\n1#2:235\n1#2:241\n1#2:246\n1#2:268\n1761#3,3:236\n295#3,2:242\n1625#3:244\n1869#3:245\n1870#3:247\n1626#3:248\n1761#3,3:249\n1803#3,3:252\n1803#3,3:255\n1617#3,9:258\n1869#3:267\n1870#3:269\n1626#3:270\n72#4,2:239\n384#5,7:271\n*S KotlinDebug\n*F\n+ 1 AbstractAnnotationTypeQualifierResolver.kt\norg/jetbrains/kotlin/load/java/AbstractAnnotationTypeQualifierResolver\n*L\n42#1:241\n83#1:246\n164#1:268\n30#1:236,3\n81#1:242,2\n83#1:244\n83#1:245\n83#1:247\n83#1:248\n90#1:249,3\n126#1:252,3\n138#1:255,3\n164#1:258,9\n164#1:267\n164#1:269\n164#1:270\n42#1:239,2\n229#1:271,7\n*E\n"})
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public abstract class AbstractAnnotationTypeQualifierResolver<TAnnotation> {

    /* renamed from: c  reason: collision with root package name */
    private static final a f33954c = new a(null);

    /* renamed from: d  reason: collision with root package name */
    private static final Map f33955d;

    /* renamed from: a  reason: collision with root package name */
    private final JavaTypeEnhancementState f33956a;

    /* renamed from: b  reason: collision with root package name */
    private final ConcurrentHashMap f33957b;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
    private static final class a {
        public /* synthetic */ a(DefaultConstructorMarker defaultConstructorMarker) {
            this();
        }

        private a() {
        }
    }

    static {
        AnnotationQualifierApplicabilityType[] values;
        LinkedHashMap linkedHashMap = new LinkedHashMap();
        for (AnnotationQualifierApplicabilityType annotationQualifierApplicabilityType : AnnotationQualifierApplicabilityType.values()) {
            String javaTarget = annotationQualifierApplicabilityType.getJavaTarget();
            if (linkedHashMap.get(javaTarget) == null) {
                linkedHashMap.put(javaTarget, annotationQualifierApplicabilityType);
            }
        }
        f33955d = linkedHashMap;
    }

    public AbstractAnnotationTypeQualifierResolver(@NotNull JavaTypeEnhancementState javaTypeEnhancementState) {
        Intrinsics.checkNotNullParameter(javaTypeEnhancementState, "javaTypeEnhancementState");
        this.f33956a = javaTypeEnhancementState;
        this.f33957b = new ConcurrentHashMap();
    }

    private final Set b(Set set) {
        if (set.contains(AnnotationQualifierApplicabilityType.TYPE_USE)) {
            return x0.l(x0.k(kotlin.collections.i.f1(AnnotationQualifierApplicabilityType.values()), AnnotationQualifierApplicabilityType.TYPE_PARAMETER_BOUNDS), set);
        }
        return set;
    }

    private final JavaDefaultQualifiers c(Object obj) {
        NullabilityQualifierWithMigrationStatus e10;
        JavaDefaultQualifiers l10 = l(obj);
        if (l10 != null) {
            return l10;
        }
        Pair m10 = m(obj);
        if (m10 == null) {
            return null;
        }
        Object a10 = m10.a();
        Set set = (Set) m10.b();
        ReportLevel k10 = k(obj);
        if (k10 == null) {
            k10 = j(a10);
        }
        if (k10.isIgnore() || (e10 = e(a10, kotlin.reflect.jvm.internal.impl.load.java.a.f34064d)) == null) {
            return null;
        }
        return new JavaDefaultQualifiers(NullabilityQualifierWithMigrationStatus.copy$default(e10, null, k10.isWarning(), 1, null), set, false, 4, null);
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final boolean d(Object extractNullability) {
        Intrinsics.checkNotNullParameter(extractNullability, "$this$extractNullability");
        return false;
    }

    /* JADX WARN: Multi-variable type inference failed */
    private final NullabilityQualifierWithMigrationStatus e(Object obj, Function1 function1) {
        NullabilityQualifierWithMigrationStatus h10;
        NullabilityQualifierWithMigrationStatus h11 = h(obj, ((Boolean) function1.invoke(obj)).booleanValue());
        if (h11 != null) {
            return h11;
        }
        TAnnotation resolveTypeQualifierAnnotation = resolveTypeQualifierAnnotation(obj);
        if (resolveTypeQualifierAnnotation == null) {
            return null;
        }
        ReportLevel j10 = j(obj);
        if (j10.isIgnore() || (h10 = h(resolveTypeQualifierAnnotation, ((Boolean) function1.invoke(resolveTypeQualifierAnnotation)).booleanValue())) == null) {
            return null;
        }
        return NullabilityQualifierWithMigrationStatus.copy$default(h10, null, j10.isWarning(), 1, null);
    }

    private final Object f(Object obj, FqName fqName) {
        for (Object obj2 : getMetaAnnotations(obj)) {
            if (Intrinsics.areEqual(getFqName(obj2), fqName)) {
                return obj2;
            }
        }
        return null;
    }

    private final boolean g(Object obj, FqName fqName) {
        Iterable<Object> metaAnnotations = getMetaAnnotations(obj);
        if ((metaAnnotations instanceof Collection) && ((Collection) metaAnnotations).isEmpty()) {
            return false;
        }
        for (Object obj2 : metaAnnotations) {
            if (Intrinsics.areEqual(getFqName(obj2), fqName)) {
                return true;
            }
        }
        return false;
    }

    /* JADX WARN: Code restructure failed: missing block: B:25:0x0067, code lost:
        if (r6.equals("ALWAYS") != false) goto L40;
     */
    /* JADX WARN: Code restructure failed: missing block: B:32:0x007c, code lost:
        if (r6.equals("NEVER") == false) goto L39;
     */
    /* JADX WARN: Code restructure failed: missing block: B:35:0x0085, code lost:
        if (r6.equals("MAYBE") == false) goto L39;
     */
    /* JADX WARN: Code restructure failed: missing block: B:37:0x0088, code lost:
        r6 = kotlin.reflect.jvm.internal.impl.load.java.typeEnhancement.NullabilityQualifier.NULLABLE;
     */
    /*
        Code decompiled incorrectly, please refer to instructions dump.
        To view partially-correct add '--show-bad-code' argument
    */
    private final kotlin.reflect.jvm.internal.impl.load.java.typeEnhancement.NullabilityQualifierWithMigrationStatus h(java.lang.Object r6, boolean r7) {
        /*
            r5 = this;
            kotlin.reflect.jvm.internal.impl.name.FqName r0 = r5.getFqName(r6)
            r1 = 0
            if (r0 != 0) goto L8
            return r1
        L8:
            kotlin.reflect.jvm.internal.impl.load.java.JavaTypeEnhancementState r2 = r5.f33956a
            kotlin.jvm.functions.Function1 r2 = r2.getGetReportLevelForAnnotation()
            java.lang.Object r2 = r2.invoke(r0)
            kotlin.reflect.jvm.internal.impl.load.java.ReportLevel r2 = (kotlin.reflect.jvm.internal.impl.load.java.ReportLevel) r2
            boolean r3 = r2.isIgnore()
            if (r3 == 0) goto L1b
            return r1
        L1b:
            java.util.Set r3 = kotlin.reflect.jvm.internal.impl.load.java.JvmAnnotationNamesKt.getNOT_NULL_ANNOTATIONS()
            boolean r3 = r3.contains(r0)
            r4 = 0
            if (r3 == 0) goto L29
            kotlin.reflect.jvm.internal.impl.load.java.typeEnhancement.NullabilityQualifier r6 = kotlin.reflect.jvm.internal.impl.load.java.typeEnhancement.NullabilityQualifier.NOT_NULL
            goto L8d
        L29:
            java.util.Set r3 = kotlin.reflect.jvm.internal.impl.load.java.JvmAnnotationNamesKt.getNULLABLE_ANNOTATIONS()
            boolean r3 = r3.contains(r0)
            if (r3 == 0) goto L36
            kotlin.reflect.jvm.internal.impl.load.java.typeEnhancement.NullabilityQualifier r6 = kotlin.reflect.jvm.internal.impl.load.java.typeEnhancement.NullabilityQualifier.NULLABLE
            goto L8d
        L36:
            java.util.Set r3 = kotlin.reflect.jvm.internal.impl.load.java.JvmAnnotationNamesKt.getFORCE_FLEXIBILITY_ANNOTATIONS()
            boolean r3 = r3.contains(r0)
            if (r3 == 0) goto L43
            kotlin.reflect.jvm.internal.impl.load.java.typeEnhancement.NullabilityQualifier r6 = kotlin.reflect.jvm.internal.impl.load.java.typeEnhancement.NullabilityQualifier.FORCE_FLEXIBILITY
            goto L8d
        L43:
            kotlin.reflect.jvm.internal.impl.name.FqName r3 = kotlin.reflect.jvm.internal.impl.load.java.JvmAnnotationNamesKt.getJAVAX_NONNULL_ANNOTATION_FQ_NAME()
            boolean r0 = kotlin.jvm.internal.Intrinsics.areEqual(r0, r3)
            if (r0 == 0) goto L9c
            java.lang.Iterable r6 = r5.enumArguments(r6, r4)
            java.lang.Object r6 = kotlin.collections.CollectionsKt.p0(r6)
            java.lang.String r6 = (java.lang.String) r6
            if (r6 == 0) goto L8b
            int r0 = r6.hashCode()
            switch(r0) {
                case 73135176: goto L7f;
                case 74175084: goto L76;
                case 433141802: goto L6a;
                case 1933739535: goto L61;
                default: goto L60;
            }
        L60:
            goto L87
        L61:
            java.lang.String r0 = "ALWAYS"
            boolean r6 = r6.equals(r0)
            if (r6 == 0) goto L87
            goto L8b
        L6a:
            java.lang.String r0 = "UNKNOWN"
            boolean r6 = r6.equals(r0)
            if (r6 != 0) goto L73
            goto L87
        L73:
            kotlin.reflect.jvm.internal.impl.load.java.typeEnhancement.NullabilityQualifier r6 = kotlin.reflect.jvm.internal.impl.load.java.typeEnhancement.NullabilityQualifier.FORCE_FLEXIBILITY
            goto L8d
        L76:
            java.lang.String r0 = "NEVER"
            boolean r6 = r6.equals(r0)
            if (r6 != 0) goto L88
            goto L87
        L7f:
            java.lang.String r0 = "MAYBE"
            boolean r6 = r6.equals(r0)
            if (r6 != 0) goto L88
        L87:
            return r1
        L88:
            kotlin.reflect.jvm.internal.impl.load.java.typeEnhancement.NullabilityQualifier r6 = kotlin.reflect.jvm.internal.impl.load.java.typeEnhancement.NullabilityQualifier.NULLABLE
            goto L8d
        L8b:
            kotlin.reflect.jvm.internal.impl.load.java.typeEnhancement.NullabilityQualifier r6 = kotlin.reflect.jvm.internal.impl.load.java.typeEnhancement.NullabilityQualifier.NOT_NULL
        L8d:
            kotlin.reflect.jvm.internal.impl.load.java.typeEnhancement.NullabilityQualifierWithMigrationStatus r0 = new kotlin.reflect.jvm.internal.impl.load.java.typeEnhancement.NullabilityQualifierWithMigrationStatus
            boolean r1 = r2.isWarning()
            if (r1 != 0) goto L97
            if (r7 == 0) goto L98
        L97:
            r4 = 1
        L98:
            r0.<init>(r6, r4)
            return r0
        L9c:
            return r1
        */
        throw new UnsupportedOperationException("Method not decompiled: kotlin.reflect.jvm.internal.impl.load.java.AbstractAnnotationTypeQualifierResolver.h(java.lang.Object, boolean):kotlin.reflect.jvm.internal.impl.load.java.typeEnhancement.NullabilityQualifierWithMigrationStatus");
    }

    private final ReportLevel i(Object obj) {
        FqName fqName = getFqName(obj);
        if (fqName != null && JavaDefaultQualifiersKt.getJSPECIFY_DEFAULT_ANNOTATIONS().containsKey(fqName)) {
            return (ReportLevel) this.f33956a.getGetReportLevelForAnnotation().invoke(fqName);
        }
        return j(obj);
    }

    private final ReportLevel j(Object obj) {
        ReportLevel k10 = k(obj);
        if (k10 != null) {
            return k10;
        }
        return this.f33956a.getJsr305().getGlobalLevel();
    }

    private final ReportLevel k(Object obj) {
        Iterable enumArguments;
        String str;
        ReportLevel reportLevel = this.f33956a.getJsr305().getUserDefinedLevelForSpecificAnnotation().get(getFqName(obj));
        if (reportLevel != null) {
            return reportLevel;
        }
        Object f10 = f(obj, JvmAnnotationNamesKt.getUNDER_MIGRATION_ANNOTATION_FQ_NAME());
        if (f10 == null || (enumArguments = enumArguments(f10, false)) == null || (str = (String) CollectionsKt.p0(enumArguments)) == null) {
            return null;
        }
        ReportLevel migrationLevel = this.f33956a.getJsr305().getMigrationLevel();
        if (migrationLevel == null) {
            int hashCode = str.hashCode();
            if (hashCode != -2137067054) {
                if (hashCode != -1838656823) {
                    if (hashCode == 2656902 && str.equals("WARN")) {
                        return ReportLevel.WARN;
                    }
                } else if (str.equals("STRICT")) {
                    return ReportLevel.STRICT;
                }
            } else if (str.equals("IGNORE")) {
                return ReportLevel.IGNORE;
            }
            return null;
        }
        return migrationLevel;
    }

    private final JavaDefaultQualifiers l(Object obj) {
        JavaDefaultQualifiers javaDefaultQualifiers;
        if (this.f33956a.getDisabledDefaultAnnotations() || (javaDefaultQualifiers = JavaDefaultQualifiersKt.getBUILT_IN_TYPE_QUALIFIER_DEFAULT_ANNOTATIONS().get(getFqName(obj))) == null) {
            return null;
        }
        ReportLevel i10 = i(obj);
        if (i10 == ReportLevel.IGNORE) {
            i10 = null;
        }
        if (i10 == null) {
            return null;
        }
        return JavaDefaultQualifiers.copy$default(javaDefaultQualifiers, NullabilityQualifierWithMigrationStatus.copy$default(javaDefaultQualifiers.getNullabilityQualifier(), null, i10.isWarning(), 1, null), null, false, 6, null);
    }

    /* JADX WARN: Multi-variable type inference failed */
    private final Pair m(Object obj) {
        Object f10;
        Object obj2;
        if (this.f33956a.getJsr305().isDisabled() || (f10 = f(obj, JvmAnnotationNamesKt.getJAVAX_TYPE_QUALIFIER_DEFAULT_ANNOTATION_FQ_NAME())) == null) {
            return null;
        }
        Iterator it = getMetaAnnotations(obj).iterator();
        while (true) {
            if (it.hasNext()) {
                obj2 = it.next();
                if (resolveTypeQualifierAnnotation(obj2) != null) {
                    break;
                }
            } else {
                obj2 = null;
                break;
            }
        }
        if (obj2 == null) {
            return null;
        }
        Iterable<String> enumArguments = enumArguments(f10, true);
        LinkedHashSet linkedHashSet = new LinkedHashSet();
        for (String str : enumArguments) {
            AnnotationQualifierApplicabilityType annotationQualifierApplicabilityType = (AnnotationQualifierApplicabilityType) f33955d.get(str);
            if (annotationQualifierApplicabilityType != null) {
                linkedHashSet.add(annotationQualifierApplicabilityType);
            }
        }
        return new Pair(obj2, b(linkedHashSet));
    }

    protected abstract Iterable enumArguments(Object obj, boolean z10);

    public final JavaTypeQualifiersByElementType extractAndMergeDefaultQualifiers(JavaTypeQualifiersByElementType javaTypeQualifiersByElementType, @NotNull Iterable<? extends TAnnotation> annotations) {
        EnumMap enumMap;
        EnumMap<AnnotationQualifierApplicabilityType, JavaDefaultQualifiers> defaultQualifiers;
        Intrinsics.checkNotNullParameter(annotations, "annotations");
        if (!this.f33956a.getDisabledDefaultAnnotations()) {
            ArrayList<JavaDefaultQualifiers> arrayList = new ArrayList();
            for (TAnnotation tannotation : annotations) {
                JavaDefaultQualifiers c10 = c(tannotation);
                if (c10 != null) {
                    arrayList.add(c10);
                }
            }
            if (!arrayList.isEmpty()) {
                EnumMap enumMap2 = new EnumMap(AnnotationQualifierApplicabilityType.class);
                for (JavaDefaultQualifiers javaDefaultQualifiers : arrayList) {
                    for (AnnotationQualifierApplicabilityType annotationQualifierApplicabilityType : javaDefaultQualifiers.getQualifierApplicabilityTypes()) {
                        if (enumMap2.containsKey(annotationQualifierApplicabilityType) && isK2()) {
                            JavaDefaultQualifiers javaDefaultQualifiers2 = (JavaDefaultQualifiers) enumMap2.get(annotationQualifierApplicabilityType);
                            if (javaDefaultQualifiers2 != null) {
                                NullabilityQualifierWithMigrationStatus nullabilityQualifier = javaDefaultQualifiers2.getNullabilityQualifier();
                                NullabilityQualifierWithMigrationStatus nullabilityQualifier2 = javaDefaultQualifiers.getNullabilityQualifier();
                                if (!Intrinsics.areEqual(nullabilityQualifier2, nullabilityQualifier) && (!nullabilityQualifier2.isForWarningOnly() || nullabilityQualifier.isForWarningOnly())) {
                                    javaDefaultQualifiers2 = (nullabilityQualifier2.isForWarningOnly() || !nullabilityQualifier.isForWarningOnly()) ? null : javaDefaultQualifiers;
                                }
                                enumMap2.put((EnumMap) annotationQualifierApplicabilityType, (AnnotationQualifierApplicabilityType) javaDefaultQualifiers2);
                            }
                        } else {
                            enumMap2.put((EnumMap) annotationQualifierApplicabilityType, (AnnotationQualifierApplicabilityType) javaDefaultQualifiers);
                        }
                    }
                }
                if (javaTypeQualifiersByElementType != null && (defaultQualifiers = javaTypeQualifiersByElementType.getDefaultQualifiers()) != null) {
                    enumMap = new EnumMap((EnumMap) defaultQualifiers);
                } else {
                    enumMap = new EnumMap(AnnotationQualifierApplicabilityType.class);
                }
                boolean z10 = false;
                for (Map.Entry entry : enumMap2.entrySet()) {
                    AnnotationQualifierApplicabilityType annotationQualifierApplicabilityType2 = (AnnotationQualifierApplicabilityType) entry.getKey();
                    JavaDefaultQualifiers javaDefaultQualifiers3 = (JavaDefaultQualifiers) entry.getValue();
                    if (javaDefaultQualifiers3 != null) {
                        enumMap.put((EnumMap) annotationQualifierApplicabilityType2, (AnnotationQualifierApplicabilityType) javaDefaultQualifiers3);
                        z10 = true;
                    }
                }
                if (z10) {
                    return new JavaTypeQualifiersByElementType(enumMap);
                }
            }
        }
        return javaTypeQualifiersByElementType;
    }

    public final MutabilityQualifier extractMutability(@NotNull Iterable<? extends TAnnotation> annotations) {
        MutabilityQualifier mutabilityQualifier;
        Intrinsics.checkNotNullParameter(annotations, "annotations");
        MutabilityQualifier mutabilityQualifier2 = null;
        for (TAnnotation tannotation : annotations) {
            FqName fqName = getFqName(tannotation);
            if (CollectionsKt.d0(JvmAnnotationNamesKt.getREAD_ONLY_ANNOTATIONS(), fqName)) {
                mutabilityQualifier = MutabilityQualifier.READ_ONLY;
            } else if (CollectionsKt.d0(JvmAnnotationNamesKt.getMUTABLE_ANNOTATIONS(), fqName)) {
                mutabilityQualifier = MutabilityQualifier.MUTABLE;
            } else {
                continue;
            }
            if (mutabilityQualifier2 != null && mutabilityQualifier2 != mutabilityQualifier) {
                return null;
            }
            mutabilityQualifier2 = mutabilityQualifier;
        }
        return mutabilityQualifier2;
    }

    public final NullabilityQualifierWithMigrationStatus extractNullability(@NotNull Iterable<? extends TAnnotation> annotations, @NotNull Function1<? super TAnnotation, Boolean> forceWarning) {
        Intrinsics.checkNotNullParameter(annotations, "annotations");
        Intrinsics.checkNotNullParameter(forceWarning, "forceWarning");
        NullabilityQualifierWithMigrationStatus nullabilityQualifierWithMigrationStatus = null;
        for (TAnnotation tannotation : annotations) {
            NullabilityQualifierWithMigrationStatus e10 = e(tannotation, forceWarning);
            if (nullabilityQualifierWithMigrationStatus != null) {
                if (e10 != null && !Intrinsics.areEqual(e10, nullabilityQualifierWithMigrationStatus) && (!e10.isForWarningOnly() || nullabilityQualifierWithMigrationStatus.isForWarningOnly())) {
                    if (e10.isForWarningOnly() || !nullabilityQualifierWithMigrationStatus.isForWarningOnly()) {
                        return null;
                    }
                }
            }
            nullabilityQualifierWithMigrationStatus = e10;
        }
        return nullabilityQualifierWithMigrationStatus;
    }

    protected abstract FqName getFqName(Object obj);

    protected abstract Object getKey(Object obj);

    protected abstract Iterable getMetaAnnotations(Object obj);

    public abstract boolean isK2();

    public final boolean isTypeUseAnnotation(@NotNull TAnnotation annotation) {
        Intrinsics.checkNotNullParameter(annotation, "annotation");
        Object f10 = f(annotation, StandardNames.FqNames.target);
        if (f10 == null) {
            return false;
        }
        Iterable<String> enumArguments = enumArguments(f10, false);
        if ((enumArguments instanceof Collection) && ((Collection) enumArguments).isEmpty()) {
            return false;
        }
        for (String str : enumArguments) {
            if (Intrinsics.areEqual(str, "TYPE")) {
                return true;
            }
        }
        return false;
    }

    /* JADX WARN: Multi-variable type inference failed */
    public final TAnnotation resolveTypeQualifierAnnotation(@NotNull TAnnotation annotation) {
        TAnnotation tannotation;
        Intrinsics.checkNotNullParameter(annotation, "annotation");
        if (this.f33956a.getJsr305().isDisabled()) {
            return null;
        }
        if (!CollectionsKt.d0(JvmAnnotationNamesKt.getBUILT_IN_TYPE_QUALIFIER_ANNOTATIONS(), getFqName(annotation)) && !g(annotation, JvmAnnotationNamesKt.getJAVAX_TYPE_QUALIFIER_ANNOTATION_FQ_NAME())) {
            if (!g(annotation, JvmAnnotationNamesKt.getJAVAX_TYPE_QUALIFIER_NICKNAME_ANNOTATION_FQ_NAME())) {
                return null;
            }
            ConcurrentHashMap concurrentHashMap = this.f33957b;
            Object key = getKey(annotation);
            TAnnotation tannotation2 = (TAnnotation) concurrentHashMap.get(key);
            if (tannotation2 == null) {
                Iterator it = getMetaAnnotations(annotation).iterator();
                while (true) {
                    if (it.hasNext()) {
                        tannotation = (TAnnotation) resolveTypeQualifierAnnotation(it.next());
                        if (tannotation != null) {
                            break;
                        }
                    } else {
                        tannotation = null;
                        break;
                    }
                }
                if (tannotation == null) {
                    return null;
                }
                TAnnotation tannotation3 = (TAnnotation) concurrentHashMap.putIfAbsent(key, tannotation);
                return tannotation3 == null ? tannotation : tannotation3;
            }
            return tannotation2;
        }
        return annotation;
    }
}

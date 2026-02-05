package kotlin.reflect.jvm.internal.impl.descriptors.annotations;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.Set;
import kotlin.collections.CollectionsKt;
import kotlin.collections.o0;
import kotlin.enums.EnumEntries;
import kotlin.jvm.internal.DefaultConstructorMarker;
import kotlin.jvm.internal.SourceDebugExtension;
import or.v;
import org.jetbrains.annotations.NotNull;
/* JADX WARN: Failed to restore enum class, 'enum' modifier and super class removed */
/* JADX WARN: Unknown enum class pattern. Please report as an issue! */
@SourceDebugExtension({"SMAP\nKotlinTarget.kt\nKotlin\n*S Kotlin\n*F\n+ 1 KotlinTarget.kt\norg/jetbrains/kotlin/descriptors/annotations/KotlinTarget\n+ 2 _Collections.kt\nkotlin/collections/CollectionsKt___CollectionsKt\n*L\n1#1,140:1\n774#2:141\n865#2,2:142\n*S KotlinDebug\n*F\n+ 1 KotlinTarget.kt\norg/jetbrains/kotlin/descriptors/annotations/KotlinTarget\n*L\n81#1:141\n81#1:142,2\n*E\n"})
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public final class KotlinTarget {
    private static final List A;
    private static final List B;
    private static final Map C;
    @NotNull
    public static final Companion Companion;
    private static final /* synthetic */ KotlinTarget[] D;
    private static final /* synthetic */ EnumEntries E;

    /* renamed from: i  reason: collision with root package name */
    private static final HashMap f32347i;

    /* renamed from: o  reason: collision with root package name */
    private static final Set f32348o;

    /* renamed from: p  reason: collision with root package name */
    private static final Set f32349p;

    /* renamed from: q  reason: collision with root package name */
    private static final List f32350q;

    /* renamed from: r  reason: collision with root package name */
    private static final List f32351r;

    /* renamed from: s  reason: collision with root package name */
    private static final List f32352s;

    /* renamed from: t  reason: collision with root package name */
    private static final List f32353t;

    /* renamed from: u  reason: collision with root package name */
    private static final List f32354u;

    /* renamed from: v  reason: collision with root package name */
    private static final List f32355v;

    /* renamed from: w  reason: collision with root package name */
    private static final List f32356w;

    /* renamed from: x  reason: collision with root package name */
    private static final List f32357x;

    /* renamed from: y  reason: collision with root package name */
    private static final List f32358y;

    /* renamed from: z  reason: collision with root package name */
    private static final List f32359z;

    /* renamed from: d  reason: collision with root package name */
    private final String f32360d;

    /* renamed from: e  reason: collision with root package name */
    private final boolean f32361e;
    public static final KotlinTarget CLASS = new KotlinTarget("CLASS", 0, "class", false, 2, null);
    public static final KotlinTarget ANNOTATION_CLASS = new KotlinTarget("ANNOTATION_CLASS", 1, "annotation class", false, 2, null);
    public static final KotlinTarget TYPE_PARAMETER = new KotlinTarget("TYPE_PARAMETER", 2, "type parameter", false);
    public static final KotlinTarget PROPERTY = new KotlinTarget("PROPERTY", 3, "property", false, 2, null);
    public static final KotlinTarget FIELD = new KotlinTarget("FIELD", 4, "field", false, 2, null);
    public static final KotlinTarget LOCAL_VARIABLE = new KotlinTarget("LOCAL_VARIABLE", 5, "local variable", false, 2, null);
    public static final KotlinTarget VALUE_PARAMETER = new KotlinTarget("VALUE_PARAMETER", 6, "value parameter", false, 2, null);
    public static final KotlinTarget CONSTRUCTOR = new KotlinTarget("CONSTRUCTOR", 7, "constructor", false, 2, null);
    public static final KotlinTarget FUNCTION = new KotlinTarget("FUNCTION", 8, "function", false, 2, null);
    public static final KotlinTarget PROPERTY_GETTER = new KotlinTarget("PROPERTY_GETTER", 9, "getter", false, 2, null);
    public static final KotlinTarget PROPERTY_SETTER = new KotlinTarget("PROPERTY_SETTER", 10, "setter", false, 2, null);
    public static final KotlinTarget TYPE = new KotlinTarget("TYPE", 11, "type usage", false);
    public static final KotlinTarget EXPRESSION = new KotlinTarget("EXPRESSION", 12, "expression", false);
    public static final KotlinTarget FILE = new KotlinTarget("FILE", 13, "file", false);
    public static final KotlinTarget TYPEALIAS = new KotlinTarget("TYPEALIAS", 14, "typealias", false);
    public static final KotlinTarget TYPE_PROJECTION = new KotlinTarget("TYPE_PROJECTION", 15, "type projection", false);
    public static final KotlinTarget STAR_PROJECTION = new KotlinTarget("STAR_PROJECTION", 16, "star projection", false);
    public static final KotlinTarget PROPERTY_PARAMETER = new KotlinTarget("PROPERTY_PARAMETER", 17, "property constructor parameter", false);
    public static final KotlinTarget CLASS_ONLY = new KotlinTarget("CLASS_ONLY", 18, "class", false);
    public static final KotlinTarget OBJECT = new KotlinTarget("OBJECT", 19, "object", false);
    public static final KotlinTarget STANDALONE_OBJECT = new KotlinTarget("STANDALONE_OBJECT", 20, "standalone object", false);
    public static final KotlinTarget COMPANION_OBJECT = new KotlinTarget("COMPANION_OBJECT", 21, "companion object", false);
    public static final KotlinTarget INTERFACE = new KotlinTarget("INTERFACE", 22, "interface", false);
    public static final KotlinTarget ENUM_CLASS = new KotlinTarget("ENUM_CLASS", 23, "enum class", false);
    public static final KotlinTarget ENUM_ENTRY = new KotlinTarget("ENUM_ENTRY", 24, "enum entry", false);
    public static final KotlinTarget LOCAL_CLASS = new KotlinTarget("LOCAL_CLASS", 25, "local class", false);
    public static final KotlinTarget LOCAL_FUNCTION = new KotlinTarget("LOCAL_FUNCTION", 26, "local function", false);
    public static final KotlinTarget MEMBER_FUNCTION = new KotlinTarget("MEMBER_FUNCTION", 27, "member function", false);
    public static final KotlinTarget TOP_LEVEL_FUNCTION = new KotlinTarget("TOP_LEVEL_FUNCTION", 28, "top level function", false);
    public static final KotlinTarget MEMBER_PROPERTY = new KotlinTarget("MEMBER_PROPERTY", 29, "member property", false);
    public static final KotlinTarget MEMBER_PROPERTY_WITH_BACKING_FIELD = new KotlinTarget("MEMBER_PROPERTY_WITH_BACKING_FIELD", 30, "member property with backing field", false);
    public static final KotlinTarget MEMBER_PROPERTY_WITH_DELEGATE = new KotlinTarget("MEMBER_PROPERTY_WITH_DELEGATE", 31, "member property with delegate", false);
    public static final KotlinTarget MEMBER_PROPERTY_WITHOUT_FIELD_OR_DELEGATE = new KotlinTarget("MEMBER_PROPERTY_WITHOUT_FIELD_OR_DELEGATE", 32, "member property without backing field or delegate", false);
    public static final KotlinTarget TOP_LEVEL_PROPERTY = new KotlinTarget("TOP_LEVEL_PROPERTY", 33, "top level property", false);
    public static final KotlinTarget TOP_LEVEL_PROPERTY_WITH_BACKING_FIELD = new KotlinTarget("TOP_LEVEL_PROPERTY_WITH_BACKING_FIELD", 34, "top level property with backing field", false);
    public static final KotlinTarget TOP_LEVEL_PROPERTY_WITH_DELEGATE = new KotlinTarget("TOP_LEVEL_PROPERTY_WITH_DELEGATE", 35, "top level property with delegate", false);
    public static final KotlinTarget TOP_LEVEL_PROPERTY_WITHOUT_FIELD_OR_DELEGATE = new KotlinTarget("TOP_LEVEL_PROPERTY_WITHOUT_FIELD_OR_DELEGATE", 36, "top level property without backing field or delegate", false);
    public static final KotlinTarget BACKING_FIELD = new KotlinTarget("BACKING_FIELD", 37, "backing field", false, 2, null);
    public static final KotlinTarget INITIALIZER = new KotlinTarget("INITIALIZER", 38, "initializer", false);
    public static final KotlinTarget DESTRUCTURING_DECLARATION = new KotlinTarget("DESTRUCTURING_DECLARATION", 39, "destructuring declaration", false);
    public static final KotlinTarget LAMBDA_EXPRESSION = new KotlinTarget("LAMBDA_EXPRESSION", 40, "lambda expression", false);
    public static final KotlinTarget ANONYMOUS_FUNCTION = new KotlinTarget("ANONYMOUS_FUNCTION", 41, "anonymous function", false);
    public static final KotlinTarget OBJECT_LITERAL = new KotlinTarget("OBJECT_LITERAL", 42, "object literal", false);

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
    public static final class Companion {
        public /* synthetic */ Companion(DefaultConstructorMarker defaultConstructorMarker) {
            this();
        }

        private Companion() {
        }
    }

    static {
        KotlinTarget[] a10 = a();
        D = a10;
        E = vr.a.a(a10);
        Companion = new Companion(null);
        f32347i = new HashMap();
        for (KotlinTarget kotlinTarget : getEntries()) {
            f32347i.put(kotlinTarget.name(), kotlinTarget);
        }
        EnumEntries entries = getEntries();
        ArrayList arrayList = new ArrayList();
        for (Object obj : entries) {
            if (((KotlinTarget) obj).f32361e) {
                arrayList.add(obj);
            }
        }
        f32348o = CollectionsKt.l1(arrayList);
        f32349p = CollectionsKt.l1(getEntries());
        KotlinTarget kotlinTarget2 = ANNOTATION_CLASS;
        KotlinTarget kotlinTarget3 = CLASS;
        f32350q = CollectionsKt.o(kotlinTarget2, kotlinTarget3);
        f32351r = CollectionsKt.o(LOCAL_CLASS, kotlinTarget3);
        f32352s = CollectionsKt.o(CLASS_ONLY, kotlinTarget3);
        KotlinTarget kotlinTarget4 = COMPANION_OBJECT;
        KotlinTarget kotlinTarget5 = OBJECT;
        f32353t = CollectionsKt.o(kotlinTarget4, kotlinTarget5, kotlinTarget3);
        f32354u = CollectionsKt.o(STANDALONE_OBJECT, kotlinTarget5, kotlinTarget3);
        f32355v = CollectionsKt.o(INTERFACE, kotlinTarget3);
        f32356w = CollectionsKt.o(ENUM_CLASS, kotlinTarget3);
        KotlinTarget kotlinTarget6 = ENUM_ENTRY;
        KotlinTarget kotlinTarget7 = PROPERTY;
        KotlinTarget kotlinTarget8 = FIELD;
        f32357x = CollectionsKt.o(kotlinTarget6, kotlinTarget7, kotlinTarget8);
        KotlinTarget kotlinTarget9 = PROPERTY_SETTER;
        f32358y = CollectionsKt.e(kotlinTarget9);
        KotlinTarget kotlinTarget10 = PROPERTY_GETTER;
        f32359z = CollectionsKt.e(kotlinTarget10);
        A = CollectionsKt.e(FUNCTION);
        KotlinTarget kotlinTarget11 = FILE;
        B = CollectionsKt.e(kotlinTarget11);
        AnnotationUseSiteTarget annotationUseSiteTarget = AnnotationUseSiteTarget.CONSTRUCTOR_PARAMETER;
        KotlinTarget kotlinTarget12 = VALUE_PARAMETER;
        C = o0.m(v.a(annotationUseSiteTarget, kotlinTarget12), v.a(AnnotationUseSiteTarget.FIELD, kotlinTarget8), v.a(AnnotationUseSiteTarget.PROPERTY, kotlinTarget7), v.a(AnnotationUseSiteTarget.FILE, kotlinTarget11), v.a(AnnotationUseSiteTarget.PROPERTY_GETTER, kotlinTarget10), v.a(AnnotationUseSiteTarget.PROPERTY_SETTER, kotlinTarget9), v.a(AnnotationUseSiteTarget.RECEIVER, kotlinTarget12), v.a(AnnotationUseSiteTarget.SETTER_PARAMETER, kotlinTarget12), v.a(AnnotationUseSiteTarget.PROPERTY_DELEGATE_FIELD, kotlinTarget8));
    }

    private KotlinTarget(String str, int i10, String str2, boolean z10) {
        this.f32360d = str2;
        this.f32361e = z10;
    }

    private static final /* synthetic */ KotlinTarget[] a() {
        return new KotlinTarget[]{CLASS, ANNOTATION_CLASS, TYPE_PARAMETER, PROPERTY, FIELD, LOCAL_VARIABLE, VALUE_PARAMETER, CONSTRUCTOR, FUNCTION, PROPERTY_GETTER, PROPERTY_SETTER, TYPE, EXPRESSION, FILE, TYPEALIAS, TYPE_PROJECTION, STAR_PROJECTION, PROPERTY_PARAMETER, CLASS_ONLY, OBJECT, STANDALONE_OBJECT, COMPANION_OBJECT, INTERFACE, ENUM_CLASS, ENUM_ENTRY, LOCAL_CLASS, LOCAL_FUNCTION, MEMBER_FUNCTION, TOP_LEVEL_FUNCTION, MEMBER_PROPERTY, MEMBER_PROPERTY_WITH_BACKING_FIELD, MEMBER_PROPERTY_WITH_DELEGATE, MEMBER_PROPERTY_WITHOUT_FIELD_OR_DELEGATE, TOP_LEVEL_PROPERTY, TOP_LEVEL_PROPERTY_WITH_BACKING_FIELD, TOP_LEVEL_PROPERTY_WITH_DELEGATE, TOP_LEVEL_PROPERTY_WITHOUT_FIELD_OR_DELEGATE, BACKING_FIELD, INITIALIZER, DESTRUCTURING_DECLARATION, LAMBDA_EXPRESSION, ANONYMOUS_FUNCTION, OBJECT_LITERAL};
    }

    @NotNull
    public static EnumEntries getEntries() {
        return E;
    }

    public static KotlinTarget valueOf(String str) {
        return (KotlinTarget) Enum.valueOf(KotlinTarget.class, str);
    }

    public static KotlinTarget[] values() {
        return (KotlinTarget[]) D.clone();
    }

    /* synthetic */ KotlinTarget(String str, int i10, String str2, boolean z10, int i11, DefaultConstructorMarker defaultConstructorMarker) {
        this(str, i10, str2, (i11 & 2) != 0 ? true : z10);
    }
}

package kotlin.reflect.jvm.internal.impl.resolve.scopes;

import java.lang.reflect.Field;
import java.lang.reflect.Modifier;
import java.util.ArrayList;
import java.util.Iterator;
import java.util.List;
import kotlin.collections.CollectionsKt;
import kotlin.jvm.internal.DefaultConstructorMarker;
import kotlin.jvm.internal.Intrinsics;
import kotlin.jvm.internal.SourceDebugExtension;
import org.jetbrains.annotations.NotNull;
@SourceDebugExtension({"SMAP\nMemberScope.kt\nKotlin\n*S Kotlin\n*F\n+ 1 MemberScope.kt\norg/jetbrains/kotlin/resolve/scopes/DescriptorKindFilter\n+ 2 _Collections.kt\nkotlin/collections/CollectionsKt___CollectionsKt\n+ 3 fake.kt\nkotlin/jvm/internal/FakeKt\n+ 4 MemberScope.kt\norg/jetbrains/kotlin/resolve/scopes/DescriptorKindFilter$Companion\n+ 5 _Arrays.kt\nkotlin/collections/ArraysKt___ArraysKt\n*L\n1#1,261:1\n1869#2,2:262\n1740#2,3:264\n295#2,2:267\n1617#2,9:269\n1869#2:278\n1870#2:280\n1626#2:281\n1617#2,9:286\n1869#2:295\n1870#2:297\n1626#2:298\n774#2:303\n865#2,2:304\n1617#2,9:306\n1869#2:315\n1870#2:317\n1626#2:318\n1#3:279\n1#3:296\n1#3:316\n210#4:282\n210#4:299\n3829#5:283\n4344#5,2:284\n3829#5:300\n4344#5,2:301\n*S KotlinDebug\n*F\n+ 1 MemberScope.kt\norg/jetbrains/kotlin/resolve/scopes/DescriptorKindFilter\n*L\n98#1:262,2\n103#1:264,3\n129#1:267,2\n131#1:269,9\n131#1:278\n131#1:280\n131#1:281\n197#1:286,9\n197#1:295\n197#1:297\n197#1:298\n203#1:303\n203#1:304,2\n204#1:306,9\n204#1:315\n204#1:317\n204#1:318\n131#1:279\n197#1:296\n204#1:316\n196#1:282\n202#1:299\n196#1:283\n196#1:284,2\n202#1:300\n202#1:301,2\n*E\n"})
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public final class DescriptorKindFilter {
    @NotNull
    public static final DescriptorKindFilter ALL;
    @NotNull
    public static final DescriptorKindFilter CALLABLES;
    @NotNull
    public static final DescriptorKindFilter CLASSIFIERS;
    @NotNull
    public static final Companion Companion;
    @NotNull
    public static final DescriptorKindFilter FUNCTIONS;
    @NotNull
    public static final DescriptorKindFilter NON_SINGLETON_CLASSIFIERS;
    @NotNull
    public static final DescriptorKindFilter PACKAGES;
    @NotNull
    public static final DescriptorKindFilter SINGLETON_CLASSIFIERS;
    @NotNull
    public static final DescriptorKindFilter TYPE_ALIASES;
    @NotNull
    public static final DescriptorKindFilter VALUES;
    @NotNull
    public static final DescriptorKindFilter VARIABLES;

    /* renamed from: c  reason: collision with root package name */
    private static int f35472c;

    /* renamed from: d  reason: collision with root package name */
    private static final int f35473d;

    /* renamed from: e  reason: collision with root package name */
    private static final int f35474e;

    /* renamed from: f  reason: collision with root package name */
    private static final int f35475f;

    /* renamed from: g  reason: collision with root package name */
    private static final int f35476g;

    /* renamed from: h  reason: collision with root package name */
    private static final int f35477h;

    /* renamed from: i  reason: collision with root package name */
    private static final int f35478i;

    /* renamed from: j  reason: collision with root package name */
    private static final int f35479j;

    /* renamed from: k  reason: collision with root package name */
    private static final int f35480k;

    /* renamed from: l  reason: collision with root package name */
    private static final int f35481l;

    /* renamed from: m  reason: collision with root package name */
    private static final int f35482m;

    /* renamed from: n  reason: collision with root package name */
    private static final List f35483n;

    /* renamed from: o  reason: collision with root package name */
    private static final List f35484o;

    /* renamed from: a  reason: collision with root package name */
    private final List f35485a;

    /* renamed from: b  reason: collision with root package name */
    private final int f35486b;

    @SourceDebugExtension({"SMAP\nMemberScope.kt\nKotlin\n*S Kotlin\n*F\n+ 1 MemberScope.kt\norg/jetbrains/kotlin/resolve/scopes/DescriptorKindFilter$Companion\n+ 2 fake.kt\nkotlin/jvm/internal/FakeKt\n+ 3 _Arrays.kt\nkotlin/collections/ArraysKt___ArraysKt\n*L\n1#1,261:1\n1#2:262\n3829#3:263\n4344#3,2:264\n*S KotlinDebug\n*F\n+ 1 MemberScope.kt\norg/jetbrains/kotlin/resolve/scopes/DescriptorKindFilter$Companion\n*L\n210#1:263\n210#1:264,2\n*E\n"})
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
    public static final class Companion {

        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
        private static final class a {

            /* renamed from: a  reason: collision with root package name */
            private final int f35487a;

            /* renamed from: b  reason: collision with root package name */
            private final String f35488b;

            public a(int i10, String name) {
                Intrinsics.checkNotNullParameter(name, "name");
                this.f35487a = i10;
                this.f35488b = name;
            }

            public final int a() {
                return this.f35487a;
            }

            public final String b() {
                return this.f35488b;
            }
        }

        public /* synthetic */ Companion(DefaultConstructorMarker defaultConstructorMarker) {
            this();
        }

        /* JADX INFO: Access modifiers changed from: private */
        public final int a() {
            int i10 = DescriptorKindFilter.f35472c;
            DescriptorKindFilter.f35472c <<= 1;
            return i10;
        }

        public final int getALL_KINDS_MASK() {
            return DescriptorKindFilter.f35479j;
        }

        public final int getCLASSIFIERS_MASK() {
            return DescriptorKindFilter.f35480k;
        }

        public final int getFUNCTIONS_MASK() {
            return DescriptorKindFilter.f35477h;
        }

        public final int getNON_SINGLETON_CLASSIFIERS_MASK() {
            return DescriptorKindFilter.f35473d;
        }

        public final int getPACKAGES_MASK() {
            return DescriptorKindFilter.f35476g;
        }

        public final int getSINGLETON_CLASSIFIERS_MASK() {
            return DescriptorKindFilter.f35474e;
        }

        public final int getTYPE_ALIASES_MASK() {
            return DescriptorKindFilter.f35475f;
        }

        public final int getVARIABLES_MASK() {
            return DescriptorKindFilter.f35478i;
        }

        private Companion() {
        }
    }

    static {
        Companion.a aVar;
        DescriptorKindFilter descriptorKindFilter;
        Companion.a aVar2;
        Companion companion = new Companion(null);
        Companion = companion;
        f35472c = 1;
        int a10 = companion.a();
        f35473d = a10;
        int a11 = companion.a();
        f35474e = a11;
        int a12 = companion.a();
        f35475f = a12;
        int a13 = companion.a();
        f35476g = a13;
        int a14 = companion.a();
        f35477h = a14;
        int a15 = companion.a();
        f35478i = a15;
        int a16 = companion.a() - 1;
        f35479j = a16;
        int i10 = a10 | a11 | a12;
        f35480k = i10;
        int i11 = a11 | a14 | a15;
        f35481l = i11;
        int i12 = a14 | a15;
        f35482m = i12;
        ALL = new DescriptorKindFilter(a16, null, 2, null);
        CALLABLES = new DescriptorKindFilter(i12, null, 2, null);
        NON_SINGLETON_CLASSIFIERS = new DescriptorKindFilter(a10, null, 2, null);
        SINGLETON_CLASSIFIERS = new DescriptorKindFilter(a11, null, 2, null);
        TYPE_ALIASES = new DescriptorKindFilter(a12, null, 2, null);
        CLASSIFIERS = new DescriptorKindFilter(i10, null, 2, null);
        PACKAGES = new DescriptorKindFilter(a13, null, 2, null);
        FUNCTIONS = new DescriptorKindFilter(a14, null, 2, null);
        VARIABLES = new DescriptorKindFilter(a15, null, 2, null);
        VALUES = new DescriptorKindFilter(i11, null, 2, null);
        Field[] fields = DescriptorKindFilter.class.getFields();
        Intrinsics.checkNotNullExpressionValue(fields, "getFields(...)");
        ArrayList<Field> arrayList = new ArrayList();
        for (Field field : fields) {
            if (Modifier.isStatic(field.getModifiers())) {
                arrayList.add(field);
            }
        }
        ArrayList arrayList2 = new ArrayList();
        for (Field field2 : arrayList) {
            Object obj = field2.get(null);
            if (obj instanceof DescriptorKindFilter) {
                descriptorKindFilter = (DescriptorKindFilter) obj;
            } else {
                descriptorKindFilter = null;
            }
            if (descriptorKindFilter != null) {
                int i13 = descriptorKindFilter.f35486b;
                String name = field2.getName();
                Intrinsics.checkNotNullExpressionValue(name, "getName(...)");
                aVar2 = new Companion.a(i13, name);
            } else {
                aVar2 = null;
            }
            if (aVar2 != null) {
                arrayList2.add(aVar2);
            }
        }
        f35483n = arrayList2;
        Field[] fields2 = DescriptorKindFilter.class.getFields();
        Intrinsics.checkNotNullExpressionValue(fields2, "getFields(...)");
        ArrayList arrayList3 = new ArrayList();
        for (Field field3 : fields2) {
            if (Modifier.isStatic(field3.getModifiers())) {
                arrayList3.add(field3);
            }
        }
        ArrayList<Field> arrayList4 = new ArrayList();
        for (Object obj2 : arrayList3) {
            if (Intrinsics.areEqual(((Field) obj2).getType(), Integer.TYPE)) {
                arrayList4.add(obj2);
            }
        }
        ArrayList arrayList5 = new ArrayList();
        for (Field field4 : arrayList4) {
            Object obj3 = field4.get(null);
            Intrinsics.checkNotNull(obj3, "null cannot be cast to non-null type kotlin.Int");
            int intValue = ((Integer) obj3).intValue();
            if (intValue == ((-intValue) & intValue)) {
                String name2 = field4.getName();
                Intrinsics.checkNotNullExpressionValue(name2, "getName(...)");
                aVar = new Companion.a(intValue, name2);
            } else {
                aVar = null;
            }
            if (aVar != null) {
                arrayList5.add(aVar);
            }
        }
        f35484o = arrayList5;
    }

    public DescriptorKindFilter(int i10, @NotNull List<? extends DescriptorKindExclude> excludes) {
        Intrinsics.checkNotNullParameter(excludes, "excludes");
        this.f35485a = excludes;
        for (DescriptorKindExclude descriptorKindExclude : excludes) {
            i10 &= ~descriptorKindExclude.getFullyExcludedDescriptorKinds();
        }
        this.f35486b = i10;
    }

    public final boolean acceptsKinds(int i10) {
        if ((i10 & this.f35486b) != 0) {
            return true;
        }
        return false;
    }

    public boolean equals(Object obj) {
        Class<?> cls;
        if (this == obj) {
            return true;
        }
        if (obj != null) {
            cls = obj.getClass();
        } else {
            cls = null;
        }
        if (!Intrinsics.areEqual(DescriptorKindFilter.class, cls)) {
            return false;
        }
        Intrinsics.checkNotNull(obj, "null cannot be cast to non-null type org.jetbrains.kotlin.resolve.scopes.DescriptorKindFilter");
        DescriptorKindFilter descriptorKindFilter = (DescriptorKindFilter) obj;
        if (Intrinsics.areEqual(this.f35485a, descriptorKindFilter.f35485a) && this.f35486b == descriptorKindFilter.f35486b) {
            return true;
        }
        return false;
    }

    @NotNull
    public final List<DescriptorKindExclude> getExcludes() {
        return this.f35485a;
    }

    public final int getKindMask() {
        return this.f35486b;
    }

    public int hashCode() {
        return (this.f35485a.hashCode() * 31) + this.f35486b;
    }

    public final DescriptorKindFilter restrictedToKindsOrNull(int i10) {
        int i11 = i10 & this.f35486b;
        if (i11 == 0) {
            return null;
        }
        return new DescriptorKindFilter(i11, this.f35485a);
    }

    @NotNull
    public String toString() {
        Object obj;
        String str;
        String str2;
        Iterator it = f35483n.iterator();
        while (true) {
            if (it.hasNext()) {
                obj = it.next();
                if (((Companion.a) obj).a() == this.f35486b) {
                    break;
                }
            } else {
                obj = null;
                break;
            }
        }
        Companion.a aVar = (Companion.a) obj;
        if (aVar != null) {
            str = aVar.b();
        } else {
            str = null;
        }
        if (str == null) {
            ArrayList arrayList = new ArrayList();
            for (Companion.a aVar2 : f35484o) {
                if (acceptsKinds(aVar2.a())) {
                    str2 = aVar2.b();
                } else {
                    str2 = null;
                }
                if (str2 != null) {
                    arrayList.add(str2);
                }
            }
            str = CollectionsKt.x0(arrayList, " | ", null, null, 0, null, null, 62, null);
        }
        return "DescriptorKindFilter(" + str + ", " + this.f35485a + ')';
    }

    public /* synthetic */ DescriptorKindFilter(int i10, List list, int i11, DefaultConstructorMarker defaultConstructorMarker) {
        this(i10, (i11 & 2) != 0 ? CollectionsKt.l() : list);
    }
}

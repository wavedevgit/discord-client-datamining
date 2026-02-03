package kotlin.reflect.jvm.internal.impl.resolve.constants;

import java.util.Collection;
import java.util.Iterator;
import java.util.List;
import java.util.Set;
import kotlin.Lazy;
import kotlin.collections.CollectionsKt;
import kotlin.enums.EnumEntries;
import kotlin.jvm.internal.DefaultConstructorMarker;
import kotlin.jvm.internal.Intrinsics;
import kotlin.jvm.internal.SourceDebugExtension;
import kotlin.reflect.jvm.internal.impl.builtins.KotlinBuiltIns;
import kotlin.reflect.jvm.internal.impl.descriptors.ClassifierDescriptor;
import kotlin.reflect.jvm.internal.impl.descriptors.ModuleDescriptor;
import kotlin.reflect.jvm.internal.impl.descriptors.TypeParameterDescriptor;
import kotlin.reflect.jvm.internal.impl.types.KotlinType;
import kotlin.reflect.jvm.internal.impl.types.KotlinTypeFactory;
import kotlin.reflect.jvm.internal.impl.types.SimpleType;
import kotlin.reflect.jvm.internal.impl.types.TypeAttributes;
import kotlin.reflect.jvm.internal.impl.types.TypeConstructor;
import kotlin.reflect.jvm.internal.impl.types.TypeProjectionImpl;
import kotlin.reflect.jvm.internal.impl.types.TypeSubstitutionKt;
import kotlin.reflect.jvm.internal.impl.types.Variance;
import kotlin.reflect.jvm.internal.impl.types.checker.KotlinTypeRefiner;
import lr.l;
import lr.p;
import org.jetbrains.annotations.NotNull;
@SourceDebugExtension({"SMAP\nIntegerLiteralTypeConstructor.kt\nKotlin\n*S Kotlin\n*F\n+ 1 IntegerLiteralTypeConstructor.kt\norg/jetbrains/kotlin/resolve/constants/IntegerLiteralTypeConstructor\n+ 2 _Collections.kt\nkotlin/collections/CollectionsKt___CollectionsKt\n*L\n1#1,181:1\n1740#2,3:182\n1761#2,3:185\n*S KotlinDebug\n*F\n+ 1 IntegerLiteralTypeConstructor.kt\norg/jetbrains/kotlin/resolve/constants/IntegerLiteralTypeConstructor\n*L\n132#1:182,3\n176#1:185,3\n*E\n"})
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public final class IntegerLiteralTypeConstructor implements TypeConstructor {
    @NotNull
    public static final Companion Companion = new Companion(null);

    /* renamed from: a  reason: collision with root package name */
    private final long f34596a;

    /* renamed from: b  reason: collision with root package name */
    private final ModuleDescriptor f34597b;

    /* renamed from: c  reason: collision with root package name */
    private final Set f34598c;

    /* renamed from: d  reason: collision with root package name */
    private final SimpleType f34599d;

    /* renamed from: e  reason: collision with root package name */
    private final Lazy f34600e;

    @SourceDebugExtension({"SMAP\nIntegerLiteralTypeConstructor.kt\nKotlin\n*S Kotlin\n*F\n+ 1 IntegerLiteralTypeConstructor.kt\norg/jetbrains/kotlin/resolve/constants/IntegerLiteralTypeConstructor$Companion\n+ 2 _Collections.kt\nkotlin/collections/CollectionsKt___CollectionsKt\n*L\n1#1,181:1\n2783#2,7:182\n*S KotlinDebug\n*F\n+ 1 IntegerLiteralTypeConstructor.kt\norg/jetbrains/kotlin/resolve/constants/IntegerLiteralTypeConstructor$Companion\n*L\n40#1:182,7\n*E\n"})
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
    public static final class Companion {

        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
        public /* synthetic */ class WhenMappings {
            public static final /* synthetic */ int[] $EnumSwitchMapping$0;

            static {
                int[] iArr = new int[a.values().length];
                try {
                    iArr[a.f34601d.ordinal()] = 1;
                } catch (NoSuchFieldError unused) {
                }
                try {
                    iArr[a.f34602e.ordinal()] = 2;
                } catch (NoSuchFieldError unused2) {
                }
                $EnumSwitchMapping$0 = iArr;
            }
        }

        /* JADX INFO: Access modifiers changed from: private */
        /* JADX WARN: Failed to restore enum class, 'enum' modifier and super class removed */
        /* JADX WARN: Unknown enum class pattern. Please report as an issue! */
        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
        public static final class a {

            /* renamed from: d  reason: collision with root package name */
            public static final a f34601d = new a("COMMON_SUPER_TYPE", 0);

            /* renamed from: e  reason: collision with root package name */
            public static final a f34602e = new a("INTERSECTION_TYPE", 1);

            /* renamed from: i  reason: collision with root package name */
            private static final /* synthetic */ a[] f34603i;

            /* renamed from: o  reason: collision with root package name */
            private static final /* synthetic */ EnumEntries f34604o;

            static {
                a[] a10 = a();
                f34603i = a10;
                f34604o = sr.a.a(a10);
            }

            private a(String str, int i10) {
            }

            private static final /* synthetic */ a[] a() {
                return new a[]{f34601d, f34602e};
            }

            public static a valueOf(String str) {
                return (a) Enum.valueOf(a.class, str);
            }

            public static a[] values() {
                return (a[]) f34603i.clone();
            }
        }

        public /* synthetic */ Companion(DefaultConstructorMarker defaultConstructorMarker) {
            this();
        }

        private final SimpleType a(Collection collection, a aVar) {
            if (collection.isEmpty()) {
                return null;
            }
            Iterator it = collection.iterator();
            if (it.hasNext()) {
                Object next = it.next();
                while (it.hasNext()) {
                    Companion companion = IntegerLiteralTypeConstructor.Companion;
                    next = companion.d((SimpleType) next, (SimpleType) it.next(), aVar);
                }
                return (SimpleType) next;
            }
            throw new UnsupportedOperationException("Empty collection can't be reduced.");
        }

        private final SimpleType b(IntegerLiteralTypeConstructor integerLiteralTypeConstructor, IntegerLiteralTypeConstructor integerLiteralTypeConstructor2, a aVar) {
            Set t02;
            int i10 = WhenMappings.$EnumSwitchMapping$0[aVar.ordinal()];
            if (i10 != 1) {
                if (i10 == 2) {
                    t02 = CollectionsKt.m1(integerLiteralTypeConstructor.getPossibleTypes(), integerLiteralTypeConstructor2.getPossibleTypes());
                } else {
                    throw new p();
                }
            } else {
                t02 = CollectionsKt.t0(integerLiteralTypeConstructor.getPossibleTypes(), integerLiteralTypeConstructor2.getPossibleTypes());
            }
            return KotlinTypeFactory.integerLiteralType(TypeAttributes.Companion.getEmpty(), new IntegerLiteralTypeConstructor(integerLiteralTypeConstructor.f34596a, integerLiteralTypeConstructor.f34597b, t02, null), false);
        }

        private final SimpleType c(IntegerLiteralTypeConstructor integerLiteralTypeConstructor, SimpleType simpleType) {
            if (integerLiteralTypeConstructor.getPossibleTypes().contains(simpleType)) {
                return simpleType;
            }
            return null;
        }

        private final SimpleType d(SimpleType simpleType, SimpleType simpleType2, a aVar) {
            if (simpleType != null && simpleType2 != null) {
                TypeConstructor constructor = simpleType.getConstructor();
                TypeConstructor constructor2 = simpleType2.getConstructor();
                boolean z10 = constructor instanceof IntegerLiteralTypeConstructor;
                if (z10 && (constructor2 instanceof IntegerLiteralTypeConstructor)) {
                    return b((IntegerLiteralTypeConstructor) constructor, (IntegerLiteralTypeConstructor) constructor2, aVar);
                }
                if (z10) {
                    return c((IntegerLiteralTypeConstructor) constructor, simpleType2);
                }
                if (constructor2 instanceof IntegerLiteralTypeConstructor) {
                    return c((IntegerLiteralTypeConstructor) constructor2, simpleType);
                }
            }
            return null;
        }

        public final SimpleType findIntersectionType(@NotNull Collection<? extends SimpleType> types) {
            Intrinsics.checkNotNullParameter(types, "types");
            return a(types, a.f34602e);
        }

        private Companion() {
        }
    }

    public /* synthetic */ IntegerLiteralTypeConstructor(long j10, ModuleDescriptor moduleDescriptor, Set set, DefaultConstructorMarker defaultConstructorMarker) {
        this(j10, moduleDescriptor, set);
    }

    private final List c() {
        return (List) this.f34600e.getValue();
    }

    private final boolean d() {
        Collection<KotlinType> allSignedLiteralTypes = PrimitiveTypeUtilKt.getAllSignedLiteralTypes(this.f34597b);
        if ((allSignedLiteralTypes instanceof Collection) && allSignedLiteralTypes.isEmpty()) {
            return true;
        }
        for (KotlinType kotlinType : allSignedLiteralTypes) {
            if (this.f34598c.contains(kotlinType)) {
                return false;
            }
        }
        return true;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final List e(IntegerLiteralTypeConstructor integerLiteralTypeConstructor) {
        SimpleType defaultType = integerLiteralTypeConstructor.getBuiltIns().getComparable().getDefaultType();
        Intrinsics.checkNotNullExpressionValue(defaultType, "getDefaultType(...)");
        List r10 = CollectionsKt.r(TypeSubstitutionKt.replace$default(defaultType, CollectionsKt.e(new TypeProjectionImpl(Variance.IN_VARIANCE, integerLiteralTypeConstructor.f34599d)), null, 2, null));
        if (!integerLiteralTypeConstructor.d()) {
            r10.add(integerLiteralTypeConstructor.getBuiltIns().getNumberType());
        }
        return r10;
    }

    private final String f() {
        return '[' + CollectionsKt.x0(this.f34598c, ",", null, null, 0, null, c.f34613d, 30, null) + ']';
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final CharSequence g(KotlinType it) {
        Intrinsics.checkNotNullParameter(it, "it");
        return it.toString();
    }

    @Override // kotlin.reflect.jvm.internal.impl.types.TypeConstructor
    @NotNull
    public KotlinBuiltIns getBuiltIns() {
        return this.f34597b.getBuiltIns();
    }

    @Override // kotlin.reflect.jvm.internal.impl.types.TypeConstructor
    /* renamed from: getDeclarationDescriptor */
    public ClassifierDescriptor mo1197getDeclarationDescriptor() {
        return null;
    }

    @Override // kotlin.reflect.jvm.internal.impl.types.TypeConstructor
    @NotNull
    public List<TypeParameterDescriptor> getParameters() {
        return CollectionsKt.l();
    }

    @NotNull
    public final Set<KotlinType> getPossibleTypes() {
        return this.f34598c;
    }

    @Override // kotlin.reflect.jvm.internal.impl.types.TypeConstructor
    @NotNull
    public Collection<KotlinType> getSupertypes() {
        return c();
    }

    @Override // kotlin.reflect.jvm.internal.impl.types.TypeConstructor
    public boolean isDenotable() {
        return false;
    }

    @Override // kotlin.reflect.jvm.internal.impl.types.TypeConstructor
    @NotNull
    public TypeConstructor refine(@NotNull KotlinTypeRefiner kotlinTypeRefiner) {
        Intrinsics.checkNotNullParameter(kotlinTypeRefiner, "kotlinTypeRefiner");
        return this;
    }

    @NotNull
    public String toString() {
        return "IntegerLiteralType" + f();
    }

    private IntegerLiteralTypeConstructor(long j10, ModuleDescriptor moduleDescriptor, Set set) {
        this.f34599d = KotlinTypeFactory.integerLiteralType(TypeAttributes.Companion.getEmpty(), this, false);
        this.f34600e = l.a(new b(this));
        this.f34596a = j10;
        this.f34597b = moduleDescriptor;
        this.f34598c = set;
    }
}

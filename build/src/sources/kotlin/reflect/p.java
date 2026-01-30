package kotlin.reflect;

import java.lang.reflect.Modifier;
import java.lang.reflect.Type;
import java.util.ArrayList;
import java.util.List;
import kotlin.collections.CollectionsKt;
import kotlin.jvm.functions.Function1;
import kotlin.jvm.internal.FunctionReferenceImpl;
import kotlin.jvm.internal.Intrinsics;
import kotlin.jvm.internal.KTypeBase;
import kotlin.sequences.Sequence;
import kotlin.text.StringsKt;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public abstract class p {

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public /* synthetic */ class a {

        /* renamed from: a  reason: collision with root package name */
        public static final /* synthetic */ int[] f36147a;

        static {
            int[] iArr = new int[m.values().length];
            try {
                iArr[m.f36138e.ordinal()] = 1;
            } catch (NoSuchFieldError unused) {
            }
            try {
                iArr[m.f36137d.ordinal()] = 2;
            } catch (NoSuchFieldError unused2) {
            }
            try {
                iArr[m.f36139i.ordinal()] = 3;
            } catch (NoSuchFieldError unused3) {
            }
            f36147a = iArr;
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public /* synthetic */ class b extends FunctionReferenceImpl implements Function1 {

        /* renamed from: d  reason: collision with root package name */
        public static final b f36148d = new b();

        b() {
            super(1, Class.class, "getComponentType", "getComponentType()Ljava/lang/Class;", 0);
        }

        @Override // kotlin.jvm.functions.Function1
        /* renamed from: a */
        public final Class invoke(Class p02) {
            Intrinsics.checkNotNullParameter(p02, "p0");
            return p02.getComponentType();
        }
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Type c(KType kType, boolean z10) {
        Class b10;
        int i10;
        d classifier = kType.getClassifier();
        if (classifier instanceof l) {
            return new o((l) classifier);
        }
        if (classifier instanceof KClass) {
            KClass kClass = (KClass) classifier;
            if (z10) {
                b10 = vr.a.c(kClass);
            } else {
                b10 = vr.a.b(kClass);
            }
            List arguments = kType.getArguments();
            if (arguments.isEmpty()) {
                return b10;
            }
            if (b10.isArray()) {
                if (!b10.getComponentType().isPrimitive()) {
                    KTypeProjection kTypeProjection = (KTypeProjection) CollectionsKt.S0(arguments);
                    if (kTypeProjection != null) {
                        m a10 = kTypeProjection.a();
                        KType b11 = kTypeProjection.b();
                        if (a10 == null) {
                            i10 = -1;
                        } else {
                            i10 = a.f36147a[a10.ordinal()];
                        }
                        if (i10 != -1 && i10 != 1) {
                            if (i10 != 2 && i10 != 3) {
                                throw new ir.p();
                            }
                            Intrinsics.checkNotNull(b11);
                            Type d10 = d(b11, false, 1, null);
                            if (!(d10 instanceof Class)) {
                                return new kotlin.reflect.a(d10);
                            }
                            return b10;
                        }
                        return b10;
                    }
                    throw new IllegalArgumentException("kotlin.Array must have exactly one type argument: " + kType);
                }
                return b10;
            }
            return e(b10, arguments);
        }
        throw new UnsupportedOperationException("Unsupported type classifier: " + kType);
    }

    static /* synthetic */ Type d(KType kType, boolean z10, int i10, Object obj) {
        if ((i10 & 1) != 0) {
            z10 = false;
        }
        return c(kType, z10);
    }

    private static final Type e(Class cls, List list) {
        Class<?> declaringClass = cls.getDeclaringClass();
        if (declaringClass == null) {
            List<KTypeProjection> list2 = list;
            ArrayList arrayList = new ArrayList(CollectionsKt.w(list2, 10));
            for (KTypeProjection kTypeProjection : list2) {
                arrayList.add(g(kTypeProjection));
            }
            return new n(cls, null, arrayList);
        } else if (Modifier.isStatic(cls.getModifiers())) {
            List<KTypeProjection> list3 = list;
            ArrayList arrayList2 = new ArrayList(CollectionsKt.w(list3, 10));
            for (KTypeProjection kTypeProjection2 : list3) {
                arrayList2.add(g(kTypeProjection2));
            }
            return new n(cls, declaringClass, arrayList2);
        } else {
            int length = cls.getTypeParameters().length;
            Type e10 = e(declaringClass, list.subList(length, list.size()));
            List<KTypeProjection> subList = list.subList(0, length);
            ArrayList arrayList3 = new ArrayList(CollectionsKt.w(subList, 10));
            for (KTypeProjection kTypeProjection3 : subList) {
                arrayList3.add(g(kTypeProjection3));
            }
            return new n(cls, e10, arrayList3);
        }
    }

    public static final Type f(KType kType) {
        Type javaType;
        Intrinsics.checkNotNullParameter(kType, "<this>");
        if ((kType instanceof KTypeBase) && (javaType = ((KTypeBase) kType).getJavaType()) != null) {
            return javaType;
        }
        return d(kType, false, 1, null);
    }

    private static final Type g(KTypeProjection kTypeProjection) {
        m d10 = kTypeProjection.d();
        if (d10 == null) {
            return q.f36149i.a();
        }
        KType c10 = kTypeProjection.c();
        Intrinsics.checkNotNull(c10);
        int i10 = a.f36147a[d10.ordinal()];
        if (i10 != 1) {
            if (i10 != 2) {
                if (i10 == 3) {
                    return new q(c(c10, true), null);
                }
                throw new ir.p();
            }
            return c(c10, true);
        }
        return new q(null, c(c10, true));
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final String h(Type type) {
        if (type instanceof Class) {
            Class cls = (Class) type;
            if (cls.isArray()) {
                Sequence q10 = kotlin.sequences.k.q(type, b.f36148d);
                return ((Class) kotlin.sequences.k.Q(q10)).getName() + StringsKt.F("[]", kotlin.sequences.k.C(q10));
            }
            String name = cls.getName();
            Intrinsics.checkNotNullExpressionValue(name, "getName(...)");
            return name;
        }
        return type.toString();
    }
}

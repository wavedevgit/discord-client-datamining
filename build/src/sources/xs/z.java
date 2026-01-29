package xs;

import at.h2;
import at.j0;
import at.l0;
import at.t1;
import at.u0;
import at.u1;
import at.w0;
import java.util.ArrayList;
import java.util.Arrays;
import java.util.Collection;
import java.util.HashMap;
import java.util.HashSet;
import java.util.LinkedHashMap;
import java.util.LinkedHashSet;
import java.util.List;
import java.util.Map;
import java.util.Set;
import kotlin.Pair;
import kotlin.collections.CollectionsKt;
import kotlin.jvm.functions.Function0;
import kotlin.jvm.internal.Intrinsics;
import kotlin.jvm.internal.Reflection;
import kotlin.reflect.KClass;
import kotlin.reflect.KType;
import kotlinx.serialization.KSerializer;
/* JADX INFO: Access modifiers changed from: package-private */
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public abstract /* synthetic */ class z {
    private static final KSerializer b(KClass kClass, List list, Function0 function0) {
        if (!Intrinsics.areEqual(kClass, Reflection.getOrCreateKotlinClass(Collection.class)) && !Intrinsics.areEqual(kClass, Reflection.getOrCreateKotlinClass(List.class)) && !Intrinsics.areEqual(kClass, Reflection.getOrCreateKotlinClass(List.class)) && !Intrinsics.areEqual(kClass, Reflection.getOrCreateKotlinClass(ArrayList.class))) {
            if (Intrinsics.areEqual(kClass, Reflection.getOrCreateKotlinClass(HashSet.class))) {
                return new l0((KSerializer) list.get(0));
            }
            if (!Intrinsics.areEqual(kClass, Reflection.getOrCreateKotlinClass(Set.class)) && !Intrinsics.areEqual(kClass, Reflection.getOrCreateKotlinClass(Set.class)) && !Intrinsics.areEqual(kClass, Reflection.getOrCreateKotlinClass(LinkedHashSet.class))) {
                if (Intrinsics.areEqual(kClass, Reflection.getOrCreateKotlinClass(HashMap.class))) {
                    return new j0((KSerializer) list.get(0), (KSerializer) list.get(1));
                }
                if (!Intrinsics.areEqual(kClass, Reflection.getOrCreateKotlinClass(Map.class)) && !Intrinsics.areEqual(kClass, Reflection.getOrCreateKotlinClass(Map.class)) && !Intrinsics.areEqual(kClass, Reflection.getOrCreateKotlinClass(LinkedHashMap.class))) {
                    if (Intrinsics.areEqual(kClass, Reflection.getOrCreateKotlinClass(Map.Entry.class))) {
                        return ys.a.j((KSerializer) list.get(0), (KSerializer) list.get(1));
                    }
                    if (Intrinsics.areEqual(kClass, Reflection.getOrCreateKotlinClass(Pair.class))) {
                        return ys.a.m((KSerializer) list.get(0), (KSerializer) list.get(1));
                    }
                    if (Intrinsics.areEqual(kClass, Reflection.getOrCreateKotlinClass(ir.u.class))) {
                        return ys.a.p((KSerializer) list.get(0), (KSerializer) list.get(1), (KSerializer) list.get(2));
                    }
                    if (t1.o(kClass)) {
                        Object invoke = function0.invoke();
                        Intrinsics.checkNotNull(invoke, "null cannot be cast to non-null type kotlin.reflect.KClass<kotlin.Any>");
                        return ys.a.a((KClass) invoke, (KSerializer) list.get(0));
                    }
                    return null;
                }
                return new u0((KSerializer) list.get(0), (KSerializer) list.get(1));
            }
            return new w0((KSerializer) list.get(0));
        }
        return new at.f((KSerializer) list.get(0));
    }

    private static final KSerializer c(KClass kClass, List list) {
        KSerializer[] kSerializerArr = (KSerializer[]) list.toArray(new KSerializer[0]);
        return t1.d(kClass, (KSerializer[]) Arrays.copyOf(kSerializerArr, kSerializerArr.length));
    }

    private static final KSerializer d(KSerializer kSerializer, boolean z10) {
        if (z10) {
            return ys.a.u(kSerializer);
        }
        Intrinsics.checkNotNull(kSerializer, "null cannot be cast to non-null type kotlinx.serialization.KSerializer<T of kotlinx.serialization.SerializersKt__SerializersKt.nullable?>");
        return kSerializer;
    }

    public static final KSerializer e(KClass kClass, List serializers, Function0 elementClassifierIfArray) {
        Intrinsics.checkNotNullParameter(kClass, "<this>");
        Intrinsics.checkNotNullParameter(serializers, "serializers");
        Intrinsics.checkNotNullParameter(elementClassifierIfArray, "elementClassifierIfArray");
        KSerializer b10 = b(kClass, serializers, elementClassifierIfArray);
        if (b10 == null) {
            return c(kClass, serializers);
        }
        return b10;
    }

    public static final KSerializer f(dt.b bVar, KType type) {
        Intrinsics.checkNotNullParameter(bVar, "<this>");
        Intrinsics.checkNotNullParameter(type, "type");
        KSerializer g10 = g(bVar, type, true);
        if (g10 != null) {
            return g10;
        }
        t1.p(u1.c(type));
        throw new ir.h();
    }

    /* JADX WARN: Removed duplicated region for block: B:46:0x00ab  */
    /* JADX WARN: Removed duplicated region for block: B:48:0x00b0 A[RETURN] */
    /*
        Code decompiled incorrectly, please refer to instructions dump.
        To view partially-correct add '--show-bad-code' argument
    */
    private static final kotlinx.serialization.KSerializer g(dt.b r6, kotlin.reflect.KType r7, boolean r8) {
        /*
            kotlin.reflect.KClass r0 = at.u1.c(r7)
            boolean r1 = r7.isMarkedNullable()
            java.util.List r7 = r7.getArguments()
            java.lang.Iterable r7 = (java.lang.Iterable) r7
            java.util.ArrayList r2 = new java.util.ArrayList
            r3 = 10
            int r3 = kotlin.collections.CollectionsKt.w(r7, r3)
            r2.<init>(r3)
            java.util.Iterator r7 = r7.iterator()
        L1d:
            boolean r3 = r7.hasNext()
            if (r3 == 0) goto L31
            java.lang.Object r3 = r7.next()
            kotlin.reflect.KTypeProjection r3 = (kotlin.reflect.KTypeProjection) r3
            kotlin.reflect.KType r3 = at.u1.g(r3)
            r2.add(r3)
            goto L1d
        L31:
            boolean r7 = r2.isEmpty()
            r3 = 2
            r4 = 0
            if (r7 == 0) goto L4c
            boolean r7 = at.t1.l(r0)
            if (r7 == 0) goto L47
            kotlinx.serialization.KSerializer r7 = dt.b.c(r6, r0, r4, r3, r4)
            if (r7 == 0) goto L47
        L45:
            r7 = r4
            goto L60
        L47:
            kotlinx.serialization.KSerializer r7 = xs.v.m(r0, r1)
            goto L60
        L4c:
            boolean r7 = r6.d()
            if (r7 == 0) goto L53
            goto L45
        L53:
            java.lang.Object r7 = xs.v.n(r0, r2, r1)
            boolean r5 = kotlin.Result.g(r7)
            if (r5 == 0) goto L5e
            r7 = r4
        L5e:
            kotlinx.serialization.KSerializer r7 = (kotlinx.serialization.KSerializer) r7
        L60:
            if (r7 == 0) goto L63
            return r7
        L63:
            boolean r7 = r2.isEmpty()
            if (r7 == 0) goto L84
            kotlinx.serialization.KSerializer r7 = xs.w.g(r0)
            if (r7 != 0) goto La9
            kotlinx.serialization.KSerializer r7 = dt.b.c(r6, r0, r4, r3, r4)
            if (r7 != 0) goto La9
            boolean r6 = at.t1.l(r0)
            if (r6 == 0) goto L82
            xs.g r6 = new xs.g
            r6.<init>(r0)
        L80:
            r7 = r6
            goto La9
        L82:
            r7 = r4
            goto La9
        L84:
            java.util.List r7 = xs.w.h(r6, r2, r8)
            if (r7 != 0) goto L8b
            return r4
        L8b:
            xs.y r8 = new xs.y
            r8.<init>()
            kotlinx.serialization.KSerializer r8 = xs.w.a(r0, r7, r8)
            if (r8 != 0) goto La8
            kotlinx.serialization.KSerializer r7 = r6.b(r0, r7)
            if (r7 != 0) goto La9
            boolean r6 = at.t1.l(r0)
            if (r6 == 0) goto L82
            xs.g r6 = new xs.g
            r6.<init>(r0)
            goto L80
        La8:
            r7 = r8
        La9:
            if (r7 == 0) goto Lb0
            kotlinx.serialization.KSerializer r6 = d(r7, r1)
            return r6
        Lb0:
            return r4
        */
        throw new UnsupportedOperationException("Method not decompiled: xs.z.g(dt.b, kotlin.reflect.KType, boolean):kotlinx.serialization.KSerializer");
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final kotlin.reflect.d h(List list) {
        return ((KType) list.get(0)).getClassifier();
    }

    public static final KSerializer i(dt.b bVar, KType type) {
        Intrinsics.checkNotNullParameter(bVar, "<this>");
        Intrinsics.checkNotNullParameter(type, "type");
        return g(bVar, type, false);
    }

    public static final KSerializer j(KClass kClass) {
        Intrinsics.checkNotNullParameter(kClass, "<this>");
        KSerializer b10 = t1.b(kClass);
        if (b10 == null) {
            return h2.b(kClass);
        }
        return b10;
    }

    public static final List k(dt.b bVar, List typeArguments, boolean z10) {
        Intrinsics.checkNotNullParameter(bVar, "<this>");
        Intrinsics.checkNotNullParameter(typeArguments, "typeArguments");
        if (z10) {
            List<KType> list = typeArguments;
            ArrayList arrayList = new ArrayList(CollectionsKt.w(list, 10));
            for (KType kType : list) {
                arrayList.add(w.c(bVar, kType));
            }
            return arrayList;
        }
        List<KType> list2 = typeArguments;
        ArrayList arrayList2 = new ArrayList(CollectionsKt.w(list2, 10));
        for (KType kType2 : list2) {
            KSerializer f10 = w.f(bVar, kType2);
            if (f10 == null) {
                return null;
            }
            arrayList2.add(f10);
        }
        return arrayList2;
    }
}

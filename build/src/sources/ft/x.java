package ft;

import java.lang.reflect.GenericArrayType;
import java.lang.reflect.ParameterizedType;
import java.lang.reflect.Type;
import java.lang.reflect.WildcardType;
import java.util.ArrayList;
import java.util.Arrays;
import java.util.Collection;
import java.util.List;
import java.util.Map;
import java.util.Set;
import jt.h2;
import jt.t1;
import kotlin.Pair;
import kotlin.collections.CollectionsKt;
import kotlin.jvm.internal.Intrinsics;
import kotlin.jvm.internal.Reflection;
import kotlin.reflect.KClass;
import kotlinx.serialization.KSerializer;
/* JADX INFO: Access modifiers changed from: package-private */
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public abstract /* synthetic */ class x {
    private static final KSerializer a(mt.b bVar, GenericArrayType genericArrayType, boolean z10) {
        KSerializer f10;
        KClass kClass;
        Type genericComponentType = genericArrayType.getGenericComponentType();
        if (genericComponentType instanceof WildcardType) {
            Type[] upperBounds = ((WildcardType) genericComponentType).getUpperBounds();
            Intrinsics.checkNotNullExpressionValue(upperBounds, "getUpperBounds(...)");
            genericComponentType = (Type) kotlin.collections.i.U(upperBounds);
        }
        Intrinsics.checkNotNull(genericComponentType);
        if (z10) {
            f10 = w.c(bVar, genericComponentType);
        } else {
            f10 = w.f(bVar, genericComponentType);
            if (f10 == null) {
                return null;
            }
        }
        if (genericComponentType instanceof ParameterizedType) {
            Type rawType = ((ParameterizedType) genericComponentType).getRawType();
            Intrinsics.checkNotNull(rawType, "null cannot be cast to non-null type java.lang.Class<*>");
            kClass = ds.a.e((Class) rawType);
        } else if (genericComponentType instanceof KClass) {
            kClass = (KClass) genericComponentType;
        } else {
            throw new IllegalStateException("unsupported type in GenericArray: " + Reflection.getOrCreateKotlinClass(genericComponentType.getClass()));
        }
        Intrinsics.checkNotNull(kClass, "null cannot be cast to non-null type kotlin.reflect.KClass<kotlin.Any>");
        KSerializer a10 = gt.a.a(kClass, f10);
        Intrinsics.checkNotNull(a10, "null cannot be cast to non-null type kotlinx.serialization.KSerializer<kotlin.Any>");
        return a10;
    }

    private static final Class b(Type type) {
        if (type instanceof Class) {
            return (Class) type;
        }
        if (type instanceof ParameterizedType) {
            Type rawType = ((ParameterizedType) type).getRawType();
            Intrinsics.checkNotNullExpressionValue(rawType, "getRawType(...)");
            return b(rawType);
        } else if (type instanceof WildcardType) {
            Type[] upperBounds = ((WildcardType) type).getUpperBounds();
            Intrinsics.checkNotNullExpressionValue(upperBounds, "getUpperBounds(...)");
            Object U = kotlin.collections.i.U(upperBounds);
            Intrinsics.checkNotNullExpressionValue(U, "first(...)");
            return b((Type) U);
        } else if (type instanceof GenericArrayType) {
            Type genericComponentType = ((GenericArrayType) type).getGenericComponentType();
            Intrinsics.checkNotNullExpressionValue(genericComponentType, "getGenericComponentType(...)");
            return b(genericComponentType);
        } else {
            throw new IllegalArgumentException("type should be an instance of Class<?>, GenericArrayType, ParametrizedType or WildcardType, but actual argument " + type + " has type " + Reflection.getOrCreateKotlinClass(type.getClass()));
        }
    }

    private static final KSerializer c(mt.b bVar, Class cls, List list) {
        KSerializer[] kSerializerArr = (KSerializer[]) list.toArray(new KSerializer[0]);
        KSerializer c10 = t1.c(cls, (KSerializer[]) Arrays.copyOf(kSerializerArr, kSerializerArr.length));
        if (c10 != null) {
            return c10;
        }
        KClass e10 = ds.a.e(cls);
        KSerializer b10 = h2.b(e10);
        if (b10 == null) {
            KSerializer b11 = bVar.b(e10, list);
            if (b11 == null) {
                if (cls.isInterface()) {
                    return new g(ds.a.e(cls));
                }
                return null;
            }
            return b11;
        }
        return b10;
    }

    public static final KSerializer d(Type type) {
        Intrinsics.checkNotNullParameter(type, "type");
        return w.c(mt.c.a(), type);
    }

    public static final KSerializer e(mt.b bVar, Type type) {
        Intrinsics.checkNotNullParameter(bVar, "<this>");
        Intrinsics.checkNotNullParameter(type, "type");
        KSerializer f10 = f(bVar, type, true);
        if (f10 != null) {
            return f10;
        }
        t1.q(b(type));
        throw new qr.h();
    }

    private static final KSerializer f(mt.b bVar, Type type, boolean z10) {
        ArrayList<KSerializer> arrayList;
        if (type instanceof GenericArrayType) {
            return a(bVar, (GenericArrayType) type, z10);
        }
        if (type instanceof Class) {
            return i(bVar, (Class) type, z10);
        }
        if (type instanceof ParameterizedType) {
            ParameterizedType parameterizedType = (ParameterizedType) type;
            Type rawType = parameterizedType.getRawType();
            Intrinsics.checkNotNull(rawType, "null cannot be cast to non-null type java.lang.Class<*>");
            Class cls = (Class) rawType;
            Type[] actualTypeArguments = parameterizedType.getActualTypeArguments();
            Intrinsics.checkNotNull(actualTypeArguments);
            if (z10) {
                arrayList = new ArrayList(actualTypeArguments.length);
                for (Type type2 : actualTypeArguments) {
                    Intrinsics.checkNotNull(type2);
                    arrayList.add(w.c(bVar, type2));
                }
            } else {
                arrayList = new ArrayList(actualTypeArguments.length);
                for (Type type3 : actualTypeArguments) {
                    Intrinsics.checkNotNull(type3);
                    KSerializer f10 = w.f(bVar, type3);
                    if (f10 == null) {
                        return null;
                    }
                    arrayList.add(f10);
                }
            }
            if (Set.class.isAssignableFrom(cls)) {
                KSerializer n10 = gt.a.n((KSerializer) arrayList.get(0));
                Intrinsics.checkNotNull(n10, "null cannot be cast to non-null type kotlinx.serialization.KSerializer<kotlin.Any>");
                return n10;
            } else if (!List.class.isAssignableFrom(cls) && !Collection.class.isAssignableFrom(cls)) {
                if (Map.class.isAssignableFrom(cls)) {
                    KSerializer k10 = gt.a.k((KSerializer) arrayList.get(0), (KSerializer) arrayList.get(1));
                    Intrinsics.checkNotNull(k10, "null cannot be cast to non-null type kotlinx.serialization.KSerializer<kotlin.Any>");
                    return k10;
                } else if (Map.Entry.class.isAssignableFrom(cls)) {
                    KSerializer j10 = gt.a.j((KSerializer) arrayList.get(0), (KSerializer) arrayList.get(1));
                    Intrinsics.checkNotNull(j10, "null cannot be cast to non-null type kotlinx.serialization.KSerializer<kotlin.Any>");
                    return j10;
                } else if (Pair.class.isAssignableFrom(cls)) {
                    KSerializer m10 = gt.a.m((KSerializer) arrayList.get(0), (KSerializer) arrayList.get(1));
                    Intrinsics.checkNotNull(m10, "null cannot be cast to non-null type kotlinx.serialization.KSerializer<kotlin.Any>");
                    return m10;
                } else if (qr.u.class.isAssignableFrom(cls)) {
                    KSerializer p10 = gt.a.p((KSerializer) arrayList.get(0), (KSerializer) arrayList.get(1), (KSerializer) arrayList.get(2));
                    Intrinsics.checkNotNull(p10, "null cannot be cast to non-null type kotlinx.serialization.KSerializer<kotlin.Any>");
                    return p10;
                } else {
                    ArrayList arrayList2 = new ArrayList(CollectionsKt.w(arrayList, 10));
                    for (KSerializer kSerializer : arrayList) {
                        Intrinsics.checkNotNull(kSerializer, "null cannot be cast to non-null type kotlinx.serialization.KSerializer<kotlin.Any?>");
                        arrayList2.add(kSerializer);
                    }
                    return c(bVar, cls, arrayList2);
                }
            } else {
                KSerializer h10 = gt.a.h((KSerializer) arrayList.get(0));
                Intrinsics.checkNotNull(h10, "null cannot be cast to non-null type kotlinx.serialization.KSerializer<kotlin.Any>");
                return h10;
            }
        } else if (type instanceof WildcardType) {
            Type[] upperBounds = ((WildcardType) type).getUpperBounds();
            Intrinsics.checkNotNullExpressionValue(upperBounds, "getUpperBounds(...)");
            Object U = kotlin.collections.i.U(upperBounds);
            Intrinsics.checkNotNullExpressionValue(U, "first(...)");
            return g(bVar, (Type) U, false, 2, null);
        } else {
            throw new IllegalArgumentException("type should be an instance of Class<?>, GenericArrayType, ParametrizedType or WildcardType, but actual argument " + type + " has type " + Reflection.getOrCreateKotlinClass(type.getClass()));
        }
    }

    static /* synthetic */ KSerializer g(mt.b bVar, Type type, boolean z10, int i10, Object obj) {
        if ((i10 & 2) != 0) {
            z10 = true;
        }
        return f(bVar, type, z10);
    }

    public static final KSerializer h(mt.b bVar, Type type) {
        Intrinsics.checkNotNullParameter(bVar, "<this>");
        Intrinsics.checkNotNullParameter(type, "type");
        return f(bVar, type, false);
    }

    private static final KSerializer i(mt.b bVar, Class cls, boolean z10) {
        KSerializer f10;
        if (cls.isArray() && !cls.getComponentType().isPrimitive()) {
            Class<?> componentType = cls.getComponentType();
            Intrinsics.checkNotNullExpressionValue(componentType, "getComponentType(...)");
            if (z10) {
                f10 = w.c(bVar, componentType);
            } else {
                f10 = w.f(bVar, componentType);
                if (f10 == null) {
                    return null;
                }
            }
            KClass e10 = ds.a.e(componentType);
            Intrinsics.checkNotNull(e10, "null cannot be cast to non-null type kotlin.reflect.KClass<kotlin.Any>");
            KSerializer a10 = gt.a.a(e10, f10);
            Intrinsics.checkNotNull(a10, "null cannot be cast to non-null type kotlinx.serialization.KSerializer<kotlin.Any>");
            return a10;
        }
        Intrinsics.checkNotNull(cls, "null cannot be cast to non-null type java.lang.Class<kotlin.Any>");
        return c(bVar, cls, CollectionsKt.l());
    }
}

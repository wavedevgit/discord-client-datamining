package com.squareup.moshi;

import java.lang.reflect.Array;
import java.lang.reflect.GenericArrayType;
import java.lang.reflect.ParameterizedType;
import java.lang.reflect.Type;
import java.lang.reflect.TypeVariable;
import java.lang.reflect.WildcardType;
import java.util.Arrays;
import java.util.Collection;
import java.util.Map;
import java.util.Properties;
import vm.c;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public abstract class a0 {
    /* JADX INFO: Access modifiers changed from: package-private */
    public static Type a(Type type) {
        if (type instanceof GenericArrayType) {
            return ((GenericArrayType) type).getGenericComponentType();
        }
        if (type instanceof Class) {
            return ((Class) type).getComponentType();
        }
        return null;
    }

    public static GenericArrayType b(Type type) {
        return new c.a(type);
    }

    public static Type c(Type type, Class cls) {
        Type h10 = h(type, cls, Collection.class);
        if (h10 instanceof WildcardType) {
            h10 = ((WildcardType) h10).getUpperBounds()[0];
        }
        if (h10 instanceof ParameterizedType) {
            return ((ParameterizedType) h10).getActualTypeArguments()[0];
        }
        return Object.class;
    }

    public static boolean d(Type type, Type type2) {
        Type[] actualTypeArguments;
        Type[] actualTypeArguments2;
        if (type == type2) {
            return true;
        }
        if (type instanceof Class) {
            if (type2 instanceof GenericArrayType) {
                return d(((Class) type).getComponentType(), ((GenericArrayType) type2).getGenericComponentType());
            }
            return type.equals(type2);
        } else if (type instanceof ParameterizedType) {
            if (!(type2 instanceof ParameterizedType)) {
                return false;
            }
            ParameterizedType parameterizedType = (ParameterizedType) type;
            ParameterizedType parameterizedType2 = (ParameterizedType) type2;
            if (parameterizedType instanceof c.b) {
                actualTypeArguments = ((c.b) parameterizedType).f51697i;
            } else {
                actualTypeArguments = parameterizedType.getActualTypeArguments();
            }
            if (parameterizedType2 instanceof c.b) {
                actualTypeArguments2 = ((c.b) parameterizedType2).f51697i;
            } else {
                actualTypeArguments2 = parameterizedType2.getActualTypeArguments();
            }
            if (d(parameterizedType.getOwnerType(), parameterizedType2.getOwnerType()) && parameterizedType.getRawType().equals(parameterizedType2.getRawType()) && Arrays.equals(actualTypeArguments, actualTypeArguments2)) {
                return true;
            }
            return false;
        } else if (type instanceof GenericArrayType) {
            if (type2 instanceof Class) {
                return d(((Class) type2).getComponentType(), ((GenericArrayType) type).getGenericComponentType());
            }
            if (!(type2 instanceof GenericArrayType)) {
                return false;
            }
            return d(((GenericArrayType) type).getGenericComponentType(), ((GenericArrayType) type2).getGenericComponentType());
        } else if (type instanceof WildcardType) {
            if (!(type2 instanceof WildcardType)) {
                return false;
            }
            WildcardType wildcardType = (WildcardType) type;
            WildcardType wildcardType2 = (WildcardType) type2;
            if (Arrays.equals(wildcardType.getUpperBounds(), wildcardType2.getUpperBounds()) && Arrays.equals(wildcardType.getLowerBounds(), wildcardType2.getLowerBounds())) {
                return true;
            }
            return false;
        } else if (!(type instanceof TypeVariable) || !(type2 instanceof TypeVariable)) {
            return false;
        } else {
            TypeVariable typeVariable = (TypeVariable) type;
            TypeVariable typeVariable2 = (TypeVariable) type2;
            if (typeVariable.getGenericDeclaration() == typeVariable2.getGenericDeclaration() && typeVariable.getName().equals(typeVariable2.getName())) {
                return true;
            }
            return false;
        }
    }

    public static String e(String str) {
        return str.replace("$", "_") + "JsonAdapter";
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public static Type f(Type type) {
        Class g10 = g(type);
        return vm.c.q(type, g10, g10.getGenericSuperclass());
    }

    public static Class g(Type type) {
        String name;
        if (type instanceof Class) {
            return (Class) type;
        }
        if (type instanceof ParameterizedType) {
            return (Class) ((ParameterizedType) type).getRawType();
        }
        if (type instanceof GenericArrayType) {
            return Array.newInstance(g(((GenericArrayType) type).getGenericComponentType()), 0).getClass();
        }
        if (type instanceof TypeVariable) {
            return Object.class;
        }
        if (type instanceof WildcardType) {
            return g(((WildcardType) type).getUpperBounds()[0]);
        }
        if (type == null) {
            name = "null";
        } else {
            name = type.getClass().getName();
        }
        throw new IllegalArgumentException("Expected a Class, ParameterizedType, or GenericArrayType, but <" + type + "> is of type " + name);
    }

    static Type h(Type type, Class cls, Class cls2) {
        if (cls2.isAssignableFrom(cls)) {
            return vm.c.q(type, cls, vm.c.e(type, cls, cls2));
        }
        throw new IllegalArgumentException();
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public static Type[] i(Type type, Class cls) {
        if (type == Properties.class) {
            return new Type[]{String.class, String.class};
        }
        Type h10 = h(type, cls, Map.class);
        return h10 instanceof ParameterizedType ? ((ParameterizedType) h10).getActualTypeArguments() : new Type[]{Object.class, Object.class};
    }

    public static ParameterizedType j(Type type, Type... typeArr) {
        if (typeArr.length != 0) {
            return new c.b(null, type, typeArr);
        }
        throw new IllegalArgumentException("Missing type arguments for " + type);
    }

    public static WildcardType k(Type type) {
        Type[] typeArr;
        if (type instanceof WildcardType) {
            typeArr = ((WildcardType) type).getUpperBounds();
        } else {
            typeArr = new Type[]{type};
        }
        return new c.C0683c(typeArr, vm.c.f51690b);
    }

    public static WildcardType l(Type type) {
        Type[] typeArr;
        if (type instanceof WildcardType) {
            typeArr = ((WildcardType) type).getLowerBounds();
        } else {
            typeArr = new Type[]{type};
        }
        return new c.C0683c(new Type[]{Object.class}, typeArr);
    }
}

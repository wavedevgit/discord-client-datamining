package com.facebook.hermes.intl;

import java.util.Arrays;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public abstract class g {

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    public enum a {
        BOOLEAN,
        STRING
    }

    public static Object a(String str, Object obj, Object obj2, Object obj3, Object obj4) {
        if (da.d.n(obj)) {
            return obj4;
        }
        if (da.d.k(obj)) {
            double f10 = da.d.f(obj);
            if (!Double.isNaN(f10) && f10 <= da.d.f(obj3) && f10 >= da.d.f(obj2)) {
                return obj;
            }
            throw new da.f(str + " value is invalid.");
        }
        throw new da.f(str + " value is invalid.");
    }

    public static Object b(Object obj, String str, Object obj2, Object obj3, Object obj4) {
        return a(str, da.d.a(obj, str), obj2, obj3, obj4);
    }

    public static Object c(Object obj, String str, a aVar, Object obj2, Object obj3) {
        Object a10 = da.d.a(obj, str);
        if (da.d.n(a10)) {
            return obj3;
        }
        if (da.d.j(a10)) {
            a10 = "";
        }
        if (aVar == a.BOOLEAN && !da.d.i(a10)) {
            throw new da.f("Boolean option expected but not found");
        }
        if (aVar == a.STRING && !da.d.m(a10)) {
            throw new da.f("String option expected but not found");
        }
        if (!da.d.n(obj2) && !Arrays.asList((Object[]) obj2).contains(a10)) {
            throw new da.f("String option expected but not found");
        }
        return a10;
    }

    public static Enum d(Class cls, Object obj) {
        Enum[] enumArr;
        if (da.d.n(obj)) {
            return Enum.valueOf(cls, "UNDEFINED");
        }
        if (da.d.j(obj)) {
            return null;
        }
        String h10 = da.d.h(obj);
        if (h10.equals("2-digit")) {
            return Enum.valueOf(cls, "DIGIT2");
        }
        for (Enum r32 : (Enum[]) cls.getEnumConstants()) {
            if (r32.name().compareToIgnoreCase(h10) == 0) {
                return r32;
            }
        }
        return null;
    }
}

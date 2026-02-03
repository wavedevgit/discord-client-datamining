package es;

import fs.a0;
import fs.j2;
import fs.j3;
import fs.t2;
import gs.h;
import java.lang.reflect.Constructor;
import java.lang.reflect.Field;
import java.lang.reflect.Member;
import java.lang.reflect.Method;
import java.lang.reflect.Type;
import kotlin.jvm.internal.Intrinsics;
import kotlin.reflect.KFunction;
import kotlin.reflect.KProperty;
import kotlin.reflect.KType;
import kotlin.reflect.e;
import kotlin.reflect.p;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public abstract class c {
    public static final Constructor a(KFunction kFunction) {
        Member member;
        h A;
        Intrinsics.checkNotNullParameter(kFunction, "<this>");
        a0 b10 = j3.b(kFunction);
        if (b10 != null && (A = b10.A()) != null) {
            member = A.b();
        } else {
            member = null;
        }
        if (!(member instanceof Constructor)) {
            return null;
        }
        return (Constructor) member;
    }

    public static final Field b(KProperty kProperty) {
        Intrinsics.checkNotNullParameter(kProperty, "<this>");
        j2 d10 = j3.d(kProperty);
        if (d10 != null) {
            return d10.R();
        }
        return null;
    }

    public static final Method c(KProperty kProperty) {
        Intrinsics.checkNotNullParameter(kProperty, "<this>");
        return d(kProperty.getGetter());
    }

    public static final Method d(KFunction kFunction) {
        Member member;
        h A;
        Intrinsics.checkNotNullParameter(kFunction, "<this>");
        a0 b10 = j3.b(kFunction);
        if (b10 != null && (A = b10.A()) != null) {
            member = A.b();
        } else {
            member = null;
        }
        if (!(member instanceof Method)) {
            return null;
        }
        return (Method) member;
    }

    public static final Method e(e eVar) {
        Intrinsics.checkNotNullParameter(eVar, "<this>");
        return d(eVar.getSetter());
    }

    public static final Type f(KType kType) {
        Intrinsics.checkNotNullParameter(kType, "<this>");
        Type javaType = ((t2) kType).getJavaType();
        if (javaType == null) {
            return p.f(kType);
        }
        return javaType;
    }
}

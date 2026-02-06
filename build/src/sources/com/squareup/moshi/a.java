package com.squareup.moshi;

import com.squareup.moshi.h;
import com.squareup.moshi.m;
import java.io.IOException;
import java.lang.annotation.Annotation;
import java.lang.reflect.InvocationTargetException;
import java.lang.reflect.Method;
import java.lang.reflect.ParameterizedType;
import java.lang.reflect.Type;
import java.util.ArrayList;
import java.util.List;
import java.util.Set;
/* JADX INFO: Access modifiers changed from: package-private */
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class a implements h.e {

    /* renamed from: a  reason: collision with root package name */
    private final List f17853a;

    /* renamed from: b  reason: collision with root package name */
    private final List f17854b;

    /* renamed from: com.squareup.moshi.a$a  reason: collision with other inner class name */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    class C0215a extends h {

        /* renamed from: a  reason: collision with root package name */
        final /* synthetic */ f f17855a;

        /* renamed from: b  reason: collision with root package name */
        final /* synthetic */ h f17856b;

        /* renamed from: c  reason: collision with root package name */
        final /* synthetic */ w f17857c;

        /* renamed from: d  reason: collision with root package name */
        final /* synthetic */ f f17858d;

        /* renamed from: e  reason: collision with root package name */
        final /* synthetic */ Set f17859e;

        /* renamed from: f  reason: collision with root package name */
        final /* synthetic */ Type f17860f;

        C0215a(f fVar, h hVar, w wVar, f fVar2, Set set, Type type) {
            this.f17855a = fVar;
            this.f17856b = hVar;
            this.f17857c = wVar;
            this.f17858d = fVar2;
            this.f17859e = set;
            this.f17860f = type;
        }

        @Override // com.squareup.moshi.h
        public Object fromJson(m mVar) {
            f fVar = this.f17858d;
            if (fVar == null) {
                return this.f17856b.fromJson(mVar);
            }
            if (!fVar.f17878g && mVar.s() == m.c.NULL) {
                mVar.m();
                return null;
            }
            try {
                return this.f17858d.b(this.f17857c, mVar);
            } catch (InvocationTargetException e10) {
                Throwable cause = e10.getCause();
                if (cause instanceof IOException) {
                    throw ((IOException) cause);
                }
                throw new j(cause + " at " + mVar.t(), cause);
            }
        }

        @Override // com.squareup.moshi.h
        public void toJson(t tVar, Object obj) {
            f fVar = this.f17855a;
            if (fVar == null) {
                this.f17856b.toJson(tVar, obj);
            } else if (!fVar.f17878g && obj == null) {
                tVar.P();
            } else {
                try {
                    fVar.e(this.f17857c, tVar, obj);
                } catch (InvocationTargetException e10) {
                    Throwable cause = e10.getCause();
                    if (cause instanceof IOException) {
                        throw ((IOException) cause);
                    }
                    throw new j(cause + " at " + tVar.t(), cause);
                }
            }
        }

        public String toString() {
            return "JsonAdapter" + this.f17859e + "(" + this.f17860f + ")";
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public class b extends f {
        b(Type type, Set set, Object obj, Method method, int i10, int i11, boolean z10) {
            super(type, set, obj, method, i10, i11, z10);
        }

        @Override // com.squareup.moshi.a.f
        public void e(w wVar, t tVar, Object obj) {
            d(tVar, obj);
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public class c extends f {

        /* renamed from: h  reason: collision with root package name */
        private h f17862h;

        /* renamed from: i  reason: collision with root package name */
        final /* synthetic */ Type[] f17863i;

        /* renamed from: j  reason: collision with root package name */
        final /* synthetic */ Type f17864j;

        /* renamed from: k  reason: collision with root package name */
        final /* synthetic */ Set f17865k;

        /* renamed from: l  reason: collision with root package name */
        final /* synthetic */ Set f17866l;

        /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
        c(Type type, Set set, Object obj, Method method, int i10, int i11, boolean z10, Type[] typeArr, Type type2, Set set2, Set set3) {
            super(type, set, obj, method, i10, i11, z10);
            this.f17863i = typeArr;
            this.f17864j = type2;
            this.f17865k = set2;
            this.f17866l = set3;
        }

        @Override // com.squareup.moshi.a.f
        public void a(w wVar, h.e eVar) {
            h e10;
            super.a(wVar, eVar);
            if (a0.d(this.f17863i[0], this.f17864j) && this.f17865k.equals(this.f17866l)) {
                e10 = wVar.i(eVar, this.f17864j, this.f17866l);
            } else {
                e10 = wVar.e(this.f17864j, this.f17866l);
            }
            this.f17862h = e10;
        }

        @Override // com.squareup.moshi.a.f
        public void e(w wVar, t tVar, Object obj) {
            this.f17862h.toJson(tVar, c(obj));
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public class d extends f {
        d(Type type, Set set, Object obj, Method method, int i10, int i11, boolean z10) {
            super(type, set, obj, method, i10, i11, z10);
        }

        @Override // com.squareup.moshi.a.f
        public Object b(w wVar, m mVar) {
            return c(mVar);
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public class e extends f {

        /* renamed from: h  reason: collision with root package name */
        h f17867h;

        /* renamed from: i  reason: collision with root package name */
        final /* synthetic */ Type[] f17868i;

        /* renamed from: j  reason: collision with root package name */
        final /* synthetic */ Type f17869j;

        /* renamed from: k  reason: collision with root package name */
        final /* synthetic */ Set f17870k;

        /* renamed from: l  reason: collision with root package name */
        final /* synthetic */ Set f17871l;

        /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
        e(Type type, Set set, Object obj, Method method, int i10, int i11, boolean z10, Type[] typeArr, Type type2, Set set2, Set set3) {
            super(type, set, obj, method, i10, i11, z10);
            this.f17868i = typeArr;
            this.f17869j = type2;
            this.f17870k = set2;
            this.f17871l = set3;
        }

        @Override // com.squareup.moshi.a.f
        public void a(w wVar, h.e eVar) {
            h e10;
            super.a(wVar, eVar);
            if (a0.d(this.f17868i[0], this.f17869j) && this.f17870k.equals(this.f17871l)) {
                e10 = wVar.i(eVar, this.f17868i[0], this.f17870k);
            } else {
                e10 = wVar.e(this.f17868i[0], this.f17870k);
            }
            this.f17867h = e10;
        }

        @Override // com.squareup.moshi.a.f
        public Object b(w wVar, m mVar) {
            return c(this.f17867h.fromJson(mVar));
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static abstract class f {

        /* renamed from: a  reason: collision with root package name */
        final Type f17872a;

        /* renamed from: b  reason: collision with root package name */
        final Set f17873b;

        /* renamed from: c  reason: collision with root package name */
        final Object f17874c;

        /* renamed from: d  reason: collision with root package name */
        final Method f17875d;

        /* renamed from: e  reason: collision with root package name */
        final int f17876e;

        /* renamed from: f  reason: collision with root package name */
        final h[] f17877f;

        /* renamed from: g  reason: collision with root package name */
        final boolean f17878g;

        f(Type type, Set set, Object obj, Method method, int i10, int i11, boolean z10) {
            this.f17872a = an.c.a(type);
            this.f17873b = set;
            this.f17874c = obj;
            this.f17875d = method;
            this.f17876e = i11;
            this.f17877f = new h[i10 - i11];
            this.f17878g = z10;
        }

        public void a(w wVar, h.e eVar) {
            h e10;
            if (this.f17877f.length > 0) {
                Type[] genericParameterTypes = this.f17875d.getGenericParameterTypes();
                Annotation[][] parameterAnnotations = this.f17875d.getParameterAnnotations();
                int length = genericParameterTypes.length;
                for (int i10 = this.f17876e; i10 < length; i10++) {
                    Type type = ((ParameterizedType) genericParameterTypes[i10]).getActualTypeArguments()[0];
                    Set l10 = an.c.l(parameterAnnotations[i10]);
                    h[] hVarArr = this.f17877f;
                    int i11 = i10 - this.f17876e;
                    if (a0.d(this.f17872a, type) && this.f17873b.equals(l10)) {
                        e10 = wVar.i(eVar, type, l10);
                    } else {
                        e10 = wVar.e(type, l10);
                    }
                    hVarArr[i11] = e10;
                }
            }
        }

        public Object b(w wVar, m mVar) {
            throw new AssertionError();
        }

        protected Object c(Object obj) {
            h[] hVarArr = this.f17877f;
            Object[] objArr = new Object[hVarArr.length + 1];
            objArr[0] = obj;
            System.arraycopy(hVarArr, 0, objArr, 1, hVarArr.length);
            try {
                return this.f17875d.invoke(this.f17874c, objArr);
            } catch (IllegalAccessException unused) {
                throw new AssertionError();
            }
        }

        protected Object d(Object obj, Object obj2) {
            h[] hVarArr = this.f17877f;
            Object[] objArr = new Object[hVarArr.length + 2];
            objArr[0] = obj;
            objArr[1] = obj2;
            System.arraycopy(hVarArr, 0, objArr, 2, hVarArr.length);
            try {
                return this.f17875d.invoke(this.f17874c, objArr);
            } catch (IllegalAccessException unused) {
                throw new AssertionError();
            }
        }

        public void e(w wVar, t tVar, Object obj) {
            throw new AssertionError();
        }
    }

    a(List list, List list2) {
        this.f17853a = list;
        this.f17854b = list2;
    }

    static f a(Object obj, Method method) {
        method.setAccessible(true);
        Type genericReturnType = method.getGenericReturnType();
        Set k10 = an.c.k(method);
        Type[] genericParameterTypes = method.getGenericParameterTypes();
        Annotation[][] parameterAnnotations = method.getParameterAnnotations();
        int length = genericParameterTypes.length;
        Class cls = Void.TYPE;
        if (length >= 1 && genericParameterTypes[0] == m.class && genericReturnType != cls && d(1, genericParameterTypes)) {
            return new d(genericReturnType, k10, obj, method, genericParameterTypes.length, 1, true);
        }
        if (genericParameterTypes.length == 1 && genericReturnType != cls) {
            Set l10 = an.c.l(parameterAnnotations[0]);
            return new e(genericReturnType, k10, obj, method, genericParameterTypes.length, 1, an.c.f(parameterAnnotations[0]), genericParameterTypes, genericReturnType, l10, k10);
        }
        throw new IllegalArgumentException("Unexpected signature for " + method + ".\n@FromJson method signatures may have one of the following structures:\n    <any access modifier> R fromJson(JsonReader jsonReader) throws <any>;\n    <any access modifier> R fromJson(JsonReader jsonReader, JsonAdapter<any> delegate, <any more delegates>) throws <any>;\n    <any access modifier> R fromJson(T value) throws <any>;\n");
    }

    private static f b(List list, Type type, Set set) {
        int size = list.size();
        for (int i10 = 0; i10 < size; i10++) {
            f fVar = (f) list.get(i10);
            if (a0.d(fVar.f17872a, type) && fVar.f17873b.equals(set)) {
                return fVar;
            }
        }
        return null;
    }

    public static a c(Object obj) {
        Method[] declaredMethods;
        f b10;
        f b11;
        ArrayList arrayList = new ArrayList();
        ArrayList arrayList2 = new ArrayList();
        for (Class<?> cls = obj.getClass(); cls != Object.class; cls = cls.getSuperclass()) {
            for (Method method : cls.getDeclaredMethods()) {
                if (method.isAnnotationPresent(z.class)) {
                    f e10 = e(obj, method);
                    if (b(arrayList, e10.f17872a, e10.f17873b) == null) {
                        arrayList.add(e10);
                    } else {
                        throw new IllegalArgumentException("Conflicting @ToJson methods:\n    " + b11.f17875d + "\n    " + e10.f17875d);
                    }
                }
                if (method.isAnnotationPresent(com.squareup.moshi.f.class)) {
                    f a10 = a(obj, method);
                    if (b(arrayList2, a10.f17872a, a10.f17873b) == null) {
                        arrayList2.add(a10);
                    } else {
                        throw new IllegalArgumentException("Conflicting @FromJson methods:\n    " + b10.f17875d + "\n    " + a10.f17875d);
                    }
                }
            }
        }
        if (arrayList.isEmpty() && arrayList2.isEmpty()) {
            throw new IllegalArgumentException("Expected at least one @ToJson or @FromJson method on " + obj.getClass().getName());
        }
        return new a(arrayList, arrayList2);
    }

    private static boolean d(int i10, Type[] typeArr) {
        int length = typeArr.length;
        while (i10 < length) {
            Type type = typeArr[i10];
            if (!(type instanceof ParameterizedType) || ((ParameterizedType) type).getRawType() != h.class) {
                return false;
            }
            i10++;
        }
        return true;
    }

    static f e(Object obj, Method method) {
        method.setAccessible(true);
        Type genericReturnType = method.getGenericReturnType();
        Type[] genericParameterTypes = method.getGenericParameterTypes();
        Annotation[][] parameterAnnotations = method.getParameterAnnotations();
        int length = genericParameterTypes.length;
        Class cls = Void.TYPE;
        if (length >= 2 && genericParameterTypes[0] == t.class && genericReturnType == cls && d(2, genericParameterTypes)) {
            return new b(genericParameterTypes[1], an.c.l(parameterAnnotations[1]), obj, method, genericParameterTypes.length, 2, true);
        } else if (genericParameterTypes.length == 1 && genericReturnType != cls) {
            Set k10 = an.c.k(method);
            Set l10 = an.c.l(parameterAnnotations[0]);
            return new c(genericParameterTypes[0], l10, obj, method, genericParameterTypes.length, 1, an.c.f(parameterAnnotations[0]), genericParameterTypes, genericReturnType, l10, k10);
        } else {
            throw new IllegalArgumentException("Unexpected signature for " + method + ".\n@ToJson method signatures may have one of the following structures:\n    <any access modifier> void toJson(JsonWriter writer, T value) throws <any>;\n    <any access modifier> void toJson(JsonWriter writer, T value, JsonAdapter<any> delegate, <any more delegates>) throws <any>;\n    <any access modifier> R toJson(T value) throws <any>;\n");
        }
    }

    @Override // com.squareup.moshi.h.e
    public h create(Type type, Set set, w wVar) {
        String str;
        f b10 = b(this.f17853a, type, set);
        f b11 = b(this.f17854b, type, set);
        h hVar = null;
        if (b10 == null && b11 == null) {
            return null;
        }
        if (b10 == null || b11 == null) {
            try {
                hVar = wVar.i(this, type, set);
            } catch (IllegalArgumentException e10) {
                if (b10 == null) {
                    str = "@ToJson";
                } else {
                    str = "@FromJson";
                }
                throw new IllegalArgumentException("No " + str + " adapter for " + an.c.u(type, set), e10);
            }
        }
        h hVar2 = hVar;
        if (b10 != null) {
            b10.a(wVar, this);
        }
        if (b11 != null) {
            b11.a(wVar, this);
        }
        return new C0215a(b10, hVar2, wVar, b11, set, type);
    }
}

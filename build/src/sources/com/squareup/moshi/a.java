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
    private final List f17873a;

    /* renamed from: b  reason: collision with root package name */
    private final List f17874b;

    /* renamed from: com.squareup.moshi.a$a  reason: collision with other inner class name */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    class C0223a extends h {

        /* renamed from: a  reason: collision with root package name */
        final /* synthetic */ f f17875a;

        /* renamed from: b  reason: collision with root package name */
        final /* synthetic */ h f17876b;

        /* renamed from: c  reason: collision with root package name */
        final /* synthetic */ w f17877c;

        /* renamed from: d  reason: collision with root package name */
        final /* synthetic */ f f17878d;

        /* renamed from: e  reason: collision with root package name */
        final /* synthetic */ Set f17879e;

        /* renamed from: f  reason: collision with root package name */
        final /* synthetic */ Type f17880f;

        C0223a(f fVar, h hVar, w wVar, f fVar2, Set set, Type type) {
            this.f17875a = fVar;
            this.f17876b = hVar;
            this.f17877c = wVar;
            this.f17878d = fVar2;
            this.f17879e = set;
            this.f17880f = type;
        }

        @Override // com.squareup.moshi.h
        public Object fromJson(m mVar) {
            f fVar = this.f17878d;
            if (fVar == null) {
                return this.f17876b.fromJson(mVar);
            }
            if (!fVar.f17898g && mVar.E() == m.c.NULL) {
                mVar.m();
                return null;
            }
            try {
                return this.f17878d.b(this.f17877c, mVar);
            } catch (InvocationTargetException e10) {
                Throwable cause = e10.getCause();
                if (cause instanceof IOException) {
                    throw ((IOException) cause);
                }
                throw new j(cause + " at " + mVar.r(), cause);
            }
        }

        @Override // com.squareup.moshi.h
        public void toJson(t tVar, Object obj) {
            f fVar = this.f17875a;
            if (fVar == null) {
                this.f17876b.toJson(tVar, obj);
            } else if (!fVar.f17898g && obj == null) {
                tVar.C0();
            } else {
                try {
                    fVar.e(this.f17877c, tVar, obj);
                } catch (InvocationTargetException e10) {
                    Throwable cause = e10.getCause();
                    if (cause instanceof IOException) {
                        throw ((IOException) cause);
                    }
                    throw new j(cause + " at " + tVar.r(), cause);
                }
            }
        }

        public String toString() {
            return "JsonAdapter" + this.f17879e + "(" + this.f17880f + ")";
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
        private h f17882h;

        /* renamed from: i  reason: collision with root package name */
        final /* synthetic */ Type[] f17883i;

        /* renamed from: j  reason: collision with root package name */
        final /* synthetic */ Type f17884j;

        /* renamed from: k  reason: collision with root package name */
        final /* synthetic */ Set f17885k;

        /* renamed from: l  reason: collision with root package name */
        final /* synthetic */ Set f17886l;

        /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
        c(Type type, Set set, Object obj, Method method, int i10, int i11, boolean z10, Type[] typeArr, Type type2, Set set2, Set set3) {
            super(type, set, obj, method, i10, i11, z10);
            this.f17883i = typeArr;
            this.f17884j = type2;
            this.f17885k = set2;
            this.f17886l = set3;
        }

        @Override // com.squareup.moshi.a.f
        public void a(w wVar, h.e eVar) {
            h e10;
            super.a(wVar, eVar);
            if (a0.d(this.f17883i[0], this.f17884j) && this.f17885k.equals(this.f17886l)) {
                e10 = wVar.i(eVar, this.f17884j, this.f17886l);
            } else {
                e10 = wVar.e(this.f17884j, this.f17886l);
            }
            this.f17882h = e10;
        }

        @Override // com.squareup.moshi.a.f
        public void e(w wVar, t tVar, Object obj) {
            this.f17882h.toJson(tVar, c(obj));
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
        h f17887h;

        /* renamed from: i  reason: collision with root package name */
        final /* synthetic */ Type[] f17888i;

        /* renamed from: j  reason: collision with root package name */
        final /* synthetic */ Type f17889j;

        /* renamed from: k  reason: collision with root package name */
        final /* synthetic */ Set f17890k;

        /* renamed from: l  reason: collision with root package name */
        final /* synthetic */ Set f17891l;

        /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
        e(Type type, Set set, Object obj, Method method, int i10, int i11, boolean z10, Type[] typeArr, Type type2, Set set2, Set set3) {
            super(type, set, obj, method, i10, i11, z10);
            this.f17888i = typeArr;
            this.f17889j = type2;
            this.f17890k = set2;
            this.f17891l = set3;
        }

        @Override // com.squareup.moshi.a.f
        public void a(w wVar, h.e eVar) {
            h e10;
            super.a(wVar, eVar);
            if (a0.d(this.f17888i[0], this.f17889j) && this.f17890k.equals(this.f17891l)) {
                e10 = wVar.i(eVar, this.f17888i[0], this.f17890k);
            } else {
                e10 = wVar.e(this.f17888i[0], this.f17890k);
            }
            this.f17887h = e10;
        }

        @Override // com.squareup.moshi.a.f
        public Object b(w wVar, m mVar) {
            return c(this.f17887h.fromJson(mVar));
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static abstract class f {

        /* renamed from: a  reason: collision with root package name */
        final Type f17892a;

        /* renamed from: b  reason: collision with root package name */
        final Set f17893b;

        /* renamed from: c  reason: collision with root package name */
        final Object f17894c;

        /* renamed from: d  reason: collision with root package name */
        final Method f17895d;

        /* renamed from: e  reason: collision with root package name */
        final int f17896e;

        /* renamed from: f  reason: collision with root package name */
        final h[] f17897f;

        /* renamed from: g  reason: collision with root package name */
        final boolean f17898g;

        f(Type type, Set set, Object obj, Method method, int i10, int i11, boolean z10) {
            this.f17892a = ym.c.a(type);
            this.f17893b = set;
            this.f17894c = obj;
            this.f17895d = method;
            this.f17896e = i11;
            this.f17897f = new h[i10 - i11];
            this.f17898g = z10;
        }

        public void a(w wVar, h.e eVar) {
            h e10;
            if (this.f17897f.length > 0) {
                Type[] genericParameterTypes = this.f17895d.getGenericParameterTypes();
                Annotation[][] parameterAnnotations = this.f17895d.getParameterAnnotations();
                int length = genericParameterTypes.length;
                for (int i10 = this.f17896e; i10 < length; i10++) {
                    Type type = ((ParameterizedType) genericParameterTypes[i10]).getActualTypeArguments()[0];
                    Set l10 = ym.c.l(parameterAnnotations[i10]);
                    h[] hVarArr = this.f17897f;
                    int i11 = i10 - this.f17896e;
                    if (a0.d(this.f17892a, type) && this.f17893b.equals(l10)) {
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
            h[] hVarArr = this.f17897f;
            Object[] objArr = new Object[hVarArr.length + 1];
            objArr[0] = obj;
            System.arraycopy(hVarArr, 0, objArr, 1, hVarArr.length);
            try {
                return this.f17895d.invoke(this.f17894c, objArr);
            } catch (IllegalAccessException unused) {
                throw new AssertionError();
            }
        }

        protected Object d(Object obj, Object obj2) {
            h[] hVarArr = this.f17897f;
            Object[] objArr = new Object[hVarArr.length + 2];
            objArr[0] = obj;
            objArr[1] = obj2;
            System.arraycopy(hVarArr, 0, objArr, 2, hVarArr.length);
            try {
                return this.f17895d.invoke(this.f17894c, objArr);
            } catch (IllegalAccessException unused) {
                throw new AssertionError();
            }
        }

        public void e(w wVar, t tVar, Object obj) {
            throw new AssertionError();
        }
    }

    a(List list, List list2) {
        this.f17873a = list;
        this.f17874b = list2;
    }

    static f a(Object obj, Method method) {
        method.setAccessible(true);
        Type genericReturnType = method.getGenericReturnType();
        Set k10 = ym.c.k(method);
        Type[] genericParameterTypes = method.getGenericParameterTypes();
        Annotation[][] parameterAnnotations = method.getParameterAnnotations();
        int length = genericParameterTypes.length;
        Class cls = Void.TYPE;
        if (length >= 1 && genericParameterTypes[0] == m.class && genericReturnType != cls && d(1, genericParameterTypes)) {
            return new d(genericReturnType, k10, obj, method, genericParameterTypes.length, 1, true);
        }
        if (genericParameterTypes.length == 1 && genericReturnType != cls) {
            Set l10 = ym.c.l(parameterAnnotations[0]);
            return new e(genericReturnType, k10, obj, method, genericParameterTypes.length, 1, ym.c.f(parameterAnnotations[0]), genericParameterTypes, genericReturnType, l10, k10);
        }
        throw new IllegalArgumentException("Unexpected signature for " + method + ".\n@FromJson method signatures may have one of the following structures:\n    <any access modifier> R fromJson(JsonReader jsonReader) throws <any>;\n    <any access modifier> R fromJson(JsonReader jsonReader, JsonAdapter<any> delegate, <any more delegates>) throws <any>;\n    <any access modifier> R fromJson(T value) throws <any>;\n");
    }

    private static f b(List list, Type type, Set set) {
        int size = list.size();
        for (int i10 = 0; i10 < size; i10++) {
            f fVar = (f) list.get(i10);
            if (a0.d(fVar.f17892a, type) && fVar.f17893b.equals(set)) {
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
                    if (b(arrayList, e10.f17892a, e10.f17893b) == null) {
                        arrayList.add(e10);
                    } else {
                        throw new IllegalArgumentException("Conflicting @ToJson methods:\n    " + b11.f17895d + "\n    " + e10.f17895d);
                    }
                }
                if (method.isAnnotationPresent(com.squareup.moshi.f.class)) {
                    f a10 = a(obj, method);
                    if (b(arrayList2, a10.f17892a, a10.f17893b) == null) {
                        arrayList2.add(a10);
                    } else {
                        throw new IllegalArgumentException("Conflicting @FromJson methods:\n    " + b10.f17895d + "\n    " + a10.f17895d);
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
            return new b(genericParameterTypes[1], ym.c.l(parameterAnnotations[1]), obj, method, genericParameterTypes.length, 2, true);
        } else if (genericParameterTypes.length == 1 && genericReturnType != cls) {
            Set k10 = ym.c.k(method);
            Set l10 = ym.c.l(parameterAnnotations[0]);
            return new c(genericParameterTypes[0], l10, obj, method, genericParameterTypes.length, 1, ym.c.f(parameterAnnotations[0]), genericParameterTypes, genericReturnType, l10, k10);
        } else {
            throw new IllegalArgumentException("Unexpected signature for " + method + ".\n@ToJson method signatures may have one of the following structures:\n    <any access modifier> void toJson(JsonWriter writer, T value) throws <any>;\n    <any access modifier> void toJson(JsonWriter writer, T value, JsonAdapter<any> delegate, <any more delegates>) throws <any>;\n    <any access modifier> R toJson(T value) throws <any>;\n");
        }
    }

    @Override // com.squareup.moshi.h.e
    public h create(Type type, Set set, w wVar) {
        String str;
        f b10 = b(this.f17873a, type, set);
        f b11 = b(this.f17874b, type, set);
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
                throw new IllegalArgumentException("No " + str + " adapter for " + ym.c.u(type, set), e10);
            }
        }
        h hVar2 = hVar;
        if (b10 != null) {
            b10.a(wVar, this);
        }
        if (b11 != null) {
            b11.a(wVar, this);
        }
        return new C0223a(b10, hVar2, wVar, b11, set, type);
    }
}

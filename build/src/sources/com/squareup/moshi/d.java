package com.squareup.moshi;

import com.squareup.moshi.h;
import com.squareup.moshi.m;
import java.lang.reflect.Field;
import java.lang.reflect.InvocationTargetException;
import java.lang.reflect.Modifier;
import java.lang.reflect.ParameterizedType;
import java.lang.reflect.Type;
import java.util.Collection;
import java.util.List;
import java.util.Map;
import java.util.Set;
import java.util.TreeMap;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
final class d extends h {

    /* renamed from: d  reason: collision with root package name */
    public static final h.e f18524d = new a();

    /* renamed from: a  reason: collision with root package name */
    private final c f18525a;

    /* renamed from: b  reason: collision with root package name */
    private final b[] f18526b;

    /* renamed from: c  reason: collision with root package name */
    private final m.b f18527c;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    class a implements h.e {
        a() {
        }

        private void a(w wVar, Type type, Map map) {
            Field[] declaredFields;
            g gVar;
            b bVar;
            b bVar2;
            Class g10 = a0.g(type);
            boolean j10 = tm.c.j(g10);
            for (Field field : g10.getDeclaredFields()) {
                if (b(j10, field.getModifiers()) && ((gVar = (g) field.getAnnotation(g.class)) == null || !gVar.ignore())) {
                    Type q10 = tm.c.q(type, g10, field.getGenericType());
                    Set k10 = tm.c.k(field);
                    String name = field.getName();
                    h f10 = wVar.f(q10, k10, name);
                    field.setAccessible(true);
                    String m10 = tm.c.m(name, gVar);
                    if (((b) map.put(m10, new b(m10, field, f10))) != null) {
                        throw new IllegalArgumentException("Conflicting fields:\n    " + bVar2.f18529b + "\n    " + bVar.f18529b);
                    }
                }
            }
        }

        private boolean b(boolean z10, int i10) {
            if (Modifier.isStatic(i10) || Modifier.isTransient(i10)) {
                return false;
            }
            if (!Modifier.isPublic(i10) && !Modifier.isProtected(i10) && z10) {
                return false;
            }
            return true;
        }

        private void c(Type type, Class cls) {
            Class<?> g10 = a0.g(type);
            if (!cls.isAssignableFrom(g10)) {
                return;
            }
            throw new IllegalArgumentException("No JsonAdapter for " + type + ", you should probably use " + cls.getSimpleName() + " instead of " + g10.getSimpleName() + " (Moshi only supports the collection interfaces by default) or else register a custom JsonAdapter.");
        }

        @Override // com.squareup.moshi.h.e
        public h create(Type type, Set set, w wVar) {
            if (!(type instanceof Class) && !(type instanceof ParameterizedType)) {
                return null;
            }
            Class g10 = a0.g(type);
            if (g10.isInterface() || g10.isEnum() || !set.isEmpty()) {
                return null;
            }
            if (tm.c.j(g10)) {
                c(type, List.class);
                c(type, Set.class);
                c(type, Map.class);
                c(type, Collection.class);
                String str = "Platform " + g10;
                if (type instanceof ParameterizedType) {
                    str = str + " in " + type;
                }
                throw new IllegalArgumentException(str + " requires explicit JsonAdapter to be registered");
            } else if (!g10.isAnonymousClass()) {
                if (!g10.isLocalClass()) {
                    if (g10.getEnclosingClass() != null && !Modifier.isStatic(g10.getModifiers())) {
                        throw new IllegalArgumentException("Cannot serialize non-static nested class " + g10.getName());
                    } else if (!Modifier.isAbstract(g10.getModifiers())) {
                        if (!tm.c.i(g10)) {
                            c a10 = c.a(g10);
                            TreeMap treeMap = new TreeMap();
                            while (type != Object.class) {
                                a(wVar, type, treeMap);
                                type = a0.f(type);
                            }
                            return new d(a10, treeMap).nullSafe();
                        }
                        throw new IllegalArgumentException("Cannot serialize Kotlin type " + g10.getName() + ". Reflective serialization of Kotlin classes without using kotlin-reflect has undefined and unexpected behavior. Please use KotlinJsonAdapterFactory from the moshi-kotlin artifact or use code gen from the moshi-kotlin-codegen artifact.");
                    } else {
                        throw new IllegalArgumentException("Cannot serialize abstract class " + g10.getName());
                    }
                }
                throw new IllegalArgumentException("Cannot serialize local class " + g10.getName());
            } else {
                throw new IllegalArgumentException("Cannot serialize anonymous class " + g10.getName());
            }
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static class b {

        /* renamed from: a  reason: collision with root package name */
        final String f18528a;

        /* renamed from: b  reason: collision with root package name */
        final Field f18529b;

        /* renamed from: c  reason: collision with root package name */
        final h f18530c;

        b(String str, Field field, h hVar) {
            this.f18528a = str;
            this.f18529b = field;
            this.f18530c = hVar;
        }

        void a(m mVar, Object obj) {
            this.f18529b.set(obj, this.f18530c.fromJson(mVar));
        }

        void b(t tVar, Object obj) {
            this.f18530c.toJson(tVar, this.f18529b.get(obj));
        }
    }

    d(c cVar, Map map) {
        this.f18525a = cVar;
        this.f18526b = (b[]) map.values().toArray(new b[map.size()]);
        this.f18527c = m.b.a((String[]) map.keySet().toArray(new String[map.size()]));
    }

    @Override // com.squareup.moshi.h
    public Object fromJson(m mVar) {
        try {
            Object b10 = this.f18525a.b();
            try {
                mVar.r();
                while (mVar.hasNext()) {
                    int t02 = mVar.t0(this.f18527c);
                    if (t02 == -1) {
                        mVar.F0();
                        mVar.P();
                    } else {
                        this.f18526b[t02].a(mVar, b10);
                    }
                }
                mVar.y();
                return b10;
            } catch (IllegalAccessException unused) {
                throw new AssertionError();
            }
        } catch (IllegalAccessException unused2) {
            throw new AssertionError();
        } catch (InstantiationException e10) {
            throw new RuntimeException(e10);
        } catch (InvocationTargetException e11) {
            throw tm.c.t(e11);
        }
    }

    @Override // com.squareup.moshi.h
    public void toJson(t tVar, Object obj) {
        b[] bVarArr;
        try {
            tVar.l();
            for (b bVar : this.f18526b) {
                tVar.t0(bVar.f18528a);
                bVar.b(tVar, obj);
            }
            tVar.E();
        } catch (IllegalAccessException unused) {
            throw new AssertionError();
        }
    }

    public String toString() {
        return "JsonAdapter(" + this.f18525a + ")";
    }
}

package cn;

import com.squareup.moshi.a0;
import com.squareup.moshi.h;
import com.squareup.moshi.j;
import com.squareup.moshi.m;
import com.squareup.moshi.t;
import com.squareup.moshi.w;
import java.lang.reflect.Type;
import java.util.ArrayList;
import java.util.Collections;
import java.util.List;
import java.util.Set;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class b implements h.e {

    /* renamed from: a  reason: collision with root package name */
    final Class f8361a;

    /* renamed from: b  reason: collision with root package name */
    final String f8362b;

    /* renamed from: c  reason: collision with root package name */
    final List f8363c;

    /* renamed from: d  reason: collision with root package name */
    final List f8364d;

    /* renamed from: e  reason: collision with root package name */
    final h f8365e;

    /* JADX INFO: Access modifiers changed from: package-private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public class a extends h {

        /* renamed from: a  reason: collision with root package name */
        final /* synthetic */ Object f8366a;

        a(Object obj) {
            this.f8366a = obj;
        }

        @Override // com.squareup.moshi.h
        public Object fromJson(m mVar) {
            mVar.T();
            return this.f8366a;
        }

        @Override // com.squareup.moshi.h
        public void toJson(t tVar, Object obj) {
            throw new IllegalArgumentException("Expected one of " + b.this.f8364d + " but found " + obj + ", a " + obj.getClass() + ". Register this subtype.");
        }
    }

    /* renamed from: cn.b$b  reason: collision with other inner class name */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    static final class C0137b extends h {

        /* renamed from: a  reason: collision with root package name */
        final String f8368a;

        /* renamed from: b  reason: collision with root package name */
        final List f8369b;

        /* renamed from: c  reason: collision with root package name */
        final List f8370c;

        /* renamed from: d  reason: collision with root package name */
        final List f8371d;

        /* renamed from: e  reason: collision with root package name */
        final h f8372e;

        /* renamed from: f  reason: collision with root package name */
        final m.b f8373f;

        /* renamed from: g  reason: collision with root package name */
        final m.b f8374g;

        C0137b(String str, List list, List list2, List list3, h hVar) {
            this.f8368a = str;
            this.f8369b = list;
            this.f8370c = list2;
            this.f8371d = list3;
            this.f8372e = hVar;
            this.f8373f = m.b.a(str);
            this.f8374g = m.b.a((String[]) list.toArray(new String[0]));
        }

        private int a(m mVar) {
            mVar.u();
            while (mVar.hasNext()) {
                if (mVar.J(this.f8373f) == -1) {
                    mVar.z0();
                    mVar.T();
                } else {
                    int Q = mVar.Q(this.f8374g);
                    if (Q == -1 && this.f8372e == null) {
                        throw new j("Expected one of " + this.f8369b + " for key '" + this.f8368a + "' but found '" + mVar.g1() + "'. Register a subtype for this label.");
                    }
                    return Q;
                }
            }
            throw new j("Missing label for " + this.f8368a);
        }

        @Override // com.squareup.moshi.h
        public Object fromJson(m mVar) {
            m y10 = mVar.y();
            y10.Z(false);
            try {
                int a10 = a(y10);
                y10.close();
                if (a10 == -1) {
                    return this.f8372e.fromJson(mVar);
                }
                return ((h) this.f8371d.get(a10)).fromJson(mVar);
            } catch (Throwable th2) {
                y10.close();
                throw th2;
            }
        }

        @Override // com.squareup.moshi.h
        public void toJson(t tVar, Object obj) {
            h hVar;
            int indexOf = this.f8370c.indexOf(obj.getClass());
            if (indexOf == -1) {
                hVar = this.f8372e;
                if (hVar == null) {
                    throw new IllegalArgumentException("Expected one of " + this.f8370c + " but found " + obj + ", a " + obj.getClass() + ". Register this subtype.");
                }
            } else {
                hVar = (h) this.f8371d.get(indexOf);
            }
            tVar.i();
            if (hVar != this.f8372e) {
                tVar.J(this.f8368a).V0((String) this.f8369b.get(indexOf));
            }
            int h10 = tVar.h();
            hVar.toJson(tVar, obj);
            tVar.p(h10);
            tVar.s();
        }

        public String toString() {
            return "PolymorphicJsonAdapter(" + this.f8368a + ")";
        }
    }

    b(Class cls, String str, List list, List list2, h hVar) {
        this.f8361a = cls;
        this.f8362b = str;
        this.f8363c = list;
        this.f8364d = list2;
        this.f8365e = hVar;
    }

    private h a(Object obj) {
        return new a(obj);
    }

    public static b b(Class cls, String str) {
        if (cls != null) {
            if (str != null) {
                List list = Collections.EMPTY_LIST;
                return new b(cls, str, list, list, null);
            }
            throw new NullPointerException("labelKey == null");
        }
        throw new NullPointerException("baseType == null");
    }

    public b c(Object obj) {
        return d(a(obj));
    }

    @Override // com.squareup.moshi.h.e
    public h create(Type type, Set set, w wVar) {
        if (a0.g(type) == this.f8361a && set.isEmpty()) {
            ArrayList arrayList = new ArrayList(this.f8364d.size());
            int size = this.f8364d.size();
            for (int i10 = 0; i10 < size; i10++) {
                arrayList.add(wVar.d((Type) this.f8364d.get(i10)));
            }
            return new C0137b(this.f8362b, this.f8363c, this.f8364d, arrayList, this.f8365e).nullSafe();
        }
        return null;
    }

    public b d(h hVar) {
        return new b(this.f8361a, this.f8362b, this.f8363c, this.f8364d, hVar);
    }

    public b e(Class cls, String str) {
        if (cls != null) {
            if (str != null) {
                if (!this.f8363c.contains(str)) {
                    ArrayList arrayList = new ArrayList(this.f8363c);
                    arrayList.add(str);
                    ArrayList arrayList2 = new ArrayList(this.f8364d);
                    arrayList2.add(cls);
                    return new b(this.f8361a, this.f8362b, arrayList, arrayList2, this.f8365e);
                }
                throw new IllegalArgumentException("Labels must be unique.");
            }
            throw new NullPointerException("label == null");
        }
        throw new NullPointerException("subtype == null");
    }
}

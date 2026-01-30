package rm;

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
    final Class f48366a;

    /* renamed from: b  reason: collision with root package name */
    final String f48367b;

    /* renamed from: c  reason: collision with root package name */
    final List f48368c;

    /* renamed from: d  reason: collision with root package name */
    final List f48369d;

    /* renamed from: e  reason: collision with root package name */
    final h f48370e;

    /* JADX INFO: Access modifiers changed from: package-private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public class a extends h {

        /* renamed from: a  reason: collision with root package name */
        final /* synthetic */ Object f48371a;

        a(Object obj) {
            this.f48371a = obj;
        }

        @Override // com.squareup.moshi.h
        public Object fromJson(m mVar) {
            mVar.P();
            return this.f48371a;
        }

        @Override // com.squareup.moshi.h
        public void toJson(t tVar, Object obj) {
            throw new IllegalArgumentException("Expected one of " + b.this.f48369d + " but found " + obj + ", a " + obj.getClass() + ". Register this subtype.");
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    /* renamed from: rm.b$b  reason: collision with other inner class name */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class C0589b extends h {

        /* renamed from: a  reason: collision with root package name */
        final String f48373a;

        /* renamed from: b  reason: collision with root package name */
        final List f48374b;

        /* renamed from: c  reason: collision with root package name */
        final List f48375c;

        /* renamed from: d  reason: collision with root package name */
        final List f48376d;

        /* renamed from: e  reason: collision with root package name */
        final h f48377e;

        /* renamed from: f  reason: collision with root package name */
        final m.b f48378f;

        /* renamed from: g  reason: collision with root package name */
        final m.b f48379g;

        C0589b(String str, List list, List list2, List list3, h hVar) {
            this.f48373a = str;
            this.f48374b = list;
            this.f48375c = list2;
            this.f48376d = list3;
            this.f48377e = hVar;
            this.f48378f = m.b.a(str);
            this.f48379g = m.b.a((String[]) list.toArray(new String[0]));
        }

        private int a(m mVar) {
            mVar.r();
            while (mVar.hasNext()) {
                if (mVar.A0(this.f48378f) == -1) {
                    mVar.E0();
                    mVar.P();
                } else {
                    int C0 = mVar.C0(this.f48379g);
                    if (C0 == -1 && this.f48377e == null) {
                        throw new j("Expected one of " + this.f48374b + " for key '" + this.f48373a + "' but found '" + mVar.e1() + "'. Register a subtype for this label.");
                    }
                    return C0;
                }
            }
            throw new j("Missing label for " + this.f48373a);
        }

        @Override // com.squareup.moshi.h
        public Object fromJson(m mVar) {
            m F = mVar.F();
            F.D0(false);
            try {
                int a10 = a(F);
                F.close();
                if (a10 == -1) {
                    return this.f48377e.fromJson(mVar);
                }
                return ((h) this.f48376d.get(a10)).fromJson(mVar);
            } catch (Throwable th2) {
                F.close();
                throw th2;
            }
        }

        @Override // com.squareup.moshi.h
        public void toJson(t tVar, Object obj) {
            h hVar;
            int indexOf = this.f48375c.indexOf(obj.getClass());
            if (indexOf == -1) {
                hVar = this.f48377e;
                if (hVar == null) {
                    throw new IllegalArgumentException("Expected one of " + this.f48375c + " but found " + obj + ", a " + obj.getClass() + ". Register this subtype.");
                }
            } else {
                hVar = (h) this.f48376d.get(indexOf);
            }
            tVar.l();
            if (hVar != this.f48377e) {
                tVar.A0(this.f48373a).x1((String) this.f48374b.get(indexOf));
            }
            int h10 = tVar.h();
            hVar.toJson(tVar, obj);
            tVar.B(h10);
            tVar.E();
        }

        public String toString() {
            return "PolymorphicJsonAdapter(" + this.f48373a + ")";
        }
    }

    b(Class cls, String str, List list, List list2, h hVar) {
        this.f48366a = cls;
        this.f48367b = str;
        this.f48368c = list;
        this.f48369d = list2;
        this.f48370e = hVar;
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
        if (a0.g(type) == this.f48366a && set.isEmpty()) {
            ArrayList arrayList = new ArrayList(this.f48369d.size());
            int size = this.f48369d.size();
            for (int i10 = 0; i10 < size; i10++) {
                arrayList.add(wVar.d((Type) this.f48369d.get(i10)));
            }
            return new C0589b(this.f48367b, this.f48368c, this.f48369d, arrayList, this.f48370e).nullSafe();
        }
        return null;
    }

    public b d(h hVar) {
        return new b(this.f48366a, this.f48367b, this.f48368c, this.f48369d, hVar);
    }

    public b e(Class cls, String str) {
        if (cls != null) {
            if (str != null) {
                if (!this.f48368c.contains(str)) {
                    ArrayList arrayList = new ArrayList(this.f48368c);
                    arrayList.add(str);
                    ArrayList arrayList2 = new ArrayList(this.f48369d);
                    arrayList2.add(cls);
                    return new b(this.f48366a, this.f48367b, arrayList, arrayList2, this.f48370e);
                }
                throw new IllegalArgumentException("Labels must be unique.");
            }
            throw new NullPointerException("label == null");
        }
        throw new NullPointerException("subtype == null");
    }
}

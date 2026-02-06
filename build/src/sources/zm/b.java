package zm;

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
    final Class f56340a;

    /* renamed from: b  reason: collision with root package name */
    final String f56341b;

    /* renamed from: c  reason: collision with root package name */
    final List f56342c;

    /* renamed from: d  reason: collision with root package name */
    final List f56343d;

    /* renamed from: e  reason: collision with root package name */
    final h f56344e;

    /* JADX INFO: Access modifiers changed from: package-private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public class a extends h {

        /* renamed from: a  reason: collision with root package name */
        final /* synthetic */ Object f56345a;

        a(Object obj) {
            this.f56345a = obj;
        }

        @Override // com.squareup.moshi.h
        public Object fromJson(m mVar) {
            mVar.S();
            return this.f56345a;
        }

        @Override // com.squareup.moshi.h
        public void toJson(t tVar, Object obj) {
            throw new IllegalArgumentException("Expected one of " + b.this.f56343d + " but found " + obj + ", a " + obj.getClass() + ". Register this subtype.");
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    /* renamed from: zm.b$b  reason: collision with other inner class name */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class C0774b extends h {

        /* renamed from: a  reason: collision with root package name */
        final String f56347a;

        /* renamed from: b  reason: collision with root package name */
        final List f56348b;

        /* renamed from: c  reason: collision with root package name */
        final List f56349c;

        /* renamed from: d  reason: collision with root package name */
        final List f56350d;

        /* renamed from: e  reason: collision with root package name */
        final h f56351e;

        /* renamed from: f  reason: collision with root package name */
        final m.b f56352f;

        /* renamed from: g  reason: collision with root package name */
        final m.b f56353g;

        C0774b(String str, List list, List list2, List list3, h hVar) {
            this.f56347a = str;
            this.f56348b = list;
            this.f56349c = list2;
            this.f56350d = list3;
            this.f56351e = hVar;
            this.f56352f = m.b.a(str);
            this.f56353g = m.b.a((String[]) list.toArray(new String[0]));
        }

        private int a(m mVar) {
            mVar.u();
            while (mVar.hasNext()) {
                if (mVar.J(this.f56352f) == -1) {
                    mVar.E0();
                    mVar.S();
                } else {
                    int P = mVar.P(this.f56353g);
                    if (P == -1 && this.f56351e == null) {
                        throw new j("Expected one of " + this.f56348b + " for key '" + this.f56347a + "' but found '" + mVar.e1() + "'. Register a subtype for this label.");
                    }
                    return P;
                }
            }
            throw new j("Missing label for " + this.f56347a);
        }

        @Override // com.squareup.moshi.h
        public Object fromJson(m mVar) {
            m y10 = mVar.y();
            y10.Y(false);
            try {
                int a10 = a(y10);
                y10.close();
                if (a10 == -1) {
                    return this.f56351e.fromJson(mVar);
                }
                return ((h) this.f56350d.get(a10)).fromJson(mVar);
            } catch (Throwable th2) {
                y10.close();
                throw th2;
            }
        }

        @Override // com.squareup.moshi.h
        public void toJson(t tVar, Object obj) {
            h hVar;
            int indexOf = this.f56349c.indexOf(obj.getClass());
            if (indexOf == -1) {
                hVar = this.f56351e;
                if (hVar == null) {
                    throw new IllegalArgumentException("Expected one of " + this.f56349c + " but found " + obj + ", a " + obj.getClass() + ". Register this subtype.");
                }
            } else {
                hVar = (h) this.f56350d.get(indexOf);
            }
            tVar.k();
            if (hVar != this.f56351e) {
                tVar.J(this.f56347a).w1((String) this.f56348b.get(indexOf));
            }
            int g10 = tVar.g();
            hVar.toJson(tVar, obj);
            tVar.p(g10);
            tVar.s();
        }

        public String toString() {
            return "PolymorphicJsonAdapter(" + this.f56347a + ")";
        }
    }

    b(Class cls, String str, List list, List list2, h hVar) {
        this.f56340a = cls;
        this.f56341b = str;
        this.f56342c = list;
        this.f56343d = list2;
        this.f56344e = hVar;
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
        if (a0.g(type) == this.f56340a && set.isEmpty()) {
            ArrayList arrayList = new ArrayList(this.f56343d.size());
            int size = this.f56343d.size();
            for (int i10 = 0; i10 < size; i10++) {
                arrayList.add(wVar.d((Type) this.f56343d.get(i10)));
            }
            return new C0774b(this.f56341b, this.f56342c, this.f56343d, arrayList, this.f56344e).nullSafe();
        }
        return null;
    }

    public b d(h hVar) {
        return new b(this.f56340a, this.f56341b, this.f56342c, this.f56343d, hVar);
    }

    public b e(Class cls, String str) {
        if (cls != null) {
            if (str != null) {
                if (!this.f56342c.contains(str)) {
                    ArrayList arrayList = new ArrayList(this.f56342c);
                    arrayList.add(str);
                    ArrayList arrayList2 = new ArrayList(this.f56343d);
                    arrayList2.add(cls);
                    return new b(this.f56340a, this.f56341b, arrayList, arrayList2, this.f56344e);
                }
                throw new IllegalArgumentException("Labels must be unique.");
            }
            throw new NullPointerException("label == null");
        }
        throw new NullPointerException("subtype == null");
    }
}

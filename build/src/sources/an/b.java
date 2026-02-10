package an;

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
    final Class f856a;

    /* renamed from: b  reason: collision with root package name */
    final String f857b;

    /* renamed from: c  reason: collision with root package name */
    final List f858c;

    /* renamed from: d  reason: collision with root package name */
    final List f859d;

    /* renamed from: e  reason: collision with root package name */
    final h f860e;

    /* JADX INFO: Access modifiers changed from: package-private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public class a extends h {

        /* renamed from: a  reason: collision with root package name */
        final /* synthetic */ Object f861a;

        a(Object obj) {
            this.f861a = obj;
        }

        @Override // com.squareup.moshi.h
        public Object fromJson(m mVar) {
            mVar.T();
            return this.f861a;
        }

        @Override // com.squareup.moshi.h
        public void toJson(t tVar, Object obj) {
            throw new IllegalArgumentException("Expected one of " + b.this.f859d + " but found " + obj + ", a " + obj.getClass() + ". Register this subtype.");
        }
    }

    /* renamed from: an.b$b  reason: collision with other inner class name */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    static final class C0013b extends h {

        /* renamed from: a  reason: collision with root package name */
        final String f863a;

        /* renamed from: b  reason: collision with root package name */
        final List f864b;

        /* renamed from: c  reason: collision with root package name */
        final List f865c;

        /* renamed from: d  reason: collision with root package name */
        final List f866d;

        /* renamed from: e  reason: collision with root package name */
        final h f867e;

        /* renamed from: f  reason: collision with root package name */
        final m.b f868f;

        /* renamed from: g  reason: collision with root package name */
        final m.b f869g;

        C0013b(String str, List list, List list2, List list3, h hVar) {
            this.f863a = str;
            this.f864b = list;
            this.f865c = list2;
            this.f866d = list3;
            this.f867e = hVar;
            this.f868f = m.b.a(str);
            this.f869g = m.b.a((String[]) list.toArray(new String[0]));
        }

        private int a(m mVar) {
            mVar.u();
            while (mVar.hasNext()) {
                if (mVar.J(this.f868f) == -1) {
                    mVar.C0();
                    mVar.T();
                } else {
                    int Q = mVar.Q(this.f869g);
                    if (Q == -1 && this.f867e == null) {
                        throw new j("Expected one of " + this.f864b + " for key '" + this.f863a + "' but found '" + mVar.b1() + "'. Register a subtype for this label.");
                    }
                    return Q;
                }
            }
            throw new j("Missing label for " + this.f863a);
        }

        @Override // com.squareup.moshi.h
        public Object fromJson(m mVar) {
            m y10 = mVar.y();
            y10.Z(false);
            try {
                int a10 = a(y10);
                y10.close();
                if (a10 == -1) {
                    return this.f867e.fromJson(mVar);
                }
                return ((h) this.f866d.get(a10)).fromJson(mVar);
            } catch (Throwable th2) {
                y10.close();
                throw th2;
            }
        }

        @Override // com.squareup.moshi.h
        public void toJson(t tVar, Object obj) {
            h hVar;
            int indexOf = this.f865c.indexOf(obj.getClass());
            if (indexOf == -1) {
                hVar = this.f867e;
                if (hVar == null) {
                    throw new IllegalArgumentException("Expected one of " + this.f865c + " but found " + obj + ", a " + obj.getClass() + ". Register this subtype.");
                }
            } else {
                hVar = (h) this.f866d.get(indexOf);
            }
            tVar.k();
            if (hVar != this.f867e) {
                tVar.J(this.f863a).r1((String) this.f864b.get(indexOf));
            }
            int g10 = tVar.g();
            hVar.toJson(tVar, obj);
            tVar.p(g10);
            tVar.s();
        }

        public String toString() {
            return "PolymorphicJsonAdapter(" + this.f863a + ")";
        }
    }

    b(Class cls, String str, List list, List list2, h hVar) {
        this.f856a = cls;
        this.f857b = str;
        this.f858c = list;
        this.f859d = list2;
        this.f860e = hVar;
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
        if (a0.g(type) == this.f856a && set.isEmpty()) {
            ArrayList arrayList = new ArrayList(this.f859d.size());
            int size = this.f859d.size();
            for (int i10 = 0; i10 < size; i10++) {
                arrayList.add(wVar.d((Type) this.f859d.get(i10)));
            }
            return new C0013b(this.f857b, this.f858c, this.f859d, arrayList, this.f860e).nullSafe();
        }
        return null;
    }

    public b d(h hVar) {
        return new b(this.f856a, this.f857b, this.f858c, this.f859d, hVar);
    }

    public b e(Class cls, String str) {
        if (cls != null) {
            if (str != null) {
                if (!this.f858c.contains(str)) {
                    ArrayList arrayList = new ArrayList(this.f858c);
                    arrayList.add(str);
                    ArrayList arrayList2 = new ArrayList(this.f859d);
                    arrayList2.add(cls);
                    return new b(this.f856a, this.f857b, arrayList, arrayList2, this.f860e);
                }
                throw new IllegalArgumentException("Labels must be unique.");
            }
            throw new NullPointerException("label == null");
        }
        throw new NullPointerException("subtype == null");
    }
}

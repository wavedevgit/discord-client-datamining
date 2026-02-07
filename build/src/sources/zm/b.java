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
    final Class f56388a;

    /* renamed from: b  reason: collision with root package name */
    final String f56389b;

    /* renamed from: c  reason: collision with root package name */
    final List f56390c;

    /* renamed from: d  reason: collision with root package name */
    final List f56391d;

    /* renamed from: e  reason: collision with root package name */
    final h f56392e;

    /* JADX INFO: Access modifiers changed from: package-private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public class a extends h {

        /* renamed from: a  reason: collision with root package name */
        final /* synthetic */ Object f56393a;

        a(Object obj) {
            this.f56393a = obj;
        }

        @Override // com.squareup.moshi.h
        public Object fromJson(m mVar) {
            mVar.S();
            return this.f56393a;
        }

        @Override // com.squareup.moshi.h
        public void toJson(t tVar, Object obj) {
            throw new IllegalArgumentException("Expected one of " + b.this.f56391d + " but found " + obj + ", a " + obj.getClass() + ". Register this subtype.");
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    /* renamed from: zm.b$b  reason: collision with other inner class name */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class C0774b extends h {

        /* renamed from: a  reason: collision with root package name */
        final String f56395a;

        /* renamed from: b  reason: collision with root package name */
        final List f56396b;

        /* renamed from: c  reason: collision with root package name */
        final List f56397c;

        /* renamed from: d  reason: collision with root package name */
        final List f56398d;

        /* renamed from: e  reason: collision with root package name */
        final h f56399e;

        /* renamed from: f  reason: collision with root package name */
        final m.b f56400f;

        /* renamed from: g  reason: collision with root package name */
        final m.b f56401g;

        C0774b(String str, List list, List list2, List list3, h hVar) {
            this.f56395a = str;
            this.f56396b = list;
            this.f56397c = list2;
            this.f56398d = list3;
            this.f56399e = hVar;
            this.f56400f = m.b.a(str);
            this.f56401g = m.b.a((String[]) list.toArray(new String[0]));
        }

        private int a(m mVar) {
            mVar.u();
            while (mVar.hasNext()) {
                if (mVar.J(this.f56400f) == -1) {
                    mVar.E0();
                    mVar.S();
                } else {
                    int P = mVar.P(this.f56401g);
                    if (P == -1 && this.f56399e == null) {
                        throw new j("Expected one of " + this.f56396b + " for key '" + this.f56395a + "' but found '" + mVar.e1() + "'. Register a subtype for this label.");
                    }
                    return P;
                }
            }
            throw new j("Missing label for " + this.f56395a);
        }

        @Override // com.squareup.moshi.h
        public Object fromJson(m mVar) {
            m y10 = mVar.y();
            y10.Y(false);
            try {
                int a10 = a(y10);
                y10.close();
                if (a10 == -1) {
                    return this.f56399e.fromJson(mVar);
                }
                return ((h) this.f56398d.get(a10)).fromJson(mVar);
            } catch (Throwable th2) {
                y10.close();
                throw th2;
            }
        }

        @Override // com.squareup.moshi.h
        public void toJson(t tVar, Object obj) {
            h hVar;
            int indexOf = this.f56397c.indexOf(obj.getClass());
            if (indexOf == -1) {
                hVar = this.f56399e;
                if (hVar == null) {
                    throw new IllegalArgumentException("Expected one of " + this.f56397c + " but found " + obj + ", a " + obj.getClass() + ". Register this subtype.");
                }
            } else {
                hVar = (h) this.f56398d.get(indexOf);
            }
            tVar.k();
            if (hVar != this.f56399e) {
                tVar.J(this.f56395a).w1((String) this.f56396b.get(indexOf));
            }
            int g10 = tVar.g();
            hVar.toJson(tVar, obj);
            tVar.p(g10);
            tVar.s();
        }

        public String toString() {
            return "PolymorphicJsonAdapter(" + this.f56395a + ")";
        }
    }

    b(Class cls, String str, List list, List list2, h hVar) {
        this.f56388a = cls;
        this.f56389b = str;
        this.f56390c = list;
        this.f56391d = list2;
        this.f56392e = hVar;
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
        if (a0.g(type) == this.f56388a && set.isEmpty()) {
            ArrayList arrayList = new ArrayList(this.f56391d.size());
            int size = this.f56391d.size();
            for (int i10 = 0; i10 < size; i10++) {
                arrayList.add(wVar.d((Type) this.f56391d.get(i10)));
            }
            return new C0774b(this.f56389b, this.f56390c, this.f56391d, arrayList, this.f56392e).nullSafe();
        }
        return null;
    }

    public b d(h hVar) {
        return new b(this.f56388a, this.f56389b, this.f56390c, this.f56391d, hVar);
    }

    public b e(Class cls, String str) {
        if (cls != null) {
            if (str != null) {
                if (!this.f56390c.contains(str)) {
                    ArrayList arrayList = new ArrayList(this.f56390c);
                    arrayList.add(str);
                    ArrayList arrayList2 = new ArrayList(this.f56391d);
                    arrayList2.add(cls);
                    return new b(this.f56388a, this.f56389b, arrayList, arrayList2, this.f56392e);
                }
                throw new IllegalArgumentException("Labels must be unique.");
            }
            throw new NullPointerException("label == null");
        }
        throw new NullPointerException("subtype == null");
    }
}

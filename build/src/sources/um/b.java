package um;

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
    final Class f50743a;

    /* renamed from: b  reason: collision with root package name */
    final String f50744b;

    /* renamed from: c  reason: collision with root package name */
    final List f50745c;

    /* renamed from: d  reason: collision with root package name */
    final List f50746d;

    /* renamed from: e  reason: collision with root package name */
    final h f50747e;

    /* JADX INFO: Access modifiers changed from: package-private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public class a extends h {

        /* renamed from: a  reason: collision with root package name */
        final /* synthetic */ Object f50748a;

        a(Object obj) {
            this.f50748a = obj;
        }

        @Override // com.squareup.moshi.h
        public Object fromJson(m mVar) {
            mVar.P();
            return this.f50748a;
        }

        @Override // com.squareup.moshi.h
        public void toJson(t tVar, Object obj) {
            throw new IllegalArgumentException("Expected one of " + b.this.f50746d + " but found " + obj + ", a " + obj.getClass() + ". Register this subtype.");
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    /* renamed from: um.b$b  reason: collision with other inner class name */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class C0637b extends h {

        /* renamed from: a  reason: collision with root package name */
        final String f50750a;

        /* renamed from: b  reason: collision with root package name */
        final List f50751b;

        /* renamed from: c  reason: collision with root package name */
        final List f50752c;

        /* renamed from: d  reason: collision with root package name */
        final List f50753d;

        /* renamed from: e  reason: collision with root package name */
        final h f50754e;

        /* renamed from: f  reason: collision with root package name */
        final m.b f50755f;

        /* renamed from: g  reason: collision with root package name */
        final m.b f50756g;

        C0637b(String str, List list, List list2, List list3, h hVar) {
            this.f50750a = str;
            this.f50751b = list;
            this.f50752c = list2;
            this.f50753d = list3;
            this.f50754e = hVar;
            this.f50755f = m.b.a(str);
            this.f50756g = m.b.a((String[]) list.toArray(new String[0]));
        }

        private int a(m mVar) {
            mVar.r();
            while (mVar.hasNext()) {
                if (mVar.A0(this.f50755f) == -1) {
                    mVar.E0();
                    mVar.P();
                } else {
                    int C0 = mVar.C0(this.f50756g);
                    if (C0 == -1 && this.f50754e == null) {
                        throw new j("Expected one of " + this.f50751b + " for key '" + this.f50750a + "' but found '" + mVar.f1() + "'. Register a subtype for this label.");
                    }
                    return C0;
                }
            }
            throw new j("Missing label for " + this.f50750a);
        }

        @Override // com.squareup.moshi.h
        public Object fromJson(m mVar) {
            m F = mVar.F();
            F.D0(false);
            try {
                int a10 = a(F);
                F.close();
                if (a10 == -1) {
                    return this.f50754e.fromJson(mVar);
                }
                return ((h) this.f50753d.get(a10)).fromJson(mVar);
            } catch (Throwable th2) {
                F.close();
                throw th2;
            }
        }

        @Override // com.squareup.moshi.h
        public void toJson(t tVar, Object obj) {
            h hVar;
            int indexOf = this.f50752c.indexOf(obj.getClass());
            if (indexOf == -1) {
                hVar = this.f50754e;
                if (hVar == null) {
                    throw new IllegalArgumentException("Expected one of " + this.f50752c + " but found " + obj + ", a " + obj.getClass() + ". Register this subtype.");
                }
            } else {
                hVar = (h) this.f50753d.get(indexOf);
            }
            tVar.l();
            if (hVar != this.f50754e) {
                tVar.A0(this.f50750a).x1((String) this.f50751b.get(indexOf));
            }
            int h10 = tVar.h();
            hVar.toJson(tVar, obj);
            tVar.B(h10);
            tVar.E();
        }

        public String toString() {
            return "PolymorphicJsonAdapter(" + this.f50750a + ")";
        }
    }

    b(Class cls, String str, List list, List list2, h hVar) {
        this.f50743a = cls;
        this.f50744b = str;
        this.f50745c = list;
        this.f50746d = list2;
        this.f50747e = hVar;
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
        if (a0.g(type) == this.f50743a && set.isEmpty()) {
            ArrayList arrayList = new ArrayList(this.f50746d.size());
            int size = this.f50746d.size();
            for (int i10 = 0; i10 < size; i10++) {
                arrayList.add(wVar.d((Type) this.f50746d.get(i10)));
            }
            return new C0637b(this.f50744b, this.f50745c, this.f50746d, arrayList, this.f50747e).nullSafe();
        }
        return null;
    }

    public b d(h hVar) {
        return new b(this.f50743a, this.f50744b, this.f50745c, this.f50746d, hVar);
    }

    public b e(Class cls, String str) {
        if (cls != null) {
            if (str != null) {
                if (!this.f50745c.contains(str)) {
                    ArrayList arrayList = new ArrayList(this.f50745c);
                    arrayList.add(str);
                    ArrayList arrayList2 = new ArrayList(this.f50746d);
                    arrayList2.add(cls);
                    return new b(this.f50743a, this.f50744b, arrayList, arrayList2, this.f50747e);
                }
                throw new IllegalArgumentException("Labels must be unique.");
            }
            throw new NullPointerException("label == null");
        }
        throw new NullPointerException("subtype == null");
    }
}

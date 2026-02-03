package sm;

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
    final Class f49147a;

    /* renamed from: b  reason: collision with root package name */
    final String f49148b;

    /* renamed from: c  reason: collision with root package name */
    final List f49149c;

    /* renamed from: d  reason: collision with root package name */
    final List f49150d;

    /* renamed from: e  reason: collision with root package name */
    final h f49151e;

    /* JADX INFO: Access modifiers changed from: package-private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public class a extends h {

        /* renamed from: a  reason: collision with root package name */
        final /* synthetic */ Object f49152a;

        a(Object obj) {
            this.f49152a = obj;
        }

        @Override // com.squareup.moshi.h
        public Object fromJson(m mVar) {
            mVar.P();
            return this.f49152a;
        }

        @Override // com.squareup.moshi.h
        public void toJson(t tVar, Object obj) {
            throw new IllegalArgumentException("Expected one of " + b.this.f49150d + " but found " + obj + ", a " + obj.getClass() + ". Register this subtype.");
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    /* renamed from: sm.b$b  reason: collision with other inner class name */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class C0609b extends h {

        /* renamed from: a  reason: collision with root package name */
        final String f49154a;

        /* renamed from: b  reason: collision with root package name */
        final List f49155b;

        /* renamed from: c  reason: collision with root package name */
        final List f49156c;

        /* renamed from: d  reason: collision with root package name */
        final List f49157d;

        /* renamed from: e  reason: collision with root package name */
        final h f49158e;

        /* renamed from: f  reason: collision with root package name */
        final m.b f49159f;

        /* renamed from: g  reason: collision with root package name */
        final m.b f49160g;

        C0609b(String str, List list, List list2, List list3, h hVar) {
            this.f49154a = str;
            this.f49155b = list;
            this.f49156c = list2;
            this.f49157d = list3;
            this.f49158e = hVar;
            this.f49159f = m.b.a(str);
            this.f49160g = m.b.a((String[]) list.toArray(new String[0]));
        }

        private int a(m mVar) {
            mVar.r();
            while (mVar.hasNext()) {
                if (mVar.t0(this.f49159f) == -1) {
                    mVar.F0();
                    mVar.P();
                } else {
                    int D0 = mVar.D0(this.f49160g);
                    if (D0 == -1 && this.f49158e == null) {
                        throw new j("Expected one of " + this.f49155b + " for key '" + this.f49154a + "' but found '" + mVar.f1() + "'. Register a subtype for this label.");
                    }
                    return D0;
                }
            }
            throw new j("Missing label for " + this.f49154a);
        }

        @Override // com.squareup.moshi.h
        public Object fromJson(m mVar) {
            m F = mVar.F();
            F.E0(false);
            try {
                int a10 = a(F);
                F.close();
                if (a10 == -1) {
                    return this.f49158e.fromJson(mVar);
                }
                return ((h) this.f49157d.get(a10)).fromJson(mVar);
            } catch (Throwable th2) {
                F.close();
                throw th2;
            }
        }

        @Override // com.squareup.moshi.h
        public void toJson(t tVar, Object obj) {
            h hVar;
            int indexOf = this.f49156c.indexOf(obj.getClass());
            if (indexOf == -1) {
                hVar = this.f49158e;
                if (hVar == null) {
                    throw new IllegalArgumentException("Expected one of " + this.f49156c + " but found " + obj + ", a " + obj.getClass() + ". Register this subtype.");
                }
            } else {
                hVar = (h) this.f49157d.get(indexOf);
            }
            tVar.l();
            if (hVar != this.f49158e) {
                tVar.t0(this.f49154a).x1((String) this.f49155b.get(indexOf));
            }
            int h10 = tVar.h();
            hVar.toJson(tVar, obj);
            tVar.B(h10);
            tVar.E();
        }

        public String toString() {
            return "PolymorphicJsonAdapter(" + this.f49154a + ")";
        }
    }

    b(Class cls, String str, List list, List list2, h hVar) {
        this.f49147a = cls;
        this.f49148b = str;
        this.f49149c = list;
        this.f49150d = list2;
        this.f49151e = hVar;
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
        if (a0.g(type) == this.f49147a && set.isEmpty()) {
            ArrayList arrayList = new ArrayList(this.f49150d.size());
            int size = this.f49150d.size();
            for (int i10 = 0; i10 < size; i10++) {
                arrayList.add(wVar.d((Type) this.f49150d.get(i10)));
            }
            return new C0609b(this.f49148b, this.f49149c, this.f49150d, arrayList, this.f49151e).nullSafe();
        }
        return null;
    }

    public b d(h hVar) {
        return new b(this.f49147a, this.f49148b, this.f49149c, this.f49150d, hVar);
    }

    public b e(Class cls, String str) {
        if (cls != null) {
            if (str != null) {
                if (!this.f49149c.contains(str)) {
                    ArrayList arrayList = new ArrayList(this.f49149c);
                    arrayList.add(str);
                    ArrayList arrayList2 = new ArrayList(this.f49150d);
                    arrayList2.add(cls);
                    return new b(this.f49147a, this.f49148b, arrayList, arrayList2, this.f49151e);
                }
                throw new IllegalArgumentException("Labels must be unique.");
            }
            throw new NullPointerException("label == null");
        }
        throw new NullPointerException("subtype == null");
    }
}

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
    final Class f50740a;

    /* renamed from: b  reason: collision with root package name */
    final String f50741b;

    /* renamed from: c  reason: collision with root package name */
    final List f50742c;

    /* renamed from: d  reason: collision with root package name */
    final List f50743d;

    /* renamed from: e  reason: collision with root package name */
    final h f50744e;

    /* JADX INFO: Access modifiers changed from: package-private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public class a extends h {

        /* renamed from: a  reason: collision with root package name */
        final /* synthetic */ Object f50745a;

        a(Object obj) {
            this.f50745a = obj;
        }

        @Override // com.squareup.moshi.h
        public Object fromJson(m mVar) {
            mVar.P();
            return this.f50745a;
        }

        @Override // com.squareup.moshi.h
        public void toJson(t tVar, Object obj) {
            throw new IllegalArgumentException("Expected one of " + b.this.f50743d + " but found " + obj + ", a " + obj.getClass() + ". Register this subtype.");
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    /* renamed from: um.b$b  reason: collision with other inner class name */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class C0637b extends h {

        /* renamed from: a  reason: collision with root package name */
        final String f50747a;

        /* renamed from: b  reason: collision with root package name */
        final List f50748b;

        /* renamed from: c  reason: collision with root package name */
        final List f50749c;

        /* renamed from: d  reason: collision with root package name */
        final List f50750d;

        /* renamed from: e  reason: collision with root package name */
        final h f50751e;

        /* renamed from: f  reason: collision with root package name */
        final m.b f50752f;

        /* renamed from: g  reason: collision with root package name */
        final m.b f50753g;

        C0637b(String str, List list, List list2, List list3, h hVar) {
            this.f50747a = str;
            this.f50748b = list;
            this.f50749c = list2;
            this.f50750d = list3;
            this.f50751e = hVar;
            this.f50752f = m.b.a(str);
            this.f50753g = m.b.a((String[]) list.toArray(new String[0]));
        }

        private int a(m mVar) {
            mVar.r();
            while (mVar.hasNext()) {
                if (mVar.A0(this.f50752f) == -1) {
                    mVar.E0();
                    mVar.P();
                } else {
                    int C0 = mVar.C0(this.f50753g);
                    if (C0 == -1 && this.f50751e == null) {
                        throw new j("Expected one of " + this.f50748b + " for key '" + this.f50747a + "' but found '" + mVar.f1() + "'. Register a subtype for this label.");
                    }
                    return C0;
                }
            }
            throw new j("Missing label for " + this.f50747a);
        }

        @Override // com.squareup.moshi.h
        public Object fromJson(m mVar) {
            m F = mVar.F();
            F.D0(false);
            try {
                int a10 = a(F);
                F.close();
                if (a10 == -1) {
                    return this.f50751e.fromJson(mVar);
                }
                return ((h) this.f50750d.get(a10)).fromJson(mVar);
            } catch (Throwable th2) {
                F.close();
                throw th2;
            }
        }

        @Override // com.squareup.moshi.h
        public void toJson(t tVar, Object obj) {
            h hVar;
            int indexOf = this.f50749c.indexOf(obj.getClass());
            if (indexOf == -1) {
                hVar = this.f50751e;
                if (hVar == null) {
                    throw new IllegalArgumentException("Expected one of " + this.f50749c + " but found " + obj + ", a " + obj.getClass() + ". Register this subtype.");
                }
            } else {
                hVar = (h) this.f50750d.get(indexOf);
            }
            tVar.l();
            if (hVar != this.f50751e) {
                tVar.A0(this.f50747a).x1((String) this.f50748b.get(indexOf));
            }
            int h10 = tVar.h();
            hVar.toJson(tVar, obj);
            tVar.B(h10);
            tVar.E();
        }

        public String toString() {
            return "PolymorphicJsonAdapter(" + this.f50747a + ")";
        }
    }

    b(Class cls, String str, List list, List list2, h hVar) {
        this.f50740a = cls;
        this.f50741b = str;
        this.f50742c = list;
        this.f50743d = list2;
        this.f50744e = hVar;
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
        if (a0.g(type) == this.f50740a && set.isEmpty()) {
            ArrayList arrayList = new ArrayList(this.f50743d.size());
            int size = this.f50743d.size();
            for (int i10 = 0; i10 < size; i10++) {
                arrayList.add(wVar.d((Type) this.f50743d.get(i10)));
            }
            return new C0637b(this.f50741b, this.f50742c, this.f50743d, arrayList, this.f50744e).nullSafe();
        }
        return null;
    }

    public b d(h hVar) {
        return new b(this.f50740a, this.f50741b, this.f50742c, this.f50743d, hVar);
    }

    public b e(Class cls, String str) {
        if (cls != null) {
            if (str != null) {
                if (!this.f50742c.contains(str)) {
                    ArrayList arrayList = new ArrayList(this.f50742c);
                    arrayList.add(str);
                    ArrayList arrayList2 = new ArrayList(this.f50743d);
                    arrayList2.add(cls);
                    return new b(this.f50740a, this.f50741b, arrayList, arrayList2, this.f50744e);
                }
                throw new IllegalArgumentException("Labels must be unique.");
            }
            throw new NullPointerException("label == null");
        }
        throw new NullPointerException("subtype == null");
    }
}

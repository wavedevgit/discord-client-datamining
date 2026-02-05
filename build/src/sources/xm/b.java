package xm;

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
    final Class f53979a;

    /* renamed from: b  reason: collision with root package name */
    final String f53980b;

    /* renamed from: c  reason: collision with root package name */
    final List f53981c;

    /* renamed from: d  reason: collision with root package name */
    final List f53982d;

    /* renamed from: e  reason: collision with root package name */
    final h f53983e;

    /* JADX INFO: Access modifiers changed from: package-private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public class a extends h {

        /* renamed from: a  reason: collision with root package name */
        final /* synthetic */ Object f53984a;

        a(Object obj) {
            this.f53984a = obj;
        }

        @Override // com.squareup.moshi.h
        public Object fromJson(m mVar) {
            mVar.P();
            return this.f53984a;
        }

        @Override // com.squareup.moshi.h
        public void toJson(t tVar, Object obj) {
            throw new IllegalArgumentException("Expected one of " + b.this.f53982d + " but found " + obj + ", a " + obj.getClass() + ". Register this subtype.");
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    /* renamed from: xm.b$b  reason: collision with other inner class name */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class C0714b extends h {

        /* renamed from: a  reason: collision with root package name */
        final String f53986a;

        /* renamed from: b  reason: collision with root package name */
        final List f53987b;

        /* renamed from: c  reason: collision with root package name */
        final List f53988c;

        /* renamed from: d  reason: collision with root package name */
        final List f53989d;

        /* renamed from: e  reason: collision with root package name */
        final h f53990e;

        /* renamed from: f  reason: collision with root package name */
        final m.b f53991f;

        /* renamed from: g  reason: collision with root package name */
        final m.b f53992g;

        C0714b(String str, List list, List list2, List list3, h hVar) {
            this.f53986a = str;
            this.f53987b = list;
            this.f53988c = list2;
            this.f53989d = list3;
            this.f53990e = hVar;
            this.f53991f = m.b.a(str);
            this.f53992g = m.b.a((String[]) list.toArray(new String[0]));
        }

        private int a(m mVar) {
            mVar.s();
            while (mVar.hasNext()) {
                if (mVar.W(this.f53991f) == -1) {
                    mVar.E0();
                    mVar.P();
                } else {
                    int C0 = mVar.C0(this.f53992g);
                    if (C0 == -1 && this.f53990e == null) {
                        throw new j("Expected one of " + this.f53987b + " for key '" + this.f53986a + "' but found '" + mVar.f1() + "'. Register a subtype for this label.");
                    }
                    return C0;
                }
            }
            throw new j("Missing label for " + this.f53986a);
        }

        @Override // com.squareup.moshi.h
        public Object fromJson(m mVar) {
            m F = mVar.F();
            F.D0(false);
            try {
                int a10 = a(F);
                F.close();
                if (a10 == -1) {
                    return this.f53990e.fromJson(mVar);
                }
                return ((h) this.f53989d.get(a10)).fromJson(mVar);
            } catch (Throwable th2) {
                F.close();
                throw th2;
            }
        }

        @Override // com.squareup.moshi.h
        public void toJson(t tVar, Object obj) {
            h hVar;
            int indexOf = this.f53988c.indexOf(obj.getClass());
            if (indexOf == -1) {
                hVar = this.f53990e;
                if (hVar == null) {
                    throw new IllegalArgumentException("Expected one of " + this.f53988c + " but found " + obj + ", a " + obj.getClass() + ". Register this subtype.");
                }
            } else {
                hVar = (h) this.f53989d.get(indexOf);
            }
            tVar.k();
            if (hVar != this.f53990e) {
                tVar.W(this.f53986a).x1((String) this.f53987b.get(indexOf));
            }
            int h10 = tVar.h();
            hVar.toJson(tVar, obj);
            tVar.y(h10);
            tVar.E();
        }

        public String toString() {
            return "PolymorphicJsonAdapter(" + this.f53986a + ")";
        }
    }

    b(Class cls, String str, List list, List list2, h hVar) {
        this.f53979a = cls;
        this.f53980b = str;
        this.f53981c = list;
        this.f53982d = list2;
        this.f53983e = hVar;
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
        if (a0.g(type) == this.f53979a && set.isEmpty()) {
            ArrayList arrayList = new ArrayList(this.f53982d.size());
            int size = this.f53982d.size();
            for (int i10 = 0; i10 < size; i10++) {
                arrayList.add(wVar.d((Type) this.f53982d.get(i10)));
            }
            return new C0714b(this.f53980b, this.f53981c, this.f53982d, arrayList, this.f53983e).nullSafe();
        }
        return null;
    }

    public b d(h hVar) {
        return new b(this.f53979a, this.f53980b, this.f53981c, this.f53982d, hVar);
    }

    public b e(Class cls, String str) {
        if (cls != null) {
            if (str != null) {
                if (!this.f53981c.contains(str)) {
                    ArrayList arrayList = new ArrayList(this.f53981c);
                    arrayList.add(str);
                    ArrayList arrayList2 = new ArrayList(this.f53982d);
                    arrayList2.add(cls);
                    return new b(this.f53979a, this.f53980b, arrayList, arrayList2, this.f53983e);
                }
                throw new IllegalArgumentException("Labels must be unique.");
            }
            throw new NullPointerException("label == null");
        }
        throw new NullPointerException("subtype == null");
    }
}

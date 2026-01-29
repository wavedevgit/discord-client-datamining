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
    final Class f48350a;

    /* renamed from: b  reason: collision with root package name */
    final String f48351b;

    /* renamed from: c  reason: collision with root package name */
    final List f48352c;

    /* renamed from: d  reason: collision with root package name */
    final List f48353d;

    /* renamed from: e  reason: collision with root package name */
    final h f48354e;

    /* JADX INFO: Access modifiers changed from: package-private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public class a extends h {

        /* renamed from: a  reason: collision with root package name */
        final /* synthetic */ Object f48355a;

        a(Object obj) {
            this.f48355a = obj;
        }

        @Override // com.squareup.moshi.h
        public Object fromJson(m mVar) {
            mVar.P();
            return this.f48355a;
        }

        @Override // com.squareup.moshi.h
        public void toJson(t tVar, Object obj) {
            throw new IllegalArgumentException("Expected one of " + b.this.f48353d + " but found " + obj + ", a " + obj.getClass() + ". Register this subtype.");
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    /* renamed from: rm.b$b  reason: collision with other inner class name */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class C0589b extends h {

        /* renamed from: a  reason: collision with root package name */
        final String f48357a;

        /* renamed from: b  reason: collision with root package name */
        final List f48358b;

        /* renamed from: c  reason: collision with root package name */
        final List f48359c;

        /* renamed from: d  reason: collision with root package name */
        final List f48360d;

        /* renamed from: e  reason: collision with root package name */
        final h f48361e;

        /* renamed from: f  reason: collision with root package name */
        final m.b f48362f;

        /* renamed from: g  reason: collision with root package name */
        final m.b f48363g;

        C0589b(String str, List list, List list2, List list3, h hVar) {
            this.f48357a = str;
            this.f48358b = list;
            this.f48359c = list2;
            this.f48360d = list3;
            this.f48361e = hVar;
            this.f48362f = m.b.a(str);
            this.f48363g = m.b.a((String[]) list.toArray(new String[0]));
        }

        private int a(m mVar) {
            mVar.r();
            while (mVar.hasNext()) {
                if (mVar.A0(this.f48362f) == -1) {
                    mVar.E0();
                    mVar.P();
                } else {
                    int C0 = mVar.C0(this.f48363g);
                    if (C0 == -1 && this.f48361e == null) {
                        throw new j("Expected one of " + this.f48358b + " for key '" + this.f48357a + "' but found '" + mVar.e1() + "'. Register a subtype for this label.");
                    }
                    return C0;
                }
            }
            throw new j("Missing label for " + this.f48357a);
        }

        @Override // com.squareup.moshi.h
        public Object fromJson(m mVar) {
            m F = mVar.F();
            F.D0(false);
            try {
                int a10 = a(F);
                F.close();
                if (a10 == -1) {
                    return this.f48361e.fromJson(mVar);
                }
                return ((h) this.f48360d.get(a10)).fromJson(mVar);
            } catch (Throwable th2) {
                F.close();
                throw th2;
            }
        }

        @Override // com.squareup.moshi.h
        public void toJson(t tVar, Object obj) {
            h hVar;
            int indexOf = this.f48359c.indexOf(obj.getClass());
            if (indexOf == -1) {
                hVar = this.f48361e;
                if (hVar == null) {
                    throw new IllegalArgumentException("Expected one of " + this.f48359c + " but found " + obj + ", a " + obj.getClass() + ". Register this subtype.");
                }
            } else {
                hVar = (h) this.f48360d.get(indexOf);
            }
            tVar.l();
            if (hVar != this.f48361e) {
                tVar.A0(this.f48357a).x1((String) this.f48358b.get(indexOf));
            }
            int h10 = tVar.h();
            hVar.toJson(tVar, obj);
            tVar.B(h10);
            tVar.E();
        }

        public String toString() {
            return "PolymorphicJsonAdapter(" + this.f48357a + ")";
        }
    }

    b(Class cls, String str, List list, List list2, h hVar) {
        this.f48350a = cls;
        this.f48351b = str;
        this.f48352c = list;
        this.f48353d = list2;
        this.f48354e = hVar;
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
        if (a0.g(type) == this.f48350a && set.isEmpty()) {
            ArrayList arrayList = new ArrayList(this.f48353d.size());
            int size = this.f48353d.size();
            for (int i10 = 0; i10 < size; i10++) {
                arrayList.add(wVar.d((Type) this.f48353d.get(i10)));
            }
            return new C0589b(this.f48351b, this.f48352c, this.f48353d, arrayList, this.f48354e).nullSafe();
        }
        return null;
    }

    public b d(h hVar) {
        return new b(this.f48350a, this.f48351b, this.f48352c, this.f48353d, hVar);
    }

    public b e(Class cls, String str) {
        if (cls != null) {
            if (str != null) {
                if (!this.f48352c.contains(str)) {
                    ArrayList arrayList = new ArrayList(this.f48352c);
                    arrayList.add(str);
                    ArrayList arrayList2 = new ArrayList(this.f48353d);
                    arrayList2.add(cls);
                    return new b(this.f48350a, this.f48351b, arrayList, arrayList2, this.f48354e);
                }
                throw new IllegalArgumentException("Labels must be unique.");
            }
            throw new NullPointerException("label == null");
        }
        throw new NullPointerException("subtype == null");
    }
}

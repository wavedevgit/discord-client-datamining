package com.squareup.moshi;

import com.squareup.moshi.h;
import java.lang.reflect.Type;
import java.util.ArrayList;
import java.util.Collection;
import java.util.LinkedHashSet;
import java.util.List;
import java.util.Set;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
abstract class e extends h {

    /* renamed from: b  reason: collision with root package name */
    public static final h.e f17899b = new a();

    /* renamed from: a  reason: collision with root package name */
    private final h f17900a;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    class a implements h.e {
        a() {
        }

        @Override // com.squareup.moshi.h.e
        public h create(Type type, Set set, w wVar) {
            Class g10 = a0.g(type);
            if (!set.isEmpty()) {
                return null;
            }
            if (g10 != List.class && g10 != Collection.class) {
                if (g10 != Set.class) {
                    return null;
                }
                return e.d(type, wVar).nullSafe();
            }
            return e.b(type, wVar).nullSafe();
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public class b extends e {
        b(h hVar) {
            super(hVar, null);
        }

        @Override // com.squareup.moshi.e
        Collection c() {
            return new ArrayList();
        }

        @Override // com.squareup.moshi.h
        public /* bridge */ /* synthetic */ Object fromJson(m mVar) {
            return super.a(mVar);
        }

        @Override // com.squareup.moshi.h
        public /* bridge */ /* synthetic */ void toJson(t tVar, Object obj) {
            super.e(tVar, (Collection) obj);
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public class c extends e {
        c(h hVar) {
            super(hVar, null);
        }

        /* JADX INFO: Access modifiers changed from: package-private */
        @Override // com.squareup.moshi.e
        /* renamed from: f */
        public Set c() {
            return new LinkedHashSet();
        }

        @Override // com.squareup.moshi.h
        public /* bridge */ /* synthetic */ Object fromJson(m mVar) {
            return super.a(mVar);
        }

        @Override // com.squareup.moshi.h
        public /* bridge */ /* synthetic */ void toJson(t tVar, Object obj) {
            super.e(tVar, (Collection) obj);
        }
    }

    /* synthetic */ e(h hVar, a aVar) {
        this(hVar);
    }

    static h b(Type type, w wVar) {
        return new b(wVar.d(a0.c(type, Collection.class)));
    }

    static h d(Type type, w wVar) {
        return new c(wVar.d(a0.c(type, Collection.class)));
    }

    public Collection a(m mVar) {
        Collection c10 = c();
        mVar.x();
        while (mVar.hasNext()) {
            c10.add(this.f17900a.fromJson(mVar));
        }
        mVar.v();
        return c10;
    }

    abstract Collection c();

    public void e(t tVar, Collection collection) {
        tVar.a();
        for (Object obj : collection) {
            this.f17900a.toJson(tVar, obj);
        }
        tVar.n();
    }

    public String toString() {
        return this.f17900a + ".collection()";
    }

    private e(h hVar) {
        this.f17900a = hVar;
    }
}

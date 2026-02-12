package com.squareup.moshi;

import com.squareup.moshi.h;
import java.lang.reflect.Type;
import java.util.Map;
import java.util.Set;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
final class v extends h {

    /* renamed from: c  reason: collision with root package name */
    public static final h.e f18893c = new a();

    /* renamed from: a  reason: collision with root package name */
    private final h f18894a;

    /* renamed from: b  reason: collision with root package name */
    private final h f18895b;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    class a implements h.e {
        a() {
        }

        @Override // com.squareup.moshi.h.e
        public h create(Type type, Set set, w wVar) {
            Class g10;
            if (!set.isEmpty() || (g10 = a0.g(type)) != Map.class) {
                return null;
            }
            Type[] i10 = a0.i(type, g10);
            return new v(wVar, i10[0], i10[1]).nullSafe();
        }
    }

    v(w wVar, Type type, Type type2) {
        this.f18894a = wVar.d(type);
        this.f18895b = wVar.d(type2);
    }

    @Override // com.squareup.moshi.h
    /* renamed from: a */
    public Map fromJson(m mVar) {
        u uVar = new u();
        mVar.u();
        while (mVar.hasNext()) {
            mVar.z();
            Object fromJson = this.f18894a.fromJson(mVar);
            Object fromJson2 = this.f18895b.fromJson(mVar);
            Object put = uVar.put(fromJson, fromJson2);
            if (put != null) {
                throw new j("Map key '" + fromJson + "' has multiple values at path " + mVar.t() + ": " + put + " and " + fromJson2);
            }
        }
        mVar.D();
        return uVar;
    }

    @Override // com.squareup.moshi.h
    /* renamed from: b */
    public void toJson(t tVar, Map map) {
        tVar.i();
        for (Map.Entry entry : map.entrySet()) {
            if (entry.getKey() != null) {
                tVar.C0();
                this.f18894a.toJson(tVar, entry.getKey());
                this.f18895b.toJson(tVar, entry.getValue());
            } else {
                throw new j("Map key is null at " + tVar.t());
            }
        }
        tVar.s();
    }

    public String toString() {
        return "JsonAdapter(" + this.f18894a + "=" + this.f18895b + ")";
    }
}

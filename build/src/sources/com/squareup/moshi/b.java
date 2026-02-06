package com.squareup.moshi;

import com.squareup.moshi.h;
import java.lang.reflect.Array;
import java.lang.reflect.Type;
import java.util.ArrayList;
import java.util.Set;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
final class b extends h {

    /* renamed from: c  reason: collision with root package name */
    public static final h.e f17879c = new a();

    /* renamed from: a  reason: collision with root package name */
    private final Class f17880a;

    /* renamed from: b  reason: collision with root package name */
    private final h f17881b;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    class a implements h.e {
        a() {
        }

        @Override // com.squareup.moshi.h.e
        public h create(Type type, Set set, w wVar) {
            Type a10 = a0.a(type);
            if (a10 == null || !set.isEmpty()) {
                return null;
            }
            return new b(a0.g(a10), wVar.d(a10)).nullSafe();
        }
    }

    b(Class cls, h hVar) {
        this.f17880a = cls;
        this.f17881b = hVar;
    }

    @Override // com.squareup.moshi.h
    public Object fromJson(m mVar) {
        ArrayList arrayList = new ArrayList();
        mVar.x();
        while (mVar.hasNext()) {
            arrayList.add(this.f17881b.fromJson(mVar));
        }
        mVar.v();
        Object newInstance = Array.newInstance(this.f17880a, arrayList.size());
        for (int i10 = 0; i10 < arrayList.size(); i10++) {
            Array.set(newInstance, i10, arrayList.get(i10));
        }
        return newInstance;
    }

    @Override // com.squareup.moshi.h
    public void toJson(t tVar, Object obj) {
        tVar.a();
        int length = Array.getLength(obj);
        for (int i10 = 0; i10 < length; i10++) {
            this.f17881b.toJson(tVar, Array.get(obj, i10));
        }
        tVar.n();
    }

    public String toString() {
        return this.f17881b + ".array()";
    }
}

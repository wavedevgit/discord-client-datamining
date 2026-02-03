package com.squareup.moshi;

import com.squareup.moshi.h;
import java.lang.reflect.Array;
import java.lang.reflect.Type;
import java.util.ArrayList;
import java.util.Set;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
final class b extends h {

    /* renamed from: c  reason: collision with root package name */
    public static final h.e f18511c = new a();

    /* renamed from: a  reason: collision with root package name */
    private final Class f18512a;

    /* renamed from: b  reason: collision with root package name */
    private final h f18513b;

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
        this.f18512a = cls;
        this.f18513b = hVar;
    }

    @Override // com.squareup.moshi.h
    public Object fromJson(m mVar) {
        ArrayList arrayList = new ArrayList();
        mVar.u();
        while (mVar.hasNext()) {
            arrayList.add(this.f18513b.fromJson(mVar));
        }
        mVar.s();
        Object newInstance = Array.newInstance(this.f18512a, arrayList.size());
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
            this.f18513b.toJson(tVar, Array.get(obj, i10));
        }
        tVar.x();
    }

    public String toString() {
        return this.f18513b + ".array()";
    }
}

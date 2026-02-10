package dn;

import com.squareup.moshi.h;
import com.squareup.moshi.m;
import com.squareup.moshi.t;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class b extends h {

    /* renamed from: a  reason: collision with root package name */
    private final h f21824a;

    public b(h hVar) {
        this.f21824a = hVar;
    }

    @Override // com.squareup.moshi.h
    public Object fromJson(m mVar) {
        if (mVar.s() == m.c.NULL) {
            return mVar.m();
        }
        return this.f21824a.fromJson(mVar);
    }

    @Override // com.squareup.moshi.h
    public void toJson(t tVar, Object obj) {
        if (obj == null) {
            tVar.Q();
        } else {
            this.f21824a.toJson(tVar, obj);
        }
    }

    public String toString() {
        return this.f21824a + ".nullSafe()";
    }
}

package ym;

import com.squareup.moshi.h;
import com.squareup.moshi.j;
import com.squareup.moshi.m;
import com.squareup.moshi.t;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class a extends h {

    /* renamed from: a  reason: collision with root package name */
    private final h f54849a;

    public a(h hVar) {
        this.f54849a = hVar;
    }

    @Override // com.squareup.moshi.h
    public Object fromJson(m mVar) {
        if (mVar.E() != m.c.NULL) {
            return this.f54849a.fromJson(mVar);
        }
        throw new j("Unexpected null at " + mVar.r());
    }

    @Override // com.squareup.moshi.h
    public void toJson(t tVar, Object obj) {
        if (obj != null) {
            this.f54849a.toJson(tVar, obj);
            return;
        }
        throw new j("Unexpected null at " + tVar.r());
    }

    public String toString() {
        return this.f54849a + ".nonNull()";
    }
}

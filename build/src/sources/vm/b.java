package vm;

import com.squareup.moshi.h;
import com.squareup.moshi.m;
import com.squareup.moshi.t;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class b extends h {

    /* renamed from: a  reason: collision with root package name */
    private final h f51685a;

    public b(h hVar) {
        this.f51685a = hVar;
    }

    @Override // com.squareup.moshi.h
    public Object fromJson(m mVar) {
        if (mVar.E() == m.c.NULL) {
            return mVar.n();
        }
        return this.f51685a.fromJson(mVar);
    }

    @Override // com.squareup.moshi.h
    public void toJson(t tVar, Object obj) {
        if (obj == null) {
            tVar.C0();
        } else {
            this.f51685a.toJson(tVar, obj);
        }
    }

    public String toString() {
        return this.f51685a + ".nullSafe()";
    }
}

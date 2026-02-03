package tm;

import com.squareup.moshi.h;
import com.squareup.moshi.m;
import com.squareup.moshi.t;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class b extends h {

    /* renamed from: a  reason: collision with root package name */
    private final h f49932a;

    public b(h hVar) {
        this.f49932a = hVar;
    }

    @Override // com.squareup.moshi.h
    public Object fromJson(m mVar) {
        if (mVar.E() == m.c.NULL) {
            return mVar.n();
        }
        return this.f49932a.fromJson(mVar);
    }

    @Override // com.squareup.moshi.h
    public void toJson(t tVar, Object obj) {
        if (obj == null) {
            tVar.D0();
        } else {
            this.f49932a.toJson(tVar, obj);
        }
    }

    public String toString() {
        return this.f49932a + ".nullSafe()";
    }
}

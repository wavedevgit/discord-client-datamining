package pg;

import java.io.Serializable;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
final class i0 extends n implements Serializable {

    /* renamed from: d  reason: collision with root package name */
    final Object f45261d;

    /* renamed from: e  reason: collision with root package name */
    final Object f45262e;

    /* JADX INFO: Access modifiers changed from: package-private */
    public i0(Object obj, Object obj2) {
        this.f45261d = obj;
        this.f45262e = obj2;
    }

    @Override // pg.n, java.util.Map.Entry
    public final Object getKey() {
        return this.f45261d;
    }

    @Override // pg.n, java.util.Map.Entry
    public final Object getValue() {
        return this.f45262e;
    }

    @Override // java.util.Map.Entry
    public final Object setValue(Object obj) {
        throw new UnsupportedOperationException();
    }
}

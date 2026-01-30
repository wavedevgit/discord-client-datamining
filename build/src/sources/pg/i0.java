package pg;

import java.io.Serializable;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
final class i0 extends n implements Serializable {

    /* renamed from: d  reason: collision with root package name */
    final Object f45299d;

    /* renamed from: e  reason: collision with root package name */
    final Object f45300e;

    /* JADX INFO: Access modifiers changed from: package-private */
    public i0(Object obj, Object obj2) {
        this.f45299d = obj;
        this.f45300e = obj2;
    }

    @Override // pg.n, java.util.Map.Entry
    public final Object getKey() {
        return this.f45299d;
    }

    @Override // pg.n, java.util.Map.Entry
    public final Object getValue() {
        return this.f45300e;
    }

    @Override // java.util.Map.Entry
    public final Object setValue(Object obj) {
        throw new UnsupportedOperationException();
    }
}

package pg;

import java.io.Serializable;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
final class i0 extends n implements Serializable {

    /* renamed from: d  reason: collision with root package name */
    final Object f45283d;

    /* renamed from: e  reason: collision with root package name */
    final Object f45284e;

    /* JADX INFO: Access modifiers changed from: package-private */
    public i0(Object obj, Object obj2) {
        this.f45283d = obj;
        this.f45284e = obj2;
    }

    @Override // pg.n, java.util.Map.Entry
    public final Object getKey() {
        return this.f45283d;
    }

    @Override // pg.n, java.util.Map.Entry
    public final Object getValue() {
        return this.f45284e;
    }

    @Override // java.util.Map.Entry
    public final Object setValue(Object obj) {
        throw new UnsupportedOperationException();
    }
}

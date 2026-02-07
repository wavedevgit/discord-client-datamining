package qg;

import java.io.Serializable;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
final class i0 extends n implements Serializable {

    /* renamed from: d  reason: collision with root package name */
    final Object f47139d;

    /* renamed from: e  reason: collision with root package name */
    final Object f47140e;

    /* JADX INFO: Access modifiers changed from: package-private */
    public i0(Object obj, Object obj2) {
        this.f47139d = obj;
        this.f47140e = obj2;
    }

    @Override // qg.n, java.util.Map.Entry
    public final Object getKey() {
        return this.f47139d;
    }

    @Override // qg.n, java.util.Map.Entry
    public final Object getValue() {
        return this.f47140e;
    }

    @Override // java.util.Map.Entry
    public final Object setValue(Object obj) {
        throw new UnsupportedOperationException();
    }
}

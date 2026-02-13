package rg;

import java.io.Serializable;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
final class i0 extends n implements Serializable {

    /* renamed from: d  reason: collision with root package name */
    final Object f47280d;

    /* renamed from: e  reason: collision with root package name */
    final Object f47281e;

    /* JADX INFO: Access modifiers changed from: package-private */
    public i0(Object obj, Object obj2) {
        this.f47280d = obj;
        this.f47281e = obj2;
    }

    @Override // rg.n, java.util.Map.Entry
    public final Object getKey() {
        return this.f47280d;
    }

    @Override // rg.n, java.util.Map.Entry
    public final Object getValue() {
        return this.f47281e;
    }

    @Override // java.util.Map.Entry
    public final Object setValue(Object obj) {
        throw new UnsupportedOperationException();
    }
}

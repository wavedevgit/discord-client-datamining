package rg;

import java.io.Serializable;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
final class i0 extends n implements Serializable {

    /* renamed from: d  reason: collision with root package name */
    final Object f46712d;

    /* renamed from: e  reason: collision with root package name */
    final Object f46713e;

    /* JADX INFO: Access modifiers changed from: package-private */
    public i0(Object obj, Object obj2) {
        this.f46712d = obj;
        this.f46713e = obj2;
    }

    @Override // rg.n, java.util.Map.Entry
    public final Object getKey() {
        return this.f46712d;
    }

    @Override // rg.n, java.util.Map.Entry
    public final Object getValue() {
        return this.f46713e;
    }

    @Override // java.util.Map.Entry
    public final Object setValue(Object obj) {
        throw new UnsupportedOperationException();
    }
}

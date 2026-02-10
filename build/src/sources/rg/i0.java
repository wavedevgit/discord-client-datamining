package rg;

import java.io.Serializable;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
final class i0 extends n implements Serializable {

    /* renamed from: d  reason: collision with root package name */
    final Object f48257d;

    /* renamed from: e  reason: collision with root package name */
    final Object f48258e;

    /* JADX INFO: Access modifiers changed from: package-private */
    public i0(Object obj, Object obj2) {
        this.f48257d = obj;
        this.f48258e = obj2;
    }

    @Override // rg.n, java.util.Map.Entry
    public final Object getKey() {
        return this.f48257d;
    }

    @Override // rg.n, java.util.Map.Entry
    public final Object getValue() {
        return this.f48258e;
    }

    @Override // java.util.Map.Entry
    public final Object setValue(Object obj) {
        throw new UnsupportedOperationException();
    }
}

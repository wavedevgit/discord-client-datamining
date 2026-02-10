package oi;

import java.io.Serializable;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
class r extends e implements Serializable {

    /* renamed from: d  reason: collision with root package name */
    final Object f41908d;

    /* renamed from: e  reason: collision with root package name */
    final Object f41909e;

    /* JADX INFO: Access modifiers changed from: package-private */
    public r(Object obj, Object obj2) {
        this.f41908d = obj;
        this.f41909e = obj2;
    }

    @Override // oi.e, java.util.Map.Entry
    public final Object getKey() {
        return this.f41908d;
    }

    @Override // oi.e, java.util.Map.Entry
    public final Object getValue() {
        return this.f41909e;
    }

    @Override // java.util.Map.Entry
    public final Object setValue(Object obj) {
        throw new UnsupportedOperationException();
    }
}

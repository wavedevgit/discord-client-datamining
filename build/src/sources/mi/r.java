package mi;

import java.io.Serializable;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
class r extends e implements Serializable {

    /* renamed from: d  reason: collision with root package name */
    final Object f38672d;

    /* renamed from: e  reason: collision with root package name */
    final Object f38673e;

    /* JADX INFO: Access modifiers changed from: package-private */
    public r(Object obj, Object obj2) {
        this.f38672d = obj;
        this.f38673e = obj2;
    }

    @Override // mi.e, java.util.Map.Entry
    public final Object getKey() {
        return this.f38672d;
    }

    @Override // mi.e, java.util.Map.Entry
    public final Object getValue() {
        return this.f38673e;
    }

    @Override // java.util.Map.Entry
    public final Object setValue(Object obj) {
        throw new UnsupportedOperationException();
    }
}

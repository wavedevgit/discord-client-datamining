package pg;

import java.io.Serializable;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
final class l0 extends r implements Serializable {

    /* renamed from: d  reason: collision with root package name */
    final Object f44469d;

    /* renamed from: e  reason: collision with root package name */
    final Object f44470e;

    /* JADX INFO: Access modifiers changed from: package-private */
    public l0(Object obj, Object obj2) {
        this.f44469d = obj;
        this.f44470e = obj2;
    }

    @Override // pg.r, java.util.Map.Entry
    public final Object getKey() {
        return this.f44469d;
    }

    @Override // pg.r, java.util.Map.Entry
    public final Object getValue() {
        return this.f44470e;
    }

    @Override // java.util.Map.Entry
    public final Object setValue(Object obj) {
        throw new UnsupportedOperationException();
    }
}

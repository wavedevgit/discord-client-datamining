package mg;

import java.io.Serializable;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
final class e1 extends j0 implements Serializable {

    /* renamed from: d  reason: collision with root package name */
    final Object f37614d;

    /* renamed from: e  reason: collision with root package name */
    final Object f37615e;

    /* JADX INFO: Access modifiers changed from: package-private */
    public e1(Object obj, Object obj2) {
        this.f37614d = obj;
        this.f37615e = obj2;
    }

    @Override // mg.j0, java.util.Map.Entry
    public final Object getKey() {
        return this.f37614d;
    }

    @Override // mg.j0, java.util.Map.Entry
    public final Object getValue() {
        return this.f37615e;
    }

    @Override // java.util.Map.Entry
    public final Object setValue(Object obj) {
        throw new UnsupportedOperationException();
    }
}

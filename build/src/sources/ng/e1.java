package ng;

import java.io.Serializable;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
final class e1 extends j0 implements Serializable {

    /* renamed from: d  reason: collision with root package name */
    final Object f39777d;

    /* renamed from: e  reason: collision with root package name */
    final Object f39778e;

    /* JADX INFO: Access modifiers changed from: package-private */
    public e1(Object obj, Object obj2) {
        this.f39777d = obj;
        this.f39778e = obj2;
    }

    @Override // ng.j0, java.util.Map.Entry
    public final Object getKey() {
        return this.f39777d;
    }

    @Override // ng.j0, java.util.Map.Entry
    public final Object getValue() {
        return this.f39778e;
    }

    @Override // java.util.Map.Entry
    public final Object setValue(Object obj) {
        throw new UnsupportedOperationException();
    }
}

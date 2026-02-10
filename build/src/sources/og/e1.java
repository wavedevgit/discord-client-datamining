package og;

import java.io.Serializable;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
final class e1 extends j0 implements Serializable {

    /* renamed from: d  reason: collision with root package name */
    final Object f39176d;

    /* renamed from: e  reason: collision with root package name */
    final Object f39177e;

    /* JADX INFO: Access modifiers changed from: package-private */
    public e1(Object obj, Object obj2) {
        this.f39176d = obj;
        this.f39177e = obj2;
    }

    @Override // og.j0, java.util.Map.Entry
    public final Object getKey() {
        return this.f39176d;
    }

    @Override // og.j0, java.util.Map.Entry
    public final Object getValue() {
        return this.f39177e;
    }

    @Override // java.util.Map.Entry
    public final Object setValue(Object obj) {
        throw new UnsupportedOperationException();
    }
}

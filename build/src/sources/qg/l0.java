package qg;

import java.io.Serializable;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
final class l0 extends r implements Serializable {

    /* renamed from: d  reason: collision with root package name */
    final Object f45983d;

    /* renamed from: e  reason: collision with root package name */
    final Object f45984e;

    /* JADX INFO: Access modifiers changed from: package-private */
    public l0(Object obj, Object obj2) {
        this.f45983d = obj;
        this.f45984e = obj2;
    }

    @Override // qg.r, java.util.Map.Entry
    public final Object getKey() {
        return this.f45983d;
    }

    @Override // qg.r, java.util.Map.Entry
    public final Object getValue() {
        return this.f45984e;
    }

    @Override // java.util.Map.Entry
    public final Object setValue(Object obj) {
        throw new UnsupportedOperationException();
    }
}

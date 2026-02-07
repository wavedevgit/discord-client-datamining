package ni;

import java.io.Serializable;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
class r extends e implements Serializable {

    /* renamed from: d  reason: collision with root package name */
    final Object f40883d;

    /* renamed from: e  reason: collision with root package name */
    final Object f40884e;

    /* JADX INFO: Access modifiers changed from: package-private */
    public r(Object obj, Object obj2) {
        this.f40883d = obj;
        this.f40884e = obj2;
    }

    @Override // ni.e, java.util.Map.Entry
    public final Object getKey() {
        return this.f40883d;
    }

    @Override // ni.e, java.util.Map.Entry
    public final Object getValue() {
        return this.f40884e;
    }

    @Override // java.util.Map.Entry
    public final Object setValue(Object obj) {
        throw new UnsupportedOperationException();
    }
}

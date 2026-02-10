package qi;

import java.io.Serializable;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
class r extends e implements Serializable {

    /* renamed from: d  reason: collision with root package name */
    final Object f45396d;

    /* renamed from: e  reason: collision with root package name */
    final Object f45397e;

    /* JADX INFO: Access modifiers changed from: package-private */
    public r(Object obj, Object obj2) {
        this.f45396d = obj;
        this.f45397e = obj2;
    }

    @Override // qi.e, java.util.Map.Entry
    public final Object getKey() {
        return this.f45396d;
    }

    @Override // qi.e, java.util.Map.Entry
    public final Object getValue() {
        return this.f45397e;
    }

    @Override // java.util.Map.Entry
    public final Object setValue(Object obj) {
        throw new UnsupportedOperationException();
    }
}

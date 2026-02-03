package bl;

import com.facebook.react.bridge.Dynamic;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public abstract class k {

    /* renamed from: a  reason: collision with root package name */
    private Object f6578a;

    public k() {
    }

    public Object a() {
        return this.f6578a;
    }

    public void b(Dynamic dynamic) {
        this.f6578a = c(dynamic);
    }

    abstract Object c(Dynamic dynamic);

    public k(Object obj) {
        this.f6578a = obj;
    }
}

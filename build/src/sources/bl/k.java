package bl;

import com.facebook.react.bridge.Dynamic;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public abstract class k {

    /* renamed from: a  reason: collision with root package name */
    private Object f7527a;

    public k() {
    }

    public Object a() {
        return this.f7527a;
    }

    public void b(Dynamic dynamic) {
        this.f7527a = c(dynamic);
    }

    abstract Object c(Dynamic dynamic);

    public k(Object obj) {
        this.f7527a = obj;
    }
}

package bl;

import com.facebook.react.bridge.Dynamic;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public abstract class k {

    /* renamed from: a  reason: collision with root package name */
    private Object f6624a;

    public k() {
    }

    public Object a() {
        return this.f6624a;
    }

    public void b(Dynamic dynamic) {
        this.f6624a = c(dynamic);
    }

    abstract Object c(Dynamic dynamic);

    public k(Object obj) {
        this.f6624a = obj;
    }
}

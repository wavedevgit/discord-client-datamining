package el;

import com.facebook.react.bridge.Dynamic;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public abstract class k {

    /* renamed from: a  reason: collision with root package name */
    private Object f21634a;

    public k() {
    }

    public Object a() {
        return this.f21634a;
    }

    public void b(Dynamic dynamic) {
        this.f21634a = c(dynamic);
    }

    abstract Object c(Dynamic dynamic);

    public k(Object obj) {
        this.f21634a = obj;
    }
}

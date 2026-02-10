package hl;

import com.facebook.react.bridge.Dynamic;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public abstract class k {

    /* renamed from: a  reason: collision with root package name */
    private Object f26348a;

    public k() {
    }

    public Object a() {
        return this.f26348a;
    }

    public void b(Dynamic dynamic) {
        this.f26348a = c(dynamic);
    }

    abstract Object c(Dynamic dynamic);

    public k(Object obj) {
        this.f26348a = obj;
    }
}

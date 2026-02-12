package jl;

import com.facebook.react.bridge.Dynamic;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public abstract class k {

    /* renamed from: a  reason: collision with root package name */
    private Object f31187a;

    public k() {
    }

    public Object a() {
        return this.f31187a;
    }

    public void b(Dynamic dynamic) {
        this.f31187a = c(dynamic);
    }

    abstract Object c(Dynamic dynamic);

    public k(Object obj) {
        this.f31187a = obj;
    }
}

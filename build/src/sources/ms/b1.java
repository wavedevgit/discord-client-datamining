package ms;

import kotlin.coroutines.Continuation;
import kotlin.coroutines.CoroutineContext;
import kotlin.jvm.functions.Function2;
/* JADX INFO: Access modifiers changed from: package-private */
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public final class b1 extends h1 {

    /* renamed from: o  reason: collision with root package name */
    private final Continuation f38900o;

    public b1(CoroutineContext coroutineContext, Function2 function2) {
        super(coroutineContext, false);
        this.f38900o = ur.b.a(function2, this, this);
    }

    @Override // kotlinx.coroutines.b0
    protected void w0() {
        ss.a.b(this.f38900o, this);
    }
}

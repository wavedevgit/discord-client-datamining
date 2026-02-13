package ys;

import kotlin.coroutines.Continuation;
import kotlin.coroutines.CoroutineContext;
import kotlin.jvm.functions.Function2;
/* JADX INFO: Access modifiers changed from: package-private */
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public final class a1 extends h0 {

    /* renamed from: o  reason: collision with root package name */
    private final Continuation f56339o;

    public a1(CoroutineContext coroutineContext, Function2 function2) {
        super(coroutineContext, false);
        this.f56339o = gs.b.a(function2, this, this);
    }

    @Override // kotlinx.coroutines.b0
    protected void y0() {
        et.a.b(this.f56339o, this);
    }
}

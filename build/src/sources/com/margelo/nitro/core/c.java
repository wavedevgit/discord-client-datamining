package com.margelo.nitro.core;

import com.margelo.nitro.core.Promise;
import kotlin.Function;
import kotlin.jvm.functions.Function1;
import kotlin.jvm.internal.FunctionAdapter;
import kotlin.jvm.internal.Intrinsics;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
final /* synthetic */ class c implements Promise.OnRejectedCallback, FunctionAdapter {

    /* renamed from: d  reason: collision with root package name */
    private final /* synthetic */ Function1 f17237d;

    /* JADX INFO: Access modifiers changed from: package-private */
    public c(Function1 function) {
        Intrinsics.checkNotNullParameter(function, "function");
        this.f17237d = function;
    }

    public final boolean equals(Object obj) {
        if ((obj instanceof Promise.OnRejectedCallback) && (obj instanceof FunctionAdapter)) {
            return Intrinsics.areEqual(getFunctionDelegate(), ((FunctionAdapter) obj).getFunctionDelegate());
        }
        return false;
    }

    @Override // kotlin.jvm.internal.FunctionAdapter
    public final Function getFunctionDelegate() {
        return this.f17237d;
    }

    public final int hashCode() {
        return getFunctionDelegate().hashCode();
    }

    @Override // com.margelo.nitro.core.Promise.OnRejectedCallback
    public final /* synthetic */ void onRejected(Throwable th2) {
        this.f17237d.invoke(th2);
    }
}

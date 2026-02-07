package com.discord.external_pip;

import com.facebook.react.bridge.Promise;
import kotlin.Metadata;
import kotlin.Result;
import kotlin.Unit;
import kotlin.jvm.functions.Function1;
@Metadata(k = 3, mv = {2, 1, 0}, xi = 48)
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
final class ExternalPipModule$setActive$1$1 implements Function1<Result, Unit> {
    final /* synthetic */ Promise $onResultPromise;
    final /* synthetic */ ExternalPipModule this$0;

    /* JADX INFO: Access modifiers changed from: package-private */
    public ExternalPipModule$setActive$1$1(ExternalPipModule externalPipModule, Promise promise) {
        this.this$0 = externalPipModule;
        this.$onResultPromise = promise;
    }

    @Override // kotlin.jvm.functions.Function1
    public /* bridge */ /* synthetic */ Object invoke(Object obj) {
        m875invoke(((Result) obj).j());
        return Unit.f32056a;
    }

    /* renamed from: invoke  reason: collision with other method in class */
    public final void m875invoke(Object obj) {
        Throwable e10 = Result.e(obj);
        if (e10 != null) {
            this.$onResultPromise.reject(e10);
        } else {
            this.$onResultPromise.resolve(Boolean.TRUE);
        }
    }
}

package com.discord.chat.presentation.list.delegate;

import com.discord.chat.presentation.events.ChatEventHandler;
import kotlin.Metadata;
import kotlin.Unit;
import kotlin.jvm.functions.Function0;
import kotlin.jvm.internal.FunctionReferenceImpl;
@Metadata(k = 3, mv = {2, 1, 0}, xi = 48)
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
/* synthetic */ class LoadingDelegate$bindView$2 extends FunctionReferenceImpl implements Function0<Unit> {
    /* JADX INFO: Access modifiers changed from: package-private */
    public LoadingDelegate$bindView$2(Object obj) {
        super(0, obj, ChatEventHandler.class, "onTapLoadMessagesAfter", "onTapLoadMessagesAfter()V", 0);
    }

    @Override // kotlin.jvm.functions.Function0
    public /* bridge */ /* synthetic */ Object invoke() {
        m499invoke();
        return Unit.f32464a;
    }

    /* renamed from: invoke  reason: collision with other method in class */
    public final void m499invoke() {
        ((ChatEventHandler) this.receiver).onTapLoadMessagesAfter();
    }
}

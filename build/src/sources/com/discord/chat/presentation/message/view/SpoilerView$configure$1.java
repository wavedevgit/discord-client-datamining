package com.discord.chat.presentation.message.view;

import com.discord.chat.bridge.spoiler.SpoilerConfig;
import kotlin.Metadata;
import kotlin.Unit;
import kotlin.jvm.functions.Function0;
import kotlin.jvm.internal.FunctionReferenceImpl;
@Metadata(k = 3, mv = {2, 1, 0}, xi = 48)
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
/* synthetic */ class SpoilerView$configure$1 extends FunctionReferenceImpl implements Function0<Unit> {
    /* JADX INFO: Access modifiers changed from: package-private */
    public SpoilerView$configure$1(Object obj) {
        super(0, obj, SpoilerConfig.class, "onReveal", "onReveal()V", 0);
    }

    @Override // kotlin.jvm.functions.Function0
    public /* bridge */ /* synthetic */ Object invoke() {
        m706invoke();
        return Unit.f32464a;
    }

    /* renamed from: invoke  reason: collision with other method in class */
    public final void m706invoke() {
        ((SpoilerConfig) this.receiver).onReveal();
    }
}

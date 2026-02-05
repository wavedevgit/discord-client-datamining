package com.discord.chat.presentation.message.viewholder;

import com.discord.chat.presentation.events.ChatEventHandler;
import kotlin.Metadata;
import kotlin.Unit;
import kotlin.jvm.functions.Function1;
import kotlin.jvm.internal.FunctionReferenceImpl;
import kotlin.jvm.internal.Intrinsics;
@Metadata(k = 3, mv = {2, 1, 0}, xi = 48)
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
/* synthetic */ class EmbedViewHolder$bind$5 extends FunctionReferenceImpl implements Function1<CharSequence, Unit> {
    /* JADX INFO: Access modifiers changed from: package-private */
    public EmbedViewHolder$bind$5(Object obj) {
        super(1, obj, ChatEventHandler.class, "onTapCopyText", "onTapCopyText(Ljava/lang/CharSequence;)V", 0);
    }

    @Override // kotlin.jvm.functions.Function1
    public /* bridge */ /* synthetic */ Object invoke(Object obj) {
        invoke((CharSequence) obj);
        return Unit.f31988a;
    }

    public final void invoke(CharSequence p02) {
        Intrinsics.checkNotNullParameter(p02, "p0");
        ((ChatEventHandler) this.receiver).onTapCopyText(p02);
    }
}

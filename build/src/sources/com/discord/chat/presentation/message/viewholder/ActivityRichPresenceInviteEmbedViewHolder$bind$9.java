package com.discord.chat.presentation.message.viewholder;

import com.discord.chat.bridge.contentnode.CommandMentionContentNode;
import com.discord.chat.presentation.events.ChatEventHandler;
import kotlin.Metadata;
import kotlin.Unit;
import kotlin.jvm.functions.Function1;
import kotlin.jvm.internal.FunctionReferenceImpl;
import kotlin.jvm.internal.Intrinsics;
/* JADX INFO: Access modifiers changed from: package-private */
@Metadata(k = 3, mv = {2, 1, 0}, xi = 48)
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public /* synthetic */ class ActivityRichPresenceInviteEmbedViewHolder$bind$9 extends FunctionReferenceImpl implements Function1<CommandMentionContentNode, Unit> {
    /* JADX INFO: Access modifiers changed from: package-private */
    public ActivityRichPresenceInviteEmbedViewHolder$bind$9(Object obj) {
        super(1, obj, ChatEventHandler.class, "onTapCommand", "onTapCommand(Lcom/discord/chat/bridge/contentnode/CommandMentionContentNode;)V", 0);
    }

    @Override // kotlin.jvm.functions.Function1
    public /* bridge */ /* synthetic */ Object invoke(Object obj) {
        invoke((CommandMentionContentNode) obj);
        return Unit.f32008a;
    }

    public final void invoke(CommandMentionContentNode p02) {
        Intrinsics.checkNotNullParameter(p02, "p0");
        ((ChatEventHandler) this.receiver).onTapCommand(p02);
    }
}

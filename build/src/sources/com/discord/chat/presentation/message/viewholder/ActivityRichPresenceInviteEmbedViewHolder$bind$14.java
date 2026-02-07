package com.discord.chat.presentation.message.viewholder;

import com.discord.chat.bridge.contentnode.EmojiContentNode;
import com.discord.chat.presentation.events.ChatEventHandler;
import kotlin.Metadata;
import kotlin.Unit;
import kotlin.jvm.functions.Function1;
import kotlin.jvm.internal.FunctionReferenceImpl;
import kotlin.jvm.internal.Intrinsics;
/* JADX INFO: Access modifiers changed from: package-private */
@Metadata(k = 3, mv = {2, 1, 0}, xi = 48)
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public /* synthetic */ class ActivityRichPresenceInviteEmbedViewHolder$bind$14 extends FunctionReferenceImpl implements Function1<EmojiContentNode, Unit> {
    /* JADX INFO: Access modifiers changed from: package-private */
    public ActivityRichPresenceInviteEmbedViewHolder$bind$14(Object obj) {
        super(1, obj, ChatEventHandler.class, "onTapEmoji", "onTapEmoji(Lcom/discord/chat/bridge/contentnode/EmojiContentNode;)V", 0);
    }

    @Override // kotlin.jvm.functions.Function1
    public /* bridge */ /* synthetic */ Object invoke(Object obj) {
        invoke((EmojiContentNode) obj);
        return Unit.f32056a;
    }

    public final void invoke(EmojiContentNode p02) {
        Intrinsics.checkNotNullParameter(p02, "p0");
        ((ChatEventHandler) this.receiver).onTapEmoji(p02);
    }
}

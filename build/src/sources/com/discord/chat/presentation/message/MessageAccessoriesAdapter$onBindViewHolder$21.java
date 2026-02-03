package com.discord.chat.presentation.message;

import com.discord.chat.bridge.contentnode.InlineCodeContentNode;
import com.discord.chat.presentation.events.ChatEventHandler;
import kotlin.Metadata;
import kotlin.Unit;
import kotlin.jvm.functions.Function1;
import kotlin.jvm.internal.FunctionReferenceImpl;
import kotlin.jvm.internal.Intrinsics;
/* JADX INFO: Access modifiers changed from: package-private */
@Metadata(k = 3, mv = {2, 1, 0}, xi = 48)
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public /* synthetic */ class MessageAccessoriesAdapter$onBindViewHolder$21 extends FunctionReferenceImpl implements Function1<InlineCodeContentNode, Unit> {
    /* JADX INFO: Access modifiers changed from: package-private */
    public MessageAccessoriesAdapter$onBindViewHolder$21(Object obj) {
        super(1, obj, ChatEventHandler.class, "onTapInlineCode", "onTapInlineCode(Lcom/discord/chat/bridge/contentnode/InlineCodeContentNode;)V", 0);
    }

    @Override // kotlin.jvm.functions.Function1
    public /* bridge */ /* synthetic */ Object invoke(Object obj) {
        invoke((InlineCodeContentNode) obj);
        return Unit.f32464a;
    }

    public final void invoke(InlineCodeContentNode p02) {
        Intrinsics.checkNotNullParameter(p02, "p0");
        ((ChatEventHandler) this.receiver).onTapInlineCode(p02);
    }
}

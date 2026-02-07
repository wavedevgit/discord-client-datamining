package com.discord.chat.presentation.message.viewholder.mosaicitem.attachments;

import com.discord.chat.presentation.events.ChatEventHandler;
import com.discord.media_player.reactevents.MediaPlayFinishedAnalytics;
import kotlin.Metadata;
import kotlin.Unit;
import kotlin.jvm.functions.Function1;
import kotlin.jvm.internal.FunctionReferenceImpl;
import kotlin.jvm.internal.Intrinsics;
@Metadata(k = 3, mv = {2, 1, 0}, xi = 48)
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
/* synthetic */ class MosaicItemMessageAttachmentVideoViewHolder$bindAttachment$2 extends FunctionReferenceImpl implements Function1<MediaPlayFinishedAnalytics, Unit> {
    /* JADX INFO: Access modifiers changed from: package-private */
    public MosaicItemMessageAttachmentVideoViewHolder$bindAttachment$2(Object obj) {
        super(1, obj, ChatEventHandler.class, "onMediaPlayFinishedAnalytics", "onMediaPlayFinishedAnalytics(Lcom/discord/media_player/reactevents/MediaPlayFinishedAnalytics;)V", 0);
    }

    @Override // kotlin.jvm.functions.Function1
    public /* bridge */ /* synthetic */ Object invoke(Object obj) {
        invoke((MediaPlayFinishedAnalytics) obj);
        return Unit.f32056a;
    }

    public final void invoke(MediaPlayFinishedAnalytics p02) {
        Intrinsics.checkNotNullParameter(p02, "p0");
        ((ChatEventHandler) this.receiver).onMediaPlayFinishedAnalytics(p02);
    }
}

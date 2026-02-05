package com.discord.chat.presentation.message.viewholder.mosaicitem.attachments;

import com.discord.chat.presentation.events.ChatEventHandler;
import kotlin.Metadata;
import kotlin.Unit;
import kotlin.jvm.functions.Function2;
import kotlin.jvm.internal.FunctionReferenceImpl;
import kotlin.jvm.internal.Intrinsics;
@Metadata(k = 3, mv = {2, 1, 0}, xi = 48)
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
/* synthetic */ class MosaicItemMessageAttachmentImageViewHolder$bindAttachment$uploadItemProps$1 extends FunctionReferenceImpl implements Function2<String, String, Unit> {
    /* JADX INFO: Access modifiers changed from: package-private */
    public MosaicItemMessageAttachmentImageViewHolder$bindAttachment$uploadItemProps$1(Object obj) {
        super(2, obj, ChatEventHandler.class, "onTapCancelUploadItem", "onTapCancelUploadItem(Ljava/lang/String;Ljava/lang/String;)V", 0);
    }

    @Override // kotlin.jvm.functions.Function2
    public /* bridge */ /* synthetic */ Object invoke(Object obj, Object obj2) {
        invoke((String) obj, (String) obj2);
        return Unit.f31988a;
    }

    public final void invoke(String p02, String p12) {
        Intrinsics.checkNotNullParameter(p02, "p0");
        Intrinsics.checkNotNullParameter(p12, "p1");
        ((ChatEventHandler) this.receiver).onTapCancelUploadItem(p02, p12);
    }
}

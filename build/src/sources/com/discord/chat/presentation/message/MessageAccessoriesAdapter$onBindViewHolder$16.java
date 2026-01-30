package com.discord.chat.presentation.message;

import com.discord.chat.presentation.events.ChatEventHandler;
import kotlin.Metadata;
import kotlin.Unit;
import kotlin.jvm.functions.Function2;
import kotlin.jvm.internal.FunctionReferenceImpl;
import kotlin.jvm.internal.Intrinsics;
@Metadata(k = 3, mv = {2, 1, 0}, xi = 48)
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
/* synthetic */ class MessageAccessoriesAdapter$onBindViewHolder$16 extends FunctionReferenceImpl implements Function2<String, String, Unit> {
    /* JADX INFO: Access modifiers changed from: package-private */
    public MessageAccessoriesAdapter$onBindViewHolder$16(Object obj) {
        super(2, obj, ChatEventHandler.class, "onLongPressAttachmentLink", "onLongPressAttachmentLink(Ljava/lang/String;Ljava/lang/String;)V", 0);
    }

    @Override // kotlin.jvm.functions.Function2
    public /* bridge */ /* synthetic */ Object invoke(Object obj, Object obj2) {
        invoke((String) obj, (String) obj2);
        return Unit.f33298a;
    }

    public final void invoke(String p02, String p12) {
        Intrinsics.checkNotNullParameter(p02, "p0");
        Intrinsics.checkNotNullParameter(p12, "p1");
        ((ChatEventHandler) this.receiver).onLongPressAttachmentLink(p02, p12);
    }
}

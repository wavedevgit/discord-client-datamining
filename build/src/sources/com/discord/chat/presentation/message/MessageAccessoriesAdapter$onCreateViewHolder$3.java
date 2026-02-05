package com.discord.chat.presentation.message;

import com.discord.chat.presentation.events.ChatEventHandler;
import com.discord.primitives.MessageId;
import kotlin.Metadata;
import kotlin.Unit;
import kotlin.jvm.functions.Function1;
import kotlin.jvm.internal.FunctionReferenceImpl;
import kotlin.jvm.internal.Intrinsics;
@Metadata(k = 3, mv = {2, 1, 0}, xi = 48)
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
/* synthetic */ class MessageAccessoriesAdapter$onCreateViewHolder$3 extends FunctionReferenceImpl implements Function1<MessageId, Unit> {
    /* JADX INFO: Access modifiers changed from: package-private */
    public MessageAccessoriesAdapter$onCreateViewHolder$3(Object obj) {
        super(1, obj, ChatEventHandler.class, "onTapInviteToSpeak", "onTapInviteToSpeak-1xi1bu0(Ljava/lang/String;)V", 0);
    }

    @Override // kotlin.jvm.functions.Function1
    public /* bridge */ /* synthetic */ Object invoke(Object obj) {
        m529invoke1xi1bu0(((MessageId) obj).m1094unboximpl());
        return Unit.f31988a;
    }

    /* renamed from: invoke-1xi1bu0  reason: not valid java name */
    public final void m529invoke1xi1bu0(String p02) {
        Intrinsics.checkNotNullParameter(p02, "p0");
        ((ChatEventHandler) this.receiver).mo466onTapInviteToSpeak1xi1bu0(p02);
    }
}

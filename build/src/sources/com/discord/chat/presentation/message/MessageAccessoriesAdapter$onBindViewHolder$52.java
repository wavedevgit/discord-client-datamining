package com.discord.chat.presentation.message;

import com.discord.chat.presentation.events.ChatEventHandler;
import com.discord.primitives.ChannelId;
import com.discord.primitives.MessageId;
import kotlin.Metadata;
import kotlin.Unit;
import kotlin.jvm.functions.Function2;
import kotlin.jvm.internal.FunctionReferenceImpl;
import kotlin.jvm.internal.Intrinsics;
/* JADX INFO: Access modifiers changed from: package-private */
@Metadata(k = 3, mv = {2, 1, 0}, xi = 48)
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public /* synthetic */ class MessageAccessoriesAdapter$onBindViewHolder$52 extends FunctionReferenceImpl implements Function2<MessageId, ChannelId, Unit> {
    /* JADX INFO: Access modifiers changed from: package-private */
    public MessageAccessoriesAdapter$onBindViewHolder$52(Object obj) {
        super(2, obj, ChatEventHandler.class, "onTapAutoModerationActions", "onTapAutoModerationActions-pfaIj0E(Ljava/lang/String;J)V", 0);
    }

    @Override // kotlin.jvm.functions.Function2
    public /* bridge */ /* synthetic */ Object invoke(Object obj, Object obj2) {
        m514invokepfaIj0E(((MessageId) obj).m1094unboximpl(), ((ChannelId) obj2).m1068unboximpl());
        return Unit.f31988a;
    }

    /* renamed from: invoke-pfaIj0E  reason: not valid java name */
    public final void m514invokepfaIj0E(String p02, long j10) {
        Intrinsics.checkNotNullParameter(p02, "p0");
        ((ChatEventHandler) this.receiver).mo448onTapAutoModerationActionspfaIj0E(p02, j10);
    }
}

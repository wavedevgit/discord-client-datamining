package com.discord.chat.presentation.message;

import com.discord.chat.presentation.events.ChatEventHandler;
import com.discord.primitives.ChannelId;
import com.discord.primitives.GuildId;
import com.discord.primitives.MessageId;
import kotlin.Metadata;
import kotlin.Unit;
import kotlin.jvm.functions.Function4;
import kotlin.jvm.internal.FunctionReferenceImpl;
import kotlin.jvm.internal.Intrinsics;
/* JADX INFO: Access modifiers changed from: package-private */
@Metadata(k = 3, mv = {2, 1, 0}, xi = 48)
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public /* synthetic */ class MessageAccessoriesAdapter$onBindViewHolder$56 extends FunctionReferenceImpl implements Function4 {
    /* JADX INFO: Access modifiers changed from: package-private */
    public MessageAccessoriesAdapter$onBindViewHolder$56(Object obj) {
        super(4, obj, ChatEventHandler.class, "onTapPostPreviewEmbed", "onTapPostPreviewEmbed-kUTrp-s(JJJLjava/lang/String;)V", 0);
    }

    @Override // kotlin.jvm.functions.Function4
    public /* bridge */ /* synthetic */ Object invoke(Object obj, Object obj2, Object obj3, Object obj4) {
        m515invokekUTrps(((GuildId) obj).m1080unboximpl(), ((ChannelId) obj2).m1067unboximpl(), ((ChannelId) obj3).m1067unboximpl(), ((MessageId) obj4).m1093unboximpl());
        return Unit.f33298a;
    }

    /* renamed from: invoke-kUTrp-s  reason: not valid java name */
    public final void m515invokekUTrps(long j10, long j11, long j12, String p32) {
        Intrinsics.checkNotNullParameter(p32, "p3");
        ((ChatEventHandler) this.receiver).mo473onTapPostPreviewEmbedkUTrps(j10, j11, j12, p32);
    }
}

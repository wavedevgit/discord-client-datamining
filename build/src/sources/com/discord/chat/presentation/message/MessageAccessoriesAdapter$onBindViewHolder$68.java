package com.discord.chat.presentation.message;

import com.discord.chat.presentation.events.ChatEventHandler;
import com.discord.primitives.ChannelId;
import com.discord.primitives.MessageId;
import kotlin.Metadata;
import kotlin.Unit;
import kotlin.jvm.functions.Function3;
import kotlin.jvm.internal.FunctionReferenceImpl;
import kotlin.jvm.internal.Intrinsics;
/* JADX INFO: Access modifiers changed from: package-private */
@Metadata(k = 3, mv = {2, 1, 0}, xi = 48)
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public /* synthetic */ class MessageAccessoriesAdapter$onBindViewHolder$68 extends FunctionReferenceImpl implements Function3 {
    /* JADX INFO: Access modifiers changed from: package-private */
    public MessageAccessoriesAdapter$onBindViewHolder$68(Object obj) {
        super(3, obj, ChatEventHandler.class, "onTapForwardFooter", "onTapForwardFooter-SHRpUJI(IJLjava/lang/String;)V", 0);
    }

    @Override // kotlin.jvm.functions.Function3
    public /* bridge */ /* synthetic */ Object invoke(Object obj, Object obj2, Object obj3) {
        m523invokeSHRpUJI(((Number) obj).intValue(), ((ChannelId) obj2).m1066unboximpl(), ((MessageId) obj3).m1092unboximpl());
        return Unit.f32056a;
    }

    /* renamed from: invoke-SHRpUJI  reason: not valid java name */
    public final void m523invokeSHRpUJI(int i10, long j10, String p22) {
        Intrinsics.checkNotNullParameter(p22, "p2");
        ((ChatEventHandler) this.receiver).mo458onTapForwardFooterSHRpUJI(i10, j10, p22);
    }
}

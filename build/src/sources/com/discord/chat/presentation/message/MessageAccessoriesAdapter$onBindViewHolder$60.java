package com.discord.chat.presentation.message;

import com.discord.chat.presentation.events.ChatEventHandler;
import kotlin.Metadata;
import kotlin.Unit;
import kotlin.jvm.functions.Function1;
import kotlin.jvm.internal.FunctionReferenceImpl;
import kotlin.jvm.internal.Intrinsics;
@Metadata(k = 3, mv = {2, 1, 0}, xi = 48)
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
/* synthetic */ class MessageAccessoriesAdapter$onBindViewHolder$60 extends FunctionReferenceImpl implements Function1<String, Unit> {
    /* JADX INFO: Access modifiers changed from: package-private */
    public MessageAccessoriesAdapter$onBindViewHolder$60(Object obj) {
        super(1, obj, ChatEventHandler.class, "onTapSafetyPolicyNoticeEmbed", "onTapSafetyPolicyNoticeEmbed(Ljava/lang/String;)V", 0);
    }

    @Override // kotlin.jvm.functions.Function1
    public /* bridge */ /* synthetic */ Object invoke(Object obj) {
        invoke((String) obj);
        return Unit.f32464a;
    }

    public final void invoke(String p02) {
        Intrinsics.checkNotNullParameter(p02, "p0");
        ((ChatEventHandler) this.receiver).onTapSafetyPolicyNoticeEmbed(p02);
    }
}

package com.discord.chat.presentation.message;

import com.discord.chat.presentation.events.ChatEventHandler;
import kotlin.Metadata;
import kotlin.Unit;
import kotlin.jvm.functions.Function3;
import kotlin.jvm.internal.FunctionReferenceImpl;
import kotlin.jvm.internal.Intrinsics;
@Metadata(k = 3, mv = {2, 1, 0}, xi = 48)
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
/* synthetic */ class MessageAccessoriesAdapter$onBindViewHolder$13 extends FunctionReferenceImpl implements Function3 {
    /* JADX INFO: Access modifiers changed from: package-private */
    public MessageAccessoriesAdapter$onBindViewHolder$13(Object obj) {
        super(3, obj, ChatEventHandler.class, "onTapChannel", "onTapChannel(Ljava/lang/String;Ljava/lang/String;Ljava/lang/String;)V", 0);
    }

    @Override // kotlin.jvm.functions.Function3
    public /* bridge */ /* synthetic */ Object invoke(Object obj, Object obj2, Object obj3) {
        invoke((String) obj, (String) obj2, (String) obj3);
        return Unit.f32464a;
    }

    public final void invoke(String p02, String str, String str2) {
        Intrinsics.checkNotNullParameter(p02, "p0");
        ((ChatEventHandler) this.receiver).onTapChannel(p02, str, str2);
    }
}

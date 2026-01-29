package com.discord.chat.presentation.message.decorations;

import android.content.Context;
import com.discord.chat.bridge.BackgroundHighlight;
import com.discord.chat.presentation.list.item.ChatListItem;
import com.discord.chat.presentation.message.decorations.BackgroundHighlightDrawer;
import kotlin.Metadata;
import kotlin.jvm.functions.Function1;
import kotlin.jvm.internal.Intrinsics;
import org.jetbrains.annotations.NotNull;
@Metadata(d1 = {"\u0000\u0012\n\u0002\u0018\u0002\n\u0002\u0018\u0002\n\u0000\n\u0002\u0018\u0002\n\u0002\b\u0003\u0018\u00002\u00020\u0001B\u000f\u0012\u0006\u0010\u0002\u001a\u00020\u0003¢\u0006\u0004\b\u0004\u0010\u0005¨\u0006\u0006"}, d2 = {"Lcom/discord/chat/presentation/message/decorations/BackgroundHighlightDrawer;", "Lcom/discord/chat/presentation/message/decorations/HighlightedMessageDrawer;", "context", "Landroid/content/Context;", "<init>", "(Landroid/content/Context;)V", "chat_release"}, k = 1, mv = {2, 1, 0}, xi = 48)
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public final class BackgroundHighlightDrawer extends HighlightedMessageDrawer {
    /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
    public BackgroundHighlightDrawer(@NotNull Context context) {
        super(context, new Function1() { // from class: w6.a
            @Override // kotlin.jvm.functions.Function1
            public final Object invoke(Object obj) {
                Integer _init_$lambda$0;
                _init_$lambda$0 = BackgroundHighlightDrawer._init_$lambda$0((ChatListItem) obj);
                return _init_$lambda$0;
            }
        }, new Function1() { // from class: w6.b
            @Override // kotlin.jvm.functions.Function1
            public final Object invoke(Object obj) {
                Integer _init_$lambda$1;
                _init_$lambda$1 = BackgroundHighlightDrawer._init_$lambda$1((ChatListItem) obj);
                return _init_$lambda$1;
            }
        }, new Function1() { // from class: w6.c
            @Override // kotlin.jvm.functions.Function1
            public final Object invoke(Object obj) {
                boolean _init_$lambda$2;
                _init_$lambda$2 = BackgroundHighlightDrawer._init_$lambda$2((ChatListItem) obj);
                return Boolean.valueOf(_init_$lambda$2);
            }
        });
        Intrinsics.checkNotNullParameter(context, "context");
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Integer _init_$lambda$0(ChatListItem it) {
        BackgroundHighlight backgroundHighlight;
        Intrinsics.checkNotNullParameter(it, "it");
        backgroundHighlight = BackgroundHighlightDecorationKt.getBackgroundHighlight(it);
        if (backgroundHighlight != null) {
            return backgroundHighlight.getBackgroundColor();
        }
        return null;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Integer _init_$lambda$1(ChatListItem it) {
        BackgroundHighlight backgroundHighlight;
        Intrinsics.checkNotNullParameter(it, "it");
        backgroundHighlight = BackgroundHighlightDecorationKt.getBackgroundHighlight(it);
        if (backgroundHighlight != null) {
            return backgroundHighlight.getGutterColor();
        }
        return null;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final boolean _init_$lambda$2(ChatListItem it) {
        BackgroundHighlight backgroundHighlight;
        Intrinsics.checkNotNullParameter(it, "it");
        backgroundHighlight = BackgroundHighlightDecorationKt.getBackgroundHighlight(it);
        if (backgroundHighlight != null) {
            return true;
        }
        return false;
    }
}

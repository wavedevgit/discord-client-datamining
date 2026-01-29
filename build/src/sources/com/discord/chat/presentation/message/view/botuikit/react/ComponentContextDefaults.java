package com.discord.chat.presentation.message.view.botuikit.react;

import android.view.View;
import com.discord.chat.bridge.contentnode.CommandMentionContentNode;
import com.discord.chat.bridge.contentnode.EmojiContentNode;
import com.discord.chat.bridge.contentnode.InlineCodeContentNode;
import com.discord.chat.bridge.contentnode.LinkContentNode;
import com.discord.chat.bridge.contentnode.SoundmojiContentNode;
import com.discord.chat.presentation.message.view.botuikit.ComponentActionEventHandlers;
import com.discord.chat.presentation.message.view.botuikit.GeneralEventHandlers;
import com.discord.chat.presentation.message.view.botuikit.MarkdownTextRenderEventHandlers;
import com.discord.chat.presentation.message.view.botuikit.MarkdownTextRenderOptions;
import com.discord.chat.presentation.message.view.botuikit.MediaItemEventHandlers;
import com.discord.primitives.UserId;
import kotlin.Metadata;
import kotlin.Unit;
import kotlin.jvm.functions.Function0;
import kotlin.jvm.functions.Function1;
import kotlin.jvm.functions.Function2;
import kotlin.jvm.functions.Function3;
import kotlin.jvm.functions.Function4;
import kotlin.jvm.internal.Intrinsics;
import org.jetbrains.annotations.NotNull;
@Metadata(d1 = {"\u00004\n\u0002\u0018\u0002\n\u0002\u0010\u0000\n\u0002\b\u0003\n\u0002\u0018\u0002\n\u0002\b\u0003\n\u0002\u0018\u0002\n\u0002\b\u0003\n\u0002\u0018\u0002\n\u0002\b\u0003\n\u0002\u0018\u0002\n\u0002\b\u0003\n\u0002\u0018\u0002\n\u0002\b\u0003\bÆ\u0002\u0018\u00002\u00020\u0001B\t\b\u0002¢\u0006\u0004\b\u0002\u0010\u0003R\u0011\u0010\u0004\u001a\u00020\u0005¢\u0006\b\n\u0000\u001a\u0004\b\u0006\u0010\u0007R\u0011\u0010\b\u001a\u00020\t¢\u0006\b\n\u0000\u001a\u0004\b\n\u0010\u000bR\u0011\u0010\f\u001a\u00020\r¢\u0006\b\n\u0000\u001a\u0004\b\u000e\u0010\u000fR\u0011\u0010\u0010\u001a\u00020\u0011¢\u0006\b\n\u0000\u001a\u0004\b\u0012\u0010\u0013R\u0011\u0010\u0014\u001a\u00020\u0015¢\u0006\b\n\u0000\u001a\u0004\b\u0016\u0010\u0017¨\u0006\u0018"}, d2 = {"Lcom/discord/chat/presentation/message/view/botuikit/react/ComponentContextDefaults;", "", "<init>", "()V", "GENERAL_HANDLERS", "Lcom/discord/chat/presentation/message/view/botuikit/GeneralEventHandlers;", "getGENERAL_HANDLERS", "()Lcom/discord/chat/presentation/message/view/botuikit/GeneralEventHandlers;", "MARKDOWN_OPTIONS", "Lcom/discord/chat/presentation/message/view/botuikit/MarkdownTextRenderOptions;", "getMARKDOWN_OPTIONS", "()Lcom/discord/chat/presentation/message/view/botuikit/MarkdownTextRenderOptions;", "MARKDOWN_HANDLERS", "Lcom/discord/chat/presentation/message/view/botuikit/MarkdownTextRenderEventHandlers;", "getMARKDOWN_HANDLERS", "()Lcom/discord/chat/presentation/message/view/botuikit/MarkdownTextRenderEventHandlers;", "MEDIA_HANDLERS", "Lcom/discord/chat/presentation/message/view/botuikit/MediaItemEventHandlers;", "getMEDIA_HANDLERS", "()Lcom/discord/chat/presentation/message/view/botuikit/MediaItemEventHandlers;", "COMPONENT_HANDLERS", "Lcom/discord/chat/presentation/message/view/botuikit/ComponentActionEventHandlers;", "getCOMPONENT_HANDLERS", "()Lcom/discord/chat/presentation/message/view/botuikit/ComponentActionEventHandlers;", "chat_release"}, k = 1, mv = {2, 1, 0}, xi = 48)
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public final class ComponentContextDefaults {
    @NotNull
    public static final ComponentContextDefaults INSTANCE = new ComponentContextDefaults();
    @NotNull
    private static final GeneralEventHandlers GENERAL_HANDLERS = new GeneralEventHandlers(new Function2() { // from class: com.discord.chat.presentation.message.view.botuikit.react.a
        @Override // kotlin.jvm.functions.Function2
        public final Object invoke(Object obj, Object obj2) {
            Unit GENERAL_HANDLERS$lambda$0;
            GENERAL_HANDLERS$lambda$0 = ComponentContextDefaults.GENERAL_HANDLERS$lambda$0((String) obj, (String) obj2);
            return GENERAL_HANDLERS$lambda$0;
        }
    }, new Function0() { // from class: com.discord.chat.presentation.message.view.botuikit.react.c
        @Override // kotlin.jvm.functions.Function0
        public final Object invoke() {
            Unit GENERAL_HANDLERS$lambda$1;
            GENERAL_HANDLERS$lambda$1 = ComponentContextDefaults.GENERAL_HANDLERS$lambda$1();
            return GENERAL_HANDLERS$lambda$1;
        }
    });
    @NotNull
    private static final MarkdownTextRenderOptions MARKDOWN_OPTIONS = new MarkdownTextRenderOptions("", false, false, false, false);
    @NotNull
    private static final MarkdownTextRenderEventHandlers MARKDOWN_HANDLERS = new MarkdownTextRenderEventHandlers(new Function1() { // from class: com.discord.chat.presentation.message.view.botuikit.react.j
        @Override // kotlin.jvm.functions.Function1
        public final Object invoke(Object obj) {
            Unit MARKDOWN_HANDLERS$lambda$2;
            MARKDOWN_HANDLERS$lambda$2 = ComponentContextDefaults.MARKDOWN_HANDLERS$lambda$2((LinkContentNode) obj);
            return MARKDOWN_HANDLERS$lambda$2;
        }
    }, new Function1() { // from class: com.discord.chat.presentation.message.view.botuikit.react.k
        @Override // kotlin.jvm.functions.Function1
        public final Object invoke(Object obj) {
            Unit MARKDOWN_HANDLERS$lambda$3;
            MARKDOWN_HANDLERS$lambda$3 = ComponentContextDefaults.MARKDOWN_HANDLERS$lambda$3((LinkContentNode) obj);
            return MARKDOWN_HANDLERS$lambda$3;
        }
    }, new Function3() { // from class: com.discord.chat.presentation.message.view.botuikit.react.m
        @Override // kotlin.jvm.functions.Function3
        public final Object invoke(Object obj, Object obj2, Object obj3) {
            Unit MARKDOWN_HANDLERS$lambda$4;
            MARKDOWN_HANDLERS$lambda$4 = ComponentContextDefaults.MARKDOWN_HANDLERS$lambda$4((String) obj, (String) obj2, (String) obj3);
            return MARKDOWN_HANDLERS$lambda$4;
        }
    }, new Function4() { // from class: com.discord.chat.presentation.message.view.botuikit.react.n
        @Override // kotlin.jvm.functions.Function4
        public final Object invoke(Object obj, Object obj2, Object obj3, Object obj4) {
            Unit MARKDOWN_HANDLERS$lambda$5;
            MARKDOWN_HANDLERS$lambda$5 = ComponentContextDefaults.MARKDOWN_HANDLERS$lambda$5((String) obj, (String) obj2, (String) obj3, (String) obj4);
            return MARKDOWN_HANDLERS$lambda$5;
        }
    }, new Function1() { // from class: com.discord.chat.presentation.message.view.botuikit.react.o
        @Override // kotlin.jvm.functions.Function1
        public final Object invoke(Object obj) {
            Unit MARKDOWN_HANDLERS$lambda$6;
            MARKDOWN_HANDLERS$lambda$6 = ComponentContextDefaults.MARKDOWN_HANDLERS$lambda$6((String) obj);
            return MARKDOWN_HANDLERS$lambda$6;
        }
    }, new Function2() { // from class: com.discord.chat.presentation.message.view.botuikit.react.p
        @Override // kotlin.jvm.functions.Function2
        public final Object invoke(Object obj, Object obj2) {
            Unit MARKDOWN_HANDLERS$lambda$7;
            MARKDOWN_HANDLERS$lambda$7 = ComponentContextDefaults.MARKDOWN_HANDLERS$lambda$7((String) obj, (String) obj2);
            return MARKDOWN_HANDLERS$lambda$7;
        }
    }, new Function4() { // from class: com.discord.chat.presentation.message.view.botuikit.react.q
        @Override // kotlin.jvm.functions.Function4
        public final Object invoke(Object obj, Object obj2, Object obj3, Object obj4) {
            Unit MARKDOWN_HANDLERS$lambda$8;
            MARKDOWN_HANDLERS$lambda$8 = ComponentContextDefaults.MARKDOWN_HANDLERS$lambda$8((String) obj, (String) obj2, (String) obj3, (String) obj4);
            return MARKDOWN_HANDLERS$lambda$8;
        }
    }, new Function1() { // from class: com.discord.chat.presentation.message.view.botuikit.react.r
        @Override // kotlin.jvm.functions.Function1
        public final Object invoke(Object obj) {
            Unit MARKDOWN_HANDLERS$lambda$9;
            MARKDOWN_HANDLERS$lambda$9 = ComponentContextDefaults.MARKDOWN_HANDLERS$lambda$9((CommandMentionContentNode) obj);
            return MARKDOWN_HANDLERS$lambda$9;
        }
    }, new Function1() { // from class: com.discord.chat.presentation.message.view.botuikit.react.l
        @Override // kotlin.jvm.functions.Function1
        public final Object invoke(Object obj) {
            Unit MARKDOWN_HANDLERS$lambda$10;
            MARKDOWN_HANDLERS$lambda$10 = ComponentContextDefaults.MARKDOWN_HANDLERS$lambda$10((CommandMentionContentNode) obj);
            return MARKDOWN_HANDLERS$lambda$10;
        }
    }, new Function0() { // from class: com.discord.chat.presentation.message.view.botuikit.react.s
        @Override // kotlin.jvm.functions.Function0
        public final Object invoke() {
            Unit MARKDOWN_HANDLERS$lambda$11;
            MARKDOWN_HANDLERS$lambda$11 = ComponentContextDefaults.MARKDOWN_HANDLERS$lambda$11();
            return MARKDOWN_HANDLERS$lambda$11;
        }
    }, new Function1() { // from class: com.discord.chat.presentation.message.view.botuikit.react.t
        @Override // kotlin.jvm.functions.Function1
        public final Object invoke(Object obj) {
            Unit MARKDOWN_HANDLERS$lambda$12;
            MARKDOWN_HANDLERS$lambda$12 = ComponentContextDefaults.MARKDOWN_HANDLERS$lambda$12((String) obj);
            return MARKDOWN_HANDLERS$lambda$12;
        }
    }, new Function1() { // from class: com.discord.chat.presentation.message.view.botuikit.react.u
        @Override // kotlin.jvm.functions.Function1
        public final Object invoke(Object obj) {
            Unit MARKDOWN_HANDLERS$lambda$13;
            MARKDOWN_HANDLERS$lambda$13 = ComponentContextDefaults.MARKDOWN_HANDLERS$lambda$13((InlineCodeContentNode) obj);
            return MARKDOWN_HANDLERS$lambda$13;
        }
    }, new Function1() { // from class: com.discord.chat.presentation.message.view.botuikit.react.v
        @Override // kotlin.jvm.functions.Function1
        public final Object invoke(Object obj) {
            Unit MARKDOWN_HANDLERS$lambda$14;
            MARKDOWN_HANDLERS$lambda$14 = ComponentContextDefaults.MARKDOWN_HANDLERS$lambda$14((EmojiContentNode) obj);
            return MARKDOWN_HANDLERS$lambda$14;
        }
    }, new Function1() { // from class: com.discord.chat.presentation.message.view.botuikit.react.w
        @Override // kotlin.jvm.functions.Function1
        public final Object invoke(Object obj) {
            Unit MARKDOWN_HANDLERS$lambda$15;
            MARKDOWN_HANDLERS$lambda$15 = ComponentContextDefaults.MARKDOWN_HANDLERS$lambda$15((SoundmojiContentNode) obj);
            return MARKDOWN_HANDLERS$lambda$15;
        }
    });
    @NotNull
    private static final MediaItemEventHandlers MEDIA_HANDLERS = new MediaItemEventHandlers(new Function4() { // from class: com.discord.chat.presentation.message.view.botuikit.react.x
        @Override // kotlin.jvm.functions.Function4
        public final Object invoke(Object obj, Object obj2, Object obj3, Object obj4) {
            Unit MEDIA_HANDLERS$lambda$16;
            MEDIA_HANDLERS$lambda$16 = ComponentContextDefaults.MEDIA_HANDLERS$lambda$16((View) obj, (String) obj2, ((Integer) obj3).intValue(), (Double) obj4);
            return MEDIA_HANDLERS$lambda$16;
        }
    }, new Function2() { // from class: com.discord.chat.presentation.message.view.botuikit.react.y
        @Override // kotlin.jvm.functions.Function2
        public final Object invoke(Object obj, Object obj2) {
            Unit MEDIA_HANDLERS$lambda$17;
            MEDIA_HANDLERS$lambda$17 = ComponentContextDefaults.MEDIA_HANDLERS$lambda$17((String) obj, (Integer) obj2);
            return MEDIA_HANDLERS$lambda$17;
        }
    }, new Function0() { // from class: com.discord.chat.presentation.message.view.botuikit.react.z
        @Override // kotlin.jvm.functions.Function0
        public final Object invoke() {
            Unit MEDIA_HANDLERS$lambda$18;
            MEDIA_HANDLERS$lambda$18 = ComponentContextDefaults.MEDIA_HANDLERS$lambda$18();
            return MEDIA_HANDLERS$lambda$18;
        }
    }, new Function1() { // from class: com.discord.chat.presentation.message.view.botuikit.react.b
        @Override // kotlin.jvm.functions.Function1
        public final Object invoke(Object obj) {
            Unit MEDIA_HANDLERS$lambda$19;
            MEDIA_HANDLERS$lambda$19 = ComponentContextDefaults.MEDIA_HANDLERS$lambda$19((String) obj);
            return MEDIA_HANDLERS$lambda$19;
        }
    }, new Function1() { // from class: com.discord.chat.presentation.message.view.botuikit.react.d
        @Override // kotlin.jvm.functions.Function1
        public final Object invoke(Object obj) {
            Unit MEDIA_HANDLERS$lambda$20;
            MEDIA_HANDLERS$lambda$20 = ComponentContextDefaults.MEDIA_HANDLERS$lambda$20(((Boolean) obj).booleanValue());
            return MEDIA_HANDLERS$lambda$20;
        }
    });
    @NotNull
    private static final ComponentActionEventHandlers COMPONENT_HANDLERS = new ComponentActionEventHandlers(new Function1() { // from class: com.discord.chat.presentation.message.view.botuikit.react.e
        @Override // kotlin.jvm.functions.Function1
        public final Object invoke(Object obj) {
            Unit COMPONENT_HANDLERS$lambda$21;
            COMPONENT_HANDLERS$lambda$21 = ComponentContextDefaults.COMPONENT_HANDLERS$lambda$21((String) obj);
            return COMPONENT_HANDLERS$lambda$21;
        }
    }, new Function1() { // from class: com.discord.chat.presentation.message.view.botuikit.react.f
        @Override // kotlin.jvm.functions.Function1
        public final Object invoke(Object obj) {
            Unit COMPONENT_HANDLERS$lambda$22;
            COMPONENT_HANDLERS$lambda$22 = ComponentContextDefaults.COMPONENT_HANDLERS$lambda$22((String) obj);
            return COMPONENT_HANDLERS$lambda$22;
        }
    }, new Function1() { // from class: com.discord.chat.presentation.message.view.botuikit.react.g
        @Override // kotlin.jvm.functions.Function1
        public final Object invoke(Object obj) {
            Unit COMPONENT_HANDLERS$lambda$23;
            COMPONENT_HANDLERS$lambda$23 = ComponentContextDefaults.COMPONENT_HANDLERS$lambda$23((String) obj);
            return COMPONENT_HANDLERS$lambda$23;
        }
    }, new Function3() { // from class: com.discord.chat.presentation.message.view.botuikit.react.h
        @Override // kotlin.jvm.functions.Function3
        public final Object invoke(Object obj, Object obj2, Object obj3) {
            Unit COMPONENT_HANDLERS$lambda$24;
            COMPONENT_HANDLERS$lambda$24 = ComponentContextDefaults.COMPONENT_HANDLERS$lambda$24((UserId) obj, (String) obj2, (String) obj3);
            return COMPONENT_HANDLERS$lambda$24;
        }
    }, new Function1() { // from class: com.discord.chat.presentation.message.view.botuikit.react.i
        @Override // kotlin.jvm.functions.Function1
        public final Object invoke(Object obj) {
            Unit COMPONENT_HANDLERS$lambda$25;
            COMPONENT_HANDLERS$lambda$25 = ComponentContextDefaults.COMPONENT_HANDLERS$lambda$25((UserId) obj);
            return COMPONENT_HANDLERS$lambda$25;
        }
    });

    private ComponentContextDefaults() {
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit COMPONENT_HANDLERS$lambda$21(String it) {
        Intrinsics.checkNotNullParameter(it, "it");
        throw new ir.q("onTapButtonActionComponent not implemented");
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit COMPONENT_HANDLERS$lambda$22(String it) {
        Intrinsics.checkNotNullParameter(it, "it");
        throw new ir.q("onTapButtonLinkComponent not implemented");
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit COMPONENT_HANDLERS$lambda$23(String it) {
        Intrinsics.checkNotNullParameter(it, "it");
        throw new ir.q("onTapSelectActionComponent not implemented");
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit COMPONENT_HANDLERS$lambda$24(UserId userId, String str, String str2) {
        Intrinsics.checkNotNullParameter(str, "<unused var>");
        Intrinsics.checkNotNullParameter(str2, "<unused var>");
        throw new ir.q("onTapContentInventoryEntry not implemented");
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit COMPONENT_HANDLERS$lambda$25(UserId userId) {
        throw new ir.q("onTapCheckpointCard not implemented");
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit GENERAL_HANDLERS$lambda$0(String str, String str2) {
        Intrinsics.checkNotNullParameter(str, "<unused var>");
        Intrinsics.checkNotNullParameter(str2, "<unused var>");
        throw new ir.q("onLinkClicked not implemented");
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit GENERAL_HANDLERS$lambda$1() {
        throw new ir.q("onTapSpoiler not implemented");
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit MARKDOWN_HANDLERS$lambda$10(CommandMentionContentNode it) {
        Intrinsics.checkNotNullParameter(it, "it");
        throw new ir.q("onLongPressCommand not implemented");
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit MARKDOWN_HANDLERS$lambda$11() {
        throw new ir.q("onTapSpoiler not implemented");
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit MARKDOWN_HANDLERS$lambda$12(String it) {
        Intrinsics.checkNotNullParameter(it, "it");
        throw new ir.q("onTapTimestamp not implemented");
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit MARKDOWN_HANDLERS$lambda$13(InlineCodeContentNode it) {
        Intrinsics.checkNotNullParameter(it, "it");
        throw new ir.q("onTapInlineCode not implemented");
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit MARKDOWN_HANDLERS$lambda$14(EmojiContentNode it) {
        Intrinsics.checkNotNullParameter(it, "it");
        throw new ir.q("onTapEmoji not implemented");
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit MARKDOWN_HANDLERS$lambda$15(SoundmojiContentNode it) {
        Intrinsics.checkNotNullParameter(it, "it");
        throw new ir.q("onTapSoundmoji not implemented");
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit MARKDOWN_HANDLERS$lambda$2(LinkContentNode it) {
        Intrinsics.checkNotNullParameter(it, "it");
        throw new ir.q("onLinkClicked not implemented");
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit MARKDOWN_HANDLERS$lambda$3(LinkContentNode it) {
        Intrinsics.checkNotNullParameter(it, "it");
        throw new ir.q("onLinkLongClicked not implemented");
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit MARKDOWN_HANDLERS$lambda$4(String str, String str2, String str3) {
        Intrinsics.checkNotNullParameter(str, "<unused var>");
        throw new ir.q("onTapChannel not implemented");
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit MARKDOWN_HANDLERS$lambda$5(String str, String str2, String str3, String str4) {
        Intrinsics.checkNotNullParameter(str, "<unused var>");
        throw new ir.q("onLongPressChannel not implemented");
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit MARKDOWN_HANDLERS$lambda$6(String it) {
        Intrinsics.checkNotNullParameter(it, "it");
        throw new ir.q("onTapAttachmentLink not implemented");
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit MARKDOWN_HANDLERS$lambda$7(String str, String str2) {
        Intrinsics.checkNotNullParameter(str, "<unused var>");
        Intrinsics.checkNotNullParameter(str2, "<unused var>");
        throw new ir.q("onLongPressAttachmentLink not implemented");
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit MARKDOWN_HANDLERS$lambda$8(String str, String str2, String str3, String str4) {
        Intrinsics.checkNotNullParameter(str2, "<unused var>");
        throw new ir.q("onTapMention not implemented");
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit MARKDOWN_HANDLERS$lambda$9(CommandMentionContentNode it) {
        Intrinsics.checkNotNullParameter(it, "it");
        throw new ir.q("onTapCommand not implemented");
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit MEDIA_HANDLERS$lambda$16(View view, String str, int i10, Double d10) {
        Intrinsics.checkNotNullParameter(view, "<unused var>");
        Intrinsics.checkNotNullParameter(str, "<unused var>");
        throw new ir.q("onMediaItemClicked not implemented");
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit MEDIA_HANDLERS$lambda$17(String str, Integer num) {
        Intrinsics.checkNotNullParameter(str, "<unused var>");
        throw new ir.q("onMediaItemLongClicked not implemented");
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit MEDIA_HANDLERS$lambda$18() {
        throw new ir.q("onMediaItemSpoilerClicked not implemented");
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit MEDIA_HANDLERS$lambda$19(String str) {
        Intrinsics.checkNotNullParameter(str, "<unused var>");
        throw new ir.q("onMediaItemAltTextButtonClicked not implemented");
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit MEDIA_HANDLERS$lambda$20(boolean z10) {
        throw new ir.q("onMediaItemObscureToggle not implemented");
    }

    @NotNull
    public final ComponentActionEventHandlers getCOMPONENT_HANDLERS() {
        return COMPONENT_HANDLERS;
    }

    @NotNull
    public final GeneralEventHandlers getGENERAL_HANDLERS() {
        return GENERAL_HANDLERS;
    }

    @NotNull
    public final MarkdownTextRenderEventHandlers getMARKDOWN_HANDLERS() {
        return MARKDOWN_HANDLERS;
    }

    @NotNull
    public final MarkdownTextRenderOptions getMARKDOWN_OPTIONS() {
        return MARKDOWN_OPTIONS;
    }

    @NotNull
    public final MediaItemEventHandlers getMEDIA_HANDLERS() {
        return MEDIA_HANDLERS;
    }
}

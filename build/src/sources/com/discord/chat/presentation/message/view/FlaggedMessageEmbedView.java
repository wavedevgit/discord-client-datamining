package com.discord.chat.presentation.message.view;

import android.content.Context;
import android.util.AttributeSet;
import android.view.LayoutInflater;
import android.view.MotionEvent;
import android.view.View;
import android.widget.TextView;
import androidx.constraintlayout.widget.ConstraintLayout;
import com.discord.SetTextSizeSpKt;
import com.discord.chat.R;
import com.discord.chat.bridge.Message;
import com.discord.chat.bridge.MessageKt;
import com.discord.chat.bridge.contentnode.CommandMentionContentNode;
import com.discord.chat.bridge.contentnode.EmojiContentNode;
import com.discord.chat.bridge.contentnode.InlineCodeContentNode;
import com.discord.chat.bridge.contentnode.LinkContentNode;
import com.discord.chat.bridge.contentnode.SoundmojiContentNode;
import com.discord.chat.bridge.structurabletext.StructurableText;
import com.discord.chat.databinding.FlaggedMessageEmbedViewBinding;
import com.discord.chat.presentation.events.ChatEventHandler;
import com.discord.chat.presentation.message.ConnectionsRoleTagView;
import com.discord.chat.presentation.message.RoleIconView;
import com.discord.chat.presentation.message.messagepart.MessageMargins;
import com.discord.chat.presentation.textutils.LinkStyle;
import com.discord.fonts.DiscordFont;
import com.discord.fonts.DiscordFontUtilsKt;
import com.discord.misc.utilities.size.SizeUtilsKt;
import com.discord.misc.utilities.view.ViewClippingUtilsKt;
import com.discord.primitives.ChannelId;
import com.discord.primitives.MessageId;
import com.discord.react.FontManager;
import com.discord.react_asset_fetcher.ReactAsset;
import com.discord.react_asset_fetcher.ReactAssetUtilsKt;
import com.discord.react_gesture_handler.nested_touch.NestedScrollOnTouchUtilsKt;
import com.discord.recycler_view.decorations.VerticalSpacingItemDecoration;
import com.discord.ripple.RippleUtilsKt;
import com.discord.theme.ThemeManagerKt;
import com.facebook.drawee.view.SimpleDraweeView;
import kotlin.Metadata;
import kotlin.Unit;
import kotlin.jvm.functions.Function0;
import kotlin.jvm.functions.Function1;
import kotlin.jvm.functions.Function2;
import kotlin.jvm.functions.Function3;
import kotlin.jvm.functions.Function4;
import kotlin.jvm.internal.DefaultConstructorMarker;
import kotlin.jvm.internal.Intrinsics;
import kotlin.jvm.internal.SourceDebugExtension;
import org.jetbrains.annotations.NotNull;
@Metadata(d1 = {"\u0000R\n\u0002\u0018\u0002\n\u0002\u0018\u0002\n\u0002\u0018\u0002\n\u0000\n\u0002\u0018\u0002\n\u0000\n\u0002\u0018\u0002\n\u0002\b\u0003\n\u0002\u0018\u0002\n\u0000\n\u0002\u0010\u000b\n\u0002\b\u0002\n\u0002\u0018\u0002\n\u0000\n\u0002\u0010\u0002\n\u0000\n\u0002\u0018\u0002\n\u0000\n\u0002\u0018\u0002\n\u0000\n\u0002\u0018\u0002\n\u0002\b\u0005\n\u0002\u0010\b\n\u0002\b\u0002\u0018\u00002\u00020\u00012\u00020\u0002B\u001d\b\u0007\u0012\u0006\u0010\u0003\u001a\u00020\u0004\u0012\n\b\u0002\u0010\u0005\u001a\u0004\u0018\u00010\u0006¢\u0006\u0004\b\u0007\u0010\bJ\u0010\u0010\r\u001a\u00020\f2\u0006\u0010\u000e\u001a\u00020\u000fH\u0016J*\u0010\u0010\u001a\u00020\u00112\u0006\u0010\u0012\u001a\u00020\u00132\u0006\u0010\u0014\u001a\u00020\u00152\b\b\u0002\u0010\u0016\u001a\u00020\u00172\b\b\u0002\u0010\u000b\u001a\u00020\fJ\u0018\u0010\u0018\u001a\u00020\u00112\u0006\u0010\u0012\u001a\u00020\u00132\u0006\u0010\u0014\u001a\u00020\u0015H\u0002J\u0018\u0010\u0019\u001a\u00020\u00112\u0006\u0010\u0014\u001a\u00020\u00152\u0006\u0010\u0016\u001a\u00020\u0017H\u0002J\u0010\u0010\u001a\u001a\u00020\u00112\u0006\u0010\u001b\u001a\u00020\fH\u0002J\r\u0010\u001c\u001a\u00020\u001dH\u0016¢\u0006\u0002\u0010\u001eR\u000e\u0010\t\u001a\u00020\nX\u0082\u0004¢\u0006\u0002\n\u0000R\u000e\u0010\u000b\u001a\u00020\fX\u0082\u000e¢\u0006\u0002\n\u0000¨\u0006\u001f"}, d2 = {"Lcom/discord/chat/presentation/message/view/FlaggedMessageEmbedView;", "Landroidx/constraintlayout/widget/ConstraintLayout;", "Lcom/discord/recycler_view/decorations/VerticalSpacingItemDecoration$SpacingProviderView;", "context", "Landroid/content/Context;", "attrs", "Landroid/util/AttributeSet;", "<init>", "(Landroid/content/Context;Landroid/util/AttributeSet;)V", "binding", "Lcom/discord/chat/databinding/FlaggedMessageEmbedViewBinding;", "allowChildGestures", "", "onInterceptTouchEvent", "ev", "Landroid/view/MotionEvent;", "setMessage", "", "margins", "Lcom/discord/chat/presentation/message/messagepart/MessageMargins;", "message", "Lcom/discord/chat/bridge/Message;", "eventHandler", "Lcom/discord/chat/presentation/events/ChatEventHandler;", "configureMessageContent", "configureAuthor", "configureCommunicationDisabled", "isCommunicationDisabled", "spacingPxOverride", "", "()Ljava/lang/Integer;", "chat_release"}, k = 1, mv = {2, 1, 0}, xi = 48)
@SourceDebugExtension({"SMAP\nFlaggedMessageEmbedView.kt\nKotlin\n*S Kotlin\n*F\n+ 1 FlaggedMessageEmbedView.kt\ncom/discord/chat/presentation/message/view/FlaggedMessageEmbedView\n+ 2 View.kt\nandroidx/core/view/ViewKt\n*L\n1#1,206:1\n176#2,2:207\n257#2,2:209\n257#2,2:211\n257#2,2:213\n257#2,2:215\n257#2,2:217\n*S KotlinDebug\n*F\n+ 1 FlaggedMessageEmbedView.kt\ncom/discord/chat/presentation/message/view/FlaggedMessageEmbedView\n*L\n52#1:207,2\n96#1:209,2\n137#1:211,2\n174#1:213,2\n181#1:215,2\n197#1:217,2\n*E\n"})
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public final class FlaggedMessageEmbedView extends ConstraintLayout implements VerticalSpacingItemDecoration.SpacingProviderView {
    private boolean allowChildGestures;
    @NotNull
    private final FlaggedMessageEmbedViewBinding binding;

    /* JADX WARN: 'this' call moved to the top of the method (can break code semantics) */
    public FlaggedMessageEmbedView(@NotNull Context context) {
        this(context, null, 2, null);
        Intrinsics.checkNotNullParameter(context, "context");
    }

    private final void configureAuthor(final Message message, final ChatEventHandler chatEventHandler) {
        boolean z10;
        int i10;
        SimpleDraweeView simpleDraweeView = this.binding.authorAvatar;
        Context context = simpleDraweeView.getContext();
        Intrinsics.checkNotNullExpressionValue(context, "getContext(...)");
        simpleDraweeView.setImageURI(MessageKt.avatarUrl(message, context));
        Intrinsics.checkNotNull(simpleDraweeView);
        int i11 = 0;
        boolean z11 = true;
        NestedScrollOnTouchUtilsKt.setOnClickListenerNested$default(simpleDraweeView, false, new View.OnClickListener() { // from class: com.discord.chat.presentation.message.view.z0
            @Override // android.view.View.OnClickListener
            public final void onClick(View view) {
                FlaggedMessageEmbedView.configureAuthor$lambda$22$lambda$20(Message.this, chatEventHandler, view);
            }
        }, 1, null);
        NestedScrollOnTouchUtilsKt.setOnLongClickListenerNested$default(simpleDraweeView, false, new View.OnLongClickListener() { // from class: com.discord.chat.presentation.message.view.i1
            @Override // android.view.View.OnLongClickListener
            public final boolean onLongClick(View view) {
                boolean configureAuthor$lambda$22$lambda$21;
                configureAuthor$lambda$22$lambda$21 = FlaggedMessageEmbedView.configureAuthor$lambda$22$lambda$21(Message.this, chatEventHandler, view);
                return configureAuthor$lambda$22$lambda$21;
            }
        }, 1, null);
        TextView textView = this.binding.authorName;
        textView.setTextColor(MessageKt.usernameColor$default(message, 0, 1, null));
        textView.setText(message.getUsername());
        Intrinsics.checkNotNull(textView);
        NestedScrollOnTouchUtilsKt.setOnClickListenerNested$default(textView, false, new View.OnClickListener() { // from class: com.discord.chat.presentation.message.view.j1
            @Override // android.view.View.OnClickListener
            public final void onClick(View view) {
                FlaggedMessageEmbedView.configureAuthor$lambda$24$lambda$23(Message.this, chatEventHandler, view);
            }
        }, 1, null);
        RoleIconView roleIconView = this.binding.roleIcon;
        Intrinsics.checkNotNull(roleIconView);
        if (message.getRoleIcon() != null) {
            z10 = true;
        } else {
            z10 = false;
        }
        if (z10) {
            i10 = 0;
        } else {
            i10 = 8;
        }
        roleIconView.setVisibility(i10);
        if (message.getRoleIcon() != null) {
            roleIconView.configureRoleIcon(message.getRoleIcon(), chatEventHandler);
        }
        ConnectionsRoleTagView connectionsRoleTagView = this.binding.connectionsRoleTag;
        Intrinsics.checkNotNull(connectionsRoleTagView);
        if (message.getConnectionsRoleTag() == null) {
            z11 = false;
        }
        if (!z11) {
            i11 = 8;
        }
        connectionsRoleTagView.setVisibility(i11);
        if (message.getConnectionsRoleTag() != null) {
            connectionsRoleTagView.m503configureConnectionsRoleTaguESh2Cg(message.m233getAuthorIdwUX8bhU(), message.m236getGuildIdqOKuAAo(), ChannelId.m1057boximpl(message.m234getChannelIdo4g7jtM()), message.getConnectionsRoleTag(), chatEventHandler);
        }
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final void configureAuthor$lambda$22$lambda$20(Message message, ChatEventHandler chatEventHandler, View view) {
        if (message.m233getAuthorIdwUX8bhU() != null) {
            chatEventHandler.mo448onTapAvatarx5gers8(message.m237getId3Eiw7ao(), message.m233getAuthorIdwUX8bhU().m1144unboximpl());
        }
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final boolean configureAuthor$lambda$22$lambda$21(Message message, ChatEventHandler chatEventHandler, View view) {
        if (message.m233getAuthorIdwUX8bhU() != null) {
            chatEventHandler.mo439onLongPressAvatarx5gers8(message.m237getId3Eiw7ao(), message.m233getAuthorIdwUX8bhU().m1144unboximpl());
            return true;
        }
        return true;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final void configureAuthor$lambda$24$lambda$23(Message message, ChatEventHandler chatEventHandler, View view) {
        if (message.m233getAuthorIdwUX8bhU() != null) {
            chatEventHandler.mo442onLongPressUsernamex5gers8(message.m237getId3Eiw7ao(), message.m233getAuthorIdwUX8bhU().m1144unboximpl());
        }
    }

    private final void configureCommunicationDisabled(boolean z10) {
        int i10;
        float f10;
        float f11;
        SimpleDraweeView guildCommunicationDisabledIcon = this.binding.guildCommunicationDisabledIcon;
        Intrinsics.checkNotNullExpressionValue(guildCommunicationDisabledIcon, "guildCommunicationDisabledIcon");
        if (z10) {
            i10 = 0;
        } else {
            i10 = 8;
        }
        guildCommunicationDisabledIcon.setVisibility(i10);
        SimpleDraweeView guildCommunicationDisabledIcon2 = this.binding.guildCommunicationDisabledIcon;
        Intrinsics.checkNotNullExpressionValue(guildCommunicationDisabledIcon2, "guildCommunicationDisabledIcon");
        ReactAssetUtilsKt.setReactAsset(guildCommunicationDisabledIcon2, ReactAsset.ClockTimeout);
        SimpleDraweeView simpleDraweeView = this.binding.authorAvatar;
        float f12 = 1.0f;
        if (z10) {
            f10 = 0.5f;
        } else {
            f10 = 1.0f;
        }
        simpleDraweeView.setAlpha(f10);
        RoleIconView roleIconView = this.binding.roleIcon;
        if (z10) {
            f11 = 0.5f;
        } else {
            f11 = 1.0f;
        }
        roleIconView.setAlpha(f11);
        ConnectionsRoleTagView connectionsRoleTagView = this.binding.connectionsRoleTag;
        if (z10) {
            f12 = 0.5f;
        }
        connectionsRoleTagView.setAlpha(f12);
    }

    private final void configureMessageContent(MessageMargins messageMargins, Message message) {
        int i10;
        boolean z10;
        int i11;
        boolean z11;
        boolean z12;
        int i12;
        MessageContentView messageContentView = this.binding.contentView;
        Integer constrainedWidth = message.getConstrainedWidth();
        if (constrainedWidth != null) {
            i10 = constrainedWidth.intValue();
        } else {
            i10 = messageContentView.getResources().getDisplayMetrics().widthPixels;
        }
        int i13 = i10;
        Intrinsics.checkNotNull(messageContentView);
        StructurableText content = message.getContent();
        if (content != null && content.getHasContent()) {
            z10 = true;
        } else {
            z10 = false;
        }
        if (z10) {
            i11 = 0;
        } else {
            i11 = 8;
        }
        messageContentView.setVisibility(i11);
        StructurableText content2 = message.getContent();
        if (content2 != null && content2.getHasContent()) {
            z11 = true;
            MessageContentView.m698setMessageContent4q5Jro$default(messageContentView, messageMargins, message.getContent(), message.m237getId3Eiw7ao(), MessageKt.shouldAnimateEmoji(message), MessageKt.shouldShowLinkDecorations(message), message.getShouldShowRoleDot(), message.getShouldShowRoleOnName(), new Function1() { // from class: com.discord.chat.presentation.message.view.k1
                @Override // kotlin.jvm.functions.Function1
                public final Object invoke(Object obj) {
                    Unit configureMessageContent$lambda$18$lambda$3;
                    configureMessageContent$lambda$18$lambda$3 = FlaggedMessageEmbedView.configureMessageContent$lambda$18$lambda$3((LinkContentNode) obj);
                    return configureMessageContent$lambda$18$lambda$3;
                }
            }, new Function1() { // from class: com.discord.chat.presentation.message.view.q1
                @Override // kotlin.jvm.functions.Function1
                public final Object invoke(Object obj) {
                    Unit configureMessageContent$lambda$18$lambda$4;
                    configureMessageContent$lambda$18$lambda$4 = FlaggedMessageEmbedView.configureMessageContent$lambda$18$lambda$4((LinkContentNode) obj);
                    return configureMessageContent$lambda$18$lambda$4;
                }
            }, new Function3() { // from class: com.discord.chat.presentation.message.view.a1
                @Override // kotlin.jvm.functions.Function3
                public final Object invoke(Object obj, Object obj2, Object obj3) {
                    Unit configureMessageContent$lambda$18$lambda$5;
                    configureMessageContent$lambda$18$lambda$5 = FlaggedMessageEmbedView.configureMessageContent$lambda$18$lambda$5((String) obj, (String) obj2, (String) obj3);
                    return configureMessageContent$lambda$18$lambda$5;
                }
            }, new Function4() { // from class: com.discord.chat.presentation.message.view.b1
                @Override // kotlin.jvm.functions.Function4
                public final Object invoke(Object obj, Object obj2, Object obj3, Object obj4) {
                    Unit configureMessageContent$lambda$18$lambda$6;
                    configureMessageContent$lambda$18$lambda$6 = FlaggedMessageEmbedView.configureMessageContent$lambda$18$lambda$6((String) obj, (String) obj2, (String) obj3, (String) obj4);
                    return configureMessageContent$lambda$18$lambda$6;
                }
            }, new Function1() { // from class: com.discord.chat.presentation.message.view.c1
                @Override // kotlin.jvm.functions.Function1
                public final Object invoke(Object obj) {
                    Unit configureMessageContent$lambda$18$lambda$7;
                    configureMessageContent$lambda$18$lambda$7 = FlaggedMessageEmbedView.configureMessageContent$lambda$18$lambda$7((String) obj);
                    return configureMessageContent$lambda$18$lambda$7;
                }
            }, new Function2() { // from class: com.discord.chat.presentation.message.view.d1
                @Override // kotlin.jvm.functions.Function2
                public final Object invoke(Object obj, Object obj2) {
                    Unit configureMessageContent$lambda$18$lambda$8;
                    configureMessageContent$lambda$18$lambda$8 = FlaggedMessageEmbedView.configureMessageContent$lambda$18$lambda$8((String) obj, (String) obj2);
                    return configureMessageContent$lambda$18$lambda$8;
                }
            }, new Function4() { // from class: com.discord.chat.presentation.message.view.e1
                @Override // kotlin.jvm.functions.Function4
                public final Object invoke(Object obj, Object obj2, Object obj3, Object obj4) {
                    Unit configureMessageContent$lambda$18$lambda$9;
                    configureMessageContent$lambda$18$lambda$9 = FlaggedMessageEmbedView.configureMessageContent$lambda$18$lambda$9((String) obj, (String) obj2, (String) obj3, (String) obj4);
                    return configureMessageContent$lambda$18$lambda$9;
                }
            }, new Function1() { // from class: com.discord.chat.presentation.message.view.f1
                @Override // kotlin.jvm.functions.Function1
                public final Object invoke(Object obj) {
                    Unit configureMessageContent$lambda$18$lambda$10;
                    configureMessageContent$lambda$18$lambda$10 = FlaggedMessageEmbedView.configureMessageContent$lambda$18$lambda$10((CommandMentionContentNode) obj);
                    return configureMessageContent$lambda$18$lambda$10;
                }
            }, new Function1() { // from class: com.discord.chat.presentation.message.view.g1
                @Override // kotlin.jvm.functions.Function1
                public final Object invoke(Object obj) {
                    Unit configureMessageContent$lambda$18$lambda$11;
                    configureMessageContent$lambda$18$lambda$11 = FlaggedMessageEmbedView.configureMessageContent$lambda$18$lambda$11((CommandMentionContentNode) obj);
                    return configureMessageContent$lambda$18$lambda$11;
                }
            }, new Function0() { // from class: com.discord.chat.presentation.message.view.h1
                @Override // kotlin.jvm.functions.Function0
                public final Object invoke() {
                    Unit unit;
                    unit = Unit.f32008a;
                    return unit;
                }
            }, new Function1() { // from class: com.discord.chat.presentation.message.view.l1
                @Override // kotlin.jvm.functions.Function1
                public final Object invoke(Object obj) {
                    Unit configureMessageContent$lambda$18$lambda$13;
                    configureMessageContent$lambda$18$lambda$13 = FlaggedMessageEmbedView.configureMessageContent$lambda$18$lambda$13((String) obj);
                    return configureMessageContent$lambda$18$lambda$13;
                }
            }, new Function1() { // from class: com.discord.chat.presentation.message.view.m1
                @Override // kotlin.jvm.functions.Function1
                public final Object invoke(Object obj) {
                    Unit configureMessageContent$lambda$18$lambda$14;
                    configureMessageContent$lambda$18$lambda$14 = FlaggedMessageEmbedView.configureMessageContent$lambda$18$lambda$14((InlineCodeContentNode) obj);
                    return configureMessageContent$lambda$18$lambda$14;
                }
            }, new Function1() { // from class: com.discord.chat.presentation.message.view.n1
                @Override // kotlin.jvm.functions.Function1
                public final Object invoke(Object obj) {
                    Unit configureMessageContent$lambda$18$lambda$15;
                    configureMessageContent$lambda$18$lambda$15 = FlaggedMessageEmbedView.configureMessageContent$lambda$18$lambda$15((EmojiContentNode) obj);
                    return configureMessageContent$lambda$18$lambda$15;
                }
            }, new Function1<MessageId, Unit>() { // from class: com.discord.chat.presentation.message.view.FlaggedMessageEmbedView$configureMessageContent$1$14
                @Override // kotlin.jvm.functions.Function1
                public /* bridge */ /* synthetic */ Object invoke(Object obj) {
                    m691invoke1xi1bu0(((MessageId) obj).m1092unboximpl());
                    return Unit.f32008a;
                }

                /* renamed from: invoke-1xi1bu0  reason: not valid java name */
                public final void m691invoke1xi1bu0(String it) {
                    Intrinsics.checkNotNullParameter(it, "it");
                }
            }, new Function1() { // from class: com.discord.chat.presentation.message.view.o1
                @Override // kotlin.jvm.functions.Function1
                public final Object invoke(Object obj) {
                    Unit configureMessageContent$lambda$18$lambda$16;
                    configureMessageContent$lambda$18$lambda$16 = FlaggedMessageEmbedView.configureMessageContent$lambda$18$lambda$16((SoundmojiContentNode) obj);
                    return configureMessageContent$lambda$18$lambda$16;
                }
            }, new Function1() { // from class: com.discord.chat.presentation.message.view.p1
                @Override // kotlin.jvm.functions.Function1
                public final Object invoke(Object obj) {
                    LinkStyle configureMessageContent$lambda$18$lambda$17;
                    configureMessageContent$lambda$18$lambda$17 = FlaggedMessageEmbedView.configureMessageContent$lambda$18$lambda$17((LinkContentNode) obj);
                    return configureMessageContent$lambda$18$lambda$17;
                }
            }, messageContentView.getResources().getDimensionPixelSize(R.dimen.message_accessories_vertical_spacing), i13, false, null, null, null, null, null, false, -67108864, null);
        } else {
            z11 = true;
        }
        FlaggedMessageEmbedFooterView flaggedMessageEmbedFooterView = this.binding.contentFooterView;
        Intrinsics.checkNotNull(flaggedMessageEmbedFooterView);
        if (message.getAutoModerationContext() != null) {
            z12 = z11;
        } else {
            z12 = false;
        }
        if (z12) {
            i12 = 0;
        } else {
            i12 = 8;
        }
        flaggedMessageEmbedFooterView.setVisibility(i12);
        if (message.getAutoModerationContext() != null) {
            flaggedMessageEmbedFooterView.setAutomodContext(message.getAutoModerationContext());
        }
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit configureMessageContent$lambda$18$lambda$10(CommandMentionContentNode it) {
        Intrinsics.checkNotNullParameter(it, "it");
        return Unit.f32008a;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit configureMessageContent$lambda$18$lambda$11(CommandMentionContentNode it) {
        Intrinsics.checkNotNullParameter(it, "it");
        return Unit.f32008a;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit configureMessageContent$lambda$18$lambda$13(String it) {
        Intrinsics.checkNotNullParameter(it, "it");
        return Unit.f32008a;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit configureMessageContent$lambda$18$lambda$14(InlineCodeContentNode it) {
        Intrinsics.checkNotNullParameter(it, "it");
        return Unit.f32008a;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit configureMessageContent$lambda$18$lambda$15(EmojiContentNode it) {
        Intrinsics.checkNotNullParameter(it, "it");
        return Unit.f32008a;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit configureMessageContent$lambda$18$lambda$16(SoundmojiContentNode it) {
        Intrinsics.checkNotNullParameter(it, "it");
        return Unit.f32008a;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final LinkStyle configureMessageContent$lambda$18$lambda$17(LinkContentNode it) {
        Intrinsics.checkNotNullParameter(it, "it");
        return new LinkStyle(DiscordFont.PrimaryNormal, ThemeManagerKt.getTheme().getTextDefault(), null, null, 12, null);
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit configureMessageContent$lambda$18$lambda$3(LinkContentNode linkContentNode) {
        Intrinsics.checkNotNullParameter(linkContentNode, "<unused var>");
        return Unit.f32008a;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit configureMessageContent$lambda$18$lambda$4(LinkContentNode it) {
        Intrinsics.checkNotNullParameter(it, "it");
        return Unit.f32008a;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit configureMessageContent$lambda$18$lambda$5(String str, String str2, String str3) {
        Intrinsics.checkNotNullParameter(str, "<unused var>");
        return Unit.f32008a;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit configureMessageContent$lambda$18$lambda$6(String str, String str2, String str3, String str4) {
        Intrinsics.checkNotNullParameter(str, "<unused var>");
        return Unit.f32008a;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit configureMessageContent$lambda$18$lambda$7(String str) {
        Intrinsics.checkNotNullParameter(str, "<unused var>");
        return Unit.f32008a;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit configureMessageContent$lambda$18$lambda$8(String str, String str2) {
        Intrinsics.checkNotNullParameter(str, "<unused var>");
        Intrinsics.checkNotNullParameter(str2, "<unused var>");
        return Unit.f32008a;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit configureMessageContent$lambda$18$lambda$9(String str, String str2, String str3, String str4) {
        Intrinsics.checkNotNullParameter(str2, "<unused var>");
        return Unit.f32008a;
    }

    public static /* synthetic */ void setMessage$default(FlaggedMessageEmbedView flaggedMessageEmbedView, MessageMargins messageMargins, Message message, ChatEventHandler chatEventHandler, boolean z10, int i10, Object obj) {
        if ((i10 & 4) != 0) {
            chatEventHandler = ChatEventHandler.Empty.INSTANCE;
        }
        if ((i10 & 8) != 0) {
            z10 = true;
        }
        flaggedMessageEmbedView.setMessage(messageMargins, message, chatEventHandler, z10);
    }

    @Override // android.view.ViewGroup
    public boolean onInterceptTouchEvent(@NotNull MotionEvent ev2) {
        Intrinsics.checkNotNullParameter(ev2, "ev");
        return !this.allowChildGestures;
    }

    public final void setMessage(@NotNull MessageMargins margins, @NotNull Message message, @NotNull ChatEventHandler eventHandler, boolean z10) {
        Intrinsics.checkNotNullParameter(margins, "margins");
        Intrinsics.checkNotNullParameter(message, "message");
        Intrinsics.checkNotNullParameter(eventHandler, "eventHandler");
        this.allowChildGestures = z10;
        configureAuthor(message, eventHandler);
        configureCommunicationDisabled(Intrinsics.areEqual(message.getCommunicationDisabled(), Boolean.TRUE));
        configureMessageContent(margins, message);
    }

    @Override // com.discord.recycler_view.decorations.VerticalSpacingItemDecoration.SpacingProviderView
    @NotNull
    public Integer spacingPxOverride() {
        return Integer.valueOf(SizeUtilsKt.getDpToPx(4));
    }

    public /* synthetic */ FlaggedMessageEmbedView(Context context, AttributeSet attributeSet, int i10, DefaultConstructorMarker defaultConstructorMarker) {
        this(context, (i10 & 2) != 0 ? null : attributeSet);
    }

    /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
    public FlaggedMessageEmbedView(@NotNull Context context, AttributeSet attributeSet) {
        super(context, attributeSet);
        Intrinsics.checkNotNullParameter(context, "context");
        FlaggedMessageEmbedViewBinding inflate = FlaggedMessageEmbedViewBinding.inflate(LayoutInflater.from(context), this);
        Intrinsics.checkNotNullExpressionValue(inflate, "inflate(...)");
        this.binding = inflate;
        this.allowChildGestures = true;
        RippleUtilsKt.addRipple$default(this, false, SizeUtilsKt.getDpToPx(8), 1, null);
        View root = inflate.getRoot();
        root.setBackgroundColor(ThemeManagerKt.getTheme().getBackgroundSurfaceHigh());
        Intrinsics.checkNotNull(root);
        ViewClippingUtilsKt.clipToRoundedRectangle(root, SizeUtilsKt.getDpToPx(8));
        int dpToPx = SizeUtilsKt.getDpToPx(12);
        root.setPadding(dpToPx, dpToPx, dpToPx, dpToPx);
        TextView textView = inflate.authorName;
        Intrinsics.checkNotNull(textView);
        DiscordFontUtilsKt.setDiscordFont(textView, DiscordFont.PrimarySemibold);
        SetTextSizeSpKt.setTextSizeSp(textView, 16.0f, 20.0f);
        textView.setLineSpacing(0.0f, 1.05f);
        SimpleDraweeView authorAvatar = inflate.authorAvatar;
        Intrinsics.checkNotNullExpressionValue(authorAvatar, "authorAvatar");
        ViewClippingUtilsKt.clipToCircle(authorAvatar);
        MessageContentView messageContentView = inflate.contentView;
        messageContentView.setTextColor(ThemeManagerKt.getTheme().getTextDefault());
        Intrinsics.checkNotNull(messageContentView);
        DiscordFontUtilsKt.setDiscordFont(messageContentView, DiscordFont.PrimaryMedium);
        SetTextSizeSpKt.setTextSizeSp(messageContentView, FontManager.INSTANCE.getIsClassicChatFontScaleEnabled(context) ? 14.0f : 16.0f);
    }
}

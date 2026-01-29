package com.discord.chat.presentation.message.viewholder;

import android.view.View;
import com.discord.chat.bridge.postpreviewembed.PostPreviewEmbed;
import com.discord.chat.bridge.spoiler.SpoilerConfig;
import com.discord.chat.bridge.structurabletext.StructurableText;
import com.discord.chat.presentation.message.view.PostPreviewEmbedView;
import com.discord.primitives.ChannelId;
import com.discord.primitives.GuildId;
import com.discord.primitives.MessageId;
import kotlin.Metadata;
import kotlin.jvm.functions.Function4;
import kotlin.jvm.internal.Intrinsics;
import org.jetbrains.annotations.NotNull;
@Metadata(d1 = {"\u00006\n\u0002\u0018\u0002\n\u0002\u0018\u0002\n\u0000\n\u0002\u0018\u0002\n\u0002\b\u0003\n\u0002\u0010\u0002\n\u0000\n\u0002\u0018\u0002\n\u0000\n\u0002\u0018\u0002\n\u0002\u0018\u0002\n\u0002\u0018\u0002\n\u0002\u0018\u0002\n\u0000\n\u0002\u0018\u0002\n\u0000\u0018\u00002\u00020\u0001B\u000f\u0012\u0006\u0010\u0002\u001a\u00020\u0003¢\u0006\u0004\b\u0004\u0010\u0005J>\u0010\u0006\u001a\u00020\u00072\u0006\u0010\b\u001a\u00020\t2$\u0010\n\u001a \u0012\u0004\u0012\u00020\f\u0012\u0004\u0012\u00020\r\u0012\u0004\u0012\u00020\r\u0012\u0004\u0012\u00020\u000e\u0012\u0004\u0012\u00020\u00070\u000b2\b\u0010\u000f\u001a\u0004\u0018\u00010\u0010R\u000e\u0010\u0002\u001a\u00020\u0003X\u0082\u0004¢\u0006\u0002\n\u0000¨\u0006\u0011"}, d2 = {"Lcom/discord/chat/presentation/message/viewholder/PostPreviewEmbedViewHolder;", "Lcom/discord/chat/presentation/message/viewholder/MessagePartViewHolder;", "postPreviewEmbedView", "Lcom/discord/chat/presentation/message/view/PostPreviewEmbedView;", "<init>", "(Lcom/discord/chat/presentation/message/view/PostPreviewEmbedView;)V", "bind", "", "postPreviewEmbed", "Lcom/discord/chat/bridge/postpreviewembed/PostPreviewEmbed;", "onTapPostPreviewEmbed", "Lkotlin/Function4;", "Lcom/discord/primitives/GuildId;", "Lcom/discord/primitives/ChannelId;", "Lcom/discord/primitives/MessageId;", "spoilerConfig", "Lcom/discord/chat/bridge/spoiler/SpoilerConfig;", "chat_release"}, k = 1, mv = {2, 1, 0}, xi = 48)
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public final class PostPreviewEmbedViewHolder extends MessagePartViewHolder {
    @NotNull
    private final PostPreviewEmbedView postPreviewEmbedView;

    /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
    public PostPreviewEmbedViewHolder(@NotNull PostPreviewEmbedView postPreviewEmbedView) {
        super(postPreviewEmbedView, null);
        Intrinsics.checkNotNullParameter(postPreviewEmbedView, "postPreviewEmbedView");
        this.postPreviewEmbedView = postPreviewEmbedView;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final void bind$lambda$0(Function4 function4, PostPreviewEmbed postPreviewEmbed, View view) {
        function4.invoke(GuildId.m1071boximpl(postPreviewEmbed.m402getGuildIdfYKD8eg()), ChannelId.m1058boximpl(postPreviewEmbed.m404getParentChannelIdo4g7jtM()), ChannelId.m1058boximpl(postPreviewEmbed.m405getThreadIdo4g7jtM()), MessageId.m1084boximpl(postPreviewEmbed.m403getMessageId3Eiw7ao()));
    }

    public final void bind(@NotNull final PostPreviewEmbed postPreviewEmbed, @NotNull final Function4 onTapPostPreviewEmbed, SpoilerConfig spoilerConfig) {
        boolean z10;
        boolean z11;
        Intrinsics.checkNotNullParameter(postPreviewEmbed, "postPreviewEmbed");
        Intrinsics.checkNotNullParameter(onTapPostPreviewEmbed, "onTapPostPreviewEmbed");
        PostPreviewEmbedView postPreviewEmbedView = this.postPreviewEmbedView;
        String title = postPreviewEmbed.getTitle();
        String subtitle = postPreviewEmbed.getSubtitle();
        String ctaText = postPreviewEmbed.getCtaText();
        int ctaButtonColor = postPreviewEmbed.getCtaButtonColor();
        String coverImage = postPreviewEmbed.getCoverImage();
        String blurredCoverImage = postPreviewEmbed.getBlurredCoverImage();
        String m403getMessageId3Eiw7ao = postPreviewEmbed.m403getMessageId3Eiw7ao();
        StructurableText footer = postPreviewEmbed.getFooter();
        String coverImageOverlayText = postPreviewEmbed.getCoverImageOverlayText();
        String backgroundImage = postPreviewEmbed.getBackgroundImage();
        View.OnClickListener onClickListener = new View.OnClickListener() { // from class: com.discord.chat.presentation.message.viewholder.g0
            @Override // android.view.View.OnClickListener
            public final void onClick(View view) {
                PostPreviewEmbedViewHolder.bind$lambda$0(Function4.this, postPreviewEmbed, view);
            }
        };
        boolean shouldSpoiler = postPreviewEmbed.getShouldSpoiler();
        Boolean obscureAwaitingScan = postPreviewEmbed.getObscureAwaitingScan();
        boolean z12 = false;
        if (obscureAwaitingScan != null) {
            z10 = obscureAwaitingScan.booleanValue();
        } else {
            z10 = false;
        }
        Boolean obscureHideControls = postPreviewEmbed.getObscureHideControls();
        if (obscureHideControls != null) {
            z11 = obscureHideControls.booleanValue();
        } else {
            z11 = false;
        }
        Boolean obscureIsOpaque = postPreviewEmbed.getObscureIsOpaque();
        if (obscureIsOpaque != null) {
            z12 = obscureIsOpaque.booleanValue();
        }
        postPreviewEmbedView.m703setPostPreviewEmbed4itWklQ(title, subtitle, ctaText, ctaButtonColor, footer, m403getMessageId3Eiw7ao, coverImage, blurredCoverImage, coverImageOverlayText, backgroundImage, onClickListener, shouldSpoiler, z10, z11, z12, spoilerConfig);
    }
}

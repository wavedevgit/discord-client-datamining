package com.discord.chat.presentation.message.view.botuikit;

import androidx.recyclerview.widget.RecyclerView;
import com.discord.chat.presentation.message.messagepart.MessageMargins;
import com.facebook.react.fabric.mounting.mountitems.IntBufferBatchMountItem;
import kotlin.Metadata;
import kotlin.jvm.internal.Intrinsics;
import org.jetbrains.annotations.NotNull;
@Metadata(d1 = {"\u0000J\n\u0002\u0018\u0002\n\u0002\u0010\u0000\n\u0000\n\u0002\u0018\u0002\n\u0000\n\u0002\u0010\u000e\n\u0000\n\u0002\u0018\u0002\n\u0000\n\u0002\u0018\u0002\n\u0000\n\u0002\u0018\u0002\n\u0000\n\u0002\u0018\u0002\n\u0000\n\u0002\u0018\u0002\n\u0000\n\u0002\u0018\u0002\n\u0000\n\u0002\u0010\u000b\n\u0002\b\u0019\n\u0002\u0010\b\n\u0002\b\u0012\b\u0086\b\u0018\u00002\u00020\u0001Bg\u0012\u0006\u0010\u0002\u001a\u00020\u0003\u0012\u0006\u0010\u0004\u001a\u00020\u0005\u0012\u0006\u0010\u0006\u001a\u00020\u0007\u0012\u0006\u0010\b\u001a\u00020\t\u0012\u0006\u0010\n\u001a\u00020\u000b\u0012\u0006\u0010\f\u001a\u00020\r\u0012\u0006\u0010\u000e\u001a\u00020\u000f\u0012\u0006\u0010\u0010\u001a\u00020\u0011\u0012\u0006\u0010\u0012\u001a\u00020\u0013\u0012\u0006\u0010\u0014\u001a\u00020\u0013\u0012\u0006\u0010\u0015\u001a\u00020\u0013\u0012\u0006\u0010\u0016\u001a\u00020\u0013¢\u0006\u0004\b\u0017\u0010\u0018J\u000e\u0010+\u001a\u00020\u00002\u0006\u0010,\u001a\u00020-J\t\u0010.\u001a\u00020\u0003HÆ\u0003J\t\u0010/\u001a\u00020\u0005HÆ\u0003J\t\u00100\u001a\u00020\u0007HÆ\u0003J\t\u00101\u001a\u00020\tHÆ\u0003J\t\u00102\u001a\u00020\u000bHÆ\u0003J\t\u00103\u001a\u00020\rHÆ\u0003J\t\u00104\u001a\u00020\u000fHÆ\u0003J\t\u00105\u001a\u00020\u0011HÆ\u0003J\t\u00106\u001a\u00020\u0013HÆ\u0003J\t\u00107\u001a\u00020\u0013HÆ\u0003J\t\u00108\u001a\u00020\u0013HÆ\u0003J\t\u00109\u001a\u00020\u0013HÆ\u0003J\u0081\u0001\u0010:\u001a\u00020\u00002\b\b\u0002\u0010\u0002\u001a\u00020\u00032\b\b\u0002\u0010\u0004\u001a\u00020\u00052\b\b\u0002\u0010\u0006\u001a\u00020\u00072\b\b\u0002\u0010\b\u001a\u00020\t2\b\b\u0002\u0010\n\u001a\u00020\u000b2\b\b\u0002\u0010\f\u001a\u00020\r2\b\b\u0002\u0010\u000e\u001a\u00020\u000f2\b\b\u0002\u0010\u0010\u001a\u00020\u00112\b\b\u0002\u0010\u0012\u001a\u00020\u00132\b\b\u0002\u0010\u0014\u001a\u00020\u00132\b\b\u0002\u0010\u0015\u001a\u00020\u00132\b\b\u0002\u0010\u0016\u001a\u00020\u0013HÆ\u0001J\u0013\u0010;\u001a\u00020\u00132\b\u0010<\u001a\u0004\u0018\u00010\u0001HÖ\u0003J\t\u0010=\u001a\u00020-HÖ\u0001J\t\u0010>\u001a\u00020\u0005HÖ\u0001R\u0011\u0010\u0002\u001a\u00020\u0003¢\u0006\b\n\u0000\u001a\u0004\b\u0019\u0010\u001aR\u0011\u0010\u0004\u001a\u00020\u0005¢\u0006\b\n\u0000\u001a\u0004\b\u001b\u0010\u001cR\u0011\u0010\u0006\u001a\u00020\u0007¢\u0006\b\n\u0000\u001a\u0004\b\u001d\u0010\u001eR\u0011\u0010\b\u001a\u00020\t¢\u0006\b\n\u0000\u001a\u0004\b\u001f\u0010 R\u0011\u0010\n\u001a\u00020\u000b¢\u0006\b\n\u0000\u001a\u0004\b!\u0010\"R\u0011\u0010\f\u001a\u00020\r¢\u0006\b\n\u0000\u001a\u0004\b#\u0010$R\u0011\u0010\u000e\u001a\u00020\u000f¢\u0006\b\n\u0000\u001a\u0004\b%\u0010&R\u0011\u0010\u0010\u001a\u00020\u0011¢\u0006\b\n\u0000\u001a\u0004\b'\u0010(R\u0011\u0010\u0012\u001a\u00020\u0013¢\u0006\b\n\u0000\u001a\u0004\b)\u0010*R\u0011\u0010\u0014\u001a\u00020\u0013¢\u0006\b\n\u0000\u001a\u0004\b\u0014\u0010*R\u0011\u0010\u0015\u001a\u00020\u0013¢\u0006\b\n\u0000\u001a\u0004\b\u0015\u0010*R\u0011\u0010\u0016\u001a\u00020\u0013¢\u0006\b\n\u0000\u001a\u0004\b\u0016\u0010*¨\u0006?"}, d2 = {"Lcom/discord/chat/presentation/message/view/botuikit/ComponentContext;", "", "margins", "Lcom/discord/chat/presentation/message/messagepart/MessageMargins;", "containerId", "", "generalEventHandlers", "Lcom/discord/chat/presentation/message/view/botuikit/GeneralEventHandlers;", "markdownTextRenderOptions", "Lcom/discord/chat/presentation/message/view/botuikit/MarkdownTextRenderOptions;", "markdownTextRenderEventHandlers", "Lcom/discord/chat/presentation/message/view/botuikit/MarkdownTextRenderEventHandlers;", "mediaItemEventHandlers", "Lcom/discord/chat/presentation/message/view/botuikit/MediaItemEventHandlers;", "componentActionEventHandlers", "Lcom/discord/chat/presentation/message/view/botuikit/ComponentActionEventHandlers;", "widthInfo", "Lcom/discord/chat/presentation/message/view/botuikit/WidthInfo;", "shouldAutoPlayGif", "", "isForwardedContent", "isInContainerComponent", "isInModal", "<init>", "(Lcom/discord/chat/presentation/message/messagepart/MessageMargins;Ljava/lang/String;Lcom/discord/chat/presentation/message/view/botuikit/GeneralEventHandlers;Lcom/discord/chat/presentation/message/view/botuikit/MarkdownTextRenderOptions;Lcom/discord/chat/presentation/message/view/botuikit/MarkdownTextRenderEventHandlers;Lcom/discord/chat/presentation/message/view/botuikit/MediaItemEventHandlers;Lcom/discord/chat/presentation/message/view/botuikit/ComponentActionEventHandlers;Lcom/discord/chat/presentation/message/view/botuikit/WidthInfo;ZZZZ)V", "getMargins", "()Lcom/discord/chat/presentation/message/messagepart/MessageMargins;", "getContainerId", "()Ljava/lang/String;", "getGeneralEventHandlers", "()Lcom/discord/chat/presentation/message/view/botuikit/GeneralEventHandlers;", "getMarkdownTextRenderOptions", "()Lcom/discord/chat/presentation/message/view/botuikit/MarkdownTextRenderOptions;", "getMarkdownTextRenderEventHandlers", "()Lcom/discord/chat/presentation/message/view/botuikit/MarkdownTextRenderEventHandlers;", "getMediaItemEventHandlers", "()Lcom/discord/chat/presentation/message/view/botuikit/MediaItemEventHandlers;", "getComponentActionEventHandlers", "()Lcom/discord/chat/presentation/message/view/botuikit/ComponentActionEventHandlers;", "getWidthInfo", "()Lcom/discord/chat/presentation/message/view/botuikit/WidthInfo;", "getShouldAutoPlayGif", "()Z", "reduceAvailableWidth", "widthReduction", "", "component1", "component2", "component3", "component4", "component5", "component6", "component7", "component8", "component9", "component10", "component11", "component12", "copy", "equals", "other", "hashCode", "toString", "chat_release"}, k = 1, mv = {2, 1, 0}, xi = 48)
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public final class ComponentContext {
    @NotNull
    private final ComponentActionEventHandlers componentActionEventHandlers;
    @NotNull
    private final String containerId;
    @NotNull
    private final GeneralEventHandlers generalEventHandlers;
    private final boolean isForwardedContent;
    private final boolean isInContainerComponent;
    private final boolean isInModal;
    @NotNull
    private final MessageMargins margins;
    @NotNull
    private final MarkdownTextRenderEventHandlers markdownTextRenderEventHandlers;
    @NotNull
    private final MarkdownTextRenderOptions markdownTextRenderOptions;
    @NotNull
    private final MediaItemEventHandlers mediaItemEventHandlers;
    private final boolean shouldAutoPlayGif;
    @NotNull
    private final WidthInfo widthInfo;

    public ComponentContext(@NotNull MessageMargins margins, @NotNull String containerId, @NotNull GeneralEventHandlers generalEventHandlers, @NotNull MarkdownTextRenderOptions markdownTextRenderOptions, @NotNull MarkdownTextRenderEventHandlers markdownTextRenderEventHandlers, @NotNull MediaItemEventHandlers mediaItemEventHandlers, @NotNull ComponentActionEventHandlers componentActionEventHandlers, @NotNull WidthInfo widthInfo, boolean z10, boolean z11, boolean z12, boolean z13) {
        Intrinsics.checkNotNullParameter(margins, "margins");
        Intrinsics.checkNotNullParameter(containerId, "containerId");
        Intrinsics.checkNotNullParameter(generalEventHandlers, "generalEventHandlers");
        Intrinsics.checkNotNullParameter(markdownTextRenderOptions, "markdownTextRenderOptions");
        Intrinsics.checkNotNullParameter(markdownTextRenderEventHandlers, "markdownTextRenderEventHandlers");
        Intrinsics.checkNotNullParameter(mediaItemEventHandlers, "mediaItemEventHandlers");
        Intrinsics.checkNotNullParameter(componentActionEventHandlers, "componentActionEventHandlers");
        Intrinsics.checkNotNullParameter(widthInfo, "widthInfo");
        this.margins = margins;
        this.containerId = containerId;
        this.generalEventHandlers = generalEventHandlers;
        this.markdownTextRenderOptions = markdownTextRenderOptions;
        this.markdownTextRenderEventHandlers = markdownTextRenderEventHandlers;
        this.mediaItemEventHandlers = mediaItemEventHandlers;
        this.componentActionEventHandlers = componentActionEventHandlers;
        this.widthInfo = widthInfo;
        this.shouldAutoPlayGif = z10;
        this.isForwardedContent = z11;
        this.isInContainerComponent = z12;
        this.isInModal = z13;
    }

    public static /* synthetic */ ComponentContext copy$default(ComponentContext componentContext, MessageMargins messageMargins, String str, GeneralEventHandlers generalEventHandlers, MarkdownTextRenderOptions markdownTextRenderOptions, MarkdownTextRenderEventHandlers markdownTextRenderEventHandlers, MediaItemEventHandlers mediaItemEventHandlers, ComponentActionEventHandlers componentActionEventHandlers, WidthInfo widthInfo, boolean z10, boolean z11, boolean z12, boolean z13, int i10, Object obj) {
        if ((i10 & 1) != 0) {
            messageMargins = componentContext.margins;
        }
        if ((i10 & 2) != 0) {
            str = componentContext.containerId;
        }
        if ((i10 & 4) != 0) {
            generalEventHandlers = componentContext.generalEventHandlers;
        }
        if ((i10 & 8) != 0) {
            markdownTextRenderOptions = componentContext.markdownTextRenderOptions;
        }
        if ((i10 & 16) != 0) {
            markdownTextRenderEventHandlers = componentContext.markdownTextRenderEventHandlers;
        }
        if ((i10 & 32) != 0) {
            mediaItemEventHandlers = componentContext.mediaItemEventHandlers;
        }
        if ((i10 & 64) != 0) {
            componentActionEventHandlers = componentContext.componentActionEventHandlers;
        }
        if ((i10 & IntBufferBatchMountItem.INSTRUCTION_UPDATE_LAYOUT) != 0) {
            widthInfo = componentContext.widthInfo;
        }
        if ((i10 & IntBufferBatchMountItem.INSTRUCTION_UPDATE_EVENT_EMITTER) != 0) {
            z10 = componentContext.shouldAutoPlayGif;
        }
        if ((i10 & IntBufferBatchMountItem.INSTRUCTION_UPDATE_PADDING) != 0) {
            z11 = componentContext.isForwardedContent;
        }
        if ((i10 & IntBufferBatchMountItem.INSTRUCTION_UPDATE_OVERFLOW_INSET) != 0) {
            z12 = componentContext.isInContainerComponent;
        }
        if ((i10 & RecyclerView.ItemAnimator.FLAG_MOVED) != 0) {
            z13 = componentContext.isInModal;
        }
        boolean z14 = z12;
        boolean z15 = z13;
        boolean z16 = z10;
        boolean z17 = z11;
        ComponentActionEventHandlers componentActionEventHandlers2 = componentActionEventHandlers;
        WidthInfo widthInfo2 = widthInfo;
        MarkdownTextRenderEventHandlers markdownTextRenderEventHandlers2 = markdownTextRenderEventHandlers;
        MediaItemEventHandlers mediaItemEventHandlers2 = mediaItemEventHandlers;
        return componentContext.copy(messageMargins, str, generalEventHandlers, markdownTextRenderOptions, markdownTextRenderEventHandlers2, mediaItemEventHandlers2, componentActionEventHandlers2, widthInfo2, z16, z17, z14, z15);
    }

    @NotNull
    public final MessageMargins component1() {
        return this.margins;
    }

    public final boolean component10() {
        return this.isForwardedContent;
    }

    public final boolean component11() {
        return this.isInContainerComponent;
    }

    public final boolean component12() {
        return this.isInModal;
    }

    @NotNull
    public final String component2() {
        return this.containerId;
    }

    @NotNull
    public final GeneralEventHandlers component3() {
        return this.generalEventHandlers;
    }

    @NotNull
    public final MarkdownTextRenderOptions component4() {
        return this.markdownTextRenderOptions;
    }

    @NotNull
    public final MarkdownTextRenderEventHandlers component5() {
        return this.markdownTextRenderEventHandlers;
    }

    @NotNull
    public final MediaItemEventHandlers component6() {
        return this.mediaItemEventHandlers;
    }

    @NotNull
    public final ComponentActionEventHandlers component7() {
        return this.componentActionEventHandlers;
    }

    @NotNull
    public final WidthInfo component8() {
        return this.widthInfo;
    }

    public final boolean component9() {
        return this.shouldAutoPlayGif;
    }

    @NotNull
    public final ComponentContext copy(@NotNull MessageMargins margins, @NotNull String containerId, @NotNull GeneralEventHandlers generalEventHandlers, @NotNull MarkdownTextRenderOptions markdownTextRenderOptions, @NotNull MarkdownTextRenderEventHandlers markdownTextRenderEventHandlers, @NotNull MediaItemEventHandlers mediaItemEventHandlers, @NotNull ComponentActionEventHandlers componentActionEventHandlers, @NotNull WidthInfo widthInfo, boolean z10, boolean z11, boolean z12, boolean z13) {
        Intrinsics.checkNotNullParameter(margins, "margins");
        Intrinsics.checkNotNullParameter(containerId, "containerId");
        Intrinsics.checkNotNullParameter(generalEventHandlers, "generalEventHandlers");
        Intrinsics.checkNotNullParameter(markdownTextRenderOptions, "markdownTextRenderOptions");
        Intrinsics.checkNotNullParameter(markdownTextRenderEventHandlers, "markdownTextRenderEventHandlers");
        Intrinsics.checkNotNullParameter(mediaItemEventHandlers, "mediaItemEventHandlers");
        Intrinsics.checkNotNullParameter(componentActionEventHandlers, "componentActionEventHandlers");
        Intrinsics.checkNotNullParameter(widthInfo, "widthInfo");
        return new ComponentContext(margins, containerId, generalEventHandlers, markdownTextRenderOptions, markdownTextRenderEventHandlers, mediaItemEventHandlers, componentActionEventHandlers, widthInfo, z10, z11, z12, z13);
    }

    public boolean equals(Object obj) {
        if (this == obj) {
            return true;
        }
        if (obj instanceof ComponentContext) {
            ComponentContext componentContext = (ComponentContext) obj;
            return Intrinsics.areEqual(this.margins, componentContext.margins) && Intrinsics.areEqual(this.containerId, componentContext.containerId) && Intrinsics.areEqual(this.generalEventHandlers, componentContext.generalEventHandlers) && Intrinsics.areEqual(this.markdownTextRenderOptions, componentContext.markdownTextRenderOptions) && Intrinsics.areEqual(this.markdownTextRenderEventHandlers, componentContext.markdownTextRenderEventHandlers) && Intrinsics.areEqual(this.mediaItemEventHandlers, componentContext.mediaItemEventHandlers) && Intrinsics.areEqual(this.componentActionEventHandlers, componentContext.componentActionEventHandlers) && Intrinsics.areEqual(this.widthInfo, componentContext.widthInfo) && this.shouldAutoPlayGif == componentContext.shouldAutoPlayGif && this.isForwardedContent == componentContext.isForwardedContent && this.isInContainerComponent == componentContext.isInContainerComponent && this.isInModal == componentContext.isInModal;
        }
        return false;
    }

    @NotNull
    public final ComponentActionEventHandlers getComponentActionEventHandlers() {
        return this.componentActionEventHandlers;
    }

    @NotNull
    public final String getContainerId() {
        return this.containerId;
    }

    @NotNull
    public final GeneralEventHandlers getGeneralEventHandlers() {
        return this.generalEventHandlers;
    }

    @NotNull
    public final MessageMargins getMargins() {
        return this.margins;
    }

    @NotNull
    public final MarkdownTextRenderEventHandlers getMarkdownTextRenderEventHandlers() {
        return this.markdownTextRenderEventHandlers;
    }

    @NotNull
    public final MarkdownTextRenderOptions getMarkdownTextRenderOptions() {
        return this.markdownTextRenderOptions;
    }

    @NotNull
    public final MediaItemEventHandlers getMediaItemEventHandlers() {
        return this.mediaItemEventHandlers;
    }

    public final boolean getShouldAutoPlayGif() {
        return this.shouldAutoPlayGif;
    }

    @NotNull
    public final WidthInfo getWidthInfo() {
        return this.widthInfo;
    }

    public int hashCode() {
        return (((((((((((((((((((((this.margins.hashCode() * 31) + this.containerId.hashCode()) * 31) + this.generalEventHandlers.hashCode()) * 31) + this.markdownTextRenderOptions.hashCode()) * 31) + this.markdownTextRenderEventHandlers.hashCode()) * 31) + this.mediaItemEventHandlers.hashCode()) * 31) + this.componentActionEventHandlers.hashCode()) * 31) + this.widthInfo.hashCode()) * 31) + Boolean.hashCode(this.shouldAutoPlayGif)) * 31) + Boolean.hashCode(this.isForwardedContent)) * 31) + Boolean.hashCode(this.isInContainerComponent)) * 31) + Boolean.hashCode(this.isInModal);
    }

    public final boolean isForwardedContent() {
        return this.isForwardedContent;
    }

    public final boolean isInContainerComponent() {
        return this.isInContainerComponent;
    }

    public final boolean isInModal() {
        return this.isInModal;
    }

    @NotNull
    public final ComponentContext reduceAvailableWidth(int i10) {
        WidthInfo widthInfo = this.widthInfo;
        return copy$default(this, null, null, null, null, null, null, null, WidthInfo.copy$default(widthInfo, 0, 0, widthInfo.getWidthReductions$chat_release() + i10, 3, null), false, false, false, false, 3967, null);
    }

    @NotNull
    public String toString() {
        MessageMargins messageMargins = this.margins;
        String str = this.containerId;
        GeneralEventHandlers generalEventHandlers = this.generalEventHandlers;
        MarkdownTextRenderOptions markdownTextRenderOptions = this.markdownTextRenderOptions;
        MarkdownTextRenderEventHandlers markdownTextRenderEventHandlers = this.markdownTextRenderEventHandlers;
        MediaItemEventHandlers mediaItemEventHandlers = this.mediaItemEventHandlers;
        ComponentActionEventHandlers componentActionEventHandlers = this.componentActionEventHandlers;
        WidthInfo widthInfo = this.widthInfo;
        boolean z10 = this.shouldAutoPlayGif;
        boolean z11 = this.isForwardedContent;
        boolean z12 = this.isInContainerComponent;
        boolean z13 = this.isInModal;
        return "ComponentContext(margins=" + messageMargins + ", containerId=" + str + ", generalEventHandlers=" + generalEventHandlers + ", markdownTextRenderOptions=" + markdownTextRenderOptions + ", markdownTextRenderEventHandlers=" + markdownTextRenderEventHandlers + ", mediaItemEventHandlers=" + mediaItemEventHandlers + ", componentActionEventHandlers=" + componentActionEventHandlers + ", widthInfo=" + widthInfo + ", shouldAutoPlayGif=" + z10 + ", isForwardedContent=" + z11 + ", isInContainerComponent=" + z12 + ", isInModal=" + z13 + ")";
    }
}

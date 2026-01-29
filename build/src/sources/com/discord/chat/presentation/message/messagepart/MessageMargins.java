package com.discord.chat.presentation.message.messagepart;

import android.content.res.Resources;
import android.view.View;
import com.discord.chat.R;
import com.discord.chat.presentation.message.view.ThreadEmbedView;
import com.discord.chat.presentation.root.MessageContext;
import com.discord.chat.presentation.root.MessageContextType;
import com.discord.misc.utilities.size.SizeUtilsKt;
import com.discord.reactions.ShortcutsFlexbox;
import kotlin.Metadata;
import kotlin.jvm.internal.DefaultConstructorMarker;
import kotlin.jvm.internal.Intrinsics;
import org.jetbrains.annotations.NotNull;
@Metadata(d1 = {"\u00008\n\u0002\u0018\u0002\n\u0002\u0010\u0000\n\u0000\n\u0002\u0010\b\n\u0002\b\u0005\n\u0002\u0018\u0002\n\u0002\b\u0002\n\u0002\u0018\u0002\n\u0000\n\u0002\u0010\u000b\n\u0002\b\u0006\n\u0002\u0018\u0002\n\u0002\b\t\n\u0002\u0010\u000e\n\u0002\b\u0002\b\u0086\b\u0018\u0000  2\u00020\u0001:\u0001 B\u001f\u0012\u0006\u0010\u0002\u001a\u00020\u0003\u0012\u0006\u0010\u0004\u001a\u00020\u0003\u0012\u0006\u0010\u0005\u001a\u00020\u0003¢\u0006\u0004\b\u0006\u0010\u0007B\u0011\b\u0016\u0012\u0006\u0010\b\u001a\u00020\t¢\u0006\u0004\b\u0006\u0010\nB!\b\u0016\u0012\u0006\u0010\b\u001a\u00020\t\u0012\u0006\u0010\u000b\u001a\u00020\f\u0012\u0006\u0010\r\u001a\u00020\u000e¢\u0006\u0004\b\u0006\u0010\u000fJ\u0016\u0010\u0010\u001a\u00020\u00032\u0006\u0010\u0014\u001a\u00020\u00152\u0006\u0010\u0016\u001a\u00020\u000eJ\t\u0010\u0017\u001a\u00020\u0003HÆ\u0003J\t\u0010\u0018\u001a\u00020\u0003HÆ\u0003J\t\u0010\u0019\u001a\u00020\u0003HÆ\u0003J'\u0010\u001a\u001a\u00020\u00002\b\b\u0002\u0010\u0002\u001a\u00020\u00032\b\b\u0002\u0010\u0004\u001a\u00020\u00032\b\b\u0002\u0010\u0005\u001a\u00020\u0003HÆ\u0001J\u0013\u0010\u001b\u001a\u00020\u000e2\b\u0010\u001c\u001a\u0004\u0018\u00010\u0001HÖ\u0003J\t\u0010\u001d\u001a\u00020\u0003HÖ\u0001J\t\u0010\u001e\u001a\u00020\u001fHÖ\u0001R\u0011\u0010\u0002\u001a\u00020\u0003¢\u0006\b\n\u0000\u001a\u0004\b\u0010\u0010\u0011R\u0011\u0010\u0004\u001a\u00020\u0003¢\u0006\b\n\u0000\u001a\u0004\b\u0012\u0010\u0011R\u0011\u0010\u0005\u001a\u00020\u0003¢\u0006\b\n\u0000\u001a\u0004\b\u0013\u0010\u0011¨\u0006!"}, d2 = {"Lcom/discord/chat/presentation/message/messagepart/MessageMargins;", "", "leftMarginPx", "", "rightMarginPx", "embedContentMarginPx", "<init>", "(III)V", "resources", "Landroid/content/res/Resources;", "(Landroid/content/res/Resources;)V", "messageContext", "Lcom/discord/chat/presentation/root/MessageContext;", "renderContentOnly", "", "(Landroid/content/res/Resources;Lcom/discord/chat/presentation/root/MessageContext;Z)V", "getLeftMarginPx", "()I", "getRightMarginPx", "getEmbedContentMarginPx", "view", "Landroid/view/View;", "isForwardedMessage", "component1", "component2", "component3", "copy", "equals", "other", "hashCode", "toString", "", "Companion", "chat_release"}, k = 1, mv = {2, 1, 0}, xi = 48)
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public final class MessageMargins {
    @NotNull
    public static final Companion Companion = new Companion(null);
    private static final int FORWARD_BAR_SPACING;
    private static final int FORWARD_BAR_WIDTH;
    private final int embedContentMarginPx;
    private final int leftMarginPx;
    private final int rightMarginPx;

    @Metadata(d1 = {"\u00000\n\u0002\u0018\u0002\n\u0002\u0010\u0000\n\u0002\b\u0003\n\u0002\u0010\b\n\u0002\b\u0005\n\u0002\u0018\u0002\n\u0002\b\u0004\n\u0002\u0018\u0002\n\u0000\n\u0002\u0010\u000b\n\u0000\n\u0002\u0018\u0002\n\u0002\b\u0004\b\u0086\u0003\u0018\u00002\u00020\u0001B\t\b\u0002¢\u0006\u0004\b\u0002\u0010\u0003J\f\u0010\n\u001a\u00020\u0005*\u00020\u000bH\u0002J\f\u0010\f\u001a\u00020\u0005*\u00020\u000bH\u0002J\f\u0010\r\u001a\u00020\u0005*\u00020\u000bH\u0002J\u001c\u0010\u000e\u001a\u00020\u0005*\u00020\u000b2\u0006\u0010\u000f\u001a\u00020\u00102\u0006\u0010\u0011\u001a\u00020\u0012H\u0002J\u001a\u0010\u0013\u001a\u00020\u0005*\u00020\u00142\u0006\u0010\u0015\u001a\u00020\u00052\u0006\u0010\u0016\u001a\u00020\u0012J\u001a\u0010\u0017\u001a\u00020\u0005*\u00020\u00142\u0006\u0010\u0015\u001a\u00020\u00052\u0006\u0010\u0016\u001a\u00020\u0012R\u0011\u0010\u0004\u001a\u00020\u0005¢\u0006\b\n\u0000\u001a\u0004\b\u0006\u0010\u0007R\u0011\u0010\b\u001a\u00020\u0005¢\u0006\b\n\u0000\u001a\u0004\b\t\u0010\u0007¨\u0006\u0018"}, d2 = {"Lcom/discord/chat/presentation/message/messagepart/MessageMargins$Companion;", "", "<init>", "()V", "FORWARD_BAR_WIDTH", "", "getFORWARD_BAR_WIDTH", "()I", "FORWARD_BAR_SPACING", "getFORWARD_BAR_SPACING", "defaultMarginMessageStart", "Landroid/content/res/Resources;", "defaultMargin", "defaultMarginEmbedContent", "getLeftMargin", "messageContext", "Lcom/discord/chat/presentation/root/MessageContext;", "renderContentOnly", "", "getWidth", "Lcom/discord/chat/presentation/message/messagepart/MessageMargins;", "constrainedWidth", "isForwardedContent", "getWidthForEmbedContent", "chat_release"}, k = 1, mv = {2, 1, 0}, xi = 48)
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    public static final class Companion {
        public /* synthetic */ Companion(DefaultConstructorMarker defaultConstructorMarker) {
            this();
        }

        /* JADX INFO: Access modifiers changed from: private */
        public final int defaultMargin(Resources resources) {
            return resources.getDimensionPixelSize(R.dimen.message_horizontal_spacing);
        }

        /* JADX INFO: Access modifiers changed from: private */
        public final int defaultMarginEmbedContent(Resources resources) {
            return resources.getDimensionPixelSize(R.dimen.message_embed_margin);
        }

        /* JADX INFO: Access modifiers changed from: private */
        public final int defaultMarginMessageStart(Resources resources) {
            return resources.getDimensionPixelSize(R.dimen.message_start_guideline);
        }

        /* JADX INFO: Access modifiers changed from: private */
        public final int getLeftMargin(Resources resources, MessageContext messageContext, boolean z10) {
            if (messageContext.getContextType() == MessageContextType.SEARCH) {
                return 0;
            }
            if (z10) {
                return defaultMargin(resources);
            }
            return defaultMarginMessageStart(resources);
        }

        public final int getFORWARD_BAR_SPACING() {
            return MessageMargins.FORWARD_BAR_SPACING;
        }

        public final int getFORWARD_BAR_WIDTH() {
            return MessageMargins.FORWARD_BAR_WIDTH;
        }

        public final int getWidth(@NotNull MessageMargins messageMargins, int i10, boolean z10) {
            Intrinsics.checkNotNullParameter(messageMargins, "<this>");
            int leftMarginPx = (i10 - messageMargins.getLeftMarginPx()) - messageMargins.getRightMarginPx();
            if (z10) {
                return leftMarginPx - getFORWARD_BAR_SPACING();
            }
            return leftMarginPx;
        }

        public final int getWidthForEmbedContent(@NotNull MessageMargins messageMargins, int i10, boolean z10) {
            Intrinsics.checkNotNullParameter(messageMargins, "<this>");
            return getWidth(messageMargins, i10, z10) - (messageMargins.getEmbedContentMarginPx() * 2);
        }

        private Companion() {
        }
    }

    static {
        int dpToPx = SizeUtilsKt.getDpToPx(4);
        FORWARD_BAR_WIDTH = dpToPx;
        FORWARD_BAR_SPACING = dpToPx + SizeUtilsKt.getDpToPx(16);
    }

    public MessageMargins(int i10, int i11, int i12) {
        this.leftMarginPx = i10;
        this.rightMarginPx = i11;
        this.embedContentMarginPx = i12;
    }

    public static /* synthetic */ MessageMargins copy$default(MessageMargins messageMargins, int i10, int i11, int i12, int i13, Object obj) {
        if ((i13 & 1) != 0) {
            i10 = messageMargins.leftMarginPx;
        }
        if ((i13 & 2) != 0) {
            i11 = messageMargins.rightMarginPx;
        }
        if ((i13 & 4) != 0) {
            i12 = messageMargins.embedContentMarginPx;
        }
        return messageMargins.copy(i10, i11, i12);
    }

    public final int component1() {
        return this.leftMarginPx;
    }

    public final int component2() {
        return this.rightMarginPx;
    }

    public final int component3() {
        return this.embedContentMarginPx;
    }

    @NotNull
    public final MessageMargins copy(int i10, int i11, int i12) {
        return new MessageMargins(i10, i11, i12);
    }

    public boolean equals(Object obj) {
        if (this == obj) {
            return true;
        }
        if (obj instanceof MessageMargins) {
            MessageMargins messageMargins = (MessageMargins) obj;
            return this.leftMarginPx == messageMargins.leftMarginPx && this.rightMarginPx == messageMargins.rightMarginPx && this.embedContentMarginPx == messageMargins.embedContentMarginPx;
        }
        return false;
    }

    public final int getEmbedContentMarginPx() {
        return this.embedContentMarginPx;
    }

    public final int getLeftMarginPx() {
        return this.leftMarginPx;
    }

    public final int getRightMarginPx() {
        return this.rightMarginPx;
    }

    public int hashCode() {
        return (((Integer.hashCode(this.leftMarginPx) * 31) + Integer.hashCode(this.rightMarginPx)) * 31) + Integer.hashCode(this.embedContentMarginPx);
    }

    @NotNull
    public String toString() {
        int i10 = this.leftMarginPx;
        int i11 = this.rightMarginPx;
        int i12 = this.embedContentMarginPx;
        return "MessageMargins(leftMarginPx=" + i10 + ", rightMarginPx=" + i11 + ", embedContentMarginPx=" + i12 + ")";
    }

    public final int getLeftMarginPx(@NotNull View view, boolean z10) {
        Intrinsics.checkNotNullParameter(view, "view");
        if (!z10) {
            return this.leftMarginPx;
        }
        if (!(view instanceof ShortcutsFlexbox) && !(view instanceof ThreadEmbedView)) {
            return this.leftMarginPx + FORWARD_BAR_SPACING;
        }
        return this.leftMarginPx;
    }

    /* JADX WARN: Illegal instructions before constructor call */
    /*
        Code decompiled incorrectly, please refer to instructions dump.
        To view partially-correct add '--show-bad-code' argument
    */
    public MessageMargins(@org.jetbrains.annotations.NotNull android.content.res.Resources r4) {
        /*
            r3 = this;
            java.lang.String r0 = "resources"
            kotlin.jvm.internal.Intrinsics.checkNotNullParameter(r4, r0)
            com.discord.chat.presentation.message.messagepart.MessageMargins$Companion r0 = com.discord.chat.presentation.message.messagepart.MessageMargins.Companion
            int r1 = com.discord.chat.presentation.message.messagepart.MessageMargins.Companion.access$defaultMarginMessageStart(r0, r4)
            int r2 = com.discord.chat.presentation.message.messagepart.MessageMargins.Companion.access$defaultMargin(r0, r4)
            int r4 = com.discord.chat.presentation.message.messagepart.MessageMargins.Companion.access$defaultMarginEmbedContent(r0, r4)
            r3.<init>(r1, r2, r4)
            return
        */
        throw new UnsupportedOperationException("Method not decompiled: com.discord.chat.presentation.message.messagepart.MessageMargins.<init>(android.content.res.Resources):void");
    }

    /* JADX WARN: Illegal instructions before constructor call */
    /*
        Code decompiled incorrectly, please refer to instructions dump.
        To view partially-correct add '--show-bad-code' argument
    */
    public MessageMargins(@org.jetbrains.annotations.NotNull android.content.res.Resources r2, @org.jetbrains.annotations.NotNull com.discord.chat.presentation.root.MessageContext r3, boolean r4) {
        /*
            r1 = this;
            java.lang.String r0 = "resources"
            kotlin.jvm.internal.Intrinsics.checkNotNullParameter(r2, r0)
            java.lang.String r0 = "messageContext"
            kotlin.jvm.internal.Intrinsics.checkNotNullParameter(r3, r0)
            com.discord.chat.presentation.message.messagepart.MessageMargins$Companion r0 = com.discord.chat.presentation.message.messagepart.MessageMargins.Companion
            int r3 = com.discord.chat.presentation.message.messagepart.MessageMargins.Companion.access$getLeftMargin(r0, r2, r3, r4)
            int r4 = com.discord.chat.presentation.message.messagepart.MessageMargins.Companion.access$defaultMargin(r0, r2)
            int r2 = com.discord.chat.presentation.message.messagepart.MessageMargins.Companion.access$defaultMarginEmbedContent(r0, r2)
            r1.<init>(r3, r4, r2)
            return
        */
        throw new UnsupportedOperationException("Method not decompiled: com.discord.chat.presentation.message.messagepart.MessageMargins.<init>(android.content.res.Resources, com.discord.chat.presentation.root.MessageContext, boolean):void");
    }
}

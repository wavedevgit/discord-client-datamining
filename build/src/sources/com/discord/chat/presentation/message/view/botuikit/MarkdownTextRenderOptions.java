package com.discord.chat.presentation.message.view.botuikit;

import kotlin.Metadata;
import kotlin.jvm.internal.Intrinsics;
import org.jetbrains.annotations.NotNull;
@Metadata(d1 = {"\u0000 \n\u0002\u0018\u0002\n\u0002\u0010\u0000\n\u0000\n\u0002\u0010\u000e\n\u0000\n\u0002\u0010\u000b\n\u0002\b\u0015\n\u0002\u0010\b\n\u0002\b\u0002\b\u0086\b\u0018\u00002\u00020\u0001B/\u0012\u0006\u0010\u0002\u001a\u00020\u0003\u0012\u0006\u0010\u0004\u001a\u00020\u0005\u0012\u0006\u0010\u0006\u001a\u00020\u0005\u0012\u0006\u0010\u0007\u001a\u00020\u0005\u0012\u0006\u0010\b\u001a\u00020\u0005¢\u0006\u0004\b\t\u0010\nJ\t\u0010\u0012\u001a\u00020\u0003HÆ\u0003J\t\u0010\u0013\u001a\u00020\u0005HÆ\u0003J\t\u0010\u0014\u001a\u00020\u0005HÆ\u0003J\t\u0010\u0015\u001a\u00020\u0005HÆ\u0003J\t\u0010\u0016\u001a\u00020\u0005HÆ\u0003J;\u0010\u0017\u001a\u00020\u00002\b\b\u0002\u0010\u0002\u001a\u00020\u00032\b\b\u0002\u0010\u0004\u001a\u00020\u00052\b\b\u0002\u0010\u0006\u001a\u00020\u00052\b\b\u0002\u0010\u0007\u001a\u00020\u00052\b\b\u0002\u0010\b\u001a\u00020\u0005HÆ\u0001J\u0013\u0010\u0018\u001a\u00020\u00052\b\u0010\u0019\u001a\u0004\u0018\u00010\u0001HÖ\u0003J\t\u0010\u001a\u001a\u00020\u001bHÖ\u0001J\t\u0010\u001c\u001a\u00020\u0003HÖ\u0001R\u0011\u0010\u0002\u001a\u00020\u0003¢\u0006\b\n\u0000\u001a\u0004\b\u000b\u0010\fR\u0011\u0010\u0004\u001a\u00020\u0005¢\u0006\b\n\u0000\u001a\u0004\b\r\u0010\u000eR\u0011\u0010\u0006\u001a\u00020\u0005¢\u0006\b\n\u0000\u001a\u0004\b\u000f\u0010\u000eR\u0011\u0010\u0007\u001a\u00020\u0005¢\u0006\b\n\u0000\u001a\u0004\b\u0010\u0010\u000eR\u0011\u0010\b\u001a\u00020\u0005¢\u0006\b\n\u0000\u001a\u0004\b\u0011\u0010\u000e¨\u0006\u001d"}, d2 = {"Lcom/discord/chat/presentation/message/view/botuikit/MarkdownTextRenderOptions;", "", "containerId", "", "shouldAnimateEmoji", "", "shouldShowLinkDecorations", "shouldShowRoleDot", "shouldShowRoleOnName", "<init>", "(Ljava/lang/String;ZZZZ)V", "getContainerId", "()Ljava/lang/String;", "getShouldAnimateEmoji", "()Z", "getShouldShowLinkDecorations", "getShouldShowRoleDot", "getShouldShowRoleOnName", "component1", "component2", "component3", "component4", "component5", "copy", "equals", "other", "hashCode", "", "toString", "chat_release"}, k = 1, mv = {2, 1, 0}, xi = 48)
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public final class MarkdownTextRenderOptions {
    @NotNull
    private final String containerId;
    private final boolean shouldAnimateEmoji;
    private final boolean shouldShowLinkDecorations;
    private final boolean shouldShowRoleDot;
    private final boolean shouldShowRoleOnName;

    public MarkdownTextRenderOptions(@NotNull String containerId, boolean z10, boolean z11, boolean z12, boolean z13) {
        Intrinsics.checkNotNullParameter(containerId, "containerId");
        this.containerId = containerId;
        this.shouldAnimateEmoji = z10;
        this.shouldShowLinkDecorations = z11;
        this.shouldShowRoleDot = z12;
        this.shouldShowRoleOnName = z13;
    }

    public static /* synthetic */ MarkdownTextRenderOptions copy$default(MarkdownTextRenderOptions markdownTextRenderOptions, String str, boolean z10, boolean z11, boolean z12, boolean z13, int i10, Object obj) {
        if ((i10 & 1) != 0) {
            str = markdownTextRenderOptions.containerId;
        }
        if ((i10 & 2) != 0) {
            z10 = markdownTextRenderOptions.shouldAnimateEmoji;
        }
        if ((i10 & 4) != 0) {
            z11 = markdownTextRenderOptions.shouldShowLinkDecorations;
        }
        if ((i10 & 8) != 0) {
            z12 = markdownTextRenderOptions.shouldShowRoleDot;
        }
        if ((i10 & 16) != 0) {
            z13 = markdownTextRenderOptions.shouldShowRoleOnName;
        }
        boolean z14 = z13;
        boolean z15 = z11;
        return markdownTextRenderOptions.copy(str, z10, z15, z12, z14);
    }

    @NotNull
    public final String component1() {
        return this.containerId;
    }

    public final boolean component2() {
        return this.shouldAnimateEmoji;
    }

    public final boolean component3() {
        return this.shouldShowLinkDecorations;
    }

    public final boolean component4() {
        return this.shouldShowRoleDot;
    }

    public final boolean component5() {
        return this.shouldShowRoleOnName;
    }

    @NotNull
    public final MarkdownTextRenderOptions copy(@NotNull String containerId, boolean z10, boolean z11, boolean z12, boolean z13) {
        Intrinsics.checkNotNullParameter(containerId, "containerId");
        return new MarkdownTextRenderOptions(containerId, z10, z11, z12, z13);
    }

    public boolean equals(Object obj) {
        if (this == obj) {
            return true;
        }
        if (obj instanceof MarkdownTextRenderOptions) {
            MarkdownTextRenderOptions markdownTextRenderOptions = (MarkdownTextRenderOptions) obj;
            return Intrinsics.areEqual(this.containerId, markdownTextRenderOptions.containerId) && this.shouldAnimateEmoji == markdownTextRenderOptions.shouldAnimateEmoji && this.shouldShowLinkDecorations == markdownTextRenderOptions.shouldShowLinkDecorations && this.shouldShowRoleDot == markdownTextRenderOptions.shouldShowRoleDot && this.shouldShowRoleOnName == markdownTextRenderOptions.shouldShowRoleOnName;
        }
        return false;
    }

    @NotNull
    public final String getContainerId() {
        return this.containerId;
    }

    public final boolean getShouldAnimateEmoji() {
        return this.shouldAnimateEmoji;
    }

    public final boolean getShouldShowLinkDecorations() {
        return this.shouldShowLinkDecorations;
    }

    public final boolean getShouldShowRoleDot() {
        return this.shouldShowRoleDot;
    }

    public final boolean getShouldShowRoleOnName() {
        return this.shouldShowRoleOnName;
    }

    public int hashCode() {
        return (((((((this.containerId.hashCode() * 31) + Boolean.hashCode(this.shouldAnimateEmoji)) * 31) + Boolean.hashCode(this.shouldShowLinkDecorations)) * 31) + Boolean.hashCode(this.shouldShowRoleDot)) * 31) + Boolean.hashCode(this.shouldShowRoleOnName);
    }

    @NotNull
    public String toString() {
        String str = this.containerId;
        boolean z10 = this.shouldAnimateEmoji;
        boolean z11 = this.shouldShowLinkDecorations;
        boolean z12 = this.shouldShowRoleDot;
        boolean z13 = this.shouldShowRoleOnName;
        return "MarkdownTextRenderOptions(containerId=" + str + ", shouldAnimateEmoji=" + z10 + ", shouldShowLinkDecorations=" + z11 + ", shouldShowRoleDot=" + z12 + ", shouldShowRoleOnName=" + z13 + ")";
    }
}

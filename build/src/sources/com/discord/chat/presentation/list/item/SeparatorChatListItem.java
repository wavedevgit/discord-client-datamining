package com.discord.chat.presentation.list.item;

import com.facebook.react.uimanager.ViewProps;
import kotlin.Metadata;
import kotlin.jvm.internal.Intrinsics;
import org.jetbrains.annotations.NotNull;
@Metadata(d1 = {"\u0000&\n\u0002\u0018\u0002\n\u0002\u0018\u0002\n\u0000\n\u0002\u0010\b\n\u0000\n\u0002\u0010\u000e\n\u0002\b\n\n\u0002\u0010\u000b\n\u0000\n\u0002\u0010\u0000\n\u0002\b\u0003\b\u0086\b\u0018\u00002\u00020\u0001B\u0017\u0012\u0006\u0010\u0002\u001a\u00020\u0003\u0012\u0006\u0010\u0004\u001a\u00020\u0005¢\u0006\u0004\b\u0006\u0010\u0007J\t\u0010\f\u001a\u00020\u0003HÆ\u0003J\t\u0010\r\u001a\u00020\u0005HÆ\u0003J\u001d\u0010\u000e\u001a\u00020\u00002\b\b\u0002\u0010\u0002\u001a\u00020\u00032\b\b\u0002\u0010\u0004\u001a\u00020\u0005HÆ\u0001J\u0013\u0010\u000f\u001a\u00020\u00102\b\u0010\u0011\u001a\u0004\u0018\u00010\u0012HÖ\u0003J\t\u0010\u0013\u001a\u00020\u0003HÖ\u0001J\t\u0010\u0014\u001a\u00020\u0005HÖ\u0001R\u0011\u0010\u0002\u001a\u00020\u0003¢\u0006\b\n\u0000\u001a\u0004\b\b\u0010\tR\u0011\u0010\u0004\u001a\u00020\u0005¢\u0006\b\n\u0000\u001a\u0004\b\n\u0010\u000b¨\u0006\u0015"}, d2 = {"Lcom/discord/chat/presentation/list/item/SeparatorChatListItem;", "Lcom/discord/chat/presentation/list/item/ChatListItem;", ViewProps.COLOR, "", "text", "", "<init>", "(ILjava/lang/String;)V", "getColor", "()I", "getText", "()Ljava/lang/String;", "component1", "component2", "copy", "equals", "", "other", "", "hashCode", "toString", "chat_release"}, k = 1, mv = {2, 1, 0}, xi = 48)
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public final class SeparatorChatListItem extends ChatListItem {
    private final int color;
    @NotNull
    private final String text;

    /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
    public SeparatorChatListItem(int i10, @NotNull String text) {
        super("separator: " + text, null);
        Intrinsics.checkNotNullParameter(text, "text");
        this.color = i10;
        this.text = text;
    }

    public static /* synthetic */ SeparatorChatListItem copy$default(SeparatorChatListItem separatorChatListItem, int i10, String str, int i11, Object obj) {
        if ((i11 & 1) != 0) {
            i10 = separatorChatListItem.color;
        }
        if ((i11 & 2) != 0) {
            str = separatorChatListItem.text;
        }
        return separatorChatListItem.copy(i10, str);
    }

    public final int component1() {
        return this.color;
    }

    @NotNull
    public final String component2() {
        return this.text;
    }

    @NotNull
    public final SeparatorChatListItem copy(int i10, @NotNull String text) {
        Intrinsics.checkNotNullParameter(text, "text");
        return new SeparatorChatListItem(i10, text);
    }

    public boolean equals(Object obj) {
        if (this == obj) {
            return true;
        }
        if (obj instanceof SeparatorChatListItem) {
            SeparatorChatListItem separatorChatListItem = (SeparatorChatListItem) obj;
            return this.color == separatorChatListItem.color && Intrinsics.areEqual(this.text, separatorChatListItem.text);
        }
        return false;
    }

    public final int getColor() {
        return this.color;
    }

    @NotNull
    public final String getText() {
        return this.text;
    }

    public int hashCode() {
        return (Integer.hashCode(this.color) * 31) + this.text.hashCode();
    }

    @NotNull
    public String toString() {
        int i10 = this.color;
        String str = this.text;
        return "SeparatorChatListItem(color=" + i10 + ", text=" + str + ")";
    }
}

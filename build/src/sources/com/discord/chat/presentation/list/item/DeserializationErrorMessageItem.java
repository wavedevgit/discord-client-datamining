package com.discord.chat.presentation.list.item;

import com.discord.chat.bridge.ErrorMessage;
import kotlin.Metadata;
import kotlin.jvm.internal.DefaultConstructorMarker;
import kotlin.jvm.internal.Intrinsics;
import org.jetbrains.annotations.NotNull;
@Metadata(d1 = {"\u0000*\n\u0002\u0018\u0002\n\u0002\u0018\u0002\n\u0000\n\u0002\u0018\u0002\n\u0000\n\u0002\u0010\u000b\n\u0002\b\n\n\u0002\u0010\u0000\n\u0000\n\u0002\u0010\b\n\u0000\n\u0002\u0010\u000e\n\u0000\b\u0086\b\u0018\u00002\u00020\u0001B\u0019\u0012\u0006\u0010\u0002\u001a\u00020\u0003\u0012\b\b\u0002\u0010\u0004\u001a\u00020\u0005¢\u0006\u0004\b\u0006\u0010\u0007J\t\u0010\u000b\u001a\u00020\u0003HÆ\u0003J\t\u0010\f\u001a\u00020\u0005HÆ\u0003J\u001d\u0010\r\u001a\u00020\u00002\b\b\u0002\u0010\u0002\u001a\u00020\u00032\b\b\u0002\u0010\u0004\u001a\u00020\u0005HÆ\u0001J\u0013\u0010\u000e\u001a\u00020\u00052\b\u0010\u000f\u001a\u0004\u0018\u00010\u0010HÖ\u0003J\t\u0010\u0011\u001a\u00020\u0012HÖ\u0001J\t\u0010\u0013\u001a\u00020\u0014HÖ\u0001R\u0011\u0010\u0002\u001a\u00020\u0003¢\u0006\b\n\u0000\u001a\u0004\b\b\u0010\tR\u0011\u0010\u0004\u001a\u00020\u0005¢\u0006\b\n\u0000\u001a\u0004\b\u0004\u0010\n¨\u0006\u0015"}, d2 = {"Lcom/discord/chat/presentation/list/item/DeserializationErrorMessageItem;", "Lcom/discord/chat/presentation/list/item/ChatListItem;", "message", "Lcom/discord/chat/bridge/ErrorMessage;", "isExpanded", "", "<init>", "(Lcom/discord/chat/bridge/ErrorMessage;Z)V", "getMessage", "()Lcom/discord/chat/bridge/ErrorMessage;", "()Z", "component1", "component2", "copy", "equals", "other", "", "hashCode", "", "toString", "", "chat_release"}, k = 1, mv = {2, 1, 0}, xi = 48)
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public final class DeserializationErrorMessageItem extends ChatListItem {
    private final boolean isExpanded;
    @NotNull
    private final ErrorMessage message;

    public /* synthetic */ DeserializationErrorMessageItem(ErrorMessage errorMessage, boolean z10, int i10, DefaultConstructorMarker defaultConstructorMarker) {
        this(errorMessage, (i10 & 2) != 0 ? false : z10);
    }

    public static /* synthetic */ DeserializationErrorMessageItem copy$default(DeserializationErrorMessageItem deserializationErrorMessageItem, ErrorMessage errorMessage, boolean z10, int i10, Object obj) {
        if ((i10 & 1) != 0) {
            errorMessage = deserializationErrorMessageItem.message;
        }
        if ((i10 & 2) != 0) {
            z10 = deserializationErrorMessageItem.isExpanded;
        }
        return deserializationErrorMessageItem.copy(errorMessage, z10);
    }

    @NotNull
    public final ErrorMessage component1() {
        return this.message;
    }

    public final boolean component2() {
        return this.isExpanded;
    }

    @NotNull
    public final DeserializationErrorMessageItem copy(@NotNull ErrorMessage message, boolean z10) {
        Intrinsics.checkNotNullParameter(message, "message");
        return new DeserializationErrorMessageItem(message, z10);
    }

    public boolean equals(Object obj) {
        if (this == obj) {
            return true;
        }
        if (obj instanceof DeserializationErrorMessageItem) {
            DeserializationErrorMessageItem deserializationErrorMessageItem = (DeserializationErrorMessageItem) obj;
            return Intrinsics.areEqual(this.message, deserializationErrorMessageItem.message) && this.isExpanded == deserializationErrorMessageItem.isExpanded;
        }
        return false;
    }

    @NotNull
    public final ErrorMessage getMessage() {
        return this.message;
    }

    public int hashCode() {
        return (this.message.hashCode() * 31) + Boolean.hashCode(this.isExpanded);
    }

    public final boolean isExpanded() {
        return this.isExpanded;
    }

    @NotNull
    public String toString() {
        ErrorMessage errorMessage = this.message;
        boolean z10 = this.isExpanded;
        return "DeserializationErrorMessageItem(message=" + errorMessage + ", isExpanded=" + z10 + ")";
    }

    /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
    public DeserializationErrorMessageItem(@NotNull ErrorMessage message, boolean z10) {
        super(message.m226getId3Eiw7ao(), null);
        Intrinsics.checkNotNullParameter(message, "message");
        this.message = message;
        this.isExpanded = z10;
    }
}

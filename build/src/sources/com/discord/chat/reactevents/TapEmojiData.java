package com.discord.chat.reactevents;

import com.discord.chat.bridge.contentnode.CustomEmojiContentNode;
import com.discord.chat.bridge.contentnode.EmojiContentNode;
import com.discord.chat.bridge.contentnode.UnicodeEmojiContentNode;
import com.discord.react.utilities.NativeMapExtensionsKt;
import com.discord.reactevents.ReactEvent;
import com.facebook.react.bridge.WritableMap;
import com.facebook.react.bridge.WritableNativeMap;
import com.facebook.react.devsupport.StackTraceHelper;
import kotlin.Metadata;
import kotlin.jvm.internal.Intrinsics;
import lr.p;
import lr.v;
import org.jetbrains.annotations.NotNull;
@Metadata(d1 = {"\u00002\n\u0002\u0018\u0002\n\u0002\u0018\u0002\n\u0000\n\u0002\u0018\u0002\n\u0002\b\u0003\n\u0002\u0018\u0002\n\u0002\b\u0003\n\u0002\u0010\u000b\n\u0000\n\u0002\u0010\u0000\n\u0000\n\u0002\u0010\b\n\u0000\n\u0002\u0010\u000e\n\u0000\b\u0080\b\u0018\u00002\u00020\u0001B\u000f\u0012\u0006\u0010\u0002\u001a\u00020\u0003¢\u0006\u0004\b\u0004\u0010\u0005J\b\u0010\u0006\u001a\u00020\u0007H\u0016J\t\u0010\b\u001a\u00020\u0003HÂ\u0003J\u0013\u0010\t\u001a\u00020\u00002\b\b\u0002\u0010\u0002\u001a\u00020\u0003HÆ\u0001J\u0013\u0010\n\u001a\u00020\u000b2\b\u0010\f\u001a\u0004\u0018\u00010\rHÖ\u0003J\t\u0010\u000e\u001a\u00020\u000fHÖ\u0001J\t\u0010\u0010\u001a\u00020\u0011HÖ\u0001R\u000e\u0010\u0002\u001a\u00020\u0003X\u0082\u0004¢\u0006\u0002\n\u0000¨\u0006\u0012"}, d2 = {"Lcom/discord/chat/reactevents/TapEmojiData;", "Lcom/discord/reactevents/ReactEvent;", "emoji", "Lcom/discord/chat/bridge/contentnode/EmojiContentNode;", "<init>", "(Lcom/discord/chat/bridge/contentnode/EmojiContentNode;)V", "serialize", "Lcom/facebook/react/bridge/WritableMap;", "component1", "copy", "equals", "", "other", "", "hashCode", "", "toString", "", "chat_release"}, k = 1, mv = {2, 1, 0}, xi = 48)
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public final class TapEmojiData implements ReactEvent {
    @NotNull
    private final EmojiContentNode emoji;

    public TapEmojiData(@NotNull EmojiContentNode emoji) {
        Intrinsics.checkNotNullParameter(emoji, "emoji");
        this.emoji = emoji;
    }

    private final EmojiContentNode component1() {
        return this.emoji;
    }

    public static /* synthetic */ TapEmojiData copy$default(TapEmojiData tapEmojiData, EmojiContentNode emojiContentNode, int i10, Object obj) {
        if ((i10 & 1) != 0) {
            emojiContentNode = tapEmojiData.emoji;
        }
        return tapEmojiData.copy(emojiContentNode);
    }

    @NotNull
    public final TapEmojiData copy(@NotNull EmojiContentNode emoji) {
        Intrinsics.checkNotNullParameter(emoji, "emoji");
        return new TapEmojiData(emoji);
    }

    public boolean equals(Object obj) {
        if (this == obj) {
            return true;
        }
        return (obj instanceof TapEmojiData) && Intrinsics.areEqual(this.emoji, ((TapEmojiData) obj).emoji);
    }

    public int hashCode() {
        return this.emoji.hashCode();
    }

    @Override // com.discord.reactevents.ReactEvent
    @NotNull
    public WritableMap serialize() {
        WritableNativeMap nativeMapOf;
        EmojiContentNode emojiContentNode = this.emoji;
        if (emojiContentNode instanceof UnicodeEmojiContentNode) {
            nativeMapOf = NativeMapExtensionsKt.nativeMapOf(v.a("surrogate", ((UnicodeEmojiContentNode) emojiContentNode).getSurrogate()), v.a("content", ((UnicodeEmojiContentNode) this.emoji).getContent()));
        } else if (emojiContentNode instanceof CustomEmojiContentNode) {
            nativeMapOf = NativeMapExtensionsKt.nativeMapOf(v.a(StackTraceHelper.ID_KEY, String.valueOf(((CustomEmojiContentNode) emojiContentNode).getId())), v.a("alt", ((CustomEmojiContentNode) this.emoji).getAlt()), v.a("src", ((CustomEmojiContentNode) this.emoji).getSrc()));
        } else {
            throw new p();
        }
        return NativeMapExtensionsKt.nativeMapOf(v.a("node", nativeMapOf));
    }

    @NotNull
    public String toString() {
        EmojiContentNode emojiContentNode = this.emoji;
        return "TapEmojiData(emoji=" + emojiContentNode + ")";
    }
}

package com.discord.chat.presentation.list.item;

import com.discord.chat.bridge.summaries.Summary;
import com.facebook.react.uimanager.ViewProps;
import kotlin.Metadata;
import kotlin.jvm.internal.Intrinsics;
import org.jetbrains.annotations.NotNull;
@Metadata(d1 = {"\u00006\n\u0002\u0018\u0002\n\u0002\u0018\u0002\n\u0000\n\u0002\u0010\b\n\u0000\n\u0002\u0018\u0002\n\u0000\n\u0002\u0010\u000b\n\u0002\b\b\n\u0002\u0010\u000e\n\u0002\b\u0003\n\u0002\u0018\u0002\n\u0002\b\t\n\u0002\u0010\u0000\n\u0002\b\u0003\b\u0086\b\u0018\u00002\u00020\u0001B\u001f\u0012\u0006\u0010\u0002\u001a\u00020\u0003\u0012\u0006\u0010\u0004\u001a\u00020\u0005\u0012\u0006\u0010\u0006\u001a\u00020\u0007¢\u0006\u0004\b\b\u0010\tJ\t\u0010\u0018\u001a\u00020\u0003HÆ\u0003J\t\u0010\u0019\u001a\u00020\u0005HÆ\u0003J\t\u0010\u001a\u001a\u00020\u0007HÆ\u0003J'\u0010\u001b\u001a\u00020\u00002\b\b\u0002\u0010\u0002\u001a\u00020\u00032\b\b\u0002\u0010\u0004\u001a\u00020\u00052\b\b\u0002\u0010\u0006\u001a\u00020\u0007HÆ\u0001J\u0013\u0010\u001c\u001a\u00020\u00072\b\u0010\u001d\u001a\u0004\u0018\u00010\u001eHÖ\u0003J\t\u0010\u001f\u001a\u00020\u0003HÖ\u0001J\t\u0010 \u001a\u00020\u0010HÖ\u0001R\u0011\u0010\u0002\u001a\u00020\u0003¢\u0006\b\n\u0000\u001a\u0004\b\n\u0010\u000bR\u0011\u0010\u0004\u001a\u00020\u0005¢\u0006\b\n\u0000\u001a\u0004\b\f\u0010\rR\u0011\u0010\u0006\u001a\u00020\u0007¢\u0006\b\n\u0000\u001a\u0004\b\u0006\u0010\u000eR\u0011\u0010\u000f\u001a\u00020\u00108F¢\u0006\u0006\u001a\u0004\b\u0011\u0010\u0012R\u0011\u0010\u0013\u001a\u00020\u00148F¢\u0006\u0006\u001a\u0004\b\u0015\u0010\u0012R\u0011\u0010\u0016\u001a\u00020\u00148F¢\u0006\u0006\u001a\u0004\b\u0017\u0010\u0012¨\u0006!"}, d2 = {"Lcom/discord/chat/presentation/list/item/SummarySeparatorChatListItem;", "Lcom/discord/chat/presentation/list/item/ChatListItem;", ViewProps.COLOR, "", "summary", "Lcom/discord/chat/bridge/summaries/Summary;", "isBeforeContent", "", "<init>", "(ILcom/discord/chat/bridge/summaries/Summary;Z)V", "getColor", "()I", "getSummary", "()Lcom/discord/chat/bridge/summaries/Summary;", "()Z", "text", "", "getText", "()Ljava/lang/String;", "currentMsgId", "Lcom/discord/primitives/MessageId;", "getCurrentMsgId-3Eiw7ao", "jumpToMsgId", "getJumpToMsgId-3Eiw7ao", "component1", "component2", "component3", "copy", "equals", "other", "", "hashCode", "toString", "chat_release"}, k = 1, mv = {2, 1, 0}, xi = 48)
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public final class SummarySeparatorChatListItem extends ChatListItem {
    private final int color;
    private final boolean isBeforeContent;
    @NotNull
    private final Summary summary;

    /* JADX WARN: Illegal instructions before constructor call */
    /*
        Code decompiled incorrectly, please refer to instructions dump.
        To view partially-correct add '--show-bad-code' argument
    */
    public SummarySeparatorChatListItem(int r5, @org.jetbrains.annotations.NotNull com.discord.chat.bridge.summaries.Summary r6, boolean r7) {
        /*
            r4 = this;
            java.lang.String r0 = "summary"
            kotlin.jvm.internal.Intrinsics.checkNotNullParameter(r6, r0)
            java.lang.String r0 = r6.getId()
            if (r7 == 0) goto Le
            java.lang.String r1 = "start"
            goto L10
        Le:
            java.lang.String r1 = "end"
        L10:
            java.lang.StringBuilder r2 = new java.lang.StringBuilder
            r2.<init>()
            java.lang.String r3 = "separator: "
            r2.append(r3)
            r2.append(r0)
            java.lang.String r0 = "-"
            r2.append(r0)
            r2.append(r1)
            java.lang.String r0 = r2.toString()
            r1 = 0
            r4.<init>(r0, r1)
            r4.color = r5
            r4.summary = r6
            r4.isBeforeContent = r7
            return
        */
        throw new UnsupportedOperationException("Method not decompiled: com.discord.chat.presentation.list.item.SummarySeparatorChatListItem.<init>(int, com.discord.chat.bridge.summaries.Summary, boolean):void");
    }

    public static /* synthetic */ SummarySeparatorChatListItem copy$default(SummarySeparatorChatListItem summarySeparatorChatListItem, int i10, Summary summary, boolean z10, int i11, Object obj) {
        if ((i11 & 1) != 0) {
            i10 = summarySeparatorChatListItem.color;
        }
        if ((i11 & 2) != 0) {
            summary = summarySeparatorChatListItem.summary;
        }
        if ((i11 & 4) != 0) {
            z10 = summarySeparatorChatListItem.isBeforeContent;
        }
        return summarySeparatorChatListItem.copy(i10, summary, z10);
    }

    public final int component1() {
        return this.color;
    }

    @NotNull
    public final Summary component2() {
        return this.summary;
    }

    public final boolean component3() {
        return this.isBeforeContent;
    }

    @NotNull
    public final SummarySeparatorChatListItem copy(int i10, @NotNull Summary summary, boolean z10) {
        Intrinsics.checkNotNullParameter(summary, "summary");
        return new SummarySeparatorChatListItem(i10, summary, z10);
    }

    public boolean equals(Object obj) {
        if (this == obj) {
            return true;
        }
        if (obj instanceof SummarySeparatorChatListItem) {
            SummarySeparatorChatListItem summarySeparatorChatListItem = (SummarySeparatorChatListItem) obj;
            return this.color == summarySeparatorChatListItem.color && Intrinsics.areEqual(this.summary, summarySeparatorChatListItem.summary) && this.isBeforeContent == summarySeparatorChatListItem.isBeforeContent;
        }
        return false;
    }

    public final int getColor() {
        return this.color;
    }

    @NotNull
    /* renamed from: getCurrentMsgId-3Eiw7ao  reason: not valid java name */
    public final String m500getCurrentMsgId3Eiw7ao() {
        if (this.isBeforeContent) {
            return this.summary.m433getStartId3Eiw7ao();
        }
        return this.summary.m432getEndId3Eiw7ao();
    }

    @NotNull
    /* renamed from: getJumpToMsgId-3Eiw7ao  reason: not valid java name */
    public final String m501getJumpToMsgId3Eiw7ao() {
        if (this.isBeforeContent) {
            return this.summary.m432getEndId3Eiw7ao();
        }
        return this.summary.m433getStartId3Eiw7ao();
    }

    @NotNull
    public final Summary getSummary() {
        return this.summary;
    }

    @NotNull
    public final String getText() {
        return this.summary.getTopic();
    }

    public int hashCode() {
        return (((Integer.hashCode(this.color) * 31) + this.summary.hashCode()) * 31) + Boolean.hashCode(this.isBeforeContent);
    }

    public final boolean isBeforeContent() {
        return this.isBeforeContent;
    }

    @NotNull
    public String toString() {
        int i10 = this.color;
        Summary summary = this.summary;
        boolean z10 = this.isBeforeContent;
        return "SummarySeparatorChatListItem(color=" + i10 + ", summary=" + summary + ", isBeforeContent=" + z10 + ")";
    }
}

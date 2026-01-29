package com.discord.chat.presentation.message.messagepart;

import com.discord.chat.bridge.activities.ActivityInstanceEmbed;
import com.discord.primitives.MessageId;
import kotlin.Metadata;
import kotlin.jvm.internal.DefaultConstructorMarker;
import kotlin.jvm.internal.Intrinsics;
import org.jetbrains.annotations.NotNull;
@Metadata(d1 = {"\u00008\n\u0002\u0018\u0002\n\u0002\u0018\u0002\n\u0000\n\u0002\u0018\u0002\n\u0000\n\u0002\u0018\u0002\n\u0000\n\u0002\u0018\u0002\n\u0000\n\u0002\u0010\b\n\u0002\b\u0014\n\u0002\u0010\u000b\n\u0000\n\u0002\u0010\u0000\n\u0002\b\u0002\n\u0002\u0010\u000e\n\u0000\b\u0086\b\u0018\u00002\u00020\u0001B'\u0012\u0006\u0010\u0002\u001a\u00020\u0003\u0012\u0006\u0010\u0004\u001a\u00020\u0005\u0012\u0006\u0010\u0006\u001a\u00020\u0007\u0012\u0006\u0010\b\u001a\u00020\t¢\u0006\u0004\b\n\u0010\u000bJ\u0010\u0010\u0015\u001a\u00020\u0003HÆ\u0003¢\u0006\u0004\b\u0016\u0010\rJ\t\u0010\u0017\u001a\u00020\u0005HÆ\u0003J\t\u0010\u0018\u001a\u00020\u0007HÆ\u0003J\t\u0010\u0019\u001a\u00020\tHÆ\u0003J8\u0010\u001a\u001a\u00020\u00002\b\b\u0002\u0010\u0002\u001a\u00020\u00032\b\b\u0002\u0010\u0004\u001a\u00020\u00052\b\b\u0002\u0010\u0006\u001a\u00020\u00072\b\b\u0002\u0010\b\u001a\u00020\tHÆ\u0001¢\u0006\u0004\b\u001b\u0010\u001cJ\u0013\u0010\u001d\u001a\u00020\u001e2\b\u0010\u001f\u001a\u0004\u0018\u00010 HÖ\u0003J\t\u0010!\u001a\u00020\tHÖ\u0001J\t\u0010\"\u001a\u00020#HÖ\u0001R\u0016\u0010\u0002\u001a\u00020\u0003X\u0096\u0004¢\u0006\n\n\u0002\u0010\u000e\u001a\u0004\b\f\u0010\rR\u0011\u0010\u0004\u001a\u00020\u0005¢\u0006\b\n\u0000\u001a\u0004\b\u000f\u0010\u0010R\u0011\u0010\u0006\u001a\u00020\u0007¢\u0006\b\n\u0000\u001a\u0004\b\u0011\u0010\u0012R\u0011\u0010\b\u001a\u00020\t¢\u0006\b\n\u0000\u001a\u0004\b\u0013\u0010\u0014¨\u0006$"}, d2 = {"Lcom/discord/chat/presentation/message/messagepart/ActivityInstanceEmbedMessageAccessory;", "Lcom/discord/chat/presentation/message/messagepart/MessageAccessory;", "messageId", "Lcom/discord/primitives/MessageId;", "margins", "Lcom/discord/chat/presentation/message/messagepart/MessageMargins;", "activityInstanceEmbed", "Lcom/discord/chat/bridge/activities/ActivityInstanceEmbed;", "constrainedWidth", "", "<init>", "(Ljava/lang/String;Lcom/discord/chat/presentation/message/messagepart/MessageMargins;Lcom/discord/chat/bridge/activities/ActivityInstanceEmbed;ILkotlin/jvm/internal/DefaultConstructorMarker;)V", "getMessageId-3Eiw7ao", "()Ljava/lang/String;", "Ljava/lang/String;", "getMargins", "()Lcom/discord/chat/presentation/message/messagepart/MessageMargins;", "getActivityInstanceEmbed", "()Lcom/discord/chat/bridge/activities/ActivityInstanceEmbed;", "getConstrainedWidth", "()I", "component1", "component1-3Eiw7ao", "component2", "component3", "component4", "copy", "copy-AFFcxXc", "(Ljava/lang/String;Lcom/discord/chat/presentation/message/messagepart/MessageMargins;Lcom/discord/chat/bridge/activities/ActivityInstanceEmbed;I)Lcom/discord/chat/presentation/message/messagepart/ActivityInstanceEmbedMessageAccessory;", "equals", "", "other", "", "hashCode", "toString", "", "chat_release"}, k = 1, mv = {2, 1, 0}, xi = 48)
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public final class ActivityInstanceEmbedMessageAccessory extends MessageAccessory {
    @NotNull
    private final ActivityInstanceEmbed activityInstanceEmbed;
    private final int constrainedWidth;
    @NotNull
    private final MessageMargins margins;
    @NotNull
    private final String messageId;

    public /* synthetic */ ActivityInstanceEmbedMessageAccessory(String str, MessageMargins messageMargins, ActivityInstanceEmbed activityInstanceEmbed, int i10, DefaultConstructorMarker defaultConstructorMarker) {
        this(str, messageMargins, activityInstanceEmbed, i10);
    }

    /* renamed from: copy-AFFcxXc$default  reason: not valid java name */
    public static /* synthetic */ ActivityInstanceEmbedMessageAccessory m533copyAFFcxXc$default(ActivityInstanceEmbedMessageAccessory activityInstanceEmbedMessageAccessory, String str, MessageMargins messageMargins, ActivityInstanceEmbed activityInstanceEmbed, int i10, int i11, Object obj) {
        if ((i11 & 1) != 0) {
            str = activityInstanceEmbedMessageAccessory.messageId;
        }
        if ((i11 & 2) != 0) {
            messageMargins = activityInstanceEmbedMessageAccessory.margins;
        }
        if ((i11 & 4) != 0) {
            activityInstanceEmbed = activityInstanceEmbedMessageAccessory.activityInstanceEmbed;
        }
        if ((i11 & 8) != 0) {
            i10 = activityInstanceEmbedMessageAccessory.constrainedWidth;
        }
        return activityInstanceEmbedMessageAccessory.m535copyAFFcxXc(str, messageMargins, activityInstanceEmbed, i10);
    }

    @NotNull
    /* renamed from: component1-3Eiw7ao  reason: not valid java name */
    public final String m534component13Eiw7ao() {
        return this.messageId;
    }

    @NotNull
    public final MessageMargins component2() {
        return this.margins;
    }

    @NotNull
    public final ActivityInstanceEmbed component3() {
        return this.activityInstanceEmbed;
    }

    public final int component4() {
        return this.constrainedWidth;
    }

    @NotNull
    /* renamed from: copy-AFFcxXc  reason: not valid java name */
    public final ActivityInstanceEmbedMessageAccessory m535copyAFFcxXc(@NotNull String messageId, @NotNull MessageMargins margins, @NotNull ActivityInstanceEmbed activityInstanceEmbed, int i10) {
        Intrinsics.checkNotNullParameter(messageId, "messageId");
        Intrinsics.checkNotNullParameter(margins, "margins");
        Intrinsics.checkNotNullParameter(activityInstanceEmbed, "activityInstanceEmbed");
        return new ActivityInstanceEmbedMessageAccessory(messageId, margins, activityInstanceEmbed, i10, null);
    }

    public boolean equals(Object obj) {
        if (this == obj) {
            return true;
        }
        if (obj instanceof ActivityInstanceEmbedMessageAccessory) {
            ActivityInstanceEmbedMessageAccessory activityInstanceEmbedMessageAccessory = (ActivityInstanceEmbedMessageAccessory) obj;
            return MessageId.m1088equalsimpl0(this.messageId, activityInstanceEmbedMessageAccessory.messageId) && Intrinsics.areEqual(this.margins, activityInstanceEmbedMessageAccessory.margins) && Intrinsics.areEqual(this.activityInstanceEmbed, activityInstanceEmbedMessageAccessory.activityInstanceEmbed) && this.constrainedWidth == activityInstanceEmbedMessageAccessory.constrainedWidth;
        }
        return false;
    }

    @NotNull
    public final ActivityInstanceEmbed getActivityInstanceEmbed() {
        return this.activityInstanceEmbed;
    }

    public final int getConstrainedWidth() {
        return this.constrainedWidth;
    }

    @NotNull
    public final MessageMargins getMargins() {
        return this.margins;
    }

    @Override // com.discord.chat.presentation.message.messagepart.MessageAccessory
    @NotNull
    /* renamed from: getMessageId-3Eiw7ao  reason: not valid java name */
    public String mo536getMessageId3Eiw7ao() {
        return this.messageId;
    }

    public int hashCode() {
        return (((((MessageId.m1089hashCodeimpl(this.messageId) * 31) + this.margins.hashCode()) * 31) + this.activityInstanceEmbed.hashCode()) * 31) + Integer.hashCode(this.constrainedWidth);
    }

    @NotNull
    public String toString() {
        String m1091toStringimpl = MessageId.m1091toStringimpl(this.messageId);
        MessageMargins messageMargins = this.margins;
        ActivityInstanceEmbed activityInstanceEmbed = this.activityInstanceEmbed;
        int i10 = this.constrainedWidth;
        return "ActivityInstanceEmbedMessageAccessory(messageId=" + m1091toStringimpl + ", margins=" + messageMargins + ", activityInstanceEmbed=" + activityInstanceEmbed + ", constrainedWidth=" + i10 + ")";
    }

    /* JADX WARN: Illegal instructions before constructor call */
    /*
        Code decompiled incorrectly, please refer to instructions dump.
        To view partially-correct add '--show-bad-code' argument
    */
    private ActivityInstanceEmbedMessageAccessory(java.lang.String r10, com.discord.chat.presentation.message.messagepart.MessageMargins r11, com.discord.chat.bridge.activities.ActivityInstanceEmbed r12, int r13) {
        /*
            r9 = this;
            java.lang.String r0 = "messageId"
            kotlin.jvm.internal.Intrinsics.checkNotNullParameter(r10, r0)
            java.lang.String r0 = "margins"
            kotlin.jvm.internal.Intrinsics.checkNotNullParameter(r11, r0)
            java.lang.String r0 = "activityInstanceEmbed"
            kotlin.jvm.internal.Intrinsics.checkNotNullParameter(r12, r0)
            java.lang.String r0 = r12.getInstanceId()
            java.lang.StringBuilder r1 = new java.lang.StringBuilder
            r1.<init>()
            java.lang.String r2 = "activity instance "
            r1.append(r2)
            r1.append(r0)
            java.lang.String r5 = r1.toString()
            r7 = 4
            r8 = 0
            r6 = 0
            r3 = r9
            r4 = r10
            r3.<init>(r4, r5, r6, r7, r8)
            r3.messageId = r4
            r3.margins = r11
            r3.activityInstanceEmbed = r12
            r3.constrainedWidth = r13
            return
        */
        throw new UnsupportedOperationException("Method not decompiled: com.discord.chat.presentation.message.messagepart.ActivityInstanceEmbedMessageAccessory.<init>(java.lang.String, com.discord.chat.presentation.message.messagepart.MessageMargins, com.discord.chat.bridge.activities.ActivityInstanceEmbed, int):void");
    }
}

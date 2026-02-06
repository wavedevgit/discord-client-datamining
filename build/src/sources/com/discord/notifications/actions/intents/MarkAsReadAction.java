package com.discord.notifications.actions.intents;

import android.app.PendingIntent;
import android.content.Context;
import android.content.Intent;
import android.os.Bundle;
import android.os.Parcel;
import android.os.Parcelable;
import com.discord.notifications.actions.intents.NotificationAction;
import com.discord.primitives.ChannelId;
import com.discord.primitives.MessageId;
import com.discord.react.headless_tasks.api.HeadlessTasks;
import kotlin.Metadata;
import kotlin.jvm.internal.DefaultConstructorMarker;
import kotlin.jvm.internal.Intrinsics;
import org.jetbrains.annotations.NotNull;
@Metadata(d1 = {"\u0000N\n\u0002\u0018\u0002\n\u0002\u0018\u0002\n\u0000\n\u0002\u0010\u000e\n\u0000\n\u0002\u0018\u0002\n\u0000\n\u0002\u0018\u0002\n\u0002\b\u0007\n\u0002\u0010\u0002\n\u0000\n\u0002\u0018\u0002\n\u0000\n\u0002\u0018\u0002\n\u0002\b\n\n\u0002\u0010\b\n\u0000\n\u0002\u0010\u000b\n\u0000\n\u0002\u0010\u0000\n\u0002\b\u0004\n\u0002\u0018\u0002\n\u0002\b\u0002\b\u0087\b\u0018\u00002\u00020\u0001B\u001f\u0012\u0006\u0010\u0002\u001a\u00020\u0003\u0012\u0006\u0010\u0004\u001a\u00020\u0005\u0012\u0006\u0010\u0006\u001a\u00020\u0007¢\u0006\u0004\b\b\u0010\tJ\u0018\u0010\u000e\u001a\u00020\u000f2\u0006\u0010\u0010\u001a\u00020\u00112\u0006\u0010\u0012\u001a\u00020\u0013H\u0016J\t\u0010\u0014\u001a\u00020\u0003HÆ\u0003J\u0010\u0010\u0015\u001a\u00020\u0005HÂ\u0003¢\u0006\u0004\b\u0016\u0010\u0017J\u0010\u0010\u0018\u001a\u00020\u0007HÂ\u0003¢\u0006\u0004\b\u0019\u0010\u000bJ.\u0010\u001a\u001a\u00020\u00002\b\b\u0002\u0010\u0002\u001a\u00020\u00032\b\b\u0002\u0010\u0004\u001a\u00020\u00052\b\b\u0002\u0010\u0006\u001a\u00020\u0007HÆ\u0001¢\u0006\u0004\b\u001b\u0010\u001cJ\u0006\u0010\u001d\u001a\u00020\u001eJ\u0013\u0010\u001f\u001a\u00020 2\b\u0010!\u001a\u0004\u0018\u00010\"HÖ\u0003J\t\u0010#\u001a\u00020\u001eHÖ\u0001J\t\u0010$\u001a\u00020\u0003HÖ\u0001J\u0016\u0010%\u001a\u00020\u000f2\u0006\u0010&\u001a\u00020'2\u0006\u0010(\u001a\u00020\u001eR\u0014\u0010\u0002\u001a\u00020\u0003X\u0096\u0004¢\u0006\b\n\u0000\u001a\u0004\b\n\u0010\u000bR\u0010\u0010\u0004\u001a\u00020\u0005X\u0082\u0004¢\u0006\u0004\n\u0002\u0010\fR\u0010\u0010\u0006\u001a\u00020\u0007X\u0082\u0004¢\u0006\u0004\n\u0002\u0010\r¨\u0006)"}, d2 = {"Lcom/discord/notifications/actions/intents/MarkAsReadAction;", "Lcom/discord/notifications/actions/intents/NotificationAction;", "tag", "", "channelId", "Lcom/discord/primitives/ChannelId;", "messageId", "Lcom/discord/primitives/MessageId;", "<init>", "(Ljava/lang/String;JLjava/lang/String;Lkotlin/jvm/internal/DefaultConstructorMarker;)V", "getTag", "()Ljava/lang/String;", "J", "Ljava/lang/String;", "onNotificationAction", "", "context", "Landroid/content/Context;", "intent", "Landroid/content/Intent;", "component1", "component2", "component2-o4g7jtM", "()J", "component3", "component3-3Eiw7ao", "copy", "copy-SHRpUJI", "(Ljava/lang/String;JLjava/lang/String;)Lcom/discord/notifications/actions/intents/MarkAsReadAction;", "describeContents", "", "equals", "", "other", "", "hashCode", "toString", "writeToParcel", "dest", "Landroid/os/Parcel;", "flags", "notification_actions_release"}, k = 1, mv = {2, 1, 0}, xi = 48)
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class MarkAsReadAction implements NotificationAction {
    @NotNull
    public static final Parcelable.Creator<MarkAsReadAction> CREATOR = new Creator();
    private final long channelId;
    @NotNull
    private final String messageId;
    @NotNull
    private final String tag;

    @Metadata(k = 3, mv = {2, 1, 0}, xi = 48)
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    public static final class Creator implements Parcelable.Creator<MarkAsReadAction> {
        /* JADX WARN: Can't rename method to resolve collision */
        @Override // android.os.Parcelable.Creator
        public final MarkAsReadAction createFromParcel(Parcel parcel) {
            Intrinsics.checkNotNullParameter(parcel, "parcel");
            return new MarkAsReadAction(parcel.readString(), ((ChannelId) parcel.readParcelable(MarkAsReadAction.class.getClassLoader())).m1066unboximpl(), ((MessageId) parcel.readParcelable(MarkAsReadAction.class.getClassLoader())).m1092unboximpl(), null);
        }

        /* JADX WARN: Can't rename method to resolve collision */
        @Override // android.os.Parcelable.Creator
        public final MarkAsReadAction[] newArray(int i10) {
            return new MarkAsReadAction[i10];
        }
    }

    public /* synthetic */ MarkAsReadAction(String str, long j10, String str2, DefaultConstructorMarker defaultConstructorMarker) {
        this(str, j10, str2);
    }

    /* renamed from: component2-o4g7jtM  reason: not valid java name */
    private final long m980component2o4g7jtM() {
        return this.channelId;
    }

    /* renamed from: component3-3Eiw7ao  reason: not valid java name */
    private final String m981component33Eiw7ao() {
        return this.messageId;
    }

    /* renamed from: copy-SHRpUJI$default  reason: not valid java name */
    public static /* synthetic */ MarkAsReadAction m982copySHRpUJI$default(MarkAsReadAction markAsReadAction, String str, long j10, String str2, int i10, Object obj) {
        if ((i10 & 1) != 0) {
            str = markAsReadAction.tag;
        }
        if ((i10 & 2) != 0) {
            j10 = markAsReadAction.channelId;
        }
        if ((i10 & 4) != 0) {
            str2 = markAsReadAction.messageId;
        }
        return markAsReadAction.m983copySHRpUJI(str, j10, str2);
    }

    @NotNull
    public final String component1() {
        return this.tag;
    }

    @NotNull
    /* renamed from: copy-SHRpUJI  reason: not valid java name */
    public final MarkAsReadAction m983copySHRpUJI(@NotNull String tag, long j10, @NotNull String messageId) {
        Intrinsics.checkNotNullParameter(tag, "tag");
        Intrinsics.checkNotNullParameter(messageId, "messageId");
        return new MarkAsReadAction(tag, j10, messageId, null);
    }

    @Override // android.os.Parcelable
    public final int describeContents() {
        return 0;
    }

    public boolean equals(Object obj) {
        if (this == obj) {
            return true;
        }
        if (obj instanceof MarkAsReadAction) {
            MarkAsReadAction markAsReadAction = (MarkAsReadAction) obj;
            return Intrinsics.areEqual(this.tag, markAsReadAction.tag) && ChannelId.m1061equalsimpl0(this.channelId, markAsReadAction.channelId) && MessageId.m1087equalsimpl0(this.messageId, markAsReadAction.messageId);
        }
        return false;
    }

    @Override // com.discord.notifications.actions.intents.NotificationAction
    public int getPendingIntentRequestCode() {
        return NotificationAction.DefaultImpls.getPendingIntentRequestCode(this);
    }

    @Override // com.discord.notifications.actions.intents.NotificationAction
    @NotNull
    public String getTag() {
        return this.tag;
    }

    public int hashCode() {
        return (((this.tag.hashCode() * 31) + ChannelId.m1062hashCodeimpl(this.channelId)) * 31) + MessageId.m1088hashCodeimpl(this.messageId);
    }

    @Override // com.discord.notifications.actions.intents.NotificationAction
    public void onNotificationAction(@NotNull Context context, @NotNull Intent intent) {
        Intrinsics.checkNotNullParameter(context, "context");
        Intrinsics.checkNotNullParameter(intent, "intent");
        HeadlessTasks.Companion companion = HeadlessTasks.Companion;
        Bundle bundle = new Bundle();
        bundle.putString("channelId", ChannelId.m1064toStringimpl(this.channelId));
        bundle.putString("messageId", MessageId.m1090toStringimpl(this.messageId));
        HeadlessTasks.Companion.startHeadlessTask$default(companion, context, "MarkAsRead", 0L, false, bundle, true, 12, null);
    }

    @Override // com.discord.notifications.actions.intents.NotificationAction
    public void onNotificationActionComplete(@NotNull Context context) {
        NotificationAction.DefaultImpls.onNotificationActionComplete(this, context);
    }

    @Override // com.discord.notifications.actions.intents.NotificationAction
    @NotNull
    public PendingIntent toPendingIntent(@NotNull Context context, int i10, boolean z10) {
        return NotificationAction.DefaultImpls.toPendingIntent(this, context, i10, z10);
    }

    @NotNull
    public String toString() {
        String str = this.tag;
        String m1064toStringimpl = ChannelId.m1064toStringimpl(this.channelId);
        String m1090toStringimpl = MessageId.m1090toStringimpl(this.messageId);
        return "MarkAsReadAction(tag=" + str + ", channelId=" + m1064toStringimpl + ", messageId=" + m1090toStringimpl + ")";
    }

    @Override // android.os.Parcelable
    public final void writeToParcel(@NotNull Parcel dest, int i10) {
        Intrinsics.checkNotNullParameter(dest, "dest");
        dest.writeString(this.tag);
        dest.writeParcelable(ChannelId.m1057boximpl(this.channelId), i10);
        dest.writeParcelable(MessageId.m1083boximpl(this.messageId), i10);
    }

    private MarkAsReadAction(String tag, long j10, String messageId) {
        Intrinsics.checkNotNullParameter(tag, "tag");
        Intrinsics.checkNotNullParameter(messageId, "messageId");
        this.tag = tag;
        this.channelId = j10;
        this.messageId = messageId;
    }
}

package com.discord.notifications.actions.intents;

import android.app.PendingIntent;
import android.content.Context;
import android.content.Intent;
import android.os.Bundle;
import android.os.Parcel;
import android.os.Parcelable;
import com.discord.notifications.actions.intents.NotificationAction;
import com.discord.primitives.ChannelId;
import com.discord.primitives.GuildId;
import com.discord.primitives.UserId;
import com.discord.react.headless_tasks.api.HeadlessTasks;
import kotlin.Metadata;
import kotlin.jvm.internal.DefaultConstructorMarker;
import kotlin.jvm.internal.Intrinsics;
import org.jetbrains.annotations.NotNull;
@Metadata(d1 = {"\u0000V\n\u0002\u0018\u0002\n\u0002\u0018\u0002\n\u0000\n\u0002\u0010\u000e\n\u0000\n\u0002\u0018\u0002\n\u0000\n\u0002\u0010\u000b\n\u0000\n\u0002\u0018\u0002\n\u0000\n\u0002\u0018\u0002\n\u0002\b\u0006\n\u0002\u0010\u0002\n\u0000\n\u0002\u0018\u0002\n\u0000\n\u0002\u0018\u0002\n\u0002\b\r\n\u0002\u0010\b\n\u0002\b\u0002\n\u0002\u0010\u0000\n\u0002\b\u0004\n\u0002\u0018\u0002\n\u0002\b\u0002\b\u0087\b\u0018\u00002\u00020\u0001B1\u0012\u0006\u0010\u0002\u001a\u00020\u0003\u0012\u0006\u0010\u0004\u001a\u00020\u0005\u0012\u0006\u0010\u0006\u001a\u00020\u0007\u0012\b\u0010\b\u001a\u0004\u0018\u00010\t\u0012\u0006\u0010\n\u001a\u00020\u000b¢\u0006\u0004\b\f\u0010\rJ\u0018\u0010\u0011\u001a\u00020\u00122\u0006\u0010\u0013\u001a\u00020\u00142\u0006\u0010\u0015\u001a\u00020\u0016H\u0016J\t\u0010\u0017\u001a\u00020\u0003HÆ\u0003J\u0010\u0010\u0018\u001a\u00020\u0005HÂ\u0003¢\u0006\u0004\b\u0019\u0010\u001aJ\t\u0010\u001b\u001a\u00020\u0007HÂ\u0003J\u0010\u0010\u001c\u001a\u0004\u0018\u00010\tHÂ\u0003¢\u0006\u0002\b\u001dJ\u0010\u0010\u001e\u001a\u00020\u000bHÂ\u0003¢\u0006\u0004\b\u001f\u0010\u001aJD\u0010 \u001a\u00020\u00002\b\b\u0002\u0010\u0002\u001a\u00020\u00032\b\b\u0002\u0010\u0004\u001a\u00020\u00052\b\b\u0002\u0010\u0006\u001a\u00020\u00072\n\b\u0002\u0010\b\u001a\u0004\u0018\u00010\t2\b\b\u0002\u0010\n\u001a\u00020\u000bHÆ\u0001¢\u0006\u0004\b!\u0010\"J\u0006\u0010#\u001a\u00020$J\u0013\u0010%\u001a\u00020\u00072\b\u0010&\u001a\u0004\u0018\u00010'HÖ\u0003J\t\u0010(\u001a\u00020$HÖ\u0001J\t\u0010)\u001a\u00020\u0003HÖ\u0001J\u0016\u0010*\u001a\u00020\u00122\u0006\u0010+\u001a\u00020,2\u0006\u0010-\u001a\u00020$R\u0014\u0010\u0002\u001a\u00020\u0003X\u0096\u0004¢\u0006\b\n\u0000\u001a\u0004\b\u000e\u0010\u000fR\u0010\u0010\u0004\u001a\u00020\u0005X\u0082\u0004¢\u0006\u0004\n\u0002\u0010\u0010R\u000e\u0010\u0006\u001a\u00020\u0007X\u0082\u0004¢\u0006\u0002\n\u0000R\u0010\u0010\b\u001a\u0004\u0018\u00010\tX\u0082\u0004¢\u0006\u0002\n\u0000R\u0010\u0010\n\u001a\u00020\u000bX\u0082\u0004¢\u0006\u0004\n\u0002\u0010\u0010¨\u0006."}, d2 = {"Lcom/discord/notifications/actions/intents/DismissCallAction;", "Lcom/discord/notifications/actions/intents/NotificationAction;", "tag", "", "channelId", "Lcom/discord/primitives/ChannelId;", "isFullscreenCallUI", "", "guildId", "Lcom/discord/primitives/GuildId;", "userId", "Lcom/discord/primitives/UserId;", "<init>", "(Ljava/lang/String;JZLcom/discord/primitives/GuildId;JLkotlin/jvm/internal/DefaultConstructorMarker;)V", "getTag", "()Ljava/lang/String;", "J", "onNotificationAction", "", "context", "Landroid/content/Context;", "intent", "Landroid/content/Intent;", "component1", "component2", "component2-o4g7jtM", "()J", "component3", "component4", "component4-qOKuAAo", "component5", "component5-re6GcUE", "copy", "copy-ZtnKfUs", "(Ljava/lang/String;JZLcom/discord/primitives/GuildId;J)Lcom/discord/notifications/actions/intents/DismissCallAction;", "describeContents", "", "equals", "other", "", "hashCode", "toString", "writeToParcel", "dest", "Landroid/os/Parcel;", "flags", "notification_actions_release"}, k = 1, mv = {2, 1, 0}, xi = 48)
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class DismissCallAction implements NotificationAction {
    @NotNull
    public static final Parcelable.Creator<DismissCallAction> CREATOR = new Creator();
    private final long channelId;
    private final GuildId guildId;
    private final boolean isFullscreenCallUI;
    @NotNull
    private final String tag;
    private final long userId;

    @Metadata(k = 3, mv = {2, 1, 0}, xi = 48)
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    public static final class Creator implements Parcelable.Creator<DismissCallAction> {
        /* JADX WARN: Can't rename method to resolve collision */
        @Override // android.os.Parcelable.Creator
        public final DismissCallAction createFromParcel(Parcel parcel) {
            Intrinsics.checkNotNullParameter(parcel, "parcel");
            return new DismissCallAction(parcel.readString(), ((ChannelId) parcel.readParcelable(DismissCallAction.class.getClassLoader())).m1066unboximpl(), parcel.readInt() != 0, (GuildId) parcel.readParcelable(DismissCallAction.class.getClassLoader()), ((UserId) parcel.readParcelable(DismissCallAction.class.getClassLoader())).m1144unboximpl(), null);
        }

        /* JADX WARN: Can't rename method to resolve collision */
        @Override // android.os.Parcelable.Creator
        public final DismissCallAction[] newArray(int i10) {
            return new DismissCallAction[i10];
        }
    }

    public /* synthetic */ DismissCallAction(String str, long j10, boolean z10, GuildId guildId, long j11, DefaultConstructorMarker defaultConstructorMarker) {
        this(str, j10, z10, guildId, j11);
    }

    /* renamed from: component2-o4g7jtM  reason: not valid java name */
    private final long m975component2o4g7jtM() {
        return this.channelId;
    }

    private final boolean component3() {
        return this.isFullscreenCallUI;
    }

    /* renamed from: component4-qOKuAAo  reason: not valid java name */
    private final GuildId m976component4qOKuAAo() {
        return this.guildId;
    }

    /* renamed from: component5-re6GcUE  reason: not valid java name */
    private final long m977component5re6GcUE() {
        return this.userId;
    }

    /* renamed from: copy-ZtnKfUs$default  reason: not valid java name */
    public static /* synthetic */ DismissCallAction m978copyZtnKfUs$default(DismissCallAction dismissCallAction, String str, long j10, boolean z10, GuildId guildId, long j11, int i10, Object obj) {
        if ((i10 & 1) != 0) {
            str = dismissCallAction.tag;
        }
        if ((i10 & 2) != 0) {
            j10 = dismissCallAction.channelId;
        }
        if ((i10 & 4) != 0) {
            z10 = dismissCallAction.isFullscreenCallUI;
        }
        if ((i10 & 8) != 0) {
            guildId = dismissCallAction.guildId;
        }
        if ((i10 & 16) != 0) {
            j11 = dismissCallAction.userId;
        }
        return dismissCallAction.m979copyZtnKfUs(str, j10, z10, guildId, j11);
    }

    @NotNull
    public final String component1() {
        return this.tag;
    }

    @NotNull
    /* renamed from: copy-ZtnKfUs  reason: not valid java name */
    public final DismissCallAction m979copyZtnKfUs(@NotNull String tag, long j10, boolean z10, GuildId guildId, long j11) {
        Intrinsics.checkNotNullParameter(tag, "tag");
        return new DismissCallAction(tag, j10, z10, guildId, j11, null);
    }

    @Override // android.os.Parcelable
    public final int describeContents() {
        return 0;
    }

    public boolean equals(Object obj) {
        if (this == obj) {
            return true;
        }
        if (obj instanceof DismissCallAction) {
            DismissCallAction dismissCallAction = (DismissCallAction) obj;
            return Intrinsics.areEqual(this.tag, dismissCallAction.tag) && ChannelId.m1061equalsimpl0(this.channelId, dismissCallAction.channelId) && this.isFullscreenCallUI == dismissCallAction.isFullscreenCallUI && Intrinsics.areEqual(this.guildId, dismissCallAction.guildId) && UserId.m1139equalsimpl0(this.userId, dismissCallAction.userId);
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
        int hashCode = ((((this.tag.hashCode() * 31) + ChannelId.m1062hashCodeimpl(this.channelId)) * 31) + Boolean.hashCode(this.isFullscreenCallUI)) * 31;
        GuildId guildId = this.guildId;
        return ((hashCode + (guildId == null ? 0 : GuildId.m1075hashCodeimpl(guildId.m1079unboximpl()))) * 31) + UserId.m1140hashCodeimpl(this.userId);
    }

    @Override // com.discord.notifications.actions.intents.NotificationAction
    public void onNotificationAction(@NotNull Context context, @NotNull Intent intent) {
        Long l10;
        Intrinsics.checkNotNullParameter(context, "context");
        Intrinsics.checkNotNullParameter(intent, "intent");
        HeadlessTasks.Companion companion = HeadlessTasks.Companion;
        Bundle bundle = new Bundle();
        bundle.putString("channelId", String.valueOf(this.channelId));
        bundle.putBoolean("isFullscreenCallUI", this.isFullscreenCallUI);
        GuildId guildId = this.guildId;
        if (guildId != null) {
            l10 = Long.valueOf(guildId.m1079unboximpl());
        } else {
            l10 = null;
        }
        bundle.putString("guildId", String.valueOf(l10));
        bundle.putString("userId", String.valueOf(this.userId));
        HeadlessTasks.Companion.startHeadlessTask$default(companion, context, "DismissCallAction", 0L, false, bundle, true, 12, null);
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
        boolean z10 = this.isFullscreenCallUI;
        GuildId guildId = this.guildId;
        String m1142toStringimpl = UserId.m1142toStringimpl(this.userId);
        return "DismissCallAction(tag=" + str + ", channelId=" + m1064toStringimpl + ", isFullscreenCallUI=" + z10 + ", guildId=" + guildId + ", userId=" + m1142toStringimpl + ")";
    }

    @Override // android.os.Parcelable
    public final void writeToParcel(@NotNull Parcel dest, int i10) {
        Intrinsics.checkNotNullParameter(dest, "dest");
        dest.writeString(this.tag);
        dest.writeParcelable(ChannelId.m1057boximpl(this.channelId), i10);
        dest.writeInt(this.isFullscreenCallUI ? 1 : 0);
        dest.writeParcelable(this.guildId, i10);
        dest.writeParcelable(UserId.m1135boximpl(this.userId), i10);
    }

    private DismissCallAction(String tag, long j10, boolean z10, GuildId guildId, long j11) {
        Intrinsics.checkNotNullParameter(tag, "tag");
        this.tag = tag;
        this.channelId = j10;
        this.isFullscreenCallUI = z10;
        this.guildId = guildId;
        this.userId = j11;
    }
}

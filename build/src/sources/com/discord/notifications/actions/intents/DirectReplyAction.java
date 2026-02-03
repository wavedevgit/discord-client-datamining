package com.discord.notifications.actions.intents;

import android.app.PendingIntent;
import android.content.Context;
import android.content.Intent;
import android.os.Bundle;
import android.os.Parcel;
import android.os.Parcelable;
import androidx.core.app.RemoteInput;
import com.discord.notifications.actions.intents.NotificationAction;
import com.discord.notifications.renderer.NotificationRenderer;
import com.discord.primitives.ChannelId;
import com.discord.react.headless_tasks.api.HeadlessTasks;
import kotlin.Metadata;
import kotlin.jvm.internal.DefaultConstructorMarker;
import kotlin.jvm.internal.Intrinsics;
import kotlin.jvm.internal.SourceDebugExtension;
import kotlin.text.StringsKt;
import org.jetbrains.annotations.NotNull;
@Metadata(d1 = {"\u0000J\n\u0002\u0018\u0002\n\u0002\u0018\u0002\n\u0000\n\u0002\u0010\u000e\n\u0000\n\u0002\u0018\u0002\n\u0002\b\u0002\n\u0002\u0010\b\n\u0002\b\b\n\u0002\u0010\u0002\n\u0000\n\u0002\u0018\u0002\n\u0000\n\u0002\u0018\u0002\n\u0002\b\u000e\n\u0002\u0010\u000b\n\u0000\n\u0002\u0010\u0000\n\u0002\b\u0004\n\u0002\u0018\u0002\n\u0002\b\u0003\b\u0087\b\u0018\u0000 -2\u00020\u0001:\u0001-B5\u0012\u0006\u0010\u0002\u001a\u00020\u0003\u0012\u0006\u0010\u0004\u001a\u00020\u0005\u0012\b\u0010\u0006\u001a\u0004\u0018\u00010\u0003\u0012\b\u0010\u0007\u001a\u0004\u0018\u00010\b\u0012\b\u0010\t\u001a\u0004\u0018\u00010\u0003¢\u0006\u0004\b\n\u0010\u000bJ\u0018\u0010\u0010\u001a\u00020\u00112\u0006\u0010\u0012\u001a\u00020\u00132\u0006\u0010\u0014\u001a\u00020\u0015H\u0016J\u0010\u0010\u0016\u001a\u00020\u00112\u0006\u0010\u0012\u001a\u00020\u0013H\u0016J\t\u0010\u0017\u001a\u00020\u0003HÆ\u0003J\u0010\u0010\u0018\u001a\u00020\u0005HÂ\u0003¢\u0006\u0004\b\u0019\u0010\u001aJ\u000b\u0010\u001b\u001a\u0004\u0018\u00010\u0003HÂ\u0003J\u0010\u0010\u001c\u001a\u0004\u0018\u00010\bHÂ\u0003¢\u0006\u0002\u0010\u001dJ\u000b\u0010\u001e\u001a\u0004\u0018\u00010\u0003HÂ\u0003JH\u0010\u001f\u001a\u00020\u00002\b\b\u0002\u0010\u0002\u001a\u00020\u00032\b\b\u0002\u0010\u0004\u001a\u00020\u00052\n\b\u0002\u0010\u0006\u001a\u0004\u0018\u00010\u00032\n\b\u0002\u0010\u0007\u001a\u0004\u0018\u00010\b2\n\b\u0002\u0010\t\u001a\u0004\u0018\u00010\u0003HÆ\u0001¢\u0006\u0004\b \u0010!J\u0006\u0010\"\u001a\u00020\bJ\u0013\u0010#\u001a\u00020$2\b\u0010%\u001a\u0004\u0018\u00010&HÖ\u0003J\t\u0010'\u001a\u00020\bHÖ\u0001J\t\u0010(\u001a\u00020\u0003HÖ\u0001J\u0016\u0010)\u001a\u00020\u00112\u0006\u0010*\u001a\u00020+2\u0006\u0010,\u001a\u00020\bR\u0014\u0010\u0002\u001a\u00020\u0003X\u0096\u0004¢\u0006\b\n\u0000\u001a\u0004\b\f\u0010\rR\u0010\u0010\u0004\u001a\u00020\u0005X\u0082\u0004¢\u0006\u0004\n\u0002\u0010\u000eR\u0010\u0010\u0006\u001a\u0004\u0018\u00010\u0003X\u0082\u0004¢\u0006\u0002\n\u0000R\u0012\u0010\u0007\u001a\u0004\u0018\u00010\bX\u0082\u0004¢\u0006\u0004\n\u0002\u0010\u000fR\u0010\u0010\t\u001a\u0004\u0018\u00010\u0003X\u0082\u0004¢\u0006\u0002\n\u0000¨\u0006."}, d2 = {"Lcom/discord/notifications/actions/intents/DirectReplyAction;", "Lcom/discord/notifications/actions/intents/NotificationAction;", "tag", "", "channelId", "Lcom/discord/primitives/ChannelId;", NotificationRenderer.CHANNEL_NAME, "channelType", "", "guildName", "<init>", "(Ljava/lang/String;JLjava/lang/String;Ljava/lang/Integer;Ljava/lang/String;Lkotlin/jvm/internal/DefaultConstructorMarker;)V", "getTag", "()Ljava/lang/String;", "J", "Ljava/lang/Integer;", "onNotificationAction", "", "context", "Landroid/content/Context;", "intent", "Landroid/content/Intent;", "onNotificationActionComplete", "component1", "component2", "component2-o4g7jtM", "()J", "component3", "component4", "()Ljava/lang/Integer;", "component5", "copy", "copy-H-xa5aA", "(Ljava/lang/String;JLjava/lang/String;Ljava/lang/Integer;Ljava/lang/String;)Lcom/discord/notifications/actions/intents/DirectReplyAction;", "describeContents", "equals", "", "other", "", "hashCode", "toString", "writeToParcel", "dest", "Landroid/os/Parcel;", "flags", "Companion", "notification_actions_release"}, k = 1, mv = {2, 1, 0}, xi = 48)
@SourceDebugExtension({"SMAP\nDirectReplyAction.kt\nKotlin\n*S Kotlin\n*F\n+ 1 DirectReplyAction.kt\ncom/discord/notifications/actions/intents/DirectReplyAction\n+ 2 fake.kt\nkotlin/jvm/internal/FakeKt\n*L\n1#1,57:1\n1#2:58\n*E\n"})
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class DirectReplyAction implements NotificationAction {
    @NotNull
    private static final String KEY_REMOTE_INPUT = "remote_input_key";
    private final long channelId;
    private final String channelName;
    private final Integer channelType;
    private final String guildName;
    @NotNull
    private final String tag;
    @NotNull
    public static final Companion Companion = new Companion(null);
    @NotNull
    public static final Parcelable.Creator<DirectReplyAction> CREATOR = new Creator();

    @Metadata(d1 = {"\u0000 \n\u0002\u0018\u0002\n\u0002\u0010\u0000\n\u0002\b\u0003\n\u0002\u0010\u000e\n\u0000\n\u0002\u0018\u0002\n\u0002\b\u0003\n\u0002\u0018\u0002\n\u0000\b\u0086\u0003\u0018\u00002\u00020\u0001B\t\b\u0002¢\u0006\u0004\b\u0002\u0010\u0003J\u000e\u0010\u0006\u001a\u00020\u00072\u0006\u0010\b\u001a\u00020\u0005J\u0012\u0010\t\u001a\u0004\u0018\u00010\u00052\u0006\u0010\n\u001a\u00020\u000bH\u0002R\u000e\u0010\u0004\u001a\u00020\u0005X\u0082T¢\u0006\u0002\n\u0000¨\u0006\f"}, d2 = {"Lcom/discord/notifications/actions/intents/DirectReplyAction$Companion;", "", "<init>", "()V", "KEY_REMOTE_INPUT", "", "toRemoteInput", "Landroidx/core/app/RemoteInput;", "label", "getReplyText", "intent", "Landroid/content/Intent;", "notification_actions_release"}, k = 1, mv = {2, 1, 0}, xi = 48)
    @SourceDebugExtension({"SMAP\nDirectReplyAction.kt\nKotlin\n*S Kotlin\n*F\n+ 1 DirectReplyAction.kt\ncom/discord/notifications/actions/intents/DirectReplyAction$Companion\n+ 2 fake.kt\nkotlin/jvm/internal/FakeKt\n*L\n1#1,57:1\n1#2:58\n*E\n"})
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    public static final class Companion {
        public /* synthetic */ Companion(DefaultConstructorMarker defaultConstructorMarker) {
            this();
        }

        /* JADX INFO: Access modifiers changed from: private */
        public final String getReplyText(Intent intent) {
            CharSequence charSequence;
            Bundle k10 = RemoteInput.k(intent);
            if (k10 != null && (charSequence = k10.getCharSequence(DirectReplyAction.KEY_REMOTE_INPUT)) != null) {
                if (StringsKt.k0(charSequence)) {
                    charSequence = null;
                }
                if (charSequence != null) {
                    return charSequence.toString();
                }
            }
            return null;
        }

        @NotNull
        public final RemoteInput toRemoteInput(@NotNull String label) {
            Intrinsics.checkNotNullParameter(label, "label");
            RemoteInput b10 = new RemoteInput.d(DirectReplyAction.KEY_REMOTE_INPUT).g(label).b();
            Intrinsics.checkNotNullExpressionValue(b10, "build(...)");
            return b10;
        }

        private Companion() {
        }
    }

    @Metadata(k = 3, mv = {2, 1, 0}, xi = 48)
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    public static final class Creator implements Parcelable.Creator<DirectReplyAction> {
        /* JADX WARN: Can't rename method to resolve collision */
        @Override // android.os.Parcelable.Creator
        public final DirectReplyAction createFromParcel(Parcel parcel) {
            Intrinsics.checkNotNullParameter(parcel, "parcel");
            return new DirectReplyAction(parcel.readString(), ((ChannelId) parcel.readParcelable(DirectReplyAction.class.getClassLoader())).m1068unboximpl(), parcel.readString(), parcel.readInt() == 0 ? null : Integer.valueOf(parcel.readInt()), parcel.readString(), null);
        }

        /* JADX WARN: Can't rename method to resolve collision */
        @Override // android.os.Parcelable.Creator
        public final DirectReplyAction[] newArray(int i10) {
            return new DirectReplyAction[i10];
        }
    }

    public /* synthetic */ DirectReplyAction(String str, long j10, String str2, Integer num, String str3, DefaultConstructorMarker defaultConstructorMarker) {
        this(str, j10, str2, num, str3);
    }

    /* renamed from: component2-o4g7jtM  reason: not valid java name */
    private final long m974component2o4g7jtM() {
        return this.channelId;
    }

    private final String component3() {
        return this.channelName;
    }

    private final Integer component4() {
        return this.channelType;
    }

    private final String component5() {
        return this.guildName;
    }

    /* renamed from: copy-H-xa5aA$default  reason: not valid java name */
    public static /* synthetic */ DirectReplyAction m975copyHxa5aA$default(DirectReplyAction directReplyAction, String str, long j10, String str2, Integer num, String str3, int i10, Object obj) {
        if ((i10 & 1) != 0) {
            str = directReplyAction.tag;
        }
        if ((i10 & 2) != 0) {
            j10 = directReplyAction.channelId;
        }
        if ((i10 & 4) != 0) {
            str2 = directReplyAction.channelName;
        }
        if ((i10 & 8) != 0) {
            num = directReplyAction.channelType;
        }
        if ((i10 & 16) != 0) {
            str3 = directReplyAction.guildName;
        }
        String str4 = str3;
        String str5 = str2;
        return directReplyAction.m976copyHxa5aA(str, j10, str5, num, str4);
    }

    @NotNull
    public final String component1() {
        return this.tag;
    }

    @NotNull
    /* renamed from: copy-H-xa5aA  reason: not valid java name */
    public final DirectReplyAction m976copyHxa5aA(@NotNull String tag, long j10, String str, Integer num, String str2) {
        Intrinsics.checkNotNullParameter(tag, "tag");
        return new DirectReplyAction(tag, j10, str, num, str2, null);
    }

    @Override // android.os.Parcelable
    public final int describeContents() {
        return 0;
    }

    public boolean equals(Object obj) {
        if (this == obj) {
            return true;
        }
        if (obj instanceof DirectReplyAction) {
            DirectReplyAction directReplyAction = (DirectReplyAction) obj;
            return Intrinsics.areEqual(this.tag, directReplyAction.tag) && ChannelId.m1063equalsimpl0(this.channelId, directReplyAction.channelId) && Intrinsics.areEqual(this.channelName, directReplyAction.channelName) && Intrinsics.areEqual(this.channelType, directReplyAction.channelType) && Intrinsics.areEqual(this.guildName, directReplyAction.guildName);
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
        int hashCode = ((this.tag.hashCode() * 31) + ChannelId.m1064hashCodeimpl(this.channelId)) * 31;
        String str = this.channelName;
        int hashCode2 = (hashCode + (str == null ? 0 : str.hashCode())) * 31;
        Integer num = this.channelType;
        int hashCode3 = (hashCode2 + (num == null ? 0 : num.hashCode())) * 31;
        String str2 = this.guildName;
        return hashCode3 + (str2 != null ? str2.hashCode() : 0);
    }

    @Override // com.discord.notifications.actions.intents.NotificationAction
    public void onNotificationAction(@NotNull Context context, @NotNull Intent intent) {
        Intrinsics.checkNotNullParameter(context, "context");
        Intrinsics.checkNotNullParameter(intent, "intent");
        String replyText = Companion.getReplyText(intent);
        HeadlessTasks.Companion companion = HeadlessTasks.Companion;
        Bundle bundle = new Bundle();
        bundle.putString("channelId", String.valueOf(this.channelId));
        bundle.putString(NotificationRenderer.CHANNEL_NAME, this.channelName);
        bundle.putString("channelReplyText", replyText);
        Integer num = this.channelType;
        if (num != null) {
            bundle.putInt("channelType", num.intValue());
        }
        bundle.putString("guildName", this.guildName);
        HeadlessTasks.Companion.startHeadlessTask$default(companion, context, "DirectReply", 0L, false, bundle, true, 12, null);
    }

    @Override // com.discord.notifications.actions.intents.NotificationAction
    public void onNotificationActionComplete(@NotNull Context context) {
        Intrinsics.checkNotNullParameter(context, "context");
    }

    @Override // com.discord.notifications.actions.intents.NotificationAction
    @NotNull
    public PendingIntent toPendingIntent(@NotNull Context context, int i10, boolean z10) {
        return NotificationAction.DefaultImpls.toPendingIntent(this, context, i10, z10);
    }

    @NotNull
    public String toString() {
        String str = this.tag;
        String m1066toStringimpl = ChannelId.m1066toStringimpl(this.channelId);
        String str2 = this.channelName;
        Integer num = this.channelType;
        String str3 = this.guildName;
        return "DirectReplyAction(tag=" + str + ", channelId=" + m1066toStringimpl + ", channelName=" + str2 + ", channelType=" + num + ", guildName=" + str3 + ")";
    }

    @Override // android.os.Parcelable
    public final void writeToParcel(@NotNull Parcel dest, int i10) {
        int intValue;
        Intrinsics.checkNotNullParameter(dest, "dest");
        dest.writeString(this.tag);
        dest.writeParcelable(ChannelId.m1059boximpl(this.channelId), i10);
        dest.writeString(this.channelName);
        Integer num = this.channelType;
        if (num == null) {
            intValue = 0;
        } else {
            dest.writeInt(1);
            intValue = num.intValue();
        }
        dest.writeInt(intValue);
        dest.writeString(this.guildName);
    }

    private DirectReplyAction(String tag, long j10, String str, Integer num, String str2) {
        Intrinsics.checkNotNullParameter(tag, "tag");
        this.tag = tag;
        this.channelId = j10;
        this.channelName = str;
        this.channelType = num;
        this.guildName = str2;
    }
}

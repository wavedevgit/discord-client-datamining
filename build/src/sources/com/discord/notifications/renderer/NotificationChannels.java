package com.discord.notifications.renderer;

import android.content.Context;
import android.media.AudioAttributes;
import android.net.Uri;
import android.os.Build;
import androidx.core.app.NotificationChannelCompat;
import androidx.core.app.k;
import com.discord.crash_reporting.CrashReporting;
import com.discord.notifications.api.NotificationData;
import com.discord.notifications.renderer.NotificationChannels;
import com.discord.notifications.renderer.utils.NotificationManagerUtilsKt;
import com.discord.theme.utils.ColorUtilsKt;
import com.facebook.react.devsupport.StackTraceHelper;
import java.util.ArrayList;
import java.util.Iterator;
import java.util.LinkedHashMap;
import java.util.List;
import java.util.Map;
import kotlin.Metadata;
import kotlin.Pair;
import kotlin.Unit;
import kotlin.collections.CollectionsKt;
import kotlin.collections.o0;
import kotlin.enums.EnumEntries;
import kotlin.jvm.functions.Function2;
import kotlin.jvm.internal.DefaultConstructorMarker;
import kotlin.jvm.internal.Intrinsics;
import kotlin.jvm.internal.SourceDebugExtension;
import kotlin.text.StringsKt;
import org.jetbrains.annotations.NotNull;
import qr.v;
@Metadata(d1 = {"\u0000`\n\u0002\u0018\u0002\n\u0002\u0010\u0000\n\u0002\b\u0002\n\u0002\u0018\u0002\n\u0002\u0010\u000e\n\u0002\b\u0002\n\u0002\u0018\u0002\n\u0000\n\u0002\u0018\u0002\n\u0002\b\u0004\n\u0002\u0018\u0002\n\u0002\b\u0002\n\u0002\u0010$\n\u0000\n\u0002\u0010 \n\u0002\u0018\u0002\n\u0002\b\u0003\n\u0002\u0010\b\n\u0002\b\u0002\n\u0002\u0018\u0002\n\u0002\u0018\u0002\n\u0002\u0010\u0002\n\u0002\b\u0011\n\u0002\u0018\u0002\n\u0002\b\b\bÀ\u0002\u0018\u00002\u00020\u0001:\u0003567B\t\b\u0002¢\u0006\u0004\b\u0002\u0010\u0003J\u0013\u0010\u0006\u001a\u00020\u0005*\u00020\u0004H\u0002¢\u0006\u0004\b\u0006\u0010\u0007J\u0019\u0010\u000b\u001a\u0004\u0018\u00010\n2\u0006\u0010\t\u001a\u00020\bH\u0002¢\u0006\u0004\b\u000b\u0010\fJ\u0017\u0010\r\u001a\u00020\u00052\u0006\u0010\t\u001a\u00020\bH\u0002¢\u0006\u0004\b\r\u0010\u000eJ\u001d\u0010\u0010\u001a\u0004\u0018\u00010\n*\u00020\u000f2\u0006\u0010\t\u001a\u00020\bH\u0002¢\u0006\u0004\b\u0010\u0010\u0011J1\u0010\u0016\u001a\b\u0012\u0004\u0012\u00020\u00150\u00142\u0006\u0010\t\u001a\u00020\b2\u0012\u0010\u0013\u001a\u000e\u0012\u0004\u0012\u00020\u0005\u0012\u0004\u0012\u00020\u00050\u0012H\u0002¢\u0006\u0004\b\u0016\u0010\u0017J[\u0010 \u001a\u0004\u0018\u00010\n2\u0006\u0010\t\u001a\u00020\b2\u0006\u0010\u0018\u001a\u00020\u000f2\u0006\u0010\u001a\u001a\u00020\u00192\u0012\u0010\u001b\u001a\u000e\u0012\u0004\u0012\u00020\u0005\u0012\u0004\u0012\u00020\u00050\u00122\u001c\b\u0002\u0010\u001f\u001a\u0016\u0012\u0006\u0012\u0004\u0018\u00010\n\u0012\u0004\u0012\u00020\u001d\u0012\u0004\u0012\u00020\u001e0\u001cH\u0002¢\u0006\u0004\b \u0010!J5\u0010%\u001a\u00020\u001e2\u0006\u0010\t\u001a\u00020\b2\b\u0010\"\u001a\u0004\u0018\u00010\n2\u0006\u0010#\u001a\u00020\u001d2\n\b\u0002\u0010$\u001a\u0004\u0018\u00010\u0019H\u0002¢\u0006\u0004\b%\u0010&J!\u0010'\u001a\u00020\u001e2\b\u0010\"\u001a\u0004\u0018\u00010\n2\u0006\u0010#\u001a\u00020\u001dH\u0002¢\u0006\u0004\b'\u0010(J=\u0010)\u001a\u00020\u001e2\u0006\u0010\t\u001a\u00020\b2\u0012\u0010\u001b\u001a\u000e\u0012\u0004\u0012\u00020\u0005\u0012\u0004\u0012\u00020\u00050\u00122\u0012\u0010\u0013\u001a\u000e\u0012\u0004\u0012\u00020\u0005\u0012\u0004\u0012\u00020\u00050\u0012¢\u0006\u0004\b)\u0010*J\u001d\u0010,\u001a\u00020\u001e2\u0006\u0010\t\u001a\u00020\b2\u0006\u0010+\u001a\u00020\u0005¢\u0006\u0004\b,\u0010-J\r\u0010.\u001a\u00020\u0005¢\u0006\u0004\b.\u0010/J\u0019\u00101\u001a\u00020\u0005*\u0002002\u0006\u0010\t\u001a\u00020\b¢\u0006\u0004\b1\u00102R\u0014\u00103\u001a\u00020\u00058\u0002X\u0082T¢\u0006\u0006\n\u0004\b3\u00104¨\u00068"}, d2 = {"Lcom/discord/notifications/renderer/NotificationChannels;", "", "<init>", "()V", "Lcom/discord/notifications/renderer/NotificationChannels$CallRingtone;", "", "getChannelId", "(Lcom/discord/notifications/renderer/NotificationChannels$CallRingtone;)Ljava/lang/String;", "Landroid/content/Context;", "context", "Landroidx/core/app/NotificationChannelCompat;", "getCallChannel", "(Landroid/content/Context;)Landroidx/core/app/NotificationChannelCompat;", "getCallChannelId", "(Landroid/content/Context;)Ljava/lang/String;", "Lcom/discord/notifications/renderer/NotificationChannels$Category;", "getAndDeleteLegacyNotificationChannel", "(Lcom/discord/notifications/renderer/NotificationChannels$Category;Landroid/content/Context;)Landroidx/core/app/NotificationChannelCompat;", "", "localizedGroupNames", "", "Landroidx/core/app/k;", "createNotificationChannelGroups", "(Landroid/content/Context;Ljava/util/Map;)Ljava/util/List;", "category", "", "brandColor", "localizedCategoryNames", "Lkotlin/Function2;", "Landroidx/core/app/NotificationChannelCompat$Builder;", "", "onConfigure", "migrateOrCreateNotificationChannel", "(Landroid/content/Context;Lcom/discord/notifications/renderer/NotificationChannels$Category;ILjava/util/Map;Lkotlin/jvm/functions/Function2;)Landroidx/core/app/NotificationChannelCompat;", "legacyChannel", "builder", "ringtoneName", "configureCallChannel", "(Landroid/content/Context;Landroidx/core/app/NotificationChannelCompat;Landroidx/core/app/NotificationChannelCompat$Builder;Ljava/lang/Integer;)V", "configureMediaChannel", "(Landroidx/core/app/NotificationChannelCompat;Landroidx/core/app/NotificationChannelCompat$Builder;)V", "init", "(Landroid/content/Context;Ljava/util/Map;Ljava/util/Map;)V", StackTraceHelper.NAME_KEY, "setIncomingRingtone", "(Landroid/content/Context;Ljava/lang/String;)V", "getSilenceCallChannelId", "()Ljava/lang/String;", "Lcom/discord/notifications/api/NotificationData;", "getNotificationChannelId", "(Lcom/discord/notifications/api/NotificationData;Landroid/content/Context;)Ljava/lang/String;", "BASE_CALL_CHANNEL_ID", "Ljava/lang/String;", "ChannelGroup", "Category", "CallRingtone", "notification_renderer_release"}, k = 1, mv = {2, 1, 0}, xi = 48)
@SourceDebugExtension({"SMAP\nNotificationChannels.kt\nKotlin\n*S Kotlin\n*F\n+ 1 NotificationChannels.kt\ncom/discord/notifications/renderer/NotificationChannels\n+ 2 _Arrays.kt\nkotlin/collections/ArraysKt___ArraysKt\n+ 3 fake.kt\nkotlin/jvm/internal/FakeKt\n+ 4 _Collections.kt\nkotlin/collections/CollectionsKt___CollectionsKt\n+ 5 Uri.kt\nandroidx/core/net/UriKt\n*L\n1#1,401:1\n11546#2,9:402\n13472#2:411\n13473#2:413\n11555#2:414\n11228#2:421\n11563#2,3:422\n1#3:412\n1#3:425\n1193#4,2:415\n1267#4,4:417\n29#5:426\n*S KotlinDebug\n*F\n+ 1 NotificationChannels.kt\ncom/discord/notifications/renderer/NotificationChannels\n*L\n142#1:402,9\n142#1:411\n142#1:413\n142#1:414\n308#1:421\n308#1:422,3\n142#1:412\n162#1:415,2\n162#1:417,4\n382#1:426\n*E\n"})
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class NotificationChannels {
    @NotNull
    private static final String BASE_CALL_CHANNEL_ID = "calls";
    @NotNull
    public static final NotificationChannels INSTANCE = new NotificationChannels();

    /* JADX INFO: Access modifiers changed from: private */
    /* JADX WARN: Failed to restore enum class, 'enum' modifier and super class removed */
    /* JADX WARN: Unknown enum class pattern. Please report as an issue! */
    @Metadata(d1 = {"\u0000\u0018\n\u0002\u0018\u0002\n\u0002\u0010\u0010\n\u0000\n\u0002\u0010\u000e\n\u0000\n\u0002\u0010\b\n\u0002\b\n\b\u0082\u0081\u0002\u0018\u0000 \u000e2\b\u0012\u0004\u0012\u00020\u00000\u0001:\u0001\u000eB\u0019\b\u0002\u0012\u0006\u0010\u0002\u001a\u00020\u0003\u0012\u0006\u0010\u0004\u001a\u00020\u0005¢\u0006\u0004\b\u0006\u0010\u0007R\u0011\u0010\u0002\u001a\u00020\u0003¢\u0006\b\n\u0000\u001a\u0004\b\b\u0010\tR\u0011\u0010\u0004\u001a\u00020\u0005¢\u0006\b\n\u0000\u001a\u0004\b\n\u0010\u000bj\u0002\b\fj\u0002\b\r¨\u0006\u000f"}, d2 = {"Lcom/discord/notifications/renderer/NotificationChannels$CallRingtone;", "", StackTraceHelper.ID_KEY, "", "resource", "", "<init>", "(Ljava/lang/String;ILjava/lang/String;I)V", "getId", "()Ljava/lang/String;", "getResource", "()I", "Halloween", "Default", "Companion", "notification_renderer_release"}, k = 1, mv = {2, 1, 0}, xi = 48)
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    public static final class CallRingtone {
        private static final /* synthetic */ EnumEntries $ENTRIES;
        private static final /* synthetic */ CallRingtone[] $VALUES;
        @NotNull
        public static final Companion Companion;
        @NotNull

        /* renamed from: id  reason: collision with root package name */
        private final String f9531id;
        private final int resource;
        public static final CallRingtone Halloween = new CallRingtone("Halloween", 0, "halloween", com.discord.sounds.R.raw.halloween_call_ringing);
        public static final CallRingtone Default = new CallRingtone("Default", 1, "default", com.discord.sounds.R.raw.call_ringing);

        @Metadata(d1 = {"\u0000\u0018\n\u0002\u0018\u0002\n\u0002\u0010\u0000\n\u0002\b\u0003\n\u0002\u0018\u0002\n\u0000\n\u0002\u0010\u000e\n\u0000\b\u0086\u0003\u0018\u00002\u00020\u0001B\t\b\u0002¢\u0006\u0004\b\u0002\u0010\u0003J\u000e\u0010\u0004\u001a\u00020\u00052\u0006\u0010\u0006\u001a\u00020\u0007¨\u0006\b"}, d2 = {"Lcom/discord/notifications/renderer/NotificationChannels$CallRingtone$Companion;", "", "<init>", "()V", "fromName", "Lcom/discord/notifications/renderer/NotificationChannels$CallRingtone;", StackTraceHelper.NAME_KEY, "", "notification_renderer_release"}, k = 1, mv = {2, 1, 0}, xi = 48)
        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
        public static final class Companion {
            public /* synthetic */ Companion(DefaultConstructorMarker defaultConstructorMarker) {
                this();
            }

            @NotNull
            public final CallRingtone fromName(@NotNull String name) {
                Intrinsics.checkNotNullParameter(name, "name");
                if (Intrinsics.areEqual(name, "call_ringing_halloween")) {
                    return CallRingtone.Halloween;
                }
                return CallRingtone.Default;
            }

            private Companion() {
            }
        }

        private static final /* synthetic */ CallRingtone[] $values() {
            return new CallRingtone[]{Halloween, Default};
        }

        static {
            CallRingtone[] $values = $values();
            $VALUES = $values;
            $ENTRIES = xr.a.a($values);
            Companion = new Companion(null);
        }

        private CallRingtone(String str, int i10, String str2, int i11) {
            this.f9531id = str2;
            this.resource = i11;
        }

        @NotNull
        public static EnumEntries getEntries() {
            return $ENTRIES;
        }

        public static CallRingtone valueOf(String str) {
            return (CallRingtone) Enum.valueOf(CallRingtone.class, str);
        }

        public static CallRingtone[] values() {
            return (CallRingtone[]) $VALUES.clone();
        }

        @NotNull
        public final String getId() {
            return this.f9531id;
        }

        public final int getResource() {
            return this.resource;
        }
    }

    /* JADX INFO: Access modifiers changed from: private */
    /* JADX WARN: Failed to restore enum class, 'enum' modifier and super class removed */
    /* JADX WARN: Unknown enum class pattern. Please report as an issue! */
    @Metadata(d1 = {"\u0000\u0012\n\u0002\u0018\u0002\n\u0002\u0010\u0010\n\u0000\n\u0002\u0010\u000e\n\u0002\b\f\b\u0082\u0081\u0002\u0018\u0000 \u000e2\b\u0012\u0004\u0012\u00020\u00000\u0001:\u0001\u000eB\u0019\b\u0002\u0012\u0006\u0010\u0002\u001a\u00020\u0003\u0012\u0006\u0010\u0004\u001a\u00020\u0003¢\u0006\u0004\b\u0005\u0010\u0006R\u0011\u0010\u0002\u001a\u00020\u0003¢\u0006\b\n\u0000\u001a\u0004\b\u0007\u0010\bR\u0011\u0010\u0004\u001a\u00020\u0003¢\u0006\b\n\u0000\u001a\u0004\b\t\u0010\bj\u0002\b\nj\u0002\b\u000bj\u0002\b\fj\u0002\b\r¨\u0006\u000f"}, d2 = {"Lcom/discord/notifications/renderer/NotificationChannels$ChannelGroup;", "", StackTraceHelper.ID_KEY, "", "groupId", "<init>", "(Ljava/lang/String;ILjava/lang/String;Ljava/lang/String;)V", "getId", "()Ljava/lang/String;", "getGroupId", "Realtime", "Social", "Server", "Other", "Companion", "notification_renderer_release"}, k = 1, mv = {2, 1, 0}, xi = 48)
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    public static final class ChannelGroup {
        private static final /* synthetic */ EnumEntries $ENTRIES;
        private static final /* synthetic */ ChannelGroup[] $VALUES;
        @NotNull
        public static final Companion Companion;
        @NotNull
        private final String groupId;
        @NotNull

        /* renamed from: id  reason: collision with root package name */
        private final String f9533id;
        public static final ChannelGroup Realtime = new ChannelGroup("Realtime", 0, "realtime", "111_realtime");
        public static final ChannelGroup Social = new ChannelGroup("Social", 1, "social", "222_social");
        public static final ChannelGroup Server = new ChannelGroup("Server", 2, "server", "333_server");
        public static final ChannelGroup Other = new ChannelGroup("Other", 3, "other", "444_other");

        @Metadata(d1 = {"\u0000\u0014\n\u0002\u0018\u0002\n\u0002\u0010\u0000\n\u0002\b\u0003\n\u0002\u0010\u000e\n\u0002\b\u0002\b\u0086\u0003\u0018\u00002\u00020\u0001B\t\b\u0002¢\u0006\u0004\b\u0002\u0010\u0003J\u000e\u0010\u0004\u001a\u00020\u00052\u0006\u0010\u0006\u001a\u00020\u0005¨\u0006\u0007"}, d2 = {"Lcom/discord/notifications/renderer/NotificationChannels$ChannelGroup$Companion;", "", "<init>", "()V", "defaultLabel", "", StackTraceHelper.ID_KEY, "notification_renderer_release"}, k = 1, mv = {2, 1, 0}, xi = 48)
        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
        public static final class Companion {
            public /* synthetic */ Companion(DefaultConstructorMarker defaultConstructorMarker) {
                this();
            }

            @NotNull
            public final String defaultLabel(@NotNull String id2) {
                Intrinsics.checkNotNullParameter(id2, "id");
                int hashCode = id2.hashCode();
                if (hashCode != -905826493) {
                    if (hashCode != -897050771) {
                        if (hashCode == -859198101 && id2.equals("realtime")) {
                            return "Real-time";
                        }
                        return "Other";
                    } else if (id2.equals("social")) {
                        return "Social";
                    } else {
                        return "Other";
                    }
                } else if (!id2.equals("server")) {
                    return "Other";
                } else {
                    return "Server";
                }
            }

            private Companion() {
            }
        }

        private static final /* synthetic */ ChannelGroup[] $values() {
            return new ChannelGroup[]{Realtime, Social, Server, Other};
        }

        static {
            ChannelGroup[] $values = $values();
            $VALUES = $values;
            $ENTRIES = xr.a.a($values);
            Companion = new Companion(null);
        }

        private ChannelGroup(String str, int i10, String str2, String str3) {
            this.f9533id = str2;
            this.groupId = str3;
        }

        @NotNull
        public static EnumEntries getEntries() {
            return $ENTRIES;
        }

        public static ChannelGroup valueOf(String str) {
            return (ChannelGroup) Enum.valueOf(ChannelGroup.class, str);
        }

        public static ChannelGroup[] values() {
            return (ChannelGroup[]) $VALUES.clone();
        }

        @NotNull
        public final String getGroupId() {
            return this.groupId;
        }

        @NotNull
        public final String getId() {
            return this.f9533id;
        }
    }

    @Metadata(k = 3, mv = {2, 1, 0}, xi = 48)
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    public /* synthetic */ class WhenMappings {
        public static final /* synthetic */ int[] $EnumSwitchMapping$0;
        public static final /* synthetic */ int[] $EnumSwitchMapping$1;

        static {
            int[] iArr = new int[CallRingtone.values().length];
            try {
                iArr[CallRingtone.Default.ordinal()] = 1;
            } catch (NoSuchFieldError unused) {
            }
            $EnumSwitchMapping$0 = iArr;
            int[] iArr2 = new int[Category.values().length];
            try {
                iArr2[Category.Calls.ordinal()] = 1;
            } catch (NoSuchFieldError unused2) {
            }
            try {
                iArr2[Category.MediaConnections.ordinal()] = 2;
            } catch (NoSuchFieldError unused3) {
            }
            $EnumSwitchMapping$1 = iArr2;
        }
    }

    private NotificationChannels() {
    }

    private final void configureCallChannel(Context context, NotificationChannelCompat notificationChannelCompat, NotificationChannelCompat.Builder builder, Integer num) {
        boolean z10;
        NotificationChannelCompat.Builder j10 = builder.j(new long[]{100, 200, 300, 400, 500, 400, 300, 200, 400});
        if (notificationChannelCompat != null) {
            z10 = notificationChannelCompat.a();
        } else {
            z10 = false;
        }
        NotificationChannelCompat.Builder g10 = j10.g(z10);
        StringBuilder sb2 = new StringBuilder();
        sb2.append("android.resource://");
        String packageName = context.getPackageName();
        sb2.append(packageName + "/" + num);
        String sb3 = sb2.toString();
        Intrinsics.checkNotNullExpressionValue(sb3, "toString(...)");
        g10.h(Uri.parse(sb3), new AudioAttributes.Builder().setUsage(5).setContentType(2).build());
    }

    static /* synthetic */ void configureCallChannel$default(NotificationChannels notificationChannels, Context context, NotificationChannelCompat notificationChannelCompat, NotificationChannelCompat.Builder builder, Integer num, int i10, Object obj) {
        if ((i10 & 8) != 0) {
            num = Integer.valueOf(com.discord.sounds.R.raw.call_ringing);
        }
        notificationChannels.configureCallChannel(context, notificationChannelCompat, builder, num);
    }

    private final void configureMediaChannel(NotificationChannelCompat notificationChannelCompat, NotificationChannelCompat.Builder builder) {
        boolean z10;
        boolean z11;
        boolean z12 = false;
        if (notificationChannelCompat != null) {
            z10 = notificationChannelCompat.a();
        } else {
            z10 = false;
        }
        NotificationChannelCompat.Builder g10 = builder.g(z10);
        if (notificationChannelCompat != null) {
            z11 = notificationChannelCompat.g();
        } else {
            z11 = false;
        }
        NotificationChannelCompat.Builder i10 = g10.i(z11);
        if (notificationChannelCompat != null) {
            z12 = notificationChannelCompat.f();
        }
        i10.e(z12);
    }

    private final List<k> createNotificationChannelGroups(Context context, Map<String, String> map) {
        k a10;
        String str;
        ChannelGroup[] values = ChannelGroup.values();
        ArrayList arrayList = new ArrayList(values.length);
        for (ChannelGroup channelGroup : values) {
            if (map.containsKey(channelGroup.getId()) && (str = map.get(channelGroup.getId())) != null && !StringsKt.k0(str)) {
                a10 = new k.c(channelGroup.getGroupId()).c(map.get(channelGroup.getId())).b(map.get(channelGroup.getId())).a();
            } else {
                k.c cVar = new k.c(channelGroup.getGroupId());
                ChannelGroup.Companion companion = ChannelGroup.Companion;
                a10 = cVar.c(companion.defaultLabel(channelGroup.getId())).b(companion.defaultLabel(channelGroup.getId())).a();
            }
            arrayList.add(a10);
        }
        NotificationManagerUtilsKt.getNotificationManagerCompat(context).d(arrayList);
        return arrayList;
    }

    private final NotificationChannelCompat getAndDeleteLegacyNotificationChannel(Category category, Context context) {
        NotificationChannelCompat j10;
        try {
            if (category.getLegacyId() != null && (j10 = NotificationManagerUtilsKt.getNotificationManagerCompat(context).j(category.getLegacyId())) != null) {
                NotificationManagerUtilsKt.getNotificationManagerCompat(context).f(category.getLegacyId());
                return j10;
            }
        } catch (Exception unused) {
        }
        return null;
    }

    private final NotificationChannelCompat getCallChannel(Context context) {
        for (NotificationChannelCompat notificationChannelCompat : NotificationManagerUtilsKt.getNotificationManagerCompat(context).n()) {
            String b10 = notificationChannelCompat.b();
            Intrinsics.checkNotNullExpressionValue(b10, "getId(...)");
            if (StringsKt.P(b10, BASE_CALL_CHANNEL_ID, false, 2, null)) {
                return notificationChannelCompat;
            }
        }
        return null;
    }

    private final String getCallChannelId(Context context) {
        String b10;
        NotificationChannelCompat callChannel = getCallChannel(context);
        if (callChannel != null && (b10 = callChannel.b()) != null) {
            return b10;
        }
        return BASE_CALL_CHANNEL_ID;
    }

    private final String getChannelId(CallRingtone callRingtone) {
        if (WhenMappings.$EnumSwitchMapping$0[callRingtone.ordinal()] == 1) {
            String id2 = CallRingtone.Default.getId();
            return "calls_" + id2;
        }
        String id3 = callRingtone.getId();
        return "calls_" + id3;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit init$lambda$1$lambda$0(Category category, Context context, NotificationChannelCompat notificationChannelCompat, NotificationChannelCompat.Builder builder) {
        Intrinsics.checkNotNullParameter(builder, "builder");
        int i10 = WhenMappings.$EnumSwitchMapping$1[category.ordinal()];
        if (i10 != 1) {
            if (i10 == 2) {
                INSTANCE.configureMediaChannel(notificationChannelCompat, builder);
            }
        } else {
            configureCallChannel$default(INSTANCE, context, notificationChannelCompat, builder, null, 8, null);
        }
        return Unit.f32056a;
    }

    private final NotificationChannelCompat migrateOrCreateNotificationChannel(Context context, Category category, int i10, Map<String, String> map, Function2<? super NotificationChannelCompat, ? super NotificationChannelCompat.Builder, Unit> function2) {
        String defaultLabel;
        String id2;
        boolean z10;
        boolean z11;
        NotificationChannelCompat andDeleteLegacyNotificationChannel = getAndDeleteLegacyNotificationChannel(category, context);
        if (!map.containsKey(category.getId())) {
            NotificationManagerUtilsKt.getNotificationManagerCompat(context).f(category.getId());
            return null;
        }
        String str = map.get(category.getId());
        if (str != null && !StringsKt.k0(str)) {
            defaultLabel = map.get(category.getId());
        } else {
            defaultLabel = Category.Companion.defaultLabel(category);
        }
        boolean z12 = true;
        if (WhenMappings.$EnumSwitchMapping$1[category.ordinal()] == 1) {
            id2 = getCallChannelId(context);
        } else {
            id2 = category.getId();
        }
        NotificationChannelCompat.Builder c10 = new NotificationChannelCompat.Builder(id2, category.getImportance()).f(defaultLabel).b(defaultLabel).c(category.getGroup().getGroupId());
        if (andDeleteLegacyNotificationChannel != null) {
            z10 = andDeleteLegacyNotificationChannel.a();
        } else {
            z10 = true;
        }
        NotificationChannelCompat.Builder g10 = c10.g(z10);
        if (andDeleteLegacyNotificationChannel != null) {
            z11 = andDeleteLegacyNotificationChannel.g();
        } else {
            z11 = true;
        }
        NotificationChannelCompat.Builder i11 = g10.i(z11);
        if (andDeleteLegacyNotificationChannel != null) {
            z12 = andDeleteLegacyNotificationChannel.f();
        }
        NotificationChannelCompat.Builder d10 = i11.e(z12).d(i10);
        Intrinsics.checkNotNull(d10);
        function2.invoke(andDeleteLegacyNotificationChannel, d10);
        return d10.a();
    }

    static /* synthetic */ NotificationChannelCompat migrateOrCreateNotificationChannel$default(NotificationChannels notificationChannels, Context context, Category category, int i10, Map map, Function2 function2, int i11, Object obj) {
        Function2 function22 = function2;
        if ((i11 & 16) != 0) {
            function22 = new Function2() { // from class: com.discord.notifications.renderer.d
                @Override // kotlin.jvm.functions.Function2
                public final Object invoke(Object obj2, Object obj3) {
                    Unit migrateOrCreateNotificationChannel$lambda$8;
                    migrateOrCreateNotificationChannel$lambda$8 = NotificationChannels.migrateOrCreateNotificationChannel$lambda$8((NotificationChannelCompat) obj2, (NotificationChannelCompat.Builder) obj3);
                    return migrateOrCreateNotificationChannel$lambda$8;
                }
            };
        }
        return notificationChannels.migrateOrCreateNotificationChannel(context, category, i10, map, function22);
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit migrateOrCreateNotificationChannel$lambda$8(NotificationChannelCompat notificationChannelCompat, NotificationChannelCompat.Builder builder) {
        Intrinsics.checkNotNullParameter(builder, "<unused var>");
        return Unit.f32056a;
    }

    @NotNull
    public final String getNotificationChannelId(@NotNull NotificationData notificationData, @NotNull Context context) {
        Integer num;
        Category category;
        Intrinsics.checkNotNullParameter(notificationData, "<this>");
        Intrinsics.checkNotNullParameter(context, "context");
        if (!Intrinsics.areEqual(notificationData.getType(), NotificationData.TYPE_CALL_RING) && !Intrinsics.areEqual(notificationData.getType(), NotificationData.TYPE_CALL_RING_END)) {
            if (Intrinsics.areEqual(notificationData.getType(), NotificationData.TYPE_LOCAL_NOTIFICATION)) {
                return Category.SystemMessages.getId();
            }
            String notifTypeId = notificationData.getNotifTypeId();
            if (notifTypeId != null) {
                num = StringsKt.toIntOrNull(notifTypeId);
            } else {
                num = null;
            }
            if ((num == null || num.intValue() != 13) && ((num == null || num.intValue() != 6) && ((num == null || num.intValue() != 16) && (num == null || num.intValue() != 4)))) {
                if (num != null && num.intValue() == 15) {
                    category = Category.Polls;
                } else if (num != null && num.intValue() == 23) {
                    category = Category.Reactions;
                } else if (num != null && num.intValue() == 7) {
                    category = Category.StageStart;
                } else if (num != null && num.intValue() == 9) {
                    category = Category.ForumThreadCreated;
                } else if (num != null && num.intValue() == 3) {
                    category = Category.FriendRequests;
                } else if (num != null && num.intValue() == 8) {
                    category = Category.GuildEventStart;
                } else if (num != null && num.intValue() == 1) {
                    Integer channelType = notificationData.getChannelType();
                    if ((channelType == null || channelType.intValue() != 3) && (channelType == null || channelType.intValue() != 1)) {
                        category = Category.Messages;
                    } else {
                        category = Category.MessagesDirect;
                    }
                } else if ((num == null || num.intValue() != 14) && ((num == null || num.intValue() != 11) && (num == null || num.intValue() != 10))) {
                    if ((num == null || num.intValue() != 27) && (num == null || num.intValue() != 28)) {
                        category = Category.Other;
                    } else {
                        category = Category.SystemMessages;
                    }
                } else {
                    category = Category.OtherServerNotifications;
                }
            } else {
                category = Category.Social;
            }
            return category.getId();
        }
        return getCallChannelId(context);
    }

    @NotNull
    public final String getSilenceCallChannelId() {
        return Category.Social.getId();
    }

    public final void init(@NotNull final Context context, @NotNull Map<String, String> localizedCategoryNames, @NotNull Map<String, String> localizedGroupNames) {
        boolean z10;
        Intrinsics.checkNotNullParameter(context, "context");
        Intrinsics.checkNotNullParameter(localizedCategoryNames, "localizedCategoryNames");
        Intrinsics.checkNotNullParameter(localizedGroupNames, "localizedGroupNames");
        int colorCompat = ColorUtilsKt.getColorCompat(context, com.discord.theme.R.color.brand);
        List<k> createNotificationChannelGroups = createNotificationChannelGroups(context, localizedGroupNames);
        Category[] values = Category.values();
        ArrayList arrayList = new ArrayList();
        int length = values.length;
        int i10 = 0;
        while (i10 < length) {
            final Category category = values[i10];
            Context context2 = context;
            Map<String, String> map = localizedCategoryNames;
            NotificationChannelCompat migrateOrCreateNotificationChannel = INSTANCE.migrateOrCreateNotificationChannel(context2, category, colorCompat, map, new Function2() { // from class: com.discord.notifications.renderer.c
                @Override // kotlin.jvm.functions.Function2
                public final Object invoke(Object obj, Object obj2) {
                    Unit init$lambda$1$lambda$0;
                    init$lambda$1$lambda$0 = NotificationChannels.init$lambda$1$lambda$0(NotificationChannels.Category.this, context, (NotificationChannelCompat) obj, (NotificationChannelCompat.Builder) obj2);
                    return init$lambda$1$lambda$0;
                }
            });
            if (migrateOrCreateNotificationChannel != null) {
                arrayList.add(migrateOrCreateNotificationChannel);
            }
            i10++;
            context = context2;
            localizedCategoryNames = map;
        }
        Context context3 = context;
        try {
            NotificationManagerUtilsKt.getNotificationManagerCompat(context3).e(arrayList);
        } catch (Exception e10) {
            CrashReporting crashReporting = CrashReporting.INSTANCE;
            List<k> list = createNotificationChannelGroups;
            LinkedHashMap linkedHashMap = new LinkedHashMap(kotlin.ranges.d.d(o0.e(CollectionsKt.w(list, 10)), 16));
            for (k kVar : list) {
                CharSequence b10 = kVar.b();
                String str = (b10 == null || (str = b10.toString()) == null) ? "" : "";
                if (NotificationManagerUtilsKt.getNotificationManagerCompat(context3).k(kVar.a()) != null) {
                    z10 = true;
                } else {
                    z10 = false;
                }
                Pair a10 = v.a(str, String.valueOf(z10));
                linkedHashMap.put(a10.c(), a10.d());
            }
            CrashReporting.addBreadcrumb$default(crashReporting, "Failed to create notification group or channel", linkedHashMap, null, null, false, 28, null);
            CrashReporting.captureException$default(CrashReporting.INSTANCE, e10, false, 2, null);
        }
    }

    public final void setIncomingRingtone(@NotNull Context context, @NotNull String name) {
        String str;
        String str2;
        Intrinsics.checkNotNullParameter(context, "context");
        Intrinsics.checkNotNullParameter(name, "name");
        if (Build.VERSION.SDK_INT >= 26) {
            ArrayList<NotificationChannelCompat> arrayList = new ArrayList();
            CallRingtone fromName = CallRingtone.Companion.fromName(name);
            Iterator it = NotificationManagerUtilsKt.getNotificationManagerCompat(context).n().iterator();
            while (true) {
                str = null;
                if (!it.hasNext()) {
                    break;
                }
                NotificationChannelCompat notificationChannelCompat = (NotificationChannelCompat) it.next();
                String b10 = notificationChannelCompat.b();
                Intrinsics.checkNotNullExpressionValue(b10, "getId(...)");
                if (StringsKt.P(b10, BASE_CALL_CHANNEL_ID, false, 2, null)) {
                    Intrinsics.checkNotNull(notificationChannelCompat);
                    arrayList.add(notificationChannelCompat);
                }
            }
            if (arrayList.isEmpty()) {
                return;
            }
            NotificationChannelCompat notificationChannelCompat2 = (NotificationChannelCompat) arrayList.get(0);
            int colorCompat = ColorUtilsKt.getColorCompat(context, com.discord.theme.R.color.brand);
            NotificationChannelCompat.Builder builder = new NotificationChannelCompat.Builder(getChannelId(fromName), notificationChannelCompat2.c());
            CharSequence d10 = notificationChannelCompat2.d();
            if (d10 != null) {
                str2 = d10.toString();
            } else {
                str2 = null;
            }
            NotificationChannelCompat.Builder f10 = builder.f(str2);
            CharSequence d11 = notificationChannelCompat2.d();
            if (d11 != null) {
                str = d11.toString();
            }
            NotificationChannelCompat.Builder d12 = f10.b(str).c(Category.Calls.getGroup().getGroupId()).i(notificationChannelCompat2.g()).e(notificationChannelCompat2.f()).d(colorCompat);
            NotificationChannels notificationChannels = INSTANCE;
            Intrinsics.checkNotNull(d12);
            notificationChannels.configureCallChannel(context, notificationChannelCompat2, d12, Integer.valueOf(fromName.getResource()));
            NotificationChannelCompat a10 = d12.a();
            Intrinsics.checkNotNullExpressionValue(a10, "build(...)");
            for (NotificationChannelCompat notificationChannelCompat3 : arrayList) {
                NotificationManagerUtilsKt.getNotificationManagerCompat(context).f(notificationChannelCompat3.b());
            }
            NotificationManagerUtilsKt.getNotificationManagerCompat(context).e(CollectionsKt.e(a10));
        }
    }

    /* JADX INFO: Access modifiers changed from: private */
    /* JADX WARN: Failed to restore enum class, 'enum' modifier and super class removed */
    /* JADX WARN: Unknown enum class pattern. Please report as an issue! */
    @Metadata(d1 = {"\u0000\u001e\n\u0002\u0018\u0002\n\u0002\u0010\u0010\n\u0000\n\u0002\u0010\u000e\n\u0000\n\u0002\u0010\b\n\u0000\n\u0002\u0018\u0002\n\u0002\b\u001d\b\u0082\u0081\u0002\u0018\u0000 #2\b\u0012\u0004\u0012\u00020\u00000\u0001:\u0001#B-\b\u0002\u0012\u0006\u0010\u0002\u001a\u00020\u0003\u0012\u0006\u0010\u0004\u001a\u00020\u0005\u0012\u0006\u0010\u0006\u001a\u00020\u0007\u0012\n\b\u0002\u0010\b\u001a\u0004\u0018\u00010\u0003¢\u0006\u0004\b\t\u0010\nR\u0011\u0010\u0002\u001a\u00020\u0003¢\u0006\b\n\u0000\u001a\u0004\b\u000b\u0010\fR\u0011\u0010\u0004\u001a\u00020\u0005¢\u0006\b\n\u0000\u001a\u0004\b\r\u0010\u000eR\u0011\u0010\u0006\u001a\u00020\u0007¢\u0006\b\n\u0000\u001a\u0004\b\u000f\u0010\u0010R\u0013\u0010\b\u001a\u0004\u0018\u00010\u0003¢\u0006\b\n\u0000\u001a\u0004\b\u0011\u0010\fj\u0002\b\u0012j\u0002\b\u0013j\u0002\b\u0014j\u0002\b\u0015j\u0002\b\u0016j\u0002\b\u0017j\u0002\b\u0018j\u0002\b\u0019j\u0002\b\u001aj\u0002\b\u001bj\u0002\b\u001cj\u0002\b\u001dj\u0002\b\u001ej\u0002\b\u001fj\u0002\b j\u0002\b!j\u0002\b\"¨\u0006$"}, d2 = {"Lcom/discord/notifications/renderer/NotificationChannels$Category;", "", StackTraceHelper.ID_KEY, "", "importance", "", "group", "Lcom/discord/notifications/renderer/NotificationChannels$ChannelGroup;", "legacyId", "<init>", "(Ljava/lang/String;ILjava/lang/String;ILcom/discord/notifications/renderer/NotificationChannels$ChannelGroup;Ljava/lang/String;)V", "getId", "()Ljava/lang/String;", "getImportance", "()I", "getGroup", "()Lcom/discord/notifications/renderer/NotificationChannels$ChannelGroup;", "getLegacyId", "Calls", "MediaConnections", "GameDetection", "MessagesDirect", "FriendRequests", "Reactions", "Polls", "Social", "ForumThreadCreated", "GuildEventStart", "GuildHighlights", "Messages", "OtherServerNotifications", "StageStart", "Other", "SystemMessages", "OtherHighPriority", "Companion", "notification_renderer_release"}, k = 1, mv = {2, 1, 0}, xi = 48)
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    public static final class Category {
        private static final /* synthetic */ EnumEntries $ENTRIES;
        private static final /* synthetic */ Category[] $VALUES;
        public static final Category Calls;
        @NotNull
        public static final Companion Companion;
        public static final Category ForumThreadCreated;
        public static final Category FriendRequests;
        public static final Category GameDetection;
        public static final Category GuildEventStart;
        public static final Category GuildHighlights;
        public static final Category MediaConnections;
        public static final Category Messages;
        public static final Category MessagesDirect;
        public static final Category Other;
        public static final Category OtherHighPriority;
        public static final Category OtherServerNotifications;
        public static final Category Polls;
        public static final Category Reactions;
        public static final Category Social;
        public static final Category StageStart;
        public static final Category SystemMessages;
        @NotNull
        private final ChannelGroup group;
        @NotNull

        /* renamed from: id  reason: collision with root package name */
        private final String f9532id;
        private final int importance;
        private final String legacyId;

        @Metadata(d1 = {"\u0000\u0018\n\u0002\u0018\u0002\n\u0002\u0010\u0000\n\u0002\b\u0003\n\u0002\u0010\u000e\n\u0000\n\u0002\u0018\u0002\n\u0000\b\u0086\u0003\u0018\u00002\u00020\u0001B\t\b\u0002¢\u0006\u0004\b\u0002\u0010\u0003J\u000e\u0010\u0004\u001a\u00020\u00052\u0006\u0010\u0006\u001a\u00020\u0007¨\u0006\b"}, d2 = {"Lcom/discord/notifications/renderer/NotificationChannels$Category$Companion;", "", "<init>", "()V", "defaultLabel", "", "category", "Lcom/discord/notifications/renderer/NotificationChannels$Category;", "notification_renderer_release"}, k = 1, mv = {2, 1, 0}, xi = 48)
        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
        public static final class Companion {

            @Metadata(k = 3, mv = {2, 1, 0}, xi = 48)
            /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
            public /* synthetic */ class WhenMappings {
                public static final /* synthetic */ int[] $EnumSwitchMapping$0;

                static {
                    int[] iArr = new int[Category.values().length];
                    try {
                        iArr[Category.Calls.ordinal()] = 1;
                    } catch (NoSuchFieldError unused) {
                    }
                    try {
                        iArr[Category.MediaConnections.ordinal()] = 2;
                    } catch (NoSuchFieldError unused2) {
                    }
                    try {
                        iArr[Category.Messages.ordinal()] = 3;
                    } catch (NoSuchFieldError unused3) {
                    }
                    try {
                        iArr[Category.MessagesDirect.ordinal()] = 4;
                    } catch (NoSuchFieldError unused4) {
                    }
                    try {
                        iArr[Category.FriendRequests.ordinal()] = 5;
                    } catch (NoSuchFieldError unused5) {
                    }
                    try {
                        iArr[Category.Polls.ordinal()] = 6;
                    } catch (NoSuchFieldError unused6) {
                    }
                    try {
                        iArr[Category.Social.ordinal()] = 7;
                    } catch (NoSuchFieldError unused7) {
                    }
                    try {
                        iArr[Category.GameDetection.ordinal()] = 8;
                    } catch (NoSuchFieldError unused8) {
                    }
                    try {
                        iArr[Category.StageStart.ordinal()] = 9;
                    } catch (NoSuchFieldError unused9) {
                    }
                    try {
                        iArr[Category.SystemMessages.ordinal()] = 10;
                    } catch (NoSuchFieldError unused10) {
                    }
                    try {
                        iArr[Category.ForumThreadCreated.ordinal()] = 11;
                    } catch (NoSuchFieldError unused11) {
                    }
                    try {
                        iArr[Category.GuildEventStart.ordinal()] = 12;
                    } catch (NoSuchFieldError unused12) {
                    }
                    try {
                        iArr[Category.GuildHighlights.ordinal()] = 13;
                    } catch (NoSuchFieldError unused13) {
                    }
                    try {
                        iArr[Category.OtherServerNotifications.ordinal()] = 14;
                    } catch (NoSuchFieldError unused14) {
                    }
                    try {
                        iArr[Category.Reactions.ordinal()] = 15;
                    } catch (NoSuchFieldError unused15) {
                    }
                    $EnumSwitchMapping$0 = iArr;
                }
            }

            public /* synthetic */ Companion(DefaultConstructorMarker defaultConstructorMarker) {
                this();
            }

            @NotNull
            public final String defaultLabel(@NotNull Category category) {
                Intrinsics.checkNotNullParameter(category, "category");
                switch (WhenMappings.$EnumSwitchMapping$0[category.ordinal()]) {
                    case 1:
                        return "Incoming calls";
                    case 2:
                        return "Voice connected";
                    case 3:
                        return "Messages";
                    case 4:
                        return "Direct messages";
                    case 5:
                        return "Friend requests";
                    case 6:
                        return "Polls";
                    case 7:
                        return "Social";
                    case 8:
                        return "Game detection";
                    case 9:
                        return "Stage notifications";
                    case 10:
                        return "Discord system messages";
                    case 11:
                        return "Forum notifications";
                    case 12:
                        return "Event notifications";
                    case 13:
                        return "Server highlights";
                    case 14:
                        return "Other server notifications";
                    case 15:
                        return "Reactions";
                    default:
                        return "Other";
                }
            }

            private Companion() {
            }
        }

        private static final /* synthetic */ Category[] $values() {
            return new Category[]{Calls, MediaConnections, GameDetection, MessagesDirect, FriendRequests, Reactions, Polls, Social, ForumThreadCreated, GuildEventStart, GuildHighlights, Messages, OtherServerNotifications, StageStart, Other, SystemMessages, OtherHighPriority};
        }

        static {
            ChannelGroup channelGroup = ChannelGroup.Realtime;
            Calls = new Category("Calls", 0, NotificationChannels.BASE_CALL_CHANNEL_ID, 4, channelGroup, "Calls");
            MediaConnections = new Category("MediaConnections", 1, "mediaConnections", 3, channelGroup, "Media Connections");
            GameDetection = new Category("GameDetection", 2, "gameDetection", 1, channelGroup, "Game Detection");
            ChannelGroup channelGroup2 = ChannelGroup.Social;
            MessagesDirect = new Category("MessagesDirect", 3, "directMessages", 4, channelGroup2, "DirectMessages");
            FriendRequests = new Category("FriendRequests", 4, "friendRequests", 4, channelGroup2, null);
            Reactions = new Category("Reactions", 5, "reactions", 3, channelGroup2, null, 8, null);
            Polls = new Category("Polls", 6, "polls", 3, channelGroup2, null, 8, null);
            Social = new Category("Social", 7, "social", 2, channelGroup2, "Social");
            ChannelGroup channelGroup3 = ChannelGroup.Server;
            ForumThreadCreated = new Category("ForumThreadCreated", 8, "forumThreadCreated", 4, channelGroup3, "Forum Post Create");
            GuildEventStart = new Category("GuildEventStart", 9, "guildEventLive", 4, channelGroup3, "Guild Event Live");
            GuildHighlights = new Category("GuildHighlights", 10, "guildHighlights", 4, channelGroup3, null);
            Messages = new Category("Messages", 11, "messages", 4, channelGroup3, "Messages");
            OtherServerNotifications = new Category("OtherServerNotifications", 12, "other", 2, channelGroup3, "General");
            StageStart = new Category("StageStart", 13, "stageLive", 4, channelGroup3, "Stage Live");
            ChannelGroup channelGroup4 = ChannelGroup.Other;
            Other = new Category("Other", 14, "default", 1, channelGroup4, null);
            SystemMessages = new Category("SystemMessages", 15, "systemMessages", 4, channelGroup4, null);
            OtherHighPriority = new Category("OtherHighPriority", 16, "otherHighPriority", 4, channelGroup4, "GeneralHigh");
            Category[] $values = $values();
            $VALUES = $values;
            $ENTRIES = xr.a.a($values);
            Companion = new Companion(null);
        }

        private Category(String str, int i10, String str2, int i11, ChannelGroup channelGroup, String str3) {
            this.f9532id = str2;
            this.importance = i11;
            this.group = channelGroup;
            this.legacyId = str3;
        }

        @NotNull
        public static EnumEntries getEntries() {
            return $ENTRIES;
        }

        public static Category valueOf(String str) {
            return (Category) Enum.valueOf(Category.class, str);
        }

        public static Category[] values() {
            return (Category[]) $VALUES.clone();
        }

        @NotNull
        public final ChannelGroup getGroup() {
            return this.group;
        }

        @NotNull
        public final String getId() {
            return this.f9532id;
        }

        public final int getImportance() {
            return this.importance;
        }

        public final String getLegacyId() {
            return this.legacyId;
        }

        /* synthetic */ Category(String str, int i10, String str2, int i11, ChannelGroup channelGroup, String str3, int i12, DefaultConstructorMarker defaultConstructorMarker) {
            this(str, i10, str2, i11, channelGroup, (i12 & 8) != 0 ? null : str3);
        }
    }
}

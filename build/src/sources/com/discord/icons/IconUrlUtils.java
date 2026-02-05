package com.discord.icons;

import android.content.Context;
import com.discord.hosts.Hosts;
import com.discord.icons.media.MediaProxy;
import com.discord.primitives.ApplicationId;
import com.discord.primitives.ChannelId;
import com.discord.primitives.GuildId;
import com.discord.primitives.UserId;
import com.discord.react_asset_fetcher.ReactAsset;
import com.discord.react_asset_fetcher.ReactAssetUtilsKt;
import com.discord.snowflake.SnowflakeUtils;
import com.facebook.react.devsupport.StackTraceHelper;
import kotlin.Metadata;
import kotlin.Result;
import kotlin.c;
import kotlin.jvm.internal.Intrinsics;
import kotlin.text.StringsKt;
import org.jetbrains.annotations.NotNull;
@Metadata(d1 = {"\u0000V\n\u0002\u0018\u0002\n\u0002\u0010\u0000\n\u0002\b\u0003\n\u0002\u0010\u0002\n\u0000\n\u0002\u0018\u0002\n\u0000\n\u0002\u0010\u000e\n\u0002\b\u0003\n\u0002\u0018\u0002\n\u0002\b\u0002\n\u0002\u0010\b\n\u0000\n\u0002\u0010\u000b\n\u0002\b\u0006\n\u0002\u0018\u0002\n\u0002\b\u0005\n\u0002\u0018\u0002\n\u0002\b\n\n\u0002\u0018\u0002\n\u0002\b\u0004\n\u0002\u0010\t\n\u0002\b\u0003\bÆ\u0002\u0018\u00002\u00020\u0001B\t\b\u0002¢\u0006\u0004\b\u0002\u0010\u0003J&\u0010\u0004\u001a\u00020\u00052\u0006\u0010\u0006\u001a\u00020\u00072\n\b\u0002\u0010\b\u001a\u0004\u0018\u00010\t2\n\b\u0002\u0010\n\u001a\u0004\u0018\u00010\tJK\u0010\u000b\u001a\u00020\t2\u0006\u0010\u0006\u001a\u00020\u00072\b\u0010\f\u001a\u0004\u0018\u00010\r2\b\u0010\u000e\u001a\u0004\u0018\u00010\t2\n\b\u0002\u0010\u000f\u001a\u0004\u0018\u00010\u00102\b\b\u0002\u0010\u0011\u001a\u00020\u00122\n\b\u0002\u0010\u0013\u001a\u0004\u0018\u00010\u0010¢\u0006\u0004\b\u0014\u0010\u0015JA\u0010\u0016\u001a\u00020\t2\b\u0010\u0017\u001a\u0004\u0018\u00010\t2\b\u0010\u0018\u001a\u0004\u0018\u00010\u00192\b\u0010\f\u001a\u0004\u0018\u00010\r2\n\b\u0002\u0010\u001a\u001a\u0004\u0018\u00010\u00102\b\b\u0002\u0010\u0011\u001a\u00020\u0012¢\u0006\u0004\b\u001b\u0010\u001cJ=\u0010\u001d\u001a\u00020\t2\u0006\u0010\u0006\u001a\u00020\u00072\b\u0010\u001e\u001a\u0004\u0018\u00010\u001f2\b\u0010 \u001a\u0004\u0018\u00010\t2\u0006\u0010!\u001a\u00020\u00122\n\b\u0002\u0010\u0013\u001a\u0004\u0018\u00010\u0010¢\u0006\u0004\b\"\u0010#JC\u0010$\u001a\u00020\t2\b\u0010\u001e\u001a\u0004\u0018\u00010\u00192\b\u0010 \u001a\u0004\u0018\u00010\t2\n\b\u0002\u0010%\u001a\u0004\u0018\u00010\t2\b\b\u0002\u0010\u0011\u001a\u00020\u00122\n\b\u0002\u0010\u0013\u001a\u0004\u0018\u00010\u0010¢\u0006\u0004\b&\u0010'J)\u0010(\u001a\u00020\t2\b\u0010)\u001a\u0004\u0018\u00010*2\b\u0010+\u001a\u0004\u0018\u00010\t2\b\b\u0002\u0010\u0013\u001a\u00020\u0010¢\u0006\u0002\b,J'\u0010-\u001a\u00020\t2\u0006\u0010.\u001a\u00020/2\u0006\u00100\u001a\u00020\u00122\n\b\u0002\u0010\u0013\u001a\u0004\u0018\u00010\u0010¢\u0006\u0002\u00101¨\u00062"}, d2 = {"Lcom/discord/icons/IconUrlUtils;", "", "<init>", "()V", "init", "", "context", "Landroid/content/Context;", "cdnHost", "", "apiHost", "getForUser", "userId", "Lcom/discord/primitives/UserId;", "userAvatar", "discriminator", "", "animated", "", "size", "getForUser-_fRzTXg", "(Landroid/content/Context;Lcom/discord/primitives/UserId;Ljava/lang/String;Ljava/lang/Integer;ZLjava/lang/Integer;)Ljava/lang/String;", "getForGuildMember", "guildMemberAvatar", "guildId", "Lcom/discord/primitives/GuildId;", "sizePx", "getForGuildMember-2tNb6hE", "(Ljava/lang/String;Lcom/discord/primitives/GuildId;Lcom/discord/primitives/UserId;Ljava/lang/Integer;Z)Ljava/lang/String;", "getForChannel", StackTraceHelper.ID_KEY, "Lcom/discord/primitives/ChannelId;", "icon", "isGroupDM", "getForChannel-JYSGpIY", "(Landroid/content/Context;Lcom/discord/primitives/ChannelId;Ljava/lang/String;ZLjava/lang/Integer;)Ljava/lang/String;", "getForGuild", "defaultIcon", "getForGuild-14CJxO4", "(Lcom/discord/primitives/GuildId;Ljava/lang/String;Ljava/lang/String;ZLjava/lang/Integer;)Ljava/lang/String;", "getApplicationIcon", "applicationId", "Lcom/discord/primitives/ApplicationId;", "imageId", "getApplicationIcon-weIltyw", "getCustomEmojiUrl", "emojiId", "", "animate", "(JZLjava/lang/Integer;)Ljava/lang/String;", "icons_release"}, k = 1, mv = {2, 1, 0}, xi = 48)
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class IconUrlUtils {
    @NotNull
    public static final IconUrlUtils INSTANCE = new IconUrlUtils();

    private IconUrlUtils() {
    }

    /* renamed from: getApplicationIcon-weIltyw$default */
    public static /* synthetic */ String m913getApplicationIconweIltyw$default(IconUrlUtils iconUrlUtils, ApplicationId applicationId, String str, int i10, int i11, Object obj) {
        if ((i11 & 4) != 0) {
            i10 = 160;
        }
        return iconUrlUtils.m918getApplicationIconweIltyw(applicationId, str, i10);
    }

    public static /* synthetic */ String getCustomEmojiUrl$default(IconUrlUtils iconUrlUtils, long j10, boolean z10, Integer num, int i10, Object obj) {
        if ((i10 & 4) != 0) {
            num = null;
        }
        return iconUrlUtils.getCustomEmojiUrl(j10, z10, num);
    }

    /* renamed from: getForChannel-JYSGpIY$default */
    public static /* synthetic */ String m914getForChannelJYSGpIY$default(IconUrlUtils iconUrlUtils, Context context, ChannelId channelId, String str, boolean z10, Integer num, int i10, Object obj) {
        if ((i10 & 16) != 0) {
            num = null;
        }
        return iconUrlUtils.m919getForChannelJYSGpIY(context, channelId, str, z10, num);
    }

    /* renamed from: getForGuild-14CJxO4$default */
    public static /* synthetic */ String m915getForGuild14CJxO4$default(IconUrlUtils iconUrlUtils, GuildId guildId, String str, String str2, boolean z10, Integer num, int i10, Object obj) {
        if ((i10 & 4) != 0) {
            str2 = null;
        }
        if ((i10 & 8) != 0) {
            z10 = false;
        }
        if ((i10 & 16) != 0) {
            num = null;
        }
        return iconUrlUtils.m920getForGuild14CJxO4(guildId, str, str2, z10, num);
    }

    /* renamed from: getForGuildMember-2tNb6hE$default */
    public static /* synthetic */ String m916getForGuildMember2tNb6hE$default(IconUrlUtils iconUrlUtils, String str, GuildId guildId, UserId userId, Integer num, boolean z10, int i10, Object obj) {
        if ((i10 & 8) != 0) {
            num = null;
        }
        Integer num2 = num;
        if ((i10 & 16) != 0) {
            z10 = false;
        }
        return iconUrlUtils.m921getForGuildMember2tNb6hE(str, guildId, userId, num2, z10);
    }

    /* renamed from: getForUser-_fRzTXg$default */
    public static /* synthetic */ String m917getForUser_fRzTXg$default(IconUrlUtils iconUrlUtils, Context context, UserId userId, String str, Integer num, boolean z10, Integer num2, int i10, Object obj) {
        if ((i10 & 8) != 0) {
            num = null;
        }
        if ((i10 & 16) != 0) {
            z10 = false;
        }
        if ((i10 & 32) != 0) {
            num2 = null;
        }
        return iconUrlUtils.m922getForUser_fRzTXg(context, userId, str, num, z10, num2);
    }

    public static /* synthetic */ void init$default(IconUrlUtils iconUrlUtils, Context context, String str, String str2, int i10, Object obj) {
        if ((i10 & 2) != 0) {
            str = null;
        }
        if ((i10 & 4) != 0) {
            str2 = null;
        }
        iconUrlUtils.init(context, str, str2);
    }

    @NotNull
    /* renamed from: getApplicationIcon-weIltyw */
    public final String m918getApplicationIconweIltyw(ApplicationId applicationId, String str, int i10) {
        MediaProxy mediaProxy = MediaProxy.INSTANCE;
        String cdn = Hosts.INSTANCE.getCDN();
        return mediaProxy.withSize(cdn + "/app-icons/" + applicationId + "/" + str, false, Integer.valueOf(i10), null);
    }

    @NotNull
    public final String getCustomEmojiUrl(long j10, boolean z10, Integer num) {
        MediaProxy mediaProxy = MediaProxy.INSTANCE;
        String cdn = Hosts.INSTANCE.getCDN();
        return mediaProxy.withSize(cdn + "/emojis/" + j10, z10, num, null);
    }

    @NotNull
    /* renamed from: getForChannel-JYSGpIY */
    public final String m919getForChannelJYSGpIY(@NotNull Context context, ChannelId channelId, String str, boolean z10, Integer num) {
        String b10;
        Intrinsics.checkNotNullParameter(context, "context");
        if (channelId == null) {
            return "";
        }
        if (str != null && str.length() != 0) {
            try {
                Result.a aVar = Result.f31985e;
                b10 = Result.b(MediaProxy.INSTANCE.withSize(Hosts.INSTANCE.getCDN() + "/channel-icons/" + channelId + "/" + str, false, num, str));
            } catch (Throwable th2) {
                Result.a aVar2 = Result.f31985e;
                b10 = Result.b(c.a(th2));
            }
            if (Result.e(b10) != null) {
                b10 = Hosts.INSTANCE.getAPI() + "/channels/" + channelId + "/icons/" + str + ".jpg";
            }
            return (String) b10;
        } else if (!z10) {
            return "";
        } else {
            switch ((int) (SnowflakeUtils.INSTANCE.toTimestamp(channelId) % 8)) {
                case 1:
                    return ReactAssetUtilsKt.getReactImageUrl(context, ReactAsset.DefaultGroup1.getUri(context));
                case 2:
                    return ReactAssetUtilsKt.getReactImageUrl(context, ReactAsset.DefaultGroup2.getUri(context));
                case 3:
                    return ReactAssetUtilsKt.getReactImageUrl(context, ReactAsset.DefaultGroup3.getUri(context));
                case 4:
                    return ReactAssetUtilsKt.getReactImageUrl(context, ReactAsset.DefaultGroup4.getUri(context));
                case 5:
                    return ReactAssetUtilsKt.getReactImageUrl(context, ReactAsset.DefaultGroup5.getUri(context));
                case 6:
                    return ReactAssetUtilsKt.getReactImageUrl(context, ReactAsset.DefaultGroup6.getUri(context));
                case 7:
                    return ReactAssetUtilsKt.getReactImageUrl(context, ReactAsset.DefaultGroup7.getUri(context));
                default:
                    return ReactAssetUtilsKt.getReactImageUrl(context, ReactAsset.DefaultGroup0.getUri(context));
            }
        }
    }

    @NotNull
    /* renamed from: getForGuild-14CJxO4 */
    public final String m920getForGuild14CJxO4(GuildId guildId, String str, String str2, boolean z10, Integer num) {
        String b10;
        if (str != null && str.length() != 0 && guildId != null) {
            MediaProxy mediaProxy = MediaProxy.INSTANCE;
            try {
                Result.a aVar = Result.f31985e;
                b10 = Result.b(Hosts.INSTANCE.getCDN() + "/icons/" + guildId + "/" + str);
            } catch (Throwable th2) {
                Result.a aVar2 = Result.f31985e;
                b10 = Result.b(c.a(th2));
            }
            if (Result.e(b10) != null) {
                b10 = Hosts.INSTANCE.getAPI() + "/guilds/" + guildId + "/icons/" + str;
            }
            return mediaProxy.withSize((String) b10, z10, num, str);
        } else if (str2 == null) {
            return "";
        } else {
            return str2;
        }
    }

    @NotNull
    /* renamed from: getForGuildMember-2tNb6hE */
    public final String m921getForGuildMember2tNb6hE(String str, GuildId guildId, UserId userId, Integer num, boolean z10) {
        if (str != null && !StringsKt.k0(str) && guildId != null && GuildId.m1078isValidimpl(guildId.m1081unboximpl()) && userId != null && UserId.m1143isValidimpl(userId.m1146unboximpl())) {
            String cdn = Hosts.INSTANCE.getCDN();
            return MediaProxy.INSTANCE.withSize(cdn + "/guilds/" + guildId + "/users/" + userId + "/avatars/" + str, z10, num, str);
        }
        return "";
    }

    @NotNull
    /* renamed from: getForUser-_fRzTXg */
    public final String m922getForUser_fRzTXg(@NotNull Context context, UserId userId, String str, Integer num, boolean z10, Integer num2) {
        String b10;
        Intrinsics.checkNotNullParameter(context, "context");
        if (userId != null) {
            if (UserId.m1140equalsimpl(UserId.m1138constructorimpl(-1L), userId)) {
                if (str == null) {
                    return "";
                }
                return str;
            } else if (str != null) {
                try {
                    Result.a aVar = Result.f31985e;
                    b10 = Result.b(MediaProxy.INSTANCE.withSize(Hosts.INSTANCE.getCDN() + "/avatars/" + userId + "/" + str, z10, num2, str));
                } catch (Throwable th2) {
                    Result.a aVar2 = Result.f31985e;
                    b10 = Result.b(c.a(th2));
                }
                if (Result.e(b10) != null) {
                    b10 = Hosts.INSTANCE.getAPI() + "/users/" + userId + "/avatars/" + str + ".jpg";
                }
                return (String) b10;
            } else if (num != null) {
                int intValue = num.intValue() % 5;
                if (intValue != 1) {
                    if (intValue != 2) {
                        if (intValue != 3) {
                            if (intValue != 4) {
                                return ReactAssetUtilsKt.getReactImageUrl(context, ReactAsset.DefaultAvatar0.getUri(context));
                            }
                            return ReactAssetUtilsKt.getReactImageUrl(context, ReactAsset.DefaultAvatar4.getUri(context));
                        }
                        return ReactAssetUtilsKt.getReactImageUrl(context, ReactAsset.DefaultAvatar3.getUri(context));
                    }
                    return ReactAssetUtilsKt.getReactImageUrl(context, ReactAsset.DefaultAvatar2.getUri(context));
                }
                return ReactAssetUtilsKt.getReactImageUrl(context, ReactAsset.DefaultAvatar1.getUri(context));
            }
        }
        return ReactAssetUtilsKt.getReactImageUrl(context, ReactAsset.DefaultAvatar0.getUri(context));
    }

    public final void init(@NotNull Context context, String str, String str2) {
        Intrinsics.checkNotNullParameter(context, "context");
        Hosts.INSTANCE.init(context, str2, str);
    }
}

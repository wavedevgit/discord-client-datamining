package com.discord.intents.packages;

import com.discord.intents.BuildConfig;
import java.util.Iterator;
import kotlin.Metadata;
import kotlin.enums.EnumEntries;
import kotlin.jvm.internal.DefaultConstructorMarker;
import kotlin.jvm.internal.Intrinsics;
import kotlin.jvm.internal.SourceDebugExtension;
import org.jetbrains.annotations.NotNull;
import vr.a;
/* JADX WARN: Failed to restore enum class, 'enum' modifier and super class removed */
/* JADX WARN: Unknown enum class pattern. Please report as an issue! */
@Metadata(d1 = {"\u0000\u0012\n\u0002\u0018\u0002\n\u0002\u0010\u0010\n\u0000\n\u0002\u0010\u000e\n\u0002\b\u0011\b\u0080\u0081\u0002\u0018\u0000 \u00132\b\u0012\u0004\u0012\u00020\u00000\u0001:\u0001\u0013B\u001b\b\u0002\u0012\u0006\u0010\u0002\u001a\u00020\u0003\u0012\b\u0010\u0004\u001a\u0004\u0018\u00010\u0003¢\u0006\u0004\b\u0005\u0010\u0006R\u000e\u0010\u0002\u001a\u00020\u0003X\u0082\u0004¢\u0006\u0002\n\u0000R\u0013\u0010\u0004\u001a\u0004\u0018\u00010\u0003¢\u0006\b\n\u0000\u001a\u0004\b\u0007\u0010\bj\u0002\b\tj\u0002\b\nj\u0002\b\u000bj\u0002\b\fj\u0002\b\rj\u0002\b\u000ej\u0002\b\u000fj\u0002\b\u0010j\u0002\b\u0011j\u0002\b\u0012¨\u0006\u0014"}, d2 = {"Lcom/discord/intents/packages/InstalledPackage;", "", "appName", "", "appPackage", "<init>", "(Ljava/lang/String;ILjava/lang/String;Ljava/lang/String;)V", "getAppPackage", "()Ljava/lang/String;", "TWITTER", "WHATSAPP", "GMAIL", "LINE", "MESSENGER", "TELEGRAM", "ROBLOX", "MINECRAFT", "FORTNITE", "GENSHIN", "Companion", "intents_release"}, k = 1, mv = {2, 1, 0}, xi = 48)
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class InstalledPackage {
    private static final /* synthetic */ EnumEntries $ENTRIES;
    private static final /* synthetic */ InstalledPackage[] $VALUES;
    @NotNull
    public static final Companion Companion;
    @NotNull
    private final String appName;
    private final String appPackage;
    public static final InstalledPackage TWITTER = new InstalledPackage("TWITTER", 0, "twitter", BuildConfig.PACKAGE_TWITTER);
    public static final InstalledPackage WHATSAPP = new InstalledPackage("WHATSAPP", 1, "whatsapp", BuildConfig.PACKAGE_WHATSAPP);
    public static final InstalledPackage GMAIL = new InstalledPackage("GMAIL", 2, "googlegmail", null);
    public static final InstalledPackage LINE = new InstalledPackage("LINE", 3, "line", BuildConfig.PACKAGE_LINE);
    public static final InstalledPackage MESSENGER = new InstalledPackage("MESSENGER", 4, "fb-messenger", BuildConfig.PACKAGE_FACEBOOK);
    public static final InstalledPackage TELEGRAM = new InstalledPackage("TELEGRAM", 5, "tg", BuildConfig.PACKAGE_TELEGRAM);
    public static final InstalledPackage ROBLOX = new InstalledPackage("ROBLOX", 6, "roblox", BuildConfig.PACKAGE_ROBLOX);
    public static final InstalledPackage MINECRAFT = new InstalledPackage("MINECRAFT", 7, "minecraft", BuildConfig.PACKAGE_MINECRAFT);
    public static final InstalledPackage FORTNITE = new InstalledPackage("FORTNITE", 8, "fortnite", BuildConfig.PACKAGE_FORTNITE);
    public static final InstalledPackage GENSHIN = new InstalledPackage("GENSHIN", 9, "genshin", BuildConfig.PACKAGE_GENSHIN);

    @Metadata(d1 = {"\u0000\u0018\n\u0002\u0018\u0002\n\u0002\u0010\u0000\n\u0002\b\u0003\n\u0002\u0018\u0002\n\u0000\n\u0002\u0010\u000e\n\u0000\b\u0086\u0003\u0018\u00002\u00020\u0001B\t\b\u0002¢\u0006\u0004\b\u0002\u0010\u0003J\u000e\u0010\u0004\u001a\u00020\u00052\u0006\u0010\u0006\u001a\u00020\u0007¨\u0006\b"}, d2 = {"Lcom/discord/intents/packages/InstalledPackage$Companion;", "", "<init>", "()V", "parse", "Lcom/discord/intents/packages/InstalledPackage;", "appName", "", "intents_release"}, k = 1, mv = {2, 1, 0}, xi = 48)
    @SourceDebugExtension({"SMAP\nInstalledPackage.kt\nKotlin\n*S Kotlin\n*F\n+ 1 InstalledPackage.kt\ncom/discord/intents/packages/InstalledPackage$Companion\n+ 2 _Collections.kt\nkotlin/collections/CollectionsKt___CollectionsKt\n*L\n1#1,26:1\n295#2,2:27\n*S KotlinDebug\n*F\n+ 1 InstalledPackage.kt\ncom/discord/intents/packages/InstalledPackage$Companion\n*L\n22#1:27,2\n*E\n"})
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    public static final class Companion {
        public /* synthetic */ Companion(DefaultConstructorMarker defaultConstructorMarker) {
            this();
        }

        @NotNull
        public final InstalledPackage parse(@NotNull String appName) {
            Object obj;
            Intrinsics.checkNotNullParameter(appName, "appName");
            Iterator<E> it = InstalledPackage.getEntries().iterator();
            while (true) {
                if (it.hasNext()) {
                    obj = it.next();
                    if (Intrinsics.areEqual(((InstalledPackage) obj).appName, appName)) {
                        break;
                    }
                } else {
                    obj = null;
                    break;
                }
            }
            InstalledPackage installedPackage = (InstalledPackage) obj;
            if (installedPackage != null) {
                return installedPackage;
            }
            throw new IllegalArgumentException("Unknown app name " + appName);
        }

        private Companion() {
        }
    }

    private static final /* synthetic */ InstalledPackage[] $values() {
        return new InstalledPackage[]{TWITTER, WHATSAPP, GMAIL, LINE, MESSENGER, TELEGRAM, ROBLOX, MINECRAFT, FORTNITE, GENSHIN};
    }

    static {
        InstalledPackage[] $values = $values();
        $VALUES = $values;
        $ENTRIES = a.a($values);
        Companion = new Companion(null);
    }

    private InstalledPackage(String str, int i10, String str2, String str3) {
        this.appName = str2;
        this.appPackage = str3;
    }

    @NotNull
    public static EnumEntries getEntries() {
        return $ENTRIES;
    }

    public static InstalledPackage valueOf(String str) {
        return (InstalledPackage) Enum.valueOf(InstalledPackage.class, str);
    }

    public static InstalledPackage[] values() {
        return (InstalledPackage[]) $VALUES.clone();
    }

    public final String getAppPackage() {
        return this.appPackage;
    }
}

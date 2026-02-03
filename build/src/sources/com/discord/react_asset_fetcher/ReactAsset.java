package com.discord.react_asset_fetcher;

import android.content.Context;
import com.swmansion.rnscreens.Screen;
import kotlin.Metadata;
import kotlin.enums.EnumEntries;
import kotlin.jvm.internal.Intrinsics;
import org.jetbrains.annotations.NotNull;
/* JADX WARN: Failed to restore enum class, 'enum' modifier and super class removed */
/* JADX WARN: Unknown enum class pattern. Please report as an issue! */
@Metadata(d1 = {"\u0000\u0018\n\u0002\u0018\u0002\n\u0002\u0010\u0010\n\u0002\bh\n\u0002\u0010\u000e\n\u0000\n\u0002\u0018\u0002\n\u0000\b\u0086\u0081\u0002\u0018\u00002\b\u0012\u0004\u0012\u00020\u00000\u0001B\t\b\u0002¢\u0006\u0004\b\u0002\u0010\u0003J\u000e\u0010i\u001a\u00020j2\u0006\u0010k\u001a\u00020lj\u0002\b\u0004j\u0002\b\u0005j\u0002\b\u0006j\u0002\b\u0007j\u0002\b\bj\u0002\b\tj\u0002\b\nj\u0002\b\u000bj\u0002\b\fj\u0002\b\rj\u0002\b\u000ej\u0002\b\u000fj\u0002\b\u0010j\u0002\b\u0011j\u0002\b\u0012j\u0002\b\u0013j\u0002\b\u0014j\u0002\b\u0015j\u0002\b\u0016j\u0002\b\u0017j\u0002\b\u0018j\u0002\b\u0019j\u0002\b\u001aj\u0002\b\u001bj\u0002\b\u001cj\u0002\b\u001dj\u0002\b\u001ej\u0002\b\u001fj\u0002\b j\u0002\b!j\u0002\b\"j\u0002\b#j\u0002\b$j\u0002\b%j\u0002\b&j\u0002\b'j\u0002\b(j\u0002\b)j\u0002\b*j\u0002\b+j\u0002\b,j\u0002\b-j\u0002\b.j\u0002\b/j\u0002\b0j\u0002\b1j\u0002\b2j\u0002\b3j\u0002\b4j\u0002\b5j\u0002\b6j\u0002\b7j\u0002\b8j\u0002\b9j\u0002\b:j\u0002\b;j\u0002\b<j\u0002\b=j\u0002\b>j\u0002\b?j\u0002\b@j\u0002\bAj\u0002\bBj\u0002\bCj\u0002\bDj\u0002\bEj\u0002\bFj\u0002\bGj\u0002\bHj\u0002\bIj\u0002\bJj\u0002\bKj\u0002\bLj\u0002\bMj\u0002\bNj\u0002\bOj\u0002\bPj\u0002\bQj\u0002\bRj\u0002\bSj\u0002\bTj\u0002\bUj\u0002\bVj\u0002\bWj\u0002\bXj\u0002\bYj\u0002\bZj\u0002\b[j\u0002\b\\j\u0002\b]j\u0002\b^j\u0002\b_j\u0002\b`j\u0002\baj\u0002\bbj\u0002\bcj\u0002\bdj\u0002\bej\u0002\bfj\u0002\bgj\u0002\bh¨\u0006m"}, d2 = {"Lcom/discord/react_asset_fetcher/ReactAsset;", "", "<init>", "(Ljava/lang/String;I)V", "AddBurstReaction", "AddReaction", "Alert", "AnnouncementThread", "AppsIcon", "ArrowAngleRightUpIcon", "ArrowBack", "ArrowForward", "ArrowRight", "Attachment", "BellSnooze", "BrokenImage", "CallConnect", "CallDisconnect", "CallStatusGreen", "CallStatusRed", "CallStatusUnknown", "CallStatusYellow", "Cancel", "Caret", "ChannelBrowse", "ChatArrowRightIcon", "Check", "Checkmark", "Clip", "ClockTimeout", "Close", "DefaultAvatar0", "DefaultAvatar1", "DefaultAvatar2", "DefaultAvatar3", "DefaultAvatar4", "DefaultGroup0", "DefaultGroup1", "DefaultGroup2", "DefaultGroup3", "DefaultGroup4", "DefaultGroup5", "DefaultGroup6", "DefaultGroup7", "Disconnect", "Download", "File", "GameController", "Gif", "Help", "HideMedia", "Highlight", "Home", "ImageIcon", "Info", "InvitesDisabled", "JumpToBottom", "Launch", "Link", "LockClosed", "LockOpen", "MediaChannelNSFW", "MemberListBadge", "Members", "Mic", "MicMutedDark", "More", "MoveToSpeaker", "Music", "Pause", "Pencil", "PersonShield", "Pin", "Play", "PlaystationNeutral", "PollsIcon", "PoopDark", "PoopLight", "RaisedHand", "Reactions", "Refresh", "Reply", "RoleSubscriptionBadge", "RoleSubscriptionLanyard", "RoleSubscriptionPurchaseCardBg", Screen.TAG, "ShowMedia", "ShowPassword", "SlashBox", "Speaker", "SpotifyBrandNeutral", "StageChannel", "Sticker", "Summary", "SummaryIndicatorEnd", "SummaryIndicatorStart", "TextChannel", "Thread", "Ticket", "Upload", "Volume", "VolumeMute", "Warning", "WarningTriangle", "XboxNeutral", "getUri", "", "context", "Landroid/content/Context;", "react_asset_fetcher_release"}, k = 1, mv = {2, 1, 0}, xi = 48)
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class ReactAsset {
    private static final /* synthetic */ EnumEntries $ENTRIES;
    private static final /* synthetic */ ReactAsset[] $VALUES;
    public static final ReactAsset AddBurstReaction = new ReactAsset("AddBurstReaction", 0);
    public static final ReactAsset AddReaction = new ReactAsset("AddReaction", 1);
    public static final ReactAsset Alert = new ReactAsset("Alert", 2);
    public static final ReactAsset AnnouncementThread = new ReactAsset("AnnouncementThread", 3);
    public static final ReactAsset AppsIcon = new ReactAsset("AppsIcon", 4);
    public static final ReactAsset ArrowAngleRightUpIcon = new ReactAsset("ArrowAngleRightUpIcon", 5);
    public static final ReactAsset ArrowBack = new ReactAsset("ArrowBack", 6);
    public static final ReactAsset ArrowForward = new ReactAsset("ArrowForward", 7);
    public static final ReactAsset ArrowRight = new ReactAsset("ArrowRight", 8);
    public static final ReactAsset Attachment = new ReactAsset("Attachment", 9);
    public static final ReactAsset BellSnooze = new ReactAsset("BellSnooze", 10);
    public static final ReactAsset BrokenImage = new ReactAsset("BrokenImage", 11);
    public static final ReactAsset CallConnect = new ReactAsset("CallConnect", 12);
    public static final ReactAsset CallDisconnect = new ReactAsset("CallDisconnect", 13);
    public static final ReactAsset CallStatusGreen = new ReactAsset("CallStatusGreen", 14);
    public static final ReactAsset CallStatusRed = new ReactAsset("CallStatusRed", 15);
    public static final ReactAsset CallStatusUnknown = new ReactAsset("CallStatusUnknown", 16);
    public static final ReactAsset CallStatusYellow = new ReactAsset("CallStatusYellow", 17);
    public static final ReactAsset Cancel = new ReactAsset("Cancel", 18);
    public static final ReactAsset Caret = new ReactAsset("Caret", 19);
    public static final ReactAsset ChannelBrowse = new ReactAsset("ChannelBrowse", 20);
    public static final ReactAsset ChatArrowRightIcon = new ReactAsset("ChatArrowRightIcon", 21);
    public static final ReactAsset Check = new ReactAsset("Check", 22);
    public static final ReactAsset Checkmark = new ReactAsset("Checkmark", 23);
    public static final ReactAsset Clip = new ReactAsset("Clip", 24);
    public static final ReactAsset ClockTimeout = new ReactAsset("ClockTimeout", 25);
    public static final ReactAsset Close = new ReactAsset("Close", 26);
    public static final ReactAsset DefaultAvatar0 = new ReactAsset("DefaultAvatar0", 27);
    public static final ReactAsset DefaultAvatar1 = new ReactAsset("DefaultAvatar1", 28);
    public static final ReactAsset DefaultAvatar2 = new ReactAsset("DefaultAvatar2", 29);
    public static final ReactAsset DefaultAvatar3 = new ReactAsset("DefaultAvatar3", 30);
    public static final ReactAsset DefaultAvatar4 = new ReactAsset("DefaultAvatar4", 31);
    public static final ReactAsset DefaultGroup0 = new ReactAsset("DefaultGroup0", 32);
    public static final ReactAsset DefaultGroup1 = new ReactAsset("DefaultGroup1", 33);
    public static final ReactAsset DefaultGroup2 = new ReactAsset("DefaultGroup2", 34);
    public static final ReactAsset DefaultGroup3 = new ReactAsset("DefaultGroup3", 35);
    public static final ReactAsset DefaultGroup4 = new ReactAsset("DefaultGroup4", 36);
    public static final ReactAsset DefaultGroup5 = new ReactAsset("DefaultGroup5", 37);
    public static final ReactAsset DefaultGroup6 = new ReactAsset("DefaultGroup6", 38);
    public static final ReactAsset DefaultGroup7 = new ReactAsset("DefaultGroup7", 39);
    public static final ReactAsset Disconnect = new ReactAsset("Disconnect", 40);
    public static final ReactAsset Download = new ReactAsset("Download", 41);
    public static final ReactAsset File = new ReactAsset("File", 42);
    public static final ReactAsset GameController = new ReactAsset("GameController", 43);
    public static final ReactAsset Gif = new ReactAsset("Gif", 44);
    public static final ReactAsset Help = new ReactAsset("Help", 45);
    public static final ReactAsset HideMedia = new ReactAsset("HideMedia", 46);
    public static final ReactAsset Highlight = new ReactAsset("Highlight", 47);
    public static final ReactAsset Home = new ReactAsset("Home", 48);
    public static final ReactAsset ImageIcon = new ReactAsset("ImageIcon", 49);
    public static final ReactAsset Info = new ReactAsset("Info", 50);
    public static final ReactAsset InvitesDisabled = new ReactAsset("InvitesDisabled", 51);
    public static final ReactAsset JumpToBottom = new ReactAsset("JumpToBottom", 52);
    public static final ReactAsset Launch = new ReactAsset("Launch", 53);
    public static final ReactAsset Link = new ReactAsset("Link", 54);
    public static final ReactAsset LockClosed = new ReactAsset("LockClosed", 55);
    public static final ReactAsset LockOpen = new ReactAsset("LockOpen", 56);
    public static final ReactAsset MediaChannelNSFW = new ReactAsset("MediaChannelNSFW", 57);
    public static final ReactAsset MemberListBadge = new ReactAsset("MemberListBadge", 58);
    public static final ReactAsset Members = new ReactAsset("Members", 59);
    public static final ReactAsset Mic = new ReactAsset("Mic", 60);
    public static final ReactAsset MicMutedDark = new ReactAsset("MicMutedDark", 61);
    public static final ReactAsset More = new ReactAsset("More", 62);
    public static final ReactAsset MoveToSpeaker = new ReactAsset("MoveToSpeaker", 63);
    public static final ReactAsset Music = new ReactAsset("Music", 64);
    public static final ReactAsset Pause = new ReactAsset("Pause", 65);
    public static final ReactAsset Pencil = new ReactAsset("Pencil", 66);
    public static final ReactAsset PersonShield = new ReactAsset("PersonShield", 67);
    public static final ReactAsset Pin = new ReactAsset("Pin", 68);
    public static final ReactAsset Play = new ReactAsset("Play", 69);
    public static final ReactAsset PlaystationNeutral = new ReactAsset("PlaystationNeutral", 70);
    public static final ReactAsset PollsIcon = new ReactAsset("PollsIcon", 71);
    public static final ReactAsset PoopDark = new ReactAsset("PoopDark", 72);
    public static final ReactAsset PoopLight = new ReactAsset("PoopLight", 73);
    public static final ReactAsset RaisedHand = new ReactAsset("RaisedHand", 74);
    public static final ReactAsset Reactions = new ReactAsset("Reactions", 75);
    public static final ReactAsset Refresh = new ReactAsset("Refresh", 76);
    public static final ReactAsset Reply = new ReactAsset("Reply", 77);
    public static final ReactAsset RoleSubscriptionBadge = new ReactAsset("RoleSubscriptionBadge", 78);
    public static final ReactAsset RoleSubscriptionLanyard = new ReactAsset("RoleSubscriptionLanyard", 79);
    public static final ReactAsset RoleSubscriptionPurchaseCardBg = new ReactAsset("RoleSubscriptionPurchaseCardBg", 80);
    public static final ReactAsset Screen = new ReactAsset(Screen.TAG, 81);
    public static final ReactAsset ShowMedia = new ReactAsset("ShowMedia", 82);
    public static final ReactAsset ShowPassword = new ReactAsset("ShowPassword", 83);
    public static final ReactAsset SlashBox = new ReactAsset("SlashBox", 84);
    public static final ReactAsset Speaker = new ReactAsset("Speaker", 85);
    public static final ReactAsset SpotifyBrandNeutral = new ReactAsset("SpotifyBrandNeutral", 86);
    public static final ReactAsset StageChannel = new ReactAsset("StageChannel", 87);
    public static final ReactAsset Sticker = new ReactAsset("Sticker", 88);
    public static final ReactAsset Summary = new ReactAsset("Summary", 89);
    public static final ReactAsset SummaryIndicatorEnd = new ReactAsset("SummaryIndicatorEnd", 90);
    public static final ReactAsset SummaryIndicatorStart = new ReactAsset("SummaryIndicatorStart", 91);
    public static final ReactAsset TextChannel = new ReactAsset("TextChannel", 92);
    public static final ReactAsset Thread = new ReactAsset("Thread", 93);
    public static final ReactAsset Ticket = new ReactAsset("Ticket", 94);
    public static final ReactAsset Upload = new ReactAsset("Upload", 95);
    public static final ReactAsset Volume = new ReactAsset("Volume", 96);
    public static final ReactAsset VolumeMute = new ReactAsset("VolumeMute", 97);
    public static final ReactAsset Warning = new ReactAsset("Warning", 98);
    public static final ReactAsset WarningTriangle = new ReactAsset("WarningTriangle", 99);
    public static final ReactAsset XboxNeutral = new ReactAsset("XboxNeutral", 100);

    private static final /* synthetic */ ReactAsset[] $values() {
        return new ReactAsset[]{AddBurstReaction, AddReaction, Alert, AnnouncementThread, AppsIcon, ArrowAngleRightUpIcon, ArrowBack, ArrowForward, ArrowRight, Attachment, BellSnooze, BrokenImage, CallConnect, CallDisconnect, CallStatusGreen, CallStatusRed, CallStatusUnknown, CallStatusYellow, Cancel, Caret, ChannelBrowse, ChatArrowRightIcon, Check, Checkmark, Clip, ClockTimeout, Close, DefaultAvatar0, DefaultAvatar1, DefaultAvatar2, DefaultAvatar3, DefaultAvatar4, DefaultGroup0, DefaultGroup1, DefaultGroup2, DefaultGroup3, DefaultGroup4, DefaultGroup5, DefaultGroup6, DefaultGroup7, Disconnect, Download, File, GameController, Gif, Help, HideMedia, Highlight, Home, ImageIcon, Info, InvitesDisabled, JumpToBottom, Launch, Link, LockClosed, LockOpen, MediaChannelNSFW, MemberListBadge, Members, Mic, MicMutedDark, More, MoveToSpeaker, Music, Pause, Pencil, PersonShield, Pin, Play, PlaystationNeutral, PollsIcon, PoopDark, PoopLight, RaisedHand, Reactions, Refresh, Reply, RoleSubscriptionBadge, RoleSubscriptionLanyard, RoleSubscriptionPurchaseCardBg, Screen, ShowMedia, ShowPassword, SlashBox, Speaker, SpotifyBrandNeutral, StageChannel, Sticker, Summary, SummaryIndicatorEnd, SummaryIndicatorStart, TextChannel, Thread, Ticket, Upload, Volume, VolumeMute, Warning, WarningTriangle, XboxNeutral};
    }

    static {
        ReactAsset[] $values = $values();
        $VALUES = $values;
        $ENTRIES = qr.a.a($values);
    }

    private ReactAsset(String str, int i10) {
    }

    @NotNull
    public static EnumEntries getEntries() {
        return $ENTRIES;
    }

    public static ReactAsset valueOf(String str) {
        return (ReactAsset) Enum.valueOf(ReactAsset.class, str);
    }

    public static ReactAsset[] values() {
        return (ReactAsset[]) $VALUES.clone();
    }

    @NotNull
    public final String getUri(@NotNull Context context) {
        Intrinsics.checkNotNullParameter(context, "context");
        return ReactAssetCache.INSTANCE.get(context, this);
    }
}

package com.discord.audio;

import com.discord.misc.utilities.chat_view_types.ChatViewRecyclerTypes;
import java.util.Map;
import kotlin.Metadata;
import kotlin.Pair;
import kotlin.collections.o0;
import kotlin.jvm.internal.Intrinsics;
import org.jetbrains.annotations.NotNull;
import qr.v;
@Metadata(d1 = {"\u0000\u001a\n\u0000\n\u0002\u0010%\n\u0002\u0010\b\n\u0002\u0018\u0002\n\u0002\b\u0005\n\u0002\u0010\u000e\n\u0002\b\u0002\u001a\u000e\u0010\b\u001a\u00020\t2\u0006\u0010\n\u001a\u00020\u0002\"&\u0010\u0000\u001a\u000e\u0012\u0004\u0012\u00020\u0002\u0012\u0004\u0012\u00020\u00030\u0001X\u0086\u000e¢\u0006\u000e\n\u0000\u001a\u0004\b\u0004\u0010\u0005\"\u0004\b\u0006\u0010\u0007¨\u0006\u000b"}, d2 = {"audioDeviceTypeToSimpleMapping", "", "", "Lcom/discord/audio/SimpleDeviceType;", "getAudioDeviceTypeToSimpleMapping", "()Ljava/util/Map;", "setAudioDeviceTypeToSimpleMapping", "(Ljava/util/Map;)V", "audioDeviceInfoToString", "", "type", "audio_release"}, k = 2, mv = {2, 1, 0}, xi = 48)
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public final class AndroidAudioDeviceKt {
    @NotNull
    private static Map<Integer, SimpleDeviceType> audioDeviceTypeToSimpleMapping;

    static {
        SimpleDeviceType simpleDeviceType = SimpleDeviceType.EARPIECE;
        Pair a10 = v.a(1, simpleDeviceType);
        Pair a11 = v.a(2, SimpleDeviceType.SPEAKERPHONE);
        SimpleDeviceType simpleDeviceType2 = SimpleDeviceType.WIRED_HEADSET;
        Pair a12 = v.a(3, simpleDeviceType2);
        Pair a13 = v.a(4, simpleDeviceType2);
        SimpleDeviceType simpleDeviceType3 = SimpleDeviceType.BLUETOOTH_HEADSET;
        Pair a14 = v.a(7, simpleDeviceType3);
        SimpleDeviceType simpleDeviceType4 = SimpleDeviceType.INVALID;
        audioDeviceTypeToSimpleMapping = o0.n(a10, a11, a12, a13, a14, v.a(8, simpleDeviceType4), v.a(9, simpleDeviceType), v.a(13, simpleDeviceType), v.a(12, simpleDeviceType2), v.a(11, simpleDeviceType2), v.a(18, simpleDeviceType), v.a(5, simpleDeviceType), v.a(10, simpleDeviceType), v.a(18, simpleDeviceType), v.a(5, simpleDeviceType), v.a(10, simpleDeviceType), v.a(6, simpleDeviceType), v.a(14, simpleDeviceType4), v.a(19, simpleDeviceType), v.a(20, simpleDeviceType), v.a(21, simpleDeviceType), v.a(15, simpleDeviceType), v.a(16, simpleDeviceType4), v.a(17, simpleDeviceType4), v.a(22, simpleDeviceType2), v.a(23, simpleDeviceType3), v.a(24, simpleDeviceType4), v.a(29, simpleDeviceType), v.a(25, simpleDeviceType4), v.a(26, simpleDeviceType3), v.a(27, simpleDeviceType3), v.a(30, simpleDeviceType3));
    }

    @NotNull
    public static final String audioDeviceInfoToString(int i10) {
        switch (i10) {
            case 0:
                return "TYPE_UNKNOWN";
            case 1:
                return "TYPE_BUILTIN_EARPIECE";
            case 2:
                return "TYPE_BUILTIN_SPEAKER";
            case 3:
                return "TYPE_WIRED_HEADSET";
            case 4:
                return "TYPE_WIRED_HEADPHONES";
            case 5:
                return "TYPE_LINE_ANALOG";
            case 6:
                return "TYPE_LINE_DIGITAL";
            case 7:
                return "TYPE_BLUETOOTH_SCO";
            case 8:
                return "TYPE_BLUETOOTH_A2DP";
            case 9:
                return "TYPE_HDMI";
            case 10:
                return "TYPE_HDMI_ARC";
            case 11:
                return "TYPE_USB_DEVICE";
            case 12:
                return "TYPE_USB_ACCESSORY";
            case 13:
                return "TYPE_DOCK";
            case 14:
                return "TYPE_FM";
            case 15:
                return "TYPE_BUILTIN_MIC";
            case 16:
                return "TYPE_FM_TUNER";
            case 17:
                return "TYPE_TV_TUNER";
            case ChatViewRecyclerTypes.EPHEMERAL_INDICATION /* 18 */:
                return "TYPE_TELEPHONY";
            case ChatViewRecyclerTypes.INTERACTION_STATUS /* 19 */:
                return "TYPE_AUX_LINE";
            case 20:
                return "TYPE_IP";
            case ChatViewRecyclerTypes.FLAGGED_MESSAGE_EMBED /* 21 */:
                return "TYPE_BUS";
            case ChatViewRecyclerTypes.FLAGGED_MESSAGE_ACTION_BAR /* 22 */:
                return "TYPE_USB_HEADSET";
            case 23:
                return "TYPE_HEARING_AID";
            case ChatViewRecyclerTypes.SURVEY_INDICATION /* 24 */:
                return "TYPE_BUILTIN_SPEAKER_SAFE";
            case ChatViewRecyclerTypes.GUILD_INVITE_DISABLED /* 25 */:
                return "TYPE_REMOTE_SUBMIX";
            case ChatViewRecyclerTypes.MEDIA_MOSAIC_ATTACHMENT /* 26 */:
                return "TYPE_BLE_HEADSET";
            case 27:
                return "TYPE_BLE_SPEAKER";
            case 28:
            default:
                return "";
            case 29:
                return "TYPE_HDMI_EARC";
            case 30:
                return "TYPE_BLE_BROADCAST";
            case ChatViewRecyclerTypes.EMBEDDED_ACTIVITY_INVITE /* 31 */:
                return "TYPE_DOCK_ANALOG";
        }
    }

    @NotNull
    public static final Map<Integer, SimpleDeviceType> getAudioDeviceTypeToSimpleMapping() {
        return audioDeviceTypeToSimpleMapping;
    }

    public static final void setAudioDeviceTypeToSimpleMapping(@NotNull Map<Integer, SimpleDeviceType> map) {
        Intrinsics.checkNotNullParameter(map, "<set-?>");
        audioDeviceTypeToSimpleMapping = map;
    }
}

package org.webrtc.audio;

import android.annotation.TargetApi;
import android.content.Context;
import android.media.AudioDeviceInfo;
import android.media.AudioManager;
import android.os.Build;
import com.discord.misc.utilities.chat_view_types.ChatViewRecyclerTypes;
import java.util.Arrays;
import org.webrtc.Logging;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public final class WebRtcAudioUtils {
    private static final String TAG = "WebRtcAudioUtilsExternal";

    @TargetApi(ChatViewRecyclerTypes.SURVEY_INDICATION)
    public static String audioEncodingToString(int i10) {
        if (i10 != 0) {
            switch (i10) {
                case 2:
                    return "PCM_16BIT";
                case 3:
                    return "PCM_8BIT";
                case 4:
                    return "PCM_FLOAT";
                case 5:
                case 6:
                    return "AC3";
                case 7:
                    return "DTS";
                case 8:
                    return "DTS_HD";
                case 9:
                    return "MP3";
                default:
                    return "Invalid encoding: " + i10;
            }
        }
        return "INVALID";
    }

    public static String audioSourceToString(int i10) {
        switch (i10) {
            case 0:
                return "DEFAULT";
            case 1:
                return "MIC";
            case 2:
                return "VOICE_UPLINK";
            case 3:
                return "VOICE_DOWNLINK";
            case 4:
                return "VOICE_CALL";
            case 5:
                return "CAMCORDER";
            case 6:
                return "VOICE_RECOGNITION";
            case 7:
                return "VOICE_COMMUNICATION";
            case 8:
            default:
                return "INVALID";
            case 9:
                return "UNPROCESSED";
            case 10:
                return "VOICE_PERFORMANCE";
        }
    }

    public static String channelMaskToString(int i10) {
        if (i10 != 12) {
            if (i10 != 16) {
                return "INVALID";
            }
            return "IN_MONO";
        }
        return "IN_STEREO";
    }

    public static String deviceTypeToString(int i10) {
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
                return "TYPE_UNKNOWN(" + i10 + ")";
            case 29:
                return "TYPE_HDMI_EARC";
            case 30:
                return "TYPE_BLE_BROADCAST";
            case ChatViewRecyclerTypes.EMBEDDED_ACTIVITY_INVITE /* 31 */:
                return "TYPE_DOCK_ANALOG";
        }
    }

    public static String getThreadInfo() {
        Thread currentThread = Thread.currentThread();
        String name = currentThread.getName();
        long id2 = currentThread.getId();
        return "@[name=" + name + ", id=" + id2 + "]";
    }

    private static boolean hasMicrophone(Context context) {
        return context.getPackageManager().hasSystemFeature("android.hardware.microphone");
    }

    private static void logAudioDeviceInfo(String str, AudioManager audioManager) {
        String str2;
        AudioDeviceInfo[] devices = audioManager.getDevices(3);
        if (devices.length != 0) {
            Logging.d(str, "Audio Devices: ");
            for (AudioDeviceInfo audioDeviceInfo : devices) {
                StringBuilder sb2 = new StringBuilder();
                sb2.append("  ");
                sb2.append(deviceTypeToString(audioDeviceInfo.getType()));
                if (audioDeviceInfo.isSource()) {
                    str2 = "(in): ";
                } else {
                    str2 = "(out): ";
                }
                sb2.append(str2);
                if (audioDeviceInfo.getChannelCounts().length > 0) {
                    sb2.append("channels=");
                    sb2.append(Arrays.toString(audioDeviceInfo.getChannelCounts()));
                    sb2.append(", ");
                }
                if (audioDeviceInfo.getEncodings().length > 0) {
                    sb2.append("encodings=");
                    sb2.append(Arrays.toString(audioDeviceInfo.getEncodings()));
                    sb2.append(", ");
                }
                if (audioDeviceInfo.getSampleRates().length > 0) {
                    sb2.append("sample rates=");
                    sb2.append(Arrays.toString(audioDeviceInfo.getSampleRates()));
                    sb2.append(", ");
                }
                sb2.append("id=");
                sb2.append(audioDeviceInfo.getId());
                Logging.d(str, sb2.toString());
            }
        }
    }

    public static void logAudioState(String str, Context context, AudioManager audioManager) {
        logDeviceInfo(str);
        logAudioStateBasic(str, context, audioManager);
        logAudioStateVolume(str, audioManager);
        logAudioDeviceInfo(str, audioManager);
    }

    private static void logAudioStateBasic(String str, Context context, AudioManager audioManager) {
        String modeToString = modeToString(audioManager.getMode());
        boolean hasMicrophone = hasMicrophone(context);
        boolean isMicrophoneMute = audioManager.isMicrophoneMute();
        boolean isMusicActive = audioManager.isMusicActive();
        boolean isSpeakerphoneOn = audioManager.isSpeakerphoneOn();
        boolean isBluetoothScoOn = audioManager.isBluetoothScoOn();
        Logging.d(str, "Audio State: audio mode: " + modeToString + ", has mic: " + hasMicrophone + ", mic muted: " + isMicrophoneMute + ", music active: " + isMusicActive + ", speakerphone: " + isSpeakerphoneOn + ", BT SCO: " + isBluetoothScoOn);
    }

    private static void logAudioStateVolume(String str, AudioManager audioManager) {
        int[] iArr = {0, 3, 2, 4, 5, 1};
        Logging.d(str, "Audio State: ");
        boolean isVolumeFixed = audioManager.isVolumeFixed();
        Logging.d(str, "  fixed volume=" + isVolumeFixed);
        if (!isVolumeFixed) {
            for (int i10 = 0; i10 < 6; i10++) {
                int i11 = iArr[i10];
                StringBuilder sb2 = new StringBuilder();
                String streamTypeToString = streamTypeToString(i11);
                sb2.append("  " + streamTypeToString + ": ");
                sb2.append("volume=");
                sb2.append(audioManager.getStreamVolume(i11));
                sb2.append(", max=");
                sb2.append(audioManager.getStreamMaxVolume(i11));
                sb2.append(", muted=");
                sb2.append(audioManager.isStreamMute(i11));
                Logging.d(str, sb2.toString());
            }
        }
    }

    private static void logDeviceInfo(String str) {
        int i10 = Build.VERSION.SDK_INT;
        String str2 = Build.VERSION.RELEASE;
        String str3 = Build.BRAND;
        String str4 = Build.DEVICE;
        String str5 = Build.ID;
        String str6 = Build.HARDWARE;
        String str7 = Build.MANUFACTURER;
        String str8 = Build.MODEL;
        String str9 = Build.PRODUCT;
        Logging.d(str, "Android SDK: " + i10 + ", Release: " + str2 + ", Brand: " + str3 + ", Device: " + str4 + ", Id: " + str5 + ", Hardware: " + str6 + ", Manufacturer: " + str7 + ", Model: " + str8 + ", Product: " + str9);
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public static String modeToString(int i10) {
        if (i10 != 0) {
            if (i10 != 1) {
                if (i10 != 2) {
                    if (i10 != 3) {
                        return "MODE_INVALID";
                    }
                    return "MODE_IN_COMMUNICATION";
                }
                return "MODE_IN_CALL";
            }
            return "MODE_RINGTONE";
        }
        return "MODE_NORMAL";
    }

    public static boolean runningOnEmulator() {
        String str = Build.HARDWARE;
        if (!str.equals("goldfish") && !str.equals("ranchu")) {
            return false;
        }
        return true;
    }

    private static String streamTypeToString(int i10) {
        if (i10 != 0) {
            if (i10 != 1) {
                if (i10 != 2) {
                    if (i10 != 3) {
                        if (i10 != 4) {
                            if (i10 != 5) {
                                return "STREAM_INVALID";
                            }
                            return "STREAM_NOTIFICATION";
                        }
                        return "STREAM_ALARM";
                    }
                    return "STREAM_MUSIC";
                }
                return "STREAM_RING";
            }
            return "STREAM_SYSTEM";
        }
        return "STREAM_VOICE_CALL";
    }
}

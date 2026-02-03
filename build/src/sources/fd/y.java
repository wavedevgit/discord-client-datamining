package fd;

import android.media.MediaCodecInfo;
import android.media.MediaCodecList;
import android.text.TextUtils;
import android.util.Pair;
import androidx.recyclerview.widget.RecyclerView;
import com.discord.misc.utilities.chat_view_types.ChatViewRecyclerTypes;
import com.facebook.react.fabric.mounting.mountitems.IntBufferBatchMountItem;
import com.facebook.react.uimanager.events.PointerEventHelper;
import com.google.android.exoplayer2.Format;
import fd.y;
import java.util.ArrayList;
import java.util.Collections;
import java.util.Comparator;
import java.util.HashMap;
import java.util.List;
import java.util.regex.Matcher;
import java.util.regex.Pattern;
import ne.c0;
import ne.w0;
import org.webrtc.PeerConnection;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public abstract class y {

    /* renamed from: a  reason: collision with root package name */
    private static final Pattern f23836a = Pattern.compile("^\\D?(\\d+)$");

    /* renamed from: b  reason: collision with root package name */
    private static final HashMap f23837b = new HashMap();

    /* renamed from: c  reason: collision with root package name */
    private static int f23838c = -1;

    /* JADX INFO: Access modifiers changed from: private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    public static final class b {

        /* renamed from: a  reason: collision with root package name */
        public final String f23839a;

        /* renamed from: b  reason: collision with root package name */
        public final boolean f23840b;

        /* renamed from: c  reason: collision with root package name */
        public final boolean f23841c;

        public b(String str, boolean z10, boolean z11) {
            this.f23839a = str;
            this.f23840b = z10;
            this.f23841c = z11;
        }

        public boolean equals(Object obj) {
            if (this == obj) {
                return true;
            }
            if (obj != null && obj.getClass() == b.class) {
                b bVar = (b) obj;
                if (TextUtils.equals(this.f23839a, bVar.f23839a) && this.f23840b == bVar.f23840b && this.f23841c == bVar.f23841c) {
                    return true;
                }
            }
            return false;
        }

        public int hashCode() {
            int i10;
            int hashCode = (this.f23839a.hashCode() + 31) * 31;
            int i11 = 1237;
            if (this.f23840b) {
                i10 = 1231;
            } else {
                i10 = 1237;
            }
            int i12 = (hashCode + i10) * 31;
            if (this.f23841c) {
                i11 = 1231;
            }
            return i12 + i11;
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    public static class c extends Exception {
        private c(Throwable th2) {
            super("Failed to query underlying media codecs", th2);
        }
    }

    /* JADX INFO: Access modifiers changed from: private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    public interface d {
        MediaCodecInfo a(int i10);

        boolean b(String str, String str2, MediaCodecInfo.CodecCapabilities codecCapabilities);

        boolean c(String str, String str2, MediaCodecInfo.CodecCapabilities codecCapabilities);

        int d();

        boolean e();
    }

    /* JADX INFO: Access modifiers changed from: private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    public static final class e implements d {
        private e() {
        }

        @Override // fd.y.d
        public MediaCodecInfo a(int i10) {
            return MediaCodecList.getCodecInfoAt(i10);
        }

        @Override // fd.y.d
        public boolean b(String str, String str2, MediaCodecInfo.CodecCapabilities codecCapabilities) {
            if ("secure-playback".equals(str) && "video/avc".equals(str2)) {
                return true;
            }
            return false;
        }

        @Override // fd.y.d
        public boolean c(String str, String str2, MediaCodecInfo.CodecCapabilities codecCapabilities) {
            return false;
        }

        @Override // fd.y.d
        public int d() {
            return MediaCodecList.getCodecCount();
        }

        @Override // fd.y.d
        public boolean e() {
            return false;
        }
    }

    /* JADX INFO: Access modifiers changed from: private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    public static final class f implements d {

        /* renamed from: a  reason: collision with root package name */
        private final int f23842a;

        /* renamed from: b  reason: collision with root package name */
        private MediaCodecInfo[] f23843b;

        public f(boolean z10, boolean z11) {
            int i10;
            if (!z10 && !z11) {
                i10 = 0;
            } else {
                i10 = 1;
            }
            this.f23842a = i10;
        }

        private void f() {
            if (this.f23843b == null) {
                this.f23843b = new MediaCodecList(this.f23842a).getCodecInfos();
            }
        }

        @Override // fd.y.d
        public MediaCodecInfo a(int i10) {
            f();
            return this.f23843b[i10];
        }

        @Override // fd.y.d
        public boolean b(String str, String str2, MediaCodecInfo.CodecCapabilities codecCapabilities) {
            return codecCapabilities.isFeatureSupported(str);
        }

        @Override // fd.y.d
        public boolean c(String str, String str2, MediaCodecInfo.CodecCapabilities codecCapabilities) {
            return codecCapabilities.isFeatureRequired(str);
        }

        @Override // fd.y.d
        public int d() {
            f();
            return this.f23843b.length;
        }

        @Override // fd.y.d
        public boolean e() {
            return true;
        }
    }

    /* JADX INFO: Access modifiers changed from: private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    public interface g {
        int a(Object obj);
    }

    private static Pair A(String str, String[] strArr) {
        if (strArr.length < 3) {
            ne.y.i("MediaCodecUtil", "Ignoring malformed VP9 codec string: " + str);
            return null;
        }
        try {
            int parseInt = Integer.parseInt(strArr[1]);
            int parseInt2 = Integer.parseInt(strArr[2]);
            int P = P(parseInt);
            if (P == -1) {
                ne.y.i("MediaCodecUtil", "Unknown VP9 profile: " + parseInt);
                return null;
            }
            int O = O(parseInt2);
            if (O == -1) {
                ne.y.i("MediaCodecUtil", "Unknown VP9 level: " + parseInt2);
                return null;
            }
            return new Pair(Integer.valueOf(P), Integer.valueOf(O));
        } catch (NumberFormatException unused) {
            ne.y.i("MediaCodecUtil", "Ignoring malformed VP9 codec string: " + str);
            return null;
        }
    }

    private static Integer B(String str) {
        if (str == null) {
            return null;
        }
        char c10 = 65535;
        switch (str.hashCode()) {
            case 70821:
                if (str.equals("H30")) {
                    c10 = 0;
                    break;
                }
                break;
            case 70914:
                if (str.equals("H60")) {
                    c10 = 1;
                    break;
                }
                break;
            case 70917:
                if (str.equals("H63")) {
                    c10 = 2;
                    break;
                }
                break;
            case 71007:
                if (str.equals("H90")) {
                    c10 = 3;
                    break;
                }
                break;
            case 71010:
                if (str.equals("H93")) {
                    c10 = 4;
                    break;
                }
                break;
            case 74665:
                if (str.equals("L30")) {
                    c10 = 5;
                    break;
                }
                break;
            case 74758:
                if (str.equals("L60")) {
                    c10 = 6;
                    break;
                }
                break;
            case 74761:
                if (str.equals("L63")) {
                    c10 = 7;
                    break;
                }
                break;
            case 74851:
                if (str.equals("L90")) {
                    c10 = '\b';
                    break;
                }
                break;
            case 74854:
                if (str.equals("L93")) {
                    c10 = '\t';
                    break;
                }
                break;
            case 2193639:
                if (str.equals("H120")) {
                    c10 = '\n';
                    break;
                }
                break;
            case 2193642:
                if (str.equals("H123")) {
                    c10 = 11;
                    break;
                }
                break;
            case 2193732:
                if (str.equals("H150")) {
                    c10 = '\f';
                    break;
                }
                break;
            case 2193735:
                if (str.equals("H153")) {
                    c10 = '\r';
                    break;
                }
                break;
            case 2193738:
                if (str.equals("H156")) {
                    c10 = 14;
                    break;
                }
                break;
            case 2193825:
                if (str.equals("H180")) {
                    c10 = 15;
                    break;
                }
                break;
            case 2193828:
                if (str.equals("H183")) {
                    c10 = 16;
                    break;
                }
                break;
            case 2193831:
                if (str.equals("H186")) {
                    c10 = 17;
                    break;
                }
                break;
            case 2312803:
                if (str.equals("L120")) {
                    c10 = 18;
                    break;
                }
                break;
            case 2312806:
                if (str.equals("L123")) {
                    c10 = 19;
                    break;
                }
                break;
            case 2312896:
                if (str.equals("L150")) {
                    c10 = 20;
                    break;
                }
                break;
            case 2312899:
                if (str.equals("L153")) {
                    c10 = 21;
                    break;
                }
                break;
            case 2312902:
                if (str.equals("L156")) {
                    c10 = 22;
                    break;
                }
                break;
            case 2312989:
                if (str.equals("L180")) {
                    c10 = 23;
                    break;
                }
                break;
            case 2312992:
                if (str.equals("L183")) {
                    c10 = 24;
                    break;
                }
                break;
            case 2312995:
                if (str.equals("L186")) {
                    c10 = 25;
                    break;
                }
                break;
        }
        switch (c10) {
            case 0:
                return 2;
            case 1:
                return 8;
            case 2:
                return 32;
            case 3:
                return Integer.valueOf((int) IntBufferBatchMountItem.INSTRUCTION_UPDATE_LAYOUT);
            case 4:
                return Integer.valueOf((int) IntBufferBatchMountItem.INSTRUCTION_UPDATE_PADDING);
            case 5:
                return 1;
            case 6:
                return 4;
            case 7:
                return 16;
            case '\b':
                return 64;
            case '\t':
                return Integer.valueOf((int) IntBufferBatchMountItem.INSTRUCTION_UPDATE_EVENT_EMITTER);
            case '\n':
                return Integer.valueOf((int) RecyclerView.ItemAnimator.FLAG_MOVED);
            case 11:
                return 8192;
            case '\f':
                return Integer.valueOf((int) PeerConnection.PORTALLOCATOR_ENABLE_ANY_ADDRESS_PORTS);
            case '\r':
                return 131072;
            case 14:
                return 524288;
            case 15:
                return 2097152;
            case 16:
                return 8388608;
            case 17:
                return 33554432;
            case ChatViewRecyclerTypes.EPHEMERAL_INDICATION /* 18 */:
                return Integer.valueOf((int) IntBufferBatchMountItem.INSTRUCTION_UPDATE_OVERFLOW_INSET);
            case ChatViewRecyclerTypes.INTERACTION_STATUS /* 19 */:
                return Integer.valueOf((int) RecyclerView.ItemAnimator.FLAG_APPEARED_IN_PRE_LAYOUT);
            case 20:
                return 16384;
            case ChatViewRecyclerTypes.FLAGGED_MESSAGE_EMBED /* 21 */:
                return 65536;
            case ChatViewRecyclerTypes.FLAGGED_MESSAGE_ACTION_BAR /* 22 */:
                return 262144;
            case 23:
                return 1048576;
            case ChatViewRecyclerTypes.SURVEY_INDICATION /* 24 */:
                return 4194304;
            case ChatViewRecyclerTypes.GUILD_INVITE_DISABLED /* 25 */:
                return Integer.valueOf((int) PointerEventHelper.X_FLAG_SUPPORTS_HOVER);
            default:
                return null;
        }
    }

    private static boolean C(MediaCodecInfo mediaCodecInfo) {
        if (w0.f40197a >= 29 && D(mediaCodecInfo)) {
            return true;
        }
        return false;
    }

    private static boolean D(MediaCodecInfo mediaCodecInfo) {
        return mediaCodecInfo.isAlias();
    }

    private static boolean E(MediaCodecInfo mediaCodecInfo, String str, boolean z10, String str2) {
        if (mediaCodecInfo.isEncoder() || (!z10 && str.endsWith(".secure"))) {
            return false;
        }
        int i10 = w0.f40197a;
        if (i10 < 21 && ("CIPAACDecoder".equals(str) || "CIPMP3Decoder".equals(str) || "CIPVorbisDecoder".equals(str) || "CIPAMRNBDecoder".equals(str) || "AACDecoder".equals(str) || "MP3Decoder".equals(str))) {
            return false;
        }
        if (i10 < 18 && "OMX.MTK.AUDIO.DECODER.AAC".equals(str)) {
            String str3 = w0.f40198b;
            if ("a70".equals(str3) || ("Xiaomi".equals(w0.f40199c) && str3.startsWith("HM"))) {
                return false;
            }
        }
        if (i10 == 16 && "OMX.qcom.audio.decoder.mp3".equals(str)) {
            String str4 = w0.f40198b;
            if ("dlxu".equals(str4) || "protou".equals(str4) || "ville".equals(str4) || "villeplus".equals(str4) || "villec2".equals(str4) || str4.startsWith("gee") || "C6602".equals(str4) || "C6603".equals(str4) || "C6606".equals(str4) || "C6616".equals(str4) || "L36h".equals(str4) || "SO-02E".equals(str4)) {
                return false;
            }
        }
        if (i10 == 16 && "OMX.qcom.audio.decoder.aac".equals(str)) {
            String str5 = w0.f40198b;
            if ("C1504".equals(str5) || "C1505".equals(str5) || "C1604".equals(str5) || "C1605".equals(str5)) {
                return false;
            }
        }
        if (i10 < 24 && (("OMX.SEC.aac.dec".equals(str) || "OMX.Exynos.AAC.Decoder".equals(str)) && "samsung".equals(w0.f40199c))) {
            String str6 = w0.f40198b;
            if (str6.startsWith("zeroflte") || str6.startsWith("zerolte") || str6.startsWith("zenlte") || "SC-05G".equals(str6) || "marinelteatt".equals(str6) || "404SC".equals(str6) || "SC-04G".equals(str6) || "SCV31".equals(str6)) {
                return false;
            }
        }
        if (i10 <= 19 && "OMX.SEC.vp8.dec".equals(str) && "samsung".equals(w0.f40199c)) {
            String str7 = w0.f40198b;
            if (str7.startsWith("d2") || str7.startsWith("serrano") || str7.startsWith("jflte") || str7.startsWith("santos") || str7.startsWith("t0")) {
                return false;
            }
        }
        if (i10 <= 19 && w0.f40198b.startsWith("jflte") && "OMX.qcom.video.decoder.vp8".equals(str)) {
            return false;
        }
        if (i10 <= 23 && "audio/eac3-joc".equals(str2) && "OMX.MTK.AUDIO.DECODER.DSPAC3".equals(str)) {
            return false;
        }
        return true;
    }

    private static boolean F(MediaCodecInfo mediaCodecInfo, String str) {
        if (w0.f40197a >= 29) {
            return G(mediaCodecInfo);
        }
        return !H(mediaCodecInfo, str);
    }

    private static boolean G(MediaCodecInfo mediaCodecInfo) {
        return mediaCodecInfo.isHardwareAccelerated();
    }

    private static boolean H(MediaCodecInfo mediaCodecInfo, String str) {
        if (w0.f40197a >= 29) {
            return I(mediaCodecInfo);
        }
        if (c0.o(str)) {
            return true;
        }
        String e10 = ii.b.e(mediaCodecInfo.getName());
        if (e10.startsWith("arc.")) {
            return false;
        }
        if (e10.startsWith("omx.google.") || e10.startsWith("omx.ffmpeg.") || ((e10.startsWith("omx.sec.") && e10.contains(".sw.")) || e10.equals("omx.qcom.video.decoder.hevcswvdec") || e10.startsWith("c2.android.") || e10.startsWith("c2.google.") || (!e10.startsWith("omx.") && !e10.startsWith("c2.")))) {
            return true;
        }
        return false;
    }

    private static boolean I(MediaCodecInfo mediaCodecInfo) {
        return mediaCodecInfo.isSoftwareOnly();
    }

    private static boolean J(MediaCodecInfo mediaCodecInfo) {
        if (w0.f40197a >= 29) {
            return K(mediaCodecInfo);
        }
        String e10 = ii.b.e(mediaCodecInfo.getName());
        if (!e10.startsWith("omx.google.") && !e10.startsWith("c2.android.") && !e10.startsWith("c2.google.")) {
            return true;
        }
        return false;
    }

    private static boolean K(MediaCodecInfo mediaCodecInfo) {
        return mediaCodecInfo.isVendor();
    }

    public static int L() {
        int i10;
        if (f23838c == -1) {
            int i11 = 0;
            q s10 = s("video/avc", false, false);
            if (s10 != null) {
                MediaCodecInfo.CodecProfileLevel[] h10 = s10.h();
                int length = h10.length;
                int i12 = 0;
                while (i11 < length) {
                    i12 = Math.max(h(h10[i11].level), i12);
                    i11++;
                }
                if (w0.f40197a >= 21) {
                    i10 = 345600;
                } else {
                    i10 = 172800;
                }
                i11 = Math.max(i12, i10);
            }
            f23838c = i11;
        }
        return f23838c;
    }

    private static int M(int i10) {
        int i11 = 17;
        if (i10 != 17) {
            i11 = 20;
            if (i10 != 20) {
                i11 = 23;
                if (i10 != 23) {
                    i11 = 29;
                    if (i10 != 29) {
                        i11 = 39;
                        if (i10 != 39) {
                            i11 = 42;
                            if (i10 != 42) {
                                switch (i10) {
                                    case 1:
                                        return 1;
                                    case 2:
                                        return 2;
                                    case 3:
                                        return 3;
                                    case 4:
                                        return 4;
                                    case 5:
                                        return 5;
                                    case 6:
                                        return 6;
                                    default:
                                        return -1;
                                }
                            }
                        }
                    }
                }
            }
        }
        return i11;
    }

    private static void N(List list, final g gVar) {
        Collections.sort(list, new Comparator() { // from class: fd.x
            @Override // java.util.Comparator
            public final int compare(Object obj, Object obj2) {
                return y.a(y.g.this, obj, obj2);
            }
        });
    }

    private static int O(int i10) {
        if (i10 != 10) {
            if (i10 != 11) {
                if (i10 != 20) {
                    if (i10 != 21) {
                        if (i10 != 30) {
                            if (i10 != 31) {
                                if (i10 != 40) {
                                    if (i10 != 41) {
                                        if (i10 != 50) {
                                            if (i10 != 51) {
                                                switch (i10) {
                                                    case 60:
                                                        return RecyclerView.ItemAnimator.FLAG_MOVED;
                                                    case 61:
                                                        return RecyclerView.ItemAnimator.FLAG_APPEARED_IN_PRE_LAYOUT;
                                                    case 62:
                                                        return 8192;
                                                    default:
                                                        return -1;
                                                }
                                            }
                                            return IntBufferBatchMountItem.INSTRUCTION_UPDATE_PADDING;
                                        }
                                        return IntBufferBatchMountItem.INSTRUCTION_UPDATE_EVENT_EMITTER;
                                    }
                                    return IntBufferBatchMountItem.INSTRUCTION_UPDATE_LAYOUT;
                                }
                                return 64;
                            }
                            return 32;
                        }
                        return 16;
                    }
                    return 8;
                }
                return 4;
            }
            return 2;
        }
        return 1;
    }

    private static int P(int i10) {
        if (i10 == 0) {
            return 1;
        }
        if (i10 == 1) {
            return 2;
        }
        if (i10 != 2) {
            if (i10 != 3) {
                return -1;
            }
            return 8;
        }
        return 4;
    }

    public static /* synthetic */ int a(g gVar, Object obj, Object obj2) {
        return gVar.a(obj2) - gVar.a(obj);
    }

    public static /* synthetic */ int b(q qVar) {
        String str = qVar.f23786a;
        if (!str.startsWith("OMX.google") && !str.startsWith("c2.android")) {
            if (w0.f40197a < 26 && str.equals("OMX.MTK.AUDIO.DECODER.RAW")) {
                return -1;
            }
            return 0;
        }
        return 1;
    }

    public static /* synthetic */ int c(q qVar) {
        return qVar.f23786a.startsWith("OMX.google") ? 1 : 0;
    }

    public static /* synthetic */ int d(Format format, q qVar) {
        return qVar.n(format) ? 1 : 0;
    }

    private static void e(String str, List list) {
        if ("audio/raw".equals(str)) {
            if (w0.f40197a < 26 && w0.f40198b.equals("R9") && list.size() == 1 && ((q) list.get(0)).f23786a.equals("OMX.MTK.AUDIO.DECODER.RAW")) {
                list.add(q.F("OMX.google.raw.decoder", "audio/raw", "audio/raw", null, false, true, false, false, false));
            }
            N(list, new g() { // from class: fd.u
                @Override // fd.y.g
                public final int a(Object obj) {
                    return y.b((q) obj);
                }
            });
        }
        int i10 = w0.f40197a;
        if (i10 < 21 && list.size() > 1) {
            String str2 = ((q) list.get(0)).f23786a;
            if ("OMX.SEC.mp3.dec".equals(str2) || "OMX.SEC.MP3.Decoder".equals(str2) || "OMX.brcm.audio.mp3.decoder".equals(str2)) {
                N(list, new g() { // from class: fd.v
                    @Override // fd.y.g
                    public final int a(Object obj) {
                        return y.c((q) obj);
                    }
                });
            }
        }
        if (i10 < 32 && list.size() > 1 && "OMX.qti.audio.decoder.flac".equals(((q) list.get(0)).f23786a)) {
            list.add((q) list.remove(0));
        }
    }

    private static int f(int i10) {
        switch (i10) {
            case 0:
                return 1;
            case 1:
                return 2;
            case 2:
                return 4;
            case 3:
                return 8;
            case 4:
                return 16;
            case 5:
                return 32;
            case 6:
                return 64;
            case 7:
                return IntBufferBatchMountItem.INSTRUCTION_UPDATE_LAYOUT;
            case 8:
                return IntBufferBatchMountItem.INSTRUCTION_UPDATE_EVENT_EMITTER;
            case 9:
                return IntBufferBatchMountItem.INSTRUCTION_UPDATE_PADDING;
            case 10:
                return IntBufferBatchMountItem.INSTRUCTION_UPDATE_OVERFLOW_INSET;
            case 11:
                return RecyclerView.ItemAnimator.FLAG_MOVED;
            case 12:
                return RecyclerView.ItemAnimator.FLAG_APPEARED_IN_PRE_LAYOUT;
            case 13:
                return 8192;
            case 14:
                return 16384;
            case 15:
                return PeerConnection.PORTALLOCATOR_ENABLE_ANY_ADDRESS_PORTS;
            case 16:
                return 65536;
            case 17:
                return 131072;
            case ChatViewRecyclerTypes.EPHEMERAL_INDICATION /* 18 */:
                return 262144;
            case ChatViewRecyclerTypes.INTERACTION_STATUS /* 19 */:
                return 524288;
            case 20:
                return 1048576;
            case ChatViewRecyclerTypes.FLAGGED_MESSAGE_EMBED /* 21 */:
                return 2097152;
            case ChatViewRecyclerTypes.FLAGGED_MESSAGE_ACTION_BAR /* 22 */:
                return 4194304;
            case 23:
                return 8388608;
            default:
                return -1;
        }
    }

    private static int g(int i10) {
        switch (i10) {
            case 10:
                return 1;
            case 11:
                return 4;
            case 12:
                return 8;
            case 13:
                return 16;
            default:
                switch (i10) {
                    case 20:
                        return 32;
                    case ChatViewRecyclerTypes.FLAGGED_MESSAGE_EMBED /* 21 */:
                        return 64;
                    case ChatViewRecyclerTypes.FLAGGED_MESSAGE_ACTION_BAR /* 22 */:
                        return IntBufferBatchMountItem.INSTRUCTION_UPDATE_LAYOUT;
                    default:
                        switch (i10) {
                            case 30:
                                return IntBufferBatchMountItem.INSTRUCTION_UPDATE_EVENT_EMITTER;
                            case ChatViewRecyclerTypes.EMBEDDED_ACTIVITY_INVITE /* 31 */:
                                return IntBufferBatchMountItem.INSTRUCTION_UPDATE_PADDING;
                            case 32:
                                return IntBufferBatchMountItem.INSTRUCTION_UPDATE_OVERFLOW_INSET;
                            default:
                                switch (i10) {
                                    case 40:
                                        return RecyclerView.ItemAnimator.FLAG_MOVED;
                                    case 41:
                                        return RecyclerView.ItemAnimator.FLAG_APPEARED_IN_PRE_LAYOUT;
                                    case 42:
                                        return 8192;
                                    default:
                                        switch (i10) {
                                            case 50:
                                                return 16384;
                                            case ChatViewRecyclerTypes.MEDIA_ATTACHMENT_MOSAIC_VISUAL_PLACEHOLDER /* 51 */:
                                                return PeerConnection.PORTALLOCATOR_ENABLE_ANY_ADDRESS_PORTS;
                                            case ChatViewRecyclerTypes.REFERRAL /* 52 */:
                                                return 65536;
                                            default:
                                                return -1;
                                        }
                                }
                        }
                }
        }
    }

    private static int h(int i10) {
        if (i10 != 1 && i10 != 2) {
            switch (i10) {
                case 8:
                case 16:
                case 32:
                    return 101376;
                case 64:
                    return 202752;
                case IntBufferBatchMountItem.INSTRUCTION_UPDATE_LAYOUT /* 128 */:
                case IntBufferBatchMountItem.INSTRUCTION_UPDATE_EVENT_EMITTER /* 256 */:
                    return 414720;
                case IntBufferBatchMountItem.INSTRUCTION_UPDATE_PADDING /* 512 */:
                    return 921600;
                case IntBufferBatchMountItem.INSTRUCTION_UPDATE_OVERFLOW_INSET /* 1024 */:
                    return 1310720;
                case RecyclerView.ItemAnimator.FLAG_MOVED /* 2048 */:
                case RecyclerView.ItemAnimator.FLAG_APPEARED_IN_PRE_LAYOUT /* 4096 */:
                    return 2097152;
                case 8192:
                    return 2228224;
                case 16384:
                    return 5652480;
                case PeerConnection.PORTALLOCATOR_ENABLE_ANY_ADDRESS_PORTS /* 32768 */:
                case 65536:
                    return 9437184;
                case 131072:
                case 262144:
                case 524288:
                    return 35651584;
                default:
                    return -1;
            }
        }
        return 25344;
    }

    private static int i(int i10) {
        if (i10 != 66) {
            if (i10 != 77) {
                if (i10 != 88) {
                    if (i10 != 100) {
                        if (i10 != 110) {
                            if (i10 != 122) {
                                if (i10 != 244) {
                                    return -1;
                                }
                                return 64;
                            }
                            return 32;
                        }
                        return 16;
                    }
                    return 8;
                }
                return 4;
            }
            return 2;
        }
        return 1;
    }

    private static Integer j(String str) {
        if (str == null) {
            return null;
        }
        char c10 = 65535;
        switch (str.hashCode()) {
            case 1537:
                if (str.equals("01")) {
                    c10 = 0;
                    break;
                }
                break;
            case 1538:
                if (str.equals("02")) {
                    c10 = 1;
                    break;
                }
                break;
            case 1539:
                if (str.equals("03")) {
                    c10 = 2;
                    break;
                }
                break;
            case 1540:
                if (str.equals("04")) {
                    c10 = 3;
                    break;
                }
                break;
            case 1541:
                if (str.equals("05")) {
                    c10 = 4;
                    break;
                }
                break;
            case 1542:
                if (str.equals("06")) {
                    c10 = 5;
                    break;
                }
                break;
            case 1543:
                if (str.equals("07")) {
                    c10 = 6;
                    break;
                }
                break;
            case 1544:
                if (str.equals("08")) {
                    c10 = 7;
                    break;
                }
                break;
            case 1545:
                if (str.equals("09")) {
                    c10 = '\b';
                    break;
                }
                break;
            case 1567:
                if (str.equals("10")) {
                    c10 = '\t';
                    break;
                }
                break;
            case 1568:
                if (str.equals("11")) {
                    c10 = '\n';
                    break;
                }
                break;
            case 1569:
                if (str.equals("12")) {
                    c10 = 11;
                    break;
                }
                break;
            case 1570:
                if (str.equals("13")) {
                    c10 = '\f';
                    break;
                }
                break;
        }
        switch (c10) {
            case 0:
                return 1;
            case 1:
                return 2;
            case 2:
                return 4;
            case 3:
                return 8;
            case 4:
                return 16;
            case 5:
                return 32;
            case 6:
                return 64;
            case 7:
                return Integer.valueOf((int) IntBufferBatchMountItem.INSTRUCTION_UPDATE_LAYOUT);
            case '\b':
                return Integer.valueOf((int) IntBufferBatchMountItem.INSTRUCTION_UPDATE_EVENT_EMITTER);
            case '\t':
                return Integer.valueOf((int) IntBufferBatchMountItem.INSTRUCTION_UPDATE_PADDING);
            case '\n':
                return Integer.valueOf((int) IntBufferBatchMountItem.INSTRUCTION_UPDATE_OVERFLOW_INSET);
            case 11:
                return Integer.valueOf((int) RecyclerView.ItemAnimator.FLAG_MOVED);
            case '\f':
                return Integer.valueOf((int) RecyclerView.ItemAnimator.FLAG_APPEARED_IN_PRE_LAYOUT);
            default:
                return null;
        }
    }

    private static Integer k(String str) {
        if (str == null) {
            return null;
        }
        char c10 = 65535;
        switch (str.hashCode()) {
            case 1536:
                if (str.equals("00")) {
                    c10 = 0;
                    break;
                }
                break;
            case 1537:
                if (str.equals("01")) {
                    c10 = 1;
                    break;
                }
                break;
            case 1538:
                if (str.equals("02")) {
                    c10 = 2;
                    break;
                }
                break;
            case 1539:
                if (str.equals("03")) {
                    c10 = 3;
                    break;
                }
                break;
            case 1540:
                if (str.equals("04")) {
                    c10 = 4;
                    break;
                }
                break;
            case 1541:
                if (str.equals("05")) {
                    c10 = 5;
                    break;
                }
                break;
            case 1542:
                if (str.equals("06")) {
                    c10 = 6;
                    break;
                }
                break;
            case 1543:
                if (str.equals("07")) {
                    c10 = 7;
                    break;
                }
                break;
            case 1544:
                if (str.equals("08")) {
                    c10 = '\b';
                    break;
                }
                break;
            case 1545:
                if (str.equals("09")) {
                    c10 = '\t';
                    break;
                }
                break;
        }
        switch (c10) {
            case 0:
                return 1;
            case 1:
                return 2;
            case 2:
                return 4;
            case 3:
                return 8;
            case 4:
                return 16;
            case 5:
                return 32;
            case 6:
                return 64;
            case 7:
                return Integer.valueOf((int) IntBufferBatchMountItem.INSTRUCTION_UPDATE_LAYOUT);
            case '\b':
                return Integer.valueOf((int) IntBufferBatchMountItem.INSTRUCTION_UPDATE_EVENT_EMITTER);
            case '\t':
                return Integer.valueOf((int) IntBufferBatchMountItem.INSTRUCTION_UPDATE_PADDING);
            default:
                return null;
        }
    }

    private static Pair l(String str, String[] strArr) {
        int M;
        if (strArr.length != 3) {
            ne.y.i("MediaCodecUtil", "Ignoring malformed MP4A codec string: " + str);
            return null;
        }
        try {
            if ("audio/mp4a-latm".equals(c0.h(Integer.parseInt(strArr[1], 16))) && (M = M(Integer.parseInt(strArr[2]))) != -1) {
                return new Pair(Integer.valueOf(M), 0);
            }
        } catch (NumberFormatException unused) {
            ne.y.i("MediaCodecUtil", "Ignoring malformed MP4A codec string: " + str);
        }
        return null;
    }

    public static String m(Format format) {
        Pair r10;
        if ("audio/eac3-joc".equals(format.f11303w)) {
            return "audio/eac3";
        }
        if ("video/dolby-vision".equals(format.f11303w) && (r10 = r(format)) != null) {
            int intValue = ((Integer) r10.first).intValue();
            if (intValue != 16 && intValue != 256) {
                if (intValue == 512) {
                    return "video/avc";
                }
                return null;
            }
            return "video/hevc";
        }
        return null;
    }

    public static List n(t tVar, Format format, boolean z10, boolean z11) {
        String m10 = m(format);
        if (m10 == null) {
            return ji.s.r();
        }
        return tVar.a(m10, z10, z11);
    }

    private static Pair o(String str, String[] strArr, oe.c cVar) {
        int i10;
        if (strArr.length < 4) {
            ne.y.i("MediaCodecUtil", "Ignoring malformed AV1 codec string: " + str);
            return null;
        }
        int i11 = 1;
        try {
            int parseInt = Integer.parseInt(strArr[1]);
            int parseInt2 = Integer.parseInt(strArr[2].substring(0, 2));
            int parseInt3 = Integer.parseInt(strArr[3]);
            if (parseInt != 0) {
                ne.y.i("MediaCodecUtil", "Unknown AV1 profile: " + parseInt);
                return null;
            } else if (parseInt3 != 8 && parseInt3 != 10) {
                ne.y.i("MediaCodecUtil", "Unknown AV1 bit depth: " + parseInt3);
                return null;
            } else {
                if (parseInt3 != 8) {
                    if (cVar != null && (cVar.f42472o != null || (i10 = cVar.f42471i) == 7 || i10 == 6)) {
                        i11 = RecyclerView.ItemAnimator.FLAG_APPEARED_IN_PRE_LAYOUT;
                    } else {
                        i11 = 2;
                    }
                }
                int f10 = f(parseInt2);
                if (f10 == -1) {
                    ne.y.i("MediaCodecUtil", "Unknown AV1 level: " + parseInt2);
                    return null;
                }
                return new Pair(Integer.valueOf(i11), Integer.valueOf(f10));
            }
        } catch (NumberFormatException unused) {
            ne.y.i("MediaCodecUtil", "Ignoring malformed AV1 codec string: " + str);
            return null;
        }
    }

    private static Pair p(String str, String[] strArr) {
        int parseInt;
        int i10;
        if (strArr.length < 2) {
            ne.y.i("MediaCodecUtil", "Ignoring malformed AVC codec string: " + str);
            return null;
        }
        try {
            if (strArr[1].length() == 6) {
                i10 = Integer.parseInt(strArr[1].substring(0, 2), 16);
                parseInt = Integer.parseInt(strArr[1].substring(4), 16);
            } else if (strArr.length >= 3) {
                int parseInt2 = Integer.parseInt(strArr[1]);
                parseInt = Integer.parseInt(strArr[2]);
                i10 = parseInt2;
            } else {
                ne.y.i("MediaCodecUtil", "Ignoring malformed AVC codec string: " + str);
                return null;
            }
            int i11 = i(i10);
            if (i11 == -1) {
                ne.y.i("MediaCodecUtil", "Unknown AVC profile: " + i10);
                return null;
            }
            int g10 = g(parseInt);
            if (g10 == -1) {
                ne.y.i("MediaCodecUtil", "Unknown AVC level: " + parseInt);
                return null;
            }
            return new Pair(Integer.valueOf(i11), Integer.valueOf(g10));
        } catch (NumberFormatException unused) {
            ne.y.i("MediaCodecUtil", "Ignoring malformed AVC codec string: " + str);
            return null;
        }
    }

    private static String q(MediaCodecInfo mediaCodecInfo, String str, String str2) {
        String[] supportedTypes;
        for (String str3 : mediaCodecInfo.getSupportedTypes()) {
            if (str3.equalsIgnoreCase(str2)) {
                return str3;
            }
        }
        if (str2.equals("video/dolby-vision")) {
            if ("OMX.MS.HEVCDV.Decoder".equals(str)) {
                return "video/hevcdv";
            }
            if ("OMX.RTK.video.decoder".equals(str) || "OMX.realtek.video.decoder.tunneled".equals(str)) {
                return "video/dv_hevc";
            }
            return null;
        } else if (str2.equals("audio/alac") && "OMX.lge.alac.decoder".equals(str)) {
            return "audio/x-lg-alac";
        } else {
            if (str2.equals("audio/flac") && "OMX.lge.flac.decoder".equals(str)) {
                return "audio/x-lg-flac";
            }
            if (str2.equals("audio/ac3") && "OMX.lge.ac3.decoder".equals(str)) {
                return "audio/lg-ac3";
            }
            return null;
        }
    }

    /* JADX WARN: Can't fix incorrect switch cases order, some code will duplicate */
    /* JADX WARN: Code restructure failed: missing block: B:37:0x0075, code lost:
        if (r3.equals("av01") == false) goto L11;
     */
    /*
        Code decompiled incorrectly, please refer to instructions dump.
        To view partially-correct add '--show-bad-code' argument
    */
    public static android.util.Pair r(com.google.android.exoplayer2.Format r6) {
        /*
            java.lang.String r0 = r6.f11300t
            r1 = 0
            if (r0 != 0) goto L6
            return r1
        L6:
            java.lang.String r2 = "\\."
            java.lang.String[] r0 = r0.split(r2)
            java.lang.String r2 = "video/dolby-vision"
            java.lang.String r3 = r6.f11303w
            boolean r2 = r2.equals(r3)
            if (r2 == 0) goto L1d
            java.lang.String r6 = r6.f11300t
            android.util.Pair r6 = y(r6, r0)
            return r6
        L1d:
            r2 = 0
            r3 = r0[r2]
            r3.getClass()
            int r4 = r3.hashCode()
            r5 = -1
            switch(r4) {
                case 3004662: goto L6f;
                case 3006243: goto L64;
                case 3006244: goto L59;
                case 3199032: goto L4e;
                case 3214780: goto L43;
                case 3356560: goto L38;
                case 3624515: goto L2d;
                default: goto L2b;
            }
        L2b:
            r2 = r5
            goto L78
        L2d:
            java.lang.String r2 = "vp09"
            boolean r2 = r3.equals(r2)
            if (r2 != 0) goto L36
            goto L2b
        L36:
            r2 = 6
            goto L78
        L38:
            java.lang.String r2 = "mp4a"
            boolean r2 = r3.equals(r2)
            if (r2 != 0) goto L41
            goto L2b
        L41:
            r2 = 5
            goto L78
        L43:
            java.lang.String r2 = "hvc1"
            boolean r2 = r3.equals(r2)
            if (r2 != 0) goto L4c
            goto L2b
        L4c:
            r2 = 4
            goto L78
        L4e:
            java.lang.String r2 = "hev1"
            boolean r2 = r3.equals(r2)
            if (r2 != 0) goto L57
            goto L2b
        L57:
            r2 = 3
            goto L78
        L59:
            java.lang.String r2 = "avc2"
            boolean r2 = r3.equals(r2)
            if (r2 != 0) goto L62
            goto L2b
        L62:
            r2 = 2
            goto L78
        L64:
            java.lang.String r2 = "avc1"
            boolean r2 = r3.equals(r2)
            if (r2 != 0) goto L6d
            goto L2b
        L6d:
            r2 = 1
            goto L78
        L6f:
            java.lang.String r4 = "av01"
            boolean r3 = r3.equals(r4)
            if (r3 != 0) goto L78
            goto L2b
        L78:
            switch(r2) {
                case 0: goto L9a;
                case 1: goto L93;
                case 2: goto L93;
                case 3: goto L8a;
                case 4: goto L8a;
                case 5: goto L83;
                case 6: goto L7c;
                default: goto L7b;
            }
        L7b:
            return r1
        L7c:
            java.lang.String r6 = r6.f11300t
            android.util.Pair r6 = A(r6, r0)
            return r6
        L83:
            java.lang.String r6 = r6.f11300t
            android.util.Pair r6 = l(r6, r0)
            return r6
        L8a:
            java.lang.String r1 = r6.f11300t
            oe.c r6 = r6.I
            android.util.Pair r6 = z(r1, r0, r6)
            return r6
        L93:
            java.lang.String r6 = r6.f11300t
            android.util.Pair r6 = p(r6, r0)
            return r6
        L9a:
            java.lang.String r1 = r6.f11300t
            oe.c r6 = r6.I
            android.util.Pair r6 = o(r1, r0, r6)
            return r6
        */
        throw new UnsupportedOperationException("Method not decompiled: fd.y.r(com.google.android.exoplayer2.Format):android.util.Pair");
    }

    public static q s(String str, boolean z10, boolean z11) {
        List t10 = t(str, z10, z11);
        if (t10.isEmpty()) {
            return null;
        }
        return (q) t10.get(0);
    }

    public static synchronized List t(String str, boolean z10, boolean z11) {
        d eVar;
        synchronized (y.class) {
            try {
                b bVar = new b(str, z10, z11);
                HashMap hashMap = f23837b;
                List list = (List) hashMap.get(bVar);
                if (list != null) {
                    return list;
                }
                int i10 = w0.f40197a;
                if (i10 >= 21) {
                    eVar = new f(z10, z11);
                } else {
                    eVar = new e();
                }
                ArrayList u10 = u(bVar, eVar);
                if (z10 && u10.isEmpty() && 21 <= i10 && i10 <= 23) {
                    u10 = u(bVar, new e());
                    if (!u10.isEmpty()) {
                        ne.y.i("MediaCodecUtil", "MediaCodecList API didn't list secure decoder for: " + str + ". Assuming: " + ((q) u10.get(0)).f23786a);
                    }
                }
                e(str, u10);
                ji.s m10 = ji.s.m(u10);
                hashMap.put(bVar, m10);
                return m10;
            } catch (Throwable th2) {
                throw th2;
            }
        }
    }

    /* JADX WARN: Code restructure failed: missing block: B:33:0x0088, code lost:
        if (r1.f23840b != r12) goto L61;
     */
    /* JADX WARN: Code restructure failed: missing block: B:41:0x009b, code lost:
        if (r1.f23840b == false) goto L40;
     */
    /* JADX WARN: Code restructure failed: missing block: B:43:0x009e, code lost:
        r17 = r11;
        r18 = r16;
        r16 = r10;
     */
    /* JADX WARN: Code restructure failed: missing block: B:44:0x00a8, code lost:
        r5.add(fd.q.F(r9, r7, r8, r9, r10, r11, r18, false, false));
     */
    /* JADX WARN: Code restructure failed: missing block: B:45:0x00b1, code lost:
        r0 = e;
     */
    /* JADX WARN: Removed duplicated region for block: B:65:0x00fa A[Catch: Exception -> 0x0144, TRY_ENTER, TryCatch #4 {Exception -> 0x0144, blocks: (B:3:0x0008, B:5:0x001b, B:68:0x0119, B:8:0x002b, B:11:0x0036, B:62:0x00f2, B:65:0x00fa, B:67:0x0100, B:69:0x0121, B:70:0x0142), top: B:83:0x0008 }] */
    /* JADX WARN: Removed duplicated region for block: B:91:0x0121 A[ADDED_TO_REGION, SYNTHETIC] */
    /*
        Code decompiled incorrectly, please refer to instructions dump.
        To view partially-correct add '--show-bad-code' argument
    */
    private static java.util.ArrayList u(fd.y.b r19, fd.y.d r20) {
        /*
            Method dump skipped, instructions count: 332
            To view this dump add '--comments-level debug' option
        */
        throw new UnsupportedOperationException("Method not decompiled: fd.y.u(fd.y$b, fd.y$d):java.util.ArrayList");
    }

    public static List v(t tVar, Format format, boolean z10, boolean z11) {
        List a10 = tVar.a(format.f11303w, z10, z11);
        return ji.s.j().j(a10).j(n(tVar, format, z10, z11)).k();
    }

    public static List w(List list, final Format format) {
        ArrayList arrayList = new ArrayList(list);
        N(arrayList, new g() { // from class: fd.w
            @Override // fd.y.g
            public final int a(Object obj) {
                return y.d(Format.this, (q) obj);
            }
        });
        return arrayList;
    }

    public static q x() {
        return s("audio/raw", false, false);
    }

    private static Pair y(String str, String[] strArr) {
        if (strArr.length < 3) {
            ne.y.i("MediaCodecUtil", "Ignoring malformed Dolby Vision codec string: " + str);
            return null;
        }
        Matcher matcher = f23836a.matcher(strArr[1]);
        if (!matcher.matches()) {
            ne.y.i("MediaCodecUtil", "Ignoring malformed Dolby Vision codec string: " + str);
            return null;
        }
        String group = matcher.group(1);
        Integer k10 = k(group);
        if (k10 == null) {
            ne.y.i("MediaCodecUtil", "Unknown Dolby Vision profile string: " + group);
            return null;
        }
        String str2 = strArr[2];
        Integer j10 = j(str2);
        if (j10 == null) {
            ne.y.i("MediaCodecUtil", "Unknown Dolby Vision level string: " + str2);
            return null;
        }
        return new Pair(k10, j10);
    }

    private static Pair z(String str, String[] strArr, oe.c cVar) {
        if (strArr.length < 4) {
            ne.y.i("MediaCodecUtil", "Ignoring malformed HEVC codec string: " + str);
            return null;
        }
        int i10 = 1;
        Matcher matcher = f23836a.matcher(strArr[1]);
        if (!matcher.matches()) {
            ne.y.i("MediaCodecUtil", "Ignoring malformed HEVC codec string: " + str);
            return null;
        }
        String group = matcher.group(1);
        if (!"1".equals(group)) {
            if ("2".equals(group)) {
                if (cVar != null && cVar.f42471i == 6) {
                    i10 = RecyclerView.ItemAnimator.FLAG_APPEARED_IN_PRE_LAYOUT;
                } else {
                    i10 = 2;
                }
            } else {
                ne.y.i("MediaCodecUtil", "Unknown HEVC profile string: " + group);
                return null;
            }
        }
        String str2 = strArr[3];
        Integer B = B(str2);
        if (B == null) {
            ne.y.i("MediaCodecUtil", "Unknown HEVC level string: " + str2);
            return null;
        }
        return new Pair(Integer.valueOf(i10), B);
    }
}

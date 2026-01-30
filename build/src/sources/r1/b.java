package r1;

import android.graphics.BlendMode;
import android.graphics.PorterDuff;
import com.discord.misc.utilities.chat_view_types.ChatViewRecyclerTypes;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
abstract class b {

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    static /* synthetic */ class a {

        /* renamed from: a  reason: collision with root package name */
        static final /* synthetic */ int[] f47807a;

        static {
            int[] iArr = new int[r1.a.values().length];
            f47807a = iArr;
            try {
                iArr[r1.a.CLEAR.ordinal()] = 1;
            } catch (NoSuchFieldError unused) {
            }
            try {
                f47807a[r1.a.SRC.ordinal()] = 2;
            } catch (NoSuchFieldError unused2) {
            }
            try {
                f47807a[r1.a.DST.ordinal()] = 3;
            } catch (NoSuchFieldError unused3) {
            }
            try {
                f47807a[r1.a.SRC_OVER.ordinal()] = 4;
            } catch (NoSuchFieldError unused4) {
            }
            try {
                f47807a[r1.a.DST_OVER.ordinal()] = 5;
            } catch (NoSuchFieldError unused5) {
            }
            try {
                f47807a[r1.a.SRC_IN.ordinal()] = 6;
            } catch (NoSuchFieldError unused6) {
            }
            try {
                f47807a[r1.a.DST_IN.ordinal()] = 7;
            } catch (NoSuchFieldError unused7) {
            }
            try {
                f47807a[r1.a.SRC_OUT.ordinal()] = 8;
            } catch (NoSuchFieldError unused8) {
            }
            try {
                f47807a[r1.a.DST_OUT.ordinal()] = 9;
            } catch (NoSuchFieldError unused9) {
            }
            try {
                f47807a[r1.a.SRC_ATOP.ordinal()] = 10;
            } catch (NoSuchFieldError unused10) {
            }
            try {
                f47807a[r1.a.DST_ATOP.ordinal()] = 11;
            } catch (NoSuchFieldError unused11) {
            }
            try {
                f47807a[r1.a.XOR.ordinal()] = 12;
            } catch (NoSuchFieldError unused12) {
            }
            try {
                f47807a[r1.a.PLUS.ordinal()] = 13;
            } catch (NoSuchFieldError unused13) {
            }
            try {
                f47807a[r1.a.MODULATE.ordinal()] = 14;
            } catch (NoSuchFieldError unused14) {
            }
            try {
                f47807a[r1.a.SCREEN.ordinal()] = 15;
            } catch (NoSuchFieldError unused15) {
            }
            try {
                f47807a[r1.a.OVERLAY.ordinal()] = 16;
            } catch (NoSuchFieldError unused16) {
            }
            try {
                f47807a[r1.a.DARKEN.ordinal()] = 17;
            } catch (NoSuchFieldError unused17) {
            }
            try {
                f47807a[r1.a.LIGHTEN.ordinal()] = 18;
            } catch (NoSuchFieldError unused18) {
            }
            try {
                f47807a[r1.a.COLOR_DODGE.ordinal()] = 19;
            } catch (NoSuchFieldError unused19) {
            }
            try {
                f47807a[r1.a.COLOR_BURN.ordinal()] = 20;
            } catch (NoSuchFieldError unused20) {
            }
            try {
                f47807a[r1.a.HARD_LIGHT.ordinal()] = 21;
            } catch (NoSuchFieldError unused21) {
            }
            try {
                f47807a[r1.a.SOFT_LIGHT.ordinal()] = 22;
            } catch (NoSuchFieldError unused22) {
            }
            try {
                f47807a[r1.a.DIFFERENCE.ordinal()] = 23;
            } catch (NoSuchFieldError unused23) {
            }
            try {
                f47807a[r1.a.EXCLUSION.ordinal()] = 24;
            } catch (NoSuchFieldError unused24) {
            }
            try {
                f47807a[r1.a.MULTIPLY.ordinal()] = 25;
            } catch (NoSuchFieldError unused25) {
            }
            try {
                f47807a[r1.a.HUE.ordinal()] = 26;
            } catch (NoSuchFieldError unused26) {
            }
            try {
                f47807a[r1.a.SATURATION.ordinal()] = 27;
            } catch (NoSuchFieldError unused27) {
            }
            try {
                f47807a[r1.a.COLOR.ordinal()] = 28;
            } catch (NoSuchFieldError unused28) {
            }
            try {
                f47807a[r1.a.LUMINOSITY.ordinal()] = 29;
            } catch (NoSuchFieldError unused29) {
            }
        }
    }

    /* renamed from: r1.b$b  reason: collision with other inner class name */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    static class C0575b {
        /* JADX INFO: Access modifiers changed from: package-private */
        public static Object a(r1.a aVar) {
            switch (a.f47807a[aVar.ordinal()]) {
                case 1:
                    return BlendMode.CLEAR;
                case 2:
                    return BlendMode.SRC;
                case 3:
                    return BlendMode.DST;
                case 4:
                    return BlendMode.SRC_OVER;
                case 5:
                    return BlendMode.DST_OVER;
                case 6:
                    return BlendMode.SRC_IN;
                case 7:
                    return BlendMode.DST_IN;
                case 8:
                    return BlendMode.SRC_OUT;
                case 9:
                    return BlendMode.DST_OUT;
                case 10:
                    return BlendMode.SRC_ATOP;
                case 11:
                    return BlendMode.DST_ATOP;
                case 12:
                    return BlendMode.XOR;
                case 13:
                    return BlendMode.PLUS;
                case 14:
                    return BlendMode.MODULATE;
                case 15:
                    return BlendMode.SCREEN;
                case 16:
                    return BlendMode.OVERLAY;
                case 17:
                    return BlendMode.DARKEN;
                case ChatViewRecyclerTypes.EPHEMERAL_INDICATION /* 18 */:
                    return BlendMode.LIGHTEN;
                case ChatViewRecyclerTypes.INTERACTION_STATUS /* 19 */:
                    return BlendMode.COLOR_DODGE;
                case 20:
                    return BlendMode.COLOR_BURN;
                case ChatViewRecyclerTypes.FLAGGED_MESSAGE_EMBED /* 21 */:
                    return BlendMode.HARD_LIGHT;
                case ChatViewRecyclerTypes.FLAGGED_MESSAGE_ACTION_BAR /* 22 */:
                    return BlendMode.SOFT_LIGHT;
                case 23:
                    return BlendMode.DIFFERENCE;
                case ChatViewRecyclerTypes.SURVEY_INDICATION /* 24 */:
                    return BlendMode.EXCLUSION;
                case ChatViewRecyclerTypes.GUILD_INVITE_DISABLED /* 25 */:
                    return BlendMode.MULTIPLY;
                case ChatViewRecyclerTypes.MEDIA_MOSAIC_ATTACHMENT /* 26 */:
                    return BlendMode.HUE;
                case 27:
                    return BlendMode.SATURATION;
                case 28:
                    return BlendMode.COLOR;
                case 29:
                    return BlendMode.LUMINOSITY;
                default:
                    return null;
            }
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public static PorterDuff.Mode a(r1.a aVar) {
        if (aVar == null) {
            return null;
        }
        switch (a.f47807a[aVar.ordinal()]) {
            case 1:
                return PorterDuff.Mode.CLEAR;
            case 2:
                return PorterDuff.Mode.SRC;
            case 3:
                return PorterDuff.Mode.DST;
            case 4:
                return PorterDuff.Mode.SRC_OVER;
            case 5:
                return PorterDuff.Mode.DST_OVER;
            case 6:
                return PorterDuff.Mode.SRC_IN;
            case 7:
                return PorterDuff.Mode.DST_IN;
            case 8:
                return PorterDuff.Mode.SRC_OUT;
            case 9:
                return PorterDuff.Mode.DST_OUT;
            case 10:
                return PorterDuff.Mode.SRC_ATOP;
            case 11:
                return PorterDuff.Mode.DST_ATOP;
            case 12:
                return PorterDuff.Mode.XOR;
            case 13:
                return PorterDuff.Mode.ADD;
            case 14:
                return PorterDuff.Mode.MULTIPLY;
            case 15:
                return PorterDuff.Mode.SCREEN;
            case 16:
                return PorterDuff.Mode.OVERLAY;
            case 17:
                return PorterDuff.Mode.DARKEN;
            case ChatViewRecyclerTypes.EPHEMERAL_INDICATION /* 18 */:
                return PorterDuff.Mode.LIGHTEN;
            default:
                return null;
        }
    }
}

package pv;

import com.discord.misc.utilities.chat_view_types.ChatViewRecyclerTypes;
import com.discord.notifications.api.NotificationData;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public abstract class d {

    /* renamed from: a  reason: collision with root package name */
    public static int f45804a = 4;

    public static int a(int i10) {
        return 4 - (i10 % 4);
    }

    public static int b(char c10, CharSequence charSequence, int i10) {
        int length = charSequence.length();
        while (i10 < length) {
            if (charSequence.charAt(i10) == c10) {
                return i10;
            }
            i10++;
        }
        return -1;
    }

    public static int c(CharSequence charSequence, int i10) {
        int length = charSequence.length();
        while (i10 < length) {
            char charAt = charSequence.charAt(i10);
            if (charAt != '\n' && charAt != '\r') {
                i10++;
            } else {
                return i10;
            }
        }
        return -1;
    }

    private static int d(CharSequence charSequence, int i10) {
        int length = charSequence.length();
        while (i10 < length) {
            char charAt = charSequence.charAt(i10);
            if (charAt != ' ') {
                switch (charAt) {
                    case '\t':
                    case '\n':
                    case 11:
                    case '\f':
                    case '\r':
                        break;
                    default:
                        return i10;
                }
            }
            i10++;
        }
        return -1;
    }

    public static boolean e(CharSequence charSequence) {
        int length = charSequence.length();
        if (k(' ', charSequence, 0, length) == length) {
            return false;
        }
        return true;
    }

    public static boolean f(CharSequence charSequence) {
        if (d(charSequence, 0) != -1) {
            return false;
        }
        return true;
    }

    public static boolean g(CharSequence charSequence, int i10) {
        if (i10 < charSequence.length()) {
            char charAt = charSequence.charAt(i10);
            switch (charAt) {
                case ChatViewRecyclerTypes.AUTO_MODERATION_NOTIFICATION_EMBED /* 33 */:
                case ChatViewRecyclerTypes.CHANNEL_DEADCHAT_PROMPT_ACTIONS /* 34 */:
                case ChatViewRecyclerTypes.INFO_LINK /* 35 */:
                case ChatViewRecyclerTypes.SAFETY_POLICY_NOTICE /* 36 */:
                case ChatViewRecyclerTypes.POLL_TEXT_AND_IMAGE /* 37 */:
                case ChatViewRecyclerTypes.POLL_IMAGE_ONLY /* 38 */:
                case ChatViewRecyclerTypes.SAFETY_SYSTEM_NOTIFICATION /* 39 */:
                case '(':
                case ')':
                case '*':
                case ChatViewRecyclerTypes.FORWARD_HEADER /* 43 */:
                case ChatViewRecyclerTypes.FORWARD_BREADCRUMB /* 44 */:
                case ChatViewRecyclerTypes.REACTION_BURST_REACTION /* 45 */:
                case '.':
                case ChatViewRecyclerTypes.REACTION_ADD_REACTION /* 47 */:
                    return true;
                default:
                    switch (charAt) {
                        case ':':
                        case ';':
                        case '<':
                        case '=':
                        case '>':
                        case NotificationData.MESSAGE_TYPE_EMOJI_ADDED /* 63 */:
                        case '@':
                            return true;
                        default:
                            switch (charAt) {
                                case '[':
                                case '\\':
                                case ']':
                                case '^':
                                case '_':
                                case '`':
                                    return true;
                                default:
                                    switch (charAt) {
                                        case '{':
                                        case '|':
                                        case '}':
                                        case '~':
                                            return true;
                                        default:
                                            return false;
                                    }
                            }
                    }
            }
        }
        return false;
    }

    public static boolean h(CharSequence charSequence, int i10) {
        return Character.isLetter(Character.codePointAt(charSequence, i10));
    }

    public static boolean i(CharSequence charSequence, int i10) {
        if (i10 < charSequence.length()) {
            char charAt = charSequence.charAt(i10);
            if (charAt == '\t' || charAt == ' ') {
                return true;
            }
            return false;
        }
        return false;
    }

    public static CharSequence j(CharSequence charSequence) {
        int length = charSequence.length();
        StringBuilder sb2 = null;
        for (int i10 = 0; i10 < length; i10++) {
            char charAt = charSequence.charAt(i10);
            if (charAt != 0) {
                if (sb2 != null) {
                    sb2.append(charAt);
                }
            } else {
                if (sb2 == null) {
                    sb2 = new StringBuilder(length);
                    sb2.append(charSequence, 0, i10);
                }
                sb2.append((char) 65533);
            }
        }
        if (sb2 != null) {
            return sb2.toString();
        }
        return charSequence;
    }

    public static int k(char c10, CharSequence charSequence, int i10, int i11) {
        while (i10 < i11) {
            if (charSequence.charAt(i10) != c10) {
                return i10;
            }
            i10++;
        }
        return i11;
    }

    public static int l(char c10, CharSequence charSequence, int i10, int i11) {
        while (i10 >= i11) {
            if (charSequence.charAt(i10) != c10) {
                return i10;
            }
            i10--;
        }
        return i11 - 1;
    }

    public static int m(CharSequence charSequence, int i10, int i11) {
        while (i10 < i11) {
            char charAt = charSequence.charAt(i10);
            if (charAt != '\t' && charAt != ' ') {
                return i10;
            }
            i10++;
        }
        return i11;
    }

    public static int n(CharSequence charSequence, int i10, int i11) {
        while (i10 >= i11) {
            char charAt = charSequence.charAt(i10);
            if (charAt != '\t' && charAt != ' ') {
                return i10;
            }
            i10--;
        }
        return i11 - 1;
    }
}

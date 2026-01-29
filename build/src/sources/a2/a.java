package a2;

import android.text.SpannableStringBuilder;
import com.discord.misc.utilities.chat_view_types.ChatViewRecyclerTypes;
import java.util.Locale;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public final class a {

    /* renamed from: d  reason: collision with root package name */
    static final e f345d;

    /* renamed from: e  reason: collision with root package name */
    private static final String f346e;

    /* renamed from: f  reason: collision with root package name */
    private static final String f347f;

    /* renamed from: g  reason: collision with root package name */
    static final a f348g;

    /* renamed from: h  reason: collision with root package name */
    static final a f349h;

    /* renamed from: a  reason: collision with root package name */
    private final boolean f350a;

    /* renamed from: b  reason: collision with root package name */
    private final int f351b;

    /* renamed from: c  reason: collision with root package name */
    private final e f352c;

    /* renamed from: a2.a$a  reason: collision with other inner class name */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    public static final class C0001a {

        /* renamed from: a  reason: collision with root package name */
        private boolean f353a;

        /* renamed from: b  reason: collision with root package name */
        private int f354b;

        /* renamed from: c  reason: collision with root package name */
        private e f355c;

        public C0001a() {
            c(a.e(Locale.getDefault()));
        }

        private static a b(boolean z10) {
            if (z10) {
                return a.f349h;
            }
            return a.f348g;
        }

        private void c(boolean z10) {
            this.f353a = z10;
            this.f355c = a.f345d;
            this.f354b = 2;
        }

        public a a() {
            if (this.f354b == 2 && this.f355c == a.f345d) {
                return b(this.f353a);
            }
            return new a(this.f353a, this.f354b, this.f355c);
        }
    }

    /* JADX INFO: Access modifiers changed from: private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    public static class b {

        /* renamed from: f  reason: collision with root package name */
        private static final byte[] f356f = new byte[1792];

        /* renamed from: a  reason: collision with root package name */
        private final CharSequence f357a;

        /* renamed from: b  reason: collision with root package name */
        private final boolean f358b;

        /* renamed from: c  reason: collision with root package name */
        private final int f359c;

        /* renamed from: d  reason: collision with root package name */
        private int f360d;

        /* renamed from: e  reason: collision with root package name */
        private char f361e;

        static {
            for (int i10 = 0; i10 < 1792; i10++) {
                f356f[i10] = Character.getDirectionality(i10);
            }
        }

        b(CharSequence charSequence, boolean z10) {
            this.f357a = charSequence;
            this.f358b = z10;
            this.f359c = charSequence.length();
        }

        private static byte c(char c10) {
            if (c10 < 1792) {
                return f356f[c10];
            }
            return Character.getDirectionality(c10);
        }

        private byte f() {
            char charAt;
            int i10 = this.f360d;
            do {
                int i11 = this.f360d;
                if (i11 <= 0) {
                    break;
                }
                CharSequence charSequence = this.f357a;
                int i12 = i11 - 1;
                this.f360d = i12;
                charAt = charSequence.charAt(i12);
                this.f361e = charAt;
                if (charAt == '&') {
                    return (byte) 12;
                }
            } while (charAt != ';');
            this.f360d = i10;
            this.f361e = ';';
            return (byte) 13;
        }

        private byte g() {
            char charAt;
            do {
                int i10 = this.f360d;
                if (i10 < this.f359c) {
                    CharSequence charSequence = this.f357a;
                    this.f360d = i10 + 1;
                    charAt = charSequence.charAt(i10);
                    this.f361e = charAt;
                } else {
                    return (byte) 12;
                }
            } while (charAt != ';');
            return (byte) 12;
        }

        private byte h() {
            char charAt;
            int i10 = this.f360d;
            while (true) {
                int i11 = this.f360d;
                if (i11 <= 0) {
                    break;
                }
                CharSequence charSequence = this.f357a;
                int i12 = i11 - 1;
                this.f360d = i12;
                char charAt2 = charSequence.charAt(i12);
                this.f361e = charAt2;
                if (charAt2 == '<') {
                    return (byte) 12;
                }
                if (charAt2 == '>') {
                    break;
                } else if (charAt2 == '\"' || charAt2 == '\'') {
                    do {
                        int i13 = this.f360d;
                        if (i13 > 0) {
                            CharSequence charSequence2 = this.f357a;
                            int i14 = i13 - 1;
                            this.f360d = i14;
                            charAt = charSequence2.charAt(i14);
                            this.f361e = charAt;
                        }
                    } while (charAt != charAt2);
                }
            }
            this.f360d = i10;
            this.f361e = '>';
            return (byte) 13;
        }

        private byte i() {
            char charAt;
            int i10 = this.f360d;
            while (true) {
                int i11 = this.f360d;
                if (i11 < this.f359c) {
                    CharSequence charSequence = this.f357a;
                    this.f360d = i11 + 1;
                    char charAt2 = charSequence.charAt(i11);
                    this.f361e = charAt2;
                    if (charAt2 == '>') {
                        return (byte) 12;
                    }
                    if (charAt2 == '\"' || charAt2 == '\'') {
                        do {
                            int i12 = this.f360d;
                            if (i12 < this.f359c) {
                                CharSequence charSequence2 = this.f357a;
                                this.f360d = i12 + 1;
                                charAt = charSequence2.charAt(i12);
                                this.f361e = charAt;
                            }
                        } while (charAt != charAt2);
                    }
                } else {
                    this.f360d = i10;
                    this.f361e = '<';
                    return (byte) 13;
                }
            }
        }

        byte a() {
            char charAt = this.f357a.charAt(this.f360d - 1);
            this.f361e = charAt;
            if (Character.isLowSurrogate(charAt)) {
                int codePointBefore = Character.codePointBefore(this.f357a, this.f360d);
                this.f360d -= Character.charCount(codePointBefore);
                return Character.getDirectionality(codePointBefore);
            }
            this.f360d--;
            byte c10 = c(this.f361e);
            if (this.f358b) {
                char c11 = this.f361e;
                if (c11 == '>') {
                    return h();
                }
                if (c11 == ';') {
                    return f();
                }
                return c10;
            }
            return c10;
        }

        byte b() {
            char charAt = this.f357a.charAt(this.f360d);
            this.f361e = charAt;
            if (Character.isHighSurrogate(charAt)) {
                int codePointAt = Character.codePointAt(this.f357a, this.f360d);
                this.f360d += Character.charCount(codePointAt);
                return Character.getDirectionality(codePointAt);
            }
            this.f360d++;
            byte c10 = c(this.f361e);
            if (this.f358b) {
                char c11 = this.f361e;
                if (c11 == '<') {
                    return i();
                }
                if (c11 == '&') {
                    return g();
                }
                return c10;
            }
            return c10;
        }

        int d() {
            this.f360d = 0;
            int i10 = 0;
            int i11 = 0;
            int i12 = 0;
            while (this.f360d < this.f359c && i10 == 0) {
                byte b10 = b();
                if (b10 != 0) {
                    if (b10 != 1 && b10 != 2) {
                        if (b10 != 9) {
                            switch (b10) {
                                case 14:
                                case 15:
                                    i12++;
                                    i11 = -1;
                                    break;
                                case 16:
                                case 17:
                                    i12++;
                                    i11 = 1;
                                    break;
                                case ChatViewRecyclerTypes.EPHEMERAL_INDICATION /* 18 */:
                                    i12--;
                                    i11 = 0;
                                    break;
                            }
                        }
                    } else if (i12 == 0) {
                        return 1;
                    }
                } else if (i12 == 0) {
                    return -1;
                }
                i10 = i12;
            }
            if (i10 == 0) {
                return 0;
            }
            if (i11 != 0) {
                return i11;
            }
            while (this.f360d > 0) {
                switch (a()) {
                    case 14:
                    case 15:
                        if (i10 == i12) {
                            return -1;
                        }
                        break;
                    case 16:
                    case 17:
                        if (i10 == i12) {
                            return 1;
                        }
                        break;
                    case ChatViewRecyclerTypes.EPHEMERAL_INDICATION /* 18 */:
                        i12++;
                        continue;
                }
                i12--;
            }
            return 0;
        }

        int e() {
            this.f360d = this.f359c;
            int i10 = 0;
            while (true) {
                int i11 = i10;
                while (this.f360d > 0) {
                    byte a10 = a();
                    if (a10 != 0) {
                        if (a10 != 1 && a10 != 2) {
                            if (a10 != 9) {
                                switch (a10) {
                                    case 14:
                                    case 15:
                                        if (i11 == i10) {
                                            return -1;
                                        }
                                        i10--;
                                        break;
                                    case 16:
                                    case 17:
                                        if (i11 == i10) {
                                            return 1;
                                        }
                                        i10--;
                                        break;
                                    case ChatViewRecyclerTypes.EPHEMERAL_INDICATION /* 18 */:
                                        i10++;
                                        break;
                                    default:
                                        if (i11 != 0) {
                                            break;
                                        } else {
                                            break;
                                        }
                                }
                            } else {
                                continue;
                            }
                        } else if (i10 == 0) {
                            return 1;
                        } else {
                            if (i11 == 0) {
                                break;
                            }
                        }
                    } else if (i10 == 0) {
                        return -1;
                    } else {
                        if (i11 == 0) {
                            break;
                        }
                    }
                }
                return 0;
            }
        }
    }

    static {
        e eVar = f.f364c;
        f345d = eVar;
        f346e = Character.toString((char) 8206);
        f347f = Character.toString((char) 8207);
        f348g = new a(false, 2, eVar);
        f349h = new a(true, 2, eVar);
    }

    a(boolean z10, int i10, e eVar) {
        this.f350a = z10;
        this.f351b = i10;
        this.f352c = eVar;
    }

    private static int a(CharSequence charSequence) {
        return new b(charSequence, false).d();
    }

    private static int b(CharSequence charSequence) {
        return new b(charSequence, false).e();
    }

    public static a c() {
        return new C0001a().a();
    }

    static boolean e(Locale locale) {
        if (g.a(locale) == 1) {
            return true;
        }
        return false;
    }

    private String f(CharSequence charSequence, e eVar) {
        boolean isRtl = eVar.isRtl(charSequence, 0, charSequence.length());
        if (!this.f350a && (isRtl || b(charSequence) == 1)) {
            return f346e;
        }
        if (this.f350a) {
            if (!isRtl || b(charSequence) == -1) {
                return f347f;
            }
            return "";
        }
        return "";
    }

    private String g(CharSequence charSequence, e eVar) {
        boolean isRtl = eVar.isRtl(charSequence, 0, charSequence.length());
        if (!this.f350a && (isRtl || a(charSequence) == 1)) {
            return f346e;
        }
        if (this.f350a) {
            if (!isRtl || a(charSequence) == -1) {
                return f347f;
            }
            return "";
        }
        return "";
    }

    public boolean d() {
        if ((this.f351b & 2) != 0) {
            return true;
        }
        return false;
    }

    public CharSequence h(CharSequence charSequence) {
        return i(charSequence, this.f352c, true);
    }

    public CharSequence i(CharSequence charSequence, e eVar, boolean z10) {
        e eVar2;
        char c10;
        e eVar3;
        if (charSequence == null) {
            return null;
        }
        boolean isRtl = eVar.isRtl(charSequence, 0, charSequence.length());
        SpannableStringBuilder spannableStringBuilder = new SpannableStringBuilder();
        if (d() && z10) {
            if (isRtl) {
                eVar3 = f.f363b;
            } else {
                eVar3 = f.f362a;
            }
            spannableStringBuilder.append((CharSequence) g(charSequence, eVar3));
        }
        if (isRtl != this.f350a) {
            if (isRtl) {
                c10 = 8235;
            } else {
                c10 = 8234;
            }
            spannableStringBuilder.append(c10);
            spannableStringBuilder.append(charSequence);
            spannableStringBuilder.append((char) 8236);
        } else {
            spannableStringBuilder.append(charSequence);
        }
        if (z10) {
            if (isRtl) {
                eVar2 = f.f363b;
            } else {
                eVar2 = f.f362a;
            }
            spannableStringBuilder.append((CharSequence) f(charSequence, eVar2));
        }
        return spannableStringBuilder;
    }

    public String j(String str) {
        return k(str, this.f352c, true);
    }

    public String k(String str, e eVar, boolean z10) {
        if (str == null) {
            return null;
        }
        return i(str, eVar, z10).toString();
    }
}

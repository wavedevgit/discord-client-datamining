package gv;

import com.discord.misc.utilities.chat_view_types.ChatViewRecyclerTypes;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public class p extends lv.a {

    /* renamed from: a  reason: collision with root package name */
    private final jv.p f25507a;

    /* renamed from: b  reason: collision with root package name */
    private boolean f25508b;

    /* renamed from: c  reason: collision with root package name */
    private int f25509c;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
    public static class a extends lv.b {
        @Override // lv.e
        public lv.f a(lv.h hVar, lv.g gVar) {
            boolean z10;
            lv.d b10 = gVar.b();
            if (hVar.a() >= iv.d.f30397a) {
                return lv.f.c();
            }
            int c10 = hVar.c();
            int column = hVar.getColumn() + hVar.a();
            if (gVar.a() != null) {
                z10 = true;
            } else {
                z10 = false;
            }
            b n10 = p.n(hVar.getLine(), c10, column, z10);
            if (n10 == null) {
                return lv.f.c();
            }
            int i10 = n10.f25511b;
            q qVar = new q(i10 - hVar.getColumn());
            if ((b10 instanceof p) && p.m((jv.p) b10.c(), n10.f25510a)) {
                return lv.f.d(qVar).a(i10);
            }
            p pVar = new p(n10.f25510a);
            n10.f25510a.o(true);
            return lv.f.d(pVar, qVar).a(i10);
        }
    }

    /* JADX INFO: Access modifiers changed from: private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
    public static class b {

        /* renamed from: a  reason: collision with root package name */
        final jv.p f25510a;

        /* renamed from: b  reason: collision with root package name */
        final int f25511b;

        b(jv.p pVar, int i10) {
            this.f25510a = pVar;
            this.f25511b = i10;
        }
    }

    /* JADX INFO: Access modifiers changed from: private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
    public static class c {

        /* renamed from: a  reason: collision with root package name */
        final jv.p f25512a;

        /* renamed from: b  reason: collision with root package name */
        final int f25513b;

        c(jv.p pVar, int i10) {
            this.f25512a = pVar;
            this.f25513b = i10;
        }
    }

    public p(jv.p pVar) {
        this.f25507a = pVar;
    }

    private static boolean k(Object obj, Object obj2) {
        if (obj == null) {
            if (obj2 == null) {
                return true;
            }
            return false;
        }
        return obj.equals(obj2);
    }

    private static boolean l(CharSequence charSequence, int i10) {
        char charAt;
        if (i10 >= charSequence.length() || (charAt = charSequence.charAt(i10)) == '\t' || charAt == ' ') {
            return true;
        }
        return false;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static boolean m(jv.p pVar, jv.p pVar2) {
        if ((pVar instanceof jv.c) && (pVar2 instanceof jv.c)) {
            return k(Character.valueOf(((jv.c) pVar).p()), Character.valueOf(((jv.c) pVar2).p()));
        }
        if ((pVar instanceof jv.s) && (pVar2 instanceof jv.s)) {
            return k(Character.valueOf(((jv.s) pVar).p()), Character.valueOf(((jv.s) pVar2).p()));
        }
        return false;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static b n(CharSequence charSequence, int i10, int i11, boolean z10) {
        boolean z11;
        c o10 = o(charSequence, i10);
        if (o10 == null) {
            return null;
        }
        jv.p pVar = o10.f25512a;
        int i12 = o10.f25513b;
        int i13 = i11 + (i12 - i10);
        int length = charSequence.length();
        int i14 = i13;
        while (true) {
            if (i12 < length) {
                char charAt = charSequence.charAt(i12);
                if (charAt == '\t') {
                    i14 += iv.d.a(i14);
                } else if (charAt == ' ') {
                    i14++;
                } else {
                    z11 = true;
                    break;
                }
                i12++;
            } else {
                z11 = false;
                break;
            }
        }
        if (z10 && (((pVar instanceof jv.s) && ((jv.s) pVar).q() != 1) || !z11)) {
            return null;
        }
        if (!z11 || i14 - i13 > iv.d.f30397a) {
            i14 = i13 + 1;
        }
        return new b(pVar, i14);
    }

    private static c o(CharSequence charSequence, int i10) {
        char charAt = charSequence.charAt(i10);
        if (charAt != '*' && charAt != '+' && charAt != '-') {
            return p(charSequence, i10);
        }
        int i11 = i10 + 1;
        if (l(charSequence, i11)) {
            jv.c cVar = new jv.c();
            cVar.q(charAt);
            return new c(cVar, i11);
        }
        return null;
    }

    private static c p(CharSequence charSequence, int i10) {
        int length = charSequence.length();
        int i11 = 0;
        for (int i12 = i10; i12 < length; i12++) {
            char charAt = charSequence.charAt(i12);
            if (charAt != ')' && charAt != '.') {
                switch (charAt) {
                    case '0':
                    case ChatViewRecyclerTypes.MEDIA_ATTACHMENT_MOSAIC_IMAGE /* 49 */:
                    case '2':
                    case ChatViewRecyclerTypes.MEDIA_ATTACHMENT_MOSAIC_VISUAL_PLACEHOLDER /* 51 */:
                    case ChatViewRecyclerTypes.REFERRAL /* 52 */:
                    case ChatViewRecyclerTypes.GUILD_PROFILE_INVITE /* 53 */:
                    case ChatViewRecyclerTypes.APP_MESSAGE_EMBED /* 54 */:
                    case ChatViewRecyclerTypes.ACTIVITY_RICH_PRESENCE_INVITE_EMBED /* 55 */:
                    case ChatViewRecyclerTypes.SHARED_CUSTOM_THEME_EMBED /* 56 */:
                    case ChatViewRecyclerTypes.PREMIUM_GROUP_INVITE /* 57 */:
                        i11++;
                        if (i11 > 9) {
                            return null;
                        }
                    default:
                        return null;
                }
            } else {
                if (i11 >= 1) {
                    int i13 = i12 + 1;
                    if (l(charSequence, i13)) {
                        String charSequence2 = charSequence.subSequence(i10, i12).toString();
                        jv.s sVar = new jv.s();
                        sVar.s(Integer.parseInt(charSequence2));
                        sVar.r(charAt);
                        return new c(sVar, i13);
                    }
                }
                return null;
            }
        }
        return null;
    }

    @Override // lv.a, lv.d
    public boolean a() {
        return true;
    }

    @Override // lv.d
    public jv.a c() {
        return this.f25507a;
    }

    @Override // lv.d
    public lv.c g(lv.h hVar) {
        if (hVar.b()) {
            this.f25508b = true;
            this.f25509c = 0;
        } else if (this.f25508b) {
            this.f25509c++;
        }
        return lv.c.b(hVar.getIndex());
    }

    @Override // lv.a, lv.d
    public boolean h(jv.a aVar) {
        if (!(aVar instanceof jv.q)) {
            return false;
        }
        if (this.f25508b && this.f25509c == 1) {
            this.f25507a.o(false);
            this.f25508b = false;
        }
        return true;
    }
}

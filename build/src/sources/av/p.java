package av;

import com.discord.misc.utilities.chat_view_types.ChatViewRecyclerTypes;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public class p extends fv.a {

    /* renamed from: a  reason: collision with root package name */
    private final dv.p f7053a;

    /* renamed from: b  reason: collision with root package name */
    private boolean f7054b;

    /* renamed from: c  reason: collision with root package name */
    private int f7055c;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
    public static class a extends fv.b {
        @Override // fv.e
        public fv.f a(fv.h hVar, fv.g gVar) {
            boolean z10;
            fv.d b10 = gVar.b();
            if (hVar.a() >= cv.d.f21448a) {
                return fv.f.c();
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
                return fv.f.c();
            }
            int i10 = n10.f7057b;
            q qVar = new q(i10 - hVar.getColumn());
            if ((b10 instanceof p) && p.m((dv.p) b10.d(), n10.f7056a)) {
                return fv.f.d(qVar).a(i10);
            }
            p pVar = new p(n10.f7056a);
            n10.f7056a.o(true);
            return fv.f.d(pVar, qVar).a(i10);
        }
    }

    /* JADX INFO: Access modifiers changed from: private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
    public static class b {

        /* renamed from: a  reason: collision with root package name */
        final dv.p f7056a;

        /* renamed from: b  reason: collision with root package name */
        final int f7057b;

        b(dv.p pVar, int i10) {
            this.f7056a = pVar;
            this.f7057b = i10;
        }
    }

    /* JADX INFO: Access modifiers changed from: private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
    public static class c {

        /* renamed from: a  reason: collision with root package name */
        final dv.p f7058a;

        /* renamed from: b  reason: collision with root package name */
        final int f7059b;

        c(dv.p pVar, int i10) {
            this.f7058a = pVar;
            this.f7059b = i10;
        }
    }

    public p(dv.p pVar) {
        this.f7053a = pVar;
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
    public static boolean m(dv.p pVar, dv.p pVar2) {
        if ((pVar instanceof dv.c) && (pVar2 instanceof dv.c)) {
            return k(Character.valueOf(((dv.c) pVar).p()), Character.valueOf(((dv.c) pVar2).p()));
        }
        if ((pVar instanceof dv.s) && (pVar2 instanceof dv.s)) {
            return k(Character.valueOf(((dv.s) pVar).p()), Character.valueOf(((dv.s) pVar2).p()));
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
        dv.p pVar = o10.f7058a;
        int i12 = o10.f7059b;
        int i13 = i11 + (i12 - i10);
        int length = charSequence.length();
        int i14 = i13;
        while (true) {
            if (i12 < length) {
                char charAt = charSequence.charAt(i12);
                if (charAt == '\t') {
                    i14 += cv.d.a(i14);
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
        if (z10 && (((pVar instanceof dv.s) && ((dv.s) pVar).q() != 1) || !z11)) {
            return null;
        }
        if (!z11 || i14 - i13 > cv.d.f21448a) {
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
            dv.c cVar = new dv.c();
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
                        dv.s sVar = new dv.s();
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

    @Override // fv.d
    public fv.c a(fv.h hVar) {
        if (hVar.b()) {
            this.f7054b = true;
            this.f7055c = 0;
        } else if (this.f7054b) {
            this.f7055c++;
        }
        return fv.c.b(hVar.getIndex());
    }

    @Override // fv.a, fv.d
    public boolean b() {
        return true;
    }

    @Override // fv.d
    public dv.a d() {
        return this.f7053a;
    }

    @Override // fv.a, fv.d
    public boolean f(dv.a aVar) {
        if (!(aVar instanceof dv.q)) {
            return false;
        }
        if (this.f7054b && this.f7055c == 1) {
            this.f7053a.o(false);
            this.f7054b = false;
        }
        return true;
    }
}

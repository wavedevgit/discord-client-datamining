package dv;

import com.discord.misc.utilities.chat_view_types.ChatViewRecyclerTypes;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public class p extends iv.a {

    /* renamed from: a  reason: collision with root package name */
    private final gv.p f21183a;

    /* renamed from: b  reason: collision with root package name */
    private boolean f21184b;

    /* renamed from: c  reason: collision with root package name */
    private int f21185c;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
    public static class a extends iv.b {
        @Override // iv.e
        public iv.f a(iv.h hVar, iv.g gVar) {
            boolean z10;
            iv.d b10 = gVar.b();
            if (hVar.a() >= fv.d.f24825a) {
                return iv.f.c();
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
                return iv.f.c();
            }
            int i10 = n10.f21187b;
            q qVar = new q(i10 - hVar.getColumn());
            if ((b10 instanceof p) && p.m((gv.p) b10.d(), n10.f21186a)) {
                return iv.f.d(qVar).a(i10);
            }
            p pVar = new p(n10.f21186a);
            n10.f21186a.o(true);
            return iv.f.d(pVar, qVar).a(i10);
        }
    }

    /* JADX INFO: Access modifiers changed from: private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
    public static class b {

        /* renamed from: a  reason: collision with root package name */
        final gv.p f21186a;

        /* renamed from: b  reason: collision with root package name */
        final int f21187b;

        b(gv.p pVar, int i10) {
            this.f21186a = pVar;
            this.f21187b = i10;
        }
    }

    /* JADX INFO: Access modifiers changed from: private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
    public static class c {

        /* renamed from: a  reason: collision with root package name */
        final gv.p f21188a;

        /* renamed from: b  reason: collision with root package name */
        final int f21189b;

        c(gv.p pVar, int i10) {
            this.f21188a = pVar;
            this.f21189b = i10;
        }
    }

    public p(gv.p pVar) {
        this.f21183a = pVar;
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
    public static boolean m(gv.p pVar, gv.p pVar2) {
        if ((pVar instanceof gv.c) && (pVar2 instanceof gv.c)) {
            return k(Character.valueOf(((gv.c) pVar).p()), Character.valueOf(((gv.c) pVar2).p()));
        }
        if ((pVar instanceof gv.s) && (pVar2 instanceof gv.s)) {
            return k(Character.valueOf(((gv.s) pVar).p()), Character.valueOf(((gv.s) pVar2).p()));
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
        gv.p pVar = o10.f21188a;
        int i12 = o10.f21189b;
        int i13 = i11 + (i12 - i10);
        int length = charSequence.length();
        int i14 = i13;
        while (true) {
            if (i12 < length) {
                char charAt = charSequence.charAt(i12);
                if (charAt == '\t') {
                    i14 += fv.d.a(i14);
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
        if (z10 && (((pVar instanceof gv.s) && ((gv.s) pVar).q() != 1) || !z11)) {
            return null;
        }
        if (!z11 || i14 - i13 > fv.d.f24825a) {
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
            gv.c cVar = new gv.c();
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
                        gv.s sVar = new gv.s();
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

    @Override // iv.a, iv.d
    public boolean b() {
        return true;
    }

    @Override // iv.d
    public gv.a d() {
        return this.f21183a;
    }

    @Override // iv.d
    public iv.c g(iv.h hVar) {
        if (hVar.b()) {
            this.f21184b = true;
            this.f21185c = 0;
        } else if (this.f21184b) {
            this.f21185c++;
        }
        return iv.c.b(hVar.getIndex());
    }

    @Override // iv.a, iv.d
    public boolean h(gv.a aVar) {
        if (!(aVar instanceof gv.q)) {
            return false;
        }
        if (this.f21184b && this.f21185c == 1) {
            this.f21183a.o(false);
            this.f21184b = false;
        }
        return true;
    }
}

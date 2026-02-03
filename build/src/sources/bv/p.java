package bv;

import com.discord.misc.utilities.chat_view_types.ChatViewRecyclerTypes;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public class p extends gv.a {

    /* renamed from: a  reason: collision with root package name */
    private final ev.p f7867a;

    /* renamed from: b  reason: collision with root package name */
    private boolean f7868b;

    /* renamed from: c  reason: collision with root package name */
    private int f7869c;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
    public static class a extends gv.b {
        @Override // gv.e
        public gv.f a(gv.h hVar, gv.g gVar) {
            boolean z10;
            gv.d b10 = gVar.b();
            if (hVar.a() >= dv.d.f22507a) {
                return gv.f.c();
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
                return gv.f.c();
            }
            int i10 = n10.f7871b;
            q qVar = new q(i10 - hVar.getColumn());
            if ((b10 instanceof p) && p.m((ev.p) b10.d(), n10.f7870a)) {
                return gv.f.d(qVar).a(i10);
            }
            p pVar = new p(n10.f7870a);
            n10.f7870a.o(true);
            return gv.f.d(pVar, qVar).a(i10);
        }
    }

    /* JADX INFO: Access modifiers changed from: private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
    public static class b {

        /* renamed from: a  reason: collision with root package name */
        final ev.p f7870a;

        /* renamed from: b  reason: collision with root package name */
        final int f7871b;

        b(ev.p pVar, int i10) {
            this.f7870a = pVar;
            this.f7871b = i10;
        }
    }

    /* JADX INFO: Access modifiers changed from: private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
    public static class c {

        /* renamed from: a  reason: collision with root package name */
        final ev.p f7872a;

        /* renamed from: b  reason: collision with root package name */
        final int f7873b;

        c(ev.p pVar, int i10) {
            this.f7872a = pVar;
            this.f7873b = i10;
        }
    }

    public p(ev.p pVar) {
        this.f7867a = pVar;
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
    public static boolean m(ev.p pVar, ev.p pVar2) {
        if ((pVar instanceof ev.c) && (pVar2 instanceof ev.c)) {
            return k(Character.valueOf(((ev.c) pVar).p()), Character.valueOf(((ev.c) pVar2).p()));
        }
        if ((pVar instanceof ev.s) && (pVar2 instanceof ev.s)) {
            return k(Character.valueOf(((ev.s) pVar).p()), Character.valueOf(((ev.s) pVar2).p()));
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
        ev.p pVar = o10.f7872a;
        int i12 = o10.f7873b;
        int i13 = i11 + (i12 - i10);
        int length = charSequence.length();
        int i14 = i13;
        while (true) {
            if (i12 < length) {
                char charAt = charSequence.charAt(i12);
                if (charAt == '\t') {
                    i14 += dv.d.a(i14);
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
        if (z10 && (((pVar instanceof ev.s) && ((ev.s) pVar).q() != 1) || !z11)) {
            return null;
        }
        if (!z11 || i14 - i13 > dv.d.f22507a) {
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
            ev.c cVar = new ev.c();
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
                        ev.s sVar = new ev.s();
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

    @Override // gv.a, gv.d
    public boolean a() {
        return true;
    }

    @Override // gv.d
    public gv.c b(gv.h hVar) {
        if (hVar.b()) {
            this.f7868b = true;
            this.f7869c = 0;
        } else if (this.f7868b) {
            this.f7869c++;
        }
        return gv.c.b(hVar.getIndex());
    }

    @Override // gv.d
    public ev.a d() {
        return this.f7867a;
    }

    @Override // gv.a, gv.d
    public boolean h(ev.a aVar) {
        if (!(aVar instanceof ev.q)) {
            return false;
        }
        if (this.f7868b && this.f7869c == 1) {
            this.f7867a.o(false);
            this.f7868b = false;
        }
        return true;
    }
}

package xv;

import com.discord.misc.utilities.chat_view_types.ChatViewRecyclerTypes;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public class p extends cw.a {

    /* renamed from: a  reason: collision with root package name */
    private final aw.p f55265a;

    /* renamed from: b  reason: collision with root package name */
    private boolean f55266b;

    /* renamed from: c  reason: collision with root package name */
    private int f55267c;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
    public static class a extends cw.b {
        @Override // cw.e
        public cw.f a(cw.h hVar, cw.g gVar) {
            boolean z10;
            cw.d b10 = gVar.b();
            if (hVar.a() >= zv.d.f57222a) {
                return cw.f.c();
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
                return cw.f.c();
            }
            int i10 = n10.f55269b;
            q qVar = new q(i10 - hVar.getColumn());
            if ((b10 instanceof p) && p.m((aw.p) b10.d(), n10.f55268a)) {
                return cw.f.d(qVar).a(i10);
            }
            p pVar = new p(n10.f55268a);
            n10.f55268a.o(true);
            return cw.f.d(pVar, qVar).a(i10);
        }
    }

    /* JADX INFO: Access modifiers changed from: private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
    public static class b {

        /* renamed from: a  reason: collision with root package name */
        final aw.p f55268a;

        /* renamed from: b  reason: collision with root package name */
        final int f55269b;

        b(aw.p pVar, int i10) {
            this.f55268a = pVar;
            this.f55269b = i10;
        }
    }

    /* JADX INFO: Access modifiers changed from: private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
    public static class c {

        /* renamed from: a  reason: collision with root package name */
        final aw.p f55270a;

        /* renamed from: b  reason: collision with root package name */
        final int f55271b;

        c(aw.p pVar, int i10) {
            this.f55270a = pVar;
            this.f55271b = i10;
        }
    }

    public p(aw.p pVar) {
        this.f55265a = pVar;
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
    public static boolean m(aw.p pVar, aw.p pVar2) {
        if ((pVar instanceof aw.c) && (pVar2 instanceof aw.c)) {
            return k(Character.valueOf(((aw.c) pVar).p()), Character.valueOf(((aw.c) pVar2).p()));
        }
        if ((pVar instanceof aw.s) && (pVar2 instanceof aw.s)) {
            return k(Character.valueOf(((aw.s) pVar).p()), Character.valueOf(((aw.s) pVar2).p()));
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
        aw.p pVar = o10.f55270a;
        int i12 = o10.f55271b;
        int i13 = i11 + (i12 - i10);
        int length = charSequence.length();
        int i14 = i13;
        while (true) {
            if (i12 < length) {
                char charAt = charSequence.charAt(i12);
                if (charAt == '\t') {
                    i14 += zv.d.a(i14);
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
        if (z10 && (((pVar instanceof aw.s) && ((aw.s) pVar).q() != 1) || !z11)) {
            return null;
        }
        if (!z11 || i14 - i13 > zv.d.f57222a) {
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
            aw.c cVar = new aw.c();
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
                        aw.s sVar = new aw.s();
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

    @Override // cw.a, cw.d
    public boolean a(aw.a aVar) {
        if (!(aVar instanceof aw.q)) {
            return false;
        }
        if (this.f55266b && this.f55267c == 1) {
            this.f55265a.o(false);
            this.f55266b = false;
        }
        return true;
    }

    @Override // cw.a, cw.d
    public boolean b() {
        return true;
    }

    @Override // cw.d
    public aw.a d() {
        return this.f55265a;
    }

    @Override // cw.d
    public cw.c g(cw.h hVar) {
        if (hVar.b()) {
            this.f55266b = true;
            this.f55267c = 0;
        } else if (this.f55266b) {
            this.f55267c++;
        }
        return cw.c.b(hVar.getIndex());
    }
}

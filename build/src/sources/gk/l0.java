package gk;

import com.discord.misc.utilities.chat_view_types.ChatViewRecyclerTypes;
import com.discord.notifications.api.NotificationData;
import gk.j1;
import gk.u;
import java.lang.reflect.Field;
import java.util.Arrays;
import java.util.List;
import java.util.Map;
import sun.misc.Unsafe;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
final class l0 implements x0 {

    /* renamed from: r  reason: collision with root package name */
    private static final int[] f25315r = new int[0];

    /* renamed from: s  reason: collision with root package name */
    private static final Unsafe f25316s = h1.B();

    /* renamed from: a  reason: collision with root package name */
    private final int[] f25317a;

    /* renamed from: b  reason: collision with root package name */
    private final Object[] f25318b;

    /* renamed from: c  reason: collision with root package name */
    private final int f25319c;

    /* renamed from: d  reason: collision with root package name */
    private final int f25320d;

    /* renamed from: e  reason: collision with root package name */
    private final i0 f25321e;

    /* renamed from: f  reason: collision with root package name */
    private final boolean f25322f;

    /* renamed from: g  reason: collision with root package name */
    private final boolean f25323g;

    /* renamed from: h  reason: collision with root package name */
    private final boolean f25324h;

    /* renamed from: i  reason: collision with root package name */
    private final boolean f25325i;

    /* renamed from: j  reason: collision with root package name */
    private final int[] f25326j;

    /* renamed from: k  reason: collision with root package name */
    private final int f25327k;

    /* renamed from: l  reason: collision with root package name */
    private final int f25328l;

    /* renamed from: m  reason: collision with root package name */
    private final n0 f25329m;

    /* renamed from: n  reason: collision with root package name */
    private final y f25330n;

    /* renamed from: o  reason: collision with root package name */
    private final d1 f25331o;

    /* renamed from: p  reason: collision with root package name */
    private final m f25332p;

    /* renamed from: q  reason: collision with root package name */
    private final d0 f25333q;

    private l0(int[] iArr, Object[] objArr, int i10, int i11, i0 i0Var, boolean z10, boolean z11, int[] iArr2, int i12, int i13, n0 n0Var, y yVar, d1 d1Var, m mVar, d0 d0Var) {
        boolean z12;
        this.f25317a = iArr;
        this.f25318b = objArr;
        this.f25319c = i10;
        this.f25320d = i11;
        this.f25323g = i0Var instanceof s;
        this.f25324h = z10;
        if (mVar != null && mVar.d(i0Var)) {
            z12 = true;
        } else {
            z12 = false;
        }
        this.f25322f = z12;
        this.f25325i = z11;
        this.f25326j = iArr2;
        this.f25327k = i12;
        this.f25328l = i13;
        this.f25329m = n0Var;
        this.f25330n = yVar;
        this.f25331o = d1Var;
        this.f25332p = mVar;
        this.f25321e = i0Var;
        this.f25333q = d0Var;
    }

    private void A(Object obj, Object obj2, int i10) {
        if (!p(obj2, i10)) {
            return;
        }
        long J = J(c0(i10));
        Unsafe unsafe = f25316s;
        Object object = unsafe.getObject(obj2, J);
        if (object != null) {
            x0 n10 = n(i10);
            if (!p(obj, i10)) {
                if (!u(object)) {
                    unsafe.putObject(obj, J, object);
                } else {
                    Object d10 = n10.d();
                    n10.a(d10, object);
                    unsafe.putObject(obj, J, d10);
                }
                W(obj, i10);
                return;
            }
            Object object2 = unsafe.getObject(obj, J);
            if (!u(object2)) {
                Object d11 = n10.d();
                n10.a(d11, object2);
                unsafe.putObject(obj, J, d11);
                object2 = d11;
            }
            n10.a(object2, object);
            return;
        }
        throw new IllegalStateException("Source subfield " + I(i10) + " is present but null: " + obj2);
    }

    private void B(Object obj, Object obj2, int i10) {
        int I = I(i10);
        if (!w(obj2, I, i10)) {
            return;
        }
        long J = J(c0(i10));
        Unsafe unsafe = f25316s;
        Object object = unsafe.getObject(obj2, J);
        if (object != null) {
            x0 n10 = n(i10);
            if (!w(obj, I, i10)) {
                if (!u(object)) {
                    unsafe.putObject(obj, J, object);
                } else {
                    Object d10 = n10.d();
                    n10.a(d10, object);
                    unsafe.putObject(obj, J, d10);
                }
                X(obj, I, i10);
                return;
            }
            Object object2 = unsafe.getObject(obj, J);
            if (!u(object2)) {
                Object d11 = n10.d();
                n10.a(d11, object2);
                unsafe.putObject(obj, J, d11);
                object2 = d11;
            }
            n10.a(object2, object);
            return;
        }
        throw new IllegalStateException("Source subfield " + I(i10) + " is present but null: " + obj2);
    }

    private void C(Object obj, Object obj2, int i10) {
        int c02 = c0(i10);
        long J = J(c02);
        int I = I(i10);
        switch (b0(c02)) {
            case 0:
                if (p(obj2, i10)) {
                    h1.K(obj, J, h1.v(obj2, J));
                    W(obj, i10);
                    return;
                }
                return;
            case 1:
                if (p(obj2, i10)) {
                    h1.L(obj, J, h1.w(obj2, J));
                    W(obj, i10);
                    return;
                }
                return;
            case 2:
                if (p(obj2, i10)) {
                    h1.N(obj, J, h1.y(obj2, J));
                    W(obj, i10);
                    return;
                }
                return;
            case 3:
                if (p(obj2, i10)) {
                    h1.N(obj, J, h1.y(obj2, J));
                    W(obj, i10);
                    return;
                }
                return;
            case 4:
                if (p(obj2, i10)) {
                    h1.M(obj, J, h1.x(obj2, J));
                    W(obj, i10);
                    return;
                }
                return;
            case 5:
                if (p(obj2, i10)) {
                    h1.N(obj, J, h1.y(obj2, J));
                    W(obj, i10);
                    return;
                }
                return;
            case 6:
                if (p(obj2, i10)) {
                    h1.M(obj, J, h1.x(obj2, J));
                    W(obj, i10);
                    return;
                }
                return;
            case 7:
                if (p(obj2, i10)) {
                    h1.F(obj, J, h1.p(obj2, J));
                    W(obj, i10);
                    return;
                }
                return;
            case 8:
                if (p(obj2, i10)) {
                    h1.O(obj, J, h1.A(obj2, J));
                    W(obj, i10);
                    return;
                }
                return;
            case 9:
                A(obj, obj2, i10);
                return;
            case 10:
                if (p(obj2, i10)) {
                    h1.O(obj, J, h1.A(obj2, J));
                    W(obj, i10);
                    return;
                }
                return;
            case 11:
                if (p(obj2, i10)) {
                    h1.M(obj, J, h1.x(obj2, J));
                    W(obj, i10);
                    return;
                }
                return;
            case 12:
                if (p(obj2, i10)) {
                    h1.M(obj, J, h1.x(obj2, J));
                    W(obj, i10);
                    return;
                }
                return;
            case 13:
                if (p(obj2, i10)) {
                    h1.M(obj, J, h1.x(obj2, J));
                    W(obj, i10);
                    return;
                }
                return;
            case 14:
                if (p(obj2, i10)) {
                    h1.N(obj, J, h1.y(obj2, J));
                    W(obj, i10);
                    return;
                }
                return;
            case 15:
                if (p(obj2, i10)) {
                    h1.M(obj, J, h1.x(obj2, J));
                    W(obj, i10);
                    return;
                }
                return;
            case 16:
                if (p(obj2, i10)) {
                    h1.N(obj, J, h1.y(obj2, J));
                    W(obj, i10);
                    return;
                }
                return;
            case 17:
                A(obj, obj2, i10);
                return;
            case ChatViewRecyclerTypes.EPHEMERAL_INDICATION /* 18 */:
            case ChatViewRecyclerTypes.INTERACTION_STATUS /* 19 */:
            case 20:
            case ChatViewRecyclerTypes.FLAGGED_MESSAGE_EMBED /* 21 */:
            case ChatViewRecyclerTypes.FLAGGED_MESSAGE_ACTION_BAR /* 22 */:
            case 23:
            case ChatViewRecyclerTypes.SURVEY_INDICATION /* 24 */:
            case ChatViewRecyclerTypes.GUILD_INVITE_DISABLED /* 25 */:
            case ChatViewRecyclerTypes.MEDIA_MOSAIC_ATTACHMENT /* 26 */:
            case 27:
            case 28:
            case 29:
            case 30:
            case ChatViewRecyclerTypes.EMBEDDED_ACTIVITY_INVITE /* 31 */:
            case 32:
            case ChatViewRecyclerTypes.AUTO_MODERATION_NOTIFICATION_EMBED /* 33 */:
            case ChatViewRecyclerTypes.CHANNEL_DEADCHAT_PROMPT_ACTIONS /* 34 */:
            case ChatViewRecyclerTypes.INFO_LINK /* 35 */:
            case ChatViewRecyclerTypes.SAFETY_POLICY_NOTICE /* 36 */:
            case ChatViewRecyclerTypes.POLL_TEXT_AND_IMAGE /* 37 */:
            case ChatViewRecyclerTypes.POLL_IMAGE_ONLY /* 38 */:
            case ChatViewRecyclerTypes.SAFETY_SYSTEM_NOTIFICATION /* 39 */:
            case 40:
            case 41:
            case 42:
            case ChatViewRecyclerTypes.FORWARD_HEADER /* 43 */:
            case ChatViewRecyclerTypes.FORWARD_BREADCRUMB /* 44 */:
            case ChatViewRecyclerTypes.REACTION_BURST_REACTION /* 45 */:
            case 46:
            case ChatViewRecyclerTypes.REACTION_ADD_REACTION /* 47 */:
            case 48:
            case ChatViewRecyclerTypes.MEDIA_ATTACHMENT_MOSAIC_IMAGE /* 49 */:
                this.f25330n.d(obj, obj2, J);
                return;
            case 50:
                z0.f(this.f25333q, obj, obj2, J);
                return;
            case ChatViewRecyclerTypes.MEDIA_ATTACHMENT_MOSAIC_VISUAL_PLACEHOLDER /* 51 */:
            case ChatViewRecyclerTypes.REFERRAL /* 52 */:
            case ChatViewRecyclerTypes.GUILD_PROFILE_INVITE /* 53 */:
            case ChatViewRecyclerTypes.APP_MESSAGE_EMBED /* 54 */:
            case ChatViewRecyclerTypes.ACTIVITY_RICH_PRESENCE_INVITE_EMBED /* 55 */:
            case ChatViewRecyclerTypes.SHARED_CUSTOM_THEME_EMBED /* 56 */:
            case ChatViewRecyclerTypes.PREMIUM_GROUP_INVITE /* 57 */:
            case 58:
            case 59:
                if (w(obj2, I, i10)) {
                    h1.O(obj, J, h1.A(obj2, J));
                    X(obj, I, i10);
                    return;
                }
                return;
            case 60:
                B(obj, obj2, i10);
                return;
            case 61:
            case 62:
            case NotificationData.MESSAGE_TYPE_EMOJI_ADDED /* 63 */:
            case 64:
            case 65:
            case 66:
            case 67:
                if (w(obj2, I, i10)) {
                    h1.O(obj, J, h1.A(obj2, J));
                    X(obj, I, i10);
                    return;
                }
                return;
            case 68:
                B(obj, obj2, i10);
                return;
            default:
                return;
        }
    }

    private Object D(Object obj, int i10) {
        x0 n10 = n(i10);
        long J = J(c0(i10));
        if (!p(obj, i10)) {
            return n10.d();
        }
        Object object = f25316s.getObject(obj, J);
        if (u(object)) {
            return object;
        }
        Object d10 = n10.d();
        if (object != null) {
            n10.a(d10, object);
        }
        return d10;
    }

    private Object E(Object obj, int i10, int i11) {
        x0 n10 = n(i11);
        if (!w(obj, i10, i11)) {
            return n10.d();
        }
        Object object = f25316s.getObject(obj, J(c0(i11)));
        if (u(object)) {
            return object;
        }
        Object d10 = n10.d();
        if (object != null) {
            n10.a(d10, object);
        }
        return d10;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public static l0 F(Class cls, g0 g0Var, n0 n0Var, y yVar, d1 d1Var, m mVar, d0 d0Var) {
        if (g0Var instanceof v0) {
            return H((v0) g0Var, n0Var, yVar, d1Var, mVar, d0Var);
        }
        android.support.v4.media.session.b.a(g0Var);
        return G(null, n0Var, yVar, d1Var, mVar, d0Var);
    }

    static l0 G(a1 a1Var, n0 n0Var, y yVar, d1 d1Var, m mVar, d0 d0Var) {
        throw null;
    }

    /* JADX WARN: Removed duplicated region for block: B:122:0x0257  */
    /* JADX WARN: Removed duplicated region for block: B:124:0x025b  */
    /* JADX WARN: Removed duplicated region for block: B:127:0x0275  */
    /* JADX WARN: Removed duplicated region for block: B:128:0x0278  */
    /*
        Code decompiled incorrectly, please refer to instructions dump.
        To view partially-correct add '--show-bad-code' argument
    */
    static gk.l0 H(gk.v0 r33, gk.n0 r34, gk.y r35, gk.d1 r36, gk.m r37, gk.d0 r38) {
        /*
            Method dump skipped, instructions count: 977
            To view this dump add '--comments-level debug' option
        */
        throw new UnsupportedOperationException("Method not decompiled: gk.l0.H(gk.v0, gk.n0, gk.y, gk.d1, gk.m, gk.d0):gk.l0");
    }

    private int I(int i10) {
        return this.f25317a[i10];
    }

    private static long J(int i10) {
        return i10 & 1048575;
    }

    private static boolean K(Object obj, long j10) {
        return ((Boolean) h1.A(obj, j10)).booleanValue();
    }

    private static double L(Object obj, long j10) {
        return ((Double) h1.A(obj, j10)).doubleValue();
    }

    private static float M(Object obj, long j10) {
        return ((Float) h1.A(obj, j10)).floatValue();
    }

    private static int N(Object obj, long j10) {
        return ((Integer) h1.A(obj, j10)).intValue();
    }

    private static long O(Object obj, long j10) {
        return ((Long) h1.A(obj, j10)).longValue();
    }

    private int P(int i10) {
        if (i10 >= this.f25319c && i10 <= this.f25320d) {
            return Y(i10, 0);
        }
        return -1;
    }

    private int Q(int i10) {
        return this.f25317a[i10 + 2];
    }

    private void R(Object obj, long j10, w0 w0Var, x0 x0Var, l lVar) {
        w0Var.I(this.f25330n.e(obj, j10), x0Var, lVar);
    }

    private void S(Object obj, int i10, w0 w0Var, x0 x0Var, l lVar) {
        w0Var.J(this.f25330n.e(obj, J(i10)), x0Var, lVar);
    }

    private void T(Object obj, int i10, w0 w0Var) {
        if (o(i10)) {
            h1.O(obj, J(i10), w0Var.H());
        } else if (this.f25323g) {
            h1.O(obj, J(i10), w0Var.y());
        } else {
            h1.O(obj, J(i10), w0Var.n());
        }
    }

    private void U(Object obj, int i10, w0 w0Var) {
        if (o(i10)) {
            w0Var.m(this.f25330n.e(obj, J(i10)));
        } else {
            w0Var.A(this.f25330n.e(obj, J(i10)));
        }
    }

    private static Field V(Class cls, String str) {
        Field[] declaredFields;
        try {
            return cls.getDeclaredField(str);
        } catch (NoSuchFieldException unused) {
            for (Field field : cls.getDeclaredFields()) {
                if (str.equals(field.getName())) {
                    return field;
                }
            }
            throw new RuntimeException("Field " + str + " for " + cls.getName() + " not found. Known fields are " + Arrays.toString(declaredFields));
        }
    }

    private void W(Object obj, int i10) {
        int Q = Q(i10);
        long j10 = 1048575 & Q;
        if (j10 == 1048575) {
            return;
        }
        h1.M(obj, j10, (1 << (Q >>> 20)) | h1.x(obj, j10));
    }

    private void X(Object obj, int i10, int i11) {
        h1.M(obj, Q(i11) & 1048575, i10);
    }

    private int Y(int i10, int i11) {
        int length = (this.f25317a.length / 3) - 1;
        while (i11 <= length) {
            int i12 = (length + i11) >>> 1;
            int i13 = i12 * 3;
            int I = I(i13);
            if (i10 == I) {
                return i13;
            }
            if (i10 < I) {
                length = i12 - 1;
            } else {
                i11 = i12 + 1;
            }
        }
        return -1;
    }

    private void Z(Object obj, int i10, Object obj2) {
        f25316s.putObject(obj, J(c0(i10)), obj2);
        W(obj, i10);
    }

    private void a0(Object obj, int i10, int i11, Object obj2) {
        f25316s.putObject(obj, J(c0(i11)), obj2);
        X(obj, i10, i11);
    }

    private static int b0(int i10) {
        return (i10 & 267386880) >>> 20;
    }

    private int c0(int i10) {
        return this.f25317a[i10 + 1];
    }

    private boolean h(Object obj, Object obj2, int i10) {
        if (p(obj, i10) == p(obj2, i10)) {
            return true;
        }
        return false;
    }

    private static void i(Object obj) {
        if (u(obj)) {
            return;
        }
        throw new IllegalArgumentException("Mutating immutable message: " + obj);
    }

    private boolean j(Object obj, Object obj2, int i10) {
        int c02 = c0(i10);
        long J = J(c02);
        switch (b0(c02)) {
            case 0:
                if (!h(obj, obj2, i10) || Double.doubleToLongBits(h1.v(obj, J)) != Double.doubleToLongBits(h1.v(obj2, J))) {
                    return false;
                }
                return true;
            case 1:
                if (!h(obj, obj2, i10) || Float.floatToIntBits(h1.w(obj, J)) != Float.floatToIntBits(h1.w(obj2, J))) {
                    return false;
                }
                return true;
            case 2:
                if (!h(obj, obj2, i10) || h1.y(obj, J) != h1.y(obj2, J)) {
                    return false;
                }
                return true;
            case 3:
                if (!h(obj, obj2, i10) || h1.y(obj, J) != h1.y(obj2, J)) {
                    return false;
                }
                return true;
            case 4:
                if (!h(obj, obj2, i10) || h1.x(obj, J) != h1.x(obj2, J)) {
                    return false;
                }
                return true;
            case 5:
                if (!h(obj, obj2, i10) || h1.y(obj, J) != h1.y(obj2, J)) {
                    return false;
                }
                return true;
            case 6:
                if (!h(obj, obj2, i10) || h1.x(obj, J) != h1.x(obj2, J)) {
                    return false;
                }
                return true;
            case 7:
                if (!h(obj, obj2, i10) || h1.p(obj, J) != h1.p(obj2, J)) {
                    return false;
                }
                return true;
            case 8:
                if (!h(obj, obj2, i10) || !z0.k(h1.A(obj, J), h1.A(obj2, J))) {
                    return false;
                }
                return true;
            case 9:
                if (!h(obj, obj2, i10) || !z0.k(h1.A(obj, J), h1.A(obj2, J))) {
                    return false;
                }
                return true;
            case 10:
                if (!h(obj, obj2, i10) || !z0.k(h1.A(obj, J), h1.A(obj2, J))) {
                    return false;
                }
                return true;
            case 11:
                if (!h(obj, obj2, i10) || h1.x(obj, J) != h1.x(obj2, J)) {
                    return false;
                }
                return true;
            case 12:
                if (!h(obj, obj2, i10) || h1.x(obj, J) != h1.x(obj2, J)) {
                    return false;
                }
                return true;
            case 13:
                if (!h(obj, obj2, i10) || h1.x(obj, J) != h1.x(obj2, J)) {
                    return false;
                }
                return true;
            case 14:
                if (!h(obj, obj2, i10) || h1.y(obj, J) != h1.y(obj2, J)) {
                    return false;
                }
                return true;
            case 15:
                if (!h(obj, obj2, i10) || h1.x(obj, J) != h1.x(obj2, J)) {
                    return false;
                }
                return true;
            case 16:
                if (!h(obj, obj2, i10) || h1.y(obj, J) != h1.y(obj2, J)) {
                    return false;
                }
                return true;
            case 17:
                if (!h(obj, obj2, i10) || !z0.k(h1.A(obj, J), h1.A(obj2, J))) {
                    return false;
                }
                return true;
            case ChatViewRecyclerTypes.EPHEMERAL_INDICATION /* 18 */:
            case ChatViewRecyclerTypes.INTERACTION_STATUS /* 19 */:
            case 20:
            case ChatViewRecyclerTypes.FLAGGED_MESSAGE_EMBED /* 21 */:
            case ChatViewRecyclerTypes.FLAGGED_MESSAGE_ACTION_BAR /* 22 */:
            case 23:
            case ChatViewRecyclerTypes.SURVEY_INDICATION /* 24 */:
            case ChatViewRecyclerTypes.GUILD_INVITE_DISABLED /* 25 */:
            case ChatViewRecyclerTypes.MEDIA_MOSAIC_ATTACHMENT /* 26 */:
            case 27:
            case 28:
            case 29:
            case 30:
            case ChatViewRecyclerTypes.EMBEDDED_ACTIVITY_INVITE /* 31 */:
            case 32:
            case ChatViewRecyclerTypes.AUTO_MODERATION_NOTIFICATION_EMBED /* 33 */:
            case ChatViewRecyclerTypes.CHANNEL_DEADCHAT_PROMPT_ACTIONS /* 34 */:
            case ChatViewRecyclerTypes.INFO_LINK /* 35 */:
            case ChatViewRecyclerTypes.SAFETY_POLICY_NOTICE /* 36 */:
            case ChatViewRecyclerTypes.POLL_TEXT_AND_IMAGE /* 37 */:
            case ChatViewRecyclerTypes.POLL_IMAGE_ONLY /* 38 */:
            case ChatViewRecyclerTypes.SAFETY_SYSTEM_NOTIFICATION /* 39 */:
            case 40:
            case 41:
            case 42:
            case ChatViewRecyclerTypes.FORWARD_HEADER /* 43 */:
            case ChatViewRecyclerTypes.FORWARD_BREADCRUMB /* 44 */:
            case ChatViewRecyclerTypes.REACTION_BURST_REACTION /* 45 */:
            case 46:
            case ChatViewRecyclerTypes.REACTION_ADD_REACTION /* 47 */:
            case 48:
            case ChatViewRecyclerTypes.MEDIA_ATTACHMENT_MOSAIC_IMAGE /* 49 */:
                return z0.k(h1.A(obj, J), h1.A(obj2, J));
            case 50:
                return z0.k(h1.A(obj, J), h1.A(obj2, J));
            case ChatViewRecyclerTypes.MEDIA_ATTACHMENT_MOSAIC_VISUAL_PLACEHOLDER /* 51 */:
            case ChatViewRecyclerTypes.REFERRAL /* 52 */:
            case ChatViewRecyclerTypes.GUILD_PROFILE_INVITE /* 53 */:
            case ChatViewRecyclerTypes.APP_MESSAGE_EMBED /* 54 */:
            case ChatViewRecyclerTypes.ACTIVITY_RICH_PRESENCE_INVITE_EMBED /* 55 */:
            case ChatViewRecyclerTypes.SHARED_CUSTOM_THEME_EMBED /* 56 */:
            case ChatViewRecyclerTypes.PREMIUM_GROUP_INVITE /* 57 */:
            case 58:
            case 59:
            case 60:
            case 61:
            case 62:
            case NotificationData.MESSAGE_TYPE_EMOJI_ADDED /* 63 */:
            case 64:
            case 65:
            case 66:
            case 67:
            case 68:
                if (!v(obj, obj2, i10) || !z0.k(h1.A(obj, J), h1.A(obj2, J))) {
                    return false;
                }
                return true;
            default:
                return true;
        }
    }

    private Object k(Object obj, int i10, Object obj2, d1 d1Var, Object obj3) {
        I(i10);
        if (h1.A(obj, J(c0(i10))) == null) {
            return obj2;
        }
        l(i10);
        return obj2;
    }

    private u.a l(int i10) {
        android.support.v4.media.session.b.a(this.f25318b[((i10 / 3) * 2) + 1]);
        return null;
    }

    private Object m(int i10) {
        return this.f25318b[(i10 / 3) * 2];
    }

    private x0 n(int i10) {
        int i11 = (i10 / 3) * 2;
        x0 x0Var = (x0) this.f25318b[i11];
        if (x0Var != null) {
            return x0Var;
        }
        x0 c10 = t0.a().c((Class) this.f25318b[i11 + 1]);
        this.f25318b[i11] = c10;
        return c10;
    }

    private static boolean o(int i10) {
        if ((i10 & 536870912) != 0) {
            return true;
        }
        return false;
    }

    private boolean p(Object obj, int i10) {
        boolean equals;
        int Q = Q(i10);
        long j10 = 1048575 & Q;
        if (j10 == 1048575) {
            int c02 = c0(i10);
            long J = J(c02);
            switch (b0(c02)) {
                case 0:
                    if (Double.doubleToRawLongBits(h1.v(obj, J)) == 0) {
                        return false;
                    }
                    return true;
                case 1:
                    if (Float.floatToRawIntBits(h1.w(obj, J)) == 0) {
                        return false;
                    }
                    return true;
                case 2:
                    if (h1.y(obj, J) == 0) {
                        return false;
                    }
                    return true;
                case 3:
                    if (h1.y(obj, J) == 0) {
                        return false;
                    }
                    return true;
                case 4:
                    if (h1.x(obj, J) == 0) {
                        return false;
                    }
                    return true;
                case 5:
                    if (h1.y(obj, J) == 0) {
                        return false;
                    }
                    return true;
                case 6:
                    if (h1.x(obj, J) == 0) {
                        return false;
                    }
                    return true;
                case 7:
                    return h1.p(obj, J);
                case 8:
                    Object A = h1.A(obj, J);
                    if (A instanceof String) {
                        equals = ((String) A).isEmpty();
                        break;
                    } else if (A instanceof f) {
                        equals = f.f25206e.equals(A);
                        break;
                    } else {
                        throw new IllegalArgumentException();
                    }
                case 9:
                    if (h1.A(obj, J) == null) {
                        return false;
                    }
                    return true;
                case 10:
                    equals = f.f25206e.equals(h1.A(obj, J));
                    break;
                case 11:
                    if (h1.x(obj, J) == 0) {
                        return false;
                    }
                    return true;
                case 12:
                    if (h1.x(obj, J) == 0) {
                        return false;
                    }
                    return true;
                case 13:
                    if (h1.x(obj, J) == 0) {
                        return false;
                    }
                    return true;
                case 14:
                    if (h1.y(obj, J) == 0) {
                        return false;
                    }
                    return true;
                case 15:
                    if (h1.x(obj, J) == 0) {
                        return false;
                    }
                    return true;
                case 16:
                    if (h1.y(obj, J) == 0) {
                        return false;
                    }
                    return true;
                case 17:
                    if (h1.A(obj, J) == null) {
                        return false;
                    }
                    return true;
                default:
                    throw new IllegalArgumentException();
            }
            return !equals;
        }
        if ((h1.x(obj, j10) & (1 << (Q >>> 20))) == 0) {
            return false;
        }
        return true;
    }

    private boolean q(Object obj, int i10, int i11, int i12, int i13) {
        if (i11 == 1048575) {
            return p(obj, i10);
        }
        if ((i12 & i13) != 0) {
            return true;
        }
        return false;
    }

    private static boolean r(Object obj, int i10, x0 x0Var) {
        return x0Var.c(h1.A(obj, J(i10)));
    }

    private boolean s(Object obj, int i10, int i11) {
        List list = (List) h1.A(obj, J(i10));
        if (list.isEmpty()) {
            return true;
        }
        x0 n10 = n(i11);
        for (int i12 = 0; i12 < list.size(); i12++) {
            if (!n10.c(list.get(i12))) {
                return false;
            }
        }
        return true;
    }

    private boolean t(Object obj, int i10, int i11) {
        Map e10 = this.f25333q.e(h1.A(obj, J(i10)));
        if (e10.isEmpty()) {
            return true;
        }
        if (this.f25333q.b(m(i11)).f25190c.a() != j1.c.MESSAGE) {
            return true;
        }
        x0 x0Var = null;
        for (Object obj2 : e10.values()) {
            if (x0Var == null) {
                x0Var = t0.a().c(obj2.getClass());
            }
            if (!x0Var.c(obj2)) {
                return false;
            }
        }
        return true;
    }

    private static boolean u(Object obj) {
        if (obj == null) {
            return false;
        }
        if (obj instanceof s) {
            return ((s) obj).t();
        }
        return true;
    }

    private boolean v(Object obj, Object obj2, int i10) {
        long Q = Q(i10) & 1048575;
        if (h1.x(obj, Q) == h1.x(obj2, Q)) {
            return true;
        }
        return false;
    }

    private boolean w(Object obj, int i10, int i11) {
        if (h1.x(obj, Q(i11) & 1048575) == i10) {
            return true;
        }
        return false;
    }

    private static boolean x(int i10) {
        if ((i10 & 268435456) != 0) {
            return true;
        }
        return false;
    }

    /* JADX WARN: Code restructure failed: missing block: B:354:?, code lost:
        return;
     */
    /* JADX WARN: Code restructure failed: missing block: B:355:?, code lost:
        return;
     */
    /* JADX WARN: Code restructure failed: missing block: B:49:0x00a4, code lost:
        r0 = r9.f25327k;
        r4 = r5;
     */
    /* JADX WARN: Code restructure failed: missing block: B:51:0x00a9, code lost:
        if (r0 >= r9.f25328l) goto L293;
     */
    /* JADX WARN: Code restructure failed: missing block: B:52:0x00ab, code lost:
        r1 = r9;
        r4 = r1.k(r2, r9.f25326j[r0], r4, r17, r19);
        r6 = r17;
        r0 = r0 + 1;
        r9 = r1;
     */
    /* JADX WARN: Code restructure failed: missing block: B:54:0x00c0, code lost:
        if (r4 == null) goto L298;
     */
    /* JADX WARN: Code restructure failed: missing block: B:55:0x00c2, code lost:
        r6.m(r2, r4);
     */
    /* JADX WARN: Removed duplicated region for block: B:242:0x06f9 A[Catch: all -> 0x071d, TRY_LEAVE, TryCatch #37 {all -> 0x071d, blocks: (B:240:0x06f3, B:242:0x06f9), top: B:312:0x06f3 }] */
    /* JADX WARN: Removed duplicated region for block: B:253:0x0720  */
    /* JADX WARN: Removed duplicated region for block: B:273:0x075d A[LOOP:4: B:271:0x0759->B:273:0x075d, LOOP_END] */
    /* JADX WARN: Removed duplicated region for block: B:275:0x0771  */
    /*
        Code decompiled incorrectly, please refer to instructions dump.
        To view partially-correct add '--show-bad-code' argument
    */
    private void y(gk.d1 r17, gk.m r18, java.lang.Object r19, gk.w0 r20, gk.l r21) {
        /*
            Method dump skipped, instructions count: 2052
            To view this dump add '--comments-level debug' option
        */
        throw new UnsupportedOperationException("Method not decompiled: gk.l0.y(gk.d1, gk.m, java.lang.Object, gk.w0, gk.l):void");
    }

    private final void z(Object obj, int i10, Object obj2, l lVar, w0 w0Var) {
        long J = J(c0(i10));
        Object A = h1.A(obj, J);
        if (A == null) {
            A = this.f25333q.d(obj2);
            h1.O(obj, J, A);
        } else if (this.f25333q.g(A)) {
            Object d10 = this.f25333q.d(obj2);
            this.f25333q.a(d10, A);
            h1.O(obj, J, d10);
            A = d10;
        }
        w0Var.K(this.f25333q.c(A), this.f25333q.b(obj2), lVar);
    }

    @Override // gk.x0
    public void a(Object obj, Object obj2) {
        i(obj);
        obj2.getClass();
        for (int i10 = 0; i10 < this.f25317a.length; i10 += 3) {
            C(obj, obj2, i10);
        }
        z0.g(this.f25331o, obj, obj2);
        if (this.f25322f) {
            z0.e(this.f25332p, obj, obj2);
        }
    }

    @Override // gk.x0
    public void b(Object obj) {
        if (u(obj)) {
            if (obj instanceof s) {
                s sVar = (s) obj;
                sVar.e();
                sVar.d();
                sVar.v();
            }
            int length = this.f25317a.length;
            for (int i10 = 0; i10 < length; i10 += 3) {
                int c02 = c0(i10);
                long J = J(c02);
                int b02 = b0(c02);
                if (b02 != 9) {
                    if (b02 != 60 && b02 != 68) {
                        switch (b02) {
                            case ChatViewRecyclerTypes.EPHEMERAL_INDICATION /* 18 */:
                            case ChatViewRecyclerTypes.INTERACTION_STATUS /* 19 */:
                            case 20:
                            case ChatViewRecyclerTypes.FLAGGED_MESSAGE_EMBED /* 21 */:
                            case ChatViewRecyclerTypes.FLAGGED_MESSAGE_ACTION_BAR /* 22 */:
                            case 23:
                            case ChatViewRecyclerTypes.SURVEY_INDICATION /* 24 */:
                            case ChatViewRecyclerTypes.GUILD_INVITE_DISABLED /* 25 */:
                            case ChatViewRecyclerTypes.MEDIA_MOSAIC_ATTACHMENT /* 26 */:
                            case 27:
                            case 28:
                            case 29:
                            case 30:
                            case ChatViewRecyclerTypes.EMBEDDED_ACTIVITY_INVITE /* 31 */:
                            case 32:
                            case ChatViewRecyclerTypes.AUTO_MODERATION_NOTIFICATION_EMBED /* 33 */:
                            case ChatViewRecyclerTypes.CHANNEL_DEADCHAT_PROMPT_ACTIONS /* 34 */:
                            case ChatViewRecyclerTypes.INFO_LINK /* 35 */:
                            case ChatViewRecyclerTypes.SAFETY_POLICY_NOTICE /* 36 */:
                            case ChatViewRecyclerTypes.POLL_TEXT_AND_IMAGE /* 37 */:
                            case ChatViewRecyclerTypes.POLL_IMAGE_ONLY /* 38 */:
                            case ChatViewRecyclerTypes.SAFETY_SYSTEM_NOTIFICATION /* 39 */:
                            case 40:
                            case 41:
                            case 42:
                            case ChatViewRecyclerTypes.FORWARD_HEADER /* 43 */:
                            case ChatViewRecyclerTypes.FORWARD_BREADCRUMB /* 44 */:
                            case ChatViewRecyclerTypes.REACTION_BURST_REACTION /* 45 */:
                            case 46:
                            case ChatViewRecyclerTypes.REACTION_ADD_REACTION /* 47 */:
                            case 48:
                            case ChatViewRecyclerTypes.MEDIA_ATTACHMENT_MOSAIC_IMAGE /* 49 */:
                                this.f25330n.c(obj, J);
                                break;
                            case 50:
                                Unsafe unsafe = f25316s;
                                Object object = unsafe.getObject(obj, J);
                                if (object != null) {
                                    unsafe.putObject(obj, J, this.f25333q.f(object));
                                    break;
                                } else {
                                    break;
                                }
                        }
                    } else if (w(obj, I(i10), i10)) {
                        n(i10).b(f25316s.getObject(obj, J));
                    }
                }
                if (p(obj, i10)) {
                    n(i10).b(f25316s.getObject(obj, J));
                }
            }
            this.f25331o.h(obj);
            if (this.f25322f) {
                this.f25332p.e(obj);
            }
        }
    }

    @Override // gk.x0
    public final boolean c(Object obj) {
        int i10;
        int i11;
        int i12 = 1048575;
        int i13 = 0;
        int i14 = 0;
        while (i13 < this.f25327k) {
            int i15 = this.f25326j[i13];
            int I = I(i15);
            int c02 = c0(i15);
            int i16 = this.f25317a[i15 + 2];
            int i17 = i16 & 1048575;
            int i18 = 1 << (i16 >>> 20);
            if (i17 != i12) {
                if (i17 != 1048575) {
                    i14 = f25316s.getInt(obj, i17);
                }
                i11 = i14;
                i10 = i17;
            } else {
                i10 = i12;
                i11 = i14;
            }
            Object obj2 = obj;
            if (x(c02) && !q(obj2, i15, i10, i11, i18)) {
                return false;
            }
            int b02 = b0(c02);
            if (b02 != 9 && b02 != 17) {
                if (b02 != 27) {
                    if (b02 != 60 && b02 != 68) {
                        if (b02 != 49) {
                            if (b02 == 50 && !t(obj2, c02, i15)) {
                                return false;
                            }
                        }
                    } else if (w(obj2, I, i15) && !r(obj2, c02, n(i15))) {
                        return false;
                    }
                }
                if (!s(obj2, c02, i15)) {
                    return false;
                }
            } else if (q(obj2, i15, i10, i11, i18) && !r(obj2, c02, n(i15))) {
                return false;
            }
            i13++;
            obj = obj2;
            i12 = i10;
            i14 = i11;
        }
        Object obj3 = obj;
        if (this.f25322f && !this.f25332p.b(obj3).b()) {
            return false;
        }
        return true;
    }

    @Override // gk.x0
    public Object d() {
        return this.f25329m.a(this.f25321e);
    }

    @Override // gk.x0
    public int e(Object obj) {
        int i10;
        int f10;
        int length = this.f25317a.length;
        int i11 = 0;
        for (int i12 = 0; i12 < length; i12 += 3) {
            int c02 = c0(i12);
            int I = I(i12);
            long J = J(c02);
            int i13 = 37;
            switch (b0(c02)) {
                case 0:
                    i10 = i11 * 53;
                    f10 = u.f(Double.doubleToLongBits(h1.v(obj, J)));
                    i11 = i10 + f10;
                    break;
                case 1:
                    i10 = i11 * 53;
                    f10 = Float.floatToIntBits(h1.w(obj, J));
                    i11 = i10 + f10;
                    break;
                case 2:
                    i10 = i11 * 53;
                    f10 = u.f(h1.y(obj, J));
                    i11 = i10 + f10;
                    break;
                case 3:
                    i10 = i11 * 53;
                    f10 = u.f(h1.y(obj, J));
                    i11 = i10 + f10;
                    break;
                case 4:
                    i10 = i11 * 53;
                    f10 = h1.x(obj, J);
                    i11 = i10 + f10;
                    break;
                case 5:
                    i10 = i11 * 53;
                    f10 = u.f(h1.y(obj, J));
                    i11 = i10 + f10;
                    break;
                case 6:
                    i10 = i11 * 53;
                    f10 = h1.x(obj, J);
                    i11 = i10 + f10;
                    break;
                case 7:
                    i10 = i11 * 53;
                    f10 = u.c(h1.p(obj, J));
                    i11 = i10 + f10;
                    break;
                case 8:
                    i10 = i11 * 53;
                    f10 = ((String) h1.A(obj, J)).hashCode();
                    i11 = i10 + f10;
                    break;
                case 9:
                    Object A = h1.A(obj, J);
                    if (A != null) {
                        i13 = A.hashCode();
                    }
                    i11 = (i11 * 53) + i13;
                    break;
                case 10:
                    i10 = i11 * 53;
                    f10 = h1.A(obj, J).hashCode();
                    i11 = i10 + f10;
                    break;
                case 11:
                    i10 = i11 * 53;
                    f10 = h1.x(obj, J);
                    i11 = i10 + f10;
                    break;
                case 12:
                    i10 = i11 * 53;
                    f10 = h1.x(obj, J);
                    i11 = i10 + f10;
                    break;
                case 13:
                    i10 = i11 * 53;
                    f10 = h1.x(obj, J);
                    i11 = i10 + f10;
                    break;
                case 14:
                    i10 = i11 * 53;
                    f10 = u.f(h1.y(obj, J));
                    i11 = i10 + f10;
                    break;
                case 15:
                    i10 = i11 * 53;
                    f10 = h1.x(obj, J);
                    i11 = i10 + f10;
                    break;
                case 16:
                    i10 = i11 * 53;
                    f10 = u.f(h1.y(obj, J));
                    i11 = i10 + f10;
                    break;
                case 17:
                    Object A2 = h1.A(obj, J);
                    if (A2 != null) {
                        i13 = A2.hashCode();
                    }
                    i11 = (i11 * 53) + i13;
                    break;
                case ChatViewRecyclerTypes.EPHEMERAL_INDICATION /* 18 */:
                case ChatViewRecyclerTypes.INTERACTION_STATUS /* 19 */:
                case 20:
                case ChatViewRecyclerTypes.FLAGGED_MESSAGE_EMBED /* 21 */:
                case ChatViewRecyclerTypes.FLAGGED_MESSAGE_ACTION_BAR /* 22 */:
                case 23:
                case ChatViewRecyclerTypes.SURVEY_INDICATION /* 24 */:
                case ChatViewRecyclerTypes.GUILD_INVITE_DISABLED /* 25 */:
                case ChatViewRecyclerTypes.MEDIA_MOSAIC_ATTACHMENT /* 26 */:
                case 27:
                case 28:
                case 29:
                case 30:
                case ChatViewRecyclerTypes.EMBEDDED_ACTIVITY_INVITE /* 31 */:
                case 32:
                case ChatViewRecyclerTypes.AUTO_MODERATION_NOTIFICATION_EMBED /* 33 */:
                case ChatViewRecyclerTypes.CHANNEL_DEADCHAT_PROMPT_ACTIONS /* 34 */:
                case ChatViewRecyclerTypes.INFO_LINK /* 35 */:
                case ChatViewRecyclerTypes.SAFETY_POLICY_NOTICE /* 36 */:
                case ChatViewRecyclerTypes.POLL_TEXT_AND_IMAGE /* 37 */:
                case ChatViewRecyclerTypes.POLL_IMAGE_ONLY /* 38 */:
                case ChatViewRecyclerTypes.SAFETY_SYSTEM_NOTIFICATION /* 39 */:
                case 40:
                case 41:
                case 42:
                case ChatViewRecyclerTypes.FORWARD_HEADER /* 43 */:
                case ChatViewRecyclerTypes.FORWARD_BREADCRUMB /* 44 */:
                case ChatViewRecyclerTypes.REACTION_BURST_REACTION /* 45 */:
                case 46:
                case ChatViewRecyclerTypes.REACTION_ADD_REACTION /* 47 */:
                case 48:
                case ChatViewRecyclerTypes.MEDIA_ATTACHMENT_MOSAIC_IMAGE /* 49 */:
                    i10 = i11 * 53;
                    f10 = h1.A(obj, J).hashCode();
                    i11 = i10 + f10;
                    break;
                case 50:
                    i10 = i11 * 53;
                    f10 = h1.A(obj, J).hashCode();
                    i11 = i10 + f10;
                    break;
                case ChatViewRecyclerTypes.MEDIA_ATTACHMENT_MOSAIC_VISUAL_PLACEHOLDER /* 51 */:
                    if (w(obj, I, i12)) {
                        i10 = i11 * 53;
                        f10 = u.f(Double.doubleToLongBits(L(obj, J)));
                        i11 = i10 + f10;
                        break;
                    } else {
                        break;
                    }
                case ChatViewRecyclerTypes.REFERRAL /* 52 */:
                    if (w(obj, I, i12)) {
                        i10 = i11 * 53;
                        f10 = Float.floatToIntBits(M(obj, J));
                        i11 = i10 + f10;
                        break;
                    } else {
                        break;
                    }
                case ChatViewRecyclerTypes.GUILD_PROFILE_INVITE /* 53 */:
                    if (w(obj, I, i12)) {
                        i10 = i11 * 53;
                        f10 = u.f(O(obj, J));
                        i11 = i10 + f10;
                        break;
                    } else {
                        break;
                    }
                case ChatViewRecyclerTypes.APP_MESSAGE_EMBED /* 54 */:
                    if (w(obj, I, i12)) {
                        i10 = i11 * 53;
                        f10 = u.f(O(obj, J));
                        i11 = i10 + f10;
                        break;
                    } else {
                        break;
                    }
                case ChatViewRecyclerTypes.ACTIVITY_RICH_PRESENCE_INVITE_EMBED /* 55 */:
                    if (w(obj, I, i12)) {
                        i10 = i11 * 53;
                        f10 = N(obj, J);
                        i11 = i10 + f10;
                        break;
                    } else {
                        break;
                    }
                case ChatViewRecyclerTypes.SHARED_CUSTOM_THEME_EMBED /* 56 */:
                    if (w(obj, I, i12)) {
                        i10 = i11 * 53;
                        f10 = u.f(O(obj, J));
                        i11 = i10 + f10;
                        break;
                    } else {
                        break;
                    }
                case ChatViewRecyclerTypes.PREMIUM_GROUP_INVITE /* 57 */:
                    if (w(obj, I, i12)) {
                        i10 = i11 * 53;
                        f10 = N(obj, J);
                        i11 = i10 + f10;
                        break;
                    } else {
                        break;
                    }
                case 58:
                    if (w(obj, I, i12)) {
                        i10 = i11 * 53;
                        f10 = u.c(K(obj, J));
                        i11 = i10 + f10;
                        break;
                    } else {
                        break;
                    }
                case 59:
                    if (w(obj, I, i12)) {
                        i10 = i11 * 53;
                        f10 = ((String) h1.A(obj, J)).hashCode();
                        i11 = i10 + f10;
                        break;
                    } else {
                        break;
                    }
                case 60:
                    if (w(obj, I, i12)) {
                        i10 = i11 * 53;
                        f10 = h1.A(obj, J).hashCode();
                        i11 = i10 + f10;
                        break;
                    } else {
                        break;
                    }
                case 61:
                    if (w(obj, I, i12)) {
                        i10 = i11 * 53;
                        f10 = h1.A(obj, J).hashCode();
                        i11 = i10 + f10;
                        break;
                    } else {
                        break;
                    }
                case 62:
                    if (w(obj, I, i12)) {
                        i10 = i11 * 53;
                        f10 = N(obj, J);
                        i11 = i10 + f10;
                        break;
                    } else {
                        break;
                    }
                case NotificationData.MESSAGE_TYPE_EMOJI_ADDED /* 63 */:
                    if (w(obj, I, i12)) {
                        i10 = i11 * 53;
                        f10 = N(obj, J);
                        i11 = i10 + f10;
                        break;
                    } else {
                        break;
                    }
                case 64:
                    if (w(obj, I, i12)) {
                        i10 = i11 * 53;
                        f10 = N(obj, J);
                        i11 = i10 + f10;
                        break;
                    } else {
                        break;
                    }
                case 65:
                    if (w(obj, I, i12)) {
                        i10 = i11 * 53;
                        f10 = u.f(O(obj, J));
                        i11 = i10 + f10;
                        break;
                    } else {
                        break;
                    }
                case 66:
                    if (w(obj, I, i12)) {
                        i10 = i11 * 53;
                        f10 = N(obj, J);
                        i11 = i10 + f10;
                        break;
                    } else {
                        break;
                    }
                case 67:
                    if (w(obj, I, i12)) {
                        i10 = i11 * 53;
                        f10 = u.f(O(obj, J));
                        i11 = i10 + f10;
                        break;
                    } else {
                        break;
                    }
                case 68:
                    if (w(obj, I, i12)) {
                        i10 = i11 * 53;
                        f10 = h1.A(obj, J).hashCode();
                        i11 = i10 + f10;
                        break;
                    } else {
                        break;
                    }
            }
        }
        int hashCode = (i11 * 53) + this.f25331o.g(obj).hashCode();
        if (this.f25322f) {
            return (hashCode * 53) + this.f25332p.b(obj).hashCode();
        }
        return hashCode;
    }

    @Override // gk.x0
    public boolean f(Object obj, Object obj2) {
        int length = this.f25317a.length;
        for (int i10 = 0; i10 < length; i10 += 3) {
            if (!j(obj, obj2, i10)) {
                return false;
            }
        }
        if (!this.f25331o.g(obj).equals(this.f25331o.g(obj2))) {
            return false;
        }
        if (this.f25322f) {
            return this.f25332p.b(obj).equals(this.f25332p.b(obj2));
        }
        return true;
    }

    @Override // gk.x0
    public void g(Object obj, w0 w0Var, l lVar) {
        lVar.getClass();
        i(obj);
        y(this.f25331o, this.f25332p, obj, w0Var, lVar);
    }
}

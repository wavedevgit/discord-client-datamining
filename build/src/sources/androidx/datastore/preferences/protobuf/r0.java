package androidx.datastore.preferences.protobuf;

import androidx.datastore.preferences.protobuf.q1;
import androidx.datastore.preferences.protobuf.r1;
import androidx.datastore.preferences.protobuf.y;
import com.discord.misc.utilities.chat_view_types.ChatViewRecyclerTypes;
import com.discord.notifications.api.NotificationData;
import java.lang.reflect.Field;
import java.util.Arrays;
import java.util.List;
import java.util.Map;
import sun.misc.Unsafe;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
final class r0 implements d1 {

    /* renamed from: r  reason: collision with root package name */
    private static final int[] f4208r = new int[0];

    /* renamed from: s  reason: collision with root package name */
    private static final Unsafe f4209s = o1.B();

    /* renamed from: a  reason: collision with root package name */
    private final int[] f4210a;

    /* renamed from: b  reason: collision with root package name */
    private final Object[] f4211b;

    /* renamed from: c  reason: collision with root package name */
    private final int f4212c;

    /* renamed from: d  reason: collision with root package name */
    private final int f4213d;

    /* renamed from: e  reason: collision with root package name */
    private final o0 f4214e;

    /* renamed from: f  reason: collision with root package name */
    private final boolean f4215f;

    /* renamed from: g  reason: collision with root package name */
    private final boolean f4216g;

    /* renamed from: h  reason: collision with root package name */
    private final boolean f4217h;

    /* renamed from: i  reason: collision with root package name */
    private final boolean f4218i;

    /* renamed from: j  reason: collision with root package name */
    private final int[] f4219j;

    /* renamed from: k  reason: collision with root package name */
    private final int f4220k;

    /* renamed from: l  reason: collision with root package name */
    private final int f4221l;

    /* renamed from: m  reason: collision with root package name */
    private final t0 f4222m;

    /* renamed from: n  reason: collision with root package name */
    private final e0 f4223n;

    /* renamed from: o  reason: collision with root package name */
    private final k1 f4224o;

    /* renamed from: p  reason: collision with root package name */
    private final p f4225p;

    /* renamed from: q  reason: collision with root package name */
    private final j0 f4226q;

    private r0(int[] iArr, Object[] objArr, int i10, int i11, o0 o0Var, boolean z10, boolean z11, int[] iArr2, int i12, int i13, t0 t0Var, e0 e0Var, k1 k1Var, p pVar, j0 j0Var) {
        boolean z12;
        this.f4210a = iArr;
        this.f4211b = objArr;
        this.f4212c = i10;
        this.f4213d = i11;
        this.f4216g = o0Var instanceof w;
        this.f4217h = z10;
        if (pVar != null && pVar.e(o0Var)) {
            z12 = true;
        } else {
            z12 = false;
        }
        this.f4215f = z12;
        this.f4218i = z11;
        this.f4219j = iArr2;
        this.f4220k = i12;
        this.f4221l = i13;
        this.f4222m = t0Var;
        this.f4223n = e0Var;
        this.f4224o = k1Var;
        this.f4225p = pVar;
        this.f4214e = o0Var;
        this.f4226q = j0Var;
    }

    private boolean A(Object obj, int i10, int i11) {
        List list = (List) o1.A(obj, Q(i10));
        if (list.isEmpty()) {
            return true;
        }
        d1 r10 = r(i11);
        for (int i12 = 0; i12 < list.size(); i12++) {
            if (!r10.c(list.get(i12))) {
                return false;
            }
        }
        return true;
    }

    private boolean B(Object obj, int i10, int i11) {
        Map e10 = this.f4226q.e(o1.A(obj, Q(i10)));
        if (e10.isEmpty()) {
            return true;
        }
        if (this.f4226q.b(q(i11)).f4106c.a() != q1.c.MESSAGE) {
            return true;
        }
        d1 d1Var = null;
        for (Object obj2 : e10.values()) {
            if (d1Var == null) {
                d1Var = z0.a().c(obj2.getClass());
            }
            if (!d1Var.c(obj2)) {
                return false;
            }
        }
        return true;
    }

    private boolean C(Object obj, Object obj2, int i10) {
        long X = X(i10) & 1048575;
        if (o1.x(obj, X) == o1.x(obj2, X)) {
            return true;
        }
        return false;
    }

    private boolean D(Object obj, int i10, int i11) {
        if (o1.x(obj, X(i11) & 1048575) == i10) {
            return true;
        }
        return false;
    }

    private static boolean E(int i10) {
        return (i10 & 268435456) != 0;
    }

    private static List F(Object obj, long j10) {
        return (List) o1.A(obj, j10);
    }

    private static long G(Object obj, long j10) {
        return o1.y(obj, j10);
    }

    /* JADX WARN: Code restructure failed: missing block: B:12:0x0029, code lost:
        r15.o(r9, r7);
     */
    /* JADX WARN: Code restructure failed: missing block: B:253:?, code lost:
        return;
     */
    /* JADX WARN: Code restructure failed: missing block: B:254:?, code lost:
        return;
     */
    /* JADX WARN: Code restructure failed: missing block: B:43:0x0082, code lost:
        r0 = r14.f4220k;
     */
    /* JADX WARN: Code restructure failed: missing block: B:45:0x0086, code lost:
        if (r0 >= r14.f4221l) goto L215;
     */
    /* JADX WARN: Code restructure failed: missing block: B:46:0x0088, code lost:
        r7 = n(r9, r14.f4219j[r0], r7, r15);
        r0 = r0 + 1;
     */
    /* JADX WARN: Code restructure failed: missing block: B:47:0x0093, code lost:
        if (r7 == null) goto L217;
     */
    /* JADX WARN: Removed duplicated region for block: B:175:0x05f4 A[Catch: all -> 0x0611, TRY_LEAVE, TryCatch #7 {all -> 0x0611, blocks: (B:173:0x05ee, B:175:0x05f4, B:186:0x0615, B:187:0x061a), top: B:218:0x05ee }] */
    /* JADX WARN: Removed duplicated region for block: B:185:0x0613  */
    /* JADX WARN: Removed duplicated region for block: B:200:0x063e A[LOOP:4: B:198:0x063a->B:200:0x063e, LOOP_END] */
    /* JADX WARN: Removed duplicated region for block: B:202:0x064b  */
    /*
        Code decompiled incorrectly, please refer to instructions dump.
        To view partially-correct add '--show-bad-code' argument
    */
    private void H(androidx.datastore.preferences.protobuf.k1 r15, androidx.datastore.preferences.protobuf.p r16, java.lang.Object r17, androidx.datastore.preferences.protobuf.c1 r18, androidx.datastore.preferences.protobuf.o r19) {
        /*
            Method dump skipped, instructions count: 1758
            To view this dump add '--comments-level debug' option
        */
        throw new UnsupportedOperationException("Method not decompiled: androidx.datastore.preferences.protobuf.r0.H(androidx.datastore.preferences.protobuf.k1, androidx.datastore.preferences.protobuf.p, java.lang.Object, androidx.datastore.preferences.protobuf.c1, androidx.datastore.preferences.protobuf.o):void");
    }

    private final void I(Object obj, int i10, Object obj2, o oVar, c1 c1Var) {
        long Q = Q(h0(i10));
        Object A = o1.A(obj, Q);
        if (A == null) {
            A = this.f4226q.d(obj2);
            o1.O(obj, Q, A);
        } else if (this.f4226q.g(A)) {
            Object d10 = this.f4226q.d(obj2);
            this.f4226q.a(d10, A);
            o1.O(obj, Q, d10);
            A = d10;
        }
        c1Var.L(this.f4226q.c(A), this.f4226q.b(obj2), oVar);
    }

    private void J(Object obj, Object obj2, int i10) {
        long Q = Q(h0(i10));
        if (x(obj2, i10)) {
            Object A = o1.A(obj, Q);
            Object A2 = o1.A(obj2, Q);
            if (A != null && A2 != null) {
                o1.O(obj, Q, y.h(A, A2));
                d0(obj, i10);
            } else if (A2 != null) {
                o1.O(obj, Q, A2);
                d0(obj, i10);
            }
        }
    }

    private void K(Object obj, Object obj2, int i10) {
        int h02 = h0(i10);
        int P = P(i10);
        long Q = Q(h02);
        if (D(obj2, P, i10)) {
            Object A = o1.A(obj, Q);
            Object A2 = o1.A(obj2, Q);
            if (A != null && A2 != null) {
                o1.O(obj, Q, y.h(A, A2));
                e0(obj, P, i10);
            } else if (A2 != null) {
                o1.O(obj, Q, A2);
                e0(obj, P, i10);
            }
        }
    }

    private void L(Object obj, Object obj2, int i10) {
        int h02 = h0(i10);
        long Q = Q(h02);
        int P = P(i10);
        switch (g0(h02)) {
            case 0:
                if (x(obj2, i10)) {
                    o1.K(obj, Q, o1.v(obj2, Q));
                    d0(obj, i10);
                    return;
                }
                return;
            case 1:
                if (x(obj2, i10)) {
                    o1.L(obj, Q, o1.w(obj2, Q));
                    d0(obj, i10);
                    return;
                }
                return;
            case 2:
                if (x(obj2, i10)) {
                    o1.N(obj, Q, o1.y(obj2, Q));
                    d0(obj, i10);
                    return;
                }
                return;
            case 3:
                if (x(obj2, i10)) {
                    o1.N(obj, Q, o1.y(obj2, Q));
                    d0(obj, i10);
                    return;
                }
                return;
            case 4:
                if (x(obj2, i10)) {
                    o1.M(obj, Q, o1.x(obj2, Q));
                    d0(obj, i10);
                    return;
                }
                return;
            case 5:
                if (x(obj2, i10)) {
                    o1.N(obj, Q, o1.y(obj2, Q));
                    d0(obj, i10);
                    return;
                }
                return;
            case 6:
                if (x(obj2, i10)) {
                    o1.M(obj, Q, o1.x(obj2, Q));
                    d0(obj, i10);
                    return;
                }
                return;
            case 7:
                if (x(obj2, i10)) {
                    o1.E(obj, Q, o1.p(obj2, Q));
                    d0(obj, i10);
                    return;
                }
                return;
            case 8:
                if (x(obj2, i10)) {
                    o1.O(obj, Q, o1.A(obj2, Q));
                    d0(obj, i10);
                    return;
                }
                return;
            case 9:
                J(obj, obj2, i10);
                return;
            case 10:
                if (x(obj2, i10)) {
                    o1.O(obj, Q, o1.A(obj2, Q));
                    d0(obj, i10);
                    return;
                }
                return;
            case 11:
                if (x(obj2, i10)) {
                    o1.M(obj, Q, o1.x(obj2, Q));
                    d0(obj, i10);
                    return;
                }
                return;
            case 12:
                if (x(obj2, i10)) {
                    o1.M(obj, Q, o1.x(obj2, Q));
                    d0(obj, i10);
                    return;
                }
                return;
            case 13:
                if (x(obj2, i10)) {
                    o1.M(obj, Q, o1.x(obj2, Q));
                    d0(obj, i10);
                    return;
                }
                return;
            case 14:
                if (x(obj2, i10)) {
                    o1.N(obj, Q, o1.y(obj2, Q));
                    d0(obj, i10);
                    return;
                }
                return;
            case 15:
                if (x(obj2, i10)) {
                    o1.M(obj, Q, o1.x(obj2, Q));
                    d0(obj, i10);
                    return;
                }
                return;
            case 16:
                if (x(obj2, i10)) {
                    o1.N(obj, Q, o1.y(obj2, Q));
                    d0(obj, i10);
                    return;
                }
                return;
            case 17:
                J(obj, obj2, i10);
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
                this.f4223n.d(obj, obj2, Q);
                return;
            case 50:
                f1.E(this.f4226q, obj, obj2, Q);
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
                if (D(obj2, P, i10)) {
                    o1.O(obj, Q, o1.A(obj2, Q));
                    e0(obj, P, i10);
                    return;
                }
                return;
            case 60:
                K(obj, obj2, i10);
                return;
            case 61:
            case 62:
            case NotificationData.MESSAGE_TYPE_EMOJI_ADDED /* 63 */:
            case 64:
            case 65:
            case 66:
            case 67:
                if (D(obj2, P, i10)) {
                    o1.O(obj, Q, o1.A(obj2, Q));
                    e0(obj, P, i10);
                    return;
                }
                return;
            case 68:
                K(obj, obj2, i10);
                return;
            default:
                return;
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public static r0 M(Class cls, m0 m0Var, t0 t0Var, e0 e0Var, k1 k1Var, p pVar, j0 j0Var) {
        if (m0Var instanceof b1) {
            return O((b1) m0Var, t0Var, e0Var, k1Var, pVar, j0Var);
        }
        android.support.v4.media.session.b.a(m0Var);
        return N(null, t0Var, e0Var, k1Var, pVar, j0Var);
    }

    static r0 N(h1 h1Var, t0 t0Var, e0 e0Var, k1 k1Var, p pVar, j0 j0Var) {
        throw null;
    }

    /* JADX WARN: Removed duplicated region for block: B:124:0x027a  */
    /* JADX WARN: Removed duplicated region for block: B:126:0x027e  */
    /* JADX WARN: Removed duplicated region for block: B:129:0x0298  */
    /* JADX WARN: Removed duplicated region for block: B:130:0x029b  */
    /* JADX WARN: Removed duplicated region for block: B:165:0x0353  */
    /* JADX WARN: Removed duplicated region for block: B:183:0x03a9  */
    /*
        Code decompiled incorrectly, please refer to instructions dump.
        To view partially-correct add '--show-bad-code' argument
    */
    static androidx.datastore.preferences.protobuf.r0 O(androidx.datastore.preferences.protobuf.b1 r35, androidx.datastore.preferences.protobuf.t0 r36, androidx.datastore.preferences.protobuf.e0 r37, androidx.datastore.preferences.protobuf.k1 r38, androidx.datastore.preferences.protobuf.p r39, androidx.datastore.preferences.protobuf.j0 r40) {
        /*
            Method dump skipped, instructions count: 1038
            To view this dump add '--comments-level debug' option
        */
        throw new UnsupportedOperationException("Method not decompiled: androidx.datastore.preferences.protobuf.r0.O(androidx.datastore.preferences.protobuf.b1, androidx.datastore.preferences.protobuf.t0, androidx.datastore.preferences.protobuf.e0, androidx.datastore.preferences.protobuf.k1, androidx.datastore.preferences.protobuf.p, androidx.datastore.preferences.protobuf.j0):androidx.datastore.preferences.protobuf.r0");
    }

    private int P(int i10) {
        return this.f4210a[i10];
    }

    private static long Q(int i10) {
        return i10 & 1048575;
    }

    private static boolean R(Object obj, long j10) {
        return ((Boolean) o1.A(obj, j10)).booleanValue();
    }

    private static double S(Object obj, long j10) {
        return ((Double) o1.A(obj, j10)).doubleValue();
    }

    private static float T(Object obj, long j10) {
        return ((Float) o1.A(obj, j10)).floatValue();
    }

    private static int U(Object obj, long j10) {
        return ((Integer) o1.A(obj, j10)).intValue();
    }

    private static long V(Object obj, long j10) {
        return ((Long) o1.A(obj, j10)).longValue();
    }

    private int W(int i10) {
        if (i10 >= this.f4212c && i10 <= this.f4213d) {
            return f0(i10, 0);
        }
        return -1;
    }

    private int X(int i10) {
        return this.f4210a[i10 + 2];
    }

    private void Y(Object obj, long j10, c1 c1Var, d1 d1Var, o oVar) {
        c1Var.M(this.f4223n.e(obj, j10), d1Var, oVar);
    }

    private void Z(Object obj, int i10, c1 c1Var, d1 d1Var, o oVar) {
        c1Var.J(this.f4223n.e(obj, Q(i10)), d1Var, oVar);
    }

    private void a0(Object obj, int i10, c1 c1Var) {
        if (w(i10)) {
            o1.O(obj, Q(i10), c1Var.H());
        } else if (this.f4216g) {
            o1.O(obj, Q(i10), c1Var.y());
        } else {
            o1.O(obj, Q(i10), c1Var.n());
        }
    }

    private void b0(Object obj, int i10, c1 c1Var) {
        if (w(i10)) {
            c1Var.m(this.f4223n.e(obj, Q(i10)));
        } else {
            c1Var.A(this.f4223n.e(obj, Q(i10)));
        }
    }

    private static Field c0(Class cls, String str) {
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

    private void d0(Object obj, int i10) {
        if (this.f4217h) {
            return;
        }
        int X = X(i10);
        long j10 = X & 1048575;
        o1.M(obj, j10, o1.x(obj, j10) | (1 << (X >>> 20)));
    }

    private void e0(Object obj, int i10, int i11) {
        o1.M(obj, X(i11) & 1048575, i10);
    }

    private int f0(int i10, int i11) {
        int length = (this.f4210a.length / 3) - 1;
        while (i11 <= length) {
            int i12 = (length + i11) >>> 1;
            int i13 = i12 * 3;
            int P = P(i13);
            if (i10 == P) {
                return i13;
            }
            if (i10 < P) {
                length = i12 - 1;
            } else {
                i11 = i12 + 1;
            }
        }
        return -1;
    }

    private static int g0(int i10) {
        return (i10 & 267386880) >>> 20;
    }

    private int h0(int i10) {
        return this.f4210a[i10 + 1];
    }

    /* JADX WARN: Can't fix incorrect switch cases order, some code will duplicate */
    /* JADX WARN: Removed duplicated region for block: B:10:0x002d  */
    /* JADX WARN: Removed duplicated region for block: B:174:0x04be  */
    /*
        Code decompiled incorrectly, please refer to instructions dump.
        To view partially-correct add '--show-bad-code' argument
    */
    private void i0(java.lang.Object r19, androidx.datastore.preferences.protobuf.r1 r20) {
        /*
            Method dump skipped, instructions count: 1384
            To view this dump add '--comments-level debug' option
        */
        throw new UnsupportedOperationException("Method not decompiled: androidx.datastore.preferences.protobuf.r0.i0(java.lang.Object, androidx.datastore.preferences.protobuf.r1):void");
    }

    private boolean j(Object obj, Object obj2, int i10) {
        if (x(obj, i10) == x(obj2, i10)) {
            return true;
        }
        return false;
    }

    /* JADX WARN: Removed duplicated region for block: B:10:0x0025  */
    /* JADX WARN: Removed duplicated region for block: B:164:0x0588  */
    /*
        Code decompiled incorrectly, please refer to instructions dump.
        To view partially-correct add '--show-bad-code' argument
    */
    private void j0(java.lang.Object r13, androidx.datastore.preferences.protobuf.r1 r14) {
        /*
            Method dump skipped, instructions count: 1584
            To view this dump add '--comments-level debug' option
        */
        throw new UnsupportedOperationException("Method not decompiled: androidx.datastore.preferences.protobuf.r0.j0(java.lang.Object, androidx.datastore.preferences.protobuf.r1):void");
    }

    private static boolean k(Object obj, long j10) {
        return o1.p(obj, j10);
    }

    /* JADX WARN: Removed duplicated region for block: B:10:0x002a  */
    /* JADX WARN: Removed duplicated region for block: B:164:0x058e  */
    /*
        Code decompiled incorrectly, please refer to instructions dump.
        To view partially-correct add '--show-bad-code' argument
    */
    private void k0(java.lang.Object r11, androidx.datastore.preferences.protobuf.r1 r12) {
        /*
            Method dump skipped, instructions count: 1586
            To view this dump add '--comments-level debug' option
        */
        throw new UnsupportedOperationException("Method not decompiled: androidx.datastore.preferences.protobuf.r0.k0(java.lang.Object, androidx.datastore.preferences.protobuf.r1):void");
    }

    private static double l(Object obj, long j10) {
        return o1.v(obj, j10);
    }

    private void l0(r1 r1Var, int i10, Object obj, int i11) {
        if (obj != null) {
            r1Var.r(i10, this.f4226q.b(q(i11)), this.f4226q.e(obj));
        }
    }

    private boolean m(Object obj, Object obj2, int i10) {
        int h02 = h0(i10);
        long Q = Q(h02);
        switch (g0(h02)) {
            case 0:
                if (!j(obj, obj2, i10) || Double.doubleToLongBits(o1.v(obj, Q)) != Double.doubleToLongBits(o1.v(obj2, Q))) {
                    return false;
                }
                return true;
            case 1:
                if (!j(obj, obj2, i10) || Float.floatToIntBits(o1.w(obj, Q)) != Float.floatToIntBits(o1.w(obj2, Q))) {
                    return false;
                }
                return true;
            case 2:
                if (!j(obj, obj2, i10) || o1.y(obj, Q) != o1.y(obj2, Q)) {
                    return false;
                }
                return true;
            case 3:
                if (!j(obj, obj2, i10) || o1.y(obj, Q) != o1.y(obj2, Q)) {
                    return false;
                }
                return true;
            case 4:
                if (!j(obj, obj2, i10) || o1.x(obj, Q) != o1.x(obj2, Q)) {
                    return false;
                }
                return true;
            case 5:
                if (!j(obj, obj2, i10) || o1.y(obj, Q) != o1.y(obj2, Q)) {
                    return false;
                }
                return true;
            case 6:
                if (!j(obj, obj2, i10) || o1.x(obj, Q) != o1.x(obj2, Q)) {
                    return false;
                }
                return true;
            case 7:
                if (!j(obj, obj2, i10) || o1.p(obj, Q) != o1.p(obj2, Q)) {
                    return false;
                }
                return true;
            case 8:
                if (!j(obj, obj2, i10) || !f1.J(o1.A(obj, Q), o1.A(obj2, Q))) {
                    return false;
                }
                return true;
            case 9:
                if (!j(obj, obj2, i10) || !f1.J(o1.A(obj, Q), o1.A(obj2, Q))) {
                    return false;
                }
                return true;
            case 10:
                if (!j(obj, obj2, i10) || !f1.J(o1.A(obj, Q), o1.A(obj2, Q))) {
                    return false;
                }
                return true;
            case 11:
                if (!j(obj, obj2, i10) || o1.x(obj, Q) != o1.x(obj2, Q)) {
                    return false;
                }
                return true;
            case 12:
                if (!j(obj, obj2, i10) || o1.x(obj, Q) != o1.x(obj2, Q)) {
                    return false;
                }
                return true;
            case 13:
                if (!j(obj, obj2, i10) || o1.x(obj, Q) != o1.x(obj2, Q)) {
                    return false;
                }
                return true;
            case 14:
                if (!j(obj, obj2, i10) || o1.y(obj, Q) != o1.y(obj2, Q)) {
                    return false;
                }
                return true;
            case 15:
                if (!j(obj, obj2, i10) || o1.x(obj, Q) != o1.x(obj2, Q)) {
                    return false;
                }
                return true;
            case 16:
                if (!j(obj, obj2, i10) || o1.y(obj, Q) != o1.y(obj2, Q)) {
                    return false;
                }
                return true;
            case 17:
                if (!j(obj, obj2, i10) || !f1.J(o1.A(obj, Q), o1.A(obj2, Q))) {
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
                return f1.J(o1.A(obj, Q), o1.A(obj2, Q));
            case 50:
                return f1.J(o1.A(obj, Q), o1.A(obj2, Q));
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
                if (!C(obj, obj2, i10) || !f1.J(o1.A(obj, Q), o1.A(obj2, Q))) {
                    return false;
                }
                return true;
            default:
                return true;
        }
    }

    private void m0(int i10, Object obj, r1 r1Var) {
        if (obj instanceof String) {
            r1Var.f(i10, (String) obj);
        } else {
            r1Var.j(i10, (g) obj);
        }
    }

    private final Object n(Object obj, int i10, Object obj2, k1 k1Var) {
        P(i10);
        if (o1.A(obj, Q(h0(i10))) == null) {
            return obj2;
        }
        p(i10);
        return obj2;
    }

    private void n0(k1 k1Var, Object obj, r1 r1Var) {
        k1Var.t(k1Var.g(obj), r1Var);
    }

    private static float o(Object obj, long j10) {
        return o1.w(obj, j10);
    }

    private y.a p(int i10) {
        android.support.v4.media.session.b.a(this.f4211b[((i10 / 3) * 2) + 1]);
        return null;
    }

    private Object q(int i10) {
        return this.f4211b[(i10 / 3) * 2];
    }

    private d1 r(int i10) {
        int i11 = (i10 / 3) * 2;
        d1 d1Var = (d1) this.f4211b[i11];
        if (d1Var != null) {
            return d1Var;
        }
        d1 c10 = z0.a().c((Class) this.f4211b[i11 + 1]);
        this.f4211b[i11] = c10;
        return c10;
    }

    /* JADX WARN: Can't fix incorrect switch cases order, some code will duplicate */
    private int s(Object obj) {
        int i10;
        int i11;
        int h10;
        int c10;
        boolean z10;
        int f10;
        int i12;
        int P;
        int R;
        Unsafe unsafe = f4209s;
        int i13 = -1;
        int i14 = 0;
        int i15 = 0;
        int i16 = 0;
        while (i14 < this.f4210a.length) {
            int h02 = h0(i14);
            int P2 = P(i14);
            int g02 = g0(h02);
            if (g02 <= 17) {
                i10 = this.f4210a[i14 + 2];
                int i17 = 1048575 & i10;
                int i18 = 1 << (i10 >>> 20);
                if (i17 != i13) {
                    i16 = unsafe.getInt(obj, i17);
                    i13 = i17;
                }
                i11 = i18;
            } else {
                if (this.f4218i && g02 >= t.Z.a() && g02 <= t.f4252m0.a()) {
                    i10 = this.f4210a[i14 + 2] & 1048575;
                } else {
                    i10 = 0;
                }
                i11 = 0;
            }
            long Q = Q(h02);
            int i19 = i13;
            switch (g02) {
                case 0:
                    if ((i16 & i11) == 0) {
                        break;
                    } else {
                        h10 = j.h(P2, 0.0d);
                        i15 += h10;
                        break;
                    }
                case 1:
                    if ((i16 & i11) == 0) {
                        break;
                    } else {
                        h10 = j.p(P2, 0.0f);
                        i15 += h10;
                        break;
                    }
                case 2:
                    if ((i16 & i11) == 0) {
                        break;
                    } else {
                        h10 = j.w(P2, unsafe.getLong(obj, Q));
                        i15 += h10;
                        break;
                    }
                case 3:
                    if ((i16 & i11) == 0) {
                        break;
                    } else {
                        h10 = j.S(P2, unsafe.getLong(obj, Q));
                        i15 += h10;
                        break;
                    }
                case 4:
                    if ((i16 & i11) == 0) {
                        break;
                    } else {
                        h10 = j.u(P2, unsafe.getInt(obj, Q));
                        i15 += h10;
                        break;
                    }
                case 5:
                    if ((i16 & i11) == 0) {
                        break;
                    } else {
                        h10 = j.n(P2, 0L);
                        i15 += h10;
                        break;
                    }
                case 6:
                    if ((i16 & i11) != 0) {
                        h10 = j.l(P2, 0);
                        i15 += h10;
                        break;
                    }
                    break;
                case 7:
                    if ((i16 & i11) != 0) {
                        c10 = j.c(P2, true);
                        i15 += c10;
                    }
                    break;
                case 8:
                    if ((i16 & i11) != 0) {
                        Object object = unsafe.getObject(obj, Q);
                        if (object instanceof g) {
                            c10 = j.f(P2, (g) object);
                        } else {
                            c10 = j.N(P2, (String) object);
                        }
                        i15 += c10;
                    }
                    break;
                case 9:
                    if ((i16 & i11) != 0) {
                        c10 = f1.o(P2, unsafe.getObject(obj, Q), r(i14));
                        i15 += c10;
                    }
                    break;
                case 10:
                    if ((i16 & i11) != 0) {
                        c10 = j.f(P2, (g) unsafe.getObject(obj, Q));
                        i15 += c10;
                    }
                    break;
                case 11:
                    if ((i16 & i11) != 0) {
                        c10 = j.Q(P2, unsafe.getInt(obj, Q));
                        i15 += c10;
                    }
                    break;
                case 12:
                    if ((i16 & i11) != 0) {
                        c10 = j.j(P2, unsafe.getInt(obj, Q));
                        i15 += c10;
                    }
                    break;
                case 13:
                    if ((i16 & i11) != 0) {
                        c10 = j.F(P2, 0);
                        i15 += c10;
                    }
                    break;
                case 14:
                    if ((i16 & i11) != 0) {
                        c10 = j.H(P2, 0L);
                        i15 += c10;
                    }
                    break;
                case 15:
                    if ((i16 & i11) != 0) {
                        c10 = j.J(P2, unsafe.getInt(obj, Q));
                        i15 += c10;
                    }
                    break;
                case 16:
                    if ((i16 & i11) != 0) {
                        c10 = j.L(P2, unsafe.getLong(obj, Q));
                        i15 += c10;
                    }
                    break;
                case 17:
                    if ((i16 & i11) != 0) {
                        c10 = j.r(P2, (o0) unsafe.getObject(obj, Q), r(i14));
                        i15 += c10;
                    }
                    break;
                case ChatViewRecyclerTypes.EPHEMERAL_INDICATION /* 18 */:
                    c10 = f1.h(P2, (List) unsafe.getObject(obj, Q), false);
                    i15 += c10;
                    break;
                case ChatViewRecyclerTypes.INTERACTION_STATUS /* 19 */:
                    z10 = false;
                    f10 = f1.f(P2, (List) unsafe.getObject(obj, Q), false);
                    i15 += f10;
                    break;
                case 20:
                    z10 = false;
                    f10 = f1.m(P2, (List) unsafe.getObject(obj, Q), false);
                    i15 += f10;
                    break;
                case ChatViewRecyclerTypes.FLAGGED_MESSAGE_EMBED /* 21 */:
                    z10 = false;
                    f10 = f1.x(P2, (List) unsafe.getObject(obj, Q), false);
                    i15 += f10;
                    break;
                case ChatViewRecyclerTypes.FLAGGED_MESSAGE_ACTION_BAR /* 22 */:
                    z10 = false;
                    f10 = f1.k(P2, (List) unsafe.getObject(obj, Q), false);
                    i15 += f10;
                    break;
                case 23:
                    z10 = false;
                    f10 = f1.h(P2, (List) unsafe.getObject(obj, Q), false);
                    i15 += f10;
                    break;
                case ChatViewRecyclerTypes.SURVEY_INDICATION /* 24 */:
                    z10 = false;
                    f10 = f1.f(P2, (List) unsafe.getObject(obj, Q), false);
                    i15 += f10;
                    break;
                case ChatViewRecyclerTypes.GUILD_INVITE_DISABLED /* 25 */:
                    z10 = false;
                    f10 = f1.a(P2, (List) unsafe.getObject(obj, Q), false);
                    i15 += f10;
                    break;
                case ChatViewRecyclerTypes.MEDIA_MOSAIC_ATTACHMENT /* 26 */:
                    c10 = f1.u(P2, (List) unsafe.getObject(obj, Q));
                    i15 += c10;
                    break;
                case 27:
                    c10 = f1.p(P2, (List) unsafe.getObject(obj, Q), r(i14));
                    i15 += c10;
                    break;
                case 28:
                    c10 = f1.c(P2, (List) unsafe.getObject(obj, Q));
                    i15 += c10;
                    break;
                case 29:
                    c10 = f1.v(P2, (List) unsafe.getObject(obj, Q), false);
                    i15 += c10;
                    break;
                case 30:
                    z10 = false;
                    f10 = f1.d(P2, (List) unsafe.getObject(obj, Q), false);
                    i15 += f10;
                    break;
                case ChatViewRecyclerTypes.EMBEDDED_ACTIVITY_INVITE /* 31 */:
                    z10 = false;
                    f10 = f1.f(P2, (List) unsafe.getObject(obj, Q), false);
                    i15 += f10;
                    break;
                case 32:
                    z10 = false;
                    f10 = f1.h(P2, (List) unsafe.getObject(obj, Q), false);
                    i15 += f10;
                    break;
                case ChatViewRecyclerTypes.AUTO_MODERATION_NOTIFICATION_EMBED /* 33 */:
                    z10 = false;
                    f10 = f1.q(P2, (List) unsafe.getObject(obj, Q), false);
                    i15 += f10;
                    break;
                case ChatViewRecyclerTypes.CHANNEL_DEADCHAT_PROMPT_ACTIONS /* 34 */:
                    z10 = false;
                    f10 = f1.s(P2, (List) unsafe.getObject(obj, Q), false);
                    i15 += f10;
                    break;
                case ChatViewRecyclerTypes.INFO_LINK /* 35 */:
                    i12 = f1.i((List) unsafe.getObject(obj, Q));
                    if (i12 > 0) {
                        if (this.f4218i) {
                            unsafe.putInt(obj, i10, i12);
                        }
                        P = j.P(P2);
                        R = j.R(i12);
                        i15 += P + R + i12;
                    }
                    break;
                case ChatViewRecyclerTypes.SAFETY_POLICY_NOTICE /* 36 */:
                    i12 = f1.g((List) unsafe.getObject(obj, Q));
                    if (i12 > 0) {
                        if (this.f4218i) {
                            unsafe.putInt(obj, i10, i12);
                        }
                        P = j.P(P2);
                        R = j.R(i12);
                        i15 += P + R + i12;
                    }
                    break;
                case ChatViewRecyclerTypes.POLL_TEXT_AND_IMAGE /* 37 */:
                    i12 = f1.n((List) unsafe.getObject(obj, Q));
                    if (i12 > 0) {
                        if (this.f4218i) {
                            unsafe.putInt(obj, i10, i12);
                        }
                        P = j.P(P2);
                        R = j.R(i12);
                        i15 += P + R + i12;
                    }
                    break;
                case ChatViewRecyclerTypes.POLL_IMAGE_ONLY /* 38 */:
                    i12 = f1.y((List) unsafe.getObject(obj, Q));
                    if (i12 > 0) {
                        if (this.f4218i) {
                            unsafe.putInt(obj, i10, i12);
                        }
                        P = j.P(P2);
                        R = j.R(i12);
                        i15 += P + R + i12;
                    }
                    break;
                case ChatViewRecyclerTypes.SAFETY_SYSTEM_NOTIFICATION /* 39 */:
                    i12 = f1.l((List) unsafe.getObject(obj, Q));
                    if (i12 > 0) {
                        if (this.f4218i) {
                            unsafe.putInt(obj, i10, i12);
                        }
                        P = j.P(P2);
                        R = j.R(i12);
                        i15 += P + R + i12;
                    }
                    break;
                case 40:
                    i12 = f1.i((List) unsafe.getObject(obj, Q));
                    if (i12 > 0) {
                        if (this.f4218i) {
                            unsafe.putInt(obj, i10, i12);
                        }
                        P = j.P(P2);
                        R = j.R(i12);
                        i15 += P + R + i12;
                    }
                    break;
                case 41:
                    i12 = f1.g((List) unsafe.getObject(obj, Q));
                    if (i12 > 0) {
                        if (this.f4218i) {
                            unsafe.putInt(obj, i10, i12);
                        }
                        P = j.P(P2);
                        R = j.R(i12);
                        i15 += P + R + i12;
                    }
                    break;
                case 42:
                    i12 = f1.b((List) unsafe.getObject(obj, Q));
                    if (i12 > 0) {
                        if (this.f4218i) {
                            unsafe.putInt(obj, i10, i12);
                        }
                        P = j.P(P2);
                        R = j.R(i12);
                        i15 += P + R + i12;
                    }
                    break;
                case ChatViewRecyclerTypes.FORWARD_HEADER /* 43 */:
                    i12 = f1.w((List) unsafe.getObject(obj, Q));
                    if (i12 > 0) {
                        if (this.f4218i) {
                            unsafe.putInt(obj, i10, i12);
                        }
                        P = j.P(P2);
                        R = j.R(i12);
                        i15 += P + R + i12;
                    }
                    break;
                case ChatViewRecyclerTypes.FORWARD_BREADCRUMB /* 44 */:
                    i12 = f1.e((List) unsafe.getObject(obj, Q));
                    if (i12 > 0) {
                        if (this.f4218i) {
                            unsafe.putInt(obj, i10, i12);
                        }
                        P = j.P(P2);
                        R = j.R(i12);
                        i15 += P + R + i12;
                    }
                    break;
                case ChatViewRecyclerTypes.REACTION_BURST_REACTION /* 45 */:
                    i12 = f1.g((List) unsafe.getObject(obj, Q));
                    if (i12 > 0) {
                        if (this.f4218i) {
                            unsafe.putInt(obj, i10, i12);
                        }
                        P = j.P(P2);
                        R = j.R(i12);
                        i15 += P + R + i12;
                    }
                    break;
                case 46:
                    i12 = f1.i((List) unsafe.getObject(obj, Q));
                    if (i12 > 0) {
                        if (this.f4218i) {
                            unsafe.putInt(obj, i10, i12);
                        }
                        P = j.P(P2);
                        R = j.R(i12);
                        i15 += P + R + i12;
                    }
                    break;
                case ChatViewRecyclerTypes.REACTION_ADD_REACTION /* 47 */:
                    i12 = f1.r((List) unsafe.getObject(obj, Q));
                    if (i12 > 0) {
                        if (this.f4218i) {
                            unsafe.putInt(obj, i10, i12);
                        }
                        P = j.P(P2);
                        R = j.R(i12);
                        i15 += P + R + i12;
                    }
                    break;
                case 48:
                    i12 = f1.t((List) unsafe.getObject(obj, Q));
                    if (i12 > 0) {
                        if (this.f4218i) {
                            unsafe.putInt(obj, i10, i12);
                        }
                        P = j.P(P2);
                        R = j.R(i12);
                        i15 += P + R + i12;
                    }
                    break;
                case ChatViewRecyclerTypes.MEDIA_ATTACHMENT_MOSAIC_IMAGE /* 49 */:
                    c10 = f1.j(P2, (List) unsafe.getObject(obj, Q), r(i14));
                    i15 += c10;
                    break;
                case 50:
                    c10 = this.f4226q.h(P2, unsafe.getObject(obj, Q), q(i14));
                    i15 += c10;
                    break;
                case ChatViewRecyclerTypes.MEDIA_ATTACHMENT_MOSAIC_VISUAL_PLACEHOLDER /* 51 */:
                    if (D(obj, P2, i14)) {
                        c10 = j.h(P2, 0.0d);
                        i15 += c10;
                    }
                    break;
                case ChatViewRecyclerTypes.REFERRAL /* 52 */:
                    if (D(obj, P2, i14)) {
                        c10 = j.p(P2, 0.0f);
                        i15 += c10;
                    }
                    break;
                case ChatViewRecyclerTypes.GUILD_PROFILE_INVITE /* 53 */:
                    if (D(obj, P2, i14)) {
                        c10 = j.w(P2, V(obj, Q));
                        i15 += c10;
                    }
                    break;
                case ChatViewRecyclerTypes.APP_MESSAGE_EMBED /* 54 */:
                    if (D(obj, P2, i14)) {
                        c10 = j.S(P2, V(obj, Q));
                        i15 += c10;
                    }
                    break;
                case ChatViewRecyclerTypes.ACTIVITY_RICH_PRESENCE_INVITE_EMBED /* 55 */:
                    if (D(obj, P2, i14)) {
                        c10 = j.u(P2, U(obj, Q));
                        i15 += c10;
                    }
                    break;
                case ChatViewRecyclerTypes.SHARED_CUSTOM_THEME_EMBED /* 56 */:
                    if (D(obj, P2, i14)) {
                        c10 = j.n(P2, 0L);
                        i15 += c10;
                    }
                    break;
                case ChatViewRecyclerTypes.PREMIUM_GROUP_INVITE /* 57 */:
                    if (D(obj, P2, i14)) {
                        c10 = j.l(P2, 0);
                        i15 += c10;
                    }
                    break;
                case 58:
                    if (D(obj, P2, i14)) {
                        c10 = j.c(P2, true);
                        i15 += c10;
                    }
                    break;
                case 59:
                    if (D(obj, P2, i14)) {
                        Object object2 = unsafe.getObject(obj, Q);
                        if (object2 instanceof g) {
                            c10 = j.f(P2, (g) object2);
                        } else {
                            c10 = j.N(P2, (String) object2);
                        }
                        i15 += c10;
                    }
                    break;
                case 60:
                    if (D(obj, P2, i14)) {
                        c10 = f1.o(P2, unsafe.getObject(obj, Q), r(i14));
                        i15 += c10;
                    }
                    break;
                case 61:
                    if (D(obj, P2, i14)) {
                        c10 = j.f(P2, (g) unsafe.getObject(obj, Q));
                        i15 += c10;
                    }
                    break;
                case 62:
                    if (D(obj, P2, i14)) {
                        c10 = j.Q(P2, U(obj, Q));
                        i15 += c10;
                    }
                    break;
                case NotificationData.MESSAGE_TYPE_EMOJI_ADDED /* 63 */:
                    if (D(obj, P2, i14)) {
                        c10 = j.j(P2, U(obj, Q));
                        i15 += c10;
                    }
                    break;
                case 64:
                    if (D(obj, P2, i14)) {
                        c10 = j.F(P2, 0);
                        i15 += c10;
                    }
                    break;
                case 65:
                    if (D(obj, P2, i14)) {
                        c10 = j.H(P2, 0L);
                        i15 += c10;
                    }
                    break;
                case 66:
                    if (D(obj, P2, i14)) {
                        c10 = j.J(P2, U(obj, Q));
                        i15 += c10;
                    }
                    break;
                case 67:
                    if (D(obj, P2, i14)) {
                        c10 = j.L(P2, V(obj, Q));
                        i15 += c10;
                    }
                    break;
                case 68:
                    if (D(obj, P2, i14)) {
                        c10 = j.r(P2, (o0) unsafe.getObject(obj, Q), r(i14));
                        i15 += c10;
                    }
                    break;
            }
            i14 += 3;
            i13 = i19;
        }
        int u10 = i15 + u(this.f4224o, obj);
        if (this.f4215f) {
            return u10 + this.f4225p.c(obj).h();
        }
        return u10;
    }

    private int t(Object obj) {
        int i10;
        int h10;
        int i11;
        int P;
        int R;
        Unsafe unsafe = f4209s;
        int i12 = 0;
        for (int i13 = 0; i13 < this.f4210a.length; i13 += 3) {
            int h02 = h0(i13);
            int g02 = g0(h02);
            int P2 = P(i13);
            long Q = Q(h02);
            if (g02 >= t.Z.a() && g02 <= t.f4252m0.a()) {
                i10 = this.f4210a[i13 + 2] & 1048575;
            } else {
                i10 = 0;
            }
            switch (g02) {
                case 0:
                    if (x(obj, i13)) {
                        h10 = j.h(P2, 0.0d);
                        break;
                    } else {
                        continue;
                    }
                case 1:
                    if (x(obj, i13)) {
                        h10 = j.p(P2, 0.0f);
                        break;
                    } else {
                        continue;
                    }
                case 2:
                    if (x(obj, i13)) {
                        h10 = j.w(P2, o1.y(obj, Q));
                        break;
                    } else {
                        continue;
                    }
                case 3:
                    if (x(obj, i13)) {
                        h10 = j.S(P2, o1.y(obj, Q));
                        break;
                    } else {
                        continue;
                    }
                case 4:
                    if (x(obj, i13)) {
                        h10 = j.u(P2, o1.x(obj, Q));
                        break;
                    } else {
                        continue;
                    }
                case 5:
                    if (x(obj, i13)) {
                        h10 = j.n(P2, 0L);
                        break;
                    } else {
                        continue;
                    }
                case 6:
                    if (x(obj, i13)) {
                        h10 = j.l(P2, 0);
                        break;
                    } else {
                        continue;
                    }
                case 7:
                    if (x(obj, i13)) {
                        h10 = j.c(P2, true);
                        break;
                    } else {
                        continue;
                    }
                case 8:
                    if (x(obj, i13)) {
                        Object A = o1.A(obj, Q);
                        if (A instanceof g) {
                            h10 = j.f(P2, (g) A);
                            break;
                        } else {
                            h10 = j.N(P2, (String) A);
                            break;
                        }
                    } else {
                        continue;
                    }
                case 9:
                    if (x(obj, i13)) {
                        h10 = f1.o(P2, o1.A(obj, Q), r(i13));
                        break;
                    } else {
                        continue;
                    }
                case 10:
                    if (x(obj, i13)) {
                        h10 = j.f(P2, (g) o1.A(obj, Q));
                        break;
                    } else {
                        continue;
                    }
                case 11:
                    if (x(obj, i13)) {
                        h10 = j.Q(P2, o1.x(obj, Q));
                        break;
                    } else {
                        continue;
                    }
                case 12:
                    if (x(obj, i13)) {
                        h10 = j.j(P2, o1.x(obj, Q));
                        break;
                    } else {
                        continue;
                    }
                case 13:
                    if (x(obj, i13)) {
                        h10 = j.F(P2, 0);
                        break;
                    } else {
                        continue;
                    }
                case 14:
                    if (x(obj, i13)) {
                        h10 = j.H(P2, 0L);
                        break;
                    } else {
                        continue;
                    }
                case 15:
                    if (x(obj, i13)) {
                        h10 = j.J(P2, o1.x(obj, Q));
                        break;
                    } else {
                        continue;
                    }
                case 16:
                    if (x(obj, i13)) {
                        h10 = j.L(P2, o1.y(obj, Q));
                        break;
                    } else {
                        continue;
                    }
                case 17:
                    if (x(obj, i13)) {
                        h10 = j.r(P2, (o0) o1.A(obj, Q), r(i13));
                        break;
                    } else {
                        continue;
                    }
                case ChatViewRecyclerTypes.EPHEMERAL_INDICATION /* 18 */:
                    h10 = f1.h(P2, F(obj, Q), false);
                    break;
                case ChatViewRecyclerTypes.INTERACTION_STATUS /* 19 */:
                    h10 = f1.f(P2, F(obj, Q), false);
                    break;
                case 20:
                    h10 = f1.m(P2, F(obj, Q), false);
                    break;
                case ChatViewRecyclerTypes.FLAGGED_MESSAGE_EMBED /* 21 */:
                    h10 = f1.x(P2, F(obj, Q), false);
                    break;
                case ChatViewRecyclerTypes.FLAGGED_MESSAGE_ACTION_BAR /* 22 */:
                    h10 = f1.k(P2, F(obj, Q), false);
                    break;
                case 23:
                    h10 = f1.h(P2, F(obj, Q), false);
                    break;
                case ChatViewRecyclerTypes.SURVEY_INDICATION /* 24 */:
                    h10 = f1.f(P2, F(obj, Q), false);
                    break;
                case ChatViewRecyclerTypes.GUILD_INVITE_DISABLED /* 25 */:
                    h10 = f1.a(P2, F(obj, Q), false);
                    break;
                case ChatViewRecyclerTypes.MEDIA_MOSAIC_ATTACHMENT /* 26 */:
                    h10 = f1.u(P2, F(obj, Q));
                    break;
                case 27:
                    h10 = f1.p(P2, F(obj, Q), r(i13));
                    break;
                case 28:
                    h10 = f1.c(P2, F(obj, Q));
                    break;
                case 29:
                    h10 = f1.v(P2, F(obj, Q), false);
                    break;
                case 30:
                    h10 = f1.d(P2, F(obj, Q), false);
                    break;
                case ChatViewRecyclerTypes.EMBEDDED_ACTIVITY_INVITE /* 31 */:
                    h10 = f1.f(P2, F(obj, Q), false);
                    break;
                case 32:
                    h10 = f1.h(P2, F(obj, Q), false);
                    break;
                case ChatViewRecyclerTypes.AUTO_MODERATION_NOTIFICATION_EMBED /* 33 */:
                    h10 = f1.q(P2, F(obj, Q), false);
                    break;
                case ChatViewRecyclerTypes.CHANNEL_DEADCHAT_PROMPT_ACTIONS /* 34 */:
                    h10 = f1.s(P2, F(obj, Q), false);
                    break;
                case ChatViewRecyclerTypes.INFO_LINK /* 35 */:
                    i11 = f1.i((List) unsafe.getObject(obj, Q));
                    if (i11 > 0) {
                        if (this.f4218i) {
                            unsafe.putInt(obj, i10, i11);
                        }
                        P = j.P(P2);
                        R = j.R(i11);
                        h10 = P + R + i11;
                        break;
                    } else {
                        continue;
                    }
                case ChatViewRecyclerTypes.SAFETY_POLICY_NOTICE /* 36 */:
                    i11 = f1.g((List) unsafe.getObject(obj, Q));
                    if (i11 > 0) {
                        if (this.f4218i) {
                            unsafe.putInt(obj, i10, i11);
                        }
                        P = j.P(P2);
                        R = j.R(i11);
                        h10 = P + R + i11;
                        break;
                    } else {
                        continue;
                    }
                case ChatViewRecyclerTypes.POLL_TEXT_AND_IMAGE /* 37 */:
                    i11 = f1.n((List) unsafe.getObject(obj, Q));
                    if (i11 > 0) {
                        if (this.f4218i) {
                            unsafe.putInt(obj, i10, i11);
                        }
                        P = j.P(P2);
                        R = j.R(i11);
                        h10 = P + R + i11;
                        break;
                    } else {
                        continue;
                    }
                case ChatViewRecyclerTypes.POLL_IMAGE_ONLY /* 38 */:
                    i11 = f1.y((List) unsafe.getObject(obj, Q));
                    if (i11 > 0) {
                        if (this.f4218i) {
                            unsafe.putInt(obj, i10, i11);
                        }
                        P = j.P(P2);
                        R = j.R(i11);
                        h10 = P + R + i11;
                        break;
                    } else {
                        continue;
                    }
                case ChatViewRecyclerTypes.SAFETY_SYSTEM_NOTIFICATION /* 39 */:
                    i11 = f1.l((List) unsafe.getObject(obj, Q));
                    if (i11 > 0) {
                        if (this.f4218i) {
                            unsafe.putInt(obj, i10, i11);
                        }
                        P = j.P(P2);
                        R = j.R(i11);
                        h10 = P + R + i11;
                        break;
                    } else {
                        continue;
                    }
                case 40:
                    i11 = f1.i((List) unsafe.getObject(obj, Q));
                    if (i11 > 0) {
                        if (this.f4218i) {
                            unsafe.putInt(obj, i10, i11);
                        }
                        P = j.P(P2);
                        R = j.R(i11);
                        h10 = P + R + i11;
                        break;
                    } else {
                        continue;
                    }
                case 41:
                    i11 = f1.g((List) unsafe.getObject(obj, Q));
                    if (i11 > 0) {
                        if (this.f4218i) {
                            unsafe.putInt(obj, i10, i11);
                        }
                        P = j.P(P2);
                        R = j.R(i11);
                        h10 = P + R + i11;
                        break;
                    } else {
                        continue;
                    }
                case 42:
                    i11 = f1.b((List) unsafe.getObject(obj, Q));
                    if (i11 > 0) {
                        if (this.f4218i) {
                            unsafe.putInt(obj, i10, i11);
                        }
                        P = j.P(P2);
                        R = j.R(i11);
                        h10 = P + R + i11;
                        break;
                    } else {
                        continue;
                    }
                case ChatViewRecyclerTypes.FORWARD_HEADER /* 43 */:
                    i11 = f1.w((List) unsafe.getObject(obj, Q));
                    if (i11 > 0) {
                        if (this.f4218i) {
                            unsafe.putInt(obj, i10, i11);
                        }
                        P = j.P(P2);
                        R = j.R(i11);
                        h10 = P + R + i11;
                        break;
                    } else {
                        continue;
                    }
                case ChatViewRecyclerTypes.FORWARD_BREADCRUMB /* 44 */:
                    i11 = f1.e((List) unsafe.getObject(obj, Q));
                    if (i11 > 0) {
                        if (this.f4218i) {
                            unsafe.putInt(obj, i10, i11);
                        }
                        P = j.P(P2);
                        R = j.R(i11);
                        h10 = P + R + i11;
                        break;
                    } else {
                        continue;
                    }
                case ChatViewRecyclerTypes.REACTION_BURST_REACTION /* 45 */:
                    i11 = f1.g((List) unsafe.getObject(obj, Q));
                    if (i11 > 0) {
                        if (this.f4218i) {
                            unsafe.putInt(obj, i10, i11);
                        }
                        P = j.P(P2);
                        R = j.R(i11);
                        h10 = P + R + i11;
                        break;
                    } else {
                        continue;
                    }
                case 46:
                    i11 = f1.i((List) unsafe.getObject(obj, Q));
                    if (i11 > 0) {
                        if (this.f4218i) {
                            unsafe.putInt(obj, i10, i11);
                        }
                        P = j.P(P2);
                        R = j.R(i11);
                        h10 = P + R + i11;
                        break;
                    } else {
                        continue;
                    }
                case ChatViewRecyclerTypes.REACTION_ADD_REACTION /* 47 */:
                    i11 = f1.r((List) unsafe.getObject(obj, Q));
                    if (i11 > 0) {
                        if (this.f4218i) {
                            unsafe.putInt(obj, i10, i11);
                        }
                        P = j.P(P2);
                        R = j.R(i11);
                        h10 = P + R + i11;
                        break;
                    } else {
                        continue;
                    }
                case 48:
                    i11 = f1.t((List) unsafe.getObject(obj, Q));
                    if (i11 > 0) {
                        if (this.f4218i) {
                            unsafe.putInt(obj, i10, i11);
                        }
                        P = j.P(P2);
                        R = j.R(i11);
                        h10 = P + R + i11;
                        break;
                    } else {
                        continue;
                    }
                case ChatViewRecyclerTypes.MEDIA_ATTACHMENT_MOSAIC_IMAGE /* 49 */:
                    h10 = f1.j(P2, F(obj, Q), r(i13));
                    break;
                case 50:
                    h10 = this.f4226q.h(P2, o1.A(obj, Q), q(i13));
                    break;
                case ChatViewRecyclerTypes.MEDIA_ATTACHMENT_MOSAIC_VISUAL_PLACEHOLDER /* 51 */:
                    if (D(obj, P2, i13)) {
                        h10 = j.h(P2, 0.0d);
                        break;
                    } else {
                        continue;
                    }
                case ChatViewRecyclerTypes.REFERRAL /* 52 */:
                    if (D(obj, P2, i13)) {
                        h10 = j.p(P2, 0.0f);
                        break;
                    } else {
                        continue;
                    }
                case ChatViewRecyclerTypes.GUILD_PROFILE_INVITE /* 53 */:
                    if (D(obj, P2, i13)) {
                        h10 = j.w(P2, V(obj, Q));
                        break;
                    } else {
                        continue;
                    }
                case ChatViewRecyclerTypes.APP_MESSAGE_EMBED /* 54 */:
                    if (D(obj, P2, i13)) {
                        h10 = j.S(P2, V(obj, Q));
                        break;
                    } else {
                        continue;
                    }
                case ChatViewRecyclerTypes.ACTIVITY_RICH_PRESENCE_INVITE_EMBED /* 55 */:
                    if (D(obj, P2, i13)) {
                        h10 = j.u(P2, U(obj, Q));
                        break;
                    } else {
                        continue;
                    }
                case ChatViewRecyclerTypes.SHARED_CUSTOM_THEME_EMBED /* 56 */:
                    if (D(obj, P2, i13)) {
                        h10 = j.n(P2, 0L);
                        break;
                    } else {
                        continue;
                    }
                case ChatViewRecyclerTypes.PREMIUM_GROUP_INVITE /* 57 */:
                    if (D(obj, P2, i13)) {
                        h10 = j.l(P2, 0);
                        break;
                    } else {
                        continue;
                    }
                case 58:
                    if (D(obj, P2, i13)) {
                        h10 = j.c(P2, true);
                        break;
                    } else {
                        continue;
                    }
                case 59:
                    if (D(obj, P2, i13)) {
                        Object A2 = o1.A(obj, Q);
                        if (A2 instanceof g) {
                            h10 = j.f(P2, (g) A2);
                            break;
                        } else {
                            h10 = j.N(P2, (String) A2);
                            break;
                        }
                    } else {
                        continue;
                    }
                case 60:
                    if (D(obj, P2, i13)) {
                        h10 = f1.o(P2, o1.A(obj, Q), r(i13));
                        break;
                    } else {
                        continue;
                    }
                case 61:
                    if (D(obj, P2, i13)) {
                        h10 = j.f(P2, (g) o1.A(obj, Q));
                        break;
                    } else {
                        continue;
                    }
                case 62:
                    if (D(obj, P2, i13)) {
                        h10 = j.Q(P2, U(obj, Q));
                        break;
                    } else {
                        continue;
                    }
                case NotificationData.MESSAGE_TYPE_EMOJI_ADDED /* 63 */:
                    if (D(obj, P2, i13)) {
                        h10 = j.j(P2, U(obj, Q));
                        break;
                    } else {
                        continue;
                    }
                case 64:
                    if (D(obj, P2, i13)) {
                        h10 = j.F(P2, 0);
                        break;
                    } else {
                        continue;
                    }
                case 65:
                    if (D(obj, P2, i13)) {
                        h10 = j.H(P2, 0L);
                        break;
                    } else {
                        continue;
                    }
                case 66:
                    if (D(obj, P2, i13)) {
                        h10 = j.J(P2, U(obj, Q));
                        break;
                    } else {
                        continue;
                    }
                case 67:
                    if (D(obj, P2, i13)) {
                        h10 = j.L(P2, V(obj, Q));
                        break;
                    } else {
                        continue;
                    }
                case 68:
                    if (D(obj, P2, i13)) {
                        h10 = j.r(P2, (o0) o1.A(obj, Q), r(i13));
                        break;
                    } else {
                        continue;
                    }
                default:
            }
            i12 += h10;
        }
        return i12 + u(this.f4224o, obj);
    }

    private int u(k1 k1Var, Object obj) {
        return k1Var.h(k1Var.g(obj));
    }

    private static int v(Object obj, long j10) {
        return o1.x(obj, j10);
    }

    private static boolean w(int i10) {
        return (i10 & 536870912) != 0;
    }

    private boolean x(Object obj, int i10) {
        boolean equals;
        if (this.f4217h) {
            int h02 = h0(i10);
            long Q = Q(h02);
            switch (g0(h02)) {
                case 0:
                    if (o1.v(obj, Q) == 0.0d) {
                        return false;
                    }
                    return true;
                case 1:
                    if (o1.w(obj, Q) == 0.0f) {
                        return false;
                    }
                    return true;
                case 2:
                    if (o1.y(obj, Q) == 0) {
                        return false;
                    }
                    return true;
                case 3:
                    if (o1.y(obj, Q) == 0) {
                        return false;
                    }
                    return true;
                case 4:
                    if (o1.x(obj, Q) == 0) {
                        return false;
                    }
                    return true;
                case 5:
                    if (o1.y(obj, Q) == 0) {
                        return false;
                    }
                    return true;
                case 6:
                    if (o1.x(obj, Q) == 0) {
                        return false;
                    }
                    return true;
                case 7:
                    return o1.p(obj, Q);
                case 8:
                    Object A = o1.A(obj, Q);
                    if (A instanceof String) {
                        equals = ((String) A).isEmpty();
                        break;
                    } else if (A instanceof g) {
                        equals = g.f4045e.equals(A);
                        break;
                    } else {
                        throw new IllegalArgumentException();
                    }
                case 9:
                    if (o1.A(obj, Q) == null) {
                        return false;
                    }
                    return true;
                case 10:
                    equals = g.f4045e.equals(o1.A(obj, Q));
                    break;
                case 11:
                    if (o1.x(obj, Q) == 0) {
                        return false;
                    }
                    return true;
                case 12:
                    if (o1.x(obj, Q) == 0) {
                        return false;
                    }
                    return true;
                case 13:
                    if (o1.x(obj, Q) == 0) {
                        return false;
                    }
                    return true;
                case 14:
                    if (o1.y(obj, Q) == 0) {
                        return false;
                    }
                    return true;
                case 15:
                    if (o1.x(obj, Q) == 0) {
                        return false;
                    }
                    return true;
                case 16:
                    if (o1.y(obj, Q) == 0) {
                        return false;
                    }
                    return true;
                case 17:
                    if (o1.A(obj, Q) == null) {
                        return false;
                    }
                    return true;
                default:
                    throw new IllegalArgumentException();
            }
            return !equals;
        }
        int X = X(i10);
        if ((o1.x(obj, X & 1048575) & (1 << (X >>> 20))) == 0) {
            return false;
        }
        return true;
    }

    private boolean y(Object obj, int i10, int i11, int i12) {
        if (this.f4217h) {
            return x(obj, i10);
        }
        if ((i11 & i12) != 0) {
            return true;
        }
        return false;
    }

    private static boolean z(Object obj, int i10, d1 d1Var) {
        return d1Var.c(o1.A(obj, Q(i10)));
    }

    @Override // androidx.datastore.preferences.protobuf.d1
    public void a(Object obj, Object obj2) {
        obj2.getClass();
        for (int i10 = 0; i10 < this.f4210a.length; i10 += 3) {
            L(obj, obj2, i10);
        }
        if (!this.f4217h) {
            f1.F(this.f4224o, obj, obj2);
            if (this.f4215f) {
                f1.D(this.f4225p, obj, obj2);
            }
        }
    }

    @Override // androidx.datastore.preferences.protobuf.d1
    public void b(Object obj) {
        int i10;
        int i11 = this.f4220k;
        while (true) {
            i10 = this.f4221l;
            if (i11 >= i10) {
                break;
            }
            long Q = Q(h0(this.f4219j[i11]));
            Object A = o1.A(obj, Q);
            if (A != null) {
                o1.O(obj, Q, this.f4226q.f(A));
            }
            i11++;
        }
        int length = this.f4219j.length;
        while (i10 < length) {
            this.f4223n.c(obj, this.f4219j[i10]);
            i10++;
        }
        this.f4224o.j(obj);
        if (this.f4215f) {
            this.f4225p.f(obj);
        }
    }

    @Override // androidx.datastore.preferences.protobuf.d1
    public final boolean c(Object obj) {
        int i10;
        int i11 = -1;
        int i12 = 0;
        for (int i13 = 0; i13 < this.f4220k; i13++) {
            int i14 = this.f4219j[i13];
            int P = P(i14);
            int h02 = h0(i14);
            if (!this.f4217h) {
                int i15 = this.f4210a[i14 + 2];
                int i16 = 1048575 & i15;
                i10 = 1 << (i15 >>> 20);
                if (i16 != i11) {
                    i12 = f4209s.getInt(obj, i16);
                    i11 = i16;
                }
            } else {
                i10 = 0;
            }
            if (E(h02) && !y(obj, i14, i12, i10)) {
                return false;
            }
            int g02 = g0(h02);
            if (g02 != 9 && g02 != 17) {
                if (g02 != 27) {
                    if (g02 != 60 && g02 != 68) {
                        if (g02 != 49) {
                            if (g02 == 50 && !B(obj, h02, i14)) {
                                return false;
                            }
                        }
                    } else if (D(obj, P, i14) && !z(obj, h02, r(i14))) {
                        return false;
                    }
                }
                if (!A(obj, h02, i14)) {
                    return false;
                }
            } else if (y(obj, i14, i12, i10) && !z(obj, h02, r(i14))) {
                return false;
            }
        }
        if (this.f4215f && !this.f4225p.c(obj).k()) {
            return false;
        }
        return true;
    }

    @Override // androidx.datastore.preferences.protobuf.d1
    public Object d() {
        return this.f4222m.a(this.f4214e);
    }

    @Override // androidx.datastore.preferences.protobuf.d1
    public int e(Object obj) {
        int i10;
        int f10;
        int length = this.f4210a.length;
        int i11 = 0;
        for (int i12 = 0; i12 < length; i12 += 3) {
            int h02 = h0(i12);
            int P = P(i12);
            long Q = Q(h02);
            int i13 = 37;
            switch (g0(h02)) {
                case 0:
                    i10 = i11 * 53;
                    f10 = y.f(Double.doubleToLongBits(o1.v(obj, Q)));
                    i11 = i10 + f10;
                    break;
                case 1:
                    i10 = i11 * 53;
                    f10 = Float.floatToIntBits(o1.w(obj, Q));
                    i11 = i10 + f10;
                    break;
                case 2:
                    i10 = i11 * 53;
                    f10 = y.f(o1.y(obj, Q));
                    i11 = i10 + f10;
                    break;
                case 3:
                    i10 = i11 * 53;
                    f10 = y.f(o1.y(obj, Q));
                    i11 = i10 + f10;
                    break;
                case 4:
                    i10 = i11 * 53;
                    f10 = o1.x(obj, Q);
                    i11 = i10 + f10;
                    break;
                case 5:
                    i10 = i11 * 53;
                    f10 = y.f(o1.y(obj, Q));
                    i11 = i10 + f10;
                    break;
                case 6:
                    i10 = i11 * 53;
                    f10 = o1.x(obj, Q);
                    i11 = i10 + f10;
                    break;
                case 7:
                    i10 = i11 * 53;
                    f10 = y.c(o1.p(obj, Q));
                    i11 = i10 + f10;
                    break;
                case 8:
                    i10 = i11 * 53;
                    f10 = ((String) o1.A(obj, Q)).hashCode();
                    i11 = i10 + f10;
                    break;
                case 9:
                    Object A = o1.A(obj, Q);
                    if (A != null) {
                        i13 = A.hashCode();
                    }
                    i11 = (i11 * 53) + i13;
                    break;
                case 10:
                    i10 = i11 * 53;
                    f10 = o1.A(obj, Q).hashCode();
                    i11 = i10 + f10;
                    break;
                case 11:
                    i10 = i11 * 53;
                    f10 = o1.x(obj, Q);
                    i11 = i10 + f10;
                    break;
                case 12:
                    i10 = i11 * 53;
                    f10 = o1.x(obj, Q);
                    i11 = i10 + f10;
                    break;
                case 13:
                    i10 = i11 * 53;
                    f10 = o1.x(obj, Q);
                    i11 = i10 + f10;
                    break;
                case 14:
                    i10 = i11 * 53;
                    f10 = y.f(o1.y(obj, Q));
                    i11 = i10 + f10;
                    break;
                case 15:
                    i10 = i11 * 53;
                    f10 = o1.x(obj, Q);
                    i11 = i10 + f10;
                    break;
                case 16:
                    i10 = i11 * 53;
                    f10 = y.f(o1.y(obj, Q));
                    i11 = i10 + f10;
                    break;
                case 17:
                    Object A2 = o1.A(obj, Q);
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
                    f10 = o1.A(obj, Q).hashCode();
                    i11 = i10 + f10;
                    break;
                case 50:
                    i10 = i11 * 53;
                    f10 = o1.A(obj, Q).hashCode();
                    i11 = i10 + f10;
                    break;
                case ChatViewRecyclerTypes.MEDIA_ATTACHMENT_MOSAIC_VISUAL_PLACEHOLDER /* 51 */:
                    if (D(obj, P, i12)) {
                        i10 = i11 * 53;
                        f10 = y.f(Double.doubleToLongBits(S(obj, Q)));
                        i11 = i10 + f10;
                        break;
                    } else {
                        break;
                    }
                case ChatViewRecyclerTypes.REFERRAL /* 52 */:
                    if (D(obj, P, i12)) {
                        i10 = i11 * 53;
                        f10 = Float.floatToIntBits(T(obj, Q));
                        i11 = i10 + f10;
                        break;
                    } else {
                        break;
                    }
                case ChatViewRecyclerTypes.GUILD_PROFILE_INVITE /* 53 */:
                    if (D(obj, P, i12)) {
                        i10 = i11 * 53;
                        f10 = y.f(V(obj, Q));
                        i11 = i10 + f10;
                        break;
                    } else {
                        break;
                    }
                case ChatViewRecyclerTypes.APP_MESSAGE_EMBED /* 54 */:
                    if (D(obj, P, i12)) {
                        i10 = i11 * 53;
                        f10 = y.f(V(obj, Q));
                        i11 = i10 + f10;
                        break;
                    } else {
                        break;
                    }
                case ChatViewRecyclerTypes.ACTIVITY_RICH_PRESENCE_INVITE_EMBED /* 55 */:
                    if (D(obj, P, i12)) {
                        i10 = i11 * 53;
                        f10 = U(obj, Q);
                        i11 = i10 + f10;
                        break;
                    } else {
                        break;
                    }
                case ChatViewRecyclerTypes.SHARED_CUSTOM_THEME_EMBED /* 56 */:
                    if (D(obj, P, i12)) {
                        i10 = i11 * 53;
                        f10 = y.f(V(obj, Q));
                        i11 = i10 + f10;
                        break;
                    } else {
                        break;
                    }
                case ChatViewRecyclerTypes.PREMIUM_GROUP_INVITE /* 57 */:
                    if (D(obj, P, i12)) {
                        i10 = i11 * 53;
                        f10 = U(obj, Q);
                        i11 = i10 + f10;
                        break;
                    } else {
                        break;
                    }
                case 58:
                    if (D(obj, P, i12)) {
                        i10 = i11 * 53;
                        f10 = y.c(R(obj, Q));
                        i11 = i10 + f10;
                        break;
                    } else {
                        break;
                    }
                case 59:
                    if (D(obj, P, i12)) {
                        i10 = i11 * 53;
                        f10 = ((String) o1.A(obj, Q)).hashCode();
                        i11 = i10 + f10;
                        break;
                    } else {
                        break;
                    }
                case 60:
                    if (D(obj, P, i12)) {
                        i10 = i11 * 53;
                        f10 = o1.A(obj, Q).hashCode();
                        i11 = i10 + f10;
                        break;
                    } else {
                        break;
                    }
                case 61:
                    if (D(obj, P, i12)) {
                        i10 = i11 * 53;
                        f10 = o1.A(obj, Q).hashCode();
                        i11 = i10 + f10;
                        break;
                    } else {
                        break;
                    }
                case 62:
                    if (D(obj, P, i12)) {
                        i10 = i11 * 53;
                        f10 = U(obj, Q);
                        i11 = i10 + f10;
                        break;
                    } else {
                        break;
                    }
                case NotificationData.MESSAGE_TYPE_EMOJI_ADDED /* 63 */:
                    if (D(obj, P, i12)) {
                        i10 = i11 * 53;
                        f10 = U(obj, Q);
                        i11 = i10 + f10;
                        break;
                    } else {
                        break;
                    }
                case 64:
                    if (D(obj, P, i12)) {
                        i10 = i11 * 53;
                        f10 = U(obj, Q);
                        i11 = i10 + f10;
                        break;
                    } else {
                        break;
                    }
                case 65:
                    if (D(obj, P, i12)) {
                        i10 = i11 * 53;
                        f10 = y.f(V(obj, Q));
                        i11 = i10 + f10;
                        break;
                    } else {
                        break;
                    }
                case 66:
                    if (D(obj, P, i12)) {
                        i10 = i11 * 53;
                        f10 = U(obj, Q);
                        i11 = i10 + f10;
                        break;
                    } else {
                        break;
                    }
                case 67:
                    if (D(obj, P, i12)) {
                        i10 = i11 * 53;
                        f10 = y.f(V(obj, Q));
                        i11 = i10 + f10;
                        break;
                    } else {
                        break;
                    }
                case 68:
                    if (D(obj, P, i12)) {
                        i10 = i11 * 53;
                        f10 = o1.A(obj, Q).hashCode();
                        i11 = i10 + f10;
                        break;
                    } else {
                        break;
                    }
            }
        }
        int hashCode = (i11 * 53) + this.f4224o.g(obj).hashCode();
        if (this.f4215f) {
            return (hashCode * 53) + this.f4225p.c(obj).hashCode();
        }
        return hashCode;
    }

    @Override // androidx.datastore.preferences.protobuf.d1
    public boolean f(Object obj, Object obj2) {
        int length = this.f4210a.length;
        for (int i10 = 0; i10 < length; i10 += 3) {
            if (!m(obj, obj2, i10)) {
                return false;
            }
        }
        if (!this.f4224o.g(obj).equals(this.f4224o.g(obj2))) {
            return false;
        }
        if (this.f4215f) {
            return this.f4225p.c(obj).equals(this.f4225p.c(obj2));
        }
        return true;
    }

    @Override // androidx.datastore.preferences.protobuf.d1
    public void g(Object obj, c1 c1Var, o oVar) {
        oVar.getClass();
        H(this.f4224o, this.f4225p, obj, c1Var, oVar);
    }

    @Override // androidx.datastore.preferences.protobuf.d1
    public int h(Object obj) {
        if (this.f4217h) {
            return t(obj);
        }
        return s(obj);
    }

    @Override // androidx.datastore.preferences.protobuf.d1
    public void i(Object obj, r1 r1Var) {
        if (r1Var.y() == r1.a.DESCENDING) {
            k0(obj, r1Var);
        } else if (this.f4217h) {
            j0(obj, r1Var);
        } else {
            i0(obj, r1Var);
        }
    }
}

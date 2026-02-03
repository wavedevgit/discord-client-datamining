package androidx.datastore.preferences.protobuf;

import androidx.datastore.preferences.protobuf.q1;
import com.discord.misc.utilities.chat_view_types.ChatViewRecyclerTypes;
import java.util.ArrayList;
import java.util.Iterator;
import java.util.List;
import java.util.Map;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
final class s {

    /* renamed from: d  reason: collision with root package name */
    private static final s f3789d = new s(true);

    /* renamed from: a  reason: collision with root package name */
    private final g1 f3790a;

    /* renamed from: b  reason: collision with root package name */
    private boolean f3791b;

    /* renamed from: c  reason: collision with root package name */
    private boolean f3792c;

    /* JADX INFO: Access modifiers changed from: package-private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    public static /* synthetic */ class a {

        /* renamed from: a  reason: collision with root package name */
        static final /* synthetic */ int[] f3793a;

        /* renamed from: b  reason: collision with root package name */
        static final /* synthetic */ int[] f3794b;

        static {
            int[] iArr = new int[q1.b.values().length];
            f3794b = iArr;
            try {
                iArr[q1.b.f3739i.ordinal()] = 1;
            } catch (NoSuchFieldError unused) {
            }
            try {
                f3794b[q1.b.f3740o.ordinal()] = 2;
            } catch (NoSuchFieldError unused2) {
            }
            try {
                f3794b[q1.b.f3741p.ordinal()] = 3;
            } catch (NoSuchFieldError unused3) {
            }
            try {
                f3794b[q1.b.f3742q.ordinal()] = 4;
            } catch (NoSuchFieldError unused4) {
            }
            try {
                f3794b[q1.b.f3743r.ordinal()] = 5;
            } catch (NoSuchFieldError unused5) {
            }
            try {
                f3794b[q1.b.f3744s.ordinal()] = 6;
            } catch (NoSuchFieldError unused6) {
            }
            try {
                f3794b[q1.b.f3745t.ordinal()] = 7;
            } catch (NoSuchFieldError unused7) {
            }
            try {
                f3794b[q1.b.f3746u.ordinal()] = 8;
            } catch (NoSuchFieldError unused8) {
            }
            try {
                f3794b[q1.b.f3748w.ordinal()] = 9;
            } catch (NoSuchFieldError unused9) {
            }
            try {
                f3794b[q1.b.f3749x.ordinal()] = 10;
            } catch (NoSuchFieldError unused10) {
            }
            try {
                f3794b[q1.b.f3747v.ordinal()] = 11;
            } catch (NoSuchFieldError unused11) {
            }
            try {
                f3794b[q1.b.f3750y.ordinal()] = 12;
            } catch (NoSuchFieldError unused12) {
            }
            try {
                f3794b[q1.b.f3751z.ordinal()] = 13;
            } catch (NoSuchFieldError unused13) {
            }
            try {
                f3794b[q1.b.B.ordinal()] = 14;
            } catch (NoSuchFieldError unused14) {
            }
            try {
                f3794b[q1.b.C.ordinal()] = 15;
            } catch (NoSuchFieldError unused15) {
            }
            try {
                f3794b[q1.b.D.ordinal()] = 16;
            } catch (NoSuchFieldError unused16) {
            }
            try {
                f3794b[q1.b.E.ordinal()] = 17;
            } catch (NoSuchFieldError unused17) {
            }
            try {
                f3794b[q1.b.A.ordinal()] = 18;
            } catch (NoSuchFieldError unused18) {
            }
            int[] iArr2 = new int[q1.c.values().length];
            f3793a = iArr2;
            try {
                iArr2[q1.c.INT.ordinal()] = 1;
            } catch (NoSuchFieldError unused19) {
            }
            try {
                f3793a[q1.c.LONG.ordinal()] = 2;
            } catch (NoSuchFieldError unused20) {
            }
            try {
                f3793a[q1.c.FLOAT.ordinal()] = 3;
            } catch (NoSuchFieldError unused21) {
            }
            try {
                f3793a[q1.c.DOUBLE.ordinal()] = 4;
            } catch (NoSuchFieldError unused22) {
            }
            try {
                f3793a[q1.c.BOOLEAN.ordinal()] = 5;
            } catch (NoSuchFieldError unused23) {
            }
            try {
                f3793a[q1.c.STRING.ordinal()] = 6;
            } catch (NoSuchFieldError unused24) {
            }
            try {
                f3793a[q1.c.BYTE_STRING.ordinal()] = 7;
            } catch (NoSuchFieldError unused25) {
            }
            try {
                f3793a[q1.c.ENUM.ordinal()] = 8;
            } catch (NoSuchFieldError unused26) {
            }
            try {
                f3793a[q1.c.MESSAGE.ordinal()] = 9;
            } catch (NoSuchFieldError unused27) {
            }
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    public interface b extends Comparable {
        q1.b getLiteType();

        int getNumber();

        boolean isPacked();

        boolean isRepeated();
    }

    private s() {
        this.f3790a = g1.q(16);
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public static int b(q1.b bVar, int i10, Object obj) {
        int P = j.P(i10);
        if (bVar == q1.b.f3748w) {
            P *= 2;
        }
        return P + c(bVar, obj);
    }

    static int c(q1.b bVar, Object obj) {
        switch (a.f3794b[bVar.ordinal()]) {
            case 1:
                return j.i(((Double) obj).doubleValue());
            case 2:
                return j.q(((Float) obj).floatValue());
            case 3:
                return j.x(((Long) obj).longValue());
            case 4:
                return j.T(((Long) obj).longValue());
            case 5:
                return j.v(((Integer) obj).intValue());
            case 6:
                return j.o(((Long) obj).longValue());
            case 7:
                return j.m(((Integer) obj).intValue());
            case 8:
                return j.d(((Boolean) obj).booleanValue());
            case 9:
                return j.s((o0) obj);
            case 10:
                return j.A((o0) obj);
            case 11:
                if (obj instanceof g) {
                    return j.g((g) obj);
                }
                return j.O((String) obj);
            case 12:
                if (obj instanceof g) {
                    return j.g((g) obj);
                }
                return j.e((byte[]) obj);
            case 13:
                return j.R(((Integer) obj).intValue());
            case 14:
                return j.G(((Integer) obj).intValue());
            case 15:
                return j.I(((Long) obj).longValue());
            case 16:
                return j.K(((Integer) obj).intValue());
            case 17:
                return j.M(((Long) obj).longValue());
            case ChatViewRecyclerTypes.EPHEMERAL_INDICATION /* 18 */:
                return j.k(((Integer) obj).intValue());
            default:
                throw new RuntimeException("There is no way to get here, but the compiler thinks otherwise.");
        }
    }

    public static int d(b bVar, Object obj) {
        q1.b liteType = bVar.getLiteType();
        int number = bVar.getNumber();
        if (bVar.isRepeated()) {
            int i10 = 0;
            if (bVar.isPacked()) {
                for (Object obj2 : (List) obj) {
                    i10 += c(liteType, obj2);
                }
                return j.P(number) + i10 + j.E(i10);
            }
            for (Object obj3 : (List) obj) {
                i10 += b(liteType, number, obj3);
            }
            return i10;
        }
        return b(liteType, number, obj);
    }

    private int g(Map.Entry entry) {
        android.support.v4.media.session.b.a(entry.getKey());
        entry.getValue();
        throw null;
    }

    static int i(q1.b bVar, boolean z10) {
        if (z10) {
            return 2;
        }
        return bVar.d();
    }

    private static boolean l(Map.Entry entry) {
        android.support.v4.media.session.b.a(entry.getKey());
        throw null;
    }

    private static boolean m(q1.b bVar, Object obj) {
        y.a(obj);
        switch (a.f3793a[bVar.a().ordinal()]) {
            case 1:
                return obj instanceof Integer;
            case 2:
                return obj instanceof Long;
            case 3:
                return obj instanceof Float;
            case 4:
                return obj instanceof Double;
            case 5:
                return obj instanceof Boolean;
            case 6:
                return obj instanceof String;
            case 7:
                if ((obj instanceof g) || (obj instanceof byte[])) {
                    return true;
                }
                return false;
            case 8:
                if (obj instanceof Integer) {
                    return true;
                }
                return false;
            case 9:
                if (obj instanceof o0) {
                    return true;
                }
                return false;
            default:
                return false;
        }
    }

    private void q(Map.Entry entry) {
        android.support.v4.media.session.b.a(entry.getKey());
        entry.getValue();
        throw null;
    }

    public static s r() {
        return new s();
    }

    private void t(q1.b bVar, Object obj) {
        if (m(bVar, obj)) {
            return;
        }
        throw new IllegalArgumentException("Wrong object type used with protocol message reflection.");
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public static void u(j jVar, q1.b bVar, int i10, Object obj) {
        if (bVar == q1.b.f3748w) {
            jVar.r0(i10, (o0) obj);
            return;
        }
        jVar.N0(i10, i(bVar, false));
        v(jVar, bVar, obj);
    }

    static void v(j jVar, q1.b bVar, Object obj) {
        switch (a.f3794b[bVar.ordinal()]) {
            case 1:
                jVar.i0(((Double) obj).doubleValue());
                return;
            case 2:
                jVar.q0(((Float) obj).floatValue());
                return;
            case 3:
                jVar.y0(((Long) obj).longValue());
                return;
            case 4:
                jVar.R0(((Long) obj).longValue());
                return;
            case 5:
                jVar.w0(((Integer) obj).intValue());
                return;
            case 6:
                jVar.o0(((Long) obj).longValue());
                return;
            case 7:
                jVar.m0(((Integer) obj).intValue());
                return;
            case 8:
                jVar.c0(((Boolean) obj).booleanValue());
                return;
            case 9:
                jVar.t0((o0) obj);
                return;
            case 10:
                jVar.A0((o0) obj);
                return;
            case 11:
                if (obj instanceof g) {
                    jVar.g0((g) obj);
                    return;
                } else {
                    jVar.M0((String) obj);
                    return;
                }
            case 12:
                if (obj instanceof g) {
                    jVar.g0((g) obj);
                    return;
                } else {
                    jVar.d0((byte[]) obj);
                    return;
                }
            case 13:
                jVar.P0(((Integer) obj).intValue());
                return;
            case 14:
                jVar.E0(((Integer) obj).intValue());
                return;
            case 15:
                jVar.G0(((Long) obj).longValue());
                return;
            case 16:
                jVar.I0(((Integer) obj).intValue());
                return;
            case 17:
                jVar.K0(((Long) obj).longValue());
                return;
            case ChatViewRecyclerTypes.EPHEMERAL_INDICATION /* 18 */:
                jVar.k0(((Integer) obj).intValue());
                return;
            default:
                return;
        }
    }

    /* renamed from: a */
    public s clone() {
        s r10 = r();
        for (int i10 = 0; i10 < this.f3790a.k(); i10++) {
            Map.Entry j10 = this.f3790a.j(i10);
            android.support.v4.media.session.b.a(j10.getKey());
            r10.s(null, j10.getValue());
        }
        for (Map.Entry entry : this.f3790a.m()) {
            android.support.v4.media.session.b.a(entry.getKey());
            r10.s(null, entry.getValue());
        }
        r10.f3792c = this.f3792c;
        return r10;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public Iterator e() {
        if (this.f3792c) {
            return new b0(this.f3790a.h().iterator());
        }
        return this.f3790a.h().iterator();
    }

    public boolean equals(Object obj) {
        if (this == obj) {
            return true;
        }
        if (!(obj instanceof s)) {
            return false;
        }
        return this.f3790a.equals(((s) obj).f3790a);
    }

    public int f() {
        int i10 = 0;
        for (int i11 = 0; i11 < this.f3790a.k(); i11++) {
            i10 += g(this.f3790a.j(i11));
        }
        for (Map.Entry entry : this.f3790a.m()) {
            i10 += g(entry);
        }
        return i10;
    }

    public int h() {
        int i10 = 0;
        for (int i11 = 0; i11 < this.f3790a.k(); i11++) {
            Map.Entry j10 = this.f3790a.j(i11);
            android.support.v4.media.session.b.a(j10.getKey());
            i10 += d(null, j10.getValue());
        }
        for (Map.Entry entry : this.f3790a.m()) {
            android.support.v4.media.session.b.a(entry.getKey());
            i10 += d(null, entry.getValue());
        }
        return i10;
    }

    public int hashCode() {
        return this.f3790a.hashCode();
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public boolean j() {
        return this.f3790a.isEmpty();
    }

    public boolean k() {
        for (int i10 = 0; i10 < this.f3790a.k(); i10++) {
            if (!l(this.f3790a.j(i10))) {
                return false;
            }
        }
        for (Map.Entry entry : this.f3790a.m()) {
            if (!l(entry)) {
                return false;
            }
        }
        return true;
    }

    public Iterator n() {
        if (this.f3792c) {
            return new b0(this.f3790a.entrySet().iterator());
        }
        return this.f3790a.entrySet().iterator();
    }

    public void o() {
        if (this.f3791b) {
            return;
        }
        this.f3790a.p();
        this.f3791b = true;
    }

    public void p(s sVar) {
        for (int i10 = 0; i10 < sVar.f3790a.k(); i10++) {
            q(sVar.f3790a.j(i10));
        }
        for (Map.Entry entry : sVar.f3790a.m()) {
            q(entry);
        }
    }

    public void s(b bVar, Object obj) {
        if (bVar.isRepeated()) {
            if (obj instanceof List) {
                ArrayList<Object> arrayList = new ArrayList();
                arrayList.addAll((List) obj);
                for (Object obj2 : arrayList) {
                    t(bVar.getLiteType(), obj2);
                }
                obj = arrayList;
            } else {
                throw new IllegalArgumentException("Wrong object type used with protocol message reflection.");
            }
        } else {
            t(bVar.getLiteType(), obj);
        }
        this.f3790a.r(bVar, obj);
    }

    private s(boolean z10) {
        this(g1.q(0));
        o();
    }

    private s(g1 g1Var) {
        this.f3790a = g1Var;
        o();
    }
}

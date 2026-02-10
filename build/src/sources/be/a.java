package be;

import ae.b;
import ae.g;
import ae.k;
import ae.l;
import android.text.Layout;
import android.text.SpannableString;
import android.text.SpannableStringBuilder;
import android.text.style.ForegroundColorSpan;
import android.text.style.StyleSpan;
import android.text.style.UnderlineSpan;
import androidx.recyclerview.widget.h;
import com.discord.chat.presentation.message.view.MediaImageViewKt;
import com.discord.media.engine.MediaEngine;
import com.discord.misc.utilities.chat_view_types.ChatViewRecyclerTypes;
import java.util.ArrayList;
import java.util.Collections;
import java.util.List;
import kotlin.jvm.internal.ByteCompanionObject;
import kotlin.jvm.internal.LongCompanionObject;
import oe.h0;
import oe.y;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class a extends e {

    /* renamed from: h  reason: collision with root package name */
    private final int f6505h;

    /* renamed from: i  reason: collision with root package name */
    private final int f6506i;

    /* renamed from: j  reason: collision with root package name */
    private final int f6507j;

    /* renamed from: k  reason: collision with root package name */
    private final long f6508k;

    /* renamed from: n  reason: collision with root package name */
    private List f6511n;

    /* renamed from: o  reason: collision with root package name */
    private List f6512o;

    /* renamed from: p  reason: collision with root package name */
    private int f6513p;

    /* renamed from: q  reason: collision with root package name */
    private int f6514q;

    /* renamed from: r  reason: collision with root package name */
    private boolean f6515r;

    /* renamed from: s  reason: collision with root package name */
    private boolean f6516s;

    /* renamed from: t  reason: collision with root package name */
    private byte f6517t;

    /* renamed from: u  reason: collision with root package name */
    private byte f6518u;

    /* renamed from: w  reason: collision with root package name */
    private boolean f6520w;

    /* renamed from: x  reason: collision with root package name */
    private long f6521x;

    /* renamed from: y  reason: collision with root package name */
    private static final int[] f6502y = {11, 1, 3, 12, 14, 5, 7, 9};

    /* renamed from: z  reason: collision with root package name */
    private static final int[] f6503z = {0, 4, 8, 12, 16, 20, 24, 28};
    private static final int[] A = {-1, -16711936, -16776961, -16711681, -65536, -256, -65281};
    private static final int[] B = {32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 225, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 58, 59, 60, 61, 62, 63, 64, 65, 66, 67, 68, 69, 70, 71, 72, 73, 74, 75, 76, 77, 78, 79, 80, 81, 82, 83, 84, 85, 86, 87, 88, 89, 90, 91, 233, 93, 237, 243, h.DEFAULT_SWIPE_ANIMATION_DURATION, 97, 98, 99, 100, 101, 102, 103, 104, 105, 106, 107, 108, 109, 110, 111, 112, 113, MediaEngine.MAX_SUPPORTED_PROTOCOL_VERSION, 115, 116, 117, 118, 119, 120, 121, 122, 231, 247, 209, 241, 9632};
    private static final int[] C = {174, 176, 189, 191, 8482, 162, 163, 9834, 224, 32, 232, 226, 234, 238, 244, 251};
    private static final int[] D = {193, 201, 211, 218, 220, 252, 8216, 161, 42, 39, 8212, 169, 8480, 8226, 8220, 8221, 192, 194, 199, h.DEFAULT_DRAG_ANIMATION_DURATION, 202, 203, 235, 206, 207, 239, MediaImageViewKt.OBSCURED_IMAGE_MIN_HEIGHT, 217, 249, 219, 171, 187};
    private static final int[] E = {195, 227, 205, 204, 236, 210, 242, 213, 245, 123, 125, 92, 94, 95, 124, 126, 196, 228, 214, 246, 223, 165, 164, 9474, 197, 229, 216, 248, 9484, 9488, 9492, 9496};
    private static final boolean[] F = {false, true, true, false, true, false, false, true, true, false, false, true, false, true, true, false, true, false, false, true, false, true, true, false, false, true, true, false, true, false, false, true, true, false, false, true, false, true, true, false, false, true, true, false, true, false, false, true, false, true, true, false, true, false, false, true, true, false, false, true, false, true, true, false, true, false, false, true, false, true, true, false, false, true, true, false, true, false, false, true, false, true, true, false, true, false, false, true, true, false, false, true, false, true, true, false, false, true, true, false, true, false, false, true, true, false, false, true, false, true, true, false, true, false, false, true, false, true, true, false, false, true, true, false, true, false, false, true, true, false, false, true, false, true, true, false, false, true, true, false, true, false, false, true, false, true, true, false, true, false, false, true, true, false, false, true, false, true, true, false, false, true, true, false, true, false, false, true, true, false, false, true, false, true, true, false, true, false, false, true, false, true, true, false, false, true, true, false, true, false, false, true, false, true, true, false, true, false, false, true, true, false, false, true, false, true, true, false, true, false, false, true, false, true, true, false, false, true, true, false, true, false, false, true, true, false, false, true, false, true, true, false, false, true, true, false, true, false, false, true, false, true, true, false, true, false, false, true, true, false, false, true, false, true, true, false};

    /* renamed from: g  reason: collision with root package name */
    private final h0 f6504g = new h0();

    /* renamed from: l  reason: collision with root package name */
    private final ArrayList f6509l = new ArrayList();

    /* renamed from: m  reason: collision with root package name */
    private C0132a f6510m = new C0132a(0, 4);

    /* renamed from: v  reason: collision with root package name */
    private int f6519v = 0;

    /* JADX INFO: Access modifiers changed from: private */
    /* renamed from: be.a$a  reason: collision with other inner class name */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    public static final class C0132a {

        /* renamed from: a  reason: collision with root package name */
        private final List f6522a = new ArrayList();

        /* renamed from: b  reason: collision with root package name */
        private final List f6523b = new ArrayList();

        /* renamed from: c  reason: collision with root package name */
        private final StringBuilder f6524c = new StringBuilder();

        /* renamed from: d  reason: collision with root package name */
        private int f6525d;

        /* renamed from: e  reason: collision with root package name */
        private int f6526e;

        /* renamed from: f  reason: collision with root package name */
        private int f6527f;

        /* renamed from: g  reason: collision with root package name */
        private int f6528g;

        /* renamed from: h  reason: collision with root package name */
        private int f6529h;

        /* JADX INFO: Access modifiers changed from: private */
        /* renamed from: be.a$a$a  reason: collision with other inner class name */
        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
        public static class C0133a {

            /* renamed from: a  reason: collision with root package name */
            public final int f6530a;

            /* renamed from: b  reason: collision with root package name */
            public final boolean f6531b;

            /* renamed from: c  reason: collision with root package name */
            public int f6532c;

            public C0133a(int i10, boolean z10, int i11) {
                this.f6530a = i10;
                this.f6531b = z10;
                this.f6532c = i11;
            }
        }

        public C0132a(int i10, int i11) {
            j(i10);
            this.f6529h = i11;
        }

        private SpannableString h() {
            int i10;
            boolean z10;
            SpannableStringBuilder spannableStringBuilder = new SpannableStringBuilder(this.f6524c);
            int length = spannableStringBuilder.length();
            int i11 = -1;
            int i12 = -1;
            int i13 = -1;
            int i14 = -1;
            int i15 = 0;
            int i16 = 0;
            boolean z11 = false;
            while (i15 < this.f6522a.size()) {
                C0133a c0133a = (C0133a) this.f6522a.get(i15);
                boolean z12 = c0133a.f6531b;
                int i17 = c0133a.f6530a;
                if (i17 != 8) {
                    if (i17 == 7) {
                        z10 = true;
                    } else {
                        z10 = false;
                    }
                    if (i17 != 7) {
                        i14 = a.A[i17];
                    }
                    z11 = z10;
                }
                int i18 = c0133a.f6532c;
                i15++;
                if (i15 < this.f6522a.size()) {
                    i10 = ((C0133a) this.f6522a.get(i15)).f6532c;
                } else {
                    i10 = length;
                }
                if (i18 != i10) {
                    if (i11 != -1 && !z12) {
                        q(spannableStringBuilder, i11, i18);
                        i11 = -1;
                    } else if (i11 == -1 && z12) {
                        i11 = i18;
                    }
                    if (i12 != -1 && !z11) {
                        o(spannableStringBuilder, i12, i18);
                        i12 = -1;
                    } else if (i12 == -1 && z11) {
                        i12 = i18;
                    }
                    if (i14 != i13) {
                        n(spannableStringBuilder, i16, i18, i13);
                        i13 = i14;
                        i16 = i18;
                    }
                }
            }
            if (i11 != -1 && i11 != length) {
                q(spannableStringBuilder, i11, length);
            }
            if (i12 != -1 && i12 != length) {
                o(spannableStringBuilder, i12, length);
            }
            if (i16 != length) {
                n(spannableStringBuilder, i16, length, i13);
            }
            return new SpannableString(spannableStringBuilder);
        }

        private static void n(SpannableStringBuilder spannableStringBuilder, int i10, int i11, int i12) {
            if (i12 == -1) {
                return;
            }
            spannableStringBuilder.setSpan(new ForegroundColorSpan(i12), i10, i11, 33);
        }

        private static void o(SpannableStringBuilder spannableStringBuilder, int i10, int i11) {
            spannableStringBuilder.setSpan(new StyleSpan(2), i10, i11, 33);
        }

        private static void q(SpannableStringBuilder spannableStringBuilder, int i10, int i11) {
            spannableStringBuilder.setSpan(new UnderlineSpan(), i10, i11, 33);
        }

        public void e(char c10) {
            if (this.f6524c.length() < 32) {
                this.f6524c.append(c10);
            }
        }

        public void f() {
            int length = this.f6524c.length();
            if (length > 0) {
                this.f6524c.delete(length - 1, length);
                for (int size = this.f6522a.size() - 1; size >= 0; size--) {
                    C0133a c0133a = (C0133a) this.f6522a.get(size);
                    int i10 = c0133a.f6532c;
                    if (i10 == length) {
                        c0133a.f6532c = i10 - 1;
                    } else {
                        return;
                    }
                }
            }
        }

        public ae.b g(int i10) {
            float f10;
            SpannableStringBuilder spannableStringBuilder = new SpannableStringBuilder();
            for (int i11 = 0; i11 < this.f6523b.size(); i11++) {
                spannableStringBuilder.append((CharSequence) this.f6523b.get(i11));
                spannableStringBuilder.append('\n');
            }
            spannableStringBuilder.append((CharSequence) h());
            if (spannableStringBuilder.length() == 0) {
                return null;
            }
            int i12 = this.f6526e + this.f6527f;
            int length = (32 - i12) - spannableStringBuilder.length();
            int i13 = i12 - length;
            if (i10 == Integer.MIN_VALUE) {
                if (this.f6528g == 2 && (Math.abs(i13) < 3 || length < 0)) {
                    i10 = 1;
                } else if (this.f6528g == 2 && i13 > 0) {
                    i10 = 2;
                } else {
                    i10 = 0;
                }
            }
            if (i10 != 1) {
                if (i10 == 2) {
                    i12 = 32 - length;
                }
                f10 = ((i12 / 32.0f) * 0.8f) + 0.1f;
            } else {
                f10 = 0.5f;
            }
            int i14 = this.f6525d;
            if (i14 > 7) {
                i14 -= 17;
            } else if (this.f6528g == 1) {
                i14 -= this.f6529h - 1;
            }
            return new b.C0009b().o(spannableStringBuilder).p(Layout.Alignment.ALIGN_NORMAL).h(i14, 1).k(f10).l(i10).a();
        }

        public boolean i() {
            if (this.f6522a.isEmpty() && this.f6523b.isEmpty() && this.f6524c.length() == 0) {
                return true;
            }
            return false;
        }

        public void j(int i10) {
            this.f6528g = i10;
            this.f6522a.clear();
            this.f6523b.clear();
            this.f6524c.setLength(0);
            this.f6525d = 15;
            this.f6526e = 0;
            this.f6527f = 0;
        }

        public void k() {
            this.f6523b.add(h());
            this.f6524c.setLength(0);
            this.f6522a.clear();
            int min = Math.min(this.f6529h, this.f6525d);
            while (this.f6523b.size() >= min) {
                this.f6523b.remove(0);
            }
        }

        public void l(int i10) {
            this.f6528g = i10;
        }

        public void m(int i10) {
            this.f6529h = i10;
        }

        public void p(int i10, boolean z10) {
            this.f6522a.add(new C0133a(i10, z10, this.f6524c.length()));
        }
    }

    public a(String str, int i10, long j10) {
        long j11;
        int i11;
        if (j10 > 0) {
            j11 = j10 * 1000;
        } else {
            j11 = -9223372036854775807L;
        }
        this.f6508k = j11;
        if ("application/x-mp4-cea-608".equals(str)) {
            i11 = 2;
        } else {
            i11 = 3;
        }
        this.f6505h = i11;
        if (i10 != 1) {
            if (i10 != 2) {
                if (i10 != 3) {
                    if (i10 != 4) {
                        y.i("Cea608Decoder", "Invalid channel. Defaulting to CC1.");
                        this.f6507j = 0;
                        this.f6506i = 0;
                    } else {
                        this.f6507j = 1;
                        this.f6506i = 1;
                    }
                } else {
                    this.f6507j = 0;
                    this.f6506i = 1;
                }
            } else {
                this.f6507j = 1;
                this.f6506i = 0;
            }
        } else {
            this.f6507j = 0;
            this.f6506i = 0;
        }
        M(0);
        L();
        this.f6520w = true;
        this.f6521x = -9223372036854775807L;
    }

    private static boolean A(byte b10, byte b11) {
        if ((b10 & 246) == 18 && (b11 & 224) == 32) {
            return true;
        }
        return false;
    }

    private static boolean B(byte b10, byte b11) {
        if ((b10 & 247) == 17 && (b11 & 240) == 32) {
            return true;
        }
        return false;
    }

    private static boolean C(byte b10, byte b11) {
        if ((b10 & 246) == 20 && (b11 & 240) == 32) {
            return true;
        }
        return false;
    }

    private static boolean D(byte b10, byte b11) {
        if ((b10 & 240) == 16 && (b11 & 192) == 64) {
            return true;
        }
        return false;
    }

    private static boolean E(byte b10) {
        if ((b10 & 240) == 16) {
            return true;
        }
        return false;
    }

    private boolean F(boolean z10, byte b10, byte b11) {
        if (z10 && E(b10)) {
            if (this.f6516s && this.f6517t == b10 && this.f6518u == b11) {
                this.f6516s = false;
                return true;
            }
            this.f6516s = true;
            this.f6517t = b10;
            this.f6518u = b11;
        } else {
            this.f6516s = false;
        }
        return false;
    }

    private static boolean G(byte b10) {
        if ((b10 & 246) == 20) {
            return true;
        }
        return false;
    }

    private static boolean H(byte b10, byte b11) {
        if ((b10 & 247) == 17 && (b11 & 240) == 48) {
            return true;
        }
        return false;
    }

    private static boolean I(byte b10, byte b11) {
        if ((b10 & 247) == 23 && b11 >= 33 && b11 <= 35) {
            return true;
        }
        return false;
    }

    private static boolean J(byte b10) {
        if (1 <= b10 && b10 <= 15) {
            return true;
        }
        return false;
    }

    private void K(byte b10, byte b11) {
        if (J(b10)) {
            this.f6520w = false;
        } else if (G(b10)) {
            if (b11 != 32 && b11 != 47) {
                switch (b11) {
                    case ChatViewRecyclerTypes.POLL_TEXT_AND_IMAGE /* 37 */:
                    case ChatViewRecyclerTypes.POLL_IMAGE_ONLY /* 38 */:
                    case ChatViewRecyclerTypes.SAFETY_SYSTEM_NOTIFICATION /* 39 */:
                        break;
                    default:
                        switch (b11) {
                            case 41:
                                break;
                            case 42:
                            case ChatViewRecyclerTypes.FORWARD_HEADER /* 43 */:
                                this.f6520w = false;
                                return;
                            default:
                                return;
                        }
                }
            }
            this.f6520w = true;
        }
    }

    private void L() {
        this.f6510m.j(this.f6513p);
        this.f6509l.clear();
        this.f6509l.add(this.f6510m);
    }

    private void M(int i10) {
        int i11 = this.f6513p;
        if (i11 != i10) {
            this.f6513p = i10;
            if (i10 == 3) {
                for (int i12 = 0; i12 < this.f6509l.size(); i12++) {
                    ((C0132a) this.f6509l.get(i12)).l(i10);
                }
                return;
            }
            L();
            if (i11 != 3 && i10 != 1 && i10 != 0) {
                return;
            }
            this.f6511n = Collections.EMPTY_LIST;
        }
    }

    private void N(int i10) {
        this.f6514q = i10;
        this.f6510m.m(i10);
    }

    private boolean O() {
        if (this.f6508k == -9223372036854775807L || this.f6521x == -9223372036854775807L || j() - this.f6521x < this.f6508k) {
            return false;
        }
        return true;
    }

    private boolean P(byte b10) {
        if (z(b10)) {
            this.f6519v = q(b10);
        }
        if (this.f6519v == this.f6507j) {
            return true;
        }
        return false;
    }

    private static char p(byte b10) {
        return (char) B[(b10 & ByteCompanionObject.MAX_VALUE) - 32];
    }

    private static int q(byte b10) {
        return (b10 >> 3) & 1;
    }

    private List r() {
        int size = this.f6509l.size();
        ArrayList arrayList = new ArrayList(size);
        int i10 = 2;
        for (int i11 = 0; i11 < size; i11++) {
            ae.b g10 = ((C0132a) this.f6509l.get(i11)).g(Integer.MIN_VALUE);
            arrayList.add(g10);
            if (g10 != null) {
                i10 = Math.min(i10, g10.f714t);
            }
        }
        ArrayList arrayList2 = new ArrayList(size);
        for (int i12 = 0; i12 < size; i12++) {
            ae.b bVar = (ae.b) arrayList.get(i12);
            if (bVar != null) {
                if (bVar.f714t != i10) {
                    bVar = (ae.b) oe.a.e(((C0132a) this.f6509l.get(i12)).g(i10));
                }
                arrayList2.add(bVar);
            }
        }
        return arrayList2;
    }

    private static char s(byte b10) {
        return (char) D[b10 & 31];
    }

    private static char t(byte b10) {
        return (char) E[b10 & 31];
    }

    private static char u(byte b10, byte b11) {
        if ((b10 & 1) == 0) {
            return s(b11);
        }
        return t(b11);
    }

    private static char v(byte b10) {
        return (char) C[b10 & 15];
    }

    private void w(byte b10) {
        boolean z10;
        this.f6510m.e(' ');
        if ((b10 & 1) == 1) {
            z10 = true;
        } else {
            z10 = false;
        }
        this.f6510m.p((b10 >> 1) & 7, z10);
    }

    private void x(byte b10) {
        if (b10 != 32) {
            if (b10 != 41) {
                switch (b10) {
                    case ChatViewRecyclerTypes.POLL_TEXT_AND_IMAGE /* 37 */:
                        M(1);
                        N(2);
                        return;
                    case ChatViewRecyclerTypes.POLL_IMAGE_ONLY /* 38 */:
                        M(1);
                        N(3);
                        return;
                    case ChatViewRecyclerTypes.SAFETY_SYSTEM_NOTIFICATION /* 39 */:
                        M(1);
                        N(4);
                        return;
                    default:
                        int i10 = this.f6513p;
                        if (i10 != 0) {
                            if (b10 != 33) {
                                switch (b10) {
                                    case ChatViewRecyclerTypes.FORWARD_BREADCRUMB /* 44 */:
                                        this.f6511n = Collections.EMPTY_LIST;
                                        if (i10 != 1 && i10 != 3) {
                                            return;
                                        }
                                        L();
                                        return;
                                    case ChatViewRecyclerTypes.REACTION_BURST_REACTION /* 45 */:
                                        if (i10 == 1 && !this.f6510m.i()) {
                                            this.f6510m.k();
                                            return;
                                        }
                                        return;
                                    case 46:
                                        L();
                                        return;
                                    case ChatViewRecyclerTypes.REACTION_ADD_REACTION /* 47 */:
                                        this.f6511n = r();
                                        L();
                                        return;
                                    default:
                                        return;
                                }
                            }
                            this.f6510m.f();
                            return;
                        }
                        return;
                }
            }
            M(3);
            return;
        }
        M(2);
    }

    private void y(byte b10, byte b11) {
        boolean z10;
        int i10;
        int i11 = f6502y[b10 & 7];
        if ((b11 & 32) != 0) {
            i11++;
        }
        if (i11 != this.f6510m.f6525d) {
            if (this.f6513p != 1 && !this.f6510m.i()) {
                C0132a c0132a = new C0132a(this.f6513p, this.f6514q);
                this.f6510m = c0132a;
                this.f6509l.add(c0132a);
            }
            this.f6510m.f6525d = i11;
        }
        boolean z11 = false;
        if ((b11 & 16) == 16) {
            z10 = true;
        } else {
            z10 = false;
        }
        if ((b11 & 1) == 1) {
            z11 = true;
        }
        int i12 = (b11 >> 1) & 7;
        C0132a c0132a2 = this.f6510m;
        if (z10) {
            i10 = 8;
        } else {
            i10 = i12;
        }
        c0132a2.p(i10, z11);
        if (z10) {
            this.f6510m.f6526e = f6503z[i12];
        }
    }

    private static boolean z(byte b10) {
        if ((b10 & 224) == 0) {
            return true;
        }
        return false;
    }

    @Override // be.e, ae.h
    public /* bridge */ /* synthetic */ void a(long j10) {
        super.a(j10);
    }

    @Override // be.e
    protected g e() {
        List list = this.f6511n;
        this.f6512o = list;
        return new f((List) oe.a.e(list));
    }

    /* JADX WARN: Removed duplicated region for block: B:76:0x006d A[SYNTHETIC] */
    /* JADX WARN: Removed duplicated region for block: B:86:0x0017 A[SYNTHETIC] */
    @Override // be.e
    /*
        Code decompiled incorrectly, please refer to instructions dump.
        To view partially-correct add '--show-bad-code' argument
    */
    protected void f(ae.k r10) {
        /*
            Method dump skipped, instructions count: 267
            To view this dump add '--comments-level debug' option
        */
        throw new UnsupportedOperationException("Method not decompiled: be.a.f(ae.k):void");
    }

    @Override // be.e, rc.d
    public void flush() {
        super.flush();
        this.f6511n = null;
        this.f6512o = null;
        M(0);
        N(4);
        L();
        this.f6515r = false;
        this.f6516s = false;
        this.f6517t = (byte) 0;
        this.f6518u = (byte) 0;
        this.f6519v = 0;
        this.f6520w = true;
        this.f6521x = -9223372036854775807L;
    }

    @Override // be.e
    public /* bridge */ /* synthetic */ k g() {
        return super.d();
    }

    @Override // be.e, rc.d
    /* renamed from: h */
    public l b() {
        l i10;
        l b10 = super.b();
        if (b10 != null) {
            return b10;
        }
        if (O() && (i10 = i()) != null) {
            this.f6511n = Collections.EMPTY_LIST;
            this.f6521x = -9223372036854775807L;
            i10.u(j(), e(), LongCompanionObject.MAX_VALUE);
            return i10;
        }
        return null;
    }

    @Override // be.e
    protected boolean k() {
        if (this.f6511n != this.f6512o) {
            return true;
        }
        return false;
    }

    @Override // be.e
    public /* bridge */ /* synthetic */ void l(k kVar) {
        super.c(kVar);
    }

    @Override // be.e, rc.d
    public void release() {
    }
}

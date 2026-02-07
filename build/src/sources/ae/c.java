package ae;

import ae.c;
import android.text.Layout;
import android.text.SpannableString;
import android.text.SpannableStringBuilder;
import android.text.style.BackgroundColorSpan;
import android.text.style.ForegroundColorSpan;
import android.text.style.StyleSpan;
import android.text.style.UnderlineSpan;
import com.discord.chat.presentation.message.view.MediaImageViewKt;
import com.discord.misc.utilities.chat_view_types.ChatViewRecyclerTypes;
import com.facebook.react.fabric.mounting.mountitems.IntBufferBatchMountItem;
import com.facebook.react.views.text.internal.span.SetSpanOperation;
import java.nio.ByteBuffer;
import java.util.ArrayList;
import java.util.Collections;
import java.util.Comparator;
import java.util.List;
import ne.g0;
import ne.h0;
import ne.y;
import zd.b;
import zd.g;
import zd.k;
import zd.l;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class c extends e {

    /* renamed from: g  reason: collision with root package name */
    private final h0 f545g = new h0();

    /* renamed from: h  reason: collision with root package name */
    private final g0 f546h = new g0();

    /* renamed from: i  reason: collision with root package name */
    private int f547i = -1;

    /* renamed from: j  reason: collision with root package name */
    private final boolean f548j;

    /* renamed from: k  reason: collision with root package name */
    private final int f549k;

    /* renamed from: l  reason: collision with root package name */
    private final b[] f550l;

    /* renamed from: m  reason: collision with root package name */
    private b f551m;

    /* renamed from: n  reason: collision with root package name */
    private List f552n;

    /* renamed from: o  reason: collision with root package name */
    private List f553o;

    /* renamed from: p  reason: collision with root package name */
    private C0008c f554p;

    /* renamed from: q  reason: collision with root package name */
    private int f555q;

    /* JADX INFO: Access modifiers changed from: private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    public static final class a {

        /* renamed from: c  reason: collision with root package name */
        private static final Comparator f556c = new Comparator() { // from class: ae.b
            @Override // java.util.Comparator
            public final int compare(Object obj, Object obj2) {
                int compare;
                compare = Integer.compare(((c.a) obj2).f558b, ((c.a) obj).f558b);
                return compare;
            }
        };

        /* renamed from: a  reason: collision with root package name */
        public final zd.b f557a;

        /* renamed from: b  reason: collision with root package name */
        public final int f558b;

        public a(CharSequence charSequence, Layout.Alignment alignment, float f10, int i10, int i11, float f11, int i12, float f12, boolean z10, int i13, int i14) {
            b.C0770b n10 = new b.C0770b().o(charSequence).p(alignment).h(f10, i10).i(i11).k(f11).l(i12).n(f12);
            if (z10) {
                n10.s(i13);
            }
            this.f557a = n10.a();
            this.f558b = i14;
        }
    }

    /* JADX INFO: Access modifiers changed from: private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    public static final class b {
        private static final int[] A;
        private static final int[] B;
        private static final boolean[] C;
        private static final int[] D;
        private static final int[] E;
        private static final int[] F;
        private static final int[] G;

        /* renamed from: w  reason: collision with root package name */
        public static final int f559w = h(2, 2, 2, 0);

        /* renamed from: x  reason: collision with root package name */
        public static final int f560x;

        /* renamed from: y  reason: collision with root package name */
        public static final int f561y;

        /* renamed from: z  reason: collision with root package name */
        private static final int[] f562z;

        /* renamed from: a  reason: collision with root package name */
        private final List f563a = new ArrayList();

        /* renamed from: b  reason: collision with root package name */
        private final SpannableStringBuilder f564b = new SpannableStringBuilder();

        /* renamed from: c  reason: collision with root package name */
        private boolean f565c;

        /* renamed from: d  reason: collision with root package name */
        private boolean f566d;

        /* renamed from: e  reason: collision with root package name */
        private int f567e;

        /* renamed from: f  reason: collision with root package name */
        private boolean f568f;

        /* renamed from: g  reason: collision with root package name */
        private int f569g;

        /* renamed from: h  reason: collision with root package name */
        private int f570h;

        /* renamed from: i  reason: collision with root package name */
        private int f571i;

        /* renamed from: j  reason: collision with root package name */
        private int f572j;

        /* renamed from: k  reason: collision with root package name */
        private boolean f573k;

        /* renamed from: l  reason: collision with root package name */
        private int f574l;

        /* renamed from: m  reason: collision with root package name */
        private int f575m;

        /* renamed from: n  reason: collision with root package name */
        private int f576n;

        /* renamed from: o  reason: collision with root package name */
        private int f577o;

        /* renamed from: p  reason: collision with root package name */
        private int f578p;

        /* renamed from: q  reason: collision with root package name */
        private int f579q;

        /* renamed from: r  reason: collision with root package name */
        private int f580r;

        /* renamed from: s  reason: collision with root package name */
        private int f581s;

        /* renamed from: t  reason: collision with root package name */
        private int f582t;

        /* renamed from: u  reason: collision with root package name */
        private int f583u;

        /* renamed from: v  reason: collision with root package name */
        private int f584v;

        static {
            int h10 = h(0, 0, 0, 0);
            f560x = h10;
            int h11 = h(0, 0, 0, 3);
            f561y = h11;
            f562z = new int[]{0, 0, 0, 0, 0, 2, 0};
            A = new int[]{0, 0, 0, 0, 0, 0, 2};
            B = new int[]{3, 3, 3, 3, 3, 3, 1};
            C = new boolean[]{false, false, false, true, true, true, false};
            D = new int[]{h10, h11, h10, h10, h11, h10, h10};
            E = new int[]{0, 1, 2, 3, 4, 3, 4};
            F = new int[]{0, 0, 0, 0, 0, 3, 3};
            G = new int[]{h10, h10, h10, h10, h10, h11, h11};
        }

        public b() {
            l();
        }

        public static int g(int i10, int i11, int i12) {
            return h(i10, i11, i12, 0);
        }

        /* JADX WARN: Removed duplicated region for block: B:13:0x0023  */
        /* JADX WARN: Removed duplicated region for block: B:14:0x0025  */
        /* JADX WARN: Removed duplicated region for block: B:16:0x0028  */
        /* JADX WARN: Removed duplicated region for block: B:17:0x002a  */
        /* JADX WARN: Removed duplicated region for block: B:19:0x002d  */
        /*
            Code decompiled incorrectly, please refer to instructions dump.
            To view partially-correct add '--show-bad-code' argument
        */
        public static int h(int r4, int r5, int r6, int r7) {
            /*
                r0 = 0
                r1 = 4
                ne.a.c(r4, r0, r1)
                ne.a.c(r5, r0, r1)
                ne.a.c(r6, r0, r1)
                ne.a.c(r7, r0, r1)
                r1 = 1
                r2 = 255(0xff, float:3.57E-43)
                if (r7 == 0) goto L1b
                if (r7 == r1) goto L1b
                r3 = 2
                if (r7 == r3) goto L1f
                r3 = 3
                if (r7 == r3) goto L1d
            L1b:
                r7 = r2
                goto L21
            L1d:
                r7 = r0
                goto L21
            L1f:
                r7 = 127(0x7f, float:1.78E-43)
            L21:
                if (r4 <= r1) goto L25
                r4 = r2
                goto L26
            L25:
                r4 = r0
            L26:
                if (r5 <= r1) goto L2a
                r5 = r2
                goto L2b
            L2a:
                r5 = r0
            L2b:
                if (r6 <= r1) goto L2e
                r0 = r2
            L2e:
                int r4 = android.graphics.Color.argb(r7, r4, r5, r0)
                return r4
            */
            throw new UnsupportedOperationException("Method not decompiled: ae.c.b.h(int, int, int, int):int");
        }

        public void a(char c10) {
            if (c10 == '\n') {
                this.f563a.add(d());
                this.f564b.clear();
                if (this.f578p != -1) {
                    this.f578p = 0;
                }
                if (this.f579q != -1) {
                    this.f579q = 0;
                }
                if (this.f580r != -1) {
                    this.f580r = 0;
                }
                if (this.f582t != -1) {
                    this.f582t = 0;
                }
                while (true) {
                    if ((this.f573k && this.f563a.size() >= this.f572j) || this.f563a.size() >= 15) {
                        this.f563a.remove(0);
                    } else {
                        return;
                    }
                }
            } else {
                this.f564b.append(c10);
            }
        }

        public void b() {
            int length = this.f564b.length();
            if (length > 0) {
                this.f564b.delete(length - 1, length);
            }
        }

        /* JADX WARN: Removed duplicated region for block: B:23:0x0064  */
        /* JADX WARN: Removed duplicated region for block: B:24:0x006f  */
        /* JADX WARN: Removed duplicated region for block: B:27:0x008c  */
        /* JADX WARN: Removed duplicated region for block: B:28:0x0090  */
        /* JADX WARN: Removed duplicated region for block: B:34:0x009f  */
        /* JADX WARN: Removed duplicated region for block: B:35:0x00a1  */
        /* JADX WARN: Removed duplicated region for block: B:40:0x00ac  */
        /* JADX WARN: Removed duplicated region for block: B:42:0x00b1  */
        /*
            Code decompiled incorrectly, please refer to instructions dump.
            To view partially-correct add '--show-bad-code' argument
        */
        public ae.c.a c() {
            /*
                Method dump skipped, instructions count: 193
                To view this dump add '--comments-level debug' option
            */
            throw new UnsupportedOperationException("Method not decompiled: ae.c.b.c():ae.c$a");
        }

        public SpannableString d() {
            SpannableStringBuilder spannableStringBuilder = new SpannableStringBuilder(this.f564b);
            int length = spannableStringBuilder.length();
            if (length > 0) {
                if (this.f578p != -1) {
                    spannableStringBuilder.setSpan(new StyleSpan(2), this.f578p, length, 33);
                }
                if (this.f579q != -1) {
                    spannableStringBuilder.setSpan(new UnderlineSpan(), this.f579q, length, 33);
                }
                if (this.f580r != -1) {
                    spannableStringBuilder.setSpan(new ForegroundColorSpan(this.f581s), this.f580r, length, 33);
                }
                if (this.f582t != -1) {
                    spannableStringBuilder.setSpan(new BackgroundColorSpan(this.f583u), this.f582t, length, 33);
                }
            }
            return new SpannableString(spannableStringBuilder);
        }

        public void e() {
            this.f563a.clear();
            this.f564b.clear();
            this.f578p = -1;
            this.f579q = -1;
            this.f580r = -1;
            this.f582t = -1;
            this.f584v = 0;
        }

        public void f(boolean z10, boolean z11, boolean z12, int i10, boolean z13, int i11, int i12, int i13, int i14, int i15, int i16, int i17) {
            this.f565c = true;
            this.f566d = z10;
            this.f573k = z11;
            this.f567e = i10;
            this.f568f = z13;
            this.f569g = i11;
            this.f570h = i12;
            this.f571i = i15;
            int i18 = i13 + 1;
            if (this.f572j != i18) {
                this.f572j = i18;
                while (true) {
                    if ((!z11 || this.f563a.size() < this.f572j) && this.f563a.size() < 15) {
                        break;
                    }
                    this.f563a.remove(0);
                }
            }
            if (i16 != 0 && this.f575m != i16) {
                this.f575m = i16;
                int i19 = i16 - 1;
                q(D[i19], f561y, C[i19], 0, A[i19], B[i19], f562z[i19]);
            }
            if (i17 != 0 && this.f576n != i17) {
                this.f576n = i17;
                int i20 = i17 - 1;
                m(0, 1, 1, false, false, F[i20], E[i20]);
                n(f559w, G[i20], f560x);
            }
        }

        public boolean i() {
            return this.f565c;
        }

        public boolean j() {
            if (i()) {
                if (!this.f563a.isEmpty() || this.f564b.length() != 0) {
                    return false;
                }
                return true;
            }
            return true;
        }

        public boolean k() {
            return this.f566d;
        }

        public void l() {
            e();
            this.f565c = false;
            this.f566d = false;
            this.f567e = 4;
            this.f568f = false;
            this.f569g = 0;
            this.f570h = 0;
            this.f571i = 0;
            this.f572j = 15;
            this.f573k = true;
            this.f574l = 0;
            this.f575m = 0;
            this.f576n = 0;
            int i10 = f560x;
            this.f577o = i10;
            this.f581s = f559w;
            this.f583u = i10;
        }

        public void m(int i10, int i11, int i12, boolean z10, boolean z11, int i13, int i14) {
            if (this.f578p != -1) {
                if (!z10) {
                    this.f564b.setSpan(new StyleSpan(2), this.f578p, this.f564b.length(), 33);
                    this.f578p = -1;
                }
            } else if (z10) {
                this.f578p = this.f564b.length();
            }
            if (this.f579q != -1) {
                if (!z11) {
                    this.f564b.setSpan(new UnderlineSpan(), this.f579q, this.f564b.length(), 33);
                    this.f579q = -1;
                }
            } else if (z11) {
                this.f579q = this.f564b.length();
            }
        }

        public void n(int i10, int i11, int i12) {
            if (this.f580r != -1 && this.f581s != i10) {
                this.f564b.setSpan(new ForegroundColorSpan(this.f581s), this.f580r, this.f564b.length(), 33);
            }
            if (i10 != f559w) {
                this.f580r = this.f564b.length();
                this.f581s = i10;
            }
            if (this.f582t != -1 && this.f583u != i11) {
                this.f564b.setSpan(new BackgroundColorSpan(this.f583u), this.f582t, this.f564b.length(), 33);
            }
            if (i11 != f560x) {
                this.f582t = this.f564b.length();
                this.f583u = i11;
            }
        }

        public void o(int i10, int i11) {
            if (this.f584v != i10) {
                a('\n');
            }
            this.f584v = i10;
        }

        public void p(boolean z10) {
            this.f566d = z10;
        }

        public void q(int i10, int i11, boolean z10, int i12, int i13, int i14, int i15) {
            this.f577o = i10;
            this.f574l = i15;
        }
    }

    /* JADX INFO: Access modifiers changed from: private */
    /* renamed from: ae.c$c  reason: collision with other inner class name */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    public static final class C0008c {

        /* renamed from: a  reason: collision with root package name */
        public final int f585a;

        /* renamed from: b  reason: collision with root package name */
        public final int f586b;

        /* renamed from: c  reason: collision with root package name */
        public final byte[] f587c;

        /* renamed from: d  reason: collision with root package name */
        int f588d = 0;

        public C0008c(int i10, int i11) {
            this.f585a = i10;
            this.f586b = i11;
            this.f587c = new byte[(i11 * 2) - 1];
        }
    }

    public c(int i10, List list) {
        boolean z10 = true;
        this.f549k = i10 == -1 ? 1 : i10;
        this.f548j = (list == null || !ne.f.h(list)) ? false : z10;
        this.f550l = new b[8];
        for (int i11 = 0; i11 < 8; i11++) {
            this.f550l[i11] = new b();
        }
        this.f551m = this.f550l[0];
    }

    private void A() {
        int h10 = b.h(this.f546h.h(2), this.f546h.h(2), this.f546h.h(2), this.f546h.h(2));
        int h11 = b.h(this.f546h.h(2), this.f546h.h(2), this.f546h.h(2), this.f546h.h(2));
        this.f546h.r(2);
        this.f551m.n(h10, h11, b.g(this.f546h.h(2), this.f546h.h(2), this.f546h.h(2)));
    }

    private void B() {
        this.f546h.r(4);
        int h10 = this.f546h.h(4);
        this.f546h.r(2);
        this.f551m.o(h10, this.f546h.h(6));
    }

    private void C() {
        int h10 = b.h(this.f546h.h(2), this.f546h.h(2), this.f546h.h(2), this.f546h.h(2));
        int h11 = this.f546h.h(2);
        int g10 = b.g(this.f546h.h(2), this.f546h.h(2), this.f546h.h(2));
        if (this.f546h.g()) {
            h11 |= 4;
        }
        boolean g11 = this.f546h.g();
        int h12 = this.f546h.h(2);
        int h13 = this.f546h.h(2);
        int h14 = this.f546h.h(2);
        this.f546h.r(8);
        this.f551m.q(h10, g10, g11, h11, h12, h13, h14);
    }

    private void D() {
        C0008c c0008c = this.f554p;
        if (c0008c.f588d != (c0008c.f586b * 2) - 1) {
            y.b("Cea708Decoder", "DtvCcPacket ended prematurely; size is " + ((this.f554p.f586b * 2) - 1) + ", but current index is " + this.f554p.f588d + " (sequence number " + this.f554p.f585a + ");");
        }
        g0 g0Var = this.f546h;
        C0008c c0008c2 = this.f554p;
        g0Var.o(c0008c2.f587c, c0008c2.f588d);
        boolean z10 = false;
        while (true) {
            if (this.f546h.b() <= 0) {
                break;
            }
            int h10 = this.f546h.h(3);
            int h11 = this.f546h.h(5);
            if (h10 == 7) {
                this.f546h.r(2);
                h10 = this.f546h.h(6);
                if (h10 < 7) {
                    y.i("Cea708Decoder", "Invalid extended service number: " + h10);
                }
            }
            if (h11 == 0) {
                if (h10 != 0) {
                    y.i("Cea708Decoder", "serviceNumber is non-zero (" + h10 + ") when blockSize is 0");
                }
            } else if (h10 != this.f549k) {
                this.f546h.s(h11);
            } else {
                int e10 = this.f546h.e() + (h11 * 8);
                while (this.f546h.e() < e10) {
                    int h12 = this.f546h.h(8);
                    if (h12 != 16) {
                        if (h12 <= 31) {
                            q(h12);
                        } else {
                            if (h12 <= 127) {
                                v(h12);
                            } else if (h12 <= 159) {
                                r(h12);
                            } else if (h12 <= 255) {
                                w(h12);
                            } else {
                                y.i("Cea708Decoder", "Invalid base command: " + h12);
                            }
                            z10 = true;
                        }
                    } else {
                        int h13 = this.f546h.h(8);
                        if (h13 <= 31) {
                            s(h13);
                        } else {
                            if (h13 <= 127) {
                                x(h13);
                            } else if (h13 <= 159) {
                                t(h13);
                            } else if (h13 <= 255) {
                                y(h13);
                            } else {
                                y.i("Cea708Decoder", "Invalid extended command: " + h13);
                            }
                            z10 = true;
                        }
                    }
                }
            }
        }
        if (z10) {
            this.f552n = p();
        }
    }

    private void E() {
        for (int i10 = 0; i10 < 8; i10++) {
            this.f550l[i10].l();
        }
    }

    private void o() {
        if (this.f554p == null) {
            return;
        }
        D();
        this.f554p = null;
    }

    private List p() {
        a c10;
        ArrayList arrayList = new ArrayList();
        for (int i10 = 0; i10 < 8; i10++) {
            if (!this.f550l[i10].j() && this.f550l[i10].k() && (c10 = this.f550l[i10].c()) != null) {
                arrayList.add(c10);
            }
        }
        Collections.sort(arrayList, a.f556c);
        ArrayList arrayList2 = new ArrayList(arrayList.size());
        for (int i11 = 0; i11 < arrayList.size(); i11++) {
            arrayList2.add(((a) arrayList.get(i11)).f557a);
        }
        return Collections.unmodifiableList(arrayList2);
    }

    private void q(int i10) {
        if (i10 != 0) {
            if (i10 != 3) {
                if (i10 != 8) {
                    switch (i10) {
                        case 12:
                            E();
                            return;
                        case 13:
                            this.f551m.a('\n');
                            return;
                        case 14:
                            return;
                        default:
                            if (i10 >= 17 && i10 <= 23) {
                                y.i("Cea708Decoder", "Currently unsupported COMMAND_EXT1 Command: " + i10);
                                this.f546h.r(8);
                                return;
                            } else if (i10 >= 24 && i10 <= 31) {
                                y.i("Cea708Decoder", "Currently unsupported COMMAND_P16 Command: " + i10);
                                this.f546h.r(16);
                                return;
                            } else {
                                y.i("Cea708Decoder", "Invalid C0 command: " + i10);
                                return;
                            }
                    }
                }
                this.f551m.b();
                return;
            }
            this.f552n = p();
        }
    }

    private void r(int i10) {
        b bVar;
        int i11 = 1;
        switch (i10) {
            case IntBufferBatchMountItem.INSTRUCTION_UPDATE_LAYOUT /* 128 */:
            case 129:
            case 130:
            case 131:
            case 132:
            case 133:
            case 134:
            case 135:
                int i12 = i10 - 128;
                if (this.f555q != i12) {
                    this.f555q = i12;
                    this.f551m = this.f550l[i12];
                    return;
                }
                return;
            case 136:
                while (i11 <= 8) {
                    if (this.f546h.g()) {
                        this.f550l[8 - i11].e();
                    }
                    i11++;
                }
                return;
            case 137:
                for (int i13 = 1; i13 <= 8; i13++) {
                    if (this.f546h.g()) {
                        this.f550l[8 - i13].p(true);
                    }
                }
                return;
            case 138:
                while (i11 <= 8) {
                    if (this.f546h.g()) {
                        this.f550l[8 - i11].p(false);
                    }
                    i11++;
                }
                return;
            case 139:
                for (int i14 = 1; i14 <= 8; i14++) {
                    if (this.f546h.g()) {
                        this.f550l[8 - i14].p(!bVar.k());
                    }
                }
                return;
            case 140:
                while (i11 <= 8) {
                    if (this.f546h.g()) {
                        this.f550l[8 - i11].l();
                    }
                    i11++;
                }
                return;
            case 141:
                this.f546h.r(8);
                return;
            case 142:
                return;
            case 143:
                E();
                return;
            case 144:
                if (!this.f551m.i()) {
                    this.f546h.r(16);
                    return;
                } else {
                    z();
                    return;
                }
            case 145:
                if (!this.f551m.i()) {
                    this.f546h.r(24);
                    return;
                } else {
                    A();
                    return;
                }
            case MediaImageViewKt.OBSCURED_IMAGE_MIN_WIDTH /* 146 */:
                if (!this.f551m.i()) {
                    this.f546h.r(16);
                    return;
                } else {
                    B();
                    return;
                }
            case 147:
            case 148:
            case 149:
            case 150:
            default:
                y.i("Cea708Decoder", "Invalid C1 command: " + i10);
                return;
            case 151:
                if (!this.f551m.i()) {
                    this.f546h.r(32);
                    return;
                } else {
                    C();
                    return;
                }
            case 152:
            case 153:
            case 154:
            case 155:
            case 156:
            case 157:
            case 158:
            case 159:
                int i15 = i10 - 152;
                u(i15);
                if (this.f555q != i15) {
                    this.f555q = i15;
                    this.f551m = this.f550l[i15];
                    return;
                }
                return;
        }
    }

    private void s(int i10) {
        if (i10 > 7) {
            if (i10 <= 15) {
                this.f546h.r(8);
            } else if (i10 <= 23) {
                this.f546h.r(16);
            } else if (i10 <= 31) {
                this.f546h.r(24);
            }
        }
    }

    private void t(int i10) {
        if (i10 <= 135) {
            this.f546h.r(32);
        } else if (i10 <= 143) {
            this.f546h.r(40);
        } else if (i10 <= 159) {
            this.f546h.r(2);
            this.f546h.r(this.f546h.h(6) * 8);
        }
    }

    private void u(int i10) {
        b bVar = this.f550l[i10];
        this.f546h.r(2);
        boolean g10 = this.f546h.g();
        boolean g11 = this.f546h.g();
        boolean g12 = this.f546h.g();
        int h10 = this.f546h.h(3);
        boolean g13 = this.f546h.g();
        int h11 = this.f546h.h(7);
        int h12 = this.f546h.h(8);
        int h13 = this.f546h.h(4);
        int h14 = this.f546h.h(4);
        this.f546h.r(2);
        int h15 = this.f546h.h(6);
        this.f546h.r(2);
        bVar.f(g10, g11, g12, h10, g13, h11, h12, h14, h15, h13, this.f546h.h(3), this.f546h.h(3));
    }

    private void v(int i10) {
        if (i10 == 127) {
            this.f551m.a((char) 9835);
        } else {
            this.f551m.a((char) (i10 & SetSpanOperation.SPAN_MAX_PRIORITY));
        }
    }

    private void w(int i10) {
        this.f551m.a((char) (i10 & SetSpanOperation.SPAN_MAX_PRIORITY));
    }

    private void x(int i10) {
        if (i10 != 32) {
            if (i10 != 33) {
                if (i10 != 37) {
                    if (i10 != 42) {
                        if (i10 != 44) {
                            if (i10 != 63) {
                                if (i10 != 57) {
                                    if (i10 != 58) {
                                        if (i10 != 60) {
                                            if (i10 != 61) {
                                                switch (i10) {
                                                    case 48:
                                                        this.f551m.a((char) 9608);
                                                        return;
                                                    case ChatViewRecyclerTypes.MEDIA_ATTACHMENT_MOSAIC_IMAGE /* 49 */:
                                                        this.f551m.a((char) 8216);
                                                        return;
                                                    case 50:
                                                        this.f551m.a((char) 8217);
                                                        return;
                                                    case ChatViewRecyclerTypes.MEDIA_ATTACHMENT_MOSAIC_VISUAL_PLACEHOLDER /* 51 */:
                                                        this.f551m.a((char) 8220);
                                                        return;
                                                    case ChatViewRecyclerTypes.REFERRAL /* 52 */:
                                                        this.f551m.a((char) 8221);
                                                        return;
                                                    case ChatViewRecyclerTypes.GUILD_PROFILE_INVITE /* 53 */:
                                                        this.f551m.a((char) 8226);
                                                        return;
                                                    default:
                                                        switch (i10) {
                                                            case 118:
                                                                this.f551m.a((char) 8539);
                                                                return;
                                                            case 119:
                                                                this.f551m.a((char) 8540);
                                                                return;
                                                            case 120:
                                                                this.f551m.a((char) 8541);
                                                                return;
                                                            case 121:
                                                                this.f551m.a((char) 8542);
                                                                return;
                                                            case 122:
                                                                this.f551m.a((char) 9474);
                                                                return;
                                                            case 123:
                                                                this.f551m.a((char) 9488);
                                                                return;
                                                            case 124:
                                                                this.f551m.a((char) 9492);
                                                                return;
                                                            case 125:
                                                                this.f551m.a((char) 9472);
                                                                return;
                                                            case 126:
                                                                this.f551m.a((char) 9496);
                                                                return;
                                                            case 127:
                                                                this.f551m.a((char) 9484);
                                                                return;
                                                            default:
                                                                y.i("Cea708Decoder", "Invalid G2 character: " + i10);
                                                                return;
                                                        }
                                                }
                                            }
                                            this.f551m.a((char) 8480);
                                            return;
                                        }
                                        this.f551m.a((char) 339);
                                        return;
                                    }
                                    this.f551m.a((char) 353);
                                    return;
                                }
                                this.f551m.a((char) 8482);
                                return;
                            }
                            this.f551m.a((char) 376);
                            return;
                        }
                        this.f551m.a((char) 338);
                        return;
                    }
                    this.f551m.a((char) 352);
                    return;
                }
                this.f551m.a((char) 8230);
                return;
            }
            this.f551m.a((char) 160);
            return;
        }
        this.f551m.a(' ');
    }

    private void y(int i10) {
        if (i10 == 160) {
            this.f551m.a((char) 13252);
            return;
        }
        y.i("Cea708Decoder", "Invalid G3 character: " + i10);
        this.f551m.a('_');
    }

    private void z() {
        this.f551m.m(this.f546h.h(4), this.f546h.h(2), this.f546h.h(2), this.f546h.g(), this.f546h.g(), this.f546h.h(3), this.f546h.h(3));
    }

    @Override // ae.e, zd.h
    public /* bridge */ /* synthetic */ void a(long j10) {
        super.a(j10);
    }

    @Override // ae.e
    protected g e() {
        List list = this.f552n;
        this.f553o = list;
        return new f((List) ne.a.e(list));
    }

    @Override // ae.e
    protected void f(k kVar) {
        boolean z10;
        ByteBuffer byteBuffer = (ByteBuffer) ne.a.e(kVar.f46657i);
        this.f545g.S(byteBuffer.array(), byteBuffer.limit());
        while (this.f545g.a() >= 3) {
            int H = this.f545g.H();
            int i10 = H & 3;
            boolean z11 = false;
            if ((H & 4) == 4) {
                z10 = true;
            } else {
                z10 = false;
            }
            byte H2 = (byte) this.f545g.H();
            byte H3 = (byte) this.f545g.H();
            if (i10 == 2 || i10 == 3) {
                if (z10) {
                    if (i10 == 3) {
                        o();
                        int i11 = (H2 & 192) >> 6;
                        int i12 = this.f547i;
                        if (i12 != -1 && i11 != (i12 + 1) % 4) {
                            E();
                            y.i("Cea708Decoder", "Sequence number discontinuity. previous=" + this.f547i + " current=" + i11);
                        }
                        this.f547i = i11;
                        int i13 = H2 & 63;
                        if (i13 == 0) {
                            i13 = 64;
                        }
                        C0008c c0008c = new C0008c(i11, i13);
                        this.f554p = c0008c;
                        byte[] bArr = c0008c.f587c;
                        int i14 = c0008c.f588d;
                        c0008c.f588d = i14 + 1;
                        bArr[i14] = H3;
                    } else {
                        if (i10 == 2) {
                            z11 = true;
                        }
                        ne.a.a(z11);
                        C0008c c0008c2 = this.f554p;
                        if (c0008c2 == null) {
                            y.c("Cea708Decoder", "Encountered DTVCC_PACKET_DATA before DTVCC_PACKET_START");
                        } else {
                            byte[] bArr2 = c0008c2.f587c;
                            int i15 = c0008c2.f588d;
                            int i16 = i15 + 1;
                            c0008c2.f588d = i16;
                            bArr2[i15] = H2;
                            c0008c2.f588d = i15 + 2;
                            bArr2[i16] = H3;
                        }
                    }
                    C0008c c0008c3 = this.f554p;
                    if (c0008c3.f588d == (c0008c3.f586b * 2) - 1) {
                        o();
                    }
                }
            }
        }
    }

    @Override // ae.e, qc.d
    public void flush() {
        super.flush();
        this.f552n = null;
        this.f553o = null;
        this.f555q = 0;
        this.f551m = this.f550l[0];
        E();
        this.f554p = null;
    }

    @Override // ae.e
    public /* bridge */ /* synthetic */ k g() {
        return super.d();
    }

    @Override // ae.e
    public /* bridge */ /* synthetic */ l h() {
        return super.b();
    }

    @Override // ae.e
    protected boolean k() {
        if (this.f552n != this.f553o) {
            return true;
        }
        return false;
    }

    @Override // ae.e
    public /* bridge */ /* synthetic */ void l(k kVar) {
        super.c(kVar);
    }

    @Override // ae.e, qc.d
    public /* bridge */ /* synthetic */ void release() {
        super.release();
    }
}

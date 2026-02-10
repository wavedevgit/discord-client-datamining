package be;

import ae.b;
import ae.g;
import ae.k;
import ae.l;
import android.text.Layout;
import android.text.SpannableString;
import android.text.SpannableStringBuilder;
import android.text.style.BackgroundColorSpan;
import android.text.style.ForegroundColorSpan;
import android.text.style.StyleSpan;
import android.text.style.UnderlineSpan;
import be.c;
import com.discord.chat.presentation.message.view.MediaImageViewKt;
import com.discord.misc.utilities.chat_view_types.ChatViewRecyclerTypes;
import com.facebook.react.fabric.mounting.mountitems.IntBufferBatchMountItem;
import com.facebook.react.views.text.internal.span.SetSpanOperation;
import java.nio.ByteBuffer;
import java.util.ArrayList;
import java.util.Collections;
import java.util.Comparator;
import java.util.List;
import oe.g0;
import oe.h0;
import oe.y;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class c extends e {

    /* renamed from: g  reason: collision with root package name */
    private final h0 f6533g = new h0();

    /* renamed from: h  reason: collision with root package name */
    private final g0 f6534h = new g0();

    /* renamed from: i  reason: collision with root package name */
    private int f6535i = -1;

    /* renamed from: j  reason: collision with root package name */
    private final boolean f6536j;

    /* renamed from: k  reason: collision with root package name */
    private final int f6537k;

    /* renamed from: l  reason: collision with root package name */
    private final b[] f6538l;

    /* renamed from: m  reason: collision with root package name */
    private b f6539m;

    /* renamed from: n  reason: collision with root package name */
    private List f6540n;

    /* renamed from: o  reason: collision with root package name */
    private List f6541o;

    /* renamed from: p  reason: collision with root package name */
    private C0134c f6542p;

    /* renamed from: q  reason: collision with root package name */
    private int f6543q;

    /* JADX INFO: Access modifiers changed from: private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    public static final class a {

        /* renamed from: c  reason: collision with root package name */
        private static final Comparator f6544c = new Comparator() { // from class: be.b
            @Override // java.util.Comparator
            public final int compare(Object obj, Object obj2) {
                int compare;
                compare = Integer.compare(((c.a) obj2).f6546b, ((c.a) obj).f6546b);
                return compare;
            }
        };

        /* renamed from: a  reason: collision with root package name */
        public final ae.b f6545a;

        /* renamed from: b  reason: collision with root package name */
        public final int f6546b;

        public a(CharSequence charSequence, Layout.Alignment alignment, float f10, int i10, int i11, float f11, int i12, float f12, boolean z10, int i13, int i14) {
            b.C0009b n10 = new b.C0009b().o(charSequence).p(alignment).h(f10, i10).i(i11).k(f11).l(i12).n(f12);
            if (z10) {
                n10.s(i13);
            }
            this.f6545a = n10.a();
            this.f6546b = i14;
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
        public static final int f6547w = h(2, 2, 2, 0);

        /* renamed from: x  reason: collision with root package name */
        public static final int f6548x;

        /* renamed from: y  reason: collision with root package name */
        public static final int f6549y;

        /* renamed from: z  reason: collision with root package name */
        private static final int[] f6550z;

        /* renamed from: a  reason: collision with root package name */
        private final List f6551a = new ArrayList();

        /* renamed from: b  reason: collision with root package name */
        private final SpannableStringBuilder f6552b = new SpannableStringBuilder();

        /* renamed from: c  reason: collision with root package name */
        private boolean f6553c;

        /* renamed from: d  reason: collision with root package name */
        private boolean f6554d;

        /* renamed from: e  reason: collision with root package name */
        private int f6555e;

        /* renamed from: f  reason: collision with root package name */
        private boolean f6556f;

        /* renamed from: g  reason: collision with root package name */
        private int f6557g;

        /* renamed from: h  reason: collision with root package name */
        private int f6558h;

        /* renamed from: i  reason: collision with root package name */
        private int f6559i;

        /* renamed from: j  reason: collision with root package name */
        private int f6560j;

        /* renamed from: k  reason: collision with root package name */
        private boolean f6561k;

        /* renamed from: l  reason: collision with root package name */
        private int f6562l;

        /* renamed from: m  reason: collision with root package name */
        private int f6563m;

        /* renamed from: n  reason: collision with root package name */
        private int f6564n;

        /* renamed from: o  reason: collision with root package name */
        private int f6565o;

        /* renamed from: p  reason: collision with root package name */
        private int f6566p;

        /* renamed from: q  reason: collision with root package name */
        private int f6567q;

        /* renamed from: r  reason: collision with root package name */
        private int f6568r;

        /* renamed from: s  reason: collision with root package name */
        private int f6569s;

        /* renamed from: t  reason: collision with root package name */
        private int f6570t;

        /* renamed from: u  reason: collision with root package name */
        private int f6571u;

        /* renamed from: v  reason: collision with root package name */
        private int f6572v;

        static {
            int h10 = h(0, 0, 0, 0);
            f6548x = h10;
            int h11 = h(0, 0, 0, 3);
            f6549y = h11;
            f6550z = new int[]{0, 0, 0, 0, 0, 2, 0};
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
                oe.a.c(r4, r0, r1)
                oe.a.c(r5, r0, r1)
                oe.a.c(r6, r0, r1)
                oe.a.c(r7, r0, r1)
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
            throw new UnsupportedOperationException("Method not decompiled: be.c.b.h(int, int, int, int):int");
        }

        public void a(char c10) {
            if (c10 == '\n') {
                this.f6551a.add(d());
                this.f6552b.clear();
                if (this.f6566p != -1) {
                    this.f6566p = 0;
                }
                if (this.f6567q != -1) {
                    this.f6567q = 0;
                }
                if (this.f6568r != -1) {
                    this.f6568r = 0;
                }
                if (this.f6570t != -1) {
                    this.f6570t = 0;
                }
                while (true) {
                    if ((this.f6561k && this.f6551a.size() >= this.f6560j) || this.f6551a.size() >= 15) {
                        this.f6551a.remove(0);
                    } else {
                        return;
                    }
                }
            } else {
                this.f6552b.append(c10);
            }
        }

        public void b() {
            int length = this.f6552b.length();
            if (length > 0) {
                this.f6552b.delete(length - 1, length);
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
        public be.c.a c() {
            /*
                Method dump skipped, instructions count: 193
                To view this dump add '--comments-level debug' option
            */
            throw new UnsupportedOperationException("Method not decompiled: be.c.b.c():be.c$a");
        }

        public SpannableString d() {
            SpannableStringBuilder spannableStringBuilder = new SpannableStringBuilder(this.f6552b);
            int length = spannableStringBuilder.length();
            if (length > 0) {
                if (this.f6566p != -1) {
                    spannableStringBuilder.setSpan(new StyleSpan(2), this.f6566p, length, 33);
                }
                if (this.f6567q != -1) {
                    spannableStringBuilder.setSpan(new UnderlineSpan(), this.f6567q, length, 33);
                }
                if (this.f6568r != -1) {
                    spannableStringBuilder.setSpan(new ForegroundColorSpan(this.f6569s), this.f6568r, length, 33);
                }
                if (this.f6570t != -1) {
                    spannableStringBuilder.setSpan(new BackgroundColorSpan(this.f6571u), this.f6570t, length, 33);
                }
            }
            return new SpannableString(spannableStringBuilder);
        }

        public void e() {
            this.f6551a.clear();
            this.f6552b.clear();
            this.f6566p = -1;
            this.f6567q = -1;
            this.f6568r = -1;
            this.f6570t = -1;
            this.f6572v = 0;
        }

        public void f(boolean z10, boolean z11, boolean z12, int i10, boolean z13, int i11, int i12, int i13, int i14, int i15, int i16, int i17) {
            this.f6553c = true;
            this.f6554d = z10;
            this.f6561k = z11;
            this.f6555e = i10;
            this.f6556f = z13;
            this.f6557g = i11;
            this.f6558h = i12;
            this.f6559i = i15;
            int i18 = i13 + 1;
            if (this.f6560j != i18) {
                this.f6560j = i18;
                while (true) {
                    if ((!z11 || this.f6551a.size() < this.f6560j) && this.f6551a.size() < 15) {
                        break;
                    }
                    this.f6551a.remove(0);
                }
            }
            if (i16 != 0 && this.f6563m != i16) {
                this.f6563m = i16;
                int i19 = i16 - 1;
                q(D[i19], f6549y, C[i19], 0, A[i19], B[i19], f6550z[i19]);
            }
            if (i17 != 0 && this.f6564n != i17) {
                this.f6564n = i17;
                int i20 = i17 - 1;
                m(0, 1, 1, false, false, F[i20], E[i20]);
                n(f6547w, G[i20], f6548x);
            }
        }

        public boolean i() {
            return this.f6553c;
        }

        public boolean j() {
            if (i()) {
                if (!this.f6551a.isEmpty() || this.f6552b.length() != 0) {
                    return false;
                }
                return true;
            }
            return true;
        }

        public boolean k() {
            return this.f6554d;
        }

        public void l() {
            e();
            this.f6553c = false;
            this.f6554d = false;
            this.f6555e = 4;
            this.f6556f = false;
            this.f6557g = 0;
            this.f6558h = 0;
            this.f6559i = 0;
            this.f6560j = 15;
            this.f6561k = true;
            this.f6562l = 0;
            this.f6563m = 0;
            this.f6564n = 0;
            int i10 = f6548x;
            this.f6565o = i10;
            this.f6569s = f6547w;
            this.f6571u = i10;
        }

        public void m(int i10, int i11, int i12, boolean z10, boolean z11, int i13, int i14) {
            if (this.f6566p != -1) {
                if (!z10) {
                    this.f6552b.setSpan(new StyleSpan(2), this.f6566p, this.f6552b.length(), 33);
                    this.f6566p = -1;
                }
            } else if (z10) {
                this.f6566p = this.f6552b.length();
            }
            if (this.f6567q != -1) {
                if (!z11) {
                    this.f6552b.setSpan(new UnderlineSpan(), this.f6567q, this.f6552b.length(), 33);
                    this.f6567q = -1;
                }
            } else if (z11) {
                this.f6567q = this.f6552b.length();
            }
        }

        public void n(int i10, int i11, int i12) {
            if (this.f6568r != -1 && this.f6569s != i10) {
                this.f6552b.setSpan(new ForegroundColorSpan(this.f6569s), this.f6568r, this.f6552b.length(), 33);
            }
            if (i10 != f6547w) {
                this.f6568r = this.f6552b.length();
                this.f6569s = i10;
            }
            if (this.f6570t != -1 && this.f6571u != i11) {
                this.f6552b.setSpan(new BackgroundColorSpan(this.f6571u), this.f6570t, this.f6552b.length(), 33);
            }
            if (i11 != f6548x) {
                this.f6570t = this.f6552b.length();
                this.f6571u = i11;
            }
        }

        public void o(int i10, int i11) {
            if (this.f6572v != i10) {
                a('\n');
            }
            this.f6572v = i10;
        }

        public void p(boolean z10) {
            this.f6554d = z10;
        }

        public void q(int i10, int i11, boolean z10, int i12, int i13, int i14, int i15) {
            this.f6565o = i10;
            this.f6562l = i15;
        }
    }

    /* JADX INFO: Access modifiers changed from: private */
    /* renamed from: be.c$c  reason: collision with other inner class name */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    public static final class C0134c {

        /* renamed from: a  reason: collision with root package name */
        public final int f6573a;

        /* renamed from: b  reason: collision with root package name */
        public final int f6574b;

        /* renamed from: c  reason: collision with root package name */
        public final byte[] f6575c;

        /* renamed from: d  reason: collision with root package name */
        int f6576d = 0;

        public C0134c(int i10, int i11) {
            this.f6573a = i10;
            this.f6574b = i11;
            this.f6575c = new byte[(i11 * 2) - 1];
        }
    }

    public c(int i10, List list) {
        boolean z10 = true;
        this.f6537k = i10 == -1 ? 1 : i10;
        this.f6536j = (list == null || !oe.f.h(list)) ? false : z10;
        this.f6538l = new b[8];
        for (int i11 = 0; i11 < 8; i11++) {
            this.f6538l[i11] = new b();
        }
        this.f6539m = this.f6538l[0];
    }

    private void A() {
        int h10 = b.h(this.f6534h.h(2), this.f6534h.h(2), this.f6534h.h(2), this.f6534h.h(2));
        int h11 = b.h(this.f6534h.h(2), this.f6534h.h(2), this.f6534h.h(2), this.f6534h.h(2));
        this.f6534h.r(2);
        this.f6539m.n(h10, h11, b.g(this.f6534h.h(2), this.f6534h.h(2), this.f6534h.h(2)));
    }

    private void B() {
        this.f6534h.r(4);
        int h10 = this.f6534h.h(4);
        this.f6534h.r(2);
        this.f6539m.o(h10, this.f6534h.h(6));
    }

    private void C() {
        int h10 = b.h(this.f6534h.h(2), this.f6534h.h(2), this.f6534h.h(2), this.f6534h.h(2));
        int h11 = this.f6534h.h(2);
        int g10 = b.g(this.f6534h.h(2), this.f6534h.h(2), this.f6534h.h(2));
        if (this.f6534h.g()) {
            h11 |= 4;
        }
        boolean g11 = this.f6534h.g();
        int h12 = this.f6534h.h(2);
        int h13 = this.f6534h.h(2);
        int h14 = this.f6534h.h(2);
        this.f6534h.r(8);
        this.f6539m.q(h10, g10, g11, h11, h12, h13, h14);
    }

    private void D() {
        C0134c c0134c = this.f6542p;
        if (c0134c.f6576d != (c0134c.f6574b * 2) - 1) {
            y.b("Cea708Decoder", "DtvCcPacket ended prematurely; size is " + ((this.f6542p.f6574b * 2) - 1) + ", but current index is " + this.f6542p.f6576d + " (sequence number " + this.f6542p.f6573a + ");");
        }
        g0 g0Var = this.f6534h;
        C0134c c0134c2 = this.f6542p;
        g0Var.o(c0134c2.f6575c, c0134c2.f6576d);
        boolean z10 = false;
        while (true) {
            if (this.f6534h.b() <= 0) {
                break;
            }
            int h10 = this.f6534h.h(3);
            int h11 = this.f6534h.h(5);
            if (h10 == 7) {
                this.f6534h.r(2);
                h10 = this.f6534h.h(6);
                if (h10 < 7) {
                    y.i("Cea708Decoder", "Invalid extended service number: " + h10);
                }
            }
            if (h11 == 0) {
                if (h10 != 0) {
                    y.i("Cea708Decoder", "serviceNumber is non-zero (" + h10 + ") when blockSize is 0");
                }
            } else if (h10 != this.f6537k) {
                this.f6534h.s(h11);
            } else {
                int e10 = this.f6534h.e() + (h11 * 8);
                while (this.f6534h.e() < e10) {
                    int h12 = this.f6534h.h(8);
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
                        int h13 = this.f6534h.h(8);
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
            this.f6540n = p();
        }
    }

    private void E() {
        for (int i10 = 0; i10 < 8; i10++) {
            this.f6538l[i10].l();
        }
    }

    private void o() {
        if (this.f6542p == null) {
            return;
        }
        D();
        this.f6542p = null;
    }

    private List p() {
        a c10;
        ArrayList arrayList = new ArrayList();
        for (int i10 = 0; i10 < 8; i10++) {
            if (!this.f6538l[i10].j() && this.f6538l[i10].k() && (c10 = this.f6538l[i10].c()) != null) {
                arrayList.add(c10);
            }
        }
        Collections.sort(arrayList, a.f6544c);
        ArrayList arrayList2 = new ArrayList(arrayList.size());
        for (int i11 = 0; i11 < arrayList.size(); i11++) {
            arrayList2.add(((a) arrayList.get(i11)).f6545a);
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
                            this.f6539m.a('\n');
                            return;
                        case 14:
                            return;
                        default:
                            if (i10 >= 17 && i10 <= 23) {
                                y.i("Cea708Decoder", "Currently unsupported COMMAND_EXT1 Command: " + i10);
                                this.f6534h.r(8);
                                return;
                            } else if (i10 >= 24 && i10 <= 31) {
                                y.i("Cea708Decoder", "Currently unsupported COMMAND_P16 Command: " + i10);
                                this.f6534h.r(16);
                                return;
                            } else {
                                y.i("Cea708Decoder", "Invalid C0 command: " + i10);
                                return;
                            }
                    }
                }
                this.f6539m.b();
                return;
            }
            this.f6540n = p();
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
                if (this.f6543q != i12) {
                    this.f6543q = i12;
                    this.f6539m = this.f6538l[i12];
                    return;
                }
                return;
            case 136:
                while (i11 <= 8) {
                    if (this.f6534h.g()) {
                        this.f6538l[8 - i11].e();
                    }
                    i11++;
                }
                return;
            case 137:
                for (int i13 = 1; i13 <= 8; i13++) {
                    if (this.f6534h.g()) {
                        this.f6538l[8 - i13].p(true);
                    }
                }
                return;
            case 138:
                while (i11 <= 8) {
                    if (this.f6534h.g()) {
                        this.f6538l[8 - i11].p(false);
                    }
                    i11++;
                }
                return;
            case 139:
                for (int i14 = 1; i14 <= 8; i14++) {
                    if (this.f6534h.g()) {
                        this.f6538l[8 - i14].p(!bVar.k());
                    }
                }
                return;
            case 140:
                while (i11 <= 8) {
                    if (this.f6534h.g()) {
                        this.f6538l[8 - i11].l();
                    }
                    i11++;
                }
                return;
            case 141:
                this.f6534h.r(8);
                return;
            case 142:
                return;
            case 143:
                E();
                return;
            case 144:
                if (!this.f6539m.i()) {
                    this.f6534h.r(16);
                    return;
                } else {
                    z();
                    return;
                }
            case 145:
                if (!this.f6539m.i()) {
                    this.f6534h.r(24);
                    return;
                } else {
                    A();
                    return;
                }
            case MediaImageViewKt.OBSCURED_IMAGE_MIN_WIDTH /* 146 */:
                if (!this.f6539m.i()) {
                    this.f6534h.r(16);
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
                if (!this.f6539m.i()) {
                    this.f6534h.r(32);
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
                if (this.f6543q != i15) {
                    this.f6543q = i15;
                    this.f6539m = this.f6538l[i15];
                    return;
                }
                return;
        }
    }

    private void s(int i10) {
        if (i10 > 7) {
            if (i10 <= 15) {
                this.f6534h.r(8);
            } else if (i10 <= 23) {
                this.f6534h.r(16);
            } else if (i10 <= 31) {
                this.f6534h.r(24);
            }
        }
    }

    private void t(int i10) {
        if (i10 <= 135) {
            this.f6534h.r(32);
        } else if (i10 <= 143) {
            this.f6534h.r(40);
        } else if (i10 <= 159) {
            this.f6534h.r(2);
            this.f6534h.r(this.f6534h.h(6) * 8);
        }
    }

    private void u(int i10) {
        b bVar = this.f6538l[i10];
        this.f6534h.r(2);
        boolean g10 = this.f6534h.g();
        boolean g11 = this.f6534h.g();
        boolean g12 = this.f6534h.g();
        int h10 = this.f6534h.h(3);
        boolean g13 = this.f6534h.g();
        int h11 = this.f6534h.h(7);
        int h12 = this.f6534h.h(8);
        int h13 = this.f6534h.h(4);
        int h14 = this.f6534h.h(4);
        this.f6534h.r(2);
        int h15 = this.f6534h.h(6);
        this.f6534h.r(2);
        bVar.f(g10, g11, g12, h10, g13, h11, h12, h14, h15, h13, this.f6534h.h(3), this.f6534h.h(3));
    }

    private void v(int i10) {
        if (i10 == 127) {
            this.f6539m.a((char) 9835);
        } else {
            this.f6539m.a((char) (i10 & SetSpanOperation.SPAN_MAX_PRIORITY));
        }
    }

    private void w(int i10) {
        this.f6539m.a((char) (i10 & SetSpanOperation.SPAN_MAX_PRIORITY));
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
                                                        this.f6539m.a((char) 9608);
                                                        return;
                                                    case ChatViewRecyclerTypes.MEDIA_ATTACHMENT_MOSAIC_IMAGE /* 49 */:
                                                        this.f6539m.a((char) 8216);
                                                        return;
                                                    case 50:
                                                        this.f6539m.a((char) 8217);
                                                        return;
                                                    case ChatViewRecyclerTypes.MEDIA_ATTACHMENT_MOSAIC_VISUAL_PLACEHOLDER /* 51 */:
                                                        this.f6539m.a((char) 8220);
                                                        return;
                                                    case ChatViewRecyclerTypes.REFERRAL /* 52 */:
                                                        this.f6539m.a((char) 8221);
                                                        return;
                                                    case ChatViewRecyclerTypes.GUILD_PROFILE_INVITE /* 53 */:
                                                        this.f6539m.a((char) 8226);
                                                        return;
                                                    default:
                                                        switch (i10) {
                                                            case 118:
                                                                this.f6539m.a((char) 8539);
                                                                return;
                                                            case 119:
                                                                this.f6539m.a((char) 8540);
                                                                return;
                                                            case 120:
                                                                this.f6539m.a((char) 8541);
                                                                return;
                                                            case 121:
                                                                this.f6539m.a((char) 8542);
                                                                return;
                                                            case 122:
                                                                this.f6539m.a((char) 9474);
                                                                return;
                                                            case 123:
                                                                this.f6539m.a((char) 9488);
                                                                return;
                                                            case 124:
                                                                this.f6539m.a((char) 9492);
                                                                return;
                                                            case 125:
                                                                this.f6539m.a((char) 9472);
                                                                return;
                                                            case 126:
                                                                this.f6539m.a((char) 9496);
                                                                return;
                                                            case 127:
                                                                this.f6539m.a((char) 9484);
                                                                return;
                                                            default:
                                                                y.i("Cea708Decoder", "Invalid G2 character: " + i10);
                                                                return;
                                                        }
                                                }
                                            }
                                            this.f6539m.a((char) 8480);
                                            return;
                                        }
                                        this.f6539m.a((char) 339);
                                        return;
                                    }
                                    this.f6539m.a((char) 353);
                                    return;
                                }
                                this.f6539m.a((char) 8482);
                                return;
                            }
                            this.f6539m.a((char) 376);
                            return;
                        }
                        this.f6539m.a((char) 338);
                        return;
                    }
                    this.f6539m.a((char) 352);
                    return;
                }
                this.f6539m.a((char) 8230);
                return;
            }
            this.f6539m.a((char) 160);
            return;
        }
        this.f6539m.a(' ');
    }

    private void y(int i10) {
        if (i10 == 160) {
            this.f6539m.a((char) 13252);
            return;
        }
        y.i("Cea708Decoder", "Invalid G3 character: " + i10);
        this.f6539m.a('_');
    }

    private void z() {
        this.f6539m.m(this.f6534h.h(4), this.f6534h.h(2), this.f6534h.h(2), this.f6534h.g(), this.f6534h.g(), this.f6534h.h(3), this.f6534h.h(3));
    }

    @Override // be.e, ae.h
    public /* bridge */ /* synthetic */ void a(long j10) {
        super.a(j10);
    }

    @Override // be.e
    protected g e() {
        List list = this.f6540n;
        this.f6541o = list;
        return new f((List) oe.a.e(list));
    }

    @Override // be.e
    protected void f(k kVar) {
        boolean z10;
        ByteBuffer byteBuffer = (ByteBuffer) oe.a.e(kVar.f47775i);
        this.f6533g.S(byteBuffer.array(), byteBuffer.limit());
        while (this.f6533g.a() >= 3) {
            int H = this.f6533g.H();
            int i10 = H & 3;
            boolean z11 = false;
            if ((H & 4) == 4) {
                z10 = true;
            } else {
                z10 = false;
            }
            byte H2 = (byte) this.f6533g.H();
            byte H3 = (byte) this.f6533g.H();
            if (i10 == 2 || i10 == 3) {
                if (z10) {
                    if (i10 == 3) {
                        o();
                        int i11 = (H2 & 192) >> 6;
                        int i12 = this.f6535i;
                        if (i12 != -1 && i11 != (i12 + 1) % 4) {
                            E();
                            y.i("Cea708Decoder", "Sequence number discontinuity. previous=" + this.f6535i + " current=" + i11);
                        }
                        this.f6535i = i11;
                        int i13 = H2 & 63;
                        if (i13 == 0) {
                            i13 = 64;
                        }
                        C0134c c0134c = new C0134c(i11, i13);
                        this.f6542p = c0134c;
                        byte[] bArr = c0134c.f6575c;
                        int i14 = c0134c.f6576d;
                        c0134c.f6576d = i14 + 1;
                        bArr[i14] = H3;
                    } else {
                        if (i10 == 2) {
                            z11 = true;
                        }
                        oe.a.a(z11);
                        C0134c c0134c2 = this.f6542p;
                        if (c0134c2 == null) {
                            y.c("Cea708Decoder", "Encountered DTVCC_PACKET_DATA before DTVCC_PACKET_START");
                        } else {
                            byte[] bArr2 = c0134c2.f6575c;
                            int i15 = c0134c2.f6576d;
                            int i16 = i15 + 1;
                            c0134c2.f6576d = i16;
                            bArr2[i15] = H2;
                            c0134c2.f6576d = i15 + 2;
                            bArr2[i16] = H3;
                        }
                    }
                    C0134c c0134c3 = this.f6542p;
                    if (c0134c3.f6576d == (c0134c3.f6574b * 2) - 1) {
                        o();
                    }
                }
            }
        }
    }

    @Override // be.e, rc.d
    public void flush() {
        super.flush();
        this.f6540n = null;
        this.f6541o = null;
        this.f6543q = 0;
        this.f6539m = this.f6538l[0];
        E();
        this.f6542p = null;
    }

    @Override // be.e
    public /* bridge */ /* synthetic */ k g() {
        return super.d();
    }

    @Override // be.e
    public /* bridge */ /* synthetic */ l h() {
        return super.b();
    }

    @Override // be.e
    protected boolean k() {
        if (this.f6540n != this.f6541o) {
            return true;
        }
        return false;
    }

    @Override // be.e
    public /* bridge */ /* synthetic */ void l(k kVar) {
        super.c(kVar);
    }

    @Override // be.e, rc.d
    public /* bridge */ /* synthetic */ void release() {
        super.release();
    }
}

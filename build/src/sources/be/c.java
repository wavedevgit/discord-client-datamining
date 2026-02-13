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
    private final h0 f6639g = new h0();

    /* renamed from: h  reason: collision with root package name */
    private final g0 f6640h = new g0();

    /* renamed from: i  reason: collision with root package name */
    private int f6641i = -1;

    /* renamed from: j  reason: collision with root package name */
    private final boolean f6642j;

    /* renamed from: k  reason: collision with root package name */
    private final int f6643k;

    /* renamed from: l  reason: collision with root package name */
    private final b[] f6644l;

    /* renamed from: m  reason: collision with root package name */
    private b f6645m;

    /* renamed from: n  reason: collision with root package name */
    private List f6646n;

    /* renamed from: o  reason: collision with root package name */
    private List f6647o;

    /* renamed from: p  reason: collision with root package name */
    private C0098c f6648p;

    /* renamed from: q  reason: collision with root package name */
    private int f6649q;

    /* JADX INFO: Access modifiers changed from: private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    public static final class a {

        /* renamed from: c  reason: collision with root package name */
        private static final Comparator f6650c = new Comparator() { // from class: be.b
            @Override // java.util.Comparator
            public final int compare(Object obj, Object obj2) {
                int compare;
                compare = Integer.compare(((c.a) obj2).f6652b, ((c.a) obj).f6652b);
                return compare;
            }
        };

        /* renamed from: a  reason: collision with root package name */
        public final ae.b f6651a;

        /* renamed from: b  reason: collision with root package name */
        public final int f6652b;

        public a(CharSequence charSequence, Layout.Alignment alignment, float f10, int i10, int i11, float f11, int i12, float f12, boolean z10, int i13, int i14) {
            b.C0009b n10 = new b.C0009b().o(charSequence).p(alignment).h(f10, i10).i(i11).k(f11).l(i12).n(f12);
            if (z10) {
                n10.s(i13);
            }
            this.f6651a = n10.a();
            this.f6652b = i14;
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
        public static final int f6653w = h(2, 2, 2, 0);

        /* renamed from: x  reason: collision with root package name */
        public static final int f6654x;

        /* renamed from: y  reason: collision with root package name */
        public static final int f6655y;

        /* renamed from: z  reason: collision with root package name */
        private static final int[] f6656z;

        /* renamed from: a  reason: collision with root package name */
        private final List f6657a = new ArrayList();

        /* renamed from: b  reason: collision with root package name */
        private final SpannableStringBuilder f6658b = new SpannableStringBuilder();

        /* renamed from: c  reason: collision with root package name */
        private boolean f6659c;

        /* renamed from: d  reason: collision with root package name */
        private boolean f6660d;

        /* renamed from: e  reason: collision with root package name */
        private int f6661e;

        /* renamed from: f  reason: collision with root package name */
        private boolean f6662f;

        /* renamed from: g  reason: collision with root package name */
        private int f6663g;

        /* renamed from: h  reason: collision with root package name */
        private int f6664h;

        /* renamed from: i  reason: collision with root package name */
        private int f6665i;

        /* renamed from: j  reason: collision with root package name */
        private int f6666j;

        /* renamed from: k  reason: collision with root package name */
        private boolean f6667k;

        /* renamed from: l  reason: collision with root package name */
        private int f6668l;

        /* renamed from: m  reason: collision with root package name */
        private int f6669m;

        /* renamed from: n  reason: collision with root package name */
        private int f6670n;

        /* renamed from: o  reason: collision with root package name */
        private int f6671o;

        /* renamed from: p  reason: collision with root package name */
        private int f6672p;

        /* renamed from: q  reason: collision with root package name */
        private int f6673q;

        /* renamed from: r  reason: collision with root package name */
        private int f6674r;

        /* renamed from: s  reason: collision with root package name */
        private int f6675s;

        /* renamed from: t  reason: collision with root package name */
        private int f6676t;

        /* renamed from: u  reason: collision with root package name */
        private int f6677u;

        /* renamed from: v  reason: collision with root package name */
        private int f6678v;

        static {
            int h10 = h(0, 0, 0, 0);
            f6654x = h10;
            int h11 = h(0, 0, 0, 3);
            f6655y = h11;
            f6656z = new int[]{0, 0, 0, 0, 0, 2, 0};
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
                this.f6657a.add(d());
                this.f6658b.clear();
                if (this.f6672p != -1) {
                    this.f6672p = 0;
                }
                if (this.f6673q != -1) {
                    this.f6673q = 0;
                }
                if (this.f6674r != -1) {
                    this.f6674r = 0;
                }
                if (this.f6676t != -1) {
                    this.f6676t = 0;
                }
                while (true) {
                    if ((this.f6667k && this.f6657a.size() >= this.f6666j) || this.f6657a.size() >= 15) {
                        this.f6657a.remove(0);
                    } else {
                        return;
                    }
                }
            } else {
                this.f6658b.append(c10);
            }
        }

        public void b() {
            int length = this.f6658b.length();
            if (length > 0) {
                this.f6658b.delete(length - 1, length);
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
            SpannableStringBuilder spannableStringBuilder = new SpannableStringBuilder(this.f6658b);
            int length = spannableStringBuilder.length();
            if (length > 0) {
                if (this.f6672p != -1) {
                    spannableStringBuilder.setSpan(new StyleSpan(2), this.f6672p, length, 33);
                }
                if (this.f6673q != -1) {
                    spannableStringBuilder.setSpan(new UnderlineSpan(), this.f6673q, length, 33);
                }
                if (this.f6674r != -1) {
                    spannableStringBuilder.setSpan(new ForegroundColorSpan(this.f6675s), this.f6674r, length, 33);
                }
                if (this.f6676t != -1) {
                    spannableStringBuilder.setSpan(new BackgroundColorSpan(this.f6677u), this.f6676t, length, 33);
                }
            }
            return new SpannableString(spannableStringBuilder);
        }

        public void e() {
            this.f6657a.clear();
            this.f6658b.clear();
            this.f6672p = -1;
            this.f6673q = -1;
            this.f6674r = -1;
            this.f6676t = -1;
            this.f6678v = 0;
        }

        public void f(boolean z10, boolean z11, boolean z12, int i10, boolean z13, int i11, int i12, int i13, int i14, int i15, int i16, int i17) {
            this.f6659c = true;
            this.f6660d = z10;
            this.f6667k = z11;
            this.f6661e = i10;
            this.f6662f = z13;
            this.f6663g = i11;
            this.f6664h = i12;
            this.f6665i = i15;
            int i18 = i13 + 1;
            if (this.f6666j != i18) {
                this.f6666j = i18;
                while (true) {
                    if ((!z11 || this.f6657a.size() < this.f6666j) && this.f6657a.size() < 15) {
                        break;
                    }
                    this.f6657a.remove(0);
                }
            }
            if (i16 != 0 && this.f6669m != i16) {
                this.f6669m = i16;
                int i19 = i16 - 1;
                q(D[i19], f6655y, C[i19], 0, A[i19], B[i19], f6656z[i19]);
            }
            if (i17 != 0 && this.f6670n != i17) {
                this.f6670n = i17;
                int i20 = i17 - 1;
                m(0, 1, 1, false, false, F[i20], E[i20]);
                n(f6653w, G[i20], f6654x);
            }
        }

        public boolean i() {
            return this.f6659c;
        }

        public boolean j() {
            if (i()) {
                if (!this.f6657a.isEmpty() || this.f6658b.length() != 0) {
                    return false;
                }
                return true;
            }
            return true;
        }

        public boolean k() {
            return this.f6660d;
        }

        public void l() {
            e();
            this.f6659c = false;
            this.f6660d = false;
            this.f6661e = 4;
            this.f6662f = false;
            this.f6663g = 0;
            this.f6664h = 0;
            this.f6665i = 0;
            this.f6666j = 15;
            this.f6667k = true;
            this.f6668l = 0;
            this.f6669m = 0;
            this.f6670n = 0;
            int i10 = f6654x;
            this.f6671o = i10;
            this.f6675s = f6653w;
            this.f6677u = i10;
        }

        public void m(int i10, int i11, int i12, boolean z10, boolean z11, int i13, int i14) {
            if (this.f6672p != -1) {
                if (!z10) {
                    this.f6658b.setSpan(new StyleSpan(2), this.f6672p, this.f6658b.length(), 33);
                    this.f6672p = -1;
                }
            } else if (z10) {
                this.f6672p = this.f6658b.length();
            }
            if (this.f6673q != -1) {
                if (!z11) {
                    this.f6658b.setSpan(new UnderlineSpan(), this.f6673q, this.f6658b.length(), 33);
                    this.f6673q = -1;
                }
            } else if (z11) {
                this.f6673q = this.f6658b.length();
            }
        }

        public void n(int i10, int i11, int i12) {
            if (this.f6674r != -1 && this.f6675s != i10) {
                this.f6658b.setSpan(new ForegroundColorSpan(this.f6675s), this.f6674r, this.f6658b.length(), 33);
            }
            if (i10 != f6653w) {
                this.f6674r = this.f6658b.length();
                this.f6675s = i10;
            }
            if (this.f6676t != -1 && this.f6677u != i11) {
                this.f6658b.setSpan(new BackgroundColorSpan(this.f6677u), this.f6676t, this.f6658b.length(), 33);
            }
            if (i11 != f6654x) {
                this.f6676t = this.f6658b.length();
                this.f6677u = i11;
            }
        }

        public void o(int i10, int i11) {
            if (this.f6678v != i10) {
                a('\n');
            }
            this.f6678v = i10;
        }

        public void p(boolean z10) {
            this.f6660d = z10;
        }

        public void q(int i10, int i11, boolean z10, int i12, int i13, int i14, int i15) {
            this.f6671o = i10;
            this.f6668l = i15;
        }
    }

    /* JADX INFO: Access modifiers changed from: private */
    /* renamed from: be.c$c  reason: collision with other inner class name */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    public static final class C0098c {

        /* renamed from: a  reason: collision with root package name */
        public final int f6679a;

        /* renamed from: b  reason: collision with root package name */
        public final int f6680b;

        /* renamed from: c  reason: collision with root package name */
        public final byte[] f6681c;

        /* renamed from: d  reason: collision with root package name */
        int f6682d = 0;

        public C0098c(int i10, int i11) {
            this.f6679a = i10;
            this.f6680b = i11;
            this.f6681c = new byte[(i11 * 2) - 1];
        }
    }

    public c(int i10, List list) {
        boolean z10 = true;
        this.f6643k = i10 == -1 ? 1 : i10;
        this.f6642j = (list == null || !oe.f.h(list)) ? false : z10;
        this.f6644l = new b[8];
        for (int i11 = 0; i11 < 8; i11++) {
            this.f6644l[i11] = new b();
        }
        this.f6645m = this.f6644l[0];
    }

    private void A() {
        int h10 = b.h(this.f6640h.h(2), this.f6640h.h(2), this.f6640h.h(2), this.f6640h.h(2));
        int h11 = b.h(this.f6640h.h(2), this.f6640h.h(2), this.f6640h.h(2), this.f6640h.h(2));
        this.f6640h.r(2);
        this.f6645m.n(h10, h11, b.g(this.f6640h.h(2), this.f6640h.h(2), this.f6640h.h(2)));
    }

    private void B() {
        this.f6640h.r(4);
        int h10 = this.f6640h.h(4);
        this.f6640h.r(2);
        this.f6645m.o(h10, this.f6640h.h(6));
    }

    private void C() {
        int h10 = b.h(this.f6640h.h(2), this.f6640h.h(2), this.f6640h.h(2), this.f6640h.h(2));
        int h11 = this.f6640h.h(2);
        int g10 = b.g(this.f6640h.h(2), this.f6640h.h(2), this.f6640h.h(2));
        if (this.f6640h.g()) {
            h11 |= 4;
        }
        boolean g11 = this.f6640h.g();
        int h12 = this.f6640h.h(2);
        int h13 = this.f6640h.h(2);
        int h14 = this.f6640h.h(2);
        this.f6640h.r(8);
        this.f6645m.q(h10, g10, g11, h11, h12, h13, h14);
    }

    private void D() {
        C0098c c0098c = this.f6648p;
        if (c0098c.f6682d != (c0098c.f6680b * 2) - 1) {
            y.b("Cea708Decoder", "DtvCcPacket ended prematurely; size is " + ((this.f6648p.f6680b * 2) - 1) + ", but current index is " + this.f6648p.f6682d + " (sequence number " + this.f6648p.f6679a + ");");
        }
        g0 g0Var = this.f6640h;
        C0098c c0098c2 = this.f6648p;
        g0Var.o(c0098c2.f6681c, c0098c2.f6682d);
        boolean z10 = false;
        while (true) {
            if (this.f6640h.b() <= 0) {
                break;
            }
            int h10 = this.f6640h.h(3);
            int h11 = this.f6640h.h(5);
            if (h10 == 7) {
                this.f6640h.r(2);
                h10 = this.f6640h.h(6);
                if (h10 < 7) {
                    y.i("Cea708Decoder", "Invalid extended service number: " + h10);
                }
            }
            if (h11 == 0) {
                if (h10 != 0) {
                    y.i("Cea708Decoder", "serviceNumber is non-zero (" + h10 + ") when blockSize is 0");
                }
            } else if (h10 != this.f6643k) {
                this.f6640h.s(h11);
            } else {
                int e10 = this.f6640h.e() + (h11 * 8);
                while (this.f6640h.e() < e10) {
                    int h12 = this.f6640h.h(8);
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
                        int h13 = this.f6640h.h(8);
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
            this.f6646n = p();
        }
    }

    private void E() {
        for (int i10 = 0; i10 < 8; i10++) {
            this.f6644l[i10].l();
        }
    }

    private void o() {
        if (this.f6648p == null) {
            return;
        }
        D();
        this.f6648p = null;
    }

    private List p() {
        a c10;
        ArrayList arrayList = new ArrayList();
        for (int i10 = 0; i10 < 8; i10++) {
            if (!this.f6644l[i10].j() && this.f6644l[i10].k() && (c10 = this.f6644l[i10].c()) != null) {
                arrayList.add(c10);
            }
        }
        Collections.sort(arrayList, a.f6650c);
        ArrayList arrayList2 = new ArrayList(arrayList.size());
        for (int i11 = 0; i11 < arrayList.size(); i11++) {
            arrayList2.add(((a) arrayList.get(i11)).f6651a);
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
                            this.f6645m.a('\n');
                            return;
                        case 14:
                            return;
                        default:
                            if (i10 >= 17 && i10 <= 23) {
                                y.i("Cea708Decoder", "Currently unsupported COMMAND_EXT1 Command: " + i10);
                                this.f6640h.r(8);
                                return;
                            } else if (i10 >= 24 && i10 <= 31) {
                                y.i("Cea708Decoder", "Currently unsupported COMMAND_P16 Command: " + i10);
                                this.f6640h.r(16);
                                return;
                            } else {
                                y.i("Cea708Decoder", "Invalid C0 command: " + i10);
                                return;
                            }
                    }
                }
                this.f6645m.b();
                return;
            }
            this.f6646n = p();
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
                if (this.f6649q != i12) {
                    this.f6649q = i12;
                    this.f6645m = this.f6644l[i12];
                    return;
                }
                return;
            case 136:
                while (i11 <= 8) {
                    if (this.f6640h.g()) {
                        this.f6644l[8 - i11].e();
                    }
                    i11++;
                }
                return;
            case 137:
                for (int i13 = 1; i13 <= 8; i13++) {
                    if (this.f6640h.g()) {
                        this.f6644l[8 - i13].p(true);
                    }
                }
                return;
            case 138:
                while (i11 <= 8) {
                    if (this.f6640h.g()) {
                        this.f6644l[8 - i11].p(false);
                    }
                    i11++;
                }
                return;
            case 139:
                for (int i14 = 1; i14 <= 8; i14++) {
                    if (this.f6640h.g()) {
                        this.f6644l[8 - i14].p(!bVar.k());
                    }
                }
                return;
            case 140:
                while (i11 <= 8) {
                    if (this.f6640h.g()) {
                        this.f6644l[8 - i11].l();
                    }
                    i11++;
                }
                return;
            case 141:
                this.f6640h.r(8);
                return;
            case 142:
                return;
            case 143:
                E();
                return;
            case 144:
                if (!this.f6645m.i()) {
                    this.f6640h.r(16);
                    return;
                } else {
                    z();
                    return;
                }
            case 145:
                if (!this.f6645m.i()) {
                    this.f6640h.r(24);
                    return;
                } else {
                    A();
                    return;
                }
            case MediaImageViewKt.OBSCURED_IMAGE_MIN_WIDTH /* 146 */:
                if (!this.f6645m.i()) {
                    this.f6640h.r(16);
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
                if (!this.f6645m.i()) {
                    this.f6640h.r(32);
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
                if (this.f6649q != i15) {
                    this.f6649q = i15;
                    this.f6645m = this.f6644l[i15];
                    return;
                }
                return;
        }
    }

    private void s(int i10) {
        if (i10 > 7) {
            if (i10 <= 15) {
                this.f6640h.r(8);
            } else if (i10 <= 23) {
                this.f6640h.r(16);
            } else if (i10 <= 31) {
                this.f6640h.r(24);
            }
        }
    }

    private void t(int i10) {
        if (i10 <= 135) {
            this.f6640h.r(32);
        } else if (i10 <= 143) {
            this.f6640h.r(40);
        } else if (i10 <= 159) {
            this.f6640h.r(2);
            this.f6640h.r(this.f6640h.h(6) * 8);
        }
    }

    private void u(int i10) {
        b bVar = this.f6644l[i10];
        this.f6640h.r(2);
        boolean g10 = this.f6640h.g();
        boolean g11 = this.f6640h.g();
        boolean g12 = this.f6640h.g();
        int h10 = this.f6640h.h(3);
        boolean g13 = this.f6640h.g();
        int h11 = this.f6640h.h(7);
        int h12 = this.f6640h.h(8);
        int h13 = this.f6640h.h(4);
        int h14 = this.f6640h.h(4);
        this.f6640h.r(2);
        int h15 = this.f6640h.h(6);
        this.f6640h.r(2);
        bVar.f(g10, g11, g12, h10, g13, h11, h12, h14, h15, h13, this.f6640h.h(3), this.f6640h.h(3));
    }

    private void v(int i10) {
        if (i10 == 127) {
            this.f6645m.a((char) 9835);
        } else {
            this.f6645m.a((char) (i10 & SetSpanOperation.SPAN_MAX_PRIORITY));
        }
    }

    private void w(int i10) {
        this.f6645m.a((char) (i10 & SetSpanOperation.SPAN_MAX_PRIORITY));
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
                                                        this.f6645m.a((char) 9608);
                                                        return;
                                                    case ChatViewRecyclerTypes.MEDIA_ATTACHMENT_MOSAIC_IMAGE /* 49 */:
                                                        this.f6645m.a((char) 8216);
                                                        return;
                                                    case 50:
                                                        this.f6645m.a((char) 8217);
                                                        return;
                                                    case ChatViewRecyclerTypes.MEDIA_ATTACHMENT_MOSAIC_VISUAL_PLACEHOLDER /* 51 */:
                                                        this.f6645m.a((char) 8220);
                                                        return;
                                                    case ChatViewRecyclerTypes.REFERRAL /* 52 */:
                                                        this.f6645m.a((char) 8221);
                                                        return;
                                                    case ChatViewRecyclerTypes.GUILD_PROFILE_INVITE /* 53 */:
                                                        this.f6645m.a((char) 8226);
                                                        return;
                                                    default:
                                                        switch (i10) {
                                                            case 118:
                                                                this.f6645m.a((char) 8539);
                                                                return;
                                                            case 119:
                                                                this.f6645m.a((char) 8540);
                                                                return;
                                                            case 120:
                                                                this.f6645m.a((char) 8541);
                                                                return;
                                                            case 121:
                                                                this.f6645m.a((char) 8542);
                                                                return;
                                                            case 122:
                                                                this.f6645m.a((char) 9474);
                                                                return;
                                                            case 123:
                                                                this.f6645m.a((char) 9488);
                                                                return;
                                                            case 124:
                                                                this.f6645m.a((char) 9492);
                                                                return;
                                                            case 125:
                                                                this.f6645m.a((char) 9472);
                                                                return;
                                                            case 126:
                                                                this.f6645m.a((char) 9496);
                                                                return;
                                                            case 127:
                                                                this.f6645m.a((char) 9484);
                                                                return;
                                                            default:
                                                                y.i("Cea708Decoder", "Invalid G2 character: " + i10);
                                                                return;
                                                        }
                                                }
                                            }
                                            this.f6645m.a((char) 8480);
                                            return;
                                        }
                                        this.f6645m.a((char) 339);
                                        return;
                                    }
                                    this.f6645m.a((char) 353);
                                    return;
                                }
                                this.f6645m.a((char) 8482);
                                return;
                            }
                            this.f6645m.a((char) 376);
                            return;
                        }
                        this.f6645m.a((char) 338);
                        return;
                    }
                    this.f6645m.a((char) 352);
                    return;
                }
                this.f6645m.a((char) 8230);
                return;
            }
            this.f6645m.a((char) 160);
            return;
        }
        this.f6645m.a(' ');
    }

    private void y(int i10) {
        if (i10 == 160) {
            this.f6645m.a((char) 13252);
            return;
        }
        y.i("Cea708Decoder", "Invalid G3 character: " + i10);
        this.f6645m.a('_');
    }

    private void z() {
        this.f6645m.m(this.f6640h.h(4), this.f6640h.h(2), this.f6640h.h(2), this.f6640h.g(), this.f6640h.g(), this.f6640h.h(3), this.f6640h.h(3));
    }

    @Override // be.e, ae.h
    public /* bridge */ /* synthetic */ void a(long j10) {
        super.a(j10);
    }

    @Override // be.e
    protected g e() {
        List list = this.f6646n;
        this.f6647o = list;
        return new f((List) oe.a.e(list));
    }

    @Override // be.e
    protected void f(k kVar) {
        boolean z10;
        ByteBuffer byteBuffer = (ByteBuffer) oe.a.e(kVar.f46798i);
        this.f6639g.S(byteBuffer.array(), byteBuffer.limit());
        while (this.f6639g.a() >= 3) {
            int H = this.f6639g.H();
            int i10 = H & 3;
            boolean z11 = false;
            if ((H & 4) == 4) {
                z10 = true;
            } else {
                z10 = false;
            }
            byte H2 = (byte) this.f6639g.H();
            byte H3 = (byte) this.f6639g.H();
            if (i10 == 2 || i10 == 3) {
                if (z10) {
                    if (i10 == 3) {
                        o();
                        int i11 = (H2 & 192) >> 6;
                        int i12 = this.f6641i;
                        if (i12 != -1 && i11 != (i12 + 1) % 4) {
                            E();
                            y.i("Cea708Decoder", "Sequence number discontinuity. previous=" + this.f6641i + " current=" + i11);
                        }
                        this.f6641i = i11;
                        int i13 = H2 & 63;
                        if (i13 == 0) {
                            i13 = 64;
                        }
                        C0098c c0098c = new C0098c(i11, i13);
                        this.f6648p = c0098c;
                        byte[] bArr = c0098c.f6681c;
                        int i14 = c0098c.f6682d;
                        c0098c.f6682d = i14 + 1;
                        bArr[i14] = H3;
                    } else {
                        if (i10 == 2) {
                            z11 = true;
                        }
                        oe.a.a(z11);
                        C0098c c0098c2 = this.f6648p;
                        if (c0098c2 == null) {
                            y.c("Cea708Decoder", "Encountered DTVCC_PACKET_DATA before DTVCC_PACKET_START");
                        } else {
                            byte[] bArr2 = c0098c2.f6681c;
                            int i15 = c0098c2.f6682d;
                            int i16 = i15 + 1;
                            c0098c2.f6682d = i16;
                            bArr2[i15] = H2;
                            c0098c2.f6682d = i15 + 2;
                            bArr2[i16] = H3;
                        }
                    }
                    C0098c c0098c3 = this.f6648p;
                    if (c0098c3.f6682d == (c0098c3.f6680b * 2) - 1) {
                        o();
                    }
                }
            }
        }
    }

    @Override // be.e, rc.d
    public void flush() {
        super.flush();
        this.f6646n = null;
        this.f6647o = null;
        this.f6649q = 0;
        this.f6645m = this.f6644l[0];
        E();
        this.f6648p = null;
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
        if (this.f6646n != this.f6647o) {
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

package ce;

import android.graphics.Bitmap;
import com.discord.misc.utilities.chat_view_types.ChatViewRecyclerTypes;
import com.facebook.react.fabric.mounting.mountitems.IntBufferBatchMountItem;
import com.facebook.react.views.text.internal.span.SetSpanOperation;
import java.util.ArrayList;
import java.util.Arrays;
import java.util.Collections;
import java.util.zip.Inflater;
import ne.h0;
import ne.w0;
import zd.b;
import zd.f;
import zd.g;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class a extends f {

    /* renamed from: o  reason: collision with root package name */
    private final h0 f7559o;

    /* renamed from: p  reason: collision with root package name */
    private final h0 f7560p;

    /* renamed from: q  reason: collision with root package name */
    private final C0138a f7561q;

    /* renamed from: r  reason: collision with root package name */
    private Inflater f7562r;

    /* JADX INFO: Access modifiers changed from: private */
    /* renamed from: ce.a$a  reason: collision with other inner class name */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    public static final class C0138a {

        /* renamed from: a  reason: collision with root package name */
        private final h0 f7563a = new h0();

        /* renamed from: b  reason: collision with root package name */
        private final int[] f7564b = new int[IntBufferBatchMountItem.INSTRUCTION_UPDATE_EVENT_EMITTER];

        /* renamed from: c  reason: collision with root package name */
        private boolean f7565c;

        /* renamed from: d  reason: collision with root package name */
        private int f7566d;

        /* renamed from: e  reason: collision with root package name */
        private int f7567e;

        /* renamed from: f  reason: collision with root package name */
        private int f7568f;

        /* renamed from: g  reason: collision with root package name */
        private int f7569g;

        /* renamed from: h  reason: collision with root package name */
        private int f7570h;

        /* renamed from: i  reason: collision with root package name */
        private int f7571i;

        /* JADX INFO: Access modifiers changed from: private */
        public void e(h0 h0Var, int i10) {
            boolean z10;
            int K;
            if (i10 >= 4) {
                h0Var.V(3);
                if ((h0Var.H() & IntBufferBatchMountItem.INSTRUCTION_UPDATE_LAYOUT) != 0) {
                    z10 = true;
                } else {
                    z10 = false;
                }
                int i11 = i10 - 4;
                if (z10) {
                    if (i11 >= 7 && (K = h0Var.K()) >= 4) {
                        this.f7570h = h0Var.N();
                        this.f7571i = h0Var.N();
                        this.f7563a.Q(K - 4);
                        i11 = i10 - 11;
                    } else {
                        return;
                    }
                }
                int f10 = this.f7563a.f();
                int g10 = this.f7563a.g();
                if (f10 < g10 && i11 > 0) {
                    int min = Math.min(i11, g10 - f10);
                    h0Var.l(this.f7563a.e(), f10, min);
                    this.f7563a.U(f10 + min);
                }
            }
        }

        /* JADX INFO: Access modifiers changed from: private */
        public void f(h0 h0Var, int i10) {
            if (i10 < 19) {
                return;
            }
            this.f7566d = h0Var.N();
            this.f7567e = h0Var.N();
            h0Var.V(11);
            this.f7568f = h0Var.N();
            this.f7569g = h0Var.N();
        }

        /* JADX INFO: Access modifiers changed from: private */
        public void g(h0 h0Var, int i10) {
            if (i10 % 5 != 2) {
                return;
            }
            h0Var.V(2);
            Arrays.fill(this.f7564b, 0);
            int i11 = i10 / 5;
            for (int i12 = 0; i12 < i11; i12++) {
                int H = h0Var.H();
                int H2 = h0Var.H();
                int H3 = h0Var.H();
                int H4 = h0Var.H();
                double d10 = H2;
                double d11 = H3 - 128;
                double d12 = H4 - 128;
                this.f7564b[H] = (w0.q((int) ((d10 - (0.34414d * d12)) - (d11 * 0.71414d)), 0, SetSpanOperation.SPAN_MAX_PRIORITY) << 8) | (h0Var.H() << 24) | (w0.q((int) ((1.402d * d11) + d10), 0, SetSpanOperation.SPAN_MAX_PRIORITY) << 16) | w0.q((int) (d10 + (d12 * 1.772d)), 0, SetSpanOperation.SPAN_MAX_PRIORITY);
            }
            this.f7565c = true;
        }

        public zd.b d() {
            int i10;
            int H;
            int i11;
            if (this.f7566d != 0 && this.f7567e != 0 && this.f7570h != 0 && this.f7571i != 0 && this.f7563a.g() != 0 && this.f7563a.f() == this.f7563a.g() && this.f7565c) {
                this.f7563a.U(0);
                int i12 = this.f7570h * this.f7571i;
                int[] iArr = new int[i12];
                int i13 = 0;
                while (i13 < i12) {
                    int H2 = this.f7563a.H();
                    if (H2 != 0) {
                        i10 = i13 + 1;
                        iArr[i13] = this.f7564b[H2];
                    } else {
                        int H3 = this.f7563a.H();
                        if (H3 != 0) {
                            if ((H3 & 64) == 0) {
                                H = H3 & 63;
                            } else {
                                H = ((H3 & 63) << 8) | this.f7563a.H();
                            }
                            if ((H3 & IntBufferBatchMountItem.INSTRUCTION_UPDATE_LAYOUT) == 0) {
                                i11 = 0;
                            } else {
                                i11 = this.f7564b[this.f7563a.H()];
                            }
                            i10 = H + i13;
                            Arrays.fill(iArr, i13, i10, i11);
                        }
                    }
                    i13 = i10;
                }
                return new b.C0782b().f(Bitmap.createBitmap(iArr, this.f7570h, this.f7571i, Bitmap.Config.ARGB_8888)).k(this.f7568f / this.f7566d).l(0).h(this.f7569g / this.f7567e, 0).i(0).n(this.f7570h / this.f7566d).g(this.f7571i / this.f7567e).a();
            }
            return null;
        }

        public void h() {
            this.f7566d = 0;
            this.f7567e = 0;
            this.f7568f = 0;
            this.f7569g = 0;
            this.f7570h = 0;
            this.f7571i = 0;
            this.f7563a.Q(0);
            this.f7565c = false;
        }
    }

    public a() {
        super("PgsDecoder");
        this.f7559o = new h0();
        this.f7560p = new h0();
        this.f7561q = new C0138a();
    }

    private void B(h0 h0Var) {
        if (h0Var.a() > 0 && h0Var.j() == 120) {
            if (this.f7562r == null) {
                this.f7562r = new Inflater();
            }
            if (w0.A0(h0Var, this.f7560p, this.f7562r)) {
                h0Var.S(this.f7560p.e(), this.f7560p.g());
            }
        }
    }

    private static zd.b C(h0 h0Var, C0138a c0138a) {
        int g10 = h0Var.g();
        int H = h0Var.H();
        int N = h0Var.N();
        int f10 = h0Var.f() + N;
        zd.b bVar = null;
        if (f10 > g10) {
            h0Var.U(g10);
            return null;
        }
        if (H != 128) {
            switch (H) {
                case 20:
                    c0138a.g(h0Var, N);
                    break;
                case ChatViewRecyclerTypes.FLAGGED_MESSAGE_EMBED /* 21 */:
                    c0138a.e(h0Var, N);
                    break;
                case ChatViewRecyclerTypes.FLAGGED_MESSAGE_ACTION_BAR /* 22 */:
                    c0138a.f(h0Var, N);
                    break;
            }
        } else {
            bVar = c0138a.d();
            c0138a.h();
        }
        h0Var.U(f10);
        return bVar;
    }

    @Override // zd.f
    protected g z(byte[] bArr, int i10, boolean z10) {
        this.f7559o.S(bArr, i10);
        B(this.f7559o);
        this.f7561q.h();
        ArrayList arrayList = new ArrayList();
        while (this.f7559o.a() >= 3) {
            zd.b C = C(this.f7559o, this.f7561q);
            if (C != null) {
                arrayList.add(C);
            }
        }
        return new b(Collections.unmodifiableList(arrayList));
    }
}

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
    private final h0 f8298o;

    /* renamed from: p  reason: collision with root package name */
    private final h0 f8299p;

    /* renamed from: q  reason: collision with root package name */
    private final C0135a f8300q;

    /* renamed from: r  reason: collision with root package name */
    private Inflater f8301r;

    /* JADX INFO: Access modifiers changed from: private */
    /* renamed from: ce.a$a  reason: collision with other inner class name */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    public static final class C0135a {

        /* renamed from: a  reason: collision with root package name */
        private final h0 f8302a = new h0();

        /* renamed from: b  reason: collision with root package name */
        private final int[] f8303b = new int[IntBufferBatchMountItem.INSTRUCTION_UPDATE_EVENT_EMITTER];

        /* renamed from: c  reason: collision with root package name */
        private boolean f8304c;

        /* renamed from: d  reason: collision with root package name */
        private int f8305d;

        /* renamed from: e  reason: collision with root package name */
        private int f8306e;

        /* renamed from: f  reason: collision with root package name */
        private int f8307f;

        /* renamed from: g  reason: collision with root package name */
        private int f8308g;

        /* renamed from: h  reason: collision with root package name */
        private int f8309h;

        /* renamed from: i  reason: collision with root package name */
        private int f8310i;

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
                        this.f8309h = h0Var.N();
                        this.f8310i = h0Var.N();
                        this.f8302a.Q(K - 4);
                        i11 = i10 - 11;
                    } else {
                        return;
                    }
                }
                int f10 = this.f8302a.f();
                int g10 = this.f8302a.g();
                if (f10 < g10 && i11 > 0) {
                    int min = Math.min(i11, g10 - f10);
                    h0Var.l(this.f8302a.e(), f10, min);
                    this.f8302a.U(f10 + min);
                }
            }
        }

        /* JADX INFO: Access modifiers changed from: private */
        public void f(h0 h0Var, int i10) {
            if (i10 < 19) {
                return;
            }
            this.f8305d = h0Var.N();
            this.f8306e = h0Var.N();
            h0Var.V(11);
            this.f8307f = h0Var.N();
            this.f8308g = h0Var.N();
        }

        /* JADX INFO: Access modifiers changed from: private */
        public void g(h0 h0Var, int i10) {
            if (i10 % 5 != 2) {
                return;
            }
            h0Var.V(2);
            Arrays.fill(this.f8303b, 0);
            int i11 = i10 / 5;
            for (int i12 = 0; i12 < i11; i12++) {
                int H = h0Var.H();
                int H2 = h0Var.H();
                int H3 = h0Var.H();
                int H4 = h0Var.H();
                double d10 = H2;
                double d11 = H3 - 128;
                double d12 = H4 - 128;
                this.f8303b[H] = (w0.q((int) ((d10 - (0.34414d * d12)) - (d11 * 0.71414d)), 0, SetSpanOperation.SPAN_MAX_PRIORITY) << 8) | (h0Var.H() << 24) | (w0.q((int) ((1.402d * d11) + d10), 0, SetSpanOperation.SPAN_MAX_PRIORITY) << 16) | w0.q((int) (d10 + (d12 * 1.772d)), 0, SetSpanOperation.SPAN_MAX_PRIORITY);
            }
            this.f8304c = true;
        }

        public zd.b d() {
            int i10;
            int H;
            int i11;
            if (this.f8305d != 0 && this.f8306e != 0 && this.f8309h != 0 && this.f8310i != 0 && this.f8302a.g() != 0 && this.f8302a.f() == this.f8302a.g() && this.f8304c) {
                this.f8302a.U(0);
                int i12 = this.f8309h * this.f8310i;
                int[] iArr = new int[i12];
                int i13 = 0;
                while (i13 < i12) {
                    int H2 = this.f8302a.H();
                    if (H2 != 0) {
                        i10 = i13 + 1;
                        iArr[i13] = this.f8303b[H2];
                    } else {
                        int H3 = this.f8302a.H();
                        if (H3 != 0) {
                            if ((H3 & 64) == 0) {
                                H = H3 & 63;
                            } else {
                                H = ((H3 & 63) << 8) | this.f8302a.H();
                            }
                            if ((H3 & IntBufferBatchMountItem.INSTRUCTION_UPDATE_LAYOUT) == 0) {
                                i11 = 0;
                            } else {
                                i11 = this.f8303b[this.f8302a.H()];
                            }
                            i10 = H + i13;
                            Arrays.fill(iArr, i13, i10, i11);
                        }
                    }
                    i13 = i10;
                }
                return new b.C0779b().f(Bitmap.createBitmap(iArr, this.f8309h, this.f8310i, Bitmap.Config.ARGB_8888)).k(this.f8307f / this.f8305d).l(0).h(this.f8308g / this.f8306e, 0).i(0).n(this.f8309h / this.f8305d).g(this.f8310i / this.f8306e).a();
            }
            return null;
        }

        public void h() {
            this.f8305d = 0;
            this.f8306e = 0;
            this.f8307f = 0;
            this.f8308g = 0;
            this.f8309h = 0;
            this.f8310i = 0;
            this.f8302a.Q(0);
            this.f8304c = false;
        }
    }

    public a() {
        super("PgsDecoder");
        this.f8298o = new h0();
        this.f8299p = new h0();
        this.f8300q = new C0135a();
    }

    private void B(h0 h0Var) {
        if (h0Var.a() > 0 && h0Var.j() == 120) {
            if (this.f8301r == null) {
                this.f8301r = new Inflater();
            }
            if (w0.A0(h0Var, this.f8299p, this.f8301r)) {
                h0Var.S(this.f8299p.e(), this.f8299p.g());
            }
        }
    }

    private static zd.b C(h0 h0Var, C0135a c0135a) {
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
                    c0135a.g(h0Var, N);
                    break;
                case ChatViewRecyclerTypes.FLAGGED_MESSAGE_EMBED /* 21 */:
                    c0135a.e(h0Var, N);
                    break;
                case ChatViewRecyclerTypes.FLAGGED_MESSAGE_ACTION_BAR /* 22 */:
                    c0135a.f(h0Var, N);
                    break;
            }
        } else {
            bVar = c0135a.d();
            c0135a.h();
        }
        h0Var.U(f10);
        return bVar;
    }

    @Override // zd.f
    protected g z(byte[] bArr, int i10, boolean z10) {
        this.f8298o.S(bArr, i10);
        B(this.f8298o);
        this.f8300q.h();
        ArrayList arrayList = new ArrayList();
        while (this.f8298o.a() >= 3) {
            zd.b C = C(this.f8298o, this.f8300q);
            if (C != null) {
                arrayList.add(C);
            }
        }
        return new b(Collections.unmodifiableList(arrayList));
    }
}

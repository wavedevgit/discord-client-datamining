package de;

import ae.b;
import ae.f;
import ae.g;
import android.graphics.Bitmap;
import com.discord.misc.utilities.chat_view_types.ChatViewRecyclerTypes;
import com.facebook.react.fabric.mounting.mountitems.IntBufferBatchMountItem;
import com.facebook.react.views.text.internal.span.SetSpanOperation;
import java.util.ArrayList;
import java.util.Arrays;
import java.util.Collections;
import java.util.zip.Inflater;
import oe.h0;
import oe.w0;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class a extends f {

    /* renamed from: o  reason: collision with root package name */
    private final h0 f21631o;

    /* renamed from: p  reason: collision with root package name */
    private final h0 f21632p;

    /* renamed from: q  reason: collision with root package name */
    private final C0291a f21633q;

    /* renamed from: r  reason: collision with root package name */
    private Inflater f21634r;

    /* JADX INFO: Access modifiers changed from: private */
    /* renamed from: de.a$a  reason: collision with other inner class name */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    public static final class C0291a {

        /* renamed from: a  reason: collision with root package name */
        private final h0 f21635a = new h0();

        /* renamed from: b  reason: collision with root package name */
        private final int[] f21636b = new int[IntBufferBatchMountItem.INSTRUCTION_UPDATE_EVENT_EMITTER];

        /* renamed from: c  reason: collision with root package name */
        private boolean f21637c;

        /* renamed from: d  reason: collision with root package name */
        private int f21638d;

        /* renamed from: e  reason: collision with root package name */
        private int f21639e;

        /* renamed from: f  reason: collision with root package name */
        private int f21640f;

        /* renamed from: g  reason: collision with root package name */
        private int f21641g;

        /* renamed from: h  reason: collision with root package name */
        private int f21642h;

        /* renamed from: i  reason: collision with root package name */
        private int f21643i;

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
                        this.f21642h = h0Var.N();
                        this.f21643i = h0Var.N();
                        this.f21635a.Q(K - 4);
                        i11 = i10 - 11;
                    } else {
                        return;
                    }
                }
                int f10 = this.f21635a.f();
                int g10 = this.f21635a.g();
                if (f10 < g10 && i11 > 0) {
                    int min = Math.min(i11, g10 - f10);
                    h0Var.l(this.f21635a.e(), f10, min);
                    this.f21635a.U(f10 + min);
                }
            }
        }

        /* JADX INFO: Access modifiers changed from: private */
        public void f(h0 h0Var, int i10) {
            if (i10 < 19) {
                return;
            }
            this.f21638d = h0Var.N();
            this.f21639e = h0Var.N();
            h0Var.V(11);
            this.f21640f = h0Var.N();
            this.f21641g = h0Var.N();
        }

        /* JADX INFO: Access modifiers changed from: private */
        public void g(h0 h0Var, int i10) {
            if (i10 % 5 != 2) {
                return;
            }
            h0Var.V(2);
            Arrays.fill(this.f21636b, 0);
            int i11 = i10 / 5;
            for (int i12 = 0; i12 < i11; i12++) {
                int H = h0Var.H();
                int H2 = h0Var.H();
                int H3 = h0Var.H();
                int H4 = h0Var.H();
                double d10 = H2;
                double d11 = H3 - 128;
                double d12 = H4 - 128;
                this.f21636b[H] = (w0.q((int) ((d10 - (0.34414d * d12)) - (d11 * 0.71414d)), 0, SetSpanOperation.SPAN_MAX_PRIORITY) << 8) | (h0Var.H() << 24) | (w0.q((int) ((1.402d * d11) + d10), 0, SetSpanOperation.SPAN_MAX_PRIORITY) << 16) | w0.q((int) (d10 + (d12 * 1.772d)), 0, SetSpanOperation.SPAN_MAX_PRIORITY);
            }
            this.f21637c = true;
        }

        public ae.b d() {
            int i10;
            int H;
            int i11;
            if (this.f21638d != 0 && this.f21639e != 0 && this.f21642h != 0 && this.f21643i != 0 && this.f21635a.g() != 0 && this.f21635a.f() == this.f21635a.g() && this.f21637c) {
                this.f21635a.U(0);
                int i12 = this.f21642h * this.f21643i;
                int[] iArr = new int[i12];
                int i13 = 0;
                while (i13 < i12) {
                    int H2 = this.f21635a.H();
                    if (H2 != 0) {
                        i10 = i13 + 1;
                        iArr[i13] = this.f21636b[H2];
                    } else {
                        int H3 = this.f21635a.H();
                        if (H3 != 0) {
                            if ((H3 & 64) == 0) {
                                H = H3 & 63;
                            } else {
                                H = ((H3 & 63) << 8) | this.f21635a.H();
                            }
                            if ((H3 & IntBufferBatchMountItem.INSTRUCTION_UPDATE_LAYOUT) == 0) {
                                i11 = 0;
                            } else {
                                i11 = this.f21636b[this.f21635a.H()];
                            }
                            i10 = H + i13;
                            Arrays.fill(iArr, i13, i10, i11);
                        }
                    }
                    i13 = i10;
                }
                return new b.C0009b().f(Bitmap.createBitmap(iArr, this.f21642h, this.f21643i, Bitmap.Config.ARGB_8888)).k(this.f21640f / this.f21638d).l(0).h(this.f21641g / this.f21639e, 0).i(0).n(this.f21642h / this.f21638d).g(this.f21643i / this.f21639e).a();
            }
            return null;
        }

        public void h() {
            this.f21638d = 0;
            this.f21639e = 0;
            this.f21640f = 0;
            this.f21641g = 0;
            this.f21642h = 0;
            this.f21643i = 0;
            this.f21635a.Q(0);
            this.f21637c = false;
        }
    }

    public a() {
        super("PgsDecoder");
        this.f21631o = new h0();
        this.f21632p = new h0();
        this.f21633q = new C0291a();
    }

    private void B(h0 h0Var) {
        if (h0Var.a() > 0 && h0Var.j() == 120) {
            if (this.f21634r == null) {
                this.f21634r = new Inflater();
            }
            if (w0.A0(h0Var, this.f21632p, this.f21634r)) {
                h0Var.S(this.f21632p.e(), this.f21632p.g());
            }
        }
    }

    private static ae.b C(h0 h0Var, C0291a c0291a) {
        int g10 = h0Var.g();
        int H = h0Var.H();
        int N = h0Var.N();
        int f10 = h0Var.f() + N;
        ae.b bVar = null;
        if (f10 > g10) {
            h0Var.U(g10);
            return null;
        }
        if (H != 128) {
            switch (H) {
                case 20:
                    c0291a.g(h0Var, N);
                    break;
                case ChatViewRecyclerTypes.FLAGGED_MESSAGE_EMBED /* 21 */:
                    c0291a.e(h0Var, N);
                    break;
                case ChatViewRecyclerTypes.FLAGGED_MESSAGE_ACTION_BAR /* 22 */:
                    c0291a.f(h0Var, N);
                    break;
            }
        } else {
            bVar = c0291a.d();
            c0291a.h();
        }
        h0Var.U(f10);
        return bVar;
    }

    @Override // ae.f
    protected g z(byte[] bArr, int i10, boolean z10) {
        this.f21631o.S(bArr, i10);
        B(this.f21631o);
        this.f21633q.h();
        ArrayList arrayList = new ArrayList();
        while (this.f21631o.a() >= 3) {
            ae.b C = C(this.f21631o, this.f21633q);
            if (C != null) {
                arrayList.add(C);
            }
        }
        return new b(Collections.unmodifiableList(arrayList));
    }
}

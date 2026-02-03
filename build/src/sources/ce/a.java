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
    private final h0 f8154o;

    /* renamed from: p  reason: collision with root package name */
    private final h0 f8155p;

    /* renamed from: q  reason: collision with root package name */
    private final C0140a f8156q;

    /* renamed from: r  reason: collision with root package name */
    private Inflater f8157r;

    /* JADX INFO: Access modifiers changed from: private */
    /* renamed from: ce.a$a  reason: collision with other inner class name */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    public static final class C0140a {

        /* renamed from: a  reason: collision with root package name */
        private final h0 f8158a = new h0();

        /* renamed from: b  reason: collision with root package name */
        private final int[] f8159b = new int[IntBufferBatchMountItem.INSTRUCTION_UPDATE_EVENT_EMITTER];

        /* renamed from: c  reason: collision with root package name */
        private boolean f8160c;

        /* renamed from: d  reason: collision with root package name */
        private int f8161d;

        /* renamed from: e  reason: collision with root package name */
        private int f8162e;

        /* renamed from: f  reason: collision with root package name */
        private int f8163f;

        /* renamed from: g  reason: collision with root package name */
        private int f8164g;

        /* renamed from: h  reason: collision with root package name */
        private int f8165h;

        /* renamed from: i  reason: collision with root package name */
        private int f8166i;

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
                        this.f8165h = h0Var.N();
                        this.f8166i = h0Var.N();
                        this.f8158a.Q(K - 4);
                        i11 = i10 - 11;
                    } else {
                        return;
                    }
                }
                int f10 = this.f8158a.f();
                int g10 = this.f8158a.g();
                if (f10 < g10 && i11 > 0) {
                    int min = Math.min(i11, g10 - f10);
                    h0Var.l(this.f8158a.e(), f10, min);
                    this.f8158a.U(f10 + min);
                }
            }
        }

        /* JADX INFO: Access modifiers changed from: private */
        public void f(h0 h0Var, int i10) {
            if (i10 < 19) {
                return;
            }
            this.f8161d = h0Var.N();
            this.f8162e = h0Var.N();
            h0Var.V(11);
            this.f8163f = h0Var.N();
            this.f8164g = h0Var.N();
        }

        /* JADX INFO: Access modifiers changed from: private */
        public void g(h0 h0Var, int i10) {
            if (i10 % 5 != 2) {
                return;
            }
            h0Var.V(2);
            Arrays.fill(this.f8159b, 0);
            int i11 = i10 / 5;
            for (int i12 = 0; i12 < i11; i12++) {
                int H = h0Var.H();
                int H2 = h0Var.H();
                int H3 = h0Var.H();
                int H4 = h0Var.H();
                double d10 = H2;
                double d11 = H3 - 128;
                double d12 = H4 - 128;
                this.f8159b[H] = (w0.q((int) ((d10 - (0.34414d * d12)) - (d11 * 0.71414d)), 0, SetSpanOperation.SPAN_MAX_PRIORITY) << 8) | (h0Var.H() << 24) | (w0.q((int) ((1.402d * d11) + d10), 0, SetSpanOperation.SPAN_MAX_PRIORITY) << 16) | w0.q((int) (d10 + (d12 * 1.772d)), 0, SetSpanOperation.SPAN_MAX_PRIORITY);
            }
            this.f8160c = true;
        }

        public zd.b d() {
            int i10;
            int H;
            int i11;
            if (this.f8161d != 0 && this.f8162e != 0 && this.f8165h != 0 && this.f8166i != 0 && this.f8158a.g() != 0 && this.f8158a.f() == this.f8158a.g() && this.f8160c) {
                this.f8158a.U(0);
                int i12 = this.f8165h * this.f8166i;
                int[] iArr = new int[i12];
                int i13 = 0;
                while (i13 < i12) {
                    int H2 = this.f8158a.H();
                    if (H2 != 0) {
                        i10 = i13 + 1;
                        iArr[i13] = this.f8159b[H2];
                    } else {
                        int H3 = this.f8158a.H();
                        if (H3 != 0) {
                            if ((H3 & 64) == 0) {
                                H = H3 & 63;
                            } else {
                                H = ((H3 & 63) << 8) | this.f8158a.H();
                            }
                            if ((H3 & IntBufferBatchMountItem.INSTRUCTION_UPDATE_LAYOUT) == 0) {
                                i11 = 0;
                            } else {
                                i11 = this.f8159b[this.f8158a.H()];
                            }
                            i10 = H + i13;
                            Arrays.fill(iArr, i13, i10, i11);
                        }
                    }
                    i13 = i10;
                }
                return new b.C0790b().f(Bitmap.createBitmap(iArr, this.f8165h, this.f8166i, Bitmap.Config.ARGB_8888)).k(this.f8163f / this.f8161d).l(0).h(this.f8164g / this.f8162e, 0).i(0).n(this.f8165h / this.f8161d).g(this.f8166i / this.f8162e).a();
            }
            return null;
        }

        public void h() {
            this.f8161d = 0;
            this.f8162e = 0;
            this.f8163f = 0;
            this.f8164g = 0;
            this.f8165h = 0;
            this.f8166i = 0;
            this.f8158a.Q(0);
            this.f8160c = false;
        }
    }

    public a() {
        super("PgsDecoder");
        this.f8154o = new h0();
        this.f8155p = new h0();
        this.f8156q = new C0140a();
    }

    private void B(h0 h0Var) {
        if (h0Var.a() > 0 && h0Var.j() == 120) {
            if (this.f8157r == null) {
                this.f8157r = new Inflater();
            }
            if (w0.A0(h0Var, this.f8155p, this.f8157r)) {
                h0Var.S(this.f8155p.e(), this.f8155p.g());
            }
        }
    }

    private static zd.b C(h0 h0Var, C0140a c0140a) {
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
                    c0140a.g(h0Var, N);
                    break;
                case ChatViewRecyclerTypes.FLAGGED_MESSAGE_EMBED /* 21 */:
                    c0140a.e(h0Var, N);
                    break;
                case ChatViewRecyclerTypes.FLAGGED_MESSAGE_ACTION_BAR /* 22 */:
                    c0140a.f(h0Var, N);
                    break;
            }
        } else {
            bVar = c0140a.d();
            c0140a.h();
        }
        h0Var.U(f10);
        return bVar;
    }

    @Override // zd.f
    protected g z(byte[] bArr, int i10, boolean z10) {
        this.f8154o.S(bArr, i10);
        B(this.f8154o);
        this.f8156q.h();
        ArrayList arrayList = new ArrayList();
        while (this.f8154o.a() >= 3) {
            zd.b C = C(this.f8154o, this.f8156q);
            if (C != null) {
                arrayList.add(C);
            }
        }
        return new b(Collections.unmodifiableList(arrayList));
    }
}

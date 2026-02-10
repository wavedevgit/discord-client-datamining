package ce;

import ae.b;
import android.graphics.Bitmap;
import android.graphics.Canvas;
import android.graphics.Paint;
import android.graphics.PorterDuff;
import android.graphics.PorterDuffXfermode;
import android.util.SparseArray;
import com.discord.misc.utilities.chat_view_types.ChatViewRecyclerTypes;
import com.facebook.react.fabric.mounting.mountitems.IntBufferBatchMountItem;
import com.facebook.react.views.text.internal.span.SetSpanOperation;
import java.util.ArrayList;
import java.util.Collections;
import java.util.List;
import oe.g0;
import oe.w0;
import oe.y;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
final class b {

    /* renamed from: h  reason: collision with root package name */
    private static final byte[] f7530h = {0, 7, 8, 15};

    /* renamed from: i  reason: collision with root package name */
    private static final byte[] f7531i = {0, 119, -120, -1};

    /* renamed from: j  reason: collision with root package name */
    private static final byte[] f7532j = {0, 17, 34, 51, 68, 85, 102, 119, -120, -103, -86, -69, -52, -35, -18, -1};

    /* renamed from: a  reason: collision with root package name */
    private final Paint f7533a;

    /* renamed from: b  reason: collision with root package name */
    private final Paint f7534b;

    /* renamed from: c  reason: collision with root package name */
    private final Canvas f7535c;

    /* renamed from: d  reason: collision with root package name */
    private final C0149b f7536d;

    /* renamed from: e  reason: collision with root package name */
    private final a f7537e;

    /* renamed from: f  reason: collision with root package name */
    private final h f7538f;

    /* renamed from: g  reason: collision with root package name */
    private Bitmap f7539g;

    /* JADX INFO: Access modifiers changed from: private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    public static final class a {

        /* renamed from: a  reason: collision with root package name */
        public final int f7540a;

        /* renamed from: b  reason: collision with root package name */
        public final int[] f7541b;

        /* renamed from: c  reason: collision with root package name */
        public final int[] f7542c;

        /* renamed from: d  reason: collision with root package name */
        public final int[] f7543d;

        public a(int i10, int[] iArr, int[] iArr2, int[] iArr3) {
            this.f7540a = i10;
            this.f7541b = iArr;
            this.f7542c = iArr2;
            this.f7543d = iArr3;
        }
    }

    /* JADX INFO: Access modifiers changed from: private */
    /* renamed from: ce.b$b  reason: collision with other inner class name */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    public static final class C0149b {

        /* renamed from: a  reason: collision with root package name */
        public final int f7544a;

        /* renamed from: b  reason: collision with root package name */
        public final int f7545b;

        /* renamed from: c  reason: collision with root package name */
        public final int f7546c;

        /* renamed from: d  reason: collision with root package name */
        public final int f7547d;

        /* renamed from: e  reason: collision with root package name */
        public final int f7548e;

        /* renamed from: f  reason: collision with root package name */
        public final int f7549f;

        public C0149b(int i10, int i11, int i12, int i13, int i14, int i15) {
            this.f7544a = i10;
            this.f7545b = i11;
            this.f7546c = i12;
            this.f7547d = i13;
            this.f7548e = i14;
            this.f7549f = i15;
        }
    }

    /* JADX INFO: Access modifiers changed from: private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    public static final class c {

        /* renamed from: a  reason: collision with root package name */
        public final int f7550a;

        /* renamed from: b  reason: collision with root package name */
        public final boolean f7551b;

        /* renamed from: c  reason: collision with root package name */
        public final byte[] f7552c;

        /* renamed from: d  reason: collision with root package name */
        public final byte[] f7553d;

        public c(int i10, boolean z10, byte[] bArr, byte[] bArr2) {
            this.f7550a = i10;
            this.f7551b = z10;
            this.f7552c = bArr;
            this.f7553d = bArr2;
        }
    }

    /* JADX INFO: Access modifiers changed from: private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    public static final class d {

        /* renamed from: a  reason: collision with root package name */
        public final int f7554a;

        /* renamed from: b  reason: collision with root package name */
        public final int f7555b;

        /* renamed from: c  reason: collision with root package name */
        public final int f7556c;

        /* renamed from: d  reason: collision with root package name */
        public final SparseArray f7557d;

        public d(int i10, int i11, int i12, SparseArray sparseArray) {
            this.f7554a = i10;
            this.f7555b = i11;
            this.f7556c = i12;
            this.f7557d = sparseArray;
        }
    }

    /* JADX INFO: Access modifiers changed from: private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    public static final class e {

        /* renamed from: a  reason: collision with root package name */
        public final int f7558a;

        /* renamed from: b  reason: collision with root package name */
        public final int f7559b;

        public e(int i10, int i11) {
            this.f7558a = i10;
            this.f7559b = i11;
        }
    }

    /* JADX INFO: Access modifiers changed from: private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    public static final class f {

        /* renamed from: a  reason: collision with root package name */
        public final int f7560a;

        /* renamed from: b  reason: collision with root package name */
        public final boolean f7561b;

        /* renamed from: c  reason: collision with root package name */
        public final int f7562c;

        /* renamed from: d  reason: collision with root package name */
        public final int f7563d;

        /* renamed from: e  reason: collision with root package name */
        public final int f7564e;

        /* renamed from: f  reason: collision with root package name */
        public final int f7565f;

        /* renamed from: g  reason: collision with root package name */
        public final int f7566g;

        /* renamed from: h  reason: collision with root package name */
        public final int f7567h;

        /* renamed from: i  reason: collision with root package name */
        public final int f7568i;

        /* renamed from: j  reason: collision with root package name */
        public final int f7569j;

        /* renamed from: k  reason: collision with root package name */
        public final SparseArray f7570k;

        public f(int i10, boolean z10, int i11, int i12, int i13, int i14, int i15, int i16, int i17, int i18, SparseArray sparseArray) {
            this.f7560a = i10;
            this.f7561b = z10;
            this.f7562c = i11;
            this.f7563d = i12;
            this.f7564e = i13;
            this.f7565f = i14;
            this.f7566g = i15;
            this.f7567h = i16;
            this.f7568i = i17;
            this.f7569j = i18;
            this.f7570k = sparseArray;
        }

        public void a(f fVar) {
            SparseArray sparseArray = fVar.f7570k;
            for (int i10 = 0; i10 < sparseArray.size(); i10++) {
                this.f7570k.put(sparseArray.keyAt(i10), (g) sparseArray.valueAt(i10));
            }
        }
    }

    /* JADX INFO: Access modifiers changed from: private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    public static final class g {

        /* renamed from: a  reason: collision with root package name */
        public final int f7571a;

        /* renamed from: b  reason: collision with root package name */
        public final int f7572b;

        /* renamed from: c  reason: collision with root package name */
        public final int f7573c;

        /* renamed from: d  reason: collision with root package name */
        public final int f7574d;

        /* renamed from: e  reason: collision with root package name */
        public final int f7575e;

        /* renamed from: f  reason: collision with root package name */
        public final int f7576f;

        public g(int i10, int i11, int i12, int i13, int i14, int i15) {
            this.f7571a = i10;
            this.f7572b = i11;
            this.f7573c = i12;
            this.f7574d = i13;
            this.f7575e = i14;
            this.f7576f = i15;
        }
    }

    /* JADX INFO: Access modifiers changed from: private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    public static final class h {

        /* renamed from: a  reason: collision with root package name */
        public final int f7577a;

        /* renamed from: b  reason: collision with root package name */
        public final int f7578b;

        /* renamed from: c  reason: collision with root package name */
        public final SparseArray f7579c = new SparseArray();

        /* renamed from: d  reason: collision with root package name */
        public final SparseArray f7580d = new SparseArray();

        /* renamed from: e  reason: collision with root package name */
        public final SparseArray f7581e = new SparseArray();

        /* renamed from: f  reason: collision with root package name */
        public final SparseArray f7582f = new SparseArray();

        /* renamed from: g  reason: collision with root package name */
        public final SparseArray f7583g = new SparseArray();

        /* renamed from: h  reason: collision with root package name */
        public C0149b f7584h;

        /* renamed from: i  reason: collision with root package name */
        public d f7585i;

        public h(int i10, int i11) {
            this.f7577a = i10;
            this.f7578b = i11;
        }

        public void a() {
            this.f7579c.clear();
            this.f7580d.clear();
            this.f7581e.clear();
            this.f7582f.clear();
            this.f7583g.clear();
            this.f7584h = null;
            this.f7585i = null;
        }
    }

    public b(int i10, int i11) {
        Paint paint = new Paint();
        this.f7533a = paint;
        paint.setStyle(Paint.Style.FILL_AND_STROKE);
        paint.setXfermode(new PorterDuffXfermode(PorterDuff.Mode.SRC));
        paint.setPathEffect(null);
        Paint paint2 = new Paint();
        this.f7534b = paint2;
        paint2.setStyle(Paint.Style.FILL);
        paint2.setXfermode(new PorterDuffXfermode(PorterDuff.Mode.DST_OVER));
        paint2.setPathEffect(null);
        this.f7535c = new Canvas();
        this.f7536d = new C0149b(719, 575, 0, 719, 0, 575);
        this.f7537e = new a(0, c(), d(), e());
        this.f7538f = new h(i10, i11);
    }

    private static byte[] a(int i10, int i11, g0 g0Var) {
        byte[] bArr = new byte[i10];
        for (int i12 = 0; i12 < i10; i12++) {
            bArr[i12] = (byte) g0Var.h(i11);
        }
        return bArr;
    }

    private static int[] c() {
        return new int[]{0, -1, -16777216, -8421505};
    }

    private static int[] d() {
        int i10;
        int i11;
        int i12;
        int i13;
        int i14;
        int[] iArr = new int[16];
        iArr[0] = 0;
        for (int i15 = 1; i15 < 16; i15++) {
            if (i15 < 8) {
                if ((i15 & 1) != 0) {
                    i12 = 255;
                } else {
                    i12 = 0;
                }
                if ((i15 & 2) != 0) {
                    i13 = 255;
                } else {
                    i13 = 0;
                }
                if ((i15 & 4) != 0) {
                    i14 = 255;
                } else {
                    i14 = 0;
                }
                iArr[i15] = f(SetSpanOperation.SPAN_MAX_PRIORITY, i12, i13, i14);
            } else {
                int i16 = 127;
                if ((i15 & 1) != 0) {
                    i10 = 127;
                } else {
                    i10 = 0;
                }
                if ((i15 & 2) != 0) {
                    i11 = 127;
                } else {
                    i11 = 0;
                }
                if ((i15 & 4) == 0) {
                    i16 = 0;
                }
                iArr[i15] = f(SetSpanOperation.SPAN_MAX_PRIORITY, i10, i11, i16);
            }
        }
        return iArr;
    }

    private static int[] e() {
        int i10;
        int i11;
        int i12;
        int i13;
        int i14;
        int i15;
        int i16;
        int i17;
        int i18;
        int i19;
        int i20;
        int i21;
        int i22;
        int i23;
        int i24;
        int i25;
        int i26;
        int i27;
        int[] iArr = new int[IntBufferBatchMountItem.INSTRUCTION_UPDATE_EVENT_EMITTER];
        iArr[0] = 0;
        for (int i28 = 0; i28 < 256; i28++) {
            int i29 = SetSpanOperation.SPAN_MAX_PRIORITY;
            if (i28 < 8) {
                if ((i28 & 1) != 0) {
                    i26 = 255;
                } else {
                    i26 = 0;
                }
                if ((i28 & 2) != 0) {
                    i27 = 255;
                } else {
                    i27 = 0;
                }
                if ((i28 & 4) == 0) {
                    i29 = 0;
                }
                iArr[i28] = f(63, i26, i27, i29);
            } else {
                int i30 = i28 & 136;
                int i31 = 170;
                int i32 = 85;
                if (i30 != 0) {
                    if (i30 != 8) {
                        int i33 = 43;
                        if (i30 != 128) {
                            if (i30 == 136) {
                                if ((i28 & 1) != 0) {
                                    i22 = 43;
                                } else {
                                    i22 = 0;
                                }
                                if ((i28 & 16) != 0) {
                                    i23 = 85;
                                } else {
                                    i23 = 0;
                                }
                                int i34 = i22 + i23;
                                if ((i28 & 2) != 0) {
                                    i24 = 43;
                                } else {
                                    i24 = 0;
                                }
                                if ((i28 & 32) != 0) {
                                    i25 = 85;
                                } else {
                                    i25 = 0;
                                }
                                int i35 = i24 + i25;
                                if ((i28 & 4) == 0) {
                                    i33 = 0;
                                }
                                if ((i28 & 64) == 0) {
                                    i32 = 0;
                                }
                                iArr[i28] = f(SetSpanOperation.SPAN_MAX_PRIORITY, i34, i35, i33 + i32);
                            }
                        } else {
                            if ((i28 & 1) != 0) {
                                i18 = 43;
                            } else {
                                i18 = 0;
                            }
                            int i36 = i18 + 127;
                            if ((i28 & 16) != 0) {
                                i19 = 85;
                            } else {
                                i19 = 0;
                            }
                            int i37 = i36 + i19;
                            if ((i28 & 2) != 0) {
                                i20 = 43;
                            } else {
                                i20 = 0;
                            }
                            int i38 = i20 + 127;
                            if ((i28 & 32) != 0) {
                                i21 = 85;
                            } else {
                                i21 = 0;
                            }
                            int i39 = i38 + i21;
                            if ((i28 & 4) == 0) {
                                i33 = 0;
                            }
                            int i40 = i33 + 127;
                            if ((i28 & 64) == 0) {
                                i32 = 0;
                            }
                            iArr[i28] = f(SetSpanOperation.SPAN_MAX_PRIORITY, i37, i39, i40 + i32);
                        }
                    } else {
                        if ((i28 & 1) != 0) {
                            i14 = 85;
                        } else {
                            i14 = 0;
                        }
                        if ((i28 & 16) != 0) {
                            i15 = 170;
                        } else {
                            i15 = 0;
                        }
                        int i41 = i14 + i15;
                        if ((i28 & 2) != 0) {
                            i16 = 85;
                        } else {
                            i16 = 0;
                        }
                        if ((i28 & 32) != 0) {
                            i17 = 170;
                        } else {
                            i17 = 0;
                        }
                        int i42 = i16 + i17;
                        if ((i28 & 4) == 0) {
                            i32 = 0;
                        }
                        if ((i28 & 64) == 0) {
                            i31 = 0;
                        }
                        iArr[i28] = f(127, i41, i42, i32 + i31);
                    }
                } else {
                    if ((i28 & 1) != 0) {
                        i10 = 85;
                    } else {
                        i10 = 0;
                    }
                    if ((i28 & 16) != 0) {
                        i11 = 170;
                    } else {
                        i11 = 0;
                    }
                    int i43 = i10 + i11;
                    if ((i28 & 2) != 0) {
                        i12 = 85;
                    } else {
                        i12 = 0;
                    }
                    if ((i28 & 32) != 0) {
                        i13 = 170;
                    } else {
                        i13 = 0;
                    }
                    int i44 = i12 + i13;
                    if ((i28 & 4) == 0) {
                        i32 = 0;
                    }
                    if ((i28 & 64) == 0) {
                        i31 = 0;
                    }
                    iArr[i28] = f(SetSpanOperation.SPAN_MAX_PRIORITY, i43, i44, i32 + i31);
                }
            }
        }
        return iArr;
    }

    private static int f(int i10, int i11, int i12, int i13) {
        return (i10 << 24) | (i11 << 16) | (i12 << 8) | i13;
    }

    private static int g(g0 g0Var, int[] iArr, byte[] bArr, int i10, int i11, Paint paint, Canvas canvas) {
        boolean z10;
        int i12;
        int h10;
        int h11;
        boolean z11 = false;
        while (true) {
            byte h12 = g0Var.h(2);
            if (h12 != 0) {
                z10 = z11;
                i12 = 1;
            } else {
                if (g0Var.g()) {
                    h10 = g0Var.h(3) + 3;
                    h11 = g0Var.h(2);
                } else {
                    if (g0Var.g()) {
                        z10 = z11;
                        i12 = 1;
                    } else {
                        int h13 = g0Var.h(2);
                        if (h13 != 0) {
                            if (h13 != 1) {
                                if (h13 != 2) {
                                    if (h13 != 3) {
                                        z10 = z11;
                                    } else {
                                        h10 = g0Var.h(8) + 29;
                                        h11 = g0Var.h(2);
                                    }
                                } else {
                                    h10 = g0Var.h(4) + 12;
                                    h11 = g0Var.h(2);
                                }
                            } else {
                                z10 = z11;
                                i12 = 2;
                            }
                        } else {
                            z10 = true;
                        }
                        h12 = 0;
                        i12 = 0;
                    }
                    h12 = 0;
                }
                z10 = z11;
                i12 = h10;
                h12 = h11;
            }
            if (i12 != 0 && paint != null) {
                if (bArr != null) {
                    h12 = bArr[h12];
                }
                paint.setColor(iArr[h12]);
                canvas.drawRect(i10, i11, i10 + i12, 1 + i11, paint);
            }
            i10 += i12;
            if (z10) {
                return i10;
            }
            z11 = z10;
        }
    }

    private static int h(g0 g0Var, int[] iArr, byte[] bArr, int i10, int i11, Paint paint, Canvas canvas) {
        boolean z10;
        int i12;
        int h10;
        int h11;
        boolean z11 = false;
        while (true) {
            byte h12 = g0Var.h(4);
            if (h12 != 0) {
                z10 = z11;
                i12 = 1;
            } else if (!g0Var.g()) {
                int h13 = g0Var.h(3);
                if (h13 != 0) {
                    z10 = z11;
                    i12 = h13 + 2;
                    h12 = 0;
                } else {
                    z10 = true;
                    h12 = 0;
                    i12 = 0;
                }
            } else {
                if (!g0Var.g()) {
                    h10 = g0Var.h(2) + 4;
                    h11 = g0Var.h(4);
                } else {
                    int h14 = g0Var.h(2);
                    if (h14 != 0) {
                        if (h14 != 1) {
                            if (h14 != 2) {
                                if (h14 != 3) {
                                    z10 = z11;
                                    h12 = 0;
                                    i12 = 0;
                                } else {
                                    h10 = g0Var.h(8) + 25;
                                    h11 = g0Var.h(4);
                                }
                            } else {
                                h10 = g0Var.h(4) + 9;
                                h11 = g0Var.h(4);
                            }
                        } else {
                            h12 = 0;
                            i12 = 2;
                            z10 = z11;
                        }
                    } else {
                        z10 = z11;
                        i12 = 1;
                        h12 = 0;
                    }
                }
                z10 = z11;
                i12 = h10;
                h12 = h11;
            }
            if (i12 != 0 && paint != null) {
                if (bArr != null) {
                    h12 = bArr[h12];
                }
                paint.setColor(iArr[h12]);
                canvas.drawRect(i10, i11, i10 + i12, 1 + i11, paint);
            }
            i10 += i12;
            if (z10) {
                return i10;
            }
            z11 = z10;
        }
    }

    private static int i(g0 g0Var, int[] iArr, byte[] bArr, int i10, int i11, Paint paint, Canvas canvas) {
        boolean z10;
        int h10;
        boolean z11 = false;
        while (true) {
            byte h11 = g0Var.h(8);
            if (h11 != 0) {
                z10 = z11;
                h10 = 1;
            } else if (!g0Var.g()) {
                int h12 = g0Var.h(7);
                if (h12 != 0) {
                    z10 = z11;
                    h10 = h12;
                    h11 = 0;
                } else {
                    z10 = true;
                    h11 = 0;
                    h10 = 0;
                }
            } else {
                z10 = z11;
                h10 = g0Var.h(7);
                h11 = g0Var.h(8);
            }
            if (h10 != 0 && paint != null) {
                if (bArr != null) {
                    h11 = bArr[h11];
                }
                paint.setColor(iArr[h11]);
                canvas.drawRect(i10, i11, i10 + h10, 1 + i11, paint);
            }
            i10 += h10;
            if (z10) {
                return i10;
            }
            z11 = z10;
        }
    }

    private static void j(byte[] bArr, int[] iArr, int i10, int i11, int i12, Paint paint, Canvas canvas) {
        int[] iArr2;
        Paint paint2;
        Canvas canvas2;
        byte[] bArr2;
        byte[] bArr3;
        byte[] bArr4;
        byte[] bArr5;
        g0 g0Var = new g0(bArr);
        byte[] bArr6 = null;
        byte[] bArr7 = null;
        int i13 = i11;
        int i14 = i12;
        byte[] bArr8 = null;
        while (g0Var.b() != 0) {
            int h10 = g0Var.h(8);
            if (h10 != 240) {
                switch (h10) {
                    case 16:
                        iArr2 = iArr;
                        Paint paint3 = paint;
                        canvas2 = canvas;
                        if (i10 == 3) {
                            if (bArr8 == null) {
                                bArr3 = f7531i;
                            } else {
                                bArr3 = bArr8;
                            }
                        } else if (i10 == 2) {
                            if (bArr7 == null) {
                                bArr3 = f7530h;
                            } else {
                                bArr3 = bArr7;
                            }
                        } else {
                            bArr2 = null;
                            paint2 = paint3;
                            i13 = g(g0Var, iArr2, bArr2, i13, i14, paint2, canvas2);
                            g0Var.c();
                            continue;
                        }
                        paint2 = paint3;
                        bArr2 = bArr3;
                        i13 = g(g0Var, iArr2, bArr2, i13, i14, paint2, canvas2);
                        g0Var.c();
                        continue;
                    case 17:
                        iArr2 = iArr;
                        Paint paint4 = paint;
                        canvas2 = canvas;
                        if (i10 == 3) {
                            if (bArr6 == null) {
                                bArr5 = f7532j;
                            } else {
                                bArr5 = bArr6;
                            }
                            bArr4 = bArr5;
                        } else {
                            bArr4 = null;
                        }
                        paint2 = paint4;
                        i13 = h(g0Var, iArr2, bArr4, i13, i14, paint2, canvas2);
                        g0Var.c();
                        continue;
                    case ChatViewRecyclerTypes.EPHEMERAL_INDICATION /* 18 */:
                        iArr2 = iArr;
                        paint2 = paint;
                        canvas2 = canvas;
                        i13 = i(g0Var, iArr2, null, i13, i14, paint2, canvas2);
                        continue;
                    default:
                        switch (h10) {
                            case 32:
                                bArr7 = a(4, 4, g0Var);
                                break;
                            case ChatViewRecyclerTypes.AUTO_MODERATION_NOTIFICATION_EMBED /* 33 */:
                                bArr8 = a(4, 8, g0Var);
                                break;
                            case ChatViewRecyclerTypes.CHANNEL_DEADCHAT_PROMPT_ACTIONS /* 34 */:
                                bArr6 = a(16, 8, g0Var);
                                break;
                        }
                        iArr2 = iArr;
                        paint2 = paint;
                        canvas2 = canvas;
                        continue;
                }
            } else {
                iArr2 = iArr;
                paint2 = paint;
                canvas2 = canvas;
                i14 += 2;
                i13 = i11;
            }
            iArr = iArr2;
            paint = paint2;
            canvas = canvas2;
        }
    }

    private static void k(c cVar, a aVar, int i10, int i11, int i12, Paint paint, Canvas canvas) {
        int[] iArr;
        if (i10 == 3) {
            iArr = aVar.f7543d;
        } else if (i10 == 2) {
            iArr = aVar.f7542c;
        } else {
            iArr = aVar.f7541b;
        }
        int[] iArr2 = iArr;
        j(cVar.f7552c, iArr2, i10, i11, i12, paint, canvas);
        j(cVar.f7553d, iArr2, i10, i11, i12 + 1, paint, canvas);
    }

    private static a l(g0 g0Var, int i10) {
        int[] iArr;
        int h10;
        int i11;
        int h11;
        int h12;
        int i12;
        int i13 = 8;
        int h13 = g0Var.h(8);
        g0Var.r(8);
        int i14 = 2;
        int i15 = i10 - 2;
        int[] c10 = c();
        int[] d10 = d();
        int[] e10 = e();
        while (i15 > 0) {
            int h14 = g0Var.h(i13);
            int h15 = g0Var.h(i13);
            if ((h15 & IntBufferBatchMountItem.INSTRUCTION_UPDATE_LAYOUT) != 0) {
                iArr = c10;
            } else if ((h15 & 64) != 0) {
                iArr = d10;
            } else {
                iArr = e10;
            }
            if ((h15 & 1) != 0) {
                h12 = g0Var.h(i13);
                i12 = g0Var.h(i13);
                h10 = g0Var.h(i13);
                h11 = g0Var.h(i13);
                i11 = i15 - 6;
            } else {
                int h16 = g0Var.h(4) << 4;
                h10 = g0Var.h(4) << 4;
                i11 = i15 - 4;
                h11 = g0Var.h(i14) << 6;
                h12 = g0Var.h(6) << i14;
                i12 = h16;
            }
            if (h12 == 0) {
                h11 = 255;
                i12 = 0;
                h10 = 0;
            }
            double d11 = h12;
            double d12 = i12 - 128;
            double d13 = h10 - 128;
            iArr[h14] = f((byte) (255 - (h11 & SetSpanOperation.SPAN_MAX_PRIORITY)), w0.q((int) (d11 + (1.402d * d12)), 0, SetSpanOperation.SPAN_MAX_PRIORITY), w0.q((int) ((d11 - (0.34414d * d13)) - (d12 * 0.71414d)), 0, SetSpanOperation.SPAN_MAX_PRIORITY), w0.q((int) (d11 + (d13 * 1.772d)), 0, SetSpanOperation.SPAN_MAX_PRIORITY));
            i15 = i11;
            h13 = h13;
            i13 = 8;
            i14 = 2;
        }
        return new a(h13, c10, d10, e10);
    }

    private static C0149b m(g0 g0Var) {
        int i10;
        int i11;
        int i12;
        int i13;
        g0Var.r(4);
        boolean g10 = g0Var.g();
        g0Var.r(3);
        int h10 = g0Var.h(16);
        int h11 = g0Var.h(16);
        if (g10) {
            int h12 = g0Var.h(16);
            int h13 = g0Var.h(16);
            int h14 = g0Var.h(16);
            i13 = g0Var.h(16);
            i12 = h13;
            i11 = h14;
            i10 = h12;
        } else {
            i10 = 0;
            i11 = 0;
            i12 = h10;
            i13 = h11;
        }
        return new C0149b(h10, h11, i10, i12, i11, i13);
    }

    private static c n(g0 g0Var) {
        byte[] bArr;
        int h10 = g0Var.h(16);
        g0Var.r(4);
        int h11 = g0Var.h(2);
        boolean g10 = g0Var.g();
        g0Var.r(1);
        byte[] bArr2 = w0.f40716f;
        if (h11 == 1) {
            g0Var.r(g0Var.h(8) * 16);
        } else if (h11 == 0) {
            int h12 = g0Var.h(16);
            int h13 = g0Var.h(16);
            if (h12 > 0) {
                bArr2 = new byte[h12];
                g0Var.k(bArr2, 0, h12);
            }
            if (h13 > 0) {
                bArr = new byte[h13];
                g0Var.k(bArr, 0, h13);
                return new c(h10, g10, bArr2, bArr);
            }
        }
        bArr = bArr2;
        return new c(h10, g10, bArr2, bArr);
    }

    private static d o(g0 g0Var, int i10) {
        int h10 = g0Var.h(8);
        int h11 = g0Var.h(4);
        int h12 = g0Var.h(2);
        g0Var.r(2);
        int i11 = i10 - 2;
        SparseArray sparseArray = new SparseArray();
        while (i11 > 0) {
            int h13 = g0Var.h(8);
            g0Var.r(8);
            i11 -= 6;
            sparseArray.put(h13, new e(g0Var.h(16), g0Var.h(16)));
        }
        return new d(h10, h11, h12, sparseArray);
    }

    private static f p(g0 g0Var, int i10) {
        int i11;
        int i12;
        int i13;
        char c10;
        int h10 = g0Var.h(8);
        int i14 = 4;
        g0Var.r(4);
        boolean g10 = g0Var.g();
        g0Var.r(3);
        int i15 = 16;
        int h11 = g0Var.h(16);
        int h12 = g0Var.h(16);
        int h13 = g0Var.h(3);
        int h14 = g0Var.h(3);
        int i16 = 2;
        g0Var.r(2);
        int h15 = g0Var.h(8);
        int h16 = g0Var.h(8);
        int h17 = g0Var.h(4);
        int h18 = g0Var.h(2);
        g0Var.r(2);
        int i17 = i10 - 10;
        SparseArray sparseArray = new SparseArray();
        while (i17 > 0) {
            int h19 = g0Var.h(i15);
            int h20 = g0Var.h(i16);
            int h21 = g0Var.h(i16);
            int h22 = g0Var.h(12);
            g0Var.r(i14);
            int h23 = g0Var.h(12);
            int i18 = i17 - 6;
            if (h20 != 1) {
                i11 = 2;
                if (h20 != 2) {
                    i13 = 0;
                    i12 = 0;
                    i17 = i18;
                    c10 = '\b';
                    sparseArray.put(h19, new g(h20, h21, h22, h23, i13, i12));
                    i15 = 16;
                    i16 = i11;
                    i14 = 4;
                }
            } else {
                i11 = 2;
            }
            c10 = '\b';
            i17 -= 8;
            i13 = g0Var.h(8);
            i12 = g0Var.h(8);
            sparseArray.put(h19, new g(h20, h21, h22, h23, i13, i12));
            i15 = 16;
            i16 = i11;
            i14 = 4;
        }
        return new f(h10, g10, h11, h12, h13, h14, h15, h16, h17, h18, sparseArray);
    }

    private static void q(g0 g0Var, h hVar) {
        f fVar;
        int h10 = g0Var.h(8);
        int h11 = g0Var.h(16);
        int h12 = g0Var.h(16);
        int d10 = g0Var.d() + h12;
        if (h12 * 8 > g0Var.b()) {
            y.i("DvbParser", "Data field length exceeds limit");
            g0Var.r(g0Var.b());
            return;
        }
        switch (h10) {
            case 16:
                if (h11 == hVar.f7577a) {
                    d dVar = hVar.f7585i;
                    d o10 = o(g0Var, h12);
                    if (o10.f7556c != 0) {
                        hVar.f7585i = o10;
                        hVar.f7579c.clear();
                        hVar.f7580d.clear();
                        hVar.f7581e.clear();
                        break;
                    } else if (dVar != null && dVar.f7555b != o10.f7555b) {
                        hVar.f7585i = o10;
                        break;
                    }
                }
                break;
            case 17:
                d dVar2 = hVar.f7585i;
                if (h11 == hVar.f7577a && dVar2 != null) {
                    f p10 = p(g0Var, h12);
                    if (dVar2.f7556c == 0 && (fVar = (f) hVar.f7579c.get(p10.f7560a)) != null) {
                        p10.a(fVar);
                    }
                    hVar.f7579c.put(p10.f7560a, p10);
                    break;
                }
                break;
            case ChatViewRecyclerTypes.EPHEMERAL_INDICATION /* 18 */:
                if (h11 == hVar.f7577a) {
                    a l10 = l(g0Var, h12);
                    hVar.f7580d.put(l10.f7540a, l10);
                    break;
                } else if (h11 == hVar.f7578b) {
                    a l11 = l(g0Var, h12);
                    hVar.f7582f.put(l11.f7540a, l11);
                    break;
                }
                break;
            case ChatViewRecyclerTypes.INTERACTION_STATUS /* 19 */:
                if (h11 == hVar.f7577a) {
                    c n10 = n(g0Var);
                    hVar.f7581e.put(n10.f7550a, n10);
                    break;
                } else if (h11 == hVar.f7578b) {
                    c n11 = n(g0Var);
                    hVar.f7583g.put(n11.f7550a, n11);
                    break;
                }
                break;
            case 20:
                if (h11 == hVar.f7577a) {
                    hVar.f7584h = m(g0Var);
                    break;
                }
                break;
        }
        g0Var.s(d10 - g0Var.d());
    }

    public List b(byte[] bArr, int i10) {
        int i11;
        SparseArray sparseArray;
        int i12;
        Paint paint;
        g0 g0Var = new g0(bArr, i10);
        while (g0Var.b() >= 48 && g0Var.h(8) == 15) {
            q(g0Var, this.f7538f);
        }
        h hVar = this.f7538f;
        d dVar = hVar.f7585i;
        if (dVar == null) {
            return Collections.EMPTY_LIST;
        }
        C0149b c0149b = hVar.f7584h;
        if (c0149b == null) {
            c0149b = this.f7536d;
        }
        Bitmap bitmap = this.f7539g;
        if (bitmap == null || c0149b.f7544a + 1 != bitmap.getWidth() || c0149b.f7545b + 1 != this.f7539g.getHeight()) {
            Bitmap createBitmap = Bitmap.createBitmap(c0149b.f7544a + 1, c0149b.f7545b + 1, Bitmap.Config.ARGB_8888);
            this.f7539g = createBitmap;
            this.f7535c.setBitmap(createBitmap);
        }
        ArrayList arrayList = new ArrayList();
        SparseArray sparseArray2 = dVar.f7557d;
        int i13 = 0;
        while (i13 < sparseArray2.size()) {
            this.f7535c.save();
            e eVar = (e) sparseArray2.valueAt(i13);
            f fVar = (f) this.f7538f.f7579c.get(sparseArray2.keyAt(i13));
            int i14 = eVar.f7558a + c0149b.f7546c;
            int i15 = eVar.f7559b + c0149b.f7548e;
            this.f7535c.clipRect(i14, i15, Math.min(fVar.f7562c + i14, c0149b.f7547d), Math.min(fVar.f7563d + i15, c0149b.f7549f));
            a aVar = (a) this.f7538f.f7580d.get(fVar.f7566g);
            if (aVar == null && (aVar = (a) this.f7538f.f7582f.get(fVar.f7566g)) == null) {
                aVar = this.f7537e;
            }
            a aVar2 = aVar;
            SparseArray sparseArray3 = fVar.f7570k;
            int i16 = 0;
            while (i16 < sparseArray3.size()) {
                int keyAt = sparseArray3.keyAt(i16);
                g gVar = (g) sparseArray3.valueAt(i16);
                c cVar = (c) this.f7538f.f7581e.get(keyAt);
                if (cVar == null) {
                    cVar = (c) this.f7538f.f7583g.get(keyAt);
                }
                if (cVar != null) {
                    if (cVar.f7551b) {
                        paint = null;
                    } else {
                        paint = this.f7533a;
                    }
                    sparseArray = sparseArray2;
                    i12 = i16;
                    k(cVar, aVar2, fVar.f7565f, gVar.f7573c + i14, gVar.f7574d + i15, paint, this.f7535c);
                } else {
                    sparseArray = sparseArray2;
                    i12 = i16;
                }
                i16 = i12 + 1;
                sparseArray2 = sparseArray;
            }
            SparseArray sparseArray4 = sparseArray2;
            if (fVar.f7561b) {
                int i17 = fVar.f7565f;
                if (i17 == 3) {
                    i11 = aVar2.f7543d[fVar.f7567h];
                } else if (i17 == 2) {
                    i11 = aVar2.f7542c[fVar.f7568i];
                } else {
                    i11 = aVar2.f7541b[fVar.f7569j];
                }
                this.f7534b.setColor(i11);
                this.f7535c.drawRect(i14, i15, fVar.f7562c + i14, fVar.f7563d + i15, this.f7534b);
            }
            arrayList.add(new b.C0009b().f(Bitmap.createBitmap(this.f7539g, i14, i15, fVar.f7562c, fVar.f7563d)).k(i14 / c0149b.f7544a).l(0).h(i15 / c0149b.f7545b, 0).i(0).n(fVar.f7562c / c0149b.f7544a).g(fVar.f7563d / c0149b.f7545b).a());
            this.f7535c.drawColor(0, PorterDuff.Mode.CLEAR);
            this.f7535c.restore();
            i13++;
            sparseArray2 = sparseArray4;
        }
        return Collections.unmodifiableList(arrayList);
    }

    public void r() {
        this.f7538f.a();
    }
}

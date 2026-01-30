package be;

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
import ne.g0;
import ne.w0;
import ne.y;
import zd.b;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
final class b {

    /* renamed from: h  reason: collision with root package name */
    private static final byte[] f7452h = {0, 7, 8, 15};

    /* renamed from: i  reason: collision with root package name */
    private static final byte[] f7453i = {0, 119, -120, -1};

    /* renamed from: j  reason: collision with root package name */
    private static final byte[] f7454j = {0, 17, 34, 51, 68, 85, 102, 119, -120, -103, -86, -69, -52, -35, -18, -1};

    /* renamed from: a  reason: collision with root package name */
    private final Paint f7455a;

    /* renamed from: b  reason: collision with root package name */
    private final Paint f7456b;

    /* renamed from: c  reason: collision with root package name */
    private final Canvas f7457c;

    /* renamed from: d  reason: collision with root package name */
    private final C0112b f7458d;

    /* renamed from: e  reason: collision with root package name */
    private final a f7459e;

    /* renamed from: f  reason: collision with root package name */
    private final h f7460f;

    /* renamed from: g  reason: collision with root package name */
    private Bitmap f7461g;

    /* JADX INFO: Access modifiers changed from: private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    public static final class a {

        /* renamed from: a  reason: collision with root package name */
        public final int f7462a;

        /* renamed from: b  reason: collision with root package name */
        public final int[] f7463b;

        /* renamed from: c  reason: collision with root package name */
        public final int[] f7464c;

        /* renamed from: d  reason: collision with root package name */
        public final int[] f7465d;

        public a(int i10, int[] iArr, int[] iArr2, int[] iArr3) {
            this.f7462a = i10;
            this.f7463b = iArr;
            this.f7464c = iArr2;
            this.f7465d = iArr3;
        }
    }

    /* JADX INFO: Access modifiers changed from: private */
    /* renamed from: be.b$b  reason: collision with other inner class name */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    public static final class C0112b {

        /* renamed from: a  reason: collision with root package name */
        public final int f7466a;

        /* renamed from: b  reason: collision with root package name */
        public final int f7467b;

        /* renamed from: c  reason: collision with root package name */
        public final int f7468c;

        /* renamed from: d  reason: collision with root package name */
        public final int f7469d;

        /* renamed from: e  reason: collision with root package name */
        public final int f7470e;

        /* renamed from: f  reason: collision with root package name */
        public final int f7471f;

        public C0112b(int i10, int i11, int i12, int i13, int i14, int i15) {
            this.f7466a = i10;
            this.f7467b = i11;
            this.f7468c = i12;
            this.f7469d = i13;
            this.f7470e = i14;
            this.f7471f = i15;
        }
    }

    /* JADX INFO: Access modifiers changed from: private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    public static final class c {

        /* renamed from: a  reason: collision with root package name */
        public final int f7472a;

        /* renamed from: b  reason: collision with root package name */
        public final boolean f7473b;

        /* renamed from: c  reason: collision with root package name */
        public final byte[] f7474c;

        /* renamed from: d  reason: collision with root package name */
        public final byte[] f7475d;

        public c(int i10, boolean z10, byte[] bArr, byte[] bArr2) {
            this.f7472a = i10;
            this.f7473b = z10;
            this.f7474c = bArr;
            this.f7475d = bArr2;
        }
    }

    /* JADX INFO: Access modifiers changed from: private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    public static final class d {

        /* renamed from: a  reason: collision with root package name */
        public final int f7476a;

        /* renamed from: b  reason: collision with root package name */
        public final int f7477b;

        /* renamed from: c  reason: collision with root package name */
        public final int f7478c;

        /* renamed from: d  reason: collision with root package name */
        public final SparseArray f7479d;

        public d(int i10, int i11, int i12, SparseArray sparseArray) {
            this.f7476a = i10;
            this.f7477b = i11;
            this.f7478c = i12;
            this.f7479d = sparseArray;
        }
    }

    /* JADX INFO: Access modifiers changed from: private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    public static final class e {

        /* renamed from: a  reason: collision with root package name */
        public final int f7480a;

        /* renamed from: b  reason: collision with root package name */
        public final int f7481b;

        public e(int i10, int i11) {
            this.f7480a = i10;
            this.f7481b = i11;
        }
    }

    /* JADX INFO: Access modifiers changed from: private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    public static final class f {

        /* renamed from: a  reason: collision with root package name */
        public final int f7482a;

        /* renamed from: b  reason: collision with root package name */
        public final boolean f7483b;

        /* renamed from: c  reason: collision with root package name */
        public final int f7484c;

        /* renamed from: d  reason: collision with root package name */
        public final int f7485d;

        /* renamed from: e  reason: collision with root package name */
        public final int f7486e;

        /* renamed from: f  reason: collision with root package name */
        public final int f7487f;

        /* renamed from: g  reason: collision with root package name */
        public final int f7488g;

        /* renamed from: h  reason: collision with root package name */
        public final int f7489h;

        /* renamed from: i  reason: collision with root package name */
        public final int f7490i;

        /* renamed from: j  reason: collision with root package name */
        public final int f7491j;

        /* renamed from: k  reason: collision with root package name */
        public final SparseArray f7492k;

        public f(int i10, boolean z10, int i11, int i12, int i13, int i14, int i15, int i16, int i17, int i18, SparseArray sparseArray) {
            this.f7482a = i10;
            this.f7483b = z10;
            this.f7484c = i11;
            this.f7485d = i12;
            this.f7486e = i13;
            this.f7487f = i14;
            this.f7488g = i15;
            this.f7489h = i16;
            this.f7490i = i17;
            this.f7491j = i18;
            this.f7492k = sparseArray;
        }

        public void a(f fVar) {
            SparseArray sparseArray = fVar.f7492k;
            for (int i10 = 0; i10 < sparseArray.size(); i10++) {
                this.f7492k.put(sparseArray.keyAt(i10), (g) sparseArray.valueAt(i10));
            }
        }
    }

    /* JADX INFO: Access modifiers changed from: private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    public static final class g {

        /* renamed from: a  reason: collision with root package name */
        public final int f7493a;

        /* renamed from: b  reason: collision with root package name */
        public final int f7494b;

        /* renamed from: c  reason: collision with root package name */
        public final int f7495c;

        /* renamed from: d  reason: collision with root package name */
        public final int f7496d;

        /* renamed from: e  reason: collision with root package name */
        public final int f7497e;

        /* renamed from: f  reason: collision with root package name */
        public final int f7498f;

        public g(int i10, int i11, int i12, int i13, int i14, int i15) {
            this.f7493a = i10;
            this.f7494b = i11;
            this.f7495c = i12;
            this.f7496d = i13;
            this.f7497e = i14;
            this.f7498f = i15;
        }
    }

    /* JADX INFO: Access modifiers changed from: private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    public static final class h {

        /* renamed from: a  reason: collision with root package name */
        public final int f7499a;

        /* renamed from: b  reason: collision with root package name */
        public final int f7500b;

        /* renamed from: c  reason: collision with root package name */
        public final SparseArray f7501c = new SparseArray();

        /* renamed from: d  reason: collision with root package name */
        public final SparseArray f7502d = new SparseArray();

        /* renamed from: e  reason: collision with root package name */
        public final SparseArray f7503e = new SparseArray();

        /* renamed from: f  reason: collision with root package name */
        public final SparseArray f7504f = new SparseArray();

        /* renamed from: g  reason: collision with root package name */
        public final SparseArray f7505g = new SparseArray();

        /* renamed from: h  reason: collision with root package name */
        public C0112b f7506h;

        /* renamed from: i  reason: collision with root package name */
        public d f7507i;

        public h(int i10, int i11) {
            this.f7499a = i10;
            this.f7500b = i11;
        }

        public void a() {
            this.f7501c.clear();
            this.f7502d.clear();
            this.f7503e.clear();
            this.f7504f.clear();
            this.f7505g.clear();
            this.f7506h = null;
            this.f7507i = null;
        }
    }

    public b(int i10, int i11) {
        Paint paint = new Paint();
        this.f7455a = paint;
        paint.setStyle(Paint.Style.FILL_AND_STROKE);
        paint.setXfermode(new PorterDuffXfermode(PorterDuff.Mode.SRC));
        paint.setPathEffect(null);
        Paint paint2 = new Paint();
        this.f7456b = paint2;
        paint2.setStyle(Paint.Style.FILL);
        paint2.setXfermode(new PorterDuffXfermode(PorterDuff.Mode.DST_OVER));
        paint2.setPathEffect(null);
        this.f7457c = new Canvas();
        this.f7458d = new C0112b(719, 575, 0, 719, 0, 575);
        this.f7459e = new a(0, c(), d(), e());
        this.f7460f = new h(i10, i11);
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
                                bArr3 = f7453i;
                            } else {
                                bArr3 = bArr8;
                            }
                        } else if (i10 == 2) {
                            if (bArr7 == null) {
                                bArr3 = f7452h;
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
                                bArr5 = f7454j;
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
            iArr = aVar.f7465d;
        } else if (i10 == 2) {
            iArr = aVar.f7464c;
        } else {
            iArr = aVar.f7463b;
        }
        int[] iArr2 = iArr;
        j(cVar.f7474c, iArr2, i10, i11, i12, paint, canvas);
        j(cVar.f7475d, iArr2, i10, i11, i12 + 1, paint, canvas);
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

    private static C0112b m(g0 g0Var) {
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
        return new C0112b(h10, h11, i10, i12, i11, i13);
    }

    private static c n(g0 g0Var) {
        byte[] bArr;
        int h10 = g0Var.h(16);
        g0Var.r(4);
        int h11 = g0Var.h(2);
        boolean g10 = g0Var.g();
        g0Var.r(1);
        byte[] bArr2 = w0.f40300f;
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
                if (h11 == hVar.f7499a) {
                    d dVar = hVar.f7507i;
                    d o10 = o(g0Var, h12);
                    if (o10.f7478c != 0) {
                        hVar.f7507i = o10;
                        hVar.f7501c.clear();
                        hVar.f7502d.clear();
                        hVar.f7503e.clear();
                        break;
                    } else if (dVar != null && dVar.f7477b != o10.f7477b) {
                        hVar.f7507i = o10;
                        break;
                    }
                }
                break;
            case 17:
                d dVar2 = hVar.f7507i;
                if (h11 == hVar.f7499a && dVar2 != null) {
                    f p10 = p(g0Var, h12);
                    if (dVar2.f7478c == 0 && (fVar = (f) hVar.f7501c.get(p10.f7482a)) != null) {
                        p10.a(fVar);
                    }
                    hVar.f7501c.put(p10.f7482a, p10);
                    break;
                }
                break;
            case ChatViewRecyclerTypes.EPHEMERAL_INDICATION /* 18 */:
                if (h11 == hVar.f7499a) {
                    a l10 = l(g0Var, h12);
                    hVar.f7502d.put(l10.f7462a, l10);
                    break;
                } else if (h11 == hVar.f7500b) {
                    a l11 = l(g0Var, h12);
                    hVar.f7504f.put(l11.f7462a, l11);
                    break;
                }
                break;
            case ChatViewRecyclerTypes.INTERACTION_STATUS /* 19 */:
                if (h11 == hVar.f7499a) {
                    c n10 = n(g0Var);
                    hVar.f7503e.put(n10.f7472a, n10);
                    break;
                } else if (h11 == hVar.f7500b) {
                    c n11 = n(g0Var);
                    hVar.f7505g.put(n11.f7472a, n11);
                    break;
                }
                break;
            case 20:
                if (h11 == hVar.f7499a) {
                    hVar.f7506h = m(g0Var);
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
            q(g0Var, this.f7460f);
        }
        h hVar = this.f7460f;
        d dVar = hVar.f7507i;
        if (dVar == null) {
            return Collections.EMPTY_LIST;
        }
        C0112b c0112b = hVar.f7506h;
        if (c0112b == null) {
            c0112b = this.f7458d;
        }
        Bitmap bitmap = this.f7461g;
        if (bitmap == null || c0112b.f7466a + 1 != bitmap.getWidth() || c0112b.f7467b + 1 != this.f7461g.getHeight()) {
            Bitmap createBitmap = Bitmap.createBitmap(c0112b.f7466a + 1, c0112b.f7467b + 1, Bitmap.Config.ARGB_8888);
            this.f7461g = createBitmap;
            this.f7457c.setBitmap(createBitmap);
        }
        ArrayList arrayList = new ArrayList();
        SparseArray sparseArray2 = dVar.f7479d;
        int i13 = 0;
        while (i13 < sparseArray2.size()) {
            this.f7457c.save();
            e eVar = (e) sparseArray2.valueAt(i13);
            f fVar = (f) this.f7460f.f7501c.get(sparseArray2.keyAt(i13));
            int i14 = eVar.f7480a + c0112b.f7468c;
            int i15 = eVar.f7481b + c0112b.f7470e;
            this.f7457c.clipRect(i14, i15, Math.min(fVar.f7484c + i14, c0112b.f7469d), Math.min(fVar.f7485d + i15, c0112b.f7471f));
            a aVar = (a) this.f7460f.f7502d.get(fVar.f7488g);
            if (aVar == null && (aVar = (a) this.f7460f.f7504f.get(fVar.f7488g)) == null) {
                aVar = this.f7459e;
            }
            a aVar2 = aVar;
            SparseArray sparseArray3 = fVar.f7492k;
            int i16 = 0;
            while (i16 < sparseArray3.size()) {
                int keyAt = sparseArray3.keyAt(i16);
                g gVar = (g) sparseArray3.valueAt(i16);
                c cVar = (c) this.f7460f.f7503e.get(keyAt);
                if (cVar == null) {
                    cVar = (c) this.f7460f.f7505g.get(keyAt);
                }
                if (cVar != null) {
                    if (cVar.f7473b) {
                        paint = null;
                    } else {
                        paint = this.f7455a;
                    }
                    sparseArray = sparseArray2;
                    i12 = i16;
                    k(cVar, aVar2, fVar.f7487f, gVar.f7495c + i14, gVar.f7496d + i15, paint, this.f7457c);
                } else {
                    sparseArray = sparseArray2;
                    i12 = i16;
                }
                i16 = i12 + 1;
                sparseArray2 = sparseArray;
            }
            SparseArray sparseArray4 = sparseArray2;
            if (fVar.f7483b) {
                int i17 = fVar.f7487f;
                if (i17 == 3) {
                    i11 = aVar2.f7465d[fVar.f7489h];
                } else if (i17 == 2) {
                    i11 = aVar2.f7464c[fVar.f7490i];
                } else {
                    i11 = aVar2.f7463b[fVar.f7491j];
                }
                this.f7456b.setColor(i11);
                this.f7457c.drawRect(i14, i15, fVar.f7484c + i14, fVar.f7485d + i15, this.f7456b);
            }
            arrayList.add(new b.C0779b().f(Bitmap.createBitmap(this.f7461g, i14, i15, fVar.f7484c, fVar.f7485d)).k(i14 / c0112b.f7466a).l(0).h(i15 / c0112b.f7467b, 0).i(0).n(fVar.f7484c / c0112b.f7466a).g(fVar.f7485d / c0112b.f7467b).a());
            this.f7457c.drawColor(0, PorterDuff.Mode.CLEAR);
            this.f7457c.restore();
            i13++;
            sparseArray2 = sparseArray4;
        }
        return Collections.unmodifiableList(arrayList);
    }

    public void r() {
        this.f7460f.a();
    }
}

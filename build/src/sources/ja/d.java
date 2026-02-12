package ja;

import android.graphics.Bitmap;
import android.graphics.Canvas;
import android.graphics.Paint;
import android.graphics.PorterDuff;
import android.graphics.PorterDuffXfermode;
import com.facebook.common.references.CloseableReference;
import ha.b;
import ha.e;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public class d {

    /* renamed from: a  reason: collision with root package name */
    private final ha.a f30890a;

    /* renamed from: b  reason: collision with root package name */
    private final b f30891b;

    /* renamed from: c  reason: collision with root package name */
    private final Paint f30892c;

    /* renamed from: d  reason: collision with root package name */
    private final boolean f30893d;

    /* JADX INFO: Access modifiers changed from: package-private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    public static /* synthetic */ class a {

        /* renamed from: a  reason: collision with root package name */
        static final /* synthetic */ int[] f30894a;

        static {
            int[] iArr = new int[c.values().length];
            f30894a = iArr;
            try {
                iArr[c.REQUIRED.ordinal()] = 1;
            } catch (NoSuchFieldError unused) {
            }
            try {
                f30894a[c.NOT_REQUIRED.ordinal()] = 2;
            } catch (NoSuchFieldError unused2) {
            }
            try {
                f30894a[c.ABORT.ordinal()] = 3;
            } catch (NoSuchFieldError unused3) {
            }
            try {
                f30894a[c.SKIP.ordinal()] = 4;
            } catch (NoSuchFieldError unused4) {
            }
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    public interface b {
        void a(int i10, Bitmap bitmap);

        CloseableReference b(int i10);
    }

    /* JADX INFO: Access modifiers changed from: private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    public enum c {
        REQUIRED,
        NOT_REQUIRED,
        SKIP,
        ABORT
    }

    public d(ha.a aVar, boolean z10, b bVar) {
        this.f30890a = aVar;
        this.f30891b = bVar;
        this.f30893d = z10;
        Paint paint = new Paint();
        this.f30892c = paint;
        paint.setColor(0);
        paint.setStyle(Paint.Style.FILL);
        paint.setXfermode(new PorterDuffXfermode(PorterDuff.Mode.SRC));
    }

    private void a(Canvas canvas, ha.b bVar) {
        int i10 = bVar.f27011b;
        int i11 = bVar.f27012c;
        canvas.drawRect(i10, i11, i10 + bVar.f27013d, i11 + bVar.f27014e, this.f30892c);
    }

    private c b(int i10) {
        ha.b c10 = this.f30890a.c(i10);
        b.EnumC0359b enumC0359b = c10.f27016g;
        if (enumC0359b == b.EnumC0359b.DISPOSE_DO_NOT) {
            return c.REQUIRED;
        }
        if (enumC0359b == b.EnumC0359b.DISPOSE_TO_BACKGROUND) {
            if (c(c10)) {
                return c.NOT_REQUIRED;
            }
            return c.REQUIRED;
        } else if (enumC0359b == b.EnumC0359b.DISPOSE_TO_PREVIOUS) {
            return c.SKIP;
        } else {
            return c.ABORT;
        }
    }

    private boolean c(ha.b bVar) {
        if (bVar.f27011b == 0 && bVar.f27012c == 0 && bVar.f27013d == this.f30890a.j() && bVar.f27014e == this.f30890a.h()) {
            return true;
        }
        return false;
    }

    private boolean d(int i10) {
        if (i10 == 0) {
            return true;
        }
        ha.b c10 = this.f30890a.c(i10);
        ha.b c11 = this.f30890a.c(i10 - 1);
        if (c10.f27015f == b.a.NO_BLEND && c(c10)) {
            return true;
        }
        if (c11.f27016g == b.EnumC0359b.DISPOSE_TO_BACKGROUND && c(c11)) {
            return true;
        }
        return false;
    }

    private void e(Bitmap bitmap) {
        e k10 = this.f30890a.k();
        if (k10 == null) {
            return;
        }
        k10.c();
    }

    private int f(int i10, Canvas canvas) {
        while (i10 >= 0) {
            int i11 = a.f30894a[b(i10).ordinal()];
            if (i11 != 1) {
                if (i11 != 2) {
                    if (i11 == 3) {
                        return i10;
                    }
                    i10--;
                } else {
                    return i10 + 1;
                }
            } else {
                ha.b c10 = this.f30890a.c(i10);
                CloseableReference b10 = this.f30891b.b(i10);
                if (b10 != null) {
                    try {
                        canvas.drawBitmap((Bitmap) b10.J(), 0.0f, 0.0f, (Paint) null);
                        if (c10.f27016g == b.EnumC0359b.DISPOSE_TO_BACKGROUND) {
                            a(canvas, c10);
                        }
                        return i10 + 1;
                    } finally {
                        if (!this.f30893d) {
                            b10.close();
                        }
                    }
                } else if (d(i10)) {
                    return i10;
                } else {
                    i10--;
                }
            }
        }
        return 0;
    }

    public void g(int i10, Bitmap bitmap) {
        this.f30890a.i(i10, new Canvas(bitmap));
    }

    public void h(int i10, Bitmap bitmap) {
        int i11;
        if (this.f30893d) {
            g(i10, bitmap);
            return;
        }
        Canvas canvas = new Canvas(bitmap);
        canvas.drawColor(0, PorterDuff.Mode.SRC);
        if (!d(i10)) {
            i11 = f(i10 - 1, canvas);
        } else {
            i11 = i10;
        }
        while (i11 < i10) {
            ha.b c10 = this.f30890a.c(i11);
            b.EnumC0359b enumC0359b = c10.f27016g;
            if (enumC0359b != b.EnumC0359b.DISPOSE_TO_PREVIOUS) {
                if (c10.f27015f == b.a.NO_BLEND) {
                    a(canvas, c10);
                }
                this.f30890a.e(i11, canvas);
                this.f30891b.a(i11, bitmap);
                if (enumC0359b == b.EnumC0359b.DISPOSE_TO_BACKGROUND) {
                    a(canvas, c10);
                }
            }
            i11++;
        }
        ha.b c11 = this.f30890a.c(i10);
        if (c11.f27015f == b.a.NO_BLEND) {
            a(canvas, c11);
        }
        this.f30890a.e(i10, canvas);
        e(bitmap);
    }
}

package ia;

import android.graphics.Bitmap;
import android.graphics.Canvas;
import android.graphics.Paint;
import android.graphics.PorterDuff;
import android.graphics.PorterDuffXfermode;
import com.facebook.common.references.CloseableReference;
import ga.b;
import ga.e;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public class d {

    /* renamed from: a  reason: collision with root package name */
    private final ga.a f28440a;

    /* renamed from: b  reason: collision with root package name */
    private final b f28441b;

    /* renamed from: c  reason: collision with root package name */
    private final Paint f28442c;

    /* renamed from: d  reason: collision with root package name */
    private final boolean f28443d;

    /* JADX INFO: Access modifiers changed from: package-private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    public static /* synthetic */ class a {

        /* renamed from: a  reason: collision with root package name */
        static final /* synthetic */ int[] f28444a;

        static {
            int[] iArr = new int[c.values().length];
            f28444a = iArr;
            try {
                iArr[c.REQUIRED.ordinal()] = 1;
            } catch (NoSuchFieldError unused) {
            }
            try {
                f28444a[c.NOT_REQUIRED.ordinal()] = 2;
            } catch (NoSuchFieldError unused2) {
            }
            try {
                f28444a[c.ABORT.ordinal()] = 3;
            } catch (NoSuchFieldError unused3) {
            }
            try {
                f28444a[c.SKIP.ordinal()] = 4;
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

    public d(ga.a aVar, boolean z10, b bVar) {
        this.f28440a = aVar;
        this.f28441b = bVar;
        this.f28443d = z10;
        Paint paint = new Paint();
        this.f28442c = paint;
        paint.setColor(0);
        paint.setStyle(Paint.Style.FILL);
        paint.setXfermode(new PorterDuffXfermode(PorterDuff.Mode.SRC));
    }

    private void a(Canvas canvas, ga.b bVar) {
        int i10 = bVar.f26573b;
        int i11 = bVar.f26574c;
        canvas.drawRect(i10, i11, i10 + bVar.f26575d, i11 + bVar.f26576e, this.f28442c);
    }

    private c b(int i10) {
        ga.b c10 = this.f28440a.c(i10);
        b.EnumC0338b enumC0338b = c10.f26578g;
        if (enumC0338b == b.EnumC0338b.DISPOSE_DO_NOT) {
            return c.REQUIRED;
        }
        if (enumC0338b == b.EnumC0338b.DISPOSE_TO_BACKGROUND) {
            if (c(c10)) {
                return c.NOT_REQUIRED;
            }
            return c.REQUIRED;
        } else if (enumC0338b == b.EnumC0338b.DISPOSE_TO_PREVIOUS) {
            return c.SKIP;
        } else {
            return c.ABORT;
        }
    }

    private boolean c(ga.b bVar) {
        if (bVar.f26573b == 0 && bVar.f26574c == 0 && bVar.f26575d == this.f28440a.j() && bVar.f26576e == this.f28440a.h()) {
            return true;
        }
        return false;
    }

    private boolean d(int i10) {
        if (i10 == 0) {
            return true;
        }
        ga.b c10 = this.f28440a.c(i10);
        ga.b c11 = this.f28440a.c(i10 - 1);
        if (c10.f26577f == b.a.NO_BLEND && c(c10)) {
            return true;
        }
        if (c11.f26578g == b.EnumC0338b.DISPOSE_TO_BACKGROUND && c(c11)) {
            return true;
        }
        return false;
    }

    private void e(Bitmap bitmap) {
        e k10 = this.f28440a.k();
        if (k10 == null) {
            return;
        }
        k10.c();
    }

    private int f(int i10, Canvas canvas) {
        while (i10 >= 0) {
            int i11 = a.f28444a[b(i10).ordinal()];
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
                ga.b c10 = this.f28440a.c(i10);
                CloseableReference b10 = this.f28441b.b(i10);
                if (b10 != null) {
                    try {
                        canvas.drawBitmap((Bitmap) b10.D0(), 0.0f, 0.0f, (Paint) null);
                        if (c10.f26578g == b.EnumC0338b.DISPOSE_TO_BACKGROUND) {
                            a(canvas, c10);
                        }
                        return i10 + 1;
                    } finally {
                        if (!this.f28443d) {
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
        this.f28440a.i(i10, new Canvas(bitmap));
    }

    public void h(int i10, Bitmap bitmap) {
        int i11;
        if (this.f28443d) {
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
            ga.b c10 = this.f28440a.c(i11);
            b.EnumC0338b enumC0338b = c10.f26578g;
            if (enumC0338b != b.EnumC0338b.DISPOSE_TO_PREVIOUS) {
                if (c10.f26577f == b.a.NO_BLEND) {
                    a(canvas, c10);
                }
                this.f28440a.e(i11, canvas);
                this.f28441b.a(i11, bitmap);
                if (enumC0338b == b.EnumC0338b.DISPOSE_TO_BACKGROUND) {
                    a(canvas, c10);
                }
            }
            i11++;
        }
        ga.b c11 = this.f28440a.c(i10);
        if (c11.f26577f == b.a.NO_BLEND) {
            a(canvas, c11);
        }
        this.f28440a.e(i10, canvas);
        e(bitmap);
    }
}

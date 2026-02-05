package hh;

import android.content.Context;
import android.graphics.Color;
import com.facebook.react.views.text.internal.span.SetSpanOperation;
import mh.b;
import r1.c;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public class a {

    /* renamed from: f  reason: collision with root package name */
    private static final int f25859f = (int) Math.round(5.1000000000000005d);

    /* renamed from: a  reason: collision with root package name */
    private final boolean f25860a;

    /* renamed from: b  reason: collision with root package name */
    private final int f25861b;

    /* renamed from: c  reason: collision with root package name */
    private final int f25862c;

    /* renamed from: d  reason: collision with root package name */
    private final int f25863d;

    /* renamed from: e  reason: collision with root package name */
    private final float f25864e;

    public a(Context context) {
        this(b.b(context, zg.b.f55562s, false), fh.a.b(context, zg.b.f55561r, 0), fh.a.b(context, zg.b.f55560q, 0), fh.a.b(context, zg.b.f55558o, 0), context.getResources().getDisplayMetrics().density);
    }

    private boolean e(int i10) {
        if (c.l(i10, SetSpanOperation.SPAN_MAX_PRIORITY) == this.f25863d) {
            return true;
        }
        return false;
    }

    public float a(float f10) {
        float f11 = this.f25864e;
        if (f11 <= 0.0f || f10 <= 0.0f) {
            return 0.0f;
        }
        return Math.min(((((float) Math.log1p(f10 / f11)) * 4.5f) + 2.0f) / 100.0f, 1.0f);
    }

    public int b(int i10, float f10) {
        int i11;
        float a10 = a(f10);
        int alpha = Color.alpha(i10);
        int j10 = fh.a.j(c.l(i10, SetSpanOperation.SPAN_MAX_PRIORITY), this.f25861b, a10);
        if (a10 > 0.0f && (i11 = this.f25862c) != 0) {
            j10 = fh.a.i(j10, c.l(i11, f25859f));
        }
        return c.l(j10, alpha);
    }

    public int c(int i10, float f10) {
        if (this.f25860a && e(i10)) {
            return b(i10, f10);
        }
        return i10;
    }

    public boolean d() {
        return this.f25860a;
    }

    public a(boolean z10, int i10, int i11, int i12, float f10) {
        this.f25860a = z10;
        this.f25861b = i10;
        this.f25862c = i11;
        this.f25863d = i12;
        this.f25864e = f10;
    }
}

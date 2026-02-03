package gh;

import android.content.Context;
import android.graphics.Color;
import com.facebook.react.views.text.internal.span.SetSpanOperation;
import lh.b;
import r1.c;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public class a {

    /* renamed from: f  reason: collision with root package name */
    private static final int f27007f = (int) Math.round(5.1000000000000005d);

    /* renamed from: a  reason: collision with root package name */
    private final boolean f27008a;

    /* renamed from: b  reason: collision with root package name */
    private final int f27009b;

    /* renamed from: c  reason: collision with root package name */
    private final int f27010c;

    /* renamed from: d  reason: collision with root package name */
    private final int f27011d;

    /* renamed from: e  reason: collision with root package name */
    private final float f27012e;

    public a(Context context) {
        this(b.b(context, yg.b.f54349s, false), eh.a.b(context, yg.b.f54348r, 0), eh.a.b(context, yg.b.f54347q, 0), eh.a.b(context, yg.b.f54345o, 0), context.getResources().getDisplayMetrics().density);
    }

    private boolean e(int i10) {
        if (c.l(i10, SetSpanOperation.SPAN_MAX_PRIORITY) == this.f27011d) {
            return true;
        }
        return false;
    }

    public float a(float f10) {
        float f11 = this.f27012e;
        if (f11 <= 0.0f || f10 <= 0.0f) {
            return 0.0f;
        }
        return Math.min(((((float) Math.log1p(f10 / f11)) * 4.5f) + 2.0f) / 100.0f, 1.0f);
    }

    public int b(int i10, float f10) {
        int i11;
        float a10 = a(f10);
        int alpha = Color.alpha(i10);
        int j10 = eh.a.j(c.l(i10, SetSpanOperation.SPAN_MAX_PRIORITY), this.f27009b, a10);
        if (a10 > 0.0f && (i11 = this.f27010c) != 0) {
            j10 = eh.a.i(j10, c.l(i11, f27007f));
        }
        return c.l(j10, alpha);
    }

    public int c(int i10, float f10) {
        if (this.f27008a && e(i10)) {
            return b(i10, f10);
        }
        return i10;
    }

    public boolean d() {
        return this.f27008a;
    }

    public a(boolean z10, int i10, int i11, int i12, float f10) {
        this.f27008a = z10;
        this.f27009b = i10;
        this.f27010c = i11;
        this.f27011d = i12;
        this.f27012e = f10;
    }
}

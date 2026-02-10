package androidx.appcompat.view.menu;

import android.content.Context;
import android.graphics.Point;
import android.graphics.Rect;
import android.view.Display;
import android.view.View;
import android.view.WindowManager;
import android.widget.PopupWindow;
import androidx.appcompat.view.menu.j;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public class i {

    /* renamed from: a  reason: collision with root package name */
    private final Context f1498a;

    /* renamed from: b  reason: collision with root package name */
    private final e f1499b;

    /* renamed from: c  reason: collision with root package name */
    private final boolean f1500c;

    /* renamed from: d  reason: collision with root package name */
    private final int f1501d;

    /* renamed from: e  reason: collision with root package name */
    private final int f1502e;

    /* renamed from: f  reason: collision with root package name */
    private View f1503f;

    /* renamed from: g  reason: collision with root package name */
    private int f1504g;

    /* renamed from: h  reason: collision with root package name */
    private boolean f1505h;

    /* renamed from: i  reason: collision with root package name */
    private j.a f1506i;

    /* renamed from: j  reason: collision with root package name */
    private h f1507j;

    /* renamed from: k  reason: collision with root package name */
    private PopupWindow.OnDismissListener f1508k;

    /* renamed from: l  reason: collision with root package name */
    private final PopupWindow.OnDismissListener f1509l;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    class a implements PopupWindow.OnDismissListener {
        a() {
        }

        @Override // android.widget.PopupWindow.OnDismissListener
        public void onDismiss() {
            i.this.e();
        }
    }

    public i(Context context, e eVar, View view, boolean z10, int i10) {
        this(context, eVar, view, z10, i10, 0);
    }

    private h a() {
        h lVar;
        Display defaultDisplay = ((WindowManager) this.f1498a.getSystemService("window")).getDefaultDisplay();
        Point point = new Point();
        defaultDisplay.getRealSize(point);
        if (Math.min(point.x, point.y) >= this.f1498a.getResources().getDimensionPixelSize(f.d.f22188a)) {
            lVar = new b(this.f1498a, this.f1503f, this.f1501d, this.f1502e, this.f1500c);
        } else {
            lVar = new l(this.f1498a, this.f1499b, this.f1503f, this.f1501d, this.f1502e, this.f1500c);
        }
        lVar.i(this.f1499b);
        lVar.s(this.f1509l);
        lVar.m(this.f1503f);
        lVar.c(this.f1506i);
        lVar.p(this.f1505h);
        lVar.q(this.f1504g);
        return lVar;
    }

    private void l(int i10, int i11, boolean z10, boolean z11) {
        h c10 = c();
        c10.t(z11);
        if (z10) {
            if ((androidx.core.view.j.b(this.f1504g, this.f1503f.getLayoutDirection()) & 7) == 5) {
                i10 -= this.f1503f.getWidth();
            }
            c10.r(i10);
            c10.u(i11);
            int i12 = (int) ((this.f1498a.getResources().getDisplayMetrics().density * 48.0f) / 2.0f);
            c10.o(new Rect(i10 - i12, i11 - i12, i10 + i12, i11 + i12));
        }
        c10.show();
    }

    public void b() {
        if (d()) {
            this.f1507j.dismiss();
        }
    }

    public h c() {
        if (this.f1507j == null) {
            this.f1507j = a();
        }
        return this.f1507j;
    }

    public boolean d() {
        h hVar = this.f1507j;
        if (hVar != null && hVar.isShowing()) {
            return true;
        }
        return false;
    }

    /* JADX INFO: Access modifiers changed from: protected */
    public void e() {
        this.f1507j = null;
        PopupWindow.OnDismissListener onDismissListener = this.f1508k;
        if (onDismissListener != null) {
            onDismissListener.onDismiss();
        }
    }

    public void f(View view) {
        this.f1503f = view;
    }

    public void g(boolean z10) {
        this.f1505h = z10;
        h hVar = this.f1507j;
        if (hVar != null) {
            hVar.p(z10);
        }
    }

    public void h(int i10) {
        this.f1504g = i10;
    }

    public void i(PopupWindow.OnDismissListener onDismissListener) {
        this.f1508k = onDismissListener;
    }

    public void j(j.a aVar) {
        this.f1506i = aVar;
        h hVar = this.f1507j;
        if (hVar != null) {
            hVar.c(aVar);
        }
    }

    public void k() {
        if (m()) {
            return;
        }
        throw new IllegalStateException("MenuPopupHelper cannot be used without an anchor");
    }

    public boolean m() {
        if (d()) {
            return true;
        }
        if (this.f1503f == null) {
            return false;
        }
        l(0, 0, false, false);
        return true;
    }

    public boolean n(int i10, int i11) {
        if (d()) {
            return true;
        }
        if (this.f1503f == null) {
            return false;
        }
        l(i10, i11, true, true);
        return true;
    }

    public i(Context context, e eVar, View view, boolean z10, int i10, int i11) {
        this.f1504g = 8388611;
        this.f1509l = new a();
        this.f1498a = context;
        this.f1499b = eVar;
        this.f1503f = view;
        this.f1500c = z10;
        this.f1501d = i10;
        this.f1502e = i11;
    }
}

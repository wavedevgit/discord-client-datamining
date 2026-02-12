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
    private final Context f1500a;

    /* renamed from: b  reason: collision with root package name */
    private final e f1501b;

    /* renamed from: c  reason: collision with root package name */
    private final boolean f1502c;

    /* renamed from: d  reason: collision with root package name */
    private final int f1503d;

    /* renamed from: e  reason: collision with root package name */
    private final int f1504e;

    /* renamed from: f  reason: collision with root package name */
    private View f1505f;

    /* renamed from: g  reason: collision with root package name */
    private int f1506g;

    /* renamed from: h  reason: collision with root package name */
    private boolean f1507h;

    /* renamed from: i  reason: collision with root package name */
    private j.a f1508i;

    /* renamed from: j  reason: collision with root package name */
    private h f1509j;

    /* renamed from: k  reason: collision with root package name */
    private PopupWindow.OnDismissListener f1510k;

    /* renamed from: l  reason: collision with root package name */
    private final PopupWindow.OnDismissListener f1511l;

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
        Display defaultDisplay = ((WindowManager) this.f1500a.getSystemService("window")).getDefaultDisplay();
        Point point = new Point();
        defaultDisplay.getRealSize(point);
        if (Math.min(point.x, point.y) >= this.f1500a.getResources().getDimensionPixelSize(f.d.f23312a)) {
            lVar = new b(this.f1500a, this.f1505f, this.f1503d, this.f1504e, this.f1502c);
        } else {
            lVar = new l(this.f1500a, this.f1501b, this.f1505f, this.f1503d, this.f1504e, this.f1502c);
        }
        lVar.k(this.f1501b);
        lVar.u(this.f1511l);
        lVar.p(this.f1505f);
        lVar.c(this.f1508i);
        lVar.r(this.f1507h);
        lVar.s(this.f1506g);
        return lVar;
    }

    private void l(int i10, int i11, boolean z10, boolean z11) {
        h c10 = c();
        c10.v(z11);
        if (z10) {
            if ((androidx.core.view.j.b(this.f1506g, this.f1505f.getLayoutDirection()) & 7) == 5) {
                i10 -= this.f1505f.getWidth();
            }
            c10.t(i10);
            c10.w(i11);
            int i12 = (int) ((this.f1500a.getResources().getDisplayMetrics().density * 48.0f) / 2.0f);
            c10.q(new Rect(i10 - i12, i11 - i12, i10 + i12, i11 + i12));
        }
        c10.show();
    }

    public void b() {
        if (d()) {
            this.f1509j.dismiss();
        }
    }

    public h c() {
        if (this.f1509j == null) {
            this.f1509j = a();
        }
        return this.f1509j;
    }

    public boolean d() {
        h hVar = this.f1509j;
        if (hVar != null && hVar.isShowing()) {
            return true;
        }
        return false;
    }

    /* JADX INFO: Access modifiers changed from: protected */
    public void e() {
        this.f1509j = null;
        PopupWindow.OnDismissListener onDismissListener = this.f1510k;
        if (onDismissListener != null) {
            onDismissListener.onDismiss();
        }
    }

    public void f(View view) {
        this.f1505f = view;
    }

    public void g(boolean z10) {
        this.f1507h = z10;
        h hVar = this.f1509j;
        if (hVar != null) {
            hVar.r(z10);
        }
    }

    public void h(int i10) {
        this.f1506g = i10;
    }

    public void i(PopupWindow.OnDismissListener onDismissListener) {
        this.f1510k = onDismissListener;
    }

    public void j(j.a aVar) {
        this.f1508i = aVar;
        h hVar = this.f1509j;
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
        if (this.f1505f == null) {
            return false;
        }
        l(0, 0, false, false);
        return true;
    }

    public boolean n(int i10, int i11) {
        if (d()) {
            return true;
        }
        if (this.f1505f == null) {
            return false;
        }
        l(i10, i11, true, true);
        return true;
    }

    public i(Context context, e eVar, View view, boolean z10, int i10, int i11) {
        this.f1506g = 8388611;
        this.f1511l = new a();
        this.f1500a = context;
        this.f1501b = eVar;
        this.f1505f = view;
        this.f1502c = z10;
        this.f1503d = i10;
        this.f1504e = i11;
    }
}

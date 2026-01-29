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
    private final Context f1347a;

    /* renamed from: b  reason: collision with root package name */
    private final e f1348b;

    /* renamed from: c  reason: collision with root package name */
    private final boolean f1349c;

    /* renamed from: d  reason: collision with root package name */
    private final int f1350d;

    /* renamed from: e  reason: collision with root package name */
    private final int f1351e;

    /* renamed from: f  reason: collision with root package name */
    private View f1352f;

    /* renamed from: g  reason: collision with root package name */
    private int f1353g;

    /* renamed from: h  reason: collision with root package name */
    private boolean f1354h;

    /* renamed from: i  reason: collision with root package name */
    private j.a f1355i;

    /* renamed from: j  reason: collision with root package name */
    private h f1356j;

    /* renamed from: k  reason: collision with root package name */
    private PopupWindow.OnDismissListener f1357k;

    /* renamed from: l  reason: collision with root package name */
    private final PopupWindow.OnDismissListener f1358l;

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
        Display defaultDisplay = ((WindowManager) this.f1347a.getSystemService("window")).getDefaultDisplay();
        Point point = new Point();
        defaultDisplay.getRealSize(point);
        if (Math.min(point.x, point.y) >= this.f1347a.getResources().getDimensionPixelSize(f.d.f24104a)) {
            lVar = new b(this.f1347a, this.f1352f, this.f1350d, this.f1351e, this.f1349c);
        } else {
            lVar = new l(this.f1347a, this.f1348b, this.f1352f, this.f1350d, this.f1351e, this.f1349c);
        }
        lVar.i(this.f1348b);
        lVar.s(this.f1358l);
        lVar.m(this.f1352f);
        lVar.c(this.f1355i);
        lVar.p(this.f1354h);
        lVar.q(this.f1353g);
        return lVar;
    }

    private void l(int i10, int i11, boolean z10, boolean z11) {
        h c10 = c();
        c10.t(z11);
        if (z10) {
            if ((androidx.core.view.j.b(this.f1353g, this.f1352f.getLayoutDirection()) & 7) == 5) {
                i10 -= this.f1352f.getWidth();
            }
            c10.r(i10);
            c10.u(i11);
            int i12 = (int) ((this.f1347a.getResources().getDisplayMetrics().density * 48.0f) / 2.0f);
            c10.o(new Rect(i10 - i12, i11 - i12, i10 + i12, i11 + i12));
        }
        c10.show();
    }

    public void b() {
        if (d()) {
            this.f1356j.dismiss();
        }
    }

    public h c() {
        if (this.f1356j == null) {
            this.f1356j = a();
        }
        return this.f1356j;
    }

    public boolean d() {
        h hVar = this.f1356j;
        if (hVar != null && hVar.isShowing()) {
            return true;
        }
        return false;
    }

    /* JADX INFO: Access modifiers changed from: protected */
    public void e() {
        this.f1356j = null;
        PopupWindow.OnDismissListener onDismissListener = this.f1357k;
        if (onDismissListener != null) {
            onDismissListener.onDismiss();
        }
    }

    public void f(View view) {
        this.f1352f = view;
    }

    public void g(boolean z10) {
        this.f1354h = z10;
        h hVar = this.f1356j;
        if (hVar != null) {
            hVar.p(z10);
        }
    }

    public void h(int i10) {
        this.f1353g = i10;
    }

    public void i(PopupWindow.OnDismissListener onDismissListener) {
        this.f1357k = onDismissListener;
    }

    public void j(j.a aVar) {
        this.f1355i = aVar;
        h hVar = this.f1356j;
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
        if (this.f1352f == null) {
            return false;
        }
        l(0, 0, false, false);
        return true;
    }

    public boolean n(int i10, int i11) {
        if (d()) {
            return true;
        }
        if (this.f1352f == null) {
            return false;
        }
        l(i10, i11, true, true);
        return true;
    }

    public i(Context context, e eVar, View view, boolean z10, int i10, int i11) {
        this.f1353g = 8388611;
        this.f1358l = new a();
        this.f1347a = context;
        this.f1348b = eVar;
        this.f1352f = view;
        this.f1349c = z10;
        this.f1350d = i10;
        this.f1351e = i11;
    }
}

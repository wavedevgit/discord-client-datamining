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
    private final Context f1360a;

    /* renamed from: b  reason: collision with root package name */
    private final e f1361b;

    /* renamed from: c  reason: collision with root package name */
    private final boolean f1362c;

    /* renamed from: d  reason: collision with root package name */
    private final int f1363d;

    /* renamed from: e  reason: collision with root package name */
    private final int f1364e;

    /* renamed from: f  reason: collision with root package name */
    private View f1365f;

    /* renamed from: g  reason: collision with root package name */
    private int f1366g;

    /* renamed from: h  reason: collision with root package name */
    private boolean f1367h;

    /* renamed from: i  reason: collision with root package name */
    private j.a f1368i;

    /* renamed from: j  reason: collision with root package name */
    private h f1369j;

    /* renamed from: k  reason: collision with root package name */
    private PopupWindow.OnDismissListener f1370k;

    /* renamed from: l  reason: collision with root package name */
    private final PopupWindow.OnDismissListener f1371l;

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
        Display defaultDisplay = ((WindowManager) this.f1360a.getSystemService("window")).getDefaultDisplay();
        Point point = new Point();
        defaultDisplay.getRealSize(point);
        if (Math.min(point.x, point.y) >= this.f1360a.getResources().getDimensionPixelSize(f.d.f22907a)) {
            lVar = new b(this.f1360a, this.f1365f, this.f1363d, this.f1364e, this.f1362c);
        } else {
            lVar = new l(this.f1360a, this.f1361b, this.f1365f, this.f1363d, this.f1364e, this.f1362c);
        }
        lVar.i(this.f1361b);
        lVar.s(this.f1371l);
        lVar.m(this.f1365f);
        lVar.c(this.f1368i);
        lVar.p(this.f1367h);
        lVar.q(this.f1366g);
        return lVar;
    }

    private void l(int i10, int i11, boolean z10, boolean z11) {
        h c10 = c();
        c10.t(z11);
        if (z10) {
            if ((androidx.core.view.j.b(this.f1366g, this.f1365f.getLayoutDirection()) & 7) == 5) {
                i10 -= this.f1365f.getWidth();
            }
            c10.r(i10);
            c10.u(i11);
            int i12 = (int) ((this.f1360a.getResources().getDisplayMetrics().density * 48.0f) / 2.0f);
            c10.o(new Rect(i10 - i12, i11 - i12, i10 + i12, i11 + i12));
        }
        c10.show();
    }

    public void b() {
        if (d()) {
            this.f1369j.dismiss();
        }
    }

    public h c() {
        if (this.f1369j == null) {
            this.f1369j = a();
        }
        return this.f1369j;
    }

    public boolean d() {
        h hVar = this.f1369j;
        if (hVar != null && hVar.isShowing()) {
            return true;
        }
        return false;
    }

    /* JADX INFO: Access modifiers changed from: protected */
    public void e() {
        this.f1369j = null;
        PopupWindow.OnDismissListener onDismissListener = this.f1370k;
        if (onDismissListener != null) {
            onDismissListener.onDismiss();
        }
    }

    public void f(View view) {
        this.f1365f = view;
    }

    public void g(boolean z10) {
        this.f1367h = z10;
        h hVar = this.f1369j;
        if (hVar != null) {
            hVar.p(z10);
        }
    }

    public void h(int i10) {
        this.f1366g = i10;
    }

    public void i(PopupWindow.OnDismissListener onDismissListener) {
        this.f1370k = onDismissListener;
    }

    public void j(j.a aVar) {
        this.f1368i = aVar;
        h hVar = this.f1369j;
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
        if (this.f1365f == null) {
            return false;
        }
        l(0, 0, false, false);
        return true;
    }

    public boolean n(int i10, int i11) {
        if (d()) {
            return true;
        }
        if (this.f1365f == null) {
            return false;
        }
        l(i10, i11, true, true);
        return true;
    }

    public i(Context context, e eVar, View view, boolean z10, int i10, int i11) {
        this.f1366g = 8388611;
        this.f1371l = new a();
        this.f1360a = context;
        this.f1361b = eVar;
        this.f1365f = view;
        this.f1362c = z10;
        this.f1363d = i10;
        this.f1364e = i11;
    }
}

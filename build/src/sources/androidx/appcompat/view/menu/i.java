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
    private final Context f1801a;

    /* renamed from: b  reason: collision with root package name */
    private final e f1802b;

    /* renamed from: c  reason: collision with root package name */
    private final boolean f1803c;

    /* renamed from: d  reason: collision with root package name */
    private final int f1804d;

    /* renamed from: e  reason: collision with root package name */
    private final int f1805e;

    /* renamed from: f  reason: collision with root package name */
    private View f1806f;

    /* renamed from: g  reason: collision with root package name */
    private int f1807g;

    /* renamed from: h  reason: collision with root package name */
    private boolean f1808h;

    /* renamed from: i  reason: collision with root package name */
    private j.a f1809i;

    /* renamed from: j  reason: collision with root package name */
    private h f1810j;

    /* renamed from: k  reason: collision with root package name */
    private PopupWindow.OnDismissListener f1811k;

    /* renamed from: l  reason: collision with root package name */
    private final PopupWindow.OnDismissListener f1812l;

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
        Display defaultDisplay = ((WindowManager) this.f1801a.getSystemService("window")).getDefaultDisplay();
        Point point = new Point();
        defaultDisplay.getRealSize(point);
        if (Math.min(point.x, point.y) >= this.f1801a.getResources().getDimensionPixelSize(f.d.f22233a)) {
            lVar = new b(this.f1801a, this.f1806f, this.f1804d, this.f1805e, this.f1803c);
        } else {
            lVar = new l(this.f1801a, this.f1802b, this.f1806f, this.f1804d, this.f1805e, this.f1803c);
        }
        lVar.i(this.f1802b);
        lVar.s(this.f1812l);
        lVar.m(this.f1806f);
        lVar.c(this.f1809i);
        lVar.p(this.f1808h);
        lVar.q(this.f1807g);
        return lVar;
    }

    private void l(int i10, int i11, boolean z10, boolean z11) {
        h c10 = c();
        c10.t(z11);
        if (z10) {
            if ((androidx.core.view.j.b(this.f1807g, this.f1806f.getLayoutDirection()) & 7) == 5) {
                i10 -= this.f1806f.getWidth();
            }
            c10.r(i10);
            c10.u(i11);
            int i12 = (int) ((this.f1801a.getResources().getDisplayMetrics().density * 48.0f) / 2.0f);
            c10.o(new Rect(i10 - i12, i11 - i12, i10 + i12, i11 + i12));
        }
        c10.show();
    }

    public void b() {
        if (d()) {
            this.f1810j.dismiss();
        }
    }

    public h c() {
        if (this.f1810j == null) {
            this.f1810j = a();
        }
        return this.f1810j;
    }

    public boolean d() {
        h hVar = this.f1810j;
        if (hVar != null && hVar.isShowing()) {
            return true;
        }
        return false;
    }

    /* JADX INFO: Access modifiers changed from: protected */
    public void e() {
        this.f1810j = null;
        PopupWindow.OnDismissListener onDismissListener = this.f1811k;
        if (onDismissListener != null) {
            onDismissListener.onDismiss();
        }
    }

    public void f(View view) {
        this.f1806f = view;
    }

    public void g(boolean z10) {
        this.f1808h = z10;
        h hVar = this.f1810j;
        if (hVar != null) {
            hVar.p(z10);
        }
    }

    public void h(int i10) {
        this.f1807g = i10;
    }

    public void i(PopupWindow.OnDismissListener onDismissListener) {
        this.f1811k = onDismissListener;
    }

    public void j(j.a aVar) {
        this.f1809i = aVar;
        h hVar = this.f1810j;
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
        if (this.f1806f == null) {
            return false;
        }
        l(0, 0, false, false);
        return true;
    }

    public boolean n(int i10, int i11) {
        if (d()) {
            return true;
        }
        if (this.f1806f == null) {
            return false;
        }
        l(i10, i11, true, true);
        return true;
    }

    public i(Context context, e eVar, View view, boolean z10, int i10, int i11) {
        this.f1807g = 8388611;
        this.f1812l = new a();
        this.f1801a = context;
        this.f1802b = eVar;
        this.f1806f = view;
        this.f1803c = z10;
        this.f1804d = i10;
        this.f1805e = i11;
    }
}

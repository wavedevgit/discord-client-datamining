package androidx.appcompat.widget;

import android.content.Context;
import android.graphics.drawable.Drawable;
import android.os.Build;
import android.transition.Transition;
import android.util.AttributeSet;
import android.util.Log;
import android.view.KeyEvent;
import android.view.MenuItem;
import android.view.MotionEvent;
import android.widget.HeaderViewListAdapter;
import android.widget.ListAdapter;
import android.widget.PopupWindow;
import androidx.appcompat.view.menu.ListMenuItemView;
import java.lang.reflect.Method;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public class l0 extends j0 implements k0 {
    private static Method U;
    private k0 T;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    static class a {
        static void a(PopupWindow popupWindow, Transition transition) {
            popupWindow.setEnterTransition(transition);
        }

        static void b(PopupWindow popupWindow, Transition transition) {
            popupWindow.setExitTransition(transition);
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    static class b {
        static void a(PopupWindow popupWindow, boolean z10) {
            popupWindow.setTouchModal(z10);
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    public static class c extends f0 {
        private k0 A;
        private MenuItem B;

        /* renamed from: y  reason: collision with root package name */
        final int f1858y;

        /* renamed from: z  reason: collision with root package name */
        final int f1859z;

        public c(Context context, boolean z10) {
            super(context, z10);
            if (1 == context.getResources().getConfiguration().getLayoutDirection()) {
                this.f1858y = 21;
                this.f1859z = 22;
                return;
            }
            this.f1858y = 22;
            this.f1859z = 21;
        }

        @Override // androidx.appcompat.widget.f0
        public /* bridge */ /* synthetic */ int d(int i10, int i11, int i12, int i13, int i14) {
            return super.d(i10, i11, i12, i13, i14);
        }

        @Override // androidx.appcompat.widget.f0
        public /* bridge */ /* synthetic */ boolean e(MotionEvent motionEvent, int i10) {
            return super.e(motionEvent, i10);
        }

        @Override // androidx.appcompat.widget.f0, android.view.ViewGroup, android.view.View
        public /* bridge */ /* synthetic */ boolean hasFocus() {
            return super.hasFocus();
        }

        @Override // androidx.appcompat.widget.f0, android.view.View
        public /* bridge */ /* synthetic */ boolean hasWindowFocus() {
            return super.hasWindowFocus();
        }

        @Override // androidx.appcompat.widget.f0, android.view.View
        public /* bridge */ /* synthetic */ boolean isFocused() {
            return super.isFocused();
        }

        @Override // androidx.appcompat.widget.f0, android.view.View
        public /* bridge */ /* synthetic */ boolean isInTouchMode() {
            return super.isInTouchMode();
        }

        @Override // androidx.appcompat.widget.f0, android.view.View
        public boolean onHoverEvent(MotionEvent motionEvent) {
            androidx.appcompat.view.menu.d dVar;
            int i10;
            androidx.appcompat.view.menu.g gVar;
            int pointToPosition;
            int i11;
            if (this.A != null) {
                ListAdapter adapter = getAdapter();
                if (adapter instanceof HeaderViewListAdapter) {
                    HeaderViewListAdapter headerViewListAdapter = (HeaderViewListAdapter) adapter;
                    i10 = headerViewListAdapter.getHeadersCount();
                    dVar = (androidx.appcompat.view.menu.d) headerViewListAdapter.getWrappedAdapter();
                } else {
                    dVar = (androidx.appcompat.view.menu.d) adapter;
                    i10 = 0;
                }
                if (motionEvent.getAction() != 10 && (pointToPosition = pointToPosition((int) motionEvent.getX(), (int) motionEvent.getY())) != -1 && (i11 = pointToPosition - i10) >= 0 && i11 < dVar.getCount()) {
                    gVar = dVar.getItem(i11);
                } else {
                    gVar = null;
                }
                MenuItem menuItem = this.B;
                if (menuItem != gVar) {
                    androidx.appcompat.view.menu.e b10 = dVar.b();
                    if (menuItem != null) {
                        this.A.m(b10, menuItem);
                    }
                    this.B = gVar;
                    if (gVar != null) {
                        this.A.a(b10, gVar);
                    }
                }
            }
            return super.onHoverEvent(motionEvent);
        }

        @Override // android.widget.ListView, android.widget.AbsListView, android.view.View, android.view.KeyEvent.Callback
        public boolean onKeyDown(int i10, KeyEvent keyEvent) {
            androidx.appcompat.view.menu.d dVar;
            ListMenuItemView listMenuItemView = (ListMenuItemView) getSelectedView();
            if (listMenuItemView != null && i10 == this.f1858y) {
                if (listMenuItemView.isEnabled() && listMenuItemView.getItemData().hasSubMenu()) {
                    performItemClick(listMenuItemView, getSelectedItemPosition(), getSelectedItemId());
                }
                return true;
            } else if (listMenuItemView != null && i10 == this.f1859z) {
                setSelection(-1);
                ListAdapter adapter = getAdapter();
                if (adapter instanceof HeaderViewListAdapter) {
                    dVar = (androidx.appcompat.view.menu.d) ((HeaderViewListAdapter) adapter).getWrappedAdapter();
                } else {
                    dVar = (androidx.appcompat.view.menu.d) adapter;
                }
                dVar.b().e(false);
                return true;
            } else {
                return super.onKeyDown(i10, keyEvent);
            }
        }

        @Override // androidx.appcompat.widget.f0, android.widget.AbsListView, android.view.View
        public /* bridge */ /* synthetic */ boolean onTouchEvent(MotionEvent motionEvent) {
            return super.onTouchEvent(motionEvent);
        }

        public void setHoverListener(k0 k0Var) {
            this.A = k0Var;
        }

        @Override // androidx.appcompat.widget.f0, android.widget.AbsListView
        public /* bridge */ /* synthetic */ void setSelector(Drawable drawable) {
            super.setSelector(drawable);
        }
    }

    static {
        try {
            if (Build.VERSION.SDK_INT <= 28) {
                U = PopupWindow.class.getDeclaredMethod("setTouchModal", Boolean.TYPE);
            }
        } catch (NoSuchMethodException unused) {
            Log.i("MenuPopupWindow", "Could not find method setTouchModal() on PopupWindow. Oh well.");
        }
    }

    public l0(Context context, AttributeSet attributeSet, int i10, int i11) {
        super(context, attributeSet, i10, i11);
    }

    public void Q(Object obj) {
        a.a(this.Q, (Transition) obj);
    }

    public void R(Object obj) {
        a.b(this.Q, (Transition) obj);
    }

    public void S(k0 k0Var) {
        this.T = k0Var;
    }

    public void T(boolean z10) {
        if (Build.VERSION.SDK_INT <= 28) {
            Method method = U;
            if (method != null) {
                try {
                    method.invoke(this.Q, Boolean.valueOf(z10));
                    return;
                } catch (Exception unused) {
                    Log.i("MenuPopupWindow", "Could not invoke setTouchModal() on PopupWindow. Oh well.");
                    return;
                }
            }
            return;
        }
        b.a(this.Q, z10);
    }

    @Override // androidx.appcompat.widget.k0
    public void a(androidx.appcompat.view.menu.e eVar, MenuItem menuItem) {
        k0 k0Var = this.T;
        if (k0Var != null) {
            k0Var.a(eVar, menuItem);
        }
    }

    @Override // androidx.appcompat.widget.k0
    public void m(androidx.appcompat.view.menu.e eVar, MenuItem menuItem) {
        k0 k0Var = this.T;
        if (k0Var != null) {
            k0Var.m(eVar, menuItem);
        }
    }

    @Override // androidx.appcompat.widget.j0
    f0 q(Context context, boolean z10) {
        c cVar = new c(context, z10);
        cVar.setHoverListener(this);
        return cVar;
    }
}

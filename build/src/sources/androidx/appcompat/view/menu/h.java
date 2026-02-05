package androidx.appcompat.view.menu;

import android.content.Context;
import android.graphics.Rect;
import android.view.MenuItem;
import android.view.View;
import android.view.ViewGroup;
import android.widget.AdapterView;
import android.widget.FrameLayout;
import android.widget.HeaderViewListAdapter;
import android.widget.ListAdapter;
import android.widget.PopupWindow;
/* JADX INFO: Access modifiers changed from: package-private */
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public abstract class h implements k.e, j, AdapterView.OnItemClickListener {

    /* renamed from: d  reason: collision with root package name */
    private Rect f1471d;

    /* JADX INFO: Access modifiers changed from: protected */
    public static int l(ListAdapter listAdapter, ViewGroup viewGroup, Context context, int i10) {
        int makeMeasureSpec = View.MeasureSpec.makeMeasureSpec(0, 0);
        int makeMeasureSpec2 = View.MeasureSpec.makeMeasureSpec(0, 0);
        int count = listAdapter.getCount();
        int i11 = 0;
        int i12 = 0;
        View view = null;
        for (int i13 = 0; i13 < count; i13++) {
            int itemViewType = listAdapter.getItemViewType(i13);
            if (itemViewType != i12) {
                view = null;
                i12 = itemViewType;
            }
            if (viewGroup == null) {
                viewGroup = new FrameLayout(context);
            }
            view = listAdapter.getView(i13, view, viewGroup);
            view.measure(makeMeasureSpec, makeMeasureSpec2);
            int measuredWidth = view.getMeasuredWidth();
            if (measuredWidth >= i10) {
                return i10;
            }
            if (measuredWidth > i11) {
                i11 = measuredWidth;
            }
        }
        return i11;
    }

    /* JADX INFO: Access modifiers changed from: protected */
    public static boolean v(e eVar) {
        int size = eVar.size();
        for (int i10 = 0; i10 < size; i10++) {
            MenuItem item = eVar.getItem(i10);
            if (item.isVisible() && item.getIcon() != null) {
                return true;
            }
        }
        return false;
    }

    /* JADX INFO: Access modifiers changed from: protected */
    public static d w(ListAdapter listAdapter) {
        if (listAdapter instanceof HeaderViewListAdapter) {
            return (d) ((HeaderViewListAdapter) listAdapter).getWrappedAdapter();
        }
        return (d) listAdapter;
    }

    @Override // androidx.appcompat.view.menu.j
    public boolean b(e eVar, g gVar) {
        return false;
    }

    @Override // androidx.appcompat.view.menu.j
    public boolean g(e eVar, g gVar) {
        return false;
    }

    @Override // androidx.appcompat.view.menu.j
    public void h(Context context, e eVar) {
    }

    public abstract void i(e eVar);

    protected boolean j() {
        return true;
    }

    public Rect k() {
        return this.f1471d;
    }

    public abstract void m(View view);

    public void o(Rect rect) {
        this.f1471d = rect;
    }

    @Override // android.widget.AdapterView.OnItemClickListener
    public void onItemClick(AdapterView adapterView, View view, int i10, long j10) {
        int i11;
        ListAdapter listAdapter = (ListAdapter) adapterView.getAdapter();
        e eVar = w(listAdapter).f1408d;
        MenuItem menuItem = (MenuItem) listAdapter.getItem(i10);
        if (j()) {
            i11 = 0;
        } else {
            i11 = 4;
        }
        eVar.N(menuItem, this, i11);
    }

    public abstract void p(boolean z10);

    public abstract void q(int i10);

    public abstract void r(int i10);

    public abstract void s(PopupWindow.OnDismissListener onDismissListener);

    public abstract void t(boolean z10);

    public abstract void u(int i10);
}

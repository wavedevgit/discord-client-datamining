package androidx.appcompat.view.menu;

import android.content.Context;
import android.os.Bundle;
import android.os.Parcelable;
import android.util.SparseArray;
import android.view.ContextThemeWrapper;
import android.view.LayoutInflater;
import android.view.View;
import android.view.ViewGroup;
import android.widget.AdapterView;
import android.widget.BaseAdapter;
import android.widget.ListAdapter;
import androidx.appcompat.view.menu.j;
import androidx.appcompat.view.menu.k;
import java.util.ArrayList;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public class c implements j, AdapterView.OnItemClickListener {

    /* renamed from: d  reason: collision with root package name */
    Context f1424d;

    /* renamed from: e  reason: collision with root package name */
    LayoutInflater f1425e;

    /* renamed from: i  reason: collision with root package name */
    e f1426i;

    /* renamed from: o  reason: collision with root package name */
    ExpandedMenuView f1427o;

    /* renamed from: p  reason: collision with root package name */
    int f1428p;

    /* renamed from: q  reason: collision with root package name */
    int f1429q;

    /* renamed from: r  reason: collision with root package name */
    int f1430r;

    /* renamed from: s  reason: collision with root package name */
    private j.a f1431s;

    /* renamed from: t  reason: collision with root package name */
    a f1432t;

    /* renamed from: u  reason: collision with root package name */
    private int f1433u;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    private class a extends BaseAdapter {

        /* renamed from: d  reason: collision with root package name */
        private int f1434d = -1;

        public a() {
            a();
        }

        void a() {
            g x10 = c.this.f1426i.x();
            if (x10 != null) {
                ArrayList B = c.this.f1426i.B();
                int size = B.size();
                for (int i10 = 0; i10 < size; i10++) {
                    if (((g) B.get(i10)) == x10) {
                        this.f1434d = i10;
                        return;
                    }
                }
            }
            this.f1434d = -1;
        }

        @Override // android.widget.Adapter
        /* renamed from: b */
        public g getItem(int i10) {
            ArrayList B = c.this.f1426i.B();
            int i11 = i10 + c.this.f1428p;
            int i12 = this.f1434d;
            if (i12 >= 0 && i11 >= i12) {
                i11++;
            }
            return (g) B.get(i11);
        }

        @Override // android.widget.Adapter
        public int getCount() {
            int size = c.this.f1426i.B().size() - c.this.f1428p;
            if (this.f1434d < 0) {
                return size;
            }
            return size - 1;
        }

        @Override // android.widget.Adapter
        public long getItemId(int i10) {
            return i10;
        }

        @Override // android.widget.Adapter
        public View getView(int i10, View view, ViewGroup viewGroup) {
            if (view == null) {
                c cVar = c.this;
                view = cVar.f1425e.inflate(cVar.f1430r, viewGroup, false);
            }
            ((k.a) view).c(getItem(i10), 0);
            return view;
        }

        @Override // android.widget.BaseAdapter
        public void notifyDataSetChanged() {
            a();
            super.notifyDataSetChanged();
        }
    }

    public c(Context context, int i10) {
        this(i10, 0);
        this.f1424d = context;
        this.f1425e = LayoutInflater.from(context);
    }

    @Override // androidx.appcompat.view.menu.j
    public void a(e eVar, boolean z10) {
        j.a aVar = this.f1431s;
        if (aVar != null) {
            aVar.a(eVar, z10);
        }
    }

    @Override // androidx.appcompat.view.menu.j
    public boolean b(e eVar, g gVar) {
        return false;
    }

    @Override // androidx.appcompat.view.menu.j
    public void c(j.a aVar) {
        this.f1431s = aVar;
    }

    @Override // androidx.appcompat.view.menu.j
    public void d(Parcelable parcelable) {
        m((Bundle) parcelable);
    }

    @Override // androidx.appcompat.view.menu.j
    public boolean e(m mVar) {
        if (!mVar.hasVisibleItems()) {
            return false;
        }
        new f(mVar).d(null);
        j.a aVar = this.f1431s;
        if (aVar != null) {
            aVar.b(mVar);
            return true;
        }
        return true;
    }

    @Override // androidx.appcompat.view.menu.j
    public Parcelable f() {
        if (this.f1427o == null) {
            return null;
        }
        Bundle bundle = new Bundle();
        n(bundle);
        return bundle;
    }

    @Override // androidx.appcompat.view.menu.j
    public void g(boolean z10) {
        a aVar = this.f1432t;
        if (aVar != null) {
            aVar.notifyDataSetChanged();
        }
    }

    @Override // androidx.appcompat.view.menu.j
    public int getId() {
        return this.f1433u;
    }

    @Override // androidx.appcompat.view.menu.j
    public boolean h() {
        return false;
    }

    @Override // androidx.appcompat.view.menu.j
    public boolean i(e eVar, g gVar) {
        return false;
    }

    @Override // androidx.appcompat.view.menu.j
    public void j(Context context, e eVar) {
        if (this.f1429q != 0) {
            ContextThemeWrapper contextThemeWrapper = new ContextThemeWrapper(context, this.f1429q);
            this.f1424d = contextThemeWrapper;
            this.f1425e = LayoutInflater.from(contextThemeWrapper);
        } else if (this.f1424d != null) {
            this.f1424d = context;
            if (this.f1425e == null) {
                this.f1425e = LayoutInflater.from(context);
            }
        }
        this.f1426i = eVar;
        a aVar = this.f1432t;
        if (aVar != null) {
            aVar.notifyDataSetChanged();
        }
    }

    public ListAdapter k() {
        if (this.f1432t == null) {
            this.f1432t = new a();
        }
        return this.f1432t;
    }

    public k l(ViewGroup viewGroup) {
        if (this.f1427o == null) {
            this.f1427o = (ExpandedMenuView) this.f1425e.inflate(f.g.f23383g, viewGroup, false);
            if (this.f1432t == null) {
                this.f1432t = new a();
            }
            this.f1427o.setAdapter((ListAdapter) this.f1432t);
            this.f1427o.setOnItemClickListener(this);
        }
        return this.f1427o;
    }

    public void m(Bundle bundle) {
        SparseArray<Parcelable> sparseParcelableArray = bundle.getSparseParcelableArray("android:menu:list");
        if (sparseParcelableArray != null) {
            this.f1427o.restoreHierarchyState(sparseParcelableArray);
        }
    }

    public void n(Bundle bundle) {
        SparseArray<Parcelable> sparseArray = new SparseArray<>();
        ExpandedMenuView expandedMenuView = this.f1427o;
        if (expandedMenuView != null) {
            expandedMenuView.saveHierarchyState(sparseArray);
        }
        bundle.putSparseParcelableArray("android:menu:list", sparseArray);
    }

    @Override // android.widget.AdapterView.OnItemClickListener
    public void onItemClick(AdapterView adapterView, View view, int i10, long j10) {
        this.f1426i.P(this.f1432t.getItem(i10), this, 0);
    }

    public c(int i10, int i11) {
        this.f1430r = i10;
        this.f1429q = i11;
    }
}

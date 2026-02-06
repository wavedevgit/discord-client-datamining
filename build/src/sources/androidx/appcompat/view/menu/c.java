package androidx.appcompat.view.menu;

import android.content.Context;
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
    Context f1726d;

    /* renamed from: e  reason: collision with root package name */
    LayoutInflater f1727e;

    /* renamed from: i  reason: collision with root package name */
    e f1728i;

    /* renamed from: o  reason: collision with root package name */
    ExpandedMenuView f1729o;

    /* renamed from: p  reason: collision with root package name */
    int f1730p;

    /* renamed from: q  reason: collision with root package name */
    int f1731q;

    /* renamed from: r  reason: collision with root package name */
    int f1732r;

    /* renamed from: s  reason: collision with root package name */
    private j.a f1733s;

    /* renamed from: t  reason: collision with root package name */
    a f1734t;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    private class a extends BaseAdapter {

        /* renamed from: d  reason: collision with root package name */
        private int f1735d = -1;

        public a() {
            a();
        }

        void a() {
            g v10 = c.this.f1728i.v();
            if (v10 != null) {
                ArrayList z10 = c.this.f1728i.z();
                int size = z10.size();
                for (int i10 = 0; i10 < size; i10++) {
                    if (((g) z10.get(i10)) == v10) {
                        this.f1735d = i10;
                        return;
                    }
                }
            }
            this.f1735d = -1;
        }

        @Override // android.widget.Adapter
        /* renamed from: b */
        public g getItem(int i10) {
            ArrayList z10 = c.this.f1728i.z();
            int i11 = i10 + c.this.f1730p;
            int i12 = this.f1735d;
            if (i12 >= 0 && i11 >= i12) {
                i11++;
            }
            return (g) z10.get(i11);
        }

        @Override // android.widget.Adapter
        public int getCount() {
            int size = c.this.f1728i.z().size() - c.this.f1730p;
            if (this.f1735d < 0) {
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
                view = cVar.f1727e.inflate(cVar.f1732r, viewGroup, false);
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
        this.f1726d = context;
        this.f1727e = LayoutInflater.from(context);
    }

    @Override // androidx.appcompat.view.menu.j
    public void a(e eVar, boolean z10) {
        j.a aVar = this.f1733s;
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
        this.f1733s = aVar;
    }

    @Override // androidx.appcompat.view.menu.j
    public boolean d(m mVar) {
        if (!mVar.hasVisibleItems()) {
            return false;
        }
        new f(mVar).d(null);
        j.a aVar = this.f1733s;
        if (aVar != null) {
            aVar.b(mVar);
            return true;
        }
        return true;
    }

    @Override // androidx.appcompat.view.menu.j
    public void e(boolean z10) {
        a aVar = this.f1734t;
        if (aVar != null) {
            aVar.notifyDataSetChanged();
        }
    }

    @Override // androidx.appcompat.view.menu.j
    public boolean f() {
        return false;
    }

    @Override // androidx.appcompat.view.menu.j
    public boolean g(e eVar, g gVar) {
        return false;
    }

    @Override // androidx.appcompat.view.menu.j
    public void h(Context context, e eVar) {
        if (this.f1731q != 0) {
            ContextThemeWrapper contextThemeWrapper = new ContextThemeWrapper(context, this.f1731q);
            this.f1726d = contextThemeWrapper;
            this.f1727e = LayoutInflater.from(contextThemeWrapper);
        } else if (this.f1726d != null) {
            this.f1726d = context;
            if (this.f1727e == null) {
                this.f1727e = LayoutInflater.from(context);
            }
        }
        this.f1728i = eVar;
        a aVar = this.f1734t;
        if (aVar != null) {
            aVar.notifyDataSetChanged();
        }
    }

    public ListAdapter i() {
        if (this.f1734t == null) {
            this.f1734t = new a();
        }
        return this.f1734t;
    }

    public k j(ViewGroup viewGroup) {
        if (this.f1729o == null) {
            this.f1729o = (ExpandedMenuView) this.f1727e.inflate(f.g.f22304g, viewGroup, false);
            if (this.f1734t == null) {
                this.f1734t = new a();
            }
            this.f1729o.setAdapter((ListAdapter) this.f1734t);
            this.f1729o.setOnItemClickListener(this);
        }
        return this.f1729o;
    }

    @Override // android.widget.AdapterView.OnItemClickListener
    public void onItemClick(AdapterView adapterView, View view, int i10, long j10) {
        this.f1728i.N(this.f1734t.getItem(i10), this, 0);
    }

    public c(int i10, int i11) {
        this.f1732r = i10;
        this.f1731q = i11;
    }
}

package androidx.appcompat.view.menu;

import android.view.LayoutInflater;
import android.view.View;
import android.view.ViewGroup;
import android.widget.BaseAdapter;
import androidx.appcompat.view.menu.k;
import java.util.ArrayList;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public class d extends BaseAdapter {

    /* renamed from: d  reason: collision with root package name */
    e f1434d;

    /* renamed from: e  reason: collision with root package name */
    private int f1435e = -1;

    /* renamed from: i  reason: collision with root package name */
    private boolean f1436i;

    /* renamed from: o  reason: collision with root package name */
    private final boolean f1437o;

    /* renamed from: p  reason: collision with root package name */
    private final LayoutInflater f1438p;

    /* renamed from: q  reason: collision with root package name */
    private final int f1439q;

    public d(e eVar, LayoutInflater layoutInflater, boolean z10, int i10) {
        this.f1437o = z10;
        this.f1438p = layoutInflater;
        this.f1434d = eVar;
        this.f1439q = i10;
        a();
    }

    void a() {
        g v10 = this.f1434d.v();
        if (v10 != null) {
            ArrayList z10 = this.f1434d.z();
            int size = z10.size();
            for (int i10 = 0; i10 < size; i10++) {
                if (((g) z10.get(i10)) == v10) {
                    this.f1435e = i10;
                    return;
                }
            }
        }
        this.f1435e = -1;
    }

    public e b() {
        return this.f1434d;
    }

    @Override // android.widget.Adapter
    /* renamed from: c */
    public g getItem(int i10) {
        ArrayList E;
        if (this.f1437o) {
            E = this.f1434d.z();
        } else {
            E = this.f1434d.E();
        }
        int i11 = this.f1435e;
        if (i11 >= 0 && i10 >= i11) {
            i10++;
        }
        return (g) E.get(i10);
    }

    public void d(boolean z10) {
        this.f1436i = z10;
    }

    @Override // android.widget.Adapter
    public int getCount() {
        ArrayList E;
        if (this.f1437o) {
            E = this.f1434d.z();
        } else {
            E = this.f1434d.E();
        }
        if (this.f1435e < 0) {
            return E.size();
        }
        return E.size() - 1;
    }

    @Override // android.widget.Adapter
    public long getItemId(int i10) {
        return i10;
    }

    @Override // android.widget.Adapter
    public View getView(int i10, View view, ViewGroup viewGroup) {
        int i11;
        boolean z10;
        if (view == null) {
            view = this.f1438p.inflate(this.f1439q, viewGroup, false);
        }
        int groupId = getItem(i10).getGroupId();
        int i12 = i10 - 1;
        if (i12 >= 0) {
            i11 = getItem(i12).getGroupId();
        } else {
            i11 = groupId;
        }
        ListMenuItemView listMenuItemView = (ListMenuItemView) view;
        if (this.f1434d.G() && groupId != i11) {
            z10 = true;
        } else {
            z10 = false;
        }
        listMenuItemView.setGroupDividerEnabled(z10);
        k.a aVar = (k.a) view;
        if (this.f1436i) {
            listMenuItemView.setForceShowIcon(true);
        }
        aVar.c(getItem(i10), 0);
        return view;
    }

    @Override // android.widget.BaseAdapter
    public void notifyDataSetChanged() {
        a();
        super.notifyDataSetChanged();
    }
}

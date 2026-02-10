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
    e f1436d;

    /* renamed from: e  reason: collision with root package name */
    private int f1437e = -1;

    /* renamed from: i  reason: collision with root package name */
    private boolean f1438i;

    /* renamed from: o  reason: collision with root package name */
    private final boolean f1439o;

    /* renamed from: p  reason: collision with root package name */
    private final LayoutInflater f1440p;

    /* renamed from: q  reason: collision with root package name */
    private final int f1441q;

    public d(e eVar, LayoutInflater layoutInflater, boolean z10, int i10) {
        this.f1439o = z10;
        this.f1440p = layoutInflater;
        this.f1436d = eVar;
        this.f1441q = i10;
        a();
    }

    void a() {
        g x10 = this.f1436d.x();
        if (x10 != null) {
            ArrayList B = this.f1436d.B();
            int size = B.size();
            for (int i10 = 0; i10 < size; i10++) {
                if (((g) B.get(i10)) == x10) {
                    this.f1437e = i10;
                    return;
                }
            }
        }
        this.f1437e = -1;
    }

    public e b() {
        return this.f1436d;
    }

    @Override // android.widget.Adapter
    /* renamed from: c */
    public g getItem(int i10) {
        ArrayList G;
        if (this.f1439o) {
            G = this.f1436d.B();
        } else {
            G = this.f1436d.G();
        }
        int i11 = this.f1437e;
        if (i11 >= 0 && i10 >= i11) {
            i10++;
        }
        return (g) G.get(i10);
    }

    public void d(boolean z10) {
        this.f1438i = z10;
    }

    @Override // android.widget.Adapter
    public int getCount() {
        ArrayList G;
        if (this.f1439o) {
            G = this.f1436d.B();
        } else {
            G = this.f1436d.G();
        }
        if (this.f1437e < 0) {
            return G.size();
        }
        return G.size() - 1;
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
            view = this.f1440p.inflate(this.f1441q, viewGroup, false);
        }
        int groupId = getItem(i10).getGroupId();
        int i12 = i10 - 1;
        if (i12 >= 0) {
            i11 = getItem(i12).getGroupId();
        } else {
            i11 = groupId;
        }
        ListMenuItemView listMenuItemView = (ListMenuItemView) view;
        if (this.f1436d.I() && groupId != i11) {
            z10 = true;
        } else {
            z10 = false;
        }
        listMenuItemView.setGroupDividerEnabled(z10);
        k.a aVar = (k.a) view;
        if (this.f1438i) {
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

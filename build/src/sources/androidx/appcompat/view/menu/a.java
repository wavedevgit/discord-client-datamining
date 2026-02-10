package androidx.appcompat.view.menu;

import android.content.Context;
import android.view.LayoutInflater;
import android.view.View;
import android.view.ViewGroup;
import androidx.appcompat.view.menu.j;
import androidx.appcompat.view.menu.k;
import java.util.ArrayList;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public abstract class a implements j {

    /* renamed from: d  reason: collision with root package name */
    protected Context f1390d;

    /* renamed from: e  reason: collision with root package name */
    protected Context f1391e;

    /* renamed from: i  reason: collision with root package name */
    protected e f1392i;

    /* renamed from: o  reason: collision with root package name */
    protected LayoutInflater f1393o;

    /* renamed from: p  reason: collision with root package name */
    protected LayoutInflater f1394p;

    /* renamed from: q  reason: collision with root package name */
    private j.a f1395q;

    /* renamed from: r  reason: collision with root package name */
    private int f1396r;

    /* renamed from: s  reason: collision with root package name */
    private int f1397s;

    /* renamed from: t  reason: collision with root package name */
    protected k f1398t;

    /* renamed from: u  reason: collision with root package name */
    private int f1399u;

    public a(Context context, int i10, int i11) {
        this.f1390d = context;
        this.f1393o = LayoutInflater.from(context);
        this.f1396r = i10;
        this.f1397s = i11;
    }

    @Override // androidx.appcompat.view.menu.j
    public void a(e eVar, boolean z10) {
        j.a aVar = this.f1395q;
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
        this.f1395q = aVar;
    }

    /* JADX WARN: Multi-variable type inference failed */
    /* JADX WARN: Type inference failed for: r2v4, types: [androidx.appcompat.view.menu.e] */
    @Override // androidx.appcompat.view.menu.j
    public boolean e(m mVar) {
        j.a aVar = this.f1395q;
        m mVar2 = mVar;
        if (aVar != null) {
            if (mVar == null) {
                mVar2 = this.f1392i;
            }
            return aVar.b(mVar2);
        }
        return false;
    }

    @Override // androidx.appcompat.view.menu.j
    public void g(boolean z10) {
        g gVar;
        ViewGroup viewGroup = (ViewGroup) this.f1398t;
        if (viewGroup != null) {
            e eVar = this.f1392i;
            int i10 = 0;
            if (eVar != null) {
                eVar.t();
                ArrayList G = this.f1392i.G();
                int size = G.size();
                int i11 = 0;
                for (int i12 = 0; i12 < size; i12++) {
                    g gVar2 = (g) G.get(i12);
                    if (s(i11, gVar2)) {
                        View childAt = viewGroup.getChildAt(i11);
                        if (childAt instanceof k.a) {
                            gVar = ((k.a) childAt).getItemData();
                        } else {
                            gVar = null;
                        }
                        View p10 = p(gVar2, childAt, viewGroup);
                        if (gVar2 != gVar) {
                            p10.setPressed(false);
                            p10.jumpDrawablesToCurrentState();
                        }
                        if (p10 != childAt) {
                            k(p10, i11);
                        }
                        i11++;
                    }
                }
                i10 = i11;
            }
            while (i10 < viewGroup.getChildCount()) {
                if (!n(viewGroup, i10)) {
                    i10++;
                }
            }
        }
    }

    @Override // androidx.appcompat.view.menu.j
    public int getId() {
        return this.f1399u;
    }

    @Override // androidx.appcompat.view.menu.j
    public boolean i(e eVar, g gVar) {
        return false;
    }

    @Override // androidx.appcompat.view.menu.j
    public void j(Context context, e eVar) {
        this.f1391e = context;
        this.f1394p = LayoutInflater.from(context);
        this.f1392i = eVar;
    }

    protected void k(View view, int i10) {
        ViewGroup viewGroup = (ViewGroup) view.getParent();
        if (viewGroup != null) {
            viewGroup.removeView(view);
        }
        ((ViewGroup) this.f1398t).addView(view, i10);
    }

    public abstract void l(g gVar, k.a aVar);

    public k.a m(ViewGroup viewGroup) {
        return (k.a) this.f1393o.inflate(this.f1397s, viewGroup, false);
    }

    /* JADX INFO: Access modifiers changed from: protected */
    public boolean n(ViewGroup viewGroup, int i10) {
        viewGroup.removeViewAt(i10);
        return true;
    }

    public j.a o() {
        return this.f1395q;
    }

    public View p(g gVar, View view, ViewGroup viewGroup) {
        k.a m10;
        if (view instanceof k.a) {
            m10 = (k.a) view;
        } else {
            m10 = m(viewGroup);
        }
        l(gVar, m10);
        return (View) m10;
    }

    public k q(ViewGroup viewGroup) {
        if (this.f1398t == null) {
            k kVar = (k) this.f1393o.inflate(this.f1396r, viewGroup, false);
            this.f1398t = kVar;
            kVar.a(this.f1392i);
            g(true);
        }
        return this.f1398t;
    }

    public void r(int i10) {
        this.f1399u = i10;
    }

    public abstract boolean s(int i10, g gVar);
}

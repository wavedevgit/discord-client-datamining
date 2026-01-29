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
    protected Context f1238d;

    /* renamed from: e  reason: collision with root package name */
    protected Context f1239e;

    /* renamed from: i  reason: collision with root package name */
    protected e f1240i;

    /* renamed from: o  reason: collision with root package name */
    protected LayoutInflater f1241o;

    /* renamed from: p  reason: collision with root package name */
    protected LayoutInflater f1242p;

    /* renamed from: q  reason: collision with root package name */
    private j.a f1243q;

    /* renamed from: r  reason: collision with root package name */
    private int f1244r;

    /* renamed from: s  reason: collision with root package name */
    private int f1245s;

    /* renamed from: t  reason: collision with root package name */
    protected k f1246t;

    /* renamed from: u  reason: collision with root package name */
    private int f1247u;

    public a(Context context, int i10, int i11) {
        this.f1238d = context;
        this.f1241o = LayoutInflater.from(context);
        this.f1244r = i10;
        this.f1245s = i11;
    }

    @Override // androidx.appcompat.view.menu.j
    public void a(e eVar, boolean z10) {
        j.a aVar = this.f1243q;
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
        this.f1243q = aVar;
    }

    /* JADX WARN: Multi-variable type inference failed */
    /* JADX WARN: Type inference failed for: r2v4, types: [androidx.appcompat.view.menu.e] */
    @Override // androidx.appcompat.view.menu.j
    public boolean d(m mVar) {
        j.a aVar = this.f1243q;
        m mVar2 = mVar;
        if (aVar != null) {
            if (mVar == null) {
                mVar2 = this.f1240i;
            }
            return aVar.b(mVar2);
        }
        return false;
    }

    @Override // androidx.appcompat.view.menu.j
    public void e(boolean z10) {
        g gVar;
        ViewGroup viewGroup = (ViewGroup) this.f1246t;
        if (viewGroup != null) {
            e eVar = this.f1240i;
            int i10 = 0;
            if (eVar != null) {
                eVar.r();
                ArrayList E = this.f1240i.E();
                int size = E.size();
                int i11 = 0;
                for (int i12 = 0; i12 < size; i12++) {
                    g gVar2 = (g) E.get(i12);
                    if (q(i11, gVar2)) {
                        View childAt = viewGroup.getChildAt(i11);
                        if (childAt instanceof k.a) {
                            gVar = ((k.a) childAt).getItemData();
                        } else {
                            gVar = null;
                        }
                        View n10 = n(gVar2, childAt, viewGroup);
                        if (gVar2 != gVar) {
                            n10.setPressed(false);
                            n10.jumpDrawablesToCurrentState();
                        }
                        if (n10 != childAt) {
                            i(n10, i11);
                        }
                        i11++;
                    }
                }
                i10 = i11;
            }
            while (i10 < viewGroup.getChildCount()) {
                if (!l(viewGroup, i10)) {
                    i10++;
                }
            }
        }
    }

    @Override // androidx.appcompat.view.menu.j
    public boolean g(e eVar, g gVar) {
        return false;
    }

    @Override // androidx.appcompat.view.menu.j
    public void h(Context context, e eVar) {
        this.f1239e = context;
        this.f1242p = LayoutInflater.from(context);
        this.f1240i = eVar;
    }

    protected void i(View view, int i10) {
        ViewGroup viewGroup = (ViewGroup) view.getParent();
        if (viewGroup != null) {
            viewGroup.removeView(view);
        }
        ((ViewGroup) this.f1246t).addView(view, i10);
    }

    public abstract void j(g gVar, k.a aVar);

    public k.a k(ViewGroup viewGroup) {
        return (k.a) this.f1241o.inflate(this.f1245s, viewGroup, false);
    }

    /* JADX INFO: Access modifiers changed from: protected */
    public boolean l(ViewGroup viewGroup, int i10) {
        viewGroup.removeViewAt(i10);
        return true;
    }

    public j.a m() {
        return this.f1243q;
    }

    public View n(g gVar, View view, ViewGroup viewGroup) {
        k.a k10;
        if (view instanceof k.a) {
            k10 = (k.a) view;
        } else {
            k10 = k(viewGroup);
        }
        j(gVar, k10);
        return (View) k10;
    }

    public k o(ViewGroup viewGroup) {
        if (this.f1246t == null) {
            k kVar = (k) this.f1241o.inflate(this.f1244r, viewGroup, false);
            this.f1246t = kVar;
            kVar.a(this.f1240i);
            e(true);
        }
        return this.f1246t;
    }

    public void p(int i10) {
        this.f1247u = i10;
    }

    public abstract boolean q(int i10, g gVar);
}

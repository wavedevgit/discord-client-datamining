package androidx.constraintlayout.core.widgets;

import h1.h;
import java.util.ArrayList;
import java.util.HashSet;
import java.util.Iterator;
import l1.i;
import l1.o;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public class d {

    /* renamed from: b  reason: collision with root package name */
    private int f2464b;

    /* renamed from: c  reason: collision with root package name */
    private boolean f2465c;

    /* renamed from: d  reason: collision with root package name */
    public final ConstraintWidget f2466d;

    /* renamed from: e  reason: collision with root package name */
    public final a f2467e;

    /* renamed from: f  reason: collision with root package name */
    public d f2468f;

    /* renamed from: i  reason: collision with root package name */
    h1.h f2471i;

    /* renamed from: a  reason: collision with root package name */
    private HashSet f2463a = null;

    /* renamed from: g  reason: collision with root package name */
    public int f2469g = 0;

    /* renamed from: h  reason: collision with root package name */
    int f2470h = Integer.MIN_VALUE;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    public enum a {
        NONE,
        LEFT,
        TOP,
        RIGHT,
        BOTTOM,
        BASELINE,
        CENTER,
        CENTER_X,
        CENTER_Y
    }

    public d(ConstraintWidget constraintWidget, a aVar) {
        this.f2466d = constraintWidget;
        this.f2467e = aVar;
    }

    public boolean a(d dVar, int i10) {
        return b(dVar, i10, Integer.MIN_VALUE, false);
    }

    public boolean b(d dVar, int i10, int i11, boolean z10) {
        if (dVar == null) {
            q();
            return true;
        } else if (!z10 && !p(dVar)) {
            return false;
        } else {
            this.f2468f = dVar;
            if (dVar.f2463a == null) {
                dVar.f2463a = new HashSet();
            }
            HashSet hashSet = this.f2468f.f2463a;
            if (hashSet != null) {
                hashSet.add(this);
            }
            this.f2469g = i10;
            this.f2470h = i11;
            return true;
        }
    }

    public void c(int i10, ArrayList arrayList, o oVar) {
        HashSet hashSet = this.f2463a;
        if (hashSet != null) {
            Iterator it = hashSet.iterator();
            while (it.hasNext()) {
                i.a(((d) it.next()).f2466d, i10, arrayList, oVar);
            }
        }
    }

    public HashSet d() {
        return this.f2463a;
    }

    public int e() {
        if (!this.f2465c) {
            return 0;
        }
        return this.f2464b;
    }

    public int f() {
        d dVar;
        if (this.f2466d.V() == 8) {
            return 0;
        }
        if (this.f2470h != Integer.MIN_VALUE && (dVar = this.f2468f) != null && dVar.f2466d.V() == 8) {
            return this.f2470h;
        }
        return this.f2469g;
    }

    public final d g() {
        switch (this.f2467e.ordinal()) {
            case 0:
            case 5:
            case 6:
            case 7:
            case 8:
                return null;
            case 1:
                return this.f2466d.Q;
            case 2:
                return this.f2466d.R;
            case 3:
                return this.f2466d.O;
            case 4:
                return this.f2466d.P;
            default:
                throw new AssertionError(this.f2467e.name());
        }
    }

    public ConstraintWidget h() {
        return this.f2466d;
    }

    public h1.h i() {
        return this.f2471i;
    }

    public d j() {
        return this.f2468f;
    }

    public a k() {
        return this.f2467e;
    }

    public boolean l() {
        HashSet hashSet = this.f2463a;
        if (hashSet == null) {
            return false;
        }
        Iterator it = hashSet.iterator();
        while (it.hasNext()) {
            if (((d) it.next()).g().o()) {
                return true;
            }
        }
        return false;
    }

    public boolean m() {
        HashSet hashSet = this.f2463a;
        if (hashSet == null || hashSet.size() <= 0) {
            return false;
        }
        return true;
    }

    public boolean n() {
        return this.f2465c;
    }

    public boolean o() {
        if (this.f2468f != null) {
            return true;
        }
        return false;
    }

    public boolean p(d dVar) {
        boolean z10;
        boolean z11;
        if (dVar == null) {
            return false;
        }
        a k10 = dVar.k();
        a aVar = this.f2467e;
        if (k10 != aVar) {
            switch (aVar.ordinal()) {
                case 0:
                case 7:
                case 8:
                    return false;
                case 1:
                case 3:
                    if (k10 != a.LEFT && k10 != a.RIGHT) {
                        z10 = false;
                    } else {
                        z10 = true;
                    }
                    if (dVar.h() instanceof f) {
                        if (!z10 && k10 != a.CENTER_X) {
                            return false;
                        }
                        return true;
                    }
                    return z10;
                case 2:
                case 4:
                    if (k10 != a.TOP && k10 != a.BOTTOM) {
                        z11 = false;
                    } else {
                        z11 = true;
                    }
                    if (dVar.h() instanceof f) {
                        if (!z11 && k10 != a.CENTER_Y) {
                            return false;
                        }
                        return true;
                    }
                    return z11;
                case 5:
                    if (k10 == a.LEFT || k10 == a.RIGHT) {
                        return false;
                    }
                    return true;
                case 6:
                    if (k10 == a.BASELINE || k10 == a.CENTER_X || k10 == a.CENTER_Y) {
                        return false;
                    }
                    return true;
                default:
                    throw new AssertionError(this.f2467e.name());
            }
        } else if (aVar == a.BASELINE && (!dVar.h().Z() || !h().Z())) {
            return false;
        } else {
            return true;
        }
    }

    public void q() {
        HashSet hashSet;
        d dVar = this.f2468f;
        if (dVar != null && (hashSet = dVar.f2463a) != null) {
            hashSet.remove(this);
            if (this.f2468f.f2463a.size() == 0) {
                this.f2468f.f2463a = null;
            }
        }
        this.f2463a = null;
        this.f2468f = null;
        this.f2469g = 0;
        this.f2470h = Integer.MIN_VALUE;
        this.f2465c = false;
        this.f2464b = 0;
    }

    public void r() {
        this.f2465c = false;
        this.f2464b = 0;
    }

    public void s(h1.c cVar) {
        h1.h hVar = this.f2471i;
        if (hVar == null) {
            this.f2471i = new h1.h(h.a.UNRESTRICTED, null);
        } else {
            hVar.g();
        }
    }

    public void t(int i10) {
        this.f2464b = i10;
        this.f2465c = true;
    }

    public String toString() {
        return this.f2466d.t() + ":" + this.f2467e.toString();
    }

    public void u(int i10) {
        if (o()) {
            this.f2470h = i10;
        }
    }
}

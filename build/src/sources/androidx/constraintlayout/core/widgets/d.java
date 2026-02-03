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
    private int f2383b;

    /* renamed from: c  reason: collision with root package name */
    private boolean f2384c;

    /* renamed from: d  reason: collision with root package name */
    public final ConstraintWidget f2385d;

    /* renamed from: e  reason: collision with root package name */
    public final a f2386e;

    /* renamed from: f  reason: collision with root package name */
    public d f2387f;

    /* renamed from: i  reason: collision with root package name */
    h1.h f2390i;

    /* renamed from: a  reason: collision with root package name */
    private HashSet f2382a = null;

    /* renamed from: g  reason: collision with root package name */
    public int f2388g = 0;

    /* renamed from: h  reason: collision with root package name */
    int f2389h = Integer.MIN_VALUE;

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
        this.f2385d = constraintWidget;
        this.f2386e = aVar;
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
            this.f2387f = dVar;
            if (dVar.f2382a == null) {
                dVar.f2382a = new HashSet();
            }
            HashSet hashSet = this.f2387f.f2382a;
            if (hashSet != null) {
                hashSet.add(this);
            }
            this.f2388g = i10;
            this.f2389h = i11;
            return true;
        }
    }

    public void c(int i10, ArrayList arrayList, o oVar) {
        HashSet hashSet = this.f2382a;
        if (hashSet != null) {
            Iterator it = hashSet.iterator();
            while (it.hasNext()) {
                i.a(((d) it.next()).f2385d, i10, arrayList, oVar);
            }
        }
    }

    public HashSet d() {
        return this.f2382a;
    }

    public int e() {
        if (!this.f2384c) {
            return 0;
        }
        return this.f2383b;
    }

    public int f() {
        d dVar;
        if (this.f2385d.V() == 8) {
            return 0;
        }
        if (this.f2389h != Integer.MIN_VALUE && (dVar = this.f2387f) != null && dVar.f2385d.V() == 8) {
            return this.f2389h;
        }
        return this.f2388g;
    }

    public final d g() {
        switch (this.f2386e.ordinal()) {
            case 0:
            case 5:
            case 6:
            case 7:
            case 8:
                return null;
            case 1:
                return this.f2385d.Q;
            case 2:
                return this.f2385d.R;
            case 3:
                return this.f2385d.O;
            case 4:
                return this.f2385d.P;
            default:
                throw new AssertionError(this.f2386e.name());
        }
    }

    public ConstraintWidget h() {
        return this.f2385d;
    }

    public h1.h i() {
        return this.f2390i;
    }

    public d j() {
        return this.f2387f;
    }

    public a k() {
        return this.f2386e;
    }

    public boolean l() {
        HashSet hashSet = this.f2382a;
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
        HashSet hashSet = this.f2382a;
        if (hashSet == null || hashSet.size() <= 0) {
            return false;
        }
        return true;
    }

    public boolean n() {
        return this.f2384c;
    }

    public boolean o() {
        if (this.f2387f != null) {
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
        a aVar = this.f2386e;
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
                    throw new AssertionError(this.f2386e.name());
            }
        } else if (aVar == a.BASELINE && (!dVar.h().Z() || !h().Z())) {
            return false;
        } else {
            return true;
        }
    }

    public void q() {
        HashSet hashSet;
        d dVar = this.f2387f;
        if (dVar != null && (hashSet = dVar.f2382a) != null) {
            hashSet.remove(this);
            if (this.f2387f.f2382a.size() == 0) {
                this.f2387f.f2382a = null;
            }
        }
        this.f2382a = null;
        this.f2387f = null;
        this.f2388g = 0;
        this.f2389h = Integer.MIN_VALUE;
        this.f2384c = false;
        this.f2383b = 0;
    }

    public void r() {
        this.f2384c = false;
        this.f2383b = 0;
    }

    public void s(h1.c cVar) {
        h1.h hVar = this.f2390i;
        if (hVar == null) {
            this.f2390i = new h1.h(h.a.UNRESTRICTED, null);
        } else {
            hVar.g();
        }
    }

    public void t(int i10) {
        this.f2383b = i10;
        this.f2384c = true;
    }

    public String toString() {
        return this.f2385d.t() + ":" + this.f2386e.toString();
    }

    public void u(int i10) {
        if (o()) {
            this.f2389h = i10;
        }
    }
}

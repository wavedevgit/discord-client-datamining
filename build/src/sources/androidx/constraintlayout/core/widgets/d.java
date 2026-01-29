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
    private int f2339b;

    /* renamed from: c  reason: collision with root package name */
    private boolean f2340c;

    /* renamed from: d  reason: collision with root package name */
    public final ConstraintWidget f2341d;

    /* renamed from: e  reason: collision with root package name */
    public final a f2342e;

    /* renamed from: f  reason: collision with root package name */
    public d f2343f;

    /* renamed from: i  reason: collision with root package name */
    h1.h f2346i;

    /* renamed from: a  reason: collision with root package name */
    private HashSet f2338a = null;

    /* renamed from: g  reason: collision with root package name */
    public int f2344g = 0;

    /* renamed from: h  reason: collision with root package name */
    int f2345h = Integer.MIN_VALUE;

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
        this.f2341d = constraintWidget;
        this.f2342e = aVar;
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
            this.f2343f = dVar;
            if (dVar.f2338a == null) {
                dVar.f2338a = new HashSet();
            }
            HashSet hashSet = this.f2343f.f2338a;
            if (hashSet != null) {
                hashSet.add(this);
            }
            this.f2344g = i10;
            this.f2345h = i11;
            return true;
        }
    }

    public void c(int i10, ArrayList arrayList, o oVar) {
        HashSet hashSet = this.f2338a;
        if (hashSet != null) {
            Iterator it = hashSet.iterator();
            while (it.hasNext()) {
                i.a(((d) it.next()).f2341d, i10, arrayList, oVar);
            }
        }
    }

    public HashSet d() {
        return this.f2338a;
    }

    public int e() {
        if (!this.f2340c) {
            return 0;
        }
        return this.f2339b;
    }

    public int f() {
        d dVar;
        if (this.f2341d.V() == 8) {
            return 0;
        }
        if (this.f2345h != Integer.MIN_VALUE && (dVar = this.f2343f) != null && dVar.f2341d.V() == 8) {
            return this.f2345h;
        }
        return this.f2344g;
    }

    public final d g() {
        switch (this.f2342e.ordinal()) {
            case 0:
            case 5:
            case 6:
            case 7:
            case 8:
                return null;
            case 1:
                return this.f2341d.Q;
            case 2:
                return this.f2341d.R;
            case 3:
                return this.f2341d.O;
            case 4:
                return this.f2341d.P;
            default:
                throw new AssertionError(this.f2342e.name());
        }
    }

    public ConstraintWidget h() {
        return this.f2341d;
    }

    public h1.h i() {
        return this.f2346i;
    }

    public d j() {
        return this.f2343f;
    }

    public a k() {
        return this.f2342e;
    }

    public boolean l() {
        HashSet hashSet = this.f2338a;
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
        HashSet hashSet = this.f2338a;
        if (hashSet == null || hashSet.size() <= 0) {
            return false;
        }
        return true;
    }

    public boolean n() {
        return this.f2340c;
    }

    public boolean o() {
        if (this.f2343f != null) {
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
        a aVar = this.f2342e;
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
                    throw new AssertionError(this.f2342e.name());
            }
        } else if (aVar == a.BASELINE && (!dVar.h().Z() || !h().Z())) {
            return false;
        } else {
            return true;
        }
    }

    public void q() {
        HashSet hashSet;
        d dVar = this.f2343f;
        if (dVar != null && (hashSet = dVar.f2338a) != null) {
            hashSet.remove(this);
            if (this.f2343f.f2338a.size() == 0) {
                this.f2343f.f2338a = null;
            }
        }
        this.f2338a = null;
        this.f2343f = null;
        this.f2344g = 0;
        this.f2345h = Integer.MIN_VALUE;
        this.f2340c = false;
        this.f2339b = 0;
    }

    public void r() {
        this.f2340c = false;
        this.f2339b = 0;
    }

    public void s(h1.c cVar) {
        h1.h hVar = this.f2346i;
        if (hVar == null) {
            this.f2346i = new h1.h(h.a.UNRESTRICTED, null);
        } else {
            hVar.g();
        }
    }

    public void t(int i10) {
        this.f2339b = i10;
        this.f2340c = true;
    }

    public String toString() {
        return this.f2341d.t() + ":" + this.f2342e.toString();
    }

    public void u(int i10) {
        if (o()) {
            this.f2345h = i10;
        }
    }
}

package androidx.constraintlayout.core.widgets;

import androidx.constraintlayout.core.widgets.ConstraintWidget;
import java.util.ArrayList;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public class c {

    /* renamed from: a  reason: collision with root package name */
    protected ConstraintWidget f2441a;

    /* renamed from: b  reason: collision with root package name */
    protected ConstraintWidget f2442b;

    /* renamed from: c  reason: collision with root package name */
    protected ConstraintWidget f2443c;

    /* renamed from: d  reason: collision with root package name */
    protected ConstraintWidget f2444d;

    /* renamed from: e  reason: collision with root package name */
    protected ConstraintWidget f2445e;

    /* renamed from: f  reason: collision with root package name */
    protected ConstraintWidget f2446f;

    /* renamed from: g  reason: collision with root package name */
    protected ConstraintWidget f2447g;

    /* renamed from: h  reason: collision with root package name */
    protected ArrayList f2448h;

    /* renamed from: i  reason: collision with root package name */
    protected int f2449i;

    /* renamed from: j  reason: collision with root package name */
    protected int f2450j;

    /* renamed from: k  reason: collision with root package name */
    protected float f2451k = 0.0f;

    /* renamed from: l  reason: collision with root package name */
    int f2452l;

    /* renamed from: m  reason: collision with root package name */
    int f2453m;

    /* renamed from: n  reason: collision with root package name */
    int f2454n;

    /* renamed from: o  reason: collision with root package name */
    boolean f2455o;

    /* renamed from: p  reason: collision with root package name */
    private int f2456p;

    /* renamed from: q  reason: collision with root package name */
    private boolean f2457q;

    /* renamed from: r  reason: collision with root package name */
    protected boolean f2458r;

    /* renamed from: s  reason: collision with root package name */
    protected boolean f2459s;

    /* renamed from: t  reason: collision with root package name */
    protected boolean f2460t;

    /* renamed from: u  reason: collision with root package name */
    protected boolean f2461u;

    /* renamed from: v  reason: collision with root package name */
    private boolean f2462v;

    public c(ConstraintWidget constraintWidget, int i10, boolean z10) {
        this.f2441a = constraintWidget;
        this.f2456p = i10;
        this.f2457q = z10;
    }

    private void b() {
        int i10 = this.f2456p * 2;
        ConstraintWidget constraintWidget = this.f2441a;
        boolean z10 = true;
        this.f2455o = true;
        ConstraintWidget constraintWidget2 = constraintWidget;
        boolean z11 = false;
        while (!z11) {
            this.f2449i++;
            ConstraintWidget[] constraintWidgetArr = constraintWidget.F0;
            int i11 = this.f2456p;
            ConstraintWidget constraintWidget3 = null;
            constraintWidgetArr[i11] = null;
            constraintWidget.E0[i11] = null;
            if (constraintWidget.V() != 8) {
                this.f2452l++;
                ConstraintWidget.b u10 = constraintWidget.u(this.f2456p);
                ConstraintWidget.b bVar = ConstraintWidget.b.MATCH_CONSTRAINT;
                if (u10 != bVar) {
                    this.f2453m += constraintWidget.E(this.f2456p);
                }
                int f10 = this.f2453m + constraintWidget.W[i10].f();
                this.f2453m = f10;
                int i12 = i10 + 1;
                this.f2453m = f10 + constraintWidget.W[i12].f();
                int f11 = this.f2454n + constraintWidget.W[i10].f();
                this.f2454n = f11;
                this.f2454n = f11 + constraintWidget.W[i12].f();
                if (this.f2442b == null) {
                    this.f2442b = constraintWidget;
                }
                this.f2444d = constraintWidget;
                ConstraintWidget.b[] bVarArr = constraintWidget.Z;
                int i13 = this.f2456p;
                if (bVarArr[i13] == bVar) {
                    int i14 = constraintWidget.f2414y[i13];
                    if (i14 == 0 || i14 == 3 || i14 == 2) {
                        this.f2450j++;
                        float f12 = constraintWidget.D0[i13];
                        if (f12 > 0.0f) {
                            this.f2451k += f12;
                        }
                        if (c(constraintWidget, i13)) {
                            if (f12 < 0.0f) {
                                this.f2458r = true;
                            } else {
                                this.f2459s = true;
                            }
                            if (this.f2448h == null) {
                                this.f2448h = new ArrayList();
                            }
                            this.f2448h.add(constraintWidget);
                        }
                        if (this.f2446f == null) {
                            this.f2446f = constraintWidget;
                        }
                        ConstraintWidget constraintWidget4 = this.f2447g;
                        if (constraintWidget4 != null) {
                            constraintWidget4.E0[this.f2456p] = constraintWidget;
                        }
                        this.f2447g = constraintWidget;
                    }
                    if (this.f2456p == 0) {
                        if (constraintWidget.f2410w != 0) {
                            this.f2455o = false;
                        } else if (constraintWidget.f2416z != 0 || constraintWidget.A != 0) {
                            this.f2455o = false;
                        }
                    } else if (constraintWidget.f2412x != 0) {
                        this.f2455o = false;
                    } else if (constraintWidget.C != 0 || constraintWidget.D != 0) {
                        this.f2455o = false;
                    }
                    if (constraintWidget.f2373d0 != 0.0f) {
                        this.f2455o = false;
                        this.f2461u = true;
                    }
                }
            }
            if (constraintWidget2 != constraintWidget) {
                constraintWidget2.F0[this.f2456p] = constraintWidget;
            }
            d dVar = constraintWidget.W[i10 + 1].f2468f;
            if (dVar != null) {
                ConstraintWidget constraintWidget5 = dVar.f2466d;
                d dVar2 = constraintWidget5.W[i10].f2468f;
                if (dVar2 != null && dVar2.f2466d == constraintWidget) {
                    constraintWidget3 = constraintWidget5;
                }
            }
            if (constraintWidget3 == null) {
                constraintWidget3 = constraintWidget;
                z11 = true;
            }
            constraintWidget2 = constraintWidget;
            constraintWidget = constraintWidget3;
        }
        ConstraintWidget constraintWidget6 = this.f2442b;
        if (constraintWidget6 != null) {
            this.f2453m -= constraintWidget6.W[i10].f();
        }
        ConstraintWidget constraintWidget7 = this.f2444d;
        if (constraintWidget7 != null) {
            this.f2453m -= constraintWidget7.W[i10 + 1].f();
        }
        this.f2443c = constraintWidget;
        if (this.f2456p == 0 && this.f2457q) {
            this.f2445e = constraintWidget;
        } else {
            this.f2445e = this.f2441a;
        }
        if (!this.f2459s || !this.f2458r) {
            z10 = false;
        }
        this.f2460t = z10;
    }

    private static boolean c(ConstraintWidget constraintWidget, int i10) {
        if (constraintWidget.V() != 8 && constraintWidget.Z[i10] == ConstraintWidget.b.MATCH_CONSTRAINT) {
            int i11 = constraintWidget.f2414y[i10];
            if (i11 == 0 || i11 == 3) {
                return true;
            }
            return false;
        }
        return false;
    }

    public void a() {
        if (!this.f2462v) {
            b();
        }
        this.f2462v = true;
    }
}

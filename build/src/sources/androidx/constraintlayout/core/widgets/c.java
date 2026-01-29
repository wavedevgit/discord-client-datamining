package androidx.constraintlayout.core.widgets;

import androidx.constraintlayout.core.widgets.ConstraintWidget;
import java.util.ArrayList;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public class c {

    /* renamed from: a  reason: collision with root package name */
    protected ConstraintWidget f2316a;

    /* renamed from: b  reason: collision with root package name */
    protected ConstraintWidget f2317b;

    /* renamed from: c  reason: collision with root package name */
    protected ConstraintWidget f2318c;

    /* renamed from: d  reason: collision with root package name */
    protected ConstraintWidget f2319d;

    /* renamed from: e  reason: collision with root package name */
    protected ConstraintWidget f2320e;

    /* renamed from: f  reason: collision with root package name */
    protected ConstraintWidget f2321f;

    /* renamed from: g  reason: collision with root package name */
    protected ConstraintWidget f2322g;

    /* renamed from: h  reason: collision with root package name */
    protected ArrayList f2323h;

    /* renamed from: i  reason: collision with root package name */
    protected int f2324i;

    /* renamed from: j  reason: collision with root package name */
    protected int f2325j;

    /* renamed from: k  reason: collision with root package name */
    protected float f2326k = 0.0f;

    /* renamed from: l  reason: collision with root package name */
    int f2327l;

    /* renamed from: m  reason: collision with root package name */
    int f2328m;

    /* renamed from: n  reason: collision with root package name */
    int f2329n;

    /* renamed from: o  reason: collision with root package name */
    boolean f2330o;

    /* renamed from: p  reason: collision with root package name */
    private int f2331p;

    /* renamed from: q  reason: collision with root package name */
    private boolean f2332q;

    /* renamed from: r  reason: collision with root package name */
    protected boolean f2333r;

    /* renamed from: s  reason: collision with root package name */
    protected boolean f2334s;

    /* renamed from: t  reason: collision with root package name */
    protected boolean f2335t;

    /* renamed from: u  reason: collision with root package name */
    protected boolean f2336u;

    /* renamed from: v  reason: collision with root package name */
    private boolean f2337v;

    public c(ConstraintWidget constraintWidget, int i10, boolean z10) {
        this.f2316a = constraintWidget;
        this.f2331p = i10;
        this.f2332q = z10;
    }

    private void b() {
        int i10 = this.f2331p * 2;
        ConstraintWidget constraintWidget = this.f2316a;
        boolean z10 = true;
        this.f2330o = true;
        ConstraintWidget constraintWidget2 = constraintWidget;
        boolean z11 = false;
        while (!z11) {
            this.f2324i++;
            ConstraintWidget[] constraintWidgetArr = constraintWidget.F0;
            int i11 = this.f2331p;
            ConstraintWidget constraintWidget3 = null;
            constraintWidgetArr[i11] = null;
            constraintWidget.E0[i11] = null;
            if (constraintWidget.V() != 8) {
                this.f2327l++;
                ConstraintWidget.b u10 = constraintWidget.u(this.f2331p);
                ConstraintWidget.b bVar = ConstraintWidget.b.MATCH_CONSTRAINT;
                if (u10 != bVar) {
                    this.f2328m += constraintWidget.E(this.f2331p);
                }
                int f10 = this.f2328m + constraintWidget.W[i10].f();
                this.f2328m = f10;
                int i12 = i10 + 1;
                this.f2328m = f10 + constraintWidget.W[i12].f();
                int f11 = this.f2329n + constraintWidget.W[i10].f();
                this.f2329n = f11;
                this.f2329n = f11 + constraintWidget.W[i12].f();
                if (this.f2317b == null) {
                    this.f2317b = constraintWidget;
                }
                this.f2319d = constraintWidget;
                ConstraintWidget.b[] bVarArr = constraintWidget.Z;
                int i13 = this.f2331p;
                if (bVarArr[i13] == bVar) {
                    int i14 = constraintWidget.f2289y[i13];
                    if (i14 == 0 || i14 == 3 || i14 == 2) {
                        this.f2325j++;
                        float f12 = constraintWidget.D0[i13];
                        if (f12 > 0.0f) {
                            this.f2326k += f12;
                        }
                        if (c(constraintWidget, i13)) {
                            if (f12 < 0.0f) {
                                this.f2333r = true;
                            } else {
                                this.f2334s = true;
                            }
                            if (this.f2323h == null) {
                                this.f2323h = new ArrayList();
                            }
                            this.f2323h.add(constraintWidget);
                        }
                        if (this.f2321f == null) {
                            this.f2321f = constraintWidget;
                        }
                        ConstraintWidget constraintWidget4 = this.f2322g;
                        if (constraintWidget4 != null) {
                            constraintWidget4.E0[this.f2331p] = constraintWidget;
                        }
                        this.f2322g = constraintWidget;
                    }
                    if (this.f2331p == 0) {
                        if (constraintWidget.f2285w != 0) {
                            this.f2330o = false;
                        } else if (constraintWidget.f2291z != 0 || constraintWidget.A != 0) {
                            this.f2330o = false;
                        }
                    } else if (constraintWidget.f2287x != 0) {
                        this.f2330o = false;
                    } else if (constraintWidget.C != 0 || constraintWidget.D != 0) {
                        this.f2330o = false;
                    }
                    if (constraintWidget.f2248d0 != 0.0f) {
                        this.f2330o = false;
                        this.f2336u = true;
                    }
                }
            }
            if (constraintWidget2 != constraintWidget) {
                constraintWidget2.F0[this.f2331p] = constraintWidget;
            }
            d dVar = constraintWidget.W[i10 + 1].f2343f;
            if (dVar != null) {
                ConstraintWidget constraintWidget5 = dVar.f2341d;
                d dVar2 = constraintWidget5.W[i10].f2343f;
                if (dVar2 != null && dVar2.f2341d == constraintWidget) {
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
        ConstraintWidget constraintWidget6 = this.f2317b;
        if (constraintWidget6 != null) {
            this.f2328m -= constraintWidget6.W[i10].f();
        }
        ConstraintWidget constraintWidget7 = this.f2319d;
        if (constraintWidget7 != null) {
            this.f2328m -= constraintWidget7.W[i10 + 1].f();
        }
        this.f2318c = constraintWidget;
        if (this.f2331p == 0 && this.f2332q) {
            this.f2320e = constraintWidget;
        } else {
            this.f2320e = this.f2316a;
        }
        if (!this.f2334s || !this.f2333r) {
            z10 = false;
        }
        this.f2335t = z10;
    }

    private static boolean c(ConstraintWidget constraintWidget, int i10) {
        if (constraintWidget.V() != 8 && constraintWidget.Z[i10] == ConstraintWidget.b.MATCH_CONSTRAINT) {
            int i11 = constraintWidget.f2289y[i10];
            if (i11 == 0 || i11 == 3) {
                return true;
            }
            return false;
        }
        return false;
    }

    public void a() {
        if (!this.f2337v) {
            b();
        }
        this.f2337v = true;
    }
}

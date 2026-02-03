package l1;

import androidx.constraintlayout.core.widgets.ConstraintWidget;
import androidx.constraintlayout.core.widgets.d;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public abstract class p implements d {

    /* renamed from: a  reason: collision with root package name */
    public int f36916a;

    /* renamed from: b  reason: collision with root package name */
    ConstraintWidget f36917b;

    /* renamed from: c  reason: collision with root package name */
    m f36918c;

    /* renamed from: d  reason: collision with root package name */
    protected ConstraintWidget.b f36919d;

    /* renamed from: e  reason: collision with root package name */
    g f36920e = new g(this);

    /* renamed from: f  reason: collision with root package name */
    public int f36921f = 0;

    /* renamed from: g  reason: collision with root package name */
    boolean f36922g = false;

    /* renamed from: h  reason: collision with root package name */
    public f f36923h = new f(this);

    /* renamed from: i  reason: collision with root package name */
    public f f36924i = new f(this);

    /* renamed from: j  reason: collision with root package name */
    protected b f36925j = b.NONE;

    /* JADX INFO: Access modifiers changed from: package-private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    public static /* synthetic */ class a {

        /* renamed from: a  reason: collision with root package name */
        static final /* synthetic */ int[] f36926a;

        static {
            int[] iArr = new int[d.a.values().length];
            f36926a = iArr;
            try {
                iArr[d.a.LEFT.ordinal()] = 1;
            } catch (NoSuchFieldError unused) {
            }
            try {
                f36926a[d.a.RIGHT.ordinal()] = 2;
            } catch (NoSuchFieldError unused2) {
            }
            try {
                f36926a[d.a.TOP.ordinal()] = 3;
            } catch (NoSuchFieldError unused3) {
            }
            try {
                f36926a[d.a.BASELINE.ordinal()] = 4;
            } catch (NoSuchFieldError unused4) {
            }
            try {
                f36926a[d.a.BOTTOM.ordinal()] = 5;
            } catch (NoSuchFieldError unused5) {
            }
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    enum b {
        NONE,
        START,
        END,
        CENTER
    }

    public p(ConstraintWidget constraintWidget) {
        this.f36917b = constraintWidget;
    }

    private void l(int i10, int i11) {
        p pVar;
        float f10;
        int i12;
        int i13 = this.f36916a;
        if (i13 != 0) {
            if (i13 != 1) {
                if (i13 != 2) {
                    if (i13 == 3) {
                        ConstraintWidget constraintWidget = this.f36917b;
                        p pVar2 = constraintWidget.f2293e;
                        ConstraintWidget.b bVar = pVar2.f36919d;
                        ConstraintWidget.b bVar2 = ConstraintWidget.b.MATCH_CONSTRAINT;
                        if (bVar == bVar2 && pVar2.f36916a == 3) {
                            n nVar = constraintWidget.f2295f;
                            if (nVar.f36919d == bVar2 && nVar.f36916a == 3) {
                                return;
                            }
                        }
                        if (i10 == 0) {
                            pVar2 = constraintWidget.f2295f;
                        }
                        if (pVar2.f36920e.f36873j) {
                            float v10 = constraintWidget.v();
                            if (i10 == 1) {
                                i12 = (int) ((pVar2.f36920e.f36870g / v10) + 0.5f);
                            } else {
                                i12 = (int) ((v10 * pVar2.f36920e.f36870g) + 0.5f);
                            }
                            this.f36920e.d(i12);
                            return;
                        }
                        return;
                    }
                    return;
                }
                ConstraintWidget K = this.f36917b.K();
                if (K != null) {
                    if (i10 == 0) {
                        pVar = K.f2293e;
                    } else {
                        pVar = K.f2295f;
                    }
                    g gVar = pVar.f36920e;
                    if (gVar.f36873j) {
                        if (i10 == 0) {
                            f10 = this.f36917b.B;
                        } else {
                            f10 = this.f36917b.E;
                        }
                        this.f36920e.d(g((int) ((gVar.f36870g * f10) + 0.5f), i10));
                        return;
                    }
                    return;
                }
                return;
            }
            this.f36920e.d(Math.min(g(this.f36920e.f36885m, i10), i11));
            return;
        }
        this.f36920e.d(g(i11, i10));
    }

    @Override // l1.d
    public abstract void a(d dVar);

    /* JADX INFO: Access modifiers changed from: protected */
    public final void b(f fVar, f fVar2, int i10) {
        fVar.f36875l.add(fVar2);
        fVar.f36869f = i10;
        fVar2.f36874k.add(fVar);
    }

    /* JADX INFO: Access modifiers changed from: protected */
    public final void c(f fVar, f fVar2, int i10, g gVar) {
        fVar.f36875l.add(fVar2);
        fVar.f36875l.add(this.f36920e);
        fVar.f36871h = i10;
        fVar.f36872i = gVar;
        fVar2.f36874k.add(fVar);
        gVar.f36874k.add(fVar);
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public abstract void d();

    /* JADX INFO: Access modifiers changed from: package-private */
    public abstract void e();

    /* JADX INFO: Access modifiers changed from: package-private */
    public abstract void f();

    /* JADX INFO: Access modifiers changed from: protected */
    public final int g(int i10, int i11) {
        if (i11 == 0) {
            ConstraintWidget constraintWidget = this.f36917b;
            int i12 = constraintWidget.A;
            int max = Math.max(constraintWidget.f2335z, i10);
            if (i12 > 0) {
                max = Math.min(i12, i10);
            }
            if (max != i10) {
                return max;
            }
        } else {
            ConstraintWidget constraintWidget2 = this.f36917b;
            int i13 = constraintWidget2.D;
            int max2 = Math.max(constraintWidget2.C, i10);
            if (i13 > 0) {
                max2 = Math.min(i13, i10);
            }
            if (max2 != i10) {
                return max2;
            }
        }
        return i10;
    }

    /* JADX INFO: Access modifiers changed from: protected */
    public final f h(androidx.constraintlayout.core.widgets.d dVar) {
        androidx.constraintlayout.core.widgets.d dVar2 = dVar.f2387f;
        if (dVar2 == null) {
            return null;
        }
        ConstraintWidget constraintWidget = dVar2.f2385d;
        int i10 = a.f36926a[dVar2.f2386e.ordinal()];
        if (i10 != 1) {
            if (i10 != 2) {
                if (i10 != 3) {
                    if (i10 != 4) {
                        if (i10 != 5) {
                            return null;
                        }
                        return constraintWidget.f2295f.f36924i;
                    }
                    return constraintWidget.f2295f.f36899k;
                }
                return constraintWidget.f2295f.f36923h;
            }
            return constraintWidget.f2293e.f36924i;
        }
        return constraintWidget.f2293e.f36923h;
    }

    /* JADX INFO: Access modifiers changed from: protected */
    public final f i(androidx.constraintlayout.core.widgets.d dVar, int i10) {
        p pVar;
        androidx.constraintlayout.core.widgets.d dVar2 = dVar.f2387f;
        if (dVar2 == null) {
            return null;
        }
        ConstraintWidget constraintWidget = dVar2.f2385d;
        if (i10 == 0) {
            pVar = constraintWidget.f2293e;
        } else {
            pVar = constraintWidget.f2295f;
        }
        int i11 = a.f36926a[dVar2.f2386e.ordinal()];
        if (i11 != 1) {
            if (i11 != 2) {
                if (i11 != 3) {
                    if (i11 != 5) {
                        return null;
                    }
                }
            }
            return pVar.f36924i;
        }
        return pVar.f36923h;
    }

    public long j() {
        g gVar = this.f36920e;
        if (gVar.f36873j) {
            return gVar.f36870g;
        }
        return 0L;
    }

    public boolean k() {
        return this.f36922g;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public abstract boolean m();

    /* JADX INFO: Access modifiers changed from: protected */
    public void n(d dVar, androidx.constraintlayout.core.widgets.d dVar2, androidx.constraintlayout.core.widgets.d dVar3, int i10) {
        float R;
        f h10 = h(dVar2);
        f h11 = h(dVar3);
        if (h10.f36873j && h11.f36873j) {
            int f10 = h10.f36870g + dVar2.f();
            int f11 = h11.f36870g - dVar3.f();
            int i11 = f11 - f10;
            if (!this.f36920e.f36873j && this.f36919d == ConstraintWidget.b.MATCH_CONSTRAINT) {
                l(i10, i11);
            }
            g gVar = this.f36920e;
            if (gVar.f36873j) {
                if (gVar.f36870g == i11) {
                    this.f36923h.d(f10);
                    this.f36924i.d(f11);
                    return;
                }
                if (i10 == 0) {
                    R = this.f36917b.y();
                } else {
                    R = this.f36917b.R();
                }
                if (h10 == h11) {
                    f10 = h10.f36870g;
                    f11 = h11.f36870g;
                    R = 0.5f;
                }
                this.f36923h.d((int) (f10 + 0.5f + (((f11 - f10) - this.f36920e.f36870g) * R)));
                this.f36924i.d(this.f36923h.f36870g + this.f36920e.f36870g);
            }
        }
    }

    /* JADX INFO: Access modifiers changed from: protected */
    public void o(d dVar) {
    }

    /* JADX INFO: Access modifiers changed from: protected */
    public void p(d dVar) {
    }
}

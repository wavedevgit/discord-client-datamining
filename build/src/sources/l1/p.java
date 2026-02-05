package l1;

import androidx.constraintlayout.core.widgets.ConstraintWidget;
import androidx.constraintlayout.core.widgets.d;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public abstract class p implements d {

    /* renamed from: a  reason: collision with root package name */
    public int f36312a;

    /* renamed from: b  reason: collision with root package name */
    ConstraintWidget f36313b;

    /* renamed from: c  reason: collision with root package name */
    m f36314c;

    /* renamed from: d  reason: collision with root package name */
    protected ConstraintWidget.b f36315d;

    /* renamed from: e  reason: collision with root package name */
    g f36316e = new g(this);

    /* renamed from: f  reason: collision with root package name */
    public int f36317f = 0;

    /* renamed from: g  reason: collision with root package name */
    boolean f36318g = false;

    /* renamed from: h  reason: collision with root package name */
    public f f36319h = new f(this);

    /* renamed from: i  reason: collision with root package name */
    public f f36320i = new f(this);

    /* renamed from: j  reason: collision with root package name */
    protected b f36321j = b.NONE;

    /* JADX INFO: Access modifiers changed from: package-private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    public static /* synthetic */ class a {

        /* renamed from: a  reason: collision with root package name */
        static final /* synthetic */ int[] f36322a;

        static {
            int[] iArr = new int[d.a.values().length];
            f36322a = iArr;
            try {
                iArr[d.a.LEFT.ordinal()] = 1;
            } catch (NoSuchFieldError unused) {
            }
            try {
                f36322a[d.a.RIGHT.ordinal()] = 2;
            } catch (NoSuchFieldError unused2) {
            }
            try {
                f36322a[d.a.TOP.ordinal()] = 3;
            } catch (NoSuchFieldError unused3) {
            }
            try {
                f36322a[d.a.BASELINE.ordinal()] = 4;
            } catch (NoSuchFieldError unused4) {
            }
            try {
                f36322a[d.a.BOTTOM.ordinal()] = 5;
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
        this.f36313b = constraintWidget;
    }

    private void l(int i10, int i11) {
        p pVar;
        float f10;
        int i12;
        int i13 = this.f36312a;
        if (i13 != 0) {
            if (i13 != 1) {
                if (i13 != 2) {
                    if (i13 == 3) {
                        ConstraintWidget constraintWidget = this.f36313b;
                        p pVar2 = constraintWidget.f2374e;
                        ConstraintWidget.b bVar = pVar2.f36315d;
                        ConstraintWidget.b bVar2 = ConstraintWidget.b.MATCH_CONSTRAINT;
                        if (bVar == bVar2 && pVar2.f36312a == 3) {
                            n nVar = constraintWidget.f2376f;
                            if (nVar.f36315d == bVar2 && nVar.f36312a == 3) {
                                return;
                            }
                        }
                        if (i10 == 0) {
                            pVar2 = constraintWidget.f2376f;
                        }
                        if (pVar2.f36316e.f36269j) {
                            float v10 = constraintWidget.v();
                            if (i10 == 1) {
                                i12 = (int) ((pVar2.f36316e.f36266g / v10) + 0.5f);
                            } else {
                                i12 = (int) ((v10 * pVar2.f36316e.f36266g) + 0.5f);
                            }
                            this.f36316e.d(i12);
                            return;
                        }
                        return;
                    }
                    return;
                }
                ConstraintWidget K = this.f36313b.K();
                if (K != null) {
                    if (i10 == 0) {
                        pVar = K.f2374e;
                    } else {
                        pVar = K.f2376f;
                    }
                    g gVar = pVar.f36316e;
                    if (gVar.f36269j) {
                        if (i10 == 0) {
                            f10 = this.f36313b.B;
                        } else {
                            f10 = this.f36313b.E;
                        }
                        this.f36316e.d(g((int) ((gVar.f36266g * f10) + 0.5f), i10));
                        return;
                    }
                    return;
                }
                return;
            }
            this.f36316e.d(Math.min(g(this.f36316e.f36281m, i10), i11));
            return;
        }
        this.f36316e.d(g(i11, i10));
    }

    @Override // l1.d
    public abstract void a(d dVar);

    /* JADX INFO: Access modifiers changed from: protected */
    public final void b(f fVar, f fVar2, int i10) {
        fVar.f36271l.add(fVar2);
        fVar.f36265f = i10;
        fVar2.f36270k.add(fVar);
    }

    /* JADX INFO: Access modifiers changed from: protected */
    public final void c(f fVar, f fVar2, int i10, g gVar) {
        fVar.f36271l.add(fVar2);
        fVar.f36271l.add(this.f36316e);
        fVar.f36267h = i10;
        fVar.f36268i = gVar;
        fVar2.f36270k.add(fVar);
        gVar.f36270k.add(fVar);
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
            ConstraintWidget constraintWidget = this.f36313b;
            int i12 = constraintWidget.A;
            int max = Math.max(constraintWidget.f2416z, i10);
            if (i12 > 0) {
                max = Math.min(i12, i10);
            }
            if (max != i10) {
                return max;
            }
        } else {
            ConstraintWidget constraintWidget2 = this.f36313b;
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
        androidx.constraintlayout.core.widgets.d dVar2 = dVar.f2468f;
        if (dVar2 == null) {
            return null;
        }
        ConstraintWidget constraintWidget = dVar2.f2466d;
        int i10 = a.f36322a[dVar2.f2467e.ordinal()];
        if (i10 != 1) {
            if (i10 != 2) {
                if (i10 != 3) {
                    if (i10 != 4) {
                        if (i10 != 5) {
                            return null;
                        }
                        return constraintWidget.f2376f.f36320i;
                    }
                    return constraintWidget.f2376f.f36295k;
                }
                return constraintWidget.f2376f.f36319h;
            }
            return constraintWidget.f2374e.f36320i;
        }
        return constraintWidget.f2374e.f36319h;
    }

    /* JADX INFO: Access modifiers changed from: protected */
    public final f i(androidx.constraintlayout.core.widgets.d dVar, int i10) {
        p pVar;
        androidx.constraintlayout.core.widgets.d dVar2 = dVar.f2468f;
        if (dVar2 == null) {
            return null;
        }
        ConstraintWidget constraintWidget = dVar2.f2466d;
        if (i10 == 0) {
            pVar = constraintWidget.f2374e;
        } else {
            pVar = constraintWidget.f2376f;
        }
        int i11 = a.f36322a[dVar2.f2467e.ordinal()];
        if (i11 != 1) {
            if (i11 != 2) {
                if (i11 != 3) {
                    if (i11 != 5) {
                        return null;
                    }
                }
            }
            return pVar.f36320i;
        }
        return pVar.f36319h;
    }

    public long j() {
        g gVar = this.f36316e;
        if (gVar.f36269j) {
            return gVar.f36266g;
        }
        return 0L;
    }

    public boolean k() {
        return this.f36318g;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public abstract boolean m();

    /* JADX INFO: Access modifiers changed from: protected */
    public void n(d dVar, androidx.constraintlayout.core.widgets.d dVar2, androidx.constraintlayout.core.widgets.d dVar3, int i10) {
        float R;
        f h10 = h(dVar2);
        f h11 = h(dVar3);
        if (h10.f36269j && h11.f36269j) {
            int f10 = h10.f36266g + dVar2.f();
            int f11 = h11.f36266g - dVar3.f();
            int i11 = f11 - f10;
            if (!this.f36316e.f36269j && this.f36315d == ConstraintWidget.b.MATCH_CONSTRAINT) {
                l(i10, i11);
            }
            g gVar = this.f36316e;
            if (gVar.f36269j) {
                if (gVar.f36266g == i11) {
                    this.f36319h.d(f10);
                    this.f36320i.d(f11);
                    return;
                }
                if (i10 == 0) {
                    R = this.f36313b.y();
                } else {
                    R = this.f36313b.R();
                }
                if (h10 == h11) {
                    f10 = h10.f36266g;
                    f11 = h11.f36266g;
                    R = 0.5f;
                }
                this.f36319h.d((int) (f10 + 0.5f + (((f11 - f10) - this.f36316e.f36266g) * R)));
                this.f36320i.d(this.f36319h.f36266g + this.f36316e.f36266g);
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

package com.google.android.flexbox;

import android.graphics.drawable.Drawable;
import android.util.SparseIntArray;
import android.view.View;
import android.view.ViewGroup;
import android.widget.CompoundButton;
import androidx.core.view.m;
import androidx.core.widget.d;
import java.util.ArrayList;
import java.util.Arrays;
import java.util.Collections;
import java.util.Iterator;
import java.util.List;
/* JADX INFO: Access modifiers changed from: package-private */
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public class FlexboxHelper {

    /* renamed from: a  reason: collision with root package name */
    private final com.google.android.flexbox.a f14231a;

    /* renamed from: b  reason: collision with root package name */
    private boolean[] f14232b;

    /* renamed from: c  reason: collision with root package name */
    int[] f14233c;

    /* renamed from: d  reason: collision with root package name */
    long[] f14234d;

    /* renamed from: e  reason: collision with root package name */
    private long[] f14235e;

    /* JADX INFO: Access modifiers changed from: package-private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    public static class FlexLinesResult {

        /* renamed from: a  reason: collision with root package name */
        List f14236a;

        /* renamed from: b  reason: collision with root package name */
        int f14237b;

        /* JADX INFO: Access modifiers changed from: package-private */
        public void a() {
            this.f14236a = null;
            this.f14237b = 0;
        }
    }

    /* JADX INFO: Access modifiers changed from: private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    public static class b implements Comparable {

        /* renamed from: d  reason: collision with root package name */
        int f14238d;

        /* renamed from: e  reason: collision with root package name */
        int f14239e;

        private b() {
        }

        @Override // java.lang.Comparable
        /* renamed from: a */
        public int compareTo(b bVar) {
            int i10 = this.f14239e;
            int i11 = bVar.f14239e;
            if (i10 != i11) {
                return i10 - i11;
            }
            return this.f14238d - bVar.f14238d;
        }

        public String toString() {
            return "Order{order=" + this.f14239e + ", index=" + this.f14238d + '}';
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public FlexboxHelper(com.google.android.flexbox.a aVar) {
        this.f14231a = aVar;
    }

    private int A(int i10, com.google.android.flexbox.b bVar, int i11) {
        com.google.android.flexbox.a aVar = this.f14231a;
        int childWidthMeasureSpec = aVar.getChildWidthMeasureSpec(i10, aVar.getPaddingLeft() + this.f14231a.getPaddingRight() + bVar.E1() + bVar.Y1() + i11, bVar.getWidth());
        int size = View.MeasureSpec.getSize(childWidthMeasureSpec);
        if (size > bVar.Y0()) {
            return View.MeasureSpec.makeMeasureSpec(bVar.Y0(), View.MeasureSpec.getMode(childWidthMeasureSpec));
        }
        if (size < bVar.L()) {
            return View.MeasureSpec.makeMeasureSpec(bVar.L(), View.MeasureSpec.getMode(childWidthMeasureSpec));
        }
        return childWidthMeasureSpec;
    }

    private int B(com.google.android.flexbox.b bVar, boolean z10) {
        if (z10) {
            return bVar.B1();
        }
        return bVar.Y1();
    }

    private int C(com.google.android.flexbox.b bVar, boolean z10) {
        if (z10) {
            return bVar.Y1();
        }
        return bVar.B1();
    }

    private int D(com.google.android.flexbox.b bVar, boolean z10) {
        if (z10) {
            return bVar.N();
        }
        return bVar.E1();
    }

    private int E(com.google.android.flexbox.b bVar, boolean z10) {
        if (z10) {
            return bVar.E1();
        }
        return bVar.N();
    }

    private int F(com.google.android.flexbox.b bVar, boolean z10) {
        if (z10) {
            return bVar.getHeight();
        }
        return bVar.getWidth();
    }

    private int G(com.google.android.flexbox.b bVar, boolean z10) {
        if (z10) {
            return bVar.getWidth();
        }
        return bVar.getHeight();
    }

    private int H(boolean z10) {
        if (z10) {
            return this.f14231a.getPaddingBottom();
        }
        return this.f14231a.getPaddingEnd();
    }

    private int I(boolean z10) {
        if (z10) {
            return this.f14231a.getPaddingEnd();
        }
        return this.f14231a.getPaddingBottom();
    }

    private int J(boolean z10) {
        if (z10) {
            return this.f14231a.getPaddingTop();
        }
        return this.f14231a.getPaddingStart();
    }

    private int K(boolean z10) {
        if (z10) {
            return this.f14231a.getPaddingStart();
        }
        return this.f14231a.getPaddingTop();
    }

    private int L(View view, boolean z10) {
        if (z10) {
            return view.getMeasuredHeight();
        }
        return view.getMeasuredWidth();
    }

    private int M(View view, boolean z10) {
        if (z10) {
            return view.getMeasuredWidth();
        }
        return view.getMeasuredHeight();
    }

    private boolean N(int i10, int i11, FlexLine flexLine) {
        if (i10 == i11 - 1 && flexLine.c() != 0) {
            return true;
        }
        return false;
    }

    private boolean P(View view, int i10, int i11, int i12, int i13, com.google.android.flexbox.b bVar, int i14, int i15, int i16) {
        if (this.f14231a.getFlexWrap() == 0) {
            return false;
        }
        if (bVar.L0()) {
            return true;
        }
        if (i10 == 0) {
            return false;
        }
        int maxLine = this.f14231a.getMaxLine();
        if (maxLine != -1 && maxLine <= i16 + 1) {
            return false;
        }
        int decorationLengthMainAxis = this.f14231a.getDecorationLengthMainAxis(view, i14, i15);
        if (decorationLengthMainAxis > 0) {
            i13 += decorationLengthMainAxis;
        }
        if (i11 >= i12 + i13) {
            return false;
        }
        return true;
    }

    private void T(int i10, int i11, FlexLine flexLine, int i12, int i13, boolean z10) {
        float f10;
        float f11;
        int i14;
        int i15;
        int i16 = flexLine.f14217e;
        float f12 = flexLine.f14223k;
        float f13 = 0.0f;
        if (f12 > 0.0f && i12 <= i16) {
            float f14 = (i16 - i12) / f12;
            flexLine.f14217e = i13 + flexLine.f14218f;
            if (!z10) {
                flexLine.f14219g = Integer.MIN_VALUE;
            }
            int i17 = 0;
            boolean z11 = false;
            int i18 = 0;
            float f15 = 0.0f;
            while (i17 < flexLine.f14220h) {
                int i19 = flexLine.f14227o + i17;
                View reorderedFlexItemAt = this.f14231a.getReorderedFlexItemAt(i19);
                if (reorderedFlexItemAt == null || reorderedFlexItemAt.getVisibility() == 8) {
                    f10 = f13;
                    f11 = f14;
                } else {
                    com.google.android.flexbox.b bVar = (com.google.android.flexbox.b) reorderedFlexItemAt.getLayoutParams();
                    int flexDirection = this.f14231a.getFlexDirection();
                    f10 = f13;
                    if (flexDirection != 0 && flexDirection != 1) {
                        int measuredHeight = reorderedFlexItemAt.getMeasuredHeight();
                        long[] jArr = this.f14235e;
                        if (jArr != null) {
                            measuredHeight = x(jArr[i19]);
                        }
                        int measuredWidth = reorderedFlexItemAt.getMeasuredWidth();
                        long[] jArr2 = this.f14235e;
                        if (jArr2 != null) {
                            measuredWidth = y(jArr2[i19]);
                        }
                        if (!this.f14232b[i19] && bVar.E() > f10) {
                            float E = measuredHeight - (bVar.E() * f14);
                            if (i17 == flexLine.f14220h - 1) {
                                E += f15;
                                f15 = f10;
                            }
                            int round = Math.round(E);
                            if (round < bVar.b2()) {
                                round = bVar.b2();
                                this.f14232b[i19] = true;
                                flexLine.f14223k -= bVar.E();
                                z11 = true;
                            } else {
                                f15 += E - round;
                                double d10 = f15;
                                if (d10 > 1.0d) {
                                    round++;
                                    f15 -= 1.0f;
                                } else if (d10 < -1.0d) {
                                    round--;
                                    f15 += 1.0f;
                                }
                            }
                            int A = A(i10, bVar, flexLine.f14225m);
                            int makeMeasureSpec = View.MeasureSpec.makeMeasureSpec(round, 1073741824);
                            reorderedFlexItemAt.measure(A, makeMeasureSpec);
                            int measuredWidth2 = reorderedFlexItemAt.getMeasuredWidth();
                            int measuredHeight2 = reorderedFlexItemAt.getMeasuredHeight();
                            Z(i19, A, makeMeasureSpec, reorderedFlexItemAt);
                            this.f14231a.updateViewCache(i19, reorderedFlexItemAt);
                            measuredWidth = measuredWidth2;
                            measuredHeight = measuredHeight2;
                        }
                        i14 = Math.max(i18, measuredWidth + bVar.E1() + bVar.Y1() + this.f14231a.getDecorationLengthCrossAxis(reorderedFlexItemAt));
                        flexLine.f14217e += measuredHeight + bVar.N() + bVar.B1();
                        f11 = f14;
                    } else {
                        int measuredWidth3 = reorderedFlexItemAt.getMeasuredWidth();
                        long[] jArr3 = this.f14235e;
                        if (jArr3 != null) {
                            measuredWidth3 = y(jArr3[i19]);
                        }
                        int measuredHeight3 = reorderedFlexItemAt.getMeasuredHeight();
                        long[] jArr4 = this.f14235e;
                        f11 = f14;
                        if (jArr4 != null) {
                            measuredHeight3 = x(jArr4[i19]);
                        }
                        if (!this.f14232b[i19] && bVar.E() > f10) {
                            float E2 = measuredWidth3 - (f11 * bVar.E());
                            if (i17 == flexLine.f14220h - 1) {
                                E2 += f15;
                                f15 = f10;
                            }
                            int round2 = Math.round(E2);
                            if (round2 < bVar.L()) {
                                i15 = bVar.L();
                                this.f14232b[i19] = true;
                                flexLine.f14223k -= bVar.E();
                                z11 = true;
                            } else {
                                f15 += E2 - round2;
                                double d11 = f15;
                                if (d11 > 1.0d) {
                                    i15 = round2 + 1;
                                    f15 -= 1.0f;
                                } else if (d11 < -1.0d) {
                                    i15 = round2 - 1;
                                    f15 += 1.0f;
                                } else {
                                    i15 = round2;
                                }
                            }
                            int z12 = z(i11, bVar, flexLine.f14225m);
                            int makeMeasureSpec2 = View.MeasureSpec.makeMeasureSpec(i15, 1073741824);
                            reorderedFlexItemAt.measure(makeMeasureSpec2, z12);
                            int measuredWidth4 = reorderedFlexItemAt.getMeasuredWidth();
                            int measuredHeight4 = reorderedFlexItemAt.getMeasuredHeight();
                            Z(i19, makeMeasureSpec2, z12, reorderedFlexItemAt);
                            this.f14231a.updateViewCache(i19, reorderedFlexItemAt);
                            measuredWidth3 = measuredWidth4;
                            measuredHeight3 = measuredHeight4;
                        }
                        int max = Math.max(i18, measuredHeight3 + bVar.N() + bVar.B1() + this.f14231a.getDecorationLengthCrossAxis(reorderedFlexItemAt));
                        flexLine.f14217e += measuredWidth3 + bVar.E1() + bVar.Y1();
                        i14 = max;
                    }
                    flexLine.f14219g = Math.max(flexLine.f14219g, i14);
                    i18 = i14;
                }
                i17++;
                f14 = f11;
                f13 = f10;
            }
            if (z11 && i16 != flexLine.f14217e) {
                T(i10, i11, flexLine, i12, i13, true);
            }
        }
    }

    private int[] U(int i10, List list, SparseIntArray sparseIntArray) {
        Collections.sort(list);
        sparseIntArray.clear();
        int[] iArr = new int[i10];
        Iterator it = list.iterator();
        int i11 = 0;
        while (it.hasNext()) {
            b bVar = (b) it.next();
            int i12 = bVar.f14238d;
            iArr[i11] = i12;
            sparseIntArray.append(i12, bVar.f14239e);
            i11++;
        }
        return iArr;
    }

    private void V(View view, int i10, int i11) {
        int measuredHeight;
        com.google.android.flexbox.b bVar = (com.google.android.flexbox.b) view.getLayoutParams();
        int min = Math.min(Math.max(((i10 - bVar.E1()) - bVar.Y1()) - this.f14231a.getDecorationLengthCrossAxis(view), bVar.L()), bVar.Y0());
        long[] jArr = this.f14235e;
        if (jArr != null) {
            measuredHeight = x(jArr[i11]);
        } else {
            measuredHeight = view.getMeasuredHeight();
        }
        int makeMeasureSpec = View.MeasureSpec.makeMeasureSpec(measuredHeight, 1073741824);
        int makeMeasureSpec2 = View.MeasureSpec.makeMeasureSpec(min, 1073741824);
        view.measure(makeMeasureSpec2, makeMeasureSpec);
        Z(i11, makeMeasureSpec2, makeMeasureSpec, view);
        this.f14231a.updateViewCache(i11, view);
    }

    private void W(View view, int i10, int i11) {
        int measuredWidth;
        com.google.android.flexbox.b bVar = (com.google.android.flexbox.b) view.getLayoutParams();
        int min = Math.min(Math.max(((i10 - bVar.N()) - bVar.B1()) - this.f14231a.getDecorationLengthCrossAxis(view), bVar.b2()), bVar.h2());
        long[] jArr = this.f14235e;
        if (jArr != null) {
            measuredWidth = y(jArr[i11]);
        } else {
            measuredWidth = view.getMeasuredWidth();
        }
        int makeMeasureSpec = View.MeasureSpec.makeMeasureSpec(measuredWidth, 1073741824);
        int makeMeasureSpec2 = View.MeasureSpec.makeMeasureSpec(min, 1073741824);
        view.measure(makeMeasureSpec, makeMeasureSpec2);
        Z(i11, makeMeasureSpec, makeMeasureSpec2, view);
        this.f14231a.updateViewCache(i11, view);
    }

    private void Z(int i10, int i11, int i12, View view) {
        long[] jArr = this.f14234d;
        if (jArr != null) {
            jArr[i10] = S(i11, i12);
        }
        long[] jArr2 = this.f14235e;
        if (jArr2 != null) {
            jArr2[i10] = S(view.getMeasuredWidth(), view.getMeasuredHeight());
        }
    }

    private void a(List list, FlexLine flexLine, int i10, int i11) {
        flexLine.f14225m = i11;
        this.f14231a.onNewFlexLineAdded(flexLine);
        flexLine.f14228p = i10;
        list.add(flexLine);
    }

    /* JADX WARN: Removed duplicated region for block: B:12:0x002d  */
    /* JADX WARN: Removed duplicated region for block: B:13:0x0032  */
    /* JADX WARN: Removed duplicated region for block: B:18:0x0040  */
    /* JADX WARN: Removed duplicated region for block: B:20:? A[RETURN, SYNTHETIC] */
    /*
        Code decompiled incorrectly, please refer to instructions dump.
        To view partially-correct add '--show-bad-code' argument
    */
    private void i(android.view.View r7, int r8) {
        /*
            r6 = this;
            android.view.ViewGroup$LayoutParams r0 = r7.getLayoutParams()
            com.google.android.flexbox.b r0 = (com.google.android.flexbox.b) r0
            int r1 = r7.getMeasuredWidth()
            int r2 = r7.getMeasuredHeight()
            int r3 = r0.L()
            r4 = 1
            if (r1 >= r3) goto L1b
            int r1 = r0.L()
        L19:
            r3 = r4
            goto L27
        L1b:
            int r3 = r0.Y0()
            if (r1 <= r3) goto L26
            int r1 = r0.Y0()
            goto L19
        L26:
            r3 = 0
        L27:
            int r5 = r0.b2()
            if (r2 >= r5) goto L32
            int r2 = r0.b2()
            goto L3e
        L32:
            int r5 = r0.h2()
            if (r2 <= r5) goto L3d
            int r2 = r0.h2()
            goto L3e
        L3d:
            r4 = r3
        L3e:
            if (r4 == 0) goto L55
            r0 = 1073741824(0x40000000, float:2.0)
            int r1 = android.view.View.MeasureSpec.makeMeasureSpec(r1, r0)
            int r0 = android.view.View.MeasureSpec.makeMeasureSpec(r2, r0)
            r7.measure(r1, r0)
            r6.Z(r8, r1, r0, r7)
            com.google.android.flexbox.a r0 = r6.f14231a
            r0.updateViewCache(r8, r7)
        L55:
            return
        */
        throw new UnsupportedOperationException("Method not decompiled: com.google.android.flexbox.FlexboxHelper.i(android.view.View, int):void");
    }

    private List k(List list, int i10, int i11) {
        ArrayList arrayList = new ArrayList();
        FlexLine flexLine = new FlexLine();
        flexLine.f14219g = (i10 - i11) / 2;
        int size = list.size();
        for (int i12 = 0; i12 < size; i12++) {
            if (i12 == 0) {
                arrayList.add(flexLine);
            }
            arrayList.add((FlexLine) list.get(i12));
            if (i12 == list.size() - 1) {
                arrayList.add(flexLine);
            }
        }
        return arrayList;
    }

    private List l(int i10) {
        ArrayList arrayList = new ArrayList(i10);
        for (int i11 = 0; i11 < i10; i11++) {
            b bVar = new b();
            bVar.f14239e = ((com.google.android.flexbox.b) this.f14231a.getFlexItemAt(i11).getLayoutParams()).getOrder();
            bVar.f14238d = i11;
            arrayList.add(bVar);
        }
        return arrayList;
    }

    private void r(int i10) {
        boolean[] zArr = this.f14232b;
        if (zArr == null) {
            this.f14232b = new boolean[Math.max(i10, 10)];
        } else if (zArr.length < i10) {
            this.f14232b = new boolean[Math.max(zArr.length * 2, i10)];
        } else {
            Arrays.fill(zArr, false);
        }
    }

    private void v(CompoundButton compoundButton) {
        int minimumWidth;
        com.google.android.flexbox.b bVar = (com.google.android.flexbox.b) compoundButton.getLayoutParams();
        int L = bVar.L();
        int b22 = bVar.b2();
        Drawable a10 = d.a(compoundButton);
        int i10 = 0;
        if (a10 == null) {
            minimumWidth = 0;
        } else {
            minimumWidth = a10.getMinimumWidth();
        }
        if (a10 != null) {
            i10 = a10.getMinimumHeight();
        }
        if (L == -1) {
            L = minimumWidth;
        }
        bVar.A1(L);
        if (b22 == -1) {
            b22 = i10;
        }
        bVar.V(b22);
    }

    private void w(int i10, int i11, FlexLine flexLine, int i12, int i13, boolean z10) {
        int i14;
        float f10;
        float f11;
        int i15;
        double d10;
        double d11;
        float f12 = flexLine.f14222j;
        float f13 = 0.0f;
        if (f12 > 0.0f && i12 >= (i14 = flexLine.f14217e)) {
            float f14 = (i12 - i14) / f12;
            flexLine.f14217e = i13 + flexLine.f14218f;
            if (!z10) {
                flexLine.f14219g = Integer.MIN_VALUE;
            }
            int i16 = 0;
            boolean z11 = false;
            int i17 = 0;
            float f15 = 0.0f;
            while (i16 < flexLine.f14220h) {
                int i18 = flexLine.f14227o + i16;
                View reorderedFlexItemAt = this.f14231a.getReorderedFlexItemAt(i18);
                if (reorderedFlexItemAt == null || reorderedFlexItemAt.getVisibility() == 8) {
                    f10 = f13;
                    f11 = f14;
                    z11 = z11;
                } else {
                    com.google.android.flexbox.b bVar = (com.google.android.flexbox.b) reorderedFlexItemAt.getLayoutParams();
                    int flexDirection = this.f14231a.getFlexDirection();
                    f10 = f13;
                    if (flexDirection == 0 || flexDirection == 1) {
                        f11 = f14;
                        boolean z12 = z11;
                        int measuredWidth = reorderedFlexItemAt.getMeasuredWidth();
                        long[] jArr = this.f14235e;
                        if (jArr != null) {
                            measuredWidth = y(jArr[i18]);
                        }
                        int measuredHeight = reorderedFlexItemAt.getMeasuredHeight();
                        long[] jArr2 = this.f14235e;
                        if (jArr2 != null) {
                            measuredHeight = x(jArr2[i18]);
                        }
                        if (!this.f14232b[i18] && bVar.t0() > f10) {
                            float t02 = measuredWidth + (bVar.t0() * f11);
                            if (i16 == flexLine.f14220h - 1) {
                                t02 += f15;
                                f15 = f10;
                            }
                            int round = Math.round(t02);
                            if (round > bVar.Y0()) {
                                round = bVar.Y0();
                                this.f14232b[i18] = true;
                                flexLine.f14222j -= bVar.t0();
                                z11 = true;
                            } else {
                                f15 += t02 - round;
                                double d12 = f15;
                                if (d12 > 1.0d) {
                                    round++;
                                    d10 = d12 - 1.0d;
                                } else {
                                    if (d12 < -1.0d) {
                                        round--;
                                        d10 = d12 + 1.0d;
                                    }
                                    z11 = z12;
                                }
                                f15 = (float) d10;
                                z11 = z12;
                            }
                            int z13 = z(i11, bVar, flexLine.f14225m);
                            int makeMeasureSpec = View.MeasureSpec.makeMeasureSpec(round, 1073741824);
                            reorderedFlexItemAt.measure(makeMeasureSpec, z13);
                            int measuredWidth2 = reorderedFlexItemAt.getMeasuredWidth();
                            int measuredHeight2 = reorderedFlexItemAt.getMeasuredHeight();
                            Z(i18, makeMeasureSpec, z13, reorderedFlexItemAt);
                            this.f14231a.updateViewCache(i18, reorderedFlexItemAt);
                            measuredWidth = measuredWidth2;
                            measuredHeight = measuredHeight2;
                        } else {
                            z11 = z12;
                        }
                        int max = Math.max(i17, measuredHeight + bVar.N() + bVar.B1() + this.f14231a.getDecorationLengthCrossAxis(reorderedFlexItemAt));
                        flexLine.f14217e += measuredWidth + bVar.E1() + bVar.Y1();
                        i15 = max;
                    } else {
                        int measuredHeight3 = reorderedFlexItemAt.getMeasuredHeight();
                        long[] jArr3 = this.f14235e;
                        if (jArr3 != null) {
                            measuredHeight3 = x(jArr3[i18]);
                        }
                        int measuredWidth3 = reorderedFlexItemAt.getMeasuredWidth();
                        long[] jArr4 = this.f14235e;
                        f11 = f14;
                        boolean z14 = z11;
                        if (jArr4 != null) {
                            measuredWidth3 = y(jArr4[i18]);
                        }
                        if (!this.f14232b[i18] && bVar.t0() > f10) {
                            float t03 = measuredHeight3 + (bVar.t0() * f11);
                            if (i16 == flexLine.f14220h - 1) {
                                t03 += f15;
                                f15 = f10;
                            }
                            int round2 = Math.round(t03);
                            if (round2 > bVar.h2()) {
                                round2 = bVar.h2();
                                this.f14232b[i18] = true;
                                flexLine.f14222j -= bVar.t0();
                                z11 = true;
                            } else {
                                f15 += t03 - round2;
                                double d13 = f15;
                                if (d13 > 1.0d) {
                                    round2++;
                                    d11 = d13 - 1.0d;
                                } else {
                                    if (d13 < -1.0d) {
                                        round2--;
                                        d11 = d13 + 1.0d;
                                    }
                                    z11 = z14;
                                }
                                f15 = (float) d11;
                                z11 = z14;
                            }
                            int A = A(i10, bVar, flexLine.f14225m);
                            int makeMeasureSpec2 = View.MeasureSpec.makeMeasureSpec(round2, 1073741824);
                            reorderedFlexItemAt.measure(A, makeMeasureSpec2);
                            int measuredWidth4 = reorderedFlexItemAt.getMeasuredWidth();
                            int measuredHeight4 = reorderedFlexItemAt.getMeasuredHeight();
                            Z(i18, A, makeMeasureSpec2, reorderedFlexItemAt);
                            this.f14231a.updateViewCache(i18, reorderedFlexItemAt);
                            measuredWidth3 = measuredWidth4;
                            measuredHeight3 = measuredHeight4;
                        } else {
                            z11 = z14;
                        }
                        i15 = Math.max(i17, measuredWidth3 + bVar.E1() + bVar.Y1() + this.f14231a.getDecorationLengthCrossAxis(reorderedFlexItemAt));
                        flexLine.f14217e += measuredHeight3 + bVar.N() + bVar.B1();
                    }
                    flexLine.f14219g = Math.max(flexLine.f14219g, i15);
                    i17 = i15;
                }
                i16++;
                f14 = f11;
                f13 = f10;
            }
            if (z11 && i14 != flexLine.f14217e) {
                w(i10, i11, flexLine, i12, i13, true);
            }
        }
    }

    private int z(int i10, com.google.android.flexbox.b bVar, int i11) {
        com.google.android.flexbox.a aVar = this.f14231a;
        int childHeightMeasureSpec = aVar.getChildHeightMeasureSpec(i10, aVar.getPaddingTop() + this.f14231a.getPaddingBottom() + bVar.N() + bVar.B1() + i11, bVar.getHeight());
        int size = View.MeasureSpec.getSize(childHeightMeasureSpec);
        if (size > bVar.h2()) {
            return View.MeasureSpec.makeMeasureSpec(bVar.h2(), View.MeasureSpec.getMode(childHeightMeasureSpec));
        }
        if (size < bVar.b2()) {
            return View.MeasureSpec.makeMeasureSpec(bVar.b2(), View.MeasureSpec.getMode(childHeightMeasureSpec));
        }
        return childHeightMeasureSpec;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public boolean O(SparseIntArray sparseIntArray) {
        int flexItemCount = this.f14231a.getFlexItemCount();
        if (sparseIntArray.size() != flexItemCount) {
            return true;
        }
        for (int i10 = 0; i10 < flexItemCount; i10++) {
            View flexItemAt = this.f14231a.getFlexItemAt(i10);
            if (flexItemAt != null && ((com.google.android.flexbox.b) flexItemAt.getLayoutParams()).getOrder() != sparseIntArray.get(i10)) {
                return true;
            }
        }
        return false;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public void Q(View view, FlexLine flexLine, int i10, int i11, int i12, int i13) {
        com.google.android.flexbox.b bVar = (com.google.android.flexbox.b) view.getLayoutParams();
        int alignItems = this.f14231a.getAlignItems();
        if (bVar.B() != -1) {
            alignItems = bVar.B();
        }
        int i14 = flexLine.f14219g;
        if (alignItems != 0) {
            if (alignItems != 1) {
                if (alignItems != 2) {
                    if (alignItems != 3) {
                        if (alignItems != 4) {
                            return;
                        }
                    } else if (this.f14231a.getFlexWrap() != 2) {
                        int max = Math.max(flexLine.f14224l - view.getBaseline(), bVar.N());
                        view.layout(i10, i11 + max, i12, i13 + max);
                        return;
                    } else {
                        int max2 = Math.max((flexLine.f14224l - view.getMeasuredHeight()) + view.getBaseline(), bVar.B1());
                        view.layout(i10, i11 - max2, i12, i13 - max2);
                        return;
                    }
                } else {
                    int measuredHeight = (((i14 - view.getMeasuredHeight()) + bVar.N()) - bVar.B1()) / 2;
                    if (this.f14231a.getFlexWrap() != 2) {
                        int i15 = i11 + measuredHeight;
                        view.layout(i10, i15, i12, view.getMeasuredHeight() + i15);
                        return;
                    }
                    int i16 = i11 - measuredHeight;
                    view.layout(i10, i16, i12, view.getMeasuredHeight() + i16);
                    return;
                }
            } else if (this.f14231a.getFlexWrap() != 2) {
                int i17 = i11 + i14;
                view.layout(i10, (i17 - view.getMeasuredHeight()) - bVar.B1(), i12, i17 - bVar.B1());
                return;
            } else {
                view.layout(i10, (i11 - i14) + view.getMeasuredHeight() + bVar.N(), i12, (i13 - i14) + view.getMeasuredHeight() + bVar.N());
                return;
            }
        }
        if (this.f14231a.getFlexWrap() != 2) {
            view.layout(i10, i11 + bVar.N(), i12, i13 + bVar.N());
        } else {
            view.layout(i10, i11 - bVar.B1(), i12, i13 - bVar.B1());
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public void R(View view, FlexLine flexLine, boolean z10, int i10, int i11, int i12, int i13) {
        com.google.android.flexbox.b bVar = (com.google.android.flexbox.b) view.getLayoutParams();
        int alignItems = this.f14231a.getAlignItems();
        if (bVar.B() != -1) {
            alignItems = bVar.B();
        }
        int i14 = flexLine.f14219g;
        if (alignItems != 0) {
            if (alignItems != 1) {
                if (alignItems != 2) {
                    if (alignItems != 3 && alignItems != 4) {
                        return;
                    }
                } else {
                    ViewGroup.MarginLayoutParams marginLayoutParams = (ViewGroup.MarginLayoutParams) view.getLayoutParams();
                    int measuredWidth = (((i14 - view.getMeasuredWidth()) + m.b(marginLayoutParams)) - m.a(marginLayoutParams)) / 2;
                    if (!z10) {
                        view.layout(i10 + measuredWidth, i11, i12 + measuredWidth, i13);
                        return;
                    } else {
                        view.layout(i10 - measuredWidth, i11, i12 - measuredWidth, i13);
                        return;
                    }
                }
            } else if (!z10) {
                view.layout(((i10 + i14) - view.getMeasuredWidth()) - bVar.Y1(), i11, ((i12 + i14) - view.getMeasuredWidth()) - bVar.Y1(), i13);
                return;
            } else {
                view.layout((i10 - i14) + view.getMeasuredWidth() + bVar.E1(), i11, (i12 - i14) + view.getMeasuredWidth() + bVar.E1(), i13);
                return;
            }
        }
        if (!z10) {
            view.layout(i10 + bVar.E1(), i11, i12 + bVar.E1(), i13);
        } else {
            view.layout(i10 - bVar.Y1(), i11, i12 - bVar.Y1(), i13);
        }
    }

    long S(int i10, int i11) {
        return (i10 & 4294967295L) | (i11 << 32);
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public void X() {
        Y(0);
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public void Y(int i10) {
        int i11;
        View reorderedFlexItemAt;
        if (i10 < this.f14231a.getFlexItemCount()) {
            int flexDirection = this.f14231a.getFlexDirection();
            if (this.f14231a.getAlignItems() == 4) {
                int[] iArr = this.f14233c;
                if (iArr != null) {
                    i11 = iArr[i10];
                } else {
                    i11 = 0;
                }
                List flexLinesInternal = this.f14231a.getFlexLinesInternal();
                int size = flexLinesInternal.size();
                while (i11 < size) {
                    FlexLine flexLine = (FlexLine) flexLinesInternal.get(i11);
                    int i12 = flexLine.f14220h;
                    for (int i13 = 0; i13 < i12; i13++) {
                        int i14 = flexLine.f14227o + i13;
                        if (i13 < this.f14231a.getFlexItemCount() && (reorderedFlexItemAt = this.f14231a.getReorderedFlexItemAt(i14)) != null && reorderedFlexItemAt.getVisibility() != 8) {
                            com.google.android.flexbox.b bVar = (com.google.android.flexbox.b) reorderedFlexItemAt.getLayoutParams();
                            if (bVar.B() == -1 || bVar.B() == 4) {
                                if (flexDirection != 0 && flexDirection != 1) {
                                    if (flexDirection != 2 && flexDirection != 3) {
                                        throw new IllegalArgumentException("Invalid flex direction: " + flexDirection);
                                    }
                                    V(reorderedFlexItemAt, flexLine.f14219g, i14);
                                } else {
                                    W(reorderedFlexItemAt, flexLine.f14219g, i14);
                                }
                            }
                        }
                    }
                    i11++;
                }
                return;
            }
            for (FlexLine flexLine2 : this.f14231a.getFlexLinesInternal()) {
                for (Integer num : flexLine2.f14226n) {
                    View reorderedFlexItemAt2 = this.f14231a.getReorderedFlexItemAt(num.intValue());
                    if (flexDirection != 0 && flexDirection != 1) {
                        if (flexDirection != 2 && flexDirection != 3) {
                            throw new IllegalArgumentException("Invalid flex direction: " + flexDirection);
                        }
                        V(reorderedFlexItemAt2, flexLine2.f14219g, num.intValue());
                    } else {
                        W(reorderedFlexItemAt2, flexLine2.f14219g, num.intValue());
                    }
                }
            }
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    /* JADX WARN: Multi-variable type inference failed */
    public void b(FlexLinesResult flexLinesResult, int i10, int i11, int i12, int i13, int i14, List list) {
        ArrayList arrayList;
        boolean z10;
        int i15;
        FlexLinesResult flexLinesResult2;
        int i16;
        int i17;
        int i18;
        int i19;
        int i20;
        int i21;
        int i22;
        int i23;
        int i24;
        FlexLine flexLine;
        int i25;
        int i26;
        int i27;
        int i28;
        boolean z11;
        int i29;
        boolean z12;
        int i30;
        int i31;
        int i32 = i10;
        boolean isMainAxisDirectionHorizontal = this.f14231a.isMainAxisDirectionHorizontal();
        int mode = View.MeasureSpec.getMode(i32);
        int size = View.MeasureSpec.getSize(i32);
        if (list == null) {
            arrayList = new ArrayList();
        } else {
            arrayList = list;
        }
        flexLinesResult.f14236a = arrayList;
        if (i14 == -1) {
            z10 = true;
        } else {
            z10 = false;
        }
        int K = K(isMainAxisDirectionHorizontal);
        int I = I(isMainAxisDirectionHorizontal);
        int J = J(isMainAxisDirectionHorizontal);
        int H = H(isMainAxisDirectionHorizontal);
        FlexLine flexLine2 = new FlexLine();
        int i33 = i13;
        flexLine2.f14227o = i33;
        int i34 = K + I;
        flexLine2.f14217e = i34;
        int flexItemCount = this.f14231a.getFlexItemCount();
        boolean z13 = z10;
        FlexLine flexLine3 = flexLine2;
        int i35 = Integer.MIN_VALUE;
        int i36 = 0;
        int i37 = 0;
        int i38 = 0;
        while (true) {
            if (i33 < flexItemCount) {
                View reorderedFlexItemAt = this.f14231a.getReorderedFlexItemAt(i33);
                if (reorderedFlexItemAt == null) {
                    if (N(i33, flexItemCount, flexLine3)) {
                        a(arrayList, flexLine3, i33, i36);
                    }
                    i16 = i34;
                } else {
                    i16 = i34;
                    if (reorderedFlexItemAt.getVisibility() == 8) {
                        flexLine3.f14221i++;
                        flexLine3.f14220h++;
                        if (N(i33, flexItemCount, flexLine3)) {
                            a(arrayList, flexLine3, i33, i36);
                        }
                    } else {
                        if (reorderedFlexItemAt instanceof CompoundButton) {
                            v((CompoundButton) reorderedFlexItemAt);
                        }
                        com.google.android.flexbox.b bVar = (com.google.android.flexbox.b) reorderedFlexItemAt.getLayoutParams();
                        int i39 = flexItemCount;
                        if (bVar.B() == 4) {
                            flexLine3.f14226n.add(Integer.valueOf(i33));
                        }
                        int G = G(bVar, isMainAxisDirectionHorizontal);
                        if (bVar.G0() != -1.0f && mode == 1073741824) {
                            G = Math.round(size * bVar.G0());
                        }
                        if (isMainAxisDirectionHorizontal) {
                            i18 = mode;
                            i21 = this.f14231a.getChildWidthMeasureSpec(i32, i16 + E(bVar, true) + C(bVar, true), G);
                            i17 = size;
                            i19 = i36;
                            int childHeightMeasureSpec = this.f14231a.getChildHeightMeasureSpec(i11, J + H + D(bVar, true) + B(bVar, true) + i36, F(bVar, true));
                            reorderedFlexItemAt.measure(i21, childHeightMeasureSpec);
                            Z(i33, i21, childHeightMeasureSpec, reorderedFlexItemAt);
                            i20 = 0;
                        } else {
                            i17 = size;
                            i18 = mode;
                            i19 = i36;
                            i20 = 0;
                            int childWidthMeasureSpec = this.f14231a.getChildWidthMeasureSpec(i11, J + H + D(bVar, false) + B(bVar, false) + i19, F(bVar, false));
                            int childHeightMeasureSpec2 = this.f14231a.getChildHeightMeasureSpec(i32, i16 + E(bVar, false) + C(bVar, false), G);
                            reorderedFlexItemAt.measure(childWidthMeasureSpec, childHeightMeasureSpec2);
                            Z(i33, childWidthMeasureSpec, childHeightMeasureSpec2, reorderedFlexItemAt);
                            i21 = childHeightMeasureSpec2;
                        }
                        this.f14231a.updateViewCache(i33, reorderedFlexItemAt);
                        i(reorderedFlexItemAt, i33);
                        i37 = View.combineMeasuredStates(i37, reorderedFlexItemAt.getMeasuredState());
                        int i40 = i20;
                        i22 = i33;
                        int i41 = i21;
                        FlexLine flexLine4 = flexLine3;
                        int i42 = i38;
                        i23 = i16;
                        i24 = i19;
                        boolean z14 = isMainAxisDirectionHorizontal;
                        size = i17;
                        if (P(reorderedFlexItemAt, i18, size, flexLine3.f14217e, M(reorderedFlexItemAt, isMainAxisDirectionHorizontal) + E(bVar, isMainAxisDirectionHorizontal) + C(bVar, isMainAxisDirectionHorizontal), bVar, i22, i42, arrayList.size())) {
                            if (flexLine4.c() > 0) {
                                if (i22 > 0) {
                                    i31 = i22 - 1;
                                } else {
                                    i31 = i40;
                                }
                                a(arrayList, flexLine4, i31, i24);
                                i30 = i24 + flexLine4.f14219g;
                            } else {
                                i30 = i24;
                            }
                            if (z14) {
                                if (bVar.getHeight() == -1) {
                                    com.google.android.flexbox.a aVar = this.f14231a;
                                    reorderedFlexItemAt.measure(i41, aVar.getChildHeightMeasureSpec(i11, aVar.getPaddingTop() + this.f14231a.getPaddingBottom() + bVar.N() + bVar.B1() + i30, bVar.getHeight()));
                                    i(reorderedFlexItemAt, i22);
                                }
                            } else if (bVar.getWidth() == -1) {
                                com.google.android.flexbox.a aVar2 = this.f14231a;
                                reorderedFlexItemAt.measure(aVar2.getChildWidthMeasureSpec(i11, aVar2.getPaddingLeft() + this.f14231a.getPaddingRight() + bVar.E1() + bVar.Y1() + i30, bVar.getWidth()), i41);
                                i(reorderedFlexItemAt, i22);
                            }
                            FlexLine flexLine5 = new FlexLine();
                            flexLine5.f14220h = 1;
                            flexLine5.f14217e = i23;
                            flexLine5.f14227o = i22;
                            i24 = i30;
                            i25 = i40;
                            flexLine = flexLine5;
                            i26 = Integer.MIN_VALUE;
                        } else {
                            flexLine = flexLine4;
                            flexLine.f14220h++;
                            i25 = i42 + 1;
                            i26 = i35;
                        }
                        boolean z15 = flexLine.f14229q;
                        if (bVar.t0() != 0.0f) {
                            i27 = 1;
                        } else {
                            i27 = i40;
                        }
                        flexLine.f14229q = (z15 ? 1 : 0) | i27;
                        boolean z16 = flexLine.f14230r;
                        if (bVar.E() != 0.0f) {
                            i28 = 1;
                        } else {
                            i28 = i40;
                        }
                        flexLine.f14230r = (z16 ? 1 : 0) | i28;
                        int[] iArr = this.f14233c;
                        if (iArr != null) {
                            iArr[i22] = arrayList.size();
                        }
                        z11 = z14;
                        flexLine.f14217e += M(reorderedFlexItemAt, z11) + E(bVar, z11) + C(bVar, z11);
                        flexLine.f14222j += bVar.t0();
                        flexLine.f14223k += bVar.E();
                        this.f14231a.onNewFlexItemAdded(reorderedFlexItemAt, i22, i25, flexLine);
                        int max = Math.max(i26, L(reorderedFlexItemAt, z11) + D(bVar, z11) + B(bVar, z11) + this.f14231a.getDecorationLengthCrossAxis(reorderedFlexItemAt));
                        flexLine.f14219g = Math.max(flexLine.f14219g, max);
                        if (z11) {
                            if (this.f14231a.getFlexWrap() != 2) {
                                flexLine.f14224l = Math.max(flexLine.f14224l, reorderedFlexItemAt.getBaseline() + bVar.N());
                            } else {
                                flexLine.f14224l = Math.max(flexLine.f14224l, (reorderedFlexItemAt.getMeasuredHeight() - reorderedFlexItemAt.getBaseline()) + bVar.B1());
                            }
                        }
                        i29 = i39;
                        if (N(i22, i29, flexLine)) {
                            a(arrayList, flexLine, i22, i24);
                            i24 += flexLine.f14219g;
                        }
                        if (i14 != -1 && arrayList.size() > 0) {
                            if (((FlexLine) arrayList.get(arrayList.size() - 1)).f14228p >= i14 && i22 >= i14 && !z13) {
                                i24 = -flexLine.a();
                                z12 = true;
                                if (i24 <= i12 && z12) {
                                    flexLinesResult2 = flexLinesResult;
                                    i15 = i37;
                                    break;
                                }
                                i35 = max;
                                z13 = z12;
                                i38 = i25;
                                int i43 = i22 + 1;
                                isMainAxisDirectionHorizontal = z11;
                                flexLine3 = flexLine;
                                i34 = i23;
                                i36 = i24;
                                i32 = i10;
                                flexItemCount = i29;
                                i33 = i43;
                                mode = i18;
                            }
                        }
                        z12 = z13;
                        if (i24 <= i12) {
                        }
                        i35 = max;
                        z13 = z12;
                        i38 = i25;
                        int i432 = i22 + 1;
                        isMainAxisDirectionHorizontal = z11;
                        flexLine3 = flexLine;
                        i34 = i23;
                        i36 = i24;
                        i32 = i10;
                        flexItemCount = i29;
                        i33 = i432;
                        mode = i18;
                    }
                }
                i22 = i33;
                i18 = mode;
                i29 = flexItemCount;
                i24 = i36;
                z11 = isMainAxisDirectionHorizontal;
                i23 = i16;
                flexLine = flexLine3;
                int i4322 = i22 + 1;
                isMainAxisDirectionHorizontal = z11;
                flexLine3 = flexLine;
                i34 = i23;
                i36 = i24;
                i32 = i10;
                flexItemCount = i29;
                i33 = i4322;
                mode = i18;
            } else {
                i15 = i37;
                flexLinesResult2 = flexLinesResult;
                break;
            }
        }
        flexLinesResult2.f14237b = i15;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public void c(FlexLinesResult flexLinesResult, int i10, int i11) {
        b(flexLinesResult, i10, i11, Integer.MAX_VALUE, 0, -1, null);
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public void d(FlexLinesResult flexLinesResult, int i10, int i11, int i12, int i13, List list) {
        b(flexLinesResult, i10, i11, i12, i13, -1, list);
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public void e(FlexLinesResult flexLinesResult, int i10, int i11, int i12, int i13, List list) {
        b(flexLinesResult, i10, i11, i12, 0, i13, list);
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public void f(FlexLinesResult flexLinesResult, int i10, int i11) {
        b(flexLinesResult, i11, i10, Integer.MAX_VALUE, 0, -1, null);
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public void g(FlexLinesResult flexLinesResult, int i10, int i11, int i12, int i13, List list) {
        b(flexLinesResult, i11, i10, i12, i13, -1, list);
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public void h(FlexLinesResult flexLinesResult, int i10, int i11, int i12, int i13, List list) {
        b(flexLinesResult, i11, i10, i12, 0, i13, list);
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public void j(List list, int i10) {
        int i11 = this.f14233c[i10];
        if (i11 == -1) {
            i11 = 0;
        }
        if (list.size() > i11) {
            list.subList(i11, list.size()).clear();
        }
        int[] iArr = this.f14233c;
        int length = iArr.length - 1;
        if (i10 > length) {
            Arrays.fill(iArr, -1);
        } else {
            Arrays.fill(iArr, i10, length, -1);
        }
        long[] jArr = this.f14234d;
        int length2 = jArr.length - 1;
        if (i10 > length2) {
            Arrays.fill(jArr, 0L);
        } else {
            Arrays.fill(jArr, i10, length2, 0L);
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public int[] m(SparseIntArray sparseIntArray) {
        int flexItemCount = this.f14231a.getFlexItemCount();
        return U(flexItemCount, l(flexItemCount), sparseIntArray);
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public int[] n(View view, int i10, ViewGroup.LayoutParams layoutParams, SparseIntArray sparseIntArray) {
        int flexItemCount = this.f14231a.getFlexItemCount();
        List l10 = l(flexItemCount);
        b bVar = new b();
        if (view != null && (layoutParams instanceof com.google.android.flexbox.b)) {
            bVar.f14239e = ((com.google.android.flexbox.b) layoutParams).getOrder();
        } else {
            bVar.f14239e = 1;
        }
        if (i10 != -1 && i10 != flexItemCount) {
            if (i10 < this.f14231a.getFlexItemCount()) {
                bVar.f14238d = i10;
                while (i10 < flexItemCount) {
                    ((b) l10.get(i10)).f14238d++;
                    i10++;
                }
            } else {
                bVar.f14238d = flexItemCount;
            }
        } else {
            bVar.f14238d = flexItemCount;
        }
        l10.add(bVar);
        return U(flexItemCount + 1, l10, sparseIntArray);
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public void o(int i10, int i11, int i12) {
        int i13;
        int i14;
        int flexDirection = this.f14231a.getFlexDirection();
        if (flexDirection != 0 && flexDirection != 1) {
            if (flexDirection != 2 && flexDirection != 3) {
                throw new IllegalArgumentException("Invalid flex direction: " + flexDirection);
            }
            i13 = View.MeasureSpec.getMode(i10);
            i14 = View.MeasureSpec.getSize(i10);
        } else {
            int mode = View.MeasureSpec.getMode(i11);
            int size = View.MeasureSpec.getSize(i11);
            i13 = mode;
            i14 = size;
        }
        List<FlexLine> flexLinesInternal = this.f14231a.getFlexLinesInternal();
        if (i13 == 1073741824) {
            int sumOfCrossSize = this.f14231a.getSumOfCrossSize() + i12;
            int i15 = 0;
            if (flexLinesInternal.size() == 1) {
                ((FlexLine) flexLinesInternal.get(0)).f14219g = i14 - i12;
            } else if (flexLinesInternal.size() >= 2) {
                int alignContent = this.f14231a.getAlignContent();
                if (alignContent != 1) {
                    if (alignContent != 2) {
                        if (alignContent != 3) {
                            if (alignContent != 4) {
                                if (alignContent == 5 && sumOfCrossSize < i14) {
                                    float size2 = (i14 - sumOfCrossSize) / flexLinesInternal.size();
                                    int size3 = flexLinesInternal.size();
                                    float f10 = 0.0f;
                                    while (i15 < size3) {
                                        FlexLine flexLine = (FlexLine) flexLinesInternal.get(i15);
                                        float f11 = flexLine.f14219g + size2;
                                        if (i15 == flexLinesInternal.size() - 1) {
                                            f11 += f10;
                                            f10 = 0.0f;
                                        }
                                        int round = Math.round(f11);
                                        f10 += f11 - round;
                                        if (f10 > 1.0f) {
                                            round++;
                                            f10 -= 1.0f;
                                        } else if (f10 < -1.0f) {
                                            round--;
                                            f10 += 1.0f;
                                        }
                                        flexLine.f14219g = round;
                                        i15++;
                                    }
                                    return;
                                }
                                return;
                            } else if (sumOfCrossSize >= i14) {
                                this.f14231a.setFlexLines(k(flexLinesInternal, i14, sumOfCrossSize));
                                return;
                            } else {
                                int size4 = (i14 - sumOfCrossSize) / (flexLinesInternal.size() * 2);
                                ArrayList arrayList = new ArrayList();
                                FlexLine flexLine2 = new FlexLine();
                                flexLine2.f14219g = size4;
                                for (FlexLine flexLine3 : flexLinesInternal) {
                                    arrayList.add(flexLine2);
                                    arrayList.add(flexLine3);
                                    arrayList.add(flexLine2);
                                }
                                this.f14231a.setFlexLines(arrayList);
                                return;
                            }
                        } else if (sumOfCrossSize < i14) {
                            float size5 = (i14 - sumOfCrossSize) / (flexLinesInternal.size() - 1);
                            ArrayList arrayList2 = new ArrayList();
                            int size6 = flexLinesInternal.size();
                            float f12 = 0.0f;
                            while (i15 < size6) {
                                arrayList2.add((FlexLine) flexLinesInternal.get(i15));
                                if (i15 != flexLinesInternal.size() - 1) {
                                    FlexLine flexLine4 = new FlexLine();
                                    if (i15 == flexLinesInternal.size() - 2) {
                                        flexLine4.f14219g = Math.round(f12 + size5);
                                        f12 = 0.0f;
                                    } else {
                                        flexLine4.f14219g = Math.round(size5);
                                    }
                                    int i16 = flexLine4.f14219g;
                                    f12 += size5 - i16;
                                    if (f12 > 1.0f) {
                                        flexLine4.f14219g = i16 + 1;
                                        f12 -= 1.0f;
                                    } else if (f12 < -1.0f) {
                                        flexLine4.f14219g = i16 - 1;
                                        f12 += 1.0f;
                                    }
                                    arrayList2.add(flexLine4);
                                }
                                i15++;
                            }
                            this.f14231a.setFlexLines(arrayList2);
                            return;
                        } else {
                            return;
                        }
                    }
                    this.f14231a.setFlexLines(k(flexLinesInternal, i14, sumOfCrossSize));
                    return;
                }
                int i17 = i14 - sumOfCrossSize;
                FlexLine flexLine5 = new FlexLine();
                flexLine5.f14219g = i17;
                flexLinesInternal.add(0, flexLine5);
            }
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public void p(int i10, int i11) {
        q(i10, i11, 0);
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public void q(int i10, int i11, int i12) {
        int size;
        int paddingLeft;
        int paddingRight;
        int i13;
        int i14;
        int i15;
        r(this.f14231a.getFlexItemCount());
        if (i12 < this.f14231a.getFlexItemCount()) {
            int flexDirection = this.f14231a.getFlexDirection();
            int flexDirection2 = this.f14231a.getFlexDirection();
            if (flexDirection2 != 0 && flexDirection2 != 1) {
                if (flexDirection2 != 2 && flexDirection2 != 3) {
                    throw new IllegalArgumentException("Invalid flex direction: " + flexDirection);
                }
                int mode = View.MeasureSpec.getMode(i11);
                size = View.MeasureSpec.getSize(i11);
                if (mode != 1073741824) {
                    size = this.f14231a.getLargestMainSize();
                }
                paddingLeft = this.f14231a.getPaddingTop();
                paddingRight = this.f14231a.getPaddingBottom();
            } else {
                int mode2 = View.MeasureSpec.getMode(i10);
                size = View.MeasureSpec.getSize(i10);
                int largestMainSize = this.f14231a.getLargestMainSize();
                if (mode2 != 1073741824) {
                    size = Math.min(largestMainSize, size);
                }
                paddingLeft = this.f14231a.getPaddingLeft();
                paddingRight = this.f14231a.getPaddingRight();
            }
            int i16 = paddingLeft + paddingRight;
            int i17 = size;
            int[] iArr = this.f14233c;
            if (iArr != null) {
                i13 = iArr[i12];
            } else {
                i13 = 0;
            }
            List flexLinesInternal = this.f14231a.getFlexLinesInternal();
            int size2 = flexLinesInternal.size();
            while (i13 < size2) {
                FlexLine flexLine = (FlexLine) flexLinesInternal.get(i13);
                int i18 = flexLine.f14217e;
                if (i18 < i17 && flexLine.f14229q) {
                    i14 = i10;
                    i15 = i11;
                    w(i14, i15, flexLine, i17, i16, false);
                } else {
                    i14 = i10;
                    i15 = i11;
                    if (i18 > i17 && flexLine.f14230r) {
                        T(i14, i15, flexLine, i17, i16, false);
                    }
                }
                i13++;
                i10 = i14;
                i11 = i15;
            }
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public void s(int i10) {
        int[] iArr = this.f14233c;
        if (iArr == null) {
            this.f14233c = new int[Math.max(i10, 10)];
        } else if (iArr.length < i10) {
            this.f14233c = Arrays.copyOf(this.f14233c, Math.max(iArr.length * 2, i10));
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public void t(int i10) {
        long[] jArr = this.f14234d;
        if (jArr == null) {
            this.f14234d = new long[Math.max(i10, 10)];
        } else if (jArr.length < i10) {
            this.f14234d = Arrays.copyOf(this.f14234d, Math.max(jArr.length * 2, i10));
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public void u(int i10) {
        long[] jArr = this.f14235e;
        if (jArr == null) {
            this.f14235e = new long[Math.max(i10, 10)];
        } else if (jArr.length < i10) {
            this.f14235e = Arrays.copyOf(this.f14235e, Math.max(jArr.length * 2, i10));
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public int x(long j10) {
        return (int) (j10 >> 32);
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public int y(long j10) {
        return (int) j10;
    }
}

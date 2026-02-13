package com.swmansion.rnscreens.bottomsheet;

import com.swmansion.rnscreens.Screen;
import com.swmansion.rnscreens.ScreenContentWrapper;
import java.util.List;
import kotlin.collections.CollectionsKt;
import kotlin.jvm.internal.DefaultConstructorMarker;
import kotlin.jvm.internal.Intrinsics;
import pn.p;
import pn.q;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class SheetDetents {

    /* renamed from: b  reason: collision with root package name */
    public static final a f19116b = new a(null);

    /* renamed from: a  reason: collision with root package name */
    private final List f19117a;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class a {
        public /* synthetic */ a(DefaultConstructorMarker defaultConstructorMarker) {
            this();
        }

        private a() {
        }
    }

    /* JADX WARN: Removed duplicated region for block: B:21:0x0074  */
    /*
        Code decompiled incorrectly, please refer to instructions dump.
        To view partially-correct add '--show-bad-code' argument
    */
    public SheetDetents(java.util.List r11) {
        /*
            r10 = this;
            java.lang.String r0 = "rawDetents"
            kotlin.jvm.internal.Intrinsics.checkNotNullParameter(r11, r0)
            r10.<init>()
            r0 = r11
            java.lang.Iterable r0 = (java.lang.Iterable) r0
            java.util.List r0 = kotlin.collections.CollectionsKt.h1(r0)
            r10.f19117a = r0
            r0 = r11
            java.util.Collection r0 = (java.util.Collection) r0
            boolean r0 = r0.isEmpty()
            if (r0 != 0) goto Lc0
            int r0 = r11.size()
            r1 = 3
            if (r0 > r1) goto Lb8
            int r0 = r11.size()
            r1 = 1
            java.lang.String r2 = "."
            r3 = 4607182418800017408(0x3ff0000000000000, double:1.0)
            r5 = 0
            if (r0 != r1) goto L67
            r0 = 0
            java.lang.Object r11 = r11.get(r0)
            java.lang.Number r11 = (java.lang.Number) r11
            double r0 = r11.doubleValue()
            int r11 = (r5 > r0 ? 1 : (r5 == r0 ? 0 : -1))
            if (r11 > 0) goto L42
            int r11 = (r0 > r3 ? 1 : (r0 == r3 ? 0 : -1))
            if (r11 > 0) goto L42
            goto L48
        L42:
            r3 = -4616189618054758400(0xbff0000000000000, double:-1.0)
            int r11 = (r0 > r3 ? 1 : (r0 == r3 ? 0 : -1))
            if (r11 != 0) goto L49
        L48:
            return
        L49:
            java.lang.StringBuilder r11 = new java.lang.StringBuilder
            r11.<init>()
            java.lang.String r3 = "[RNScreens] Detent value must be within 0.0 and 1.0, or SHEET_FIT_TO_CONTENTS should be defined, got "
            r11.append(r3)
            r11.append(r0)
            r11.append(r2)
            java.lang.String r11 = r11.toString()
            java.lang.IllegalArgumentException r0 = new java.lang.IllegalArgumentException
            java.lang.String r11 = r11.toString()
            r0.<init>(r11)
            throw r0
        L67:
            r0 = r11
            java.lang.Iterable r0 = (java.lang.Iterable) r0
            java.util.Iterator r1 = r0.iterator()
        L6e:
            boolean r7 = r1.hasNext()
            if (r7 == 0) goto La5
            java.lang.Object r7 = r1.next()
            java.lang.Number r7 = (java.lang.Number) r7
            double r7 = r7.doubleValue()
            int r9 = (r5 > r7 ? 1 : (r5 == r7 ? 0 : -1))
            if (r9 > 0) goto L87
            int r9 = (r7 > r3 ? 1 : (r7 == r3 ? 0 : -1))
            if (r9 > 0) goto L87
            goto L6e
        L87:
            java.lang.StringBuilder r11 = new java.lang.StringBuilder
            r11.<init>()
            java.lang.String r0 = "[RNScreens] Detent values must be within 0.0 and 1.0, got "
            r11.append(r0)
            r11.append(r7)
            r11.append(r2)
            java.lang.String r11 = r11.toString()
            java.lang.IllegalArgumentException r0 = new java.lang.IllegalArgumentException
            java.lang.String r11 = r11.toString()
            r0.<init>(r11)
            throw r0
        La5:
            java.util.List r0 = kotlin.collections.CollectionsKt.U0(r0)
            boolean r11 = kotlin.jvm.internal.Intrinsics.areEqual(r11, r0)
            if (r11 == 0) goto Lb0
            return
        Lb0:
            java.lang.IllegalArgumentException r11 = new java.lang.IllegalArgumentException
            java.lang.String r0 = "[RNScreens] Detents must be sorted in ascending order."
            r11.<init>(r0)
            throw r11
        Lb8:
            java.lang.IllegalArgumentException r11 = new java.lang.IllegalArgumentException
            java.lang.String r0 = "[RNScreens] Maximum of 3 detents supported."
            r11.<init>(r0)
            throw r11
        Lc0:
            java.lang.IllegalArgumentException r11 = new java.lang.IllegalArgumentException
            java.lang.String r0 = "[RNScreens] At least one detent must be provided."
            r11.<init>(r0)
            throw r11
        */
        throw new UnsupportedOperationException("Method not decompiled: com.swmansion.rnscreens.bottomsheet.SheetDetents.<init>(java.util.List):void");
    }

    public final double a(int i10) {
        return ((Number) this.f19117a.get(i10)).doubleValue();
    }

    public final int b(int i10, int i11) {
        if (d() >= 3) {
            return ((int) ((1 - a(2)) * i10)) + i11;
        }
        throw new IllegalStateException("[RNScreens] At least 3 detents required for expandedOffsetFromTop.");
    }

    public final int c(int i10) {
        return f(0, i10);
    }

    public final int d() {
        return this.f19117a.size();
    }

    public final float e() {
        if (d() >= 3) {
            return (float) (a(1) / a(2));
        }
        throw new IllegalStateException("[RNScreens] At least 3 detents required for halfExpandedRatio.");
    }

    public final int f(int i10, int i11) {
        boolean z10;
        double a10 = a(i10);
        if (a10 == -1.0d) {
            z10 = true;
        } else {
            z10 = false;
        }
        if (!z10) {
            return (int) (a10 * i11);
        }
        throw new IllegalArgumentException("[RNScreens] FIT_TO_CONTENTS is not supported by heightAt.");
    }

    public final double g() {
        return ((Number) CollectionsKt.z0(this.f19117a)).doubleValue();
    }

    public final int h(int i10) {
        return p.f43412a.a(i10, d());
    }

    public final int i(int i10) {
        return f(d() - 1, i10);
    }

    public final int j(Screen screen) {
        Intrinsics.checkNotNullParameter(screen, "screen");
        ScreenContentWrapper contentWrapper = screen.getContentWrapper();
        if (contentWrapper != null) {
            Integer valueOf = Integer.valueOf(contentWrapper.getHeight());
            if (!q.a(contentWrapper)) {
                valueOf = null;
            }
            if (valueOf != null) {
                return valueOf.intValue();
            }
            return 0;
        }
        return 0;
    }

    public final int k(int i10) {
        return p.f43412a.c(i10, d());
    }

    public final double l() {
        return ((Number) CollectionsKt.o0(this.f19117a)).doubleValue();
    }
}

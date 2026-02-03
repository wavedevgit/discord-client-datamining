package io.sentry.android.replay.viewhierarchy;

import android.graphics.Rect;
import android.graphics.drawable.Drawable;
import android.text.Layout;
import android.view.View;
import android.view.ViewParent;
import android.widget.ImageView;
import android.widget.TextView;
import io.sentry.android.replay.util.m;
import io.sentry.android.replay.util.n;
import io.sentry.k7;
import java.util.List;
import java.util.Set;
import kotlin.Pair;
import kotlin.jvm.functions.Function1;
import kotlin.jvm.internal.DefaultConstructorMarker;
import kotlin.jvm.internal.Intrinsics;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public abstract class b {

    /* renamed from: m  reason: collision with root package name */
    public static final a f29661m = new a(null);

    /* renamed from: n  reason: collision with root package name */
    public static final int f29662n = 8;

    /* renamed from: a  reason: collision with root package name */
    private final float f29663a;

    /* renamed from: b  reason: collision with root package name */
    private final float f29664b;

    /* renamed from: c  reason: collision with root package name */
    private final int f29665c;

    /* renamed from: d  reason: collision with root package name */
    private final int f29666d;

    /* renamed from: e  reason: collision with root package name */
    private final float f29667e;

    /* renamed from: f  reason: collision with root package name */
    private final int f29668f;

    /* renamed from: g  reason: collision with root package name */
    private final b f29669g;

    /* renamed from: h  reason: collision with root package name */
    private final boolean f29670h;

    /* renamed from: i  reason: collision with root package name */
    private boolean f29671i;

    /* renamed from: j  reason: collision with root package name */
    private final boolean f29672j;

    /* renamed from: k  reason: collision with root package name */
    private final Rect f29673k;

    /* renamed from: l  reason: collision with root package name */
    private List f29674l;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class a {
        public /* synthetic */ a(DefaultConstructorMarker defaultConstructorMarker) {
            this();
        }

        private final boolean b(Class cls, Set set) {
            while (cls != null) {
                if (set.contains(cls.getName())) {
                    return true;
                }
                cls = cls.getSuperclass();
            }
            return false;
        }

        private final boolean c(View view, k7 k7Var) {
            String f10 = k7Var.getSessionReplay().f();
            if (f10 == null) {
                return false;
            }
            return Intrinsics.areEqual(view.getClass().getName(), f10);
        }

        private final boolean d(ViewParent viewParent, k7 k7Var) {
            String t10 = k7Var.getSessionReplay().t();
            if (t10 == null) {
                return false;
            }
            return Intrinsics.areEqual(viewParent.getClass().getName(), t10);
        }

        /* JADX WARN: Code restructure failed: missing block: B:11:0x0025, code lost:
            if (kotlin.text.StringsKt.V(r0, "sentry-unmask", false, 2, null) == true) goto L10;
         */
        /* JADX WARN: Code restructure failed: missing block: B:24:0x0056, code lost:
            if (kotlin.text.StringsKt.V(r0, "sentry-mask", false, 2, null) == true) goto L22;
         */
        /*
            Code decompiled incorrectly, please refer to instructions dump.
            To view partially-correct add '--show-bad-code' argument
        */
        private final boolean e(android.view.View r8, io.sentry.k7 r9) {
            /*
                r7 = this;
                java.lang.Object r0 = r8.getTag()
                boolean r1 = r0 instanceof java.lang.String
                r2 = 0
                if (r1 == 0) goto Lc
                java.lang.String r0 = (java.lang.String) r0
                goto Ld
            Lc:
                r0 = r2
            Ld:
                r1 = 2
                java.lang.String r3 = "toLowerCase(...)"
                r4 = 1
                r5 = 0
                if (r0 == 0) goto L28
                java.util.Locale r6 = java.util.Locale.ROOT
                java.lang.String r0 = r0.toLowerCase(r6)
                kotlin.jvm.internal.Intrinsics.checkNotNullExpressionValue(r0, r3)
                if (r0 == 0) goto L28
                java.lang.String r6 = "sentry-unmask"
                boolean r0 = kotlin.text.StringsKt.V(r0, r6, r5, r1, r2)
                if (r0 != r4) goto L28
                goto L36
            L28:
                int r0 = io.sentry.android.replay.f.f29459a
                java.lang.Object r0 = r8.getTag(r0)
                java.lang.String r6 = "unmask"
                boolean r0 = kotlin.jvm.internal.Intrinsics.areEqual(r0, r6)
                if (r0 == 0) goto L37
            L36:
                return r5
            L37:
                java.lang.Object r0 = r8.getTag()
                boolean r6 = r0 instanceof java.lang.String
                if (r6 == 0) goto L42
                java.lang.String r0 = (java.lang.String) r0
                goto L43
            L42:
                r0 = r2
            L43:
                if (r0 == 0) goto L59
                java.util.Locale r6 = java.util.Locale.ROOT
                java.lang.String r0 = r0.toLowerCase(r6)
                kotlin.jvm.internal.Intrinsics.checkNotNullExpressionValue(r0, r3)
                if (r0 == 0) goto L59
                java.lang.String r3 = "sentry-mask"
                boolean r0 = kotlin.text.StringsKt.V(r0, r3, r5, r1, r2)
                if (r0 != r4) goto L59
                goto L67
            L59:
                int r0 = io.sentry.android.replay.f.f29459a
                java.lang.Object r0 = r8.getTag(r0)
                java.lang.String r1 = "mask"
                boolean r0 = kotlin.jvm.internal.Intrinsics.areEqual(r0, r1)
                if (r0 == 0) goto L68
            L67:
                return r4
            L68:
                boolean r0 = r7.c(r8, r9)
                if (r0 != 0) goto L84
                android.view.ViewParent r0 = r8.getParent()
                if (r0 == 0) goto L84
                android.view.ViewParent r0 = r8.getParent()
                java.lang.String r1 = "getParent(...)"
                kotlin.jvm.internal.Intrinsics.checkNotNullExpressionValue(r0, r1)
                boolean r0 = r7.d(r0, r9)
                if (r0 == 0) goto L84
                return r5
            L84:
                java.lang.Class r0 = r8.getClass()
                io.sentry.m7 r1 = r9.getSessionReplay()
                java.util.Set r1 = r1.s()
                java.lang.String r2 = "getUnmaskViewClasses(...)"
                kotlin.jvm.internal.Intrinsics.checkNotNullExpressionValue(r1, r2)
                boolean r0 = r7.b(r0, r1)
                if (r0 == 0) goto L9c
                return r5
            L9c:
                java.lang.Class r8 = r8.getClass()
                io.sentry.m7 r9 = r9.getSessionReplay()
                java.util.Set r9 = r9.e()
                java.lang.String r0 = "getMaskViewClasses(...)"
                kotlin.jvm.internal.Intrinsics.checkNotNullExpressionValue(r9, r0)
                boolean r8 = r7.b(r8, r9)
                return r8
            */
            throw new UnsupportedOperationException("Method not decompiled: io.sentry.android.replay.viewhierarchy.b.a.e(android.view.View, io.sentry.k7):boolean");
        }

        public final b a(View view, b bVar, int i10, k7 options) {
            boolean z10;
            float f10;
            float f11;
            Drawable drawable;
            io.sentry.android.replay.util.a aVar;
            Intrinsics.checkNotNullParameter(view, "view");
            Intrinsics.checkNotNullParameter(options, "options");
            Pair g10 = n.g(view);
            boolean booleanValue = ((Boolean) g10.a()).booleanValue();
            Rect rect = (Rect) g10.b();
            boolean z11 = true;
            if (booleanValue && e(view, options)) {
                z10 = true;
            } else {
                z10 = false;
            }
            if (view instanceof TextView) {
                if (bVar != null) {
                    bVar.g(true);
                }
                TextView textView = (TextView) view;
                Layout layout = textView.getLayout();
                if (layout != null) {
                    aVar = new io.sentry.android.replay.util.a(layout);
                } else {
                    aVar = null;
                }
                io.sentry.android.replay.util.a aVar2 = aVar;
                int j10 = n.j(textView.getCurrentTextColor());
                int totalPaddingLeft = textView.getTotalPaddingLeft();
                int c10 = n.c(textView);
                float x10 = textView.getX();
                float y10 = textView.getY();
                int width = textView.getWidth();
                float f12 = 0.0f;
                int height = textView.getHeight();
                if (bVar != null) {
                    f12 = bVar.a();
                }
                return new d(aVar2, Integer.valueOf(j10), totalPaddingLeft, c10, x10, y10, width, height, f12 + textView.getElevation(), i10, bVar, z10, true, booleanValue, rect);
            } else if (view instanceof ImageView) {
                if (bVar != null) {
                    bVar.g(true);
                }
                ImageView imageView = (ImageView) view;
                float x11 = imageView.getX();
                float y11 = imageView.getY();
                int width2 = imageView.getWidth();
                int height2 = imageView.getHeight();
                if (bVar != null) {
                    f11 = bVar.a();
                } else {
                    f11 = 0.0f;
                }
                float elevation = f11 + imageView.getElevation();
                if (!z10 || (drawable = imageView.getDrawable()) == null || !n.f(drawable)) {
                    z11 = false;
                }
                return new c(x11, y11, width2, height2, elevation, i10, bVar, z11, true, booleanValue, rect);
            } else {
                float x12 = view.getX();
                float y12 = view.getY();
                int width3 = view.getWidth();
                int height3 = view.getHeight();
                if (bVar != null) {
                    f10 = bVar.a();
                } else {
                    f10 = 0.0f;
                }
                return new C0396b(x12, y12, width3, height3, f10 + view.getElevation(), i10, bVar, z10, false, booleanValue, rect);
            }
        }

        private a() {
        }
    }

    /* renamed from: io.sentry.android.replay.viewhierarchy.b$b  reason: collision with other inner class name */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class C0396b extends b {
        public C0396b(float f10, float f11, int i10, int i11, float f12, int i12, b bVar, boolean z10, boolean z11, boolean z12, Rect rect) {
            super(f10, f11, i10, i11, f12, i12, bVar, z10, z11, z12, rect, null);
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class c extends b {
        public c(float f10, float f11, int i10, int i11, float f12, int i12, b bVar, boolean z10, boolean z11, boolean z12, Rect rect) {
            super(f10, f11, i10, i11, f12, i12, bVar, z10, z11, z12, rect, null);
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class d extends b {

        /* renamed from: o  reason: collision with root package name */
        private final m f29675o;

        /* renamed from: p  reason: collision with root package name */
        private final Integer f29676p;

        /* renamed from: q  reason: collision with root package name */
        private final int f29677q;

        /* renamed from: r  reason: collision with root package name */
        private final int f29678r;

        public d(m mVar, Integer num, int i10, int i11, float f10, float f11, int i12, int i13, float f12, int i14, b bVar, boolean z10, boolean z11, boolean z12, Rect rect) {
            super(f10, f11, i12, i13, f12, i14, bVar, z10, z11, z12, rect, null);
            this.f29675o = mVar;
            this.f29676p = num;
            this.f29677q = i10;
            this.f29678r = i11;
        }

        public final Integer i() {
            return this.f29676p;
        }

        public final m j() {
            return this.f29675o;
        }

        public final int k() {
            return this.f29677q;
        }

        public final int l() {
            return this.f29678r;
        }
    }

    public /* synthetic */ b(float f10, float f11, int i10, int i11, float f12, int i12, b bVar, boolean z10, boolean z11, boolean z12, Rect rect, DefaultConstructorMarker defaultConstructorMarker) {
        this(f10, f11, i10, i11, f12, i12, bVar, z10, z11, z12, rect);
    }

    public final float a() {
        return this.f29667e;
    }

    public final int b() {
        return this.f29666d;
    }

    public final boolean c() {
        return this.f29670h;
    }

    public final Rect d() {
        return this.f29673k;
    }

    public final int e() {
        return this.f29665c;
    }

    public final void f(List list) {
        this.f29674l = list;
    }

    public final void g(boolean z10) {
        for (b bVar = this.f29669g; bVar != null; bVar = bVar.f29669g) {
            bVar.f29671i = z10;
        }
    }

    public final void h(Function1 callback) {
        List<b> list;
        Intrinsics.checkNotNullParameter(callback, "callback");
        if (((Boolean) callback.invoke(this)).booleanValue() && (list = this.f29674l) != null) {
            Intrinsics.checkNotNull(list);
            for (b bVar : list) {
                bVar.h(callback);
            }
        }
    }

    private b(float f10, float f11, int i10, int i11, float f12, int i12, b bVar, boolean z10, boolean z11, boolean z12, Rect rect) {
        this.f29663a = f10;
        this.f29664b = f11;
        this.f29665c = i10;
        this.f29666d = i11;
        this.f29667e = f12;
        this.f29668f = i12;
        this.f29669g = bVar;
        this.f29670h = z10;
        this.f29671i = z11;
        this.f29672j = z12;
        this.f29673k = rect;
    }
}

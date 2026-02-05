package com.swmansion.rnscreens;

import android.view.View;
import android.view.ViewParent;
import com.facebook.react.bridge.ReactContext;
import kotlin.enums.EnumEntries;
import kotlin.jvm.internal.Intrinsics;
import org.jetbrains.annotations.NotNull;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class q0 extends f {

    /* renamed from: r  reason: collision with root package name */
    private int f18345r;

    /* renamed from: s  reason: collision with root package name */
    private int f18346s;

    /* renamed from: t  reason: collision with root package name */
    private boolean f18347t;

    /* renamed from: u  reason: collision with root package name */
    private a f18348u;

    /* JADX WARN: Failed to restore enum class, 'enum' modifier and super class removed */
    /* JADX WARN: Unknown enum class pattern. Please report as an issue! */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class a {

        /* renamed from: d  reason: collision with root package name */
        public static final a f18349d = new a("LEFT", 0);

        /* renamed from: e  reason: collision with root package name */
        public static final a f18350e = new a("CENTER", 1);

        /* renamed from: i  reason: collision with root package name */
        public static final a f18351i = new a("RIGHT", 2);

        /* renamed from: o  reason: collision with root package name */
        public static final a f18352o = new a("BACK", 3);

        /* renamed from: p  reason: collision with root package name */
        public static final a f18353p = new a("SEARCH_BAR", 4);

        /* renamed from: q  reason: collision with root package name */
        private static final /* synthetic */ a[] f18354q;

        /* renamed from: r  reason: collision with root package name */
        private static final /* synthetic */ EnumEntries f18355r;

        static {
            a[] a10 = a();
            f18354q = a10;
            f18355r = vr.a.a(a10);
        }

        private a(String str, int i10) {
        }

        private static final /* synthetic */ a[] a() {
            return new a[]{f18349d, f18350e, f18351i, f18352o, f18353p};
        }

        public static a valueOf(String str) {
            return (a) Enum.valueOf(a.class, str);
        }

        public static a[] values() {
            return (a[]) f18354q.clone();
        }
    }

    public q0(ReactContext reactContext) {
        super(reactContext);
        this.f18348u = a.f18349d;
    }

    public final ScreenStackHeaderConfig getConfig() {
        d dVar;
        ViewParent parent = getParent();
        if (parent instanceof d) {
            dVar = (d) parent;
        } else {
            dVar = null;
        }
        if (dVar == null) {
            return null;
        }
        return dVar.getConfig();
    }

    @NotNull
    public final a getType() {
        return this.f18348u;
    }

    @Override // android.view.ViewGroup, android.view.View
    protected void onLayout(boolean z10, int i10, int i11, int i12, int i13) {
        if (z10) {
            int i14 = i12 - i10;
            int i15 = i13 - i11;
            if (this.f18347t) {
                b(i14, i15, i10, i11);
            }
        }
    }

    @Override // android.view.View
    protected void onMeasure(int i10, int i11) {
        if (View.MeasureSpec.getMode(i10) == 1073741824 && View.MeasureSpec.getMode(i11) == 1073741824) {
            this.f18345r = View.MeasureSpec.getSize(i10);
            this.f18346s = View.MeasureSpec.getSize(i11);
            this.f18347t = true;
            ViewParent parent = getParent();
            if (parent != null) {
                forceLayout();
                ((View) parent).requestLayout();
            }
        }
        setMeasuredDimension(this.f18345r, this.f18346s);
    }

    public final void setType(@NotNull a aVar) {
        Intrinsics.checkNotNullParameter(aVar, "<set-?>");
        this.f18348u = aVar;
    }
}

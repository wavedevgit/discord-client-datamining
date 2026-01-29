package com.swmansion.gesturehandler.react;

import android.view.View;
import android.view.ViewGroup;
import cn.d0;
import cn.v;
import com.facebook.react.uimanager.PointerEvents;
import com.facebook.react.uimanager.ReactPointerEventsView;
import com.facebook.react.uimanager.ViewProps;
import com.facebook.react.views.scroll.ReactHorizontalScrollView;
import com.facebook.react.views.scroll.ReactScrollView;
import com.facebook.react.views.view.ReactViewGroup;
import ir.p;
import kotlin.jvm.internal.Intrinsics;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class m implements d0 {

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public /* synthetic */ class a {

        /* renamed from: a  reason: collision with root package name */
        public static final /* synthetic */ int[] f19106a;

        static {
            int[] iArr = new int[PointerEvents.values().length];
            try {
                iArr[PointerEvents.BOX_ONLY.ordinal()] = 1;
            } catch (NoSuchFieldError unused) {
            }
            try {
                iArr[PointerEvents.BOX_NONE.ordinal()] = 2;
            } catch (NoSuchFieldError unused2) {
            }
            try {
                iArr[PointerEvents.NONE.ordinal()] = 3;
            } catch (NoSuchFieldError unused3) {
            }
            try {
                iArr[PointerEvents.AUTO.ordinal()] = 4;
            } catch (NoSuchFieldError unused4) {
            }
            f19106a = iArr;
        }
    }

    @Override // cn.d0
    public v a(View view) {
        PointerEvents pointerEvents;
        Intrinsics.checkNotNullParameter(view, "view");
        if (view instanceof ReactPointerEventsView) {
            pointerEvents = ((ReactPointerEventsView) view).getPointerEvents();
        } else {
            pointerEvents = PointerEvents.AUTO;
        }
        if (!view.isEnabled()) {
            if (pointerEvents == PointerEvents.AUTO) {
                return v.f8655e;
            }
            if (pointerEvents == PointerEvents.BOX_ONLY) {
                return v.f8654d;
            }
        }
        int i10 = a.f19106a[pointerEvents.ordinal()];
        if (i10 != 1) {
            if (i10 != 2) {
                if (i10 != 3) {
                    if (i10 == 4) {
                        return v.f8657o;
                    }
                    throw new p();
                }
                return v.f8654d;
            }
            return v.f8655e;
        }
        return v.f8656i;
    }

    @Override // cn.d0
    public boolean b(ViewGroup view) {
        Intrinsics.checkNotNullParameter(view, "view");
        if (view.getClipChildren()) {
            return true;
        }
        if (view instanceof ReactScrollView) {
            if (!Intrinsics.areEqual(((ReactScrollView) view).getOverflow(), ViewProps.VISIBLE)) {
                return true;
            }
            return false;
        } else if (view instanceof ReactHorizontalScrollView) {
            if (!Intrinsics.areEqual(((ReactHorizontalScrollView) view).getOverflow(), ViewProps.VISIBLE)) {
                return true;
            }
            return false;
        } else if (!(view instanceof ReactViewGroup)) {
            return false;
        } else {
            return Intrinsics.areEqual(((ReactViewGroup) view).getOverflow(), ViewProps.HIDDEN);
        }
    }

    @Override // cn.d0
    public View c(ViewGroup parent, int i10) {
        Intrinsics.checkNotNullParameter(parent, "parent");
        if (parent instanceof ReactViewGroup) {
            View childAt = parent.getChildAt(((ReactViewGroup) parent).getZIndexMappedChildIndex(i10));
            Intrinsics.checkNotNull(childAt);
            return childAt;
        }
        View childAt2 = parent.getChildAt(i10);
        Intrinsics.checkNotNull(childAt2);
        return childAt2;
    }
}

package com.reactnativecommunity.slider;

import android.graphics.PorterDuff;
import android.graphics.PorterDuffColorFilter;
import android.graphics.drawable.Drawable;
import android.graphics.drawable.LayerDrawable;
import android.os.Build;
import com.facebook.react.bridge.ReadableArray;
import com.facebook.react.bridge.ReadableMap;
import com.facebook.react.common.MapBuilder;
import com.facebook.react.uimanager.ThemedReactContext;
import com.facebook.react.views.textinput.ReactTextChangedEvent;
import java.util.ArrayList;
import java.util.Iterator;
import java.util.Map;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public abstract class c {
    public static a a(ThemedReactContext themedReactContext) {
        a aVar = new a(themedReactContext, null);
        aVar.setSplitTrack(false);
        return aVar;
    }

    public static Map b() {
        return MapBuilder.of(ReactTextChangedEvent.EVENT_NAME, MapBuilder.of("registrationName", ReactTextChangedEvent.EVENT_NAME));
    }

    public static Map c() {
        return MapBuilder.of("onRNCSliderSlidingStart", MapBuilder.of("registrationName", "onRNCSliderSlidingStart"), "onRNCSliderSlidingComplete", MapBuilder.of("registrationName", "onRNCSliderSlidingComplete"));
    }

    public static void d(a aVar, ReadableArray readableArray) {
        ArrayList<Object> arrayList = readableArray.toArrayList();
        ArrayList arrayList2 = new ArrayList();
        Iterator<Object> it = arrayList.iterator();
        while (it.hasNext()) {
            arrayList2.add((String) it.next());
        }
        aVar.setAccessibilityIncrements(arrayList2);
    }

    public static void e(a aVar, String str) {
        aVar.setAccessibilityUnits(str);
    }

    public static void f(a aVar, boolean z10) {
        aVar.setEnabled(!z10);
    }

    public static void g(a aVar, boolean z10) {
        if (z10) {
            aVar.setScaleX(-1.0f);
        } else {
            aVar.setScaleX(1.0f);
        }
    }

    public static void h(a aVar, double d10) {
        aVar.setLowerLimit(d10);
    }

    public static void i(a aVar, Integer num) {
        Drawable findDrawableByLayerId = ((LayerDrawable) aVar.getProgressDrawable().getCurrent()).findDrawableByLayerId(16908288);
        if (num == null) {
            findDrawableByLayerId.clearColorFilter();
        } else if (Build.VERSION.SDK_INT > 28) {
            findDrawableByLayerId.setColorFilter(new PorterDuffColorFilter(num.intValue(), PorterDuff.Mode.SRC_IN));
        } else {
            findDrawableByLayerId.setColorFilter(num.intValue(), PorterDuff.Mode.SRC_IN);
        }
    }

    public static void j(a aVar, double d10) {
        aVar.setMaxValue(d10);
    }

    public static void k(a aVar, Integer num) {
        Drawable findDrawableByLayerId = ((LayerDrawable) aVar.getProgressDrawable().getCurrent()).findDrawableByLayerId(16908301);
        if (num == null) {
            findDrawableByLayerId.clearColorFilter();
        } else if (Build.VERSION.SDK_INT > 28) {
            findDrawableByLayerId.setColorFilter(new PorterDuffColorFilter(num.intValue(), PorterDuff.Mode.SRC_IN));
        } else {
            findDrawableByLayerId.setColorFilter(num.intValue(), PorterDuff.Mode.SRC_IN);
        }
    }

    public static void l(a aVar, double d10) {
        aVar.setMinValue(d10);
    }

    public static void m(a aVar, double d10) {
        aVar.setStep(d10);
    }

    public static void n(a aVar, ReadableMap readableMap) {
        String str;
        if (readableMap != null) {
            str = readableMap.getString("uri");
        } else {
            str = null;
        }
        aVar.setThumbImage(str);
    }

    public static void o(a aVar, Integer num) {
        if (aVar.getThumb() != null) {
            if (num == null) {
                aVar.getThumb().clearColorFilter();
            } else {
                aVar.getThumb().setColorFilter(num.intValue(), PorterDuff.Mode.SRC_IN);
            }
        }
    }

    public static void p(a aVar, double d10) {
        aVar.setUpperLimit(d10);
    }

    public static void q(a aVar, double d10) {
        if (!aVar.e()) {
            aVar.setValue(d10);
            if (aVar.isAccessibilityFocused() && Build.VERSION.SDK_INT > 29) {
                aVar.setupAccessibility((int) d10);
            }
        }
    }
}

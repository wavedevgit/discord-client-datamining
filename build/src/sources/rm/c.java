package rm;

import android.content.Context;
import android.content.res.TypedArray;
import android.graphics.Color;
import android.os.Build;
import com.facebook.react.uimanager.ThemedReactContext;
import com.facebook.react.views.text.internal.span.SetSpanOperation;
import com.reactnativekeyboardcontroller.d;
import java.util.Map;
import kotlin.Pair;
import kotlin.collections.o0;
import kotlin.jvm.internal.Intrinsics;
import lr.v;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public abstract class c {

    /* renamed from: a  reason: collision with root package name */
    private static final Map f48871a = o0.m(v.a("com.android.inputmethod.latin", v.a(Integer.valueOf(com.reactnativekeyboardcontroller.c.f17183a), Integer.valueOf(com.reactnativekeyboardcontroller.c.f17183a))), v.a("com.google.android.inputmethod.latin", v.a(Integer.valueOf(com.reactnativekeyboardcontroller.c.f17185c), Integer.valueOf(com.reactnativekeyboardcontroller.c.f17184b))), v.a("com.touchtype.swiftkey", v.a(Integer.valueOf(com.reactnativekeyboardcontroller.c.f17191i), Integer.valueOf(com.reactnativekeyboardcontroller.c.f17190h))), v.a("com.google.android.googlequicksearchbox", v.a(Integer.valueOf(com.reactnativekeyboardcontroller.c.f17187e), Integer.valueOf(com.reactnativekeyboardcontroller.c.f17186d))), v.a("com.google.android.tts", v.a(Integer.valueOf(com.reactnativekeyboardcontroller.c.f17187e), Integer.valueOf(com.reactnativekeyboardcontroller.c.f17186d))), v.a("ru.yandex.androidkeyboard", v.a(Integer.valueOf(com.reactnativekeyboardcontroller.c.f17193k), Integer.valueOf(com.reactnativekeyboardcontroller.c.f17192j))), v.a("com.samsung.android.honeyboard", v.a(Integer.valueOf(com.reactnativekeyboardcontroller.c.f17189g), Integer.valueOf(com.reactnativekeyboardcontroller.c.f17188f))));

    public static final a a(Context context, int i10) {
        Intrinsics.checkNotNullParameter(context, "<this>");
        TypedArray obtainStyledAttributes = context.obtainStyledAttributes(i10, d.f17194a);
        Intrinsics.checkNotNullExpressionValue(obtainStyledAttributes, "obtainStyledAttributes(...)");
        try {
            return new a(obtainStyledAttributes.getColor(d.f17195b, -16777216), obtainStyledAttributes.getInt(d.f17196c, 0));
        } finally {
            obtainStyledAttributes.recycle();
        }
    }

    public static final int b(ThemedReactContext themedReactContext) {
        Intrinsics.checkNotNullParameter(themedReactContext, "<this>");
        String a10 = gm.a.a(themedReactContext);
        boolean c10 = gm.a.c(themedReactContext);
        km.a aVar = km.a.f32427a;
        km.a.c(aVar, "Skins", "Current IME: " + a10, null, 4, null);
        Pair pair = (Pair) f48871a.get(a10);
        if (pair == null) {
            pair = v.a(Integer.valueOf(com.reactnativekeyboardcontroller.c.f17185c), Integer.valueOf(com.reactnativekeyboardcontroller.c.f17184b));
        }
        int intValue = ((Number) pair.a()).intValue();
        int intValue2 = ((Number) pair.b()).intValue();
        if (c10 && Build.VERSION.SDK_INT > 29) {
            intValue = intValue2;
        }
        return a(themedReactContext, intValue).a();
    }

    public static final int c(int i10, int i11) {
        return Color.argb(Color.alpha(i10), kotlin.ranges.d.m(Color.red(i10) + i11, 0, SetSpanOperation.SPAN_MAX_PRIORITY), kotlin.ranges.d.m(Color.green(i10) + i11, 0, SetSpanOperation.SPAN_MAX_PRIORITY), kotlin.ranges.d.m(Color.blue(i10) + i11, 0, SetSpanOperation.SPAN_MAX_PRIORITY));
    }
}

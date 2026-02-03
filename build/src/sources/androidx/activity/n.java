package androidx.activity;

import android.content.res.Resources;
import android.graphics.Color;
import android.os.Build;
import android.view.View;
import android.view.Window;
import androidx.activity.b0;
import com.facebook.react.fabric.mounting.mountitems.IntBufferBatchMountItem;
import com.facebook.react.views.text.internal.span.SetSpanOperation;
import kotlin.jvm.functions.Function1;
import kotlin.jvm.internal.Intrinsics;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public abstract class n {

    /* renamed from: a  reason: collision with root package name */
    private static final int f871a = Color.argb(230, (int) SetSpanOperation.SPAN_MAX_PRIORITY, (int) SetSpanOperation.SPAN_MAX_PRIORITY, (int) SetSpanOperation.SPAN_MAX_PRIORITY);

    /* renamed from: b  reason: collision with root package name */
    private static final int f872b = Color.argb((int) IntBufferBatchMountItem.INSTRUCTION_UPDATE_LAYOUT, 27, 27, 27);

    /* renamed from: c  reason: collision with root package name */
    private static v f873c;

    public static final void a(ComponentActivity componentActivity, b0 statusBarStyle, b0 navigationBarStyle) {
        Intrinsics.checkNotNullParameter(componentActivity, "<this>");
        Intrinsics.checkNotNullParameter(statusBarStyle, "statusBarStyle");
        Intrinsics.checkNotNullParameter(navigationBarStyle, "navigationBarStyle");
        View decorView = componentActivity.getWindow().getDecorView();
        Intrinsics.checkNotNullExpressionValue(decorView, "window.decorView");
        Function1 c10 = statusBarStyle.c();
        Resources resources = decorView.getResources();
        Intrinsics.checkNotNullExpressionValue(resources, "view.resources");
        boolean booleanValue = ((Boolean) c10.invoke(resources)).booleanValue();
        Function1 c11 = navigationBarStyle.c();
        Resources resources2 = decorView.getResources();
        Intrinsics.checkNotNullExpressionValue(resources2, "view.resources");
        boolean booleanValue2 = ((Boolean) c11.invoke(resources2)).booleanValue();
        v vVar = f873c;
        if (vVar == null) {
            int i10 = Build.VERSION.SDK_INT;
            if (i10 >= 30) {
                vVar = new t();
            } else if (i10 >= 29) {
                vVar = new s();
            } else if (i10 >= 28) {
                vVar = new r();
            } else if (i10 >= 26) {
                vVar = new p();
            } else {
                vVar = new o();
            }
        }
        v vVar2 = vVar;
        Window window = componentActivity.getWindow();
        Intrinsics.checkNotNullExpressionValue(window, "window");
        vVar2.b(statusBarStyle, navigationBarStyle, window, decorView, booleanValue, booleanValue2);
        Window window2 = componentActivity.getWindow();
        Intrinsics.checkNotNullExpressionValue(window2, "window");
        vVar2.a(window2);
    }

    public static /* synthetic */ void b(ComponentActivity componentActivity, b0 b0Var, b0 b0Var2, int i10, Object obj) {
        if ((i10 & 1) != 0) {
            b0Var = b0.a.b(b0.f844e, 0, 0, null, 4, null);
        }
        if ((i10 & 2) != 0) {
            b0Var2 = b0.a.b(b0.f844e, f871a, f872b, null, 4, null);
        }
        a(componentActivity, b0Var, b0Var2);
    }
}

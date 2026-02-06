package xm;

import android.graphics.Point;
import com.facebook.react.uimanager.LayoutShadowNode;
import com.facebook.react.uimanager.ReactShadowNodeImpl;
import com.facebook.react.uimanager.ThemedReactContext;
import kotlin.jvm.internal.Intrinsics;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class d extends LayoutShadowNode {
    @Override // com.facebook.react.uimanager.ReactShadowNodeImpl, com.facebook.react.uimanager.ReactShadowNode
    public void addChildAt(ReactShadowNodeImpl child, int i10) {
        Intrinsics.checkNotNullParameter(child, "child");
        super.addChildAt(child, i10);
        ThemedReactContext themedContext = getThemedContext();
        Intrinsics.checkNotNullExpressionValue(themedContext, "getThemedContext(...)");
        Point b10 = lm.a.b(themedContext);
        child.setStyleWidth(b10.x);
        child.setStyleHeight(b10.y);
    }
}

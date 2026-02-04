package rm;

import android.content.res.Configuration;
import android.view.WindowInsets;
import com.facebook.react.uimanager.ThemedReactContext;
import com.facebook.react.views.view.ReactViewGroup;
import kotlin.jvm.internal.Intrinsics;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class b extends ReactViewGroup {

    /* renamed from: d  reason: collision with root package name */
    private final ThemedReactContext f48870d;

    /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
    public b(ThemedReactContext reactContext) {
        super(reactContext);
        Intrinsics.checkNotNullParameter(reactContext, "reactContext");
        this.f48870d = reactContext;
    }

    @Override // android.view.View
    public WindowInsets onApplyWindowInsets(WindowInsets windowInsets) {
        super.setBackgroundColor(c.b(this.f48870d));
        WindowInsets onApplyWindowInsets = super.onApplyWindowInsets(windowInsets);
        Intrinsics.checkNotNullExpressionValue(onApplyWindowInsets, "onApplyWindowInsets(...)");
        return onApplyWindowInsets;
    }

    /* JADX INFO: Access modifiers changed from: protected */
    @Override // com.facebook.react.views.view.ReactViewGroup, android.view.ViewGroup, android.view.View
    public void onAttachedToWindow() {
        super.onAttachedToWindow();
        super.setBackgroundColor(c.b(this.f48870d));
    }

    @Override // android.view.View
    protected void onConfigurationChanged(Configuration configuration) {
        super.onConfigurationChanged(configuration);
        super.setBackgroundColor(c.b(this.f48870d));
    }

    @Override // com.facebook.react.views.view.ReactViewGroup, android.view.View
    public void setBackgroundColor(int i10) {
    }
}

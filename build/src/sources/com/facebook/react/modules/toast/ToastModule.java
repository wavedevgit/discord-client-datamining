package com.facebook.react.modules.toast;

import android.widget.Toast;
import com.facebook.fbreact.specs.NativeToastAndroidSpec;
import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.bridge.UiThreadUtil;
import com.facebook.react.module.annotations.ReactModule;
import java.util.Map;
import kotlin.Metadata;
import kotlin.collections.o0;
import kotlin.jvm.internal.DefaultConstructorMarker;
import kotlin.jvm.internal.Intrinsics;
import org.jetbrains.annotations.NotNull;
import qr.v;
@ReactModule(name = "ToastAndroid")
@Metadata(d1 = {"\u00000\n\u0002\u0018\u0002\n\u0002\u0018\u0002\n\u0000\n\u0002\u0018\u0002\n\u0002\b\u0003\n\u0002\u0010$\n\u0002\u0010\u000e\n\u0002\u0010\u0000\n\u0000\n\u0002\u0010\u0002\n\u0002\b\u0002\n\u0002\u0010\u0006\n\u0002\b\u0007\b\u0001\u0018\u0000 \u00142\u00020\u0001:\u0001\u0014B\u000f\u0012\u0006\u0010\u0002\u001a\u00020\u0003¢\u0006\u0004\b\u0004\u0010\u0005J\u0014\u0010\u0006\u001a\u000e\u0012\u0004\u0012\u00020\b\u0012\u0004\u0012\u00020\t0\u0007H\u0014J\u001a\u0010\n\u001a\u00020\u000b2\b\u0010\f\u001a\u0004\u0018\u00010\b2\u0006\u0010\r\u001a\u00020\u000eH\u0016J\"\u0010\u000f\u001a\u00020\u000b2\b\u0010\f\u001a\u0004\u0018\u00010\b2\u0006\u0010\r\u001a\u00020\u000e2\u0006\u0010\u0010\u001a\u00020\u000eH\u0016J2\u0010\u0011\u001a\u00020\u000b2\b\u0010\f\u001a\u0004\u0018\u00010\b2\u0006\u0010\r\u001a\u00020\u000e2\u0006\u0010\u0010\u001a\u00020\u000e2\u0006\u0010\u0012\u001a\u00020\u000e2\u0006\u0010\u0013\u001a\u00020\u000eH\u0016¨\u0006\u0015"}, d2 = {"Lcom/facebook/react/modules/toast/ToastModule;", "Lcom/facebook/fbreact/specs/NativeToastAndroidSpec;", "reactContext", "Lcom/facebook/react/bridge/ReactApplicationContext;", "<init>", "(Lcom/facebook/react/bridge/ReactApplicationContext;)V", "getTypedExportedConstants", "", "", "", "show", "", "message", "durationDouble", "", "showWithGravity", "gravityDouble", "showWithGravityAndOffset", "xOffsetDouble", "yOffsetDouble", "Companion", "ReactAndroid_release"}, k = 1, mv = {2, 1, 0}, xi = 48)
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class ToastModule extends NativeToastAndroidSpec {
    @NotNull
    public static final Companion Companion = new Companion(null);
    @NotNull
    private static final String DURATION_LONG_KEY = "LONG";
    @NotNull
    private static final String DURATION_SHORT_KEY = "SHORT";
    @NotNull
    private static final String GRAVITY_BOTTOM_KEY = "BOTTOM";
    @NotNull
    private static final String GRAVITY_CENTER = "CENTER";
    @NotNull
    private static final String GRAVITY_TOP_KEY = "TOP";
    @NotNull
    public static final String NAME = "ToastAndroid";

    @Metadata(d1 = {"\u0000\u0014\n\u0002\u0018\u0002\n\u0002\u0010\u0000\n\u0002\b\u0003\n\u0002\u0010\u000e\n\u0002\b\u0006\b\u0086\u0003\u0018\u00002\u00020\u0001B\t\b\u0002¢\u0006\u0004\b\u0002\u0010\u0003R\u000e\u0010\u0004\u001a\u00020\u0005X\u0086T¢\u0006\u0002\n\u0000R\u000e\u0010\u0006\u001a\u00020\u0005X\u0082T¢\u0006\u0002\n\u0000R\u000e\u0010\u0007\u001a\u00020\u0005X\u0082T¢\u0006\u0002\n\u0000R\u000e\u0010\b\u001a\u00020\u0005X\u0082T¢\u0006\u0002\n\u0000R\u000e\u0010\t\u001a\u00020\u0005X\u0082T¢\u0006\u0002\n\u0000R\u000e\u0010\n\u001a\u00020\u0005X\u0082T¢\u0006\u0002\n\u0000¨\u0006\u000b"}, d2 = {"Lcom/facebook/react/modules/toast/ToastModule$Companion;", "", "<init>", "()V", "NAME", "", "DURATION_SHORT_KEY", "DURATION_LONG_KEY", "GRAVITY_TOP_KEY", "GRAVITY_BOTTOM_KEY", "GRAVITY_CENTER", "ReactAndroid_release"}, k = 1, mv = {2, 1, 0}, xi = 48)
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    public static final class Companion {
        public /* synthetic */ Companion(DefaultConstructorMarker defaultConstructorMarker) {
            this();
        }

        private Companion() {
        }
    }

    /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
    public ToastModule(@NotNull ReactApplicationContext reactContext) {
        super(reactContext);
        Intrinsics.checkNotNullParameter(reactContext, "reactContext");
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final void show$lambda$0(ToastModule toastModule, String str, int i10) {
        Toast.makeText(toastModule.getReactApplicationContext(), str, i10).show();
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final void showWithGravity$lambda$1(ToastModule toastModule, String str, int i10, int i11) {
        Toast makeText = Toast.makeText(toastModule.getReactApplicationContext(), str, i10);
        makeText.setGravity(i11, 0, 0);
        makeText.show();
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final void showWithGravityAndOffset$lambda$2(ToastModule toastModule, String str, int i10, int i11, int i12, int i13) {
        Toast makeText = Toast.makeText(toastModule.getReactApplicationContext(), str, i10);
        makeText.setGravity(i11, i12, i13);
        makeText.show();
    }

    @Override // com.facebook.fbreact.specs.NativeToastAndroidSpec
    @NotNull
    protected Map<String, Object> getTypedExportedConstants() {
        return o0.n(v.a(DURATION_SHORT_KEY, 0), v.a(DURATION_LONG_KEY, 1), v.a(GRAVITY_TOP_KEY, 49), v.a(GRAVITY_BOTTOM_KEY, 81), v.a(GRAVITY_CENTER, 17));
    }

    @Override // com.facebook.fbreact.specs.NativeToastAndroidSpec
    public void show(final String str, double d10) {
        final int i10 = (int) d10;
        UiThreadUtil.runOnUiThread(new Runnable() { // from class: com.facebook.react.modules.toast.c
            @Override // java.lang.Runnable
            public final void run() {
                ToastModule.show$lambda$0(ToastModule.this, str, i10);
            }
        });
    }

    @Override // com.facebook.fbreact.specs.NativeToastAndroidSpec
    public void showWithGravity(final String str, double d10, double d11) {
        final int i10 = (int) d10;
        final int i11 = (int) d11;
        UiThreadUtil.runOnUiThread(new Runnable() { // from class: com.facebook.react.modules.toast.b
            @Override // java.lang.Runnable
            public final void run() {
                ToastModule.showWithGravity$lambda$1(ToastModule.this, str, i10, i11);
            }
        });
    }

    @Override // com.facebook.fbreact.specs.NativeToastAndroidSpec
    public void showWithGravityAndOffset(final String str, double d10, double d11, double d12, double d13) {
        final int i10 = (int) d10;
        final int i11 = (int) d11;
        final int i12 = (int) d12;
        final int i13 = (int) d13;
        UiThreadUtil.runOnUiThread(new Runnable() { // from class: com.facebook.react.modules.toast.a
            @Override // java.lang.Runnable
            public final void run() {
                ToastModule.showWithGravityAndOffset$lambda$2(ToastModule.this, str, i10, i11, i12, i13);
            }
        });
    }
}

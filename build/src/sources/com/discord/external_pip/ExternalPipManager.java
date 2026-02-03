package com.discord.external_pip;

import android.app.Activity;
import android.app.PictureInPictureParams;
import android.os.Build;
import android.util.Rational;
import com.facebook.react.uimanager.ViewProps;
import kotlin.Metadata;
import kotlin.Result;
import kotlin.Unit;
import kotlin.jvm.functions.Function1;
import kotlin.jvm.internal.DefaultConstructorMarker;
import kotlin.jvm.internal.Intrinsics;
import org.jetbrains.annotations.NotNull;
@Metadata(d1 = {"\u0000>\n\u0002\u0018\u0002\n\u0002\u0010\u0000\n\u0002\b\u0002\n\u0002\u0018\u0002\n\u0000\n\u0002\u0010\u0002\n\u0002\b\u0002\n\u0002\u0010\u000b\n\u0002\b\u0006\n\u0002\u0010\b\n\u0002\b\u0004\n\u0002\u0018\u0002\n\u0002\u0018\u0002\n\u0002\b\u0004\n\u0002\u0018\u0002\n\u0002\b\u0004\b\u0000\u0018\u0000 \u001e2\u00020\u0001:\u0001\u001eB\u0007¢\u0006\u0004\b\u0002\u0010\u0003J\u0019\u0010\u0007\u001a\u00020\u00062\b\u0010\u0005\u001a\u0004\u0018\u00010\u0004H\u0002¢\u0006\u0004\b\u0007\u0010\bJ\u0015\u0010\u000b\u001a\u00020\u00062\u0006\u0010\n\u001a\u00020\t¢\u0006\u0004\b\u000b\u0010\fJ\u0017\u0010\u000e\u001a\u00020\t2\b\b\u0002\u0010\r\u001a\u00020\t¢\u0006\u0004\b\u000e\u0010\u000fJ'\u0010\u0013\u001a\u00020\u00062\b\u0010\u0005\u001a\u0004\u0018\u00010\u00042\u0006\u0010\u0011\u001a\u00020\u00102\u0006\u0010\u0012\u001a\u00020\u0010¢\u0006\u0004\b\u0013\u0010\u0014J=\u0010\u0018\u001a\u00020\u00062\b\u0010\u0005\u001a\u0004\u0018\u00010\u00042\b\b\u0002\u0010\r\u001a\u00020\t2\u001a\b\u0002\u0010\u0017\u001a\u0014\u0012\n\u0012\b\u0012\u0004\u0012\u00020\u00060\u0016\u0012\u0004\u0012\u00020\u00060\u0015¢\u0006\u0004\b\u0018\u0010\u0019R\u0016\u0010\n\u001a\u00020\t8\u0002@\u0002X\u0082\u000e¢\u0006\u0006\n\u0004\b\n\u0010\u001aR\u0016\u0010\u001c\u001a\u00020\u001b8\u0002@\u0002X\u0082\u000e¢\u0006\u0006\n\u0004\b\u001c\u0010\u001d¨\u0006\u001f"}, d2 = {"Lcom/discord/external_pip/ExternalPipManager;", "", "<init>", "()V", "Landroid/app/Activity;", "activity", "", "refreshPipMode", "(Landroid/app/Activity;)V", "", ViewProps.ENABLED, "setEnabled", "(Z)V", "force", "getEnabled", "(Z)Z", "", "numerator", "denominator", "setPipAspectRatio", "(Landroid/app/Activity;II)V", "Lkotlin/Function1;", "Lkotlin/Result;", "onResult", "enterPipMode", "(Landroid/app/Activity;ZLkotlin/jvm/functions/Function1;)V", "Z", "Landroid/util/Rational;", ViewProps.ASPECT_RATIO, "Landroid/util/Rational;", "Companion", "external_pip_release"}, k = 1, mv = {2, 1, 0}, xi = 48)
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class ExternalPipManager {
    private static final boolean CAN_PIP;
    @NotNull
    public static final Companion Companion = new Companion(null);
    @NotNull
    private Rational aspectRatio = new Rational(1, 1);
    private boolean enabled;

    @Metadata(d1 = {"\u0000\u001a\n\u0002\u0018\u0002\n\u0002\u0010\u0000\n\u0002\b\u0003\n\u0002\u0010\u000b\n\u0000\n\u0002\u0018\u0002\n\u0002\b\u0003\b\u0086\u0003\u0018\u00002\u00020\u0001B\t\b\u0002¢\u0006\u0004\b\u0002\u0010\u0003J\u0014\u0010\u0006\u001a\u00020\u0007*\u00020\u00072\u0006\u0010\b\u001a\u00020\u0005H\u0002J\b\u0010\t\u001a\u00020\u0005H\u0007R\u0010\u0010\u0004\u001a\u00020\u00058\u0002X\u0083\u0004¢\u0006\u0002\n\u0000¨\u0006\n"}, d2 = {"Lcom/discord/external_pip/ExternalPipManager$Companion;", "", "<init>", "()V", "CAN_PIP", "", "setSeamlessResizeEnabledCompat", "Landroid/app/PictureInPictureParams$Builder;", ViewProps.ENABLED, "isSupported", "external_pip_release"}, k = 1, mv = {2, 1, 0}, xi = 48)
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    public static final class Companion {
        public /* synthetic */ Companion(DefaultConstructorMarker defaultConstructorMarker) {
            this();
        }

        /* JADX INFO: Access modifiers changed from: private */
        public final PictureInPictureParams.Builder setSeamlessResizeEnabledCompat(PictureInPictureParams.Builder builder, boolean z10) {
            if (isSupported()) {
                builder = builder.setSeamlessResizeEnabled(z10);
            }
            Intrinsics.checkNotNull(builder);
            return builder;
        }

        public final boolean isSupported() {
            if (Build.VERSION.SDK_INT >= 31) {
                return true;
            }
            return false;
        }

        private Companion() {
        }
    }

    static {
        boolean z10;
        if (Build.VERSION.SDK_INT >= 26) {
            z10 = true;
        } else {
            z10 = false;
        }
        CAN_PIP = z10;
    }

    /* JADX WARN: Multi-variable type inference failed */
    public static /* synthetic */ void enterPipMode$default(ExternalPipManager externalPipManager, Activity activity, boolean z10, Function1 function1, int i10, Object obj) {
        if ((i10 & 2) != 0) {
            z10 = false;
        }
        if ((i10 & 4) != 0) {
            function1 = new Function1() { // from class: com.discord.external_pip.c
                @Override // kotlin.jvm.functions.Function1
                public final Object invoke(Object obj2) {
                    Unit enterPipMode$lambda$0;
                    enterPipMode$lambda$0 = ExternalPipManager.enterPipMode$lambda$0((Result) obj2);
                    return enterPipMode$lambda$0;
                }
            };
        }
        externalPipManager.enterPipMode(activity, z10, function1);
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit enterPipMode$lambda$0(Result result) {
        return Unit.f33074a;
    }

    public static /* synthetic */ boolean getEnabled$default(ExternalPipManager externalPipManager, boolean z10, int i10, Object obj) {
        if ((i10 & 1) != 0) {
            z10 = false;
        }
        return externalPipManager.getEnabled(z10);
    }

    private final void refreshPipMode(Activity activity) {
        if (CAN_PIP && activity != null && activity.isInPictureInPictureMode()) {
            enterPipMode$default(this, activity, false, null, 6, null);
        }
    }

    public final void enterPipMode(Activity activity, boolean z10, @NotNull Function1<? super Result, Unit> onResult) {
        Boolean valueOf;
        Intrinsics.checkNotNullParameter(onResult, "onResult");
        if ((this.enabled || z10) && CAN_PIP) {
            if (activity != null) {
                try {
                    Companion companion = Companion;
                    b.a();
                    PictureInPictureParams.Builder aspectRatio = a.a().setAspectRatio(this.aspectRatio);
                    Intrinsics.checkNotNullExpressionValue(aspectRatio, "setAspectRatio(...)");
                    valueOf = Boolean.valueOf(activity.enterPictureInPictureMode(companion.setSeamlessResizeEnabledCompat(aspectRatio, false).build()));
                } catch (Exception e10) {
                    Result.a aVar = Result.f33071e;
                    onResult.invoke(Result.a(Result.b(kotlin.c.a(e10))));
                    return;
                }
            } else {
                valueOf = null;
            }
            if (Intrinsics.areEqual(valueOf, Boolean.TRUE)) {
                Result.a aVar2 = Result.f33071e;
                onResult.invoke(Result.a(Result.b(Unit.f33074a)));
                return;
            }
            Result.a aVar3 = Result.f33071e;
            onResult.invoke(Result.a(Result.b(kotlin.c.a(new Exception("Unable to enter picture in picture mode.")))));
            return;
        }
        Result.a aVar4 = Result.f33071e;
        onResult.invoke(Result.a(Result.b(kotlin.c.a(new Exception("Disabled or unsupported.")))));
    }

    public final boolean getEnabled(boolean z10) {
        if ((this.enabled || z10) && CAN_PIP) {
            return true;
        }
        return false;
    }

    public final void setEnabled(boolean z10) {
        this.enabled = z10;
    }

    public final void setPipAspectRatio(Activity activity, int i10, int i11) {
        Rational rational = new Rational(i10, i11);
        if (Intrinsics.areEqual(this.aspectRatio, rational)) {
            return;
        }
        this.aspectRatio = rational;
        refreshPipMode(activity);
    }
}

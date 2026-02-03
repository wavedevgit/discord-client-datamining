package com.discord.rlottie;

import android.annotation.SuppressLint;
import android.content.Context;
import android.os.Build;
import android.util.AttributeSet;
import android.view.Display;
import android.view.View;
import android.view.WindowManager;
import androidx.appcompat.widget.m;
import com.discord.rlottie.RLottieDrawable;
import com.facebook.react.uimanager.ViewProps;
import com.facebook.react.views.progressbar.ReactProgressBarViewManager;
import com.rnlineargradient.LinearGradientManager;
import java.io.File;
import java.util.HashMap;
import java.util.Map;
import jr.w;
import kotlin.Metadata;
import kotlin.jvm.internal.DefaultConstructorMarker;
import kotlin.jvm.internal.Intrinsics;
import org.jetbrains.annotations.NotNull;
@Metadata(d1 = {"\u0000v\n\u0002\u0018\u0002\n\u0002\u0018\u0002\n\u0002\u0018\u0002\n\u0002\b\u0003\n\u0002\u0018\u0002\n\u0002\b\u0002\n\u0002\u0010\b\n\u0002\b\u0002\n\u0002\u0018\u0002\n\u0002\b\u0002\n\u0002\u0010\u000e\n\u0002\b\u0002\n\u0002\u0010\u0002\n\u0002\b\u0002\n\u0002\u0010\u0011\n\u0002\b\n\n\u0002\u0010\u0015\n\u0000\n\u0002\u0018\u0002\n\u0002\b\u0002\n\u0002\u0018\u0002\n\u0002\b\u0007\n\u0002\u0010\u0007\n\u0002\b\u0005\n\u0002\u0018\u0002\n\u0002\b\u0002\n\u0002\u0018\u0002\n\u0002\b\u0003\n\u0002\u0010\u000b\n\u0002\b\u0005\b\u0016\u0018\u00002\u00020\u0001B\u0011\b\u0016\u0012\u0006\u0010\u0003\u001a\u00020\u0002¢\u0006\u0004\b\u0004\u0010\u0005B\u001b\b\u0016\u0012\u0006\u0010\u0003\u001a\u00020\u0002\u0012\b\u0010\u0007\u001a\u0004\u0018\u00010\u0006¢\u0006\u0004\b\u0004\u0010\bB%\b\u0016\u0012\u0006\u0010\u0003\u001a\u00020\u0002\u0012\b\u0010\u0007\u001a\u0004\u0018\u00010\u0006\u0012\b\b\u0002\u0010\n\u001a\u00020\t¢\u0006\u0004\b\u0004\u0010\u000bJ\u0013\u0010\r\u001a\u00020\f*\u00020\u0002H\u0003¢\u0006\u0004\b\r\u0010\u000eJ\u001d\u0010\u0013\u001a\u00020\u00122\u0006\u0010\u0010\u001a\u00020\u000f2\u0006\u0010\u0011\u001a\u00020\t¢\u0006\u0004\b\u0013\u0010\u0014J\u001d\u0010\u0017\u001a\u00020\u00122\u000e\u0010\u0016\u001a\n\u0012\u0004\u0012\u00020\t\u0018\u00010\u0015¢\u0006\u0004\b\u0017\u0010\u0018J%\u0010\u001c\u001a\u00020\u00122\u0006\u0010\u0019\u001a\u00020\t2\u0006\u0010\u001a\u001a\u00020\t2\u0006\u0010\u001b\u001a\u00020\t¢\u0006\u0004\b\u001c\u0010\u001dJ=\u0010\u001c\u001a\u00020\u00122\b\b\u0001\u0010\u0019\u001a\u00020\t2\u0006\u0010\u001e\u001a\u00020\t2\u0006\u0010\u001f\u001a\u00020\t2\n\b\u0002\u0010!\u001a\u0004\u0018\u00010 2\b\b\u0002\u0010#\u001a\u00020\"¢\u0006\u0004\b\u001c\u0010$J7\u0010\u001c\u001a\u00020\u00122\u0006\u0010\u0003\u001a\u00020\u00022\u0006\u0010&\u001a\u00020%2\u0006\u0010\u001e\u001a\u00020\t2\u0006\u0010\u001f\u001a\u00020\t2\b\b\u0002\u0010#\u001a\u00020\"¢\u0006\u0004\b\u001c\u0010'J\u000f\u0010(\u001a\u00020\u0012H\u0014¢\u0006\u0004\b(\u0010)J\u000f\u0010*\u001a\u00020\u0012H\u0014¢\u0006\u0004\b*\u0010)J\u0015\u0010+\u001a\u00020\u00122\u0006\u0010#\u001a\u00020\"¢\u0006\u0004\b+\u0010,J\u0015\u0010/\u001a\u00020\u00122\u0006\u0010.\u001a\u00020-¢\u0006\u0004\b/\u00100J\r\u00101\u001a\u00020\u0012¢\u0006\u0004\b1\u0010)J\r\u00102\u001a\u00020\u0012¢\u0006\u0004\b2\u0010)R$\u00104\u001a\u0010\u0012\u0004\u0012\u00020\u000f\u0012\u0004\u0012\u00020\t\u0018\u0001038\u0002@\u0002X\u0082\u000e¢\u0006\u0006\n\u0004\b4\u00105R\u0018\u00107\u001a\u0004\u0018\u0001068\u0002@\u0002X\u0082\u000e¢\u0006\u0006\n\u0004\b7\u00108R\u0016\u0010#\u001a\u00020\"8\u0002@\u0002X\u0082\u000e¢\u0006\u0006\n\u0004\b#\u00109R\u0016\u0010;\u001a\u00020:8\u0002@\u0002X\u0082\u000e¢\u0006\u0006\n\u0004\b;\u0010<R\u0016\u0010=\u001a\u00020:8\u0002@\u0002X\u0082\u000e¢\u0006\u0006\n\u0004\b=\u0010<R\u0016\u0010>\u001a\u00020:8\u0002@\u0002X\u0082\u000e¢\u0006\u0006\n\u0004\b>\u0010<¨\u0006?"}, d2 = {"Lcom/discord/rlottie/RLottieImageView;", "Landroidx/appcompat/widget/m;", "Landroid/content/Context;", "context", "<init>", "(Landroid/content/Context;)V", "Landroid/util/AttributeSet;", "attrs", "(Landroid/content/Context;Landroid/util/AttributeSet;)V", "", "defStyleAttr", "(Landroid/content/Context;Landroid/util/AttributeSet;I)V", "Landroid/view/Display;", "getDisplayCompat", "(Landroid/content/Context;)Landroid/view/Display;", "", "layer", ViewProps.COLOR, "", "setLayerColor", "(Ljava/lang/String;I)V", "", LinearGradientManager.PROP_COLORS, "replaceColors", "([Ljava/lang/Integer;)V", "resId", "w", "h", "setAnimation", "(III)V", "width", "height", "", "colorReplacement", "Lcom/discord/rlottie/RLottieDrawable$PlaybackMode;", "playbackMode", "(III[ILcom/discord/rlottie/RLottieDrawable$PlaybackMode;)V", "Ljava/io/File;", "file", "(Landroid/content/Context;Ljava/io/File;IILcom/discord/rlottie/RLottieDrawable$PlaybackMode;)V", "onAttachedToWindow", "()V", "onDetachedFromWindow", "setPlaybackMode", "(Lcom/discord/rlottie/RLottieDrawable$PlaybackMode;)V", "", ReactProgressBarViewManager.PROP_PROGRESS, "setProgress", "(F)V", "playAnimation", "pauseAnimation", "Ljava/util/HashMap;", "layerColors", "Ljava/util/HashMap;", "Lcom/discord/rlottie/RLottieDrawable;", "drawable", "Lcom/discord/rlottie/RLottieDrawable;", "Lcom/discord/rlottie/RLottieDrawable$PlaybackMode;", "", "attachedToWindow", "Z", "playing", "startOnAttach", "rlottie_release"}, k = 1, mv = {1, 4, 0})
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public class RLottieImageView extends m {
    private HashMap _$_findViewCache;
    private boolean attachedToWindow;
    private RLottieDrawable drawable;
    private HashMap<String, Integer> layerColors;
    private RLottieDrawable.PlaybackMode playbackMode;
    private boolean playing;
    private boolean startOnAttach;

    /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
    public RLottieImageView(@NotNull Context context) {
        super(context);
        Intrinsics.checkParameterIsNotNull(context, "context");
        this.playbackMode = RLottieDrawable.PlaybackMode.FREEZE;
    }

    @SuppressLint({"AnnotateVersionCheck"})
    private final Display getDisplayCompat(@NotNull Context context) {
        if (Build.VERSION.SDK_INT >= 30) {
            Display display = context.getDisplay();
            if (display == null) {
                Intrinsics.throwNpe();
            }
            Intrinsics.checkExpressionValueIsNotNull(display, "display!!");
            return display;
        }
        Object systemService = context.getSystemService("window");
        if (systemService != null) {
            Display defaultDisplay = ((WindowManager) systemService).getDefaultDisplay();
            Intrinsics.checkExpressionValueIsNotNull(defaultDisplay, "(getSystemService(Contex…owManager).defaultDisplay");
            return defaultDisplay;
        }
        throw new w("null cannot be cast to non-null type android.view.WindowManager");
    }

    public static /* synthetic */ void setAnimation$default(RLottieImageView rLottieImageView, int i10, int i11, int i12, int[] iArr, RLottieDrawable.PlaybackMode playbackMode, int i13, Object obj) {
        if (obj != null) {
            throw new UnsupportedOperationException("Super calls with default arguments not supported in this target, function: setAnimation");
        }
        if ((i13 & 8) != 0) {
            iArr = null;
        }
        int[] iArr2 = iArr;
        if ((i13 & 16) != 0) {
            playbackMode = RLottieDrawable.PlaybackMode.LOOP;
        }
        rLottieImageView.setAnimation(i10, i11, i12, iArr2, playbackMode);
    }

    public void _$_clearFindViewByIdCache() {
        HashMap hashMap = this._$_findViewCache;
        if (hashMap != null) {
            hashMap.clear();
        }
    }

    public View _$_findCachedViewById(int i10) {
        if (this._$_findViewCache == null) {
            this._$_findViewCache = new HashMap();
        }
        View view = (View) this._$_findViewCache.get(Integer.valueOf(i10));
        if (view == null) {
            View findViewById = findViewById(i10);
            this._$_findViewCache.put(Integer.valueOf(i10), findViewById);
            return findViewById;
        }
        return view;
    }

    /* JADX INFO: Access modifiers changed from: protected */
    @Override // android.widget.ImageView, android.view.View
    public void onAttachedToWindow() {
        RLottieDrawable rLottieDrawable;
        super.onAttachedToWindow();
        this.attachedToWindow = true;
        if (this.playing && (rLottieDrawable = this.drawable) != null) {
            rLottieDrawable.start();
        }
    }

    /* JADX INFO: Access modifiers changed from: protected */
    @Override // android.widget.ImageView, android.view.View
    public void onDetachedFromWindow() {
        super.onDetachedFromWindow();
        this.attachedToWindow = false;
        RLottieDrawable rLottieDrawable = this.drawable;
        if (rLottieDrawable != null) {
            rLottieDrawable.stop();
        }
    }

    public final void pauseAnimation() {
        RLottieDrawable rLottieDrawable = this.drawable;
        if (rLottieDrawable != null) {
            this.playing = false;
            if (this.attachedToWindow) {
                if (rLottieDrawable != null) {
                    rLottieDrawable.stop();
                    return;
                }
                return;
            }
            this.startOnAttach = false;
        }
    }

    public final void playAnimation() {
        RLottieDrawable rLottieDrawable = this.drawable;
        if (rLottieDrawable != null) {
            this.playing = true;
            if (this.attachedToWindow) {
                if (rLottieDrawable != null) {
                    rLottieDrawable.start();
                    return;
                }
                return;
            }
            this.startOnAttach = true;
        }
    }

    public final void replaceColors(Integer[] numArr) {
        RLottieDrawable rLottieDrawable = this.drawable;
        if (rLottieDrawable != null) {
            rLottieDrawable.replaceColors(numArr);
        }
    }

    public final void setAnimation(int i10, int i11, int i12) {
        setAnimation$default(this, i10, i11, i12, (int[]) null, (RLottieDrawable.PlaybackMode) null, 16, (Object) null);
    }

    public final void setLayerColor(@NotNull String layer, int i10) {
        Intrinsics.checkParameterIsNotNull(layer, "layer");
        if (this.layerColors == null) {
            this.layerColors = new HashMap<>();
        }
        HashMap<String, Integer> hashMap = this.layerColors;
        if (hashMap == null) {
            Intrinsics.throwNpe();
        }
        hashMap.put(layer, Integer.valueOf(i10));
        RLottieDrawable rLottieDrawable = this.drawable;
        if (rLottieDrawable != null) {
            rLottieDrawable.setLayerColor(layer, i10);
        }
    }

    public final void setPlaybackMode(@NotNull RLottieDrawable.PlaybackMode playbackMode) {
        Intrinsics.checkParameterIsNotNull(playbackMode, "playbackMode");
        this.playbackMode = playbackMode;
        RLottieDrawable rLottieDrawable = this.drawable;
        if (rLottieDrawable != null) {
            rLottieDrawable.setPlaybackMode(playbackMode);
        }
    }

    public final void setProgress(float f10) {
        RLottieDrawable rLottieDrawable = this.drawable;
        if (rLottieDrawable != null) {
            rLottieDrawable.setProgress(f10);
        }
    }

    public final void setAnimation(int i10, int i11, int i12, int[] iArr, @NotNull RLottieDrawable.PlaybackMode playbackMode) {
        Intrinsics.checkParameterIsNotNull(playbackMode, "playbackMode");
        Context context = getContext();
        Intrinsics.checkExpressionValueIsNotNull(context, "context");
        String valueOf = String.valueOf(i10);
        Context context2 = getContext();
        Intrinsics.checkExpressionValueIsNotNull(context2, "context");
        RLottieDrawable rLottieDrawable = new RLottieDrawable(context, i10, valueOf, i11, i12, getDisplayCompat(context2).getRefreshRate(), false, iArr);
        this.drawable = rLottieDrawable;
        this.playbackMode = playbackMode;
        rLottieDrawable.setPlaybackMode(playbackMode);
        HashMap<String, Integer> hashMap = this.layerColors;
        if (hashMap != null) {
            RLottieDrawable rLottieDrawable2 = this.drawable;
            if (rLottieDrawable2 != null) {
                rLottieDrawable2.beginApplyLayerColors();
            }
            for (Map.Entry<String, Integer> entry : hashMap.entrySet()) {
                String key = entry.getKey();
                int intValue = entry.getValue().intValue();
                RLottieDrawable rLottieDrawable3 = this.drawable;
                if (rLottieDrawable3 != null) {
                    rLottieDrawable3.setLayerColor(key, intValue);
                }
            }
            RLottieDrawable rLottieDrawable4 = this.drawable;
            if (rLottieDrawable4 != null) {
                rLottieDrawable4.commitApplyLayerColors();
            }
        }
        RLottieDrawable rLottieDrawable5 = this.drawable;
        if (rLottieDrawable5 != null) {
            rLottieDrawable5.setAllowDecodeSingleFrame(true);
        }
        setImageDrawable(this.drawable);
    }

    /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
    public RLottieImageView(@NotNull Context context, AttributeSet attributeSet) {
        super(context, attributeSet);
        Intrinsics.checkParameterIsNotNull(context, "context");
        this.playbackMode = RLottieDrawable.PlaybackMode.FREEZE;
    }

    public static /* synthetic */ void setAnimation$default(RLottieImageView rLottieImageView, Context context, File file, int i10, int i11, RLottieDrawable.PlaybackMode playbackMode, int i12, Object obj) {
        if (obj != null) {
            throw new UnsupportedOperationException("Super calls with default arguments not supported in this target, function: setAnimation");
        }
        if ((i12 & 16) != 0) {
            playbackMode = RLottieDrawable.PlaybackMode.LOOP;
        }
        rLottieImageView.setAnimation(context, file, i10, i11, playbackMode);
    }

    public /* synthetic */ RLottieImageView(Context context, AttributeSet attributeSet, int i10, int i11, DefaultConstructorMarker defaultConstructorMarker) {
        this(context, attributeSet, (i11 & 4) != 0 ? 0 : i10);
    }

    /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
    public RLottieImageView(@NotNull Context context, AttributeSet attributeSet, int i10) {
        super(context, attributeSet, i10);
        Intrinsics.checkParameterIsNotNull(context, "context");
        this.playbackMode = RLottieDrawable.PlaybackMode.FREEZE;
    }

    public final void setAnimation(@NotNull Context context, @NotNull File file, int i10, int i11, @NotNull RLottieDrawable.PlaybackMode playbackMode) {
        Intrinsics.checkParameterIsNotNull(context, "context");
        Intrinsics.checkParameterIsNotNull(file, "file");
        Intrinsics.checkParameterIsNotNull(playbackMode, "playbackMode");
        RLottieDrawable rLottieDrawable = new RLottieDrawable(file, i10, i11, false, true, getDisplayCompat(context).getRefreshRate(), null, 64, null);
        this.drawable = rLottieDrawable;
        this.playbackMode = playbackMode;
        rLottieDrawable.setPlaybackMode(playbackMode);
        RLottieDrawable rLottieDrawable2 = this.drawable;
        if (rLottieDrawable2 != null) {
            rLottieDrawable2.setAllowDecodeSingleFrame(true);
        }
        setImageDrawable(this.drawable);
    }
}

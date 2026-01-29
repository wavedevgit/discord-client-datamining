package com.discord.chat.presentation.list;

import android.animation.Animator;
import android.animation.PropertyValuesHolder;
import android.animation.ValueAnimator;
import android.content.Context;
import android.graphics.Canvas;
import android.graphics.Color;
import android.graphics.Paint;
import android.graphics.Path;
import android.graphics.PorterDuff;
import android.graphics.PorterDuffColorFilter;
import android.graphics.Rect;
import android.graphics.Region;
import android.graphics.drawable.Drawable;
import android.os.Build;
import android.os.Handler;
import android.util.Pair;
import android.view.View;
import android.view.animation.AccelerateDecelerateInterpolator;
import android.view.animation.PathInterpolator;
import androidx.recyclerview.widget.RecyclerView;
import com.discord.chat.R;
import com.discord.device.utils.DeviceReducedMotion;
import com.discord.misc.utilities.drawable.GetDrawableCompatKt;
import com.discord.misc.utilities.size.SizeUtilsKt;
import com.discord.theme.ThemeManager;
import com.discord.theme.ThemeManagerKt;
import com.discord.theme.utils.ColorUtilsKt;
import com.facebook.react.views.progressbar.ReactProgressBarViewManager;
import com.facebook.react.views.text.internal.span.SetSpanOperation;
import kotlin.Metadata;
import kotlin.Unit;
import kotlin.jvm.functions.Function0;
import kotlin.jvm.internal.DefaultConstructorMarker;
import kotlin.jvm.internal.Intrinsics;
import kotlin.jvm.internal.SourceDebugExtension;
import org.jetbrains.annotations.NotNull;
@Metadata(d1 = {"\u0000|\n\u0002\u0018\u0002\n\u0002\u0018\u0002\n\u0000\n\u0002\u0018\u0002\n\u0000\n\u0002\u0018\u0002\n\u0002\u0010\u0002\n\u0002\b\u0004\n\u0002\u0018\u0002\n\u0002\b\u0002\n\u0002\u0018\u0002\n\u0000\n\u0002\u0018\u0002\n\u0000\n\u0002\u0010\u0007\n\u0000\n\u0002\u0018\u0002\n\u0002\b\u0004\n\u0002\u0010\b\n\u0000\n\u0002\u0010\u000b\n\u0002\b\u0006\n\u0002\u0018\u0002\n\u0002\b\u0003\n\u0002\u0018\u0002\n\u0002\b\u0003\n\u0002\u0018\u0002\n\u0002\b\u000b\n\u0002\u0010\t\n\u0002\b\u0004\n\u0002\u0018\u0002\n\u0002\b\u0004\n\u0002\u0018\u0002\n\u0002\b\u0014\b\u0000\u0018\u0000 S2\u00020\u0001:\u0001SB+\u0012\u0006\u0010\u0002\u001a\u00020\u0003\u0012\f\u0010\u0004\u001a\b\u0012\u0004\u0012\u00020\u00060\u0005\u0012\f\u0010\u0007\u001a\b\u0012\u0004\u0012\u00020\u00060\u0005¢\u0006\u0004\b\b\u0010\tJ\b\u0010'\u001a\u00020\u0012H\u0002J\u0018\u0010(\u001a\u00020\u00192\u0006\u0010)\u001a\u00020*2\u0006\u0010+\u001a\u00020\u000eH\u0016J \u0010,\u001a\u00020\u001b2\u0006\u0010)\u001a\u00020*2\u0006\u0010+\u001a\u00020\u000e2\u0006\u0010-\u001a\u00020\u000eH\u0016J\u001a\u0010.\u001a\u00020\u00062\b\u0010+\u001a\u0004\u0018\u00010\u000e2\u0006\u0010/\u001a\u00020\u0019H\u0016J\b\u00100\u001a\u00020\u001bH\u0016J\b\u00101\u001a\u00020\u001bH\u0016J\u0018\u00102\u001a\u00020\u00062\u0006\u0010+\u001a\u00020\u000e2\u0006\u00103\u001a\u00020\u0019H\u0016J\u001a\u00104\u001a\u00020\u00062\u0006\u0010)\u001a\u00020*2\b\u0010+\u001a\u0004\u0018\u00010\u000eH\u0016J(\u00105\u001a\u0002062\u0006\u0010)\u001a\u00020*2\u0006\u00107\u001a\u00020\u00192\u0006\u00108\u001a\u00020\u00122\u0006\u00109\u001a\u00020\u0012H\u0016J$\u0010:\u001a\u000e\u0012\u0004\u0012\u00020\u0012\u0012\u0004\u0012\u00020\u00120;2\u0006\u0010<\u001a\u00020\u00122\u0006\u0010=\u001a\u00020\u0012H\u0016J@\u0010>\u001a\u00020\u00062\u0006\u0010?\u001a\u00020@2\u0006\u0010)\u001a\u00020*2\u0006\u0010+\u001a\u00020\u000e2\u0006\u0010\u0011\u001a\u00020\u00122\u0006\u0010A\u001a\u00020\u00122\u0006\u0010/\u001a\u00020\u00192\u0006\u0010B\u001a\u00020\u001bH\u0016J\u0010\u0010C\u001a\u00020\u001b2\u0006\u0010+\u001a\u00020\u000eH\u0002J\u0018\u0010D\u001a\u00020\u00062\u0006\u0010)\u001a\u00020*2\u0006\u0010+\u001a\u00020\u000eH\u0002J\u0010\u0010E\u001a\u00020\u00062\u0006\u0010)\u001a\u00020*H\u0002J\u0010\u0010F\u001a\u00020\u00062\u0006\u0010)\u001a\u00020*H\u0002J\u0010\u0010G\u001a\u00020\u00062\u0006\u0010+\u001a\u00020\u000eH\u0002J\u0018\u0010H\u001a\u00020\u00062\u0006\u0010)\u001a\u00020*2\u0006\u0010+\u001a\u00020\u000eH\u0002J\u0018\u0010I\u001a\u00020\u00122\u0006\u0010J\u001a\u00020\u00122\u0006\u0010K\u001a\u00020\u0012H\u0002J\u0010\u0010L\u001a\u00020\u00122\u0006\u0010K\u001a\u00020\u0012H\u0002J\u0010\u0010M\u001a\u00020\u00122\u0006\u0010K\u001a\u00020\u0012H\u0002J\u0010\u0010N\u001a\u00020\u00122\u0006\u0010K\u001a\u00020\u0012H\u0002J\u0010\u0010O\u001a\u00020\u00062\u0006\u0010P\u001a\u00020@H\u0002J\u0018\u0010Q\u001a\u00020\u00062\u0006\u0010)\u001a\u00020*2\u0006\u0010+\u001a\u00020\u000eH\u0002J\b\u0010R\u001a\u00020\u0006H\u0002R\u000e\u0010\u0002\u001a\u00020\u0003X\u0082\u0004¢\u0006\u0002\n\u0000R\u0014\u0010\u0004\u001a\b\u0012\u0004\u0012\u00020\u00060\u0005X\u0082\u0004¢\u0006\u0002\n\u0000R\u0014\u0010\u0007\u001a\b\u0012\u0004\u0012\u00020\u00060\u0005X\u0082\u0004¢\u0006\u0002\n\u0000R\u0010\u0010\n\u001a\u0004\u0018\u00010\u000bX\u0082\u000e¢\u0006\u0002\n\u0000R\u0010\u0010\f\u001a\u0004\u0018\u00010\u000bX\u0082\u000e¢\u0006\u0002\n\u0000R\u0010\u0010\r\u001a\u0004\u0018\u00010\u000eX\u0082\u000e¢\u0006\u0002\n\u0000R\u000e\u0010\u000f\u001a\u00020\u0010X\u0082.¢\u0006\u0002\n\u0000R\u000e\u0010\u0011\u001a\u00020\u0012X\u0082\u000e¢\u0006\u0002\n\u0000R\u0010\u0010\u0013\u001a\u0004\u0018\u00010\u0014X\u0082\u000e¢\u0006\u0002\n\u0000R\u000e\u0010\u0015\u001a\u00020\u0012X\u0082\u000e¢\u0006\u0002\n\u0000R\u0010\u0010\u0016\u001a\u0004\u0018\u00010\u0014X\u0082\u000e¢\u0006\u0002\n\u0000R\u000e\u0010\u0017\u001a\u00020\u0012X\u0082\u000e¢\u0006\u0002\n\u0000R\u000e\u0010\u0018\u001a\u00020\u0019X\u0082\u000e¢\u0006\u0002\n\u0000R\u000e\u0010\u001a\u001a\u00020\u001bX\u0082\u000e¢\u0006\u0002\n\u0000R\u000e\u0010\u001c\u001a\u00020\u001bX\u0082\u000e¢\u0006\u0002\n\u0000R\u000e\u0010\u001d\u001a\u00020\u001bX\u0082\u000e¢\u0006\u0002\n\u0000R\u000e\u0010\u001e\u001a\u00020\u001bX\u0082\u000e¢\u0006\u0002\n\u0000R\u000e\u0010\u001f\u001a\u00020\u001bX\u0082\u000e¢\u0006\u0002\n\u0000R\u000e\u0010 \u001a\u00020\u001bX\u0082\u000e¢\u0006\u0002\n\u0000R\u000e\u0010!\u001a\u00020\"X\u0082\u000e¢\u0006\u0002\n\u0000R\u0010\u0010#\u001a\u0004\u0018\u00010\u0014X\u0082\u000e¢\u0006\u0002\n\u0000R\u000e\u0010$\u001a\u00020\u0012X\u0082\u000e¢\u0006\u0002\n\u0000R\u000e\u0010%\u001a\u00020&X\u0082\u0004¢\u0006\u0002\n\u0000¨\u0006T"}, d2 = {"Lcom/discord/chat/presentation/list/SwipeHelper;", "Lcom/discord/chat/presentation/list/ChatListCallback;", "context", "Landroid/content/Context;", "onStart", "Lkotlin/Function0;", "", "onEnd", "<init>", "(Landroid/content/Context;Lkotlin/jvm/functions/Function0;Lkotlin/jvm/functions/Function0;)V", "replyIcon", "Landroid/graphics/drawable/Drawable;", "editIcon", "currentItemViewHolder", "Landroidx/recyclerview/widget/RecyclerView$ViewHolder;", "mView", "Landroid/view/View;", "dX", "", "easterEggArrowAnimator", "Landroid/animation/ValueAnimator;", "easterEggArrowScale", "easterEggArrowRotationAnimator", "easterEggArrowRotationDegrees", "easterEggPullCount", "", "easterEggIsAnimating", "", "swipeBack", "shouldPerformHapticFeedback", "shouldTriggerReply", "isActive", "isCompleted", "actionType", "Lcom/discord/chat/presentation/list/SwipeActionType;", "editCircleScaleAnimator", "editCircleScale", "handler", "Landroid/os/Handler;", "getSwipeProgress", "getMovementFlags", "recyclerView", "Landroidx/recyclerview/widget/RecyclerView;", "viewHolder", "onMove", "target", "onSelectedChanged", "actionState", "shouldReturnToOriginalPosition", "shouldUseSpringyExit", "onSwiped", "direction", "onReleased", "getAnimationDuration", "", "animationType", "animateDx", "animateDy", "getEffectiveDxDy", "Landroid/util/Pair;", "rawDx", "rawDy", "onChildDraw", "c", "Landroid/graphics/Canvas;", "dY", "isCurrentlyActive", "shouldStartEditEntrance", "updateEditTransition", "triggerEditExitTransition", "triggerEditEntranceTransition", "updateShadow", "easterEggStartAnimation", "getLeftBevelRadius", ReactProgressBarViewManager.PROP_PROGRESS, "contentHeight", "getArrowContainerBaseSize", "getArrowContainerGrowthRatio", "getArrowIconBaseSize", "drawContextArea", "canvas", "updateHapticFeedbackTrigger", "updateReplyTrigger", "Companion", "chat_release"}, k = 1, mv = {2, 1, 0}, xi = 48)
@SourceDebugExtension({"SMAP\nSwipeHelper.kt\nKotlin\n*S Kotlin\n*F\n+ 1 SwipeHelper.kt\ncom/discord/chat/presentation/list/SwipeHelper\n+ 2 Animator.kt\nandroidx/core/animation/AnimatorKt\n+ 3 Color.kt\nandroidx/core/graphics/ColorKt\n+ 4 Canvas.kt\nandroidx/core/graphics/CanvasKt\n*L\n1#1,549:1\n29#2:550\n85#2,18:551\n29#2:569\n85#2,18:570\n404#3:588\n74#4,15:589\n27#4,7:604\n*S KotlinDebug\n*F\n+ 1 SwipeHelper.kt\ncom/discord/chat/presentation/list/SwipeHelper\n*L\n267#1:550\n267#1:551,18\n344#1:569\n344#1:570,18\n463#1:588\n468#1:589,15\n515#1:604,7\n*E\n"})
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public final class SwipeHelper extends ChatListCallback {
    private static final long ANIM_RETURN_DURATION = 300;
    @NotNull
    private static final String ANIM_VALUE_ARROW_ROTATION = "arrow-rotation";
    @NotNull
    private static final String ANIM_VALUE_ARROW_SCALE = "arrow-scale";
    @NotNull
    private static final String ANIM_VALUE_EDIT_CIRCLE_SCALE = "edit-circle-scale";
    @NotNull
    public static final Companion Companion = new Companion(null);
    private static final int EDIT_OFFSET_X;
    private static final int HAPTIC_RESET_X;
    private static final int HAPTIC_TRIGGER_X;
    private static final int MAX_CONTEXT_AREA_WIDTH;
    private static final int MAX_LEFT_BEVEL_RADIUS;
    private static final int MAX_RIGHT_BEVEL_WIDTH;
    private static final int REPLY_RESET_X;
    private static final int RIGHT_BEVEL_HEIGHT;
    private static final int SWIPE_STOP_OFFSET_X;
    @NotNull
    private SwipeActionType actionType;
    @NotNull
    private final Context context;
    private RecyclerView.ViewHolder currentItemViewHolder;
    private float dX;
    private ValueAnimator easterEggArrowAnimator;
    private ValueAnimator easterEggArrowRotationAnimator;
    private float easterEggArrowRotationDegrees;
    private float easterEggArrowScale;
    private boolean easterEggIsAnimating;
    private int easterEggPullCount;
    private float editCircleScale;
    private ValueAnimator editCircleScaleAnimator;
    private Drawable editIcon;
    @NotNull
    private final Handler handler;
    private boolean isActive;
    private boolean isCompleted;
    private View mView;
    @NotNull
    private final Function0<Unit> onEnd;
    @NotNull
    private final Function0<Unit> onStart;
    private Drawable replyIcon;
    private boolean shouldPerformHapticFeedback;
    private boolean shouldTriggerReply;
    private boolean swipeBack;

    @Metadata(d1 = {"\u0000$\n\u0002\u0018\u0002\n\u0002\u0010\u0000\n\u0002\b\u0003\n\u0002\u0010\b\n\u0002\b\t\n\u0002\u0010\u000e\n\u0002\b\u0002\n\u0002\u0010\t\n\u0002\b\u0002\b\u0086\u0003\u0018\u00002\u00020\u0001B\t\b\u0002¢\u0006\u0004\b\u0002\u0010\u0003R\u000e\u0010\u0004\u001a\u00020\u0005X\u0082\u0004¢\u0006\u0002\n\u0000R\u000e\u0010\u0006\u001a\u00020\u0005X\u0082\u0004¢\u0006\u0002\n\u0000R\u000e\u0010\u0007\u001a\u00020\u0005X\u0082\u0004¢\u0006\u0002\n\u0000R\u000e\u0010\b\u001a\u00020\u0005X\u0082\u0004¢\u0006\u0002\n\u0000R\u000e\u0010\t\u001a\u00020\u0005X\u0082\u0004¢\u0006\u0002\n\u0000R\u000e\u0010\n\u001a\u00020\u0005X\u0082\u0004¢\u0006\u0002\n\u0000R\u000e\u0010\u000b\u001a\u00020\u0005X\u0082\u0004¢\u0006\u0002\n\u0000R\u000e\u0010\f\u001a\u00020\u0005X\u0082\u0004¢\u0006\u0002\n\u0000R\u000e\u0010\r\u001a\u00020\u0005X\u0082\u0004¢\u0006\u0002\n\u0000R\u000e\u0010\u000e\u001a\u00020\u000fX\u0082T¢\u0006\u0002\n\u0000R\u000e\u0010\u0010\u001a\u00020\u000fX\u0082T¢\u0006\u0002\n\u0000R\u000e\u0010\u0011\u001a\u00020\u0012X\u0082T¢\u0006\u0002\n\u0000R\u000e\u0010\u0013\u001a\u00020\u000fX\u0082T¢\u0006\u0002\n\u0000¨\u0006\u0014"}, d2 = {"Lcom/discord/chat/presentation/list/SwipeHelper$Companion;", "", "<init>", "()V", "MAX_CONTEXT_AREA_WIDTH", "", "SWIPE_STOP_OFFSET_X", "HAPTIC_TRIGGER_X", "HAPTIC_RESET_X", "REPLY_RESET_X", "EDIT_OFFSET_X", "MAX_RIGHT_BEVEL_WIDTH", "RIGHT_BEVEL_HEIGHT", "MAX_LEFT_BEVEL_RADIUS", "ANIM_VALUE_ARROW_SCALE", "", "ANIM_VALUE_ARROW_ROTATION", "ANIM_RETURN_DURATION", "", "ANIM_VALUE_EDIT_CIRCLE_SCALE", "chat_release"}, k = 1, mv = {2, 1, 0}, xi = 48)
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    public static final class Companion {
        public /* synthetic */ Companion(DefaultConstructorMarker defaultConstructorMarker) {
            this();
        }

        private Companion() {
        }
    }

    @Metadata(k = 3, mv = {2, 1, 0}, xi = 48)
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    public /* synthetic */ class WhenMappings {
        public static final /* synthetic */ int[] $EnumSwitchMapping$0;

        static {
            int[] iArr = new int[SwipeActionType.values().length];
            try {
                iArr[SwipeActionType.Reply.ordinal()] = 1;
            } catch (NoSuchFieldError unused) {
            }
            try {
                iArr[SwipeActionType.Edit.ordinal()] = 2;
            } catch (NoSuchFieldError unused2) {
            }
            $EnumSwitchMapping$0 = iArr;
        }
    }

    static {
        int dpToPx = SizeUtilsKt.getDpToPx(80);
        MAX_CONTEXT_AREA_WIDTH = dpToPx;
        int i10 = -dpToPx;
        SWIPE_STOP_OFFSET_X = i10;
        HAPTIC_TRIGGER_X = i10;
        int dpToPx2 = SizeUtilsKt.getDpToPx(-60);
        HAPTIC_RESET_X = dpToPx2;
        REPLY_RESET_X = dpToPx2;
        EDIT_OFFSET_X = SizeUtilsKt.getDpToPx(-130);
        MAX_RIGHT_BEVEL_WIDTH = SizeUtilsKt.getDpToPx(32);
        RIGHT_BEVEL_HEIGHT = SizeUtilsKt.getDpToPx(24);
        MAX_LEFT_BEVEL_RADIUS = SizeUtilsKt.getDpToPx(16);
    }

    public SwipeHelper(@NotNull Context context, @NotNull Function0<Unit> onStart, @NotNull Function0<Unit> onEnd) {
        Intrinsics.checkNotNullParameter(context, "context");
        Intrinsics.checkNotNullParameter(onStart, "onStart");
        Intrinsics.checkNotNullParameter(onEnd, "onEnd");
        this.context = context;
        this.onStart = onStart;
        this.onEnd = onEnd;
        this.replyIcon = GetDrawableCompatKt.getDrawableCompat(context, R.drawable.ic_swipe_reply);
        this.editIcon = GetDrawableCompatKt.getDrawableCompat(context, R.drawable.ic_swipe_edit);
        this.easterEggArrowScale = 1.0f;
        this.shouldPerformHapticFeedback = true;
        this.actionType = SwipeActionType.Reply;
        this.handler = new Handler(context.getMainLooper());
    }

    private final void drawContextArea(Canvas canvas) {
        View view;
        SwipeReplyInitiator swipeReplyInitiator;
        float f10;
        String str;
        float f11;
        int save;
        float f12;
        if (this.currentItemViewHolder == null || this.dX == 0.0f) {
            return;
        }
        View view2 = this.mView;
        if (view2 == null) {
            Intrinsics.throwUninitializedPropertyAccessException("mView");
            view2 = null;
        }
        float abs = Math.abs(view2.getTranslationX());
        View view3 = this.mView;
        if (view3 == null) {
            Intrinsics.throwUninitializedPropertyAccessException("mView");
            view3 = null;
        }
        float measuredHeight = view3.getMeasuredHeight();
        Paint paint = new Paint();
        RecyclerView.ViewHolder viewHolder = this.currentItemViewHolder;
        if (viewHolder != null) {
            view = viewHolder.itemView;
        } else {
            view = null;
        }
        if (view instanceof SwipeReplyInitiator) {
            swipeReplyInitiator = (SwipeReplyInitiator) view;
        } else {
            swipeReplyInitiator = null;
        }
        Paint.Style style = Paint.Style.FILL;
        paint.setStyle(style);
        if (swipeReplyInitiator != null && swipeReplyInitiator.getUsingGradientTheme()) {
            paint.setColor(ThemeManagerKt.getTheme().getChatSwipeToReplyGradientBackground());
        } else {
            paint.setColor(ThemeManagerKt.getTheme().getChatSwipeToReplyBackground());
        }
        canvas.save();
        float swipeProgress = getSwipeProgress();
        float leftBevelRadius = getLeftBevelRadius(swipeProgress, measuredHeight);
        float f13 = MAX_RIGHT_BEVEL_WIDTH * swipeProgress;
        View view4 = this.mView;
        if (view4 == null) {
            Intrinsics.throwUninitializedPropertyAccessException("mView");
            view4 = null;
        }
        float measuredWidth = view4.getMeasuredWidth();
        View view5 = this.mView;
        if (view5 == null) {
            Intrinsics.throwUninitializedPropertyAccessException("mView");
            view5 = null;
        }
        float translationX = measuredWidth + view5.getTranslationX();
        float f14 = translationX - leftBevelRadius;
        float f15 = translationX + abs;
        float f16 = f15 - f13;
        View view6 = this.mView;
        if (view6 == null) {
            Intrinsics.throwUninitializedPropertyAccessException("mView");
            view6 = null;
        }
        int i10 = RIGHT_BEVEL_HEIGHT;
        float top = view6.getTop() - i10;
        float f17 = top + i10;
        float f18 = top + measuredHeight + (i10 * 2);
        float f19 = f18 - i10;
        Path path = new Path();
        path.moveTo(f16, f19);
        path.lineTo(translationX, f19);
        path.lineTo(translationX, f17 + leftBevelRadius);
        float f20 = f14 - leftBevelRadius;
        float f21 = 2;
        path.addArc(f20, f17, translationX, f17 + (f21 * leftBevelRadius), 0.0f, -90.0f);
        path.lineTo(f16, f17);
        float f22 = f16 + (f13 * 0.55f);
        path.cubicTo(f22, f17, f15, top + (i10 * 0.55f), f15, top);
        path.lineTo(f15, f18);
        path.cubicTo(f15, f18 - (i10 * 0.55f), f22, f19, f16, f19);
        canvas.save();
        canvas.clipPath(path);
        canvas.drawRect(f14, top, f15, f18, paint);
        canvas.restore();
        canvas.save();
        path.reset();
        float f23 = f19 - leftBevelRadius;
        path.addCircle(f14, f23, leftBevelRadius, Path.Direction.CW);
        if (Build.VERSION.SDK_INT >= 26) {
            canvas.clipOutPath(path);
        } else {
            canvas.clipPath(path, Region.Op.DIFFERENCE);
        }
        canvas.drawRect(f14, f23, translationX, f19, paint);
        canvas.restore();
        float arrowContainerBaseSize = getArrowContainerBaseSize(measuredHeight) / f21;
        int m10 = kotlin.ranges.d.m(((int) (192 * swipeProgress)) + 64, 0, SetSpanOperation.SPAN_MAX_PRIORITY);
        canvas.save();
        canvas.clipRect(translationX, 0.0f, f15, canvas.getHeight());
        canvas.translate(((translationX + (abs / f21)) - arrowContainerBaseSize) + arrowContainerBaseSize, ((int) ((f17 + (measuredHeight / f21)) - arrowContainerBaseSize)) + arrowContainerBaseSize);
        float f24 = this.easterEggArrowScale;
        canvas.scale(f24, f24);
        if (this.isCompleted) {
            f10 = 1.0f;
        } else {
            f10 = swipeProgress;
        }
        paint.setColor(ColorUtilsKt.interpolateColors(ThemeManagerKt.getTheme().getBackgroundSurfaceHighest(), ColorUtilsKt.getColorCompat(this.context, com.discord.theme.R.color.brand_500), f10, 0.8f, 1.0f));
        paint.setStyle(style);
        paint.setAlpha(m10);
        if (ThemeManager.INSTANCE.isThemeLight()) {
            str = "#16000000";
        } else {
            str = "#24000000";
        }
        paint.setShadowLayer(10.0f, 0.0f, 5.0f, Color.parseColor(str));
        canvas.drawCircle(0.0f, 0.0f, arrowContainerBaseSize, paint);
        paint.clearShadowLayer();
        float f25 = this.editCircleScale;
        if (f25 > 0.0f) {
            save = canvas.save();
            canvas.scale(f25, f25, 0.0f, 0.0f);
            try {
                if (this.isCompleted) {
                    f12 = 1.0f;
                } else {
                    f12 = swipeProgress;
                }
                paint.setColor(ColorUtilsKt.interpolateColors(ThemeManagerKt.getTheme().getBackgroundSurfaceHighest(), ThemeManagerKt.getTheme().getInteractiveBackgroundSelected(), f12, 0.8f, 1.0f));
                paint.setStyle(style);
                paint.setAlpha(SetSpanOperation.SPAN_MAX_PRIORITY);
                canvas.drawCircle(0.0f, 0.0f, arrowContainerBaseSize, paint);
                canvas.restoreToCount(save);
            } finally {
                canvas.restoreToCount(save);
            }
        }
        canvas.save();
        float max = Math.max(0.0f, Float.min(1.0f, 1 - this.editCircleScale));
        float arrowIconBaseSize = getArrowIconBaseSize(measuredHeight);
        PorterDuffColorFilter porterDuffColorFilter = new PorterDuffColorFilter(ColorUtilsKt.interpolateColors(ThemeManagerKt.getTheme().getInteractiveTextDefault(), ColorUtilsKt.getColorCompat(this.context, com.discord.theme.R.color.white), f10, 0.8f, 1.0f), PorterDuff.Mode.SRC_ATOP);
        Drawable drawable = this.replyIcon;
        if (drawable != null) {
            drawable.setColorFilter(porterDuffColorFilter);
        }
        if (DeviceReducedMotion.INSTANCE.isReducedMotionEnabled(this.context)) {
            f11 = 0.0f;
        } else {
            f11 = (1.0f - swipeProgress) * 90.0f;
        }
        float f26 = this.easterEggArrowRotationDegrees;
        canvas.translate(-1.0f, -1.0f);
        float f27 = f11 + f26;
        canvas.rotate(f27);
        canvas.scale(max, max);
        int i11 = (int) (arrowIconBaseSize / 2.0f);
        int i12 = -i11;
        Rect rect = new Rect(i12, i12, i11, i11);
        Drawable drawable2 = this.replyIcon;
        if (drawable2 != null) {
            drawable2.setBounds(rect);
        }
        Drawable drawable3 = this.replyIcon;
        if (drawable3 != null) {
            drawable3.setAlpha(m10);
        }
        Drawable drawable4 = this.replyIcon;
        if (drawable4 != null) {
            drawable4.draw(canvas);
        }
        canvas.restore();
        if (this.editCircleScale > 0.0f) {
            save = canvas.save();
            try {
                Drawable drawable5 = this.editIcon;
                if (drawable5 != null) {
                    drawable5.setColorFilter(porterDuffColorFilter);
                }
                canvas.rotate(f27);
                float f28 = this.editCircleScale;
                canvas.scale(f28, f28);
                Drawable drawable6 = this.editIcon;
                if (drawable6 != null) {
                    drawable6.setBounds(rect);
                }
                Drawable drawable7 = this.editIcon;
                if (drawable7 != null) {
                    drawable7.setAlpha(SetSpanOperation.SPAN_MAX_PRIORITY);
                }
                Drawable drawable8 = this.editIcon;
                if (drawable8 != null) {
                    drawable8.draw(canvas);
                }
            } catch (Throwable th2) {
                throw th2;
            }
        }
        canvas.restore();
    }

    private final void easterEggStartAnimation(final RecyclerView recyclerView, final RecyclerView.ViewHolder viewHolder) {
        if (DeviceReducedMotion.INSTANCE.isReducedMotionEnabled(this.context)) {
            return;
        }
        View view = this.mView;
        if (view == null) {
            Intrinsics.throwUninitializedPropertyAccessException("mView");
            view = null;
        }
        PropertyValuesHolder ofFloat = PropertyValuesHolder.ofFloat(ANIM_VALUE_ARROW_SCALE, 1.0f, getArrowContainerGrowthRatio(view.getMeasuredHeight()), 1.0f);
        ValueAnimator valueAnimator = new ValueAnimator();
        valueAnimator.setValues(ofFloat);
        valueAnimator.setDuration(ANIM_RETURN_DURATION);
        valueAnimator.setInterpolator(new AccelerateDecelerateInterpolator());
        valueAnimator.addUpdateListener(new ValueAnimator.AnimatorUpdateListener() { // from class: com.discord.chat.presentation.list.b0
            @Override // android.animation.ValueAnimator.AnimatorUpdateListener
            public final void onAnimationUpdate(ValueAnimator valueAnimator2) {
                SwipeHelper.easterEggStartAnimation$lambda$6$lambda$5(SwipeHelper.this, recyclerView, valueAnimator2);
            }
        });
        this.easterEggArrowAnimator = valueAnimator;
        valueAnimator.start();
        PropertyValuesHolder ofFloat2 = PropertyValuesHolder.ofFloat(ANIM_VALUE_ARROW_ROTATION, 720.0f, 0.0f);
        ValueAnimator valueAnimator2 = new ValueAnimator();
        valueAnimator2.setValues(ofFloat2);
        valueAnimator2.setDuration(800L);
        valueAnimator2.setInterpolator(new PathInterpolator(0.0f, 0.0f, 0.25f, 1.0f));
        valueAnimator2.addUpdateListener(new ValueAnimator.AnimatorUpdateListener() { // from class: com.discord.chat.presentation.list.c0
            @Override // android.animation.ValueAnimator.AnimatorUpdateListener
            public final void onAnimationUpdate(ValueAnimator valueAnimator3) {
                SwipeHelper.easterEggStartAnimation$lambda$9$lambda$7(SwipeHelper.this, recyclerView, valueAnimator3);
            }
        });
        valueAnimator2.addListener(new Animator.AnimatorListener() { // from class: com.discord.chat.presentation.list.SwipeHelper$easterEggStartAnimation$lambda$9$$inlined$doOnEnd$1
            @Override // android.animation.Animator.AnimatorListener
            public void onAnimationCancel(Animator animator) {
            }

            @Override // android.animation.Animator.AnimatorListener
            public void onAnimationEnd(Animator animator) {
                boolean shouldStartEditEntrance;
                SwipeHelper.this.easterEggIsAnimating = false;
                SwipeHelper.this.easterEggPullCount = 0;
                shouldStartEditEntrance = SwipeHelper.this.shouldStartEditEntrance(viewHolder);
                if (shouldStartEditEntrance) {
                    SwipeHelper.this.triggerEditEntranceTransition(recyclerView);
                }
            }

            @Override // android.animation.Animator.AnimatorListener
            public void onAnimationRepeat(Animator animator) {
            }

            @Override // android.animation.Animator.AnimatorListener
            public void onAnimationStart(Animator animator) {
            }
        });
        this.easterEggArrowRotationAnimator = valueAnimator2;
        valueAnimator2.start();
        this.easterEggIsAnimating = true;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final void easterEggStartAnimation$lambda$6$lambda$5(SwipeHelper swipeHelper, RecyclerView recyclerView, ValueAnimator it) {
        Intrinsics.checkNotNullParameter(it, "it");
        Object animatedValue = it.getAnimatedValue(ANIM_VALUE_ARROW_SCALE);
        Intrinsics.checkNotNull(animatedValue, "null cannot be cast to non-null type kotlin.Float");
        swipeHelper.easterEggArrowScale = ((Float) animatedValue).floatValue();
        recyclerView.invalidate();
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final void easterEggStartAnimation$lambda$9$lambda$7(SwipeHelper swipeHelper, RecyclerView recyclerView, ValueAnimator it) {
        Intrinsics.checkNotNullParameter(it, "it");
        Object animatedValue = it.getAnimatedValue(ANIM_VALUE_ARROW_ROTATION);
        Intrinsics.checkNotNull(animatedValue, "null cannot be cast to non-null type kotlin.Float");
        swipeHelper.easterEggArrowRotationDegrees = ((Float) animatedValue).floatValue();
        recyclerView.invalidate();
    }

    private final float getArrowContainerBaseSize(float f10) {
        return Float.min(f10 - SizeUtilsKt.getDpToPx(6), SizeUtilsKt.getDpToPx(40));
    }

    private final float getArrowContainerGrowthRatio(float f10) {
        float arrowContainerBaseSize = getArrowContainerBaseSize(f10);
        if (arrowContainerBaseSize * 1.3f <= f10) {
            return 1.3f;
        }
        return f10 / arrowContainerBaseSize;
    }

    private final float getArrowIconBaseSize(float f10) {
        return getArrowContainerBaseSize(f10) * 0.6f;
    }

    private final float getLeftBevelRadius(float f10, float f11) {
        return f10 * Float.min(MAX_LEFT_BEVEL_RADIUS, (f11 - 8) / 2.0f);
    }

    private final float getSwipeProgress() {
        View view = this.mView;
        if (view == null) {
            Intrinsics.throwUninitializedPropertyAccessException("mView");
            view = null;
        }
        return Math.max(0.0f, Float.min(view.getTranslationX() / SWIPE_STOP_OFFSET_X, 1.0f));
    }

    /* JADX INFO: Access modifiers changed from: private */
    public final boolean shouldStartEditEntrance(RecyclerView.ViewHolder viewHolder) {
        ValueAnimator valueAnimator;
        if (this.actionType == SwipeActionType.Reply) {
            View view = this.mView;
            SwipeReplyInitiator swipeReplyInitiator = null;
            if (view == null) {
                Intrinsics.throwUninitializedPropertyAccessException("mView");
                view = null;
            }
            if (view.getTranslationX() <= EDIT_OFFSET_X && (((valueAnimator = this.editCircleScaleAnimator) == null || !valueAnimator.isRunning()) && !this.easterEggIsAnimating)) {
                View view2 = viewHolder.itemView;
                if (view2 instanceof SwipeReplyInitiator) {
                    swipeReplyInitiator = (SwipeReplyInitiator) view2;
                }
                if (swipeReplyInitiator != null && swipeReplyInitiator.getEnableSwipeToEdit()) {
                    return true;
                }
            }
        }
        return false;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public final void triggerEditEntranceTransition(final RecyclerView recyclerView) {
        View view = this.mView;
        View view2 = null;
        if (view == null) {
            Intrinsics.throwUninitializedPropertyAccessException("mView");
            view = null;
        }
        PropertyValuesHolder ofFloat = PropertyValuesHolder.ofFloat(ANIM_VALUE_EDIT_CIRCLE_SCALE, this.editCircleScale, getArrowContainerGrowthRatio(view.getMeasuredHeight()), 1.0f);
        ValueAnimator valueAnimator = new ValueAnimator();
        valueAnimator.setValues(ofFloat);
        valueAnimator.setDuration(ANIM_RETURN_DURATION);
        valueAnimator.setInterpolator(new AccelerateDecelerateInterpolator());
        valueAnimator.addUpdateListener(new ValueAnimator.AnimatorUpdateListener() { // from class: com.discord.chat.presentation.list.e0
            @Override // android.animation.ValueAnimator.AnimatorUpdateListener
            public final void onAnimationUpdate(ValueAnimator valueAnimator2) {
                SwipeHelper.triggerEditEntranceTransition$lambda$4$lambda$3(SwipeHelper.this, recyclerView, valueAnimator2);
            }
        });
        this.editCircleScaleAnimator = valueAnimator;
        valueAnimator.start();
        this.actionType = SwipeActionType.Edit;
        View view3 = this.mView;
        if (view3 == null) {
            Intrinsics.throwUninitializedPropertyAccessException("mView");
        } else {
            view2 = view3;
        }
        view2.performHapticFeedback(0);
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final void triggerEditEntranceTransition$lambda$4$lambda$3(SwipeHelper swipeHelper, RecyclerView recyclerView, ValueAnimator it) {
        Intrinsics.checkNotNullParameter(it, "it");
        Object animatedValue = it.getAnimatedValue(ANIM_VALUE_EDIT_CIRCLE_SCALE);
        Intrinsics.checkNotNull(animatedValue, "null cannot be cast to non-null type kotlin.Float");
        swipeHelper.editCircleScale = ((Float) animatedValue).floatValue();
        recyclerView.invalidate();
    }

    private final void triggerEditExitTransition(final RecyclerView recyclerView) {
        PropertyValuesHolder ofFloat = PropertyValuesHolder.ofFloat(ANIM_VALUE_EDIT_CIRCLE_SCALE, this.editCircleScale, 0.0f);
        ValueAnimator valueAnimator = new ValueAnimator();
        valueAnimator.setValues(ofFloat);
        valueAnimator.setDuration(200L);
        valueAnimator.setInterpolator(new AccelerateDecelerateInterpolator());
        valueAnimator.addUpdateListener(new ValueAnimator.AnimatorUpdateListener() { // from class: com.discord.chat.presentation.list.d0
            @Override // android.animation.ValueAnimator.AnimatorUpdateListener
            public final void onAnimationUpdate(ValueAnimator valueAnimator2) {
                SwipeHelper.triggerEditExitTransition$lambda$2$lambda$0(SwipeHelper.this, recyclerView, valueAnimator2);
            }
        });
        valueAnimator.addListener(new Animator.AnimatorListener() { // from class: com.discord.chat.presentation.list.SwipeHelper$triggerEditExitTransition$lambda$2$$inlined$doOnEnd$1
            @Override // android.animation.Animator.AnimatorListener
            public void onAnimationCancel(Animator animator) {
            }

            @Override // android.animation.Animator.AnimatorListener
            public void onAnimationEnd(Animator animator) {
                SwipeHelper.this.actionType = SwipeActionType.Reply;
            }

            @Override // android.animation.Animator.AnimatorListener
            public void onAnimationRepeat(Animator animator) {
            }

            @Override // android.animation.Animator.AnimatorListener
            public void onAnimationStart(Animator animator) {
            }
        });
        this.editCircleScaleAnimator = valueAnimator;
        valueAnimator.start();
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final void triggerEditExitTransition$lambda$2$lambda$0(SwipeHelper swipeHelper, RecyclerView recyclerView, ValueAnimator it) {
        Intrinsics.checkNotNullParameter(it, "it");
        Object animatedValue = it.getAnimatedValue(ANIM_VALUE_EDIT_CIRCLE_SCALE);
        Intrinsics.checkNotNull(animatedValue, "null cannot be cast to non-null type kotlin.Float");
        swipeHelper.editCircleScale = ((Float) animatedValue).floatValue();
        recyclerView.invalidate();
    }

    private final void updateEditTransition(RecyclerView recyclerView, RecyclerView.ViewHolder viewHolder) {
        ValueAnimator valueAnimator;
        if (!this.isCompleted) {
            if (this.actionType == SwipeActionType.Edit) {
                View view = this.mView;
                if (view == null) {
                    Intrinsics.throwUninitializedPropertyAccessException("mView");
                    view = null;
                }
                if (view.getTranslationX() > REPLY_RESET_X && ((valueAnimator = this.editCircleScaleAnimator) == null || !valueAnimator.isRunning())) {
                    triggerEditExitTransition(recyclerView);
                    return;
                }
            }
            if (shouldStartEditEntrance(viewHolder)) {
                triggerEditEntranceTransition(recyclerView);
            }
        }
    }

    private final void updateHapticFeedbackTrigger(RecyclerView recyclerView, RecyclerView.ViewHolder viewHolder) {
        View view = null;
        if (this.shouldPerformHapticFeedback) {
            View view2 = this.mView;
            if (view2 == null) {
                Intrinsics.throwUninitializedPropertyAccessException("mView");
                view2 = null;
            }
            if (view2.getTranslationX() <= HAPTIC_TRIGGER_X) {
                View view3 = this.mView;
                if (view3 == null) {
                    Intrinsics.throwUninitializedPropertyAccessException("mView");
                } else {
                    view = view3;
                }
                view.performHapticFeedback(0);
                this.shouldPerformHapticFeedback = false;
                int i10 = this.easterEggPullCount + 1;
                this.easterEggPullCount = i10;
                if (i10 == 3 && !this.easterEggIsAnimating) {
                    easterEggStartAnimation(recyclerView, viewHolder);
                    return;
                }
                return;
            }
        }
        if (!this.shouldPerformHapticFeedback) {
            View view4 = this.mView;
            if (view4 == null) {
                Intrinsics.throwUninitializedPropertyAccessException("mView");
            } else {
                view = view4;
            }
            if (view.getTranslationX() >= HAPTIC_RESET_X) {
                this.shouldPerformHapticFeedback = true;
            }
        }
    }

    private final void updateReplyTrigger() {
        View view = null;
        if (this.shouldTriggerReply) {
            View view2 = this.mView;
            if (view2 == null) {
                Intrinsics.throwUninitializedPropertyAccessException("mView");
                view2 = null;
            }
            if (view2.getTranslationX() > REPLY_RESET_X) {
                this.shouldTriggerReply = false;
                return;
            }
        }
        if (!this.shouldTriggerReply) {
            View view3 = this.mView;
            if (view3 == null) {
                Intrinsics.throwUninitializedPropertyAccessException("mView");
            } else {
                view = view3;
            }
            if (view.getTranslationX() <= HAPTIC_TRIGGER_X) {
                this.shouldTriggerReply = true;
            }
        }
    }

    private final void updateShadow(RecyclerView.ViewHolder viewHolder) {
        SwipeReplyInitiator swipeReplyInitiator;
        String str;
        View view = viewHolder.itemView;
        View view2 = null;
        if (view instanceof SwipeReplyInitiator) {
            swipeReplyInitiator = (SwipeReplyInitiator) view;
        } else {
            swipeReplyInitiator = null;
        }
        if (swipeReplyInitiator != null) {
            float swipeProgress = getSwipeProgress();
            float dpToPx = SizeUtilsKt.getDpToPx(12) * swipeProgress;
            View view3 = this.mView;
            if (view3 == null) {
                Intrinsics.throwUninitializedPropertyAccessException("mView");
            } else {
                view2 = view3;
            }
            float leftBevelRadius = getLeftBevelRadius(swipeProgress, view2.getMeasuredHeight());
            if (ThemeManager.INSTANCE.isThemeLight()) {
                str = "#1F000000";
            } else {
                str = "#3E000000";
            }
            swipeReplyInitiator.getShadowView().setParams(dpToPx, leftBevelRadius, str);
        }
    }

    @Override // androidx.recyclerview.widget.h
    public long getAnimationDuration(@NotNull RecyclerView recyclerView, int i10, float f10, float f11) {
        Intrinsics.checkNotNullParameter(recyclerView, "recyclerView");
        return ANIM_RETURN_DURATION;
    }

    @Override // com.discord.chat.presentation.list.ChatListCallback
    @NotNull
    public Pair<Float, Float> getEffectiveDxDy(float f10, float f11) {
        int i10 = SWIPE_STOP_OFFSET_X;
        if (f10 >= i10) {
            return new Pair<>(Float.valueOf(f10), Float.valueOf(f11));
        }
        return new Pair<>(Float.valueOf(i10 - (((float) Math.atan(Math.abs(f10 - i10) / 120.0f)) * 120.0f)), Float.valueOf(f11));
    }

    @Override // androidx.recyclerview.widget.h
    public int getMovementFlags(@NotNull RecyclerView recyclerView, @NotNull RecyclerView.ViewHolder viewHolder) {
        SwipeReplyInitiator swipeReplyInitiator;
        int i10;
        Intrinsics.checkNotNullParameter(recyclerView, "recyclerView");
        Intrinsics.checkNotNullParameter(viewHolder, "viewHolder");
        View view = viewHolder.itemView;
        this.mView = view;
        if (view instanceof SwipeReplyInitiator) {
            swipeReplyInitiator = (SwipeReplyInitiator) view;
        } else {
            swipeReplyInitiator = null;
        }
        if (swipeReplyInitiator != null && swipeReplyInitiator.getEnableSwipeToReply()) {
            i10 = 4;
        } else {
            i10 = 0;
        }
        return androidx.recyclerview.widget.h.makeMovementFlags(0, i10);
    }

    @Override // androidx.recyclerview.widget.h
    public void onChildDraw(@NotNull Canvas c10, @NotNull RecyclerView recyclerView, @NotNull RecyclerView.ViewHolder viewHolder, float f10, float f11, int i10, boolean z10) {
        SwipeReplyInitiator swipeReplyInitiator;
        Intrinsics.checkNotNullParameter(c10, "c");
        Intrinsics.checkNotNullParameter(recyclerView, "recyclerView");
        Intrinsics.checkNotNullParameter(viewHolder, "viewHolder");
        super.onChildDraw(c10, recyclerView, viewHolder, f10, f11, i10, z10);
        this.dX = f10;
        this.currentItemViewHolder = viewHolder;
        drawContextArea(c10);
        updateHapticFeedbackTrigger(recyclerView, viewHolder);
        updateReplyTrigger();
        updateShadow(viewHolder);
        updateEditTransition(recyclerView, viewHolder);
        if (this.swipeBack && this.isActive && f10 >= -1.0f) {
            this.onEnd.invoke();
            View view = viewHolder.itemView;
            if (view instanceof SwipeReplyInitiator) {
                swipeReplyInitiator = (SwipeReplyInitiator) view;
            } else {
                swipeReplyInitiator = null;
            }
            if (swipeReplyInitiator != null) {
                swipeReplyInitiator.onSwipeEnd();
            }
            this.isActive = false;
        }
    }

    @Override // androidx.recyclerview.widget.h
    public boolean onMove(@NotNull RecyclerView recyclerView, @NotNull RecyclerView.ViewHolder viewHolder, @NotNull RecyclerView.ViewHolder target) {
        Intrinsics.checkNotNullParameter(recyclerView, "recyclerView");
        Intrinsics.checkNotNullParameter(viewHolder, "viewHolder");
        Intrinsics.checkNotNullParameter(target, "target");
        return false;
    }

    @Override // com.discord.chat.presentation.list.ChatListCallback
    public void onReleased(@NotNull RecyclerView recyclerView, RecyclerView.ViewHolder viewHolder) {
        View view;
        SwipeReplyInitiator swipeReplyInitiator;
        Intrinsics.checkNotNullParameter(recyclerView, "recyclerView");
        this.swipeBack = true;
        if (this.shouldTriggerReply) {
            if (viewHolder != null) {
                view = viewHolder.itemView;
            } else {
                view = null;
            }
            if (view instanceof SwipeReplyInitiator) {
                swipeReplyInitiator = (SwipeReplyInitiator) view;
            } else {
                swipeReplyInitiator = null;
            }
            if (swipeReplyInitiator != null) {
                int i10 = WhenMappings.$EnumSwitchMapping$0[this.actionType.ordinal()];
                if (i10 != 1) {
                    if (i10 == 2) {
                        swipeReplyInitiator.getOnInitiateEdit().invoke();
                    } else {
                        throw new ir.p();
                    }
                } else {
                    swipeReplyInitiator.getOnInitiateReply().invoke();
                }
                this.isCompleted = true;
            }
        }
        this.handler.removeCallbacksAndMessages(null);
    }

    @Override // androidx.recyclerview.widget.h
    public void onSelectedChanged(RecyclerView.ViewHolder viewHolder, int i10) {
        boolean z10;
        View view;
        super.onSelectedChanged(viewHolder, i10);
        if (viewHolder == null && i10 == 0) {
            z10 = true;
        } else {
            z10 = false;
        }
        this.swipeBack = z10;
        if (i10 == 1 && !this.isActive) {
            this.onStart.invoke();
            SwipeReplyInitiator swipeReplyInitiator = null;
            if (viewHolder != null) {
                view = viewHolder.itemView;
            } else {
                view = null;
            }
            if (view instanceof SwipeReplyInitiator) {
                swipeReplyInitiator = (SwipeReplyInitiator) view;
            }
            if (swipeReplyInitiator != null) {
                swipeReplyInitiator.onSwipeStart();
                this.isCompleted = false;
                this.actionType = SwipeActionType.Reply;
                this.editCircleScale = 0.0f;
            }
            this.easterEggPullCount = 0;
            this.isActive = true;
        }
    }

    @Override // androidx.recyclerview.widget.h
    public void onSwiped(@NotNull RecyclerView.ViewHolder viewHolder, int i10) {
        Intrinsics.checkNotNullParameter(viewHolder, "viewHolder");
    }

    @Override // com.discord.chat.presentation.list.ChatListCallback
    public boolean shouldReturnToOriginalPosition() {
        return true;
    }

    @Override // com.discord.chat.presentation.list.ChatListCallback
    public boolean shouldUseSpringyExit() {
        return this.shouldTriggerReply;
    }
}

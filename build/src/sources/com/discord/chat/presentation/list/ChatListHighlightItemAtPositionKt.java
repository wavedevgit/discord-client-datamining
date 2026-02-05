package com.discord.chat.presentation.list;

import android.animation.Animator;
import android.animation.ValueAnimator;
import android.content.Context;
import android.view.View;
import androidx.recyclerview.widget.RecyclerView;
import com.discord.theme.ThemeManagerKt;
import com.discord.theme.utils.ColorUtilsKt;
import com.facebook.react.uimanager.ViewProps;
import kotlin.Metadata;
import kotlin.Unit;
import kotlin.jvm.functions.Function1;
import kotlin.jvm.internal.Intrinsics;
import kotlin.jvm.internal.SourceDebugExtension;
import org.jetbrains.annotations.NotNull;
@Metadata(d1 = {"\u0000 \n\u0000\n\u0002\u0010\u0002\n\u0002\u0018\u0002\n\u0000\n\u0002\u0010\b\n\u0000\n\u0002\u0010\t\n\u0000\n\u0002\u0018\u0002\n\u0002\b\u0004\u001a\u001e\u0010\u0000\u001a\u00020\u0001*\u00020\u00022\u0006\u0010\u0003\u001a\u00020\u00042\b\b\u0002\u0010\u0005\u001a\u00020\u0006H\u0000\u001a(\u0010\u0007\u001a\u00020\u0001*\u00020\b2\u0006\u0010\t\u001a\u00020\u00062\b\b\u0001\u0010\n\u001a\u00020\u00042\b\b\u0001\u0010\u000b\u001a\u00020\u0004H\u0002¨\u0006\f"}, d2 = {"chatListHighlightItemAtPosition", "", "Landroidx/recyclerview/widget/RecyclerView;", ViewProps.POSITION, "", "delayMilliseconds", "", "animateBackgroundColor", "Landroid/view/View;", "delay", "startColor", "endColor", "chat_release"}, k = 2, mv = {2, 1, 0}, xi = 48)
@SourceDebugExtension({"SMAP\nChatListHighlightItemAtPosition.kt\nKotlin\n*S Kotlin\n*F\n+ 1 ChatListHighlightItemAtPosition.kt\ncom/discord/chat/presentation/list/ChatListHighlightItemAtPositionKt\n+ 2 Animator.kt\nandroidx/core/animation/AnimatorKt\n*L\n1#1,50:1\n85#2,18:51\n*S KotlinDebug\n*F\n+ 1 ChatListHighlightItemAtPosition.kt\ncom/discord/chat/presentation/list/ChatListHighlightItemAtPositionKt\n*L\n36#1:51,18\n*E\n"})
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public final class ChatListHighlightItemAtPositionKt {
    private static final void animateBackgroundColor(final View view, final long j10, final int i10, final int i11) {
        animateBackgroundColor$anim(j10, view, i10, i11, new Function1() { // from class: com.discord.chat.presentation.list.f
            @Override // kotlin.jvm.functions.Function1
            public final Object invoke(Object obj) {
                Unit animateBackgroundColor$lambda$3;
                animateBackgroundColor$lambda$3 = ChatListHighlightItemAtPositionKt.animateBackgroundColor$lambda$3(i11, i10, j10, view, (Animator) obj);
                return animateBackgroundColor$lambda$3;
            }
        });
    }

    private static final void animateBackgroundColor$anim(long j10, final View view, int i10, int i11, final Function1<? super Animator, Unit> function1) {
        ValueAnimator ofArgb = ValueAnimator.ofArgb(i10, i11);
        ofArgb.addUpdateListener(new ValueAnimator.AnimatorUpdateListener() { // from class: com.discord.chat.presentation.list.h
            @Override // android.animation.ValueAnimator.AnimatorUpdateListener
            public final void onAnimationUpdate(ValueAnimator valueAnimator) {
                ChatListHighlightItemAtPositionKt.animateBackgroundColor$anim$lambda$2$lambda$1(view, valueAnimator);
            }
        });
        Intrinsics.checkNotNull(ofArgb);
        ofArgb.addListener(new Animator.AnimatorListener() { // from class: com.discord.chat.presentation.list.ChatListHighlightItemAtPositionKt$animateBackgroundColor$anim$lambda$2$$inlined$addListener$default$1
            @Override // android.animation.Animator.AnimatorListener
            public void onAnimationCancel(Animator animator) {
            }

            @Override // android.animation.Animator.AnimatorListener
            public void onAnimationEnd(Animator animator) {
                Function1.this.invoke(animator);
            }

            @Override // android.animation.Animator.AnimatorListener
            public void onAnimationRepeat(Animator animator) {
            }

            @Override // android.animation.Animator.AnimatorListener
            public void onAnimationStart(Animator animator) {
            }
        });
        ofArgb.setStartDelay(j10 + 100);
        ofArgb.setDuration(600L);
        ofArgb.start();
    }

    static /* synthetic */ void animateBackgroundColor$anim$default(long j10, View view, int i10, int i11, Function1 function1, int i12, Object obj) {
        if ((i12 & 16) != 0) {
            function1 = new Function1() { // from class: com.discord.chat.presentation.list.g
                @Override // kotlin.jvm.functions.Function1
                public final Object invoke(Object obj2) {
                    Unit animateBackgroundColor$anim$lambda$0;
                    animateBackgroundColor$anim$lambda$0 = ChatListHighlightItemAtPositionKt.animateBackgroundColor$anim$lambda$0((Animator) obj2);
                    return animateBackgroundColor$anim$lambda$0;
                }
            };
        }
        animateBackgroundColor$anim(j10, view, i10, i11, function1);
    }

    public static final Unit animateBackgroundColor$anim$lambda$0(Animator it) {
        Intrinsics.checkNotNullParameter(it, "it");
        return Unit.f31988a;
    }

    public static final void animateBackgroundColor$anim$lambda$2$lambda$1(View view, ValueAnimator valueAnimator) {
        Intrinsics.checkNotNullParameter(valueAnimator, "valueAnimator");
        Object animatedValue = valueAnimator.getAnimatedValue();
        Intrinsics.checkNotNull(animatedValue, "null cannot be cast to non-null type kotlin.Int");
        view.setBackgroundColor(((Integer) animatedValue).intValue());
    }

    public static final Unit animateBackgroundColor$lambda$3(int i10, int i11, long j10, View view, Animator it) {
        Intrinsics.checkNotNullParameter(it, "it");
        animateBackgroundColor$anim$default(j10, view, i10, i11, null, 16, null);
        return Unit.f31988a;
    }

    public static final void chatListHighlightItemAtPosition(@NotNull RecyclerView recyclerView, int i10, long j10) {
        View findViewByPosition;
        Intrinsics.checkNotNullParameter(recyclerView, "<this>");
        RecyclerView.LayoutManager layoutManager = recyclerView.getLayoutManager();
        if (layoutManager != null && (findViewByPosition = layoutManager.findViewByPosition(i10)) != null) {
            Context context = recyclerView.getContext();
            Intrinsics.checkNotNullExpressionValue(context, "getContext(...)");
            animateBackgroundColor(findViewByPosition, j10, ColorUtilsKt.getColorCompat(context, 17170445), ThemeManagerKt.getTheme().getInteractiveBackgroundSelected());
        }
    }

    public static /* synthetic */ void chatListHighlightItemAtPosition$default(RecyclerView recyclerView, int i10, long j10, int i11, Object obj) {
        if ((i11 & 2) != 0) {
            j10 = 300;
        }
        chatListHighlightItemAtPosition(recyclerView, i10, j10);
    }
}

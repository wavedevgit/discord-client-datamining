package com.discord.appreview;

import android.app.Activity;
import ci.a;
import com.discord.appreview.AppRatingRequester;
import com.google.android.gms.tasks.OnCompleteListener;
import com.google.android.gms.tasks.Task;
import com.google.android.play.core.review.ReviewManager;
import kotlin.Metadata;
import kotlin.Unit;
import kotlin.jvm.functions.Function0;
import kotlin.jvm.functions.Function1;
import kotlin.jvm.internal.Intrinsics;
import org.jetbrains.annotations.NotNull;
import wg.e;
import zh.b;
import zh.c;
@Metadata(d1 = {"\u00008\n\u0002\u0018\u0002\n\u0002\u0010\u0000\n\u0000\n\u0002\u0018\u0002\n\u0000\n\u0002\u0010\u000b\n\u0000\n\u0002\u0018\u0002\n\u0002\u0010\u0002\n\u0000\n\u0002\u0018\u0002\n\u0002\u0018\u0002\n\u0002\u0018\u0002\n\u0002\b\u0004\n\u0002\u0018\u0002\n\u0002\b\u0002\b\u0000\u0018\u00002\u00020\u0001B=\u0012\u0006\u0010\u0002\u001a\u00020\u0003\u0012\u0006\u0010\u0004\u001a\u00020\u0005\u0012\f\u0010\u0006\u001a\b\u0012\u0004\u0012\u00020\b0\u0007\u0012\u0016\u0010\t\u001a\u0012\u0012\b\u0012\u00060\u000bj\u0002`\f\u0012\u0004\u0012\u00020\b0\n¢\u0006\u0004\b\r\u0010\u000eJ\u0006\u0010\u000f\u001a\u00020\bJ\u0018\u0010\u0010\u001a\u00020\u00112\u0006\u0010\u0012\u001a\u00020\u00052\u0006\u0010\u0002\u001a\u00020\u0003H\u0002R\u000e\u0010\u0002\u001a\u00020\u0003X\u0082\u0004¢\u0006\u0002\n\u0000R\u000e\u0010\u0004\u001a\u00020\u0005X\u0082\u0004¢\u0006\u0002\n\u0000R\u0014\u0010\u0006\u001a\b\u0012\u0004\u0012\u00020\b0\u0007X\u0082\u0004¢\u0006\u0002\n\u0000R\u001e\u0010\t\u001a\u0012\u0012\b\u0012\u00060\u000bj\u0002`\f\u0012\u0004\u0012\u00020\b0\nX\u0082\u0004¢\u0006\u0002\n\u0000¨\u0006\u0013"}, d2 = {"Lcom/discord/appreview/AppRatingRequester;", "", "activity", "Landroid/app/Activity;", "useFakeReviewManager", "", "onComplete", "Lkotlin/Function0;", "", "onFailure", "Lkotlin/Function1;", "Ljava/lang/Exception;", "Lkotlin/Exception;", "<init>", "(Landroid/app/Activity;ZLkotlin/jvm/functions/Function0;Lkotlin/jvm/functions/Function1;)V", "executeRequest", "createReviewManager", "Lcom/google/android/play/core/review/ReviewManager;", "fake", "app_review_release"}, k = 1, mv = {2, 1, 0}, xi = 48)
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public final class AppRatingRequester {
    @NotNull
    private final Activity activity;
    @NotNull
    private final Function0<Unit> onComplete;
    @NotNull
    private final Function1<Exception, Unit> onFailure;
    private final boolean useFakeReviewManager;

    /* JADX WARN: Multi-variable type inference failed */
    public AppRatingRequester(@NotNull Activity activity, boolean z10, @NotNull Function0<Unit> onComplete, @NotNull Function1<? super Exception, Unit> onFailure) {
        Intrinsics.checkNotNullParameter(activity, "activity");
        Intrinsics.checkNotNullParameter(onComplete, "onComplete");
        Intrinsics.checkNotNullParameter(onFailure, "onFailure");
        this.activity = activity;
        this.useFakeReviewManager = z10;
        this.onComplete = onComplete;
        this.onFailure = onFailure;
    }

    private final ReviewManager createReviewManager(boolean z10, Activity activity) {
        if (z10) {
            return new a(activity);
        }
        ReviewManager a10 = c.a(activity);
        Intrinsics.checkNotNullExpressionValue(a10, "create(...)");
        return a10;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final void executeRequest$lambda$1(ReviewManager reviewManager, final AppRatingRequester appRatingRequester, Task task) {
        Intrinsics.checkNotNullParameter(task, "task");
        if (task.p()) {
            Task a10 = reviewManager.a(appRatingRequester.activity, (b) task.l());
            Intrinsics.checkNotNullExpressionValue(a10, "launchReviewFlow(...)");
            a10.addOnCompleteListener(new OnCompleteListener() { // from class: g6.e
                @Override // com.google.android.gms.tasks.OnCompleteListener
                public final void onComplete(Task task2) {
                    AppRatingRequester.executeRequest$lambda$1$lambda$0(AppRatingRequester.this, task2);
                }
            });
            return;
        }
        Function1<Exception, Unit> function1 = appRatingRequester.onFailure;
        Exception k10 = task.k();
        if (k10 == null) {
            k10 = new Exception("Unknown error");
        }
        function1.invoke(k10);
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final void executeRequest$lambda$1$lambda$0(AppRatingRequester appRatingRequester, Task it) {
        Intrinsics.checkNotNullParameter(it, "it");
        appRatingRequester.onComplete.invoke();
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final void executeRequest$lambda$2(AppRatingRequester appRatingRequester) {
        appRatingRequester.onFailure.invoke(new Exception("Request was canceled"));
    }

    public final void executeRequest() {
        final ReviewManager createReviewManager = createReviewManager(this.useFakeReviewManager, this.activity);
        Task b10 = createReviewManager.b();
        Intrinsics.checkNotNullExpressionValue(b10, "requestReviewFlow(...)");
        b10.addOnCompleteListener(new OnCompleteListener() { // from class: g6.c
            @Override // com.google.android.gms.tasks.OnCompleteListener
            public final void onComplete(Task task) {
                AppRatingRequester.executeRequest$lambda$1(ReviewManager.this, this, task);
            }
        });
        b10.b(new e() { // from class: g6.d
            @Override // wg.e
            public final void a() {
                AppRatingRequester.executeRequest$lambda$2(AppRatingRequester.this);
            }
        });
    }
}

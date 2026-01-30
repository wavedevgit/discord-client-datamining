package com.discord.appreview;

import android.app.Activity;
import com.discord.appreview.AppRatingRequestModule;
import com.discord.codegen.NativeAppRatingRequestModuleSpec;
import com.facebook.react.bridge.BaseJavaModule;
import com.facebook.react.bridge.Promise;
import com.facebook.react.bridge.ReactApplicationContext;
import kotlin.Metadata;
import kotlin.Unit;
import kotlin.jvm.functions.Function0;
import kotlin.jvm.functions.Function1;
import kotlin.jvm.internal.DefaultConstructorMarker;
import kotlin.jvm.internal.Intrinsics;
import org.jetbrains.annotations.NotNull;
@Metadata(d1 = {"\u0000 \n\u0002\u0018\u0002\n\u0002\u0018\u0002\n\u0000\n\u0002\u0018\u0002\n\u0002\b\u0005\n\u0002\u0010\u0002\n\u0000\n\u0002\u0018\u0002\n\u0002\b\u0002\u0018\u0000 \f2\u00020\u0001:\u0001\fB\u000f\u0012\u0006\u0010\u0002\u001a\u00020\u0003¢\u0006\u0004\b\u0004\u0010\u0005J\u0010\u0010\b\u001a\u00020\t2\u0006\u0010\n\u001a\u00020\u000bH\u0016R\u0011\u0010\u0002\u001a\u00020\u0003¢\u0006\b\n\u0000\u001a\u0004\b\u0006\u0010\u0007¨\u0006\r"}, d2 = {"Lcom/discord/appreview/AppRatingRequestModule;", "Lcom/discord/codegen/NativeAppRatingRequestModuleSpec;", "reactContext", "Lcom/facebook/react/bridge/ReactApplicationContext;", "<init>", "(Lcom/facebook/react/bridge/ReactApplicationContext;)V", "getReactContext", "()Lcom/facebook/react/bridge/ReactApplicationContext;", "requestRating", "", BaseJavaModule.METHOD_TYPE_PROMISE, "Lcom/facebook/react/bridge/Promise;", "Companion", "app_review_release"}, k = 1, mv = {2, 1, 0}, xi = 48)
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public final class AppRatingRequestModule extends NativeAppRatingRequestModuleSpec {
    @NotNull
    public static final Companion Companion = new Companion(null);
    private static final int SUCCESS = 0;
    @NotNull
    private final ReactApplicationContext reactContext;

    @Metadata(d1 = {"\u0000\u0012\n\u0002\u0018\u0002\n\u0002\u0010\u0000\n\u0002\b\u0003\n\u0002\u0010\b\n\u0000\b\u0086\u0003\u0018\u00002\u00020\u0001B\t\b\u0002¢\u0006\u0004\b\u0002\u0010\u0003R\u000e\u0010\u0004\u001a\u00020\u0005X\u0082T¢\u0006\u0002\n\u0000¨\u0006\u0006"}, d2 = {"Lcom/discord/appreview/AppRatingRequestModule$Companion;", "", "<init>", "()V", "SUCCESS", "", "app_review_release"}, k = 1, mv = {2, 1, 0}, xi = 48)
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    public static final class Companion {
        public /* synthetic */ Companion(DefaultConstructorMarker defaultConstructorMarker) {
            this();
        }

        private Companion() {
        }
    }

    /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
    public AppRatingRequestModule(@NotNull ReactApplicationContext reactContext) {
        super(reactContext);
        Intrinsics.checkNotNullParameter(reactContext, "reactContext");
        this.reactContext = reactContext;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit requestRating$lambda$0(Promise promise) {
        promise.resolve(0);
        return Unit.f33298a;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit requestRating$lambda$1(Promise promise, Exception exception) {
        Intrinsics.checkNotNullParameter(exception, "exception");
        promise.reject(exception);
        return Unit.f33298a;
    }

    @NotNull
    public final ReactApplicationContext getReactContext() {
        return this.reactContext;
    }

    @Override // com.discord.codegen.NativeAppRatingRequestModuleSpec
    public void requestRating(@NotNull final Promise promise) {
        Intrinsics.checkNotNullParameter(promise, "promise");
        Activity currentActivity = this.reactContext.getCurrentActivity();
        if (currentActivity == null) {
            promise.reject(new IllegalStateException("current activity is null"));
        } else {
            new AppRatingRequester(currentActivity, false, new Function0() { // from class: g6.a
                @Override // kotlin.jvm.functions.Function0
                public final Object invoke() {
                    Unit requestRating$lambda$0;
                    requestRating$lambda$0 = AppRatingRequestModule.requestRating$lambda$0(Promise.this);
                    return requestRating$lambda$0;
                }
            }, new Function1() { // from class: g6.b
                @Override // kotlin.jvm.functions.Function1
                public final Object invoke(Object obj) {
                    Unit requestRating$lambda$1;
                    requestRating$lambda$1 = AppRatingRequestModule.requestRating$lambda$1(Promise.this, (Exception) obj);
                    return requestRating$lambda$1;
                }
            }).executeRequest();
        }
    }
}

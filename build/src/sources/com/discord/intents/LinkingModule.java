package com.discord.intents;

import android.content.Intent;
import android.net.Uri;
import android.os.Build;
import com.discord.codegen.NativeLinkingModuleSpec;
import com.discord.misc.utilities.activity.ActivityUtilities;
import com.facebook.react.bridge.BaseJavaModule;
import com.facebook.react.bridge.Promise;
import com.facebook.react.bridge.ReactApplicationContext;
import java.util.concurrent.CompletableFuture;
import java.util.function.Consumer;
import java.util.function.Function;
import kotlin.Metadata;
import kotlin.Unit;
import kotlin.jvm.functions.Function1;
import kotlin.jvm.internal.Intrinsics;
import kotlin.jvm.internal.SourceDebugExtension;
import org.jetbrains.annotations.NotNull;
@Metadata(d1 = {"\u0000&\n\u0002\u0018\u0002\n\u0002\u0018\u0002\n\u0000\n\u0002\u0018\u0002\n\u0002\b\u0003\n\u0002\u0010\u0002\n\u0000\n\u0002\u0010\u000e\n\u0000\n\u0002\u0018\u0002\n\u0002\b\u0003\b\u0000\u0018\u00002\u00020\u0001B\u000f\u0012\u0006\u0010\u0002\u001a\u00020\u0003¢\u0006\u0004\b\u0004\u0010\u0005J\u0018\u0010\u0006\u001a\u00020\u00072\u0006\u0010\b\u001a\u00020\t2\u0006\u0010\n\u001a\u00020\u000bH\u0016J\u0018\u0010\f\u001a\u00020\u00072\u0006\u0010\r\u001a\u00020\t2\u0006\u0010\n\u001a\u00020\u000bH\u0016R\u000e\u0010\u0002\u001a\u00020\u0003X\u0082\u0004¢\u0006\u0002\n\u0000¨\u0006\u000e"}, d2 = {"Lcom/discord/intents/LinkingModule;", "Lcom/discord/codegen/NativeLinkingModuleSpec;", "reactContext", "Lcom/facebook/react/bridge/ReactApplicationContext;", "<init>", "(Lcom/facebook/react/bridge/ReactApplicationContext;)V", "tryOpenUrlAsUniversalLink", "", "urlString", "", BaseJavaModule.METHOD_TYPE_PROMISE, "Lcom/facebook/react/bridge/Promise;", "tryOpenScheme", "scheme", "intents_release"}, k = 1, mv = {2, 1, 0}, xi = 48)
@SourceDebugExtension({"SMAP\nLinkingModule.kt\nKotlin\n*S Kotlin\n*F\n+ 1 LinkingModule.kt\ncom/discord/intents/LinkingModule\n+ 2 Uri.kt\nandroidx/core/net/UriKt\n*L\n1#1,75:1\n29#2:76\n29#2:77\n*S KotlinDebug\n*F\n+ 1 LinkingModule.kt\ncom/discord/intents/LinkingModule\n*L\n24#1:76\n53#1:77\n*E\n"})
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class LinkingModule extends NativeLinkingModuleSpec {
    @NotNull
    private final ReactApplicationContext reactContext;

    /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
    public LinkingModule(@NotNull ReactApplicationContext reactContext) {
        super(reactContext);
        Intrinsics.checkNotNullParameter(reactContext, "reactContext");
        this.reactContext = reactContext;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit tryOpenScheme$lambda$5(Promise promise, Unit unit) {
        promise.resolve(Boolean.TRUE);
        return Unit.f32008a;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Void tryOpenScheme$lambda$7(Promise promise, String str, Throwable th2) {
        promise.reject("ERR_UNABLE_TO_OPEN_SCHEME", "Could not open the provided scheme: " + str, th2);
        return null;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit tryOpenUrlAsUniversalLink$lambda$1(Promise promise, Unit unit) {
        promise.resolve(Boolean.TRUE);
        return Unit.f32008a;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Void tryOpenUrlAsUniversalLink$lambda$3(Promise promise, String str, Throwable th2) {
        promise.reject("ERR_UNABLE_TO_OPEN_URL", "Could not open the provided URL as a universal link: " + str, th2);
        return null;
    }

    @Override // com.discord.codegen.NativeLinkingModuleSpec
    public void tryOpenScheme(@NotNull final String scheme, @NotNull final Promise promise) {
        Uri uri;
        Intrinsics.checkNotNullParameter(scheme, "scheme");
        Intrinsics.checkNotNullParameter(promise, "promise");
        try {
            uri = Uri.parse(scheme);
        } catch (Exception unused) {
            uri = null;
        }
        Intent intent = new Intent("android.intent.action.VIEW", uri);
        intent.addFlags(268435456);
        CompletableFuture startActivityAsyncWithFuture$default = ActivityUtilities.startActivityAsyncWithFuture$default(ActivityUtilities.INSTANCE, this.reactContext, intent, null, 4, null);
        final Function1 function1 = new Function1() { // from class: com.discord.intents.d
            @Override // kotlin.jvm.functions.Function1
            public final Object invoke(Object obj) {
                Unit tryOpenScheme$lambda$5;
                tryOpenScheme$lambda$5 = LinkingModule.tryOpenScheme$lambda$5(Promise.this, (Unit) obj);
                return tryOpenScheme$lambda$5;
            }
        };
        startActivityAsyncWithFuture$default.thenAccept(new Consumer() { // from class: com.discord.intents.e
            @Override // java.util.function.Consumer
            public final void accept(Object obj) {
                Function1.this.invoke(obj);
            }
        }).exceptionally(new Function() { // from class: com.discord.intents.f
            @Override // java.util.function.Function
            public final Object apply(Object obj) {
                Void tryOpenScheme$lambda$7;
                tryOpenScheme$lambda$7 = LinkingModule.tryOpenScheme$lambda$7(Promise.this, scheme, (Throwable) obj);
                return tryOpenScheme$lambda$7;
            }
        });
    }

    @Override // com.discord.codegen.NativeLinkingModuleSpec
    public void tryOpenUrlAsUniversalLink(@NotNull final String urlString, @NotNull final Promise promise) {
        Uri uri;
        Intrinsics.checkNotNullParameter(urlString, "urlString");
        Intrinsics.checkNotNullParameter(promise, "promise");
        if (Build.VERSION.SDK_INT < 30) {
            promise.reject("ERR_UNSUPPORTED_API_LEVEL", "This feature requires Android API level 30 (Android 11) or higher", new UnsupportedOperationException());
            return;
        }
        try {
            uri = Uri.parse(urlString);
        } catch (Exception unused) {
            uri = null;
        }
        Intent intent = new Intent("android.intent.action.VIEW", uri);
        intent.addFlags(268436992);
        CompletableFuture startActivityAsyncWithFuture$default = ActivityUtilities.startActivityAsyncWithFuture$default(ActivityUtilities.INSTANCE, this.reactContext, intent, null, 4, null);
        final Function1 function1 = new Function1() { // from class: com.discord.intents.a
            @Override // kotlin.jvm.functions.Function1
            public final Object invoke(Object obj) {
                Unit tryOpenUrlAsUniversalLink$lambda$1;
                tryOpenUrlAsUniversalLink$lambda$1 = LinkingModule.tryOpenUrlAsUniversalLink$lambda$1(Promise.this, (Unit) obj);
                return tryOpenUrlAsUniversalLink$lambda$1;
            }
        };
        startActivityAsyncWithFuture$default.thenAccept(new Consumer() { // from class: com.discord.intents.b
            @Override // java.util.function.Consumer
            public final void accept(Object obj) {
                Function1.this.invoke(obj);
            }
        }).exceptionally(new Function() { // from class: com.discord.intents.c
            @Override // java.util.function.Function
            public final Object apply(Object obj) {
                Void tryOpenUrlAsUniversalLink$lambda$3;
                tryOpenUrlAsUniversalLink$lambda$3 = LinkingModule.tryOpenUrlAsUniversalLink$lambda$3(Promise.this, urlString, (Throwable) obj);
                return tryOpenUrlAsUniversalLink$lambda$3;
            }
        });
    }
}

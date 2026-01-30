package com.discord.analytics;

import android.content.SharedPreferences;
import com.android.installreferrer.api.InstallReferrerClient;
import com.android.installreferrer.api.ReferrerDetails;
import com.discord.misc.utilities.chat_view_types.ChatViewRecyclerTypes;
import com.facebook.react.bridge.Promise;
import com.facebook.react.bridge.ReactApplicationContext;
import gs.t1;
import java.util.concurrent.CancellationException;
import kotlin.Metadata;
import kotlin.Result;
import kotlin.Unit;
import kotlin.c;
import kotlin.coroutines.Continuation;
import kotlin.coroutines.jvm.internal.e;
import kotlin.coroutines.jvm.internal.k;
import kotlin.jvm.functions.Function2;
import kotlin.jvm.internal.Intrinsics;
import kotlin.jvm.internal.Ref;
import kotlin.jvm.internal.SourceDebugExtension;
import kotlinx.coroutines.CoroutineScope;
import or.b;
@Metadata(d1 = {"\u0000\n\n\u0000\n\u0002\u0010\u0002\n\u0002\u0018\u0002\u0010\u0000\u001a\u00020\u0001*\u00020\u0002H\n"}, d2 = {"<anonymous>", "", "Lkotlinx/coroutines/CoroutineScope;"}, k = 3, mv = {2, 1, 0}, xi = 48)
@e(c = "com.discord.analytics.InstallReferrerModule$get$1", f = "InstallReferrerModule.kt", l = {ChatViewRecyclerTypes.POLL_TEXT_AND_IMAGE}, m = "invokeSuspend")
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
final class InstallReferrerModule$get$1 extends k implements Function2<CoroutineScope, Continuation<? super Unit>, Object> {
    final /* synthetic */ int $attempts;
    final /* synthetic */ Ref.ObjectRef<InstallReferrerClient> $client;
    final /* synthetic */ SharedPreferences $prefs;
    final /* synthetic */ Promise $promise;
    final /* synthetic */ Ref.ObjectRef<String> $referrer;
    int label;
    final /* synthetic */ InstallReferrerModule this$0;

    /* JADX INFO: Access modifiers changed from: package-private */
    @Metadata(d1 = {"\u0000\n\n\u0000\n\u0002\u0010\u0002\n\u0002\u0018\u0002\u0010\u0000\u001a\u00020\u0001*\u00020\u0002H\n"}, d2 = {"<anonymous>", "", "Lkotlinx/coroutines/CoroutineScope;"}, k = 3, mv = {2, 1, 0}, xi = 48)
    @e(c = "com.discord.analytics.InstallReferrerModule$get$1$1", f = "InstallReferrerModule.kt", l = {41}, m = "invokeSuspend")
    @SourceDebugExtension({"SMAP\nInstallReferrerModule.kt\nKotlin\n*S Kotlin\n*F\n+ 1 InstallReferrerModule.kt\ncom/discord/analytics/InstallReferrerModule$get$1$1\n+ 2 SharedPreferences.kt\nandroidx/core/content/SharedPreferencesKt\n*L\n1#1,98:1\n40#2,13:99\n40#2,13:112\n*S KotlinDebug\n*F\n+ 1 InstallReferrerModule.kt\ncom/discord/analytics/InstallReferrerModule$get$1$1\n*L\n45#1:99,13\n48#1:112,13\n*E\n"})
    /* renamed from: com.discord.analytics.InstallReferrerModule$get$1$1  reason: invalid class name */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    public static final class AnonymousClass1 extends k implements Function2<CoroutineScope, Continuation<? super Unit>, Object> {
        final /* synthetic */ int $attempts;
        final /* synthetic */ Ref.ObjectRef<InstallReferrerClient> $client;
        final /* synthetic */ SharedPreferences $prefs;
        final /* synthetic */ Promise $promise;
        final /* synthetic */ Ref.ObjectRef<String> $referrer;
        private /* synthetic */ Object L$0;
        Object L$1;
        Object L$2;
        Object L$3;
        Object L$4;
        int label;
        final /* synthetic */ InstallReferrerModule this$0;

        /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
        AnonymousClass1(Ref.ObjectRef<InstallReferrerClient> objectRef, InstallReferrerModule installReferrerModule, Ref.ObjectRef<String> objectRef2, SharedPreferences sharedPreferences, Promise promise, int i10, Continuation<? super AnonymousClass1> continuation) {
            super(2, continuation);
            this.$client = objectRef;
            this.this$0 = installReferrerModule;
            this.$referrer = objectRef2;
            this.$prefs = sharedPreferences;
            this.$promise = promise;
            this.$attempts = i10;
        }

        @Override // kotlin.coroutines.jvm.internal.a
        public final Continuation<Unit> create(Object obj, Continuation<?> continuation) {
            AnonymousClass1 anonymousClass1 = new AnonymousClass1(this.$client, this.this$0, this.$referrer, this.$prefs, this.$promise, this.$attempts, continuation);
            anonymousClass1.L$0 = obj;
            return anonymousClass1;
        }

        /* JADX WARN: Multi-variable type inference failed */
        /* JADX WARN: Type inference failed for: r1v5, types: [com.android.installreferrer.api.InstallReferrerClient, T] */
        @Override // kotlin.coroutines.jvm.internal.a
        public final Object invokeSuspend(Object obj) {
            Object b10;
            Ref.ObjectRef<InstallReferrerClient> objectRef;
            Ref.ObjectRef<String> objectRef2;
            SharedPreferences sharedPreferences;
            Promise promise;
            ReactApplicationContext reactApplicationContext;
            Integer num;
            SharedPreferences sharedPreferences2;
            Promise promise2;
            T t10;
            ReferrerDetails installReferrer;
            Object f10 = b.f();
            int i10 = this.label;
            Unit unit = null;
            try {
            } catch (Throwable th2) {
                Result.a aVar = Result.f33295e;
                b10 = Result.b(c.a(th2));
            }
            if (i10 != 0) {
                if (i10 == 1) {
                    promise2 = (Promise) this.L$4;
                    sharedPreferences2 = (SharedPreferences) this.L$3;
                    objectRef2 = (Ref.ObjectRef) this.L$2;
                    objectRef = (Ref.ObjectRef) this.L$1;
                    CoroutineScope coroutineScope = (CoroutineScope) this.L$0;
                    c.b(obj);
                } else {
                    throw new IllegalStateException("call to 'resume' before 'invoke' with coroutine");
                }
            } else {
                c.b(obj);
                CoroutineScope coroutineScope2 = (CoroutineScope) this.L$0;
                objectRef = this.$client;
                InstallReferrerModule installReferrerModule = this.this$0;
                objectRef2 = this.$referrer;
                sharedPreferences = this.$prefs;
                promise = this.$promise;
                Result.a aVar2 = Result.f33295e;
                reactApplicationContext = installReferrerModule.getReactApplicationContext();
                ?? build = InstallReferrerClient.newBuilder(reactApplicationContext).build();
                objectRef.element = build;
                if (build != 0) {
                    this.L$0 = coroutineScope2;
                    this.L$1 = objectRef;
                    this.L$2 = objectRef2;
                    this.L$3 = sharedPreferences;
                    this.L$4 = promise;
                    this.label = 1;
                    obj = InstallReferrerModuleKt.await(build, this);
                    if (obj == f10) {
                        return f10;
                    }
                    sharedPreferences2 = sharedPreferences;
                    promise2 = promise;
                } else {
                    num = null;
                    if (num == null && num.intValue() == 0) {
                        InstallReferrerClient installReferrerClient = objectRef.element;
                        if (installReferrerClient != null && (installReferrer = installReferrerClient.getInstallReferrer()) != null) {
                            t10 = installReferrer.getInstallReferrer();
                        } else {
                            t10 = 0;
                        }
                        objectRef2.element = t10;
                        Intrinsics.checkNotNull(sharedPreferences);
                        SharedPreferences.Editor edit = sharedPreferences.edit();
                        edit.putString("referrer", objectRef2.element);
                        edit.apply();
                        promise.resolve(objectRef2.element);
                        b10 = Result.b(Unit.f33298a);
                        SharedPreferences sharedPreferences3 = this.$prefs;
                        Promise promise3 = this.$promise;
                        int i11 = this.$attempts;
                        Throwable e10 = Result.e(b10);
                        if (e10 != null) {
                            Intrinsics.checkNotNull(sharedPreferences3);
                            SharedPreferences.Editor edit2 = sharedPreferences3.edit();
                            edit2.putInt("attempts", i11 + 1);
                            edit2.apply();
                            promise3.resolve(null);
                            if (e10 instanceof CancellationException) {
                                throw e10;
                            }
                        }
                        try {
                            InstallReferrerClient installReferrerClient2 = this.$client.element;
                            if (installReferrerClient2 != null) {
                                installReferrerClient2.endConnection();
                                unit = Unit.f33298a;
                            }
                            Result.b(unit);
                        } catch (Throwable th3) {
                            Result.a aVar3 = Result.f33295e;
                            Result.b(c.a(th3));
                        }
                        return Unit.f33298a;
                    }
                    throw new IllegalStateException("Check failed.");
                }
            }
            num = (Integer) obj;
            promise = promise2;
            sharedPreferences = sharedPreferences2;
            if (num == null) {
            }
            throw new IllegalStateException("Check failed.");
        }

        @Override // kotlin.jvm.functions.Function2
        public final Object invoke(CoroutineScope coroutineScope, Continuation<? super Unit> continuation) {
            return ((AnonymousClass1) create(coroutineScope, continuation)).invokeSuspend(Unit.f33298a);
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
    public InstallReferrerModule$get$1(Ref.ObjectRef<InstallReferrerClient> objectRef, InstallReferrerModule installReferrerModule, Ref.ObjectRef<String> objectRef2, SharedPreferences sharedPreferences, Promise promise, int i10, Continuation<? super InstallReferrerModule$get$1> continuation) {
        super(2, continuation);
        this.$client = objectRef;
        this.this$0 = installReferrerModule;
        this.$referrer = objectRef2;
        this.$prefs = sharedPreferences;
        this.$promise = promise;
        this.$attempts = i10;
    }

    @Override // kotlin.coroutines.jvm.internal.a
    public final Continuation<Unit> create(Object obj, Continuation<?> continuation) {
        return new InstallReferrerModule$get$1(this.$client, this.this$0, this.$referrer, this.$prefs, this.$promise, this.$attempts, continuation);
    }

    @Override // kotlin.coroutines.jvm.internal.a
    public final Object invokeSuspend(Object obj) {
        Object f10 = b.f();
        int i10 = this.label;
        if (i10 != 0) {
            if (i10 == 1) {
                c.b(obj);
            } else {
                throw new IllegalStateException("call to 'resume' before 'invoke' with coroutine");
            }
        } else {
            c.b(obj);
            AnonymousClass1 anonymousClass1 = new AnonymousClass1(this.$client, this.this$0, this.$referrer, this.$prefs, this.$promise, this.$attempts, null);
            this.label = 1;
            if (t1.c(1000L, anonymousClass1, this) == f10) {
                return f10;
            }
        }
        return Unit.f33298a;
    }

    @Override // kotlin.jvm.functions.Function2
    public final Object invoke(CoroutineScope coroutineScope, Continuation<? super Unit> continuation) {
        return ((InstallReferrerModule$get$1) create(coroutineScope, continuation)).invokeSuspend(Unit.f33298a);
    }
}

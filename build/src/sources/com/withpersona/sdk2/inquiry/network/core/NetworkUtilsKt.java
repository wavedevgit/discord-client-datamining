package com.withpersona.sdk2.inquiry.network.core;

import com.withpersona.sdk2.inquiry.network.core.InternalErrorInfo;
import com.withpersona.sdk2.inquiry.network.core.NetworkCallResult;
import java.net.SocketTimeoutException;
import kotlin.Unit;
import kotlin.coroutines.Continuation;
import kotlin.jvm.functions.Function1;
import lv.z;
import org.jetbrains.annotations.NotNull;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class NetworkUtilsKt {
    private static final int NUM_RETRIES = 3;
    @NotNull
    public static final String SUBSYSTEM = "com.withpersona.sdk2.inquiry.network";

    public static final <T> Object enqueueRetriableRequestWithRetry(@NotNull Function1<? super Continuation<? super z<T>>, ? extends Object> function1, @NotNull Continuation<? super NetworkCallResult<T>> continuation) {
        return enqueueWithRetryWhen(function1, new Function1() { // from class: com.withpersona.sdk2.inquiry.network.core.d
            @Override // kotlin.jvm.functions.Function1
            public final Object invoke(Object obj) {
                boolean isRecoverable;
                isRecoverable = ((InternalErrorInfo.NetworkErrorInfo) obj).isRecoverable();
                return Boolean.valueOf(isRecoverable);
            }
        }, continuation);
    }

    public static final <T> Object enqueueVerificationRequestWithRetry(@NotNull Function1<? super Continuation<? super z<T>>, ? extends Object> function1, @NotNull Continuation<? super NetworkCallResult<T>> continuation) {
        return enqueueWithRetryWhen(function1, new Function1() { // from class: com.withpersona.sdk2.inquiry.network.core.e
            @Override // kotlin.jvm.functions.Function1
            public final Object invoke(Object obj) {
                boolean enqueueVerificationRequestWithRetry$lambda$3;
                enqueueVerificationRequestWithRetry$lambda$3 = NetworkUtilsKt.enqueueVerificationRequestWithRetry$lambda$3((InternalErrorInfo.NetworkErrorInfo) obj);
                return Boolean.valueOf(enqueueVerificationRequestWithRetry$lambda$3);
            }
        }, continuation);
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final boolean enqueueVerificationRequestWithRetry$lambda$3(InternalErrorInfo.NetworkErrorInfo networkErrorInfo) {
        int code = networkErrorInfo.getCode();
        if (code != 0 && code != 409 && code != 413 && code != 422) {
            return true;
        }
        return false;
    }

    /* JADX WARN: Removed duplicated region for block: B:10:0x0023  */
    /* JADX WARN: Removed duplicated region for block: B:14:0x003f  */
    /* JADX WARN: Removed duplicated region for block: B:17:0x004d  */
    /* JADX WARN: Removed duplicated region for block: B:23:0x0067  */
    /* JADX WARN: Removed duplicated region for block: B:25:0x0071  */
    /* JADX WARN: Removed duplicated region for block: B:31:0x008a  */
    /* JADX WARN: Removed duplicated region for block: B:33:0x008e  */
    /* JADX WARN: Unsupported multi-entry loop pattern (BACK_EDGE: B:20:0x005c -> B:21:0x005f). Please submit an issue!!! */
    /*
        Code decompiled incorrectly, please refer to instructions dump.
        To view partially-correct add '--show-bad-code' argument
    */
    public static final <T> java.lang.Object enqueueWithRetryWhen(@org.jetbrains.annotations.NotNull kotlin.jvm.functions.Function1<? super kotlin.coroutines.Continuation<? super lv.z<T>>, ? extends java.lang.Object> r6, @org.jetbrains.annotations.NotNull kotlin.jvm.functions.Function1<? super com.withpersona.sdk2.inquiry.network.core.InternalErrorInfo.NetworkErrorInfo, java.lang.Boolean> r7, @org.jetbrains.annotations.NotNull kotlin.coroutines.Continuation<? super com.withpersona.sdk2.inquiry.network.core.NetworkCallResult<T>> r8) {
        /*
            boolean r0 = r8 instanceof com.withpersona.sdk2.inquiry.network.core.NetworkUtilsKt$enqueueWithRetryWhen$1
            if (r0 == 0) goto L13
            r0 = r8
            com.withpersona.sdk2.inquiry.network.core.NetworkUtilsKt$enqueueWithRetryWhen$1 r0 = (com.withpersona.sdk2.inquiry.network.core.NetworkUtilsKt$enqueueWithRetryWhen$1) r0
            int r1 = r0.label
            r2 = -2147483648(0xffffffff80000000, float:-0.0)
            r3 = r1 & r2
            if (r3 == 0) goto L13
            int r1 = r1 - r2
            r0.label = r1
            goto L18
        L13:
            com.withpersona.sdk2.inquiry.network.core.NetworkUtilsKt$enqueueWithRetryWhen$1 r0 = new com.withpersona.sdk2.inquiry.network.core.NetworkUtilsKt$enqueueWithRetryWhen$1
            r0.<init>(r8)
        L18:
            java.lang.Object r8 = r0.result
            java.lang.Object r1 = rr.b.f()
            int r2 = r0.label
            r3 = 1
            if (r2 == 0) goto L3f
            if (r2 != r3) goto L37
            int r6 = r0.I$0
            java.lang.Object r7 = r0.L$1
            kotlin.jvm.functions.Function1 r7 = (kotlin.jvm.functions.Function1) r7
            java.lang.Object r2 = r0.L$0
            kotlin.jvm.functions.Function1 r2 = (kotlin.jvm.functions.Function1) r2
            kotlin.c.b(r8)
            r5 = r0
            r0 = r7
            r7 = r2
            r2 = r5
            goto L5f
        L37:
            java.lang.IllegalStateException r6 = new java.lang.IllegalStateException
            java.lang.String r7 = "call to 'resume' before 'invoke' with coroutine"
            r6.<init>(r7)
            throw r6
        L3f:
            kotlin.c.b(r8)
            r8 = 0
            r2 = 0
            r5 = r7
            r7 = r6
            r6 = r2
            r2 = r0
        L48:
            r0 = r8
            r8 = r5
            r4 = 3
            if (r6 >= r4) goto L86
            r2.L$0 = r7
            r2.L$1 = r8
            r2.I$0 = r6
            r2.label = r3
            java.lang.Object r0 = r7.invoke(r2)
            if (r0 != r1) goto L5c
            return r1
        L5c:
            r5 = r0
            r0 = r8
            r8 = r5
        L5f:
            lv.z r8 = (lv.z) r8
            boolean r4 = r8.g()
            if (r4 == 0) goto L71
            com.withpersona.sdk2.inquiry.network.core.NetworkCallResult$Success r6 = new com.withpersona.sdk2.inquiry.network.core.NetworkCallResult$Success
            java.lang.Object r7 = r8.a()
            r6.<init>(r7)
            return r6
        L71:
            com.withpersona.sdk2.inquiry.network.core.InternalErrorInfo$NetworkErrorInfo r8 = toErrorInfo(r8)
            java.lang.Object r4 = r0.invoke(r8)
            java.lang.Boolean r4 = (java.lang.Boolean) r4
            boolean r4 = r4.booleanValue()
            if (r4 != 0) goto L83
            r0 = r8
            goto L86
        L83:
            int r6 = r6 + r3
            r5 = r0
            goto L48
        L86:
            com.withpersona.sdk2.inquiry.network.core.NetworkCallResult$Failure r6 = new com.withpersona.sdk2.inquiry.network.core.NetworkCallResult$Failure
            if (r0 == 0) goto L8e
            r6.<init>(r0)
            return r6
        L8e:
            java.lang.IllegalArgumentException r6 = new java.lang.IllegalArgumentException
            java.lang.String r7 = "Required value was null."
            r6.<init>(r7)
            throw r6
        */
        throw new UnsupportedOperationException("Method not decompiled: com.withpersona.sdk2.inquiry.network.core.NetworkUtilsKt.enqueueWithRetryWhen(kotlin.jvm.functions.Function1, kotlin.jvm.functions.Function1, kotlin.coroutines.Continuation):java.lang.Object");
    }

    @NotNull
    public static final <T> NetworkCallResult<T> onFailure(@NotNull NetworkCallResult<T> networkCallResult, @NotNull Function1<? super InternalErrorInfo.NetworkErrorInfo, Unit> function1) {
        if (networkCallResult instanceof NetworkCallResult.Failure) {
            function1.invoke(((NetworkCallResult.Failure) networkCallResult).getNetworkErrorInfo());
        }
        return networkCallResult;
    }

    @NotNull
    public static final <T> NetworkCallResult<T> onSuccess(@NotNull NetworkCallResult<T> networkCallResult, @NotNull Function1<? super T, Unit> function1) {
        if (networkCallResult instanceof NetworkCallResult.Success) {
            function1.invoke(((NetworkCallResult.Success) networkCallResult).getResponse());
        }
        return networkCallResult;
    }

    /* JADX WARN: Removed duplicated region for block: B:102:0x0155  */
    /* JADX WARN: Removed duplicated region for block: B:114:0x0179  */
    /* JADX WARN: Removed duplicated region for block: B:124:0x0197  */
    /* JADX WARN: Removed duplicated region for block: B:41:0x00a1  */
    /* JADX WARN: Removed duplicated region for block: B:44:0x00a8  */
    /* JADX WARN: Removed duplicated region for block: B:54:0x00c2  */
    /* JADX WARN: Removed duplicated region for block: B:66:0x00e7  */
    /* JADX WARN: Removed duplicated region for block: B:78:0x010c  */
    /* JADX WARN: Removed duplicated region for block: B:90:0x0131  */
    @org.jetbrains.annotations.NotNull
    /*
        Code decompiled incorrectly, please refer to instructions dump.
        To view partially-correct add '--show-bad-code' argument
    */
    public static final com.withpersona.sdk2.inquiry.network.core.InternalErrorInfo.NetworkErrorInfo toErrorInfo(@org.jetbrains.annotations.NotNull lv.z<?> r8) {
        /*
            Method dump skipped, instructions count: 446
            To view this dump add '--comments-level debug' option
        */
        throw new UnsupportedOperationException("Method not decompiled: com.withpersona.sdk2.inquiry.network.core.NetworkUtilsKt.toErrorInfo(lv.z):com.withpersona.sdk2.inquiry.network.core.InternalErrorInfo$NetworkErrorInfo");
    }

    @NotNull
    public static final InternalErrorInfo.NetworkErrorInfo toSocketTimeoutErrorInfo(@NotNull SocketTimeoutException socketTimeoutException) {
        return new InternalErrorInfo.NetworkErrorInfo(0, socketTimeoutException.getLocalizedMessage(), true, null, 8, null);
    }
}

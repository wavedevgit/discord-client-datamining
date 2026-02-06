package com.discord.analytics;

import com.android.installreferrer.api.InstallReferrerClient;
import com.android.installreferrer.api.InstallReferrerStateListener;
import kotlin.Metadata;
import kotlin.Result;
import kotlin.Unit;
import kotlin.c;
import kotlin.coroutines.Continuation;
import kotlin.coroutines.jvm.internal.g;
import kotlin.jvm.functions.Function1;
import kotlin.jvm.internal.SourceDebugExtension;
import kotlinx.coroutines.CancellableContinuation;
import kotlinx.coroutines.e;
import wr.b;
@Metadata(d1 = {"\u0000\u000e\n\u0000\n\u0002\u0010\b\n\u0002\u0018\u0002\n\u0002\b\u0002\u001a\u0012\u0010\u0000\u001a\u00020\u0001*\u00020\u0002H\u0082@¢\u0006\u0002\u0010\u0003¨\u0006\u0004"}, d2 = {"await", "", "Lcom/android/installreferrer/api/InstallReferrerClient;", "(Lcom/android/installreferrer/api/InstallReferrerClient;Lkotlin/coroutines/Continuation;)Ljava/lang/Object;", "analytics_release"}, k = 2, mv = {2, 1, 0}, xi = 48)
@SourceDebugExtension({"SMAP\nInstallReferrerModule.kt\nKotlin\n*S Kotlin\n*F\n+ 1 InstallReferrerModule.kt\ncom/discord/analytics/InstallReferrerModuleKt\n+ 2 CancellableContinuation.kt\nkotlinx/coroutines/CancellableContinuationKt\n*L\n1#1,98:1\n426#2,11:99\n*S KotlinDebug\n*F\n+ 1 InstallReferrerModule.kt\ncom/discord/analytics/InstallReferrerModuleKt\n*L\n74#1:99,11\n*E\n"})
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public final class InstallReferrerModuleKt {
    /* JADX INFO: Access modifiers changed from: private */
    public static final Object await(final InstallReferrerClient installReferrerClient, Continuation<? super Integer> continuation) {
        Object b10;
        final e eVar = new e(b.c(continuation), 1);
        eVar.H();
        InstallReferrerStateListener installReferrerStateListener = new InstallReferrerStateListener() { // from class: com.discord.analytics.InstallReferrerModuleKt$await$2$listener$1
            @Override // com.android.installreferrer.api.InstallReferrerStateListener
            public void onInstallReferrerServiceDisconnected() {
                if (CancellableContinuation.this.a()) {
                    CancellableContinuation.a.a(CancellableContinuation.this, null, 1, null);
                }
            }

            @Override // com.android.installreferrer.api.InstallReferrerStateListener
            public void onInstallReferrerSetupFinished(int i10) {
                CancellableContinuation.this.resumeWith(Result.b(Integer.valueOf(i10)));
            }
        };
        eVar.c(new Function1<Throwable, Unit>() { // from class: com.discord.analytics.InstallReferrerModuleKt$await$2$1
            @Override // kotlin.jvm.functions.Function1
            public /* bridge */ /* synthetic */ Object invoke(Object obj) {
                invoke((Throwable) obj);
                return Unit.f32008a;
            }

            public final void invoke(Throwable th2) {
                InstallReferrerClient installReferrerClient2 = InstallReferrerClient.this;
                try {
                    Result.a aVar = Result.f32005e;
                    installReferrerClient2.endConnection();
                    Result.b(Unit.f32008a);
                } catch (Throwable th3) {
                    Result.a aVar2 = Result.f32005e;
                    Result.b(c.a(th3));
                }
            }
        });
        try {
            Result.a aVar = Result.f32005e;
            installReferrerClient.startConnection(installReferrerStateListener);
            b10 = Result.b(Unit.f32008a);
        } catch (Throwable th2) {
            Result.a aVar2 = Result.f32005e;
            b10 = Result.b(c.a(th2));
        }
        Throwable e10 = Result.e(b10);
        if (e10 != null) {
            eVar.resumeWith(Result.b(c.a(e10)));
        }
        Object B = eVar.B();
        if (B == b.f()) {
            g.c(continuation);
        }
        return B;
    }
}

package com.margelo.nitro.playagerangedeclaration;

import android.content.Context;
import android.util.Log;
import com.facebook.react.bridge.ReactApplicationContext;
import com.margelo.nitro.NitroModules;
import com.margelo.nitro.core.Promise;
import java.text.SimpleDateFormat;
import java.util.Date;
import java.util.Locale;
import kotlin.Metadata;
import kotlin.Result;
import kotlin.Unit;
import kotlin.coroutines.Continuation;
import kotlin.coroutines.jvm.internal.g;
import kotlin.coroutines.jvm.internal.k;
import kotlin.jvm.functions.Function1;
import kotlin.jvm.internal.Intrinsics;
import kotlinx.coroutines.CancellableContinuation;
import th.d;
import th.e;
import xg.f;
@Metadata(d1 = {"\u00000\n\u0002\u0018\u0002\n\u0002\u0018\u0002\n\u0002\b\u0002\n\u0002\u0018\u0002\n\u0002\u0018\u0002\n\u0002\b\u0002\n\u0002\u0010\u0006\n\u0002\b\u0003\n\u0002\u0018\u0002\n\u0002\b\u0002\n\u0002\u0018\u0002\n\u0002\b\u0004\b\u0007\u0018\u00002\u00020\u0001B\u0007¢\u0006\u0004\b\u0002\u0010\u0003J\u0015\u0010\u0006\u001a\b\u0012\u0004\u0012\u00020\u00050\u0004H\u0016¢\u0006\u0004\b\u0006\u0010\u0007J1\u0010\r\u001a\b\u0012\u0004\u0012\u00020\f0\u00042\u0006\u0010\t\u001a\u00020\b2\b\u0010\n\u001a\u0004\u0018\u00010\b2\b\u0010\u000b\u001a\u0004\u0018\u00010\bH\u0016¢\u0006\u0004\b\r\u0010\u000eR\u0014\u0010\u0012\u001a\u00020\u000f8BX\u0082\u0004¢\u0006\u0006\u001a\u0004\b\u0010\u0010\u0011¨\u0006\u0013"}, d2 = {"Lcom/margelo/nitro/playagerangedeclaration/PlayAgeRangeDeclaration;", "Lcom/margelo/nitro/playagerangedeclaration/HybridPlayAgeRangeDeclarationSpec;", "<init>", "()V", "Lcom/margelo/nitro/core/Promise;", "Lcom/margelo/nitro/playagerangedeclaration/PlayAgeRangeDeclarationResult;", "getPlayAgeRangeDeclaration", "()Lcom/margelo/nitro/core/Promise;", "", "firstThresholdAge", "secondThresholdAge", "thirdThresholdAge", "Lcom/margelo/nitro/playagerangedeclaration/DeclaredAgeRangeResult;", "requestDeclaredAgeRange", "(DLjava/lang/Double;Ljava/lang/Double;)Lcom/margelo/nitro/core/Promise;", "Landroid/content/Context;", "b", "()Landroid/content/Context;", "appContext", "react-native-play-age-range-declaration_release"}, k = 1, mv = {2, 1, 0}, xi = 48)
@fb.a
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class PlayAgeRangeDeclaration extends HybridPlayAgeRangeDeclarationSpec {

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    static final class a extends k implements Function1 {

        /* renamed from: d  reason: collision with root package name */
        Object f17258d;

        /* renamed from: e  reason: collision with root package name */
        Object f17259e;

        /* renamed from: i  reason: collision with root package name */
        int f17260i;

        /* JADX INFO: Access modifiers changed from: package-private */
        /* renamed from: com.margelo.nitro.playagerangedeclaration.PlayAgeRangeDeclaration$a$a  reason: collision with other inner class name */
        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
        public static final class C0207a implements Function1 {

            /* renamed from: d  reason: collision with root package name */
            final /* synthetic */ CancellableContinuation f17262d;

            C0207a(CancellableContinuation cancellableContinuation) {
                this.f17262d = cancellableContinuation;
            }

            public final void a(e eVar) {
                String str;
                String str2;
                boolean z10;
                Integer a10;
                Double d10;
                Integer b10;
                SimpleDateFormat simpleDateFormat = new SimpleDateFormat("yyyy-MM-dd", Locale.US);
                Date e10 = eVar.e();
                Double d11 = null;
                if (e10 != null) {
                    str = simpleDateFormat.format(e10);
                } else {
                    str = null;
                }
                Integer f10 = eVar.f();
                if (f10 != null) {
                    str2 = f10.toString();
                } else {
                    str2 = null;
                }
                if (str2 != null && str2.length() != 0) {
                    z10 = false;
                } else {
                    z10 = true;
                }
                boolean z11 = !z10;
                CancellableContinuation cancellableContinuation = this.f17262d;
                String d12 = eVar.d();
                if (eVar.a() != null) {
                    d10 = Double.valueOf(a10.intValue());
                } else {
                    d10 = null;
                }
                if (eVar.b() != null) {
                    d11 = Double.valueOf(b10.intValue());
                }
                cancellableContinuation.resumeWith(Result.b(new PlayAgeRangeDeclarationResult(z11, d12, str2, null, d10, d11, str)));
            }

            @Override // kotlin.jvm.functions.Function1
            public /* bridge */ /* synthetic */ Object invoke(Object obj) {
                a((e) obj);
                return Unit.f31988a;
            }
        }

        /* JADX INFO: Access modifiers changed from: package-private */
        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
        public static final class b implements f {

            /* renamed from: a  reason: collision with root package name */
            final /* synthetic */ CancellableContinuation f17263a;

            b(CancellableContinuation cancellableContinuation) {
                this.f17263a = cancellableContinuation;
            }

            @Override // xg.f
            public final void onFailure(Exception e10) {
                Intrinsics.checkNotNullParameter(e10, "e");
                String message = e10.getMessage();
                if (message == null) {
                    message = "Unknown error";
                }
                String str = message;
                CancellableContinuation cancellableContinuation = this.f17263a;
                Result.a aVar = Result.f31985e;
                cancellableContinuation.resumeWith(Result.b(new PlayAgeRangeDeclarationResult(false, null, null, str, null, null, null)));
            }
        }

        a(Continuation continuation) {
            super(1, continuation);
        }

        @Override // kotlin.coroutines.jvm.internal.a
        public final Continuation create(Continuation continuation) {
            return new a(continuation);
        }

        @Override // kotlin.coroutines.jvm.internal.a
        public final Object invokeSuspend(Object obj) {
            Object f10 = ur.b.f();
            int i10 = this.f17260i;
            try {
                if (i10 != 0) {
                    if (i10 == 1) {
                        d dVar = (d) this.f17259e;
                        th.b bVar = (th.b) this.f17258d;
                        kotlin.c.b(obj);
                    } else {
                        throw new IllegalStateException("call to 'resume' before 'invoke' with coroutine");
                    }
                } else {
                    kotlin.c.b(obj);
                    th.b a10 = th.c.a(PlayAgeRangeDeclaration.this.b());
                    Intrinsics.checkNotNullExpressionValue(a10, "create(...)");
                    d a11 = d.a().a();
                    Intrinsics.checkNotNullExpressionValue(a11, "build(...)");
                    this.f17258d = a10;
                    this.f17259e = a11;
                    this.f17260i = 1;
                    kotlinx.coroutines.e eVar = new kotlinx.coroutines.e(ur.b.c(this), 1);
                    eVar.H();
                    a10.a(a11).g(new c(new C0207a(eVar))).e(new b(eVar));
                    obj = eVar.B();
                    if (obj == ur.b.f()) {
                        g.c(this);
                    }
                    if (obj == f10) {
                        return f10;
                    }
                }
                return (PlayAgeRangeDeclarationResult) obj;
            } catch (Exception e10) {
                Log.e("PlayAgeRangeDeclaration", "Initialization error", e10);
                String message = e10.getMessage();
                return new PlayAgeRangeDeclarationResult(false, null, null, "AGE_SIGNALS_INIT_ERROR: " + message, null, null, null);
            }
        }

        @Override // kotlin.jvm.functions.Function1
        public final Object invoke(Continuation continuation) {
            return ((a) create(continuation)).invokeSuspend(Unit.f31988a);
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    static final class b extends k implements Function1 {

        /* renamed from: d  reason: collision with root package name */
        int f17264d;

        b(Continuation continuation) {
            super(1, continuation);
        }

        @Override // kotlin.coroutines.jvm.internal.a
        public final Continuation create(Continuation continuation) {
            return new b(continuation);
        }

        @Override // kotlin.coroutines.jvm.internal.a
        public final Object invokeSuspend(Object obj) {
            ur.b.f();
            if (this.f17264d == 0) {
                kotlin.c.b(obj);
                return new DeclaredAgeRangeResult(false, null, null, null, null);
            }
            throw new IllegalStateException("call to 'resume' before 'invoke' with coroutine");
        }

        @Override // kotlin.jvm.functions.Function1
        public final Object invoke(Continuation continuation) {
            return ((b) create(continuation)).invokeSuspend(Unit.f31988a);
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class c implements xg.g {

        /* renamed from: a  reason: collision with root package name */
        private final /* synthetic */ Function1 f17265a;

        c(Function1 function) {
            Intrinsics.checkNotNullParameter(function, "function");
            this.f17265a = function;
        }

        @Override // xg.g
        public final /* synthetic */ void onSuccess(Object obj) {
            this.f17265a.invoke(obj);
        }
    }

    /* JADX INFO: Access modifiers changed from: private */
    public final Context b() {
        ReactApplicationContext a10 = NitroModules.Companion.a();
        if (a10 != null) {
            return a10;
        }
        throw new IllegalStateException("Application context not available");
    }

    @Override // com.margelo.nitro.playagerangedeclaration.HybridPlayAgeRangeDeclarationSpec
    public Promise getPlayAgeRangeDeclaration() {
        return Promise.a.b(Promise.Companion, null, new a(null), 1, null);
    }

    @Override // com.margelo.nitro.playagerangedeclaration.HybridPlayAgeRangeDeclarationSpec
    public Promise requestDeclaredAgeRange(double d10, Double d11, Double d12) {
        return Promise.a.b(Promise.Companion, null, new b(null), 1, null);
    }
}

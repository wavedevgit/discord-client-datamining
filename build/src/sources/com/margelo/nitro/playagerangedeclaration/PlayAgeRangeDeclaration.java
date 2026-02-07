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
import uh.d;
import uh.e;
import yg.f;
@Metadata(d1 = {"\u00000\n\u0002\u0018\u0002\n\u0002\u0018\u0002\n\u0002\b\u0002\n\u0002\u0018\u0002\n\u0002\u0018\u0002\n\u0002\b\u0002\n\u0002\u0010\u0006\n\u0002\b\u0003\n\u0002\u0018\u0002\n\u0002\b\u0002\n\u0002\u0018\u0002\n\u0002\b\u0004\b\u0007\u0018\u00002\u00020\u0001B\u0007¢\u0006\u0004\b\u0002\u0010\u0003J\u0015\u0010\u0006\u001a\b\u0012\u0004\u0012\u00020\u00050\u0004H\u0016¢\u0006\u0004\b\u0006\u0010\u0007J1\u0010\r\u001a\b\u0012\u0004\u0012\u00020\f0\u00042\u0006\u0010\t\u001a\u00020\b2\b\u0010\n\u001a\u0004\u0018\u00010\b2\b\u0010\u000b\u001a\u0004\u0018\u00010\bH\u0016¢\u0006\u0004\b\r\u0010\u000eR\u0014\u0010\u0012\u001a\u00020\u000f8BX\u0082\u0004¢\u0006\u0006\u001a\u0004\b\u0010\u0010\u0011¨\u0006\u0013"}, d2 = {"Lcom/margelo/nitro/playagerangedeclaration/PlayAgeRangeDeclaration;", "Lcom/margelo/nitro/playagerangedeclaration/HybridPlayAgeRangeDeclarationSpec;", "<init>", "()V", "Lcom/margelo/nitro/core/Promise;", "Lcom/margelo/nitro/playagerangedeclaration/PlayAgeRangeDeclarationResult;", "getPlayAgeRangeDeclaration", "()Lcom/margelo/nitro/core/Promise;", "", "firstThresholdAge", "secondThresholdAge", "thirdThresholdAge", "Lcom/margelo/nitro/playagerangedeclaration/DeclaredAgeRangeResult;", "requestDeclaredAgeRange", "(DLjava/lang/Double;Ljava/lang/Double;)Lcom/margelo/nitro/core/Promise;", "Landroid/content/Context;", "b", "()Landroid/content/Context;", "appContext", "react-native-play-age-range-declaration_release"}, k = 1, mv = {2, 1, 0}, xi = 48)
@fb.a
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class PlayAgeRangeDeclaration extends HybridPlayAgeRangeDeclarationSpec {

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    static final class a extends k implements Function1 {

        /* renamed from: d  reason: collision with root package name */
        Object f17238d;

        /* renamed from: e  reason: collision with root package name */
        Object f17239e;

        /* renamed from: i  reason: collision with root package name */
        int f17240i;

        /* JADX INFO: Access modifiers changed from: package-private */
        /* renamed from: com.margelo.nitro.playagerangedeclaration.PlayAgeRangeDeclaration$a$a  reason: collision with other inner class name */
        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
        public static final class C0199a implements Function1 {

            /* renamed from: d  reason: collision with root package name */
            final /* synthetic */ CancellableContinuation f17242d;

            C0199a(CancellableContinuation cancellableContinuation) {
                this.f17242d = cancellableContinuation;
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
                CancellableContinuation cancellableContinuation = this.f17242d;
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
                return Unit.f32056a;
            }
        }

        /* JADX INFO: Access modifiers changed from: package-private */
        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
        public static final class b implements f {

            /* renamed from: a  reason: collision with root package name */
            final /* synthetic */ CancellableContinuation f17243a;

            b(CancellableContinuation cancellableContinuation) {
                this.f17243a = cancellableContinuation;
            }

            @Override // yg.f
            public final void onFailure(Exception e10) {
                Intrinsics.checkNotNullParameter(e10, "e");
                String message = e10.getMessage();
                if (message == null) {
                    message = "Unknown error";
                }
                String str = message;
                CancellableContinuation cancellableContinuation = this.f17243a;
                Result.a aVar = Result.f32053e;
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
            Object f10 = wr.b.f();
            int i10 = this.f17240i;
            try {
                if (i10 != 0) {
                    if (i10 == 1) {
                        d dVar = (d) this.f17239e;
                        uh.b bVar = (uh.b) this.f17238d;
                        kotlin.c.b(obj);
                    } else {
                        throw new IllegalStateException("call to 'resume' before 'invoke' with coroutine");
                    }
                } else {
                    kotlin.c.b(obj);
                    uh.b a10 = uh.c.a(PlayAgeRangeDeclaration.this.b());
                    Intrinsics.checkNotNullExpressionValue(a10, "create(...)");
                    d a11 = d.a().a();
                    Intrinsics.checkNotNullExpressionValue(a11, "build(...)");
                    this.f17238d = a10;
                    this.f17239e = a11;
                    this.f17240i = 1;
                    kotlinx.coroutines.e eVar = new kotlinx.coroutines.e(wr.b.c(this), 1);
                    eVar.H();
                    a10.a(a11).g(new c(new C0199a(eVar))).e(new b(eVar));
                    obj = eVar.B();
                    if (obj == wr.b.f()) {
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
            return ((a) create(continuation)).invokeSuspend(Unit.f32056a);
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    static final class b extends k implements Function1 {

        /* renamed from: d  reason: collision with root package name */
        int f17244d;

        b(Continuation continuation) {
            super(1, continuation);
        }

        @Override // kotlin.coroutines.jvm.internal.a
        public final Continuation create(Continuation continuation) {
            return new b(continuation);
        }

        @Override // kotlin.coroutines.jvm.internal.a
        public final Object invokeSuspend(Object obj) {
            wr.b.f();
            if (this.f17244d == 0) {
                kotlin.c.b(obj);
                return new DeclaredAgeRangeResult(false, null, null, null, null);
            }
            throw new IllegalStateException("call to 'resume' before 'invoke' with coroutine");
        }

        @Override // kotlin.jvm.functions.Function1
        public final Object invoke(Continuation continuation) {
            return ((b) create(continuation)).invokeSuspend(Unit.f32056a);
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class c implements yg.g {

        /* renamed from: a  reason: collision with root package name */
        private final /* synthetic */ Function1 f17245a;

        c(Function1 function) {
            Intrinsics.checkNotNullParameter(function, "function");
            this.f17245a = function;
        }

        @Override // yg.g
        public final /* synthetic */ void onSuccess(Object obj) {
            this.f17245a.invoke(obj);
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

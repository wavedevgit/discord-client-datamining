package gr;

import android.content.Context;
import android.net.Uri;
import id.zelory.compressor.constraint.Compression;
import java.io.File;
import kotlin.Unit;
import kotlin.coroutines.Continuation;
import kotlin.coroutines.CoroutineContext;
import kotlin.coroutines.jvm.internal.k;
import kotlin.jvm.functions.Function1;
import kotlin.jvm.functions.Function2;
import kotlin.jvm.internal.Intrinsics;
import kotlin.jvm.internal.Lambda;
import kotlinx.coroutines.CoroutineScope;
import os.g;
import os.m0;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class a {

    /* renamed from: a  reason: collision with root package name */
    public static final a f25590a = new a();

    /* JADX INFO: Access modifiers changed from: package-private */
    /* renamed from: gr.a$a  reason: collision with other inner class name */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class C0349a extends Lambda implements Function1 {

        /* renamed from: d  reason: collision with root package name */
        public static final C0349a f25591d = new C0349a();

        C0349a() {
            super(1);
        }

        public final void a(Compression receiver) {
            Intrinsics.checkParameterIsNotNull(receiver, "$receiver");
            hr.c.b(receiver, 0, 0, null, 0, 15, null);
        }

        @Override // kotlin.jvm.functions.Function1
        public /* bridge */ /* synthetic */ Object invoke(Object obj) {
            a((Compression) obj);
            return Unit.f32056a;
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class b extends k implements Function2 {

        /* renamed from: d  reason: collision with root package name */
        private CoroutineScope f25592d;

        /* renamed from: e  reason: collision with root package name */
        int f25593e;

        /* renamed from: i  reason: collision with root package name */
        final /* synthetic */ Function1 f25594i;

        /* renamed from: o  reason: collision with root package name */
        final /* synthetic */ Context f25595o;

        /* renamed from: p  reason: collision with root package name */
        final /* synthetic */ Uri f25596p;

        /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
        b(Function1 function1, Context context, Uri uri, Continuation continuation) {
            super(2, continuation);
            this.f25594i = function1;
            this.f25595o = context;
            this.f25596p = uri;
        }

        @Override // kotlin.coroutines.jvm.internal.a
        public final Continuation create(Object obj, Continuation completion) {
            Intrinsics.checkParameterIsNotNull(completion, "completion");
            b bVar = new b(this.f25594i, this.f25595o, this.f25596p, completion);
            bVar.f25592d = (CoroutineScope) obj;
            return bVar;
        }

        @Override // kotlin.jvm.functions.Function2
        public final Object invoke(Object obj, Object obj2) {
            return ((b) create(obj, (Continuation) obj2)).invokeSuspend(Unit.f32056a);
        }

        @Override // kotlin.coroutines.jvm.internal.a
        public final Object invokeSuspend(Object obj) {
            wr.b.f();
            if (this.f25593e == 0) {
                kotlin.c.b(obj);
                Compression compression = new Compression();
                this.f25594i.invoke(compression);
                File d10 = c.d(this.f25595o, this.f25596p);
                for (hr.a aVar : compression.b()) {
                    while (!aVar.isSatisfied(d10)) {
                        d10 = aVar.satisfy(d10);
                    }
                }
                return d10;
            }
            throw new IllegalStateException("call to 'resume' before 'invoke' with coroutine");
        }
    }

    private a() {
    }

    public static /* synthetic */ Object b(a aVar, Context context, Uri uri, CoroutineContext coroutineContext, Function1 function1, Continuation continuation, int i10, Object obj) {
        if ((i10 & 4) != 0) {
            coroutineContext = m0.b();
        }
        CoroutineContext coroutineContext2 = coroutineContext;
        if ((i10 & 8) != 0) {
            function1 = C0349a.f25591d;
        }
        return aVar.a(context, uri, coroutineContext2, function1, continuation);
    }

    public final Object a(Context context, Uri uri, CoroutineContext coroutineContext, Function1 function1, Continuation continuation) {
        return g.g(coroutineContext, new b(function1, context, uri, null), continuation);
    }
}

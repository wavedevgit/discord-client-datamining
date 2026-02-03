package br;

import android.content.Context;
import android.net.Uri;
import id.zelory.compressor.constraint.Compression;
import java.io.File;
import js.g;
import js.m0;
import kotlin.Unit;
import kotlin.coroutines.Continuation;
import kotlin.coroutines.CoroutineContext;
import kotlin.coroutines.jvm.internal.k;
import kotlin.jvm.functions.Function1;
import kotlin.jvm.functions.Function2;
import kotlin.jvm.internal.Intrinsics;
import kotlin.jvm.internal.Lambda;
import kotlinx.coroutines.CoroutineScope;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class a {

    /* renamed from: a  reason: collision with root package name */
    public static final a f6761a = new a();

    /* JADX INFO: Access modifiers changed from: package-private */
    /* renamed from: br.a$a  reason: collision with other inner class name */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class C0110a extends Lambda implements Function1 {

        /* renamed from: d  reason: collision with root package name */
        public static final C0110a f6762d = new C0110a();

        C0110a() {
            super(1);
        }

        public final void a(Compression receiver) {
            Intrinsics.checkParameterIsNotNull(receiver, "$receiver");
            cr.c.b(receiver, 0, 0, null, 0, 15, null);
        }

        @Override // kotlin.jvm.functions.Function1
        public /* bridge */ /* synthetic */ Object invoke(Object obj) {
            a((Compression) obj);
            return Unit.f32464a;
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class b extends k implements Function2 {

        /* renamed from: d  reason: collision with root package name */
        private CoroutineScope f6763d;

        /* renamed from: e  reason: collision with root package name */
        int f6764e;

        /* renamed from: i  reason: collision with root package name */
        final /* synthetic */ Function1 f6765i;

        /* renamed from: o  reason: collision with root package name */
        final /* synthetic */ Context f6766o;

        /* renamed from: p  reason: collision with root package name */
        final /* synthetic */ Uri f6767p;

        /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
        b(Function1 function1, Context context, Uri uri, Continuation continuation) {
            super(2, continuation);
            this.f6765i = function1;
            this.f6766o = context;
            this.f6767p = uri;
        }

        @Override // kotlin.coroutines.jvm.internal.a
        public final Continuation create(Object obj, Continuation completion) {
            Intrinsics.checkParameterIsNotNull(completion, "completion");
            b bVar = new b(this.f6765i, this.f6766o, this.f6767p, completion);
            bVar.f6763d = (CoroutineScope) obj;
            return bVar;
        }

        @Override // kotlin.jvm.functions.Function2
        public final Object invoke(Object obj, Object obj2) {
            return ((b) create(obj, (Continuation) obj2)).invokeSuspend(Unit.f32464a);
        }

        @Override // kotlin.coroutines.jvm.internal.a
        public final Object invokeSuspend(Object obj) {
            rr.b.f();
            if (this.f6764e == 0) {
                kotlin.c.b(obj);
                Compression compression = new Compression();
                this.f6765i.invoke(compression);
                File d10 = c.d(this.f6766o, this.f6767p);
                for (cr.a aVar : compression.b()) {
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
            function1 = C0110a.f6762d;
        }
        return aVar.a(context, uri, coroutineContext2, function1, continuation);
    }

    public final Object a(Context context, Uri uri, CoroutineContext coroutineContext, Function1 function1, Continuation continuation) {
        return g.g(coroutineContext, new b(function1, context, uri, null), continuation);
    }
}

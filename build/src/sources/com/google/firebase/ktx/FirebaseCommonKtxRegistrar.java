package com.google.firebase.ktx;

import androidx.annotation.Keep;
import com.google.firebase.components.ComponentRegistrar;
import java.util.List;
import java.util.concurrent.Executor;
import kotlin.Metadata;
import kotlin.collections.CollectionsKt;
import kotlin.jvm.internal.Intrinsics;
import kotlin.jvm.internal.SourceDebugExtension;
import kotlinx.coroutines.CoroutineDispatcher;
import org.jetbrains.annotations.NotNull;
import xi.d0;
import xi.g;
import xi.q;
import ys.u0;
@Keep
@Metadata(d1 = {"\u0000\u0018\n\u0002\u0018\u0002\n\u0002\u0018\u0002\n\u0002\b\u0002\n\u0002\u0010 \n\u0002\u0018\u0002\n\u0002\b\u0003\b\u0007\u0018\u00002\u00020\u0001B\u0007¢\u0006\u0004\b\u0002\u0010\u0003J\u0019\u0010\u0006\u001a\f\u0012\b\u0012\u0006\u0012\u0002\b\u00030\u00050\u0004H\u0016¢\u0006\u0004\b\u0006\u0010\u0007¨\u0006\b"}, d2 = {"Lcom/google/firebase/ktx/FirebaseCommonKtxRegistrar;", "Lcom/google/firebase/components/ComponentRegistrar;", "<init>", "()V", "", "Lxi/c;", "getComponents", "()Ljava/util/List;", "com.google.firebase-firebase-common"}, k = 1, mv = {1, 8, 0}, xi = 48)
@as.c
@SourceDebugExtension({"SMAP\nFirebase.kt\nKotlin\n*S Kotlin\n*F\n+ 1 Firebase.kt\ncom/google/firebase/ktx/FirebaseCommonKtxRegistrar\n+ 2 Firebase.kt\ncom/google/firebase/ktx/FirebaseKt\n*L\n1#1,158:1\n152#2,6:159\n152#2,6:165\n152#2,6:171\n152#2,6:177\n*S KotlinDebug\n*F\n+ 1 Firebase.kt\ncom/google/firebase/ktx/FirebaseCommonKtxRegistrar\n*L\n143#1:159,6\n144#1:165,6\n145#1:171,6\n146#1:177,6\n*E\n"})
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class FirebaseCommonKtxRegistrar implements ComponentRegistrar {

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class a implements g {

        /* renamed from: a  reason: collision with root package name */
        public static final a f17249a = new a();

        @Override // xi.g
        /* renamed from: b */
        public final CoroutineDispatcher a(xi.d dVar) {
            Object f10 = dVar.f(d0.a(wi.a.class, Executor.class));
            Intrinsics.checkNotNullExpressionValue(f10, "c.get(Qualified.qualifie…a, Executor::class.java))");
            return u0.b((Executor) f10);
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class b implements g {

        /* renamed from: a  reason: collision with root package name */
        public static final b f17250a = new b();

        @Override // xi.g
        /* renamed from: b */
        public final CoroutineDispatcher a(xi.d dVar) {
            Object f10 = dVar.f(d0.a(wi.c.class, Executor.class));
            Intrinsics.checkNotNullExpressionValue(f10, "c.get(Qualified.qualifie…a, Executor::class.java))");
            return u0.b((Executor) f10);
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class c implements g {

        /* renamed from: a  reason: collision with root package name */
        public static final c f17251a = new c();

        @Override // xi.g
        /* renamed from: b */
        public final CoroutineDispatcher a(xi.d dVar) {
            Object f10 = dVar.f(d0.a(wi.b.class, Executor.class));
            Intrinsics.checkNotNullExpressionValue(f10, "c.get(Qualified.qualifie…a, Executor::class.java))");
            return u0.b((Executor) f10);
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class d implements g {

        /* renamed from: a  reason: collision with root package name */
        public static final d f17252a = new d();

        @Override // xi.g
        /* renamed from: b */
        public final CoroutineDispatcher a(xi.d dVar) {
            Object f10 = dVar.f(d0.a(wi.d.class, Executor.class));
            Intrinsics.checkNotNullExpressionValue(f10, "c.get(Qualified.qualifie…a, Executor::class.java))");
            return u0.b((Executor) f10);
        }
    }

    @Override // com.google.firebase.components.ComponentRegistrar
    @NotNull
    public List<xi.c> getComponents() {
        xi.c d10 = xi.c.e(d0.a(wi.a.class, CoroutineDispatcher.class)).b(q.k(d0.a(wi.a.class, Executor.class))).e(a.f17249a).d();
        Intrinsics.checkNotNullExpressionValue(d10, "builder(Qualified.qualif…cher()\n    }\n    .build()");
        xi.c d11 = xi.c.e(d0.a(wi.c.class, CoroutineDispatcher.class)).b(q.k(d0.a(wi.c.class, Executor.class))).e(b.f17250a).d();
        Intrinsics.checkNotNullExpressionValue(d11, "builder(Qualified.qualif…cher()\n    }\n    .build()");
        xi.c d12 = xi.c.e(d0.a(wi.b.class, CoroutineDispatcher.class)).b(q.k(d0.a(wi.b.class, Executor.class))).e(c.f17251a).d();
        Intrinsics.checkNotNullExpressionValue(d12, "builder(Qualified.qualif…cher()\n    }\n    .build()");
        xi.c d13 = xi.c.e(d0.a(wi.d.class, CoroutineDispatcher.class)).b(q.k(d0.a(wi.d.class, Executor.class))).e(d.f17252a).d();
        Intrinsics.checkNotNullExpressionValue(d13, "builder(Qualified.qualif…cher()\n    }\n    .build()");
        return CollectionsKt.o(d10, d11, d12, d13);
    }
}

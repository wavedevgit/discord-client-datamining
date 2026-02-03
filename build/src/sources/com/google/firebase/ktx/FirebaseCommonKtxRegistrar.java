package com.google.firebase.ktx;

import androidx.annotation.Keep;
import com.google.firebase.components.ComponentRegistrar;
import hs.u0;
import java.util.List;
import java.util.concurrent.Executor;
import kotlin.Metadata;
import kotlin.collections.CollectionsKt;
import kotlin.jvm.internal.Intrinsics;
import kotlin.jvm.internal.SourceDebugExtension;
import kotlinx.coroutines.CoroutineDispatcher;
import org.jetbrains.annotations.NotNull;
import qi.d0;
import qi.g;
import qi.q;
@jr.c
@Keep
@Metadata(d1 = {"\u0000\u0018\n\u0002\u0018\u0002\n\u0002\u0018\u0002\n\u0002\b\u0002\n\u0002\u0010 \n\u0002\u0018\u0002\n\u0002\b\u0003\b\u0007\u0018\u00002\u00020\u0001B\u0007¢\u0006\u0004\b\u0002\u0010\u0003J\u0019\u0010\u0006\u001a\f\u0012\b\u0012\u0006\u0012\u0002\b\u00030\u00050\u0004H\u0016¢\u0006\u0004\b\u0006\u0010\u0007¨\u0006\b"}, d2 = {"Lcom/google/firebase/ktx/FirebaseCommonKtxRegistrar;", "Lcom/google/firebase/components/ComponentRegistrar;", "<init>", "()V", "", "Lqi/c;", "getComponents", "()Ljava/util/List;", "com.google.firebase-firebase-common"}, k = 1, mv = {1, 8, 0}, xi = 48)
@SourceDebugExtension({"SMAP\nFirebase.kt\nKotlin\n*S Kotlin\n*F\n+ 1 Firebase.kt\ncom/google/firebase/ktx/FirebaseCommonKtxRegistrar\n+ 2 Firebase.kt\ncom/google/firebase/ktx/FirebaseKt\n*L\n1#1,158:1\n152#2,6:159\n152#2,6:165\n152#2,6:171\n152#2,6:177\n*S KotlinDebug\n*F\n+ 1 Firebase.kt\ncom/google/firebase/ktx/FirebaseCommonKtxRegistrar\n*L\n143#1:159,6\n144#1:165,6\n145#1:171,6\n146#1:177,6\n*E\n"})
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class FirebaseCommonKtxRegistrar implements ComponentRegistrar {

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class a implements g {

        /* renamed from: a  reason: collision with root package name */
        public static final a f17018a = new a();

        @Override // qi.g
        /* renamed from: b */
        public final CoroutineDispatcher a(qi.d dVar) {
            Object d10 = dVar.d(d0.a(pi.a.class, Executor.class));
            Intrinsics.checkNotNullExpressionValue(d10, "c.get(Qualified.qualifie…a, Executor::class.java))");
            return u0.b((Executor) d10);
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class b implements g {

        /* renamed from: a  reason: collision with root package name */
        public static final b f17019a = new b();

        @Override // qi.g
        /* renamed from: b */
        public final CoroutineDispatcher a(qi.d dVar) {
            Object d10 = dVar.d(d0.a(pi.c.class, Executor.class));
            Intrinsics.checkNotNullExpressionValue(d10, "c.get(Qualified.qualifie…a, Executor::class.java))");
            return u0.b((Executor) d10);
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class c implements g {

        /* renamed from: a  reason: collision with root package name */
        public static final c f17020a = new c();

        @Override // qi.g
        /* renamed from: b */
        public final CoroutineDispatcher a(qi.d dVar) {
            Object d10 = dVar.d(d0.a(pi.b.class, Executor.class));
            Intrinsics.checkNotNullExpressionValue(d10, "c.get(Qualified.qualifie…a, Executor::class.java))");
            return u0.b((Executor) d10);
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class d implements g {

        /* renamed from: a  reason: collision with root package name */
        public static final d f17021a = new d();

        @Override // qi.g
        /* renamed from: b */
        public final CoroutineDispatcher a(qi.d dVar) {
            Object d10 = dVar.d(d0.a(pi.d.class, Executor.class));
            Intrinsics.checkNotNullExpressionValue(d10, "c.get(Qualified.qualifie…a, Executor::class.java))");
            return u0.b((Executor) d10);
        }
    }

    @Override // com.google.firebase.components.ComponentRegistrar
    @NotNull
    public List<qi.c> getComponents() {
        qi.c d10 = qi.c.e(d0.a(pi.a.class, CoroutineDispatcher.class)).b(q.k(d0.a(pi.a.class, Executor.class))).e(a.f17018a).d();
        Intrinsics.checkNotNullExpressionValue(d10, "builder(Qualified.qualif…cher()\n    }\n    .build()");
        qi.c d11 = qi.c.e(d0.a(pi.c.class, CoroutineDispatcher.class)).b(q.k(d0.a(pi.c.class, Executor.class))).e(b.f17019a).d();
        Intrinsics.checkNotNullExpressionValue(d11, "builder(Qualified.qualif…cher()\n    }\n    .build()");
        qi.c d12 = qi.c.e(d0.a(pi.b.class, CoroutineDispatcher.class)).b(q.k(d0.a(pi.b.class, Executor.class))).e(c.f17020a).d();
        Intrinsics.checkNotNullExpressionValue(d12, "builder(Qualified.qualif…cher()\n    }\n    .build()");
        qi.c d13 = qi.c.e(d0.a(pi.d.class, CoroutineDispatcher.class)).b(q.k(d0.a(pi.d.class, Executor.class))).e(d.f17021a).d();
        Intrinsics.checkNotNullExpressionValue(d13, "builder(Qualified.qualif…cher()\n    }\n    .build()");
        return CollectionsKt.o(d10, d11, d12, d13);
    }
}

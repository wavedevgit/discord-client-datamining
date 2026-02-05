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
import ms.u0;
import org.jetbrains.annotations.NotNull;
import ti.d0;
import ti.g;
import ti.q;
@or.c
@Keep
@Metadata(d1 = {"\u0000\u0018\n\u0002\u0018\u0002\n\u0002\u0018\u0002\n\u0002\b\u0002\n\u0002\u0010 \n\u0002\u0018\u0002\n\u0002\b\u0003\b\u0007\u0018\u00002\u00020\u0001B\u0007¢\u0006\u0004\b\u0002\u0010\u0003J\u0019\u0010\u0006\u001a\f\u0012\b\u0012\u0006\u0012\u0002\b\u00030\u00050\u0004H\u0016¢\u0006\u0004\b\u0006\u0010\u0007¨\u0006\b"}, d2 = {"Lcom/google/firebase/ktx/FirebaseCommonKtxRegistrar;", "Lcom/google/firebase/components/ComponentRegistrar;", "<init>", "()V", "", "Lti/c;", "getComponents", "()Ljava/util/List;", "com.google.firebase-firebase-common"}, k = 1, mv = {1, 8, 0}, xi = 48)
@SourceDebugExtension({"SMAP\nFirebase.kt\nKotlin\n*S Kotlin\n*F\n+ 1 Firebase.kt\ncom/google/firebase/ktx/FirebaseCommonKtxRegistrar\n+ 2 Firebase.kt\ncom/google/firebase/ktx/FirebaseKt\n*L\n1#1,158:1\n152#2,6:159\n152#2,6:165\n152#2,6:171\n152#2,6:177\n*S KotlinDebug\n*F\n+ 1 Firebase.kt\ncom/google/firebase/ktx/FirebaseCommonKtxRegistrar\n*L\n143#1:159,6\n144#1:165,6\n145#1:171,6\n146#1:177,6\n*E\n"})
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class FirebaseCommonKtxRegistrar implements ComponentRegistrar {

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class a implements g {

        /* renamed from: a  reason: collision with root package name */
        public static final a f16380a = new a();

        @Override // ti.g
        /* renamed from: b */
        public final CoroutineDispatcher a(ti.d dVar) {
            Object g10 = dVar.g(d0.a(si.a.class, Executor.class));
            Intrinsics.checkNotNullExpressionValue(g10, "c.get(Qualified.qualifie…a, Executor::class.java))");
            return u0.b((Executor) g10);
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class b implements g {

        /* renamed from: a  reason: collision with root package name */
        public static final b f16381a = new b();

        @Override // ti.g
        /* renamed from: b */
        public final CoroutineDispatcher a(ti.d dVar) {
            Object g10 = dVar.g(d0.a(si.c.class, Executor.class));
            Intrinsics.checkNotNullExpressionValue(g10, "c.get(Qualified.qualifie…a, Executor::class.java))");
            return u0.b((Executor) g10);
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class c implements g {

        /* renamed from: a  reason: collision with root package name */
        public static final c f16382a = new c();

        @Override // ti.g
        /* renamed from: b */
        public final CoroutineDispatcher a(ti.d dVar) {
            Object g10 = dVar.g(d0.a(si.b.class, Executor.class));
            Intrinsics.checkNotNullExpressionValue(g10, "c.get(Qualified.qualifie…a, Executor::class.java))");
            return u0.b((Executor) g10);
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class d implements g {

        /* renamed from: a  reason: collision with root package name */
        public static final d f16383a = new d();

        @Override // ti.g
        /* renamed from: b */
        public final CoroutineDispatcher a(ti.d dVar) {
            Object g10 = dVar.g(d0.a(si.d.class, Executor.class));
            Intrinsics.checkNotNullExpressionValue(g10, "c.get(Qualified.qualifie…a, Executor::class.java))");
            return u0.b((Executor) g10);
        }
    }

    @Override // com.google.firebase.components.ComponentRegistrar
    @NotNull
    public List<ti.c> getComponents() {
        ti.c d10 = ti.c.e(d0.a(si.a.class, CoroutineDispatcher.class)).b(q.k(d0.a(si.a.class, Executor.class))).e(a.f16380a).d();
        Intrinsics.checkNotNullExpressionValue(d10, "builder(Qualified.qualif…cher()\n    }\n    .build()");
        ti.c d11 = ti.c.e(d0.a(si.c.class, CoroutineDispatcher.class)).b(q.k(d0.a(si.c.class, Executor.class))).e(b.f16381a).d();
        Intrinsics.checkNotNullExpressionValue(d11, "builder(Qualified.qualif…cher()\n    }\n    .build()");
        ti.c d12 = ti.c.e(d0.a(si.b.class, CoroutineDispatcher.class)).b(q.k(d0.a(si.b.class, Executor.class))).e(c.f16382a).d();
        Intrinsics.checkNotNullExpressionValue(d12, "builder(Qualified.qualif…cher()\n    }\n    .build()");
        ti.c d13 = ti.c.e(d0.a(si.d.class, CoroutineDispatcher.class)).b(q.k(d0.a(si.d.class, Executor.class))).e(d.f16383a).d();
        Intrinsics.checkNotNullExpressionValue(d13, "builder(Qualified.qualif…cher()\n    }\n    .build()");
        return CollectionsKt.o(d10, d11, d12, d13);
    }
}

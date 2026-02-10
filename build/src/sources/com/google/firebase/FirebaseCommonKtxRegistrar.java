package com.google.firebase;

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
import ps.u0;
import vi.d0;
import vi.g;
import vi.q;
@Keep
@Metadata(d1 = {"\u0000\u0018\n\u0002\u0018\u0002\n\u0002\u0018\u0002\n\u0002\b\u0002\n\u0002\u0010 \n\u0002\u0018\u0002\n\u0002\b\u0003\b\u0007\u0018\u00002\u00020\u0001B\u0007¢\u0006\u0004\b\u0002\u0010\u0003J\u0019\u0010\u0006\u001a\f\u0012\b\u0012\u0006\u0012\u0002\b\u00030\u00050\u0004H\u0016¢\u0006\u0004\b\u0006\u0010\u0007¨\u0006\b"}, d2 = {"Lcom/google/firebase/FirebaseCommonKtxRegistrar;", "Lcom/google/firebase/components/ComponentRegistrar;", "<init>", "()V", "", "Lvi/c;", "getComponents", "()Ljava/util/List;", "com.google.firebase-firebase-common"}, k = 1, mv = {1, 8, 0}, xi = 48)
@SourceDebugExtension({"SMAP\nFirebase.kt\nKotlin\n*S Kotlin\n*F\n+ 1 Firebase.kt\ncom/google/firebase/FirebaseCommonKtxRegistrar\n+ 2 Firebase.kt\ncom/google/firebase/FirebaseKt\n*L\n1#1,82:1\n76#2,6:83\n76#2,6:89\n76#2,6:95\n76#2,6:101\n*S KotlinDebug\n*F\n+ 1 Firebase.kt\ncom/google/firebase/FirebaseCommonKtxRegistrar\n*L\n67#1:83,6\n68#1:89,6\n69#1:95,6\n70#1:101,6\n*E\n"})
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class FirebaseCommonKtxRegistrar implements ComponentRegistrar {

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class a implements g {

        /* renamed from: a  reason: collision with root package name */
        public static final a f16406a = new a();

        @Override // vi.g
        /* renamed from: b */
        public final CoroutineDispatcher a(vi.d dVar) {
            Object f10 = dVar.f(d0.a(ui.a.class, Executor.class));
            Intrinsics.checkNotNullExpressionValue(f10, "c.get(Qualified.qualifie…a, Executor::class.java))");
            return u0.b((Executor) f10);
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class b implements g {

        /* renamed from: a  reason: collision with root package name */
        public static final b f16407a = new b();

        @Override // vi.g
        /* renamed from: b */
        public final CoroutineDispatcher a(vi.d dVar) {
            Object f10 = dVar.f(d0.a(ui.c.class, Executor.class));
            Intrinsics.checkNotNullExpressionValue(f10, "c.get(Qualified.qualifie…a, Executor::class.java))");
            return u0.b((Executor) f10);
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class c implements g {

        /* renamed from: a  reason: collision with root package name */
        public static final c f16408a = new c();

        @Override // vi.g
        /* renamed from: b */
        public final CoroutineDispatcher a(vi.d dVar) {
            Object f10 = dVar.f(d0.a(ui.b.class, Executor.class));
            Intrinsics.checkNotNullExpressionValue(f10, "c.get(Qualified.qualifie…a, Executor::class.java))");
            return u0.b((Executor) f10);
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class d implements g {

        /* renamed from: a  reason: collision with root package name */
        public static final d f16409a = new d();

        @Override // vi.g
        /* renamed from: b */
        public final CoroutineDispatcher a(vi.d dVar) {
            Object f10 = dVar.f(d0.a(ui.d.class, Executor.class));
            Intrinsics.checkNotNullExpressionValue(f10, "c.get(Qualified.qualifie…a, Executor::class.java))");
            return u0.b((Executor) f10);
        }
    }

    @Override // com.google.firebase.components.ComponentRegistrar
    @NotNull
    public List<vi.c> getComponents() {
        vi.c d10 = vi.c.e(d0.a(ui.a.class, CoroutineDispatcher.class)).b(q.k(d0.a(ui.a.class, Executor.class))).e(a.f16406a).d();
        Intrinsics.checkNotNullExpressionValue(d10, "builder(Qualified.qualif…cher()\n    }\n    .build()");
        vi.c d11 = vi.c.e(d0.a(ui.c.class, CoroutineDispatcher.class)).b(q.k(d0.a(ui.c.class, Executor.class))).e(b.f16407a).d();
        Intrinsics.checkNotNullExpressionValue(d11, "builder(Qualified.qualif…cher()\n    }\n    .build()");
        vi.c d12 = vi.c.e(d0.a(ui.b.class, CoroutineDispatcher.class)).b(q.k(d0.a(ui.b.class, Executor.class))).e(c.f16408a).d();
        Intrinsics.checkNotNullExpressionValue(d12, "builder(Qualified.qualif…cher()\n    }\n    .build()");
        vi.c d13 = vi.c.e(d0.a(ui.d.class, CoroutineDispatcher.class)).b(q.k(d0.a(ui.d.class, Executor.class))).e(d.f16409a).d();
        Intrinsics.checkNotNullExpressionValue(d13, "builder(Qualified.qualif…cher()\n    }\n    .build()");
        return CollectionsKt.o(d10, d11, d12, d13);
    }
}

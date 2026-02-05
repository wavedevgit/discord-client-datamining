package ua;

import com.facebook.imagepipeline.producers.ProducerContext;
import java.util.ArrayList;
import java.util.Collection;
import java.util.List;
import java.util.Map;
import java.util.Set;
import kotlin.collections.CollectionsKt;
import kotlin.jvm.internal.DefaultConstructorMarker;
import kotlin.jvm.internal.Intrinsics;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class b implements d {

    /* renamed from: b  reason: collision with root package name */
    public static final a f51222b = new a(null);

    /* renamed from: a  reason: collision with root package name */
    private final List f51223a;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    public static final class a {
        public /* synthetic */ a(DefaultConstructorMarker defaultConstructorMarker) {
            this();
        }

        private a() {
        }
    }

    public b(Set set) {
        if (set == null) {
            this.f51223a = new ArrayList();
            return;
        }
        ArrayList arrayList = new ArrayList(set.size());
        this.f51223a = arrayList;
        CollectionsKt.m0(set, arrayList);
    }

    @Override // ua.d
    public void a(ProducerContext producerContext) {
        Intrinsics.checkNotNullParameter(producerContext, "producerContext");
        for (d dVar : this.f51223a) {
            try {
                dVar.a(producerContext);
            } catch (Exception e10) {
                p8.a.n("ForwardingRequestListener2", "InternalListener exception in onRequestStart", e10);
            }
        }
    }

    @Override // com.facebook.imagepipeline.producers.y0
    public void b(ProducerContext producerContext, String producerName, boolean z10) {
        Intrinsics.checkNotNullParameter(producerContext, "producerContext");
        Intrinsics.checkNotNullParameter(producerName, "producerName");
        for (d dVar : this.f51223a) {
            try {
                dVar.b(producerContext, producerName, z10);
            } catch (Exception e10) {
                p8.a.n("ForwardingRequestListener2", "InternalListener exception in onProducerFinishWithSuccess", e10);
            }
        }
    }

    @Override // com.facebook.imagepipeline.producers.y0
    public void c(ProducerContext producerContext, String str, Map map) {
        for (d dVar : this.f51223a) {
            try {
                dVar.c(producerContext, str, map);
            } catch (Exception e10) {
                p8.a.n("ForwardingRequestListener2", "InternalListener exception in onProducerFinishWithCancellation", e10);
            }
        }
    }

    @Override // com.facebook.imagepipeline.producers.y0
    public void d(ProducerContext producerContext, String producerName) {
        Intrinsics.checkNotNullParameter(producerContext, "producerContext");
        Intrinsics.checkNotNullParameter(producerName, "producerName");
        for (d dVar : this.f51223a) {
            try {
                dVar.d(producerContext, producerName);
            } catch (Exception e10) {
                p8.a.n("ForwardingRequestListener2", "InternalListener exception in onProducerStart", e10);
            }
        }
    }

    @Override // ua.d
    public void e(ProducerContext producerContext) {
        Intrinsics.checkNotNullParameter(producerContext, "producerContext");
        for (d dVar : this.f51223a) {
            try {
                dVar.e(producerContext);
            } catch (Exception e10) {
                p8.a.n("ForwardingRequestListener2", "InternalListener exception in onRequestSuccess", e10);
            }
        }
    }

    @Override // com.facebook.imagepipeline.producers.y0
    public boolean f(ProducerContext producerContext, String producerName) {
        Intrinsics.checkNotNullParameter(producerContext, "producerContext");
        Intrinsics.checkNotNullParameter(producerName, "producerName");
        List<d> list = this.f51223a;
        if ((list instanceof Collection) && list.isEmpty()) {
            return false;
        }
        for (d dVar : list) {
            if (dVar.f(producerContext, producerName)) {
                return true;
            }
        }
        return false;
    }

    @Override // ua.d
    public void g(ProducerContext producerContext) {
        Intrinsics.checkNotNullParameter(producerContext, "producerContext");
        for (d dVar : this.f51223a) {
            try {
                dVar.g(producerContext);
            } catch (Exception e10) {
                p8.a.n("ForwardingRequestListener2", "InternalListener exception in onRequestCancellation", e10);
            }
        }
    }

    @Override // com.facebook.imagepipeline.producers.y0
    public void h(ProducerContext producerContext, String producerName, String producerEventName) {
        Intrinsics.checkNotNullParameter(producerContext, "producerContext");
        Intrinsics.checkNotNullParameter(producerName, "producerName");
        Intrinsics.checkNotNullParameter(producerEventName, "producerEventName");
        for (d dVar : this.f51223a) {
            try {
                dVar.h(producerContext, producerName, producerEventName);
            } catch (Exception e10) {
                p8.a.n("ForwardingRequestListener2", "InternalListener exception in onIntermediateChunkStart", e10);
            }
        }
    }

    @Override // ua.d
    public void i(ProducerContext producerContext, Throwable throwable) {
        Intrinsics.checkNotNullParameter(producerContext, "producerContext");
        Intrinsics.checkNotNullParameter(throwable, "throwable");
        for (d dVar : this.f51223a) {
            try {
                dVar.i(producerContext, throwable);
            } catch (Exception e10) {
                p8.a.n("ForwardingRequestListener2", "InternalListener exception in onRequestFailure", e10);
            }
        }
    }

    @Override // com.facebook.imagepipeline.producers.y0
    public void j(ProducerContext producerContext, String str, Map map) {
        for (d dVar : this.f51223a) {
            try {
                dVar.j(producerContext, str, map);
            } catch (Exception e10) {
                p8.a.n("ForwardingRequestListener2", "InternalListener exception in onProducerFinishWithSuccess", e10);
            }
        }
    }

    @Override // com.facebook.imagepipeline.producers.y0
    public void k(ProducerContext producerContext, String str, Throwable th2, Map map) {
        for (d dVar : this.f51223a) {
            try {
                dVar.k(producerContext, str, th2, map);
            } catch (Exception e10) {
                p8.a.n("ForwardingRequestListener2", "InternalListener exception in onProducerFinishWithFailure", e10);
            }
        }
    }
}

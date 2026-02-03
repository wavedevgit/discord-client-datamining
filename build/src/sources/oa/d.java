package oa;

import com.facebook.datasource.DataSource;
import com.facebook.imagepipeline.producers.d1;
import com.facebook.imagepipeline.producers.w0;
import kotlin.jvm.internal.DefaultConstructorMarker;
import kotlin.jvm.internal.Intrinsics;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class d extends oa.a {

    /* renamed from: j  reason: collision with root package name */
    public static final a f42648j = new a(null);

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    public static final class a {
        public /* synthetic */ a(DefaultConstructorMarker defaultConstructorMarker) {
            this();
        }

        public final DataSource a(w0 producer, d1 settableProducerContext, ua.d listener) {
            Intrinsics.checkNotNullParameter(producer, "producer");
            Intrinsics.checkNotNullParameter(settableProducerContext, "settableProducerContext");
            Intrinsics.checkNotNullParameter(listener, "listener");
            return new d(producer, settableProducerContext, listener, null);
        }

        private a() {
        }
    }

    public /* synthetic */ d(w0 w0Var, d1 d1Var, ua.d dVar, DefaultConstructorMarker defaultConstructorMarker) {
        this(w0Var, d1Var, dVar);
    }

    private d(w0 w0Var, d1 d1Var, ua.d dVar) {
        super(w0Var, d1Var, dVar);
    }
}

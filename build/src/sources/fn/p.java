package fn;

import android.content.Context;
import android.view.MotionEvent;
import fn.d;
import kotlin.jvm.internal.Intrinsics;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class p extends d {

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class a extends d.c {

        /* renamed from: b  reason: collision with root package name */
        private final Class f24172b = p.class;

        /* renamed from: c  reason: collision with root package name */
        private final String f24173c = "ManualGestureHandler";

        @Override // fn.d.c
        public String d() {
            return this.f24173c;
        }

        @Override // fn.d.c
        public Class e() {
            return this.f24172b;
        }

        /* JADX INFO: Access modifiers changed from: protected */
        @Override // fn.d.c
        /* renamed from: g */
        public p a(Context context) {
            return new p();
        }

        @Override // fn.d.c
        /* renamed from: h */
        public gn.e c(p handler) {
            Intrinsics.checkNotNullParameter(handler, "handler");
            return new gn.e(handler);
        }
    }

    @Override // fn.d
    protected void l0(MotionEvent event, MotionEvent sourceEvent) {
        Intrinsics.checkNotNullParameter(event, "event");
        Intrinsics.checkNotNullParameter(sourceEvent, "sourceEvent");
        if (S() == 0) {
            p();
        }
    }
}

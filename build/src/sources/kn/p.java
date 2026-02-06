package kn;

import android.content.Context;
import android.view.MotionEvent;
import kn.d;
import kotlin.jvm.internal.Intrinsics;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class p extends d {

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class a extends d.c {

        /* renamed from: b  reason: collision with root package name */
        private final Class f31854b = p.class;

        /* renamed from: c  reason: collision with root package name */
        private final String f31855c = "ManualGestureHandler";

        @Override // kn.d.c
        public String d() {
            return this.f31855c;
        }

        @Override // kn.d.c
        public Class e() {
            return this.f31854b;
        }

        /* JADX INFO: Access modifiers changed from: protected */
        @Override // kn.d.c
        /* renamed from: g */
        public p a(Context context) {
            return new p();
        }

        @Override // kn.d.c
        /* renamed from: h */
        public ln.e c(p handler) {
            Intrinsics.checkNotNullParameter(handler, "handler");
            return new ln.e(handler);
        }
    }

    @Override // kn.d
    protected void l0(MotionEvent event, MotionEvent sourceEvent) {
        Intrinsics.checkNotNullParameter(event, "event");
        Intrinsics.checkNotNullParameter(sourceEvent, "sourceEvent");
        if (S() == 0) {
            p();
        }
    }
}

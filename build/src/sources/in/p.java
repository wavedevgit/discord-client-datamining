package in;

import android.content.Context;
import android.view.MotionEvent;
import in.d;
import kotlin.jvm.internal.Intrinsics;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class p extends d {

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class a extends d.c {

        /* renamed from: b  reason: collision with root package name */
        private final Class f27564b = p.class;

        /* renamed from: c  reason: collision with root package name */
        private final String f27565c = "ManualGestureHandler";

        @Override // in.d.c
        public String d() {
            return this.f27565c;
        }

        @Override // in.d.c
        public Class e() {
            return this.f27564b;
        }

        /* JADX INFO: Access modifiers changed from: protected */
        @Override // in.d.c
        /* renamed from: g */
        public p a(Context context) {
            return new p();
        }

        @Override // in.d.c
        /* renamed from: h */
        public jn.e c(p handler) {
            Intrinsics.checkNotNullParameter(handler, "handler");
            return new jn.e(handler);
        }
    }

    @Override // in.d
    protected void l0(MotionEvent event, MotionEvent sourceEvent) {
        Intrinsics.checkNotNullParameter(event, "event");
        Intrinsics.checkNotNullParameter(sourceEvent, "sourceEvent");
        if (S() == 0) {
            p();
        }
    }
}

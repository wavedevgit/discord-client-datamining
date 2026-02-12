package nn;

import android.content.Context;
import android.view.MotionEvent;
import kotlin.jvm.internal.Intrinsics;
import nn.d;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class p extends d {

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class a extends d.c {

        /* renamed from: b  reason: collision with root package name */
        private final Class f38093b = p.class;

        /* renamed from: c  reason: collision with root package name */
        private final String f38094c = "ManualGestureHandler";

        @Override // nn.d.c
        public String d() {
            return this.f38094c;
        }

        @Override // nn.d.c
        public Class e() {
            return this.f38093b;
        }

        /* JADX INFO: Access modifiers changed from: protected */
        @Override // nn.d.c
        /* renamed from: g */
        public p a(Context context) {
            return new p();
        }

        @Override // nn.d.c
        /* renamed from: h */
        public on.e c(p handler) {
            Intrinsics.checkNotNullParameter(handler, "handler");
            return new on.e(handler);
        }
    }

    @Override // nn.d
    protected void l0(MotionEvent event, MotionEvent sourceEvent) {
        Intrinsics.checkNotNullParameter(event, "event");
        Intrinsics.checkNotNullParameter(sourceEvent, "sourceEvent");
        if (S() == 0) {
            p();
        }
    }
}

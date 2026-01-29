package cn;

import android.content.Context;
import android.view.MotionEvent;
import cn.d;
import kotlin.jvm.internal.Intrinsics;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class p extends d {

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class a extends d.c {

        /* renamed from: b  reason: collision with root package name */
        private final Class f8617b = p.class;

        /* renamed from: c  reason: collision with root package name */
        private final String f8618c = "ManualGestureHandler";

        @Override // cn.d.c
        public String d() {
            return this.f8618c;
        }

        @Override // cn.d.c
        public Class e() {
            return this.f8617b;
        }

        /* JADX INFO: Access modifiers changed from: protected */
        @Override // cn.d.c
        /* renamed from: g */
        public p a(Context context) {
            return new p();
        }

        @Override // cn.d.c
        /* renamed from: h */
        public dn.e c(p handler) {
            Intrinsics.checkNotNullParameter(handler, "handler");
            return new dn.e(handler);
        }
    }

    @Override // cn.d
    protected void l0(MotionEvent event, MotionEvent sourceEvent) {
        Intrinsics.checkNotNullParameter(event, "event");
        Intrinsics.checkNotNullParameter(sourceEvent, "sourceEvent");
        if (S() == 0) {
            p();
        }
    }
}

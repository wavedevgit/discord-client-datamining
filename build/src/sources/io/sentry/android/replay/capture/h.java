package io.sentry.android.replay.capture;

import android.graphics.Bitmap;
import android.view.MotionEvent;
import com.discord.misc.utilities.logThrottle.LogThrottleSingleton;
import com.facebook.react.fabric.mounting.mountitems.IntBufferBatchMountItem;
import io.sentry.Breadcrumb;
import io.sentry.Hint;
import io.sentry.IScope;
import io.sentry.android.replay.capture.h;
import io.sentry.android.replay.s;
import io.sentry.b4;
import io.sentry.k7;
import io.sentry.l7;
import io.sentry.protocol.x;
import io.sentry.v3;
import io.sentry.w0;
import java.io.File;
import java.util.ArrayList;
import java.util.Comparator;
import java.util.Date;
import java.util.Deque;
import java.util.Iterator;
import java.util.List;
import java.util.Map;
import kotlin.Unit;
import kotlin.collections.CollectionsKt;
import kotlin.jvm.functions.Function1;
import kotlin.jvm.functions.Function2;
import kotlin.jvm.internal.DefaultConstructorMarker;
import kotlin.jvm.internal.Intrinsics;
import kotlin.jvm.internal.Lambda;
import kotlin.jvm.internal.Ref;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public interface h {

    /* renamed from: a */
    public static final a f27674a = a.f27675a;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class a {

        /* renamed from: a */
        static final /* synthetic */ a f27675a = new a();

        /* renamed from: io.sentry.android.replay.capture.h$a$a */
        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
        public static final class C0392a extends Lambda implements Function1 {

            /* renamed from: d */
            final /* synthetic */ Date f27676d;

            /* renamed from: e */
            final /* synthetic */ List f27677e;

            /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
            C0392a(Date date, List list) {
                super(1);
                this.f27676d = date;
                this.f27677e = list;
            }

            public final void a(io.sentry.rrweb.b event) {
                Intrinsics.checkNotNullParameter(event, "event");
                if (event.e() >= this.f27676d.getTime()) {
                    this.f27677e.add(event);
                }
            }

            @Override // kotlin.jvm.functions.Function1
            public /* bridge */ /* synthetic */ Object invoke(Object obj) {
                a((io.sentry.rrweb.b) obj);
                return Unit.f32056a;
            }
        }

        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
        public static final class b implements Comparator {
            @Override // java.util.Comparator
            public final int compare(Object obj, Object obj2) {
                return tr.a.d(Long.valueOf(((io.sentry.rrweb.b) obj).e()), Long.valueOf(((io.sentry.rrweb.b) obj2).e()));
            }
        }

        private a() {
        }

        /* JADX WARN: Code restructure failed: missing block: B:68:0x00c5, code lost:
            if ((r11.t().getTime() + 5000) >= r22.getTime()) goto L12;
         */
        /* JADX WARN: Code restructure failed: missing block: B:90:0x0126, code lost:
            if (r12 == null) goto L37;
         */
        /*
            Code decompiled incorrectly, please refer to instructions dump.
            To view partially-correct add '--show-bad-code' argument
        */
        private final io.sentry.android.replay.capture.h.c b(io.sentry.k7 r19, java.io.File r20, io.sentry.protocol.x r21, java.util.Date r22, int r23, int r24, int r25, int r26, int r27, long r28, io.sentry.l7.b r30, java.lang.String r31, java.util.List r32, java.util.Deque r33) {
            /*
                Method dump skipped, instructions count: 401
                To view this dump add '--comments-level debug' option
            */
            throw new UnsupportedOperationException("Method not decompiled: io.sentry.android.replay.capture.h.a.b(io.sentry.k7, java.io.File, io.sentry.protocol.x, java.util.Date, int, int, int, int, int, long, io.sentry.l7$b, java.lang.String, java.util.List, java.util.Deque):io.sentry.android.replay.capture.h$c");
        }

        /* JADX WARN: Type inference failed for: r0v1, types: [T, java.util.ArrayList] */
        public static final void d(Ref.ObjectRef objectRef, IScope scope) {
            Intrinsics.checkNotNullParameter(scope, "scope");
            objectRef.element = new ArrayList(scope.t());
        }

        private final boolean e(Breadcrumb breadcrumb) {
            if (breadcrumb != null && Intrinsics.areEqual(breadcrumb.m(), "network.event")) {
                Map o10 = breadcrumb.o();
                Intrinsics.checkNotNullExpressionValue(o10, "getData(...)");
                Object obj = o10.get("action");
                if (obj == null) {
                    obj = null;
                }
                if (Intrinsics.areEqual(obj, "NETWORK_AVAILABLE")) {
                    return true;
                }
                return false;
            }
            return false;
        }

        private final boolean f(Breadcrumb breadcrumb) {
            if (Intrinsics.areEqual(breadcrumb.m(), "network.event") && breadcrumb.o().containsKey("network_type")) {
                return true;
            }
            return false;
        }

        public static /* synthetic */ void h(a aVar, Deque deque, long j10, Function1 function1, int i10, Object obj) {
            if ((i10 & 4) != 0) {
                function1 = null;
            }
            aVar.g(deque, j10, function1);
        }

        /* JADX WARN: Type inference failed for: r7v2, types: [java.util.List, T] */
        public final c c(w0 w0Var, k7 options, long j10, Date currentSegmentTimestamp, x replayId, int i10, int i11, int i12, l7.b replayType, io.sentry.android.replay.i iVar, int i13, int i14, String str, List list, Deque events) {
            io.sentry.android.replay.c y10;
            List list2;
            Intrinsics.checkNotNullParameter(options, "options");
            Intrinsics.checkNotNullParameter(currentSegmentTimestamp, "currentSegmentTimestamp");
            Intrinsics.checkNotNullParameter(replayId, "replayId");
            Intrinsics.checkNotNullParameter(replayType, "replayType");
            Intrinsics.checkNotNullParameter(events, "events");
            if (iVar != null && (y10 = io.sentry.android.replay.i.y(iVar, Math.min(j10, (long) LogThrottleSingleton.RATE_LIMIT_FIVE_MINUTES), currentSegmentTimestamp.getTime(), i10, i11, i12, i13, i14, null, IntBufferBatchMountItem.INSTRUCTION_UPDATE_LAYOUT, null)) != null) {
                File a10 = y10.a();
                int b10 = y10.b();
                long c10 = y10.c();
                if (list == null) {
                    final Ref.ObjectRef objectRef = new Ref.ObjectRef();
                    objectRef.element = CollectionsKt.l();
                    if (w0Var != null) {
                        w0Var.o(new b4() { // from class: io.sentry.android.replay.capture.g
                            @Override // io.sentry.b4
                            public final void a(IScope iScope) {
                                h.a.d(Ref.ObjectRef.this, iScope);
                            }
                        });
                    }
                    list2 = (List) objectRef.element;
                } else {
                    list2 = list;
                }
                return b(options, a10, replayId, currentSegmentTimestamp, i10, i11, i12, b10, i13, c10, replayType, str, list2, events);
            }
            return c.b.f27680a;
        }

        public final void g(Deque events, long j10, Function1 function1) {
            Intrinsics.checkNotNullParameter(events, "events");
            Iterator it = events.iterator();
            Intrinsics.checkNotNullExpressionValue(it, "iterator(...)");
            while (it.hasNext()) {
                io.sentry.rrweb.b bVar = (io.sentry.rrweb.b) it.next();
                if (bVar.e() < j10) {
                    if (function1 != null) {
                        Intrinsics.checkNotNull(bVar);
                        function1.invoke(bVar);
                    }
                    it.remove();
                }
            }
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class b {
        public static /* synthetic */ void a(h hVar, int i10, x xVar, l7.b bVar, int i11, Object obj) {
            if (obj == null) {
                if ((i11 & 1) != 0) {
                    i10 = 0;
                }
                if ((i11 & 2) != 0) {
                    xVar = new x();
                }
                if ((i11 & 4) != 0) {
                    bVar = null;
                }
                hVar.i(i10, xVar, bVar);
                return;
            }
            throw new UnsupportedOperationException("Super calls with default arguments not supported in this target, function: start");
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static abstract class c {

        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
        public static final class a extends c {

            /* renamed from: a */
            private final l7 f27678a;

            /* renamed from: b */
            private final v3 f27679b;

            /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
            public a(l7 replay, v3 recording) {
                super(null);
                Intrinsics.checkNotNullParameter(replay, "replay");
                Intrinsics.checkNotNullParameter(recording, "recording");
                this.f27678a = replay;
                this.f27679b = recording;
            }

            public static /* synthetic */ void b(a aVar, w0 w0Var, Hint hint, int i10, Object obj) {
                if ((i10 & 2) != 0) {
                    hint = new Hint();
                }
                aVar.a(w0Var, hint);
            }

            public final void a(w0 w0Var, Hint hint) {
                Intrinsics.checkNotNullParameter(hint, "hint");
                if (w0Var != null) {
                    l7 l7Var = this.f27678a;
                    hint.l(this.f27679b);
                    Unit unit = Unit.f32056a;
                    w0Var.s(l7Var, hint);
                }
            }

            public final l7 c() {
                return this.f27678a;
            }

            public final void d(int i10) {
                this.f27678a.o0(i10);
                List<io.sentry.rrweb.b> a10 = this.f27679b.a();
                if (a10 != null) {
                    for (io.sentry.rrweb.b bVar : a10) {
                        if (bVar instanceof io.sentry.rrweb.j) {
                            ((io.sentry.rrweb.j) bVar).C(i10);
                        }
                    }
                }
            }

            public boolean equals(Object obj) {
                if (this == obj) {
                    return true;
                }
                if (obj instanceof a) {
                    a aVar = (a) obj;
                    return Intrinsics.areEqual(this.f27678a, aVar.f27678a) && Intrinsics.areEqual(this.f27679b, aVar.f27679b);
                }
                return false;
            }

            public int hashCode() {
                return (this.f27678a.hashCode() * 31) + this.f27679b.hashCode();
            }

            public String toString() {
                return "Created(replay=" + this.f27678a + ", recording=" + this.f27679b + ')';
            }
        }

        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
        public static final class b extends c {

            /* renamed from: a */
            public static final b f27680a = new b();

            private b() {
                super(null);
            }
        }

        public /* synthetic */ c(DefaultConstructorMarker defaultConstructorMarker) {
            this();
        }

        private c() {
        }
    }

    x a();

    void b();

    void c(int i10);

    int d();

    void e(boolean z10, Function1 function1);

    void f(Bitmap bitmap, Function2 function2);

    h g();

    void h();

    void i(int i10, x xVar, l7.b bVar);

    void j(Date date);

    void o(s sVar);

    void onTouchEvent(MotionEvent motionEvent);

    void stop();
}

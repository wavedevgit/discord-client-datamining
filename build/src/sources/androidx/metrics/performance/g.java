package androidx.metrics.performance;

import android.view.View;
import android.view.ViewParent;
import java.util.ArrayList;
import java.util.List;
import kotlin.Unit;
import kotlin.jvm.internal.DefaultConstructorMarker;
import kotlin.jvm.internal.Intrinsics;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public final class g {

    /* renamed from: f  reason: collision with root package name */
    public static final a f4630f = new a(null);

    /* renamed from: a  reason: collision with root package name */
    private List f4631a;

    /* renamed from: b  reason: collision with root package name */
    private List f4632b;

    /* renamed from: c  reason: collision with root package name */
    private final List f4633c;

    /* renamed from: d  reason: collision with root package name */
    private final List f4634d;

    /* renamed from: e  reason: collision with root package name */
    private final List f4635e;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    public static final class a {
        public /* synthetic */ a(DefaultConstructorMarker defaultConstructorMarker) {
            this();
        }

        public final b a(View view) {
            Intrinsics.checkNotNullParameter(view, "view");
            b b10 = b(view);
            if (b10.a() == null) {
                b10.b(new g(null));
            }
            return b10;
        }

        public final b b(View view) {
            Intrinsics.checkNotNullParameter(view, "view");
            View c10 = c(view);
            Object tag = c10.getTag(o3.g.f42382b);
            if (tag == null) {
                tag = new b();
                c10.setTag(o3.g.f42382b, tag);
            }
            return (b) tag;
        }

        public final View c(View view) {
            Intrinsics.checkNotNullParameter(view, "view");
            ViewParent parent = view.getParent();
            while (parent instanceof View) {
                view = (View) parent;
                parent = view.getParent();
            }
            return view;
        }

        private a() {
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    public static final class b {

        /* renamed from: a  reason: collision with root package name */
        private g f4636a;

        public final g a() {
            return this.f4636a;
        }

        public final void b(g gVar) {
            this.f4636a = gVar;
        }
    }

    public /* synthetic */ g(DefaultConstructorMarker defaultConstructorMarker) {
        this();
    }

    private final void a(long j10, long j11, List list, List list2) {
        int size = list2.size() - 1;
        if (size < 0) {
            if (this.f4633c.size() > 0) {
                int size2 = this.f4633c.size();
                for (int i10 = 0; i10 < size2; i10++) {
                    if (!this.f4634d.contains(Integer.valueOf(i10))) {
                        android.support.v4.media.session.b.a(this.f4633c.get(i10));
                        int i11 = i10 + 1;
                        if (i11 < this.f4633c.size()) {
                            android.support.v4.media.session.b.a(this.f4633c.get(i11));
                            throw null;
                        }
                    }
                }
                for (int size3 = this.f4634d.size() - 1; -1 < size3; size3--) {
                    this.f4633c.remove(((Number) this.f4634d.get(size3)).intValue());
                }
                if (this.f4633c.size() <= 0) {
                    this.f4633c.clear();
                    this.f4634d.clear();
                    return;
                }
                android.support.v4.media.session.b.a(this.f4633c.get(0));
                throw null;
            }
            return;
        }
        android.support.v4.media.session.b.a(list2.get(size));
        throw null;
    }

    public final void b() {
        synchronized (this.f4632b) {
            int size = this.f4632b.size() - 1;
            if (-1 >= size) {
                Unit unit = Unit.f33282a;
            } else {
                android.support.v4.media.session.b.a(this.f4632b.get(size));
                throw null;
            }
        }
    }

    public final void c(long j10, long j11, List frameStates) {
        Intrinsics.checkNotNullParameter(frameStates, "frameStates");
        synchronized (this.f4632b) {
            frameStates.clear();
            a(j10, j11, frameStates, this.f4631a);
            a(j10, j11, frameStates, this.f4632b);
            Unit unit = Unit.f33282a;
        }
    }

    private g() {
        this.f4631a = new ArrayList();
        this.f4632b = new ArrayList();
        this.f4633c = new ArrayList();
        this.f4634d = new ArrayList();
        this.f4635e = new ArrayList();
    }
}

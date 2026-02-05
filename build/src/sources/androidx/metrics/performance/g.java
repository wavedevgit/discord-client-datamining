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
    public static final a f4755f = new a(null);

    /* renamed from: a  reason: collision with root package name */
    private List f4756a;

    /* renamed from: b  reason: collision with root package name */
    private List f4757b;

    /* renamed from: c  reason: collision with root package name */
    private final List f4758c;

    /* renamed from: d  reason: collision with root package name */
    private final List f4759d;

    /* renamed from: e  reason: collision with root package name */
    private final List f4760e;

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
            Object tag = c10.getTag(o3.g.f42232b);
            if (tag == null) {
                tag = new b();
                c10.setTag(o3.g.f42232b, tag);
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
        private g f4761a;

        public final g a() {
            return this.f4761a;
        }

        public final void b(g gVar) {
            this.f4761a = gVar;
        }
    }

    public /* synthetic */ g(DefaultConstructorMarker defaultConstructorMarker) {
        this();
    }

    private final void a(long j10, long j11, List list, List list2) {
        int size = list2.size() - 1;
        if (size < 0) {
            if (this.f4758c.size() > 0) {
                int size2 = this.f4758c.size();
                for (int i10 = 0; i10 < size2; i10++) {
                    if (!this.f4759d.contains(Integer.valueOf(i10))) {
                        android.support.v4.media.session.b.a(this.f4758c.get(i10));
                        int i11 = i10 + 1;
                        if (i11 < this.f4758c.size()) {
                            android.support.v4.media.session.b.a(this.f4758c.get(i11));
                            throw null;
                        }
                    }
                }
                for (int size3 = this.f4759d.size() - 1; -1 < size3; size3--) {
                    this.f4758c.remove(((Number) this.f4759d.get(size3)).intValue());
                }
                if (this.f4758c.size() <= 0) {
                    this.f4758c.clear();
                    this.f4759d.clear();
                    return;
                }
                android.support.v4.media.session.b.a(this.f4758c.get(0));
                throw null;
            }
            return;
        }
        android.support.v4.media.session.b.a(list2.get(size));
        throw null;
    }

    public final void b() {
        synchronized (this.f4757b) {
            int size = this.f4757b.size() - 1;
            if (-1 >= size) {
                Unit unit = Unit.f31988a;
            } else {
                android.support.v4.media.session.b.a(this.f4757b.get(size));
                throw null;
            }
        }
    }

    public final void c(long j10, long j11, List frameStates) {
        Intrinsics.checkNotNullParameter(frameStates, "frameStates");
        synchronized (this.f4757b) {
            frameStates.clear();
            a(j10, j11, frameStates, this.f4756a);
            a(j10, j11, frameStates, this.f4757b);
            Unit unit = Unit.f31988a;
        }
    }

    private g() {
        this.f4756a = new ArrayList();
        this.f4757b = new ArrayList();
        this.f4758c = new ArrayList();
        this.f4759d = new ArrayList();
        this.f4760e = new ArrayList();
    }
}

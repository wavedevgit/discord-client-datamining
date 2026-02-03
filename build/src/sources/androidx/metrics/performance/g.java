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
    public static final a f4643f = new a(null);

    /* renamed from: a  reason: collision with root package name */
    private List f4644a;

    /* renamed from: b  reason: collision with root package name */
    private List f4645b;

    /* renamed from: c  reason: collision with root package name */
    private final List f4646c;

    /* renamed from: d  reason: collision with root package name */
    private final List f4647d;

    /* renamed from: e  reason: collision with root package name */
    private final List f4648e;

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
            Object tag = c10.getTag(o3.g.f42326b);
            if (tag == null) {
                tag = new b();
                c10.setTag(o3.g.f42326b, tag);
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
        private g f4649a;

        public final g a() {
            return this.f4649a;
        }

        public final void b(g gVar) {
            this.f4649a = gVar;
        }
    }

    public /* synthetic */ g(DefaultConstructorMarker defaultConstructorMarker) {
        this();
    }

    private final void a(long j10, long j11, List list, List list2) {
        int size = list2.size() - 1;
        if (size < 0) {
            if (this.f4646c.size() > 0) {
                int size2 = this.f4646c.size();
                for (int i10 = 0; i10 < size2; i10++) {
                    if (!this.f4647d.contains(Integer.valueOf(i10))) {
                        android.support.v4.media.session.b.a(this.f4646c.get(i10));
                        int i11 = i10 + 1;
                        if (i11 < this.f4646c.size()) {
                            android.support.v4.media.session.b.a(this.f4646c.get(i11));
                            throw null;
                        }
                    }
                }
                for (int size3 = this.f4647d.size() - 1; -1 < size3; size3--) {
                    this.f4646c.remove(((Number) this.f4647d.get(size3)).intValue());
                }
                if (this.f4646c.size() <= 0) {
                    this.f4646c.clear();
                    this.f4647d.clear();
                    return;
                }
                android.support.v4.media.session.b.a(this.f4646c.get(0));
                throw null;
            }
            return;
        }
        android.support.v4.media.session.b.a(list2.get(size));
        throw null;
    }

    public final void b() {
        synchronized (this.f4645b) {
            int size = this.f4645b.size() - 1;
            if (-1 >= size) {
                Unit unit = Unit.f32464a;
            } else {
                android.support.v4.media.session.b.a(this.f4645b.get(size));
                throw null;
            }
        }
    }

    public final void c(long j10, long j11, List frameStates) {
        Intrinsics.checkNotNullParameter(frameStates, "frameStates");
        synchronized (this.f4645b) {
            frameStates.clear();
            a(j10, j11, frameStates, this.f4644a);
            a(j10, j11, frameStates, this.f4645b);
            Unit unit = Unit.f32464a;
        }
    }

    private g() {
        this.f4644a = new ArrayList();
        this.f4645b = new ArrayList();
        this.f4646c = new ArrayList();
        this.f4647d = new ArrayList();
        this.f4648e = new ArrayList();
    }
}

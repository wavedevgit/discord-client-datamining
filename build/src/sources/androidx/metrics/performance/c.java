package androidx.metrics.performance;

import android.view.Choreographer;
import android.view.View;
import androidx.metrics.performance.g;
import java.lang.ref.WeakReference;
import java.util.ArrayList;
import java.util.List;
import kotlin.jvm.internal.Intrinsics;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public abstract class c extends f {

    /* renamed from: d  reason: collision with root package name */
    private final WeakReference f4761d;

    /* renamed from: e  reason: collision with root package name */
    private final Choreographer f4762e;

    /* renamed from: f  reason: collision with root package name */
    private final g.b f4763f;

    /* renamed from: g  reason: collision with root package name */
    private final List f4764g;

    /* renamed from: h  reason: collision with root package name */
    private final FrameData f4765h;

    /* renamed from: i  reason: collision with root package name */
    private final a f4766i;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    public static final class a extends o3.f {

        /* renamed from: a  reason: collision with root package name */
        final /* synthetic */ JankStats f4767a;

        /* renamed from: b  reason: collision with root package name */
        final /* synthetic */ c f4768b;

        a(JankStats jankStats, c cVar) {
            this.f4767a = jankStats;
            this.f4768b = cVar;
        }
    }

    /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
    public c(JankStats jankStats, View view) {
        super(jankStats);
        Intrinsics.checkNotNullParameter(jankStats, "jankStats");
        Intrinsics.checkNotNullParameter(view, "view");
        this.f4761d = new WeakReference(view);
        Choreographer choreographer = Choreographer.getInstance();
        Intrinsics.checkNotNullExpressionValue(choreographer, "getInstance()");
        this.f4762e = choreographer;
        this.f4763f = g.f4781f.b(view);
        ArrayList arrayList = new ArrayList();
        this.f4764g = arrayList;
        this.f4765h = new FrameData(0L, 0L, false, arrayList);
        this.f4766i = new a(jankStats, this);
    }

    public final WeakReference d() {
        return this.f4761d;
    }

    public final long e(View view) {
        return b.f4759d.b(view);
    }

    public final long f() {
        Object obj = b.f4759d.a().get(this.f4762e);
        Intrinsics.checkNotNull(obj, "null cannot be cast to non-null type kotlin.Long");
        return ((Long) obj).longValue();
    }

    public final g.b g() {
        return this.f4763f;
    }

    public final List h() {
        return this.f4764g;
    }
}

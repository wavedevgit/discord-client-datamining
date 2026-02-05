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
    private final WeakReference f4735d;

    /* renamed from: e  reason: collision with root package name */
    private final Choreographer f4736e;

    /* renamed from: f  reason: collision with root package name */
    private final g.b f4737f;

    /* renamed from: g  reason: collision with root package name */
    private final List f4738g;

    /* renamed from: h  reason: collision with root package name */
    private final FrameData f4739h;

    /* renamed from: i  reason: collision with root package name */
    private final a f4740i;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    public static final class a extends o3.f {

        /* renamed from: a  reason: collision with root package name */
        final /* synthetic */ JankStats f4741a;

        /* renamed from: b  reason: collision with root package name */
        final /* synthetic */ c f4742b;

        a(JankStats jankStats, c cVar) {
            this.f4741a = jankStats;
            this.f4742b = cVar;
        }
    }

    /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
    public c(JankStats jankStats, View view) {
        super(jankStats);
        Intrinsics.checkNotNullParameter(jankStats, "jankStats");
        Intrinsics.checkNotNullParameter(view, "view");
        this.f4735d = new WeakReference(view);
        Choreographer choreographer = Choreographer.getInstance();
        Intrinsics.checkNotNullExpressionValue(choreographer, "getInstance()");
        this.f4736e = choreographer;
        this.f4737f = g.f4755f.b(view);
        ArrayList arrayList = new ArrayList();
        this.f4738g = arrayList;
        this.f4739h = new FrameData(0L, 0L, false, arrayList);
        this.f4740i = new a(jankStats, this);
    }

    public final WeakReference d() {
        return this.f4735d;
    }

    public final long e(View view) {
        return b.f4733d.b(view);
    }

    public final long f() {
        Object obj = b.f4733d.a().get(this.f4736e);
        Intrinsics.checkNotNull(obj, "null cannot be cast to non-null type kotlin.Long");
        return ((Long) obj).longValue();
    }

    public final g.b g() {
        return this.f4737f;
    }

    public final List h() {
        return this.f4738g;
    }
}

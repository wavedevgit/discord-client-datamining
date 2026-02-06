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
    private final WeakReference f5064d;

    /* renamed from: e  reason: collision with root package name */
    private final Choreographer f5065e;

    /* renamed from: f  reason: collision with root package name */
    private final g.b f5066f;

    /* renamed from: g  reason: collision with root package name */
    private final List f5067g;

    /* renamed from: h  reason: collision with root package name */
    private final FrameData f5068h;

    /* renamed from: i  reason: collision with root package name */
    private final a f5069i;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    public static final class a extends o3.f {

        /* renamed from: a  reason: collision with root package name */
        final /* synthetic */ JankStats f5070a;

        /* renamed from: b  reason: collision with root package name */
        final /* synthetic */ c f5071b;

        a(JankStats jankStats, c cVar) {
            this.f5070a = jankStats;
            this.f5071b = cVar;
        }
    }

    /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
    public c(JankStats jankStats, View view) {
        super(jankStats);
        Intrinsics.checkNotNullParameter(jankStats, "jankStats");
        Intrinsics.checkNotNullParameter(view, "view");
        this.f5064d = new WeakReference(view);
        Choreographer choreographer = Choreographer.getInstance();
        Intrinsics.checkNotNullExpressionValue(choreographer, "getInstance()");
        this.f5065e = choreographer;
        this.f5066f = g.f5084f.b(view);
        ArrayList arrayList = new ArrayList();
        this.f5067g = arrayList;
        this.f5068h = new FrameData(0L, 0L, false, arrayList);
        this.f5069i = new a(jankStats, this);
    }

    public final WeakReference d() {
        return this.f5064d;
    }

    public final long e(View view) {
        return b.f5062d.b(view);
    }

    public final long f() {
        Object obj = b.f5062d.a().get(this.f5065e);
        Intrinsics.checkNotNull(obj, "null cannot be cast to non-null type kotlin.Long");
        return ((Long) obj).longValue();
    }

    public final g.b g() {
        return this.f5066f;
    }

    public final List h() {
        return this.f5067g;
    }
}

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
    private final WeakReference f4771d;

    /* renamed from: e  reason: collision with root package name */
    private final Choreographer f4772e;

    /* renamed from: f  reason: collision with root package name */
    private final g.b f4773f;

    /* renamed from: g  reason: collision with root package name */
    private final List f4774g;

    /* renamed from: h  reason: collision with root package name */
    private final FrameData f4775h;

    /* renamed from: i  reason: collision with root package name */
    private final a f4776i;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    public static final class a extends o3.f {

        /* renamed from: a  reason: collision with root package name */
        final /* synthetic */ JankStats f4777a;

        /* renamed from: b  reason: collision with root package name */
        final /* synthetic */ c f4778b;

        a(JankStats jankStats, c cVar) {
            this.f4777a = jankStats;
            this.f4778b = cVar;
        }
    }

    /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
    public c(JankStats jankStats, View view) {
        super(jankStats);
        Intrinsics.checkNotNullParameter(jankStats, "jankStats");
        Intrinsics.checkNotNullParameter(view, "view");
        this.f4771d = new WeakReference(view);
        Choreographer choreographer = Choreographer.getInstance();
        Intrinsics.checkNotNullExpressionValue(choreographer, "getInstance()");
        this.f4772e = choreographer;
        this.f4773f = g.f4791f.b(view);
        ArrayList arrayList = new ArrayList();
        this.f4774g = arrayList;
        this.f4775h = new FrameData(0L, 0L, false, arrayList);
        this.f4776i = new a(jankStats, this);
    }

    public final WeakReference d() {
        return this.f4771d;
    }

    public final long e(View view) {
        return b.f4769d.b(view);
    }

    public final long f() {
        Object obj = b.f4769d.a().get(this.f4772e);
        Intrinsics.checkNotNull(obj, "null cannot be cast to non-null type kotlin.Long");
        return ((Long) obj).longValue();
    }

    public final g.b g() {
        return this.f4773f;
    }

    public final List h() {
        return this.f4774g;
    }
}

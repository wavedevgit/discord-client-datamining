package i4;

import android.app.Activity;
import androidx.window.layout.WindowMetrics;
import kotlin.jvm.functions.Function1;
import kotlin.jvm.internal.Intrinsics;
import kotlin.jvm.internal.Lambda;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public interface a {

    /* renamed from: a  reason: collision with root package name */
    public static final C0371a f28025a = C0371a.f28026a;

    /* renamed from: i4.a$a  reason: collision with other inner class name */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    public static final class C0371a {

        /* renamed from: a  reason: collision with root package name */
        static final /* synthetic */ C0371a f28026a = new C0371a();

        /* renamed from: b  reason: collision with root package name */
        private static Function1 f28027b = C0372a.f28028d;

        /* renamed from: i4.a$a$a  reason: collision with other inner class name */
        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
        static final class C0372a extends Lambda implements Function1 {

            /* renamed from: d  reason: collision with root package name */
            public static final C0372a f28028d = new C0372a();

            C0372a() {
                super(1);
            }

            @Override // kotlin.jvm.functions.Function1
            /* renamed from: a */
            public final a invoke(a it) {
                Intrinsics.checkNotNullParameter(it, "it");
                return it;
            }
        }

        private C0371a() {
        }

        public final a a() {
            return (a) f28027b.invoke(d.f28029b);
        }
    }

    WindowMetrics a(Activity activity);
}

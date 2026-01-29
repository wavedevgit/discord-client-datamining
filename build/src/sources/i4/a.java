package i4;

import android.app.Activity;
import androidx.window.layout.WindowMetrics;
import kotlin.jvm.functions.Function1;
import kotlin.jvm.internal.Intrinsics;
import kotlin.jvm.internal.Lambda;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public interface a {

    /* renamed from: a  reason: collision with root package name */
    public static final C0370a f28362a = C0370a.f28363a;

    /* renamed from: i4.a$a  reason: collision with other inner class name */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    public static final class C0370a {

        /* renamed from: a  reason: collision with root package name */
        static final /* synthetic */ C0370a f28363a = new C0370a();

        /* renamed from: b  reason: collision with root package name */
        private static Function1 f28364b = C0371a.f28365d;

        /* renamed from: i4.a$a$a  reason: collision with other inner class name */
        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
        static final class C0371a extends Lambda implements Function1 {

            /* renamed from: d  reason: collision with root package name */
            public static final C0371a f28365d = new C0371a();

            C0371a() {
                super(1);
            }

            @Override // kotlin.jvm.functions.Function1
            /* renamed from: a */
            public final a invoke(a it) {
                Intrinsics.checkNotNullParameter(it, "it");
                return it;
            }
        }

        private C0370a() {
        }

        public final a a() {
            return (a) f28364b.invoke(d.f28366b);
        }
    }

    WindowMetrics a(Activity activity);
}

package i4;

import android.app.Activity;
import androidx.window.layout.WindowMetrics;
import kotlin.jvm.functions.Function1;
import kotlin.jvm.internal.Intrinsics;
import kotlin.jvm.internal.Lambda;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public interface a {

    /* renamed from: a  reason: collision with root package name */
    public static final C0375a f26574a = C0375a.f26575a;

    /* renamed from: i4.a$a  reason: collision with other inner class name */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    public static final class C0375a {

        /* renamed from: a  reason: collision with root package name */
        static final /* synthetic */ C0375a f26575a = new C0375a();

        /* renamed from: b  reason: collision with root package name */
        private static Function1 f26576b = C0376a.f26577d;

        /* renamed from: i4.a$a$a  reason: collision with other inner class name */
        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
        static final class C0376a extends Lambda implements Function1 {

            /* renamed from: d  reason: collision with root package name */
            public static final C0376a f26577d = new C0376a();

            C0376a() {
                super(1);
            }

            @Override // kotlin.jvm.functions.Function1
            /* renamed from: a */
            public final a invoke(a it) {
                Intrinsics.checkNotNullParameter(it, "it");
                return it;
            }
        }

        private C0375a() {
        }

        public final a a() {
            return (a) f26576b.invoke(d.f26578b);
        }
    }

    WindowMetrics a(Activity activity);
}

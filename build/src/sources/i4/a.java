package i4;

import android.app.Activity;
import androidx.window.layout.WindowMetrics;
import kotlin.jvm.functions.Function1;
import kotlin.jvm.internal.Intrinsics;
import kotlin.jvm.internal.Lambda;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public interface a {

    /* renamed from: a  reason: collision with root package name */
    public static final C0373a f28248a = C0373a.f28249a;

    /* renamed from: i4.a$a  reason: collision with other inner class name */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    public static final class C0373a {

        /* renamed from: a  reason: collision with root package name */
        static final /* synthetic */ C0373a f28249a = new C0373a();

        /* renamed from: b  reason: collision with root package name */
        private static Function1 f28250b = C0374a.f28251d;

        /* renamed from: i4.a$a$a  reason: collision with other inner class name */
        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
        static final class C0374a extends Lambda implements Function1 {

            /* renamed from: d  reason: collision with root package name */
            public static final C0374a f28251d = new C0374a();

            C0374a() {
                super(1);
            }

            @Override // kotlin.jvm.functions.Function1
            /* renamed from: a */
            public final a invoke(a it) {
                Intrinsics.checkNotNullParameter(it, "it");
                return it;
            }
        }

        private C0373a() {
        }

        public final a a() {
            return (a) f28250b.invoke(d.f28252b);
        }
    }

    WindowMetrics a(Activity activity);
}

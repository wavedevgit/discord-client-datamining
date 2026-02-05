package i4;

import android.app.Activity;
import androidx.window.layout.WindowMetrics;
import kotlin.jvm.functions.Function1;
import kotlin.jvm.internal.Intrinsics;
import kotlin.jvm.internal.Lambda;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public interface a {

    /* renamed from: a  reason: collision with root package name */
    public static final C0378a f27237a = C0378a.f27238a;

    /* renamed from: i4.a$a  reason: collision with other inner class name */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    public static final class C0378a {

        /* renamed from: a  reason: collision with root package name */
        static final /* synthetic */ C0378a f27238a = new C0378a();

        /* renamed from: b  reason: collision with root package name */
        private static Function1 f27239b = C0379a.f27240d;

        /* renamed from: i4.a$a$a  reason: collision with other inner class name */
        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
        static final class C0379a extends Lambda implements Function1 {

            /* renamed from: d  reason: collision with root package name */
            public static final C0379a f27240d = new C0379a();

            C0379a() {
                super(1);
            }

            @Override // kotlin.jvm.functions.Function1
            /* renamed from: a */
            public final a invoke(a it) {
                Intrinsics.checkNotNullParameter(it, "it");
                return it;
            }
        }

        private C0378a() {
        }

        public final a a() {
            return (a) f27239b.invoke(d.f27241b);
        }
    }

    WindowMetrics a(Activity activity);
}

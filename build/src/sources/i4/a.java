package i4;

import android.app.Activity;
import androidx.window.layout.WindowMetrics;
import kotlin.jvm.functions.Function1;
import kotlin.jvm.internal.Intrinsics;
import kotlin.jvm.internal.Lambda;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public interface a {

    /* renamed from: a  reason: collision with root package name */
    public static final C0397a f26664a = C0397a.f26665a;

    /* renamed from: i4.a$a  reason: collision with other inner class name */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    public static final class C0397a {

        /* renamed from: a  reason: collision with root package name */
        static final /* synthetic */ C0397a f26665a = new C0397a();

        /* renamed from: b  reason: collision with root package name */
        private static Function1 f26666b = C0398a.f26667d;

        /* renamed from: i4.a$a$a  reason: collision with other inner class name */
        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
        static final class C0398a extends Lambda implements Function1 {

            /* renamed from: d  reason: collision with root package name */
            public static final C0398a f26667d = new C0398a();

            C0398a() {
                super(1);
            }

            @Override // kotlin.jvm.functions.Function1
            /* renamed from: a */
            public final a invoke(a it) {
                Intrinsics.checkNotNullParameter(it, "it");
                return it;
            }
        }

        private C0397a() {
        }

        public final a a() {
            return (a) f26666b.invoke(d.f26668b);
        }
    }

    WindowMetrics a(Activity activity);
}

package vq;

import android.os.Bundle;
import java.util.List;
import java.util.Map;
import kotlin.jvm.functions.Function1;
import kotlin.jvm.internal.Intrinsics;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public interface a {

    /* renamed from: a  reason: collision with root package name */
    public static final C0712a f51743a = C0712a.f51744a;

    /* renamed from: vq.a$a  reason: collision with other inner class name */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class C0712a {

        /* renamed from: a  reason: collision with root package name */
        static final /* synthetic */ C0712a f51744a = new C0712a();

        /* renamed from: b  reason: collision with root package name */
        private static a f51745b;

        private C0712a() {
        }

        public final a a() {
            a aVar = f51745b;
            Intrinsics.checkNotNull(aVar);
            return aVar;
        }

        public final void b(a instance) {
            Intrinsics.checkNotNullParameter(instance, "instance");
            f51745b = instance;
        }
    }

    void a(String str, Function1 function1);

    void b(Bundle bundle);

    void c(List list);

    Map d();

    void e(Bundle bundle);
}

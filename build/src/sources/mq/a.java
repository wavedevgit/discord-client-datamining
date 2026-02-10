package mq;

import android.os.Bundle;
import java.util.List;
import java.util.Map;
import kotlin.jvm.functions.Function1;
import kotlin.jvm.internal.Intrinsics;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public interface a {

    /* renamed from: a  reason: collision with root package name */
    public static final C0538a f37382a = C0538a.f37383a;

    /* renamed from: mq.a$a  reason: collision with other inner class name */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class C0538a {

        /* renamed from: a  reason: collision with root package name */
        static final /* synthetic */ C0538a f37383a = new C0538a();

        /* renamed from: b  reason: collision with root package name */
        private static a f37384b;

        private C0538a() {
        }

        public final a a() {
            a aVar = f37384b;
            Intrinsics.checkNotNull(aVar);
            return aVar;
        }

        public final void b(a instance) {
            Intrinsics.checkNotNullParameter(instance, "instance");
            f37384b = instance;
        }
    }

    void a(String str, Function1 function1);

    void b(Bundle bundle);

    void c(List list);

    Map d();

    void e(Bundle bundle);
}

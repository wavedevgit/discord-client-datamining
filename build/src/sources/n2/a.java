package n2;

import android.content.Context;
import android.content.pm.PackageManager;
import g2.c0;
import g2.e0;
import g2.l;
import kotlin.jvm.internal.DefaultConstructorMarker;
import kotlin.jvm.internal.Intrinsics;
import o2.k;
import we.a;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public abstract class a {

    /* renamed from: a  reason: collision with root package name */
    public static final C0544a f37743a = new C0544a(null);

    /* renamed from: n2.a$a  reason: collision with other inner class name */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    public static final class C0544a {
        public /* synthetic */ C0544a(DefaultConstructorMarker defaultConstructorMarker) {
            this();
        }

        private final long b(Context context) {
            PackageManager packageManager = context.getPackageManager();
            Intrinsics.checkNotNullExpressionValue(packageManager, "getPackageManager(...)");
            return packageManager.getPackageInfo("com.google.android.gms", 0).versionCode;
        }

        private final boolean c(long j10) {
            if (j10 >= 231815000) {
                return false;
            }
            return true;
        }

        public final we.a a(c0 request, Context context) {
            Intrinsics.checkNotNullParameter(request, "request");
            Intrinsics.checkNotNullParameter(context, "context");
            a.C0743a c0743a = new a.C0743a();
            long b10 = b(context);
            boolean z10 = false;
            for (l lVar : request.a()) {
                if ((lVar instanceof e0) && !z10) {
                    if (c(b10)) {
                        c0743a.e(k.f40200a.g((e0) lVar));
                    } else {
                        c0743a.d(k.f40200a.f((e0) lVar));
                    }
                    z10 = true;
                }
            }
            if (b10 > 241217000) {
                c0743a.g(request.e());
            }
            we.a a10 = c0743a.b(false).a();
            Intrinsics.checkNotNullExpressionValue(a10, "build(...)");
            return a10;
        }

        private C0544a() {
        }
    }
}

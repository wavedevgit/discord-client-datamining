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
    public static final C0521a f36748a = new C0521a(null);

    /* renamed from: n2.a$a  reason: collision with other inner class name */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    public static final class C0521a {
        public /* synthetic */ C0521a(DefaultConstructorMarker defaultConstructorMarker) {
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
            a.C0732a c0732a = new a.C0732a();
            long b10 = b(context);
            boolean z10 = false;
            for (l lVar : request.a()) {
                if ((lVar instanceof e0) && !z10) {
                    if (c(b10)) {
                        c0732a.e(k.f38527a.g((e0) lVar));
                    } else {
                        c0732a.d(k.f38527a.f((e0) lVar));
                    }
                    z10 = true;
                }
            }
            if (b10 > 241217000) {
                c0732a.g(request.e());
            }
            we.a a10 = c0732a.b(false).a();
            Intrinsics.checkNotNullExpressionValue(a10, "build(...)");
            return a10;
        }

        private C0521a() {
        }
    }
}

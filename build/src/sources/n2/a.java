package n2;

import android.content.Context;
import android.content.pm.PackageManager;
import g2.c0;
import g2.e0;
import g2.l;
import kotlin.jvm.internal.DefaultConstructorMarker;
import kotlin.jvm.internal.Intrinsics;
import o2.k;
import ve.a;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public abstract class a {

    /* renamed from: a  reason: collision with root package name */
    public static final C0526a f38446a = new C0526a(null);

    /* renamed from: n2.a$a  reason: collision with other inner class name */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    public static final class C0526a {
        public /* synthetic */ C0526a(DefaultConstructorMarker defaultConstructorMarker) {
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

        public final ve.a a(c0 request, Context context) {
            Intrinsics.checkNotNullParameter(request, "request");
            Intrinsics.checkNotNullParameter(context, "context");
            a.C0690a c0690a = new a.C0690a();
            long b10 = b(context);
            boolean z10 = false;
            for (l lVar : request.a()) {
                if ((lVar instanceof e0) && !z10) {
                    if (c(b10)) {
                        c0690a.e(k.f41470a.g((e0) lVar));
                    } else {
                        c0690a.d(k.f41470a.f((e0) lVar));
                    }
                    z10 = true;
                }
            }
            if (b10 > 241217000) {
                c0690a.g(request.e());
            }
            ve.a a10 = c0690a.b(false).a();
            Intrinsics.checkNotNullExpressionValue(a10, "build(...)");
            return a10;
        }

        private C0526a() {
        }
    }
}

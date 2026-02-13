package n4;

import android.os.Build;
import k4.m;
import k4.n;
import kotlin.jvm.internal.DefaultConstructorMarker;
import kotlin.jvm.internal.Intrinsics;
import p4.u;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public final class e extends c {

    /* renamed from: c  reason: collision with root package name */
    public static final a f37387c = new a(null);

    /* renamed from: d  reason: collision with root package name */
    private static final String f37388d;

    /* renamed from: b  reason: collision with root package name */
    private final int f37389b;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    public static final class a {
        public /* synthetic */ a(DefaultConstructorMarker defaultConstructorMarker) {
            this();
        }

        private a() {
        }
    }

    static {
        String i10 = m.i("NetworkMeteredCtrlr");
        Intrinsics.checkNotNullExpressionValue(i10, "tagWithPrefix(\"NetworkMeteredCtrlr\")");
        f37388d = i10;
    }

    /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
    public e(o4.h tracker) {
        super(tracker);
        Intrinsics.checkNotNullParameter(tracker, "tracker");
        this.f37389b = 7;
    }

    @Override // n4.c
    public int b() {
        return this.f37389b;
    }

    @Override // n4.c
    public boolean c(u workSpec) {
        Intrinsics.checkNotNullParameter(workSpec, "workSpec");
        if (workSpec.f42024j.d() == n.METERED) {
            return true;
        }
        return false;
    }

    @Override // n4.c
    /* renamed from: g */
    public boolean d(m4.c value) {
        Intrinsics.checkNotNullParameter(value, "value");
        if (Build.VERSION.SDK_INT < 26) {
            m.e().a(f37388d, "Metered network constraint is not supported before API 26, only checking for connected state.");
            if (value.a()) {
                return false;
            }
            return true;
        } else if (value.a() && value.b()) {
            return false;
        } else {
            return true;
        }
    }
}

package n4;

import k4.m;
import k4.n;
import kotlin.jvm.internal.DefaultConstructorMarker;
import kotlin.jvm.internal.Intrinsics;
import p4.u;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public final class f extends c {

    /* renamed from: c  reason: collision with root package name */
    public static final a f39755c = new a(null);

    /* renamed from: d  reason: collision with root package name */
    private static final String f39756d;

    /* renamed from: b  reason: collision with root package name */
    private final int f39757b;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    public static final class a {
        public /* synthetic */ a(DefaultConstructorMarker defaultConstructorMarker) {
            this();
        }

        private a() {
        }
    }

    static {
        String i10 = m.i("NetworkNotRoamingCtrlr");
        Intrinsics.checkNotNullExpressionValue(i10, "tagWithPrefix(\"NetworkNotRoamingCtrlr\")");
        f39756d = i10;
    }

    /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
    public f(o4.h tracker) {
        super(tracker);
        Intrinsics.checkNotNullParameter(tracker, "tracker");
        this.f39757b = 7;
    }

    @Override // n4.c
    public int b() {
        return this.f39757b;
    }

    @Override // n4.c
    public boolean c(u workSpec) {
        Intrinsics.checkNotNullParameter(workSpec, "workSpec");
        if (workSpec.f44935j.d() == n.NOT_ROAMING) {
            return true;
        }
        return false;
    }

    @Override // n4.c
    /* renamed from: g */
    public boolean d(m4.c value) {
        Intrinsics.checkNotNullParameter(value, "value");
        if (value.a() && value.c()) {
            return false;
        }
        return true;
    }
}

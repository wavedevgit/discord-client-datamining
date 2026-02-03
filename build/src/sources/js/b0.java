package js;

import kotlin.coroutines.CoroutineContext;
import kotlin.jvm.internal.DefaultConstructorMarker;
import kotlin.jvm.internal.Intrinsics;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public final class b0 extends kotlin.coroutines.a {

    /* renamed from: i  reason: collision with root package name */
    public static final a f31936i = new a(null);

    /* renamed from: e  reason: collision with root package name */
    private final String f31937e;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
    public static final class a implements CoroutineContext.b {
        public /* synthetic */ a(DefaultConstructorMarker defaultConstructorMarker) {
            this();
        }

        private a() {
        }
    }

    public b0(String str) {
        super(f31936i);
        this.f31937e = str;
    }

    public boolean equals(Object obj) {
        if (this == obj) {
            return true;
        }
        if ((obj instanceof b0) && Intrinsics.areEqual(this.f31937e, ((b0) obj).f31937e)) {
            return true;
        }
        return false;
    }

    public int hashCode() {
        return this.f31937e.hashCode();
    }

    public String toString() {
        return "CoroutineName(" + this.f31937e + ')';
    }
}

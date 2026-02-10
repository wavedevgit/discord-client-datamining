package vn;

import kotlin.jvm.internal.DefaultConstructorMarker;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class f extends d {

    /* renamed from: c  reason: collision with root package name */
    public static final a f51653c = new a(null);

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class a implements tn.b {
        public /* synthetic */ a(DefaultConstructorMarker defaultConstructorMarker) {
            this();
        }

        @Override // tn.b
        public String a() {
            return "onWillDisappear";
        }

        @Override // tn.b
        public String getEventName() {
            return "topWillDisappear";
        }

        private a() {
        }
    }

    public f(int i10, int i11) {
        super(i10, i11, "topWillDisappear", "onWillDisappear");
    }
}

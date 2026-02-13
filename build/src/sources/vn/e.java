package vn;

import kotlin.jvm.internal.DefaultConstructorMarker;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class e extends d {

    /* renamed from: c  reason: collision with root package name */
    public static final a f52221c = new a(null);

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class a implements tn.b {
        public /* synthetic */ a(DefaultConstructorMarker defaultConstructorMarker) {
            this();
        }

        @Override // tn.b
        public String a() {
            return "onWillAppear";
        }

        @Override // tn.b
        public String getEventName() {
            return "topWillAppear";
        }

        private a() {
        }
    }

    public e(int i10, int i11) {
        super(i10, i11, "topWillAppear", "onWillAppear");
    }
}
